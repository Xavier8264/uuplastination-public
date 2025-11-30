import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Zap, Code, Cpu, Brain, LineChart } from "lucide-react";

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
