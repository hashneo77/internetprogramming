function myClickFunction() {
    var ele = document.getElementById("circle");
    ele.style.opacity = 1;
    document.addEventListener('keydown', myFunction);
}

function myFunction(event) {
    console.log(event.keyCode)
    if (event.keyCode == 37) {
        var ele = document.getElementById('circle');
        var posLeft = ele.offsetLeft;
        ele.style.left = posLeft - 10 + 'px';
    }
}




document.addEventListener('DOMContentLoaded', myClickFunction);