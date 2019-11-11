let reply = prompt("Do you want to play a game?");

if (reply.toLocaleLowerCase() === "yes") {
  let playerName = prompt("What is your name?");
  console.log("Welcome to the match");
  let playerHealth = 40;
  let grantHealth = 10;
  let grantDeath = 0;

  while (playerHealth > 0 && grantDeath < 3) {
      
    let attack = Math.floor(Math.random() * 2) + 1;
    let punsishment = Math.floor(Math.random() * 1) + 2;
    grantRemainingHealth = grantHealth - attack;
    playerRemainingHealth = playerHealth - punsishment;

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


