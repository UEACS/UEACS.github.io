function closeParent()
{
    console.log('clicked');
    box.remove();
    console.log('closed');
    localStorage.setItem('noticed','New admins');
}

const cross = document.querySelector('#notice-cross');
const box = document.querySelector('#floating-notice');
//localStorage.setItem('noticed','false');
//closeParent(); // When election is about to begin, remove this line

if (localStorage.getItem('noticed')=='New admins')
{
    closeParent();
}
else
{
    box.querySelector("strong").innerHTML = "New Admins Selected";
    box.querySelector("p").innerHTML = "Arvy, Lukasz and Charlie have joined the admin team!";
    //var link = document.createElement("a");
    // link.href="admins.html";
    // link.innerHTML="<p>New Admins</p>";
    // box.appendChild(link);
    cross.addEventListener("click", closeParent);
}