import { Shield, MessageCircle, Laptop, Heart } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Garancia nájdeného potenciálu",
    desc: "Som si taký istý kvalitou tohto auditu, že vám garantujem výsledok. Ak prejdete celým checklistom a nenájdete ani jedno miesto na zlepšenie vášho webu, napíšte mi. Osobne a bezplatne sa pozriem na vašu stránku a pošlem vám jedno strategické odporúčanie, ktoré vám môže priniesť nového klienta.",
  },
  {
    icon: MessageCircle,
    title: "Garancia biznisovej zrozumiteľnosti",
    desc: 'Žiadny zbytočný IT slang. Celý audit je písaný jazykom, ktorému rozumie majiteľ firmy, marketér aj obchodník. Garantujem vám, že každému bodu okamžite porozumiete a budete vedieť, prečo je pre váš biznis dôležitý, bez toho, aby ste museli „googliť" technické pojmy.',
  },
  {
    icon: Laptop,
    title: "Garancia okamžitej použiteľnosti",
    desc: "Nezáleží na tom, či váš web beží na WordPresse, Webflowe alebo riešení na mieru. Princípy v tomto checkliste sú univerzálne a zamerané na psychológiu klienta. Nemusíte nič inštalovať – audit funguje v prostredí Google Sheets a je pripravený na prácu do 3 sekúnd od stiahnutia.",
  },
  {
    icon: Heart,
    title: "Garancia súkromia a slobody",
    desc: "Vaša e-mailová adresa je u mňa v bezpečí. Žiadny spam, len hodnotné tipy pre váš biznis. Ak kedykoľvek usúdite, že vám moje e-maily neprinášajú hodnotu, môžete sa odhlásiť jedným kliknutím. Rešpektujem váš čas aj vašu schránku.",
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
