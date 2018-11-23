const TOTAL_POPULATION = 250;
let birds = [];
let savedBirds = [];
let pipes = [];

function setup() {
    createCanvas(400, 600);
    for (let i = 0; i < TOTAL_POPULATION; i++) {
        birds[i] = new Bird();
    }
    pipes.push(new Pipe());
}

function draw() {
    background(0);

    //Drawing the pipes
    pipes.forEach((pipe) => {
        pipe.show();
        pipe.update();
        //* Check if the bird/ball hits a pipe
        for (let j = birds.length - 1; j >=0; j--) {
            if (pipe.hits(birds[j])) {
                console.log('We Got a Hit');
                birds.splice(j, 1);
            }
        }
        // birds.forEach((bird) => {
        //     if (pipe.hits(bird)) {
        //         console.log('Hit');
        //         birds = birds.filter(() => {
        //             return true;
        //         });
        //     }
        // });
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

    for (let bird of birds) {
        bird.think(pipes);
        bird.update();
        bird.show();
    }

    if (birds.length === 0) {
        nextGeneration();
    }

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