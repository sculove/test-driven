import {statement} from "../printStatement";
import {PLAYS, INVOICES} from "../model";

describe("청구서 출력 테스트", () => {
  test("결과값 출력", () => {
    // given
    // when
    const result = statement(INVOICES?.[0], PLAYS);
    // then
    expect(result).toEqual("청구 내역 (고객명: BigCo)\n Hamlet: $650.00 (55석)\n As You Like It: $490.00 (35석)\n Othello: $500.00 (40석)\n총액: $1,640.00\n적립 포인트: 47점\n");
  });
}); 