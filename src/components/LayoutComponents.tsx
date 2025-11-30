import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">UU</span>
            </div>
            <span className="font-semibold text-lg text-foreground">Plastination</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("overview")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection("system")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              System
            </button>
            <button
              onClick={() => scrollToSection("research")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Research
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
            <a href="/secure" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                Lab Login
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("overview")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection("system")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              System
            </button>
            <button
              onClick={() => scrollToSection("research")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Research
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              FAQ
            </button>
            <a href="/secure" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="w-full">
                Lab Login
              </Button>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">UU</span>
                </div>
                <span className="font-semibold text-lg">Plastination</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A student engineering research project focused on automating plastination monitoring
                through computer vision and precision control systems.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#overview"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#system"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    System Architecture
                  </a>
                </li>
                <li>
                  <a
                    href="#research"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Research & Education
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="mailto:contact@uuplastination.com"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="/secure"
                  className="text-sm text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lab Staff Login →
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} UU Plastination Project. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              A Student Engineering Research Initiative
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
