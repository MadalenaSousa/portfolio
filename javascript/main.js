let body = document.querySelector("body");
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let logo = document.querySelector(".logo");

let hamburgerPath = document.querySelectorAll(".hamburger svg path");

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

hamburger.addEventListener("mouseenter", function () {
  for(let i = 0; i < hamburgerPath.length; i++) {
    hamburgerPath[i].style.fill = "mediumpurple";
  }
})

hamburger.addEventListener("mouseleave", function () {
  for(let i = 0; i < hamburgerPath.length; i++) {
    hamburgerPath[i].style.fill = body.style.color;
  }
})

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

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


