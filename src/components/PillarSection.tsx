import { Search, Eye, Zap, Users, Target } from "lucide-react";

const pillars = [
  { icon: Search, title: "Nájditeľnosť (SEO)", desc: "Aby vás našiel generálny riaditeľ, nie len náhodný surfér." },
  { icon: Eye, title: "Dojem (UX/Design)", desc: "Aby web pôsobil prémiovo a odôvodnil vaše ceny." },
  { icon: Zap, title: "Kondícia (Výkon)", desc: "Aby manažéri nečakali a neodišli ku konkurencii." },
  { icon: Users, title: "Prístupnosť", desc: "Aby bol web čitateľný na každom zariadení." },
  { icon: Target, title: "Presviedčanie (CRO)", desc: "To najdôležitejšie – premena návštevníka na dopyt (lead)." },
];

const PillarSection = () => {
  return (
    <section className="section-spacing px-4 sm:px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
            Väčšina tvorcov webu rieši samotný web a kód. Ja riešim <span className="font-black text-primary">psychológiu klienta</span>.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Bežné online nástroje vám „vypľujú" technický report plný chýb, ktorým nerozumiete. To vám nových klientov neprinesie. Náš <span className="font-bold text-primary">5-Pilierový Systém Webovej Autority</span> sa na váš web pozerá očami vášho ideálneho klienta.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="glass-card p-8 flex flex-col gap-4 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 w-72 min-w-72 flex-shrink-0 min-h-52"
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
          Nie je to len obyčajný audit. Je to plán, ako z webu dostať ďalšie stretnutia.
        </p>

        <div className="flex justify-center mt-10">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform duration-300 glow-gold"
          >
            ⚡ Stiahnuť audit zdarma
          </a>
        </div>
      </div>
    </section>
  );
};

export default PillarSection;
