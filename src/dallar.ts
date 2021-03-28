import Money from "./money";

class Dallar extends Money {
  constructor(private amount: number) {
    super();
    this.amount = amount;
  }
  times(multiplier: number): Dallar {
    return new Dallar(this.amount * multiplier);
  }
  equals(dallar: Dallar) {
    return this.amount === dallar.amount;
  }
};

export default Dallar;