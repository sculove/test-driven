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
  test("teardown 호출 순서 테스트", () => {
    // Given 
    const test = new WasRun("testMethod");
    // When
    test.run();
    expect(test.log).toBe("setUp testMethod tearDown");
  });
  test("테스트 결과 테스트", () => {
    // Given
    const test = new WasRun("testMethod");
    // When
    const result = test.run();
    // Then
    expect(result.summary()).toBe("1 run, 0 failed");
  });
  test("실패하는 결과 테스트", () => {
    // Given
    const test = new WasRun("testFailMethod");
    // When
    const result = test.run();
    // Then
    expect(result.summary()).toBe("1 run, 1 failed");
  });
  test("testSuite 테스트", () => {
    // Given
    const suite = new TestSuite();
    suite.add(new WasRun("testMethod"));
    suite.add(new WasRun("testFailMethod"));
    // When
    const result = suite.run();
    // Then
    expect(result.summary()).toBe("2 run, 1 failed");
  })
});
