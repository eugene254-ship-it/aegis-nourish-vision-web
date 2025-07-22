import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Phone, Building, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save lead to the database
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            service: formData.service,
            message: formData.message
          }
        ]);

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground">
            Get started with Aegis Nourish's ultra tech solutions today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  Get in Touch
                </CardTitle>
                <CardDescription>
                  Ready to revolutionize your operations with our ultra tech platform?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contact@aegisnourish.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose Aegis Nourish?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AI-powered analytics and automation</li>
                  <li>• Quantum-enhanced processing capabilities</li>
                  <li>• 24/7 real-time monitoring</li>
                  <li>• Enterprise-grade security</li>
                  <li>• Dedicated customer success team</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Start Your Journey</CardTitle>
              <CardDescription>
                Tell us about your needs and we'll create a custom solution.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Business Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>

                <Select onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Service of Interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai-analytics">AI Analytics Platform</SelectItem>
                    <SelectItem value="quantum-processing">Quantum Processing</SelectItem>
                    <SelectItem value="real-time-monitoring">Real-time Monitoring</SelectItem>
                    <SelectItem value="custom-solution">Custom Solution</SelectItem>
                    <SelectItem value="enterprise-package">Enterprise Package</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Tell us about your specific needs, current challenges, and goals..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  required
                />

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;