function alertForMiscreant(people) {
  for(const p of people) {
    if(p === "조커") {
      setOffAlrm();
      return "조커"
    }
    if(p === "사루만") {
      setOffAlrm();
      return "사루만"
    }
  }
}

alertForMiscreant(people);