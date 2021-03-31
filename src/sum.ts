import Bank from "./bank";
import Expression from "./expression";
import Money from "./money";

class Sum implements Expression {
  constructor(public augend: Expression, public addend: Expression) {
  }
  reduce(bank:Bank, currency: string) {
    const amount = this.augend.reduce(bank, currency).amount + this.addend.reduce(bank, currency).amount;
    return new Money(amount, currency);
  }
  plus(addend: Expression) {
    return new Sum(this, addend);
  }
  times(multiplier: number) {
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier))
  }
}

export default Sum;