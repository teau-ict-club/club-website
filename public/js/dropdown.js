/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let dropdowns = document.querySelectorAll("#tdropdown");
let btns = document.querySelectorAll(".dropbtn");

let toggler = document.querySelector("#toggle");
let mobile = document.querySelector(".mobile-responsive")


btns.forEach((btn,index) =>{
    btn.addEventListener('mouseover', () =>{
        dropdowns.forEach(dropdown =>{
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
        dropdowns[index].classList.add('show');
    });
})

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    dropdowns.forEach(dropdown =>{
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    })
    }
}

// Mobile NavBar
toggler.addEventListener("click", () =>{
    if (mobile.style.display == 'none') {
        toggler.classList.remove("fa-bars");
        toggler.classList.add("fa-xmark");
        mobile.style.setProperty("display", 'flex');
    }
    else{
        toggler.classList.remove("fa-xmark");
        toggler.classList.add("fa-bars");
        mobile.style.setProperty("display", 'none');
    }
});
