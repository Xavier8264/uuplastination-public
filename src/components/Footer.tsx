import { Github, Mail } from "lucide-react";

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
