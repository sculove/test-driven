class Dallar {
  public amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  times(multiplier: number): Dallar {
    return new Dallar(this.amount * multiplier);
  }
};

export default Dallar;