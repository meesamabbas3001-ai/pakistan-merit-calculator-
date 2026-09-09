export interface SeoPageConfig {
  path: string;
  title: string;
  description: string;
  tab: 'calculator' | 'compare' | 'directory' | 'faq' | 'matcher';
  universityId?: string;
  schemaType: 'WebSite' | 'WebApplication' | 'WebPage' | 'FAQPage';
  faqItems?: Array<{ question: string; answer: string }>;
}

export const SEO_PAGES: SeoPageConfig[] = [
  {
    path: '/',
    title: 'Pakistan University Merit Calculator 2026 | Calculate Admission Aggregates',
    description: 'Calculate your admission aggregate and merit for top Pakistani universities (NUST, FAST, COMSATS, UET, GIKI, PIEAS, LUMS) using official verified admission formulas.',
    tab: 'calculator',
    schemaType: 'WebApplication',
  },
  {
    path: '/fast-merit-calculator',
    title: 'FAST-NUCES Merit Calculator 2026 | Admission Aggregate & Criteria',
    description: 'Calculate your FAST-NUCES admission aggregate for Computer Science and Engineering. Official weightages: 50% Test, 40% Inter Part-1, 10% Matric.',
    tab: 'calculator',
    universityId: 'fast',
    schemaType: 'WebPage',
  },
  {
    path: '/comsats-merit-calculator',
    title: 'COMSATS Merit Calculator 2026 | Admission Aggregate & Criteria',
    description: 'Calculate your COMSATS University admission aggregate for BS CS, SE, Engineering and Business programs based on NTS-NAT or Entry Test marks.',
    tab: 'calculator',
    universityId: 'comsats',
    schemaType: 'WebPage',
  },
  {
    path: '/nust-merit-calculator',
    title: 'NUST Merit Calculator 2026 | NET Entry Test Aggregate & Criteria',
    description: 'Calculate your NUST admission aggregate for Engineering, Computing, and Business. Official NET weightages: 75% NET, 15% Inter, 10% Matric.',
    tab: 'calculator',
    universityId: 'nust',
    schemaType: 'WebPage',
  },
  {
    path: '/uet-lahore-merit-calculator',
    title: 'UET Lahore Merit Calculator 2026 | ECAT Entry Test Aggregate',
    description: 'Calculate your UET Lahore admission aggregate using ECAT, Matric, and Intermediate marks as per official university admission policy.',
    tab: 'calculator',
    universityId: 'uet',
    schemaType: 'WebPage',
  },
  {
    path: '/air-university-merit-calculator',
    title: 'Air University Merit Calculator 2026 | Admission Aggregate & Eligibility',
    description: 'Calculate your Air University admission aggregate for undergraduate BS programs and engineering criteria easily and accurately.',
    tab: 'calculator',
    universityId: 'air',
    schemaType: 'WebPage',
  },
  {
    path: '/uaf-merit-calculator',
    title: 'UAF (University of Agriculture Faisalabad) Merit Calculator 2026',
    description: 'Calculate your UAF admission aggregate and check degree eligibility based on Matric, Inter, and entry test marks.',
    tab: 'calculator',
    universityId: 'uaf',
    schemaType: 'WebPage',
  },
  {
    path: '/punjab-university-merit-calculator',
    title: 'Punjab University (PU / PUCIT) Merit Calculator 2026 | Aggregate',
    description: 'Calculate your University of the Punjab (PU / PUCIT) admission aggregate for BS programs using official merit formulas.',
    tab: 'calculator',
    universityId: 'punjab',
    schemaType: 'WebPage',
  },
  {
    path: '/compare',
    title: 'Compare Pakistani Universities Side-by-Side | Fee, Merit & Programs 2026',
    description: 'Compare top 20 universities in Pakistan side-by-side on merit percentages, fee structures, application deadlines, and admission requirements.',
    tab: 'compare',
    schemaType: 'WebPage',
  },
  {
    path: '/matcher',
    title: 'Find My Best University 2026 | University Matcher & Recommendation Tool',
    description: 'Find Pakistani universities matching your marks, budget, location, and career goals instantly based on official 2026 admission data.',
    tab: 'matcher',
    schemaType: 'WebPage',
  },
  {
    path: '/directory',
    title: 'Top 20 Pakistani Universities Directory & Admission Deadlines 2026',
    description: 'Explore comprehensive profiles, entry test requirements, aggregate criteria, and admission deadlines for top universities in Pakistan.',
    tab: 'directory',
    schemaType: 'WebPage',
  },
  {
    path: '/faq',
    title: 'University Admission FAQ & Aggregate Calculation Guide 2026',
    description: 'Frequently asked questions regarding Pakistani university admissions, aggregate calculations, entry test weights, and merit criteria.',
    tab: 'faq',
    schemaType: 'FAQPage',
    faqItems: [
      {
        question: 'How is university merit aggregate calculated in Pakistan?',
        answer: 'Merit aggregate is calculated using weighted percentages of Matric (usually 10-25%), Intermediate or FSc Part 1 (15-50%), and Entry Test marks like NET, ECAT, NAT, or FAST Test (30-75%).'
      },
      {
        question: 'Is Inter Part-1 accepted for provisional admissions?',
        answer: 'Yes, most major universities like NUST, FAST, and COMSATS accept Inter Part-1 marks for provisional admission when HSSC Part-2 results are pending.'
      }
    ]
  }
];

export function getSeoConfigForPath(pathname: string): SeoPageConfig {
  const cleanPath = pathname.replace(/\/$/, '') || '/';
  const match = SEO_PAGES.find(p => p.path === cleanPath || (p.path !== '/' && cleanPath.endsWith(p.path)));
  return match || SEO_PAGES[0];
}
