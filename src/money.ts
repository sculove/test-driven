class Money {
  constructor(protected amount: number, protected currencyValue: string) {
  }
  equals(money: Money) {
    return this.amount === money.amount && this.constructor.name == money.constructor.name;
  }
  currency(): string {
    return this.currencyValue;
  }
}

export default Money;