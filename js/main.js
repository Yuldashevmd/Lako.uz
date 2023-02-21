// carousel start
const delay = 4000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function () {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function () {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function () {
  changeSlide(false);
  restart();
});

// carousel end



// hamburger-menu start
let hamburgBtn = document.querySelector(".hamburger_menu");
let closeHamburgBtn = document.querySelector(".close_hamburger");
let miniMenu = document.querySelector(".minimized_nav_text");

hamburgBtn.addEventListener("click", () => {
  console.log("clicked open btn");
  miniMenu.style.display = "block";
});
closeHamburgBtn.addEventListener("click", () => {
  console.log("clicked close btn");
  miniMenu.style.display = "none";
});
// hamburger-menu end

// scroll-navbar
let navbar = document.querySelector(".navbar-main");
let arrowBtn = document.querySelector(".arrow-top");

arrowBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let windowSize = document.documentElement;
  windowSize.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  let windowSize = document.documentElement;
  if (windowSize.scrollTop.toFixed(0) > 300) {
    navbar.style.opacity = "0.5";
    navbar.style.background = "coralgrey";
    if (windowSize.scrollTop.toFixed(0) > 800) {
      arrowBtn.style.transform = "translateX(0)";
    }
    if (windowSize.scrollTop.toFixed(0) < 800) {
      arrowBtn.style.transform = "translateX(150%)";
    }
  } else {
    navbar.style.opacity = "1";
    navbar.style.background = "whitesmoke";
  }
});

navbar.addEventListener("mouseover", () => {
  navbar.style.opacity = "1";
  navbar.style.background = "whitesmoke";
});
