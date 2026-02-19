import { useEffect } from "react";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    Cal?: ((a: string, b: string, c?: object) => void) & { ns?: { meeting?: (action: string, opts: object) => void } };
  }
}

const Dakujem = () => {
  useEffect(() => {
    if (typeof window === "undefined" || window.Cal?.ns?.meeting) return;

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      window.Cal?.("init", "meeting", { origin: "https://app.cal.com" });
      window.Cal?.ns?.meeting?.("inline", {
        elementOrSelector: "#my-cal-inline-meeting",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "babiak/meeting",
      });
      window.Cal?.ns?.meeting?.("ui", { hideEventTypeDetails: false, layout: "month_view" });
    };
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden flex flex-col items-center justify-center px-4 sm:px-6">
      <section className="section-spacing w-full">
        <div className="container max-w-2xl mx-auto text-center">
          <div className="glass-card p-8 md:p-10">
            <p className="text-lg font-semibold text-primary">
              Ďakujeme! Audit vám čoskoro príde na e-mail.
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              Skontrolujte aj priečinok spam.
            </p>
          </div>

          <div className="mt-12 md:mt-16 pt-10 border-t border-border/50">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Čo ďalej?
            </p>
            <h2 className="text-2xl sm:text-3xl font-black leading-tight mb-4">
              Prejdite si audit so mnou –{" "}
              <span className="text-gradient">zadarmo</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
              Vyberieme sa spoločne cez zistenia z auditu, určíme prioritu a poviem vám,
              čo zmeniť ako prvé. Konzultácia trvá 20 minút a je bez záväzkov.
            </p>
            <div
              id="my-cal-inline-meeting"
              className="w-full min-h-[630px] overflow-auto rounded-xl border border-border/50"
              style={{ minHeight: "630px" }}
            />
          </div>

          <Link
            to="/"
            className="inline-block mt-10 text-muted-foreground hover:text-foreground underline text-sm transition-colors"
          >
            ← Späť na úvodnú stránku
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Dakujem;
