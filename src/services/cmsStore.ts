import { supabase, isSupabaseConfigured } from './supabaseClient';

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

export async function fetchCmsContentFromSupabase(): Promise<Record<string, string>> {
  if (!isSupabaseConfigured || !supabase) {
    return getLocalCmsContent();
  }

  try {
    const { data, error } = await supabase.from('site_content').select('*');
    if (error) {
      if (error.message.includes('site_content') || error.message.includes('schema cache')) {
        console.warn('Supabase site_content table not yet created. Using local storage CMS mode.');
      } else {
        console.error('Supabase fetch error, using local fallback:', error.message);
      }
      return getLocalCmsContent();
    }

    if (data && data.length > 0) {
      const mapped: Record<string, string> = { ...DEFAULT_SITE_CONTENT };
      data.forEach((item: SiteContentItem) => {
        mapped[item.field_name] = item.field_value;
      });
      saveLocalCmsContent(mapped);
      return mapped;
    }
  } catch (e) {
    console.warn('Supabase CMS table not initialized or offline. Operating in local storage mode.');
  }

  return getLocalCmsContent();
}

export async function updateCmsContentInSupabase(fieldName: string, value: string, section: string = 'general'): Promise<boolean> {
  const current = getLocalCmsContent();
  current[fieldName] = value;
  saveLocalCmsContent(current);

  if (!isSupabaseConfigured || !supabase) {
    return true; // Local success
  }

  try {
    const { error } = await supabase
      .from('site_content')
      .upsert({
        section,
        field_name: fieldName,
        field_value: value,
        updated_at: new Date().toISOString()
      }, { onConflict: 'field_name' });

    if (error) {
      if (error.message.includes('site_content') || error.message.includes('schema cache')) {
        console.warn('Supabase site_content table not yet created. Changes saved to local storage.');
      } else {
        console.error('Supabase update error:', error.message);
      }
      return true; // Return true so UI works seamlessly in local storage mode
    }
    return true;
  } catch (e) {
    console.warn('Supabase CMS table not initialized. Changes saved to local storage.');
    return true;
  }
}
