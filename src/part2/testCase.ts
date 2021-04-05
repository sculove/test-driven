import TestResult from "./testResult";

class TestClass {
  public wasRun:boolean;
  public wasSetup:boolean;
  public log:string;
  constructor(protected name:string) {};
  setup() {
    this.wasSetup = true;
    this.wasRun = false;
    this.log = "setUp ";
  }
  run() {
    const result = new TestResult();
    this.setup(); 
    try{
      this.wasRun = true;
      result.testStarted();
      this.log += this.name;
      // @ts-ignore
      this[this.name]();
    } catch(e) {
      result.testFailed();
    }
    this.tearDown();
    return result;
  }
  tearDown() {
    this.log += " tearDown";
  }
}

export default TestClass;