import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { amount, provider, currency } = await req.json();

    if (!amount || !provider) {
      throw new Error('Missing required parameters');
    }

    console.log('Processing donation:', { amount, provider, currency });

    // Initialize Supabase client for auth
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Get authenticated user (optional for donations)
    const authHeader = req.headers.get("Authorization");
    let user = null;
    
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      const { data } = await supabaseClient.auth.getUser(token);
      user = data.user;
    }

    const donorEmail = user?.email || "anonymous@donor.com";
    const successUrl = `${req.headers.get("origin") || "https://aegisnourish.com"}/donation-success`;
    const cancelUrl = `${req.headers.get("origin") || "https://aegisnourish.com"}/`;

    let paymentUrl = "";

    if (provider === 'paystack') {
      // Paystack donation initialization
      const paystackSecretKey = Deno.env.get("PAYSTACK_SECRET_KEY");
      if (!paystackSecretKey) {
        throw new Error("Paystack secret key not configured");
      }

      const paystackResponse = await fetch("https://api.paystack.co/transaction/initialize", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${paystackSecretKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: donorEmail,
          amount: amount, // Amount in kobo (cents)
          currency: currency || "USD",
          callback_url: successUrl,
          metadata: {
            type: "donation",
            user_id: user?.id || "anonymous",
            custom_fields: [
              {
                display_name: "Type",
                variable_name: "type",
                value: "donation"
              }
            ]
          }
        }),
      });

      const paystackData = await paystackResponse.json();
      
      if (!paystackData.status) {
        throw new Error(`Paystack error: ${paystackData.message}`);
      }

      paymentUrl = paystackData.data.authorization_url;

    } else if (provider === 'paypal') {
      // PayPal donation initialization
      const paypalClientId = Deno.env.get("PAYPAL_CLIENT_ID");
      const paypalClientSecret = Deno.env.get("PAYPAL_CLIENT_SECRET");
      
      if (!paypalClientId || !paypalClientSecret) {
        throw new Error("PayPal credentials not configured");
      }

      // Get PayPal access token
      const auth = btoa(`${paypalClientId}:${paypalClientSecret}`);
      const tokenResponse = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
        method: "POST",
        headers: {
          "Authorization": `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
      });

      const tokenData = await tokenResponse.json();
      
      if (!tokenData.access_token) {
        throw new Error("Failed to get PayPal access token");
      }

      // Create PayPal order
      const orderResponse = await fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${tokenData.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          intent: "CAPTURE",
          purchase_units: [
            {
              reference_id: `donation-${Date.now()}`,
              amount: {
                currency_code: currency || "USD",
                value: (amount / 100).toFixed(2), // Convert cents to dollars
              },
              description: "Donation to Aegis Nourish Sustainable Technology Initiative",
            },
          ],
          application_context: {
            return_url: successUrl,
            cancel_url: cancelUrl,
            brand_name: "Aegis Nourish",
            landing_page: "BILLING",
            user_action: "PAY_NOW",
          },
        }),
      });

      const orderData = await orderResponse.json();
      
      if (orderData.status !== "CREATED") {
        throw new Error(`PayPal error: ${orderData.message || 'Failed to create order'}`);
      }

      paymentUrl = orderData.links.find((link: any) => link.rel === "approve")?.href;
      
      if (!paymentUrl) {
        throw new Error("PayPal approval URL not found");
      }
    } else {
      throw new Error("Unsupported payment provider");
    }

    // Log the donation (optional)
    const supabaseService = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    await supabaseService.from("analytics_events").insert({
      event_type: "donation_initiated",
      user_id: user?.id,
      event_data: {
        amount: amount,
        provider: provider,
        currency: currency,
        donor_email: donorEmail
      }
    });

    return new Response(JSON.stringify({ url: paymentUrl }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error('Donation payment error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});