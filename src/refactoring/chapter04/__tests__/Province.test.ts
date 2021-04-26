import Province from "../Province";
import { sampleProvinceData } from "../sampleData";

describe("province", () => {
  const asia =  new Province(sampleProvinceData())
  test("shorfall", () => {
    expect(asia.shortfall).toEqual(5);
  });
  test("profit", () => {
    expect(asia.profit).toEqual(230);
  })
})