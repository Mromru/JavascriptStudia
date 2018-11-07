var Stack = {
  array: [],
  count: 0,
  push: function(a,b=1){
    for(var i = 0; i<b-1; i++){
		this.array[this.count+i] = null;
	}
	this.array[this.count+b-1] = a; 
    this.count +=b;
  },
  pop: function(a=1){
    var result = undefined;
    for(var i = 0; i<a; i++){
      result = this.array.pop();
    }
    return result;
  }
};