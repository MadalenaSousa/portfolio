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

        hoverWork();
    });

function createWork(json) {
    for(let i = 0; i < json.length; i++) {
        let divBox = document.createElement("div");
        divBox.classList.add("work");
        divBox.classList.add("grayscale");

        let workText = document.createElement("div");

        let title = document.createElement("div");
        title.textContent = json[i].title;

        let category = document.createElement("div");
        category.textContent = json[i].category;

        let year = document.createElement("div");
        year.textContent = json[i].year;

        workText.appendChild(title);
        workText.appendChild(category);
        workText.appendChild(year);

        let workImg = document.createElement("img");
        workImg.setAttribute("src", json[i].cover);
        workImg.setAttribute("alt", "");

        divBox.appendChild(workText);
        divBox.appendChild(workImg);

        row.appendChild(divBox);
    }
}

function hoverWork() {
    let eachWork = document.querySelectorAll(".work");
    console.log(eachWork);

    for(let i = 0; i < eachWork.length; i++) {

        eachWork[i].addEventListener("mouseenter", function () {
            eachWork[i].classList.remove("grayscale");
            eachWork[i].style.fontFamily = "Space Grotesk SemiBold, sans serif";
        })

        eachWork[i].addEventListener("mouseleave", function () {
            eachWork[i].classList.add("grayscale");
            eachWork[i].style.fontFamily = "Space Grotesk, sans serif";
        })
    }
}




