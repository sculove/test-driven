class TestClass {
  constructor(protected name:string) {};
  run() { 
    // @ts-ignore
    this[this.name]();
  }
}

export default TestClass;