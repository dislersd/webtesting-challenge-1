const enhancer = require("./enhancer");

describe("actions", () => {
  //
  describe("repair", () => {
    //
    it("return item durabilty at 100", () => {
      expect(enhancer.repair(
      {
        name: 'spear',
        enhancement: 0,
        durability: 0
      }
      )).toEqual(
      {
        name: 'spear',
        enhancement: 0,
        durability: 100
      }
      );

    });
  });
  // describe("succeed", () => {
  //   succeed(spear);
  //   const num = spear.enhancement;
  //   expect(spear.enhancement).toBe(num)
  // })
});
