const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email-input");
const errorMessages = document.querySelectorAll(".email-error");

const isValidEmail = (email) => {
  return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
};

const toggleError = () => {
  emailInput.classList.toggle("error");
  errorMessages.forEach((el) => el.classList.toggle("error"));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;

  if (!isValidEmail(email)) {
    toggleError();
  } else {
    form.reset();
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.classList.contains("error")) {
    toggleError();
  }
});
