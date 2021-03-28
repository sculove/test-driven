import Money from "./money";

describe("다중 통화를 지원하는 Money 객체", () => {
  test("비교 테스트", () => {
    expect(Money.dallar(5).equals(Money.franc(5))).toBeFalsy();
    
    // TODO: Null 이나 dallar가 아닌 object인 경우 추가 테스트가 필요함
    expect(Money.dallar(5).equals(Money.dallar(5))).toBeTruthy();
    expect(Money.dallar(5).equals(Money.dallar(6))).toBeFalsy();
    expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
    expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();
  });
  test("통화 코드 확인 테스트", () => {
    expect(Money.dallar(1).currency()).toBe("USD");
    expect(Money.franc(1).currency()).toBe("CHF");
  })
  test("여러번 times 하는 테스트", () => {
    // Given
    const fiveDallar = Money.dallar(5);
    const fiveFranc = Money.franc(5);
    
    // When, Then
    expect(fiveDallar.times(2).equals(Money.dallar(10))).toBeTruthy();
    
    // When, Then
    expect(fiveDallar.times(3).equals(Money.dallar(15))).toBeTruthy();

    // When, Then
    expect(fiveFranc.times(2).equals(Money.franc(10))).toBeTruthy();
      
    // When, Then
    expect(fiveFranc.times(3).equals(Money.franc(15))).toBeTruthy();
  });
  test("통화 더하기 테스트", () => {
    // Given
    const bank = new Bank();
    // When
    const sum = Money.dallar(5).plus(Money.dallar(5));
    const reduced = bank.reduce(sum, "USD");
    // Then
    expect(Money.dallar(10).equals(reduced)).toBeTruthy();
  })
});