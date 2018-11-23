/*
* This file includes functons for creating new generation of birds
*/

function nextGeneration() {
    calculateFitness();
    for (let i = 0; i < TOTAL_POPULATION; i++) {
        birds[i] = pickOne();
    }
}

function calculateFitness() {
    let sum = 0;
    for (let bird of birds) {
        sum += bird.score;
    }

    for (let bird of birds) {
        bird.fitness = bird.score / sum;
    }
}