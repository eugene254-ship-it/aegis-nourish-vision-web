import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, Users, Leaf, Heart, Brain } from "lucide-react";

const SEOInsightsSection = () => {
  const regionInsights = [
    {
      region: "Sub-Saharan Africa",
      priority: "Critical",
      malnutrition: "25.7%",
      population: "1.1B",
      keywords: ["nutrition Africa", "food security Nigeria", "malnutrition Kenya"],
      solutions: ["Mobile AI nutrition advice", "Solar-powered food storage", "Community farming cooperatives"]
    },
    {
      region: "South Asia",
      priority: "High",
      malnutrition: "31.2%",
      population: "1.9B", 
      keywords: ["child nutrition India", "maternal health Bangladesh", "sustainable farming Pakistan"],
      solutions: ["WhatsApp nutrition bots", "Blockchain food tracking", "Climate-resilient crops"]
    },
    {
      region: "Southeast Asia",
      priority: "Medium",
      malnutrition: "8.4%",
      population: "668M",
      keywords: ["food security Indonesia", "nutrition Philippines", "autonomous farming Vietnam"],
      solutions: ["IoT crop monitoring", "AI dietary recommendations", "Local food networks"]
    }
  ];

  const autonomousTools = [
    {
      icon: Brain,
      title: "AI Nutrition Assistant",
      description: "Deploy locally-trained models for personalized nutrition advice",
      implementation: "Download our open-source nutrition AI model and deploy on local servers"
    },
    {
      icon: Leaf,
      title: "Sustainable Farming Toolkit",
      description: "Climate-adapted crop selection and farming techniques",
      implementation: "Access our database of 2,000+ climate-resilient crop varieties"
    },
    {
      icon: Users,
      title: "Community Network Builder",
      description: "Connect local farmers, healthcare workers, and families",
      implementation: "Set up peer-to-peer networks using our blockchain protocols"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sage/10 to-earth/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Regional Nutrition Insights & Autonomous Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover data-driven insights for your region and learn how to build autonomous nutrition systems that work without constant external support.
          </p>
        </div>

        {/* Regional Priority Map */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Global Nutrition Priority Regions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {regionInsights.map((region, index) => (
              <Card key={index} className="bg-background/80 backdrop-blur-sm border-earth/20 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-foreground">{region.region}</CardTitle>
                    <Badge variant={region.priority === "Critical" ? "destructive" : region.priority === "High" ? "default" : "secondary"}>
                      {region.priority}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Population: {region.population}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-destructive" />
                    <span className="text-sm">Malnutrition Rate: {region.malnutrition}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Search Terms:</h4>
                    <div className="flex flex-wrap gap-1">
                      {region.keywords.map((keyword, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Autonomous Solutions:</h4>
                    <ul className="text-xs space-y-1">
                      {region.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <span className="w-1 h-1 bg-sage rounded-full mt-2 flex-shrink-0"></span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Autonomous Building Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Build Autonomous Nutrition Systems</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {autonomousTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <Card key={index} className="bg-background/80 backdrop-blur-sm border-sage/20 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-sage/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-sage" />
                      </div>
                      <CardTitle className="text-lg text-foreground">{tool.title}</CardTitle>
                    </div>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{tool.implementation}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* SEO-Optimized Content */}
        <div className="bg-background/60 backdrop-blur-sm rounded-lg p-8 border border-earth/20">
          <h3 className="text-2xl font-semibold mb-6 text-center">How to Combat Malnutrition in Your Community</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-clay" />
                Immediate Actions
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Assess local nutrition gaps using our free diagnostic tools</li>
                <li>• Connect with nearby healthcare providers and nutrition experts</li>
                <li>• Set up community gardens using climate-appropriate crops</li>
                <li>• Implement mobile nutrition education programs</li>
                <li>• Establish food storage and preservation systems</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Brain className="w-5 h-5 text-sage" />
                Long-term Sustainability
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Deploy AI-powered nutrition monitoring systems</li>
                <li>• Build blockchain-based food distribution networks</li>
                <li>• Train local technicians on autonomous system maintenance</li>
                <li>• Create economic incentives for sustainable farming</li>
                <li>• Establish data collection for continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOInsightsSection;