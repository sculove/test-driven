import Expression from "./expression";



class Bank {
  private table: Map<string, number> = new Map();
  reduce(value: Expression, currency: string) {
    return value.reduce(this, currency);
  }
  addRate(from:string, to:string, rate:number) {
    this.table.set(`${from}_${to}`, rate);
  }
  rate(from:string, to:string) {
    return this.table.get(`${from}_${to}`);
  }
}

export default Bank;