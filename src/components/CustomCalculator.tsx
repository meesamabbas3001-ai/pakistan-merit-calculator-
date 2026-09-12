import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2 } from 'lucide-react';
import { CalculationResult, University, ProgramProfile } from '../types';

interface CustomCalculatorProps {
  onCalculationComplete: (res: CalculationResult) => void;
}

export const CustomCalculator: React.FC<CustomCalculatorProps> = ({ onCalculationComplete }) => {
  const [uniName, setUniName] = useState<string>('Custom University');
  const [matricObt, setMatricObt] = useState<number>(1050);
  const [matricTot, setMatricTot] = useState<number>(1100);
  const [interObt, setInterObt] = useState<number>(450);
  const [interTot, setInterTot] = useState<number>(550);
  const [testObt, setTestObt] = useState<number>(75);
  const [testTot, setTestTot] = useState<number>(100);

  // Weights
  const [matricWeight, setMatricWeight] = useState<number>(10);
  const [interWeight, setInterWeight] = useState<number>(40);
  const [testWeight, setTestWeight] = useState<number>(50);

  const [error, setError] = useState<string | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const totalW = Number(matricWeight) + Number(interWeight) + Number(testWeight);
    if (Math.abs(totalW - 100) > 0.01) {
      setError(`Formula weights must equal 100%. Current total is ${totalW}%.`);
      return;
    }
    setError(null);

    const matricPct = (Number(matricObt) / Number(matricTot)) * 100;
    const interPct = (Number(interObt) / Number(interTot)) * 100;
    const testPct = (Number(testObt) / Number(testTot)) * 100;

    const aggregate = (matricPct * (matricWeight / 100)) +
                      (interPct * (interWeight / 100)) +
                      (testPct * (testWeight / 100));

    const mockUni: University = {
      id: 'custom-uni',
      name: uniName,
      shortName: uniName,
      city: 'Pakistan',
      province: 'Islamabad',
      universityType: 'Public',
      feeCategory: 'Moderate',
      feeCategoryLabel: 'Custom Fee',
      hasHostel: true,
      hasScholarships: true,
      logoBg: 'bg-emerald-900 text-white',
      programs: []
    };

    const mockProg: ProgramProfile = {
      id: 'custom-prog',
      name: 'Custom Program',
      category: 'General',
      testName: 'Custom Entry Test',
      maxTestMarks: Number(testTot),
      matricWeight: Number(matricWeight),
      interPart1Weight: Number(interWeight),
      testWeight: Number(testWeight),
      isPart1Accepted: true,
      notes: 'Custom calculated formula weights.',
      verified: true,
      sourceUrl: '',
      lastVerified: 'September 2026'
    };

    const result: CalculationResult = {
      university: mockUni,
      program: mockProg,
      admissionYear: '2026',
      matric: {
        name: 'Matric / O-Level',
        obtained: Number(matricObt),
        total: Number(matricTot),
        percentage: Number(matricPct.toFixed(2)),
        weight: Number(matricWeight),
        contribution: Number((matricPct * (matricWeight / 100)).toFixed(2))
      },
      interPart1: {
        name: 'Intermediate Part-1',
        obtained: Number(interObt),
        total: Number(interTot),
        percentage: Number(interPct.toFixed(2)),
        weight: Number(interWeight),
        contribution: Number((interPct * (interWeight / 100)).toFixed(2))
      },
      entryTest: {
        name: 'Entry Test',
        obtained: Number(testObt),
        total: Number(testTot),
        percentage: Number(testPct.toFixed(2)),
        weight: Number(testWeight),
        contribution: Number((testPct * (testWeight / 100)).toFixed(2))
      },
      finalAggregate: Number(aggregate.toFixed(2)),
      formulaString: `(${matricWeight}% Matric) + (${interWeight}% Inter) + (${testWeight}% Test)`,
      verified: true,
      sourceUrl: '',
      lastVerified: 'September 2026',
      notes: 'Calculated via AggreGate Custom Formula Tool.'
    };

    onCalculationComplete(result);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">Custom University & Formula Calculator</h2>
          <p className="text-xs text-slate-500">Can't find your university in our database? Enter custom weights manually.</p>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
          {error}
        </div>
      )}

      <form onSubmit={handleCalculate} className="space-y-6">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">University / Institution Name</label>
          <input
            type="text"
            value={uniName}
            onChange={(e) => setUniName(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Matric */}
          <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-800 text-sm">Matric / O-Level</h3>
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Obtained Marks</label>
              <input
                type="number"
                value={matricObt}
                onChange={(e) => setMatricObt(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Total Marks</label>
              <input
                type="number"
                value={matricTot}
                onChange={(e) => setMatricTot(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-emerald-700 mb-1">Weight (%)</label>
              <input
                type="number"
                value={matricWeight}
                onChange={(e) => setMatricWeight(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-bold text-emerald-700"
                required
              />
            </div>
          </div>

          {/* Inter */}
          <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-800 text-sm">Intermediate / Part-1</h3>
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Obtained Marks</label>
              <input
                type="number"
                value={interObt}
                onChange={(e) => setInterObt(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Total Marks</label>
              <input
                type="number"
                value={interTot}
                onChange={(e) => setInterTot(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-emerald-700 mb-1">Weight (%)</label>
              <input
                type="number"
                value={interWeight}
                onChange={(e) => setInterWeight(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-bold text-emerald-700"
                required
              />
            </div>
          </div>

          {/* Test */}
          <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-800 text-sm">Entry Test / NAT</h3>
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Obtained Marks</label>
              <input
                type="number"
                value={testObt}
                onChange={(e) => setTestObt(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Total Marks</label>
              <input
                type="number"
                value={testTot}
                onChange={(e) => setTestTot(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-emerald-700 mb-1">Weight (%)</label>
              <input
                type="number"
                value={testWeight}
                onChange={(e) => setTestWeight(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-bold text-emerald-700"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <div className="text-xs text-slate-500 flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Weights total must equal 100%
          </div>
          <button
            type="submit"
            className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer min-h-[44px]"
          >
            <Sparkles className="w-4 h-4" />
            Calculate Custom Aggregate
          </button>
        </div>
      </form>
    </div>
  );
};
