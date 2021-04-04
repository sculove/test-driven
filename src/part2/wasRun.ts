class WasRun {
  public wasRun:boolean;
  constructor(private target: string) {}
  testMethod() { 
    this.wasRun = true;
  }
  run() { 
    // @ts-ignore
    this[this.target]();
  }
}

export default WasRun;