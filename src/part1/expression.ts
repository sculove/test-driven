import Bank from "./bank";
import Money from "./money";

interface Expression {
  reduce(bank:Bank, currency: string): Money;
  times(multiplier: number): Expression;
  plus(addend: Expression): Expression;
}

export default Expression;