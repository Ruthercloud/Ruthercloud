document.addEventListener("DOMContentLoaded", function () {
    const contactButtons = document.querySelectorAll(".contact-btn");
  
    contactButtons.forEach(button => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Redirecting to: " + this.href);
        window.location.href = this.href;
      });
    });
  });
  const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
