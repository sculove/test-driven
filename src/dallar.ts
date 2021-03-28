import Money from "./money";

class Dallar extends Money {
  constructor(amount: number) {
    super(amount);
  }
  times(multiplier: number): Money {
    return new Dallar(this.amount * multiplier);
  }
};

export default Dallar;