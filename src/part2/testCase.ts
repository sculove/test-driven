class TestClass {
  public wasSetup:boolean;
  constructor(protected name:string) {};
  setup() {
    this.wasSetup = true;
  }
  run() {
    this.setup(); 
    // @ts-ignore
    this[this.name]();
  }
}

export default TestClass;