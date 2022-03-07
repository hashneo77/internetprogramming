function myClickFunction() {
    var ele = document.getElementById("circle");
    ele.style.opacity = 0.5
    ele.addEventListener('click', myFunction);
}

function myFunction() {
    var ele = document.getElementById("circle");
    ele.style.opacity = parseFloat(ele.style.opacity) + 0.1;
}


document.addEventListener('DOMContentLoaded', myClickFunction);