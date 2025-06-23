const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email-input");
const errorMessages = document.querySelectorAll(".email-error");
const API_BASE_URL = "https://your-backend.onrender.com";

const isValidEmail = (email) => {
  return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = emailInput.value;

  if (!isValidEmail(email)) {
    emailInput.classList.add("error");
    errorMessages.forEach((el) => el.classList.add("error"));
  } else {
    try {
      const response = await fetch(`${API_BASE_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Email submitted successfully!");
        form.reset();
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      alert("Server error");
    }
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.classList.contains("error")) {
    emailInput.classList.remove("error");
    errorMessages.forEach((el) => el.classList.remove("error"));
  }
});
