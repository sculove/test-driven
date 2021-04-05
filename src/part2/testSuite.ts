import TestCase from "./testCase";
import TestResult from "./testResult";

class TestSuite {
  private tests:TestCase[] = [];
  add(testCase: TestCase) {
    this.tests.push(testCase);
  }
  run(result: TestResult) {
    this.tests.forEach((t:TestCase) => {
      t.run(result);
    });
    return result;
  }
}

export default TestSuite;