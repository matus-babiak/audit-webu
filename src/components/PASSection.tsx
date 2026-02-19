const PASSection = () => {
  return (
    <section className="section-spacing px-4 sm:px-6">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-16 text-center">
          Prečo 90 % klientov odchádza z webu bez konzultácie alebo{" "}
          <span className="text-destructive">bez vyžiadania cenovej ponuky?</span>
        </h2>

        <div className="space-y-8 text-center">
          <p className="text-muted-foreground leading-relaxed text-lg">
            Máte web, ktorý vyzerá „v pohode". Možno ste zaň zaplatili nemalé peniaze. Napriek tomu vám <span className="font-semibold text-foreground">telefón nezvoní tak často, ako by mal</span>.
          </p>

          <p className="text-muted-foreground leading-relaxed text-lg">
            Je to pre vás vyčerpávajúce. Pálite energiu na stretnutiach, posielate ľudí na web, a <span className="font-semibold text-foreground">tam sa stopa stráca</span>. Začínate pochybovať o svojich cenách či službách. Ale <span className="font-semibold text-foreground">chyba nie je vo vás</span>. Chyba je v tom, že váš web <span className="font-semibold text-foreground">nevie komunikovať hodnotu</span> a <span className="font-semibold text-foreground">technicky zlyháva v kľúčových momentoch rozhodovania</span>.
          </p>

          <p className="text-muted-foreground leading-relaxed text-lg">
            <span className="font-semibold text-foreground">Prestaňte hádať.</span> <span className="font-semibold text-foreground">Web Audit</span> odstráni túto neistotu. Prejdete si jednoduché otázky typu ÁNO/NIE a okamžite uvidíte, <span className="font-semibold text-foreground">kde vám unikajú peniaze</span>. Žiadna „vata", ale <span className="font-semibold text-foreground">tvrdé fakty o vašom aktuálnom webe</span>.
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
