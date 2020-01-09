let urls = [
  "./images/dish-1.jpg",
  "./images/dish-2.jpg",
  "./images/dish-3.jpg"
];

let heroImgEl = document.getElementById("hero-image-container");

let imageIdx = 0;

const changeHeroImage = () => {
  //   heroImgEl.background = `url(${urls[2]})`;

  setInterval(() => {
    if (imageIdx < urls.length - 1) {
      imageIdx++;
    } else {
      imageIdx = 0;
    }

    heroImgEl.style.setProperty(
      "background",
      `top center / cover no-repeat url(${urls[imageIdx]}`
    );
  }, 4500);
};

/* 
=========
NAVBAR ANIMATIONS
=========
*/

const sections = document.querySelectorAll("section");
const sectionDecorator = document.getElementById("sectionDecorator");
const gradients = [
  "linear-gradient(45deg, #19547b 10%, #182b3d 70%)",
  "linear-gradient(45deg, #d76d77 10%, #a13b45 70%)",
  "linear-gradient(45deg, #50256e 10%, #240b36 70%)",
  "linear-gradient(45deg, #eea849 10%, #b47c20 70%)"
];

const navCheck = entries => {
  entries.forEach(entry => {
    //   check for intersection in viewpoint
    const idName = entry.target.id;

    // establish for active anchor
    const activeAnchor = document.querySelector(`[data-page=${idName}]`);

    // grab gradient index
    if (activeAnchor === null) {
      return;
    }

    const gradientIdx = entry.target.dataset.index;

    // grab size of anchor element, height, width, etc
    // const coords = activeAnchor.getBoundingClientRect();

    // const directions = {
    //   height: coords.height,
    //   width: coords.width,
    //   top: coords.top,
    //   left: coords.left
    // };

    // check if visible
    if (entry.isIntersecting) {
      activeAnchor.style = `
      background: ${gradients[gradientIdx]};
      -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
      `;
    } else {
      activeAnchor.style.setProperty("background", "");
    }
  });
};

// INTERSECTION OBSERVER

const options = {
  // threshold, activation point, root element, etc. - activate when we've reached 70% of element with scroll
  threshold: [0.5]
};

let observer = new IntersectionObserver(navCheck, options);

// observe each section on our page
sections.forEach(section => {
  observer.observe(section);
});

window.addEventListener("load", () => {
  changeHeroImage();
});
