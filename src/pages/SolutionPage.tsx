import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Link, Smartphone, Satellite, Heart, Leaf, Users, BarChart3 } from "lucide-react";

const SolutionPage = () => {
  const techStack = [
    {
      icon: Brain,
      title: "AI Nutrition Intelligence",
      description: "Machine learning models that analyze dietary patterns, predict malnutrition risks, and recommend personalized nutrition interventions",
      features: ["Predictive malnutrition modeling", "Personalized meal planning", "Cultural food preferences", "Nutrient optimization"]
    },
    {
      icon: Link,
      title: "Blockchain Transparency",
      description: "Immutable food supply chain tracking from farm to table, ensuring transparency and preventing corruption",
      features: ["Supply chain visibility", "Smart contracts", "Donation tracking", "Impact verification"]
    },
    {
      icon: Smartphone,
      title: "Digital Food Equity Wallet",
      description: "Mobile-first platform enabling caregivers to access nutrition resources, track family health, and receive AI guidance",
      features: ["Offline functionality", "Multi-language support", "Health tracking", "Community networks"]
    },
    {
      icon: Satellite,
      title: "Agro-climatic Forecasting",
      description: "Satellite data and climate models predict crop yields, weather patterns, and food security risks",
      features: ["Weather prediction", "Crop yield forecasting", "Climate adaptation", "Early warning systems"]
    }
  ];

  const impactLayers = [
    {
      icon: Heart,
      title: "Maternal Health",
      description: "Targeted nutrition support for pregnant and nursing mothers",
      metrics: ["40% reduction in maternal malnutrition", "60% improvement in birth outcomes", "85% user satisfaction rate"]
    },
    {
      icon: Leaf,
      title: "Climate Resilience",
      description: "Building food systems that adapt to climate change",
      metrics: ["30% reduction in food waste", "50% improvement in crop diversity", "25% carbon footprint reduction"]
    },
    {
      icon: Users,
      title: "Farmer Empowerment",
      description: "Direct support and fair pricing for local farmers",
      metrics: ["35% increase in farmer income", "800+ farmers supported", "95% retention rate"]
    }
  ];

  const sustainabilityFeatures = [
    "Carbon-negative food distribution",
    "Regenerative agriculture support",
    "Circular economy integration",
    "Biodiversity preservation",
    "Water conservation optimization",
    "Renewable energy powered operations"
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
                The Aegis Nourish Solution
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The world's first integrated AI-powered nutrition security platform, combining cutting-edge technology with community-driven solutions to end malnutrition.
              </p>
              <Button size="lg" className="mr-4">
                Explore Technology
              </Button>
              <Button variant="outline" size="lg">
                View Impact Data
              </Button>
            </div>
          </div>
        </section>

        {/* Nourish Intelligence Stack */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nourish Intelligence Stack</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {techStack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-sage/10 rounded-lg">
                          <IconComponent className="w-8 h-8 text-sage" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{tech.title}</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-base">{tech.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {tech.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-sage rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
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

        {/* Impact Layers */}
        <section className="py-20 bg-gradient-to-br from-earth/5 to-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Impact Layers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {impactLayers.map((layer, index) => {
                const IconComponent = layer.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto p-4 bg-clay/10 rounded-full w-fit mb-4">
                        <IconComponent className="w-10 h-10 text-clay" />
                      </div>
                      <CardTitle className="text-xl">{layer.title}</CardTitle>
                      <CardDescription>{layer.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {layer.metrics.map((metric, idx) => (
                          <Badge key={idx} variant="outline" className="block text-xs py-2">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sustainability Scoreboard */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Sustainability Scoreboard</h2>
              <Card className="bg-gradient-to-br from-sage/5 to-earth/5 border-sage/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-3">
                    <BarChart3 className="w-8 h-8 text-sage" />
                    Environmental Impact Metrics
                  </CardTitle>
                  <CardDescription className="text-base">
                    Our commitment to regenerative practices and environmental stewardship
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sustainabilityFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-background/60 rounded-lg">
                        <Leaf className="w-5 h-5 text-sage flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-sage">Carbon Negative</div>
                      <div className="text-sm text-muted-foreground">Operations</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-earth">95%</div>
                      <div className="text-sm text-muted-foreground">Renewable Energy</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-clay">Zero</div>
                      <div className="text-sm text-muted-foreground">Food Waste</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Integration */}
        <section className="py-20 bg-gradient-to-br from-sage/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">How It All Works Together</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                <p>
                  Our integrated platform creates a seamless flow from data collection to direct impact. 
                  Satellite data feeds our AI models, which predict nutritional needs and optimize resource allocation. 
                  Blockchain ensures transparency while our mobile platform delivers personalized guidance to families.
                </p>
              </div>
              <Button size="lg" className="mr-4">
                Request Demo
              </Button>
              <Button variant="outline" size="lg">
                Technical Documentation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionPage;