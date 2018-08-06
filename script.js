let userHealthPoints = 40;
let grantHealthPoints = 10;
let wins = 0;

while (wins < 3 && grantHealthPoints >= 0){

grantHealthPoints -= Math.floor((Math.random() *1)+2);
userHealthPoints -= Math.floor(Math.random() *1)+2;
  console.log( `grants ${grantHealthPoints}`);
  console.log(`user ${userHealthPoints}`)
  if (grantHealthPoints === 0){
wins++;
grantHealthPoints=10;
console.log("user wins")
}
}



