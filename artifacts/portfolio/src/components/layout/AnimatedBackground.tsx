export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0f1e] pointer-events-none">
      {/* Blueprint Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0ea5e9 1px, transparent 1px),
            linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
        }}
      />
      
      {/* Drifting Radial Gradients Layer */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-80 mix-blend-screen">
        <div 
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] bg-[#0ea5e9] animate-aurora-1"
        />
        <div 
          className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full blur-[140px] bg-[#67e8f9] animate-aurora-2"
        />
      </div>

      {/* Diagonal Scan Line Layer */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04] mix-blend-overlay">
        <div className="w-[200%] h-[200%] absolute top-[-50%] left-[-50%] animate-scan-line">
          <div className="w-full h-full" style={{
            background: 'linear-gradient(45deg, transparent 45%, #0ea5e9 50%, transparent 55%)'
          }} />
        </div>
      </div>
    </div>
  );
}
