function myClickFunction() {
    var ele = document.getElementById("circle");
    ele.addEventListener('click', myFunction)
}

function myFunction() {
    var ele = document.getElementById("circle");
    ele.style.opacity = 1;
}


document.addEventListener('DOMContentLoaded', myClickFunction);