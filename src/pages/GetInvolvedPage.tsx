import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, Users, Brain, Code, Camera, Globe, MapPin, Calendar, DollarSign, Gift } from "lucide-react";

const GetInvolvedPage = () => {
  const volunteerOpportunities = [
    {
      icon: Heart,
      title: "Community Health Advocate",
      location: "Remote & Field",
      commitment: "10-15 hours/week",
      description: "Support nutrition education and health monitoring in underserved communities",
      skills: ["Communication", "Empathy", "Local language helpful"],
      regions: ["Sub-Saharan Africa", "South Asia", "Southeast Asia"]
    },
    {
      icon: Brain,
      title: "AI Ethics Reviewer",
      location: "Remote",
      commitment: "5-8 hours/week",
      description: "Review AI models for bias and ensure ethical deployment of nutrition algorithms",
      skills: ["AI/ML knowledge", "Ethics background", "Critical thinking"],
      regions: ["Global"]
    },
    {
      icon: Code,
      title: "Tech for Good Developer",
      location: "Remote",
      commitment: "15-20 hours/week",
      description: "Contribute to open-source nutrition platform development",
      skills: ["JavaScript", "Python", "React", "Blockchain"],
      regions: ["Global"]
    },
    {
      icon: Camera,
      title: "Impact Storyteller",
      location: "Field & Remote",
      commitment: "8-12 hours/week",
      description: "Document and share stories of transformation from our communities",
      skills: ["Photography", "Writing", "Video editing"],
      regions: ["Africa", "Asia", "Latin America"]
    },
    {
      icon: Users,
      title: "Regional Coordinator",
      location: "Field",
      commitment: "20+ hours/week",
      description: "Lead program implementation and community partnerships in assigned regions",
      skills: ["Leadership", "Project management", "Cultural sensitivity"],
      regions: ["Nigeria", "Bangladesh", "Philippines"]
    },
    {
      icon: Globe,
      title: "Policy Research Analyst",
      location: "Remote",
      commitment: "10-15 hours/week",
      description: "Research nutrition policies and advocate for systemic change",
      skills: ["Policy analysis", "Research", "Writing"],
      regions: ["Global"]
    }
  ];

  const donationOptions = [
    {
      amount: "$25",
      impact: "Provides AI nutrition analysis for 50 children",
      icon: Heart
    },
    {
      amount: "$100",
      impact: "Supports one family's nutrition for a month",
      icon: Users
    },
    {
      amount: "$500",
      impact: "Trains 10 community health workers",
      icon: Brain
    },
    {
      amount: "$1,500",
      impact: "Deploys blockchain tracking in one village",
      icon: Globe
    }
  ];

  const fellowshipProgram = {
    title: "Aegis Fellowship for Young Innovators",
    description: "6-month program for emerging leaders in nutrition technology and social impact",
    benefits: [
      "$5,000 monthly stipend",
      "Mentorship from industry leaders",
      "Access to AI/blockchain tools",
      "Global network of changemakers",
      "Project funding up to $25,000"
    ],
    eligibility: [
      "Age 18-30",
      "Passion for nutrition/health",
      "Technical or social innovation background",
      "Commitment to underserved communities"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-sage/10 to-earth/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Join the Movement
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Whether you're a technologist, community leader, or global citizen, there's a place for you in our mission to end malnutrition. Every contribution creates ripple effects of positive change.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button size="lg">
                  Start Volunteering
                </Button>
                <Button variant="outline" size="lg">
                  Donate Now
                </Button>
                <Button variant="outline" size="lg">
                  Apply for Fellowship
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Volunteer Opportunities</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {volunteerOpportunities.map((opportunity, index) => {
                const IconComponent = opportunity.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-sage/10 rounded-lg">
                          <IconComponent className="w-6 h-6 text-sage" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                          <CardDescription className="flex items-center gap-4 mt-2">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {opportunity.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {opportunity.commitment}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Required Skills:</h4>
                          <div className="flex flex-wrap gap-1">
                            {opportunity.skills.map((skill, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Regions:</h4>
                          <div className="flex flex-wrap gap-1">
                            {opportunity.regions.map((region, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {region}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Button className="w-full mt-4">Apply Now</Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Donation Options */}
        <section className="py-20 bg-gradient-to-br from-earth/5 to-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Make a Donation</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {donationOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="mx-auto p-3 bg-clay/10 rounded-full w-fit mb-2">
                          <IconComponent className="w-6 h-6 text-clay" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-clay">{option.amount}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{option.impact}</p>
                        <Button variant="outline" className="w-full mt-4">
                          Donate {option.amount}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Custom Donation Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Gift className="w-6 h-6 text-sage" />
                    Custom Donation
                  </CardTitle>
                  <CardDescription>
                    Every dollar is tracked on blockchain for complete transparency
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Donation Amount</label>
                        <Input type="number" placeholder="Enter amount" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Donation Type</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="one-time">One-time</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                            <SelectItem value="annual">Annual</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Focus Area (Optional)</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose focus area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Operations</SelectItem>
                          <SelectItem value="maternal">Maternal Health</SelectItem>
                          <SelectItem value="technology">Technology Development</SelectItem>
                          <SelectItem value="farmers">Farmer Support</SelectItem>
                          <SelectItem value="emergency">Emergency Response</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="anonymous" />
                      <label htmlFor="anonymous" className="text-sm font-medium">
                        Make this donation anonymous
                      </label>
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Secure Donation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fellowship Program */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Aegis Fellowship Program</h2>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">{fellowshipProgram.title}</CardTitle>
                  <CardDescription className="text-base">{fellowshipProgram.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-sage">Program Benefits:</h4>
                      <div className="space-y-2">
                        {fellowshipProgram.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-sage rounded-full"></div>
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-clay">Eligibility Criteria:</h4>
                      <div className="space-y-2">
                        {fellowshipProgram.eligibility.map((criteria, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-clay rounded-full"></div>
                            <span className="text-sm">{criteria}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <Button size="lg">
                      Apply for Fellowship
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                      Applications close March 31, 2024
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Regional Hosting */}
        <section className="py-20 bg-gradient-to-br from-sage/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Host Aegis Nourish in Your Region</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Bring Our Programs to Your Community</CardTitle>
                  <CardDescription>
                    Partner with us to establish Aegis Nourish programs in your region. We provide the technology, training, and support.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Organization/Government</label>
                        <Input placeholder="Your organization name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Target Region</label>
                        <Input placeholder="City, State/Province, Country" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Population Size</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select population" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Under 50,000</SelectItem>
                            <SelectItem value="medium">50,000 - 500,000</SelectItem>
                            <SelectItem value="large">500,000 - 2M</SelectItem>
                            <SelectItem value="mega">Over 2M</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Malnutrition Rate</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Current rate if known" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Under 15%</SelectItem>
                            <SelectItem value="moderate">15-30%</SelectItem>
                            <SelectItem value="high">30-50%</SelectItem>
                            <SelectItem value="severe">Over 50%</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Regional Challenges & Goals</label>
                      <Textarea 
                        placeholder="Describe the specific nutrition challenges in your region and what you hope to achieve..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Submit Regional Proposal
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetInvolvedPage;