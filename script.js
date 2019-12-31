const navbarTouchEl = document.querySelector(".navbar-touch-element");
const navbarEl = document.querySelector(".navbar-link-container");
const logoEl = document.querySelector(".logo-container");

navbarTouchEl.addEventListener("click", function() {
  this.classList.toggle("navbar-open");
  navbarEl.classList.toggle("navbar-visible");
  logoEl.classList.toggle("logo-not-visible");
});
