

// Format switcher actions:

const formatSwitchBtn = document.querySelector(".format-switch-btn");
formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");

  let formatValue = formatSwitchBtn.getAttribute("data-format");

  if (formatValue === "12") {
    formatSwitchBtn.setAttribute("data-format", "24");
  } else {
    formatSwitchBtn.setAttribute("data-format", "12");

  }
});
// Basic clock by calling "Date" func in JS
const hour = document.querySelector(".hrs");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const per = document.querySelector(".period");

function clock() {
  let crtTime = new Date();

  let hours = crtTime.getHours();
  let minutes = crtTime.getMinutes();
  let seconds = crtTime.getSeconds();

  // Setting period(PM/AM) using if statement
  let period = "AM";
  if (hours >= 12) {
    period = "PM";
  }
  // 12-24 format switch
  let formatValue = formatSwitchBtn.getAttribute("data-format");
  if (formatValue === "12") {

    hours = hours > 12 ? hours % 12 : hours;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  hour.innerHTML = hours;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;
  per.innerHTML = period;
}

// Updating day,date,month & year.
let updateClock = setInterval(clock, 1000);

let todayDate = new Date();
console.log(todayDate.getDay());

document.querySelector(".date").innerHTML = todayDate.getDate();
document.querySelector(".year").innerHTML = todayDate.getFullYear();
document.querySelector(".day-name").innerHTML = todayDate.toLocaleString("default", { weekday: "long" });
document.querySelector(".month-name").innerHTML = todayDate.toLocaleString("default", { month: "short" });

// Menu btn activation:
const dotMenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");

dotMenuBtn.addEventListener("click", () => {
  dotMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if(e.target.id !== "active-menu"){
    dotMenu.classList.remove("active");

  }
})


// Primitive Method:
// setInterval(() => {
//   let crtTime = new Date();
//   let period = "AM";
//   if (hour >= 12) {
//     period = "PM";
//   }

//   per.innerHTML = period;
//   hour.innerHTML = (crtTime.getHours() < 10 ? "0" : "") + crtTime.getHours();
//   min.innerHTML = (crtTime.getMinutes() < 10 ? "0" : "") + crtTime.getMinutes();
//   sec.innerHTML = (crtTime.getSeconds() < 10 ? "0" : "") + crtTime.getSeconds();
// }, 1000);