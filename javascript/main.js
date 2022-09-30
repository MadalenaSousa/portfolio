let inc = -50;
let i = 0;
let row = document.querySelector(".outter");
let works;

fetch('./works.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        //console.log(json);

        row.appendChild(createWork(json));

        works = document.querySelectorAll(".inner .work");
    });

document.onkeydown = (e) => {
  e = e || window.event;

  if (e.keyCode === 37)
  {
    if(i !== 0) {
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
    if(i !== works.length-1) {
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

function createWork(json) {

  let workColumn = document.createElement("div");
  workColumn.classList.add("twelve");
  workColumn.classList.add("columns");
  workColumn.classList.add("inner");

  for(let i = 0; i < json.length; i++) {
    let divBox = document.createElement("div");
    divBox.classList.add("work");

    if(i === 0) {
        divBox.id = "highlight";
    }

    let workLink = document.createElement("a");
    workLink.setAttribute("src", "work.php");

    let smallDivBox = document.createElement("div");

    let workImg = document.createElement("img");
    workImg.setAttribute("width", "100%");
    workImg.setAttribute("src", json[i].cover);
    workImg.setAttribute("alt", "");

    smallDivBox.appendChild(workImg);
    workLink.appendChild(smallDivBox);
    divBox.appendChild(workLink);

    workColumn.appendChild(divBox);
  }

  return workColumn;
}
