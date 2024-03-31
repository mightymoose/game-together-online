import { cn } from "./utils";
import { it, expect, describe } from 'vitest';

describe("cn", () => {
    it("builds class names", () => {
        const result = cn("a", "b", {c: true, d: false});
        expect(result).toBe("a b c");
    })
});