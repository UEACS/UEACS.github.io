function nextCard()
{
   //Randomise card
}


const nextButton = document.querySelector('#next-button');
const card = document.querySelector('.card');
box.querySelector("p").innerHTML = "Welcome To Drinkage!";

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
                alert(allText);
                console.log(allText);
            }
        }
    }
    rawFile.send(null);
}
readTextFile("https://ueacs.co.uk/drinkage cards.txt")

console.log(text);

cross.addEventListener("click", closeParent);