import heroImage from "@/assets/audit-webu.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto pt-24 pb-16 md:pt-32">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Bezplatný audit webu
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight max-w-5xl">
            Zistite, prečo váš web{" "}
            <span className="text-gradient">nepredáva</span>
            , za menej ako 30 minút.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Stiahnite si Kontrolný zoznam pre audit webu, ktorý vám okamžite odhalí chyby 
            v SEO, dizajne a konverznosti, o ktorých ste doteraz nevedeli.
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
                alt="Náhľad audit checklistu v Google Sheets"
                className="relative w-full rounded-2xl border border-border/30"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
