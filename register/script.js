const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector(".hamburger");
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const radioButtons = document.getElementsByName("gender");
const regionSelect = document.getElementById("region");
const checkbox = document.getElementById("terms");
const checkboxError = document.getElementById("checkbox-error");
const overlay = document.querySelector(".popup-overlay");
const closeButton = document.querySelector('.close');
const popUp = document.querySelector(".popup");
const termsCondition = document.getElementById("terms-condition")
const agreeBtn = document.getElementById("agree")

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
  var regionValue = regionSelect.value;
  var termsValue = checkbox.checked;

  var nameValidation = false;
  var emailValidation = false;
  var pwValidation = false;
  var regionValidation = false;
  var termsValidation = false;

  if (nameValue === "") {
    addErrorTo(nameInput, "Name cannot be empty");
  } else {
    success(nameInput);
    nameValidation = true;
  }

  function validateEmail(email) {
    var atSymbol = email.indexOf("@");
    var dotSymbol = email.lastIndexOf(".");
    var spaceSymbol = email.indexOf(" ");

    if ((atSymbol != -1) &&
        (atSymbol != 0) &&
        (dotSymbol != -1) &&
        (dotSymbol != 0) &&
        (dotSymbol > atSymbol + 1) &&
        (email.length > dotSymbol + 1) &&
        (spaceSymbol == -1)) {
        return true;
    } else {
        return false;
    }
}
  

  if (emailValue === "") {
    addErrorTo(emailInput, "Email cannot be empty");
  } else if (!validateEmail(emailValue)) {
    addErrorTo(emailInput, "Looks like not an email (example: example@email.com)");
  } else {
    success(emailInput);
    emailValidation = true;
  };

  if (passwordValue === "") {
    addErrorTo(passwordInput, "Password cannot be empty");
  } else if (passwordValue.length < 5) {
    addErrorTo(passwordInput, "Password too weak");
  } else {
    success(passwordInput);
    pwValidation = true;
  };
  
  if (regionValue === "Select a Region") {
    addErrorTo(regionSelect, "Please select a region");
  } else {
    success(regionSelect);
    regionValidation = true
  };

  if (!termsValue) {
    addErrorTo(checkboxError, "Please accept the terms and conditions");
  } else {
    success(checkboxError);
    termsValidation = true;
  }

  if (nameValidation === true && emailValidation === true && pwValidation === true && regionValidation === true && termsValidation === true) {
    window.location.href = "/index.html";
  };
});

function addErrorTo(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  req.classList.add("error");
  span.innerText = message;
  span.classList.add("error-text");
  req.classList.remove("success");
};

function success(req) {
  req.classList.remove("error");
  req.classList.add("success");
  const span = req.parentElement.querySelector("span");
  span.innerText = "";
  span.classList.remove("error-text");
};

termsCondition.addEventListener("click", () => {
  overlay.classList.add("active");
  popUp.classList.add("active");
});

closeButton.addEventListener("click", () => {
  overlay.classList.remove("active");
  popUp.classList.remove("active");
});

agreeBtn.addEventListener("click", () => {
  checkbox.checked = true;
  overlay.classList.remove("active");
  popUp.classList.remove("active");
})