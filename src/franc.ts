import Money from "./money";

class Franc extends Money {
  constructor(amount: number) {
    super(amount);
    this.currencyValue = "CHF";
  }
  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
};

export default Franc;