'use strict';

// Selecting elements
const
    player0Section = document.querySelector('.player-0'),
    player1Section = document.querySelector('.player-1'),
    player0CurrentScore = document.querySelector('#current-score-0'),
    player1CurrentScore = document.querySelector('#current-score-1'),
    player0TotalScore = document.querySelector('#total-score-0'),
    player1TotalScore = document.querySelector('#total-score-1'),
    diceImage = document.querySelector('.dice'),
    rollButton = document.querySelector('.roll-button'),
    holdButton = document.querySelector('.hold-button'),
    newButton = document.querySelector('.new-button')
;

let 
    currentScore = 0,
    activePlayer = 0
;

// Starting conditions
player0CurrentScore.textContent = 0;
player1CurrentScore.textContent = 0;
player0TotalScore.textContent = 0;
player1TotalScore.textContent = 0;
diceImage.classList.add('hidden');

// Rolling the dice functionality
rollButton.addEventListener('click',function() {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceImage.src = `/assets/dice-${dice}.png`;
    diceImage.classList.remove('hidden');

    // 3. Check for rolled a 1
    if(dice !== 1) {
        // Add dice to the current score
        currentScore += dice;
        document.querySelector(`#current-score-${activePlayer}`).textContent = currentScore;
    } else {
        // Switch to the next player
        document.querySelector(`#current-score-${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0Section.classList.toggle('active-player');
        player1Section.classList.toggle('active-player');
    }
});