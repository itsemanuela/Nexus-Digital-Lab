import { useEffect, useState } from "react";

export default function Metro() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const aggiorna = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    aggiorna();
    window.addEventListener("scroll", aggiorna, { passive: true });
    return () => window.removeEventListener("scroll", aggiorna);
  }, []);

  return (
    <div className="metro" aria-hidden="true">
      <div className="metro-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}
