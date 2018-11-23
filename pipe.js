class Pipe {
    constructor() {
        this.top = random(height / 2);
        this.bottom = random(height / 2);
        this.x = width;
        this.w = 20;
        this.speed = 3;
    }

    show() {
        fill(255);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height - this.bottom, this.w, this.bottom);
    }

    update() {
        this.x -= this.speed;
    }

    offScreen() {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }
}