import { describe, expect, it } from "vitest";
import { formatSalary } from "./lib";

describe("formatSalary", () => {
  it("formats a known range", () => {
    expect(formatSalary(120, 180)).toBe("$120–180k");
  });

  it("uses ? for an unknown end", () => {
    expect(formatSalary(120, -1)).toBe("$120–?k");
  });

  it("returns empty when both ends are unknown", () => {
    expect(formatSalary(-1, -1)).toBe("");
  });
});
