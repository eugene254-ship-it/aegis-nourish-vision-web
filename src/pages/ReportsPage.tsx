import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download, FileText, BarChart3, Shield, Calendar, Eye, ExternalLink, Database } from "lucide-react";

const ReportsPage = () => {
  const annualReports = [
    {
      year: "2023",
      title: "Annual Impact Report 2023",
      summary: "Record-breaking year with 1.2M+ lives impacted across 16 nations",
      downloadUrl: "#",
      highlights: ["400% growth in beneficiaries", "AI accuracy improved to 96%", "Zero data breaches"],
      size: "2.3 MB",
      pages: 48,
      status: "published"
    },
    {
      year: "2022",
      title: "Annual Impact Report 2022",
      summary: "Blockchain implementation and expansion into Southeast Asia",
      downloadUrl: "#",
      highlights: ["Blockchain tracking launched", "3 new country partnerships", "450K lives impacted"],
      size: "1.8 MB",
      pages: 42,
      status: "published"
    },
    {
      year: "2021",
      title: "Annual Impact Report 2021",
      summary: "AI model deployment and first major impact milestones",
      downloadUrl: "#",
      highlights: ["AI models deployed", "First 100K beneficiaries", "Technology validation"],
      size: "1.5 MB",
      pages: 38,
      status: "published"
    }
  ];

  const transparencyReports = [
    {
      title: "Financial Transparency Report Q4 2023",
      type: "Financial",
      date: "January 2024",
      summary: "Detailed breakdown of fund allocation and impact per dollar",
      downloadUrl: "#",
      blockchainVerified: true
    },
    {
      title: "Data Privacy & Ethics Report 2023",
      type: "Privacy & Ethics",
      date: "December 2023",
      summary: "Our commitment to ethical AI and beneficiary data protection",
      downloadUrl: "#",
      blockchainVerified: true
    },
    {
      title: "Supply Chain Audit Report 2023",
      type: "Supply Chain",
      date: "November 2023",
      summary: "Third-party audit of our food distribution and farmer partnerships",
      downloadUrl: "#",
      blockchainVerified: true
    },
    {
      title: "Carbon Footprint Assessment 2023",
      type: "Environmental",
      date: "October 2023",
      summary: "Environmental impact assessment and carbon neutrality achievements",
      downloadUrl: "#",
      blockchainVerified: true
    }
  ];

  const liveData = [
    {
      metric: "Total Beneficiaries",
      current: "1,247,589",
      target: "10,000,000",
      progress: 12.5,
      lastUpdated: "2 minutes ago"
    },
    {
      metric: "Countries Active",
      current: "16",
      target: "50",
      progress: 32,
      lastUpdated: "5 minutes ago"
    },
    {
      metric: "Meals Distributed",
      current: "3,456,789",
      target: "100,000,000",
      progress: 3.5,
      lastUpdated: "1 minute ago"
    },
    {
      metric: "Farmers Supported",
      current: "847",
      target: "5,000",
      progress: 16.9,
      lastUpdated: "8 minutes ago"
    }
  ];

  const governanceReports = [
    {
      title: "Board Governance Report 2023",
      description: "Board composition, decisions, and oversight activities",
      date: "March 2024",
      pages: 24
    },
    {
      title: "Risk Management Assessment 2023",
      description: "Comprehensive risk analysis and mitigation strategies",
      date: "February 2024",
      pages: 32
    },
    {
      title: "Compliance Monitoring Report 2023",
      description: "Regulatory compliance across all operational regions",
      date: "January 2024",
      pages: 28
    }
  ];

  const openDataInitiatives = [
    {
      title: "Nutrition Research Dataset",
      description: "Anonymized nutrition data for academic research",
      records: "2.5M",
      apiAvailable: true
    },
    {
      title: "Agricultural Climate Data",
      description: "Weather patterns and crop yield predictions",
      records: "850K",
      apiAvailable: true
    },
    {
      title: "Supply Chain Transparency Ledger",
      description: "Blockchain-verified food distribution tracking",
      records: "1.8M",
      apiAvailable: false
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
                Reports & Transparency
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Complete transparency is at the heart of our mission. Access real-time data, annual reports, and blockchain-verified impact metrics that demonstrate our commitment to accountability.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button size="lg">
                  View Live Dashboard
                </Button>
                <Button variant="outline" size="lg">
                  Download Latest Report
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Live Data Dashboard */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Real-Time Impact Data</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {liveData.map((data, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{data.metric}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Live • {data.lastUpdated}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-3xl font-bold text-sage">{data.current}</div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Target: {data.target}</span>
                          <span>{data.progress}%</span>
                        </div>
                        <Progress value={data.progress} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" className="mr-4">
                <BarChart3 className="w-5 h-5 mr-2" />
                Full Dashboard
              </Button>
              <Button variant="outline" size="lg">
                <Database className="w-5 h-5 mr-2" />
                API Access
              </Button>
            </div>
          </div>
        </section>

        {/* Annual Reports */}
        <section className="py-20 bg-gradient-to-br from-earth/5 to-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Annual Impact Reports</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {annualReports.map((report, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{report.title}</CardTitle>
                        <Badge variant="secondary" className="mt-2">
                          {report.year}
                        </Badge>
                      </div>
                      <FileText className="w-8 h-8 text-sage" />
                    </div>
                    <CardDescription>{report.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Key Highlights:</h4>
                        <div className="space-y-1">
                          {report.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-sage rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{report.pages} pages</span>
                        <span>{report.size}</span>
                      </div>
                      <Button className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency Reports */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Transparency & Compliance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {transparencyReports.map((report, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{report.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">{report.type}</Badge>
                          {report.blockchainVerified && (
                            <Badge variant="default" className="bg-sage">
                              <Shield className="w-3 h-3 mr-1" />
                              Blockchain Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Calendar className="w-6 h-6 text-earth" />
                    </div>
                    <CardDescription>{report.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{report.date}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          Preview
                        </Button>
                        <Button size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Reports */}
        <section className="py-20 bg-gradient-to-br from-sage/5 to-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Governance & Compliance</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {governanceReports.map((report, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto p-3 bg-earth/10 rounded-full w-fit mb-4">
                        <Shield className="w-8 h-8 text-earth" />
                      </div>
                      <CardTitle className="text-lg">{report.title}</CardTitle>
                      <CardDescription>{report.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Published:</span>
                          <span>{report.date}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Pages:</span>
                          <span>{report.pages}</span>
                        </div>
                        <Button size="sm" className="w-full">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Data */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Open Data Initiative</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {openDataInitiatives.map((dataset, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{dataset.title}</CardTitle>
                      <CardDescription>{dataset.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Records:</span>
                          <span className="font-semibold">{dataset.records}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>API Available:</span>
                          <Badge variant={dataset.apiAvailable ? "default" : "secondary"}>
                            {dataset.apiAvailable ? "Yes" : "Coming Soon"}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                          {dataset.apiAvailable && (
                            <Button size="sm" variant="outline">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  All datasets are anonymized and comply with global privacy standards
                </p>
                <Button size="lg">
                  View Full Data Catalog
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blockchain Transparency */}
        <section className="py-20 bg-gradient-to-br from-earth/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Blockchain Transparency Ledger</h2>
              <Card className="bg-gradient-to-br from-sage/5 to-earth/5 border-sage/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center justify-center gap-3">
                    <Shield className="w-8 h-8 text-sage" />
                    100% Transparent Operations
                  </CardTitle>
                  <CardDescription className="text-base">
                    Every donation, distribution, and impact metric is recorded on an immutable blockchain ledger
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-sage">3.2M+</div>
                      <div className="text-sm text-muted-foreground">Transactions Recorded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-earth">100%</div>
                      <div className="text-sm text-muted-foreground">Funds Tracked</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-clay">0</div>
                      <div className="text-sm text-muted-foreground">Corruption Incidents</div>
                    </div>
                  </div>
                  <Button size="lg">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Blockchain Explorer
                  </Button>
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

export default ReportsPage;