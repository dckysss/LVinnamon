const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector(".hamburger");
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const radioButtons = document.getElementsByName("gender");
const checkbox = document.getElementById("terms");

hamburger.onclick = () => {
  hamburger.classList.toggle("active");
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var nameValue = nameInput.value.trim();
  var emailValue = emailInput.value.trim();
  var passwordValue = passwordInput.value.trim();
  var pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

  if (nameValue === "") {
    addErrorTo(nameInput, "Name cannot be empty");
  } else {
    success(nameInput);
  }

  if (emailValue === "") {
    addErrorTo(emailInput, "Email cannot be empty");
  } else if (!pattern.test(emailValue)) {
    addErrorTo(emailInput, "Looks like not an email (example: example@email.com)");
  } else {
    success(emailInput);
  }

  if (passwordValue === "") {
    addErrorTo(passwordInput, "Password cannot be empty");
  } else if (passwordValue.length < 5) {
    addErrorTo(passwordInput, "Password too weak");
  } else {
    success(passwordInput);
  }
});

function addErrorTo(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  req.classList.add("error");
  span.innerText = message;
  span.classList.add("error-text");
  req.classList.remove("success");
}

function success(req) {
  req.classList.remove("error");
  req.classList.add("success");
  const span = req.parentElement.querySelector("span");
  span.innerText = "";
  span.classList.remove("error-text");
}
