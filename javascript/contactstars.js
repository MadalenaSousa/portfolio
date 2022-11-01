let starTop, starBottom;
let starCount;

function setup() {
    createCanvas(windowWidth, windowHeight);

    starCount = 50;
    starTop = new Star(width/2, height/2 - 100);
    starBottom = new Star(width/2, height/2 + 100);
    starTop.starColor = 255;
    starBottom.starColor = 255;

}

function draw() {
    background(0);

    starTop.display();
    starBottom.display();

    if(windowWidth > 715) {
        strokeWeight(1);
        stroke(255);
        line(starTop.translateStarX, starTop.translateStarY + 30, starBottom.translateStarX, starBottom.translateStarY - 30);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    starTop = new Star(width/2, height/2 - 100);
    starBottom = new Star(width/2, height/2 + 100);
    starTop.starColor = 255;
    starBottom.starColor = 255;
}