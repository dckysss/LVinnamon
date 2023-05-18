const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector(".hamburger");
// const timeDiv = document.getElementById("time");
const currentDate = new Date();
const overlay = document.querySelector(".popup-overlay");
const closeButton = document.querySelector('.close');
const popUp = document.querySelector(".popup");

// Toggle class active on hamburger menu click
hamburger.onclick = () => {
  hamburger.classList.toggle("active");
  navbarNav.classList.toggle("active");
};

// Click outside sidebar to hide nav
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    hamburger.classList.remove("active");
  }

  if (closeButton.contains(e.target) && !popUp.contains(e.target)) {
    overlay.classList.remove('active');
    popUp.classList.remove('active');
 }
});

// Date
// const getTime = () => {
//   const currentDate = new Date();
//   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   let day = daysOfWeek[currentDate.getDay()];
//   let hr = currentDate.getHours();
//   let min = currentDate.getMinutes();
//   let sec = currentDate.getSeconds();
//   let session = "AM";
//   hr > 12 ? ((session = "PM"), (hr -= 12)) : null;
//   hr == 0 ? (hr = 12) : null;
//   sec < 10 ? (sec = "0" + sec) : null;
//   min < 10 ? (min = "0" + min) : null;
//   hr < 10 ? (hr = "0" + hr) : null;
//   timeDiv.textContent = day + ", " + hr + ":" + min + ":" + sec + " " + session;
// };

// getTime();
// setInterval(getTime, 1000);

overlay.classList.add("active");
popUp.classList.add("active");

closeButton.addEventListener("click", () => {
  overlay.classList.remove("active");
  popUp.classList.remove("active");
});
