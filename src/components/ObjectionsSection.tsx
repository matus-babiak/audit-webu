const points = [
  {
    title: '„Čo ak tomu nebudem rozumieť? Nie som programátor, som expert na svoje služby."',
    text: 'To je presne dôvod, prečo tento checklist vznikol. Vynechali sme balast. Namiesto otázky „Máte správne nastavený canonical tag?" sa vás checklist opýta: „Je z nadpisu do 3 sekúnd jasné, čo robíte?". Ak viete odpovedať ÁNO alebo NIE na otázku, či sú vaše texty čitateľné, zvládnete celý tento audit ľavou zadnou.',
  },
  {
    title: '„Nemám čas lúštiť 50-stranové technické analýzy. Potrebujem robiť biznis."',
    text: 'Ani by ste nemali. Tento audit nie je kniha, je to akčný nástroj v Google Sheets. Je rozdelený do 5 logických sekcií (SEO, Dizajn, Technika, Prístupnosť, Konverzia). Môžete si pri rannej káve skontrolovať len sekciu Formuláre a zistiť, či ich polia nie sú zbytočne komplikované. Už týchto 10 minút vám môže zachrániť stratené dopyty.',
  },
  {
    title: '„Mám web na mieru / WordPress / Wix... bude tento zoznam sedieť na môj systém?"',
    text: 'Princípy dôvery sú univerzálne. Nezáleží na tom, na akom „motore" váš web beží. Checklist rieši to, čo vidí klient: či je navigácia logická, či je kontrast textu dostatočný na čítanie a či odkazy v pätičke fungujú. Tieto pravidlá platia rovnako pre právnika s webom na mieru, ako pre konzultanta na Webflow.',
  },
  {
    title: '„Čo ak nájdem chyby, ale nebudem ich vedieť opraviť?"',
    text: 'To je prvý krok k náprave. Väčšinu chýb, ktoré audit odhalí (napr. nejasné CTA tlačidlá, chýbajúce nadpisy, zlá štruktúra menu), dokážete opraviť v editore textu sami. A ak nájdete technický problém? Teraz už presne viete, čo máte zadať svojmu webmasterovi, namiesto toho, aby ste mu len povedali: „Nefunguje to."',
  },
];

const ObjectionsSection = () => {
  return (
    <section className="section-spacing px-4 sm:px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
            Zvládnete to, aj keď nie ste programátor
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Väčšina dôvodov, prečo vás klienti neoslovia, sa neskrýva v zložitom kóde, ale v obsahu a psychológii predaja. Tento checklist vás nimi prevedie krok za krokom.
          </p>
        </div>

        <div className="space-y-6">
          {points.map((point, i) => (
            <div key={i} className="glass-card p-8 hover:border-primary/30 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
