import React, { useState, useEffect } from 'react';
import { University, ProgramProfile, MeritInput, CalculationResult, ProgramCategory } from '../types';
import { calculateMerit } from '../utils/calculator';
import { Search, Calculator as CalcIcon, AlertCircle, CheckCircle2, Sparkles, RefreshCw, HelpCircle } from 'lucide-react';

interface CalculatorSectionProps {
  universities: University[];
  admissionYear: string;
  onCalculationComplete: (res: CalculationResult) => void;
  onMarksChange?: (marks: MeritInput) => void;
  initialUniversityId?: string;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  universities,
  admissionYear,
  onCalculationComplete,
  onMarksChange,
  initialUniversityId,
}) => {
  const [selectedUniId, setSelectedUniId] = useState<string>(initialUniversityId || universities[0]?.id || 'nust');
  const [selectedProgId, setSelectedProgId] = useState<string>(universities[0]?.programs[0]?.id || '');
  const [selectedCategory, setSelectedCategory] = useState<ProgramCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (initialUniversityId) {
      setSelectedUniId(initialUniversityId);
    }
  }, [initialUniversityId]);

  const [marks, setMarks] = useState<MeritInput>({
    matricObtained: 1050,
    matricTotal: 1100,
    interObtained: 500,
    interTotal: 550,
    testObtained: 156,
    testTotal: 200,
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Find selected university
  const currentUniversity = universities.find((u) => u.id === selectedUniId) || universities[0];

  // Filter programs by category and search
  const filteredPrograms = currentUniversity.programs.filter((prog) => {
    const matchesCategory = selectedCategory === 'All' || prog.category === selectedCategory;
    const matchesSearch = prog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prog.testName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentProgram = currentUniversity.programs.find((p) => p.id === selectedProgId) || currentUniversity.programs[0];

  // When university changes, select first available program in filtered or university programs
  useEffect(() => {
    if (currentUniversity && currentUniversity.programs.length > 0) {
      setSelectedProgId(currentUniversity.programs[0].id);
      // Update default test total marks based on program
      setMarks((prev) => ({
        ...prev,
        testTotal: currentUniversity.programs[0].maxTestMarks,
      }));
    }
  }, [selectedUniId]);

  // When program changes, update test max marks
  useEffect(() => {
    if (currentProgram) {
      setMarks((prev) => ({
        ...prev,
        testTotal: currentProgram.maxTestMarks,
      }));
    }
  }, [selectedProgId]);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!currentUniversity || !currentProgram) {
      setErrorMsg('Please select a valid university and program.');
      return;
    }

    const { result, error } = calculateMerit(currentUniversity, currentProgram, marks, admissionYear);

    if (error) {
      setErrorMsg(error);
      return;
    }

    if (result) {
      onMarksChange?.(marks);
      onCalculationComplete(result);
    }
  };

  const handleLoadSample = () => {
    setMarks({
      matricObtained: 1050,
      matricTotal: 1100,
      interObtained: 500,
      interTotal: 550,
      testObtained: currentProgram.maxTestMarks === 400 ? 310 : currentProgram.maxTestMarks === 200 ? 156 : 78,
      testTotal: currentProgram.maxTestMarks,
    });
    setErrorMsg(null);
  };

  return (
    <section id="calculator" className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <CalcIcon className="w-3.5 h-3.5" />
            Interactive Official Calculator
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Calculate University Merit & Aggregate
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
            Select your target university and program below. Enter your academic marks once to instantly compute your university-specific admission aggregate.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-800 to-teal-900 p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">Step 1 & 2</span>
              <h3 className="text-xl font-bold">Select University & Program</h3>
            </div>
            <button
              type="button"
              onClick={handleLoadSample}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/15 hover:bg-white/25 text-white text-xs font-medium transition-all cursor-pointer backdrop-blur-xs border border-white/20"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Load Sample Test Marks
            </button>
          </div>

          <form onSubmit={handleCalculate} className="p-6 sm:p-8 space-y-8">
            {/* University Selection & Search */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-slate-800">
                1. Select University
              </label>
              
              <div className="relative">
                <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search university by name or city (e.g., NUST, FAST, COMSATS, UET)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                />
              </div>

              {/* University Cards Grid / Select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-60 overflow-y-auto p-1 border border-slate-200 rounded-xl bg-slate-50">
                {universities
                  .filter(
                    (u) =>
                      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      u.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      u.city.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((uni) => {
                    const isSelected = uni.id === selectedUniId;
                    return (
                      <div
                        key={uni.id}
                        onClick={() => setSelectedUniId(uni.id)}
                        className={`p-3 rounded-lg border text-left cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-emerald-50 border-emerald-500 shadow-xs ring-1 ring-emerald-500'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-100/50'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-sm text-slate-900">{uni.shortName}</div>
                          <div className="text-xs text-slate-500 truncate max-w-[180px]">{uni.city}</div>
                        </div>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Program Category Filter & Program Selector */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-800">
                  2. Filter by Discipline Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['All', 'Engineering', 'Computer Science', 'Business', 'General'] as const).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-emerald-700 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="programSelect" className="block text-sm font-semibold text-slate-800">
                  3. Select Specific Program & Formula Profile
                </label>
                <select
                  id="programSelect"
                  aria-label="Select Specific Program & Formula Profile"
                  value={selectedProgId}
                  onChange={(e) => setSelectedProgId(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                >
                  {filteredPrograms.length === 0 ? (
                    <option value="">No programs match category filter</option>
                  ) : (
                    filteredPrograms.map((prog) => (
                      <option key={prog.id} value={prog.id}>
                        {prog.name} (Matric: {prog.matricWeight}%, Inter-1: {prog.interPart1Weight}%, Test: {prog.testWeight}%)
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>

            {/* Formula Quick Badge for Selected Program */}
            {currentProgram && (
              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs sm:text-sm text-emerald-900">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold">Active Formula Weights for {currentUniversity.shortName} ({currentProgram.name}):</span>
                    <div className="mt-0.5 text-emerald-800 font-medium">
                      Matric: <strong>{currentProgram.matricWeight}%</strong> | Inter Part-I: <strong>{currentProgram.interPart1Weight}%</strong> | {currentProgram.testName}: <strong>{currentProgram.testWeight}%</strong>
                    </div>
                  </div>
                </div>
                <div className="text-right text-xs text-emerald-700 font-semibold bg-white px-3 py-1.5 rounded-lg border border-emerald-200 shrink-0">
                  {currentProgram.verified ? '✓ Officially Verified' : 'Formula verification required'}
                </div>
              </div>
            )}

            {/* Academic Marks Inputs */}
            <div className="space-y-6 pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                4. Enter Your Academic & Test Marks
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Matric Marks */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="font-semibold text-slate-800 text-sm">Matric / SSC</label>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 font-medium">
                      Weight: {currentProgram?.matricWeight}%
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="matricObtained" className="block text-xs font-medium text-slate-500 mb-1">Obtained Marks</label>
                      <input
                        id="matricObtained"
                        type="number"
                        placeholder="e.g. 1050"
                        value={marks.matricObtained}
                        onChange={(e) =>
                          setMarks({ ...marks, matricObtained: e.target.value === '' ? '' : Number(e.target.value) })
                        }
                        className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="matricTotal" className="block text-xs font-medium text-slate-500 mb-1">Total Marks</label>
                      <input
                        id="matricTotal"
                        type="number"
                        placeholder="e.g. 1100"
                        value={marks.matricTotal}
                        onChange={(e) =>
                          setMarks({ ...marks, matricTotal: e.target.value === '' ? '' : Number(e.target.value) })
                        }
                        className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Intermediate Part-I Marks */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="font-semibold text-slate-800 text-sm">Inter Part-I</label>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-medium">
                      Weight: {currentProgram?.interPart1Weight}%
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="interObtained" className="block text-xs font-medium text-slate-500 mb-1">Obtained Marks</label>
                      <input
                        id="interObtained"
                        type="number"
                        placeholder="e.g. 500"
                        value={marks.interObtained}
                        onChange={(e) =>
                          setMarks({ ...marks, interObtained: e.target.value === '' ? '' : Number(e.target.value) })
                        }
                        className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="interTotal" className="block text-xs font-medium text-slate-500 mb-1">Total Marks</label>
                      <input
                        id="interTotal"
                        type="number"
                        placeholder="e.g. 550"
                        value={marks.interTotal}
                        onChange={(e) =>
                          setMarks({ ...marks, interTotal: e.target.value === '' ? '' : Number(e.target.value) })
                        }
                        className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                  <p className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded-md border border-amber-200 flex items-start gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>Estimated aggregate based on Part-I. Will be re-evaluated upon final HSSC-II results.</span>
                  </p>
                </div>

                {/* Entry Test Marks */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="font-semibold text-slate-800 text-sm truncate max-w-[160px]" title={currentProgram?.testName}>
                      {currentProgram?.testName || 'Entry Test'}
                    </label>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-medium">
                      Weight: {currentProgram?.testWeight}%
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="testObtained" className="block text-xs font-medium text-slate-500 mb-1">Obtained Marks</label>
                      <input
                        id="testObtained"
                        type="number"
                        placeholder="e.g. 156"
                        value={marks.testObtained}
                        onChange={(e) =>
                          setMarks({ ...marks, testObtained: e.target.value === '' ? '' : Number(e.target.value) })
                        }
                        className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="testTotal" className="block text-xs font-medium text-slate-500 mb-1">Total Marks</label>
                      <input
                        id="testTotal"
                        type="number"
                        placeholder={`e.g. ${currentProgram?.maxTestMarks || 200}`}
                        value={marks.testTotal}
                        onChange={(e) =>
                          setMarks({ ...marks, testTotal: e.target.value === '' ? '' : Number(e.target.value) })
                        }
                        className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Error Message Display */}
            {errorMsg && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Calculate Button */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/30 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <CalcIcon className="w-5 h-5" />
                Calculate My Merit Aggregate
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
