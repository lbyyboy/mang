$(document).ready(function () {
  var countDownDate = new Date('December 27, 2024 21:00:00').getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days,
    document.getElementById("hours").innerText = hours,
    document.getElementById("minutes").innerText = minutes,
    document.getElementById("seconds").innerText = seconds;
    if (distance < 0) {
      document.getElementById('timer').style.display = 'none';
    }
  }, 1000);
});
