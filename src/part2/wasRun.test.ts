import WasRun from "./wasRun";

describe("xUnit 개발", () => {
  test("테스트 호출 여부 확인하기", () => {
    // Given
    const test = new WasRun("testMethod");
    expect(test.wasRun).toBeFalsy();
    // When
    test.run();
    // Then
    expect(test.wasRun).toBeTruthy();
  });
  test("setUp 테스트", () => {
    // Given
    const test = new WasRun("testMethod");
    expect(test.wasSetup).toBeFalsy();
    test.run();
    // Then
    expect(test.wasSetup).toBeTruthy();
  });
});
