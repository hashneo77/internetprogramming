var timer = 0;

function myClickFunction() {
    var ele = document.getElementById("circle");
    ele.style.opacity = 1;
    document.addEventListener('keydown', myFunction);
}


function moveLeft(){
    var ele = document.getElementById('circle');
    var posLeft = ele.offsetLeft;
    ele.style.left = posLeft - 1 + 'px';
}


function moveRight(){
    var ele = document.getElementById('circle');
    var posLeft = ele.offsetLeft;
    ele.style.left = posLeft + 1 + 'px';
}


function moveTop(){
    var ele = document.getElementById('circle');
    var posTop = ele.offsetTop;
    ele.style.top = posTop + 1 + 'px';
}

function moveBottom(){
    var ele = document.getElementById('circle');
    var posTop = ele.offsetTop;
    ele.style.top = posTop - 1 + 'px';
}

function myFunction(event) {
    console.log(event.keyCode)
    clearInterval(timer);
    if(event.keyCode==37){
        timer = setInterval(moveLeft,10);  
    }
    if(event.keyCode==39){
        timer = setInterval(moveRight,10);  
    }
    if(event.keyCode==38){
        timer = setInterval(moveBottom,10);  
    }
    if(event.keyCode==40){
        timer = setInterval(moveTop,10);  
    }
}




document.addEventListener('DOMContentLoaded', myClickFunction);