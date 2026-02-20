import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SUBSCRIBE_URL = "/api/subscribe";

const CTASection = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(SUBSCRIBE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Niečo sa pokazilo. Skúste to prosím neskôr.");
        return;
      }

      navigate("/dakujem");
    } catch {
      setStatus("error");
      setErrorMessage("Nepodarilo sa odoslať. Skontrolujte internet a skúste znova.");
    }
  };

  return (
    <section id="cta" className="section-spacing px-4 sm:px-6">
      <div className="container max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
          Nečakajte, kým vám odíde{" "}
          <span className="text-gradient">ďalší zákazník.</span>
        </h2>

        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 mt-10 text-left space-y-6">
            {status === "error" && (
              <p className="text-sm text-destructive font-medium text-center bg-destructive/10 py-2 rounded-lg">
                {errorMessage}
              </p>
            )}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Meno
              </label>
              <input
                id="name"
                type="text"
                required
                disabled={status === "loading"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Vaše meno"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-60"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                disabled={status === "loading"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vas@email.sk"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-60"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-[1.02] transition-transform duration-300 glow-gold disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === "loading" ? "Odosielam…" : "⚡ Získať audit checklist teraz"}
            </button>
            <p className="text-center text-sm text-muted-foreground">
              Prístup vám príde okamžite na e-mail
            </p>
          </form>
      </div>
    </section>
  );
};

export default CTASection;
