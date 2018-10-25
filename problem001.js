function triangleArea(a,b,c){
  if(a>0 && b>0 && c>0 && a + b > c && a + c > b && b + c > a){
    var p = (a+b+c)/2;
    return parseFloat(Math.sqrt(p*(p-a)*(p-b)*(p-c)).toFixed(2)); //ze wzoru Herona
  }
  else return -1;
}
