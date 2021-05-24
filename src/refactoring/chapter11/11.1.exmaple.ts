function findMiscreant(people) {
  for(const p of people) {
    if(p === "조커") {
      return "조커"
    }
    if(p === "사루만") {
      return "사루만"
    }
  }
}

function alertMiscreant(people) {
  for(const p of people) {
    if(p === "조커") {
      setOffAlarm();
      return;
    }
    if(p === "사루만") {
      setOffAlarm();
      return;
    }
  }
}

const found = findMiscreant(people);
alertMiscreant(people);