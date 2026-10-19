export default function ChiSono() {
  return (
    <section className="blocco" id="chi-sono">
      <h2>Chi scrive il codice</h2>
      <p className="lead">
        Un approccio umano, sartoriale e orientato al successo della tua
        attività.
      </p>

      <div className="chi-sono-grid">
        {/* Card Principale in Vetro Solido */}
        <article className="glass-solid chi-sono-main-card">
          <div className="chi-head">
            <span className="perche-badge">00. La Mia Filosofia</span>
            <div className="chi-icon">
              <i className="bi bi-heart-pulse-fill"></i>
            </div>
          </div>

          <div className="chi-body">
            <h3>Prendo a cuore il tuo progetto come se l'azienda fosse mia</h3>
            <p>
              Sono Emanuela, sviluppatrice full-stack. Non mi limito a "scrivere
              codice": mi immergo nei tuoi processi per capire esattamente di
              cosa ha bisogno la tua attività.
            </p>
            <p>
              Ho un'ossessione positiva per la cura dei dettagli, l'usabilità e
              la chiarezza. Ti seguo passo passo in ogni richiesta, dall'idea
              iniziale fino a dopo la messa online, assicurandomi che ogni
              funzionalità porti un valore reale al tuo lavoro.
            </p>
          </div>

          <div className="chi-footer-quote">
            <i className="bi bi-quote"></i>
            <span>
              Un unico punto di riferimento per trasformare le tue esigenze in
              codice solido e su misura.
            </span>
          </div>
        </article>

        {/* 3 Pilastri di Dedizione (Lato Destro) */}
        <div className="chi-pilastri">
          <div className="pilastro-card vetro">
            <div className="pilastro-icon">
              <i className="bi bi-zoom-in"></i>
            </div>
            <div>
              <h4>Cura maniacale dei dettagli</h4>
              <p>
                Dall'interfaccia grafica alla sicurezza del database, nulla è
                lasciato al caso.
              </p>
            </div>
          </div>

          <div className="pilastro-card vetro">
            <div className="pilastro-icon">
              <i className="bi bi-chat-heart"></i>
            </div>
            <div>
              <h4>Ascolto ed empatia</h4>
              <p>
                Traduco le tue necessità operative in soluzioni tecnologiche
                semplici da usare.
              </p>
            </div>
          </div>

          <div className="pilastro-card vetro">
            <div className="pilastro-icon">
              <i className="bi bi-person-arms-up"></i>
            </div>
            <div>
              <h4>Fianco a fianco, sempre</h4>
              <p>
                Nessun intermediario: ti rispondo io direttamente in ogni fase
                del percorso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
