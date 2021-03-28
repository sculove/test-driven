import Dallar from "./dallar";

describe("다중 통화를 지원하는 Money 객체", () => {
  test("$5 * 2 = 10$ 테스트", () => {
    const five:Dallar = new Dallar(5);
    const product = five.times(2);
    expect(product.equals(new Dallar(10))).toBeTruthy();
  });
  test("Dallar의 side-effect. 여러번 times 하는 테스트", () => {
    // Given
    const five:Dallar = new Dallar(5);
    // When
    let product = five.times(2);
    // Then
    expect(product.equals(new Dallar(10))).toBeTruthy();
    
    // When
    product = five.times(3);
    // Then
    expect(product.equals(new Dallar(15))).toBeTruthy();
  });
  test("Dallar 비교 테스트", () => {
    // TODO: Null 이나 dallar가 아닌 object인 경우 추가 테스트가 필요함
    expect(new Dallar(5).equals(new Dallar(5)));
  });
});