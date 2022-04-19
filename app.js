// Set the date we're counting down to
const countDownDate = new Date("2022-04-30T12:30:45Z").getTime();
setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("day").innerHTML = days;
document.getElementById("hrs").innerHTML = hours;
document.getElementById("mins").innerHTML = minutes;
document.getElementById("secs").innerHTML = seconds;

// console.log(days, hours, minutes, seconds);


if (distance < 0) {
  clearInterval(x);
}
}, 1000);
