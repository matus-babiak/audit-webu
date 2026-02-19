import { Search, Eye, Zap, Users, Target } from "lucide-react";

const pillars = [
  { icon: Search, title: "Nájditeľnosť (SEO)", desc: "Aby vás zákazníci vôbec videli." },
  { icon: Eye, title: "Dojem (Dizajn & UX)", desc: "Aby sa cítili komfortne a nestratili sa." },
  { icon: Zap, title: "Kondícia (Výkonnosť)", desc: "Aby nečakali a neodišli ku konkurencii." },
  { icon: Users, title: "Prístupnosť", desc: "Aby bol web čitateľný pre každého." },
  { icon: Target, title: "Presviedčanie (CRO)", desc: "To najdôležitejšie = aby návštevník vykonal akciu." },
];

const PillarSection = () => {
  return (
    <section className="section-spacing px-4 sm:px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Unikátna metóda
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
            Autentický 5-pilierový systém auditu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Väčšina online nástrojov vám „vypľuje" technický report plný chýb v kóde, ktorým nerozumiete. 
            Náš prístup sa na váš web pozerá ako váš ideálny zákazník.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`glass-card p-8 flex flex-col gap-4 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 text-lg italic">
          Toto nie je len kontrola chýb. Je to mapa k webu, ktorý zarába.
        </p>
      </div>
    </section>
  );
};

export default PillarSection;
