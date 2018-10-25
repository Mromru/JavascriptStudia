function strangeSum(a, b){
  if(Number.isInteger(a) && Number.isInteger(b)){
    if(a==b){
      return 3*(a+b);
    }
    else{
      return a+b;
    }
  }
  else{
    return null;
  }
}
