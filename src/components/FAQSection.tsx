import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
