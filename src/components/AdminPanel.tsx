import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, AlertTriangle, Clock, Database, Search, Filter, Plus, Edit2, CheckCircle2, 
  XCircle, LogOut, MessageSquare, History, Globe, FileText, Check, ChevronRight, X 
} from 'lucide-react';
import { University, ProgramProfile, VerificationStatus, SourceType } from '../types';
import { 
  getStoredUniversities, saveUniversities, getStoredInquiries, saveInquiries, 
  getStoredHistory, saveHistory, AdminInquiry, UpdateHistoryItem 
} from '../services/universityStore';
import { AdminSeoAudit } from './AdminSeoAudit';

interface AdminPanelProps {
  onLogout: () => void;
  onExit: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout, onExit }) => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [inquiries, setInquiries] = useState<AdminInquiry[]>([]);
  const [history, setHistory] = useState<UpdateHistoryItem[]>([]);
  const [activeTab, setActiveTab] = useState<'universities' | 'inquiries' | 'history' | 'seo-audit'>('universities');
  
  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedUniId, setSelectedUniId] = useState<string>('');
  const [selectedProgram, setSelectedProgram] = useState<ProgramProfile | null>(null);
  const [editingUniversity, setEditingUniversity] = useState<University | null>(null);

  useEffect(() => {
    setUniversities(getStoredUniversities());
    setInquiries(getStoredInquiries());
    setHistory(getStoredHistory());
  }, []);

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
            // Add to history
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
  };

  const handleResolveInquiry = (inqId: string) => {
    const updated = inquiries.map(i => i.id === inqId ? { ...i, status: 'Resolved' as const } : i);
    setInquiries(updated);
    saveInquiries(updated);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white flex items-center gap-2">
              University Data Manager
              <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded-full font-semibold border border-emerald-500/30">
                Secure Admin Mode
              </span>
            </h1>
            <p className="text-xs text-slate-400">Verified Database & AI Chatbot Guardrails Control</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl text-xs font-semibold transition-colors"
          >
            Return to Public Website
          </button>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 border border-red-500/30"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
              <div className="text-slate-400 text-xs font-medium uppercase">Verified Records</div>
              <div className="text-2xl font-bold text-emerald-400 mt-1">{verifiedCount} / {totalPrograms}</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <div className="text-slate-400 text-xs font-medium uppercase">Needs Review</div>
              <div className="text-2xl font-bold text-amber-400 mt-1">{needsReviewCount}</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <div className="text-slate-400 text-xs font-medium uppercase">Expired / Old</div>
              <div className="text-2xl font-bold text-red-400 mt-1">{expiredCount}</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <div className="text-slate-400 text-xs font-medium uppercase">Student Inquiries</div>
              <div className="text-2xl font-bold text-sky-400 mt-1">
                {inquiries.filter(i => i.status === 'Pending').length} Pending
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-700 gap-6">
          <button
            onClick={() => setActiveTab('universities')}
            className={`pb-3 text-sm font-semibold flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'universities' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Database className="w-4 h-4" />
            University Verification Database ({totalPrograms} Programs)
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`pb-3 text-sm font-semibold flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'inquiries' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Student Inquiries & Missing Data ({inquiries.filter(i => i.status === 'Pending').length} Pending)
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`pb-3 text-sm font-semibold flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'history' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <History className="w-4 h-4" />
            Update History & Audit Log
          </button>
          <button
            onClick={() => setActiveTab('seo-audit')}
            className={`pb-3 text-sm font-semibold flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'seo-audit' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Globe className="w-4 h-4" />
            SEO Health Check & Audit
          </button>
        </div>

        {/* Tab 1: Universities Database Management */}
        {activeTab === 'universities' && (
          <div className="space-y-4">
            {/* Search & Filter Bar */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search university or program..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="All">All Statuses</option>
                  <option value="Verified">Verified Only</option>
                  <option value="Needs Review">Needs Review</option>
                  <option value="Expired">Expired / Old</option>
                </select>
              </div>
            </div>

            {/* University & Program List */}
            <div className="space-y-4">
              {universities.map((uni) => {
                const filteredPrograms = uni.programs.filter((p) => {
                  const matchSearch =
                    uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    uni.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.name.toLowerCase().includes(searchQuery.toLowerCase());
                  const status = p.verificationStatus || 'Verified';
                  const matchStatus = statusFilter === 'All' || status === statusFilter;
                  return matchSearch && matchStatus;
                });

                if (filteredPrograms.length === 0) return null;

                return (
                  <div key={uni.id} className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
                    <div className="bg-slate-700/50 px-6 py-3.5 flex items-center justify-between border-b border-slate-700">
                      <div>
                        <h3 className="font-bold text-white text-base flex items-center gap-2">
                          {uni.name} ({uni.shortName})
                          <span className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-normal">
                            {uni.city}, {uni.province}
                          </span>
                        </h3>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">
                        {uni.universityType} • Fee: {uni.feeCategory}
                      </span>
                    </div>

                    <div className="divide-y divide-slate-700/60">
                      {filteredPrograms.map((prog) => {
                        const status = prog.verificationStatus || 'Verified';
                        const statusColor =
                          status === 'Verified'
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                            : status === 'Needs Review'
                            ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                            : 'bg-red-500/20 text-red-400 border-red-500/30';

                        return (
                          <div key={prog.id} className="px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-700/20 transition-colors">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2.5">
                                <span className="font-semibold text-white text-sm">{prog.name}</span>
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${statusColor}`}>
                                  {status}
                                </span>
                                <span className="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded-md font-mono">
                                  Session: {prog.academicSession || 'Fall 2026'}
                                </span>
                              </div>
                              <div className="text-xs text-slate-400 flex flex-wrap gap-x-4 gap-y-1">
                                <span>Test: {prog.testName}</span>
                                <span>Formula: Test {prog.testWeight}%, Inter {prog.interPart1Weight}%, Matric {prog.matricWeight}%</span>
                                <span>Last Verified: {prog.lastVerified}</span>
                              </div>
                            </div>

                            <button
                              onClick={() => setSelectedProgram(prog)}
                              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0 self-start md:self-auto"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                              Verify & Edit Record
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Student Inquiries / Missing Information Requests */}
        {activeTab === 'inquiries' && (
          <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-700">
              <h3 className="font-bold text-white text-base">Student Inquiries & Missing Data Requests</h3>
              <p className="text-xs text-slate-400 mt-0.5">Submitted via the AI chatbot "Contact Admin" fallback feature.</p>
            </div>

            <div className="divide-y divide-slate-700">
              {inquiries.map((inq) => (
                <div key={inq.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-white text-sm">{inq.university}</span>
                      <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20 font-medium">
                        {inq.program || 'General Program'} • {inq.session}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                        inq.status === 'Pending' ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'
                      }`}>
                        {inq.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 bg-slate-900/50 p-3 rounded-xl border border-slate-700">
                      "{inq.question}"
                    </p>
                    <div className="text-[11px] text-slate-400">
                      Contact: {inq.contactInfo || 'Not provided'} • Submitted on {inq.date}
                    </div>
                  </div>

                  {inq.status === 'Pending' && (
                    <button
                      onClick={() => handleResolveInquiry(inq.id)}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0 self-start md:self-auto"
                    >
                      <Check className="w-4 h-4" />
                      Mark Resolved
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Update History & Audit Log */}
        {activeTab === 'history' && (
          <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-700">
              <h3 className="font-bold text-white text-base">Database Update History & Audit Trail</h3>
              <p className="text-xs text-slate-400 mt-0.5">Tracks all administrative changes made to verified university records.</p>
            </div>

            <div className="divide-y divide-slate-700">
              {history.map((item) => (
                <div key={item.id} className="p-4 sm:px-6 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-white flex items-center gap-2">
                      <span>{item.universityName}</span>
                      {item.programName && <span className="text-slate-400 text-xs">• {item.programName}</span>}
                    </div>
                    <div className="text-xs text-slate-400">
                      Field Changed: <strong className="text-emerald-400">{item.fieldChanged}</strong> (Session: {item.session})
                    </div>
                  </div>
                  <div className="text-right text-xs text-slate-400">
                    <div>{item.updatedAt}</div>
                    <span className="text-[10px] text-emerald-400 font-semibold">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: SEO Health Check */}
        {activeTab === 'seo-audit' && <AdminSeoAudit />}
      </main>

      {/* Program Edit Modal */}
      {selectedProgram && (
        <ProgramEditModal
          program={selectedProgram}
          universities={universities}
          onClose={() => setSelectedProgram(null)}
          onSave={(uniId, progId, updatedFields) => {
            handleUpdateProgram(uniId, progId, updatedFields);
          }}
        />
      )}
    </div>
  );
};

interface ProgramEditModalProps {
  program: ProgramProfile;
  universities: University[];
  onClose: () => void;
  onSave: (uniId: string, progId: string, updated: Partial<ProgramProfile>) => void;
}

const ProgramEditModal: React.FC<ProgramEditModalProps> = ({
  program,
  universities,
  onClose,
  onSave,
}) => {
  const [status, setStatus] = useState<VerificationStatus>(program.verificationStatus || 'Verified');
  const [session, setSession] = useState(program.academicSession || 'Fall 2026');
  const [sourceType, setSourceType] = useState<SourceType>(program.sourceType || 'Official website');
  const [sourceUrl, setSourceUrl] = useState(program.sourceUrl || '');
  const [notes, setNotes] = useState(program.notes || '');
  const [closing2025, setClosing2025] = useState(program.closingMerit2025 || 0);

  const parentUni = universities.find(u => u.programs.some(p => p.id === program.id));

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentUni) return;

    onSave(parentUni.id, program.id, {
      verificationStatus: status,
      academicSession: session,
      sourceType: sourceType,
      sourceUrl: sourceUrl,
      notes: notes,
      closingMerit2025: Number(closing2025),
      lastVerified: 'September 2026',
      verified: status === 'Verified',
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden text-slate-100">
        <div className="bg-slate-700 px-6 py-4 flex items-center justify-between border-b border-slate-600">
          <div>
            <h3 className="font-bold text-white text-base">Verify & Edit Program Record</h3>
            <p className="text-xs text-slate-300">{program.name} ({parentUni?.name})</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Verification Status *
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as VerificationStatus)}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Verified">Verified</option>
                <option value="Needs Review">Needs Review</option>
                <option value="Expired">Expired / Old</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Academic Session *
              </label>
              <input
                type="text"
                required
                value={session}
                onChange={(e) => setSession(e.target.value)}
                placeholder="Fall 2026"
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Source Type *
              </label>
              <select
                value={sourceType}
                onChange={(e) => setSourceType(e.target.value as SourceType)}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Official website">Official university website</option>
                <option value="Official admission portal">Official admission portal</option>
                <option value="Official prospectus">Official university prospectus</option>
                <option value="Official admission advertisement">Official admission advertisement</option>
                <option value="Official notice">Official university notice</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Closing Merit (%)
              </label>
              <input
                type="number"
                step="0.01"
                value={closing2025}
                onChange={(e) => setClosing2025(parseFloat(e.target.value))}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Official Source URL *
            </label>
            <input
              type="url"
              required
              value={sourceUrl}
              onChange={(e) => setSourceUrl(e.target.value)}
              placeholder="https://university.edu.pk/admissions"
              className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Admin Notes / Criteria Details
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-700 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all"
            >
              Save & Verify Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
