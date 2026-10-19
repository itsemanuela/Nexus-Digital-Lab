import { useState } from "react";
import { EMAIL, FORM_ENDPOINT } from "../Components/Config";
import { PrivacyModal } from "../Components/PrivacyModal";

const vuoto = {
  nome: "",
  azienda: "",
  email: "",
  telefono: "",
  attivita: "",
  problema: "",
  budget: "Da definire",
  contatto: "Email",
  consenso: false,
  sito_web: "",
};

export default function FormMisure() {
  const [f, setF] = useState(vuoto);
  const [stato, setStato] = useState("idle");
  // Spostato correttamente qui dentro!
  const [modalPrivacyAperto, setModalPrivacyAperto] = useState(false);

  const set = (k) => (e) =>
    setF({
      ...f,
      [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });

  const invia = async (e) => {
    e.preventDefault();
    if (f.sito_web) {
      setStato("sent");
      return;
    }
    const dati = {
      nome: f.nome,
      azienda: f.azienda,
      email: f.email,
      telefono: f.telefono,
      attivita: f.attivita,
      problema: f.problema,
      budget: f.budget,
      contatto_preferito: f.contatto,
      _subject: `Nuova richiesta da ${f.azienda}`,
    };
    setStato("sending");
    try {
      if (FORM_ENDPOINT) {
        const r = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(dati),
        });
        if (!r.ok) throw new Error("invio fallito");
      } else {
        const corpo = Object.entries(dati)
          .filter(([k]) => k !== "_subject")
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n");
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(dati._subject)}&body=${encodeURIComponent(corpo)}`;
      }
      setStato("sent");
      setF(vuoto);
    } catch {
      setStato("error");
    }
  };

  if (stato === "sent") {
    return (
      <p className="esito" role="status">
        Ricevuto, grazie. Ti rispondo entro un giorno lavorativo.
      </p>
    );
  }

  return (
    <form className="misure" onSubmit={invia}>
      <label>
        Nome e cognome
        <input
          required
          value={f.nome}
          onChange={set("nome")}
          autoComplete="name"
        />
      </label>
      <label>
        Azienda
        <input
          required
          value={f.azienda}
          onChange={set("azienda")}
          autoComplete="organization"
        />
      </label>
      <label>
        Email
        <input
          type="email"
          required
          value={f.email}
          onChange={set("email")}
          autoComplete="email"
        />
      </label>
      <label>
        Telefono
        <input
          type="tel"
          inputMode="tel"
          required={f.contatto === "Telefono"}
          value={f.telefono}
          onChange={set("telefono")}
          autoComplete="tel"
        />
      </label>
      <label className="wide">
        Di cosa si occupa la tua azienda
        <textarea
          rows="2"
          required
          value={f.attivita}
          onChange={set("attivita")}
        />
      </label>
      <label className="wide">
        Cosa non funziona oggi
        <textarea
          rows="3"
          required
          value={f.problema}
          onChange={set("problema")}
        />
      </label>
      <label>
        Budget indicativo
        <select value={f.budget} onChange={set("budget")}>
          <option>Da definire</option>
          <option>Fino a 2.000 €</option>
          <option>Da 2.000 a 6.000 €</option>
          <option>Oltre 6.000 €</option>
        </select>
      </label>
      <label>
        Come preferisci essere ricontattato
        <select value={f.contatto} onChange={set("contatto")}>
          <option>Email</option>
          <option>Telefono</option>
          <option>Videocall</option>
        </select>
      </label>
      <input
        className="esca"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
        value={f.sito_web}
        onChange={set("sito_web")}
        name="sito_web"
      />
      <label className="spunta wide">
        <input
          type="checkbox"
          required
          checked={f.consenso}
          onChange={set("consenso")}
        />
        <span>
          Ho letto l’{" "}
          <button
            type="button"
            onClick={() => setModalPrivacyAperto(true)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              font: "inherit",
              color: "var(--lampone)",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            informativa privacy
          </button>{" "}
          e acconsento al trattamento dei dati per essere ricontattato.
        </span>
      </label>

      {/* Componente Modale */}
      <PrivacyModal
        isOpen={modalPrivacyAperto}
        onClose={() => setModalPrivacyAperto(false)}
      />

      <button
        className="btn-lucente"
        type="submit"
        disabled={stato === "sending"}
      >
        {stato === "sending" ? "Invio in corso…" : "Parliamone"}
      </button>
      {stato === "error" && (
        <p className="esito errore" role="alert">
          Non siamo riusciti a inviare la richiesta. Riprova o scrivimi a{" "}
          {EMAIL}.
        </p>
      )}
    </form>
  );
}
