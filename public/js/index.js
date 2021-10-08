// only the index page javascript gets edited in this file
var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
    
}

// function Login()
// { 
//     x.style.left='50px';
//     y.style.left='450px';
//     z.style.left='0px';
// }
function Login()
{ 
    x.style.left='400px';
    y.style.left='50px';
    z.style.left='110px';
}
var modal = document.getElementById('login-form');
window.onclick = function(event)
{
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
}

