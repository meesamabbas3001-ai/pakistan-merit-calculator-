import React from 'react';
import { ShieldCheck, UserCheck, Zap, RefreshCw, Award, Heart } from 'lucide-react';

export const WhyAggreGate: React.FC = () => {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'Verified Formulas',
      description: 'Every weight ratio is meticulously extracted from official university admission prospectuses and admission office circulars.'
    },
    {
      icon: UserCheck,
      title: 'No Login Required',
      description: 'Calculate your aggregate instantly in your browser without creating accounts, sharing phone numbers, or passwords.'
    },
    {
      icon: Zap,
      title: 'Free Forever',
      description: 'AggreGate is a public service tool dedicated to Pakistani students. No paywalls, premium tiers, or hidden fees.'
    },
    {
      icon: RefreshCw,
      title: 'Updated for 2026',
      description: 'Fully synchronized with the latest 2026 admission cycles, revised test marks, and policy updates across top universities.'
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3 border border-emerald-500/30">
            <Award className="w-3.5 h-3.5" />
            Pakistan’s Trusted Merit Engine
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-white">
            Why AggreGate
          </h2>
          <p className="text-slate-400 text-base">
            Designed to remove guesswork and calculation errors from university admissions. Here is why tens of thousands of Pakistani students trust AggreGate every admission season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-5 border border-emerald-500/30">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{badge.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
