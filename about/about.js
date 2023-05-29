const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector(".hamburger");
const elements = document.querySelectorAll(".about .container, .explore-button");

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

animateOnScroll = () => {
  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);