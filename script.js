const navbarTouchEl = document.querySelector(".navbar-touch-element");

navbarTouchEl.addEventListener("click", function() {
  this.classList.toggle("navbar-open");
});
