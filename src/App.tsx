import React, { useState, useEffect } from 'react';
import { UNIVERSITIES_DATA } from './data/universities';
import { CalculationResult, MeritInput } from './types';
import { SEO_PAGES, getSeoConfigForPath } from './data/seoPages';
import { updateDocumentSeo } from './utils/seo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CalculatorSection } from './components/CalculatorSection';
import { ResultCard } from './components/ResultCard';
import { UniversityComparison } from './components/UniversityComparison';
import { UniversityDirectory } from './components/UniversityDirectory';
import { UniversityMatcherSection } from './components/UniversityMatcherSection';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'calculator' | 'compare' | 'directory' | 'faq' | 'matcher'>('calculator');
  const [selectedUniId, setSelectedUniId] = useState<string | undefined>(undefined);
  const [admissionYear, setAdmissionYear] = useState<string>('2026');
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);
  const [currentMarks, setCurrentMarks] = useState<MeritInput>({
    matricObtained: 1050,
    matricTotal: 1100,
    interObtained: 500,
    interTotal: 550,
    testObtained: 156,
    testTotal: 200,
  });

  // Initialize route from window.location.pathname on mount
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname.includes('/fast-merit-calculator')) {
      setActiveTab('calculator');
      setSelectedUniId('fast');
    } else if (pathname.includes('/comsats-merit-calculator')) {
      setActiveTab('calculator');
      setSelectedUniId('comsats');
    } else if (pathname.includes('/nust-merit-calculator')) {
      setActiveTab('calculator');
      setSelectedUniId('nust');
    } else if (pathname.includes('/uet-lahore-merit-calculator')) {
      setActiveTab('calculator');
      setSelectedUniId('uet');
    } else if (pathname.includes('/air-university-merit-calculator')) {
      setActiveTab('calculator');
      setSelectedUniId('air');
    } else if (pathname.includes('/uaf-merit-calculator')) {
      setActiveTab('calculator');
      setSelectedUniId('uaf');
    } else if (pathname.includes('/punjab-university-merit-calculator')) {
      setActiveTab('calculator');
      setSelectedUniId('punjab');
    } else if (pathname.includes('/compare')) {
      setActiveTab('compare');
    } else if (pathname.includes('/matcher')) {
      setActiveTab('matcher');
    } else if (pathname.includes('/directory')) {
      setActiveTab('directory');
    } else if (pathname.includes('/faq')) {
      setActiveTab('faq');
    }
  }, []);

  // Update URL pathname and SEO metadata when tab or university changes
  useEffect(() => {
    let path = '/';
    if (activeTab === 'compare') path = '/compare';
    else if (activeTab === 'matcher') path = '/matcher';
    else if (activeTab === 'directory') path = '/directory';
    else if (activeTab === 'faq') path = '/faq';
    else if (activeTab === 'calculator') {
      if (selectedUniId === 'fast') path = '/fast-merit-calculator';
      else if (selectedUniId === 'comsats') path = '/comsats-merit-calculator';
      else if (selectedUniId === 'nust') path = '/nust-merit-calculator';
      else if (selectedUniId === 'uet') path = '/uet-lahore-merit-calculator';
      else if (selectedUniId === 'air') path = '/air-university-merit-calculator';
      else if (selectedUniId === 'uaf') path = '/uaf-merit-calculator';
      else if (selectedUniId === 'punjab') path = '/punjab-university-merit-calculator';
      else path = '/';
    }

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }

    const seoConfig = getSeoConfigForPath(path);
    updateDocumentSeo(seoConfig);
  }, [activeTab, selectedUniId]);

  const handleNavigate = (tab: 'calculator' | 'compare' | 'directory' | 'faq' | 'matcher', uniId?: string) => {
    setActiveTab(tab);
    if (uniId !== undefined) {
      setSelectedUniId(uniId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCalculationComplete = (res: CalculationResult) => {
    setCalculationResult(res);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectUniversityFromDirectory = (uniId: string) => {
    setActiveTab('calculator');
    setSelectedUniId(uniId);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => handleNavigate(tab)}
        admissionYear={admissionYear}
        setAdmissionYear={setAdmissionYear}
      />

      <main className="flex-1">
        {activeTab === 'calculator' && (
          <>
            {!calculationResult ? (
              <>
                <Hero
                  onStartClick={() => {
                    const el = document.getElementById('calculator');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onCompareClick={() => handleNavigate('compare')}
                />
                <div className="max-w-7xl mx-auto px-4 pt-6">
                  <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-2xl p-6 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-emerald-300 text-xs font-semibold uppercase tracking-wider">New Feature</span>
                      <h3 className="text-xl font-bold mt-1">Want personalized recommendations?</h3>
                      <p className="text-emerald-100 text-sm mt-0.5">Find universities matching your marks, budget, location & career goals instantly.</p>
                    </div>
                    <button
                      onClick={() => handleNavigate('matcher')}
                      className="px-6 py-3 bg-white text-emerald-900 font-semibold rounded-xl text-sm shadow-sm hover:bg-emerald-50 transition-all whitespace-nowrap"
                    >
                      Find My Best University →
                    </button>
                  </div>
                </div>
                <CalculatorSection
                  universities={UNIVERSITIES_DATA}
                  admissionYear={admissionYear}
                  onCalculationComplete={handleCalculationComplete}
                  onMarksChange={setCurrentMarks}
                  initialUniversityId={selectedUniId}
                />
                <HowItWorks />
                <FAQ />
              </>
            ) : (
              <ResultCard
                result={calculationResult}
                onRecalculate={() => setCalculationResult(null)}
                onCompareMore={() => handleNavigate('compare')}
              />
            )}
          </>
        )}

        {activeTab === 'matcher' && (
          <div className="py-6">
            <UniversityMatcherSection
              currentMarks={currentMarks}
              onUpdateMarks={setCurrentMarks}
            />
          </div>
        )}

        {activeTab === 'compare' && (
          <UniversityComparison
            universities={UNIVERSITIES_DATA}
            admissionYear={admissionYear}
            onSelectUniversity={(uniId) => {
              handleNavigate('calculator', uniId);
            }}
          />
        )}

        {activeTab === 'directory' && (
          <UniversityDirectory
            universities={UNIVERSITIES_DATA}
            onSelectAndCalculate={handleSelectUniversityFromDirectory}
          />
        )}

        {activeTab === 'faq' && (
          <div className="py-12">
            <FAQ />
            <HowItWorks />
          </div>
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
