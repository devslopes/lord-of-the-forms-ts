import { describe, expect, it } from "vitest";
import { formatPhoneNumber } from "./transformations";

describe("format phone number", () => {
    it("should format my phone number", () => {
        expect(formatPhoneNumber('1234567')).toBe("12-34-56-7")
    })
})