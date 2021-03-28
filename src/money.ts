class Money {
  constructor(protected amount: number) {

  }
  equals(money: Money) {
    return this.amount === money.amount;
  }
}

export default Money;