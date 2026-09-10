export type ProgramCategory = 'Engineering' | 'Computer Science' | 'Business' | 'Medical' | 'General' | 'Other';

export type UniversityType = 'Public' | 'Private';
export type Province = 'Islamabad' | 'Punjab' | 'Sindh' | 'KPK' | 'Balochistan' | 'Azad Kashmir';
export type BudgetRange = 
  | 'Under Rs. 100,000 per year'
  | 'Rs. 100,000–200,000 per year'
  | 'Rs. 200,000–400,000 per year'
  | 'Rs. 400,000–600,000 per year'
  | 'Above Rs. 600,000 per year'
  | 'I am not sure';

export type VerificationStatus = 'Verified' | 'Needs Review' | 'Expired';
export type SourceType = 'Official website' | 'Official admission portal' | 'Official prospectus' | 'Official admission advertisement' | 'Official notice' | 'Other verified source';

export interface ProgramProfile {
  id: string;
  name: string;
  category: ProgramCategory;
  testName: string;
  maxTestMarks: number;
  matricWeight: number; // e.g. 10 for 10%
  interPart1Weight: number; // e.g. 15 for 15%
  testWeight: number; // e.g. 75 for 75%
  isPart1Accepted: boolean;
  notes: string;
  closingMerit2025?: number; // e.g. 78.50
  closingMerit2024?: number;
  minEligibleAggregate?: number; // e.g. 50
  verified: boolean;
  sourceUrl: string;
  lastVerified: string;
  verificationStatus?: VerificationStatus;
  academicSession?: string; // e.g. 'Fall 2026'
  sourceType?: SourceType;
  adminNotes?: string;
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  city: string;
  province: Province;
  universityType: UniversityType;
  feeCategory: 'Budget' | 'Moderate' | 'Standard' | 'Premium' | 'Elite';
  feeCategoryLabel: string;
  hasHostel: boolean;
  hasScholarships: boolean;
  logoBg: string;
  programs: ProgramProfile[];
}

export interface MeritInput {
  matricObtained: number | '';
  matricTotal: number | '';
  interObtained: number | '';
  interTotal: number | '';
  testObtained: number | '';
  testTotal: number | '';
}

export interface ComponentContribution {
  name: string;
  obtained: number;
  total: number;
  percentage: number;
  weight: number;
  contribution: number;
}

export interface CalculationResult {
  university: University;
  program: ProgramProfile;
  admissionYear: string;
  matric: ComponentContribution;
  interPart1: ComponentContribution;
  entryTest: ComponentContribution;
  finalAggregate: number;
  formulaString: string;
  verified: boolean;
  sourceUrl: string;
  lastVerified: string;
  notes: string;
  closingMerit?: number;
  comparisonStatus?: 'Historically competitive' | 'Borderline' | 'Below previous closing merit';
}

export interface StudentPreferences {
  marks: MeritInput;
  desiredCategory: ProgramCategory | 'All';
  specificProgramQuery: string;
  budget: BudgetRange;
  needsFinancialAid: 'Yes' | 'No' | 'Maybe';
  currentCity: string;
  currentProvince: Province | '';
  willingness: 'Only in my city' | 'Same province' | 'Anywhere in Pakistan';
  needsHostel: 'Yes' | 'No' | 'Not sure';
  universityTypePreference: 'Public' | 'Private' | 'Both';
  priorities: string[];
  flexibility: 'Very flexible' | 'Somewhat flexible' | 'Prefer nearby' | 'Only my city';
}

export interface UniversityMatchResult {
  university: University;
  program: ProgramProfile;
  matchScore: number; // 0 to 100
  academicFitScore: number; // 0 to 100
  programFitScore: number; // 0 to 100
  financialFitScore: number; // 0 to 100
  locationFitScore: number; // 0 to 100
  preferenceFitScore: number; // 0 to 100
  hostelFitScore: number; // 0 to 100
  calculatedAggregate: number | null;
  eligibilityStatus: 'Eligible' | 'Borderline' | 'May not meet eligibility' | 'Eligibility needs verification';
  matchTier: 'Best Match' | 'Good Match' | 'Possible Match' | 'Needs Eligibility Check';
  reasons: string[];
  breakdown: {
    academicStars: number; // 1 to 5
    programStars: number;
    locationStars: number;
    financialStars: number;
    preferenceStars: number;
    hostelStars: number;
  };
}
