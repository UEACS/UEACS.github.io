function onThemeSwitch()
{
    console.log('clicked');
    console.log(cssLink.href.substring(cssLink.href.lastIndexOf('/') + 1));
    if(cssLink.href.substring(cssLink.href.lastIndexOf('/') + 1) === "style.css")
    {
        cssLink.href = "style dark.css";
        console.log('light theme changed to dark theme');
        localStorage.setItem('theme','dark');
    }
    else
    {
        cssLink.href = "style.css";
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