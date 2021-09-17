function closeParent()
{
    console.log('clicked');
    box.remove();
    console.log('closed');
    localStorage.setItem('noticed','No cookies');
}

const cross = document.querySelector('#notice-cross');
const box = document.querySelector('#floating-notice');
//localStorage.setItem('noticed','false');
//closeParent(); // When election is about to begin, remove this line

if (localStorage.getItem('noticed')=='No cookies')
{
    closeParent();
}
else
{
    box.querySelector("strong").innerHTML = "We don't collect cookies";
    box.querySelector("p").innerHTML = "Just to let you know";
    //var link = document.createElement("a");
    // link.href="admins.html";
    // link.innerHTML="<p>New Admins</p>";
    // box.appendChild(link);
    cross.addEventListener("click", closeParent);
}