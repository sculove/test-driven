class TestResult {
  public runCount:number = 0;

  testStarted() {
    this.runCount++;
  }
  summary() {
    return `${this.runCount} run, 0 failed`;
  }
}

export default TestResult;