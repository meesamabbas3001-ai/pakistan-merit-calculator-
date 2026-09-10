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
import { UniversityGuideAIChat } from './components/UniversityGuideAIChat';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminPanel } from './components/AdminPanel';
import { ScholarshipsPage } from './components/ScholarshipsPage';
import { AdmissionDeadlinesPage } from './components/AdmissionDeadlinesPage';
import { DegreesPage } from './components/DegreesPage';
import { TrustPages } from './components/TrustPages';
import { UniversityDetailPage } from './components/UniversityDetailPage';
import { getStoredUniversities } from './services/universityStore';
import { Bot, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('calculator');
  const [selectedUniId, setSelectedUniId] = useState<string | undefined>(undefined);
  const [admissionYear, setAdmissionYear] = useState<string>('2026');
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);
  const [chatOpen, setChatOpen] = useState<boolean>(false);
  const [adminLoginOpen, setAdminLoginOpen] = useState<boolean>(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('pakistan_merit_admin_authenticated') === 'true';
  });

  useEffect(() => {
    const handleOpenAdmin = () => setAdminLoginOpen(true);
    window.addEventListener('open-admin-login', handleOpenAdmin as EventListener);
    return () => {
      window.removeEventListener('open-admin-login', handleOpenAdmin as EventListener);
    };
  }, []);
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
    if (pathname.startsWith('/universities/')) {
      const uniId = pathname.replace('/universities/', '').split('/')[0];
      setActiveTab('university-detail');
      setSelectedUniId(uniId);
    } else if (pathname.includes('/scholarships')) {
      setActiveTab('scholarships');
    } else if (pathname.includes('/admission-deadlines')) {
      setActiveTab('admission-deadlines');
    } else if (pathname.includes('/degrees')) {
      setActiveTab('degrees');
    } else if (pathname.includes('/about')) {
      setActiveTab('about');
    } else if (pathname.includes('/contact')) {
      setActiveTab('contact');
    } else if (pathname.includes('/verification-policy')) {
      setActiveTab('verification-policy');
    } else if (pathname.includes('/privacy')) {
      setActiveTab('privacy');
    } else if (pathname.includes('/terms')) {
      setActiveTab('terms');
    } else if (pathname.includes('/fast-merit-calculator')) {
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
    else if (activeTab === 'scholarships') path = '/scholarships';
    else if (activeTab === 'admission-deadlines') path = '/admission-deadlines';
    else if (activeTab === 'degrees') path = '/degrees';
    else if (activeTab === 'about') path = '/about';
    else if (activeTab === 'contact') path = '/contact';
    else if (activeTab === 'verification-policy') path = '/verification-policy';
    else if (activeTab === 'privacy') path = '/privacy';
    else if (activeTab === 'terms') path = '/terms';
    else if (activeTab === 'university-detail' && selectedUniId) path = `/universities/${selectedUniId}`;
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
    if (seoConfig) {
      updateDocumentSeo(seoConfig);
    }
  }, [activeTab, selectedUniId]);

  const handleNavigate = (tab: string, uniId?: string) => {
    if (tab === 'universities' && uniId) {
      setActiveTab('university-detail');
      setSelectedUniId(uniId);
    } else {
      setActiveTab(tab);
      if (uniId !== undefined) {
        setSelectedUniId(uniId);
      }
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

  if (isAdminLoggedIn) {
    return (
      <AdminPanel
        onLogout={() => {
          localStorage.removeItem('pakistan_merit_admin_authenticated');
          setIsAdminLoggedIn(false);
        }}
        onExit={() => setIsAdminLoggedIn(false)}
      />
    );
  }

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

        {activeTab === 'scholarships' && (
          <ScholarshipsPage onNavigate={handleNavigate} />
        )}

        {activeTab === 'admission-deadlines' && (
          <AdmissionDeadlinesPage onNavigate={handleNavigate} />
        )}

        {activeTab === 'degrees' && (
          <DegreesPage onNavigate={handleNavigate} />
        )}

        {(activeTab === 'about' || activeTab === 'contact' || activeTab === 'verification-policy' || activeTab === 'privacy' || activeTab === 'terms') && (
          <TrustPages pageType={activeTab as any} onNavigate={handleNavigate} />
        )}

        {activeTab === 'university-detail' && (
          <UniversityDetailPage
            university={getStoredUniversities().find(u => u.id === selectedUniId) || UNIVERSITIES_DATA[0]}
            onNavigate={handleNavigate}
            onCalculateForUni={(uniId) => handleNavigate('calculator', uniId)}
          />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Floating AI Chatbot Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 z-40 bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-3.5 rounded-full shadow-xl flex items-center gap-2.5 transition-all transform hover:scale-105 group border-2 border-emerald-600/50"
        aria-label="Open University Guide AI"
      >
        <div className="relative">
          <Bot className="w-6 h-6 text-emerald-200 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-emerald-800 animate-pulse"></span>
        </div>
        <div className="text-left hidden sm:block">
          <div className="text-xs font-bold leading-tight">University Guide AI</div>
          <div className="text-[10px] text-emerald-200">Verified Admission Assistant</div>
        </div>
      </button>

      {/* Chatbot Window */}
      <UniversityGuideAIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={adminLoginOpen}
        onClose={() => setAdminLoginOpen(false)}
        onLoginSuccess={() => setIsAdminLoggedIn(true)}
      />
    </div>
  );
}
