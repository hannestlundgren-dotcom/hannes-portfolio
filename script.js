const header = document.querySelector("#site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 28);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") === "true";
  nav.classList.toggle("open", !open);
  header.classList.toggle("menu-open", !open);
  navToggle.setAttribute("aria-expanded", String(!open));
  navToggle.querySelector("b").textContent = open ? navToggle.dataset.labelOpen : navToggle.dataset.labelClose;
});

nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  header.classList.remove("menu-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.querySelector("b").textContent = navToggle.dataset.labelOpen;
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.querySelector("#year").textContent = new Date().getFullYear();
