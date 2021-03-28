import Dallar from "./dallar";
import Franc from "./franc";

describe("다중 통화를 지원하는 Money 객체", () => {
  test("비교 테스트", () => {
    expect(new Dallar(5).equals(new Franc(5))).toBeFalsy();
  });
  test("통화 코드 확인 테스트", () => {
    expect(new Dallar(1).currency()).toBe("USD");
    expect(new Franc(1).currency()).toBe("CHF");
  })

  describe("Dallar 객체 테스트", () => {
    test("여러번 times 하는 테스트", () => {
      // Given
      const five:Dallar = new Dallar(5);
      
      // When, Then
      expect(five.times(2).equals(new Dallar(10))).toBeTruthy();
      
      // When, Then
      expect(five.times(3).equals(new Dallar(15))).toBeTruthy();
    });
    test("Dallar 비교 테스트", () => {
      // TODO: Null 이나 dallar가 아닌 object인 경우 추가 테스트가 필요함
      expect(new Dallar(5).equals(new Dallar(5))).toBeTruthy();
      expect(new Dallar(5).equals(new Dallar(6))).toBeFalsy();
    });
  });

  describe("Franc 객체 테스트", () => {
    test("여러번 times 하는 테스트", () => {
      // Given
      const five:Franc = new Franc(5);
      
      // When, Then
      expect(five.times(2).equals(new Franc(10))).toBeTruthy();
      
      // When, Then
      expect(five.times(3).equals(new Franc(15))).toBeTruthy();
    });
    test("Franc 비교 테스트", () => {
      // TODO: Null 이나 dallar가 아닌 object인 경우 추가 테스트가 필요함
      expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
      expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
    });
  })
});