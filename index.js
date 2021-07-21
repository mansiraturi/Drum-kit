var dice1 = Math.floor(Math.random() * 6)+1;
var imgSource1= "images/dice"+dice1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgSource1);

var dice2 = Math.floor(Math.random() * 6)+1;
var imgSource2= "images/dice"+dice2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imgSource2);

if( dice1 > dice2){
  document.querySelector("h1").innerHTML="⛳Player 1 wins!";
}
else if( dice1 < dice2){
  document.querySelector("h1").innerHTML="Player 2 wins! ⛳";
}
else{
  document.querySelector("h1").innerHTML="It's a DRAW!";
}
