import React from 'react';
import { Award, ShieldCheck, Sparkles, ArrowRight, Calculator } from 'lucide-react';

interface HeroProps {
  onStartClick: () => void;
  onCompareClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartClick, onCompareClick }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white py-16 sm:py-24">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          Official Verified Admission Formulas for Top 20 Pakistani Universities
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
          Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">University Merit</span>
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 mb-10 leading-relaxed">
          Enter your Matric, Intermediate Part-I, and entry-test marks once to accurately estimate your admission aggregate across Pakistan's leading engineering, medical, computing, and general universities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base transition-all shadow-lg shadow-emerald-500/25 cursor-pointer"
          >
            Start Merit Calculation
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={onCompareClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-base transition-all cursor-pointer"
          >
            Compare Multiple Universities
          </button>
        </div>

        {/* Feature Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-sm">Verified Formulas</h3>
            <p className="text-xs text-slate-400 mt-1">Based on official university prospectus & admission criteria.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-sm">Part-I Accurate</h3>
            <p className="text-xs text-slate-400 mt-1">Handles Intermediate Part-I estimates correctly as required.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-sm">Top 20 Coverage</h3>
            <p className="text-xs text-slate-400 mt-1">NUST, FAST, COMSATS, UET, GIKI, PIEAS, LUMS and more.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-sm">No Login Required</h3>
            <p className="text-xs text-slate-400 mt-1">Instant local calculation with 100% privacy and zero friction.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
