import TestCase from "./testCase";
import TestResult from "./testResult";

class TestSuite {
  private tests:TestCase[] = [];
  add(testCase: TestCase) {
    this.tests.push(testCase);
  }
  run() {
    const result = new TestResult();
    result.testStarted();
    result.testStarted();
    result.testFailed();
    return result;
  }
}

export default TestSuite;