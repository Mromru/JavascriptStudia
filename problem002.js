function stringRotate(a, b) {
  
  var result ="";
  b = b%a.length;
  if(Number.isInteger(b)){
	if(b>=0){
		for(var i = b; i<a.length;i++){
			result+=a.charAt(i);
		}
		for(var i = 0; i<b; i++){
			result+=a.charAt(i);
		}
	}
  }
  return result;
}

