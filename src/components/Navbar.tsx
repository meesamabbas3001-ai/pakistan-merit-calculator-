import React from 'react';
import { GraduationCap, Calculator, Scale, BookOpen, HelpCircle, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: 'calculator' | 'compare' | 'directory' | 'faq' | 'matcher';
  setActiveTab: (tab: 'calculator' | 'compare' | 'directory' | 'faq' | 'matcher') => void;
  admissionYear: string;
  setAdmissionYear: (year: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  admissionYear,
  setAdmissionYear,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Title */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('calculator')}>
            <div className="w-12 h-12 bg-emerald-700 rounded-xl flex items-center justify-center text-white shadow-md">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-slate-900 tracking-tight">Pakistan Merit</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full">
                  {admissionYear}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">University Admission Aggregate Calculator</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 p-1.5 rounded-xl">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'calculator'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Calculator className="w-4 h-4" />
              Calculator
            </button>
            <button
              onClick={() => setActiveTab('matcher')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'matcher'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Find My Best University
            </button>
            <button
              onClick={() => setActiveTab('compare')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'compare'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Scale className="w-4 h-4" />
              Compare
            </button>
            <button
              onClick={() => setActiveTab('directory')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'directory'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Top 20
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'faq'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              FAQ
            </button>
          </nav>

          {/* Admission Year Selector */}
          <div className="flex items-center gap-2">
            <label htmlFor="admissionYearSelect" className="text-xs font-semibold text-slate-500 hidden sm:inline">Year:</label>
            <select
              id="admissionYearSelect"
              aria-label="Admission Year"
              value={admissionYear}
              onChange={(e) => setAdmissionYear(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="2026">2026 Cycle</option>
              <option value="2027">2027 Cycle (Projected)</option>
            </select>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="flex md:hidden items-center justify-around py-2.5 border-t border-slate-100 bg-white">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex flex-col items-center text-xs font-medium ${
              activeTab === 'calculator' ? 'text-emerald-700' : 'text-slate-500'
            }`}
          >
            <Calculator className="w-5 h-5 mb-0.5" />
            Calculator
          </button>
          <button
            onClick={() => setActiveTab('matcher')}
            className={`flex flex-col items-center text-xs font-medium ${
              activeTab === 'matcher' ? 'text-emerald-700 font-bold' : 'text-emerald-600'
            }`}
          >
            <Sparkles className="w-5 h-5 mb-0.5" />
            Find Best Uni
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`flex flex-col items-center text-xs font-medium ${
              activeTab === 'compare' ? 'text-emerald-700' : 'text-slate-500'
            }`}
          >
            <Scale className="w-5 h-5 mb-0.5" />
            Compare
          </button>
          <button
            onClick={() => setActiveTab('directory')}
            className={`flex flex-col items-center text-xs font-medium ${
              activeTab === 'directory' ? 'text-emerald-700' : 'text-slate-500'
            }`}
          >
            <BookOpen className="w-5 h-5 mb-0.5" />
            Top 20
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex flex-col items-center text-xs font-medium ${
              activeTab === 'faq' ? 'text-emerald-700' : 'text-slate-500'
            }`}
          >
            <HelpCircle className="w-5 h-5 mb-0.5" />
            FAQ
          </button>
        </div>
      </div>
    </header>
  );
};
