function myClickFunction() {
    var ele = document.getElementById("circle");
    ele.addEventListener('click', myFunction)
}

function myFunction() {
    alert("Element Clicked");
}


document.addEventListener('DOMContentLoaded', myClickFunction);