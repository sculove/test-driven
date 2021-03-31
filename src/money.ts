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
  constructor(protected amountValue: number, protected currencyValue: string) {
  }
  equals(money: Money) {
    // https://www.typescriptlang.org/docs/handbook/2/classes.html#cross-instance-private-access
    return this.amount() === money.amount() && this.currency() === money.currency();
  }
  amount(): number {
    return this.amountValue;
  }
  currency(): string {
    return this.currencyValue;
  }
  times(multiplier: number) {
    return new Money(this.amountValue * multiplier, this.currencyValue);
  }
  plus(addend: Expression) {
    return new Sum(this, addend);
  }
  reduce(bank: Bank, currency: string) {
    const rate = bank.rate(this.currencyValue, currency);
    return new Money(this.amountValue / rate, currency);
  }
}

export default Money;