import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Download } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get('plan');
  const type = searchParams.get('type') || 'subscription';

  useEffect(() => {
    // Track successful payment
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'purchase', {
        transaction_id: Date.now().toString(),
        value: plan ? 99 : 25, // Default values
        currency: 'USD',
        items: [{
          item_id: plan || 'donation',
          item_name: plan ? `${plan} Plan` : 'Donation',
          category: type,
          quantity: 1,
        }]
      });
    }
  }, [plan, type]);

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-600">
            {type === 'donation' ? 'Thank You!' : 'Payment Successful!'}
          </CardTitle>
          <CardDescription>
            {type === 'donation' 
              ? 'Your donation has been processed successfully.'
              : `Your ${plan} plan subscription has been activated.`
            }
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-800">
              {type === 'donation' 
                ? 'Your contribution helps us build sustainable technology solutions for a better world.'
                : 'You now have access to all premium features. Welcome to the Aegis Nourish community!'
              }
            </p>
          </div>

          {type !== 'donation' && (
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Next Steps:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Access your dashboard to explore new features</li>
                <li>• Set up your team and customize settings</li>
                <li>• Contact support if you need assistance</li>
              </ul>
            </div>
          )}

          <div className="space-y-3 pt-4">
            <Link to="/dashboard">
              <Button className="w-full">
                Go to Dashboard
              </Button>
            </Link>
            
            <Link to="/">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <Button variant="ghost" className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Download Receipt
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSuccessPage;