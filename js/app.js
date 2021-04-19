const navBtn = document.querySelector(".burger");
const nav = document.querySelector(".navbar__list");
const overlay = document.querySelector(".overlay");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  overlay.classList.toggle("overlay-active");
  navBtn.classList.toggle("triggerAnim");
});
