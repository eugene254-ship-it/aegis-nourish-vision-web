import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Globe, Leaf, Brain, Users, Award } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Sustainability",
      description: "Building regenerative systems that heal our planet while nourishing communities"
    },
    {
      icon: Globe,
      title: "Equity",
      description: "Ensuring equal access to nutrition regardless of geography, gender, or economic status"
    },
    {
      icon: Leaf,
      title: "Regeneration",
      description: "Creating positive environmental impact through every meal distributed"
    },
    {
      icon: Brain,
      title: "AI for Good",
      description: "Leveraging artificial intelligence to solve humanity's greatest challenges"
    }
  ];

  const timeline = [
    { year: "2020", event: "Foundation established with Sheikh Zayed's vision", status: "completed" },
    { year: "2021", event: "First AI nutrition models deployed in pilot regions", status: "completed" },
    { year: "2022", event: "Blockchain food tracking system launched", status: "completed" },
    { year: "2023", event: "1 million meals distributed across 16 nations", status: "completed" },
    { year: "2024", event: "Global expansion and partnership network", status: "current" },
    { year: "2025", event: "10 million lives impacted milestone", status: "planned" },
    { year: "2030", event: "Zero hunger in 50 partner communities", status: "planned" },
    { year: "2035", event: "Global nutrition security achieved", status: "vision" }
  ];

  const affiliations = [
    "United Nations SDG Alliance",
    "AEGIS-X Innovation Network",
    "WHO Global Nutrition Partners",
    "World Food Programme",
    "FAO Innovation Accelerator",
    "Gates Foundation Health Equity"
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
                About Aegis Nourish
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Born from Sheikh Zayed's vision of compassionate leadership, we're building the future of global nutrition security through AI, blockchain, and community empowerment.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  1.2M+ Lives Impacted
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Globe className="w-4 h-4 mr-2" />
                  16 Nations
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  800+ Farmers Supported
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Aegis Nourish was founded in 2020, inspired by the humanitarian legacy of Sheikh Zayed bin Sultan Al Nahyan. 
                  His vision of using wealth and technology to serve humanity's most vulnerable populations became our guiding principle.
                </p>
                <p className="mb-6">
                  We recognized that traditional approaches to fighting malnutrition were fragmented and inefficient. 
                  Too many resources were lost to poor coordination, lack of transparency, and inability to predict nutritional crises before they occurred.
                </p>
                <p>
                  Today, we've built the world's first integrated AI-powered nutrition security platform, combining predictive analytics, 
                  blockchain transparency, and community-driven solutions to create sustainable change at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gradient-to-br from-sage/5 to-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto p-3 bg-sage/10 rounded-full w-fit mb-4">
                        <IconComponent className="w-8 h-8 text-sage" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Vision Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey: 2020-2035</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                        item.status === 'completed' ? 'bg-sage text-white' :
                        item.status === 'current' ? 'bg-clay text-white' :
                        item.status === 'planned' ? 'bg-earth text-white' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-medium">{item.event}</p>
                      <Badge 
                        variant={
                          item.status === 'completed' ? 'default' :
                          item.status === 'current' ? 'destructive' :
                          'secondary'
                        }
                        className="mt-2"
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Affiliations */}
        <section className="py-20 bg-gradient-to-br from-earth/5 to-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Affiliations</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {affiliations.map((affiliation, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                    <p className="font-medium text-foreground">{affiliation}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;