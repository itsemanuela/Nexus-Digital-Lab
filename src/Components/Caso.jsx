import { CASE_URL } from "../Components/Config";

export default function Caso() {
  return (
    <section className="blocco" id="caso">
      <h2>Da forno a legna a negozio online con gestionale</h2>

      <div className="caso-card vetro">
        <div className="caso-testo">
          <p className="lead-caso">
            <strong>Antico Forno Matillo</strong>, panificio artigiano dal 1946,
            aveva bisogno di far arrivare il proprio lavoro oltre il banco.
          </p>
          <p>
            Ho costruito un sistema completo: vendita online con pagamento,
            richieste di catering con preventivo calcolato in tempo reale,
            prenotazione di laboratori, una chat che mostra lo stato dell’ordine
            e un pannello per gestire tutto senza toccare il codice.
          </p>

          <div className="tags-progetto">
            <span className="chip">E-Commerce</span>
            <span className="chip">Preventivi Real-Time</span>
            <span className="chip">Booking Lab</span>
            <span className="chip">Gestionale</span>
          </div>

          <a
            className="btn-lucente"
            href={CASE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apri il sito online ↗
          </a>
        </div>

        <div className="caso-features">
          <div className="feature-box">
            <div className="feature-icon">🛒</div>
            <div>
              <strong>Shop & Pagamenti</strong>
              <span>Vendita prodotti diretta e integrata</span>
            </div>
          </div>

          <div className="feature-box">
            <div className="feature-icon">⚡</div>
            <div>
              <strong>Preventivi Catering</strong>
              <span>Calcolo istantaneo in tempo reale</span>
            </div>
          </div>

          <div className="feature-box">
            <div className="feature-icon">💬</div>
            <div>
              <strong>Chat & Stato Ordini</strong>
              <span>Assistenza e tracciamento live</span>
            </div>
          </div>

          <div className="feature-box">
            <div className="feature-icon">⚙️</div>
            <div>
              <strong>Pannello No-Code</strong>
              <span>Gestione autonoma per il cliente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
