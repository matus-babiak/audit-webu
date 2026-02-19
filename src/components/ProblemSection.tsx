import { AlertTriangle } from "lucide-react";

const problems = [
  "Návštevníci odchádzajú bez toho, aby nakúpili alebo zanechali kontakt.",
  "Neviete, či je chyba v textoch, v technickom nastavení alebo v dizajne.",
  'Cítite sa stratení v technických pojmoch ako "kanonické tagy" alebo "Core Web Vitals".',
  "Tento stav frustruje mnohých podnikateľov, ktorí vedia, že ich služby sú skvelé, ale ich web to nedokáže predať.",
];

const ProblemSection = () => {
  return (
    <section className="section-spacing px-4 sm:px-6">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-8">
          Máte pocit, že váš web je len{" "}
          <span className="text-destructive">&bdquo;drahou vizitkou&ldquo;</span>
          , ktorá neprináša žiadnych zákazníkov?
        </h2>

        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Možno investujete do reklamy, tvoríte obsah, ale výsledky neprichádzajú.
        </p>

        <div className="grid gap-4">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="glass-card p-6 flex items-start gap-4 hover:border-destructive/30 transition-colors duration-300"
            >
              <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <p className="text-muted-foreground leading-relaxed">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
