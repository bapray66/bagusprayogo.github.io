import { useEffect, useState } from "react";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0f1e]">
      {/* Subtle blueprint grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #38bdf8 1px, transparent 1px),
            linear-gradient(to bottom, #38bdf8 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Drifting radial gradients */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-20 bg-gradient-radial from-[#0ea5e9] to-transparent animate-blob"
        style={{ animationDuration: '20s' }}
      />
      
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[150px] opacity-10 bg-gradient-radial from-[#67e8f9] to-transparent animate-blob animation-delay-2000"
        style={{ animationDuration: '25s' }}
      />
    </div>
  );
}
