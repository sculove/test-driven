import TestCase from "./testCase";
class WasRun extends TestCase{
  constructor(private target: string) {
    super(target);
  }
  testMethod() { 
  
  }
  testFailMethod() {
    throw new Error("error");
  }
}

export default WasRun;