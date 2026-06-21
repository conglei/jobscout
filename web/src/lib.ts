/** Format a salary range given in thousands. Returns "" when both ends are unknown. */
export function formatSalary(minK: number, maxK: number): string {
  if (minK <= 0 && maxK <= 0) return "";
  const lo = minK > 0 ? `${Math.round(minK)}` : "?";
  const hi = maxK > 0 ? `${Math.round(maxK)}` : "?";
  return `$${lo}–${hi}k`;
}
