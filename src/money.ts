class Money {
  protected currencyValue: string;
  constructor(protected amount: number) {
  }
  equals(money: Money) {
    return this.amount === money.amount && this.constructor.name == money.constructor.name;
  }
  currency(): string {
    return this.currencyValue;
  }
}

export default Money;