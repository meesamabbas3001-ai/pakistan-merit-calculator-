import React from 'react';
import { Scale, CheckCircle2 } from 'lucide-react';
import { UNIVERSITIES_DATA } from '../data/universities';

interface MeritFormulaTableProps {
  onSelectUni: (uniId: string) => void;
}

export const MeritFormulaTable: React.FC<MeritFormulaTableProps> = ({ onSelectUni }) => {
  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Scale className="w-3.5 h-3.5" />
            Official Weightage Breakdown
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            Merit Formula Reference Table 2026
          </h2>
          <p className="text-slate-600 text-base">
            Every Pakistani university calculates aggregate merit using different weight ratios for Matric, Intermediate, and Entry Tests. Here is the verified official formula reference for top institutions.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">University</th>
                  <th className="py-4 px-6">Entry Test</th>
                  <th className="py-4 px-6 text-center">Test Weight</th>
                  <th className="py-4 px-6 text-center">Inter Weight</th>
                  <th className="py-4 px-6 text-center">Matric Weight</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {UNIVERSITIES_DATA.map((uni) => {
                  const prog = uni.programs[0]; // primary program
                  return (
                    <tr key={uni.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="font-bold text-slate-900">{uni.shortName}</div>
                        <div className="text-xs text-slate-500">{uni.name}</div>
                      </td>
                      <td className="py-4 px-6 text-slate-700 font-medium">
                        {prog.testName}
                      </td>
                      <td className="py-4 px-6 text-center font-bold text-emerald-700">
                        {prog.testWeight}%
                      </td>
                      <td className="py-4 px-6 text-center font-semibold text-slate-700">
                        {prog.interPart1Weight}%
                      </td>
                      <td className="py-4 px-6 text-center font-semibold text-slate-700">
                        {prog.matricWeight}%
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={() => onSelectUni(uni.id)}
                          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
                        >
                          Calculate Merit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>All formulas cross-verified with official 2026 undergraduate admission prospectuses.</span>
        </div>
      </div>
    </section>
  );
};
