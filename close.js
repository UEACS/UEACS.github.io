function closeParent()
{
    console.log('clicked');
    const box = document.querySelector('#floating-notice');
    box.remove();
    console.log('closed');
    localStorage.setItem('noticed','true');
}

closeParent(); // When election is about to begin, remove this line
const cross = document.querySelector('#notice-cross');
if (localStorage.getItem('noticed')=='true')
{
    closeParent();
}
cross.addEventListener("click", closeParent);