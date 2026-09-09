import React from 'react';
import { Calculator, CheckCircle2, Award, ShieldCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-700 text-xs font-bold uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
            Transparent Methodology
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            How Merit is Calculated in Pakistan
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
            Understanding how universities weigh your Matric, Intermediate Part-I, and Entry Test marks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 relative">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center text-lg mb-6 shadow-md">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Matric & Inter Part-I</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your obtained marks are divided by total marks to compute exact percentages. Since Intermediate Part-II results are often awaited during admissions, universities officially accept Intermediate Part-I marks as provisional estimates.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 relative">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center text-lg mb-6 shadow-md">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">University Entry Tests</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tests like NUST NET (75%), FAST NU Test (50%), UET ECAT (33%), or NTS NAT carry significant weight. Our calculator automatically applies the exact test weight required by your chosen program.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 relative">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center text-lg mb-6 shadow-md">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Weighted Aggregate Sum</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Each component percentage is multiplied by its institutional weight percentage and summed up to form your final aggregate, rounded precisely to 2 decimal places.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
