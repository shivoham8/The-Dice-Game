// Changing dice number for first image
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random number between 1-6

var randomImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSrc1 = "images/" + randomImage1; // images/dice1.png - images/dice6.png

document.querySelector(".img1").setAttribute("src", randomImageSrc1);

// Changing dice number for second image
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImageSrc2);

// Changing title depending upon who is the winner
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw :)";
}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
