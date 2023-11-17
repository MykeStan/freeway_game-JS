// ScoreBoard on Screen //
var myPoints = 0;

function board() {
  textAlign(CENTER);
  fill(255, 160, 40);
  textSize(30);
  text (myPoints, 50, 33);
}

function score() {
   if (yActor < -10) {
    myPoints ++;
    xActor = 100;
    yActor = 470;
   }
}