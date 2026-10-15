// Local-only CMS helpers. Deliberately supabase-free so public components
// (e.g. Hero) can use it without pulling @supabase/supabase-js into the
// initial page bundle. Supabase-backed CMS functions live in cmsStore.ts.
export interface SiteContentItem {
  id: string;
  section: string;
  field_name: string;
  field_value: string;
  updated_at: string;
}

const DEFAULT_SITE_CONTENT: Record<string, string> = {
  'hero_badge': 'Official Verified Admission Formulas for Top 20 Pakistani Universities',
  'hero_title': 'Calculate Your University Merit',
  'hero_subtitle': 'Enter your Matric, Intermediate Part-I, and entry-test marks once to accurately estimate your admission aggregate across Pakistan\'s leading engineering, medical, computing, and general universities.',
  'primary_cta': 'Start Merit Calculation',
  'secondary_cta': 'Compare Multiple Universities',
  'contact_email': 'support@pakistanmeritcalculator.pk',
  'contact_phone': '+92 51 111-222-333',
  'announcement_banner': 'Fall 2026 Admissions & Entry Test merit criteria updated for all top universities.',
};

const CMS_STORAGE_KEY = 'pakistan_merit_cms_content_v1';

// Raw factory defaults (before any local overrides).
export function getDefaultCmsContent(): Record<string, string> {
  return { ...DEFAULT_SITE_CONTENT };
}

export function getLocalCmsContent(): Record<string, string> {
  try {
    const saved = localStorage.getItem(CMS_STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error loading local CMS content', e);
  }
  return DEFAULT_SITE_CONTENT;
}

export function saveLocalCmsContent(content: Record<string, string>): void {
  try {
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(content));
  } catch (e) {
    console.error('Error saving local CMS content', e);
  }
}
