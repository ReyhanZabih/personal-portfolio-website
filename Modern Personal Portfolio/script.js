// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scroll
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove("active");
  });
});