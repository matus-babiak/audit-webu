import { useState } from "react";

const CTASection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with email service
    alert("Ďakujeme! Audit vám čoskoro príde na e-mail.");
  };

  return (
    <section id="cta" className="section-spacing px-4 sm:px-6">
      <div className="container max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
          Nečakajte, kým vám odíde{" "}
          <span className="text-gradient">ďalší zákazník.</span>
        </h2>

        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 mt-10 text-left space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Meno
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Vaše meno"
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vas@email.sk"
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-[1.02] transition-transform duration-300 glow-gold"
          >
            ⚡ Získať audit checklist teraz
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
