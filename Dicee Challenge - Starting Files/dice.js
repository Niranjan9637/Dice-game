var RandomNumber1 = Math.random();
RandomNumber1 = RandomNumber1 * 6;
RandomNumber1 = Math.floor(RandomNumber1 + 1);

var RandomNumber2 = Math.random();
RandomNumber2 = RandomNumber2 * 6;
RandomNumber2 = Math.floor(RandomNumber2 + 1);

var storeimages = ["Nothing", "./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png" ]

document.querySelector(".img1").setAttribute("src",storeimages[RandomNumber1]);
document.querySelector(".img2").setAttribute("src",storeimages[RandomNumber2]);

if(RandomNumber1 > RandomNumber2){
    document.querySelector(".container h1").innerHTML="Player1 Wins🚩"
}
else if (RandomNumber1 < RandomNumber2){
    document.querySelector(".container h1").innerHTML="Player2 wins🚩"
}
else{
    document.querySelector(".container h1").innerHTML="Match Draw🚩"
}