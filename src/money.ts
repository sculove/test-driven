class Money {
  constructor(protected amount: number) {

  }
  equals(money: Money) {
    return this.amount === money.amount && this.constructor.name == money.constructor.name;
  }
}

export default Money;