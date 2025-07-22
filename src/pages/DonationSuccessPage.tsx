import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft, Share2, Download } from "lucide-react";
import { Link } from "react-router-dom";

const DonationSuccessPage = () => {
  useEffect(() => {
    // Track successful donation
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'donation', {
        transaction_id: Date.now().toString(),
        value: 25, // Default value
        currency: 'USD',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl text-primary">
            Thank You for Your Donation!
          </CardTitle>
          <CardDescription>
            Your generous contribution helps us build sustainable technology solutions.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Your Impact</h4>
            <p className="text-sm text-muted-foreground">
              Your donation directly supports our mission to create innovative 
              technology that benefits communities worldwide and protects our environment.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-foreground">What happens next?</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                You'll receive a receipt via email for tax purposes
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Your donation will be allocated to our current initiatives
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                You'll receive updates on the impact of your contribution
              </li>
            </ul>
          </div>

          <div className="space-y-3 pt-4">
            <Button className="w-full">
              <Share2 className="w-4 h-4 mr-2" />
              Share Your Impact
            </Button>
            
            <Button variant="outline" className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Download Receipt
            </Button>
            
            <Link to="/">
              <Button variant="ghost" className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="text-center pt-4 border-t">
            <p className="text-xs text-muted-foreground">
              Questions about your donation? Contact us at{" "}
              <a href="mailto:support@aegisnourish.com" className="text-primary hover:underline">
                support@aegisnourish.com
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonationSuccessPage;