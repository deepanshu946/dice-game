var randomnom = Math.floor(Math.random() * 6)+1;
if(randomnom == 1){
    document.querySelector(".img1").setAttribute("src" , "./images/dice1.png");
}
if(randomnom == 2){
    document.querySelector(".img1").setAttribute("src" , "./images/dice2.png");
}
if(randomnom == 3){
    document.querySelector(".img1").setAttribute("src" , "./images/dice3.png");
}
if(randomnom == 4){
    document.querySelector(".img1").setAttribute("src" , "./images/dice4.png");
}
if(randomnom == 5){
    document.querySelector(".img1").setAttribute("src" , "./images/dice5.png");
}
if(randomnom == 6){
    document.querySelector(".img1").setAttribute("src" , "./images/dice6.png");
}
var randomnom2 = Math.floor(Math.random() * 6)+1;
if(randomnom2 == 1){
    document.querySelector(".img2").setAttribute("src" , "./images/dice1.png");
}
if(randomnom2 == 2){
    document.querySelector(".img2").setAttribute("src" , "./images/dice2.png");
}
if(randomnom2 == 3){
    document.querySelector(".img2").setAttribute("src" , "./images/dice3.png");
}
if(randomnom2 == 4){
    document.querySelector(".img2").setAttribute("src" , "./images/dice4.png");
}
if(randomnom2 == 5){
    document.querySelector(".img2").setAttribute("src" , "./images/dice5.png");
}
if(randomnom2 == 6){
    document.querySelector(".img2").setAttribute("src" , "./images/dice6.png");
}

if(randomnom==randomnom2){
    document.querySelector("h1").innerHTML="draw!"
}
else if(randomnom > randomnom2){
    document.querySelector("h1").innerHTML="player 1 won!"
    
}
else if(randomnom<randomnom2){
    document.querySelector("h1").innerHTML="player 2 won!"
}


