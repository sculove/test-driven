import Money from "./money";

interface Expression {}

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {
  }
}

export default Expression;