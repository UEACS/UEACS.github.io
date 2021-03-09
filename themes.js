function onThemeSwitch()
{
    console.log('clicked');
    if(cssLink.href == "style.css")
    {
        cssLink.href = "style dark.css";
    }
    else
    {
        cssLink.href = "style.css";
    }
}

const cssLink = document.head.querySelector('link');
const themeSwitch = document.querySelector('#theme-switch');
themeSwitch.addEventListener("click", onThemeSwitch);