let inc = -50;
let i = 0;
let works = document.querySelectorAll(".inner .work");

document.onkeydown = (e) => {
  e = e || window.event;

  if (e.keyCode === 37)
  {
    if(i != 0) {
      inc = inc + 100;
      i--;

      for(let j = 0; j < works.length; j++) {
          works[j].style.webkitTransform = "translateX(" + inc + "%) scale(1)";
      }

      document.getElementById('highlight').removeAttribute('id');
      works[i].id = 'highlight';
      works[i].style.webkitTransform = "translateX(" + inc + "%) scale(1.25)";

      console.log('Left arrow pressed, New Transform: ' + document.querySelector(".inner").style.transform + ' Applied Inc:' + inc);
    }
  }
  else if (e.keyCode === 39)
  {
    if(i != works.length-1) {
      inc = inc - 100;
      i++;

      for(let j = 0; j < works.length; j++) {
          works[j].style.webkitTransform = "translateX(" + inc + "%) scale(1)";
      }

      document.getElementById('highlight').removeAttribute('id');
      works[i].id = 'highlight';
      works[i].style.webkitTransform = "translateX(" + inc + "%) scale(1.25)";

      console.log('Right arrow pressed, New Transform: ' + document.querySelector(".inner").style.transform + ' Applied Inc:' + inc);
    }
  }
}
