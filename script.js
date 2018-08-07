
let person = prompt("Do you want to play?");
if (person === "yes"){
let user = prompt("What is your name?");




let userHealthPoints = 40;
let grantHealthPoints = 10;
let wins = 0;



while (wins < 3 && grantHealthPoints >= 0){

grantHealthPoints -= Math.floor(Math.random() *2)+1;
userHealthPoints -= Math.floor(Math.random() *2)+1;
 
  console.log( `Grant the Almighty has ${grantHealthPoints} left.`);
  
  console.log(`${user} has ${userHealthPoints} left.`)
  
  if (grantHealthPoints === 0){
wins++;
grantHealthPoints=10;
console.log("User wins")
}
}
}


