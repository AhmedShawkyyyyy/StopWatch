let timeZone = document.getElementById("timeZone");
let start = document.getElementById("start");
let stoP = document.getElementById("stoP");
let reset = document.getElementById("reset");

console.log(timeZone);
console.log(start);
console.log(stoP);
console.log(reset);

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timeZone.textContent = formatTime(elapsedTime);
  }, 10);
  start.disabled = true;
  stoP.disabled = false;
}

function formatTime() {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}

function stopTimer() {
  clearInterval(timerInterval);
  start.disabled = false;
  stoP.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timeZone.textContent = "00:00:00";
  start.disabled = false;
  stoP.disabled = true;
}

start.addEventListener("click", startTimer);
stoP.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
