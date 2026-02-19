import heroImage from "@/assets/audit-webu.jpg";
// Menšia verzia sa generuje pri build/dev cez scripts/resize-hero.mjs
import heroImage800 from "@/assets/audit-webu-800.jpg?url";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto py-16 md:py-20 px-4 sm:px-6">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Bezplatný audit webu
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight max-w-5xl">
            Zistite, prečo váš web{" "}
            <span className="text-gradient">neprináša nových klientov</span>
            , za menej ako 30 minút.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Stiahnite si <strong className="font-bold text-foreground">Kontrolný zoznam pre audit webu</strong>, ktorý vám odhalí skryté chyby, kvôli ktorým prichádzate o dopyty a telefonáty. Aj keď máte dobrú návštevnosť.
          </p>

          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform duration-300 glow-gold mt-4"
          >
            ⚡ Stiahnuť audit zdarma
          </a>

          <div className="w-full max-w-4xl mt-12 md:mt-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <img
                src={heroImage}
                srcSet={`${heroImage800} 800w, ${heroImage} 1262w`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                alt="Náhľad audit checklistu v Google Sheets"
                className="relative w-full rounded-2xl border border-border/30"
                width={1262}
                height={769}
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
