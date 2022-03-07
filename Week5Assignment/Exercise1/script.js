function myClickFunction() {
    var ele = document.getElementById("circle");
    ele.addEventListener('click', myFunction)
}

function myFunction() {
    alert("The button was pressed");
}


document.addEventListener('DOMContentLoaded', myClickFunction);