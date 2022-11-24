console.log("done")
var randomNumber1=Math.floor(Math.random()*(6)+1);
console.log(randomNumber1);
var x="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",x);


var randomNumber2=Math.floor(Math.random()*(6)+1);
var x="images/dice"+randomNumber2+".png";
var image1=document.querySelectorAll("img")[1].setAttribute("src",x);

if(randomNumber1>randomNumber2)

{
    document.querySelector("h1").innerHTML="player1 wins";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="player2 wins";
}
else{
    document.querySelector("h1").innerHTML="Tie";
}
