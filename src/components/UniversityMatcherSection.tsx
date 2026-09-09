import React, { useState } from 'react';
import { MeritInput, StudentPreferences, UniversityMatchResult, ProgramCategory, Province, BudgetRange } from '../types';
import { UNIVERSITIES_DATA } from '../data/universities';
import { matchUniversities } from '../utils/universityMatcher';
import { 
  GraduationCap, 
  MapPin, 
  DollarSign, 
  Building2, 
  Compass, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Edit3, 
  Star, 
  ExternalLink,
  Sparkles,
  Info,
  ShieldCheck,
  Building
} from 'lucide-react';

interface UniversityMatcherSectionProps {
  currentMarks: MeritInput;
  onUpdateMarks: (marks: MeritInput) => void;
  onSelectUniversityFromMatch?: (uniId: string, progId: string) => void;
}

const PROGRAM_CATEGORIES: ProgramCategory[] = [
  'Computer Science',
  'Engineering',
  'Business',
  'Medical',
  'General',
  'Other'
];

const PROVINCES: Province[] = [
  'Islamabad',
  'Punjab',
  'Sindh',
  'KPK',
  'Balochistan',
  'Azad Kashmir'
];

const PRIORITIES_LIST = [
  'Affordable education',
  'Strong academic reputation',
  'Scholarship opportunities',
  'Hostel availability',
  'Close to home',
  'Good career opportunities',
  'Research opportunities',
  'Student life'
];

export const UniversityMatcherSection: React.FC<UniversityMatcherSectionProps> = ({
  currentMarks,
  onUpdateMarks
}) => {
  const [step, setStep] = useState<number>(1);
  const [isMatchingDone, setIsMatchingDone] = useState<boolean>(false);
  const [selectedUniversityForModal, setSelectedUniversityForModal] = useState<UniversityMatchResult | null>(null);

  // Editable marks state
  const [isEditingMarks, setIsEditingMarks] = useState<boolean>(false);
  const [tempMarks, setTempMarks] = useState<MeritInput>(currentMarks);
  const [marksError, setMarksError] = useState<string | null>(null);

  // Student Preferences State
  const [preferences, setPreferences] = useState<StudentPreferences>({
    marks: currentMarks,
    desiredCategory: 'Computer Science',
    specificProgramQuery: '',
    budget: 'Rs. 100,000–200,000 per year',
    needsFinancialAid: 'Maybe',
    currentCity: 'Lahore',
    currentProvince: 'Punjab',
    willingness: 'Same province',
    needsHostel: 'Not sure',
    universityTypePreference: 'Both',
    priorities: ['Strong academic reputation', 'Affordable education'],
    flexibility: 'Somewhat flexible'
  });

  const [matchResults, setMatchResults] = useState<UniversityMatchResult[]>([]);

  // Keep marks in sync if changed in parent
  React.useEffect(() => {
    setPreferences(prev => ({
      ...prev,
      marks: currentMarks
    }));
    if (!isEditingMarks) {
      setTempMarks(currentMarks);
    }
  }, [currentMarks]);

  const handleSaveMarks = () => {
    setMarksError(null);
    const mObt = Number(tempMarks.matricObtained);
    const mTot = Number(tempMarks.matricTotal);
    const iObt = Number(tempMarks.interObtained);
    const iTot = Number(tempMarks.interTotal);
    const tObt = Number(tempMarks.testObtained);
    const tTot = Number(tempMarks.testTotal);

    if (
      tempMarks.matricObtained === '' ||
      tempMarks.matricTotal === '' ||
      tempMarks.interObtained === '' ||
      tempMarks.interTotal === '' ||
      tempMarks.testObtained === '' ||
      tempMarks.testTotal === ''
    ) {
      setMarksError('All marks fields are required.');
      return;
    }

    if (isNaN(mObt) || isNaN(mTot) || isNaN(iObt) || isNaN(iTot) || isNaN(tObt) || isNaN(tTot)) {
      setMarksError('All marks must be valid numbers.');
      return;
    }

    if (mTot <= 0 || iTot <= 0 || tTot <= 0) {
      setMarksError('Total marks must be greater than zero.');
      return;
    }

    if (mObt < 0 || iObt < 0 || tObt < 0) {
      setMarksError('Obtained marks cannot be negative.');
      return;
    }

    if (mObt > mTot) {
      setMarksError('Matric obtained marks cannot exceed total marks.');
      return;
    }

    if (iObt > iTot) {
      setMarksError('Inter Part-I obtained marks cannot exceed total marks.');
      return;
    }

    if (tObt > tTot) {
      setMarksError('Entry test obtained marks cannot exceed total marks.');
      return;
    }

    onUpdateMarks(tempMarks);
    setPreferences(prev => ({ ...prev, marks: tempMarks }));
    setIsEditingMarks(false);
  };

  const handleRunMatch = () => {
    const results = matchUniversities(preferences, UNIVERSITIES_DATA);
    setMatchResults(results);
    setIsMatchingDone(true);
  };

  const handlePriorityToggle = (priority: string) => {
    setPreferences(prev => {
      const exists = prev.priorities.includes(priority);
      if (exists) {
        return { ...prev, priorities: prev.priorities.filter(p => p !== priority) };
      } else {
        return { ...prev, priorities: [...prev.priorities, priority] };
      }
    });
  };

  const getTierBadgeColor = (tier: UniversityMatchResult['matchTier']) => {
    switch (tier) {
      case 'Best Match':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800';
      case 'Good Match':
        return 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800';
      case 'Possible Match':
        return 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800';
      default:
        return 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800';
    }
  };

  const getEligibilityBadge = (status: UniversityMatchResult['eligibilityStatus']) => {
    switch (status) {
      case 'Eligible':
        return <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full"><CheckCircle2 className="w-3.5 h-3.5" /> Eligible</span>;
      case 'Borderline':
        return <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full"><AlertTriangle className="w-3.5 h-3.5" /> Borderline</span>;
      case 'May not meet eligibility':
        return <span className="inline-flex items-center gap-1 text-xs font-medium text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full"><AlertTriangle className="w-3.5 h-3.5" /> May not meet eligibility</span>;
      default:
        return <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full"><Info className="w-3.5 h-3.5" /> Needs Verification</span>;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium mb-3 border border-emerald-200">
          <Sparkles className="w-3.5 h-3.5" /> Real Personalized Recommendation Engine
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-3">
          Find My Best University
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Find universities that match your marks, goals, budget and preferences.
        </p>
      </div>

      {!isMatchingDone ? (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700">Step {step} of 5</span>
            <div className="flex gap-1.5 w-48">
              {[1, 2, 3, 4, 5].map(s => (
                <div 
                  key={s} 
                  className={`h-2 flex-1 rounded-full transition-all duration-300 ${s <= step ? 'bg-emerald-600' : 'bg-slate-200'}`}
                />
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* STEP 1: Academic Profile */}
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Academic Profile & Marks</h3>
                    <p className="text-sm text-slate-600">Review or edit your marks. Changes automatically update recommendations.</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Current Stored Marks</h4>
                      <p className="text-xs text-slate-500">Synced across calculator and recommendations</p>
                    </div>
                    {!isEditingMarks ? (
                      <button
                        type="button"
                        onClick={() => {
                          setTempMarks(preferences.marks);
                          setIsEditingMarks(true);
                          setMarksError(null);
                        }}
                        className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg shadow-xs transition-all inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-emerald-600" /> Edit Marks
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleSaveMarks}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-all cursor-pointer"
                        >
                          Save Changes
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setIsEditingMarks(false);
                            setTempMarks(preferences.marks);
                            setMarksError(null);
                          }}
                          className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-lg transition-all cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>

                  {!isEditingMarks ? (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1">
                        <div className="text-xs text-slate-500">Matric / SSC</div>
                        <div className="text-base font-bold text-slate-800">
                          {preferences.marks.matricObtained !== '' ? `${preferences.marks.matricObtained} / ${preferences.marks.matricTotal}` : 'Not entered'}
                        </div>
                        {preferences.marks.matricObtained !== '' && preferences.marks.matricTotal !== '' && Number(preferences.marks.matricTotal) > 0 && (
                          <div className="text-xs text-emerald-700 font-semibold">
                            Percentage: {((Number(preferences.marks.matricObtained) / Number(preferences.marks.matricTotal)) * 100).toFixed(1)}%
                          </div>
                        )}
                      </div>
                      <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1">
                        <div className="text-xs text-slate-500">Inter Part-I</div>
                        <div className="text-base font-bold text-slate-800">
                          {preferences.marks.interObtained !== '' ? `${preferences.marks.interObtained} / ${preferences.marks.interTotal}` : 'Not entered'}
                        </div>
                        {preferences.marks.interObtained !== '' && preferences.marks.interTotal !== '' && Number(preferences.marks.interTotal) > 0 && (
                          <div className="text-xs text-emerald-700 font-semibold">
                            Percentage: {((Number(preferences.marks.interObtained) / Number(preferences.marks.interTotal)) * 100).toFixed(1)}%
                          </div>
                        )}
                      </div>
                      <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1">
                        <div className="text-xs text-slate-500">Entry Test</div>
                        <div className="text-base font-bold text-slate-800">
                          {preferences.marks.testObtained !== '' ? `${preferences.marks.testObtained} / ${preferences.marks.testTotal}` : 'Not entered'}
                        </div>
                        {preferences.marks.testObtained !== '' && preferences.marks.testTotal !== '' && Number(preferences.marks.testTotal) > 0 && (
                          <div className="text-xs text-emerald-700 font-semibold">
                            Percentage: {((Number(preferences.marks.testObtained) / Number(preferences.marks.testTotal)) * 100).toFixed(1)}%
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Matric Edit */}
                        <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-2">
                          <div className="text-xs font-semibold text-slate-700">Matric / SSC</div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="text-[10px] text-slate-500 block mb-0.5">Obtained</label>
                              <input
                                type="number"
                                value={tempMarks.matricObtained}
                                onChange={e => setTempMarks({ ...tempMarks, matricObtained: e.target.value === '' ? '' : Number(e.target.value) })}
                                className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded font-semibold text-slate-800 focus:ring-1 focus:ring-emerald-500"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] text-slate-500 block mb-0.5">Total</label>
                              <input
                                type="number"
                                value={tempMarks.matricTotal}
                                onChange={e => setTempMarks({ ...tempMarks, matricTotal: e.target.value === '' ? '' : Number(e.target.value) })}
                                className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded font-semibold text-slate-800 focus:ring-1 focus:ring-emerald-500"
                              />
                            </div>
                          </div>
                          {tempMarks.matricObtained !== '' && tempMarks.matricTotal !== '' && Number(tempMarks.matricTotal) > 0 && (
                            <div className="text-[11px] text-emerald-700 font-medium">
                              Live %: {((Number(tempMarks.matricObtained) / Number(tempMarks.matricTotal)) * 100).toFixed(1)}%
                            </div>
                          )}
                        </div>

                        {/* Inter Part-I Edit */}
                        <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-2">
                          <div className="text-xs font-semibold text-slate-700">Inter Part-I</div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="text-[10px] text-slate-500 block mb-0.5">Obtained</label>
                              <input
                                type="number"
                                value={tempMarks.interObtained}
                                onChange={e => setTempMarks({ ...tempMarks, interObtained: e.target.value === '' ? '' : Number(e.target.value) })}
                                className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded font-semibold text-slate-800 focus:ring-1 focus:ring-emerald-500"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] text-slate-500 block mb-0.5">Total</label>
                              <input
                                type="number"
                                value={tempMarks.interTotal}
                                onChange={e => setTempMarks({ ...tempMarks, interTotal: e.target.value === '' ? '' : Number(e.target.value) })}
                                className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded font-semibold text-slate-800 focus:ring-1 focus:ring-emerald-500"
                              />
                            </div>
                          </div>
                          {tempMarks.interObtained !== '' && tempMarks.interTotal !== '' && Number(tempMarks.interTotal) > 0 && (
                            <div className="text-[11px] text-emerald-700 font-medium">
                              Live %: {((Number(tempMarks.interObtained) / Number(tempMarks.interTotal)) * 100).toFixed(1)}%
                            </div>
                          )}
                        </div>

                        {/* Entry Test Edit */}
                        <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-2">
                          <div className="text-xs font-semibold text-slate-700">Entry Test</div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="text-[10px] text-slate-500 block mb-0.5">Obtained</label>
                              <input
                                type="number"
                                value={tempMarks.testObtained}
                                onChange={e => setTempMarks({ ...tempMarks, testObtained: e.target.value === '' ? '' : Number(e.target.value) })}
                                className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded font-semibold text-slate-800 focus:ring-1 focus:ring-emerald-500"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] text-slate-500 block mb-0.5">Total</label>
                              <input
                                type="number"
                                value={tempMarks.testTotal}
                                onChange={e => setTempMarks({ ...tempMarks, testTotal: e.target.value === '' ? '' : Number(e.target.value) })}
                                className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded font-semibold text-slate-800 focus:ring-1 focus:ring-emerald-500"
                              />
                            </div>
                          </div>
                          {tempMarks.testObtained !== '' && tempMarks.testTotal !== '' && Number(tempMarks.testTotal) > 0 && (
                            <div className="text-[11px] text-emerald-700 font-medium">
                              Live %: {((Number(tempMarks.testObtained) / Number(tempMarks.testTotal)) * 100).toFixed(1)}%
                            </div>
                          )}
                        </div>
                      </div>

                      {marksError && (
                        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 shrink-0" />
                          <span>{marksError}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-slate-700">What is your primary desired field / category?</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {PROGRAM_CATEGORIES.map(cat => (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => setPreferences(prev => ({ ...prev, desiredCategory: cat }))}
                        className={`p-3 rounded-xl border text-sm font-medium transition-all text-left ${
                          preferences.desiredCategory === cat
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-sm'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Specific Degree or Keyword Search (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineering, Artificial Intelligence, BBA..."
                    value={preferences.specificProgramQuery}
                    onChange={e => setPreferences(prev => ({ ...prev, specificProgramQuery: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800"
                  />
                </div>
              </div>
            )}

            {/* STEP 2: Financial Capacity */}
            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Financial Capacity & Budget</h3>
                    <p className="text-sm text-slate-600">No sensitive financial information is requested.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-slate-700">What is your maximum education budget per year?</label>
                  <div className="space-y-2">
                    {(['Under Rs. 100,000 per year', 'Rs. 100,000–200,000 per year', 'Rs. 200,000–400,000 per year', 'Rs. 400,000–600,000 per year', 'Above Rs. 600,000 per year', 'I am not sure'] as BudgetRange[]).map(range => (
                      <label
                        key={range}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          preferences.budget === range
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-medium'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="budget"
                          checked={preferences.budget === range}
                          onChange={() => setPreferences(prev => ({ ...prev, budget: range }))}
                          className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                        />
                        {range}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-slate-700">Do you need financial assistance or a scholarship?</label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['Yes', 'No', 'Maybe'] as ('Yes' | 'No' | 'Maybe')[]).map(opt => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setPreferences(prev => ({ ...prev, needsFinancialAid: opt }))}
                        className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                          preferences.needsFinancialAid === opt
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-sm'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Location & Hostel */}
            {step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Location & Accommodation</h3>
                    <p className="text-sm text-slate-600">Tell us where you are based and where you are willing to study.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Your Current City</label>
                    <input
                      type="text"
                      placeholder="e.g. Lahore, Karachi, Islamabad..."
                      value={preferences.currentCity}
                      onChange={e => setPreferences(prev => ({ ...prev, currentCity: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Province / Region</label>
                    <select
                      value={preferences.currentProvince}
                      onChange={e => setPreferences(prev => ({ ...prev, currentProvince: e.target.value as Province }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800 bg-white"
                    >
                      {PROVINCES.map(prov => (
                        <option key={prov} value={prov}>{prov}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-slate-700">Where are you willing to study?</label>
                  <div className="space-y-2">
                    {(['Only in my city', 'Same province', 'Anywhere in Pakistan'] as ('Only in my city' | 'Same province' | 'Anywhere in Pakistan')[]).map(opt => (
                      <label
                        key={opt}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          preferences.willingness === opt
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-medium'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="willingness"
                          checked={preferences.willingness === opt}
                          onChange={() => setPreferences(prev => ({ ...prev, willingness: opt }))}
                          className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-slate-700">Do you need a hostel facility?</label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['Yes', 'No', 'Not sure'] as ('Yes' | 'No' | 'Not sure')[]).map(opt => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setPreferences(prev => ({ ...prev, needsHostel: opt }))}
                        className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                          preferences.needsHostel === opt
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-sm'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: University Preferences */}
            {step === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">University Type & Priorities</h3>
                    <p className="text-sm text-slate-600">Select what type of institution and qualities matter most to you.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-slate-700">What type of university do you prefer?</label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['Public', 'Private', 'Both'] as ('Public' | 'Private' | 'Both')[]).map(type => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setPreferences(prev => ({ ...prev, universityTypePreference: type }))}
                        className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                          preferences.universityTypePreference === type
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-sm'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-slate-700">What matters most to you? (Select all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {PRIORITIES_LIST.map(priority => {
                      const selected = preferences.priorities.includes(priority);
                      return (
                        <button
                          type="button"
                          key={priority}
                          onClick={() => handlePriorityToggle(priority)}
                          className={`p-3 rounded-xl border text-sm font-medium text-left transition-all flex items-center justify-between ${
                            selected
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <span>{priority}</span>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${selected ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300'}`}>
                            {selected && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: Flexibility & Review */}
            {step === 5 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Flexibility & Final Review</h3>
                    <p className="text-sm text-slate-600">Almost ready to calculate your personalized matches.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-slate-700">How flexible are you about university location & choices?</label>
                  <div className="space-y-2">
                    {(['Very flexible', 'Somewhat flexible', 'Prefer nearby', 'Only my city'] as ('Very flexible' | 'Somewhat flexible' | 'Prefer nearby' | 'Only my city')[]).map(flex => (
                      <label
                        key={flex}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          preferences.flexibility === flex
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-medium'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="flexibility"
                          checked={preferences.flexibility === flex}
                          onChange={() => setPreferences(prev => ({ ...prev, flexibility: flex }))}
                          className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                        />
                        {flex}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
                  <h4 className="font-semibold text-slate-800 text-sm">Summary of Your Preferences</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                    <div><strong className="text-slate-800">Desired Field:</strong> {preferences.desiredCategory}</div>
                    <div><strong className="text-slate-800">Budget:</strong> {preferences.budget}</div>
                    <div><strong className="text-slate-800">Location:</strong> {preferences.currentCity} ({preferences.currentProvince})</div>
                    <div><strong className="text-slate-800">Willingness:</strong> {preferences.willingness}</div>
                    <div><strong className="text-slate-800">Hostel Required:</strong> {preferences.needsHostel}</div>
                    <div><strong className="text-slate-800">University Type:</strong> {preferences.universityTypePreference}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-200">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-all text-sm"
                >
                  <ArrowLeft className="w-4 h-4" /> Previous
                </button>
              ) : <div />}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-all text-sm shadow-sm"
                >
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleRunMatch}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all text-sm shadow-md"
                >
                  <Sparkles className="w-4 h-4" /> Calculate My Best Matches
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* RESULTS DASHBOARD */
        <div className="space-y-8 animate-fadeIn">
          {/* Top Actions & Summary Banner */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Analysis Completed</span>
              <h3 className="text-2xl font-bold mt-1">Your Personalized University Matches</h3>
              <p className="text-slate-300 text-sm mt-1">
                Found {matchResults.length} matching programs based on your academic profile, budget, and location preferences.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-all border border-slate-700"
              >
                <Edit3 className="w-4 h-4" /> Edit My Answers
              </button>
              <button
                onClick={() => setIsMatchingDone(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-all shadow-sm"
              >
                <RotateCcw className="w-4 h-4" /> Start Again
              </button>
            </div>
          </div>

          {/* BEST 3 UNIVERSITIES FOR YOU */}
          {matchResults.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <h4 className="text-xl font-bold text-slate-900">Best 3 Universities For You</h4>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {matchResults.slice(0, 3).map((res, index) => (
                  <div
                    key={`${res.university.id}-${res.program.id}`}
                    className="bg-white rounded-2xl border-2 border-emerald-500/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden relative"
                  >
                    <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      #{index + 1} • {res.matchScore}% Match
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">
                          {res.matchTier}
                        </div>
                        <h5 className="text-lg font-bold text-slate-900">{res.university.name}</h5>
                        <p className="text-sm font-medium text-slate-600">{res.program.name}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" /> {res.university.city} ({res.university.province})
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                          <Building className="w-3.5 h-3.5 text-slate-400" /> {res.university.universityType}
                        </span>
                        {getEligibilityBadge(res.eligibilityStatus)}
                      </div>

                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1.5">
                        <span className="text-xs font-semibold text-slate-700 block">Why this university matches you:</span>
                        <p className="text-xs text-slate-600 line-clamp-3">
                          {res.reasons[0] || 'Aligns well with your academic aggregate and preferences.'}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Est. Fee: {res.university.feeCategoryLabel}</span>
                      <button
                        onClick={() => setSelectedUniversityForModal(res)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                      >
                        View Full Breakdown <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* OTHER MATCHES & OPTIONS */}
          {matchResults.length > 3 && (
            <div className="space-y-4 pt-6">
              <h4 className="text-lg font-bold text-slate-900">Good Matches & Other Options</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchResults.slice(3, 9).map((res) => (
                  <div
                    key={`${res.university.id}-${res.program.id}`}
                    className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between gap-4 hover:border-slate-300 transition-all"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${getTierBadgeColor(res.matchTier)}`}>
                          {res.matchScore}% Match
                        </span>
                        {getEligibilityBadge(res.eligibilityStatus)}
                      </div>
                      <h5 className="font-bold text-slate-900 text-sm">{res.university.name}</h5>
                      <p className="text-xs text-slate-600">{res.program.name} • {res.university.city}</p>
                    </div>
                    <button
                      onClick={() => setSelectedUniversityForModal(res)}
                      className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-all whitespace-nowrap"
                    >
                      Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trust Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl text-xs text-amber-900 space-y-1.5">
            <div className="font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-700" /> Guidance Disclaimer
            </div>
            <p>
              These recommendations are guidance based on the information you provided. They do not guarantee admission. Admission criteria, merit formulas, scholarships, hostel availability and costs can change. Always verify the latest information from the university&apos;s official website.
            </p>
          </div>
        </div>
      )}

      {/* MATCH BREAKDOWN MODAL */}
      {selectedUniversityForModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto animate-fadeIn">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Overall Match: {selectedUniversityForModal.matchScore}%
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">{selectedUniversityForModal.university.name}</h3>
                <p className="text-sm font-medium text-slate-600">{selectedUniversityForModal.program.name}</p>
              </div>
              <button
                onClick={() => setSelectedUniversityForModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-slate-800 text-sm">Detailed Fit Breakdown</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500">Academic Fit</div>
                  <div className="flex items-center gap-1 mt-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < selectedUniversityForModal.breakdown.academicStars ? 'fill-current' : 'text-slate-300'}`} />
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500">Program Fit</div>
                  <div className="flex items-center gap-1 mt-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < selectedUniversityForModal.breakdown.programStars ? 'fill-current' : 'text-slate-300'}`} />
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500">Location Fit</div>
                  <div className="flex items-center gap-1 mt-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < selectedUniversityForModal.breakdown.locationStars ? 'fill-current' : 'text-slate-300'}`} />
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500">Financial Fit</div>
                  <div className="flex items-center gap-1 mt-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < selectedUniversityForModal.breakdown.financialStars ? 'fill-current' : 'text-slate-300'}`} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="font-semibold text-slate-800 text-sm">Why this university matches you</h4>
                <ul className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {selectedUniversityForModal.reasons.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1 text-xs text-slate-500 pt-1">
                <div><strong className="text-slate-700">Estimated Annual Fee Category:</strong> {selectedUniversityForModal.university.feeCategoryLabel}</div>
                <div><strong className="text-slate-700">Official Source:</strong> <a href={selectedUniversityForModal.program.sourceUrl} target="_blank" rel="noreferrer" className="text-emerald-600 hover:underline inline-flex items-center gap-1">Verify on Official Site <ExternalLink className="w-3 h-3" /></a></div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setSelectedUniversityForModal(null)}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-sm transition-all"
              >
                Close Breakdown
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
