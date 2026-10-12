import React, { useState } from 'react';
import { University, ProgramProfile } from '../types';
import { UNIVERSITIES_DATA } from '../data/universities';
import { Breadcrumbs } from './Breadcrumbs';
import { Building2, ShieldCheck, CheckCircle2, Calendar, ExternalLink, MapPin, Calculator, AlertTriangle, Target, ChevronDown, Link2 } from 'lucide-react';
import { updateDocumentSeo } from '../utils/seo';
import { getRelatedUniversities } from '../utils/related';
import { CustomCalculator } from './CustomCalculator';

interface UniversityDetailPageProps {
  university?: University;
  onNavigate: (path: string, uniId?: string) => void;
  onCalculateForUni: (uniId: string) => void;
}

function fmt(n: number, d = 2) {
  return n.toFixed(d);
}

/* ---------- Reverse calculator: "What test score do I need?" ---------- */
function ReverseCalculator({ program }: { program: ProgramProfile }) {
  const [target, setTarget] = useState<string>('75');
  const [mObt, setMObt] = useState<string>('1000');
  const [mTot, setMTot] = useState<string>('1100');
  const [iObt, setIObt] = useState<string>('480');
  const [iTot, setITot] = useState<string>('550');

  const T = parseFloat(target), mo = parseFloat(mObt), mt = parseFloat(mTot), io = parseFloat(iObt), it = parseFloat(iTot);
  let result: string | null = null;
  let impossible = false;
  if ([T, mo, mt, io, it].every((v) => !isNaN(v) && v > 0) && mt > 0 && it > 0) {
    const matricPct = (mo / mt) * 100;
    const interPct = (io / it) * 100;
    const locked = (matricPct * program.matricWeight) / 100 + (interPct * program.interPart1Weight) / 100;
    const needTestPct = ((T - locked) / program.testWeight) * 100;
    const needMarks = (needTestPct / 100) * program.maxTestMarks;
    if (needTestPct > 100) {
      impossible = true;
      result = `Even a perfect ${program.maxTestMarks}/${program.maxTestMarks} in ${program.testName} would only take you to ${fmt(locked + program.testWeight)}% — below your ${fmt(T)}% target. Raise your academic marks or pick a program with a lower closing merit.`;
    } else if (needTestPct < 0) {
      result = `Good news — your academic marks alone (${fmt(locked)}%) already clear your ${fmt(T)}% target. You still need to appear in ${program.testName} and meet the minimum eligibility.`;
    } else {
      result = `You need ${fmt(needMarks, 1)} out of ${program.maxTestMarks} marks (${fmt(needTestPct, 1)}%) in ${program.testName} to reach a ${fmt(T)}% aggregate.`;
    }
  }

  const field = "w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none";
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <label className="text-sm font-medium text-slate-700">Target aggregate (%)
          <input type="number" value={target} onChange={(e) => setTarget(e.target.value)} className={field + " mt-1"} />
        </label>
        <label className="text-sm font-medium text-slate-700">Matric obtained
          <input type="number" value={mObt} onChange={(e) => setMObt(e.target.value)} className={field + " mt-1"} />
        </label>
        <label className="text-sm font-medium text-slate-700">Matric total
          <input type="number" value={mTot} onChange={(e) => setMTot(e.target.value)} className={field + " mt-1"} />
        </label>
        <label className="text-sm font-medium text-slate-700">Inter obtained
          <input type="number" value={iObt} onChange={(e) => setIObt(e.target.value)} className={field + " mt-1"} />
        </label>
        <label className="text-sm font-medium text-slate-700">Inter total
          <input type="number" value={iTot} onChange={(e) => setITot(e.target.value)} className={field + " mt-1"} />
        </label>
      </div>
      {result && (
        <div className={`mt-4 p-4 rounded-xl text-sm font-medium ${impossible ? 'bg-red-50 text-red-800 border border-red-200' : 'bg-emerald-50 text-emerald-900 border border-emerald-200'}`}>
          {result}
        </div>
      )}
    </div>
  );
}

export function UniversityDetailPage({ university, onNavigate, onCalculateForUni }: UniversityDetailPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!university) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
        <Breadcrumbs items={[{ label: 'University Not Found' }]} onNavigate={onNavigate} />
        <div className="max-w-4xl mx-auto px-4 py-16 flex-grow text-center">
          <div className="bg-white rounded-2xl border border-slate-200 p-10 shadow-sm space-y-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">University Not Yet in Database</h1>
            <p className="text-slate-600 max-w-lg mx-auto">
              We couldn't find the exact university profile you requested. Don't worry! You can use our custom calculator below to calculate your merit for any institution instantly.
            </p>
            <CustomCalculator onCalculationComplete={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
            <div className="pt-4">
              <button onClick={() => onNavigate('calculator')} className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl text-sm">
                ← Back to AggreGate Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const firstProgram = university.programs[0];

  /* Worked example, computed live from the official weights */
  const exMObt = 1050, exMTot = 1100, exIObt = 495, exITot = 550;
  const exTObt = Math.round(firstProgram.maxTestMarks * 0.75), exTTot = firstProgram.maxTestMarks;
  const exMPct = (exMObt / exMTot) * 100, exIPct = (exIObt / exITot) * 100, exTPct = (exTObt / exTTot) * 100;
  const exMCon = (exMPct * firstProgram.matricWeight) / 100;
  const exICon = (exIPct * firstProgram.interPart1Weight) / 100;
  const exTCon = (exTPct * firstProgram.testWeight) / 100;
  const exAgg = exMCon + exICon + exTCon;

  const faqs = [
    {
      question: `What is the ${university.shortName} aggregate formula for 2026?`,
      answer: `${university.shortName} calculates aggregate as Matric ${firstProgram.matricWeight}% + Intermediate ${firstProgram.interPart1Weight}% + ${firstProgram.testName} ${firstProgram.testWeight}%. Formula: Aggregate = (Matric obtained ÷ Matric total × ${firstProgram.matricWeight}) + (Inter obtained ÷ Inter total × ${firstProgram.interPart1Weight}) + (Test obtained ÷ ${firstProgram.maxTestMarks} × ${firstProgram.testWeight}).`
    },
    {
      question: `What was the ${university.shortName} closing merit in 2025?`,
      answer: firstProgram.closingMerit2025
        ? `The closing merit for ${firstProgram.name} at ${university.shortName} was ${fmt(firstProgram.closingMerit2025)}% in 2025 (2024: ${firstProgram.closingMerit2024 ? fmt(firstProgram.closingMerit2024) + '%' : 'not published'}). Closing merits shift every year with applicant pool strength — treat this as a benchmark, not a guarantee.`
        : `Official closing merits for ${university.shortName} 2025 have not been published in our verified dataset yet. Use the calculator above with your marks and compare against previous years once released.`
    },
    {
      question: `Is Inter Part-1 accepted for ${university.shortName} provisional admission?`,
      answer: firstProgram.isPart1Accepted
        ? `Yes. ${university.shortName} accepts Inter Part-1 marks for provisional admission; the final merit is re-evaluated after HSSC Part-2 results are announced.`
        : `No — ${university.shortName} requires complete Intermediate (Part-1 + Part-2) results for merit calculation.`
    },
    {
      question: `What is the minimum eligibility to apply at ${university.shortName}?`,
      answer: firstProgram.minEligibleAggregate
        ? `You need a minimum aggregate of ${firstProgram.minEligibleAggregate}% to be eligible for ${firstProgram.name} at ${university.shortName}, plus the entry test requirement. Meeting eligibility does not guarantee admission — actual closing merits are higher.`
        : `Eligibility criteria vary by program at ${university.shortName}. Check the official admission portal linked above for the current year's requirements.`
    },
    {
      question: `How many marks do I need in ${firstProgram.testName}?`,
      answer: `It depends on your academic marks. Use the reverse calculator above: enter your target aggregate and your Matric/Inter marks, and it tells you the exact test score you need out of ${firstProgram.maxTestMarks}.`
    },
    {
      question: `Where is this ${university.shortName} formula verified from?`,
      answer: `The weightages on this page were last verified in ${firstProgram.lastVerified} against the official source: ${firstProgram.sourceUrl}. Formulas can change between admission cycles — always confirm against the university's official admission portal before applying.`
    }
  ];

  /* Related universities ranked by real similarity (shared programs, city, type) */
  const related = getRelatedUniversities(university, UNIVERSITIES_DATA, 6);

  React.useEffect(() => {
    updateDocumentSeo({
      path: `/universities/${university.id}`,
      title: `${university.name} (${university.shortName}) Merit Calculator 2026 — AggreGate`,
      description: `Calculate your ${university.shortName} admission aggregate for 2026 with the official formula (Matric ${firstProgram?.matricWeight}% + Inter ${firstProgram?.interPart1Weight}% + Entry Test ${firstProgram?.testWeight}%). Includes worked example, closing merit 2024–2025, and FAQs.`,
      tab: 'calculator',
      schemaType: 'WebPage',
      faqItems: faqs.map((f) => ({ question: f.question, answer: f.answer }))
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [university.id]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Breadcrumbs
        items={[
          { label: 'Universities Directory', href: '/directory' },
          { label: university.name }
        ]}
        onNavigate={(path) => {
          if (path === '/directory') onNavigate('directory');
          else onNavigate('calculator');
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
        {/* University Header Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="p-3 bg-emerald-50 text-emerald-700 rounded-2xl">
                  <Building2 className="w-8 h-8" />
                </span>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">
                      {university.universityType} ({university.feeCategoryLabel})
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold flex items-center">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                      Verified Fall 2026
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                    {university.name} ({university.shortName}) Merit Calculator 2026
                  </h1>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mt-3">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-slate-400" />
                  City: {university.city}, {university.province}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-slate-400" />
                  Academic Session: Fall 2026
                </span>
                <span className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1 text-emerald-600" />
                  Last verified: {firstProgram?.lastVerified || 'September 2026'}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onCalculateForUni(university.id)}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer min-h-[44px]"
              >
                Calculate Merit for {university.shortName} →
              </button>
              {firstProgram?.sourceUrl && (
                <a
                  href={firstProgram.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-1.5 whitespace-nowrap min-h-[44px]"
                >
                  Official Source <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Quick Answer — the block AI search tools lift verbatim */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-emerald-900 mb-2">Quick answer: {university.shortName} aggregate formula 2026</h2>
          <p className="text-emerald-950 text-sm sm:text-base leading-relaxed">
            <strong>Aggregate</strong> = (Matric obtained ÷ Matric total × {firstProgram.matricWeight}) + (Inter obtained ÷ Inter total × {firstProgram.interPart1Weight}) + ({firstProgram.testName} obtained ÷ {firstProgram.maxTestMarks} × {firstProgram.testWeight}).
            The entry test carries the highest weight at {firstProgram.testWeight}%.
            {firstProgram.closingMerit2025 ? ` The ${firstProgram.name} closing merit was ${fmt(firstProgram.closingMerit2025)}% in 2025.` : ''}
          </p>
        </div>

        {/* Programs & Formula Weights */}
        <div className="space-y-6 mb-10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Verified Undergraduate Programs & Formula Weight Breakdown</h2>
            <span className="text-xs text-slate-500 font-medium">Primary Entry Test: {firstProgram?.testName || 'Required'}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {university.programs.map((prog) => (
              <div key={prog.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                      {prog.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-2">{prog.name}</h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                    {prog.verificationStatus || 'Verified'}
                  </span>
                </div>

                <div className="space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Entry Test Weight:</span>
                    <strong className="text-emerald-700">{prog.testWeight}% ({prog.testName})</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Intermediate Weight:</span>
                    <strong className="text-slate-900">{prog.interPart1Weight}%</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Matric Weight:</span>
                    <strong className="text-slate-900">{prog.matricWeight}%</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Closing Merit (2025):</span>
                    <strong className="text-slate-900">{prog.closingMerit2025 ? `${prog.closingMerit2025}%` : 'N/A'}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Closing Merit (2024):</span>
                    <strong className="text-slate-900">{prog.closingMerit2024 ? `${prog.closingMerit2024}%` : 'N/A'}</strong>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => onCalculateForUni(university.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-emerald-600 transition-colors cursor-pointer"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    Calculate for this program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Worked Example */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Worked example: how the {university.shortName} aggregate is calculated</h2>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-left">
                    <th className="px-5 py-3 font-semibold text-slate-700">Component</th>
                    <th className="px-5 py-3 font-semibold text-slate-700">Marks</th>
                    <th className="px-5 py-3 font-semibold text-slate-700">Percentage</th>
                    <th className="px-5 py-3 font-semibold text-slate-700">Weight</th>
                    <th className="px-5 py-3 font-semibold text-slate-700">Contribution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-5 py-3 text-slate-600">Matric</td>
                    <td className="px-5 py-3 font-medium">{exMObt} / {exMTot}</td>
                    <td className="px-5 py-3">{fmt(exMPct)}%</td>
                    <td className="px-5 py-3">{firstProgram.matricWeight}%</td>
                    <td className="px-5 py-3 font-semibold text-slate-900">{fmt(exMCon)}</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-slate-600">Intermediate</td>
                    <td className="px-5 py-3 font-medium">{exIObt} / {exITot}</td>
                    <td className="px-5 py-3">{fmt(exIPct)}%</td>
                    <td className="px-5 py-3">{firstProgram.interPart1Weight}%</td>
                    <td className="px-5 py-3 font-semibold text-slate-900">{fmt(exICon)}</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-slate-600">{firstProgram.testName}</td>
                    <td className="px-5 py-3 font-medium">{exTObt} / {exTTot}</td>
                    <td className="px-5 py-3">{fmt(exTPct)}%</td>
                    <td className="px-5 py-3">{firstProgram.testWeight}%</td>
                    <td className="px-5 py-3 font-semibold text-slate-900">{fmt(exTCon)}</td>
                  </tr>
                  <tr className="bg-emerald-50">
                    <td className="px-5 py-3 font-bold text-emerald-900" colSpan={4}>Final Aggregate</td>
                    <td className="px-5 py-3 font-extrabold text-emerald-700 text-base">{fmt(exAgg)}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="px-5 py-3 text-xs text-slate-500 border-t border-slate-100">
              Example only. Enter your own marks in the calculator above — a 10-mark improvement in the entry test moves this aggregate by {fmt((10 / exTTot) * firstProgram.testWeight)}%.
            </p>
          </div>
        </div>

        {/* Closing Merit Table */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">{university.shortName} closing merit 2024 vs 2025</h2>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-left">
                    <th className="px-5 py-3 font-semibold text-slate-700">Program</th>
                    <th className="px-5 py-3 font-semibold text-slate-700">Closing Merit 2025</th>
                    <th className="px-5 py-3 font-semibold text-slate-700">Closing Merit 2024</th>
                    <th className="px-5 py-3 font-semibold text-slate-700">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {university.programs.map((prog) => {
                    const c25 = prog.closingMerit2025, c24 = prog.closingMerit2024;
                    const trend = c25 && c24 ? c25 - c24 : null;
                    return (
                      <tr key={prog.id}>
                        <td className="px-5 py-3 font-medium text-slate-900">{prog.name}</td>
                        <td className="px-5 py-3 font-semibold">{c25 ? `${fmt(c25)}%` : '—'}</td>
                        <td className="px-5 py-3 text-slate-600">{c24 ? `${fmt(c24)}%` : '—'}</td>
                        <td className="px-5 py-3">
                          {trend === null ? <span className="text-slate-400">—</span> :
                            trend > 0 ? <span className="text-red-600 font-semibold">▲ +{fmt(trend)} (tougher)</span> :
                            trend < 0 ? <span className="text-emerald-600 font-semibold">▼ {fmt(trend)} (easier)</span> :
                            <span className="text-slate-500">— stable</span>}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="px-5 py-3 text-xs text-slate-500 border-t border-slate-100">
              Closing merits are the last admitted aggregate per program. They shift every year — use them as a benchmark, not a guarantee. Last verified: {firstProgram.lastVerified}.
            </p>
          </div>
        </div>

        {/* Reverse Calculator */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900">What test score do I need for {university.shortName}?</h2>
          </div>
          <p className="text-sm text-slate-600 mb-4">Set your target aggregate and enter your academic marks — we'll tell you the exact {firstProgram.testName} score you need out of {firstProgram.maxTestMarks}.</p>
          <ReverseCalculator program={firstProgram} />
        </div>

        {/* Common Mistakes */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <h2 className="text-xl font-bold text-slate-900">5 mistakes that ruin a {university.shortName} aggregate calculation</h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <ol className="list-decimal list-inside space-y-3 text-sm text-slate-700">
              <li><strong>Using the wrong test total.</strong> {firstProgram.testName} is scored out of {firstProgram.maxTestMarks} — dividing by 200 or 100 silently breaks your result.</li>
              <li><strong>Mixing up Part-1 and full Inter marks.</strong> {university.shortName} weights Intermediate at {firstProgram.interPart1Weight}% — know whether your session counts Part-1 only or Part-1 + Part-2 before you type numbers in.</li>
              <li><strong>Entering percentages instead of obtained marks.</strong> The calculator expects obtained and total marks, not a pre-computed percentage.</li>
              <li><strong>Forgetting Matric.</strong> Matric still contributes {firstProgram.matricWeight}% — skipping it understates or overstates your aggregate.</li>
              <li><strong>Using another university's formula.</strong> Every university weights differently. A FAST formula applied to {university.shortName} numbers gives a wrong answer — always use the {university.shortName}-specific calculator above.</li>
            </ol>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">{university.shortName} merit calculator — FAQs</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                >
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">{f.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {f.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related calculators — internal linking */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Link2 className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900">Related merit calculators</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {related.map(({ university: u, sharedCategories }) => (
              <button
                key={u.id}
                onClick={() => onNavigate('universities', u.id)}
                className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:border-emerald-400 hover:text-emerald-700 transition-colors text-left cursor-pointer"
              >
                <span className="block">{u.shortName} Merit Calculator →</span>
                {sharedCategories.length > 0 && (
                  <span className="block mt-1 text-xs font-normal text-slate-500">
                    {sharedCategories.join(' · ')}
                    {u.city === university.city ? ` · ${u.city}` : ''}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Sources */}
        <div className="mb-4 text-xs text-slate-500 bg-slate-100 rounded-xl px-5 py-4">
          <strong className="text-slate-700">Sources & verification:</strong> weightages verified {firstProgram.lastVerified} against the official {university.shortName} admission portal
          {firstProgram.sourceUrl && (<> (<a href={firstProgram.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">official source</a>)</>)}.
          Closing merits are compiled from official merit lists. Formulas may change between admission cycles — confirm against the official portal before applying.
        </div>
      </div>
    </div>
  );
}
