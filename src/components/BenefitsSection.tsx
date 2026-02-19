import { Target, Heart, TrendingUp, Clock } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Odhaľte neviditeľné brzdy predaja",
    desc: "Zistite, či vaše formuláre a CTA tlačidlá neodrádzajú zákazníkov ešte predtým, než kliknú.",
  },
  {
    icon: Heart,
    title: "Získajte lásku od Google",
    desc: "Jednoduchým systémom ÁNO/NIE skontrolujete, či máte správne meta popisy, H1 nadpisy a či je váš web správne indexovaný.",
  },
  {
    icon: TrendingUp,
    title: "Zvýšte dôveryhodnosť okamžite",
    desc: "Odhalíte banálne chyby v typografii, nefunkčných odkazoch či v mobilnom zobrazení, ktoré ticho zabíjajú vašu reputáciu.",
  },
  {
    icon: Clock,
    title: "Šetrite čas a peniaze",
    desc: "Nemusíte platiť stovky eur agentúre za základnú diagnostiku. Tento audit zvládnete sami v prehľadnom Google Sheets prostredí.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-spacing px-4 sm:px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
            Namiesto hľadania ihly v kope sena získate{" "}
            <span className="text-gradient">jasnú mapu</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
