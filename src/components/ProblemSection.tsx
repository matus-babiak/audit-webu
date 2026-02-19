import { AlertTriangle } from "lucide-react";

const problems = [
  "Návštevníci odchádzajú bez toho, aby vás kontaktovali alebo zanechali kontakt.",
  "Neviete, či je chyba v textoch, v technickom nastavení alebo v dizajne.",
  'Investujete kopec času do marketingu, ale web tieto teplé kontakty „schladí" namiesto toho, aby ich premenil na stretnutie.',
];

const ProblemSection = () => {
  return (
    <section className="section-spacing px-4 sm:px-6">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-8">
          Máte pocit, že váš web je len{" "}
          <span className="text-destructive">&bdquo;drahou vizitkou&ldquo;</span>
          , ktorá na seba nezarobí?
        </h2>

        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Ste expert vo svojom odbore. Vaše služby sú špičkové, ale keď si potenciálny klient pozrie váš web, vidí niečo úplne iné.
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
