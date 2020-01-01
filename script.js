const navbarTouchEl = document.querySelector(".navbar-touch-element");
const navbarEl = document.querySelector(".navbar-link-container");
const navLinks = document.querySelectorAll(".navbar-link-container a");
const logoEl = document.querySelector(".logo-container");
const blogPermalink = document.querySelectorAll(".blog-permalink");
const blogContents = document.querySelectorAll(".blog-contents");

let fullBlogVisible = false;

navbarTouchEl.addEventListener("click", function() {
  this.classList.toggle("navbar-open");
  navbarEl.classList.toggle("navbar-visible");
  logoEl.classList.toggle("logo-not-visible");
});

blogPermalink.forEach(link => {
  link.addEventListener("click", e => {
    if (!fullBlogVisible) {
      e.preventDefault();
    }

    link.classList.toggle("full-blog-active");
    link.textContent = fullBlogVisible ? "Continue reading" : "Finish reading";

    // e.preventDefault();
    fullBlogVisible = !fullBlogVisible;

    link.previousElementSibling.classList.toggle("full-blog-visible");
  });
});
