let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
});

let scrollTop = document.querySelector("#scroll-top");

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

document.getElementById('burger-menu').addEventListener('click', function() {
    const logo = document.getElementById('logo');
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
    logo.classList.toggle('opacity-0');
});
