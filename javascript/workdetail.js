let workCover = document.querySelector(".workcover img");
let workTitle = document.querySelector(".workinfo div h2");
let workDescription = document.querySelector(".workinfo div p");
let workTools = document.querySelector(".workData div:first-child div:nth-child(2)");
let workAreas  = document.querySelector(".workData div:nth-child(2) div:nth-child(2)");
let workYear  = document.querySelector(".workData div:nth-child(3) div:nth-child(2)");

let workDetailBox = document.querySelector(".workDetail");

let nextProjectBtn = document.querySelector(".nextproject");

fetch('./works.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        //console.log(json);

        createWorkDetail(json[sessionStorage.getItem("workId")]);
    });

function createWorkDetail(workObject) {
    workDetailBox.replaceChildren();

    workCover.setAttribute("src", workObject.cover);
    workTitle.textContent = workObject.title;
    workDescription.textContent = workObject.description;
    workTools.textContent = workObject.tools;
    workAreas.textContent = workObject.category
    workYear.textContent = workObject.year;

    for(let i = 0; i < workObject.images.length; i++) {
        let row1 = document.createElement("div");
        row1.classList.add("row");
        row1.classList.add("reveal");

        let imgColumn = document.createElement("div");
        imgColumn.classList.add("twelve");
        imgColumn.classList.add("columns");

        let workImg = document.createElement("img");
        workImg.setAttribute("src", workObject.images[i].src);
        workImg.setAttribute("width", "100%");
        workImg.setAttribute("alt", "");

        row1.appendChild(imgColumn);
        imgColumn.appendChild(workImg);

        let row2 = document.createElement("div");
        row2.classList.add("row");

        let subtitleColumn = document.createElement("div");
        subtitleColumn.classList.add("twelve");
        subtitleColumn.classList.add("columns");

        let subtitle = document.createElement("h5");
        subtitle.textContent = workObject.images[i].title;

        let subtitleDescription = document.createElement("span");
        subtitleDescription.textContent = workObject.images[i].description;

        let midSpace = document.createElement("div");
        midSpace.classList.add("row");
        midSpace.classList.add("space-mid");

        row2.appendChild(subtitleColumn);
        subtitleColumn.appendChild(subtitle);
        subtitleColumn.appendChild(subtitleDescription);

        workDetailBox.appendChild(row1);
        workDetailBox.appendChild(row2);
        workDetailBox.appendChild(midSpace);
    }

    for(let i = 0; i < workObject.videos.length; i++) {
        let row3 = document.createElement("div");
        row3.classList.add("row");

        let vidColumn = document.createElement("div");
        vidColumn.classList.add("twelve");
        vidColumn.classList.add("columns");

        let workVid = document.createElement("video");
        workVid.setAttribute("controls", true);
        workVid.setAttribute("width", "100%");

        let workVidSrc = document.createElement("source");
        workVid.setAttribute("src", workObject.videos[i].src);
        workVid.setAttribute("type", "video/mp4");


        row3.appendChild(vidColumn);
        vidColumn.appendChild(workVid);
        workVid.appendChild(workVidSrc);

        let row4 = document.createElement("div");
        row4.classList.add("row");

        let subtitleColumn = document.createElement("div");
        subtitleColumn.classList.add("twelve");
        subtitleColumn.classList.add("columns");

        let subtitle = document.createElement("h5");
        subtitle.textContent = workObject.videos[i].title;

        let subtitleDescription = document.createElement("span");
        subtitleDescription.textContent = workObject.videos[i].description;

        let midSpace = document.createElement("div");
        midSpace.classList.add("row");
        midSpace.classList.add("space-mid");

        row4.appendChild(subtitleColumn);
        subtitleColumn.appendChild(subtitle);
        subtitleColumn.appendChild(subtitleDescription);

        workDetailBox.appendChild(row3);
        workDetailBox.appendChild(row4);
        workDetailBox.appendChild(midSpace);
    }
}

let topButton = document.querySelector(".top-button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

topButton.addEventListener("click", topFunction);