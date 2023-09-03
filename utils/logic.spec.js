import { add } from "./logic";

describe("Logic", () => {
  describe("add()", () => {
    it("should handle whole numbers", () => {
      const answer = add("2", "2");

      expect(answer).toStrictEqual("4");
    });
    it("should handle decimals", () => {
      const answer = add("1.2", "1.8");

      expect(answer).toStrictEqual("3");
    });
    it("should handle negative numbers", () => {
      const answer = add("-1234", "-1234");

      expect(answer).toStrictEqual("-2468");
    });
    it("should return exponential notation if over 9 digits long", () => {
      const answer = add("9000000000", "9000000000");

      expect(answer).toStrictEqual("1.8e+10");
    });
    it("should handle exponential inputs", () => {
      const answer = add("9e+9", "9e+9");

      expect(answer).toStrictEqual("1.8e+10");
    });
  });
  describe("subtract()", () => {});
  describe("multiply()", () => {});
  describe("divide()", () => {});
});
