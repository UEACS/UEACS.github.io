// New Items
const nameInput = document.querySelector('#name');
const namesContainer = document.querySelector('#names');

const newItemButton = document.querySelector("#new-item");
newItemButton.addEventListener("click", newItem);

// New Aliases
const aliasNameInput = document.querySelector('#name');
const aliasNamesContainer = document.querySelector('#names');

const newAliasButton = document.querySelector("#new-alias");
newAliasButton.addEventListener("click", newAlias);

function personsUpdate(event)
{
    let text = this.value;
    if (event.code === "Enter")
    {
        if (text != "") // Prevents blank names being added
        {
            console.log("Text: "+text);
            addPersonBox.call(this,text);
        }
        this.value = ""; // Removes all text input as the name has been added
    }
}

function addPersonBox(text)
{
    text = text.replace(/^\s|\s$/g,''); // Removes spaces
    // Make new name item
    let newName = document.createElement("div");
    newName.className = "confirmed-box";
    newName.innerHTML = `
        <a>Person</a>
        <img id="remove-person" src="media/Cross.png" />
    `;
    newName.querySelector("a").innerHTML = text;
    newName.querySelector("#remove-person").addEventListener("click", removeElement);
    this.parentElement.appendChild(newName);
}

function removeElement(event) {
    let item = event.currentTarget.parentElement;
    item.remove();
    console.log("Item removed");
}

/**
 * Add a new row to the list of items.
 */
function newItem()
{
    let newItemElm = document.createElement("div");
    newItemElm.className = "complete-item";

    newItemElm.innerHTML = `
    <input type="currency" id="price" name="price" value="£0.00" placeholder='0' />
    <input type=text id="name" name="name" placeholder="Item"/>
    <div class="input-box">
        <input type=text id="persons" name="persons" placeholder="Person(s)" />
    </div>
    <img id="remove-item" src="media/Cross.png" />
    `;

    newItemElm.querySelector("#persons").addEventListener("keyup", personsUpdate);
    newItemElm.querySelector("#remove-item").addEventListener("click", removeElement);

    document.querySelector("div #items").appendChild(newItemElm);
    rescanCurrencyInputs();
}

function newAlias()
{
    console.log("clicked new alias");
    let newItemElm = document.createElement("div");
    newItemElm.className = "complete-item";

    newItemElm.innerHTML = `
    <input type=text id="alias-name" name="name" placeholder="Enter shortcut name"/>
    <div class="input-box">
        <input type=text id="persons" name="persons" placeholder="Person(s)" />
    </div>
    <img id="remove-item" src="media/Cross.png" />
    `;

    newItemElm.querySelector("#persons").addEventListener("keyup", personsUpdate);
    newItemElm.querySelector("#remove-item").addEventListener("click", removeElement);

    document.querySelector("div #alias-items").appendChild(newItemElm);
    rescanCurrencyInputs();
}