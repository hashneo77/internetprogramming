document.addEventListener('DOMContentLoaded', myLoadFunction);
var element = document.getElementById('identifier');
var headingValue = "JavaScript Tutorial Alerts";

function OnHeadingClick() {
    var element = document.getElementById('identifier');
    element.firstChild.nodeValue = 'Heading has been changed';

    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New Lorem Ipsum';
}

function textChange() {
    var element = document.getElementById('identifier')
    element.firstChild.nodeValue = 'Mouse hover made it change';
}

function textChangeRevert() {
    var element = document.getElementById('identifier')
    element.firstChild.nodeValue = headingValue;
}


function myLoadFunction() {
    var element = document.getElementById('identifier')
    element.addEventListener('click', OnHeadingClick);
    element.addEventListener('mouseenter', textChange);
    element.addEventListener('mouseleave', textChangeRevert);
}