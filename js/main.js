/*--================================================--*\
              -- the nav Mega Menu button --                     
\*--================================================--*/

let navActive = document.querySelector(
  "header .container nav > ul > li.Other a"
);
let other = document.querySelector("header .container .mega-menu");

document.onclick = function (event) {
  if (event.target == navActive) {
    navActive.classList.toggle("active");
    if (navActive.classList.contains("active")) {
      other.style.cssText = "transform: scaleY(1)";
    } else {
      other.style.cssText = "transform: scaleY(0)";
    }
  } else {
    navActive.classList.remove("active");
    other.style.cssText = "transform: scaleY(0)";
  }
};

/*--================================================--*\
              -- ourSkills Bar Scroll --                     
\*--================================================--*/

let skillsSection = document.querySelector("#our-skills");
let bars = document.querySelectorAll("#our-skills .skill .the-progress span");
let temp = false;

window.addEventListener("scroll", function () {
  if (window.scrollY > skillsSection.offsetTop) {
    bars.forEach((bar) => {
      activeBar(bar);
    });
  }
});

function activeBar(bar) {
  bar.style.width = `${bar.dataset.width}`;
}

/*--================================================--*\
                        -- time --                     
\*--================================================--*/

let event_days = document.querySelector("#events .time .days");
let event_hours = document.querySelector("#events .time .hours");
let event_minutes = document.querySelector("#events .time .minutes");
let event_seconds = document.querySelector("#events .time .seconds");

let eventDate = new Date("12 6 2023 10:00");

setInterval(() => {
  let now = new Date();
  let totalSeconds =
    Math.trunc(eventDate.getTime() / 1000) - Math.trunc(now.getTime() / 1000);
  let days = Math.trunc(totalSeconds / 86400);
  let hours = Math.trunc((totalSeconds - days * 86400) / 3600);
  let minutes = Math.trunc((totalSeconds - days * 86400 - hours * 3600) / 60);
  let seconds = totalSeconds - days * 86400 - hours * 3600 - minutes * 60;

  event_days.innerHTML = days;
  event_hours.innerHTML = hours;
  event_minutes.innerHTML = minutes;
  event_seconds.innerHTML = seconds;
}, 1000);

/*--================================================--*\
                        -- stats --                     
\*--================================================--*/
let statSection = document.querySelector("#stats");
let numbers = document.querySelectorAll("#stats .box .number");
let already = false;

window.onscroll = function () {
  let height = statSection.offsetTop;
  if (window.scrollY > height && already == false) {
    numbers.forEach((number) => {
      count(number);
      already = true;
    });
  }
};

function count(number) {
  let start = 0;
  let goal = number.dataset.goal;
  let inc = goal / 200;
  let interval = setInterval(() => {
    start += inc;
    number.innerHTML = Math.floor(start);
    if (number.innerHTML === goal) {
      clearInterval(interval);
    }
  }, 1);
}
