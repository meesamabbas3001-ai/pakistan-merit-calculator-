import React from 'react';
import { University } from '../types';
import { Breadcrumbs } from './Breadcrumbs';
import { Building2, ShieldCheck, CheckCircle2, Calendar, ExternalLink, MapPin, Calculator } from 'lucide-react';
import { updateDocumentSeo } from '../utils/seo';
import { CustomCalculator } from './CustomCalculator';

interface UniversityDetailPageProps {
  university?: University;
  onNavigate: (path: string, uniId?: string) => void;
  onCalculateForUni: (uniId: string) => void;
}

export function UniversityDetailPage({ university, onNavigate, onCalculateForUni }: UniversityDetailPageProps) {
  if (!university) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
        <Breadcrumbs items={[{ label: 'University Not Found' }]} onNavigate={onNavigate} />
        <div className="max-w-4xl mx-auto px-4 py-16 flex-grow text-center">
          <div className="bg-white rounded-2xl border border-slate-200 p-10 shadow-sm space-y-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">University Not Yet in Database</h1>
            <p className="text-slate-600 max-w-lg mx-auto">
              We couldn't find the exact university profile you requested. Don't worry! You can use our custom calculator below to calculate your merit for any institution instantly.
            </p>
            <CustomCalculator onCalculationComplete={(res) => {
              // Handle calculation complete
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} />
            <div className="pt-4">
              <button
                onClick={() => onNavigate('calculator')}
                className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl text-sm"
              >
                ← Back to AggreGate Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const firstProgram = university.programs[0];

  React.useEffect(() => {
    updateDocumentSeo({
      path: `/universities/${university.id}`,
      title: `${university.name} (${university.shortName}) Merit Calculator 2026 — AggreGate`,
      description: `Calculate your admission aggregate for ${university.name} (${university.shortName}) with official verified weightages: Matric, Intermediate, and ${firstProgram?.testName || 'Entry Test'}.`,
      tab: 'calculator',
      schemaType: 'WebPage',
      faqItems: [
        {
          question: `What is the admission eligibility for ${university.name}?`,
          answer: `Minimum eligibility requires Intermediate or equivalent with required percentage as specified per program, along with entry test performance.`
        },
        {
          question: `How is the aggregate merit calculated at ${university.name}?`,
          answer: `Merit is calculated based on official verified weights for Matric (${firstProgram?.matricWeight}%), Intermediate (${firstProgram?.interPart1Weight}%), and Entry Test (${firstProgram?.testWeight}%).`
        },
        {
          question: `Is Inter Part-1 accepted for ${university.shortName} provisional admissions?`,
          answer: `Yes, provisional merit is calculated using Inter Part-1 when Part-2 results are awaited.`
        }
      ]
    });
  }, [university, firstProgram]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Breadcrumbs
        items={[
          { label: 'Universities Directory', href: '/directory' },
          { label: university.name }
        ]}
        onNavigate={(path) => {
          if (path === '/directory') onNavigate('directory');
          else onNavigate('calculator');
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
        {/* University Header Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="p-3 bg-emerald-50 text-emerald-700 rounded-2xl">
                  <Building2 className="w-8 h-8" />
                </span>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">
                      {university.universityType} ({university.feeCategoryLabel})
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold flex items-center">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                      Verified Fall 2026
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                    {university.name} ({university.shortName}) Merit Calculator 2026 — AggreGate
                  </h1>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mt-3">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-slate-400" />
                  City: {university.city}, {university.province}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-slate-400" />
                  Academic Session: Fall 2026
                </span>
                <span className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1 text-emerald-600" />
                  Last verified: {firstProgram?.lastVerified || 'September 2026'}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onCalculateForUni(university.id)}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer min-h-[44px]"
              >
                Calculate Merit for {university.shortName} →
              </button>
              {firstProgram?.sourceUrl && (
                <a
                  href={firstProgram.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-1.5 whitespace-nowrap min-h-[44px]"
                >
                  Official Source <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Programs & Formula Weights */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Verified Undergraduate Programs & Formula Weight Breakdown</h2>
            <span className="text-xs text-slate-500 font-medium">Primary Entry Test: {firstProgram?.testName || 'Required'}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {university.programs.map((prog) => (
              <div key={prog.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                      {prog.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-2">{prog.name}</h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                    {prog.verificationStatus || 'Verified'}
                  </span>
                </div>

                <div className="space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Entry Test Weight:</span>
                    <strong className="text-emerald-700">{prog.testWeight}% ({prog.testName})</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Intermediate Weight:</span>
                    <strong className="text-slate-900">{prog.interPart1Weight}%</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Matric Weight:</span>
                    <strong className="text-slate-900">{prog.matricWeight}%</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Closing Merit (2025):</span>
                    <strong className="text-slate-900">{prog.closingMerit2025 ? `${prog.closingMerit2025}%` : 'N/A'}</strong>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => onCalculateForUni(university.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-emerald-600 transition-colors cursor-pointer"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    Calculate for this program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
