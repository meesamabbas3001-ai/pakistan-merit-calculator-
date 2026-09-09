import { StudentPreferences, UniversityMatchResult, University } from '../types';
import { calculateMerit } from './calculator';

// Configurable weights as requested in prompt (Total = 100)
const WEIGHTS = {
  academic: 0.35,     // Academic eligibility & merit compatibility
  program: 0.25,      // Program/career match
  financial: 0.15,    // Financial preference compatibility
  location: 0.10,     // Location preference
  preferences: 0.10,  // University type & general priorities
  hostel: 0.05        // Hostel requirement
};

export function matchUniversities(
  preferences: StudentPreferences,
  universities: University[]
): UniversityMatchResult[] {
  const results: UniversityMatchResult[] = [];

  for (const uni of universities) {
    for (const prog of uni.programs) {
      // 1. Calculate merit aggregate for this program
      const calcRes = calculateMerit(uni, prog, preferences.marks);
      const calculatedAggregate = calcRes && calcRes.result ? calcRes.result.finalAggregate : null;

      // 2. Program Match Score (0 - 100)
      let programFitScore = 0;
      const desiredCat = preferences.desiredCategory;
      const query = preferences.specificProgramQuery.trim().toLowerCase();

      if (desiredCat === 'All') {
        programFitScore = 80;
      } else if (prog.category === desiredCat) {
        programFitScore = 100;
      } else {
        programFitScore = 30; // partial match
      }

      if (query) {
        const progNameLower = prog.name.toLowerCase();
        const uniNameLower = uni.name.toLowerCase();
        if (progNameLower.includes(query) || uniNameLower.includes(query)) {
          programFitScore = Math.max(programFitScore, 95);
        }
      }

      // 3. Academic & Eligibility Score (0 - 100)
      let academicFitScore = 50;
      let eligibilityStatus: UniversityMatchResult['eligibilityStatus'] = 'Eligibility needs verification';

      const minAggr = prog.minEligibleAggregate || 50;
      const closingAggr = prog.closingMerit2025 || 65;

      if (calculatedAggregate !== null) {
        if (calculatedAggregate < minAggr) {
          eligibilityStatus = 'May not meet eligibility';
          academicFitScore = 20;
        } else if (calculatedAggregate >= closingAggr) {
          eligibilityStatus = 'Eligible';
          academicFitScore = 100;
        } else if (calculatedAggregate >= closingAggr - 5) {
          eligibilityStatus = 'Borderline';
          academicFitScore = 75;
        } else {
          eligibilityStatus = 'Eligible';
          academicFitScore = 60;
        }
      } else {
        eligibilityStatus = 'Eligibility needs verification';
        academicFitScore = 50;
      }

      // 4. Financial Fit Score (0 - 100)
      let financialFitScore = 70;
      const studentBudget = preferences.budget;
      if (studentBudget === 'I am not sure') {
        financialFitScore = 80;
      } else if (uni.feeCategory === 'Budget' && studentBudget.includes('100,000')) {
        financialFitScore = 100;
      } else if (uni.feeCategory === 'Moderate' && (studentBudget.includes('100,000') || studentBudget.includes('200,000'))) {
        financialFitScore = 90;
      } else if (uni.feeCategory === 'Standard' && studentBudget.includes('400,000')) {
        financialFitScore = 90;
      } else if (uni.feeCategory === 'Elite' && studentBudget.includes('Above')) {
        financialFitScore = 100;
      } else if (uni.universityType === 'Public') {
        financialFitScore = 85; // public generally affordable
      }

      // 5. Location Fit Score (0 - 100)
      let locationFitScore = 70;
      const studentCity = preferences.currentCity.trim().toLowerCase();
      const studentProvince = preferences.currentProvince;
      const willingness = preferences.willingness;

      const uniCity = uni.city.toLowerCase();
      const isSameCity = studentCity && uniCity.includes(studentCity);
      const isSameProvince = studentProvince && uni.province === studentProvince;

      if (willingness === 'Only in my city') {
        locationFitScore = isSameCity ? 100 : 20;
      } else if (willingness === 'Same province') {
        locationFitScore = isSameProvince ? 100 : 40;
      } else if (willingness === 'Anywhere in Pakistan') {
        locationFitScore = 95;
      }

      // 6. University Type Preference Score (0 - 100)
      let preferenceFitScore = 80;
      const typePref = preferences.universityTypePreference;
      if (typePref !== 'Both') {
        if (uni.universityType === typePref) {
          preferenceFitScore = 100;
        } else {
          preferenceFitScore = 40;
        }
      }

      // 7. Hostel Fit Score (0 - 100)
      let hostelFitScore = 80;
      const needsHostel = preferences.needsHostel;
      if (needsHostel === 'Yes') {
        hostelFitScore = uni.hasHostel ? 100 : 30;
      } else if (needsHostel === 'No') {
        hostelFitScore = 90;
      }

      // Calculate Weighted Final Match Score
      let rawScore =
        academicFitScore * WEIGHTS.academic +
        programFitScore * WEIGHTS.program +
        financialFitScore * WEIGHTS.financial +
        locationFitScore * WEIGHTS.location +
        preferenceFitScore * WEIGHTS.preferences +
        hostelFitScore * WEIGHTS.hostel;

      // Penalize if eligibility status is "May not meet eligibility"
      if (eligibilityStatus === 'May not meet eligibility') {
        rawScore = Math.min(rawScore, 45);
      }

      const matchScore = Math.round(Math.max(10, Math.min(99, rawScore)));

      // Determine Match Tier
      let matchTier: UniversityMatchResult['matchTier'] = 'Possible Match';
      if (eligibilityStatus === 'May not meet eligibility') {
        matchTier = 'Needs Eligibility Check';
      } else if (matchScore >= 85) {
        matchTier = 'Best Match';
      } else if (matchScore >= 70) {
        matchTier = 'Good Match';
      } else {
        matchTier = 'Possible Match';
      }

      // Generate Reasons based on actual answers
      const reasons: string[] = [];
      if (eligibilityStatus === 'Eligible' || eligibilityStatus === 'Borderline') {
        reasons.push(`Your calculated academic aggregate (${calculatedAggregate !== null ? calculatedAggregate.toFixed(1) + '%' : 'N/A'}) aligns well with this program's historical requirements.`);
      } else {
        reasons.push(`Your academic aggregate may be below the recent competitive closing merit for this program.`);
      }

      if (prog.category === preferences.desiredCategory || preferences.desiredCategory === 'All') {
        reasons.push(`Offers your desired field of study (${prog.name}).`);
      }

      if (uni.universityType === preferences.universityTypePreference || preferences.universityTypePreference === 'Both') {
        reasons.push(`Matches your preference for a ${uni.universityType.toLowerCase()} university.`);
      }

      if (preferences.needsHostel === 'Yes' && uni.hasHostel) {
        reasons.push(`Provides official on-campus hostel accommodation as you requested.`);
      }

      if (isSameCity) {
        reasons.push(`Located right in your home city (${uni.city}).`);
      } else if (isSameProvince) {
        reasons.push(`Located within your home province (${uni.province}).`);
      }

      // Calculate star ratings (1 to 5)
      const toStars = (score: number) => Math.max(1, Math.min(5, Math.round(score / 20)));

      results.push({
        university: uni,
        program: prog,
        matchScore,
        academicFitScore,
        programFitScore,
        financialFitScore,
        locationFitScore,
        preferenceFitScore,
        hostelFitScore,
        calculatedAggregate,
        eligibilityStatus,
        matchTier,
        reasons,
        breakdown: {
          academicStars: toStars(academicFitScore),
          programStars: toStars(programFitScore),
          locationStars: toStars(locationFitScore),
          financialStars: toStars(financialFitScore),
          preferenceStars: toStars(preferenceFitScore),
          hostelStars: toStars(hostelFitScore)
        }
      });
    }
  }

  // Sort by Eligibility first, then Match Score descending, then Program compatibility
  results.sort((a, b) => {
    const aEligiblePriority = a.eligibilityStatus === 'Eligible' ? 2 : a.eligibilityStatus === 'Borderline' ? 1 : 0;
    const bEligiblePriority = b.eligibilityStatus === 'Eligible' ? 2 : b.eligibilityStatus === 'Borderline' ? 1 : 0;

    if (aEligiblePriority !== bEligiblePriority) {
      return bEligiblePriority - aEligiblePriority;
    }
    return b.matchScore - a.matchScore;
  });

  return results;
}
