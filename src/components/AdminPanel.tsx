import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, AlertTriangle, Clock, Database, Search, Filter, Plus, Edit2, CheckCircle2, 
  XCircle, LogOut, MessageSquare, History, Globe, FileText, Check, ChevronRight, X, User, Save, RefreshCw, Key
} from 'lucide-react';
import { University, ProgramProfile, VerificationStatus, SourceType } from '../types';
import { 
  getStoredUniversities, saveUniversities, getStoredInquiries, saveInquiries, 
  getStoredHistory, saveHistory, AdminInquiry, UpdateHistoryItem 
} from '../services/universityStore';
import { getLocalCmsContent, saveLocalCmsContent, updateCmsContentInSupabase, fetchCmsContentFromSupabase } from '../services/cmsStore';
import { supabase, isSupabaseConfigured } from '../services/supabaseClient';
import { AdminSeoAudit } from './AdminSeoAudit';

interface AdminPanelProps {
  onLogout: () => void;
  onExit: () => void;
  userEmail?: string;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout, onExit, userEmail = 'admin@pakistanmerit.pk' }) => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [inquiries, setInquiries] = useState<AdminInquiry[]>([]);
  const [history, setHistory] = useState<UpdateHistoryItem[]>([]);
  const [cmsContent, setCmsContent] = useState<Record<string, string>>(getLocalCmsContent());
  const [activeTab, setActiveTab] = useState<'content' | 'universities' | 'inquiries' | 'history' | 'seo-audit'>('content');
  
  // CMS saving status
  const [savingField, setSavingField] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>('');

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedUniId, setSelectedUniId] = useState<string>('');
  const [selectedProgram, setSelectedProgram] = useState<ProgramProfile | null>(null);

  useEffect(() => {
    setUniversities(getStoredUniversities());
    setInquiries(getStoredInquiries());
    setHistory(getStoredHistory());
    fetchCmsContentFromSupabase().then(data => setCmsContent(data));
  }, []);

  const handleCmsChange = (key: string, value: string) => {
    setCmsContent(prev => ({ ...prev, [key]: value }));
  };

  const handleCmsSave = async (key: string, section: string = 'general') => {
    setSavingField(key);
    const success = await updateCmsContentInSupabase(key, cmsContent[key], section);
    setSavingField(null);
    if (success) {
      setSuccessMessage(`Successfully updated "${key}". Live website updated!`);
      setTimeout(() => setSuccessMessage(''), 4000);
      // Trigger event for live website update
      window.dispatchEvent(new Event('cms-content-updated'));
    } else {
      setSuccessMessage(`Failed to update "${key}". Please check connection.`);
      setTimeout(() => setSuccessMessage(''), 4000);
    }
  };

  // Stats
  const totalUniversities = universities.length;
  let totalPrograms = 0;
  let verifiedCount = 0;
  let needsReviewCount = 0;
  let expiredCount = 0;

  universities.forEach(u => {
    u.programs.forEach(p => {
      totalPrograms++;
      const status = p.verificationStatus || 'Verified';
      if (status === 'Verified') verifiedCount++;
      else if (status === 'Needs Review') needsReviewCount++;
      else if (status === 'Expired') expiredCount++;
    });
  });

  const handleUpdateProgram = (uniId: string, programId: string, updatedFields: Partial<ProgramProfile>) => {
    const updated = universities.map(u => {
      if (u.id === uniId) {
        const newPrograms = u.programs.map(p => {
          if (p.id === programId) {
            const updatedProg = { ...p, ...updatedFields };
            const histItem: UpdateHistoryItem = {
              id: `hist-${Date.now()}`,
              universityId: u.id,
              universityName: u.name,
              programName: p.name,
              fieldChanged: Object.keys(updatedFields).join(', '),
              previousValue: String((p as any)[Object.keys(updatedFields)[0]] || ''),
              newValue: String(Object.values(updatedFields)[0] || ''),
              updatedAt: new Date().toISOString().split('T')[0],
              session: updatedProg.academicSession || 'Fall 2026',
              status: updatedProg.verificationStatus || 'Verified',
            };
            const newHist = [histItem, ...history];
            setHistory(newHist);
            saveHistory(newHist);

            return updatedProg;
          }
          return p;
        });
        return { ...u, programs: newPrograms };
      }
      return u;
    });

    setUniversities(updated);
    saveUniversities(updated);
    setSelectedProgram(null);
    setSuccessMessage('Program criteria updated successfully.');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleResolveInquiry = (inqId: string) => {
    const updated = inquiries.map(i => i.id === inqId ? { ...i, status: 'Resolved' as const } : i);
    setInquiries(updated);
    saveInquiries(updated);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white flex items-center gap-2">
              Client Admin CMS Dashboard
              <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2.5 py-0.5 rounded-full font-semibold border border-emerald-500/30">
                Secure Session Active
              </span>
            </h1>
            <p className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
              <User className="w-3.5 h-3.5 text-emerald-400" /> Logged in as: <strong className="text-slate-200">{userEmail}</strong>
              <span className="text-slate-500">•</span>
              <span className={isSupabaseConfigured ? "text-emerald-400 font-medium" : "text-amber-400 font-medium"}>
                {isSupabaseConfigured ? "🟢 Supabase PostgreSQL Connected" : "🟡 Local Storage CMS Mode (Supabase not configured)"}
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
          >
            Return to Public Website
          </button>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 border border-red-500/30 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      {successMessage && (
        <div className="bg-emerald-600 text-white px-6 py-3 text-center text-sm font-medium flex items-center justify-center gap-2 shadow-md">
          <CheckCircle2 className="w-5 h-5" />
          {successMessage}
        </div>
      )}

      {/* Navigation Subheader */}
      <div className="bg-slate-800/50 border-b border-slate-700/80 px-6 flex overflow-x-auto gap-2">
        <button
          onClick={() => setActiveTab('content')}
          className={`px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'content' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          Website Content CMS
        </button>
        <button
          onClick={() => setActiveTab('universities')}
          className={`px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'universities' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Database className="w-4 h-4" />
          University Data & Criteria ({totalPrograms})
        </button>
        <button
          onClick={() => setActiveTab('inquiries')}
          className={`px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'inquiries' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          Student Inquiries ({inquiries.filter(i => i.status === 'Pending').length})
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'history' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <History className="w-4 h-4" />
          Audit & Update History
        </button>
        <button
          onClick={() => setActiveTab('seo-audit')}
          className={`px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'seo-audit' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Globe className="w-4 h-4" />
          SEO Health & Audit
        </button>
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <div className="text-slate-400 text-xs font-medium uppercase">Total Universities</div>
              <div className="text-2xl font-bold text-white mt-1">{totalUniversities}</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <div className="text-slate-400 text-xs font-medium uppercase">Verified Programs</div>
              <div className="text-2xl font-bold text-emerald-400 mt-1">{verifiedCount} / {totalPrograms}</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <div className="text-slate-400 text-xs font-medium uppercase">Pending Inquiries</div>
              <div className="text-2xl font-bold text-amber-400 mt-1">{inquiries.filter(i => i.status === 'Pending').length}</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <div className="text-slate-400 text-xs font-medium uppercase">CMS Backend</div>
              <div className="text-sm font-bold text-emerald-400 mt-1">
                {isSupabaseConfigured ? "Supabase RLS Active" : "Local Storage Mode"}
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Tab 1: Content CMS */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white">Website Content Management System (CMS)</h2>
                  <p className="text-sm text-slate-400">Edit public website headings, hero text, buttons, and announcements instantly without code deployments.</p>
                </div>
                <button
                  onClick={() => fetchCmsContentFromSupabase().then(data => setCmsContent(data))}
                  className="px-3.5 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Reload from Database
                </button>
              </div>

              {!isSupabaseConfigured && (
                <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold mb-1">Supabase Credentials Not Yet Configured in Environment Variables</strong>
                    You are currently using local storage mode for testing. To enable secure cloud persistence and Row Level Security (RLS) across devices, add <code className="bg-slate-900 px-1.5 py-0.5 rounded text-emerald-300">VITE_SUPABASE_URL</code> and <code className="bg-slate-900 px-1.5 py-0.5 rounded text-emerald-300">VITE_SUPABASE_ANON_KEY</code> to your Vercel project settings or `.env`.
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Hero Badge */}
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Hero Badge Text (Top Banner)
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={cmsContent['hero_badge'] || ''}
                      onChange={(e) => handleCmsChange('hero_badge', e.target.value)}
                      className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <button
                      disabled={savingField === 'hero_badge'}
                      onClick={() => handleCmsSave('hero_badge', 'hero')}
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Save className="w-4 h-4" />
                      {savingField === 'hero_badge' ? 'Saving...' : 'Save & Publish'}
                    </button>
                  </div>
                </div>

                {/* Hero Title */}
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Hero Main Heading
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={cmsContent['hero_title'] || ''}
                      onChange={(e) => handleCmsChange('hero_title', e.target.value)}
                      className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <button
                      disabled={savingField === 'hero_title'}
                      onClick={() => handleCmsSave('hero_title', 'hero')}
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Save className="w-4 h-4" />
                      {savingField === 'hero_title' ? 'Saving...' : 'Save & Publish'}
                    </button>
                  </div>
                </div>

                {/* Hero Subtitle */}
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Hero Supporting Description
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <textarea
                      rows={3}
                      value={cmsContent['hero_subtitle'] || ''}
                      onChange={(e) => handleCmsChange('hero_subtitle', e.target.value)}
                      className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <div className="flex sm:flex-col justify-end">
                      <button
                        disabled={savingField === 'hero_subtitle'}
                        onClick={() => handleCmsSave('hero_subtitle', 'hero')}
                        className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 h-fit"
                      >
                        <Save className="w-4 h-4" />
                        {savingField === 'hero_subtitle' ? 'Saving...' : 'Save & Publish'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Primary & Secondary CTA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Primary Button Text</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={cmsContent['primary_cta'] || ''}
                        onChange={(e) => handleCmsChange('primary_cta', e.target.value)}
                        className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm"
                      />
                      <button
                        disabled={savingField === 'primary_cta'}
                        onClick={() => handleCmsSave('primary_cta', 'buttons')}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl"
                      >
                        Save
                      </button>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Secondary Button Text</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={cmsContent['secondary_cta'] || ''}
                        onChange={(e) => handleCmsChange('secondary_cta', e.target.value)}
                        className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm"
                      />
                      <button
                        disabled={savingField === 'secondary_cta'}
                        onClick={() => handleCmsSave('secondary_cta', 'buttons')}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>

                {/* Contact & Announcements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Support Email</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={cmsContent['contact_email'] || ''}
                        onChange={(e) => handleCmsChange('contact_email', e.target.value)}
                        className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm"
                      />
                      <button
                        disabled={savingField === 'contact_email'}
                        onClick={() => handleCmsSave('contact_email', 'contact')}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl"
                      >
                        Save
                      </button>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Announcement Banner</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={cmsContent['announcement_banner'] || ''}
                        onChange={(e) => handleCmsChange('announcement_banner', e.target.value)}
                        className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm"
                      />
                      <button
                        disabled={savingField === 'announcement_banner'}
                        onClick={() => handleCmsSave('announcement_banner', 'announcement')}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Universities & Programs Management */}
        {activeTab === 'universities' && (
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white">University Programs & Verified Criteria</h2>
                  <p className="text-sm text-slate-400">Update weightages, closing merits, and official sources for Fall 2026 admissions.</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search university..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {universities
                  .filter(u => u.name.toLowerCase().includes(searchQuery.toLowerCase()) || u.shortName.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((uni) => (
                    <div key={uni.id} className="bg-slate-900 rounded-2xl p-5 border border-slate-700">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl font-bold">
                            {uni.shortName}
                          </span>
                          <div>
                            <h3 className="font-bold text-white text-base">{uni.name}</h3>
                            <p className="text-xs text-slate-400">{uni.city}, {uni.province} • {uni.universityType}</p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700">
                          {uni.programs.length} Programs
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {uni.programs.map((prog) => (
                          <div key={prog.id} className="bg-slate-800 p-4 rounded-xl border border-slate-700/80 flex flex-col justify-between">
                            <div>
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <h4 className="font-semibold text-white text-sm">{prog.name}</h4>
                                <span className="text-[10px] px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full">
                                  {prog.verificationStatus || 'Verified'}
                                </span>
                              </div>
                              <div className="text-xs text-slate-400 space-y-1">
                                <div>Matric: {prog.matricWeight}% | Inter: {prog.interPart1Weight}% | Test: {prog.testWeight}%</div>
                                <div>Closing Merit (2025): <strong className="text-emerald-400">{prog.closingMerit2025 ? `${prog.closingMerit2025}%` : 'N/A'}</strong></div>
                              </div>
                            </div>
                            <div className="mt-4 pt-3 border-t border-slate-700 flex items-center justify-between">
                              <span className="text-[11px] text-slate-400">Session: {prog.academicSession || 'Fall 2026'}</span>
                              <button
                                onClick={() => setSelectedProgram(prog)}
                                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                              >
                                Edit Criteria
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Inquiries */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold text-white mb-2">Student & Applicant Inquiries</h2>
              <p className="text-sm text-slate-400 mb-6">Review student questions regarding entry tests, closing merits, and hostel availability.</p>

              <div className="space-y-4">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="bg-slate-900 p-5 rounded-xl border border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full">
                          {inq.university}
                        </span>
                        <span className="text-xs text-slate-400">{inq.program} • {inq.session}</span>
                      </div>
                      <p className="text-sm text-white font-medium">{inq.question}</p>
                      <p className="text-xs text-slate-400">Contact: {inq.contactInfo} | Date: {inq.date}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        inq.status === 'Resolved' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {inq.status}
                      </span>
                      {inq.status === 'Pending' && (
                        <button
                          onClick={() => handleResolveInquiry(inq.id)}
                          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl cursor-pointer"
                        >
                          Mark Resolved
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Audit History */}
        {activeTab === 'history' && (
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold text-white mb-2">Database & Content Audit Trail</h2>
              <p className="text-sm text-slate-400 mb-6">Complete immutable audit log of all updates made to university criteria and website content.</p>

              <div className="space-y-3">
                {history.map((item) => (
                  <div key={item.id} className="bg-slate-900 p-4 rounded-xl border border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-sm">{item.universityName}</span>
                        {item.programName && <span className="text-xs text-slate-400">({item.programName})</span>}
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Changed <strong className="text-emerald-400">{item.fieldChanged}</strong> from &quot;{item.previousValue}&quot; to &quot;{item.newValue}&quot;
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block">{item.updatedAt}</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">{item.session}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: SEO Audit */}
        {activeTab === 'seo-audit' && <AdminSeoAudit />}
      </main>

      {/* Program Edit Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-lg w-full border border-slate-700 overflow-hidden shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
              <h3 className="text-lg font-bold text-white">Edit Program Merit Criteria</h3>
              <button onClick={() => setSelectedProgram(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Program Name</label>
                <input
                  type="text"
                  disabled
                  value={selectedProgram.name}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-slate-400"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Matric %</label>
                  <input
                    type="number"
                    value={selectedProgram.matricWeight}
                    onChange={(e) => setSelectedProgram({ ...selectedProgram, matricWeight: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Inter %</label>
                  <input
                    type="number"
                    value={selectedProgram.interPart1Weight}
                    onChange={(e) => setSelectedProgram({ ...selectedProgram, interPart1Weight: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Test %</label>
                  <input
                    type="number"
                    value={selectedProgram.testWeight}
                    onChange={(e) => setSelectedProgram({ ...selectedProgram, testWeight: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Closing Merit (2025)</label>
                <input
                  type="number"
                  step="0.01"
                  value={selectedProgram.closingMerit2025 || ''}
                  onChange={(e) => setSelectedProgram({ ...selectedProgram, closingMerit2025: Number(e.target.value) })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Official Source URL</label>
                <input
                  type="text"
                  value={selectedProgram.sourceUrl}
                  onChange={(e) => setSelectedProgram({ ...selectedProgram, sourceUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-700">
              <button
                onClick={() => setSelectedProgram(null)}
                className="px-4 py-2 bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  universities.forEach(u => {
                    const p = u.programs.find(prog => prog.id === selectedProgram.id);
                    if (p) {
                      handleUpdateProgram(u.id, selectedProgram.id, selectedProgram);
                    }
                  });
                }}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
