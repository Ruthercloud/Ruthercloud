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
  



  // Count-up animation for stats
const counters = document.querySelectorAll(".counter");
const speed = 400; // smaller = faster

function runCounter(counter) {
  const animate = () => {
    const value = +counter.getAttribute("data-target");
    const data = +counter.innerText;
    const increment = value / speed;

    if (data < value) {
      counter.innerText = Math.ceil(data + increment);
      setTimeout(animate, 10);
    } else {
      // Custom suffix rule
      if (value === 50 || value === 30) {
        counter.innerText = value + "+";
      } else if (value === 96 || value === 85) {
        counter.innerText = value + "%";
      } else {
        counter.innerText = value;
      }
    }
  };

  // reset before running again
  counter.innerText = "0";
  animate();
}

// Run animation whenever counters come into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      runCounter(entry.target);
    }
  });
}, { threshold: 0.5 }); // 50% visible hone par trigger hoga

counters.forEach(counter => {
  observer.observe(counter);
});



  

// Animated words for Hero Section
const words = ["Future-Ready", "Customized", "Innovative", "Responsive"];
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
