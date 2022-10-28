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

let logoSVG = document.querySelector(".logo a svg")

logoSVG.addEventListener("mouseenter", function () {
  logoSVG.classList.add("ms");
})

logoSVG.addEventListener("mouseleave", function () {
  logoSVG.classList.remove("ms");
})

let topButton = document.querySelector(".top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

topButton.addEventListener("click", topFunction);