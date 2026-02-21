// Contact Form
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const button = document.getElementById("submitBtn");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userMessage = document.getElementById("userMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = userName.value.trim();
  const email = userEmail.value.trim();
  const message = userMessage.value.trim();

  status.textContent = "";
  status.classList.remove("error", "success");

  if (name.length < 3) {
    status.textContent = "Name must be at least 3 characters.";
    status.classList.add("error");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    status.textContent = "Please enter a valid email address.";
    status.classList.add("error");
    return;
  }

  if (message.length < 5) {
    status.textContent = "Message is too short.";
    status.classList.add("error");
    return;
  }

  button.disabled = true;
  button.textContent = "Redirecting...";

  const waMessage = `Hello, I'm ${name}. My email is ${email}. ${message}`;
  const waLink = `https://wa.me/2349018809895?text=${encodeURIComponent(
    waMessage
  )}`;

  status.textContent = "Opening WhatsApp...";
  status.classList.add("success");

  // Redirect
  window.location.href = waLink;

  // Reset form after a slight delay (optional)
  setTimeout(() => {
    form.reset();
    button.disabled = false;
    button.textContent = "Send";
  }, 1500);
});

// Mobile Navbar
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => navLinks.classList.toggle("active"));

// Close menu when link clicked (mobile)
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("active"));
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }
});