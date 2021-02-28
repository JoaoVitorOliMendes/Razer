var navbar = document.getElementById("nav");
window.addEventListener("scroll", function()
{
    var scroll = Math.ceil(window.scrollY);
    scroll = scroll.toFixed(2);

    if(scroll != 0)
    {
        navbar.classList.add("fixed-top");
    }
    else
    {
        navbar.classList.remove("fixed-top");
    }
})
function home()
{
    window.scrollTo(0, 0);
}