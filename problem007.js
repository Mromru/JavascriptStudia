function findMax(){
   var max = -Infinity;
   for(var i = 0; i<arguments.length; i++){
     max = Math.max(max,arguments[i]);
   }
   return max;
}