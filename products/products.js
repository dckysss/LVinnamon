const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector('.product-details-overlay');
const productDetails = document.querySelector('.product-details');
const closeButton = document.querySelector('.close');
const cart = document.querySelectorAll(".card-button");
const qty = document.getElementById("qty");
const increment = document.getElementById("plus");
const decrement = document.getElementById("minus");
const cards = document.querySelectorAll(".card");

hamburger.onclick = () => {
  hamburger.classList.toggle("active");
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    hamburger.classList.remove("active");
  };

  if (overlay.contains(e.target) && !productDetails.contains(e.target)) {
     overlay.classList.remove('active');
     productDetails.classList.remove('active');
  };
});

cards.forEach(button => {
  button.addEventListener('click', () => {
    overlay.classList.add('active');
    productDetails.classList.add('active');
    qty.value = 1;
  });
});

cart.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    window.location.href = "../register/register.html";
  });
});

qty.oninput = () => {
  qty.value = qty.value.split("").filter(char => !isNaN(parseInt(char))).join("");
};

increment.onclick = () => {
  const currentValue = parseInt(qty.value);
  if(qty.value < 999) {
    qty.value = currentValue + 1;
  };
};

decrement.onclick = () => {
  if(qty.value > 1) {
    qty.value -= 1;
  };
};

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
};

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);