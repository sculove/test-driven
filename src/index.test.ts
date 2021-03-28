describe("다중 통화를 지원하는 Money 객체", () => {
  test("$5 * 2 = 10$ 테스트", () => {
    const five:Dallar = new Dallar(5);
    five.times(2);
    expect(five.amount).toBe(10);
  })
});