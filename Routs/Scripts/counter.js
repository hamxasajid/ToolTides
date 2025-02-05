// Stopwatch functionality
let stopwatchInterval;
let stopwatchTime = 0;
let stopwatchRunning = false;

const startStopwatchBtn = document.getElementById("start-stopwatch");
const resetStopwatchBtn = document.getElementById("reset-stopwatch");
const stopwatchDisplay = document.getElementById("stopwatch");

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        startStopwatchBtn.textContent = "Pause";
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            let minutes = Math.floor(stopwatchTime / 60);
            let seconds = stopwatchTime % 60;
            let hours = Math.floor(minutes / 60);
            minutes = minutes % 60;
            stopwatchDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        }, 1000);
    } else {
        clearInterval(stopwatchInterval);
        startStopwatchBtn.textContent = "Resume";
        stopwatchRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    stopwatchRunning = false;
    startStopwatchBtn.textContent = "Start";
    stopwatchDisplay.textContent = "00:00:00";
}

function pad(num) {
    return num < 10 ? "0" + num : num;
}

startStopwatchBtn.addEventListener("click", startStopwatch);
resetStopwatchBtn.addEventListener("click", resetStopwatch);

// Timer functionality
let timerInterval;
let timerTime = 0;
let timerRunning = false;

const startTimerBtn = document.getElementById("start-timer");
const stopTimerBtn = document.getElementById("stop-timer");
const resetTimerBtn = document.getElementById("reset-timer");
const timerInput = document.getElementById("timer-input");
const timerDisplay = document.getElementById("timer");

function startTimer() {
    let inputTime = parseInt(timerInput.value);
    if (!inputTime) {
        alert("Please enter a valid time in seconds");
        return;
    }

    timerTime = inputTime;
    if (!timerRunning) {
        timerRunning = true;
        startTimerBtn.textContent = "Pause";
        timerInterval = setInterval(() => {
            if (timerTime <= 0) {
                clearInterval(timerInterval);
                timerRunning = false;
                startTimerBtn.textContent = "Start";
                alert("Time's up!");
            } else {
                timerTime--;
                let minutes = Math.floor(timerTime / 60);
                let seconds = timerTime % 60;
                timerDisplay.textContent = `${pad(minutes)}:${pad(seconds)}`;
            }
        }, 1000);
    } else {
        clearInterval(timerInterval);
        startTimerBtn.textContent = "Resume";
        timerRunning = false;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    startTimerBtn.textContent = "Start";
}

function resetTimer() {
    clearInterval(timerInterval);
    timerTime = 0;
    timerRunning = false;
    startTimerBtn.textContent = "Start";
    timerDisplay.textContent = "00:00:00";
}

startTimerBtn.addEventListener("click", startTimer);
stopTimerBtn.addEventListener("click", stopTimer);
resetTimerBtn.addEventListener("click", resetTimer);
