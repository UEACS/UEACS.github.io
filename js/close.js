function closeParent()
{
    console.log('clicked');
    box.remove();
    console.log('closed');
    localStorage.setItem('noticed','July Election');
}

//localStorage.setItem('noticed','false');
//closeParent(); // When election is about to begin, remove this line
const cross = document.querySelector('#notice-cross');
const box = document.querySelector('#floating-notice');
box.querySelector("strong").innerHTML = " BREAKING NEWS: New Election Coming Soon!";
box.querySelector("p").innerHTML = "Stay up to date with election information, candidate statements and our own takes and insights into the election.";

if (localStorage.getItem('noticed')=='July Election')
{
    closeParent();
}
cross.addEventListener("click", closeParent);