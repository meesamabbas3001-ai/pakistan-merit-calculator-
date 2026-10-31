export interface BlogSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  intro: string;
  sections: BlogSection[];
  faqs: BlogFaq[];
  relatedCalculators: string[];
  image?: string;
  imageAlt?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-calculate-nust-aggregate',
    image: '/blog/how-to-calculate-nust-aggregate.svg',
    imageAlt: 'Illustration for the step-by-step NUST aggregate calculation guide',
    title: 'How to Calculate NUST Aggregate 2026: Step-by-Step Guide',
    description:
      'Learn the official NUST aggregate formula for 2026 (Matric 10% + Inter 15% + NET 75%) with a worked example, so you can calculate your merit in under a minute.',
    category: 'Guides',
    date: 'October 2026',
    readTime: '5 min read',
    intro:
      'Every year, thousands of students miscalculate their NUST aggregate because they use the wrong formula or the wrong test total. This guide shows you the official 2026 formula, works through a real example, and points out the mistakes that cost students their admission.',
    sections: [
      {
        heading: 'The official NUST aggregate formula (2026)',
        paragraphs: [
          'NUST calculates your aggregate from three components: your Matric marks count 10%, your Intermediate (Part-1 for provisional merit) counts 15%, and your NET score counts 75%. The entry test dominates — a strong NET can rescue average board marks, and a weak NET sinks even 1000+ in Matric.',
          'The formula is: Aggregate = (Matric obtained ÷ Matric total × 10) + (Inter obtained ÷ Inter total × 15) + (NET obtained ÷ 200 × 75). Note the NET is scored out of 200, not 100 — dividing by the wrong total is the single most common error.',
        ],
      },
      {
        heading: 'Worked example',
        paragraphs: [
          'Take a student with 1000/1100 in Matric, 480/550 in Inter (Part-1), and 150/200 in the NET. Matric contributes (1000 ÷ 1100 × 10) = 9.09. Inter contributes (480 ÷ 550 × 15) = 13.09. NET contributes (150 ÷ 200 × 75) = 56.25. Final aggregate: 78.43%.',
          'Compare that against the 2025 closing merits: NUST Engineering closed at 72.40% and Computing at 76.50%. This student clears both — comfortably for Engineering, narrowly for Computing.',
        ],
      },
      {
        heading: 'Three mistakes to avoid',
        paragraphs: [
          'First, using Inter Part-2 marks when NUST asks for Part-1 in the provisional merit — the two give different aggregates. Second, forgetting that A-Level students use O-Level equivalence instead of Matric + FSc. Third, using another university\'s formula: FAST, for instance, weights its test at only 50%, so a "FAST aggregate" tells you nothing about NUST.',
        ],
        list: [
          'Always divide NET marks by 200, the correct test total.',
          'Use Inter Part-1 marks for provisional merit calculations.',
          'A-Level students: convert O-Levels through IBCC equivalence first.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the NUST aggregate formula for 2026?',
        answer: 'Aggregate = (Matric ÷ total × 10) + (Inter ÷ total × 15) + (NET ÷ 200 × 75). The NET carries 75% weight, the highest of any major Pakistani university.',
      },
      {
        question: 'What was the NUST closing merit in 2025?',
        answer: 'NUST Engineering closed at 72.40% and Computing & IT at 76.50% in 2025. Closing merits shift yearly with applicant strength.',
      },
      {
        question: 'Can I calculate NUST aggregate with Inter Part-1 only?',
        answer: 'Yes. NUST accepts Inter Part-1 for provisional admission and re-evaluates your merit after Part-2 results are announced.',
      },
    ],
    relatedCalculators: ['nust', 'fast', 'giki'],
  },
  {
    slug: 'nust-vs-fast-vs-comsats-2026',
    image: '/blog/nust-vs-fast-vs-comsats-2026.svg',
    imageAlt: 'NUST vs FAST vs COMSATS 2026 comparison illustration',
    title: 'NUST vs FAST vs COMSATS: Which University Should You Choose in 2026?',
    description:
      'Comparing NUST, FAST-NUCES and COMSATS for 2026 admissions: aggregate formulas, closing merits, entry tests, and fees — so you can decide where to apply.',
    category: 'Comparisons',
    date: 'October 2026',
    readTime: '6 min read',
    intro:
      'NUST, FAST and COMSATS are the three names every CS and Engineering aspirant in Pakistan compares. But they differ sharply in how they compute merit, what tests they accept, and what aggregate you actually need. Here is the head-to-head for 2026.',
    sections: [
      {
        heading: 'Aggregate formulas side by side',
        paragraphs: [
          'NUST: Matric 10% + Inter 15% + NET 75% (test out of 200). The test dominates — board toppers with weak NET scores routinely miss out.',
          'FAST-NUCES: Matric 10% + Inter 40% + Admission Test 50% (test out of 100). Your board marks matter far more here than at NUST.',
          'COMSATS: Matric 10% + Inter 40% + NTS-NAT/Entry Test 50% (test out of 100). Structurally similar to FAST, with NTS-NAT widely accepted.',
        ],
      },
      {
        heading: 'Closing merits (2025)',
        paragraphs: [
          'For the flagship computing programs, 2025 closing merits were: NUST Computing 76.50%, FAST (CS) 74.80%, COMSATS 73.00%. NUST Engineering closed at 72.40%. These are benchmarks, not guarantees — merits move every year.',
        ],
        list: [
          'Strong test-taker, average boards → NUST rewards you most.',
          'Strong boards, average test → FAST and COMSATS suit you better.',
          'Apply to all three: their tests and timelines differ, so one bad test day does not end your season.',
        ],
      },
      {
        heading: 'Beyond the numbers',
        paragraphs: [
          'NUST is public with moderate fees and the strongest brand for Engineering. FAST-NUCES is the historic CS powerhouse with a brutal but respected CS program. COMSATS offers the widest campus network, so you can target Islamabad, Lahore or Abbottabad strategically. Fees, hostel and city matter as much as merit — visit the directory page to compare all three in one place.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which is easier to get into: NUST, FAST or COMSATS?',
        answer: 'It depends on your profile. Test-heavy students find NUST easier (75% test weight); board-heavy students find FAST/COMSATS easier (40% Inter weight). 2025 computing closings: NUST 76.50%, FAST 74.80%, COMSATS 73.00%.',
      },
      {
        question: 'Can I use the same entry test for all three?',
        answer: 'No. NUST requires its own NET. FAST takes its admission test (or NAT/SAT). COMSATS accepts NTS-NAT. Plan your test calendar early.',
      },
    ],
    relatedCalculators: ['nust', 'fast', 'comsats'],
  },
  {
    slug: 'good-aggregate-nust-computer-science',
    image: '/blog/good-aggregate-nust-computer-science.svg',
    imageAlt: 'NUST Computer Science merit illustration',
    title: 'What Is a Good Aggregate for NUST Computer Science in 2026?',
    description:
      'NUST Computing closed at 76.50% in 2025. Here is what aggregate you should target for NUST CS/SE/DS in 2026 and the NET score you need to get there.',
    category: 'Guides',
    date: 'October 2026',
    readTime: '4 min read',
    intro:
      '"What aggregate do I need for NUST CS?" is the most asked question every admission season. The honest answer has two parts: last year\'s closing merit, and the safety margin you should target above it.',
    sections: [
      {
        heading: 'The benchmark: 76.50%',
        paragraphs: [
          'NUST Computing & IT (CS, Software Engineering, Data Science) closed at 76.50% in 2025, up from 75.20% in 2024. The trend is upward — CS demand keeps rising. A "safe" target for 2026 is 78–80%, giving you a 1.5–3.5 point cushion against merit inflation.',
        ],
      },
      {
        heading: 'What NET score gets you there?',
        paragraphs: [
          'Because the NET is 75% of your aggregate, small test improvements move the needle enormously: every 10 NET marks are worth 3.75 aggregate points. Take a student with 1000/1100 Matric (9.09) and 480/550 Inter (13.09) — locked academic contribution 22.18. To hit 78%, they need (78 − 22.18) ÷ 75 × 200 = 149 NET marks. To hit 80%, they need 154.',
          'Use the reverse calculator on the NUST page: enter your target and your board marks, and it tells you the exact NET score you need.',
        ],
        list: [
          'Target 78–80% aggregate for a safe NUST CS shot in 2026.',
          'Every 10 NET marks = 3.75 aggregate points. Prioritize NET prep.',
          'Below ~74%? Keep NUST as a reach and lock FAST/COMSATS as targets.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is 75% aggregate enough for NUST CS?',
        answer: 'It is borderline. NUST Computing closed at 76.50% in 2025, so 75% would likely miss. Target 78%+ for a realistic chance.',
      },
      {
        question: 'Does NUST CS require Mathematics in FSc?',
        answer: 'Yes. Computing programs at NUST require Mathematics in HSSC, and the NET-Computing test is mandatory.',
      },
    ],
    relatedCalculators: ['nust', 'fast', 'comsats'],
  },
];

import { BLOG_POSTS_PART2 } from './blogPostsPart2';
import { BLOG_POSTS_PART3 } from './blogPostsPart3';
import { BLOG_POSTS_PART4 } from './blogPostsPart4';
import { BLOG_POSTS_PART5 } from './blogPostsPart5';
import { BLOG_POSTS_PART6 } from './blogPostsPart6';

// Combined export used by pages and sitemap tooling.
// NOTE for future runs: the github push_files tool rejects any single file
// larger than ~128 KB, so blog posts live in split part files. Append new
// posts to the LAST part file (currently blogPostsPart6.ts, started 2026-10-30
// because blogPostsPart5.ts reached ~102 KB); when it nears ~110 KB, start a
// new blogPostsPartN.ts and add it to ALL_BLOG_POSTS below.
export const ALL_BLOG_POSTS: BlogPost[] = [...BLOG_POSTS, ...BLOG_POSTS_PART2, ...BLOG_POSTS_PART3, ...BLOG_POSTS_PART4, ...BLOG_POSTS_PART5, ...BLOG_POSTS_PART6];

export function getBlogPost(slug: string | undefined): BlogPost | undefined {
  return ALL_BLOG_POSTS.find((p) => p.slug === slug);
}
