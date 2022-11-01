let star = [];
let starCount;
let newStar;
let followStar;

function setup() {
    createCanvas(windowWidth, windowHeight);

    starCount = 50;

    for(let i = 0; i < starCount; i++) {
        star[i] = new Star(random(width), random(height));
    }

    followStar = new Star(mouseX, mouseY);
}

function draw() {
    background(255);

    for(let i = 0; i < star.length; i++) {
        star[i].display();
    }

    push();
    translate(mouseX, mouseY);

    beginShape();
    vertex(0, - 10);
    bezierVertex(-5, 0, -5, 0,  - 10, 0);
    bezierVertex(0, 5, 0, 5, 0, 10);
    bezierVertex(5, 0, 5, 0, 10, 0);
    bezierVertex(0, -5,0, -5, 0, -10);
    endShape(CLOSE);

    pop();

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