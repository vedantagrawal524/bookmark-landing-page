const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email-input");
const errorMessages = document.querySelectorAll(".email-error");

const isValidEmail = (email) => {
  return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;

  if (!isValidEmail(email)) {
    emailInput.classList.add("error");
    errorMessages.forEach((el) => el.classList.add("error"));
  } else {
    form.reset();
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.classList.contains("error")) {
    emailInput.classList.remove("error");
    errorMessages.forEach((el) => el.classList.remove("error"));
  }
});
