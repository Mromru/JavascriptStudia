function parametricSort(a, b) {
  if(b!='asc' && b!='desc'){
    return false;
  }
  
  if(b=='asc'){
    b = ((c,d) => {return c-d});
  }
  else{
    b = ((c,d) => {return d-c});
  }
  return a.sort(b);
}