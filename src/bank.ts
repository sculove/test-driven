import Expression from "./expression";
import Money from "./money";

class Bank {
  reduce(value: Expression, currency: string) {
    return new Money(10, currency);
  }
}

export default Bank;