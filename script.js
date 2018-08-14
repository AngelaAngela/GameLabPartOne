"use strict";{
function startGame(){


	let person = prompt("Do you want to play?");
	if (person === "yes") {

		let user = prompt("What is your name?");
		let userHealthPoints = 40;
		let grantHealthPoints = 10;
		let wins = 0;
		startCombat();

		function startCombat (){


			while (wins < 3 && userHealthPoints > 0){

				const action = prompt("attack or quit? (enter 'a' or 'q' for your choice)")
           if (action !== "a") {
               console.log ("Thank you for playing today!");
               break;
            }
				getDamage();
			  	console.log( `Grant the Almighty has ${grantHealthPoints} left.`);
			  
			  	console.log(`${user} has ${userHealthPoints} left.`)
			  
			  	if (grantHealthPoints <= 0){
					wins++;
					grantHealthPoints=10;
					console.log("User wins")
				}
			}
		}
		function getDamage(){
			grantHealthPoints -= Math.floor(Math.random() *5)+1;
			userHealthPoints -= Math.floor(Math.random() *5)+1;
}

	}



}

startGame();
}