import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Sparkles, 
  Microscope, 
  Atom, 
  Dna, 
  FlaskConical,
  Lightbulb,
  Target,
  Zap,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Clock,
  Award,
  Rocket,
  Beaker
} from "lucide-react";

const AIInnovationLab = () => {
  const [researchProjects, setResearchProjects] = useState([
    {
      id: 1,
      title: "Neural Nutrition Synthesis",
      description: "AI-driven personalized nutrition optimization using quantum molecular analysis",
      progress: 87,
      stage: "Testing",
      team: "Neural Sciences Division",
      impact: "High",
      timeline: "3 months",
      funding: "$2.4M"
    },
    {
      id: 2,
      title: "Climate-Adaptive Agriculture AI",
      description: "Machine learning models for crop optimization under climate change scenarios",
      progress: 94,
      stage: "Deployment",
      team: "AgriTech Lab",
      impact: "Critical",
      timeline: "2 weeks",
      funding: "$1.8M"
    },
    {
      id: 3,
      title: "Blockchain Supply Chain Intelligence",
      description: "Decentralized AI for transparent and ethical food distribution networks",
      progress: 62,
      stage: "Development",
      team: "Blockchain Innovation",
      impact: "Medium",
      timeline: "6 months",
      funding: "$3.1M"
    },
    {
      id: 4,
      title: "Quantum Biomarker Analysis",
      description: "Advanced quantum computing for real-time health impact assessment",
      progress: 76,
      stage: "Research",
      team: "Quantum Biology",
      impact: "Revolutionary",
      timeline: "8 months",
      funding: "$4.7M"
    }
  ]);

  const [innovations, setInnovations] = useState([
    { name: "Neural Pattern Recognition", efficiency: 97.4, status: "deployed", breakthroughs: 23 },
    { name: "Quantum Food Analysis", efficiency: 94.2, status: "testing", breakthroughs: 18 },
    { name: "Predictive Health AI", efficiency: 91.8, status: "training", breakthroughs: 31 },
    { name: "Climate Adaptation Engine", efficiency: 89.6, status: "deployed", breakthroughs: 15 }
  ]);

  const [labMetrics, setLabMetrics] = useState({
    activeResearchers: 247,
    patentsFiled: 89,
    publicationsPublished: 156,
    collaboratingInstitutions: 34,
    totalFunding: 12.7,
    breakthroughsThisMonth: 7
  });

  const researchAreas = [
    {
      icon: Brain,
      title: "Neural Nutrition Science",
      description: "Advanced AI models for personalized nutrition optimization",
      projects: 12,
      researchers: 34,
      publications: 28,
      color: "text-tech bg-tech/10"
    },
    {
      icon: Dna,
      title: "Quantum Biology",
      description: "Molecular-level analysis using quantum computing principles",
      projects: 8,
      researchers: 22,
      publications: 19,
      color: "text-purple-500 bg-purple-500/10"
    },
    {
      icon: Atom,
      title: "Sustainable Agriculture AI",
      description: "Climate-adaptive farming solutions powered by machine learning",
      projects: 15,
      researchers: 41,
      publications: 35,
      color: "text-green-500 bg-green-500/10"
    },
    {
      icon: FlaskConical,
      title: "Biomarker Innovation",
      description: "Real-time health impact assessment through advanced analytics",
      projects: 9,
      researchers: 27,
      publications: 22,
      color: "text-accent bg-accent/10"
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage.toLowerCase()) {
      case 'research': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'development': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'testing': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      case 'deployment': return 'bg-green-500/10 text-green-500 border-green-500/20';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case 'high': return 'bg-orange-500/10 text-orange-500';
      case 'critical': return 'bg-red-500/10 text-red-500';
      case 'revolutionary': return 'bg-purple-500/10 text-purple-500';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setResearchProjects(prev => 
        prev.map(project => ({
          ...project,
          progress: Math.min(100, project.progress + Math.random() * 0.5)
        }))
      );
      
      setInnovations(prev =>
        prev.map(innovation => ({
          ...innovation,
          efficiency: Math.min(100, innovation.efficiency + (Math.random() - 0.5) * 0.2)
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-tech/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-tech border-tech/30">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Innovation Laboratory
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent">
            Pioneering the Future of Nutrition Science
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our world-class research laboratory combines artificial intelligence, quantum computing, and biotechnology 
            to revolutionize global nutrition systems.
          </p>
        </div>

        {/* Lab Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          <Card className="bg-gradient-to-br from-tech/10 to-tech/5 border-tech/20">
            <CardContent className="p-4 text-center">
              <Brain className="w-6 h-6 mx-auto mb-2 text-tech" />
              <div className="text-xl font-bold text-tech">{labMetrics.activeResearchers}</div>
              <div className="text-xs text-muted-foreground">Researchers</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-4 text-center">
              <Award className="w-6 h-6 mx-auto mb-2 text-accent" />
              <div className="text-xl font-bold text-accent">{labMetrics.patentsFiled}</div>
              <div className="text-xs text-muted-foreground">Patents</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-4 text-center">
              <BarChart3 className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-xl font-bold text-primary">{labMetrics.publicationsPublished}</div>
              <div className="text-xs text-muted-foreground">Publications</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <CardContent className="p-4 text-center">
              <Target className="w-6 h-6 mx-auto mb-2 text-green-500" />
              <div className="text-xl font-bold text-green-500">{labMetrics.collaboratingInstitutions}</div>
              <div className="text-xs text-muted-foreground">Partners</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-6 h-6 mx-auto mb-2 text-purple-500" />
              <div className="text-xl font-bold text-purple-500">${labMetrics.totalFunding}M</div>
              <div className="text-xs text-muted-foreground">Funding</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
            <CardContent className="p-4 text-center">
              <Lightbulb className="w-6 h-6 mx-auto mb-2 text-orange-500" />
              <div className="text-xl font-bold text-orange-500">{labMetrics.breakthroughsThisMonth}</div>
              <div className="text-xs text-muted-foreground">Breakthroughs</div>
            </CardContent>
          </Card>
        </div>

        {/* Research Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {researchAreas.map((area, index) => (
            <Card key={area.title} className="group hover:shadow-tech transition-all duration-300 animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${area.color} flex items-center justify-center mb-3`}>
                  <area.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-tech">{area.projects}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-accent">{area.researchers}</div>
                    <div className="text-xs text-muted-foreground">Team</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-primary">{area.publications}</div>
                    <div className="text-xs text-muted-foreground">Papers</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Innovation Tabs */}
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="projects">Active Projects</TabsTrigger>
            <TabsTrigger value="innovations">AI Innovations</TabsTrigger>
            <TabsTrigger value="pipeline">Research Pipeline</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {researchProjects.map((project, index) => (
                <Card key={project.id} className="animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </div>
                      <Badge className={getStageColor(project.stage)}>{project.stage}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span className="font-semibold">{project.progress.toFixed(1)}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Team</div>
                        <div className="font-medium">{project.team}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Timeline</div>
                        <div className="font-medium">{project.timeline}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Impact</div>
                        <Badge variant="outline" className={getImpactColor(project.impact)}>{project.impact}</Badge>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Funding</div>
                        <div className="font-medium">{project.funding}</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">View Details</Button>
                      <Button size="sm" variant="default">Collaborate</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="innovations" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {innovations.map((innovation, index) => (
                <Card key={innovation.name} className="animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{innovation.name}</CardTitle>
                      <Badge variant={innovation.status === 'deployed' ? 'default' : 'secondary'}>
                        {innovation.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Efficiency</span>
                        <span className="font-semibold">{innovation.efficiency.toFixed(1)}%</span>
                      </div>
                      <Progress value={innovation.efficiency} className="h-2" />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-muted-foreground">Breakthroughs</div>
                        <div className="text-2xl font-bold text-tech">{innovation.breakthroughs}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Microscope className="w-4 h-4 mr-1" />
                          Analyze
                        </Button>
                        <Button size="sm" variant="default">
                          <Rocket className="w-4 h-4 mr-1" />
                          Deploy
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pipeline" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="animate-grow">
                <CardHeader className="text-center">
                  <Beaker className="w-12 h-12 mx-auto mb-2 text-tech" />
                  <CardTitle>Early Research</CardTitle>
                  <CardDescription>Fundamental research and discovery phase</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-tech mb-2">18</div>
                  <div className="text-sm text-muted-foreground">Active Studies</div>
                  <div className="mt-4">
                    <Button variant="outline" size="sm">View Pipeline</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-grow" style={{ animationDelay: '0.1s' }}>
                <CardHeader className="text-center">
                  <FlaskConical className="w-12 h-12 mx-auto mb-2 text-accent" />
                  <CardTitle>Development</CardTitle>
                  <CardDescription>Prototype development and testing</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">12</div>
                  <div className="text-sm text-muted-foreground">In Development</div>
                  <div className="mt-4">
                    <Button variant="outline" size="sm">Track Progress</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-grow" style={{ animationDelay: '0.2s' }}>
                <CardHeader className="text-center">
                  <Rocket className="w-12 h-12 mx-auto mb-2 text-primary" />
                  <CardTitle>Deployment</CardTitle>
                  <CardDescription>Ready for commercial application</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">7</div>
                  <div className="text-sm text-muted-foreground">Ready to Deploy</div>
                  <div className="mt-4">
                    <Button variant="outline" size="sm">Launch Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-tech/10 via-primary/10 to-accent/10 border-0 p-8">
            <CardContent>
              <h3 className="text-2xl font-bold mb-4">Join Our Innovation Network</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Collaborate with world-class researchers and contribute to breakthrough innovations 
                that are transforming global nutrition and health outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg">
                  <Brain className="w-4 h-4 mr-2" />
                  Apply to Research
                </Button>
                <Button variant="outline" size="lg">
                  <Microscope className="w-4 h-4 mr-2" />
                  Browse Publications
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIInnovationLab;