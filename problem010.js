function deepCopy(a) {
    if(a.length === undefined){
      return undefined;
    }
    var b = [];
    
    for(var i = 0; i<a.length; i++){
      if(a[i].length !== undefined){
        b[i] = deepCopy(a[i]);
      }
      else{
        b[i] = a[i];
      }
    }
    return b;
}