function reverse(a) {
  return function(){
    let reversedArgs = [];
    for(let i = 0; i<arguments.length;i++){
      reversedArgs[i]=arguments[arguments.length-i-1];
    }
    return a(...reversedArgs);
  }
}