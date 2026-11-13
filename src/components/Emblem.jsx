export default function Emblem({ className = 'emblem' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      stroke="#c9a45c"
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="94" strokeWidth="1" opacity=".5" />
      <circle cx="100" cy="100" r="86" strokeWidth=".6" opacity=".35" strokeDasharray="2 6" />
      {/* šestar / compasso */}
      <circle cx="100" cy="38" r="7" />
      <path d="M96 44 L52 150 M104 44 L148 150" />
      <path d="M70 108 Q100 96 130 108" strokeWidth="2" />
      {/* uglomer / squadra */}
      <path d="M44 128 L100 172 L156 128" strokeWidth="4" />
      {/* oko / occhio */}
      <path d="M84 100 Q100 88 116 100 Q100 112 84 100 Z" strokeWidth="1.6" />
      <circle cx="100" cy="100" r="3.5" fill="#e8cf8f" stroke="none" />
    </svg>
  )
}
