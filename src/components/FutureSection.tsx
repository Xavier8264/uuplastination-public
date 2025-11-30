import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Target, Lightbulb, TrendingUp } from "lucide-react";

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
