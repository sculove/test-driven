export type TPlay = {
  name: string;
  type: string;
};

export type TPerformance = {
  playID: string;
  audience: number;
};

export type TInvoice = {
  customer: string;
  performances: TPerformance[];
};

export const PLAYS:Record<string, TPlay> = {
  "hamlet" : { name: "Hamlet", type: "tragedy" },
  "as-like": { name: "As You Like It", type: "comedy"},
  "othello": { name: "Othello", type: "tragedy"}
};

export const INVOICES:TInvoice[] = [
  {
    customer: "BigCo",
    performances: [
      {
        playID: "hamlet",
        audience: 55
      },
      {
        playID: "as-like",
        audience: 35
      },
      {
        playID: "othello",
        audience: 40
      }
    ]
  }
];