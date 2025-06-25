// === BACK TO TOP BUTTON ===
const btn = document.getElementById("backToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === CONTACT FORM HANDLER ===
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload

  // Show confirmation message
  formMsg.textContent = "✅ Message sent! I’ll get back to you soon.";
  formMsg.style.color = "#00bcd4"; // your accent color

  // Clear form fields
  form.reset();

  // Hide message after 5 seconds
  setTimeout(() => {
    formMsg.textContent = "";
  }, 5000);
});

// Theme toggle button
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check if user has a saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggleBtn.textContent = "🌞";
}

// Handle toggle click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  // Update icon
  if (body.classList.contains("light-mode")) {
    toggleBtn.textContent = "🌞";
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links-wrapper");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// === SCROLL-REVEAL ===
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // fire on page load

// === TYPEWRITER EFFECT (2 lines) ===
const line1 = "Aspiring Frontend Developer";
const line2 =
  "Building clean, modern, responsive websites – one project at a time.";

let i1 = 0;
let i2 = 0;

function typeLine1() {
  if (i1 < line1.length) {
    document.getElementById("typewriter-line-1").textContent +=
      line1.charAt(i1);
    i1++;
    setTimeout(typeLine1, 60);
  } else {
    setTimeout(typeLine2, 500); // pause before next line
  }
}

function typeLine2() {
  if (i2 < line2.length) {
    document.getElementById("typewriter-line-2").textContent +=
      line2.charAt(i2);
    i2++;
    setTimeout(typeLine2, 40);
  }
}

window.addEventListener("load", typeLine1);
