import React from 'react';

interface StepGuideCardProps {
  stepNumber: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const StepGuideCard: React.FC<StepGuideCardProps> = ({
  stepNumber,
  icon,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`relative bg-white border border-cream hover:border-primary/30 p-6 sm:p-8 rounded-3xl shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start ${className}`}>
      
      {/* Decorative step counter */}
      <span className="absolute top-4 right-6 font-display font-black text-4xl sm:text-5xl text-primary/5 select-none tracking-tight">
        STEP {stepNumber}
      </span>
      
      {/* Step Icon Container */}
      <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center text-primary shrink-0 shadow-inner">
        {icon}
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] bg-primary text-white font-black font-sans px-2 py-0.5 rounded-full">
            {stepNumber}
          </span>
          <h3 className="text-base sm:text-lg font-bold font-display text-charcoal leading-tight">
            {title}
          </h3>
        </div>
        
        <p className="text-xs sm:text-sm text-muted leading-relaxed font-medium">
          {description}
        </p>
      </div>

    </div>
  );
};
export default StepGuideCard;
