import React, { useState } from 'react';
import type { Faq } from '../types';
import { ChevronDownIcon } from './Icons';

interface FaqItemProps {
  faq: Faq;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left"
      >
        <h3 className="text-lg font-medium text-slate-800">{faq.question}</h3>
        <ChevronDownIcon
          className={`h-6 w-6 flex-shrink-0 text-emerald-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div
            className="prose prose-slate mt-3 max-w-none text-slate-600"
            dangerouslySetInnerHTML={{ __html: faq.answer }}
          />
        </div>
      </div>
    </div>
  );
};

export default FaqItem;