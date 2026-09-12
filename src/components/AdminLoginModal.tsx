import React, { useState } from 'react';
import { X, Lock, ShieldCheck, UserCheck, AlertCircle, Mail, Key, Terminal } from 'lucide-react';
import { supabase, isSupabaseConfigured, supabaseUrl } from '../services/supabaseClient';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (email: string) => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState('meesamabbas3001@gmail.com');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [diagnosticInfo, setDiagnosticInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setDiagnosticInfo(null);
    setLoading(true);

    const diagnostics = {
      supabaseClientUrl: supabaseUrl,
      clientInitialized: Boolean(supabase),
      isConfigured: isSupabaseConfigured,
      authMethodCalled: 'supabase.auth.signInWithPassword',
      timestamp: new Date().toISOString(),
    };

    console.log('[Supabase Auth Diagnostic] Initializing login request:', diagnostics);

    if (!supabase) {
      const errDetails = { ...diagnostics, error: 'Supabase client is not initialized.' };
      setDiagnosticInfo(errDetails);
      setError('Supabase client is not initialized.');
      setLoading(false);
      return;
    }

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      const fullDiagnostics = {
        ...diagnostics,
        httpStatus: (authError as any)?.status || (data?.session ? 200 : 'Unknown'),
        errorMessage: authError?.message || null,
        errorCode: (authError as any)?.code || null,
        errorName: authError?.name || null,
        rawError: authError ? JSON.stringify(authError, Object.getOwnPropertyNames(authError)) : null,
      };

      console.log('[Supabase Auth Diagnostic] Response received:', fullDiagnostics);
      setDiagnosticInfo(fullDiagnostics);

      if (authError) {
        setError(authError.message);
        setLoading(false);
        return;
      }

      if (data.session) {
        localStorage.setItem('pakistan_merit_admin_authenticated', 'true');
        localStorage.setItem('pakistan_merit_admin_email', data.user?.email || email);
        setLoading(false);
        onLoginSuccess(data.user?.email || email);
        onClose();
        return;
      }
    } catch (err: any) {
      const catchDiagnostics = {
        ...diagnostics,
        caughtExceptionMessage: err?.message || String(err),
        caughtExceptionStack: err?.stack || null,
      };
      console.error('[Supabase Auth Diagnostic] Caught exception:', catchDiagnostics);
      setDiagnosticInfo(catchDiagnostics);
      setError(err.message || 'Authentication failed.');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-slate-900 text-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-700">
        <div className="bg-slate-800 p-5 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Client Admin Portal</h3>
              <p className="text-xs text-slate-400">Secure CMS & University Database Access</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleLogin} className="p-6 space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {diagnosticInfo && (
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1 overflow-x-auto max-h-40">
              <div className="text-emerald-400 font-bold flex items-center gap-1 mb-1">
                <Terminal className="w-3.5 h-3.5" /> Runtime Diagnostic Report:
              </div>
              <div><strong>URL:</strong> {diagnosticInfo.supabaseClientUrl}</div>
              <div><strong>Client Initialized:</strong> {String(diagnosticInfo.clientInitialized)}</div>
              <div><strong>Method:</strong> {diagnosticInfo.authMethodCalled}</div>
              {diagnosticInfo.httpStatus && <div><strong>HTTP Status:</strong> {diagnosticInfo.httpStatus}</div>}
              {diagnosticInfo.errorCode && <div><strong>Error Code:</strong> {diagnosticInfo.errorCode}</div>}
              {diagnosticInfo.errorName && <div><strong>Error Name:</strong> {diagnosticInfo.errorName}</div>}
              {diagnosticInfo.errorMessage && <div className="text-red-400"><strong>Error Message:</strong> {diagnosticInfo.errorMessage}</div>}
              {diagnosticInfo.rawError && <div className="text-slate-500 truncate"><strong>Raw:</strong> {diagnosticInfo.rawError}</div>}
            </div>
          )}

          {!isSupabaseConfigured && (
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
              <strong>Supabase Project:</strong> Connected to <code className="text-emerald-300">https://qvqniyhzrfjbzxzxafse.supabase.co</code>. Please ensure <code className="text-emerald-300">VITE_SUPABASE_ANON_KEY</code> is added in Vercel environment variables.
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              Admin Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="meesamabbas3001@gmail.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-emerald-400" />
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <UserCheck className="w-4 h-4" />
              {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
