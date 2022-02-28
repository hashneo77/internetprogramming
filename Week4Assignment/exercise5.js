function OnHeadingClick() {
    var element = document.getElementById('identifier');
    element.firstChild.nodeValue = 'Heading has been changed';

    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New Lorem Ipsum';
}

function myLoadFunction() {
    var element = document.getElementById('identifier')
    element.addEventListener('click', OnHeadingClick);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);