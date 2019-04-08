const enhancer = require("./enhancer");

describe("actions", () => {
  //
  describe("repair", () => {
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
      )
    });
  });
  describe("succeed", () => {
    it("return item enhancement + 1", () => {
      expect(enhancer.succeed(
        {
          name: 'spear',
          enhancement: 0,
          durability: 100
        }
      )).toEqual(
        {
          name: 'spear',
          enhancement: 1,
          durability: 100
        }
      )
    })
    it("item is at enhancement lvl 20", () => {
      expect(enhancer.succeed(
        {
          name: 'spear',
          enhancement: 20,
          durability: 100
        }
      )).toEqual(
        {
          name: 'spear',
          enhancement: 20,
          durability: 100
        }
      )
    })
  })
});
