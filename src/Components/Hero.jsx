import { useEffect, useState } from "react";

const righe = [
  { t: "$ nexus new progetto --su-misura", c: "cmd" },
  { t: "✔ interlocutore unico", c: "ok" },
  { t: "✔ prezzo fisso", c: "ok" },
  { t: "✔ codice tuo", c: "ok" },
];

const totale = righe.reduce((n, r) => n + r.t.length, 0);

function useDigitazione() {
  const ridotto =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(ridotto ? totale : 0);

  useEffect(() => {
    if (ridotto) return undefined;
    const id = setInterval(() => setN((x) => (x >= totale ? x : x + 1)), 34);
    return () => clearInterval(id);
  }, [ridotto]);

  return n;
}

export default function Hero() {
  const n = useDigitazione();
  let resto = n;

  return (
    <section className="hero">
      <div className="blob uno" aria-hidden="true" />
      <div className="blob due" aria-hidden="true" />
      <div className="hero-grid">
        <div>
          <span className="badge">
            <i aria-hidden="true" />
            Disponibile per nuovi progetti
          </span>
          <h1>
            Siti e software <mark>su misura</mark>, fatti da chi li progetta.
          </h1>
          <p className="lead">
            Sono Emanuela, sviluppatrice full stack. Costruisco siti e
            gestionali per aziende: prezzo fisso, un solo interlocutore e codice
            che resta tuo.
          </p>
          <div className="azioni">
            <a className="btn" href="#misure">
              Parliamone
            </a>
            <a className="btn ghost" href="#caso">
              Guarda un progetto reale
            </a>
          </div>
          <ul className="punti">
            <li>Prima call gratuita</li>
            <li>Preventivo a prezzo fisso</li>
            <li>Dominio e hosting intestati a te</li>
          </ul>
        </div>

        <div
          className="scena"
          role="img"
          aria-label="Anteprima di un sito aziendale con pagamenti online, area clienti e gestionale"
        >
          <div className="browser" aria-hidden="true">
            <div className="barra">
              <span />
              <span />
              <span />
              <i>tuaazienda.it</i>
            </div>
            <div className="pagina">
              <div className="p-hero">
                <b />
                <b />
                <em />
              </div>
              <div className="p-cards">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
          <div className="terminale" aria-hidden="true">
            <div className="corpo">
              {righe.map((r, i) => {
                const parte = r.t.slice(0, Math.max(0, resto));
                resto -= r.t.length;
                return (
                  <div key={i} className={`riga ${r.c}`}>
                    {parte}
                  </div>
                );
              })}
              <span className="cursore" />
            </div>
          </div>
          <span className="sticker s1" aria-hidden="true">
            Pagamenti online
          </span>
          <span className="sticker s2" aria-hidden="true">
            Area clienti
          </span>
          <span className="sticker s3" aria-hidden="true">
            Gestionale
          </span>
        </div>
      </div>
    </section>
  );
}
