import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Server, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Lock, 
  Gauge,
  Thermometer,
  Zap,
  Globe,
  Shield,
  Activity,
  BarChart3,
  Network,
  Database,
  Cloud
} from "lucide-react";

const QuantumDataCenter = () => {
  const [serverMetrics, setServerMetrics] = useState({
    cpuUsage: 76,
    memoryUsage: 84,
    storageUsage: 67,
    networkThroughput: 2.4,
    temperature: 22.5,
    powerConsumption: 1247,
    uptime: 99.97
  });

  const dataCenters = [
    {
      name: "Quantum Core Alpha",
      location: "Singapore",
      status: "optimal",
      load: 78,
      connections: 15420,
      latency: 12,
      icon: Server
    },
    {
      name: "Neural Hub Beta",
      location: "Frankfurt",
      status: "optimal",
      load: 82,
      connections: 18750,
      latency: 8,
      icon: Network
    },
    {
      name: "Edge Cluster Gamma",
      location: "São Paulo",
      status: "maintenance",
      load: 45,
      connections: 9280,
      latency: 28,
      icon: Cloud
    },
    {
      name: "AI Processing Delta",
      location: "Tokyo",
      status: "optimal",
      load: 91,
      connections: 22100,
      latency: 6,
      icon: Cpu
    }
  ];

  const infrastructureMetrics = [
    { name: "Quantum Processors", value: 94, unit: "% efficiency", color: "text-tech", bgColor: "bg-tech/10" },
    { name: "Neural Networks", value: 1247, unit: "active nodes", color: "text-accent", bgColor: "bg-accent/10" },
    { name: "Data Throughput", value: 2.4, unit: "TB/sec", color: "text-primary", bgColor: "bg-primary/10" },
    { name: "Security Protocols", value: 99.99, unit: "% secure", color: "text-green-500", bgColor: "bg-green-500/10" }
  ];

  const realTimeStreams = [
    { name: "Agricultural IoT Sensors", dataPoints: 125420, region: "Global", status: "active" },
    { name: "Nutritional Analysis", dataPoints: 89340, region: "Americas", status: "active" },
    { name: "Supply Chain Tracking", dataPoints: 67580, region: "APAC", status: "active" },
    { name: "Climate Monitoring", dataPoints: 156780, region: "EMEA", status: "processing" }
  ];

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setServerMetrics(prev => ({
        ...prev,
        cpuUsage: Math.max(60, Math.min(95, prev.cpuUsage + (Math.random() - 0.5) * 10)),
        memoryUsage: Math.max(70, Math.min(95, prev.memoryUsage + (Math.random() - 0.5) * 8)),
        networkThroughput: Math.max(1.5, Math.min(3.2, prev.networkThroughput + (Math.random() - 0.5) * 0.3)),
        temperature: Math.max(20, Math.min(25, prev.temperature + (Math.random() - 0.5) * 1)),
        powerConsumption: Math.max(1100, Math.min(1400, prev.powerConsumption + (Math.random() - 0.5) * 50))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal': return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'maintenance': return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
      case 'critical': return 'text-red-500 bg-red-500/10 border-red-500/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-tech/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-tech border-tech/30">
            <Server className="w-4 h-4 mr-2" />
            Quantum Data Infrastructure
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent">
            Ultra-Scale Computing Infrastructure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by quantum processors and distributed across global edge nodes for unprecedented computational power
          </p>
        </div>

        {/* Real-time System Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
          <Card className="bg-gradient-to-br from-tech/10 to-tech/5 border-tech/20">
            <CardContent className="p-4 text-center">
              <Cpu className="w-6 h-6 mx-auto mb-2 text-tech" />
              <div className="text-xl font-bold text-tech">{serverMetrics.cpuUsage}%</div>
              <div className="text-xs text-muted-foreground">CPU Usage</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-4 text-center">
              <HardDrive className="w-6 h-6 mx-auto mb-2 text-accent" />
              <div className="text-xl font-bold text-accent">{serverMetrics.memoryUsage}%</div>
              <div className="text-xs text-muted-foreground">Memory</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-4 text-center">
              <Wifi className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-xl font-bold text-primary">{serverMetrics.networkThroughput}TB/s</div>
              <div className="text-xs text-muted-foreground">Network</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
            <CardContent className="p-4 text-center">
              <Thermometer className="w-6 h-6 mx-auto mb-2 text-blue-500" />
              <div className="text-xl font-bold text-blue-500">{serverMetrics.temperature.toFixed(1)}°C</div>
              <div className="text-xs text-muted-foreground">Temperature</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <CardContent className="p-4 text-center">
              <Zap className="w-6 h-6 mx-auto mb-2 text-green-500" />
              <div className="text-xl font-bold text-green-500">{serverMetrics.powerConsumption}kW</div>
              <div className="text-xs text-muted-foreground">Power</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
            <CardContent className="p-4 text-center">
              <Activity className="w-6 h-6 mx-auto mb-2 text-purple-500" />
              <div className="text-xl font-bold text-purple-500">{serverMetrics.uptime}%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
            <CardContent className="p-4 text-center">
              <Shield className="w-6 h-6 mx-auto mb-2 text-orange-500" />
              <div className="text-xl font-bold text-orange-500">256</div>
              <div className="text-xs text-muted-foreground">Security</div>
            </CardContent>
          </Card>
        </div>

        {/* Data Centers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dataCenters.map((center, index) => (
            <Card key={center.name} className="group hover:shadow-tech transition-all duration-300 animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <center.icon className="w-8 h-8 text-tech" />
                  <Badge className={getStatusColor(center.status)}>{center.status}</Badge>
                </div>
                <CardTitle className="text-lg">{center.name}</CardTitle>
                <CardDescription className="flex items-center">
                  <Globe className="w-4 h-4 mr-1" />
                  {center.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Load</span>
                    <span className="font-semibold">{center.load}%</span>
                  </div>
                  <Progress value={center.load} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Connections</div>
                    <div className="font-semibold">{center.connections.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Latency</div>
                    <div className="font-semibold">{center.latency}ms</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Infrastructure Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {infrastructureMetrics.map((metric, index) => (
            <Card key={metric.name} className={`${metric.bgColor} border-0 animate-grow`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {typeof metric.value === 'number' && metric.value < 100 ? 
                    metric.value.toFixed(metric.value < 10 ? 1 : 0) : 
                    metric.value.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">{metric.unit}</div>
                <div className="text-xs font-medium mt-1">{metric.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Real-time Data Streams */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2 text-tech" />
                  Real-time Data Streams
                </CardTitle>
                <CardDescription>Live data processing across global infrastructure</CardDescription>
              </div>
              <Badge variant="outline" className="bg-tech/10 text-tech border-tech/30">
                <Activity className="w-4 h-4 mr-1" />
                Live Processing
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {realTimeStreams.map((stream, index) => (
                <div key={stream.name} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${stream.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`} />
                    <div>
                      <div className="font-semibold">{stream.name}</div>
                      <div className="text-sm text-muted-foreground">{stream.region}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-tech">{stream.dataPoints.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">data points/min</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-tech/10 via-primary/10 to-accent/10 border-0 p-8">
            <CardContent>
              <h3 className="text-2xl font-bold mb-4">Experience Quantum-Scale Processing</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our quantum data infrastructure processes petabytes of nutrition and agricultural data 
                in real-time, delivering insights that transform communities globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg">
                  <Database className="w-4 h-4 mr-2" />
                  Access Data Center
                </Button>
                <Button variant="outline" size="lg">
                  <Gauge className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuantumDataCenter;