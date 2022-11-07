let row = document.querySelector(".works");

fetch('./works.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        //console.log(json);

        createWork(json);

        for(let i = 0; i < 2; i++) {
            document.querySelectorAll(".work")[i].addEventListener("click", function () {
                window.location = "work.html";
                sessionStorage.setItem("workId", json[i].id);
            })
        }
    });

function createWork(json) {
    for(let i = 0; i < 2; i++) {
        let divBox = document.createElement("div");
        divBox.classList.add("work");
        divBox.classList.add("reveal");

        let workImg = document.createElement("img");
        workImg.setAttribute("src", json[i].cover);
        workImg.setAttribute("alt", "");

        let workText = document.createElement("div");

        let title = document.createElement("div");
        title.textContent = json[i].title;
        title.style.fontWeight = "Bold";

        let category = document.createElement("div");
        category.textContent = json[i].category;

        workText.appendChild(title);
        workText.appendChild(category);

        divBox.appendChild(workImg);
        divBox.appendChild(workText);

        row.appendChild(divBox);
    }
}