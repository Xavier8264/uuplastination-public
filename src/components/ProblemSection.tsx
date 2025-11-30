import { AlertCircle, Clock, Eye, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
