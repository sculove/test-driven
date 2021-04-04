import TestCase from "./testCase";
class WasRun extends TestCase{
  public wasRun:boolean;
  constructor(private target: string) {
    super(target);
  }
  testMethod() { 
    this.wasRun = true;
  }
}

export default WasRun;