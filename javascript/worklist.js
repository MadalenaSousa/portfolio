let row = document.querySelector(".works");

fetch('./works.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        //console.log(json);

        createWork(json);

        for(let i = 0; i < json.length; i++) {
            document.querySelectorAll(".work")[i].addEventListener("click", function () {
                window.location = "work.html";
                sessionStorage.setItem("workId", json[i].id);
            })
        }
    });

function createWork(json) {
    for(let i = 0; i < json.length; i++) {
        let divBox = document.createElement("div");
        divBox.classList.add("work");

        let workImg = document.createElement("img");
        workImg.setAttribute("src", json[i].cover);
        workImg.setAttribute("alt", "");


        divBox.appendChild(workImg);

        row.appendChild(divBox);
    }
}




