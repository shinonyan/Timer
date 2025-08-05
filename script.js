// timeInSeconds stores how many seconds the timer should count down from (300 seconds = 5 minutes).
let timeInSeconds = 300; // 5 minutes
// timerInterval will hold the reference to the setInterval timer so we can stop it later.
let timerInterval;

function updateDisplay() {
  const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, '0');
  const seconds = String(timeInSeconds % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (timerInterval) return; // prevent multiple intervals

  timerInterval = setInterval(() => {
    if (timeInSeconds > 0) {
      timeInSeconds--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time's up!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval); // Stop the timer
  timerInterval = null;
  timeInSeconds = 300; // Reset to original time
  updateDisplay(); // Update UI immediately
}

// Initialize display on load
updateDisplay();
