'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '@/lib/data';

export const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {FAQ_DATA.map((faq, index) => {
        const isOpen = activeIndex === index;
        
        return (
          <div 
            key={index} 
            className={`bg-white border rounded-3xl transition-all duration-300 ${
              isOpen 
                ? 'border-primary/30 shadow-md ring-4 ring-primary/5' 
                : 'border-cream hover:border-primary/20 shadow-xs'
            }`}
          >
            {/* Header Accordion Clickable */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-primary' : 'text-muted'}`} />
                <span className="font-bold text-charcoal text-sm sm:text-base leading-snug">
                  {faq.question}
                </span>
              </div>
              
              <div className={`p-1 bg-cream/40 rounded-full text-charcoal transition-transform duration-300 ${
                isOpen ? 'rotate-180 text-primary bg-cream' : ''
              }`}>
                <ChevronDown className="w-4 h-4 shrink-0" />
              </div>
            </button>
            
            {/* Content Accordion panel */}
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-60 border-t border-gray-100' : 'max-h-0'
              }`}
            >
              <div className="p-5 sm:p-6 text-sm text-muted font-medium leading-relaxed bg-cream/5 rounded-b-3xl">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FAQAccordion;
