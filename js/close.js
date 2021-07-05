function closeParent()
{
    console.log('clicked');
    box.remove();
    console.log('closed');
    localStorage.setItem('noticed','July Election Started');
}

//localStorage.setItem('noticed','false');
//closeParent(); // When election is about to begin, remove this line
const cross = document.querySelector('#notice-cross');
const box = document.querySelector('#floating-notice');
box.querySelector("strong").innerHTML = "JULY ELECTION: Voting ends Saturday";
box.querySelector("p").innerHTML = "Stay up to date with election information, candidate statements and our own takes and insights into the election.";
var link = document.createElement("a");
link.href="manifestos.html";
link.innerHTML="<p>Manifestos</p>";
box.appendChild(link);

if (localStorage.getItem('noticed')=='July Election Started')
{
    closeParent();
}
cross.addEventListener("click", closeParent);