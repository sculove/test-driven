import Money from "./money";

class Dallar extends Money {
  constructor(amount: number, currency = "USD") {
    super(amount, currency);
  }
  times(multiplier: number): Money {
    return new Dallar(this.amount * multiplier);
  }
};

export default Dallar;