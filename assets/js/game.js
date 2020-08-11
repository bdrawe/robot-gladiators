//Game States
//'WIN' - player robot has defeated all enemy robots.
//  * Fight all enemy robots
//  * Defeat each enemy robot
//'LOSE' - player robot's health is zero or less

//Play Again Feature
// - Wrap the game logic in a startGame() function

//End Game Feature
// - alerts the player's total stats
// - asks the player if they want to play again
// - If yes, call startGame() to restart the game

//When Player skips or defeats an enemy (and there are more robots to fight)
// - ask the Player if they want to 'shop'
// - if no, continue as normal
// - If yes, call the shop() function
// - In the shop() function ask player if they want to 'refill' health, 'upgrade' attack or 'leave' the shop
// - If refill, subtract money points from player and increase health
// - If upgrade, subtract money points from player and increase attack power
// - If leave, alert goodbye and exit the function
// - If any other invalid option, call shop() again.



var playerName = window.prompt("What is your Robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto","Amy Android","Robo Trumble"];
var enemyHealth = 20;
var enemyAttack = 12;

var fight = function(enemyName) {
    
    //repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0 && playerHealth > 0){
    //asking if they want to fight or skip this battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if user picks 'skip' confirm and then stop the loop
    if (promptFight === 'skip' || promptFight === "skip"){
        //confirm they want to skip
        var confirmSkip = window.confirm("Are you sure you want to QUIT?")
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight, Goodbye!');
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            break;
        } else { 
            fight()
         }
        }

    if (promptFight === 'FIGHT' || promptFight === 'fight') {
    //subtract the value of the 'playerAttack' and use that result to update the value in the 'enemyHealth' variable.
    enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to the console so we know that it worked
    console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining ' 
    );
    //check enemy's health 
    if ( enemyHealth <= 0){
        window.alert(enemyName + ' has died!');
        playerMoney = playerMoney + 20;
        break;
    } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    };
    //Subtract the value of the 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    //Log a resulting message to the console so we know it worked.
    console.log (
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining '
    );
    //check player's health
    if (playerHealth <= 0){
        
        window.alert(playerName + ' has died!');
        break; 
        } else {
            window.alert (playerName + ' still has ' + playerHealth + ' health left');
        }
        //skip feature
    }  else {
        window.alert("You need to pick a valid option")
    }
  }  
};
var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
        if(playerHealth > 0) {
            window.alert("Welcome to the Robot Gladiators! Round " + (i+2));
        } else {
            window.alert('You have lost your robot in Battle! Game over!');
        break;
    }
  }
  endGame();
};

//EndGame function
var endGame = function(){
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You have lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm){
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

startGame();