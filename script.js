const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("show"); });
}, {threshold: 0.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const topBtn = document.querySelector(".top-btn");
window.addEventListener("scroll", () => { topBtn.style.display = window.scrollY > 500 ? "block" : "none"; });
topBtn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
