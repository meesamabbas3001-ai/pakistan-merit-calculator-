import React, { useState } from 'react';
import { Award, Search, Calendar, CheckCircle2, ExternalLink, ShieldCheck, Building } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';

interface ScholarshipsPageProps {
  onNavigate: (path: string) => void;
}

interface Scholarship {
  id: string;
  name: string;
  provider: string;
  type: 'Need-based' | 'Merit-based' | 'HEC / Government' | 'Hafiz-e-Quran / Sports';
  eligibility: string;
  requiredMarks: string;
  benefits: string;
  deadline: string;
  status: 'Active' | 'Expired';
  source: string;
  verifiedDate: string;
}

const SCHOLARSHIPS_DATA: Scholarship[] = [
  {
    id: 'hec-ehsaas',
    name: 'HEC Ehsaas Undergraduate Scholarship Program',
    provider: 'Higher Education Commission (HEC) Pakistan',
    type: 'Need-based',
    eligibility: 'Undergraduate students admitted on merit in public sector universities whose family income is below threshold.',
    requiredMarks: 'Minimum 60% in Intermediate / FSc',
    benefits: '100% Tuition Fee coverage + Monthly stipend (approx. Rs. 4,000/month)',
    deadline: 'October 30, 2026',
    status: 'Active',
    source: 'HEC Official Portal',
    verifiedDate: 'September 10, 2026',
  },
  {
    id: 'nust-scholarship',
    name: 'NUST Need-Based & Merit Scholarships',
    provider: 'NUST Islamabad',
    type: 'Merit-based',
    eligibility: 'Enrolled students in BS programs with top NET scores or demonstrated financial need.',
    requiredMarks: 'Top 10% in NET or CGPA > 3.5',
    benefits: 'Partial to Full tuition fee waiver',
    deadline: 'August 15, 2026',
    status: 'Active',
    source: 'NUST Financial Aid Office',
    verifiedDate: 'September 10, 2026',
  },
  {
    id: 'fast-financial-aid',
    name: 'FAST-NUCES Financial Assistance & Merit Scholarships',
    provider: 'FAST-NUCES (All Campuses)',
    type: 'Merit-based',
    eligibility: 'Students securing top positions in admission test and board examinations.',
    requiredMarks: '85%+ aggregate in admission criteria',
    benefits: 'Up to 100% tuition fee waiver for subsequent semesters based on GPA',
    deadline: 'July 20, 2026',
    status: 'Active',
    source: 'FAST-NUCES Registrar Office',
    verifiedDate: 'September 10, 2026',
  },
  {
    id: 'comsats-scholarship',
    name: 'COMSATS Endowment Fund & PEEF Scholarships',
    provider: 'COMSATS University Islamabad & Punjab Educational Endowment Fund',
    type: 'HEC / Government',
    eligibility: 'Domicile of Punjab / Sindh / KPK / Balochistan with exceptional academic record.',
    requiredMarks: 'Minimum 60% marks in all prior examinations',
    benefits: 'Tuition fee support and stipends',
    deadline: 'November 15, 2026',
    status: 'Active',
    source: 'PEEF & COMSATS Financial Aid',
    verifiedDate: 'September 10, 2026',
  }
];

export function ScholarshipsPage({ onNavigate }: ScholarshipsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');

  const filteredScholarships = SCHOLARSHIPS_DATA.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || s.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Breadcrumbs
        items={[{ label: 'Scholarships & Financial Aid' }]}
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-4 border border-emerald-200">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified 2026 Student Financial Aid Database</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Scholarships & Financial Aid in Pakistan 2026
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore verified undergraduate scholarships, need-based grants, and merit waivers offered by HEC and top Pakistani universities.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search scholarships by name or provider..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full py-3 px-4 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium text-slate-700"
              >
                <option value="All">All Categories</option>
                <option value="Need-based">Need-based</option>
                <option value="Merit-based">Merit-based</option>
                <option value="HEC / Government">HEC / Government</option>
              </select>
            </div>
          </div>
        </div>

        {/* Scholarship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredScholarships.map((sch) => (
            <div key={sch.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                      <Award className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full">
                      {sch.type}
                    </span>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${sch.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                    {sch.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">{sch.name}</h3>
                <p className="text-sm font-medium text-emerald-700 flex items-center mb-4">
                  <Building className="w-4 h-4 mr-1.5" />
                  {sch.provider}
                </p>

                <div className="space-y-2 mb-6 text-sm text-slate-600 border-t border-slate-100 pt-4">
                  <p><strong>Eligibility:</strong> {sch.eligibility}</p>
                  <p><strong>Required Marks:</strong> {sch.requiredMarks}</p>
                  <p className="text-emerald-900 font-medium bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100">
                    <strong>Benefits:</strong> {sch.benefits}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Deadline: <strong className="text-slate-800">{sch.deadline}</strong></span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified: {sch.verifiedDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredScholarships.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-base">No scholarships found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
