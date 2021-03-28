import Money from "./money";

class Dallar extends Money {
  constructor(amount: number) {
    super(amount);
  }
  times(multiplier: number): Dallar {
    return new Dallar(this.amount * multiplier);
  }
  equals(dallar: Dallar) {
    return this.amount === dallar.amount;
  }
};

export default Dallar;