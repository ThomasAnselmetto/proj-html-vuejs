const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const counter = setInterval(boleanersCountDown, 1000);
const countDownDate = new Date("Feb 23, 2023 00:00:00").getTime();
console.log(countDownDate);

let totalSeconds = 0;
boleanersCountDown();

function boleanersCountDown() {
  const now = new Date().getTime();
  let gapDiDate = countDownDate - now;
  console.log(gapDiDate);
  ++totalSeconds;
  let days = Math.floor(gapDiDate / (1000 * 60 * 60 * 24));
  daysEl.innerHTML = days < 10 ? "0" + days : days;

  let hours = Math.floor(
    (gapDiDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;

  let minutes = Math.floor((gapDiDate % (1000 * 60 * 60)) / (1000 * 60));
  minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;

  let seconds = Math.floor((gapDiDate % (1000 * 60)) / 1000);
  secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  // console.log(days);
  // console.log(hours);
  // console.log(minutes);
  // console.log(seconds);

  if (gapDiDate < 0) {
    clearInterval();
  }
}
