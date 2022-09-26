let inc = 50;
let i = 0;
let works = document.querySelectorAll(".inner div");

document.onkeydown = (e) => {
  e = e || window.event;

  if (e.keyCode === 37)
  {
    if(i != 0) {
      inc = inc + 50;
      i--;

      document.getElementById('highlight').removeAttribute('id');
      works[i].id = 'highlight';
      document.querySelector(".inner").style.webkitTransform = "translateX(" + inc + "%)";

      console.log('Left arrow pressed, New Transform: ' + document.querySelector(".inner").style.transform + ' Applied Inc:' + inc);
    }
  }
  else if (e.keyCode === 39)
  {
    if(i != works.length-1) {
      inc = inc - 50;
      i++;

      document.getElementById('highlight').removeAttribute('id');
      works[i].id = 'highlight';
      document.querySelector(".inner").style.webkitTransform = "translateX(" + inc + "%)";

      console.log('Right arrow pressed, New Transform: ' + document.querySelector(".inner").style.transform + ' Applied Inc:' + inc);
    }
  }
}
