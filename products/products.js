const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector(".hamburger");
const cardInfo = document.querySelectorAll('.card-info');
const overlay = document.querySelector('.product-details-overlay');
const productDetails = document.querySelector('.product-details');
const closeButton = document.querySelector('.close');
const cart = document.querySelectorAll(".card-button");
const qty = document.getElementById("qty");
const increment = document.getElementById("plus");
const decrement = document.getElementById("minus");

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

  if (overlay.contains(e.target) && !productDetails.contains(e.target)) {
     overlay.classList.remove('active');
     productDetails.classList.remove('active');
  }
});

cardInfo.forEach(button => {
  button.addEventListener('click', () => {
    overlay.classList.add('active');
    productDetails.classList.add('active');
    qty.value = 1;
  });
});

cart.forEach(button => {
  button.addEventListener('click', () => {
    alert("Added to cart successfully!");
  });
});

qty.oninput = () => {
  qty.value = qty.value.replace(/\D/g, "");
}

increment.onclick = () => {
  const currentValue = parseInt(qty.value);
  if(qty.value < 999) {
    qty.value = currentValue + 1;
  }
  
}

decrement.onclick = () => {
  if(qty.value > 0) {
    qty.value -= 1;
  }
}