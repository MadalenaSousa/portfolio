let hamburger = document.querySelector(".hamburger");
let hamburgerPath = document.querySelectorAll(".hamburger svg path");
let navMenu = document.querySelector(".nav-menu");
let body = document.querySelector("body");

for(let i = 0; i < hamburgerPath.length; i++) {
  if(body.style.backgroundColor === "black") {
    hamburgerPath[i].style.fill = "white";
  } else {
    hamburgerPath[i].style.fill = "black";
  }
}

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  let hamburgerActive = document.querySelectorAll(".hamburger.active svg path");
  let navMenuActive = document.querySelector(".nav-menu.active");
  let navItemsActive = document.querySelectorAll(".nav-menu.active .nav-item");

  if(navMenuActive !== null && hamburgerActive !== null) {
    if(body.style.backgroundColor === "black"){
      navMenuActive.style.backgroundColor = "white";
      navMenuActive.style.color = "black";
    } else  {
      navMenuActive.style.backgroundColor = "black";
      navMenuActive.style.color = "white";
    }

    for(let i = 0; i < hamburgerActive.length; i++) {
      if(body.style.backgroundColor === "black"){
        hamburgerActive[i].style.fill = "black";
      } else  {
        hamburgerActive[i].style.fill = "white";
      }
    }

    for(let i = 0; i < navItemsActive.length; i++) {
      if(body.style.backgroundColor === "black"){
        navItemsActive[i].style.color = "black";
      } else  {
        navItemsActive[i].style.color = "white";
      }
    }
  }
});

