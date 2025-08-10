// Highlight active navigation link based on current page URL
window.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar ul li a').forEach(link => {
      if (link.getAttribute('href') === path) {
        link.classList.add('active');
      }
    });
  });
  
  // Smooth scrolling for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Mobile menu toggle
  function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("active");
  }
  

// Count-up animation for stats
const counters = document.querySelectorAll(".counter");
const speed = 200; // smaller = faster

counters.forEach(counter => {
  const animate = () => {
    const value = +counter.getAttribute("data-target");
    const data = +counter.innerText;
    const increment = value / speed;

    if (data < value) {
      counter.innerText = Math.ceil(data + increment);
      setTimeout(animate, 10);
    } else {
      // Custom suffix rule
      if (value === 50 || value === 20) {
        counter.innerText = value + "+";
      } else if (value === 96 || value === 85) {
        counter.innerText = value + "%";
      } else {
        counter.innerText = value;
      }
    }
  };
  animate();
});


  
