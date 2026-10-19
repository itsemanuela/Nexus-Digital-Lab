const passaggi = [
  {
    num: "01",
    titolo: "Capisco",
    desc: "Una call per capire come lavori, dove perdi tempo e chi userà il sistema.",
    iconClass: "bi bi-search",
    badge: "Discovery",
  },
  {
    num: "02",
    titolo: "Disegno",
    desc: "Ti consegno una proposta chiara con funzioni, tempi e prezzo fisso.",
    iconClass: "bi bi-pencil-ruler",
    badge: "Progettazione",
  },
  {
    num: "03",
    titolo: "Costruisco",
    desc: "Vedi il lavoro online mentre cresce passo passo, non solo alla fine.",
    iconClass: "bi bi-code-slash",
    badge: "Sviluppo Live",
  },
  {
    num: "04",
    titolo: "Pubblico",
    desc: "Messa online, formazione pratica e, se vuoi, manutenzione continua.",
    iconClass: "bi bi-rocket-takeoff-fill",
    badge: "Lancio & Supporto",
  },
];

export default function Metodo() {
  return (
    <section className="blocco" id="metodo">
      <h2>Come lavoriamo, in quattro mosse</h2>
      <p className="lead">
        Un percorso chiaro, trasparente e senza sorprese dall'idea al progetto
        online.
      </p>

      <div className="metodo-grid">
        {passaggi.map((p) => (
          <div key={p.num} className="metodo-card vetro">
            <div className="metodo-head">
              <span className="metodo-num">{p.num}</span>
              <div className="metodo-icon">
                <i className={p.iconClass}></i>
              </div>
            </div>
            <div className="metodo-content">
              <span className="metodo-badge">{p.badge}</span>
              <h3>{p.titolo}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
