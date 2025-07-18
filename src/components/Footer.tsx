import { Link } from "react-router-dom";
import { Sprout, Mail, MapPin, Phone, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Organization",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Story", path: "/about" },
        { name: "Leadership", path: "/about" },
        { name: "Careers", path: "/careers" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "AI Nutrition Stack", path: "/solution" },
        { name: "Blockchain Transparency", path: "/solution" },
        { name: "Farmer Network", path: "/solution" },
        { name: "Mobile App", path: "/solution" },
      ]
    },
    {
      title: "Impact",
      links: [
        { name: "Global Reach", path: "/impact" },
        { name: "Success Stories", path: "/impact" },
        { name: "SDG Alignment", path: "/impact" },
        { name: "Reports", path: "/reports" },
      ]
    },
    {
      title: "Get Involved",
      links: [
        { name: "Volunteer", path: "/join" },
        { name: "Donate", path: "/donate" },
        { name: "Partnership", path: "/partners" },
        { name: "Innovator Portal", path: "/join" },
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="text-2xl font-bold">Aegis Nourish</span>
              </Link>
              <p className="text-primary-foreground/80 leading-relaxed">
                Empowering communities through ethical nutrition, inspired by Sheikh Zayed's vision of sustainable development.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                  <Github className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-accent" />
              <div>
                <div className="font-medium">Headquarters</div>
                <div className="text-primary-foreground/80 text-sm">
                  Abu Dhabi, United Arab Emirates
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-accent" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-primary-foreground/80 text-sm">
                  hello@aegisnourish.org
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-accent" />
              <div>
                <div className="font-medium">Support</div>
                <div className="text-primary-foreground/80 text-sm">
                  +971 (2) 555-0123
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 Aegis Nourish. All rights reserved. Built with ❤️ for global nutrition equity.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/transparency" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Transparency
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;