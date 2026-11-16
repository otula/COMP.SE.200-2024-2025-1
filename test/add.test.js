import { describe, expect, it } from "vitest";
import add from "#src/add.js";

// Tests tagged [Phase 1 plan] were designed in the Phase 1 test plan.
// Tests in the [AI-generated] suite were created using Claude Code with the Opus 5.5 model.
// The only change was replacing test() with it().

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

  describe("[AI-generated]", () => {
    describe("valid prices", () => {
      it("adds two typical prices", () => {
        expect(add(19.99, 5.01)).toBeCloseTo(25, 10);
      });

      it("adds two whole-number prices", () => {
        expect(add(6, 4)).toBe(10);
      });

      it("adds cent values without visible floating-point error", () => {
        expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10);
      });

      it("treats a free product (0) as a valid price", () => {
        expect(add(0, 25)).toBe(25);
        expect(add(25, 0)).toBe(25);
      });

      it("adds two free products", () => {
        expect(add(0, 0)).toBe(0);
      });

      it("accepts the maximum price of 1000", () => {
        expect(add(1000, 0)).toBe(1000);
        expect(add(0, 1000)).toBe(1000);
      });

      it("allows the total to exceed 1000", () => {
        expect(add(600, 700)).toBe(1300);
      });

      it("adds two maximum prices", () => {
        expect(add(1000, 1000)).toBe(2000);
      });

      it("accepts prices just inside the limits", () => {
        expect(add(0.01, 999.99)).toBeCloseTo(1000, 10);
      });

      it("is commutative", () => {
        expect(add(12.5, 300)).toBe(add(300, 12.5));
      });
    });

    describe("invalid prices", () => {
      it("throws for a negative first price", () => {
        expect(() => add(-1, 10)).toThrow();
      });

      it("throws for a negative second price", () => {
        expect(() => add(10, -1)).toThrow();
      });

      it("throws for a price just below 0", () => {
        expect(() => add(-0.01, 10)).toThrow();
        expect(() => add(10, -0.01)).toThrow();
      });

      it("throws when a negative price would cancel out a positive one", () => {
        expect(() => add(50, -50)).toThrow();
      });

      it("throws for a first price above 1000", () => {
        expect(() => add(1001, 10)).toThrow();
      });

      it("throws for a second price above 1000", () => {
        expect(() => add(10, 1001)).toThrow();
      });

      it("throws for a price just above 1000", () => {
        expect(() => add(1000.01, 0)).toThrow();
        expect(() => add(0, 1000.01)).toThrow();
      });

      it("throws when both prices are invalid", () => {
        expect(() => add(-5, 2000)).toThrow();
      });

      it("throws for NaN", () => {
        expect(() => add(NaN, 10)).toThrow();
        expect(() => add(10, NaN)).toThrow();
      });

      it("throws for Infinity", () => {
        expect(() => add(Infinity, 10)).toThrow();
        expect(() => add(10, -Infinity)).toThrow();
      });
    });
  });
});
