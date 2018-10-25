function getTotalNumberOfNewYaersEveSundays(a, b) {
  a = a.toFixed();
  var date = new Date();
  date.setMonth(1);
  date.setDate(1);
  var counter = 0;
  for(var i = a; i<=b; i++){
    date.setYear(i);
    if(date.getDay()==3)
      counter++
  }
  return counter;
}
