function setup() {
    createCanvas(650, 500);
  }
  
  function draw() {
    background(roadImage);
    showActor();
    showCars();
    moveCars();
    moveActor();
    carsRegen();
    carsPassScreen();
    actorCollide();
    board();
    score();
  }