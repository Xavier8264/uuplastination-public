import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
