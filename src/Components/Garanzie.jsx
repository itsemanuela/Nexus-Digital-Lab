export default function Garanzie() {
  return (
    <section className="blocco garanzie" id="garanzie">
      <h2>Prezzo fisso. Codice tuo. Paghi a tappe.</h2>
      <p className="lead">
        Il pagamento è diviso in tre momenti trasparenti. Se una tappa non ti
        convince, ci fermiamo e ne parliamo insieme.
      </p>

      <div className="tappe-grid">
        {/* Tappa 1 */}
        <div className="tappa-card vetro">
          <div className="tappa-header">
            <span className="tappa-percento">33%</span>
            <div className="tappa-icon">
              <i className="bi bi-rocket-takeoff"></i>
            </div>
          </div>
          <h3>1. Avvio Lavori</h3>
          <p>
            Anticipo alla firma del contratto per bloccare i tempi e avviare
            l'analisi.
          </p>
          <span className="tappa-badge">Fase 01</span>
        </div>

        {/* Tappa 2 */}
        <div className="tappa-card vetro">
          <div className="tappa-header">
            <span className="tappa-percento">33%</span>
            <div className="tappa-icon">
              <i className="bi bi-eye"></i>
            </div>
          </div>
          <h3>2. Metà Lavori</h3>
          <p>
            Verifica del prototipo funzionante online prima di procedere al
            completamento.
          </p>
          <span className="tappa-badge">Fase 02</span>
        </div>

        {/* Tappa 3 */}
        <div className="tappa-card vetro">
          <div className="tappa-header">
            <span className="tappa-percento">34%</span>
            <div className="tappa-icon">
              <i className="bi bi-check2-circle"></i>
            </div>
          </div>
          <h3>3. Consegna Finale</h3>
          <p>
            Saldo alla messa online definitiva e al trasferimento di codici e
            domini.
          </p>
          <span className="tappa-badge">Fase 03</span>
        </div>
      </div>
    </section>
  );
}
