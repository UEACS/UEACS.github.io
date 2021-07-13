function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                text = allText;
            }
        }
    }
    rawFile.send(null);
}

function nextCard()
{
    console.log("Next card please");
    if (Math.random()>0)
    {
        // Common cards
        instruction = common[Math.floor(Math.random()*common.length)];
        
        instruction = instruction.replace('prsn',names[Math.floor(Math.random()*names.length)]) // Randomly put in players names to suitable marked positions
        card.querySelector("p").innerHTML = instruction;
    }
    else
    {
        // Rare cards
        var index = Math.floor(Math.random()*rare.length);
        instruction = rare[index];
        instruction = instruction.replace("prsn",names[Math.floor(Math.random()*names.length)]) // Randomly put in players names to suitable marked positions
        card.querySelector("p").innerHTML = instruction;
        rare.splice(index,1);
    }
    
}

function addName()
{
    // Gets name value and clears field
    console.log("Adding player");
    var name = nameInput.value;
    if (name != "")
    {
        nameInput.value = "";
        console.log(name);

        // Adds name to list and makes a new player card
        names.push(name);
        var nameCard = document.createElement('div');
        nameCard.classList.value = "button";
        nameCard.innerHTML = name;

        namesContainer.appendChild(nameCard);
    }
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

console.log("Common:"+text);
var common = text.split('\n');

readTextFile("https://ueacs.co.uk/js/drinkRare.txt");

console.log("Rare:"+text);
var rare = text.split('\n');

nextButton.addEventListener("click", nextCard);