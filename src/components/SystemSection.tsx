import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Camera, Gauge, Brain, Layers, Workflow } from "lucide-react";

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
