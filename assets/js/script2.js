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






// Contact form submission with AJAX and reCAPTCHA validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  var captcha = grecaptcha.getResponse();

  if(captcha.length === 0) {
    alert("Please verify captcha first.");
    return;
  }

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if(response.ok) {

    // show popup
    const popup = document.getElementById("successPopup");
    popup.style.display = "flex";

    // clear form
    form.reset();
    grecaptcha.reset();

    // auto close after 3 sec
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);

  } else {
    alert("Something went wrong. Please try again.");
  }
});





/* =========================
   SCROLL REVEAL (SERVICES)
========================= */

document.addEventListener("DOMContentLoaded", function () {

  const cards = document.querySelectorAll('.reveal-card');

  if (cards.length > 0) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target); // run once
        }
      });
    }, {
      threshold: 0.2
    });

    cards.forEach(card => {
      revealObserver.observe(card);
    });
  }

});


/* =========================
   HERO TYPING ANIMATION
========================= */

document.addEventListener("DOMContentLoaded", function () {

  const typingElement = document.getElementById("typing-text");

  if (!typingElement) return; // stop if element not found

  const texts = [
    "RutherCloud - Builds Solutions for Your Business",
    "AI Powered Software Development",
    "Cloud & IT Outsourcing Experts",
    "We Turn Ideas Into Digital Products"
  ];

  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  function type() {

    if (count === texts.length) {
      count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    typingElement.textContent = letter;

    if (letter.length === currentText.length) {
      setTimeout(erase, 1500);
    } else {
      setTimeout(type, 60);
    }
  }

  function erase() {

    letter = currentText.slice(0, --index);
    typingElement.textContent = letter;

    if (letter.length === 0) {
      count++;
      setTimeout(type, 300);
    } else {
      setTimeout(erase, 40);
    }
  }

  type();

});



// SCROLL REVEAL (ABOUT & CONTACT)

document.addEventListener("DOMContentLoaded", function () {

  const elements = document.querySelectorAll('.reveal-left, .reveal-right');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        entry.target.classList.add('active');

        // Stagger list animation
        if (entry.target.classList.contains('reveal-right')) {
          const listItems = entry.target.querySelectorAll('.stagger-list li');
          listItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('active');
            }, index * 150);
          });
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));

});



document.addEventListener("DOMContentLoaded", function () {

  const elements = document.querySelectorAll('.reveal-left, .reveal-right');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        entry.target.classList.add('active');

        // paragraph animation
        const para = entry.target.querySelector('.reveal-para');
        if (para) {
          setTimeout(() => {
            para.classList.add('active');
          }, 300);
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));

});



