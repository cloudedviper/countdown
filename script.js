let timerInterval;

document.getElementById('startButton').addEventListener('click', function() {
    clearInterval(timerInterval); // Clear any existing intervals
    let time = parseInt(document.getElementById('timeInput').value);
    let timerDisplay = document.getElementById('timer');

    timerInterval = setInterval(function() {
        if (time > 0) {
            timerDisplay.textContent = time;
            time--;
        } else {
            timerDisplay.textContent = 'Time\'s up!';
            clearInterval(timerInterval);
        }
    }, 1000);
});
