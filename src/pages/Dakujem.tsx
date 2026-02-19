import { Link } from "react-router-dom";

const Dakujem = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden flex flex-col items-center justify-center px-4 sm:px-6">
      <section className="section-spacing w-full">
        <div className="container max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
            Nečakajte, kým vám odíde{" "}
            <span className="text-gradient">ďalší zákazník.</span>
          </h1>

          <div className="glass-card p-8 md:p-10 mt-10">
            <p className="text-lg font-semibold text-primary">
              Ďakujeme! Audit vám čoskoro príde na e-mail.
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              Skontrolujte aj priečinok spam.
            </p>
          </div>

          <Link
            to="/"
            className="inline-block mt-8 text-muted-foreground hover:text-foreground underline text-sm transition-colors"
          >
            ← Späť na úvodnú stránku
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Dakujem;
