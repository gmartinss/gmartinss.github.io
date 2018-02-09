let slideMenu = document.querySelector(".slide-menu");
let openSlide = document.querySelector(".open-slide");
let fig = document.querySelector(".fig");
let closer = document.querySelector(".close");
let figImg = document.querySelector(".figImg");
let figcaption = document.querySelector(".fiufiu");
let spanImg = document.getElementById("span-img");
let headerName = document.getElementById("header-name");
let navBelow = document.querySelector(".nav-below");
let vpHeight = "";
let topDist = [];
let proj = document.getElementsByClassName("proj");

function dataDraw() {
  vpHeight = window.innerHeight;
  for(let i=0; i < proj.length; i++) {
    topDist[i] = proj[i].offsetTop;
  }
  return topDist;
}

function figUp() {
  if(window.pageYOffset > 10) {
    fig.style.opacity = "0";
    spanImg.style.left = "33px";
    headerName.style.left = "76px"
    navBelow.style.height = "20vh";
  } else {
    fig.style.opacity = "1";
    spanImg.style.left = "-100px";
    headerName.style.left = "-100px";
    navBelow.style.height = "60vh";
  }
}

function show() {
  for(let i=0; i < proj.length; i++){
    if(window.pageYOffset >= (topDist[i] - (vpHeight*1.3))) {
      proj[i].style.opacity = "1";
    }
  }
}

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
window.addEventListener("scroll", figUp);
window.addEventListener("scroll", show);
window.addEventListener("load", dataDraw);

