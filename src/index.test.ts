import Money from "./money";
import Bank from "./bank";
import Sum from "./sum";

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
  });
  test("expression(sum)을 반환하는 테스트", () => {
    // Given
    const five = Money.dallar(5);
    // When
    const result = five.plus(five);
    // Then
    expect(five.equals(result.augend)).toBeTruthy();
    expect(five.equals(result.addend)).toBeTruthy();
  });
  test("동일 통화 연산, 동일 통화 반환 reduce 테스트", () => {
    // Given
    const bank = new Bank();
    const sum = new Sum(Money.dallar(3), Money.dallar(4));
    // When 
    const result = bank.reduce(sum, "USD");
    // Then
    expect(Money.dallar(7).equals(result)).toBeTruthy();
  });
  test("Money인 경우에 대한 reduce 테스트", () => {
    // Given
    const bank = new Bank();
    const money = Money.dallar(1);
    // When
    const result = bank.reduce(money, "USD");
    // Then
    expect(money.equals(result)).toBeTruthy();
  });
  test("통화 변화 reduce 테스트", () => {
    // Given 
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    // When
    const result = bank.reduce(Money.franc(2), "USD");
    // Then
    expect(Money.dallar(1).equals(result)).toBeTruthy();
  });
  test("rate가 존재하지 않는 경우 테스트", () => {
    // Given 
    const bank = new Bank();
    // When
    // Then
    expect(bank.rate("USD", "XXX")).toBe(1);
  });
  test("서로 다른 통화 더하기 테스트", () => {
    // Given
    const fiveDallar = Money.dallar(5);
    const tenFranc = Money.franc(10);
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    // When
    const result = bank.reduce(fiveDallar.plus(tenFranc), "USD");
    // Then
    expect(Money.dallar(10).equals(result)).toBeTruthy();
  })
});