const projects = [
  {
    projectID: "0",
    projectName: "Moodswing",
    projectURL: "./portfolio-projects/project-1/index.html",
    projectRepo:
      "https://github.com/charlesmartinreed/everything-is-changing-colour",
    projectDescription:
      "A UI/UX mockup of a progressive web app that ties into a Node/Mongo-based backend for allowing users to stream their uploaded music from the cloud."
  },
  {
    projectID: "1",
    projectName: "Pawpaw Proof",
    projectURL: "./portfolio-projects/project-2/index.html",
    projectRepo:
      "https://github.com/charlesmartinreed/yet-another-password-generator",
    projectDescription:
      "A simple, clean password generator that I designed to help my grandfather - aka, my Pawpaw :D - come up with safe, secure passwords that he could confidently use to cover his digital footprints."
  },
  {
    projectID: "2",
    projectName: "Imbalance",
    projectURL: "./portfolio-projects/project-3/public/index.html",
    projectRepo:
      "https://github.com/charlesmartinreed/imbalance-the-novel-website",
    projectDescription:
      "A minimalist website designed for a young, yet undiscovered novelist featuring just the written word and some words written about the author. Integrates with Stripe."
  },
  {
    projectID: "3",
    projectName: "Shop Meet",
    projectURL: "./portfolio-projects/project-4/index.html",
    projectRepo:
      "https://github.com/charlesmartinreed/mobile-first-shopping-layout",
    projectDescription:
      "How would you like to go shopping with someone who could dress you and undress you with equal skill? Try Shop Meet, a dating app where you shop until you drop (your pants)."
  },
  {
    projectID: "4",
    projectName: "Reduce/Reuse",
    projectURL: "./portfolio-projects/project-5/index.html",
    projectRepo:
      "https://github.com/charlesmartinreed/product-release-signup-form",
    projectDescription:
      "A simple two pane design submitted for a guitar pedal designer. Integrates a simple form/newsletter signup with Netlify handling the CAPTCHA integration and Mailchimp pulling newsletter duty. "
  },
  {
    projectID: "5",
    projectName: "What Time Is It Now?",
    projectURL: "./portfolio-projects/project-6/index.html",
    projectRepo: "https://github.com/charlesmartinreed/what-time-is-now",
    projectDescription:
      "Written as a design challenge to create a clean, modern looking 'analog' clock. Each day comes with a bit of sassy text just to make you smile."
  }
];

// EVENT LISTENER FOR ARROW ELEMENTS

const prevProjectArrow = document.querySelector(".arrow-left");
const nextProjectArrow = document.querySelector(".arrow-right");

const projectArrowElems = document.querySelectorAll(".arrow");

projectArrowElems.forEach(arrow => {
  arrow.addEventListener("click", () => {
    // console.log(arrow.dataset.direction);
    if (arrow.dataset.direction === "left") {
      if (currentProjectIdx > 0) {
        currentProjectIdx--;
      } else if (currentProjectIdx === 0) {
        currentProjectIdx = projects.length - 1;
      }
    }

    if (arrow.dataset.direction === "right") {
      if (currentProjectIdx === projects.length - 1) {
        currentProjectIdx = 0;
      } else {
        currentProjectIdx++;
      }
    }

    displayProject(currentProjectIdx);
  });
});

const displayProject = projectIdx => {
  // grab the necessary elements
  let project = projects[projectIdx];

  let projNameEl = document.querySelector(".portfolio-desc-title");
  let projDescEl = document.querySelector(".portfolio-desc-text");
  let projGitLink = document.querySelector(".portfolio-project-link");
  let projBrowserFrame = document.querySelector(".portfolio-project iframe");

  projNameEl.textContent = `${project.projectName}`;
  projDescEl.textContent = `${project.projectDescription}`;
  projGitLink.href = `${project.projectRepo}`;
  projBrowserFrame.src = `${project.projectURL}`;
};

const navbarTouchEl = document.querySelector(".navbar-touch-element");
const navbarSquares = document.querySelectorAll(".navbar-square");

const navbarEl = document.querySelector(".navbar-link-container");
const navLinks = document.querySelectorAll(".navbar-link-container a");
const logoEl = document.querySelector(".logo-container");
const blogPermalink = document.querySelectorAll(".blog-permalink");
const blogContents = document.querySelectorAll(".blog-contents");

let currentProjectIdx = 0;

let fullBlogVisible = false;

// navbarSquares.forEach(square => {
//   square.addEventListener("click", function() {
//     navbarTouchEl.classList.toggle("navbar-open");
//     navbarEl.classList.toggle("navbar-visible");
//     logoEl.classList.toggle("logo-not-visible");
//   });
// });

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

window.addEventListener("DOMContentLoaded", () => {
  displayProject(currentProjectIdx);
});
