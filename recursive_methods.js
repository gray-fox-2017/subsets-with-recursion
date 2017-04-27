let choose_team = (n, k) => {
  if (k >= 1 && n - 1 >= k) {
    return parseInt(choose_team(n-1,k-1)) + parseInt(choose_team(n-1,k)) ;
  }else return 1;
}

console.log(choose_team(6, 2)); //15
console.log(choose_team(6, 3)); //20
console.log(choose_team(24, 4)); //10626
