function myClickFunction() {
    var ele = document.getElementById("circle");
    ele.style.opacity = 1;
    ele.addEventListener('click', myFunction)
}

function myFunction() {
    var ele = document.getElementById("circle");
    ele.style.opacity = 0.5;
}


document.addEventListener('DOMContentLoaded', myClickFunction);