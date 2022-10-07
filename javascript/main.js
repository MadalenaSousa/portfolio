let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

let navItens = document.querySelectorAll(".nav-item");
let navSvg = document.querySelectorAll(".navHover");

for(let i = 0; i < navItens.length; i++) {
  navItens[i].addEventListener("mouseenter", function () {
    navSvg[i].classList.remove("displayNone");
    navSvg[i].classList.add("hovereffect");
  });

  navItens[i].addEventListener("mouseleave", function () {
    navSvg[i].classList.add("displayNone");
    navSvg[i].classList.remove("hovereffect");
  });
}