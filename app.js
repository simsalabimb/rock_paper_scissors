

const container = document.querySelector('#container');
const newDiv = document.createElement('div');
container.appendChild(newDiv);
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("computerScore");


let playerWins = 0;
let computerWins = 0;


function userInput(){

    rock.addEventListener('click', function(){   
        playRound("rock");
    });

    paper.addEventListener('click', function(){   
        playRound("paper");
    });

    scissors.addEventListener('click', function(){   
        playRound("scissors");
    });
}

function playRound(playerSelection){

    let computerSelection = computerPlay();

    if (playerSelection == "rock" && computerSelection == "scissors"){
        newDiv.textContent = "You won! Rock beats Scissors";
        win();
    }
    
    else if (playerSelection == "paper" && computerSelection == "rock"){
         newDiv.textContent = "You won! Paper beats Rock";
        win();
    }
    
    else if(playerSelection == "scissors" && computerSelection == "paper"){

         newDiv.textContent = "You won! Scissors beats Paper";

        win();
    }

    else if (playerSelection == "scissors" && computerSelection == "rock"){
        newDiv.textContent = "You lost! Rock beats Scissors";
        loss();
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
         newDiv.textContent = "You lost! Paper beats Rock";
        loss();
    }          
    else if(playerSelection == "paper" && computerSelection == "scissors"){
         newDiv.textContent = "You lost! Scissors beats Paper";
        loss();
    }
    else {
         newDiv.textContent = "It's a tie!";            
         return ;
    }
}

     function computerPlay(){
      const num = Math.floor(Math.random()*3)
      
      switch(num){
        case 0:
         shoot = "rock";
         break;

        case 1:
         shoot = "paper";
         break;

         case 2:
         shoot = "scissors";
         break;
      }

      return shoot;
    }

    function win(){
        playerWins++;
        score();
    }

    function loss(){
        computerWins++;
        score();
    }

    function score(){
        userScore.innerHTML = `You: ` + playerWins;
        computerScore.innerHTML = `Computer:  ` + computerWins;
    }


userInput();
