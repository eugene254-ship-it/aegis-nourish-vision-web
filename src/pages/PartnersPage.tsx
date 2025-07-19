import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building, Heart, Globe, Code, Truck, University, Award, Users, Mail, Phone } from "lucide-react";

const PartnersPage = () => {
  const institutionalPartners = [
    {
      category: "UN Organizations",
      partners: ["World Food Programme", "UNICEF", "WHO", "FAO Innovation Accelerator"],
      icon: Globe
    },
    {
      category: "Governments",
      partners: ["UAE Ministry of Health", "Nigeria Federal Ministry", "Bangladesh Health Ministry"],
      icon: Building
    },
    {
      category: "NGOs & Foundations",
      partners: ["Gates Foundation", "Mercy Corps", "Action Against Hunger", "Save the Children"],
      icon: Heart
    },
    {
      category: "Technology Partners",
      partners: ["Microsoft AI for Good", "Google.org", "Amazon Web Services", "Blockchain for Good"],
      icon: Code
    },
    {
      category: "Supply Chain",
      partners: ["DHL Logistics", "Maersk", "Local Farming Cooperatives", "Cold Chain Solutions"],
      icon: Truck
    },
    {
      category: "Research Institutions",
      partners: ["MIT AgTech", "Oxford Nutrition", "Harvard Global Health", "Stanford AI Lab"],
      icon: University
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "Director, Global Nutrition Initiative",
      organization: "World Food Programme",
      quote: "Aegis Nourish has revolutionized how we approach nutrition security. Their AI-powered platform has enabled us to reach 40% more beneficiaries with the same resources.",
      impact: "2x efficiency improvement"
    },
    {
      name: "Prof. Ahmed Hassan",
      title: "Director of Public Health",
      organization: "UAE Ministry of Health",
      quote: "The blockchain transparency and real-time monitoring capabilities have transformed our ability to track and verify nutrition program outcomes across our regions.",
      impact: "95% program transparency"
    },
    {
      name: "Maria Rodriguez",
      title: "Country Director",
      organization: "Save the Children Bangladesh",
      quote: "Working with Aegis Nourish has allowed us to prevent malnutrition crises before they occur. Their predictive models are incredibly accurate and actionable.",
      impact: "60% reduction in malnutrition"
    }
  ];

  const partnershipTypes = [
    {
      type: "Implementation Partners",
      description: "Organizations delivering programs directly to communities",
      benefits: ["Access to AI platform", "Training and capacity building", "Joint impact measurement"],
      requirements: ["Established field presence", "Community trust", "Data sharing capability"]
    },
    {
      type: "Technology Partners",
      description: "Companies providing technical infrastructure and innovation",
      benefits: ["Co-development opportunities", "Scaling platform access", "Revenue sharing models"],
      requirements: ["Technical expertise", "Scalable solutions", "Ethical AI commitment"]
    },
    {
      type: "Funding Partners",
      description: "Investors and donors supporting our mission",
      benefits: ["Measurable impact reports", "Tax benefits", "Global recognition"],
      requirements: ["Mission alignment", "Long-term commitment", "Transparency acceptance"]
    },
    {
      type: "Research Partners",
      description: "Academic institutions advancing nutrition science",
      benefits: ["Access to real-world data", "Publication opportunities", "Grant collaboration"],
      requirements: ["Research excellence", "Ethical standards", "Open science approach"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-sage/10 to-earth/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Our Global Partners
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Building a world without malnutrition requires collaboration. Meet the organizations, governments, and innovators who share our mission and amplify our impact.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button size="lg">
                  Become a Partner
                </Button>
                <Button variant="outline" size="lg">
                  Partnership Guidelines
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Partner Ecosystem</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {institutionalPartners.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-sage/10 rounded-lg">
                          <IconComponent className="w-6 h-6 text-sage" />
                        </div>
                        <CardTitle className="text-lg">{category.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {category.partners.map((partner, idx) => (
                          <div key={idx} className="p-2 bg-muted/30 rounded text-sm">
                            {partner}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partner Testimonials */}
        <section className="py-20 bg-gradient-to-br from-earth/5 to-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Partners Say</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-sage" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.title}</CardDescription>
                        <Badge variant="outline" className="mt-1">
                          {testimonial.organization}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-muted-foreground italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="p-3 bg-sage/5 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-sage" />
                        <span className="font-semibold text-sage text-sm">
                          Impact: {testimonial.impact}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {partnershipTypes.map((partnership, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{partnership.type}</CardTitle>
                    <CardDescription>{partnership.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-sage">Benefits:</h4>
                        <div className="space-y-1">
                          {partnership.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-sage rounded-full"></div>
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-clay">Requirements:</h4>
                        <div className="space-y-1">
                          {partnership.requirements.map((requirement, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-clay rounded-full"></div>
                              <span className="text-sm">{requirement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Inquiry Form */}
        <section className="py-20 bg-gradient-to-br from-sage/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Partnership Inquiry</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Ready to Make a Difference Together?</CardTitle>
                  <CardDescription>
                    Fill out this form and our partnership team will connect with you within 48 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Organization Name</label>
                        <Input placeholder="Enter organization name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Partnership Type</label>
                        <Input placeholder="Implementation, Technology, etc." />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Contact Person</label>
                        <Input placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Role/Title</label>
                        <Input placeholder="Your position" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input type="email" placeholder="contact@organization.org" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Phone</label>
                        <Input placeholder="+1 (555) 123-4567" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">How would you like to partner with us?</label>
                      <Textarea 
                        placeholder="Describe your organization's mission, capabilities, and how you envision working together..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Submit Partnership Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Mail className="w-6 h-6 text-sage" />
                      Partnership Team
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      For partnership inquiries and collaboration opportunities
                    </p>
                    <p className="font-medium">partnerships@aegisnourish.org</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Phone className="w-6 h-6 text-sage" />
                      Regional Offices
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <p><strong>UAE:</strong> +971 4 123 4567</p>
                      <p><strong>Nigeria:</strong> +234 1 234 5678</p>
                      <p><strong>Bangladesh:</strong> +880 2 123 4567</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PartnersPage;