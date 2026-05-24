import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon-only' | 'footer';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '' }) => {
  // SVG of the circular logo: orange/white emblem featuring a sleek fox leaping over waves/book-pages
  const LogoIcon = () => (
    <svg 
      viewBox="0 0 500 500" 
      className="w-full h-full select-none"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background shape */}
      <circle cx="250" cy="250" r="230" fill="#F36B21" className="transition-all duration-300" />
      
      {/* Central white outline circle */}
      <circle cx="250" cy="250" r="190" stroke="white" strokeWidth="12" fill="transparent" />
      
      {/* Outer fox tail/body curves */}
      <path 
        d="M 390 220 
           C 390 120, 290 80, 210 110 
           C 160 130, 160 170, 185 180 
           C 200 185, 230 150, 270 150 
           C 310 150, 360 180, 340 260 
           C 335 280, 310 320, 270 330
           C 230 340, 190 320, 190 280
           C 190 250, 220 230, 240 230
           C 260 230, 275 245, 270 265
           C 265 285, 240 295, 225 280
           C 220 275, 210 280, 215 290
           C 225 315, 265 325, 290 300
           C 320 270, 320 220, 290 190
           C 255 155, 200 170, 180 220
           C 165 255, 175 305, 210 335
           C 250 365, 320 365, 360 320
           C 380 295, 390 255, 390 220 Z" 
        fill="white" 
      />

      {/* Elegant Fox Head */}
      <path 
        d="M 180 220 
           C 185 200, 195 180, 215 170 
           C 225 165, 245 165, 255 175
           C 258 178, 255 182, 250 180
           C 240 176, 228 178, 220 186
           C 210 196, 205 210, 205 220
           C 205 225, 200 228, 196 226
           C 188 224, 182 222, 180 220 Z" 
        fill="white" 
      />
      
      {/* Bottom waves / book pages structure */}
      <path 
        d="M 130 350 
           C 180 320, 230 320, 250 345
           C 270 320, 320 320, 370 350 
           C 330 375, 270 375, 250 355
           C 230 375, 170 375, 130 350 Z" 
        fill="white" 
      />
      
      <path 
        d="M 110 380 
           C 165 350, 225 350, 250 375
           C 275 350, 335 350, 390 380 
           C 345 405, 275 405, 250 385
           C 225 405, 155 405, 110 380 Z" 
        fill="white" 
      />
    </svg>
  );

  if (variant === 'icon-only') {
    return (
      <div className={`w-10 h-10 ${className}`}>
        <LogoIcon />
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex flex-col gap-3 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 shadow-sm rounded-full overflow-hidden flex-shrink-0">
            <LogoIcon />
          </div>
          <div>
            <span className="font-display font-bold text-xl tracking-tight text-white">INARI <span className="text-primary">EduBridge</span></span>
            <p className="text-[10px] text-gray-400 font-sans uppercase tracking-wider font-semibold">Study in Japan Portal</p>
          </div>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed font-sans mt-1">
          Your comprehensive guidance portal by the parent brand <strong>INARI Japanese Language Hub</strong>. Supporting your academic ambitions in Japan.
        </p>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-11 h-11 hover:scale-105 transition-transform duration-300 flex-shrink-0 shadow-sm rounded-full">
        <LogoIcon />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-display font-bold text-lg md:text-xl tracking-tight text-charcoal flex items-center gap-1">
          INARI <span className="text-primary font-extrabold">EduBridge</span>
        </span>
        <span className="text-[9px] text-muted font-sans font-medium uppercase tracking-widest hidden sm:inline-block">
          Powered by INARI Japanese Language Hub
        </span>
      </div>
    </div>
  );
};
export default Logo;
