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
  