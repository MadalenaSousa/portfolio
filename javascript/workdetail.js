let workCover = document.querySelector(".workcover div img");
let workTitle = document.querySelector(".workcover div h2");
let workDescription = document.querySelector(".workcover div p");
let workTools = document.querySelector(".madewith div");
let workYear  = document.querySelector(".thankyou div");

let workDetailBox = document.querySelector(".workDetail");

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

    let yearSVG = document.createElement("img");
    yearSVG.setAttribute("src", "images/workpage/" + workObject.year + ".svg")

    workYear.appendChild(yearSVG);

    for(let i = 0; i < workObject.images.length; i++) {
        let row1 = document.createElement("div");
        row1.classList.add("row");

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