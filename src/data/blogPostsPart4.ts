import type { BlogPost } from './blogPosts';

export const BLOG_POSTS_PART4: BlogPost[] = [
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
  {
    slug: 'how-to-apply-uhs-mbbs-2026',
    image: '/blog/how-to-apply-uhs-mbbs-2026.svg',
    imageAlt: 'UHS MBBS 2026 application guide — step-by-step portal checklist illustration',
    title: 'How to Apply for MBBS in Punjab 2026: UHS Online Application Guide (Step-by-Step)',
    description:
      'Step-by-step UHS MBBS 2026-27 online application guide: the publicmbbs.uhs.edu.pk portal, Rs. 2,000 fee, required documents, seat categories, and preference-list strategy — deadline 30 October 2026, 5:00 PM.',
    category: 'Guides',
    date: 'October 2026',
    readTime: '8 min read',
    intro:
      'The UHS MBBS application window for the 2026-27 session is open right now — and it closes on 30 October 2026 at 5:00 PM sharp. There is no late application, no physical form, no second chance: every public-sector MBBS seat in Punjab is decided through the online portal at publicmbbs.uhs.edu.pk, and a missed deadline ends the season before it starts. This guide walks you through the whole process step by step — the documents to keep ready, the portal screens in order, the Rs. 2,000 fee payment, the seat categories, and the preference-list strategy that decides which college you actually land in. Everything here is checked against the official UHS admission notice and the 2026-27 admission policy; where a detail can vary, we say so plainly.',
    sections: [
      {
        heading: 'The deadline is the whole story',
        paragraphs: [
          'Online applications for MBBS opened on 16 October 2026 at 9:00 AM and close on 30 October 2026 at 5:00 PM. That window is the entire admission: UHS runs centralized admissions for all public-sector medical colleges of Punjab, so one application on one portal covers every college — there is no separate form per college.',
          'Two deadline rules matter more than anything else in this guide. First, you can edit your submitted application any number of times until the deadline — nothing is final while the window is open. Second, after the deadline your college preferences lock permanently: the number and order of your preferences cannot be changed, and a college you left off your list cannot be considered for you later. Apply early, but finalize your preference order before the 30th.',
          'Do not aim for the last day. Portals slow down, banks close, and challan uploads fail at the worst moment. Students who apply in the final hours are one power outage away from losing a year.',
        ],
      },
      {
        heading: 'Before you touch the portal: the 10-minute checklist',
        paragraphs: [
          'Gather these before you register — hunting for a document mid-application is how mistakes happen:',
        ],
        list: [
          'Your CNIC or B-Form, and one parent or guardian\u2019s CNIC — names must match across documents.',
          'Punjab domicile certificate (required for UHS public-sector open merit).',
          'Matric and FSc (HSSC) result cards. If you passed through a board, the cards should be board-attested; pass-out candidates are typically not asked for IBCC attestation at application time, but must arrange it when joining a college.',
          'Your MDCAT result — remember, MDCAT scores stay valid for up to three years, and the portal lets you pick which session\u2019s score to use. Choose the one that gives the higher aggregate.',
          'An active email address and mobile number you actually check — verification codes and confirmations go here.',
          'Clear scanned copies of every document in JPG or PNG format. Keep each file small and legible — the portal states the exact size limit, and keeping files well under 1 MB avoids upload rejections.',
          'Quota documents if they apply to you: disability certificate, under-developed-district education verification, Cholistan certificate, or Iqama / Green Card / foreign passport for overseas seats.',
        ],
      },
      {
        heading: 'Step by step on publicmbbs.uhs.edu.pk',
        paragraphs: [
          'The whole application is one online flow. Here are the steps in order:',
        ],
        list: [
          'Read the prospectus first. The UHS prospectus and the Punjab admission policy on uhs.edu.pk are the authority — this guide explains them, but the prospectus wins any disagreement.',
          'Open the MBBS portal (publicmbbs.uhs.edu.pk) and register with your name, father\u2019s or guardian\u2019s name, email, CNIC/B-Form/passport number and a password, then verify your email with the code sent to it.',
          'Use ONE identity only. A second application under a different CNIC or email gets you disqualified.',
          'Choose your seat category after logging in: open merit, reciprocal seats, and quota categories such as disability, Cholistan, under-developed districts and overseas seats. Tick every category you are genuinely eligible for.',
          'Enter your details: personal information first, then SSC and HSSC marks with subjects and passing years, then your MDCAT details. Double-check every digit — this is your merit.',
          'Rank every college in your preference list, in your true order of desire. The portal requires you to select all colleges for your category. Note: switching your seat category resets the preference list, so decide your categories before ranking.',
          'Upload your documents as clear JPG or PNG scans.',
          'Read and accept the undertaking, then generate the fee challan.',
          'Pay the challan (see the fee section below) and upload the paid receipt on the portal within the prescribed time.',
          'Review everything, print a copy for your records, and hit final submission. A confirmation goes to your email. If your dashboard does not show the application as submitted, it is not submitted.',
        ],
      },
      {
        heading: 'The Rs. 2,000 fee: pay it right',
        paragraphs: [
          'The application processing fee is Rs. 2,000, non-refundable and non-transferable. Generate the challan from inside the portal — do not pay against any challan from another source.',
          'Pay at a Bank of Punjab or National Bank of Pakistan branch, or through a 1Bill invoice. One specific warning from the admission notice: the 1Bill top-up option must NOT be used for this fee — payments made through top-up are not accepted. After paying, upload the paid challan or receipt on the portal within the prescribed time; an unpaid application is an incomplete application.',
          'Keep the physical receipt and a photo of it until admissions are fully over. If the portal ever shows a payment mismatch, the receipt is your proof.',
        ],
      },
      {
        heading: 'Which seat categories to tick',
        paragraphs: [
          'Beyond open merit, the portal offers several categories. Reciprocal seats are seats exchanged between provinces — tick them if the portal offers them to you. The under-developed-districts quota exists for candidates from districts the policy lists as under-developed; the portal shows the eligible district list, so tick this only if your district appears there. Disability, Cholistan and overseas categories each need their own supporting documents (disability certificate, Cholistan certificate, or Iqama / Green Card / foreign passport).',
          'The practical rule: tick every category you are genuinely eligible for, because each category is a separate merit line — a quota seat can admit at a lower aggregate than open merit. But never tick a category you cannot document; an unverifiable claim risks the whole application.',
        ],
      },
      {
        heading: 'Ranking your colleges: the preference list that locks',
        paragraphs: [
          'Your preference list is the second most important thing you submit after your marks. The system offers you seats by walking down YOUR stated order: it tries your first choice, then your second, and so on, as long as your aggregate clears each college\u2019s merit in each round. Rank colleges in your true order of desire — not in the order you think you can "afford."',
          'Why: if you rank a lower-choice college above the one you actually want, and your aggregate clears the lower one, the system gives you the lower one. Students lose their dream college to their own cautious ordering every single year. Set the order by honest desire; the merit lists, not your fear, decide where you land.',
          'And remember the lock: after 30 October at 5:00 PM, the number and order of your preferences cannot be changed. A college left off the list is a college that can never offer you a seat, even in the last upgradation round.',
        ],
      },
      {
        heading: 'Seven mistakes that get applications rejected',
        paragraphs: [
          'Every year UHS rejects applications for the same avoidable reasons. Do not be one of them:',
        ],
        list: [
          'Missing the 30 October 5:00 PM deadline — there is no late window.',
          'Paying the Rs. 2,000 fee through the 1Bill top-up option, which the notice explicitly disallows.',
          'Uploading blurry or oversized document scans that the portal cannot read.',
          'Creating two applications under different identities — automatic disqualification.',
          'Ranking colleges by "safe" order instead of true preference, then losing the better college.',
          'Skipping final submission — filling the form without the final click means no application exists.',
          'Using an email you never check, then missing the confirmation and every later update.',
        ],
      },
      {
        heading: 'What happens after you submit',
        paragraphs: [
          'The portal phase ends, and the merit phase begins. Per the official 2026-27 schedule: the provisional order of merit is published on 13 November 2026 — check your aggregate and details on it carefully, because this list has an objection window for corrections. The final order of merit follows on 16 November.',
          'College-wise selection lists then assign seats: the first selection list on 17 November, the second selection/upgradation list on 23 November, and the third on 1 December. Merit keeps dropping across rounds as seats cascade down, so missing the first list is normal for many eventually admitted students — keep checking every list. MBBS classes are scheduled to commence on 1 February 2027.',
          'BDS runs on a separate, later calendar on its own portal (publicbds.uhs.edu.pk): applications 15–30 December 2026, merit orders on 6 and 9 January 2027, selection lists from 11 January, classes on 1 March 2027. UHS notes the timetable stays subject to PMDC and Punjab government directions, so treat dates as scheduled rather than guaranteed.',
        ],
      },
      {
        heading: 'Page notes: what is verified, and where the portal wins',
        paragraphs: [
          'Verified against the official UHS admission notice and the Punjab 2026-27 admission policy: the application window (16–30 October 2026, closing 5:00 PM), the Rs. 2,000 non-refundable fee, the Bank of Punjab payment route with the 1Bill top-up exclusion, the preference-lock rule after the deadline, the merit-list schedule, and the 10/40/50 aggregate formula.',
          'The live portal is the final authority on screen-level details — exact upload size limits, the current eligible-district list for the under-developed quota, and any session-specific instruction the notice adds. If anything on the portal looks different from this guide, follow the portal and the prospectus.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the last date to apply for UHS MBBS 2026?',
        answer: '30 October 2026 at 5:00 PM. Applications opened 16 October at 9:00 AM on publicmbbs.uhs.edu.pk. There is no late application window — a missed deadline ends the season.',
      },
      {
        question: 'What is the UHS MBBS application fee for 2026?',
        answer: 'Rs. 2,000, non-refundable and non-transferable. Pay at a Bank of Punjab or National Bank of Pakistan branch, or through a 1Bill invoice — the 1Bill top-up option is explicitly not accepted. Upload the paid receipt on the portal.',
      },
      {
        question: 'Can I edit my UHS application after submitting it?',
        answer: 'Yes — you can edit your application any number of times until the 30 October deadline. After the deadline, your college preferences lock permanently: neither the number nor the order can be changed.',
      },
      {
        question: 'Which portal do I use — and is BDS on the same one?',
        answer: 'MBBS applications go through publicmbbs.uhs.edu.pk. BDS has its own portal, publicbds.uhs.edu.pk, with a separate later schedule (applications 15–30 December 2026).',
      },
      {
        question: 'What documents do I need for the UHS MBBS application?',
        answer: 'Your CNIC or B-Form, a parent or guardian\u2019s CNIC, Punjab domicile certificate, Matric and FSc result cards, your MDCAT result, and clear JPG/PNG scans of each — plus quota documents (disability, under-developed-district, Cholistan, or overseas proofs) if you claim a quota seat. Check the official prospectus for the final list.',
      },
      {
        question: 'Can I submit two applications to be safe?',
        answer: 'No — never. UHS requires one application per identity, and a second application under a different CNIC or email leads to disqualification.',
      },
      {
        question: 'Do I need to visit UHS in person at any stage?',
        answer: 'No. The entire application — registration, form, documents, fee challan, and submission — is online. Only visit a bank branch (or use 1Bill invoice) to pay the fee, and keep the receipt.',
      },
      {
        question: 'What should I do if my aggregate looks wrong on the provisional merit list?',
        answer: 'The provisional order of merit (13 November 2026) exists exactly for this: check your aggregate and details on it and use the objection window to get errors corrected before the final order of merit on 16 November.',
      },
    ],
    relatedCalculators: ['kemu', 'duhs', 'nums'],
  },
  {
    slug: 'mbbs-vs-bds-2026-which-to-choose',
    image: '/blog/mbbs-vs-bds-2026-which-to-choose.svg',
    imageAlt: 'MBBS vs BDS 2026 comparison illustration: merit, fees and career scope',
    title: 'MBBS vs BDS 2026: Which Should You Choose? (Merit, Fees & Scope)',
    description:
      'MBBS vs BDS in Pakistan for 2026 admissions: how merit works for both under the 10/40/50 formula, verified UHS fees and timelines, an honest career-scope comparison, and a 5-question decision framework.',
    category: 'Comparisons',
    date: 'October 2026',
    readTime: '7 min read',
    intro:
      'Every October, "MBBS ya BDS?" splits thousands of Pakistani households into two camps — and most of the advice flying around is either prestige-talk ("BDS me scope nahi hai") or panic-talk ("jo mil jaye le lo"). The honest answer is less dramatic: neither degree is universally better, but one of them is clearly better for YOUR aggregate, YOUR temperament, and YOUR budget in this admission cycle. This guide compares MBBS and BDS on the facts that matter for 2026 — how merit is actually computed, the verified UHS fees and timelines, and what each career really looks like — and ends with a decision framework you can use today.',
    sections: [
      {
        heading: 'The two degrees, side by side',
        paragraphs: [
          'MBBS is a 5-year degree followed by a 1-year house job, after which the PMDC registers you as a medical practitioner. The standard road after that is long: specialization through FCPS, MS or MD takes another 4 to 6 years, and the well-trodden abroad routes (USMLE, PLAB) each demand years of dedicated preparation. Medicine is a ladder — a long one — and its best rewards sit near the top of it.',
          'BDS is a 4-year degree followed by a 1-year house job, after which the PMDC registers you as a dental practitioner. Postgraduate options exist — MDS and FCPS in dental specialties like orthodontics, operative dentistry and oral & maxillofacial surgery — but here is the structural difference: dentistry is the one medical field where a fresh graduate can realistically open their own clinic and start earning early. The career starts sooner; it just starts in your own chair rather than in a hospital hierarchy.',
        ],
        list: [
          'MBBS: 5 years + 1-year house job → specialization ladder (FCPS/MS/MD) or general practice.',
          'BDS: 4 years + 1-year house job → clinic ownership realistic early, or MDS/FCPS specialization.',
          'Same regulator (PMDC), same house-job requirement, very different career shapes.',
        ],
      },
      {
        heading: 'How merit works for MBBS and BDS in 2026-27',
        paragraphs: [
          'Both programs use the same aggregate formula under the Punjab 2026-27 admission policy: Matric 10% + FSc 40% + MDCAT 50%. Your aggregate is one number — but it enters two completely separate competitions. MBBS and BDS have separate application portals, separate merit lists, and separate timelines, so one aggregate gives you two independent shots.',
          'The MBBS cycle is running right now: applications on publicmbbs.uhs.edu.pk from 16 to 30 October 2026 (closing 5:00 PM), the provisional order of merit on 13 November, the final order on 16 November, and college-wise selection lists on 17 November, 23 November and 1 December. BDS runs later on its own portal, publicbds.uhs.edu.pk: applications 15–30 December 2026, merit orders on 6 and 9 January 2027, selection lists from 11 January, and classes commencing 1 March 2027.',
          'Two things follow. First, the BDS lists publish after the MBBS lists — you will know your MBBS fate before the BDS portal even closes, so you can decide with data instead of panic. Second, on cutoffs: public MBBS seats close at the very top (King Edward touched roughly 94.9% last cycle — see our Punjab closing-merit guide), and public BDS seats close below that. We deliberately publish no 2026-27 BDS cutoff numbers here, because the official lists are not out yet — see the page notes at the end.',
        ],
      },
      {
        heading: 'What it actually costs',
        paragraphs: [
          'Under the 2026-27 policy, public-sector tuition is Rs. 50,000 per year — for both MBBS and BDS. That single fact reshapes the whole debate: a public BDS seat costs a family roughly Rs. 200,000 in total tuition, while a private MBBS seat runs into lakhs per year plus a Rs. 600,000 deposit due within 3 working days of the merit list. The application fee is Rs. 2,000 per program, so applying to both costs Rs. 4,000 — the cheapest insurance in this entire process.',
          'Private colleges set their own fee schedules within PMDC regulation, so always check the individual college prospectus rather than trusting forwarded fee charts on WhatsApp. The financial question to ask is not "MBBS vs BDS" in the abstract — it is "public BDS vs private MBBS", because for thousands of families that is the actual fork in the road.',
        ],
        list: [
          'Public tuition (both programs): Rs. 50,000/year under the 2026-27 policy.',
          'Application fee: Rs. 2,000 per program — apply to both for Rs. 4,000.',
          'Private seat deposit: Rs. 600,000 within 3 working days of the merit list.',
          'Private yearly fees: check each college\'s own prospectus; do not trust forwarded charts.',
        ],
      },
      {
        heading: 'Scope, honestly: both sides',
        paragraphs: [
          'The MBBS case is straightforward: the largest peer network, the most specialization options, regular government medical-officer posts, and abroad routes that thousands have walked before you. The honest costs: competition at every single step, a decade or more before consultant-level earning, and house-job years that are famously punishing. Medicine rewards the climber — someone willing to stay in the system for the long haul.',
          'The BDS case needs its myth cleared first. "BDS me scope nahi hai" is something people say who have never watched a well-run dental clinic. Dentistry rewards the builder: shorter road to independent earning, realistic clinic ownership within a few years of graduation, less saturation at the top specialties, and a growing cosmetic and implant market in every major city. The honest costs: fewer government dental-surgeon posts than MO posts, a real prestige gap in desi drawing-room culture (say it plainly — it exists), and the fact that private practice demands business sense nobody teaches you in dental college.',
        ],
      },
      {
        heading: 'Who should pick which: five questions',
        paragraphs: [
          'Forget "passion" speeches for a minute and answer these five questions on paper. First, the aggregate test: compare your aggregate against last year\'s official closing merits for your target colleges (our merit-list guide shows exactly where each body publishes them). If you sit near last year\'s top public MBBS closings, apply MBBS with BDS as backup. If you sit clearly below them, a public BDS seat is your realistic public-sector shot — and the real decision becomes public BDS vs private MBBS, which is a money question, not a prestige question.',
          'Second, hands or wards? If you love precise, hands-on craft work — the idea of shaping, fixing and building with your hands — dentistry will suit your temperament. If you are drawn to diagnosis, emergency rooms and hospital wards, medicine is your habitat. Third, the timeline test: dentistry starts paying sooner; medicine pays bigger but a decade later. Fourth, the money test, from the previous section. Fifth, the temperament test: the entrepreneur thrives in dentistry; the institution-builder thrives in medicine.',
        ],
        list: [
          'Aggregate near last year\'s top MBBS closings → MBBS first, BDS as genuine backup.',
          'Aggregate clearly below → public BDS is the realistic public seat; weigh it against private MBBS on money.',
          'Hands-on craft lover → BDS. Diagnosis and wards lover → MBBS.',
          'Want to earn sooner → BDS. Willing to study 10+ years → MBBS.',
          'Entrepreneur at heart → dentistry. Ladder-climber → medicine.',
        ],
      },
      {
        heading: 'The smart strategy: apply to both, rank honestly',
        paragraphs: [
          'There is no rule against applying to both programs — they are separate portals, separate applications and separate merit lists. The Rs. 4,000 total fee is trivial next to what a wrong decision costs. Fill the MBBS application before 30 October 2026 (remember: preferences lock permanently after the deadline — a college left off your list can never consider you later), then fill the BDS application in its 15–30 December window.',
          'Rank every preference list by your true preference, not by "safe" ordering — gaming the order only loses you the better college. And stop treating BDS as failure: a public BDS seat at Rs. 50,000 a year beats a forced private MBBS seat financially for most families, and a repeat MDCAT year costs twelve months of your life plus another full preparation cycle. Because the BDS portal closes after the MBBS selection lists, you get to make this call with your actual MBBS result in hand.',
        ],
      },
      {
        heading: 'Page notes: what is verified here, and what is not',
        paragraphs: [
          'Verified against the official UHS admission notice and the Punjab 2026-27 admission policy: the 10/40/50 aggregate formula; the MBBS window (16–30 October 2026, closing 5:00 PM) and the BDS window (15–30 December 2026); the two portals (publicmbbs.uhs.edu.pk and publicbds.uhs.edu.pk); the merit-list and class-commencement dates; the Rs. 2,000 application fee, Rs. 50,000/year public tuition, Rs. 600,000 private-seat deposit, and the preference-lock rule. Degree lengths, house-job requirement and PMDC registration are the standard regulatory structure for both programs.',
          'Deliberately omitted: any 2026-27 closing merit for BDS or college-wise BDS cutoffs — the official lists publish in January 2027, and anything printed before that would be a guess. Career descriptions above are structural (degree shape, registration, specialization routes), not promises about jobs or income. When the official lists publish, check your name and aggregate on them directly — our merit-list guide shows where each admitting body posts its lists.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is BDS easier to get into than MBBS in Punjab?',
        answer: 'Yes, in merit terms: public BDS seats close below public MBBS seats because the applicant pool competing for them is smaller. But "easier" still means a high aggregate — check last year\'s official UHS lists for the exact gap rather than trusting rumors.',
      },
      {
        question: 'Can I apply for both MBBS and BDS in the same year?',
        answer: 'Yes. They are separate applications on separate portals — publicmbbs.uhs.edu.pk (16–30 October 2026) and publicbds.uhs.edu.pk (15–30 December 2026) — each with its own Rs. 2,000 fee and its own merit lists.',
      },
      {
        question: 'What was the BDS closing merit in Punjab last year?',
        answer: 'College-wise BDS closings are published in UHS\'s official merit lists each cycle; the 2026-27 lists come out in January 2027. We do not print cutoff numbers we cannot verify — use our merit-list guide to find the official lists when they publish.',
      },
      {
        question: 'Does BDS have scope in Pakistan?',
        answer: 'Dentistry\'s scope is entrepreneurial: clinic ownership is realistic within a few years of graduation, top specialties are less saturated than medical ones, and cosmetic dentistry is growing. It has fewer government posts than MBBS, so it suits builders more than job-seekers.',
      },
      {
        question: 'Is BDS cheaper than MBBS?',
        answer: 'In the public sector, both cost Rs. 50,000/year under the 2026-27 policy. The real cost gap appears in private colleges — compare each college\'s own prospectus, and remember the Rs. 600,000 private-seat deposit applies under the same policy.',
      },
      {
        question: 'Can a BDS graduate specialize?',
        answer: 'Yes — through MDS or FCPS in dental specialties such as orthodontics, operative dentistry and oral & maxillofacial surgery. Specialization exists in dentistry; the ladder is just shorter and less crowded than the MBBS one.',
      },
      {
        question: 'My aggregate missed MBBS merit — is BDS worth it or should I repeat MDCAT?',
        answer: 'Compare three real options: a public BDS seat (Rs. 50,000/year, earning sooner), a private MBBS seat (heavy fees plus Rs. 600,000 deposit), or a repeat year (twelve months plus another full MDCAT cycle). For most families, public BDS beats both a forced private seat and a repeat year — decide with your actual merit-list result, which you will have before the BDS portal closes.',
      },
      {
        question: 'Do MBBS and BDS use the same aggregate formula?',
        answer: 'Yes — Matric 10% + FSc 40% + MDCAT 50% under the Punjab 2026-27 policy. One aggregate, two separate merit competitions with separate lists and timelines.',
      },
    ],
    relatedCalculators: ['kemu', 'duhs', 'nums'],
  },
  {
    slug: 'private-medical-college-admissions-punjab-2026',
    image: '/blog/private-medical-college-admissions-punjab-2026.svg',
    imageAlt: 'Private medical college admissions Punjab 2026-27 — 4,500 MBBS seats, 6 November deadline, UHS centralized merit',
    title: 'Private Medical College Admissions Punjab 2026-27: UHS Schedule, Merit, Fees & Seats',
    description:
      'Private MBBS admissions Punjab 2026-27: UHS announced the centralized schedule — apply 23 Oct to 6 Nov 2026, first list 18 Nov, 4,500 MBBS seats across 34 colleges, same 10/40/50 merit formula, eligibility floors, the 3-day fee rule and honest fee guidance.',
    category: 'Guides',
    date: 'October 2026',
    readTime: '8 min read',
    intro:
      'On 22 October 2026, the University of Health Sciences (UHS) Lahore announced the admission schedule for private medical and dental colleges in Punjab for the 2026-27 session — and the MBBS application window is open RIGHT NOW (23 October to 6 November 2026). Around 4,500 MBBS seats across 34 private colleges will be filled through one centralized UHS system on the same 10/40/50 merit formula as the public sector. This guide gives you the verified schedule, eligibility floors, the fee rule that forfeits your seat if you miss it, and an honest map of what the official announcements do and do not tell you. No invented cutoffs anywhere: private college-wise closing merits are not published in any verifiable single source, so this page refuses to print guesses.',
    sections: [
      {
        heading: 'The verified private-sector schedule (2026-27)',
        paragraphs: [
          'UHS is conducting private-sector admissions through a centralized system under the Punjab government\u2019s admission policy — one portal, one merit, for every private medical and dental college in the province. For MBBS: online applications opened on 23 October 2026 and close on 6 November 2026, and the first selection list is scheduled for 18 November 2026. For BDS: applications run from 18 December 2026 to 1 January 2027, with the first selection list scheduled for 13 January 2027.',
          'Applications go through two dedicated portals: privatembbs.uhs.edu.pk for MBBS and privatebds.uhs.edu.pk for BDS. All merit and selection lists are published on the UHS website. Note the overlap with the public cycle: the public-sector MBBS first selection list is scheduled for 17 November — one day before the private first list. You may therefore hold a public-sector offer before the private lists even publish, which changes how you plan your deposits.',
          'One standing caution from UHS itself: the admission timetable remains subject to directives from the PMDC and the Punjab government, including changes to the number of selection lists issued. Treat every date as scheduled rather than guaranteed — but never miss the 6 November application deadline, because there is no late fix for it.',
        ],
        list: [
          'Private MBBS: apply 23 Oct – 6 Nov 2026; first selection list 18 Nov 2026.',
          'Private BDS: apply 18 Dec 2026 – 1 Jan 2027; first selection list 13 Jan 2027.',
          'Portals: privatembbs.uhs.edu.pk and privatebds.uhs.edu.pk; lists on uhs.edu.pk.',
          'Centralized system — one application covers all participating private colleges.',
        ],
      },
      {
        heading: 'What is on the table: seats and colleges',
        paragraphs: [
          'The scale of the private sector is what makes this announcement matter: Punjab has 34 private medical colleges offering around 4,500 MBBS seats, plus 18 private dental colleges with 1,100 BDS seats. That is a very large second chance for everyone whose aggregate falls below the public-sector bands — for reference, the public ceiling at King Edward Medical University closed around 94.88% last cycle.',
          'Eligibility is deliberately wide: candidates from all provinces of Pakistan, as well as overseas Pakistanis, may apply, subject to the prescribed criteria. There is no Punjab-domicile wall around the private seats the way quota logic works in parts of the public system.',
          'What the announcement does NOT give you is a private college-wise closing merit table. Unlike the public lists, private closings are not compiled into one official, verifiable document each year — so anyone handing you a precise "last year this college closed at X%" number is quoting an estimate, not a record. When the first selection list publishes on 18 November, read it as the season\u2019s highest cutoff (first lists always are) and wait for the upgradation lists before judging where merit actually settles.',
        ],
      },
      {
        heading: 'Eligibility and the merit formula',
        paragraphs: [
          'Private colleges use the exact same merit machinery as the public sector: Matric (or equivalent) counts 10%, FSc Pre-Medical (or equivalent) counts 40%, and the MDCAT counts 50%. As one line: Aggregate = (Matric obtained \u00f7 Matric total \u00d7 10) + (FSc obtained \u00f7 FSc total \u00d7 40) + (MDCAT obtained \u00f7 MDCAT total \u00d7 50). The MDCAT is scored out of 180 — dividing by 200 is the classic error that understates your aggregate by several points.',
          'The eligibility floors are minimums, not admission cutoffs: at least 55% in the MDCAT for MBBS and 50% for BDS, plus a minimum of 60% in FSc Pre-Medical or equivalent. Clearing the floor only buys you a ticket into the competition; the actual seat goes to the highest aggregates in the applicant pool.',
          'A quick worked example so the arithmetic is concrete. Take a student with 1020/1100 in Matric, 980/1100 in FSc, and 158/180 in MDCAT. Matric contributes 1020 \u00f7 1100 \u00d7 10 = 9.2727. FSc contributes 980 \u00f7 1100 \u00d7 40 = 35.6364. MDCAT contributes 158 \u00f7 180 \u00d7 50 = 43.8889. Total aggregate: 88.7980%. UHS ranks applicants to four decimal places, so keep full precision until the final number — two students who both "have 88.8" can sit ranks apart.',
        ],
        list: [
          'Formula: Matric 10% + FSc 40% + MDCAT 50% (MDCAT out of 180).',
          'Floors: MDCAT \u226555% for MBBS, \u226550% for BDS; FSc \u226560%. Floors \u2260 cutoffs.',
          'Ranking precision: four decimal places — never round early.',
        ],
      },
      {
        heading: 'The 3-day rule: the deadline that actually forfeits seats',
        paragraphs: [
          'This is the single most consequential line in the whole announcement: selected candidates get three days to deposit their fees and join their respective colleges. UHS\u2019s own admission notices state the consequence plainly — failure to pay the fee within the specified period results in forfeiture of the admission AND the opportunity for upgradation.',
          'Under the 2026-27 admission policy, the private-seat deposit is Rs. 600,000, due within 3 working days of the merit list. Read those two facts together: the moment your name appears on a list, the clock is running and the amount is large. Families should have the deposit arranged and documents ready BEFORE the lists publish, not after.',
          'Practical checklist for list day: your CNIC, photographs, board result cards and MDCAT result card ready to upload; the deposit funds accessible; and a decision rule agreed with your family in advance about which colleges you will accept at which list. Hesitation on list day is how seats slip to the next candidate.',
        ],
      },
      {
        heading: 'What it costs: verified numbers and honest gaps',
        paragraphs: [
          'Here is what is verifiable. The private-seat deposit is Rs. 600,000 under the 2026-27 policy. For overseas Pakistani quota seats, the PMDC notification of 21 March 2025 sets US$ 10,000. UHS has explicitly advised candidates to check the fee structures, locations and available facilities of colleges before applying — which is the official way of saying fee schedules differ by college.',
          'What is NOT verifiable centrally is any single "private MBBS fee 2026" figure. Private colleges set their own yearly fee schedules within PMDC regulation, and forwarded WhatsApp fee charts are the least reliable source in this entire process. The only number that matters is the one printed in the individual college\u2019s own prospectus — read it before you rank that college in your preferences, not after your name appears on its list.',
          'Frame the money question the way our MBBS vs BDS guide does: for thousands of families the real fork is "public BDS vs private MBBS", because a public BDS seat costs Rs. 50,000 a year in tuition while a private MBBS seat carries the deposit plus lakhs per year. That is a money decision, not a prestige decision.',
        ],
        list: [
          'Verified: Rs. 600,000 private-seat deposit within 3 working days of the list.',
          'Verified: US$ 10,000 for overseas Pakistani quota seats (PMDC notification 21-03-2025).',
          'Not verifiable centrally: per-college yearly tuition — read each college\u2019s own prospectus.',
          'Never trust forwarded WhatsApp fee charts.',
        ],
      },
      {
        heading: 'Strategy: one portal, your preferences, both sectors',
        paragraphs: [
          'Because the system is centralized, you file one private application and it covers every participating college — but your preference order decides which college you land in. Rank colleges by your TRUE preference, not by where you think you are "safe": the system allots you the highest-preference college your aggregate reaches, and gaming the order only costs you the better seat.',
          'Apply to both sectors. The public MBBS window (16–30 October) is still open as you read this, and the private window runs to 6 November — there is no rule forcing you to pick one. The timelines even cooperate: the public first list (17 November) publishes a day before the private first list (18 November), so you may know your public outcome before committing a private deposit.',
          'Finally, keep perspective on the numbers. Around 4,500 private MBBS seats is a deep pool, but the 55% MDCAT floor is an eligibility gate, not a promise — the actual competition is decided by the aggregate distribution of everyone who applies. Calculate your aggregate honestly (our free calculator does it in under a minute), compare it against last cycle\u2019s public closings to calibrate, and apply early rather than on the last day.',
        ],
      },
      {
        heading: 'Page notes: what is verified here, and what is not',
        paragraphs: [
          'Verified against UHS\u2019s announced schedule as reported by The News (22 October 2026) and the commerce press: the private MBBS window (23 October – 6 November 2026) and first list (18 November 2026); the private BDS window (18 December 2026 – 1 January 2027) and first list (13 January 2027); the two portals (privatembbs.uhs.edu.pk, privatebds.uhs.edu.pk); the centralized system; the 10/40/50 formula; the eligibility floors (MDCAT 55% MBBS / 50% BDS, FSc 60%); the 3-day fee-deposit rule with forfeiture; the seat counts (4,500 MBBS / 34 colleges, 1,100 BDS / 18 colleges); and all-provinces-plus-overseas eligibility. Deposit and fee figures (Rs. 600,000; US$ 10,000 overseas quota) come from the 2026-27 admission policy and the PMDC notification of 21-03-2025.',
          'Deliberately omitted: any private college-wise closing merit for 2025-26 or "expected" 2026-27 cutoffs — no verifiable official compilation exists, and printing estimates would mislead. Also omitted: per-college yearly tuition figures — check each college\u2019s own prospectus. If UHS revises any date under PMDC or Punjab government directives, the UHS website is the authority, not this page.',
        ],
      },
    ],
    faqs: [
      {
        question: 'When is the last date to apply for private MBBS in Punjab 2026?',
        answer: '6 November 2026. Online applications opened on 23 October 2026 through privatembbs.uhs.edu.pk, and the first selection list is scheduled for 18 November 2026.',
      },
      {
        question: 'Is the merit formula for private medical colleges the same as public?',
        answer: 'Yes — Matric 10% + FSc 40% + MDCAT 50%, with the MDCAT scored out of 180 and ranking to four decimal places. The formula does not change between sectors.',
      },
      {
        question: 'What MDCAT score is needed for private MBBS admission?',
        answer: 'You need at least 55% in the MDCAT (50% for BDS) plus 60% in FSc just to be eligible. Actual admission depends on the applicant pool\u2019s aggregates — no official private college-wise cutoffs are published, so treat any precise "last year closed at" number as an estimate.',
      },
      {
        question: 'How much is the fee for private MBBS in Punjab 2026-27?',
        answer: 'The verified figure is the Rs. 600,000 private-seat deposit due within 3 working days of the merit list. Yearly tuition varies by college within PMDC regulation — read each college\u2019s own prospectus and ignore forwarded fee charts.',
      },
      {
        question: 'Can students from other provinces apply to Punjab private medical colleges?',
        answer: 'Yes. UHS states that eligible candidates from all provinces of Pakistan, as well as overseas Pakistanis, may apply through the centralized system, subject to the prescribed criteria.',
      },
      {
        question: 'My name came on the selection list — how long do I have to pay the fee?',
        answer: 'Three days to deposit the fee and join the college. Missing the window forfeits both the admission and the chance of upgradation, so keep funds and documents ready before the lists publish.',
      },
      {
        question: 'Should I apply to both public and private medical colleges?',
        answer: 'Yes — they are separate applications and separate lists. The public window (16–30 October 2026) overlaps the private one (23 October – 6 November), and the public first list (17 November) publishes a day before the private first list (18 November), so you can decide with data.',
      },
      {
        question: 'When do private BDS admissions open in Punjab?',
        answer: 'Applications run 18 December 2026 to 1 January 2027 through privatebds.uhs.edu.pk, with the first selection list scheduled for 13 January 2027.',
      },
    ],
    relatedCalculators: ['kemu', 'duhs', 'nums'],
  },
];
