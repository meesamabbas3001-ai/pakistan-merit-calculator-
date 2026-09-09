import { University, ProgramProfile, MeritInput, CalculationResult, ComponentContribution } from '../types';

export function calculateMerit(
  university: University,
  program: ProgramProfile,
  input: MeritInput,
  admissionYear: string = '2026'
): { result?: CalculationResult; error?: string } {
  // Validate numbers
  const mObt = Number(input.matricObtained);
  const mTot = Number(input.matricTotal);
  const iObt = Number(input.interObtained);
  const iTot = Number(input.interTotal);
  const tObt = Number(input.testObtained);
  const tTot = Number(input.testTotal);

  if (
    input.matricObtained === '' ||
    input.matricTotal === '' ||
    input.interObtained === '' ||
    input.interTotal === '' ||
    input.testObtained === '' ||
    input.testTotal === ''
  ) {
    return { error: 'Please fill in all required academic marks fields.' };
  }

  if (isNaN(mObt) || isNaN(mTot) || isNaN(iObt) || isNaN(iTot) || isNaN(tObt) || isNaN(tTot)) {
    return { error: 'All marks must be valid numbers.' };
  }

  if (mTot <= 0 || iTot <= 0 || tTot <= 0) {
    return { error: 'Total marks must be greater than zero.' };
  }

  if (mObt < 0 || iObt < 0 || tObt < 0) {
    return { error: 'Obtained marks cannot be negative.' };
  }

  if (mObt > mTot) {
    return { error: 'Matric obtained marks cannot exceed total marks.' };
  }

  if (iObt > iTot) {
    return { error: 'Intermediate Part-I obtained marks cannot exceed total marks.' };
  }

  if (tObt > tTot) {
    return { error: 'Entry test obtained marks cannot exceed total marks.' };
  }

  // Calculate percentages
  const matricPct = (mObt / mTot) * 100;
  const interPct = (iObt / iTot) * 100;
  const testPct = (tObt / tTot) * 100;

  // Weights
  const mW = program.matricWeight;
  const iW = program.interPart1Weight;
  const tW = program.testWeight;

  // Contributions
  const matricContrib = (matricPct * mW) / 100;
  const interContrib = (interPct * iW) / 100;
  const testContrib = (testPct * tW) / 100;

  const rawAggregate = matricContrib + interContrib + testContrib;
  const finalAggregate = Math.round((rawAggregate + Number.EPSILON) * 100) / 100;

  const matricComp: ComponentContribution = {
    name: 'Matric / SSC',
    obtained: mObt,
    total: mTot,
    percentage: Math.round((matricPct + Number.EPSILON) * 100) / 100,
    weight: mW,
    contribution: Math.round((matricContrib + Number.EPSILON) * 100) / 100,
  };

  const interComp: ComponentContribution = {
    name: 'Intermediate Part-I (Estimated)',
    obtained: iObt,
    total: iTot,
    percentage: Math.round((interPct + Number.EPSILON) * 100) / 100,
    weight: iW,
    contribution: Math.round((interContrib + Number.EPSILON) * 100) / 100,
  };

  const testComp: ComponentContribution = {
    name: program.testName,
    obtained: tObt,
    total: tTot,
    percentage: Math.round((testPct + Number.EPSILON) * 100) / 100,
    weight: tW,
    contribution: Math.round((testContrib + Number.EPSILON) * 100) / 100,
  };

  const formulaString = `(${matricComp.percentage.toFixed(2)} × ${mW}%) + (${interComp.percentage.toFixed(2)} × ${iW}%) + (${testComp.percentage.toFixed(2)} × ${tW}%) = ${finalAggregate.toFixed(2)}%`;

  let comparisonStatus: CalculationResult['comparisonStatus'] = undefined;
  if (program.closingMerit2025) {
    const diff = finalAggregate - program.closingMerit2025;
    if (diff >= 2.0) {
      comparisonStatus = 'Historically competitive';
    } else if (diff >= -2.0) {
      comparisonStatus = 'Borderline';
    } else {
      comparisonStatus = 'Below previous closing merit';
    }
  }

  return {
    result: {
      university,
      program,
      admissionYear,
      matric: matricComp,
      interPart1: interComp,
      entryTest: testComp,
      finalAggregate,
      formulaString,
      verified: program.verified,
      sourceUrl: program.sourceUrl,
      lastVerified: program.lastVerified,
      notes: program.notes,
      closingMerit: program.closingMerit2025,
      comparisonStatus,
    },
  };
}
