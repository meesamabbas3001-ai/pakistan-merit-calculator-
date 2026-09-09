import React from 'react';
import { GraduationCap, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: 'calculator' | 'compare' | 'directory' | 'faq' | 'matcher', uniId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-white font-bold text-base">Pakistan Merit</div>
                <div className="text-xs text-slate-400">Admission Aggregate Calculator</div>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              Official verified admission formulas for NUST, FAST, COMSATS, UET, and top universities across Pakistan.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">University Calculators</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate('calculator', 'fast')} className="hover:text-emerald-400 transition-colors">FAST-NUCES Merit Calculator</button></li>
              <li><button onClick={() => onNavigate('calculator', 'nust')} className="hover:text-emerald-400 transition-colors">NUST Merit Calculator</button></li>
              <li><button onClick={() => onNavigate('calculator', 'comsats')} className="hover:text-emerald-400 transition-colors">COMSATS Merit Calculator</button></li>
              <li><button onClick={() => onNavigate('calculator', 'uet')} className="hover:text-emerald-400 transition-colors">UET Lahore Merit Calculator</button></li>
              <li><button onClick={() => onNavigate('calculator', 'air')} className="hover:text-emerald-400 transition-colors">Air University Calculator</button></li>
              <li><button onClick={() => onNavigate('calculator', 'punjab')} className="hover:text-emerald-400 transition-colors">Punjab University Calculator</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Admission Tools</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate('matcher')} className="hover:text-emerald-400 transition-colors">Find My Best University</button></li>
              <li><button onClick={() => onNavigate('compare')} className="hover:text-emerald-400 transition-colors">Compare Universities</button></li>
              <li><button onClick={() => onNavigate('directory')} className="hover:text-emerald-400 transition-colors">Top 20 Universities Directory</button></li>
              <li><button onClick={() => onNavigate('faq')} className="hover:text-emerald-400 transition-colors">Admission FAQ & Guide</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Verified Security</h4>
            <div className="space-y-3 text-xs">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                Verified Formulas (September 2026)
              </span>
              <p className="text-slate-400">100% Client-Side Secure calculation tool.</p>
            </div>
          </div>
        </div>

        <div className="pt-8 text-xs text-slate-500 text-center space-y-2">
          <p>
            Disclaimer: This calculator is designed to assist Pakistani students in estimating their admission merit aggregates. All calculations are performed locally based on official university admission criteria. Always confirm final merit policies on official university admission portals.
          </p>
          <p>© {new Date().getFullYear()} Pakistan University Merit Calculator. Built for Pakistani Students.</p>
        </div>
      </div>
    </footer>
  );
};
