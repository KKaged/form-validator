const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.querySelector(".create");
const confirmPassword = document.querySelector("#confirm_password");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmedPassword = confirmPassword.value.trim();

  if (email === "" || password === "") {
    alert("Please Enter Both Email And Password");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please Enter a valid email.");
    return;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }
  if (password !== confirmedPassword) {
    alert("Passwords do not match.");
    return;
  }
  console.log(password, confirmedPassword);
});
