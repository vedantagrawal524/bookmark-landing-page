// DOM Elements
const body = document.querySelector("#page");
const nav = document.querySelector("#header-nav");
const hamburgerButton = document.querySelector("#hamburger-button");
const mobileMenu = document.querySelector("#mobile-menu");
const navLinks = document.querySelectorAll(".nav-links");

const toggleNav = () => {
  nav.classList.toggle("deactivate");
  body.classList.toggle("deactivate");
  mobileMenu.classList.toggle("activate");
};

// Hamburger Button - Click
hamburgerButton.addEventListener("click", () => {
  toggleNav();
});

// Nav-links - Click (Close menu when clicked & goes to link-location)
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    toggleNav();
  });
});

// Escape key - keydown (Close menu with escape Key)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu.classList.contains("activate")) {
    toggleNav();
  }
});
