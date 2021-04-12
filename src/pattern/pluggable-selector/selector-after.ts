class SelectorAfter {
  [key: string]: any;
  private model = {
    name: "warren",
    job: "programmer"
  };
  print(format: string) {
    // 동적으로 만들기
    const methodName = format.charAt(0).toUpperCase + format.substring(1);
    this[methodName]();
  }
  printJson() {
    console.log(JSON.stringify(this.model, null, "\t"))
  }
  printHtml() {
    const html = Object.entries(this.model).reduce((acc, [key, value]) => {
      acc.push(`<li>${key} : ${value}</li>`);
      return acc;
    }, ['<ul>']);
    html.push("</ul>");
    console.log(html.join(""));
  }
  printText() {
    const text = Object.entries(this.model).reduce((acc, [key, value]) => {
      acc.push(`${key} : ${value}`);
      return acc;
    }, []);
    console.log(text.join("\n"));
  }
}

export default SelectorAfter;