const navbarTouchEl = document.querySelector(".navbar-touch-element");
const navbarEl = document.querySelector(".navbar-link-container");

navbarTouchEl.addEventListener("click", function() {
  this.classList.toggle("navbar-open");
  navbarEl.classList.toggle("navbar-visible");
});
