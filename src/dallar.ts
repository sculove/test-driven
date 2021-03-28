class Dallar {
  public amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  times(mlutiplier: number): Dallar {
    return new Dallar(this.amount * mlutiplier);
  }
};

export default Dallar;