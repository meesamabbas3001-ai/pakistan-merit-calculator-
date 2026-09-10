import React, { useState } from 'react';
import { Calendar, Search, Building2, ExternalLink, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { getStoredUniversities } from '../services/universityStore';

interface AdmissionDeadlinesPageProps {
  onNavigate: (path: string) => void;
}

export function AdmissionDeadlinesPage({ onNavigate }: AdmissionDeadlinesPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const universities = getStoredUniversities();

  const filteredUniversities = universities.filter((uni) =>
    uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.shortName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Breadcrumbs
        items={[{ label: 'Admission Deadlines 2026' }]}
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-4 border border-emerald-200">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Fall 2026 Academic Session Deadlines</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            University Admission Deadlines Pakistan 2026
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Track verified application opening and closing dates for undergraduate programs across top Pakistani universities.
          </p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by university name, short code, or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
          </div>
        </div>

        {/* Deadlines Table / Cards */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/70 border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-700">
                  <th className="py-4 px-6">University</th>
                  <th className="py-4 px-6">City</th>
                  <th className="py-4 px-6">Session</th>
                  <th className="py-4 px-6">Application Status</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {filteredUniversities.map((uni) => (
                  <tr key={uni.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      <div className="flex items-center space-x-3">
                        <span className="p-2 bg-emerald-50 text-emerald-700 rounded-xl">
                          <Building2 className="w-4 h-4" />
                        </span>
                        <div>
                          <span>{uni.name}</span>
                          <span className="block text-xs text-slate-500 font-normal">Type: {uni.universityType}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{uni.city}</td>
                    <td className="py-4 px-6 font-medium text-slate-800">Fall 2026</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                        <Clock className="w-3 h-3 mr-1" />
                        Open for Admissions
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => onNavigate(`/universities/${uni.id}`)}
                        className="inline-flex items-center text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        View Profile & Criteria
                        <ExternalLink className="w-3.5 h-3.5 ml-1" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
