const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector(".hamburger");

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
});