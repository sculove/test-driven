import Expression, { Sum } from "./expression";
import Money from "./money";

class Bank {
  reduce(value: Expression, currency: string) {
    const source: Sum = <Sum>value;
    return source.reduce(currency);
  }
}

export default Bank;