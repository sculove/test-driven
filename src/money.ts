import Expression from "./expression";
import Sum from "./sum";
import Bank from "./bank";

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
  reduce(bank: Bank, currency: string) {
    const rate = bank.rate(this.currencyValue, currency);
    return new Money(this.amount / rate, currency);
  }
}

export default Money;