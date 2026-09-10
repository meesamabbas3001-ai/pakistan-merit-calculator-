import React, { useState } from 'react';
import { GraduationCap, Search, BookOpen, Briefcase, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';

interface DegreesPageProps {
  onNavigate: (path: string) => void;
}

interface DegreeField {
  id: string;
  title: string;
  category: 'Computing & IT' | 'Engineering' | 'Business & Management' | 'Medical & Allied Health';
  duration: string;
  eligibility: string;
  topUniversities: string[];
  careerProspects: string[];
  description: string;
}

const DEGREES_DATA: DegreeField[] = [
  {
    id: 'bs-computer-science',
    title: 'BS Computer Science (BSCS)',
    category: 'Computing & IT',
    duration: '4 Years (8 Semesters)',
    eligibility: 'Intermediate (Pre-Engineering, ICS, Pre-Medical with additional Math, or A-Levels equivalent) with minimum 50% marks.',
    topUniversities: ['FAST-NUCES', 'NUST', 'COMSATS', 'GIKI', 'LUMS'],
    careerProspects: ['Software Engineer', 'Full Stack Developer', 'Data Scientist', 'AI / ML Engineer', 'Cyber Security Specialist'],
    description: 'Focuses on algorithms, software architecture, artificial intelligence, operating systems, and computer programming. One of the highest-demand degrees in Pakistan and globally.'
  },
  {
    id: 'bs-software-engineering',
    title: 'BS Software Engineering (BSSE)',
    category: 'Computing & IT',
    duration: '4 Years (8 Semesters)',
    eligibility: 'Intermediate with Mathematics or equivalent with minimum 50% marks.',
    topUniversities: ['FAST-NUCES', 'NUST', 'COMSATS', 'Air University'],
    careerProspects: ['Software Architect', 'DevOps Engineer', 'QA Engineer', 'Mobile App Developer'],
    description: 'Emphasizes software design patterns, project management, quality assurance, and systematic software construction.'
  },
  {
    id: 'bs-electrical-engineering',
    title: 'BS Electrical Engineering (BSEE)',
    category: 'Engineering',
    duration: '4 Years (8 Semesters)',
    eligibility: 'Intermediate (Pre-Engineering) or equivalent with minimum 60% marks. Entry test (ECAT / NET) mandatory.',
    topUniversities: ['NUST', 'UET Lahore', 'GIKI', 'PIEAS', 'FAST-NUCES'],
    careerProspects: ['Electrical Design Engineer', 'Power Systems Engineer', 'Embedded Systems Developer', 'Telecommunications Engineer'],
    description: 'Covers power generation, electronics, circuit design, control systems, and renewable energy technologies.'
  },
  {
    id: 'bba',
    title: 'Bachelor of Business Administration (BBA)',
    category: 'Business & Management',
    duration: '4 Years (8 Semesters)',
    eligibility: 'Intermediate (Any discipline) with minimum 50% marks.',
    topUniversities: ['LUMS', 'IBA Karachi', 'NUST', 'COMSATS', 'Punjab University'],
    careerProspects: ['Business Analyst', 'Financial Manager', 'Marketing Executive', 'HR Specialist', 'Entrepreneur'],
    description: 'Develops core competencies in corporate finance, marketing management, human resources, supply chain, and business strategy.'
  }
];

export function DegreesPage({ onNavigate }: DegreesPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDegrees = DEGREES_DATA.filter((deg) => {
    const matchesSearch = deg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          deg.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || deg.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Breadcrumbs
        items={[{ label: 'Degree & Career Explorer' }]}
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-4 border border-emerald-200">
            <ShieldCheck className="w-4 h-4" />
            <span>HEC-Accredited Degree Pathways</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Degree & Career Explorer Pakistan 2026
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore verified undergraduate degree programs, eligibility requirements, top universities, and high-demand career pathways.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search degrees (e.g. Computer Science, Electrical Engineering)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-3 px-4 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium text-slate-700"
              >
                <option value="All">All Categories</option>
                <option value="Computing & IT">Computing & IT</option>
                <option value="Engineering">Engineering</option>
                <option value="Business & Management">Business & Management</option>
              </select>
            </div>
          </div>
        </div>

        {/* Degrees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDegrees.map((deg) => (
            <div key={deg.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">
                    {deg.category}
                  </span>
                  <span className="text-xs font-medium text-slate-500">{deg.duration}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{deg.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{deg.description}</p>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <strong className="text-slate-800 block mb-1">Minimum Eligibility:</strong>
                    <p className="text-slate-600 text-xs">{deg.eligibility}</p>
                  </div>

                  <div>
                    <strong className="text-slate-800 text-xs block mb-1.5 uppercase tracking-wide">Top Universities:</strong>
                    <div className="flex flex-wrap gap-1.5">
                      {deg.topUniversities.map((uni, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg font-medium">
                          {uni}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <strong className="text-slate-800 text-xs block mb-1.5 uppercase tracking-wide">Career Prospects:</strong>
                    <div className="flex flex-wrap gap-1.5">
                      {deg.careerProspects.map((career, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-emerald-50/80 text-emerald-800 text-xs rounded-lg font-medium">
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500">Academic Session: Fall 2026</span>
                <button
                  onClick={() => onNavigate('/')}
                  className="text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  Calculate Merit &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
