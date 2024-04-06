const buttons = document.querySelector(".buttons");
const timer = document.querySelector(".timer");
let startTimer = 0;
let min = 0,
  sec = 0,
  msec = 0;

function updateTimerDisplay() {
  const formatTime = (value) => (value < 10 ? `0${value}` : `${value}`);

  timer.querySelector(".msec h1").innerHTML = formatTime(msec);
  timer.querySelector(".sec h1").innerHTML = sec > 0 ? `${formatTime(sec)} :` : "00 :";
  timer.querySelector(".min h1").innerHTML = min > 0 ? `${formatTime(min)} :` : "00 :";
}

function changeTime() {
  msec++;
  if (msec === 100) {
    msec = 0;
    sec++;
    if (min === 60) {
      sec = 0;
      min++;
    }
  }
  updateTimerDisplay();
}

buttons.querySelector(".start").addEventListener("click", () => {
  if(startTimer===0){
    startTimer = setInterval(changeTime, 10);
  }
  else{
    clearInterval(startTimer);
    startTimer=0;
  }
});

buttons.querySelector(".stop").addEventListener("click", () => {
  clearInterval(startTimer);
  startTimer=0;
});

buttons.querySelector(".reset").addEventListener("click", () => {
  clearInterval(startTimer);
  msec = min = sec = 0;
  updateTimerDisplay();
});
