function nextCard()
{
    console.log("Next card please");
    if (Math.random()>0.3)
    {
        card.querySelector("p").innerHTML = common[Math.floor(Math.random()*common.length)];
    }
    else
    {
        var index = Math.floor(Math.random()*rare.length);
        card.querySelector("p").innerHTML = rare[index];
        rare.splice(index,1);
        console.log(rare);
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
readTextFile("https://ueacs.co.uk/js/drinkCom.txt");

console.log("Common:"+text);
var common = text.split('\n');

readTextFile("https://ueacs.co.uk/js/drinkRare.txt");

console.log("Rare:"+text);
var rare = text.split('\n');

nextButton.addEventListener("click", nextCard);