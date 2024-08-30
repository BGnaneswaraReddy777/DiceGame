var player1=Math.floor(Math.random()*6)+1;
var player2=Math.floor(Math.random()*6)+1;
if(player1>player2)
{
    document.querySelector("h1").innerHTML="Player 1 Won";
}
else if(player1<player2)
{
    document.querySelector("h1").innerHTML="Player 2 Won";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
var image1=document.getElementsByClassName("img1")[0];
switch(player1)
{
    case 1:
        image1.src="images/dice1.jpg.png";
        break;
    case 2:
        image1.src="images/dice2.jpg.png";
        break;
    case 3:
        image1.src="images/dice3.jpg.png";
        break;
    case 4:
        image1.src="images/dice4.jpg.png";
        break;
    case 5:
        image1.src="images/dice5.jpg.png";
        break;
    case 6:
        image1.src="images/dice6.jpg.png";
        break;
}
var image2=document.getElementsByClassName("img2")[0];
switch(player2)
{
    case 1:
        image2.src="images/dice1.jpg.png";
        break;
    case 2:
        image2.src="images/dice2.jpg.png";
        break;
    case 3:
        image2.src="images/dice3.jpg.png";
        break;
    case 4:
        image2.src="images/dice4.jpg.png";
        break;
    case 5:
        image2.src="images/dice5.jpg.png";
        break;
    case 6:
        image2.src="images/dice6.jpg.png";
        break;
}
document.querySelector("button").onclick=function()
{
    window.location.reload();
}
document.addEventListener("keypress",function()
{
    window.location.reload();
})
