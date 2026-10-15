// Supabase-backed CMS functions (admin use). The local-only helpers live in
// cmsLocal.ts so public components never import supabase indirectly.
import { supabase, isSupabaseConfigured } from './supabaseClient';
import { getLocalCmsContent, saveLocalCmsContent, getDefaultCmsContent } from './cmsLocal';
import type { SiteContentItem } from './cmsLocal';

export { getLocalCmsContent, saveLocalCmsContent };
export type { SiteContentItem };

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
      const mapped: Record<string, string> = { ...getDefaultCmsContent() };
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
