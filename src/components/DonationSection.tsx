import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Heart, Globe, Leaf, Users } from "lucide-react";

const DonationSection = () => {
  const [customAmount, setCustomAmount] = useState('');
  const [loading, setLoading] = useState<string | null>(null);
  const { toast } = useToast();

  const presetAmounts = [25, 50, 100, 250, 500];
  
  const impactAreas = [
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Supporting sustainable technology and green initiatives"
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Empowering local communities with tech solutions"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expanding our platform to underserved regions"
    }
  ];

  const handleDonation = async (amount: number, provider: 'paystack' | 'paypal') => {
    if (amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    setLoading(`${amount}-${provider}`);
    
    try {
      const { data, error } = await supabase.functions.invoke('create-donation', {
        body: {
          amount: amount * 100, // Convert to cents
          provider,
          currency: 'USD'
        }
      });

      if (error) throw error;

      if (data?.url) {
        // Open payment in new tab
        window.open(data.url, '_blank');
      }
    } catch (error) {
      toast({
        title: "Donation Error",
        description: "Failed to process donation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(null);
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Support Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help us build a sustainable future through innovative technology. 
            Every donation contributes to creating positive global impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="w-5 h-5 mr-2 text-primary" />
                Make a Donation
              </CardTitle>
              <CardDescription>
                Choose an amount or enter a custom donation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Preset Amounts */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Quick Amount
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {presetAmounts.map((amount) => (
                    <div key={amount} className="space-y-2">
                      <Badge variant="outline" className="w-full justify-center py-2">
                        ${amount}
                      </Badge>
                      <div className="space-y-1">
                        <Button
                          size="sm"
                          className="w-full text-xs"
                          onClick={() => handleDonation(amount, 'paystack')}
                          disabled={loading === `${amount}-paystack`}
                        >
                          {loading === `${amount}-paystack` ? "..." : "Paystack"}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full text-xs"
                          onClick={() => handleDonation(amount, 'paypal')}
                          disabled={loading === `${amount}-paypal`}
                        >
                          {loading === `${amount}-paypal` ? "..." : "PayPal"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="border-t pt-6">
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Custom Amount
                </label>
                <div className="space-y-3">
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-muted-foreground">$</span>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="pl-8"
                      min="1"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      onClick={() => handleDonation(parseFloat(customAmount) || 0, 'paystack')}
                      disabled={!customAmount || loading === `${customAmount}-paystack`}
                    >
                      {loading === `${customAmount}-paystack` ? "Processing..." : "Donate via Paystack"}
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => handleDonation(parseFloat(customAmount) || 0, 'paypal')}
                      disabled={!customAmount || loading === `${customAmount}-paypal`}
                    >
                      {loading === `${customAmount}-paypal` ? "Processing..." : "Donate via PayPal"}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="text-xs text-muted-foreground text-center pt-4 border-t">
                Your donation is secure and helps fund our sustainable technology initiatives.
              </div>
            </CardContent>
          </Card>

          {/* Impact Areas */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Your Impact
              </h3>
              <p className="text-muted-foreground mb-6">
                See how your donation contributes to our mission of creating 
                sustainable technology solutions for a better world.
              </p>
            </div>

            <div className="space-y-4">
              {impactAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            {area.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  100% Transparency
                </h4>
                <p className="text-sm text-muted-foreground">
                  Track exactly how your donation is used through our 
                  real-time impact dashboard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;