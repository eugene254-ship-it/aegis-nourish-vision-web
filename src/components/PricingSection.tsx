import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const PricingSection = () => {
  const [loading, setLoading] = useState<string | null>(null);
  const { toast } = useToast();

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 99,
      description: 'Perfect for small teams getting started',
      icon: Zap,
      features: [
        'AI-powered analytics',
        'Real-time monitoring',
        '5 team members',
        'Basic support',
        '10GB storage'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 299,
      description: 'Ideal for growing businesses',
      icon: Crown,
      features: [
        'Advanced AI insights',
        'Quantum processing',
        '25 team members',
        'Priority support',
        '100GB storage',
        'Custom integrations'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 799,
      description: 'For large organizations',
      icon: Rocket,
      features: [
        'Full AI suite',
        'Dedicated quantum cluster',
        'Unlimited team members',
        '24/7 dedicated support',
        'Unlimited storage',
        'White-label options',
        'Custom development'
      ],
      popular: false
    }
  ];

  const handlePayment = async (planId: string, amount: number, provider: 'paystack' | 'paypal') => {
    setLoading(`${planId}-${provider}`);
    
    try {
      const { data, error } = await supabase.functions.invoke('create-subscription', {
        body: {
          planId,
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
        title: "Payment Error",
        description: "Failed to initiate payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(null);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Ultra Tech Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scale your operations with our AI-powered platform. From startups to enterprises,
            we have the perfect solution for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card key={plan.id} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => handlePayment(plan.id, plan.price, 'paystack')}
                      disabled={loading === `${plan.id}-paystack`}
                    >
                      {loading === `${plan.id}-paystack` ? "Processing..." : "Pay with Paystack"}
                    </Button>
                    
                    <Button
                      className="w-full"
                      variant="outline"
                      onClick={() => handlePayment(plan.id, plan.price, 'paypal')}
                      disabled={loading === `${plan.id}-paypal`}
                    >
                      {loading === `${plan.id}-paypal` ? "Processing..." : "Pay with PayPal"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial. No credit card required to start.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;