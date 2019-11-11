/**
 * 
 * @param randomNumber calculates a random number between 2 numbers. 
 */
let randomNumber =(min, max)=> {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// ==========================================================

let reply = prompt("Do you want to play a game?");

if (reply.toLocaleLowerCase() === "yes") {
  let playerName = prompt("What is your name?");
  console.log(`Welcome to the match, Grant has 10 hit points to start. ${playerName} has 40 hit points to start. `);
  let playerHealth = 40;
  let grantHealth = 10;
  let grantDeath = 0;

  while (playerHealth > 0 && grantDeath < 3) {
      
    let attack = randomNumber(1,2);
    let attack1= randomNumber(1,2);
    grantRemainingHealth = grantHealth - attack;
    playerRemainingHealth = playerHealth - attack1;

    console.log(
      `Grant has ${grantRemainingHealth} hit points remaining. ${playerName} has ${playerRemainingHealth} hit points remaining.`
    );

    grantHealth = grantRemainingHealth;
    playerHealth = playerRemainingHealth;

    if (grantHealth <= 0) {
      grantDeath++;
      grantHealth = 10;
      console.log("Grant has been defeated");
    } 
    if (grantDeath === 3) {
      console.log(`${playerName} wins! Grant has died 3 times.`);
      break;
    } else if (playerHealth === 0) {
      console.log("You have lost");
      break;
    }
  }
}  else {
    console.log("Fine be that way!")
}
