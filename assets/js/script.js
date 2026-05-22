function openMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenu) {
        mobileMenu.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenu) {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "auto";
    }
}

/* DYNAMIC MOBILE DROPDOWN CLICK */
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("m-title")) {
        const parent = e.target.closest(".m-dropdown");

        if (parent) {
            parent.classList.toggle("open");
        }
    }
});

/* STICKY HEADER */
window.addEventListener("scroll", function () {
    const header = document.querySelector(".site-header");

    if (header && window.scrollY > 50) {
        header.classList.add("scrolled");
    } else if (header) {
        header.classList.remove("scrolled");
    }
});



// ANIMATED COUNTERS
const counters = document.querySelectorAll(".counter");
const statsSection = document.querySelector(".stats");

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const suffix = counter.getAttribute("data-suffix") || "";
        let count = 0;

        const duration = 2000; // speed
        const increment = target / (duration / 16);

        const updateCounter = () => {
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target + suffix;
            }
        };

        updateCounter();
    });
};

if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(statsSection);
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(statsSection);
}



// TESTIMONIAL SLIDER
const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");
const nextBtn = document.querySelector(".t-btn.next");
const prevBtn = document.querySelector(".t-btn.prev");

let index = 0;

function getVisibleCards() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
}

function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 30;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
    const visibleCards = getVisibleCards();

    if (index >= cards.length - visibleCards) {
        index = 0;
    } else {
        index++;
    }

    updateSlider();
});

prevBtn.addEventListener("click", () => {
    const visibleCards = getVisibleCards();

    if (index <= 0) {
        index = cards.length - visibleCards;
    } else {
        index--;
    }

    updateSlider();
});

window.addEventListener("resize", () => {
    const visibleCards = getVisibleCards();

    if (index > cards.length - visibleCards) {
        index = 0;
    }

    updateSlider();
});


