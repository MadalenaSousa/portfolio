let star = [];
let starCount;
let newStar;
let followStar;
let myCanvas

function setup() {
    myCanvas = createCanvas(windowWidth * 0.9, windowHeight * 0.6);

    myCanvas.parent("canvasDiv");

    starCount = 20;

    for(let i = 0; i < starCount; i++) {
        star[i] = new Star(random(width), random(height));
    }

    followStar = new Star(mouseX, mouseY);
}

function draw() {
    background(235, 226, 211);

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
    resizeCanvas(windowWidth * 0.9, windowHeight * 0.6);
    star.slice();
    for(let i = 0; i < starCount; i++) {
        star[i] = new Star(random(width), random(height));
    }
}