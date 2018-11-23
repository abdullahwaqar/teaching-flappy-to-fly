let bird;
let pipes = [];

function setup() {
    createCanvas(400, 600);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(0);
    bird.update();
    bird.show();

    if (frameCount % 100 == 0) {
        pipes.push(new Pipe());
    }

    //Drawing the pipes
    pipes.forEach((pipe) => {
        pipe.show();
        pipe.update();
        if (pipe.offScreen()) {
            pipes.shift();
        }
    });
}

function keyPressed() {
    if (key == ' ') {
        bird.liftUp();
        // console.log('space');
    }
}