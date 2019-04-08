const enhancer = require("./enhancer");

describe("actions", () => {
  describe("repair", () => {
    it("return item durabilty at 100", () => {
      expect(
        enhancer.repair({
          name: "spear",
          enhancement: 0,
          durability: 0
        })
      ).toEqual({
        name: "spear",
        enhancement: 0,
        durability: 100
      });
    });
  });
  //
  describe("succeed", () => {
    it("return item enhancement + 1", () => {
      expect(
        enhancer.succeed({
          name: "spear",
          enhancement: 0,
          durability: 100
        })
      ).toEqual({
        name: "spear",
        enhancement: 1,
        durability: 100
      });
    });
    it("item enhancement does not go over 20", () => {
      expect(
        enhancer.succeed({
          name: "spear",
          enhancement: 20,
          durability: 100
        })
      ).toEqual({
        name: "spear",
        enhancement: 20,
        durability: 100
      });
    });
  });
  //
  describe("failure", () => {
    it("enhancement < 15", () => {
      expect(
        enhancer.fail({
          name: "spear",
          enhancement: 14,
          durability: 100
        })
      ).toEqual({
        name: "spear",
        enhancement: 14,
        durability: 95
      });
    });
    it("enhancement 15,16", () => {
      expect(
        enhancer.fail({
          name: "spear",
          enhancement: 15,
          durability: 100
        })
      ).toEqual({
        name: "spear",
        enhancement: 15,
        durability: 90
      });
    });
    it("enhancement > 16", () => {
      expect(
        enhancer.fail({
          name: "spear",
          enhancement: 17,
          durability: 100
        })
      ).toEqual({
        name: "spear",
        enhancement: 16,
        durability: 100
      });
    });
  });
  describe("get", () => {
    it("enhancement > 0", () => {
      expect(
        enhancer.get({
          name: "spear",
          enhancement: 17,
          durability: 100
        })
      ).toEqual({
        name: "[+17]spear",
        enhancement: 17,
        durability: 100
      });
    });
    it("enhancement = 0", () => {
      expect(
        enhancer.get({
          name: "spear",
          enhancement: 0,
          durability: 100
        })
      ).toEqual({
        name: "spear",
        enhancement: 0,
        durability: 100
      });
    })
  });
});
