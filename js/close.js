function closeParent()
{
    console.log('clicked');
    box.remove();
    console.log('closed');
    localStorage.setItem('noticed','Redesigning');
}

const cross = document.querySelector('#notice-cross');
const box = document.querySelector('#floating-notice');
//localStorage.setItem('noticed','false');
//closeParent(); // When election is about to begin, remove this line

if (localStorage.getItem('noticed')=='Redesigning')
{
    closeParent();
}
else
{
    box.querySelector("strong").innerHTML = "Redesign in progress...";
    box.querySelector("p").innerHTML = "This website is getting a massive overhaul in its design and the apps page will become much more of a focus!";
    //var link = document.createElement("a");
    // link.href="admins.html";
    // link.innerHTML="<p>New Admins</p>";
    // box.appendChild(link);
    cross.addEventListener("click", closeParent);
}