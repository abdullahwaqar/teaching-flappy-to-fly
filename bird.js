class Bird {
    constructor() {
        this.y = height / 2;
        this.x = 64;
        this.gravity = 0.6;
        this.velocity = 0;
        this.liftForce = -12;

        /*
        ? Declaring the Brain of the bird/ball
        ?@param: input[4] hiddenNode[4] output[1]
        */
        this.brain = new NeuralNetwork();
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }

    liftUp() {
        this.velocity += this.liftForce;
    }

    update() {
        this.velocity += this.gravity;
        this.velocity *= 0.9; // air resistance
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