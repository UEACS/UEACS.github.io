function onThemeSwitch()
{
    console.log('clicked');
    console.log(cssLink.href.substring(cssLink.href.lastIndexOf('/') + 1));
    if(cssLink.href.substring(cssLink.href.lastIndexOf('/') + 1) === "style%20light.css")
    {
        cssLink.href = "style dark.css";
        console.log('light theme changed to dark theme');
    }
    else
    {
        cssLink.href = "style light.css";
        console.log('dark theme changed to light theme');
    }
    console.log('switched');
}

const cssLink = document.head.querySelector('link');
const themeSwitch = document.querySelector('#theme-switch');
themeSwitch.addEventListener("click", onThemeSwitch);