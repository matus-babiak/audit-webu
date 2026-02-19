import { TrendingUp, Search, PiggyBank, Quote } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "+20%", label: "Nárast vyplnených formulárov u klienta v prvom mesiaci" },
  { icon: Search, value: "8 z 10", label: "Webov nemalo správne nastavené H1 nadpisy" },
  { icon: PiggyBank, value: "Stovky €", label: "Ušetrených za drahé auditné agentúry" },
];

const testimonials = [
  {
    text: "Myslel som si, že môj e-shop je v poriadku. Tento zoznam mi však ukázal, že moje tlačidlá na mobile boli príliš malé a texty nečitateľné. Opravil som to za hodinu a zákazníci sa prestali sťažovať.",
    author: "Peter K.",
    role: "majiteľ malého e-shopu",
  },
  {
    text: "Konečne audit, ktorému rozumie aj netechnik. Žiadne zložité výrazy, len jasné inštrukcie, čo mám na webe skontrolovať.",
    author: "Jana M.",
    role: "virtuálna asistentka",
  },
];

const SocialProofSection = () => {
  return (
    <section className="section-spacing px-4 sm:px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Overené v praxi
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
            Postupy overené v praxi, nie v teórii
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Tento checklist je presný pracovný nástroj, vyvinutý a ladený počas posledného roka 
            pri práci na reálnych klientskych projektoch.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-black text-gradient mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-8">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg italic">
                „{t.text}"
              </p>
              <div>
                <p className="font-bold">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
