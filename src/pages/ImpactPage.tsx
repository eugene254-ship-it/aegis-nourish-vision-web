import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MapPin, Users, Heart, TrendingUp, Globe, Target, Award, Calendar } from "lucide-react";

const ImpactPage = () => {
  const globalMetrics = [
    {
      icon: Users,
      value: "1.2M+",
      label: "Lives Impacted",
      description: "People reached through our nutrition programs",
      progress: 75,
      target: "10M by 2030"
    },
    {
      icon: Globe,
      value: "16",
      label: "Nations Served",
      description: "Countries with active Aegis Nourish programs",
      progress: 32,
      target: "50 nations by 2030"
    },
    {
      icon: Heart,
      value: "45%",
      label: "Malnutrition Reduction",
      description: "Average decrease in partner communities",
      progress: 45,
      target: "80% reduction target"
    },
    {
      icon: TrendingUp,
      value: "800+",
      label: "Farmers Supported",
      description: "Local farmers in our supply network",
      progress: 60,
      target: "5,000 by 2027"
    }
  ];

  const regionalImpact = [
    {
      region: "Sub-Saharan Africa",
      countries: ["Nigeria", "Kenya", "Ghana", "Ethiopia", "Tanzania"],
      beneficiaries: "650,000",
      programs: ["Maternal nutrition", "Child feeding", "Farmer support"],
      highlight: "40% reduction in child malnutrition in pilot areas"
    },
    {
      region: "South Asia",
      countries: ["Bangladesh", "Pakistan", "Sri Lanka"],
      beneficiaries: "380,000",
      programs: ["School feeding", "Community gardens", "Digital health"],
      highlight: "60% improvement in maternal health outcomes"
    },
    {
      region: "Southeast Asia",
      countries: ["Indonesia", "Philippines", "Vietnam"],
      beneficiaries: "170,000",
      programs: ["Climate resilience", "Aquaculture nutrition", "Tech training"],
      highlight: "85% adoption rate of AI nutrition tools"
    }
  ];

  const impactStories = [
    {
      name: "Aisha's Market Revolution",
      location: "Lagos, Nigeria",
      impact: "Transformed local food distribution for 15,000 families",
      description: "Our blockchain-powered supply chain helped Aisha eliminate food waste and provide fresh nutrition to her community.",
      metrics: ["50% reduction in food waste", "30% increase in family income", "95% customer satisfaction"]
    },
    {
      name: "Smart Farming Collective",
      location: "Rural Bangladesh",
      impact: "AI-guided agriculture supporting 200 farming families",
      description: "Climate-smart farming techniques and AI crop predictions increased yields while preserving soil health.",
      metrics: ["40% yield increase", "60% water conservation", "Zero chemical fertilizers"]
    },
    {
      name: "Digital Health Champions",
      location: "Metro Manila, Philippines",
      impact: "Community health workers using AI nutrition guidance",
      description: "Trained 500 health workers to use our digital platform for personalized nutrition counseling.",
      metrics: ["500 health workers trained", "25,000 consultations", "90% accuracy rate"]
    }
  ];

  const sdgAlignment = [
    { sdg: "SDG 1", title: "No Poverty", progress: 65 },
    { sdg: "SDG 2", title: "Zero Hunger", progress: 80 },
    { sdg: "SDG 3", title: "Good Health", progress: 70 },
    { sdg: "SDG 5", title: "Gender Equality", progress: 75 },
    { sdg: "SDG 13", title: "Climate Action", progress: 60 },
    { sdg: "SDG 17", title: "Partnerships", progress: 85 }
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
                Our Global Impact
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transforming lives through data-driven nutrition solutions. See how our AI-powered platform is creating measurable change across communities worldwide.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button size="lg">
                  View Real-Time Data
                </Button>
                <Button variant="outline" size="lg">
                  Download Impact Report
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Global Metrics */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Impact at Scale</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto p-3 bg-sage/10 rounded-full w-fit mb-4">
                        <IconComponent className="w-8 h-8 text-sage" />
                      </div>
                      <CardTitle className="text-3xl font-bold text-sage">{metric.value}</CardTitle>
                      <CardDescription className="font-semibold text-foreground">{metric.label}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{metric.description}</p>
                      <Progress value={metric.progress} className="mb-2" />
                      <p className="text-xs text-muted-foreground">{metric.target}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Regional Impact Map */}
        <section className="py-20 bg-gradient-to-br from-earth/5 to-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Regional Impact Overview</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {regionalImpact.map((region, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-clay" />
                      {region.region}
                    </CardTitle>
                    <CardDescription>
                      <strong>{region.beneficiaries}</strong> beneficiaries across {region.countries.length} countries
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Countries:</h4>
                        <div className="flex flex-wrap gap-1">
                          {region.countries.map((country, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {country}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Programs:</h4>
                        <div className="space-y-1">
                          {region.programs.map((program, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-sage rounded-full"></div>
                              <span className="text-sm">{program}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="p-3 bg-sage/5 rounded-lg">
                        <p className="text-sm font-medium text-sage">{region.highlight}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Stories from the Field</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {impactStories.map((story, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{story.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {story.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-clay/5 rounded-lg">
                        <p className="font-semibold text-clay text-sm">{story.impact}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{story.description}</p>
                      <div className="space-y-2">
                        {story.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-sage" />
                            <span className="text-sm">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SDG Alignment */}
        <section className="py-20 bg-gradient-to-br from-sage/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">SDG Alignment Tracker</h2>
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-3">
                    <Target className="w-8 h-8 text-sage" />
                    UN Sustainable Development Goals Progress
                  </CardTitle>
                  <CardDescription>
                    Our contribution to achieving the United Nations Sustainable Development Goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {sdgAlignment.map((goal, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-sm">{goal.sdg}: {goal.title}</span>
                          <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Impact</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every contribution multiplies our impact. Whether through partnership, volunteering, or funding, 
                you can help us reach our goal of ending malnutrition by 2030.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button size="lg">
                  Become a Partner
                </Button>
                <Button variant="outline" size="lg">
                  Donate Now
                </Button>
                <Button variant="outline" size="lg">
                  Volunteer
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ImpactPage;