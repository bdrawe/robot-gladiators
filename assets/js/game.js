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
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney)
            break;
        } else { 
            fight()
         }
        }

    if (promptFight === 'FIGHT' || promptFight === 'fight') {
    //subtract the value of the 'playerAttack' and use that result to update the value in the 'enemyHealth' variable.
    //generate random damage value based on player's attack power
    var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);
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
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
    //Log a resulting message to the console so we know it worked.
    console.log (
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining '
    );
    //check player's health
    if (playerHealth <= 0){
        if(playerHealth > 0) {
            window.alert("Welcome to the Robot Gladiators! Round " + (i + 1));
        } else {
            window.alert('You have lost your robot in Battle! Game over!');
        break;
    }
        
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
//function to generate a random number 

var randomNumber = function(min, max) {
    var value =  Math.floor(Math.random() * (min - max + 1) + min);
    return value;
}

var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        var pickedEnemyName = enemyNames[i];
        enemyHealth = randomNumber(40,60);
        
        if(playerHealth > 0) {
            window.alert("Welcome to the Robot Gladiators! Round " + (i + 1));
        } else {
            window.alert('You have lost your robot in Battle! Game over!');
        break;
    }
    fight(pickedEnemyName);
    if (playerHealth > 0 && i < enemyNames.length - 1) {
        var storeConfirm =  window.confirm("The fight is over, visit the store before the next round?");
        if(storeConfirm){
            shop();
        }
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
var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL','UPGRADE', or 'LEAVE' to make a choice.");
    switch(shopOptionPrompt){
        case 'REFILL':
        case 'refill':
            console.log('refill');
            if (playerMoney >=7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            
            playerHeath = playerHealth + 20;
            playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;
        case 'UPGRADE':
            window.alert("Upgrading player's attack by 6 for 7 dollars");
            console.log('upgraded your attack');
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            break;
        case 'upgrade':
            window.alert("Upgrading player's attack by 6 for 7 dollars");
            console.log('upgraded your attack');
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            break;
        case 'LEAVE':
            window.alert("Leaving the Store");
            console.log('left');
            break;
        case 'leave':
            window.alert("Leaving the Store");
            console.log('left');
            break;
        default:
            window.alert("You did not pick a valid option. Try again. ");
            shop();
            break;
    }
}

startGame();