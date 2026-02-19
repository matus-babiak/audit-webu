const PASSection = () => {
  return (
    <section className="section-spacing px-4 sm:px-6">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-16 text-center">
          Prečo 90 % návštevníkov z vášho webu odchádza{" "}
          <span className="text-destructive">bez nákupu?</span>
        </h2>

        <div className="space-y-12">
          {/* Problem */}
          <div className="glass-card p-8 md:p-10 border-l-4 border-l-destructive">
            <p className="text-sm font-semibold text-destructive uppercase tracking-widest mb-4">Problém</p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Máte webovú stránku, ktorá vyzerá pekne. Možno ste za ňu zaplatili nemalé peniaze 
              alebo ste nad ňou strávili noci. Napriek tomu sa výsledky nedostavujú. Návštevníci 
              prichádzajú, chvíľu sa zdržia, ale nakoniec kliknú na krížik a odídu ku konkurencii. 
              Žiadny telefonát, žiadna objednávka, ticho.
            </p>
          </div>

          {/* Agitation */}
          <div className="glass-card p-8 md:p-10 border-l-4 border-l-primary">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Frustrácia</p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Je to frustrujúce. Máte pocit, že pálite peniaze za reklamu, ktorá nefunguje. 
              Začínate pochybovať o kvalite svojich služieb, hoci viete, že ste odborník. 
              Najhoršie na tom je, že neviete, <span className="text-foreground font-semibold">KDE je chyba</span>. 
              Je to v textoch? Je to v zlom tlačidle? Alebo sa web len dlho načítava na mobile? 
              Každý deň, kedy váš web nekonvertuje, prichádzate o reálne peniaze.
            </p>
          </div>

          {/* Solution */}
          <div className="glass-card p-8 md:p-10 border-l-4 border-l-accent">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Riešenie</p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              <span className="text-foreground font-semibold">Prestaňte hádať.</span> Kontrolný zoznam 
              pre audit webovej stránky odstráni túto neistotu za menej ako 30 minút. Prejdete si 
              jednoduché otázky typu ÁNO/NIE a okamžite uvidíte, kde vám unikajú peniaze. 
              Zmeníte svoj web z deravého vedra na stroj na získavanie kontaktov.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PASSection;
