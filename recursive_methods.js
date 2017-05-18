let choose_team = (n, k) => {
  //write your code here
  if ((1 <= k) && (k <= n-1)) {
    return choose_team(n-1, k-1) + choose_team(n-1, k)
  }
  return 1
}

console.log(choose_team(6, 2)); //15
console.log(choose_team(6, 3)); //20
console.log(choose_team(24, 4)); //10626
