import Bank from "./bank";
import Money from "./money";

interface Expression {
  reduce(bank:Bank, currency: string): Money;
}

export default Expression;