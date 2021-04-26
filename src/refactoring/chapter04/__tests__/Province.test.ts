import Province from "../Province";
import { sampleProvinceData } from "../sampleData";

describe("province", () => {
  let asia:Province;
  beforeEach(() => {
    asia = new Province(sampleProvinceData())
  })
  test("shorfall", () => {
    expect(asia.shortfall).toEqual(5);
  });
  test("profit", () => {
    expect(asia.profit).toEqual(230);
  });
  test("change production", () => {
    asia.producers[0].production = 20;
    expect(asia.shortfall).toEqual(-6)
    expect(asia.profit).toEqual(292)
  });
})