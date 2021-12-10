function closeParent()
{
    console.log('clicked');
    box.remove();
    console.log('closed');
    localStorage.setItem('noticed','Racism');
}

const cross = document.querySelector('#notice-cross');
const box = document.querySelector('#floating-notice');
//localStorage.setItem('noticed','false');
//closeParent(); // When election is about to begin, remove this line

if (localStorage.getItem('noticed')=='Racism')
{
    closeParent();
}
else
{
    box.querySelector("strong").innerHTML = "Feedback";
    box.querySelector("p").innerHTML = "If you have any issues regarding how the server is ran, please talk to the admin team. Arun, Charis, Arvy and Jack are the most responsible but we are all here to help!";
    //var link = document.createElement("a");
    // link.href="admins.html";
    // link.innerHTML="<p>New Admins</p>";
    // box.appendChild(link);
    cross.addEventListener("click", closeParent);
}