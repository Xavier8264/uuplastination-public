import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Menu, 
  X, 
  Github, 
  Mail,
  ArrowRight, 
  PlayCircle, 
  AlertCircle, 
  Clock, 
  Eye, 
  TrendingDown,
  Cpu,
  Camera,
  Gauge,
  Brain,
  Layers,
  Workflow,
  Wrench,
  Zap,
  Code,
  LineChart,
  Rocket,
  Target,
  Lightbulb,
  TrendingUp
} from "lucide-react";
import { Link, BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import heroBg from "@/assets/hero-bg.jpg";

const queryClient = new QueryClient();

// ============================================
// NAVIGATION COMPONENT
// ============================================

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

// ============================================
// FOOTER COMPONENT
// ============================================

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

// ============================================
// HERO SECTION
// ============================================

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Scientific laboratory equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Student Research Project</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Automated Plastination
            <span className="block text-primary mt-2">Monitoring System</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            A Raspberry-Pi-powered automated monitoring and valve-control system that tracks
            bubble rates in an acetone tank during plastination using camera-based detection, stepper
            control, and a secure web interface.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="group"
              onClick={() => scrollToSection("overview")}
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("system")}
            >
              <PlayCircle className="mr-2 h-4 w-4" />
              See How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
              <div className="text-3xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Disciplines</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Automated</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

// ============================================
// PROBLEM SECTION
// ============================================

export const ProblemSection = () => {
  const challenges = [
    {
      icon: Eye,
      title: "Manual Observation",
      description: "Lab staff must visually monitor bubble rates throughout the plastination process, requiring constant attention."
    },
    {
      icon: Clock,
      title: "Time-Intensive",
      description: "The dehydration process runs continuously, demanding around-the-clock monitoring and manual adjustments."
    },
    {
      icon: TrendingDown,
      title: "Inconsistent Results",
      description: "Subjective visual assessment can lead to variability in specimen quality and processing outcomes."
    },
    {
      icon: AlertCircle,
      title: "Limited Data",
      description: "Without automated tracking, there's no historical data to optimize the process or troubleshoot issues."
    }
  ];

  return (
    <section id="overview" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Plastination involves circulating acetone through biological specimens to remove fat
              and water. The rate at which bubbles rise through the acetone indicates dehydration
              progress—but traditional monitoring is manual, subjective, and labor-intensive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <challenge.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
                      <p className="text-muted-foreground">{challenge.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-card rounded-xl p-8 border border-border shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-center">Why This Matters</h3>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
              Plastination is a critical process for preserving anatomical specimens used in medical
              education and research. Improving the consistency and efficiency of this process
              directly benefits anatomy labs, medical students, and researchers worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SYSTEM SECTION
// ============================================

export const SystemSection = () => {
  const layers = [
    {
      icon: Cpu,
      title: "Hardware Layer",
      color: "text-primary",
      items: [
        "Raspberry Pi 5 main controller",
        "IMX708 wide-angle camera for bubble capture",
        "DM542 stepper driver + NEMA 17 motor",
        "24V Mean Well power supply",
        "Custom 3D-printed PETG valve linkage",
        "Precision limit switches for homing"
      ]
    },
    {
      icon: Layers,
      title: "Software Layer",
      color: "text-accent",
      items: [
        "FastAPI backend on Raspberry Pi",
        "Real-time serial communication",
        "Secure web interface (Cloudflare Tunnel)",
        "Live camera feed streaming",
        "Valve control endpoints (/open, /close, /status)",
        "Historical data logging & visualization"
      ]
    },
    {
      icon: Camera,
      title: "Vision Layer",
      color: "text-primary",
      items: [
        "Continuous video stream processing",
        "Real-time bubble monitoring",
        "Manual observation verification",
        "Data logging and analysis",
        "Historical rate tracking",
        "Process documentation"
      ]
    }
  ];

  const workflow = [
    {
      step: "1",
      title: "Capture",
      description: "Camera continuously records bubbling in acetone tank"
    },
    {
      step: "2",
      title: "Observe",
      description: "Live video feed enables remote monitoring and analysis"
    },
    {
      step: "3",
      title: "Control",
      description: "System adjusts valve position based on bubble rate"
    },
    {
      step: "4",
      title: "Monitor",
      description: "Researchers view live data on secure web dashboard"
    }
  ];

  return (
    <section id="system" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A fully automated, three-layer system that replaces manual monitoring with precise,
              data-driven control.
            </p>
          </div>

          {/* Three Layers */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 animate-slide-up">
            {layers.map((layer, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4`}>
                    <layer.icon className={`h-6 w-6 ${layer.color}`} />
                  </div>
                  <CardTitle>{layer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {layer.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Workflow */}
          <div className="bg-muted/30 rounded-xl p-8">
            <div className="flex items-center justify-center mb-8">
              <Workflow className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold">System Workflow</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {workflow.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                      {item.step}
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {index < workflow.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// RESEARCH SECTION
// ============================================

export const ResearchSection = () => {
  const disciplines = [
    {
      icon: Wrench,
      title: "Mechanical Engineering",
      description: "Valve mechanics, fluid dynamics, 3D-printed linkage design"
    },
    {
      icon: Zap,
      title: "Electrical Engineering",
      description: "Power distribution, motor drivers, sensor integration"
    },
    {
      icon: Cpu,
      title: "Computer Engineering",
      description: "Raspberry Pi control systems, embedded programming, serial communication"
    },
    {
      icon: Code,
      title: "Software Engineering",
      description: "FastAPI backend, web interface, real-time streaming, REST APIs"
    },
    {
      icon: Brain,
      title: "AI & Computer Vision",
      description: "YOLO model training, bubble detection, CVAT annotation pipeline"
    },
    {
      icon: LineChart,
      title: "Data Science",
      description: "Real-time analytics, data visualization, process optimization"
    }
  ];

  const outcomes = [
    {
      title: "Instrumentation & Measurement",
      description: "Real-time camera monitoring and bubble-rate analytics"
    },
    {
      title: "Controls & Mechatronics",
      description: "Stepper motor control with homing, soft limits, and precise actuation"
    },
    {
      title: "Embedded Systems",
      description: "Multi-service Raspberry Pi deployment with sensor management"
    },
    {
      title: "Full-Stack Development",
      description: "Complete web application with secure cloud deployment"
    }
  ];

  return (
    <section id="research" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-accent">Educational Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              A Multidisciplinary Engineering Project
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This project brings together concepts from across the engineering curriculum,
              providing hands-on experience with real-world systems integration.
            </p>
          </div>

          {/* Disciplines Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 animate-slide-up">
            {disciplines.map((discipline, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <discipline.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{discipline.title}</h3>
                  <p className="text-sm text-muted-foreground">{discipline.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Learning Outcomes */}
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-center">Key Learning Outcomes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">{outcome.title}</h4>
                    <p className="text-sm text-muted-foreground">{outcome.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Process */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              This project exemplifies the complete engineering design process: identifying a
              real-world problem, defining constraints, prototyping solutions, iterative testing,
              and continuous refinement. It demonstrates how theoretical knowledge translates into
              practical, impactful systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// FAQ SECTION
// ============================================

export const FAQSection = () => {
  const faqs = [
    {
      question: "What is plastination?",
      answer:
        "Plastination is a technique used to preserve biological specimens by replacing water and fat with polymers. The process begins with dehydration using acetone, followed by impregnation with a polymer such as silicone rubber or epoxy resin. This creates durable, odorless specimens ideal for medical education and anatomical research."
    },
    {
      question: "Why is bubble monitoring important in plastination?",
      answer:
        "During the acetone dehydration phase, bubbles rise through the liquid as water and fat are extracted from the specimen. The rate at which these bubbles form indicates how much moisture remains and how well the dehydration is progressing. Monitoring this rate allows researchers to determine when the specimen is ready for the next phase of plastination, ensuring optimal quality."
    },
    {
      question: "How does the automated system improve upon manual monitoring?",
      answer:
        "Manual monitoring requires lab staff to visually observe bubble rates at regular intervals, which is time-consuming, subjective, and prone to human error. Our automated system uses a camera to provide continuous remote monitoring, log data for analysis, and control acetone flow via a motorized valve. This results in more consistent specimen quality, reduced labor costs, and valuable historical data for process optimization."
    },
    {
      question: "What hardware components make up the system?",
      answer:
        "The system is built around a Raspberry Pi 5 single-board computer, which controls an IMX708 wide-angle camera for bubble detection and a NEMA 17 stepper motor (driven by a DM542 driver) that operates a precision valve. Power is supplied by a 24V Mean Well supply with a ULN2003A transistor array for proper motor control. The valve linkage is custom 3D-printed from PETG to withstand acetone fumes, and limit switches provide safe homing functionality."
    },
    {
      question: "How does the camera-based monitoring work?",
      answer:
        "The system uses an IMX708 wide-angle camera connected to the Raspberry Pi to capture continuous video of the bubbling process. This live feed is streamed to a secure web interface where researchers can remotely observe the acetone tank and monitor bubble activity. The video data is logged for later review and analysis, enabling researchers to track process trends over time and optimize the plastination workflow."
    },
    {
      question: "Is the system publicly accessible?",
      answer:
        "The control interface and live camera feed are secured behind authentication and accessed via a Cloudflare Tunnel with HTTPS encryption. Only authorized lab personnel can view real-time data or control the valve remotely. This public website provides general information about the project for educational purposes, but does not expose any control mechanisms or sensitive data."
    },
    {
      question: "What programming languages and frameworks are used?",
      answer:
        "The backend API is built with FastAPI (Python), handling valve control, serial communication with the microcontroller, and serving video streams. The web interface uses modern JavaScript/TypeScript frameworks for a responsive user experience. The entire stack runs on the Raspberry Pi OS (Linux-based), making it a fully integrated embedded system."
    },
    {
      question: "Can this system be adapted for other laboratory processes?",
      answer:
        "Absolutely. The core technologies—camera-based monitoring, motorized control, real-time data visualization, and cloud-secured interfaces—are broadly applicable. Similar systems could monitor chemical reactions, fermentation processes, or any scenario where visual observation and automated control can improve consistency and reduce manual labor. The modular design allows components to be repurposed for a wide range of research and industrial applications."
    },
    {
      question: "What are the next steps for this project?",
      answer:
        "Current work focuses on implementing closed-loop feedback control, where the system automatically adjusts the valve to maintain an optimal bubble rate based on monitoring data. Future development includes adding additional sensors for temperature and flow rate, expanding the web dashboard with advanced analytics and historical trend visualization, and improving overall system reliability. Long-term goals include deploying the system in multiple anatomy labs to gather comparative data and further validate its effectiveness."
    },
    {
      question: "Who can I contact for more information?",
      answer:
        "This is a student-led engineering research project. For academic inquiries, collaboration opportunities, or technical questions, please reach out through our university's engineering department contact page. We welcome interest from fellow researchers, educators, and industry partners interested in automation and laboratory instrumentation."
    }
  ];

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about the project
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 animate-slide-up">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

// ============================================
// FUTURE SECTION
// ============================================

export const FutureSection = () => {
  const roadmap = [
    {
      icon: TrendingUp,
      title: "Closed-Loop Control",
      status: "In Progress",
      description:
        "Implementing automatic feedback control where the system continuously adjusts the valve to maintain optimal bubble rates based on real-time monitoring data."
    },
    {
      icon: Lightbulb,
      title: "Advanced Analytics",
      status: "Planned",
      description:
        "Building comprehensive data visualization dashboards with historical trends, comparative analysis, and process optimization recommendations."
    },
    {
      icon: Target,
      title: "Sensor Integration",
      status: "Planned",
      description:
        "Adding additional sensors for temperature, pressure, and flow rate monitoring to provide a complete picture of the plastination process."
    },
    {
      icon: Rocket,
      title: "Multi-Lab Deployment",
      status: "Future",
      description:
        "Scaling the system to multiple anatomy labs to gather comparative data, validate effectiveness, and refine the technology for broader adoption."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-accent text-accent-foreground";
      case "Planned":
        return "bg-primary/20 text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Future Development</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The project continues to evolve with exciting enhancements and expanded capabilities
              on the horizon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
            {roadmap.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-card rounded-xl p-8 border border-border shadow-sm text-center">
            <h3 className="text-2xl font-semibold mb-4">Continuous Improvement</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              This project embodies the iterative nature of engineering research. Each phase builds
              upon lessons learned, incorporating feedback from lab users and advances in monitoring
              and control systems. Our goal is to create a robust, reliable system that can
              be replicated and adapted for various laboratory automation needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// PAGE COMPONENTS
// ============================================

export const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <SystemSection />
        <ResearchSection />
        <FAQSection />
        <FutureSection />
      </main>
      <Footer />
    </div>
  );
};

export const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

// ============================================
// MAIN APP COMPONENT
// ============================================

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
