let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let valuedisplays = document.querySelectorAll(".num");
console.log(valuedisplays);
let interval = 4000;

valuedisplays.forEach((valuedisplay) => {
    let startvalue = 0;
    let endvalue = parseInt(valuedisplay.getAttribute("data-val"));
    console.log(endvalue);
    let duration = Math.floor(interval/endvalue);
    let counter = setInterval(function() {
        startvalue += 1;
        valuedisplay.textContent = startvalue;
        if (startvalue == endvalue) {
            // clearInterval(counter);
        }       
    }, duration);
});