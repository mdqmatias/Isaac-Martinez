import './BackgroundPattern.css';

export default function BackgroundPattern() {
  return (
    <div className="bg-pattern" aria-hidden="true">
      {/* Geometric grid lines */}
      <svg className="bg-grid" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="grid-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />
          </pattern>
          <pattern id="grid-dots" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="0" cy="0" r="1" fill="rgba(139,92,246,0.08)" />
          </pattern>
          <radialGradient id="fade-mask" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="fade">
            <rect width="100%" height="100%" fill="url(#fade-mask)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" mask="url(#fade)" />
        <rect width="100%" height="100%" fill="url(#grid-dots)" mask="url(#fade)" />
      </svg>

      {/* Floating glow orbs */}
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>
    </div>
  );
}
