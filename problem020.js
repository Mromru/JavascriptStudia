var Square = function(a){
	var obj = {
		getArea: function() {return a*a;},
		getPerimeter: function() {return 4*a}
	};
	return obj;
}