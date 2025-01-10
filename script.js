document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the password input value
    const password = document.getElementById("password").value;

    // Check if the password is correct
    if (password === "321") {
      // Hide login form and show content
      document.querySelector(".login-container").style.display = "none";
      document.querySelector(".content-container").style.display = "block";

      // Load the text file content
      fetch("textfile.txt")
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("text-content").textContent = data;
        })
        .catch((error) => {
          document.getElementById("text-content").textContent =
            "Failed to load text file.";
          console.error(error);
        });
    } else {
      alert("Incorrect password. Please try again.");
    }
  });

// Logout functionality
document.getElementById("logout-btn").addEventListener("click", function () {
  // Hide content and show login form again
  document.querySelector(".login-container").style.display = "block";
  document.querySelector(".content-container").style.display = "none";
  document.getElementById("password").value = ""; // Clear password field
});
