const PASSection = () => {
  return (
    <section className="section-spacing px-4 sm:px-6">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-16 text-center">
          Prečo 90 % návštevníkov z vášho webu odchádza{" "}
          <span className="text-destructive">bez nákupu?</span>
        </h2>

        <div className="space-y-8 text-center">
          <p className="text-muted-foreground leading-relaxed text-lg">
            Máte webovú stránku, ktorá vyzerá pekne. Možno ste za ňu zaplatili nemalé peniaze 
            alebo ste nad ňou strávili noci. Napriek tomu sa výsledky nedostavujú. Návštevníci 
            prichádzajú, chvíľu sa zdržia, ale nakoniec kliknú na krížik a odídu ku konkurencii. 
            Žiadny telefonát, žiadna objednávka, ticho.
          </p>

          <p className="text-muted-foreground leading-relaxed text-lg">
            Je to frustrujúce. Máte pocit, že pálite peniaze za reklamu, ktorá nefunguje. 
            Začínate pochybovať o kvalite svojich služieb, hoci viete, že ste odborník. 
            Najhoršie na tom je, že neviete, <span className="text-foreground font-semibold">KDE je chyba</span>. 
            Je to v textoch? Je to v zlom tlačidle? Alebo sa web len dlho načítava na mobile? 
            Každý deň, kedy váš web nekonvertuje, prichádzate o reálne peniaze.
          </p>

          <p className="text-muted-foreground leading-relaxed text-lg">
            <span className="text-foreground font-semibold">Prestaňte hádať.</span> Kontrolný zoznam 
            pre audit webovej stránky odstráni túto neistotu za menej ako 30 minút. Prejdete si 
            jednoduché otázky typu ÁNO/NIE a okamžite uvidíte, kde vám unikajú peniaze. 
            Zmeníte svoj web z deravého vedra na stroj na získavanie kontaktov.
          </p>

          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform duration-300 glow-gold mt-8"
          >
            ⚡ Stiahnuť audit zdarma
          </a>
        </div>
      </div>
    </section>
  );
};

export default PASSection;
