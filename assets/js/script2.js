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
    const nav = document.getElementById('nav-links');
    const btn = document.querySelector('.hamburger');

    const isOpen = nav.classList.toggle('active');   // show/hide menu
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false'); // icon switch via CSS

    // (optional) link pe click hote hi band ho jaye
    if (isOpen) {
      nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', closeOnce, { once: true });
      });
    }
    function closeOnce() {
      nav.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
    }
  }
  



const counters = document.querySelectorAll(".counter");
const speed = 400; 

function runCounter(counter) {
  const value = +counter.getAttribute("data-target");
  const increment = value / speed;

  const animate = () => {
    const data = +counter.innerText;

    if (data < value) {
      counter.innerText = Math.ceil(data + increment);
      setTimeout(animate, 10);
    } else {
      // Suffix logic
      if ([50, 80, 100, 2].includes(value)) {
        counter.innerText = value + "+";
      } else if ([96, 85].includes(value)) {
        counter.innerText = value + "%";
      } else {
        counter.innerText = value;
      }
    }
  };

  counter.innerText = "0";
  animate();
}

// ▶ RUN ONLY WHEN VISIBLE (never multiple times)
const options = { threshold: 0.4 };  // 40% section visible

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      runCounter(entry.target);
      obs.unobserve(entry.target); // stop re-running
    }
  });
}, options);

// Observe each counter
counters.forEach(counter => observer.observe(counter));



  



  







function showSolution(index) {
  let menu = document.querySelectorAll(".solution-menu li");
  let boxes = document.querySelectorAll(".solution-box");

  menu.forEach((m, i) => {
    m.classList.remove("active");
    boxes[i].classList.remove("active");
  });

  menu[index].classList.add("active");
  boxes[index].classList.add("active");
}


function toggleWA() {
  var box = document.getElementById("wa-box");
  box.style.display = (box.style.display === "flex") ? "none" : "flex";
}



/* OPEN MOBILE MENU */
function openMobileMenu() {
  document.getElementById("mobile-menu").style.right = "0";
  document.querySelector(".hamburger").setAttribute("aria-expanded", "true");
}

/* CLOSE MOBILE MENU */
function closeMobileMenu() {
  document.getElementById("mobile-menu").style.right = "-100%";
  document.querySelector(".hamburger").setAttribute("aria-expanded", "false");
}

/* MOBILE DROPDOWNS */
document.querySelectorAll(".m-title").forEach(title => {
  title.addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
  });
});



function toggleMenu() {
  const nav = document.getElementById("nav-links");
  const button = document.querySelector(".hamburger");

  nav.classList.toggle("active");

  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", !expanded);
}

// Mobile Dropdown for Mega Menu
document.querySelectorAll(".dropdown > a").forEach(item => {
  item.addEventListener("click", function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.parentElement.classList.toggle("active");
    }
  });
});


/* OPEN MOBILE MENU */
function openMobileMenu() {
  document.getElementById("mobile-menu").style.right = "0";
  document.querySelector(".hamburger").setAttribute("aria-expanded", "true");
}

/* CLOSE MOBILE MENU */
function closeMobileMenu() {
  document.getElementById("mobile-menu").style.right = "-100%";
  document.querySelector(".hamburger").setAttribute("aria-expanded", "false");
}


function openMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.style.right = "0";

  // close all dropdowns when mobile menu opens
  document.querySelectorAll(".m-dropdown").forEach(drop => {
    drop.classList.remove("active");
  });

  document.querySelector(".hamburger").setAttribute("aria-expanded", "true");
}




const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 120 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



 const track = document.querySelector(".feedback-track");
let cards = document.querySelectorAll(".feedback-card");
const dotsContainer = document.querySelector(".feedback-dots");

const gap = 25;
let index = 1;

/* ===== CLONE ===== */
const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, cards[0]);

cards = document.querySelectorAll(".feedback-card");

const cardWidth = cards[0].offsetWidth + gap;
track.style.transform = `translateX(${-cardWidth * index}px)`;

/* ===== DOTS ===== */
const realCards = cards.length - 2;

for (let i = 0; i < realCards; i++) {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => moveTo(i + 1));
  dotsContainer.appendChild(dot);
}

function setActive() {
  dotsContainer.querySelectorAll("span").forEach(d => d.classList.remove("active"));
  let dotIndex = index - 1;
  if (dotIndex < 0) dotIndex = realCards - 1;
  if (dotIndex >= realCards) dotIndex = 0;
  dotsContainer.children[dotIndex]?.classList.add("active");
}

/* ===== MOVE ===== */
function moveTo(i) {
  track.style.transition = "transform 0.4s ease";
  index = i;
  track.style.transform = `translateX(${-cardWidth * index}px)`;
  setActive();
}

/* ===== INFINITE LOOP FIX ===== */
track.addEventListener("transitionend", () => {
  if (cards[index] === firstClone) index = 1;
  if (cards[index] === lastClone) index = cards.length - 2;

  track.style.transition = "none";
  track.style.transform = `translateX(${-cardWidth * index}px)`;
});

/* ===== DRAG / SWIPE ===== */
let startX = 0;
let isDragging = false;

track.addEventListener("mousedown", e => {
  startX = e.pageX;
  isDragging = true;
  track.classList.add("dragging");
});

track.addEventListener("mouseup", e => {
  if (!isDragging) return;
  const diff = e.pageX - startX;
  if (diff > 50) moveTo(index - 1);
  if (diff < -50) moveTo(index + 1);
  isDragging = false;
  track.classList.remove("dragging");
});

track.addEventListener("mouseleave", () => isDragging = false);

/* TOUCH (MOBILE) */
track.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

track.addEventListener("touchend", e => {
  const diff = e.changedTouches[0].clientX - startX;
  if (diff > 50) moveTo(index - 1);
  if (diff < -50) moveTo(index + 1);
});

setActive();











