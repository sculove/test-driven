class Dallar {
  public amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  times(mlutiplier: number) {
    this.amount *= mlutiplier;
  }
};

export default Dallar;