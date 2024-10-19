let score = 0;
let isGameActive = false;
let timer;
function startGame() {
    score = 0;
    isGameActive = true;
    document.getElementById('score').textContent = score;
    document.getElementById('timer').textContent = 'Time: 5 seconds';

    document.getElementById('start-button').disabled = true;
    let timeLeft = 5;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Time: ${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    isGameActive = false;
    alert(`Game over! Your score: ${score}`);
    document.getElementById('start-button').disabled = false; 
}
document.getElementById('click-button').addEventListener('click', () => {
    if (isGameActive) {
        score++;
        document.getElementById('score').textContent = score;
    }
});
document.getElementById('start-button').addEventListener('click', startGame);
