import Bank from "./bank";
import Money from "./money";

interface Expression {
  reduce(bank:Bank, currency: string): Expression;
  times(multiplier: number): Expression;
}

export default Expression;