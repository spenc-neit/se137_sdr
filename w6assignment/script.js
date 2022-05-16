var tray = document.querySelector(`#tray`)
tray.addEventListener(`click`, openClose)

function openClose(e)
{
    var nav = document.querySelector(`nav`)
    nav.classList.toggle(`hidden`)
}

var tabs = document.querySelectorAll(`#tabs a`);

for (let i = 0; i<tabs.length; i++)
{
    tabs[i].addEventListener(`click`, function(e){
        for (let i = 0; i<tabs.length; i++)
        {
            tabs[i].style.backgroundColor=`#373737`;

        }
        e.currentTarget.style.backgroundColor=`#161616`;
        document.querySelectorAll(`#breadcrumbs a`)[3].innerHTML = `Tab${i+1}`

    })
}