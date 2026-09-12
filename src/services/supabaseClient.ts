/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

const rawUrl = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://qvqniyhzrfjbzxzxafse.supabase.co';
const rawKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || '';

// Clean rawUrl: trim, remove trailing slashes, and strip any accidental trailing api paths like /rest/v1, /auth/v1, etc.
const cleanUrl = rawUrl.trim().replace(/\/+$/, '');
export const supabaseUrl = cleanUrl.replace(/\/(rest|auth|storage|realtime|functions)\/v\d+.*$/i, '');

const supabaseAnonKey = rawKey.trim();

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'your_supabase_url_here' && 
  supabaseUrl.startsWith('http')
);

export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      }
    })
  : createClient('https://qvqniyhzrfjbzxzxafse.supabase.co', supabaseAnonKey || 'placeholder-anon-key', {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      }
    });

