export default function Logo({ className = "w-12 h-12" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background subtle glowing circle */}
      <circle cx="50" cy="50" r="45" fill="currentColor" fillOpacity="0.03" />
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />

      {/* The X (Cross Arrows) */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeOpacity="0.3">
        {/* Top-Left Arrow */}
        <path d="M25 25 L40 40 M25 25 L32 25 M25 25 L25 32" />
        {/* Top-Right Arrow */}
        <path d="M75 25 L60 40 M75 25 L68 25 M75 25 L75 32" />
        {/* Bottom-Left Arrow */}
        <path d="M25 75 L40 60 M25 75 L32 75 M25 75 L25 68" />
        {/* Bottom-Right Arrow */}
        <path d="M75 75 L60 60 M75 75 L68 75 M75 75 L75 68" />
      </g>

      {/* The Central Monogram "CG" */}
      {/* Outer C */}
      <path 
        d="M62 38 A 20 20 0 1 0 62 62" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinecap="round" 
      />
      {/* Inner G */}
      <path 
        d="M65 50 L53 50 L53 62 C 60 62 65 58 65 50" 
        fill="currentColor" 
      />
      
      {/* Center tech node */}
      <circle cx="50" cy="50" r="3" fill="currentColor" />
    </svg>
  )
}
