import { describe, expect, it } from "vitest";
import add from "#src/add.js";

// Tests tagged [Phase 1 plan] were designed in the Phase 1 test plan.

describe("add", () => {
  describe("valid classes", () => {
    it("[Phase 1 plan] adds two positive numbers near the lower boundary", () => {
      expect(add(1, 1)).toBe(2);
    });

    it("[Phase 1 plan] adds two positive numbers from the middle of the valid range", () => {
      expect(add(500, 5)).toBe(505);
    });

    it("[Phase 1 plan] adds numbers up to reaching MAX_SAFE_INTEGER", () => {
      expect(add(9007199254740990, 1)).toBe(9007199254740991);
    });
  });

  describe("invalid classes", () => {
    it("[Phase 1 plan] rejects a negative augend", () => {
      expect(() => add(-1, 5)).toThrow();
    });

    it("[Phase 1 plan] rejects sum exceeding MAX_SAFE_INTEGER", () => {
      expect(() => add(Number.MAX_SAFE_INTEGER, 2)).toThrow();
    });
  });
});
