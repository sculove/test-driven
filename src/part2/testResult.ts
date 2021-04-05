class TestResult {
  public runCount:number = 0;
  public failureCount:number = 0;

  testStarted() {
    this.runCount++;
  }
  testFailed() {
    this.failureCount++;
  }
  summary() {
    return `${this.runCount} run, ${this.failureCount} failed`;
  }
}

export default TestResult;