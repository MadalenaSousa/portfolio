let row = document.querySelector(".works");

fetch('./works.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        //console.log(json);

        createWork(json);
    });

function createWork(json) {
    for(let i = 0; i < json.length; i++) {
        let divBox = document.createElement("div");
        divBox.classList.add("work");

        let workLink = document.createElement("a");
        workLink.setAttribute("href", "work.php?id=" + json[i].id);

        let workImg = document.createElement("img");
        workImg.setAttribute("src", json[i].cover);
        workImg.setAttribute("alt", "");

        workLink.appendChild(workImg);
        divBox.appendChild(workLink);

        row.appendChild(divBox);
    }
}