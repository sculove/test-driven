class TestClass {
  public wasRun:boolean;
  public wasSetup:boolean;
  constructor(protected name:string) {};
  setup() {
    this.wasSetup = true;
    this.wasRun = false;
  }
  run() {
    this.setup(); 
    this.wasRun = true;
    // @ts-ignore
    this[this.name]();
  }
}

export default TestClass;