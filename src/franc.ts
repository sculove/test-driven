import Money from "./money";

class Franc extends Money {
  constructor(amount: number, currency = "CHF") {
    super(amount, currency);
  }
};

export default Franc;