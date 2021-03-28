import Money from "./money";

class Franc extends Money {
  constructor(amount: number, currency = "CHF") {
    super(amount, currency);
  }
  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
};

export default Franc;