const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector(".hamburger");
const currentDate = new Date();
const overlay = document.querySelector(".popup-overlay");
const closeButton = document.querySelector('.close');
const popUp = document.querySelector(".popup");
const cards = document.querySelectorAll(".card");
const evenCards = document.querySelectorAll(".evenCard");

hamburger.onclick = () => {
  hamburger.classList.toggle("active");
  navbarNav.classList.toggle("active");
};

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

overlay.classList.add("active");
popUp.classList.add("active");

closeButton.addEventListener("click", () => {
  overlay.classList.remove("active");
  popUp.classList.remove("active");
});

animateOnScroll = () => {
  cards.forEach((element) => {
    const cardPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (cardPosition < windowHeight) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const productName = card.querySelector('.hover-image').textContent.trim();

    window.location.href = `/products/${productName.toLowerCase().replace(' ', '-')}.html`;
  });
});