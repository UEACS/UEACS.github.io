function nextCard()
{
    console.log("Next card please");
    if (Math.random()>0.3)
    {
        card.querySelector("p").innerHTML = common[Math.floor(Math.random()*common.length)];
    }
    
}


const nextButton = document.querySelector('#next-button');
const card = document.querySelector('.card');
card.querySelector("p").innerHTML = "Welcome To Drinkage!";

var text = "No cards found!";

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
readTextFile("https://ueacs.co.uk/js/drinkage cards.txt");

console.log("Text:"+text);
var cards = text.split('\n');
console.log(cards);

var common = cards;

nextButton.addEventListener("click", nextCard);