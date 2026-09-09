import React from 'react';
import { CalculationResult } from '../types';
import { Award, CheckCircle2, AlertTriangle, ExternalLink, RefreshCw, Calculator, BookOpen, Share2 } from 'lucide-react';

interface ResultCardProps {
  result: CalculationResult;
  onRecalculate: () => void;
  onCompareMore: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  result,
  onRecalculate,
  onCompareMore,
}) => {
  const {
    university,
    program,
    admissionYear,
    matric,
    interPart1,
    entryTest,
    finalAggregate,
    formulaString,
    verified,
    sourceUrl,
    lastVerified,
    notes,
    closingMerit,
    comparisonStatus,
  } = result;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${university.shortName} Merit Aggregate`,
        text: `My estimated admission aggregate for ${university.name} (${program.name}) in ${admissionYear} is ${finalAggregate.toFixed(2)}%! Calculated via Pakistan University Merit Calculator.`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`My estimated admission aggregate for ${university.name} (${program.name}) is ${finalAggregate.toFixed(2)}%.`);
      alert('Result summary copied to clipboard!');
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 p-8 text-white relative">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                  {admissionYear} Official Formula Profile
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-3 text-white">
                  {university.name}
                </h2>
                <p className="text-emerald-200 text-sm mt-1">
                  Program: <strong className="text-white">{program.name}</strong> ({program.category})
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer backdrop-blur-xs"
                  title="Share Result"
                  aria-label="Share Result"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <button
                  onClick={onRecalculate}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-all cursor-pointer shadow-lg shadow-emerald-500/30"
                >
                  <RefreshCw className="w-4 h-4" />
                  New Calculation
                </button>
              </div>
            </div>

            {/* Big Aggregate Score Badge */}
            <div className="mt-8 p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-emerald-300 font-bold">Your Estimated Merit</div>
                <div className="text-4xl sm:text-6xl font-black text-white mt-1 tracking-tight">
                  {finalAggregate.toFixed(2)}%
                </div>
              </div>

              <div className="text-left sm:text-right">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-1">
                  {verified ? <CheckCircle2 className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4 text-amber-400" />}
                  {verified ? 'Official Verified Formula' : 'Formula Verification Required'}
                </div>
                <div className="text-xs text-slate-300">
                  {notes || 'Calculated using official institutional policy weightings.'}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* Component Contributions Table / Cards */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-emerald-600" />
                Detailed Component Breakdown
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Matric */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Matric / SSC</div>
                  <div className="text-2xl font-bold text-slate-900 mt-2">{matric.percentage.toFixed(2)}%</div>
                  <div className="text-xs text-slate-600 mt-1">
                    {matric.obtained} / {matric.total} marks
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-500">Weight: {matric.weight}%</span>
                    <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                      +{matric.contribution.toFixed(2)}%
                    </span>
                  </div>
                </div>

                {/* Inter Part 1 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Inter Part-I (Est.)</div>
                  <div className="text-2xl font-bold text-slate-900 mt-2">{interPart1.percentage.toFixed(2)}%</div>
                  <div className="text-xs text-slate-600 mt-1">
                    {interPart1.obtained} / {interPart1.total} marks
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-500">Weight: {interPart1.weight}%</span>
                    <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                      +{interPart1.contribution.toFixed(2)}%
                    </span>
                  </div>
                </div>

                {/* Entry Test */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider truncate" title={entryTest.name}>
                    {entryTest.name}
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mt-2">{entryTest.percentage.toFixed(2)}%</div>
                  <div className="text-xs text-slate-600 mt-1">
                    {entryTest.obtained} / {entryTest.total} marks
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-500">Weight: {entryTest.weight}%</span>
                    <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                      +{entryTest.contribution.toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Exact Mathematical Formula Explanation */}
            <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <h4 className="font-bold text-emerald-900 text-sm mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-700" />
                How Your Merit Was Calculated (Transparent Formula)
              </h4>
              <p className="text-xs text-emerald-800 mb-3">
                The exact mathematical formula configured for {university.shortName} ({program.name}):
              </p>
              <div className="bg-white p-4 rounded-xl border border-emerald-200 font-mono text-xs sm:text-sm text-slate-800 shadow-xs space-y-1">
                <div>({matric.percentage.toFixed(2)} × {matric.weight}%)</div>
                <div>+ ({interPart1.percentage.toFixed(2)} × {interPart1.weight}%)</div>
                <div>+ ({entryTest.percentage.toFixed(2)} × {entryTest.weight}%)</div>
                <div className="border-t border-slate-300 pt-1 font-bold text-emerald-700 text-base">
                  = {finalAggregate.toFixed(2)}%
                </div>
              </div>
            </div>

            {/* Historical Closing Merit Guidance */}
            {closingMerit && (
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Previous Closing Merit Benchmark</div>
                  <div className="text-xl font-bold text-slate-900 mt-1">{closingMerit.toFixed(2)}%</div>
                  <p className="text-xs text-slate-500 mt-0.5">Historical guidance — not a guarantee of admission.</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold ${
                    comparisonStatus === 'Historically competitive'
                      ? 'bg-emerald-100 text-emerald-800'
                      : comparisonStatus === 'Borderline'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {comparisonStatus}
                  </span>
                  <div className="text-xs font-medium text-slate-600 mt-1">
                    Difference: {(finalAggregate - closingMerit) >= 0 ? `+${(finalAggregate - closingMerit).toFixed(2)}%` : `${(finalAggregate - closingMerit).toFixed(2)}%`}
                  </div>
                </div>
              </div>
            )}

            {/* Source & Last Verified */}
            <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
              <div>
                <span className="font-bold text-slate-800">Formula Source: </span>
                <span className="text-slate-600">University Official Admission Policy</span>
                <div className="text-slate-500 mt-0.5">Last verified: {lastVerified}</div>
              </div>
              <div className="flex items-center gap-3">
                {sourceUrl && (
                  <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-800 font-semibold border border-slate-300 shadow-xs transition-all"
                  >
                    View Official Source
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={onCompareMore}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold shadow-xs transition-all cursor-pointer"
                >
                  Compare with Other Universities
                </button>
              </div>
            </div>

            {/* Important Disclaimer */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> Your calculated aggregate is an estimate. Admission depends on the university's official merit list, program, campus, quota/category, and admission cycle. Always verify final admission criteria on the university's official website.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
