import TestCase from "./testCase";
import TestResult from "./testResult";

class TestSuite {
  add(testCase: TestCase) {

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