
var btnNext;
var btnPrev;

function nextOneToTwo() {
    var cardOne = document.getElementById("instOne");
    var cardTwo = document.getElementById("instTwo");

    cardOne.style.display = "none";
    cardTwo.style.display = "block";
}

function prevStepOne(){
    var cardOne = document.getElementById("instOne");
    var cardTwo = document.getElementById("instTwo");

    cardOne.style.display = "block";
    cardTwo.style.display = "none";
}

function nextTwoToThree(){
    var cardTwo = document.getElementById("instTwo");
    var cardThree = document.getElementById("instThree");

    cardTwo.style.display = "none";
    cardThree.style.display = "block";
}

function prevStepTwo() {
    var cardTwo = document.getElementById("instTwo");
    var cardThree = document.getElementById("instThree");

    cardTwo.style.display = "block";
    cardThree.style.display = "none";
}

function nextThreeToFour() {
    var cardThree = document.getElementById("instThree");
    var cardFour = document.getElementById("instFour");

    cardThree.style.display = "none";
    cardFour.style.display = "block";
}

function prevStepThree() {
    var cardThree = document.getElementById("instThree");
    var cardFour = document.getElementById("instFour");

    cardThree.style.display = "block";
    cardFour.style.display = "none";
}

function nextFourToFive() {
    var cardFour = document.getElementById("instFour");
    var cardFive = document.getElementById("instFive");

    cardFour.style.display = "none";
    cardFive.style.display = "block";
}

function prevStepFour() {
    var cardFour = document.getElementById("instFour");
    var cardFive = document.getElementById("instFive");

    cardFour.style.display = "block";
    cardFive.style.display = "none";
}

function nextFiveToSix() {
    var cardFive = document.getElementById("instFive");
    var cardSix = document.getElementById("instSix");

    cardFive.style.display = "none";
    cardSix.style.display = "block";
}

function prevStepFive(){
    var cardFive = document.getElementById("instFive");
    var cardSix = document.getElementById("instSix");

    cardFive.style.display = "block";
    cardSix.style.display = "none";
}

function nextSixToSeven(){
    var cardSix = document.getElementById("instSix");
    var cardSeven = document.getElementById("instSeven");

    cardSix.style.display = "none";
    cardSeven.style.display = "block";
}

function prevStepSix(){
    var cardSix = document.getElementById("instSix");
    var cardSeven = document.getElementById("instSeven");

    cardSix.style.display = "block";
    cardSeven.style.display = "none";
}

function nextSevenToEight(){
    var cardSeven = document.getElementById("instSeven");
    var cardEight = document.getElementById("instEight");

    cardSeven.style.display = "none";
    cardEight.style.display = "block";
}

function prevStepSeven(){
    var cardSeven = document.getElementById("instSeven");
    var cardEight = document.getElementById("instEight");

    cardSeven.style.display = "block";
    cardEight.style.display = "none";
}

function nextEightToNine(){
    var cardEight = document.getElementById("instEight");
    var cardNine = document.getElementById("instNine");

    cardEight.style.display = "none";
    cardNine.style.display = "block";
}

function PlayGame(){
    window.location.href = "juego.html";
}
