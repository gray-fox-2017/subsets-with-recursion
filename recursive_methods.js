let choose_team = (n, k) => {
  //write your code here
  var n2 = n-1;
  var k2 = k-1;
  var n3 = n-1;
  var k3 = k;

  if (k === 1) {
    return n;
  } else if (k === n){
    return 1
  } else {
    return choose_team(n2,k2) + choose_team(n3, k3);
  }
}

console.log(choose_team(6, 1));
console.log(choose_team(6, 6));
console.log(choose_team(24, 4));
console.log(choose_team(6, 2));
console.log(choose_team(6, 3));
