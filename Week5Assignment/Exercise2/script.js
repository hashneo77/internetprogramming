function myClickFunction() {
    var ele = document.getElementById("circle");
    ele.addEventListener('click', myFunction)
}

function myFunction() {
    var ele = document.getElementById("circle");
    ele.style.backgroundColor = 'blue';
}


document.addEventListener('DOMContentLoaded', myClickFunction);