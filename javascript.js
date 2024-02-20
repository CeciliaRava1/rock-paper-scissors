rock.addEventListener("click", rockFunction);


/*  > Understand the problem
      - rock > scissors > paper > rock
      -  2   >    1     >   0   <   2

    > Obtain computer selection
    - Declare the function 'getComputerChoice'
        - 0 arguments. 
        - Declare the var 'computerSelection'
        - Use math.floor(math.random() * 3) to obtain random numbers between 0 and 2.
    - Execute the function 'getComputerChoice'

   > Obtain player selection
    - Declare the var 'playerSelection'
    - Ask user for a value between 0 and 2, correspondent to 'rock', 'paper' or 'scissors'
 
   > Execute a round of the game rock-paper-scissors
    - Declare the function 'playSingleRound'
        - Arguments: 'computerSelection' and 'playerSelection'


//  Declare the function 'getComputerChoice'
let computerSelection;
function getComputerChoice(){
    computerSelection = Math.floor(Math.random() * 3);
}

// Obtain player selection
let correctValue = false;
let playerSelection;
while (correctValue !== true){
    playerSelection = prompt('Choice a number: 0.rock, 1.paper, 2.scissors', "")
    playerSelection = parseInt(playerSelection);

    if(playerSelection >= 0 && playerSelection <=2){
        correctValue = true;
    }
}

// Obtain computer selection
getComputerChoice();

// Declare a function to convert option number to string
function convertNumberToChar(number){
    switch(number){
        case 0:
            number = 'rock';
            break;
        case 1:
            number = 'paper';
            break;
        case 2:
            number = 'scissors';
            break;
    }
    return number;
}

// Obtain string
console.log('You: ' + convertNumberToChar(playerSelection));
console.log('Computer: ' + convertNumberToChar(computerSelection));


// Declare the function 'playSingleRound'
function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection == 0 && computerSelection == 2 || playerSelection == 2 && computerSelection == 1) {
        return 'You win!';
    } else if(playerSelection == computerSelection){
        return 'You tied with the computer!';
    } else if(playerSelection == 2 && computerSelection == 0){
        return 'You lose!';
    } else if( playerSelection > computerSelection){
       return 'You win!';
    } else {
        return 'You lose!';
    }
}

// Execute a round of the game rock-paper-scissors
console.log(playSingleRound(playerSelection, computerSelection));

*/
