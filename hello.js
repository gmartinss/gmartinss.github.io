let slideMenu = document.querySelector(".slide-menu");
let openSlide = document.querySelector(".open-slide");
let closer = document.querySelector(".close");

function slide() {
  slideMenu.style.left = "0px";
}

function closeIt() {
  slideMenu.style.left = "-250px";
}

openSlide.addEventListener("click", slide);
openSlide.addEventListener("touchstart", slide);
closer.addEventListener("click", closeIt);
closer.addEventListener("touchstart", closeIt);