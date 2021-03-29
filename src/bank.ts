import Expression, { Sum } from "./expression";
import Money from "./money";

class Bank {
  reduce(value: Expression, currency: string) {
    const source: Sum = <Sum>value;
    // @ts-ignore
    const amount = source.augend.amount + source.addend.amount;
    return new Money(amount, currency);
  }
}

export default Bank;