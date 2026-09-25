// Step 1: Write the logic to get the computer choice
// Create a function that produces a random integer value up to a chosen integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Create a function that randomly returns "rock", "paper", or "scissors"
function getComputerChoice() {
    switch (getRandomInt(3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Step 2: Write the logic to get the human choice
// Create a function which prompts the user for a choice.
function getHumanChoice() {
    return prompt("Make your choice. 'rock', 'paper', or 'scissors'?: ");
}

// Step 4: Write the logic to play a single round
// Create a function that parses the user's input string into lower case
function parseLowercase(input) {
    return input.toLowerCase();
}

// Create a function that compares 2 string inputs and decides a winner according to the rules of Rock Paper Scissors
function determineWinner(humanChoice, computerChoice) {
    let parseHumanChoice = parseLowercase(humanChoice);
    if (parseHumanChoice === computerChoice) {
        return "tie";
    } else if (parseHumanChoice === "rock" && computerChoice === "paper") {
        return "computer";
    } else if (parseHumanChoice === "rock" && computerChoice === "scissors") {
        return "human";
    } else if (parseHumanChoice === "paper" && computerChoice === "rock") {
        return "human";
    } else if (parseHumanChoice === "paper" && computerChoice === "scissors") {
        return "computer";
    } else if (parseHumanChoice === "scissors" && computerChoice === "rock") {
        return "computer";
    } else if (parseHumanChoice === "scissors" && computerChoice === "paper") {
        return "human";
    } 
}

// Step 5: Write the logic to play a 5 round game of Rock, Paper, Scissors
// Create a function that runs 5 rounds
function playGame() {
    // Create 2 variables to store the user and computer's scores
    // Initialize them with a value of 0
    let humanScore = 0;
    let computerScore = 0;

    // Create a function that increments either the score of the human or computer
    // Include one parameter that decides which score to increment
    function incrementScore(winner) {
        switch (winner) {
            case "human":
                humanScore++;
                break;
            case "computer":
                computerScore++;
        }
    }

    // Create a function to play one round of Rock Paper Scissors
    // Include 2 parameters for the human and computer choices
    function playRound(humanChoice, computerChoice) {
        let winner = determineWinner(humanChoice, computerChoice);
        switch (winner) {
            case "human":
                console.log(`You won! ${humanChoice} beats ${computerChoice}`);
                break;
            case "computer":
                console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
                break;
            case "tie":
                console.log(`You tie! ${humanChoice}, and ${computerChoice} are the same!`);
        }
        incrementScore(winner);
    }

    // Create a loop that runs 5 rounds
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    // declare winner
    if (humanScore > computerScore) {
        console.log(`You win!
        Your score: ${humanScore} points
        Computer score: ${computerScore} points`);
    } else if (humanScore < computerScore) {
        console.log(`You loose!
        Your score: ${humanScore} points
        Computer score: ${computerScore} points`);
    }
    else if (humanScore === computerScore) {
        console.log(`You tie!
        Your score: ${humanScore} points
        Computer score: ${computerScore} points`);
    }
}

playGame();