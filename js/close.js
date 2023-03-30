function closeParent()
{
    console.log('clicked');
    box.remove();
    console.log('closed');
    localStorage.setItem('noticed','Paused');
}

const cross = document.querySelector('#notice-cross');
const box = document.querySelector('#floating-notice');
//localStorage.setItem('noticed','false');
//closeParent(); // When election is about to begin, remove this line

if (localStorage.getItem('noticed')=='Paused')
{
    closeParent();
}
else
{
    box.querySelector("strong").innerHTML = "Work On Pause";
    box.querySelector("p").innerHTML = "The website has been redesigned but there seem to be a few bugs. Unfortunately, improving this website is not a priority to us right now but please enjoy the read and the apps that work!";

    cross.addEventListener("click", closeParent);
}