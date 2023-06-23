import { describe, expect, it } from "vitest"
import { isAllNumbers } from "./validations"

describe("isAllNumbers", () => {
    it("should fail if the input is not all numbers", () => {
        expect(isAllNumbers("12l34")).toBe(false)
    })

    it("should pass if the input is all numbers", () => {
        expect(isAllNumbers("1234")).toBe(true)
    })

})