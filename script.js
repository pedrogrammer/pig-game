'use strict';

// Selecting elements
const
    player0CurrentScore = document.querySelector('#current-score-0'),
    player1CurrentScore = document.querySelector('#current-score-1'),
    player0TotalScore = document.querySelector('#total-score-0'),
    player1TotalScore = document.querySelector('#total-score-1'),
    diceImage = document.querySelector('.dice'),
    rollButton = document.querySelector('.roll-button'),
    holdButton = document.querySelector('.hold-button'),
    newButton = document.querySelector('.new-button')
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
});