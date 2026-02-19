import { Shield, MessageCircle, Laptop, Heart } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Garancia hodnoty",
    desc: "Ak prejdete celým checklistom a nenájdete ani jednu chybu, napíšte mi. Osobne a bezplatne sa pozriem na váš web a pošlem vám tip na mieru.",
  },
  {
    icon: MessageCircle,
    title: "Garancia zrozumiteľnosti",
    desc: "Audit je napísaný tak, aby ste sa vedeli jednoducho rozhodnúť. Ak narazíte na bod, ktorému nebudete rozumieť, stačí odpovedať na e-mail.",
  },
  {
    icon: Laptop,
    title: "Garancia technickej nezávislosti",
    desc: "Nepotrebujete inštalovať žiadny softvér ani platiť za nástroje. Audit funguje v Google Sheets/Excel a je okamžite pripravený na použitie.",
  },
  {
    icon: Heart,
    title: "Garancia nulového rizika",
    desc: "Stiahnutie je nezáväzné. Ak kedykoľvek usúdite, že tieto informácie nemajú hodnotu, môžete sa odhlásiť jedným kliknutím. Nič neriskujete.",
  },
];

const GuaranteeSection = () => {
  return (
    <section className="section-spacing px-4 sm:px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Bez rizika
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Moja 4-násobná garancia
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {guarantees.map((g, i) => (
            <div key={i} className="glass-card p-8 hover:border-accent/30 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <g.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{g.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
