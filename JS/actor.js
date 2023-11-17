// ACTOR CODE //

//Var Actor//
var xActor = 100;
var yActor = 470;
//var collide = false;

function showActor() {
  image(actor1Image, xActor, yActor, 30, 30);
  
}
function moveActor() {
  if (keyIsDown(UP_ARROW)) {
    yActor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (canMove()) {
    yActor += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    xActor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xActor += 3;
  }
}
function actorCollide() {
  for (var i= 0; i < carsImages.length; i++) {
    collide = collideRectCircle(xCars[i], yCars[i], 50, 40, xActor, yActor, 30)
  if (collide) { hit();
    if (myPointsHigherThanZero()) {
      myPoints -= 1;
    }
   }
  }
}
function hit() {
  xActor = 50;
  yActor = 465;  
}
function canMove() {
  return yActor < 470;
}
function myPointsHigherThanZero() {
  return myPoints > 0;
}