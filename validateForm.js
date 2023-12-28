function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || subject === "" || message === "") {
    alert("Please fill in all fields.");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  showThankYouMessage();
  return false;
}

function showThankYouMessage() {
  const form = document.getElementById("contactForm");
  form.innerHTML = "";
  const thankYouMessage = document.createElement("p");
  thankYouMessage.textContent = "Thank you for your submission!";
  form.appendChild(thankYouMessage);
}
