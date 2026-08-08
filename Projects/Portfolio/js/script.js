const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("show")) {
        icon.className = "ri-close-line";
    } else {
        icon.className = "ri-menu-line";
    }
});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("show");
        menuBtn.querySelector("i").className = "ri-menu-line";
    });
});


/* Current year */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* Contact form */

document.querySelector(".contact-form").addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thanks! Your message has been received.");

    e.target.reset();
});