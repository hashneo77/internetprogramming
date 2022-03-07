function myClickFunction() {
    var ele = document.getElementById("circle");
    ele.style.opacity = 1;
    ele.addEventListener('click', myFunction);
}

function myFunction() {
    setInterval(opacityReduce, 10);
}

function opacityReduce() {
    var ele = document.getElementById('circle');
    ele.style.opacity = parseFloat(ele.style.opacity) - 0.01;
}


document.addEventListener('DOMContentLoaded', myClickFunction);