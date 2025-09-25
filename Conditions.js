

let playerScore = 0;


function addPoint() {
  playerScore++;
}

function displayScore() {
  console.log("Player Score:", playerScore);

  // Check if odd or even
  if (playerScore % 2 === 0) {
    console.log("The score is even!");
  } else {
    console.log("The score is odd!");
  }
}

addPoint();       
displayScore();   

addPoint();       
displayScore();   
