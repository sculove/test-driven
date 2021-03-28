import Money from "./money";

class Dallar extends Money {
  constructor(amount: number, currency = "USD") {
    super(amount, currency);
  }
};

export default Dallar;