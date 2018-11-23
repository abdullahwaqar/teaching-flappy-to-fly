let bird;
let pipes = [];

function setup() {
    createCanvas(400, 600);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(0);

    //Drawing the pipes
    pipes.forEach((pipe) => {
        pipe.show();
        pipe.update();
        //* Check if the bird/ball hits a pipe
        if (pipe.hits(bird)) {
            console.log('We Got a Hit');
        }

        if (pipe.offScreen()) {
            pipes.shift();
        }
    });

    bird.update();
    bird.show();

    if (frameCount % 100 == 0) {
        pipes.push(new Pipe());
    }
}

function keyPressed() {
    if (key == ' ') {
        bird.liftUp();
        // console.log('space');
    }
}