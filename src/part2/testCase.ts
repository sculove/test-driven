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
    this.setup(); 
    // @ts-ignore
    this[this.name]();
    this.wasRun = true;
    this.log += this.name;
    this.tearDown();
    return new TestResult();
  }
  tearDown() {
    this.log += " tearDown";
  }
}

export default TestClass;