import Producer from "./Producer";

export type TProvinceData = {
  name: string;
  demand: number;
  price: number;
  producers: Producer[];
};

export function sampleProvinceData(): TProvinceData {
  return {
    name: "Asia",
    producers: [
      {name: "Byzanitum", cost: 10, production: 9} as Producer,
      {name: "Attalia", cost: 12, production: 10} as Producer,
      {name: "Sinope", cost: 10, production: 6} as Producer
    ],
    demand: 30,
    price: 20
  };
}