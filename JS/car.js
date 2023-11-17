// CAR CODES //

// Cars Sorted List //
//A sorted list always begin with [0,N1,N2,...N's]//
var xCars = [700, 700, 700, 700, 700, 700];
var yCars = [65, 125, 195, 265, 335, 405];
var carSpeeds = [2, 5, 3, 2, 6, 4];

// i < carsImages.length(length for the size of the list) //
function showCars() {
  for (var i= 0; i < carsImages.length; i++) {
  image(carsImages[i], xCars[i], yCars[i], 50, 40);
  }
}
//Car Movement
function moveCars() {
  for (var i= 0; i < carsImages.length; i++) {
  xCars[i] -= carSpeeds[i]
  }
}
//Cars Regen When Touches The End//
function carsRegen() {
  for (var i= 0; i < carsImages.length; i++) {
  if (carsPassScreen(xCars[i])) 
  { xCars[i] = 700 }
  }
}
function carsPassScreen(xCars) {
    return xCars < -45;
}