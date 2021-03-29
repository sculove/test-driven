import Expression, {Sum} from "./expression";

class Money implements Expression {
  static dallar(amount: number) {
    return new Money(amount, "USD");
  }
  static franc(amount: number) {
    return new Money(amount, "CHF");
  }
  constructor(protected amount: number, protected currencyValue: string) {
  }
  equals(money: Money) {
    return this.amount === money.amount && this.currency() === money.currency();
  }
  currency(): string {
    return this.currencyValue;
  }
  times(multiplier: number) {
    return new Money(this.amount * multiplier, this.currencyValue);
  }
  plus(addend: Money) {
    return new Sum(this, addend);
  }
}

export default Money;