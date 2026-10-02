const nav = document.getElementById("nav"),
  burger = document.getElementById("burger"),
  menu = document.getElementById("menu");
const sc = () => nav.classList.toggle("scrolled", scrollY > 40);
sc();
addEventListener("scroll", sc, { passive: true });
burger.addEventListener("click", () => {
  const o = menu.classList.toggle("open");
  burger.classList.toggle("open", o);
  burger.setAttribute("aria-expanded", o);
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    burger.classList.remove("open");
  }),
);
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
const f = document.getElementById("contactForm");
if (f)
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("ok").style.display = "block";
    f.reset();
  });
