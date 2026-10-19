export default function Problema() {
  return (
    <section className="blocco" id="problema">
      <div className="problema-header">
        <span className="perche-badge">01. Il Problema</span>
        <h2>Ti suona familiare?</h2>
        <p className="lead">
          Quando gli strumenti digitali lavorano "a pezzi", la tua attività
          perde tempo, contatti e opportunità.
        </p>
      </div>

      <div className="problema-grid">
        {/* I 3 Punti di Dolore (Pain Points) */}
        <div className="problema-cards">
          <div className="problema-card">
            <div className="problema-icon">
              <i className="bi bi-chat-dots-fill"></i>
            </div>
            <div>
              <h4>Ordini sparsi su WhatsApp</h4>
              <p>
                Messaggi persi, risposte in ritardo e gestione manuale dei
                clienti.
              </p>
            </div>
          </div>

          <div className="problema-card">
            <div className="problema-icon">
              <i className="bi bi-file-earmark-spreadsheet-fill"></i>
            </div>
            <div>
              <h4>Prenotazioni su Fogli Excel</h4>
              <p>Processi farraginosi, rischio di errori e zero automazione.</p>
            </div>
          </div>

          <div className="problema-card">
            <div className="problema-icon">
              <i className="bi bi-globe2"></i>
            </div>
            <div>
              <h4>Sito Vetrina Inutile</h4>
              <p>
                Il sito esiste, ma nessuno ti scrive né converte contatti reali.
              </p>
            </div>
          </div>
        </div>

        {/* Card di Soluzione (High Impact) */}
        <div className="soluzione-card">
          <div className="soluzione-badge">
            <i className="bi bi-stars"></i> La Soluzione Nexus
          </div>
          <h3>Noi facciamo il contrario</h3>
          <p>
            Gli strumenti standard ti chiedono di adattare la tua attività a
            come funzionano loro. Io parto da <strong>come lavori tu</strong> e
            costruisco l'intero sistema digitale attorno alle tue esigenze
            reali.
          </p>
          <a href="#misure" className="card-button">
            Inizia a semplificare ↗
          </a>
        </div>
      </div>
    </section>
  );
}
