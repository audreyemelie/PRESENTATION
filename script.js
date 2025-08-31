// craeting variables
let linkNav = document.querySelector(".link-nav");
let hamburger = document.querySelector(".hamburger");

// craete a functipon
function toggleMenu() {
  linkNav.classList.toggle("show");
}
// craete an eventlistener
hamburger.addEventListener("click", toggleMenu);
