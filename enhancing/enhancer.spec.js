const enhancer = require("./enhancer");
const { repair } = require("./enhancer.js");

describe("repair enhancer", () => {
  const spear = {};
  repair(spear);
  it("return item durabilty at 100", () => {
    expect(spear.durability).toBe(100);
  });
});
