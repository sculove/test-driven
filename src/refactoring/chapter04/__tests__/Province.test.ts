import Province from "../Province";
import { sampleProvinceData } from "../sampleData";

describe("province", () => {
  test("shorfall", () => {
    const asia =  new Province(sampleProvinceData())
    expect(asia.shortfall).toEqual(5);
  })
})