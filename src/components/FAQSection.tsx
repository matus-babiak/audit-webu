import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Potrebujem k auditu prístupové heslá do administrácie?",
    a: "Nie. 95 % bodov kontrolujete očami klienta. Zaujíma nás užívateľská skúsenosť a dôveryhodnosť ponuky, nie kód v pozadí. Stačí vám otvoriť si web v prehliadači.",
  },
  {
    q: "Je checklist vhodný, ak predávam služby a nie tovar?",
    a: "Áno, je dizajnovaný primárne pre B2B služby. Nerieši e-shopové košíky, ale psychológiu predaja, budovanie autority a to najdôležitejšie – ako premeniť návštevníka na dopyt (lead).",
  },
  {
    q: "V akom formáte audit dostanem?",
    a: "Získate prístup k interaktívnemu Google Sheets dokumentu. Žiadne mŕtve PDF. V tabuľke jednoducho odškrtávate políčka (TRUE/FALSE) a automaticky vidíte svoje skóre a progres.",
  },
  {
    q: "Čo ak nájdem technické chyby, ktoré neviem opraviť?",
    a: 'Výborne, práve ste ušetrili za diagnostiku. Audit vám poslúži ako presné zadanie pre programátora. Namiesto „niečo mi nefunguje" mu pošlete konkrétny zoznam úloh, čím urýchlite opravu.',
  },
  {
    q: "Rieši to len dizajn, alebo aj SEO?",
    a: "Nástroj pokrýva všetkých 5 pilierov webovej autority: SEO, Dizajn/UX, Technický výkon, Prístupnosť a Konverziu (CRO). Získate tak komplexný obraz o kondícii vášho webu na jednom mieste.",
  },
  {
    q: "Ako rýchlo uvidím výsledky po oprave chýb?",
    a: "SEO zmeny potrebujú pár týždňov. Ale úpravy textov, formulárov a výziev na akciu (CTA), ktoré audit odhalí, môžu zvýšiť počet dopytov prakticky okamžite po nasadení.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-spacing px-4 sm:px-6">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Najčastejšie otázky
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card px-6 border rounded-2xl border-border/50 data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-bold hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
