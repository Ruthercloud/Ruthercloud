// Wait for the HTML to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Contact Button Click Handler
  const contactButtons = document.querySelectorAll(".contact-btn");

  contactButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Redirecting to: " + this.href);
      window.location.href = this.href;
    });
  });

  // Hamburger Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
});
