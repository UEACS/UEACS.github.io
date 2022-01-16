const totalBox = document.querySelector('#total-container');
const processButton = document.querySelector('#process');
processButton.addEventListener("click",processItems);

function addPerson(person,amount)
{
    console.log("Adding person: "+person);
    // Make new person item
    let newPerson = document.createElement("div");
    newPerson.className = "complete-item";
    newPerson.idName = person;
    newPerson.innerHTML = `
    <a class="name">Example name</a>
    <a class="money">£0</a>
    `;
    newPerson.querySelector(".name").innerHTML = person;
    newPerson.querySelector(".money").innerHTML = "£"+Math.round(amount*100)/100;
    totalBox.appendChild(newPerson);
}

function processItems()
{
    console.log("Starting processing");
    const itemContainer = document.querySelector("#items");
    const items = itemContainer.children;
    var people = {};
    
    for (let item of items)
    {
        const price = localStringToNumber(item.querySelector("#price").value);
        //console.log("Next item of value "+ price);
        var peopleInput = item.querySelector("#persons");
        const peopleContainer = peopleInput.parentElement;

        // Adds the name in the input box that may not be submitted yet
        if (peopleInput.value != '')
        {
            addPersonBox.call(peopleInput,peopleInput.value);
            peopleInput.value = '';
        }
        
        // Processes people and prices of item
        
        var relPeople = [];
        for (let person of peopleContainer.children)
        {
            if (person.nodeName != "INPUT")
            {
                relPeople.push(person.querySelector("a").textContent);
            }
        }
        console.log("People for the item: "+relPeople);
        for (let person of relPeople)
        {
            if (!(person in people))
            {
                people[person] = 0; // Makes new person with £0
            }
            people[person] = people[person] + parseFloat(price)/relPeople.length;
        }
    }
    // Remove previous results before new ones added
    totalBox.innerHTML = '';

    // Adds new results
    for (let [person,amount] of Object.entries(people))
    {
        console.log(person + " added with £" + amount);
        addPerson(person,amount);
    }

}