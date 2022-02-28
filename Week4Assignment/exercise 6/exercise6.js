function clickFunction() {
    var element = document.getElementById('divid');
    element.textContent = "Text has changed";
}

function myLoadFunction() {
    var element = document.getElementById('button');
    element.addEventListener('click', clickFunction);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);