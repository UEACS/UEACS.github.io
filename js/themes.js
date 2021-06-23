function onThemeSwitch()
{
    console.log('clicked');
    console.log(cssLink.href.substring(cssLink.href.lastIndexOf('/') + 1));
    if(cssLink.href.substring(cssLink.href.lastIndexOf('/') + 1) === "style%20light.css")
    {
        cssLink.href = "./css/style dark.css";
        console.log('light theme changed to dark theme');
        localStorage.setItem('theme','dark');
    }
    else
    {
        cssLink.href = "./css/style light.css";
        console.log('dark theme changed to light theme');
        localStorage.setItem('theme','light');
    }
    console.log('switched');
}

const cssLink = document.head.querySelector('link');
const themeSwitch = document.querySelector('#theme-switch');
if (localStorage.getItem('theme')=='dark')
{
    onThemeSwitch();
}
themeSwitch.addEventListener("click", onThemeSwitch);