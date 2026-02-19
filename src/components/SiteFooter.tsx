import { Mail, Phone, Globe, Linkedin, Instagram } from "lucide-react";

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="container max-w-5xl mx-auto py-12 px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center sm:text-left">
          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://matusbabiak.sk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Globe className="w-4 h-4 shrink-0" />
                  matusbabiak.sk
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@matusbabiak.sk"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  info@matusbabiak.sk
                </a>
              </li>
              <li>
                <a
                  href="tel:+421947977577"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +421 947 977 577
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-4 justify-center sm:justify-start">
              <a
                href="https://www.linkedin.com/in/matusbabiak/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/matus.babiak/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Právne */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Právne informácie
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://docs.google.com/document/d/1A_OzJNeGj_VSsucVBozlQ1w7sgLCUvuMfC7Qp2DdzEc/edit?tab=t.0#heading=h.u9d2qaeo8y4f" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Ochrana osobných údajov
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Strategický web systém a optimalizácia pre B2B služby.
            </p>
          </div>

          {/* Firma a CTA */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Matúš Babiak
            </h3>
            <p className="text-sm text-muted-foreground">
              IČO: 55656889
            </p>
            <a
              href="#cta"
              className="inline-block mt-6 text-sm font-semibold text-primary hover:underline"
            >
              Stiahnuť audit zdarma →
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          © {year} Matúš Babiak. Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
