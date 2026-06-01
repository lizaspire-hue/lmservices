export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* House roof / peak forming the top of the design */}
      <path
        d="M24 2L4 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 2L44 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* L - Left vertical line going down from roof */}
      <path
        d="M4 18V38"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* L - Bottom horizontal */}
      <path
        d="M4 38H16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* M - First vertical from center peak */}
      <path
        d="M24 2V38"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* M - Diagonal down-left */}
      <path
        d="M24 2L16 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* M - Diagonal down-right to connect to right side */}
      <path
        d="M24 2L32 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* M - Right vertical */}
      <path
        d="M44 18V38"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
