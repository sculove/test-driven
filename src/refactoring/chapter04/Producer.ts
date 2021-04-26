export default class Producer {
  private _cost: number;
  private _name: string;
  private _production: number;
  constructor(private _province: Province, data: Producer) {
    this._cost = data.cost;
    this._name = data.name;
    this._production = data.production || 0;
  }
  get cost() { return this._cost}
  get name() { return this._name}
  get production() { return this._production}
  set production(amount: number) {
    const newProduction = Number.isNaN(amount) ? 0 : amount;
    this._province.totalProduction += newProduction - this._production;
    this._production = newProduction;
  }
}
