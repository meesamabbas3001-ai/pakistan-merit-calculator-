import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { History, ShieldCheck, CheckCircle2, Calendar } from 'lucide-react';

interface ChangelogPageProps {
  onNavigate: (tab: string) => void;
}

export function ChangelogPage({ onNavigate }: ChangelogPageProps) {
  const updates = [
    {
      date: 'September 10, 2026',
      version: 'v4.2.0',
      title: 'Fall 2026 Admission Cycle Synchronization',
      description: 'Updated admission criteria and weight ratios for NUST, FAST-NUCES, COMSATS, and UET Lahore based on official Fall 2026 prospectuses.',
      tags: ['NUST', 'FAST', 'COMSATS', 'UET']
    },
    {
      date: 'August 15, 2026',
      version: 'v4.1.0',
      title: 'Added 60+ HEC-Recognized Universities',
      description: 'Expanded database to cover regional public and private universities across Punjab, Sindh, KPK, Balochistan, and Islamabad with custom weight calculations.',
      tags: ['Database Expansion', 'Regional Universities']
    },
    {
      date: 'July 01, 2026',
      version: 'v4.0.0',
      title: 'AggreGate Core Architecture & SEO Upgrade',
      description: 'Launched dynamic university routing, schema.org JSON-LD microdata, and client-side privacy-first aggregate engines.',
      tags: ['Technical SEO', 'Architecture']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Breadcrumbs
        items={[{ label: 'Formula Changelog & Update History' }]}
        onNavigate={onNavigate}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
          <div className="flex items-center space-x-3 mb-6">
            <span className="p-3 bg-emerald-50 text-emerald-700 rounded-2xl">
              <History className="w-8 h-8" />
            </span>
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  Verified E-E-A-T Trust Signal
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 mt-2">
                Formula Changelog & Update History
              </h1>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-8">
            AggreGate maintains rigorous data transparency. This changelog records all updates to university merit formulas, weight ratios, closing merits, and admission policies as published by Pakistani institutions.
          </p>

          <div className="space-y-8 border-l-2 border-emerald-500/30 pl-6 ml-3">
            {updates.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-xs"></div>
                <div className="flex items-center gap-3 text-xs font-semibold text-emerald-700 mb-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                  <span>•</span>
                  <span>{item.version}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <h3 className="font-bold text-emerald-900 text-sm">Need to report a formula change?</h3>
                <p className="text-xs text-emerald-700 mt-0.5">Contact our data verification cell if a university has updated its weight split.</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-xl hover:bg-emerald-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Report Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
