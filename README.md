# rock-paper-scissors
    > Understand the problem
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
