// State
let isLoggedIn = false;

// DOM Elements
const message = document.getElementById("message");
const authBtn = document.getElementById("authBtn");

// Event Handler
authBtn.addEventListener("click", () => {
  // Toggle login state
  isLoggedIn = !isLoggedIn;

  // Conditional Rendering
  if (isLoggedIn) {
    message.textContent = "Welcome, User!";
    authBtn.textContent = "Logout";
  } else {
    message.textContent = "Please Login";
    authBtn.textContent = "Login";
  }
});
