let choose_team = (n, k) => {
  //write your code here
  if (k >=1 && k <= n-1) {
    return choose_team(n-1, k-1) + choose_team(n-1, k)
  } else {
    return 1
}
}

console.log(choose_team(6, 2));
console.log(choose_team(6, 3));
console.log(choose_team(24, 4));
