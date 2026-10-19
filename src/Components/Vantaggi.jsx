const vantaggi = [
  {
    t: "Un solo interlocutore",
    p: "Niente passaggi tra account, project manager e sviluppatori: chi ti ascolta è chi costruisce, e nulla si perde per strada.",
    badge: "01. Contatto Diretto",
    iconClass: "bi bi-person-check-fill",
    bad: "Agenzie: telefoni senza fili e ritardi",
    good: "Sviluppatore unico: risposta diretta e rapida",
  },
  {
    t: "Prezzo fisso",
    p: "Prima di scrivere codice definiamo cosa è incluso. Il preventivo non cambia a metà strada e ogni richiesta extra viene valutata prima di partire.",
    badge: "02. Trasparenza",
    iconClass: "bi bi-shield-lock-fill",
    bad: "Template: costi imprevisti per plugin extra",
    good: "Prezzo chiavi in mano definito al 100%",
  },
  {
    t: "Il codice è tuo",
    p: "Niente canone per utente, nessun vincolo di piattaforma. Dominio e hosting sono intestati a te e il progetto può proseguire con chiunque.",
    badge: "03. Libertà",
    iconClass: "bi bi-code-square",
    bad: "Wix o Shopify: canoni mensili a vita",
    good: "Proprietà totale e codice standard",
  },
];

export default function Vantaggi() {
  return (
    <section className="blocco" id="perche-noi">
      <h2>Tre cose che un template non ti darà</h2>
      <p className="lead">
        La differenza tra un sito in serie e un sistema creato su misura per far
        crescere la tua attività.
      </p>

      <div className="perche-grid">
        {vantaggi.map((v) => (
          <article key={v.t} className="perche-card vetro">
            <div className="perche-head">
              <span className="perche-badge">{v.badge}</span>
              <div className="perche-icon">
                <i className={v.iconClass}></i>
              </div>
            </div>

            <div className="perche-content">
              <h3>{v.t}</h3>
              <p>{v.p}</p>
            </div>

            <div className="perche-versus">
              <div className="vs-item bad">
                <i className="bi bi-x-lg me-2"></i>
                {v.bad}
              </div>
              <div className="vs-item good">
                <i className="bi bi-check-lg me-2"></i>
                {v.good}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
