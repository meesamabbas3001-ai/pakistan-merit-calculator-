import { University, ProgramCategory } from '../types';

export interface RelatedUniversity {
  university: University;
  score: number;
  sharedCategories: ProgramCategory[];
}

/**
 * Rank "related" universities by real similarity instead of data-file order.
 * Scoring:
 *  - +3 per shared program category (Engineering, Medical, Computer Science, ...)
 *  - +2 for the same city, +1 for the same province
 *  - +1 for the same university type (Public / Private)
 */
export function getRelatedUniversities(
  university: University,
  allUniversities: University[],
  count = 6
): RelatedUniversity[] {
  const myCats = new Set<ProgramCategory>(university.programs.map((p) => p.category));

  return allUniversities
    .filter((u) => u.id !== university.id)
    .map((u) => {
      const sharedCategories = [
        ...new Set(u.programs.map((p) => p.category).filter((c) => myCats.has(c))),
      ];
      let score = sharedCategories.length * 3;
      if (u.city === university.city) score += 2;
      else if (u.province === university.province) score += 1;
      if (u.universityType === university.universityType) score += 1;
      return { university: u, score, sharedCategories };
    })
    .sort(
      (a, b) =>
        b.score - a.score || a.university.shortName.localeCompare(b.university.shortName)
    )
    .slice(0, count);
}
