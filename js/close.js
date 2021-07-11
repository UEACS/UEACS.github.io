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
box.querySelector("strong").innerHTML = "JULY ELECTION: Voting ended 9am 11th July";
box.querySelector("p").innerHTML = "Catch all the post-election juice right here!";
var link = document.createElement("a");
link.href="manifestos.html";
link.innerHTML="<p>Manifestos</p>";
box.appendChild(link);

if (localStorage.getItem('noticed')=='July Election Ended')
{
    closeParent();
}
cross.addEventListener("click", closeParent);