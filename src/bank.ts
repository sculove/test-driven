import Expression from "./expression";

class Bank {
  reduce(value: Expression, currency: string) {
    return value.reduce(currency);
  }
}

export default Bank;