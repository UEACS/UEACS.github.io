function closeParent()
{
    console.log('clicked');
    box.remove();
    console.log('closed');
    localStorage.setItem('noticed','Server changes 2021');
}

const cross = document.querySelector('#notice-cross');
const box = document.querySelector('#floating-notice');
//localStorage.setItem('noticed','false');
//closeParent(); // When election is about to begin, remove this line

if (localStorage.getItem('noticed')=='Server changes 2021')
{
    closeParent();
}
else
{
    box.querySelector("strong").innerHTML = "WARNING";
    box.querySelector("p").innerHTML = "The discord server will be getting a big overhaul soon with changes to channels, organisation and policies. Many of these suggestions are being made by Jack Mawer so watch out. The admin team will likely implement the agreed upon changes this weekend!";
    //var link = document.createElement("a");
    // link.href="admins.html";
    // link.innerHTML="<p>New Admins</p>";
    // box.appendChild(link);
    cross.addEventListener("click", closeParent);
}