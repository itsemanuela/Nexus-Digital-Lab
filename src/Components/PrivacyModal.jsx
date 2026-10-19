import React from "react";

export function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="privacy-modal-overlay" onClick={onClose}>
      <div className="privacy-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="privacy-modal-header">
          <h3>Informativa sulla Privacy</h3>
          <button className="privacy-close-btn" onClick={onClose} type="button">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="privacy-modal-body">
          <p>
            <strong>Titolare del Trattamento:</strong> Nexus Digital Lab di
            Emanuela Carrubba
          </p>
          <p>
            <strong>Finalità del trattamento:</strong> I dati personali inseriti
            nel modulo (nome, email, telefono, dettagli aziendali) vengono
            raccolti e trattati esclusivamente al fine di ricontattarti per
            evadere la tua richiesta di informazioni o preventivo.
          </p>
          <p>
            <strong>Base giuridica:</strong> Esecuzione di misure
            precontrattuali adottate su richiesta dell'interessato.
          </p>
          <p>
            <strong>Conservazione:</strong> I dati saranno conservati per il
            tempo strettamente necessario a gestire la richiesta e non saranno
            mai ceduti a terzi o utilizzati per invio di spam.
          </p>
          <p>
            <strong>Diritti:</strong> Potrai in qualsiasi momento richiedere
            l'accesso, la rettifica o la cancellazione dei tuoi dati scrivendo
            direttamente via email.
          </p>
        </div>
      </div>
    </div>
  );
}
