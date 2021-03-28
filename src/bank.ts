import Money from "./money";

class Bank {
  reduce(value: Money, currency: string) {
    return new Money(10, currency);
  }
}

export default Bank;