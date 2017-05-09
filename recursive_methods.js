let choose_team = (n, k) => {
  //write your code here
  var n2 = n-1;
  var k2 = k-1;

  if (k === 1) {
    return n;
  } else if (k === n){
    return 1
  } else {
    return choose_team(n2,k2) + choose_team(n2, k);
  }
}

console.log(choose_team(6, 1));
console.log(choose_team(6, 6));
console.log(choose_team(24, 4));
console.log(choose_team(6, 2));
console.log(choose_team(6, 3));
console.log(choose_team(4, 2));