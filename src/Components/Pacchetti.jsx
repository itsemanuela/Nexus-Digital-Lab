export default function Pacchetti() {
  return (
    <section className="blocco" id="pacchetti">
      <h2>Tre punti di partenza</h2>

      <div className="pacchetti-grid">
        {/* Card 1: Sito Vetrina */}
        <div className="glass-solid">
          <div className="pack-header">
            <span className="pack-icon">🚀</span>
            <span className="pack-badge">Standard</span>
          </div>
          <h3>Sito vetrina</h3>
          <p>
            Il sito che porta contatti. Veloce, curato, con ottimizzazione di
            base per Google e un modulo che funziona.
          </p>
          <ul className="pack-list">
            <li>Design unico e responsive</li>
            <li>SEO base e velocità elevata</li>
            <li>Modulo contatti integrato</li>
          </ul>
          <a href="#misure" className="btn ghost small">
            Richiedi info
          </a>
        </div>

        {/* Card 2: Sito con funzioni (In Evidenza) */}
        <div className="glass-solid pack-featured">
          <div className="pack-header">
            <span className="pack-icon">⚡</span>
            <span className="pack-badge highlight">Consigliato</span>
          </div>
          <h3>Sito con funzioni</h3>
          <p>
            Il sito che lavora per te. Vendita online, prenotazioni, area
            riservata e pannello di gestione.
          </p>
          <ul className="pack-list">
            <li>E-commerce / Shop completo</li>
            <li>Sistema prenotazioni & chat</li>
            <li>Pannello di gestione integrato</li>
          </ul>
          <a href="#misure" className="btn small">
            Parliamone ↗
          </a>
        </div>

        {/* Card 3: Gestionale su misura */}
        <div className="glass-solid">
          <div className="pack-header">
            <span className="pack-icon">⚙️</span>
            <span className="pack-badge">Enterprise</span>
          </div>
          <h3>Gestionale su misura</h3>
          <p>
            Il software che sostituisce fogli e passaggi a mano. Parto
            dall’analisi dei tuoi processi e costruisco il sistema attorno.
          </p>
          <ul className="pack-list">
            <li>Architettura su misura</li>
            <li>Automazione flussi di lavoro</li>
            <li>Codice 100% di tua proprietà</li>
          </ul>
          <a href="#misure" className="btn ghost small">
            Analizziamo le esigenze
          </a>
        </div>
      </div>

      <p className="piccolo" style={{ marginTop: "24px" }}>
        Ogni progetto parte da una call gratuita e da un preventivo a prezzo
        fisso.
      </p>
    </section>
  );
}
