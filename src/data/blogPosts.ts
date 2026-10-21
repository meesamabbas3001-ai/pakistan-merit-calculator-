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
          'Update for the 2026-27 cycle: Punjab notified the MBBS/BDS Admission Policy on 14 October 2026 — the 10/40/50 formula above is unchanged, and UHS Lahore runs the centralized admissions. Key details from the notification: application fee Rs. 2,000, public-sector tuition Rs. 50,000 per year, private-seat deposit Rs. 600,000 due within 3 working days of the merit list, no Hafiz-e-Quran bonus marks, and the public-college preference list locks after the deadline (a college left off your list cannot be considered later).',
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
  {
    slug: 'how-to-check-mbbs-merit-list-2026',
    image: '/blog/how-to-check-mbbs-merit-list-2026.svg',
    imageAlt: 'MBBS and BDS merit list 2026 check guide for UHS, KMU, SZABMU, JSMU and NUMS',
    title: 'How to Check Merit List 2026: MBBS/BDS Merit List Guide (UHS, KMU, SZABMU, JSMU, NUMS)',
    description:
      'The 2026-27 MBBS/BDS merit lists are coming out Nov–Dec 2026. Here is where each body publishes its lists (UHS, KMU, SZABMU, JSMU, NUMS), the official dates, and how to read and act on them.',
    category: 'Guides',
    date: 'October 2026',
    readTime: '8 min read',
    intro:
      'Your MDCAT result is out and your aggregate is calculated — now the waiting begins. Between mid-November and December 2026, the admitting universities will publish merit lists that decide exactly who gets which medical college. This guide shows you where each list appears, the official dates already announced, what each type of list means, and what to do the moment your name is (or is not) on one. Every date below comes from an official admission notice issued this October — the 2026-27 lists themselves have not been published yet, and no cutoff numbers are given here because inventing them would only mislead you.',
    sections: [
      {
        heading: 'Which "2026" merit list do you mean? Clear the confusion first',
        paragraphs: [
          'The single biggest source of panic every year is the session mix-up. Lists labeled "2026" that you find on result sites right now belong to the 2025-26 session — they were issued between late 2025 and early 2026 and are finished history. The lists you are waiting for belong to session 2026-27, for the students who sat the MDCAT on 20 September 2026. When a site shows you a list, check the session year first: only a list dated for the 2026-27 session matters to you now.',
          'The old lists are not useless, though. They are your reference line — the last-closed aggregate of each college shows you roughly where merit settled last time. Just remember they describe a different applicant pool and a different MDCAT paper, so treat them as a benchmark, not a promise.',
        ],
      },
      {
        heading: 'Where each merit list is published (and only there)',
        paragraphs: [
          'Pakistan does not have one national merit list. Each admitting body publishes its own lists, on its own portal, for its own colleges. Checking the wrong portal wastes your time and breeds rumor. The map is:',
          'UHS Lahore publishes for Punjab\'s public and private medical and dental colleges at uhs.edu.pk. KMU Peshawar publishes for Khyber Pakhtunkhwa through its Centralized Admission System portal, cas.kmu.edu.pk. SZABMU Islamabad publishes for the federal capital\'s public-sector colleges through its own online admission portal. Sindh runs through JSMU Karachi, but admissions are processed by the university your domicile is tagged to — JSMU for Karachi, SMBBMU Larkana, or LUMHS Jamshoro. NUMS Islamabad runs one centralized process for its constituent, affiliated, and Armed Forces-administered colleges at numspak.edu.pk.',
          'Bookmark the portal of the body you actually applied to, and ignore screenshots forwarded on WhatsApp until you have verified them on the official portal. Fake and old lists circulate every season.',
        ],
      },
      {
        heading: 'UHS Punjab 2026-27: the full official schedule',
        paragraphs: [
          'UHS announced its complete 2026-27 admission schedule in October 2026, and it is the most detailed of all the bodies. For MBBS, online applications open on 16 October 2026 at 9:00 AM and close on 30 October at 5:00 PM. The provisional order of merit is scheduled for 13 November, followed by the final order of merit on 16 November.',
          'College-wise selection lists then decide who actually gets a seat: the first is scheduled for 17 November, the second selection/upgradation list for 23 November, and the third for 1 December. MBBS classes are scheduled to commence on 1 February 2027. BDS runs on a separate, later calendar: applications 15–30 December 2026, provisional and final merit orders on 6 and 9 January 2027, selection lists from 11 January, and classes on 1 March 2027.',
          'UHS cautions that this timetable remains subject to directions from the PMDC and the Punjab government, so treat each date as scheduled rather than guaranteed. The application processing fee is Rs. 2,000 (non-refundable), and missing the fee deadline forfeits the admission and the upgradation chance.',
        ],
      },
      {
        heading: 'KMU Peshawar, SZABMU Islamabad, JSMU Sindh, NUMS: verified dates',
        paragraphs: [
          'KMU runs admissions for KP public-sector colleges through its Centralized Admission System, with online applications closing on 21 October 2026 at 5:00 PM. KMU also handles private-sector admissions: forms opened on 6 October, with the provisional merit list scheduled for 11 November and the final merit list in late November, followed by placement rounds into December and January. The aggregate formula is the same national one everywhere: Matric 10% + FSc 40% + MDCAT 50%.',
          'SZABMU Islamabad opened public-sector MBBS/BDS admissions with the online application deadline set for 30 October 2026. The application processing fee is Rs. 3,000 per program (separate for MBBS and BDS), and valid MDCAT scores from 2024, 2025, or 2026 count for eligibility — at least 55% for MBBS and 50% for BDS. Note that college preferences cannot be changed after submission, so rank them deliberately.',
          'In Sindh, JSMU opened MBBS/BDS admissions for 2026-27 with the last date for submitting physical application files — via designated Leopards Courier Service centers — set for 26 October 2026. You apply through the processing university your domicile district is tagged to (JSMU, SMBBMU Larkana, or LUMHS Jamshoro), need at least 60% in FSc Pre-Medical, and need a valid MDCAT score (2024, 2025, or 2026, conducted by IBA Sukkur) with at least 55% for MBBS and 50% for BDS.',
          'NUMS Islamabad opened centralized registration on 13 October 2026 for its constituent, affiliated, and Armed Forces-administered colleges. Regular-fee registration closes on 11 November, with late-fee registration open until 25 November. The provisional merit list is scheduled for 10 December 2026, the first MBBS selection list for 17 December, and the first BDS selection list for 21 January 2027. The regular open-merit application fee is Rs. 8,500. NUMS uses its own 200-mark entry test, then applies the same 10/40/50 weight structure.',
        ],
      },
      {
        heading: 'How the lists come out, in order',
        paragraphs: [
          'The sequence is the same everywhere, and understanding it tells you exactly what to do at each step. First comes the provisional merit list (UHS calls it the provisional order of merit) — your first look at your position. Check every detail on it immediately: your aggregate, your category, your preferences. Objection and correction windows can be extremely short — in one past Punjab cycle candidates had only 24 hours — so do not plan to check "tomorrow".',
          'Second comes the final merit list, published after corrections and objections are processed. Third come the college-wise selection lists, which assign actual seats: in the 2025-26 cycle, UHS issued 13 selection lists according to one third-party dataset, so the process stretches for weeks. Fourth come upgradation lists, where students admitted to a lower preference move up as seats open, plus final placement rounds for vacant seats.',
          'The practical meaning: the first selection list\'s cutoff is the highest merit of the season. Merits drop with each subsequent list as seats cascade down. If your aggregate is a point or two below the first list\'s cutoff, you are still very much in the game — keep checking every list.',
        ],
      },
      {
        heading: 'How to read a merit list like a strategist',
        paragraphs: [
          'A merit list is not just names — it is data. For each college and category, look at the last admitted aggregate: that is the closing merit for that list. Compare your own aggregate (calculated to full precision — UHS ranks merit lists to four decimal places) against it. If you sit within a point or two below it, you are in the upgradation zone.',
          'Read the category column carefully. Open merit, quota seats (rural, disabled, children of faculty), and overseas/foreign categories are ranked separately — your name might be far down open merit but comfortably inside your quota. On the KMU portal in particular, your college preferences drive placement: the system fills seats in your stated preference order, so a careless preference list can cost you a better college. Preferences cannot be edited after submission at SZABMU and several other bodies.',
          'Track the lists in a simple spreadsheet: body, list number, date, each college\'s last admitted aggregate, and your distance from it. This five-minute habit turns rumor season into a clear, personal picture — and it is exactly what students with weaker aggregates use to catch upgradation movement others miss.',
        ],
      },
      {
        heading: 'If your name is missing: the honest playbook',
        paragraphs: [
          'Missing the first selection list is normal for a large share of eventually admitted students — especially in Punjab, where the list cascade runs deep. Your job is to keep watching every subsequent list and every upgradation round, and to keep your phone and documents ready, because joining periods are short.',
          'Check your category eligibility again: many students miss that they qualify for a quota they never applied under. For private-sector options, KMU\'s private admissions and the private colleges under UHS run on separate timelines with separate lists — a public-list miss is not the end. And if you are on the borderline, use the waiting period productively: compute your aggregate against the published closing merits of 2024 and 2025 on each university\'s page, set realistic preference expectations, and have your fee and documents ready so a late-round offer never slips because you were unprepared.',
        ],
      },
      {
        heading: 'Five mistakes that cost students seats every year',
        paragraphs: [
          'First, checking the wrong session\'s list and panicking over a number that does not apply to you. Second, trusting forwarded screenshots instead of the official portal — outdated or fabricated lists are routine. Third, missing the objection window on the provisional list because you checked a day late; a wrong aggregate printed there follows you into the final list. Fourth, a careless preference order that hands your seat to a lower-choice college. Fifth, waiting to arrange documents and fees until selection day — when the offer window is days, preparation is the whole game.',
        ],
        list: [
          'Bookmark only the official portal of the body you applied to — ignore forwarded list images until verified.',
          'Check the provisional list the hour it appears and file any objection within the stated window.',
          'Rank college preferences in your true order of desire, not in the order you think you can "afford".',
          'Track every list\'s closing aggregate in a spreadsheet so you can see merit dropping toward your number.',
          'Never trust a cutoff number on this site or any site until it is verified against an official list — we publish only verified numbers, and so should you expect everywhere.',
        ],
      },
    ],
    faqs: [
      {
        question: 'When will the 2026-27 MBBS merit lists be published?',
        answer: 'Per official schedules announced in October 2026: UHS Punjab\'s provisional order of merit is scheduled for 13 November and the final on 16 November, with college-wise selection lists from 17 November. KMU private colleges show a provisional list on 11 November. NUMS shows its provisional merit list on 10 December. These dates are subject to change by PMDC or the admitting universities.',
      },
      {
        question: 'Where do I check the UHS merit list?',
        answer: 'On the official UHS website, uhs.edu.pk. UHS publishes the provisional and final orders of merit and then college-wise selection lists there. Do not rely on forwarded screenshots — verify everything on the official portal.',
      },
      {
        question: 'What is the difference between a provisional and a final merit list?',
        answer: 'The provisional list is your first look — it can contain errors, so check your aggregate and details and file objections within the (often very short) correction window. The final list is published after corrections are processed and is the basis for seat allocation.',
      },
      {
        question: 'Why did the merit "drop" between the first and third selection lists?',
        answer: 'Each selection list fills the seats students declined or upgraded from, so the last admitted aggregate falls with every round. The first list\'s cutoff is the highest merit of the season; later lists and upgradation rounds admit students with lower aggregates as seats cascade down.',
      },
      {
        question: 'Can I change my college preferences after submitting the application?',
        answer: 'No, at several bodies — including SZABMU Islamabad — preferences cannot be modified once submitted. KMU also uses your stated preference order during placement. Rank your colleges in your true order of desire before submitting.',
      },
      {
        question: 'Do old MDCAT scores work for 2026-27 admissions?',
        answer: 'MDCAT results remain valid for up to three years. SZABMU and JSMU explicitly accept valid 2024, 2025, or 2026 scores (55% minimum for MBBS, 50% for BDS). Always check your body\'s notice, since the accepted sessions can be stated differently.',
      },
      {
        question: 'I am below the first selection list cutoff. Should I give up?',
        answer: 'No. First-list cutoffs are the season\'s highest; merits drop across subsequent lists and upgradation rounds. Keep checking every list, verify your quota categories, and have documents and fees ready so a late offer never slips.',
      },
      {
        question: 'How is my aggregate ranked so precisely?',
        answer: 'UHS rounds the final aggregate to four decimal places and ranks lists at that precision — students with seemingly identical marks can sit dozens of ranks apart. Keep full precision in your own calculation and round only at the end.',
      },
    ],
    relatedCalculators: ['kemu', 'duhs', 'nums'],
  },
  {
    slug: 'mbbs-closing-merit-2026-punjab',
    image: '/blog/mbbs-closing-merit-2026-punjab.svg',
    imageAlt: 'MBBS closing merit 2026 Punjab — last-year cutoff bars with KEMU at 94.9 and UHS merit list dates',
    title: 'MBBS Closing Merit 2026: Punjab Cutoffs, UHS Merit List Dates & Safe Aggregates',
    description:
      'Punjab MBBS closing merit 2026: verified UHS merit-list dates (applications open 16–30 Oct), last-year college cutoffs with KEMU at ~94.9%, and what aggregate is actually safe — honest benchmarks, no invented numbers.',
    category: 'Guides',
    date: 'October 2026',
    readTime: '8 min read',
    intro:
      'Every MBBS applicant in Punjab asks one question after the MDCAT: "closing merit kitna hoga?" Here is the honest answer for the 2026-27 session: UHS applications are open RIGHT NOW (16–30 October 2026), the first selection list is scheduled for 17 November — and no 2026 closing merit exists yet, because no list has been published. What does exist: a verified official schedule, verified last-year cutoffs, and the maths to judge your own position against them. This guide gives you all three, and tells you plainly where every number comes from. We refuse to invent 2026 cutoffs — a guessed number here could cost a student their college choice.',
    sections: [
      {
        heading: 'The 2026-27 cycle is live right now: the verified UHS schedule',
        paragraphs: [
          'UHS Lahore announced its complete 2026-27 public-sector admission schedule in October 2026, and the window is open as you read this. For MBBS: online applications opened on 16 October 2026 at 9:00 AM and close on 30 October at 5:00 PM. The provisional order of merit is scheduled for 13 November, followed by the final order of merit on 16 November. These two lists rank every applicant by aggregate before any seat is assigned.',
          'College-wise selection lists then decide who actually gets a seat: the first is scheduled for 17 November, with the second selection/upgradation list on 23 November and the third on 1 December. MBBS classes are scheduled to commence on 1 February 2027. BDS runs on a separate, later calendar: applications from 15 to 30 December 2026, provisional and final merit orders on 6 and 9 January 2027, selection lists starting 11 January (then 15 and 21 January), and classes on 1 March 2027.',
          'One caution: UHS states that this timetable remains subject to directions from the PMDC and the Punjab government, including changes in how many selection lists are issued. Treat every date as scheduled rather than guaranteed, and never miss the application deadline of 30 October — there is no late fix for it.',
        ],
      },
      {
        heading: 'First-list cutoff vs final closing: the number that actually matters',
        paragraphs: [
          'Students mix up two very different numbers. The first selection list\'s cutoff is the HIGHEST merit of the season — it fills only the top of the applicant pool. The "closing merit" of a college is the last admitted aggregate on the FINAL list, after every upgradation round has cascaded seats down to lower aggregates. In the 2025-26 cycle, UHS issued selection lists over many weeks, and merit kept dropping with each round.',
          'So when you compare your aggregate against last year, always compare against final closings, never against a first list. And always check the session year: lists labeled "2026" floating around result sites right now mostly belong to the 2025-26 session — issued between late 2025 and early 2026, finished history. Only lists dated for session 2026-27 (starting 13 November) apply to you.',
          'Be equally careful with "expected closing merit 2026" tables and videos circulating now. Those are predictions made by creators, not official figures — some even carry disclaimers that they may vary. Use them as scenarios if you like, but never as targets to plan your college preferences around.',
        ],
      },
      {
        heading: 'What Punjab MBBS closed at last time (verified history)',
        paragraphs: [
          'Now the benchmarks. Two independent education sources agree on the headline number: King Edward Medical University\'s 2025 final open-merit close sat at about 94.9% (one reports 94.87% on the final list). KEMU is the ceiling of Punjab MBBS merit — the most competitive open-merit seat in Pakistan — and its 2025 close is the single most useful reference number of the season.',
          'Reported recent open-merit closing ranges, compiled from published merit lists by education guides, put the rest of the picture in place: Allama Iqbal Medical College roughly 91.5–93.0%, Nishtar Medical University roughly 90.5–92.4%, Khyber Medical College (KP) roughly 89.6–91.9%, and Dow University of Health Sciences (Sindh) roughly 89.0–91.6%. These are reported ranges across recent sessions — a benchmark neighbourhood, not an official promise. We publish verified per-university closing merits on the KEMU, DUHS, and NUMS calculator pages of this site, taken from official lists.',
          'How to use these: a range tells you which colleges live in your aggregate\'s orbit. If your aggregate sits 1–2 points above a college\'s historical band, you are in a strong position for it; if you sit inside the band, it is a genuine contest; below it, you are depending on merit dropping in later rounds. None of this replaces the 2026 lists — it only tells you how to read them when they arrive.',
        ],
      },
      {
        heading: 'What moves closing merit in 2026 (and why we will not guess a number)',
        paragraphs: [
          'Four forces will decide where 2026 closings land, and none of them is knowable in advance. First, the difficulty of the MDCAT 2026 paper — its result was declared on 24 September 2026, and a tougher paper compresses the top of the aggregate distribution downward while an easier one pushes it up. Second, the applicant volume: more applicants above the 55% MBBS eligibility line means fiercer competition at the top. Third, seat counts — and note the PMDC admission policy states that any increase in approved seats or new institutions after the policy\'s issuance counts for the following session, not this one. Fourth, repeaters: MDCAT scores stay valid for up to three years, so strong older scores keep competing in this cycle.',
          'This is exactly why we will not publish an "expected closing merit 2026" number. The direction of each force can be reasoned about, but the final number is an output of the applicant pool — nobody, including us, can compute it before the lists publish. Any site handing you a precise 2026 cutoff today is inventing it. The honest move is to benchmark against verified history and set your target a point or two above last year\'s close.',
        ],
      },
      {
        heading: 'Worked example: where do YOU actually stand?',
        paragraphs: [
          'Take a student with 1050/1100 in Matric, 1040/1100 in FSc, and 165/180 in MDCAT. Apply the official formula — Matric 10% + FSc 40% + MDCAT 50%: Matric contributes 1050 ÷ 1100 × 10 = 9.5455; FSc contributes 1040 ÷ 1100 × 40 = 37.8182; MDCAT contributes 165 ÷ 180 × 50 = 45.8333. The final aggregate is 93.1970%.',
          'Read it against the benchmarks: about 1.7 points below KEMU\'s 2025 final close of ~94.9% — KEMU is out of reach on 2025 terms. At the top edge of AIMC\'s historical band (91.5–93.0%), and comfortably inside the historical bands for Nishtar and KMC. Now run it backwards for a target: to reach 94.9 with those boards, the boards supply 47.3637, so the MDCAT must supply 47.5363 — that means 47.5363 ÷ 50 × 180 = 171.13, i.e. 172 marks out of 180. This is the exact target-setting our MDCAT aggregate formula guide teaches step by step.',
          'The arithmetic exposes the leverage: one MDCAT mark is worth roughly 0.278% of aggregate, about eight times one FSc mark. If you are still appearing for a test, or holding a valid older MDCAT score, that is where merit is won or lost — the boards, for all their weight, move far more slowly.',
        ],
      },
      {
        heading: 'Your closing-merit strategy for this season',
        paragraphs: [
          'First, apply on time — the UHS portal closes on 30 October at 5:00 PM and a missed deadline ends the season before it starts. Second, rank your college preferences in your true order of desire, not in the order you think you can "afford": the system fills seats down your stated preference list, and a careless order can hand your seat to a lower-choice college.',
          'Third, do not judge your chances by the first selection list on 17 November — its cutoff is the season\'s highest, and merit drops across the 23 November and 1 December upgradation rounds. Missing the first list is normal for a large share of eventually admitted students. Fourth, track every list\'s last admitted aggregate per college in a simple spreadsheet; watching merit move toward your number turns rumor season into a clear personal picture.',
          'Fifth, keep your documents and fee ready — joining windows after selection are short, and late-round offers are lost by the unprepared, not the unqualified. Sixth, keep a private-sector backup plan: private colleges under UHS run on separate timelines with separate lists. Our "How to Check Merit List 2026" guide walks through every portal, list type, and objection window step by step — read it alongside this one.',
        ],
      },
      {
        heading: 'Page notes: what we know, what we refuse to guess',
        paragraphs: [
          'Known and verified: the 2026-27 UHS schedule, the official 10/40/50 formula, and the 2025 closing benchmarks quoted above with their sources. Unknown and therefore unpublished here: every single 2026 closing merit — because UHS has not published any 2026-27 list yet. The moment the 13 November provisional list and the 17 November selection list appear, we will update this page with the real, verified numbers.',
          'If you arrived here looking for a single "expected" number to plan around, take this instead: compute your aggregate to full precision, set your target 1–2 points above last year\'s final close for your dream college, and let the verified lists — not a prediction — decide your preferences. A missing number on this page is honesty; a guessed number anywhere would be a disservice to every student reading it.',
        ],
      },
    ],
    faqs: [
      {
        question: 'When will the first UHS MBBS merit list 2026 come out?',
        answer: 'Per the official 2026-27 schedule: the provisional order of merit on 13 November 2026, the final order of merit on 16 November, and the first college-wise selection list on 17 November, with upgradation lists on 23 November and 1 December. Dates remain subject to PMDC and Punjab government directions.',
      },
      {
        question: 'What was the closing merit of MBBS in Punjab in 2025?',
        answer: 'KEMU closed the 2025 session at about 94.9% on the final open-merit list (reported by two independent education sources). Reported recent ranges for other colleges: AIMC roughly 91.5–93.0%, Nishtar roughly 90.5–92.4%, KMC Peshawar roughly 89.6–91.9%, DUHS Karachi roughly 89.0–91.6%. Always verify against the official UHS lists.',
      },
      {
        question: 'What aggregate is safe for MBBS in Punjab 2026?',
        answer: 'Honestly: historically, an aggregate around 92% or above has secured a public-sector MBBS seat somewhere in Punjab, while KEMU territory starts around 94.9%. The exact 2026 line will move with this year\'s MDCAT paper and applicant pool, so set your target 1–2 points above last year\'s close for your chosen college.',
      },
      {
        question: 'Is the first selection list cutoff the same as closing merit?',
        answer: 'No. The first selection list cutoff is the highest merit of the season. "Closing merit" means the last admitted aggregate on the final list after all upgradation rounds — it is always lower than the first list\'s cutoff.',
      },
      {
        question: 'Why is KEMU\'s closing merit always the highest?',
        answer: 'KEMU is the first preference of nearly every Punjab applicant and has a limited number of open-merit seats, so the top of the applicant pool concentrates there first. Its closing merit is effectively the ceiling of the whole province\'s merit.',
      },
      {
        question: 'Does merit really drop after the first list?',
        answer: 'Yes. Each selection and upgradation round fills seats that students declined or upgraded from, so the last admitted aggregate falls with every round. Missing the first list is normal for many eventually admitted students — keep checking every list.',
      },
      {
        question: 'Is BDS closing merit lower than MBBS?',
        answer: 'Yes, BDS historically closes below MBBS at the same admitting bodies. For 2026-27, BDS applications run 15–30 December 2026, with selection lists from 11 January 2027 — a completely separate calendar from MBBS.',
      },
      {
        question: 'Where are official closing merits published?',
        answer: 'On the official UHS merit lists at uhs.edu.pk. Each college-wise selection list shows the admitted aggregates; the last aggregate on the final list is that college\'s closing merit. Verify any cutoff number against these official lists before acting on it.',
      },
    ],
    relatedCalculators: ['kemu', 'duhs', 'nums'],
  },
  {
    slug: 'how-to-calculate-kmu-aggregate',
    image: '/blog/how-to-calculate-kmu-aggregate.svg',
    imageAlt: 'KMU aggregate 2026 guide: SSC 10%, HSSC 40%, MDCAT 50% formula for Khyber Medical University MBBS/BDS merit',
    title: 'How to Calculate KMU Aggregate 2026: Khyber Medical University MBBS/BDS Merit Guide',
    description:
      'Calculate your KMU aggregate for 2026-27 with the official formula (SSC 10% + HSSC 40% + MDCAT 50%), a worked example, the 21 October deadline, fee and eligibility — all verified from KMU\'s official admission portal.',
    category: 'Guides',
    date: 'October 2026',
    readTime: '8 min read',
    intro:
      'Khyber Medical University (KMU) runs the centralized admission system for all public-sector medical and dental colleges of Khyber Pakhtunkhwa — and the online application window for 2026-27 closes on 21 October 2026 at 5:00 PM. If your aggregate maths is wrong, your college preferences are built on sand. This guide gives you KMU\'s official merit formula, works through a real example, and lays out every verified deadline, fee and eligibility rule — plainly sourced from KMU\'s official portal.',
    sections: [
      {
        heading: 'The KMU aggregate formula (2026-27)',
        paragraphs: [
          'KMU follows the national PMDC merit structure: your aggregate is a weighted sum of three components — SSC (Matric) counts 10%, HSSC (FSc Pre-Medical) counts 40%, and your MDCAT score counts 50%. This is the same formula UHS Punjab uses, so the number you calculated for Punjab applies directly to KP as well.',
          'The formula is: Aggregate = (SSC obtained ÷ SSC total × 10) + (HSSC obtained ÷ HSSC total × 40) + (MDCAT obtained ÷ 180 × 50). The MDCAT is scored out of 180 in the current cycle, not 200 — dividing by the wrong total is the single most common error students make, and it always makes your aggregate look worse than it is.',
          'If you sat the NUMS test for NUMS colleges, stop here — NUMS uses its own 200-mark test and a separate process. The formula above is only for MDCAT-based KMU admissions. Never blend the two.',
        ],
      },
      {
        heading: 'Worked example: a real calculation',
        paragraphs: [
          'Take a student with 1050 out of 1100 in Matric, 1000 out of 1100 in FSc, and 150 out of 180 in MDCAT. Convert each part to its weighted contribution. SSC: 1050 ÷ 1100 × 10 = 9.5455. HSSC: 1000 ÷ 1100 × 40 = 36.3636. MDCAT: 150 ÷ 180 × 50 = 41.6667.',
          'Add them: 9.5455 + 36.3636 + 41.6667 = 87.5758%. That is the final KMU aggregate. KMU ranks merit lists to four decimal places, exactly like UHS — so do not round anything until the very last step. Two students who both "have 87.6%" can sit dozens of ranks apart once the decimals are compared.',
          'Notice the structure of the arithmetic: the MDCAT column is the only place where a realistic score swing moves your total by several full percentage points. Ten extra MDCAT marks add about 2.78% to your aggregate (10 ÷ 180 × 50), while ten extra FSc marks add about 0.36% and ten extra Matric marks add about 0.09%. One MDCAT mark is worth roughly eight FSc marks.',
        ],
      },
      {
        heading: 'Run the formula backwards to set your target',
        paragraphs: [
          'The formula also works in reverse — and this is how toppers plan. Suppose your target is a 92% aggregate, with 1020 out of 1100 in Matric (which contributes 9.2727) and 980 out of 1100 in FSc (which contributes 35.6364). Your boards give you 44.9091 combined, so the MDCAT must supply the remaining 47.0909.',
          'That means your MDCAT marks must be 47.0909 ÷ 50 × 180 = about 170 out of 180. Knowing the exact number turns a vague goal like "do well in MDCAT" into a concrete, testable target — and tells you honestly whether your target is reachable from your board marks at all. If the backwards maths says you need 178 out of 180 and your practice tests are at 150, it is time to add private colleges to your plan, not hope.',
        ],
      },
      {
        heading: 'The 2026-27 deadline you cannot miss',
        paragraphs: [
          'KMU takes online applications only, through cas.kmu.edu.pk — no hard copies, no forms by post, and no physical documents are accepted at KMU. The online form for public-sector MBBS and BDS seats closes on Wednesday, 21 October 2026 at 5:00 PM. A form that is wrong or incomplete is simply not considered, so do not leave it for the last evening.',
          'The processing fee is Rs. 3,000 per program — MBBS, BDS, KIMS MBBS and KIDS BDS are charged separately. You download the auto-generated challan after submitting the form and pay it at any Bank of Khyber branch; KMU advises checking your payment status on the portal 72 hours after paying, because admission is only allotted to candidates whose payment status is verified.',
          'Eligibility per the official portal: KP or newly-merged-districts domicile, and a valid MDCAT score from 2024, 2025 or 2026 — at least 55% for MBBS and 50% for BDS. PM&DC\'s national minimum is 60% in FSc Pre-Medical; KMU\'s portal carries the session\'s exact eligibility wording, so confirm it there rather than from a WhatsApp forward.',
        ],
      },
      {
        heading: 'Public vs private: two separate KMU processes',
        paragraphs: [
          'This is where many KPK students lose a cycle: KMU runs public and private admissions on completely separate portals and timelines. The public-sector process above runs at cas.kmu.edu.pk. Private-sector MBBS/BDS admissions for all of KP\'s private medical and dental colleges run on a different portal — caspr.kmu.edu.pk — where forms opened on 6 October 2026 and close on 9 November 2026, with the provisional merit list scheduled for 11 November.',
          'The steps on the private portal mirror the public one: create an account on your own CNIC (applying on someone else\'s CNIC is not acceptable), complete your profile, select your college priorities in the order you actually want them, upload documents, download the challan, and verify your payment status. Once submitted, the form cannot be changed — so your preference order is final.',
          'A public-sector miss is not the end. Plenty of students who miss the 21 October public window, or who sit below the public closing line, still secure seats through the private process running into November. Plan for both from the start.',
        ],
      },
      {
        heading: 'The full KMU 2026-27 public-sector schedule',
        paragraphs: [
          'For the public-sector process, KMU\'s official notice lays out the following schedule after the 21 October deadline: provisional merit list on 30 October 2026, online objections from 1 to 3 November, final merit list on 12 November, placement in MBBS and BDS categories from 16 to 21 November, placement at KIMS and KIDS Kohat on 23 November, and a second round on vacant seats from 1 to 4 December, with a third round from 15 to 17 December.',
          'The provisional list matters more than students think: this is your only chance to catch an error in your printed aggregate or category before it follows you into the final list. Check it on the day it appears, file objections inside the window if anything is wrong, and then track every placement round — upgradation movement is how borderline students get in.',
          'Every date above comes from KMU\'s official admission notice and portal, read in October 2026. Dates can shift; verify against cas.kmu.edu.pk rather than screenshots circulating on social media.',
        ],
      },
      {
        heading: 'Four mistakes that cost KPK students their seat',
        paragraphs: [
          'First, dividing the MDCAT by 200 instead of 180 — the classic error, inherited from the old test pattern. Second, applying on the wrong portal or confusing the public and private processes: cas.kmu.edu.pk for public, caspr.kmu.edu.pk for private, different deadlines, different forms. Third, submitting the form but never verifying the challan payment 72 hours later — an unverified payment means no admission allotment, however strong your aggregate.',
          'Fourth, a careless college preference order. KMU\'s system fills seats in your stated preference order, so a college you listed casually can claim you before the college you actually wanted gets a chance. Rank preferences deliberately, and remember: once submitted, the form cannot be edited.',
        ],
        list: [
          'Divide MDCAT by 180 for KMU (current cycle) — never 200.',
          'Apply on cas.kmu.edu.pk for public seats before 21 October, 5:00 PM; use caspr.kmu.edu.pk for private seats before 9 November.',
          'Verify your Bank of Khyber challan payment on the portal 72 hours after paying.',
          'Set your college preferences in the exact order you want them — submission is final.',
          'Check the provisional merit list on 30 October and file objections within the 1–3 November window if your aggregate is wrong.',
        ],
      },
      {
        heading: 'Closing merits: the honest note',
        paragraphs: [
          'No 2026-27 KMU closing merit exists yet — the provisional merit list appears on 30 October 2026, and only published official lists create real cutoffs. Any "predicted" KMU cutoff number you see before then is a guess dressed as data; we refuse to invent one here, because a guessed number could cost a student their college choice.',
          'Use last session\'s official KMU merit lists as your reference line (remembering that cutoffs swing every year with paper difficulty and applicant numbers), compute your aggregate honestly with the formula above, and set your preferences a point or two below your comfort line. The related calculators below run the same 10/40/50 maths for KEMU, Dow and NUMS so you can compare across bodies.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the KMU aggregate formula for 2026?',
        answer: 'KMU uses SSC 10% + HSSC 40% + MDCAT 50%. Formula: (SSC obtained ÷ SSC total × 10) + (HSSC obtained ÷ HSSC total × 40) + (MDCAT obtained ÷ 180 × 50). The MDCAT is scored out of 180 in the current cycle.',
      },
      {
        question: 'What is the last date for KMU MBBS/BDS admission 2026?',
        answer: 'For public-sector seats, the online form at cas.kmu.edu.pk closes on 21 October 2026 at 5:00 PM. For private-sector seats, forms at caspr.kmu.edu.pk are open from 6 October to 9 November 2026.',
      },
      {
        question: 'What are the eligibility requirements for KMU admission?',
        answer: 'Per KMU\'s official portal: KP or newly-merged-districts domicile, and a valid MDCAT score from 2024, 2025 or 2026 — at least 55% for MBBS and 50% for BDS. Confirm the session\'s exact eligibility on cas.kmu.edu.pk before applying.',
      },
      {
        question: 'How much is the KMU application fee?',
        answer: 'Rs. 3,000 per program (MBBS, BDS, KIMS MBBS, KIDS BDS separately), paid via the auto-generated challan at any Bank of Khyber branch. Verify your payment status on the portal 72 hours after paying — admission is allotted only to verified payments.',
      },
      {
        question: 'Does KMU accept hard copies or physical documents?',
        answer: 'No. KMU accepts no hard copies, no forms by post, and no physical documents at the university. Everything is online; an incomplete or wrong online form is simply not considered.',
      },
      {
        question: 'When will the KMU merit lists be published?',
        answer: 'For the 2026-27 public-sector process: provisional merit list on 30 October 2026 (objections 1–3 November), final merit list on 12 November, and placement rounds from 16 November. The private-sector provisional list is scheduled for 11 November.',
      },
    ],
    relatedCalculators: ['kemu', 'duhs', 'nums'],
  },
  {
    slug: 'how-to-calculate-nums-aggregate',
    image: '/blog/how-to-calculate-nums-aggregate.svg',
    imageAlt: 'NUMS aggregate 2026 guide: Matric 10%, FSc 40%, NUMS Entry Test 50% (out of 200) formula for NUMS MBBS/BDS merit',
    title: 'How to Calculate NUMS Aggregate 2026: NUMS Entry Test Merit Guide',
    description:
      'Calculate your NUMS aggregate for 2026-27 with the official formula (Matric 10% + FSc 40% + NUMS Entry Test 50%, test out of 200), a worked example, the 11 November registration deadline, fees and eligibility — all verified.',
    category: 'Guides',
    date: 'October 2026',
    readTime: '8 min read',
    intro:
      'The National University of Medical Sciences (NUMS) does not use your MDCAT score at all. If you are aiming for Army Medical College or any of NUMS\'s affiliated and Armed Forces-administered medical colleges, your merit is decided by a separate 200-mark NUMS entry test — and the registration window for 2026-27 is open right now, closing on 11 November 2026 for the regular fee. This guide gives you NUMS\'s official aggregate formula, works through a real example, explains why your MDCAT aggregate is irrelevant here, and lays out every verified deadline, fee and eligibility rule.',
    sections: [
      {
        heading: 'The NUMS aggregate formula (2026-27)',
        paragraphs: [
          'NUMS follows the same national weight structure as the rest of Pakistan\'s medical admissions, but with its own test plugged in: Matric (or equivalent) counts 10%, FSc Pre-Medical (or equivalent) counts 40%, and the NUMS Entry Test counts 50%. This 10/40/50 split is published in NUMS\'s own admission documents and repeated by every official guide to the process.',
          'The formula is: Aggregate = (Matric obtained ÷ Matric total × 10) + (FSc obtained ÷ FSc total × 40) + (NUMS Entry Test obtained ÷ 200 × 50). The one detail that decides everything: the NUMS test is scored out of 200, not 180. It is a completely different paper from the PMDC MDCAT — different syllabus emphasis, different total, different admitting body. Never substitute one score for the other.',
          'As with the MDCAT formula, half your merit comes from a single test. The arithmetic in the next section shows exactly what that means in practice.',
        ],
      },
      {
        heading: 'Worked example: a real calculation',
        paragraphs: [
          'Take a student with 1050 out of 1100 in Matric, 1000 out of 1100 in FSc, and 170 out of 200 in the NUMS entry test. Convert each part to its weighted contribution. Matric: 1050 ÷ 1100 × 10 = 9.5455. FSc: 1000 ÷ 1100 × 40 = 36.3636. NUMS test: 170 ÷ 200 × 50 = 42.5.',
          'Add them: 9.5455 + 36.3636 + 42.5 = 88.4091%. That is the final NUMS aggregate. Keep full precision through the whole calculation and round only at the end — NUMS ranks applicants by aggregate, and at the top of the merit list a few hundredths of a point can separate dozens of candidates.',
          'Notice where the leverage is: every single NUMS test mark is worth 0.25% of your aggregate (50 ÷ 200). Ten test marks move the total by 2.5 full points. Compare that with board marks: ten extra FSc marks add about 0.36% (40 ÷ 1100), and ten extra Matric marks add about 0.09% (10 ÷ 1100). One NUMS test mark is worth roughly seven FSc marks and twenty-seven Matric marks. The test column is where merit is won and lost.',
        ],
      },
      {
        heading: 'Run the formula backwards to set your target',
        paragraphs: [
          'The formula works in reverse, and this is how serious candidates plan. Suppose your target is a 93% aggregate, with 1020 out of 1100 in Matric (which contributes 9.2727) and 980 out of 1100 in FSc (which contributes 35.6364). Your boards give you 44.9091 combined, so the NUMS test must supply the remaining 48.0909.',
          'That means your test score must be 48.0909 ÷ 50 × 200 = about 193 out of 200. Knowing the exact number turns a vague goal like "do well in the NUMS test" into a concrete, testable target — and it tells you honestly whether your target is reachable from your board marks at all. If the backwards maths says you need 195+ and your practice tests are sitting at 160, your honest options are: a dramatic jump in test preparation, or parallel applications through the MDCAT route where your profile may fit differently. Decide that now, in October — not after the provisional merit list in December.',
        ],
      },
      {
        heading: 'Why your MDCAT aggregate is useless here',
        paragraphs: [
          'This is the error that wastes entire admission cycles: students compute their MDCAT aggregate (test out of 180) and assume it tells them something about NUMS. It does not. The NUMS entry test is a different paper with a different total, a different syllabus pattern, and a different scoring scale — a 150 on the NUMS test and a 150 on the MDCAT are not the same achievement, and plugging one into the other\'s formula produces a meaningless number.',
          'The formulas cannot be mixed, either. A NUMS aggregate (NUMS test ÷ 200) is only valid for NUMS colleges, and a UHS/KMU aggregate (MDCAT ÷ 180) is only valid for MDCAT-route colleges. If you are applying through both routes — which many students sensibly do — compute and track the two aggregates as completely separate numbers, with separate targets and separate closing-merit benchmarks.',
          'One more common mix-up to kill early: Army Medical College (AMC) Rawalpindi admits through NUMS, not through UHS Punjab. An AMC aspirant needs the NUMS test, the NUMS registration, and the NUMS merit lists — the Punjab UHS process will not get you into AMC.',
        ],
      },
      {
        heading: 'The 2026-27 deadline you cannot miss',
        paragraphs: [
          'NUMS runs one centralized online registration for MBBS and BDS across all its constituent, affiliated and Armed Forces-administered colleges, at the official admission portal mbbsbdsadmissions.numspak.edu.pk. Registration opened on 13 October 2026. The regular-fee window closes on 11 November 2026 (by 4:00 PM); late-fee registration stays open until 25 November 2026 (by 4:00 PM).',
          'The application fee is Rs. 8,500 for open-merit seats and Rs. 50,000 for foreign seats; with the late fee these become Rs. 9,500 and Rs. 55,000 respectively. The fee is non-refundable. These dates and fees come from the official NUMS 2026-27 admission notice — verify them on the portal rather than from forwarded screenshots, but do not wait: there is no late fix for a missed registration window.',
          'Eligibility follows the national PMDC frame: at least 60% in FSc Pre-Medical (or equivalent), and the national minimum on the qualifying test is 55% for MBBS and 50% for BDS — for the NUMS 200-mark test that means 110 and 100 marks respectively. The PMDC minimums are only the floor for eligibility; actual NUMS closing merits sit far above them, as the closing-merit section below explains. Confirm the session\'s exact eligibility wording on the NUMS portal before you apply.',
        ],
      },
      {
        heading: 'Which colleges this one process covers',
        paragraphs: [
          'One NUMS registration puts you in the running for the whole NUMS network, which is exactly why the process is so competitive. The network has three tiers. The constituent college is Army Medical College (AMC) Rawalpindi — NUMS\'s own flagship. The affiliated medical colleges include the CMH institutes at Lahore, Multan, Bahawalpur and Kharian, HITEC Institute of Medical Sciences Taxila, Karachi Institute of Medical Sciences (Malir), Quetta Institute of Medical Sciences, and Wah Medical College.',
          'The third tier is the Armed Forces-administered colleges: Bahria University\'s medical and dental colleges in Islamabad and Karachi, Fazaia Medical College Islamabad and Fazaia Ruth Pfau Medical College Karachi, Foundation University Medical College Islamabad, and the NUST School of Health Sciences. This list follows the published 2026-27 admission notice; the exact college lineup and seat split are confirmed in the official NUMS prospectus for the session.',
          'Practical point: this is a single centralized merit process, so your one NUMS aggregate is ranked once across the network — unlike Punjab\'s UHS system, where you list college preferences college-by-college. Read the prospectus on how preferences and categories (open merit vs foreign seats) are handled before you register.',
        ],
      },
      {
        heading: 'The full NUMS 2026-27 schedule',
        paragraphs: [
          'After registration closes, NUMS\'s official 2026-27 calendar runs as follows: the provisional merit list for MBBS and BDS is scheduled for 10 December 2026, the first MBBS selection list for 17 December 2026, and the first BDS selection list for 21 January 2027. Commencement of classes is tentatively scheduled for 15 February 2027 for MBBS and 15 March 2027 for BDS.',
          'The provisional merit list on 10 December deserves your full attention: it is the list where errors in your printed aggregate or category surface, and the window to get them corrected is short. Check it the day it appears. Then track every selection list — merit moves between rounds as candidates above you accept or decline, and borderline students get in on later movement, not on the first list.',
          'Every date above comes from NUMS\'s official 2026-27 admission notice, read in October 2026. Admission calendars can shift on PMDC or university directions; treat each date as scheduled and verify against the official portal as it approaches.',
        ],
      },
      {
        heading: 'Closing merits: the honest note',
        paragraphs: [
          'No 2026-27 NUMS closing merit exists yet — the provisional merit list appears on 10 December 2026, and only published official lists create real cutoffs. Any "predicted" NUMS cutoff number you see before then is a guess dressed as data; we refuse to invent one here, because a guessed number could cost a student their college choice.',
          'What can honestly be said: NUMS publishes no single official cutoff figure, but education guides reporting on published merit lists consistently place recent open-merit closing in the 93–94% neighbourhood — among the highest in Pakistan\'s medical admissions. Treat that as an indicative benchmark, not a promise: cutoffs swing every year with test difficulty, applicant strength and seat counts.',
          'The practical use of that benchmark: set your NUMS test target a point or two above the neighbourhood, run the backwards maths from your actual board marks, and — this matters — keep the MDCAT route alive in parallel. NUMS is a reach for almost everyone; the MDCAT-route colleges are where most successful candidates actually land. The related calculators below run the same 10/40/50 maths for NUMS, KEMU and Dow so you can compare across routes honestly.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the NUMS aggregate formula for 2026?',
        answer: 'Matric 10% + FSc 40% + NUMS Entry Test 50%. Compute it as (Matric ÷ Matric total × 10) + (FSc ÷ FSc total × 40) + (NUMS test ÷ 200 × 50). The 10/40/50 structure matches the national PMDC formula, but the test is NUMS\'s own 200-mark paper — not the MDCAT.',
      },
      {
        question: 'Is the NUMS entry test out of 200 or 180?',
        answer: 'The NUMS entry test is out of 200. Always divide by 200 — dividing a NUMS score by 180 inflates your aggregate by about 4 points and gives you a dangerously optimistic reading of your merit position.',
      },
      {
        question: 'Can I use my MDCAT score for NUMS admission?',
        answer: 'No. NUMS requires its own 200-mark entry test; MDCAT scores cannot be used for NUMS, and NUMS test scores cannot be used for MDCAT-route colleges like UHS Punjab or KMU. The two aggregates are completely separate numbers.',
      },
      {
        question: 'Can I apply to both NUMS and UHS Punjab?',
        answer: 'Yes — they are separate processes with separate registrations, tests and merit lists. Compute both aggregates independently: NUMS uses (Matric × 10) + (FSc × 40) + (NUMS test ÷ 200 × 50), while UHS uses the same structure with the MDCAT ÷ 180. Never blend the two scores.',
      },
      {
        question: 'What is the last date for NUMS MBBS/BDS registration 2026?',
        answer: 'For session 2026-27, regular-fee registration closes on 11 November 2026 (by 4:00 PM) and late-fee registration stays open until 25 November 2026, through mbbsbdsadmissions.numspak.edu.pk. The fee is non-refundable.',
      },
      {
        question: 'How much is the NUMS application fee?',
        answer: 'Rs. 8,500 for open-merit seats and Rs. 50,000 for foreign seats, rising to Rs. 9,500 and Rs. 55,000 with the late fee. The fee is non-refundable.',
      },
      {
        question: 'When is the NUMS merit list for 2026-27 published?',
        answer: 'The provisional merit list for MBBS and BDS is scheduled for 10 December 2026, the first MBBS selection list for 17 December 2026, and the first BDS selection list for 21 January 2027. Check the provisional list the day it appears — that is your window to correct any aggregate error.',
      },
      {
        question: 'What aggregate is safe for NUMS MBBS?',
        answer: 'NUMS publishes no official cutoff, but reported recent open-merit closings sit in the 93–94% neighbourhood — among Pakistan\'s highest. Set your target a point or two above that benchmark and run the backwards maths from your actual board marks to find the NUMS test score you need.',
      },
    ],
    relatedCalculators: ['nums', 'kemu', 'duhs'],
  },
  {
    slug: 'how-to-calculate-duhs-aggregate',
    image: '/blog/how-to-calculate-duhs-aggregate.svg',
    imageAlt: 'DUHS aggregate 2026 guide: SSC 10%, HSSC 40%, MDCAT 50% (out of 180) formula for Dow University MBBS/BDS merit, Sindh deadline 26 October 2026',
    title: 'How to Calculate DUHS Aggregate 2026: Dow University MBBS/BDS Merit Guide',
    description:
      'Calculate your DUHS aggregate for 2026-27 with the official formula (SSC 10% + HSSC 40% + MDCAT 50%, MDCAT out of 180), a worked example, the 26 October Sindh deadline, eligibility, processing fee and merit-list dates — all verified.',
    category: 'Guides',
    date: 'October 2026',
    readTime: '8 min read',
    intro:
      'For generations of Sindh students, Dow Medical College has been the dream — and it admits through Dow University of Health Sciences (DUHS), Karachi. If Karachi is your domicile\'s processing zone, your DUHS aggregate is the number that decides whether Dow is in reach. The good news: DUHS uses the national PMDC weight structure — 10% Matric, 40% Inter, 50% MDCAT. The urgent news: Sindh\'s 2026-27 admission process closes on 26 October 2026, and Sindh still takes physical application files, not just an online form. This guide gives you DUHS\'s official formula, works through a real calculation, and lays out every verified deadline, eligibility rule and fee — because in Sindh, a perfect aggregate means nothing if the file never reaches the right courier center.',
    sections: [
      {
        heading: 'The DUHS aggregate formula (2026-27)',
        paragraphs: [
          'DUHS follows the national PMDC weight structure, published in the official admission prospectus: your SSC (Matric or equivalent) counts 10%, your HSSC (Inter Pre-Medical or equivalent) counts 40%, and the MDCAT counts 50%. This 10/40/50 split is the same national standard UHS Punjab and KMU use for MDCAT-route admissions.',
          'The formula is: Aggregate = (SSC obtained ÷ SSC total × 10) + (HSSC obtained ÷ HSSC total × 40) + (MDCAT obtained ÷ 180 × 50). One detail first: for Sindh, the qualifying MDCAT is the one conducted by IBA Sukkur — scores from 2024, 2025 or 2026 all count for this cycle — and it is scored out of 180 MCQs. Divide by 180, never by 200.',
          'Half your merit comes from a single test. The arithmetic in the next section shows exactly what that means in practice.',
        ],
      },
      {
        heading: 'Worked example: a real calculation',
        paragraphs: [
          'Take a student with 1050 out of 1100 in Matric, 1000 out of 1100 in Inter, and 150 out of 180 in the MDCAT. Convert each part to its weighted contribution. Matric: 1050 ÷ 1100 × 10 = 9.5455. Inter: 1000 ÷ 1100 × 40 = 36.3636. MDCAT: 150 ÷ 180 × 50 = 41.6667.',
          'Add them: 9.5455 + 36.3636 + 41.6667 = 87.5758%. That is the final DUHS aggregate. Keep full precision through the whole calculation and round only at the end — Sindh\'s merit lists rank to several decimal places, and a few hundredths of a point can separate dozens of candidates around the cutoff.',
          'Notice where the leverage is: every single MDCAT mark is worth 0.2778% of your aggregate (50 ÷ 180). Ten MDCAT marks move the total by 2.78 full points. Compare that with board marks: ten extra Inter marks add about 0.36% (40 ÷ 1100), and ten extra Matric marks add about 0.09% (10 ÷ 1100). One MDCAT mark is worth roughly 7.6 Inter marks and more than 30 Matric marks. The test column is where DUHS merit is won and lost.',
        ],
      },
      {
        heading: 'Run the formula backwards to set your target',
        paragraphs: [
          'The formula works in reverse, and this is how serious Dow aspirants plan. Suppose your target is a 90% aggregate, with 1050 out of 1100 in Matric (contributing 9.5455) and 1000 out of 1100 in Inter (contributing 36.3636). Your boards give you 45.9091 combined, so the MDCAT must supply the remaining 44.0909.',
          'That means your MDCAT score must be 44.0909 ÷ 50 × 180 = about 159 out of 180. Knowing the exact number turns a vague goal like "do well in the MDCAT" into a concrete, testable target — and it tells you honestly whether your target is reachable from your board marks at all. If the backwards maths says you need 170+ and your practice tests are sitting at 150, your honest options are: a serious jump in test preparation, or parallel applications through routes where your profile fits differently. Decide that this week — the Sindh deadline is 26 October, not December.',
        ],
      },
      {
        heading: 'The deadline you cannot miss (26 October 2026)',
        paragraphs: [
          'Sindh\'s 2026-27 public-sector MBBS/BDS admissions run through three processing universities, assigned by domicile district: JSMU Karachi for Karachi-domicile districts, SMBBMU Larkana and LUMHS Jamshoro for their zones. You file with the processing university your domicile district is tagged to — not with DUHS directly.',
          'The critical detail, and the one that sinks students every year: Sindh requires physical application files. You fill the form from the processing university\'s website and submit the file at designated Leopard Courier Service centers — separate forms and separate receipts for MBBS and BDS. The last date for submission is 26 October 2026. An online-only submission is not enough.',
          'Prepare the file now: domicile/PRC of the tagged district, Matric and Inter documents, the MDCAT result, photographs, and the processing fee of Rs. 3,500 per program (inclusive of courier charges — separate for MBBS and BDS). Do not discover on 25 October that your domicile certificate has a spelling error — corrections take days you no longer have.',
        ],
      },
      {
        heading: 'Eligibility: the verified rules',
        paragraphs: [
          'The official 2026-27 frame, from the admission prospectus: at least 60% in FSc Pre-Medical or equivalent (660 out of 1100, unadjusted — grace marks do not count), plus a valid MDCAT from 2024, 2025 or 2026 conducted by IBA Sukkur, with at least 55% (99 out of 180) for MBBS and at least 50% (90 out of 180) for BDS. You also need the Sindh domicile/PRC of your tagged district.',
          'A warning about third-party pages: some education portals quote a 65% FSc minimum for Sindh, but both official sources — the prospectus and the processing university\'s admissions page — say 60%. Trust the official figure, and confirm the session\'s exact eligibility wording on your processing university\'s website rather than from forwarded screenshots.',
          'The PMDC minimums are only the floor for eligibility; actual closing merits for Dow Medical College sit far above them, as the closing-merit section below explains.',
        ],
      },
      {
        heading: 'The 2026-27 merit-list dates (official)',
        paragraphs: [
          'The official schedule published with the 2026-27 admission cycle is unusually fast: the MBBS provisional merit list is due on 2 November 2026, with objections accepted 2–4 November, and the MBBS final merit list on 6 November 2026. For BDS: the provisional list on 11 November, objections 11–12 November, and the final list on 14 November 2026. Interviews and the start of classes are announced by each processing university.',
          'The provisional list on 2 November deserves your full attention: it is the list where errors in your printed aggregate, category or domicile tag surface, and the objection window is only two days. Check it the day it appears — a correction filed on 5 November is a correction refused.',
          'These dates come from the official 2026-27 admission schedule read in October 2026. Admission calendars can shift on PMDC or university directions; treat each date as scheduled and verify against your processing university\'s website as it approaches.',
        ],
      },
      {
        heading: 'Closing merit: the honest note',
        paragraphs: [
          'No 2026-27 Sindh closing merit exists yet — the first provisional list appears on 2 November 2026, and only published official lists create real cutoffs. Any "predicted Dow cutoff" you see before then is a guess dressed as data; we refuse to invent one here, because a guessed number could cost a student their college choice.',
          'What can honestly be said: Dow Medical College consistently closes among the highest in Sindh\'s public sector. Secondary sources report recent open-merit closings around 87.1–87.7% — but neither figure comes from an official DUHS or processing-university publication, so treat the range as indicative from single sources, not as an official cutoff. Verify against the published merit lists.',
          'The practical use of that benchmark: set your target a point or two above the indicative range, run the backwards maths from your actual board marks, and get your physical file to the courier center well before 26 October. An aggregate above the benchmark still needs the file in the right hands.',
        ],
      },
      {
        heading: 'Four mistakes that cost students Dow every year',
        paragraphs: [
          'First, dividing the MDCAT by the wrong total — for the Sindh/PMDC MDCAT the denominator is 180, not 200. The 200-mark total belongs to NUMS\'s separate entry test; plugging it into the DUHS formula produces a meaningless number.',
          'Second, filing with the wrong processing university. Your domicile district decides whether your file goes to JSMU, SMBBMU or LUMHS — file with the wrong body and your application is dead on arrival.',
          'Third, submitting online and skipping the physical file. Sindh\'s 2026-27 process needs the courier-center file by 26 October, with separate forms, receipts and Rs. 3,500 fees for MBBS and BDS. Fourth, using last year\'s dates or a third-party site\'s 65% FSc figure — the official 60% minimum and the 26 October deadline are this cycle\'s figures.',
          'The related calculators below run the same 10/40/50 maths for DUHS, KMU and NUMS, so you can compare across routes honestly — remembering that the MDCAT and NUMS numbers can never be blended.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the DUHS aggregate formula for 2026?',
        answer: 'SSC 10% + HSSC 40% + MDCAT 50%. Compute it as (Matric ÷ Matric total × 10) + (Inter ÷ Inter total × 40) + (MDCAT ÷ 180 × 50). This is the national PMDC weight structure in the official admission prospectus; the qualifying MDCAT (IBA Sukkur, 2024/2025/2026) is scored out of 180.',
      },
      {
        question: 'Is the MDCAT out of 180 or 200 for DUHS?',
        answer: 'Out of 180 — always divide by 180 for DUHS and every other MDCAT-route college. The 200-mark total belongs to NUMS\'s separate entry test. Mixing the denominators is the single most common calculation error.',
      },
      {
        question: 'What is the last date for Sindh MBBS/BDS admissions 2026?',
        answer: 'For 2026-27, physical application files must be submitted at the designated Leopard Courier Service centers by 26 October 2026, filed with the processing university your domicile district is tagged to (JSMU Karachi, SMBBMU Larkana, or LUMHS Jamshoro). Online submission alone is not enough.',
      },
      {
        question: 'How much is the Sindh MBBS/BDS application fee?',
        answer: 'Rs. 3,500 per program, inclusive of courier charges, paid at the designated Leopard Courier Service centers. MBBS and BDS need separate forms, separate receipts, and separate fees.',
      },
      {
        question: 'What FSc percentage is required for DUHS admission?',
        answer: 'At least 60% in FSc Pre-Medical or equivalent (660/1100, unadjusted) — the official 2026-27 figure. Some third-party sites quote 65%, but both official sources say 60%. That is only the eligibility floor; actual Dow closing merits sit far above it.',
      },
      {
        question: 'Do I apply to DUHS directly or through JSMU?',
        answer: 'Through the centralized Sindh process: your domicile district is tagged to a processing university — JSMU Karachi, SMBBMU Larkana, or LUMHS Jamshoro — and you file with that body, including the physical file at the designated courier centers.',
      },
      {
        question: 'When are the Sindh merit lists for 2026-27 published?',
        answer: 'Per the official 2026-27 schedule: MBBS provisional list 2 November 2026 (objections 2–4 Nov, final list 6 Nov); BDS provisional list 11 November (objections 11–12 Nov, final list 14 Nov). Check the provisional list the day it appears — the objection window is only two days.',
      },
      {
        question: 'What aggregate is safe for Dow Medical College MBBS?',
        answer: 'No official 2026-27 cutoff exists yet. Secondary sources report recent closings around 87.1–87.7%, but neither figure is from an official publication. Set your target a point or two above that indicative range and run the backwards maths from your actual board marks to find the MDCAT score you need.',
      },
    ],
    relatedCalculators: ['duhs', 'kemu', 'nums'],
  },
  {
    slug: 'how-to-calculate-szabmu-aggregate',
    image: '/blog/how-to-calculate-szabmu-aggregate.svg',
    imageAlt: 'SZABMU aggregate formula 2026 — official 10/40/50 weight illustration with federal Islamabad motif',
    title: 'How to Calculate SZABMU Aggregate 2026: Islamabad Federal Colleges MBBS/BDS Merit Guide',
    description:
      'The official SZABMU aggregate formula for 2026-27 (SSC 10% + HSSC 40% + MDCAT 50%, test out of 180): worked example, the three federal colleges, the 30 October 2026 deadline, Rs 3,000 fee, eligibility and preference rules — no invented numbers.',
    category: 'Guides',
    date: 'October 2026',
    readTime: '8 min read',
    intro:
      'Shaheed Zulfiqar Ali Bhutto Medical University (SZABMU), Islamabad, runs admissions for the federal capital\'s public medical and dental colleges — and the online application window closes on 30 October 2026, so the clock is genuinely ticking. Your rank in this process comes from a single aggregate number: SSC 10% + HSSC 40% + MDCAT 50%. This guide gives you the official formula, works through a full example, explains the three colleges and the quota system, walks through the portal application, and states the honesty line up front: the 2026-27 merit lists have not been published, so no closing-merit numbers appear below — only verified, current-cycle facts.',
    sections: [
      {
        heading: 'The official SZABMU aggregate formula (2026-27)',
        paragraphs: [
          'SZABMU uses the national PMDC merit weightage for its MBBS and BDS admissions: Aggregate = (SSC obtained ÷ SSC total × 10) + (HSSC obtained ÷ HSSC total × 40) + (MDCAT obtained ÷ MDCAT total × 50). Half of your merit comes from the MDCAT — a single test — while your two board results together supply the other half. The formula is printed in the university\'s admission instructions, and it matches what UHS and KMU use, so one calculation serves all three bodies.',
          'The MDCAT total that goes into the divisor is the total of the session you sat. For the current cycle the test is scored out of 180 marks — dividing by 200, the total of older sessions, under-reports your aggregate by several percentage points, the single most common calculation error every year. SZABMU accepts valid MDCAT scores from 2024, 2025, or 2026, but only if the test was conducted by SZABMU, UHS, KMU, BUMHS, or IBA Sukkur — a score from any other body does not count.',
          'Two minimums act as eligibility floors, not targets: at least 55% in the MDCAT for MBBS (99 out of 180) and at least 50% for BDS (90 out of 180). Clearing them only lets you apply; actual admissions close far above them, as the closing-merit section below explains.',
        ],
      },
      {
        heading: 'The three colleges you are competing for',
        paragraphs: [
          'SZABMU\'s centralized process covers three institutions with 250 seats in total: Federal Medical College, Islamabad — MBBS, 100 seats; Shaikh Khalifa Bin Zayed Al-Nahyan Medical and Dental College, Lahore — MBBS, 100 seats; and the School of Dentistry, Islamabad — BDS, 50 seats. Yes, one of them is in Lahore: SKZMDC falls under SZABMU\'s admission process despite the university\'s Islamabad name, so Lahore-based applicants should take it seriously.',
          'Seats are split between open merit and quotas. Every Pakistani citizen — including AJK and Gilgit-Baltistan — competes for the open-merit seats and is also considered under their own domicile quota. The quota categories include Islamabad Capital Territory, Punjab, Sindh (Rural), Sindh (Urban), Khyber Pakhtunkhwa, Balochistan, Gilgit-Baltistan, Ex-FATA, AJK, Federal Government Employees, disabled students, and foreign seats (at SKZMDC). The exact seat split per quota is published in the university\'s revised seats allocation on szabmu.edu.pk — check the official portal for your category\'s numbers rather than relying on any third-party table.',
          'The practical consequence: your domicile decides which quota line you are ranked in, and the closing merit of your quota can differ sharply from open merit. Keep your domicile certificate and proof of residence or education in that region ready, because quota claims need documentary proof — and category certificates (disability board certificate, parent\'s federal-government employment certificate) where applicable.',
        ],
      },
      {
        heading: 'Worked example, step by step',
        paragraphs: [
          'Take a student with 1000/1100 in SSC, 950/1100 in HSSC, and 160/180 in the MDCAT. Convert each part to its weighted contribution. SSC: 1000 ÷ 1100 × 10 = 9.0909. HSSC: 950 ÷ 1100 × 40 = 34.5455. MDCAT: 160 ÷ 180 × 50 = 44.4444.',
          'Add them: 9.0909 + 34.5455 + 44.4444 = 88.0808%, so about 88.08%. The structure is visible in the arithmetic: the HSSC column is the biggest board component, but the MDCAT column alone is larger than both board columns combined — which is why the test, not the boards, decides most admission outcomes in this formula.',
          'One bookkeeping rule that protects you: keep full precision through the whole calculation and round only the final figure. Merit lists are ranked at fine decimal precision, and rounding each part to one decimal before adding can shift your result enough to misrank you by positions that matter.',
        ],
      },
      {
        heading: 'What each extra mark is actually worth',
        paragraphs: [
          'Because the weights differ, not all marks are equal. One extra MDCAT mark adds about 0.278% to your aggregate (1 ÷ 180 × 50). One extra HSSC mark adds about 0.036% (1 ÷ 1100 × 40). One extra SSC mark adds about 0.009% (1 ÷ 1100 × 10). A single MDCAT mark is worth roughly eight HSSC marks and thirty SSC marks — that is the entire admission game in one sentence.',
          'You can also run the formula backwards to set a concrete target. Suppose you want a 90% aggregate with 1000/1100 in SSC (9.0909) and 950/1100 in HSSC (34.5455) — your boards contribute 43.6364, so the MDCAT must supply the remaining 46.3636. That means 46.3636 ÷ 50 × 180 ≈ 167 marks out of 180. "Score 167" is a testable target; "do well in MDCAT" is a wish.',
          'There is no negative marking in the current MDCAT, so every question is worth attempting — a blank and a wrong answer both score zero, while a guess can add the full mark. With each mark worth roughly 0.28% of your aggregate, even a handful of correct guesses can move your merit position.',
        ],
      },
      {
        heading: 'Eligibility: the 60% line and the three-year MDCAT window',
        paragraphs: [
          'To apply you need at least 60% in HSSC Pre-Medical or equivalent (660/1100, unadjusted) — Biology and Chemistry plus Physics or Mathematics — and IBCC attestation of your certificates is mandatory at the time of admission, so start that process early if your equivalence is not already attested.',
          'The three-year MDCAT validity window is the friendliest part of this process: a valid 2024 or 2025 score from SZABMU, UHS, KMU, BUMHS, or IBA Sukkur counts exactly like a 2026 score, provided it meets the 55%-MBBS / 50%-BDS minimums. If you are reusing an older score, divide by that session\'s MDCAT total, not the current one — the total must match the session you sat.',
          'Remember the distinction the whole guide keeps making: eligibility is a floor. The 60% FSc line and the MDCAT minimums only open the application portal to you. Admission is decided by the closing merit of your college and quota, which the next section explains honestly.',
        ],
      },
      {
        heading: 'How to apply on the official portal (deadline 30 October 2026)',
        paragraphs: [
          'The entire application is online at the university\'s admission portal (admission.szabmu.edu.pk) — no hard copy is submitted anywhere, and registration for 2026-27 opened on 11 October. The portal\'s own instructions lay out the steps in order:',
        ],
        list: [
          'Register as a Local or Foreign applicant with a valid email, password, and CNIC details (date of issue; a Form-B/CRC number is accepted if you do not have a CNIC yet).',
          'Log in and add your personal information, MDCAT information, and academic information, then upload scanned original documents in JPEG/JPG format within the portal\'s size limit.',
          'Apply SEPARATELY for MBBS and BDS — then print the processing-fee challan: Rs 3,000 per programme, non-refundable and non-adjustable (both programmes cost Rs 6,000), paid and uploaded separately.',
          'Give your order of preference for the public-sector medical and dental colleges — a college you leave off your list will not be considered for your admission, full stop.',
          'Submit before 30 October 2026. A submitted application cannot be changed by the applicant — so review every field before the final click.',
        ],
      },
      {
        heading: 'The preference-list rules that decide your seat',
        paragraphs: [
          'Your preference order is not decoration — it is the mechanism that assigns your college. The system considers you for colleges in the order you list them, and a college left off your list cannot admit you later, even if your aggregate would have cleared its cutoff. Rank your colleges in your true order of desire, and do not include any college you would refuse to join.',
          'Because the submitted form cannot be edited, triple-check three things before submitting: your MDCAT roll/session details (one wrong digit misreports your test component), your preference order, and your uploaded documents and fee challan. A second application for a programme you missed — MBBS vs BDS — is a separate form with a separate fee, and it is easy to forget in the last-day rush.',
          'Prepare your documents before the deadline week, not during it: a blue-background passport photo, valid CNIC/CRC/NICOP, SSC and HSSC certificates and transcripts (or IBCC equivalence), domicile certificate, proof of residence or education in your domicile region, your MDCAT result certificate, and the paid fee challan. Category applicants add the disability certificate or the parent\'s federal-government employment certificate.',
        ],
      },
      {
        heading: 'Closing merits: the honest line',
        paragraphs: [
          'Here is what we will not do: invent a closing-merit number for 2026. The 2026-27 merit lists have not been published yet — the application window is still open — so any "expected cutoff" you see online right now is speculation. A guessed number does not help you; it misleads you into either false comfort or false panic.',
          'What you can do instead is practical. First, compute your aggregate exactly with the formula above — that is the one number fully in your control. Second, submit the application before the 30 October deadline; merit strategy is worthless without an application in the system. Third, once lists appear, check them only on the official SZABMU portal, and compare your aggregate against your own quota column, not someone else\'s open-merit screenshot. We publish verified closing merits on the KEMU, DUHS, and NUMS calculator pages linked below — the formula mechanics are identical, so those pages show you how to read a closing-merit line once your own lists are out.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the official SZABMU aggregate formula for 2026?',
        answer: 'SSC 10% + HSSC 40% + MDCAT 50%. Compute it as (SSC ÷ SSC total × 10) + (HSSC ÷ HSSC total × 40) + (MDCAT ÷ MDCAT total × 50). This is the PMDC national weightage, identical to the UHS and KMU formulas.',
      },
      {
        question: 'Is the MDCAT out of 180 or 200 for SZABMU?',
        answer: 'Out of 180 for the current cycle. Divide your MDCAT score by the total of the session you sat — dividing a current-session 180-mark score by 200 under-reports your aggregate by several percentage points.',
      },
      {
        question: 'Which MDCAT sessions does SZABMU accept?',
        answer: 'Valid scores from 2024, 2025, or 2026, conducted by SZABMU, UHS, KMU, BUMHS, or IBA Sukkur, with at least 55% for MBBS and 50% for BDS. Scores from other bodies do not count.',
      },
      {
        question: 'What is the last date to apply for SZABMU MBBS/BDS 2026-27?',
        answer: '30 October 2026, through the online admission portal only. Registration opened on 11 October. Do not plan for the last day — the process is fully online and a submitted form cannot be edited.',
      },
      {
        question: 'How much is the SZABMU application fee?',
        answer: 'Rs 3,000 per programme — non-refundable and non-adjustable. MBBS and BDS need separate applications, so applying for both costs Rs 6,000, with a separate paid challan uploaded for each.',
      },
      {
        question: 'Can I change my SZABMU application after submitting it?',
        answer: 'No. The portal states clearly that a submitted application cannot be changed by the applicant. Review your MDCAT details, preference order, documents, and fee challan before the final click.',
      },
      {
        question: 'Which colleges are covered by the SZABMU admission process?',
        answer: 'Three: Federal Medical College Islamabad (MBBS, 100 seats), Shaikh Khalifa Bin Zayed Al-Nahyan Medical and Dental College Lahore (MBBS, 100 seats), and the School of Dentistry Islamabad (BDS, 50 seats).',
      },
      {
        question: 'Do I need an Islamabad domicile to apply to SZABMU?',
        answer: 'No. All Pakistani citizens — including AJK and Gilgit-Baltistan — compete for open-merit seats and are also considered under their own domicile quota (ICT, Punjab, Sindh Rural/Urban, KP, Balochistan, GB, Ex-FATA, AJK, FGE, disabled, foreign). Your domicile decides your quota line, not your eligibility to apply.',
      },
    ],
    relatedCalculators: ['kemu', 'duhs', 'nums'],
  },
];

// Combined export used by pages and sitemap tooling.
export const ALL_BLOG_POSTS: BlogPost[] = [...BLOG_POSTS, ...BLOG_POSTS_PART2, ...BLOG_POSTS_PART3];

export function getBlogPost(slug: string | undefined): BlogPost | undefined {
  return ALL_BLOG_POSTS.find((p) => p.slug === slug);
}
