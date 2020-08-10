var playerName = window.prompt("What is your Robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (){
    //Letting people know that the game starting
    window.alert("Welcome to Robot Gladiators");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

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
        window.alert(
            playerName + ' has died!') 
        } else {
            window.alert (playerName + ' still has ' + playerHealth + ' health left');
        }
    } else if (promptFight === 'skip' || promptFight === "skip"){
       var confirmSkip = window.confirm("Are you sure you want to QUIT?")
       if (confirmSkip) {
           window.alert(playerName + ' has decided to skip this fight, Goodbye!');
           playerMoney = playerMoney - 2;
       } else { 
           fight()
        }
    
    } else {
        window.alert("You need to pick a valid option")
    }
    
}

fight();