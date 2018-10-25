function magicSequence(a) {
    if(!Number.isInteger(a)){
      return undefined;
    }
    if(a == 1){
      return -1;
    }
    if(a <=3){
      return -2;
    }
    else{
      return magicSequence(a - 1) * (a - 3);
    }
}

