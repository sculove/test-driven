import TestCase from "./testCase";
class WasRun extends TestCase{
  public wasRun:boolean;
  public wasSetup:boolean;
  constructor(private target: string) {
    super(target);
  }
  testMethod() { 
    this.wasSetup = true;
    this.wasRun = true;
  }
}

export default WasRun;