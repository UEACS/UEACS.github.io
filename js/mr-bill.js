function PersonsUpdate()
{
    console.log("outed");
}

const nextButton = document.querySelector('#next-button');
const card = document.querySelector('.card');
const nameInput = document.querySelector('#name');
const namesContainer = document.querySelector('#names');

var instruction
var names = [];
card.querySelector("p").innerHTML = "Welcome To Drinkage!";

var text = "No cards found!";


readTextFile("https://ueacs.co.uk/js/drinkCom.txt");

//console.log("Common:"+text);
var common = text.split('\n');

readTextFile("https://ueacs.co.uk/js/drinkUncom.txt");

//console.log("Uncommon:"+text);
var uncommon = text.split('\n');

readTextFile("https://ueacs.co.uk/js/drinkRare.txt");

//console.log("Rare:"+text);
var rare = text.split('\n');

nextButton.addEventListener("click", nextCard);