import React from 'react';
import { Award, ShieldCheck, Sparkles, ArrowRight, Calculator } from 'lucide-react';
import { motion } from 'motion/react';
import { getLocalCmsContent } from '../services/cmsStore';

interface HeroProps {
  onStartClick: () => void;
  onCompareClick: () => void;
  cmsContent?: Record<string, string>;
}

export const Hero: React.FC<HeroProps> = ({ onStartClick, onCompareClick, cmsContent }) => {
  const content = cmsContent || getLocalCmsContent();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white py-20 sm:py-28">
      {/* Background Animated Orbs / Gradient shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-2xl pointer-events-none animate-float-slow"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none animate-float-delayed"></div>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          {content['hero_badge'] || 'Official Verified Admission Formulas for Top 20 Pakistani Universities'}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6"
        >
          {content['hero_title'] ? (
            <span>{content['hero_title']}</span>
          ) : (
            <>Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">University Merit</span></>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 mb-10 leading-relaxed"
        >
          {content['hero_subtitle'] || "Enter your Matric, Intermediate Part-I, and entry-test marks once to accurately estimate your admission aggregate across Pakistan's leading engineering, medical, computing, and general universities."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base transition-all shadow-lg shadow-emerald-500/30 cursor-pointer"
          >
            {content['primary_cta'] || 'Start Merit Calculation'}
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onCompareClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-base transition-all cursor-pointer shadow-sm"
          >
            {content['secondary_cta'] || 'Compare Multiple Universities'}
          </motion.button>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left"
        >
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-xs hover:border-emerald-500/50 transition-all shadow-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-sm">Verified Formulas</h3>
            <p className="text-xs text-slate-400 mt-1">Based on official university prospectus & admission criteria.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-xs hover:border-emerald-500/50 transition-all shadow-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-sm">Part-I Accurate</h3>
            <p className="text-xs text-slate-400 mt-1">Handles Intermediate Part-I estimates correctly as required.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-xs hover:border-emerald-500/50 transition-all shadow-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-sm">Top 20 Coverage</h3>
            <p className="text-xs text-slate-400 mt-1">NUST, FAST, COMSATS, UET, GIKI, PIEAS, LUMS and more.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-xs hover:border-emerald-500/50 transition-all shadow-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-sm">No Login Required</h3>
            <p className="text-xs text-slate-400 mt-1">Instant local calculation with 100% privacy and zero friction.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
