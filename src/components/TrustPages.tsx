import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { ShieldCheck, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';

interface TrustPagesProps {
  pageType: 'about' | 'contact' | 'verification-policy' | 'privacy' | 'terms';
  onNavigate: (path: string) => void;
}

export function TrustPages({ pageType, onNavigate }: TrustPagesProps) {
  const titles = {
    about: 'About University Guide Pakistan',
    contact: 'Contact Us & Admin Support',
    'verification-policy': 'Data Verification Policy',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Breadcrumbs
        items={[{ label: titles[pageType] }]}
        onNavigate={onNavigate}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
          {pageType === 'about' && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">About University Guide Pakistan</h1>
              <p className="text-slate-600 leading-relaxed">
                University Guide Pakistan is the country's most trusted student platform, dedicated to providing accurate merit calculators, verified university admission criteria, fee structures, scholarship directories, and AI-powered guidance for undergraduate aspirants.
              </p>
              <h2 className="text-xl font-semibold text-slate-800 pt-4">Our Core Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                Navigating university admissions in Pakistan can be overwhelming. Our mission is to eliminate guesswork and misinformation by maintaining a rigorously verified database of top Pakistani universities, accurate aggregate formulas (NUST, FAST, COMSATS, UET, etc.), and transparent eligibility requirements.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-emerald-900 mt-6">
                <h3 className="font-semibold mb-2 flex items-center">
                  <ShieldCheck className="w-5 h-5 mr-2 text-emerald-600" />
                  100% Verified Data Guarantee
                </h3>
                <p className="text-sm text-emerald-800">
                  Every merit formula and admission criterion on our platform is cross-referenced with official university admission prospectuses and updated for the Fall 2026 academic session.
                </p>
              </div>
            </div>
          )}

          {pageType === 'contact' && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Contact Us & Admin Support</h1>
              <p className="text-slate-600 leading-relaxed">
                Have questions about a university admission criteria, need help with merit calculation, or want to report an updated fee structure? Reach out to our admin team.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email Support</h3>
                    <p className="text-sm text-slate-600">support@universityguide.pk</p>
                    <p className="text-xs text-slate-500 mt-1">Response time: Within 24 hours</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Location</h3>
                    <p className="text-sm text-slate-600">Blue Area, Islamabad, Pakistan</p>
                    <p className="text-xs text-slate-500 mt-1">Academic & Data Verification Cell</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {pageType === 'verification-policy' && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Data Verification Policy</h1>
              <p className="text-slate-600 leading-relaxed">
                At University Guide Pakistan, data accuracy is our highest priority. We adhere to strict editorial and verification standards before publishing any university metric.
              </p>
              <h2 className="text-xl font-semibold text-slate-800 pt-4">Verification Workflow</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Official Prospectus Review:</strong> All admission criteria, merit weights, and fee structures are extracted directly from official university notifications and prospectuses.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Active Academic Session Tagging:</strong> Every record explicitly displays its academic session (e.g., Fall 2026) and last verified date.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Transparent Refusal:</strong> If verified information is unavailable for a specific program, our system and AI chatbot clearly state: *"I don't have verified information about this right now. Please contact the admin for confirmation."*</span>
                </li>
              </ul>
            </div>
          )}

          {pageType === 'privacy' && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
              <p className="text-slate-600 leading-relaxed">
                Your privacy is important to us. University Guide Pakistan operates with client-side calculators and secure local storage. We do not sell or share personal student marks or contact information with third parties.
              </p>
              <h2 className="text-xl font-semibold text-slate-800 pt-4">Data Collection</h2>
              <p className="text-slate-600 leading-relaxed">
                Marks entered into our merit calculators are processed entirely in your browser. Student inquiries submitted through our contact or verification modals are used solely by administrators to verify and update admission records.
              </p>
            </div>
          )}

          {pageType === 'terms' && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Terms & Conditions</h1>
              <p className="text-slate-600 leading-relaxed">
                By accessing University Guide Pakistan, you agree to use our calculators and university information for educational guidance and admission planning.
              </p>
              <h2 className="text-xl font-semibold text-slate-800 pt-4">Disclaimer</h2>
              <p className="text-slate-600 leading-relaxed">
                While we make every effort to ensure 100% accuracy, university admission policies, closing merits, and fee structures are subject to official revision by respective university admission committees. Students are advised to verify final details on official university websites before submitting admission applications.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
