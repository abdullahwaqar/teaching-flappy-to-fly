class Bird {
    constructor(brain) {
        this.y = height / 2;
        this.x = 64;
        this.radius = 12;
        this.gravity = 0.6;
        this.velocity = 0;
        this.liftForce = -12;

        this.score = 0;
        this.fitness = 0;
        /*
        ? Declaring the Brain of the bird/ball
        ?@param: input[4] hiddenNode[4] output[2]
        */
       if (brain) {
           this.brain = brain.copy();
       } else {
           this.brain = new NeuralNetwork(4, 4, 12);
       }
    }

    show() {
        stroke(255);
        fill(255, 50);
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    }

    liftUp() {
        this.velocity += this.liftForce;
    }

    mutate() {
        this.brain.mutate(0.1);
    }

    think(pipes) {
        //* Find the closet pipe
        let closetPipe = null;
        let closetDistance = Infinity;
        for (let i = 0; i < pipes.length; i++) {
            let d = pipes[i].x - this.x;
            if (d < closetDistance) {
                closetPipe = pipes[i];
                closetDistance = d;
            }
        }

        let inputs =[];
        inputs[0] = this.y / height;
        inputs[1] = closetPipe.top / height;
        inputs[2] = closetPipe.bottom / height;
        inputs[3] = closetPipe.x / width;

        //// let input = [1.0, 0.5, 0.2, 0.3];
        let output = this.brain.predict(inputs);
        if (output[0] > output[1]) {
            this.liftUp();
        }
    }

    update() {
        this.score++;
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