function deepFindAndCount(a, b) {
    if(a.length === undefined){
      return undefined;
    }
    var counter = 0;
    for(var i = 0; i<a.length; i++){
      if(a[i] instanceof Array){
        counter += deepFindAndCount(a[i],b);
      }
      else{
        if(a[i] === b){
          counter ++;
        }
      }
    }
    return counter;
}