class Bird {
    constructor() {
        this.y = height / 2;
        this.x = 64;
        this.gravity = 1;
        this.velocity = 0;
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        /*
        * If the ball hits the ground stop it falling
        * & reset the velocity back to 0.
        */
        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
        /*
        * If the ball hits the top of the window stop the ball
        * & reset the velocity back to 0.
        */
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}