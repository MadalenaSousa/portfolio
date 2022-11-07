let body = document.querySelector("body");
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let logo = document.querySelector(".logo");

let hamburgerPath = document.querySelectorAll(".hamburger svg path");
let hamburgerSVG = document.querySelector(".hamburger svg");

let underHamburger = document.querySelector(".undermenu");

for(let i = 0; i < hamburgerPath.length; i++) {
  hamburgerPath[i].style.fill = body.style.color;
}

logo.style.color = body.style.color;

logo.addEventListener("mouseenter", function () {
  logo.style.color = "mediumpurple";
})

logo.addEventListener("mouseleave", function () {
  logo.style.color = body.style.color;
})

// HAMBURGER

hamburger.addEventListener("mouseenter", function () {
  hamburgerSVG.classList.add("turnhorizontal");
})

hamburger.addEventListener("mouseleave", function () {
  if(!hamburger.classList.contains("active")) {
    hamburgerSVG.classList.remove("turnhorizontal");
  }
})

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  underHamburger.classList.toggle("active");

  if(hamburger.classList.contains("active")) {
    body.style.position = "fixed";
  } else {
    body.style.position = "relative";
  }
});

underHamburger.addEventListener("click", function () {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  underHamburger.classList.remove("active");

  body.style.position = "relative";
  hamburgerSVG.classList.remove("turnhorizontal");
})

// APPEAR WITH SCROLL

window.addEventListener("scroll", function () {
  let elementsToAppear = document.querySelectorAll(".reveal");

  for(let i = 0; i < elementsToAppear.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = elementsToAppear[i].getBoundingClientRect().top;
    let showAt = 80;

    if(revealTop < windowHeight - showAt) {
      elementsToAppear[i].classList.add("show");
    } else {
      elementsToAppear[i].classList.remove("show");
    }
  }
})

setTimeout(function () {
  let elementsToAppear = document.querySelectorAll(".revealOnLoad");

  for(let i = 0; i < elementsToAppear.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = elementsToAppear[i].getBoundingClientRect().top;
    let showAt = 30;

    if(revealTop < windowHeight - showAt) {
      elementsToAppear[i].classList.add("show");
    } else {
      elementsToAppear[i].classList.remove("show");
    }
  }
}, 500)

