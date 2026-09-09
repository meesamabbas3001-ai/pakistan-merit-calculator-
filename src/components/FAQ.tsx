import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Why does the calculator use Intermediate Part-I instead of final FSc marks?',
    answer: 'Most Pakistani university admissions (e.g. NUST, FAST, COMSATS, UET) take place before Intermediate Part-II results are announced. Therefore, official admission policies evaluate candidates provisionally using Matric and Intermediate Part-I marks.',
  },
  {
    question: 'Are these official university formulas?',
    answer: 'Yes. Every formula in our database is based on published institutional admission prospectuses and verified criteria (e.g., NUST NET 75% + Inter 15% + Matric 10%).',
  },
  {
    question: 'Does this calculator require registration or login?',
    answer: 'No login, signup, or API key is required. You can open the website and calculate your merit instantly in your browser with complete privacy.',
  },
  {
    question: 'Is the calculated aggregate a guaranteed admission?',
    answer: 'No. Your calculated aggregate is an estimate based on your provided marks. Final admission depends on the official merit lists, category quotas, campus preferences, and annual applicant competition.',
  },
  {
    question: 'Can I compare multiple universities at once?',
    answer: 'Yes! Use our "Compare Universities" mode to enter your marks once and view side-by-side aggregates calculated according to each university’s unique formula.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Know About University Merit
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:bg-slate-50 cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{item.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
