function myClickFunction() {
    var ele = document.getElementById("circle");
    ele.style.opacity = 1;
    document.addEventListener('keydown', myFunction);
}

function myFunction(event) {
    console.log(event.keyCode)
    var ele = document.getElementById('circle');
    var posLeft = ele.offsetLeft;
    var posTop = ele.offsetTop;
    if (event.keyCode == 37) {
        ele.style.left = posLeft - 10 + 'px';
    }
    if (event.keyCode == 39) {
        ele.style.left = posLeft + 10 + 'px';
    }
    if (event.keyCode == 40) {
        ele.style.top = posTop + 10 + 'px';
    }
    if (event.keyCode == 38) {
        ele.style.top = posTop - 10 + 'px';
    }
}




document.addEventListener('DOMContentLoaded', myClickFunction);