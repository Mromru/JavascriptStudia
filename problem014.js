var Vectors = {
    sum: function(a,b) {
      if(a.length === undefined || b.length === undefined){
        return false;
      }
	  
      if(a.length !== b.length){
        return false;
      }
      
		for(var i = 0; i<a.length; i++){
          a[i] += b[i];
        }
		return a;
    },
    mulByScalar: function(a,b) {
      if(typeof(b) !== 'number'){
		  return false;
	  }
	  
	  for(var i = 0; i<a.length; i++){
		  a[i]*= b;
	  }
	  return a;
    }
};
