import Money from "./money";

class Franc extends Money {
  constructor(private amount: number) {
    super();
    this.amount = amount;
  }
  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }
  equals(dallar: Franc) {
    return this.amount === dallar.amount;
  }
};

export default Franc;