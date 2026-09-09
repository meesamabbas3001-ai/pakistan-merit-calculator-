import { SeoPageConfig } from '../data/seoPages';

export function updateDocumentSeo(config: SeoPageConfig) {
  const domain = 'https://pakistan-university-merit-calculator.ai.studio';
  const canonicalUrl = `${domain}${config.path === '/' ? '' : config.path}`;

  // 1. Title
  document.title = config.title;

  // 2. Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', config.description);

  // 3. Canonical URL
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);

  // 4. Open Graph Meta Tags
  const setOgTag = (property: string, content: string) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  setOgTag('og:title', config.title);
  setOgTag('og:description', config.description);
  setOgTag('og:type', 'website');
  setOgTag('og:url', canonicalUrl);

  // 5. JSON-LD Structured Data
  let jsonLdScript = document.querySelector('#dynamic-json-ld');
  if (!jsonLdScript) {
    jsonLdScript = document.createElement('script');
    jsonLdScript.id = 'dynamic-json-ld';
    jsonLdScript.setAttribute('type', 'application/ld+json');
    document.head.appendChild(jsonLdScript);
  }

  let schemaData: any = {
    '@context': 'https://schema.org',
    '@type': config.schemaType === 'FAQPage' ? 'FAQPage' : config.schemaType === 'WebApplication' ? 'WebApplication' : 'WebPage',
    'name': config.title,
    'url': canonicalUrl,
    'description': config.description,
  };

  if (config.schemaType === 'WebApplication') {
    schemaData.applicationCategory = 'EducationalApplication';
    schemaData.operatingSystem = 'All';
    schemaData.offers = {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'PKR'
    };
  }

  if (config.faqItems && config.faqItems.length > 0) {
    schemaData.mainEntity = config.faqItems.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }));
  }

  jsonLdScript.textContent = JSON.stringify(schemaData, null, 2);
}
