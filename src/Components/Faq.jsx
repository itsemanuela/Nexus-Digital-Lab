const domande = [
  {
    q: "Perché non conviene usare Wix o un template pronto?",
    a: "I builder come Wix o i template pre-fatti vanno bene per hobby, ma limitano la crescita della tua azienda: ti trovi con un sito lento, uguale a mille altri e con canoni mensili che aumentano nel tempo. Un sistema su misura è veloce, unico e si adatta esattamente ai tuoi processi operativi, risultando molto più conveniente nel tempo.",
    tag: "Confronto",
  },
  {
    q: "E se un domani tu non dovessi più seguire il progetto?",
    a: "Trasparenza totale: il codice sorgente, il dominio e l'hosting sono intestati a te al 100% fin dal primo giorno. Scrivo codice pulito, documentato e standard (React, Spring Boot) in modo che qualsiasi altro sviluppatore professionista possa prenderlo in mano in qualsiasi momento senza vincoli.",
    tag: "Garanzia",
  },
  {
    q: "Come funziona per i costi e i preventivi?",
    a: "Nessuna sorpresa o costo imprevisto. Analizziamo insieme le tue esigenze reali e ricevi un preventivo dettagliato a prezzo fisso prima di iniziare. Il prezzo concordato non cambia a metà lavoro.",
    tag: "Trasparenza",
  },
  {
    q: "Chi mi segue e fornisce assistenza dopo la consegna?",
    a: "Troverai sempre me come interlocutrice unica. Dopo il lancio puoi scegliere se attivare un piano di manutenzione e aggiornamento periodico oppure richiedere interventi puntuali solo quando ne hai bisogno.",
    tag: "Assistenza",
  },
];

export default function Faq() {
  return (
    <section className="blocco" id="faq">
      <h2>Domande che mi fanno spesso</h2>
      <p className="lead">
        Risposte chiare per eliminare ogni dubbio prima di iniziare il tuo
        progetto.
      </p>

      <div className="faq-container">
        {domande.map((d, index) => (
          <details key={d.q} className="faq-card vetro">
            <summary className="faq-summary">
              <span className="faq-num">0{index + 1}</span>
              <span className="faq-titolo">{d.q}</span>
              <span className="faq-badge">{d.tag}</span>
              <span className="faq-icon" aria-hidden="true" />
            </summary>
            <div className="faq-risposta">
              <p>{d.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
