class Dallar {
  constructor(private amount: number) {
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