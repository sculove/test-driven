class Money {
  static dallar(amount: number) {
    return new Money(amount, "USD");
  }
  constructor(protected amount: number, protected currencyValue: string) {
  }
  equals(money: Money) {
    return this.amount === money.amount && this.constructor.name == money.constructor.name;
  }
  currency(): string {
    return this.currencyValue;
  }
  times(multiplier: number) {
    return new Money(this.amount * multiplier, this.currencyValue);
  }
}

export default Money;