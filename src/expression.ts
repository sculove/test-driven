import Money from "./money";

interface Expression {
  reduce(currency: string): Money;
}

export default Expression;