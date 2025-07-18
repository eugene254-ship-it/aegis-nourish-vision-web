import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Sprout } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "1.2M+", label: "Meals Distributed" },
    { icon: Globe, value: "16", label: "Nations Served" },
    { icon: Sprout, value: "800+", label: "Farmers Supported" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Aegis Nourish Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                Empowering Communities through{" "}
                <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Ethical Nutrition
                </span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                Harnessing AI, blockchain, and regenerative agriculture to create sustainable food systems that nourish mothers, children, and communities worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="group">
                Join the Movement
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
                Watch Our Impact
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-grow"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Additional Visual Element */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-tech rounded-2xl p-8 shadow-tech animate-float">
                <div className="space-y-6 text-tech-foreground">
                  <h3 className="text-2xl font-semibold">AI-Powered Impact</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Maternal Health Tracking</span>
                      <span className="text-accent font-semibold">95%</span>
                    </div>
                    <div className="w-full bg-tech-foreground/20 rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-[95%]" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Nutrition Optimization</span>
                      <span className="text-accent font-semibold">88%</span>
                    </div>
                    <div className="w-full bg-tech-foreground/20 rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-[88%]" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Climate Resilience</span>
                      <span className="text-accent font-semibold">92%</span>
                    </div>
                    <div className="w-full bg-tech-foreground/20 rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-[92%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;