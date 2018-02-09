let left = document.querySelector(".left");
let right = document.querySelector(".right");
let container = document.querySelector(".container");

window.addEventListener("load", lang);

left.addEventListener('mouseenter', () => {
  container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right');
});

function lang() {
  let ask = setTimeout(showModal, 1000);
}

function showModal() {
  let alert = document.getElementsByTagName("div")[0];
  alert.setAttribute("id", "modal");
  let mWrapper = document.createElement("div");
  mWrapper.setAttribute("id", "mWrapper");
  let h1P = document.createElement("h1");
  h1P.setAttribute("class", "modalH1");
  let h1Ptext = document.createTextNode("Continuar em português?");
  h1P.appendChild(h1Ptext);
  mWrapper.appendChild(h1P);
  let btnP = document.createElement("a");
  btnP.setAttribute("href", "inicio.html");
  btnP.setAttribute("class", "modalA");
  let btnPtext = document.createTextNode("Clique Aqui");
  btnP.appendChild(btnPtext);
  mWrapper.appendChild(btnP);
  let h1E = document.createElement("h1");
  h1E.setAttribute("class", "modalH1");
  let h1Etext = document.createTextNode("Continue in English?");
  h1E.appendChild(h1Etext);
  mWrapper.appendChild(h1E);
  let btnE = document.createElement("a");
  btnE.setAttribute("href", "#");
  btnE.setAttribute("id", "closeModal");
  btnE.setAttribute("class", "modalA");
  let btnEtext = document.createTextNode("Click Here");
  btnE.appendChild(btnEtext);
  mWrapper.appendChild(btnE);
  alert.appendChild(mWrapper);
  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("modal").style.opacity = "0";
    document.getElementById("modal").style.zIndex = "-1";
  });
}