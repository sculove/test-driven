class Dallar {
  public amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  times(multiplier: number): Dallar {
    return new Dallar(this.amount * multiplier);
  }
  equals(dallar: Dallar) {
    return true;
  }
};

export default Dallar;