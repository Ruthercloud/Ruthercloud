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
      if ([150, 100, 200, 2].includes(value)) {
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



  

// Animated words for Hero Section
const words = ["Affordable", "Customized", "Innovative", "Responsive"];
let index = 0;

function changeWord() {
  const wordElement = document.getElementById("animated-word");
  const underline = document.querySelector(".underline");

  // Fade out + shrink underline
  wordElement.style.opacity = 0;
  underline.style.width = "0";

  setTimeout(() => {
    wordElement.textContent = words[index];
    wordElement.style.opacity = 1;

    // 👉 Calculate underline width based on word width
    const wordWidth = wordElement.offsetWidth;
    underline.style.width = wordWidth + "px";

    index = (index + 1) % words.length;
  }, 600); // fade-out duration
}

// Run every 3.5 seconds (like Kansoft)
setInterval(changeWord, 3500);

// ✅ First run only once
window.addEventListener("load", () => {
  changeWord();
});


  





// Scroll Animation for Feedback Section (Replay on re-scroll)
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // viewport se nikalne par reset
        }
      });
    },
    {
      threshold: 0.2 // 20% visible hone par trigger
    }
  );

  cards.forEach(card => observer.observe(card));
});





document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".feedback-track");
  const cards = document.querySelectorAll(".feedback-card");
  const dotsContainer = document.querySelector(".feedback-dots"); // dots ka container HTML me hona chahiye

  if (!track || !cards.length || !dotsContainer) return;

  let index = 0;

  // Dots create karna
  cards.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      index = i;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll(".dot");

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;

    // Active dot update
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Keyboard navigation (← → keys)
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      index = (index + 1) % cards.length;
      updateSlider();
    } else if (e.key === "ArrowLeft") {
      index = (index - 1 + cards.length) % cards.length;
      updateSlider();
    }
  });

  // Touch swipe support
  let startX = 0;
  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  track.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      // Swipe left → next
      index = (index + 1) % cards.length;
      updateSlider();
    } else if (endX - startX > 50) {
      // Swipe right → prev
      index = (index - 1 + cards.length) % cards.length;
      updateSlider();
    }
  });
});


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




