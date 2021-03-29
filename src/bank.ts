import Expression from "./expression";

class Bank {
  reduce(value: Expression, currency: string) {
    return value.reduce(currency);
  }
  addRate(from:string, to:string, rate:number) {
  }
}

export default Bank;