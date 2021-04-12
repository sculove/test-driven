// 상속하긴 너무 무겁고, 메소드 하나만 동적으로 자유롭게 쓰고 싶다.
class SelectorBefore {
  private model = {
    name: "warren",
    job: "programmer"
  };
  print(format: string) {
    switch(format) {
      case "json":
        this.printJson();
        break;
      case "html":
        this.printHtml();
        break;        
      case "text":
        this.printText();
        break;        
    }
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
    console.log(text.join(""));
  }
}

export default SelectorBefore;