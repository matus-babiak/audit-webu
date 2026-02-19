import { HelpCircle, Clock, Globe } from "lucide-react";

const objections = [
  {
    icon: HelpCircle,
    question: "Bojíte sa, že tomu nebudete rozumieť?",
    answer: 'Checklist je písaný ľudskou rečou. Nepýtame sa na "stav kanonických tagov", ale na to, či "všetky varianty URL smerujú na jednu verziu". Všetko je vysvetlené tak, aby ste to pochopili sedliackym rozumom.',
  },
  {
    icon: Clock,
    question: "Máte obavy, že to zaberie veľa času?",
    answer: "Tabuľka je navrhnutá pre zaneprázdnených podnikateľov. Audit je rozdelený do sekcií. Môžete si spraviť len sekciu Dizajn pri rannej káve a SEO nechať na poobedie.",
  },
  {
    icon: Globe,
    question: "Funguje to na každom webe?",
    answer: "Áno. Princípy v checkliste (jasná navigácia, čitateľný text, funkčné tlačidlá) platia rovnako pre WordPress, Shoptet, Wix aj web na mieru.",
  },
];

const ObjectionsSection = () => {
  return (
    <section className="section-spacing px-4 sm:px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
            &bdquo;Zvládnem to, aj keď{" "}
            <span className="text-gradient">nie som ITčkár?&ldquo;</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Rozumieme vašim obavám. Pravdou je, že 80 % chýb na webe súvisí s logikou a obsahom, nie s kódom.
          </p>
        </div>

        <div className="space-y-6">
          {objections.map((obj, i) => (
            <div key={i} className="glass-card p-8 hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <obj.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{obj.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{obj.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
