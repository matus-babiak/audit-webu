import { TrendingUp, Search, Clock, Quote } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "+20 %", label: "Nárast odoslaných formulárov po úprave UX." },
  { icon: Search, value: "8 z 10", label: "Webov konzultantov nemalo správne nastavené H1 nadpisy (prichádzali o Google traffic)." },
  { icon: Clock, value: "30 minút", label: "Čas potrebný na kompletnú diagnostiku." },
];

const testimonials = [
  {
    text: "Myslel som si, že môj web architekta stačí. Tento zoznam mi však ukázal, že klienti nenašli moje portfólio a kontakt bol 'utopený'. Po úprave mám o 3 relevantné dopyty mesačne viac.",
    author: "Peter K.",
    role: "Architekt",
  },
  {
    text: "Konečne audit, ktorý nerieši len e-shopy. Žiadne zložité výrazy. Jasné inštrukcie pre nás, čo predávame služby a know-how.",
    author: "Jana M.",
    role: "Virtuálna asistentka",
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
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-left">
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg italic">
                „{t.text}"
              </p>
              <p className="font-bold">{t.author}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
