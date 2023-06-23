import { describe, expect, it } from "vitest";
import { isEmailValid } from "./validations";

describe('is email valid', () => {
    it("should be true if a valid email", () => {
        expect(isEmailValid("jon@jon.com")).toBe(true)
    })
})