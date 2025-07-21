import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Database, 
  Globe, 
  Zap, 
  TrendingUp, 
  Shield,
  Cpu,
  Activity,
  Network,
  Satellite,
  BarChart3,
  LineChart,
  PieChart,
  Users,
  Leaf
} from "lucide-react";

const TechOperationsHub = () => {
  const [realTimeData, setRealTimeData] = useState({
    activeOperations: 1247,
    dataProcessed: 2.8,
    aiAccuracy: 97.2,
    uptime: 99.98,
    responseTime: 127
  });

  const [systemMetrics, setSystemMetrics] = useState([
    { name: "AI Processing Units", value: 94, status: "optimal", color: "bg-tech" },
    { name: "Blockchain Nodes", value: 89, status: "stable", color: "bg-accent" },
    { name: "Data Pipelines", value: 97, status: "optimal", color: "bg-primary" },
    { name: "Edge Computing", value: 92, status: "optimal", color: "bg-tech-muted" }
  ]);

  const operationalCapabilities = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyzing nutritional patterns and outcomes",
      metrics: { accuracy: "97.2%", predictions: "15.3K/day", models: "47 active" }
    },
    {
      icon: Database,
      title: "Quantum Data Processing",
      description: "Distributed processing across 1,200+ nodes for real-time insights",
      metrics: { throughput: "2.8TB/day", latency: "0.12ms", nodes: "1,247 active" }
    },
    {
      icon: Satellite,
      title: "Global Monitoring Network",
      description: "Satellite and IoT sensors tracking agricultural and nutritional metrics",
      metrics: { sensors: "45K", coverage: "127 regions", uptime: "99.98%" }
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Immutable record keeping and supply chain verification",
      metrics: { transactions: "892K", validators: "234", security: "256-bit" }
    }
  ];

  const aiModels = [
    { name: "Nutrition Optimizer", accuracy: 97.2, status: "training", version: "v4.1" },
    { name: "Climate Predictor", accuracy: 94.8, status: "deployed", version: "v3.7" },
    { name: "Supply Chain AI", accuracy: 96.1, status: "testing", version: "v2.9" },
    { name: "Health Tracker", accuracy: 98.4, status: "deployed", version: "v5.2" }
  ];

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        activeOperations: prev.activeOperations + Math.floor(Math.random() * 10 - 5),
        dataProcessed: parseFloat((prev.dataProcessed + Math.random() * 0.1).toFixed(1)),
        aiAccuracy: parseFloat((97 + Math.random() * 2).toFixed(1)),
        responseTime: Math.floor(120 + Math.random() * 20)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-tech/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-tech border-tech/30">
            <Cpu className="w-4 h-4 mr-2" />
            Ultra Tech Operations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent">
            Next-Generation Operational Infrastructure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by advanced AI, quantum computing, and blockchain technology to deliver unprecedented operational capabilities
          </p>
        </div>

        {/* Real-time Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-tech/10 to-tech/5 border-tech/20">
            <CardContent className="p-4 text-center">
              <Activity className="w-8 h-8 mx-auto mb-2 text-tech" />
              <div className="text-2xl font-bold text-tech">{realTimeData.activeOperations.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Active Operations</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-4 text-center">
              <Database className="w-8 h-8 mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold text-accent">{realTimeData.dataProcessed}TB</div>
              <div className="text-sm text-muted-foreground">Data Processed</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-4 text-center">
              <Brain className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-primary">{realTimeData.aiAccuracy}%</div>
              <div className="text-sm text-muted-foreground">AI Accuracy</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <CardContent className="p-4 text-center">
              <Zap className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <div className="text-2xl font-bold text-green-500">{realTimeData.uptime}%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-orange-500" />
              <div className="text-2xl font-bold text-orange-500">{realTimeData.responseTime}ms</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </CardContent>
          </Card>
        </div>

        {/* Operations Tabs */}
        <Tabs defaultValue="capabilities" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="capabilities">Core Capabilities</TabsTrigger>
            <TabsTrigger value="systems">System Health</TabsTrigger>
            <TabsTrigger value="ai">AI Models</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="capabilities" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {operationalCapabilities.map((capability, index) => (
                <Card key={capability.title} className="group hover:shadow-tech transition-all duration-300 animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-tech rounded-lg">
                          <capability.icon className="w-6 h-6 text-tech-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{capability.title}</CardTitle>
                          <CardDescription>{capability.description}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(capability.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-semibold text-tech">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="systems" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {systemMetrics.map((metric, index) => (
                <Card key={metric.name} className="animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{metric.name}</CardTitle>
                      <Badge variant="outline" className={`${metric.color}/10 border-${metric.color}/30`}>
                        {metric.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Performance</span>
                        <span className="font-semibold">{metric.value}%</span>
                      </div>
                      <Progress value={metric.value} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {aiModels.map((model, index) => (
                <Card key={model.name} className="animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{model.name}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant={model.status === 'deployed' ? 'default' : 'secondary'}>
                          {model.status}
                        </Badge>
                        <Badge variant="outline">{model.version}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Accuracy</span>
                        <span className="font-semibold">{model.accuracy}%</span>
                      </div>
                      <Progress value={model.accuracy} className="h-2" />
                      <div className="flex justify-end space-x-2">
                        <Button size="sm" variant="outline">Monitor</Button>
                        <Button size="sm" variant="default">Deploy</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="animate-grow">
                <CardHeader className="text-center">
                  <BarChart3 className="w-12 h-12 mx-auto mb-2 text-tech" />
                  <CardTitle>Real-time Analytics</CardTitle>
                  <CardDescription>Live data processing and visualization</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-tech mb-2">2.8M</div>
                  <div className="text-sm text-muted-foreground">Data Points/Hour</div>
                </CardContent>
              </Card>

              <Card className="animate-grow" style={{ animationDelay: '0.1s' }}>
                <CardHeader className="text-center">
                  <LineChart className="w-12 h-12 mx-auto mb-2 text-accent" />
                  <CardTitle>Predictive Models</CardTitle>
                  <CardDescription>Future trend analysis and forecasting</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">47</div>
                  <div className="text-sm text-muted-foreground">Active Models</div>
                </CardContent>
              </Card>

              <Card className="animate-grow" style={{ animationDelay: '0.2s' }}>
                <CardHeader className="text-center">
                  <PieChart className="w-12 h-12 mx-auto mb-2 text-primary" />
                  <CardTitle>Global Insights</CardTitle>
                  <CardDescription>Comprehensive impact analysis</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">127</div>
                  <div className="text-sm text-muted-foreground">Regions Monitored</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-tech p-8 border-0">
            <CardContent className="text-tech-foreground">
              <h3 className="text-2xl font-bold mb-4">Experience Ultra Tech Operations</h3>
              <p className="text-tech-foreground/80 mb-6 max-w-2xl mx-auto">
                Join the next generation of nutrition technology with AI-powered insights, 
                real-time monitoring, and quantum-scale data processing capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Request Demo
                </Button>
                <Button variant="outline" size="lg" className="bg-tech-foreground/10 border-tech-foreground/30 text-tech-foreground hover:bg-tech-foreground/20">
                  View Technical Docs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechOperationsHub;