function carry (a, ...args)
{
  if(args.length < a.length){  //jezeli trzeba przyjąć kolejne argumenty
    return (...nextArgs) => carry(a, ...args, ...nextArgs);
  }
  else{ //jezeli wszystkie argumenty są już dostępne w scope
    return a(...args);
  }
}