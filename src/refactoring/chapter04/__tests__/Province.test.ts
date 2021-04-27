import Province from "../Province";
import { sampleProvinceData, TProvinceData } from "../sampleData";

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
  test("zero demand", () => {
    asia.demand = 0;
    expect(asia.shortfall).toEqual(-25);
    expect(asia.profit).toEqual(0);
  });
  test("negative demand", () => {
    asia.demand = -1;
    expect(asia.shortfall).toEqual(-26);
    expect(asia.profit).toEqual(-10);
  });
  test("empty string demand", () => {
    // @ts-ignore
    asia.demand = "";
    expect(asia.shortfall).toBeNaN();
    expect(asia.profit).toBeNaN();
  });
});
describe("no producers", () => {
  let noProducers:Province;
  beforeEach(() => {
    const data:TProvinceData = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20
    };
    noProducers = new Province(data);
  });
  test("shorfall", () => {
    expect(noProducers.shortfall).toEqual(30);
  });
  test("profit", () => {
    expect(noProducers.profit).toEqual(0);
  })
});
// describe("string for producers", () => {
//   test("", () => {
//     const data = {
//       name: "String producers",
//       producers: "",
//       demand: 30,
//       price: 20
//     };
//     // @ts-ignore
//     const prov = new Province(data);
//     expect(prov.shortfall).toEqual(0);
//   })
// })