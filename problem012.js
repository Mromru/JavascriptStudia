function objectsDiff(a, b) {
  var array1 = Object.getOwnPropertyNames(a);
  var array2 = Object.getOwnPropertyNames(b);
  var array3 = [];
  
  for(var i = 0; i<array1.length; i++){
    var found = false;
    for(var j = 0; j<array2.length; j++){
      if(array1[i] === array2[j]){
        found = true;
      }
    }
    if(!found){
      array3.push(array1[i]);
    }
  }
  
  for(var i = 0; i<array2.length; i++){
    var found = false;
    for(var j = 0; j<array1.length; j++){
      if(array2[i] === array1[j]){
        found = true;
      }
    }
    if(!found){
      array3.push(array2[i]);
    }
  }
  return array3;
}