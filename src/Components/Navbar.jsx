export default function Logo() {
  return (
    <span className="marchio">
      <svg
        className="simbolo"
        viewBox="0 0 40 40"
        width="38"
        height="38"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gl" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e8336d" />
            <stop offset="0.6" stopColor="#ff7f5c" />
            <stop offset="1" stopColor="#ffc445" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="12" fill="url(#gl)" />
        <path
          d="M12 28V12l16 16V12"
          fill="none"
          stroke="#fff"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" fill="#3a1140" />
        <circle cx="28" cy="28" r="3" fill="#3a1140" />
      </svg>
      <span className="parole">
        <b>Nexus</b>
        <small>Digital Lab</small>
      </span>
    </span>
  );
}
