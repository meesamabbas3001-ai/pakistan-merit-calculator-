import React, { useState } from 'react';
import { University, ProgramCategory } from '../types';
import { Search, BookOpen, ExternalLink, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface UniversityDirectoryProps {
  universities: University[];
  onSelectAndCalculate: (uniId: string) => void;
}

export const UniversityDirectory: React.FC<UniversityDirectoryProps> = ({
  universities,
  onSelectAndCalculate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProgramCategory | 'All'>('All');

  const filteredUniversities = universities.filter((uni) => {
    const matchesSearch =
      uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.city.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' ||
      uni.programs.some((p) => p.category === selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Top 20 Pakistani Universities Database
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Official Admission Formula Directory
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
            Explore verified weightings, test requirements, and admission criteria for Pakistan's premier higher education institutions.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search universities by name, acronym, or city (e.g. NUST, Lahore, Islamabad)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 shadow-xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {(['All', 'Engineering', 'Computer Science', 'Business', 'General'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Universities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((uni, index) => (
            <motion.div
              key={uni.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-emerald-500/40 transition-all"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white font-bold flex items-center justify-center text-lg shadow-sm">
                    {uni.shortName.slice(0, 3)}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {uni.city}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">{uni.name}</h3>
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold mb-4">
                  {uni.shortName}
                </span>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-700">Available Programs & Formulas:</div>
                  {uni.programs.map((prog) => (
                    <div key={prog.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs space-y-1">
                      <div className="font-bold text-slate-900">{prog.name}</div>
                      <div className="text-slate-600 flex justify-between">
                        <span>Test: {prog.testName}</span>
                        <span className="font-semibold text-emerald-700">M:{prog.matricWeight}% | I:{prog.interPart1Weight}% | T:{prog.testWeight}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Verified Policy
                </span>
                <button
                  onClick={() => onSelectAndCalculate(uni.id)}
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all shadow-xs cursor-pointer"
                >
                  Calculate Merit
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
