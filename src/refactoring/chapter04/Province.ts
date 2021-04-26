import Producer from "./Producer";
import { TProvinceData } from "./sampleData";

export default class Province {
  private _name: string;
  private _producers: Producer[];
  private _totalProduction: number;
  private _demand: number;
  private _price: number;

  constructor(doc: TProvinceData) {
    this._name = doc.name;
    this._producers = [];
    this._totalProduction = 0;
    this._demand = doc.demand;
    this._price = doc.price;
    doc.producers.forEach(producer => this.addProducer(new Producer(this, producer)));
  }

  get name() { return this._name}
  get producers() { return this._producers}
  get totalProduction() { return this._totalProduction}
  set totalProduction(arg) { this._totalProduction = arg}
  get demand() { return this._demand}
  get price() { return this._price}
  
  get shortfall() {
    return this.demand - this.totalProduction;
  }
  get profit() {
    return this.demandValue - this.demandCost;
  }

  get demandValue() {
    return this.satisfiedDemand * this.price;
  }
  get satisfiedDemand() {
    return Math.min(this._demand, this.totalProduction);
  }
  get demandCost() {
    let remainingDemand = this.demand;
    let result = 0;
    this.producers
      .sort((a, b) => a.cost - b.cost)
      .forEach(p => {
        const contribution = Math.min(remainingDemand, p.production);
        remainingDemand -= contribution;
        result += contribution * p.cost;
      });
    return result;
  }

  addProducer(arg: Producer) {
    this._producers.push(arg);
    this._totalProduction += arg.production;
  }
}