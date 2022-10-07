let sendButton = document.querySelector(".buttonwithhover");
let contactSvg = document.querySelector(".contactHover");

sendButton.addEventListener("mouseenter", function () {
    contactSvg.classList.remove("displayNone");
    contactSvg.classList.add("hovereffect");
});

sendButton.addEventListener("mouseleave", function () {
    contactSvg.classList.add("displayNone");
    contactSvg.classList.remove("hovereffect");
});
