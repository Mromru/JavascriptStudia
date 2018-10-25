function isLeapYear(a) {
  if(Number.isInteger(a)){
    return ((a%4===0 && a%100!==0) || a%400 === 0) ;
  }
  return undefined;
}
