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

  // Additional validation if needed

  // Simulate a "Thank You" page
  showThankYouMessage(); // Replace this with actual redirection or displaying a message
  return false; // Prevents the form from submitting in this example
}

function showThankYouMessage() {
  // Simulate a "Thank You" message
  const form = document.getElementById("contactForm");
  form.innerHTML = ""; // Clear the form content
  const thankYouMessage = document.createElement("p");
  thankYouMessage.textContent = "Thank you for your submission!";
  form.appendChild(thankYouMessage);

  // Or alternatively, redirect to a "Thank You" page using window.location
  // window.location.href = 'thankyou.html';
}
