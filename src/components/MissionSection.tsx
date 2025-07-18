import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Lightbulb, Leaf, Users } from "lucide-react";
import farmersImage from "@/assets/farmers-tech.jpg";
import aiImage from "@/assets/ai-nutrition.jpg";

const MissionSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Equity",
      description: "Ensuring every mother and child has access to nutritious food, regardless of geography or economic status."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Building regenerative food systems that heal the earth while nourishing communities."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging AI and blockchain to create transparent, efficient nutrition delivery systems."
    },
    {
      icon: Users,
      title: "Community",
      description: "Empowering local farmers, healthcare workers, and families to drive lasting change."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inspired by Sheikh Zayed's Legacy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Following the vision of sustainable development and humanitarian leadership, we're creating a world where technology serves humanity's most fundamental need: nutrition.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Mission Text */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Our Mission: From 2020 to 2035
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Aegis Nourish emerged from a simple yet profound realization: in a world of technological abundance, over 800 million people still face hunger. We're changing that by creating ethical, AI-powered nutrition systems that connect farmers, families, and communities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By 2035, we envision a world where every pregnant mother has access to personalized nutrition support, every child grows up nourished, and every farmer participates in fair, regenerative food systems.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Learn Our Story
              </Button>
              <Button variant="outline" size="lg">
                View Impact Map
              </Button>
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={farmersImage}
                alt="Farmers using technology"
                className="w-full h-48 object-cover rounded-lg shadow-soft"
              />
              <Card className="bg-gradient-tech text-tech-foreground">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold mb-2">95%</div>
                  <div className="text-sm opacity-90">Improved maternal nutrition tracking</div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4 mt-8">
              <Card className="bg-gradient-earth text-primary-foreground">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold mb-2">800+</div>
                  <div className="text-sm opacity-90">Farmers in our network</div>
                </CardContent>
              </Card>
              <img
                src={aiImage}
                alt="AI nutrition technology"
                className="w-full h-48 object-cover rounded-lg shadow-soft"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-2xl font-semibold text-center text-foreground mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="border-border/50 hover:shadow-soft transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;