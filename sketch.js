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
            pipes = pipes.filter(() => {
                return true;
            });
        }
    });
    // for (let i = pipes.length - 1; i >= 0; i--) {
    //     pipes[i].update();
    //     pipes[i].show();
    //     if (pipes[i].offScreen()) {
    //         pipes.splice(i, 1);
    //     }
    // }

    bird.think(pipes);
    bird.update();
    bird.show();

    if (frameCount % 75 == 0) {
        pipes.push(new Pipe());
    }
}

// function keyPressed() {
//     if (key == ' ') {
//         bird.liftUp();
//         // console.log('space');
//     }
// }