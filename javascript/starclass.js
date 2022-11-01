class Star {

    constructor(translateStarX, translateStarY) {
        this.centerX = 0;
        this.centerY = 0;
        this.s = 0;
        this.speed = random(0, 0.05);
        this.offset = random(5, 15);
        this.translateStarX = translateStarX;
        this.translateStarY = translateStarY;
        this.starColor = 0;
    }

    display() {
        this.s = this.s + this.speed;

        fill(this.starColor);
        noStroke();

        push();
        translate(this.translateStarX, this.translateStarY);
        scale(cos(this.s));
        rotate(millis() / 1000);

        beginShape();
        vertex(this.centerX, this.centerY - this.offset);
        bezierVertex(this.centerX-5, this.centerY, this.centerX-5, this.centerY, this.centerX - this.offset, this.centerY);
        bezierVertex(this.centerX, this.centerY+5, this.centerX, this.centerY+5, this.centerX, this.centerY + this.offset);
        bezierVertex(this.centerX + 5, this.centerY, this.centerX+5, this.centerY, this.centerX + this.offset, this.centerY);
        bezierVertex(this.centerX, this.centerY-5,this.centerX, this.centerY-5, this.centerX, this.centerY-this.offset);
        endShape(CLOSE);

        pop();
    }
}