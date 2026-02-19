import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Potrebujem k vyplneniu auditu prístup do administrácie webu?",
    a: "Nie, 95 % bodov v checkliste skontrolujete z pohľadu bežného návštevníka. Stačí vám otvoriť si váš web v prehliadači. Pre pár bodov v technickom SEO (napr. Google Search Console) je prístup výhodou, ale nie podmienkou.",
  },
  {
    q: "Je tento checklist vhodný pre e-shopy alebo pre weby služieb?",
    a: "Je univerzálny. Princípy ako jasná výzva na akciu, rýchlosť načítania či čitateľnosť na mobile sú kľúčové pre akýkoľvek typ webu, ktorý má za cieľ predávať alebo zbierať kontakty.",
  },
  {
    q: "V akom formáte audit dostanem?",
    a: "Získate odkaz na Google Sheets (Tabuľky Google). Tento formát je interaktívny \u2013 môžete si priamo v ňom zaškrtávať políčka (TRUE/FALSE) a vidieť svoj progres. Môžete si ho tiež stiahnuť ako Excel alebo PDF.",
  },
  {
    q: "Čo ak nájdem chyby, ktoré neviem opraviť sám?",
    a: "To je prvý krok k úspechu \u2013 viete, že problém existuje. Mnohé veci (texty, obrázky) opravíte sami. Na technickejšie veci budete mať pripravené presné zadanie pre vášho programátora, čím ušetríte čas.",
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
