
Script · JS
/* ==========================================
        TOQA TAWFIK PORTFOLIO — script.js
==========================================*/
 
// Navbar: solid background after scrolling
const header = document.querySelector("header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 60);
window.addEventListener("scroll", onScroll);
onScroll();
 
// Mobile menu button (created here, no HTML change needed)
const navLinksEl = document.querySelector(".nav-links");
const menuBtn = document.createElement("button");
menuBtn.className = "menu-btn";
menuBtn.setAttribute("aria-label", "Toggle menu");
menuBtn.innerHTML = '<i class="bi bi-list"></i>';
document.querySelector(".navbar").appendChild(menuBtn);
menuBtn.addEventListener("click", () => {
    const open = navLinksEl.classList.toggle("open");
    menuBtn.innerHTML = `<i class="bi ${open ? "bi-x-lg" : "bi-list"}"></i>`;
});
navLinksEl.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
        navLinksEl.classList.remove("open");
        menuBtn.innerHTML = '<i class="bi bi-list"></i>';
    })
);
 
// Reveal cards on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
 
document
    .querySelectorAll(".project-card,.skill-card,.timeline-item,.certificate-card,.contact-grid a")
    .forEach(item => {
        item.classList.add("hidden");
        observer.observe(item);
    });
 
// Active navigation link
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 140) current = s.id;
    });
    navLinks.forEach(l =>
        l.classList.toggle("active", l.getAttribute("href") === "#" + current)
    );
});
 
// Soft mint spotlight following the cursor on project cards
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
});
 
// Typing effect
const title = document.querySelector(".hero h2");
const words = [
    "Computer Science Student",
    "AI & Machine Learning Enthusiast",
    "Data Science Enthusiast",
    "AI Developer"
];
let wordIndex = 0, charIndex = 0, deleting = false;
 
function type() {
    const current = words[wordIndex];
    if (!deleting) {
        title.textContent = current.substring(0, ++charIndex);
        if (charIndex === current.length) {
            deleting = true;
            return setTimeout(type, 1600);
        }
    } else {
        title.textContent = current.substring(0, --charIndex);
        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(type, deleting ? 45 : 90);
}
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    title.textContent = words[0];
} else {
    type();
}
 
// Footer year
document.querySelector("footer p:last-child").innerHTML =
    `© ${new Date().getFullYear()} Toqa Tawfik. All Rights Reserved.`;
 
console.log("%cWelcome to Toqa's Portfolio!", "color:#3E8A66;font-size:18px;font-weight:bold;");
 
