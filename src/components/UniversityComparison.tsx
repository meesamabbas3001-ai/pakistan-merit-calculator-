import React, { useState } from 'react';
import { University, MeritInput } from '../types';
import { calculateMerit } from '../utils/calculator';
import { Scale, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, Sparkles } from 'lucide-react';

interface UniversityComparisonProps {
  universities: University[];
  admissionYear: string;
  onSelectUniversity: (uniId: string) => void;
}

export const UniversityComparison: React.FC<UniversityComparisonProps> = ({
  universities,
  admissionYear,
  onSelectUniversity,
}) => {
  const [marks, setMarks] = useState<MeritInput>({
    matricObtained: 1050,
    matricTotal: 1100,
    interObtained: 500,
    interTotal: 550,
    testObtained: 156,
    testTotal: 200,
  });

  // Selected universities to compare (default first 6)
  const [selectedUniIds, setSelectedUniIds] = useState<string[]>([
    'nust',
    'fast',
    'comsats',
    'uet-lahore',
    'giki',
    'pieas',
  ]);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleUniSelection = (id: string) => {
    if (selectedUniIds.includes(id)) {
      if (selectedUniIds.length <= 1) {
        setErrorMsg('Please select at least one university to compare.');
        return;
      }
      setSelectedUniIds(selectedUniIds.filter((item) => item !== id));
    } else {
      setSelectedUniIds([...selectedUniIds, id]);
    }
    setErrorMsg(null);
  };

  // Calculate results for all selected universities
  const comparisonResults = selectedUniIds.map((id) => {
    const uni = universities.find((u) => u.id === id);
    if (!uni) return null;
    const prog = uni.programs[0]; // primary program
    const { result } = calculateMerit(uni, prog, marks, admissionYear);
    return {
      uni,
      prog,
      result,
    };
  }).filter(Boolean);

  return (
    <div className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Scale className="w-3.5 h-3.5" />
            Compare My Merit Mode
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Side-by-Side University Comparison
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
            Enter your academic marks once. The system calculates each university separately using its own official verified formula.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column: Marks Input Panel */}
          <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-lg border border-slate-200 space-y-6">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Your Academic Marks
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Matric Obtained / Total</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    value={marks.matricObtained}
                    onChange={(e) => setMarks({ ...marks, matricObtained: e.target.value === '' ? '' : Number(e.target.value) })}
                    className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm font-semibold"
                    placeholder="Obt"
                  />
                  <input
                    type="number"
                    value={marks.matricTotal}
                    onChange={(e) => setMarks({ ...marks, matricTotal: e.target.value === '' ? '' : Number(e.target.value) })}
                    className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm font-semibold"
                    placeholder="Tot"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Inter Part-I Obtained / Total</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    value={marks.interObtained}
                    onChange={(e) => setMarks({ ...marks, interObtained: e.target.value === '' ? '' : Number(e.target.value) })}
                    className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm font-semibold"
                    placeholder="Obt"
                  />
                  <input
                    type="number"
                    value={marks.interTotal}
                    onChange={(e) => setMarks({ ...marks, interTotal: e.target.value === '' ? '' : Number(e.target.value) })}
                    className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm font-semibold"
                    placeholder="Tot"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Entry Test Obtained / Total</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    value={marks.testObtained}
                    onChange={(e) => setMarks({ ...marks, testObtained: e.target.value === '' ? '' : Number(e.target.value) })}
                    className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm font-semibold"
                    placeholder="Obt"
                  />
                  <input
                    type="number"
                    value={marks.testTotal}
                    onChange={(e) => setMarks({ ...marks, testTotal: e.target.value === '' ? '' : Number(e.target.value) })}
                    className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm font-semibold"
                    placeholder="Tot"
                  />
                </div>
              </div>
            </div>

            {/* University Selection Checkboxes */}
            <div className="pt-4 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                Select Universities to Compare ({selectedUniIds.length})
              </label>
              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {universities.map((u) => {
                  const isChecked = selectedUniIds.includes(u.id);
                  return (
                    <label
                      key={u.id}
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 text-xs font-medium text-slate-800 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleUniSelection(u.id)}
                        className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer"
                      />
                      <span className="truncate">{u.shortName}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Comparison Table */}
          <div className="lg:col-span-3 space-y-6">
            {errorMsg && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                {errorMsg}
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">University Merit Comparison Results</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Calculated independently for each institution using official weights.</p>
                </div>
                <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                  {admissionYear} Cycle
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider">
                      <th className="p-4">University</th>
                      <th className="p-4">Primary Test</th>
                      <th className="p-4">Formula Weights</th>
                      <th className="p-4">Your Aggregate</th>
                      <th className="p-4">Formula Status</th>
                      <th className="p-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {comparisonResults.map((item) => {
                      if (!item || !item.result) return null;
                      const { uni, prog, result } = item;
                      return (
                        <tr key={uni.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="p-4">
                            <div className="font-bold text-slate-900">{uni.shortName}</div>
                            <div className="text-xs text-slate-500 truncate max-w-[200px]">{prog.name}</div>
                          </td>
                          <td className="p-4 text-xs font-medium text-slate-700">
                            {prog.testName}
                          </td>
                          <td className="p-4 text-xs text-slate-600">
                            M: {prog.matricWeight}% | I: {prog.interPart1Weight}% | T: {prog.testWeight}%
                          </td>
                          <td className="p-4">
                            <span className="text-lg font-extrabold text-emerald-700">
                              {result.finalAggregate.toFixed(2)}%
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                              prog.verified ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                            }`}>
                              {prog.verified ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                              {prog.verified ? 'Verified' : 'Review Required'}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <button
                              onClick={() => onSelectUniversity(uni.id)}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 text-xs font-semibold transition-all cursor-pointer"
                            >
                              Details
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
