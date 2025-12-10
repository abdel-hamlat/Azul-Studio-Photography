// ===== HERO SLIDER (auto, fade) =====
const heroImages = [
  "images/hero1.jpg",
  "images/hero2.jpg",
  "images/hero3.jpg",
  "images/hero4.jpg",
  "images/hero5.jpg"

];

let currentHeroIndex = 0;
const heroSlide = document.getElementById("heroSlide");

// Preload images for smoother transitions
heroImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

function showNextHero() {
  heroSlide.style.opacity = 0; // fade out

  setTimeout(() => {
    currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
    heroSlide.src = heroImages[currentHeroIndex];
  }, 400);
}

heroSlide.addEventListener("load", () => {
  heroSlide.style.opacity = 1; // fade in
});

// change every 5 seconds
setInterval(showNextHero, 5000);

// ===== NAVBAR TOGGLE (mobile) =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ===== FOOTER YEAR =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== PROMO CODE =====
const promoCodes = { STAGE20: 0.2, LIVE15: 0.15, EVENT10: 0.1 };
const basePrice = 500;

const promoInput = document.getElementById("promoInput");
const promoMessage = document.getElementById("promoMessage");
const promoPrice = document.getElementById("promoPrice");
const applyPromoBtn = document.getElementById("applyPromoBtn");

applyPromoBtn.addEventListener("click", () => {
  const code = promoInput.value.trim().toUpperCase();

  if (!code) {
    promoMessage.textContent = "Enter a promo code.";
    promoMessage.style.color = "#ff5a5f";
    promoPrice.textContent = "";
    return;
  }

  if (promoCodes[code]) {
    const discount = promoCodes[code];
    const newPrice = Math.round(basePrice * (1 - discount));
    promoMessage.textContent = `Code "${code}" applied!`;
    promoMessage.style.color = "#3ddc97";
    promoPrice.textContent = `New price: $${newPrice}`;
  } else {
    promoMessage.textContent = "Invalid code.";
    promoMessage.style.color = "#ff5a5f";
    promoPrice.textContent = "";
  }
});

// ===== CONTACT FORM =====
const contactForm = document.querySelector(".contact-form");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", e => {
  e.preventDefault();
  formStatus.textContent = "Sending...";
  formStatus.style.color = "#ccc";

  setTimeout(() => {
    formStatus.textContent = "Thank you! Samy will reply within 24 hours.";
    formStatus.style.color = "#3ddc97";
    contactForm.reset();
  }, 1000);
});
