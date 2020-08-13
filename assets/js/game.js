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






var fight = function(enemy) {
    
    
    //repeat and execute as long as the enemy robot is alive
    while(enemy.health > 0 && playerInfo.health > 0){
        
    //asking if they want to fight or skip this battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if user picks 'skip' confirm and then stop the loop
    if (promptFight === 'skip' || promptFight === "skip"){
        //confirm they want to skip
        var confirmSkip = window.confirm("Are you sure you want to QUIT?")
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + ' has decided to skip this fight, Goodbye!');
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money)
            break;
        } else { 
            fight()
         }
        }

    if (promptFight === 'FIGHT' || promptFight === 'fight') {
    //subtract the value of the 'playerAttack' and use that result to update the value in the 'enemy.health' variable.
    //generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    //Log a resulting message to the console so we know that it worked
    console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining ' 
    );
    //check enemy's health 
    if ( enemy.health <= 0){
        window.alert(enemy.name + ' has died!');
        playerInfo.money = playerInfo.money + 20;
        break;
    } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    };
    //Subtract the value of the 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    //Log a resulting message to the console so we know it worked.
    console.log (
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining '
    );
    //check player's health
    if (playerInfo.health <= 0){
        if(playerInfo.health > 0) {
            window.alert("Welcome to the Robot Gladiators! Round " + (i + 1));
        } else {
            window.alert('You have lost your robot in Battle! Game over!');
        break;
    }
        
        window.alert(playerInfo.name + ' has died!');
        break; 
        } else {
            window.alert (playerInfo.name + ' still has ' + playerInfo.health + ' health left');
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

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function(){
        if (this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        } 
    }
};


var enemyInfo = [
    {
        name: "Roborto",
        attack: (10,14)
    },
    {
        name: "Amy Android",
        attack: (10,14)
    },
    {
        name:"Robo Trumble",
        attack: (10,14)
    }
];

var startGame = function() {
    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++) {
        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40,60);
        
        if(playerInfo.health > 0) {
            window.alert("Welcome to the Robot Gladiators! Round " + (i + 1));
        } else {
            window.alert('You have lost your robot in Battle! Game over!');
        break;
    }
    fight(pickedEnemyObj);
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
            playerInfo.refillHealth();
            break;
        case 'UPGRADE':
        case 'upgrade':
            playerInfo.refillHealth();
            break;
        case 'LEAVE':
        case 'leave':
            window.alert("Leaving the Store");
            break;
        default:
            window.alert("You did not pick a valid option. Try again. ");
            shop();
            break;
    }
}

startGame();