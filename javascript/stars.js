let star = [];
let starCount;
let newStar;

function setup() {
    createCanvas(windowWidth, windowHeight);

    starCount = 50;

    for(let i = 0; i < starCount; i++) {
        star[i] = new Star(random(width), random(height));
    }
}

function draw() {
    background(255);

    for(let i = 0; i < star.length; i++) {
        star[i].display();
    }

}

function mouseClicked() {
    newStar = new Star(mouseX, mouseY);
    append(star, newStar);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    star.slice();
    for(let i = 0; i < starCount; i++) {
        star[i] = new Star(random(width), random(height));
    }
}