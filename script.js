// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Contact Form
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ Thank you! Your message has been sent.");
});
