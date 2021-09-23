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

function prepareInstruction(instruction)
{
    instruction = instruction.replaceAll('prsn',names[Math.floor(Math.random()*names.length)]) // Randomly put in players names to suitable marked positions
    console.log(instruction.match(/[^\[\]]+(?=\])/g))
    if (instruction.match(/[^\[\]]+(?=\])/g) != null)
    {
        options = instruction.match(/[^\[\]]+(?=\])/g)[0].split(",");
        console.log(options);
        console.log(Math.random()*options.length)
        instruction = instruction.replace(/\[([^}]*)\]/g,options[Math.floor(Math.random()*options.length)])
    }
    return instruction;
}

function nextCard()
{
    console.log("Next card please");
    if (Math.random()>0.25)
    {
        // Common cards
        instruction = common[Math.floor(Math.random()*common.length)];
        instruction = prepareInstruction(instruction);
        
        card.querySelector("p").innerHTML = instruction;
    }
    else if(Math.random()>0.45)
    {
        // Uncommon cards
        instruction = uncommon[Math.floor(Math.random()*uncommon.length)];
        instruction = prepareInstruction(instruction);
        
        card.querySelector("p").innerHTML = instruction;
    }
    else
    {
        // Rare cards
        var index = Math.floor(Math.random()*rare.length); // Index used to remove card once played
        instruction = rare[index];
        instruction = prepareInstruction(instruction);

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

//console.log("Common:"+text);
var common = text.split('\n');

readTextFile("https://ueacs.co.uk/js/drinkUncom.txt");

//console.log("Uncommon:"+text);
var uncommon = text.split('\n');

readTextFile("https://ueacs.co.uk/js/drinkRare.txt");

//console.log("Rare:"+text);
var rare = text.split('\n');

nextButton.addEventListener("click", nextCard);