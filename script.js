
    const playerBox = document.querySelector('.player-box img[data-player-image]');
    const computerBox = document.querySelector('.computer-box img[data-computer-image]');
    const winnerBox = document.querySelector('.winner-box p[data-winner]');
    const paperBtn = document.querySelector('[data-paper]');
    const rockBtn = document.querySelector('[data-rock]');
    const scissorsBtn = document.querySelector('[data-scissors]');

    const choices = ['rock', 'paper', 'scissors'];

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
                   (playerChoice === 'paper' && computerChoice === 'rock') ||
                   (playerChoice === 'scissors' && computerChoice === 'paper')) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }

    function displayWinner(winner) {
        winnerBox.textContent = winner;
    }

    function playGame(playerChoice) {
        const computerChoice = getComputerChoice();
        playerBox.setAttribute('src', `images/${playerChoice}.png`);
        computerBox.setAttribute('src', `images/${computerChoice}.png`);
        const winner = determineWinner(playerChoice, computerChoice);
        displayWinner(winner);
    }

    paperBtn.addEventListener('click', () => playGame('paper'));
    rockBtn.addEventListener('click', () => playGame('rock'));
    scissorsBtn.addEventListener('click', () => playGame('scissors'));


    function showImages() {
        const images = document.querySelectorAll('.both-images');
        images.forEach(image => {
            image.style.display = 'block';
        });
    }
    
    paperBtn.addEventListener('click', () => {
        showImages();
        playGame('paper');
    });
    rockBtn.addEventListener('click', () => {
        showImages();
        playGame('rock');
    });
    scissorsBtn.addEventListener('click', () => {
        showImages();
        playGame('scissors');
    });
    
