import React from 'react';
import { Quote, GraduationCap } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  origin: string;
  quote: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  origin,
  quote,
  className = ''
}) => {
  // Generate initial characters
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <div className={`bg-white border border-cream rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${className}`}>
      
      {/* Decorative quote icon */}
      <div className="text-primary/10 mb-4">
        <Quote className="w-8 h-8 fill-current stroke-none" />
      </div>
      
      {/* Testimonial Quote */}
      <blockquote className="text-xs sm:text-sm text-charcoal font-medium leading-relaxed italic mb-6">
        "{quote}"
      </blockquote>
      
      {/* Profile Row */}
      <div className="flex items-center gap-3.5 border-t border-cream/50 pt-4">
        {/* Avatar block */}
        <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-primary-dark font-black font-sans text-xs shrink-0 shadow-inner">
          {initials}
        </div>
        
        {/* Profile text */}
        <div className="text-left leading-tight">
          <p className="text-xs font-bold text-charcoal flex items-center gap-1.5">
            <span>{name}</span>
            <span className="text-[9px] bg-primary/10 text-primary-dark font-sans px-1.5 py-0.5 rounded-full uppercase tracking-wider font-extrabold text-[8px]">
              {origin}
            </span>
          </p>
          <p className="text-[10px] text-muted font-medium flex items-center gap-1 mt-0.5">
            <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="truncate max-w-[150px] sm:max-w-[200px]">{role}</span>
          </p>
        </div>
      </div>

    </div>
  );
};
export default TestimonialCard;
