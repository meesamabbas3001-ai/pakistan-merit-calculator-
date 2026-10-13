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

export const BLOG_POSTS_PART2: BlogPost[] = [
  {
    slug: 'ecat-vs-net-difference',
    image: '/blog/ecat-vs-net-difference.svg',
    imageAlt: 'ECAT vs NET entry test difference illustration',
    title: 'ECAT vs NET: Key Differences Explained (2026)',
    description:
      'ECAT (UET) and NET (NUST) compared: test format, total marks, aggregate formulas, and which one suits your strengths.',
    category: 'Comparisons',
    date: 'October 2026',
    readTime: '5 min read',
    intro:
      'Students preparing for Engineering admissions in Punjab usually face two entry tests: the NET for NUST and the ECAT for UET Lahore. They look similar from the outside. They are not.',
    sections: [
      {
        heading: 'Test format and total marks',
        paragraphs: [
          'The NET is scored out of 200 and comes in program-specific versions (NET-Engineering, NET-Computing, NET-Business). UET\'s ECAT is scored out of 400 and is a single test for Engineering admissions. This difference alone breaks most DIY aggregate calculations — students divide ECAT marks by 200 or NET marks by 400 and get nonsense.',
        ],
      },
      {
        heading: 'Aggregate formulas compared',
        paragraphs: [
          'NUST: Matric 10% + Inter 15% + NET 75%. The test is nearly everything.',
          'UET Lahore: Matric 17% + Inter 50% + ECAT 33%. Your board marks — especially Inter at 50% — carry the decision. A student with stellar FSc marks but an average ECAT can still make UET merit, while the same profile would struggle at NUST.',
        ],
        list: [
          'NET: 200 marks, 75% weight — built for test-takers.',
          'ECAT: 400 marks, 33% weight — built for board-toppers.',
          'UET closing merit (2025): 67.50% — lower than NUST Engineering\'s 72.40%, but the formula makes them non-comparable.',
        ],
      },
      {
        heading: 'Which should you prioritize?',
        paragraphs: [
          'If your FSc percentage is your strength, UET\'s formula protects you. If you are a test-day performer, NUST\'s 75% test weight is your arena. Most serious Engineering aspirants prepare for both — the syllabi overlap heavily (Physics, Chemistry/Computer Science, Mathematics, English), so dual preparation costs little extra.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is ECAT out of 400 marks?',
        answer: 'Yes. UET\'s ECAT is scored out of 400, unlike NUST\'s NET which is out of 200. Always divide by the correct total.',
      },
      {
        question: 'What is the UET aggregate formula?',
        answer: 'UET Lahore uses Matric 17% + Inter 50% + ECAT 33% for its Engineering merit.',
      },
    ],
    relatedCalculators: ['uet', 'nust'],
  },
  {
    slug: 'improve-aggregate-7-tips',
    image: '/blog/improve-aggregate-7-tips.svg',
    imageAlt: 'Chart illustrating 7 tips to improve your merit aggregate',
    title: '7 Practical Ways to Improve Your University Admission Aggregate',
    description:
      'Seven proven strategies to raise your admission aggregate — from test-weight math to smart university selection.',
    category: 'Guides',
    date: 'October 2026',
    readTime: '6 min read',
    intro:
      'Your aggregate is not fixed until the merit list is published. Whether your boards are done or your test is ahead, these seven moves can add the 2–5 points that decide admission.',
    sections: [
      {
        heading: '1–3. Play the weight math',
        paragraphs: [
          'First, know your formula\'s leverage. At NUST, 10 NET marks equal 3.75 aggregate points — one focused month of NET prep routinely beats a year of board-score regret. At UET, Inter is 50%: improving FSc by 2% adds a full aggregate point.',
          'Second, fix arithmetic errors before anything else. Recompute with the right test totals (NET ÷ 200, ECAT ÷ 400) and the right Inter input (Part-1 vs full). Students regularly "gain" 2–3 points just by calculating correctly.',
          'Third, use the reverse calculator: set your target aggregate and see the exact test score needed. A concrete number ("I need 149 in the NET") beats vague anxiety every time.',
        ],
      },
      {
        heading: '4–7. Strategy beyond marks',
        paragraphs: [
          'Fourth, apply where your profile fits the formula: board-heavy students should weight FAST/COMSATS/UET applications; test-heavy students should weight NUST/GIKI.',
          'Fifth, claim every bonus you are entitled to — Hafiz-e-Quran marks where accepted, and correct IBCC equivalence for O/A-Levels (many students under-claim equivalence).',
          'Sixth, target multiple campuses and programs: closing merits differ by campus, and your second-choice program this year beats a gap year.',
          'Seventh, track closing-merit trends, not just last year\'s number. A program rising 1.5% two years running needs a bigger safety margin than a stable one.',
        ],
        list: [
          'Audit your calculation first — errors are free points.',
          'Match your applications to the formulas that favor you.',
          'One safety program with a lower closing merit removes all pressure.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many aggregate points is 10 NET marks worth?',
        answer: '3.75 points: (10 ÷ 200 × 75). At NUST, test prep has the highest return of any activity.',
      },
      {
        question: 'Can I improve my aggregate after Inter results?',
        answer: 'Yes — through the entry test (which carries 33–75% weight depending on the university) and by choosing universities whose formulas favor your strengths.',
      },
    ],
    relatedCalculators: ['nust', 'uet', 'fast'],
  },
  {
    slug: 'fast-aggregate-formula-explained',
    image: '/blog/fast-aggregate-formula-explained.svg',
    imageAlt: 'FAST aggregate formula breakdown illustration',
    title: 'FAST Aggregate Formula Explained with Worked Example (2026)',
    description:
      'The FAST-NUCES aggregate formula for 2026 (Matric 10% + Inter 40% + Test 50%) explained step by step, with a real calculation example.',
    category: 'Guides',
    date: 'October 2026',
    readTime: '4 min read',
    intro:
      'FAST-NUCES uses one of the most board-friendly formulas among top Pakistani universities: your Intermediate marks count 40%, nearly as much as the entry test. Here is exactly how it works.',
    sections: [
      {
        heading: 'The FAST formula',
        paragraphs: [
          'Aggregate = (Matric obtained ÷ Matric total × 10) + (Inter obtained ÷ Inter total × 40) + (Admission Test obtained ÷ 100 × 50). FAST accepts its own admission test, NAT, or SAT scores — check the current year\'s admission portal for which options apply to your program.',
          'Notice the balance: unlike NUST\'s 75% test weight, FAST splits the decision almost evenly between your boards (50% combined) and the test (50%). Consistent students are rewarded here.',
        ],
      },
      {
        heading: 'Worked example',
        paragraphs: [
          'A student with 1000/1100 Matric, 900/1100 Inter, and 70/100 in the admission test: Matric gives (1000 ÷ 1100 × 10) = 9.09. Inter gives (900 ÷ 1100 × 40) = 32.73. Test gives (70 ÷ 100 × 50) = 35. Final aggregate: 76.82%.',
          'Against the 2025 closing merit of 74.80%, this student is safely in. Note how the strong Inter marks (900) did heavy lifting — the same test score with weak boards would fall short at FAST while possibly clearing NUST.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the FAST aggregate formula?',
        answer: 'Matric 10% + Inter 40% + Admission Test 50% (test out of 100). Formula: (Matric ÷ total × 10) + (Inter ÷ total × 40) + (Test ÷ 100 × 50).',
      },
      {
        question: 'Does FAST accept NAT for admission?',
        answer: 'FAST-NUCES accepts its own admission test as well as NAT/SAT per its admission policy — confirm the current year\'s accepted tests on the official portal.',
      },
      {
        question: 'What was the FAST closing merit in 2025?',
        answer: '74.80% for the tracked programs. Use it as a benchmark with a 2–3 point safety margin for 2026.',
      },
    ],
    relatedCalculators: ['fast', 'comsats', 'nust'],
  },
];

export const BLOG_POSTS_PART3: BlogPost[] = [
  {
    slug: 'inter-part1-provisional-merit',
    image: '/blog/inter-part1-provisional-merit.svg',
    imageAlt: 'Inter Part-1 provisional merit document illustration',
    title: 'Inter Part-1 and Provisional Merit: How It Works (2026)',
    description:
      'How Pakistani universities calculate provisional merit from Inter Part-1 results — and what changes when Part-2 arrives.',
    category: 'Guides',
    date: 'October 2026',
    readTime: '4 min read',
    intro:
      'Admissions open before Part-2 results in Pakistan, so universities offer "provisional" merit based on Part-1. Here is how it works, who accepts it, and the trap students fall into.',
    sections: [
      {
        heading: 'What provisional merit means',
        paragraphs: [
          'When you apply with only Part-1 results, the university computes your aggregate treating Part-1 marks as your Inter input, then grants provisional admission. After Part-2 results, your aggregate is recomputed with full Inter marks and the merit list is finalized. Your seat is confirmed only if you still clear the closing merit.',
          'NUST explicitly supports this: "NET Part-1 is used for provisional admission. Final merit is re-evaluated upon HSSC-II announcement." Most major universities follow the same pattern, but the exact treatment varies — some double your Part-1, others wait for full results.',
        ],
      },
      {
        heading: 'The trap: Part-1 vs full Inter in calculators',
        paragraphs: [
          'The classic error is entering Part-1 obtained marks against the full 1100 total, which halves your Inter percentage and destroys the aggregate. If a calculator asks for Inter marks during provisional season, enter Part-1 obtained over the Part-1 total (usually 550) — unless the university specifies otherwise.',
        ],
        list: [
          'Provisional merit uses Part-1; final merit uses Part-1 + Part-2.',
          'A provisional offer is not a confirmed seat until final merit clears.',
          'Always match obtained marks to the correct total (550 for Part-1, 1100 for full).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is provisional merit final?',
        answer: 'No. Provisional merit is computed from Part-1 and secures a provisional offer; the final merit list after Part-2 results decides confirmed seats.',
      },
      {
        question: 'Should I enter Part-1 or full Inter marks in the calculator?',
        answer: 'During admission season before Part-2 results, enter Part-1 obtained over the Part-1 total (550). After Part-2, use full Inter marks over 1100.',
      },
    ],
    relatedCalculators: ['nust', 'uet', 'punjab'],
  },
  {
    slug: 'giki-vs-pieas-admission',
    image: '/blog/giki-vs-pieas-admission.svg',
    imageAlt: 'GIKI vs PIEAS admission comparison illustration',
    title: 'GIKI vs PIEAS: Admission Criteria Compared (2026)',
    description:
      'GIKI and PIEAS compared for 2026: entry tests, aggregate formulas, closing merits, and which one fits your profile.',
    category: 'Comparisons',
    date: 'October 2026',
    readTime: '5 min read',
    intro:
      'Two of Pakistan\'s most selective institutes — GIKI (Swabi) and PIEAS (Islamabad) — admit tiny classes through their own tests. Here is how their criteria compare.',
    sections: [
      {
        heading: 'Formulas and tests',
        paragraphs: [
          'GIKI: Matric 10% + Inter 30% + Entry Test 60% (test out of 100; SAT also accepted). The test is decisive but boards still matter — a balanced profile wins.',
          'PIEAS: follows its own published weightages for its highly competitive programs (Engineering and Applied Sciences). Both institutes publish merit lists, and both see closing merits swing with small applicant pools — a single strong or weak batch moves the cutoff noticeably.',
        ],
      },
      {
        heading: 'Closing merits and strategy',
        paragraphs: [
          'GIKI closed around 69.00% in 2025 for tracked programs. With small intakes, treat closing merits as rough guides and target 3–4 points above. Both institutes suit test-strong students; if your strength is pure board performance, UET\'s 50%-Inter formula may serve you better as a parallel option.',
        ],
        list: [
          'GIKI: test 60% — prepare the GIKI test specifically; SAT is an alternative.',
          'Small intakes mean volatile cutoffs — keep a safety university.',
          'Apply to both: test syllabi overlap substantially.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the GIKI aggregate formula?',
        answer: 'Matric 10% + Inter 30% + GIKI Entry Test 60% (test out of 100). SAT scores are also accepted per GIKI policy.',
      },
      {
        question: 'Is PIEAS harder to get into than GIKI?',
        answer: 'Both are highly selective with small intakes. Difficulty varies by program and year — compare their closing merits and your test-vs-board profile rather than reputation alone.',
      },
    ],
    relatedCalculators: ['giki', 'nust', 'uet'],
  },
  {
    slug: 'mdcat-aggregate-formula-2026',
    image: '/blog/mdcat-aggregate-formula-2026.svg',
    imageAlt: 'MDCAT aggregate formula 2026 — official 10/40/50 weight illustration with stethoscope motif',
    title: 'MDCAT Aggregate Formula 2026: How to Calculate Your MBBS Merit',
    description:
      'The official PMDC MDCAT aggregate formula for 2026: Matric 10% + FSc 40% + MDCAT 50% (test out of 180). Worked example, minimum passing scores, and the mistakes that cost students their seat.',
    category: 'Guides',
    date: 'October 2026',
    readTime: '7 min read',
    intro:
      'Every MBBS and BDS applicant in Pakistan gets ranked by a single number: the aggregate. It blends your Matric, FSc, and MDCAT marks into one percentage, and merit lists are cut exactly on that number — sometimes down to four decimal places. This guide gives you the official 2026 formula, works through a full example, and flags the errors that quietly cost students their admission every year.',
    sections: [
      {
        heading: 'The official MDCAT aggregate formula (2026)',
        paragraphs: [
          'The Pakistan Medical and Dental Council (PMDC) sets one national merit formula for MBBS and BDS admissions, written into its Medical and Dental Undergraduate Education (Admissions, Curriculum and Conduct) Policy and Regulations 2025. It applies to public and private medical colleges across Pakistan, and admitting universities like UHS Lahore repeat it in their own prospectuses (the UHS 2025-26 prospectus even prints a worked formula in its Annexure IV).',
          'The weightage is: Matric (or equivalent) counts 10%, FSc Pre-Medical (or equivalent) counts 40%, and the MDCAT counts 50%. As one line: Aggregate = (Matric obtained ÷ Matric total × 10) + (FSc obtained ÷ FSc total × 40) + (MDCAT obtained ÷ MDCAT total × 50). Half your merit comes from a single 3.5-hour test — that is why MDCAT preparation, not board marks alone, decides most admission outcomes.',
        ],
      },
      {
        heading: 'MDCAT is scored out of 180 — not 200',
        paragraphs: [
          'The most common calculation error is dividing MDCAT marks by the wrong total. Older MDCAT sessions were scored out of 200, but recent sessions — including the 2025-26 cycle — use 180 MCQs for 180 marks. If you divide a 165 by 200 instead of 180, your aggregate comes out roughly 4.5 points lower than it really is, which can make a safe merit position look hopeless and push students toward bad decisions.',
          'The practical rule: use 180 as the MDCAT total for the current cycle. If you are working with an older MDCAT result, confirm the total of that specific session first — results remain valid for up to three years, but the total you divide by must match the session you sat. When in doubt, check your MDCAT result card, which always states the total.',
        ],
      },
      {
        heading: 'Worked example, step by step',
        paragraphs: [
          'Take a student with 1050/1100 in Matric, 1000/1100 in FSc, and 165/180 in MDCAT. First convert each part to its weighted contribution. Matric: 1050 ÷ 1100 × 10 = 9.5455. FSc: 1000 ÷ 1100 × 40 = 36.3636. MDCAT: 165 ÷ 180 × 50 = 45.8333.',
          'Add them: 9.5455 + 36.3636 + 45.8333 = 91.7424%. That is the final aggregate. Notice how the arithmetic exposes the strategy: the MDCAT column is the only one where a realistic score swing moves the total by several full percentage points, while even 50 extra board marks barely nudge it. UHS rounds the final figure to four decimal places, and merit lists are ranked at that precision — which is why two students with seemingly identical marks can still sit dozens of ranks apart.',
        ],
      },
      {
        heading: 'What each extra mark is actually worth',
        paragraphs: [
          'Because the weights differ so much, not all marks are equal. Ten extra MDCAT marks add about 2.78% to your aggregate (10 ÷ 180 × 50). Ten extra FSc marks add about 0.36% (10 ÷ 1100 × 40). Ten extra Matric marks add about 0.09% (10 ÷ 1100 × 10). One MDCAT mark is worth roughly eight FSc marks and thirty Matric marks.',
          'This is not advice to ignore boards — your FSc is 40% of the formula, the second-largest component, and strong FSc preparation feeds directly into MDCAT performance since the test syllabus is built on it. But when you are allocating the final month of study time, the maths is unambiguous: an extra hour spent raising your MDCAT score pays far more than an extra hour chasing the last few board marks.',
          'You can also run the formula backwards to set a target. Suppose you want a 90% aggregate with 1000/1100 in Matric (9.09) and 950/1100 in FSc (34.55) — your boards contribute 43.64, so MDCAT must supply the remaining 46.36. That means 46.36 ÷ 50 × 180 ≈ 167 marks out of 180. Knowing the exact number turns "do well in MDCAT" into a concrete, testable target.',
        ],
      },
      {
        heading: 'Passing MDCAT is not the same as making merit',
        paragraphs: [
          'PMDC sets minimum MDCAT scores: 55% for MBBS eligibility (99 out of 180) and 50% for BDS (90 out of 180). Clearing these only makes you eligible to apply — it says nothing about getting a seat. Public-sector MBBS merit closes far above the passing line every year; the minimums are a floor, not a target.',
          'There is no negative marking in the MDCAT, so every question is worth attempting — an unanswered question and a wrong answer score the same (zero), while a guessed answer has a real chance of adding a mark. With each mark worth roughly 0.28% of aggregate, even a handful of lucky guesses can move your merit-list position.',
        ],
      },
      {
        heading: 'NUMS and AKU follow different routes',
        paragraphs: [
          'Not every medical seat uses the MDCAT route. The National University of Medical Sciences (NUMS) — the body behind Army Medical College and its affiliates — runs its own 200-mark admission test instead of the PMDC MDCAT, then applies the same 10/40/50 structure: Matric 10% + FSc 40% + NUMS test 50%. If you are applying to NUMS colleges, divide your test score by 200, not 180, and prepare for the NUMS syllabus and pattern.',
          'Aga Khan University (AKU) runs an entirely separate process with its own admission test and criteria. The takeaway: never blend formulas. A "MDCAT aggregate" tells you nothing about NUMS merit, just as a UET ECAT aggregate tells you nothing about NUST. Always compute merit with the formula of the admitting body you are actually applying to.',
        ],
      },
      {
        heading: 'Where closing merits fit in',
        paragraphs: [
          'Your aggregate only matters relative to the closing merit of your target college — the lowest aggregate that secured a seat last session. Closing merits swing every year with the difficulty of the MDCAT paper, the number of applicants, and seat counts, so treat last year\'s numbers as a reference line, not a promise.',
          'We publish verified 2024 and 2025 closing merits on each medical university\'s detail page, taken from official merit lists. Check the related calculators below for King Edward Medical University, Dow University of Health Sciences, and NUMS to see exactly where recent cutoffs landed — then set your MDCAT target a point or two above the line to be safe.',
        ],
      },
      {
        heading: 'Three mistakes that cost students seats',
        paragraphs: [
          'First, dividing the MDCAT by 200 instead of 180 — the single most common error, and it always makes your aggregate look worse than it is. Second, using the wrong formula for the wrong body: applying the MDCAT 10/40/50 split to NUMS admissions (which needs the 200-mark NUMS test), or mixing in an older session\'s rules. Third, rounding too early — computing each part to one decimal and then adding, which can shift your result by hundredths at exactly the precision merit lists are ranked.',
        ],
        list: [
          'Always divide MDCAT by 180 (current cycle) and NUMS test by 200 — match the total to your session.',
          'Keep full precision through the calculation; round only the final aggregate.',
          'Set your target 1–2 aggregate points above last year\'s closing merit, not at it.',
          'Remember: no negative marking, so attempt every MDCAT question.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the official MDCAT aggregate formula for 2026?',
        answer: 'Matric 10% + FSc 40% + MDCAT 50%. Compute it as (Matric ÷ Matric total × 10) + (FSc ÷ FSc total × 40) + (MDCAT ÷ 180 × 50). This is the PMDC national formula, also used by UHS for Punjab public colleges.',
      },
      {
        question: 'Is the MDCAT out of 180 or 200?',
        answer: 'Recent MDCAT sessions, including the 2025-26 cycle, are scored out of 180 marks (180 MCQs). Older sessions used 200. Always divide by the total of the session you sat — dividing by 200 under-reports your aggregate by about 4.5 points.',
      },
      {
        question: 'Does NUMS use the same MDCAT formula?',
        answer: 'NUMS uses the same 10/40/50 weight structure but its own 200-mark admission test instead of the PMDC MDCAT. So the formula is (Matric ÷ total × 10) + (FSc ÷ total × 40) + (NUMS test ÷ 200 × 50).',
      },
      {
        question: 'Is there negative marking in MDCAT 2026?',
        answer: 'No. There is no negative marking, so you should attempt every question — a blank and a wrong answer both score zero, while a guess can add roughly 0.28% to your aggregate.',
      },
      {
        question: 'What MDCAT score do I need for a public MBBS seat?',
        answer: 'You first need the PMDC minimum of 55% (99/180) to be eligible, but public-sector MBBS closing merits sit far above that. Check the verified 2024 and 2025 closing merits on each university\'s detail page and target 1–2 aggregate points above last year\'s cutoff.',
      },
      {
        question: 'Are extra FSc attempts penalized, or do Hafiz-e-Quran students get bonus marks?',
        answer: 'According to the published criteria, no marks are deducted for extra FSc attempts, and the PMDC regulations and the UHS 2025-26 prospectus add no Hafiz-e-Quran bonus marks to the aggregate.',
      },
      {
        question: 'How precise is the final aggregate?',
        answer: 'UHS rounds the final aggregate to four decimal places, and merit lists are ranked at that precision. Keep full precision through your calculation and round only at the end.',
      },
    ],
    relatedCalculators: ['kemu', 'duhs', 'nums'],
  },
  {
    slug: 'how-to-calculate-uet-aggregate',
    image: '/blog/how-to-calculate-uet-aggregate.svg',
    imageAlt: 'UET Lahore ECAT aggregate formula 2026 — official 17/50/33 weight illustration',
    title: 'How to Calculate UET Lahore (ECAT) Aggregate 2026: Step-by-Step Guide',
    description:
      'The official UET Lahore aggregate formula for 2026 (Matric 17% + Inter Part-1 50% + ECAT 33%, test out of 400) with a worked example, per-mark values, closing merits, and the mistakes that cost students seats.',
    category: 'Guides',
    date: 'October 2026',
    readTime: '7 min read',
    intro:
      'UET Lahore — Pakistan\'s oldest engineering university, founded in 1921 — ranks every applicant on a single aggregate number. Unlike NUST, where the entry test decides 75% of your merit, UET gives your board marks the majority: two-thirds of your aggregate comes from Matric and Inter, and only one-third from ECAT. This guide shows you the official 2026 formula, works through a full example, and flags the calculation errors that quietly push students off merit lists every year.',
    sections: [
      {
        heading: 'The official UET aggregate formula (2026)',
        paragraphs: [
          'UET Lahore computes your aggregate from three components: Matric counts 17%, Intermediate Part-1 counts 50%, and ECAT counts 33%. In one line: Aggregate = (Matric obtained ÷ Matric total × 17) + (Inter Part-1 obtained ÷ Inter Part-1 total × 50) + (ECAT obtained ÷ 400 × 33).',
          'Notice what is unusual here: your board marks carry 67% of the weight — more than most other engineering universities give them. A student with outstanding FSc marks enters ECAT with a built-in cushion, while a student with weak boards needs a much bigger ECAT score to compensate. And UET uses Inter Part-1 (not the complete Inter) for the provisional merit lists issued during the admission season — the same basis our calculator on this site uses.',
        ],
      },
      {
        heading: 'ECAT pattern: what the 400 marks look like',
        paragraphs: [
          'ECAT — the Engineering College Admission Test — is a single paper of 100 multiple-choice questions, scored out of 400 marks and completed in 100 minutes. Pre-Engineering students attempt Mathematics, Physics, Chemistry and English; ICS (Computer Science) students attempt Computer Science in place of Chemistry. Historically, UET awarded 4 marks per correct answer and deducted 1 per wrong answer.',
          'One honest caveat: UET has changed the marking scheme between cycles, and admission guides for the 2026 session report no negative marking with a best-score rule across multiple ECAT attempts. Do not treat either rule as permanent — read the official admission advertisement on admission.uet.edu.pk for your session before deciding whether to guess or leave a question blank.',
        ],
      },
      {
        heading: 'Worked example, step by step',
        paragraphs: [
          'Take a student with 1000/1100 in Matric, 480/550 in Inter Part-1, and 300/400 in ECAT. Convert each part to its weighted contribution. Matric: 1000 ÷ 1100 × 17 = 15.4545. Inter Part-1: 480 ÷ 550 × 50 = 43.6364. ECAT: 300 ÷ 400 × 33 = 24.75.',
          'Add them: 15.4545 + 43.6364 + 24.75 = 83.8409%, so about 83.84%. The verified 2025 closing merit for UET engineering programs was 67.50% — this student clears it by more than 16 points. The arithmetic also reveals the structure of the formula: the Part-1 column (50%) is the biggest single lever, and a 480/550 there already does most of the heavy lifting before ECAT is even counted.',
        ],
      },
      {
        heading: 'What each extra mark is actually worth',
        paragraphs: [
          'Because the weights differ, not all marks are equal. One extra Matric mark adds about 0.015% to your aggregate (17 ÷ 1100). One extra Inter Part-1 mark adds about 0.091% (50 ÷ 550). One extra ECAT mark adds about 0.083% (33 ÷ 400). So a single Part-1 mark is worth roughly six Matric marks, and an ECAT mark is worth roughly five.',
          'That is the key strategic difference from NUST: at UET, your FSc Part-1 preparation IS your merit preparation. Students who split their effort evenly between boards and ECAT usually gain more aggregate from an extra Part-1 mark than from an extra ECAT mark — though ECAT still decides the ordering among students whose board marks are similar.',
          'You can also run the formula backwards to set an ECAT target. Suppose your boards are 900/1100 in Matric (13.9091) and 420/550 in Part-1 (38.1818) — together 52.0909. To reach a 70% aggregate you need 17.9091 from ECAT, which means 17.9091 ÷ 33 × 400 ≈ 217 marks out of 400. A concrete number like that turns "do well in ECAT" into a testable target.',
        ],
      },
      {
        heading: 'Closing merits and the 60% eligibility floor',
        paragraphs: [
          'UET requires a minimum 60% aggregate to be eligible to apply — but eligibility is a floor, not a target. The verified closing merit for UET engineering programs was 67.50% in 2025 and 66.20% in 2024, and individual programs and campuses close higher or lower than that line. Always compare your aggregate against the closing merit of the specific program and campus you want, not the university average.',
          'Closing merits move every year with the ECAT paper\'s difficulty, the applicant pool, and seat counts, so treat last year\'s number as a reference line and aim 1–2 aggregate points above it. We publish the verified 2024 and 2025 figures on the UET detail page on this site — the related calculators below also link NED and MUET, which run their own entry tests with different formulas, so never mix their numbers with UET\'s.',
        ],
      },
      {
        heading: 'Five mistakes that cost students seats',
        paragraphs: [
          'First, dividing ECAT by 100 instead of 400 — students take their number of correct MCQs and plug it straight into the formula, which under-reports their aggregate by a factor of four. Second, using complete Inter or Part-2 marks when UET\'s provisional merit asks for Part-1. Third, borrowing another university\'s formula: a "NUST aggregate" with 75% test weight tells you nothing about UET merit. Fourth, rounding each part to one decimal before adding — keep full precision and round only the final figure. Fifth, ignoring the session rules: if your ECAT cycle offers multiple attempts or no negative marking, your guessing strategy changes, so confirm the official advertisement first.',
        ],
        list: [
          'Always divide ECAT by 400, never by 100 — the total is 400 marks.',
          'Use Inter Part-1 marks for provisional merit, matching UET\'s basis.',
          'Keep full precision through the calculation; round only the final aggregate.',
          'Set your ECAT target 1–2 aggregate points above last year\'s closing merit.',
          'Confirm the negative-marking and attempt rules in the official ad for your session.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the official UET Lahore aggregate formula for 2026?',
        answer: 'Matric 17% + Inter Part-1 50% + ECAT 33%. Compute it as (Matric ÷ Matric total × 17) + (Inter Part-1 ÷ 550 × 50) + (ECAT ÷ 400 × 33). This is the formula in UET\'s admission statute and the one our UET calculator uses.',
      },
      {
        question: 'Is ECAT scored out of 400 or 100?',
        answer: 'ECAT is scored out of 400 marks (100 MCQs). Always divide your ECAT score by 400 in the aggregate formula — dividing by 100 under-reports your aggregate by a factor of four.',
      },
      {
        question: 'Does UET use Inter Part-1 or the complete Inter result?',
        answer: 'UET\'s provisional merit lists during the admission season are computed on Inter Part-1 marks. Once complete Inter results are available, final merit switches to the full Inter result. Calculate on the basis UET is currently using for your list.',
      },
      {
        question: 'Is there negative marking in ECAT 2026?',
        answer: 'It has varied between cycles — older sessions deducted 1 mark per wrong answer, while 2026 admission guides report no negative marking with a best-score rule. Confirm the marking scheme in the official admission advertisement on admission.uet.edu.pk before your test.',
      },
      {
        question: 'What is the minimum aggregate to apply to UET Lahore?',
        answer: 'You need at least a 60% aggregate to be eligible to apply. But eligibility is only the floor — recent closing merits for engineering programs (67.50% in 2025, 66.20% in 2024) sit well above it.',
      },
      {
        question: 'Can A-Level students apply to UET Lahore?',
        answer: 'Yes, through an IBCC equivalence certificate. Your O-Level and A-Level results are converted to the Pakistani marks scale, and the converted figures feed the same 17/50/33 formula. Check UET\'s prospectus for the exact equivalence procedure for your session.',
      },
      {
        question: 'What was UET Lahore\'s closing merit in 2025?',
        answer: 'The verified 2025 closing merit for UET BSc Engineering programs was 67.50% (66.20% in 2024). Closing merits vary by program and campus, so compare against the specific one you are targeting and aim a point or two above it.',
      },
    ],
    relatedCalculators: ['uet', 'ned', 'muet'],
  },
];

// Combined export used by pages and sitemap tooling.
export const ALL_BLOG_POSTS: BlogPost[] = [...BLOG_POSTS, ...BLOG_POSTS_PART2, ...BLOG_POSTS_PART3];

export function getBlogPost(slug: string | undefined): BlogPost | undefined {
  return ALL_BLOG_POSTS.find((p) => p.slug === slug);
}
