var random_num = Math.floor(Math.random()*6)+1; //(1-6)
var randomImage = "images/dice"+ random_num +".png"
var img = document.querySelectorAll("img")[0]
img.setAttribute("src",randomImage)


var random_num = Math.floor(Math.random()*6)+1; //(1-6)
var randomImage2 = "images/dice"+ random_num +".png"
var img = document.querySelectorAll("img")[1]
img.setAttribute("src",randomImage2)

if (randomImage>randomImage2){
    document.querySelector("h1").innerHTML="player1 is the winner"
}
else if(randomImage<randomImage2){
    document.querySelector("h1").innerHTML="player2 is the winner"
}
else {
    document.querySelector("h1").innerHTML="Draw"
}