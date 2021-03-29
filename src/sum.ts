import Expression from "./expression";
import Money from "./money";

class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {
  }
  reduce(currency: string) {
    // @ts-ignore
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, currency);
  }
}

export default Sum;