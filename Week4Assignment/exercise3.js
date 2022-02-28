function assignVal() {
    var element = document.getElementById('identifier');
    element.firstChild.nodeValue = 'New Heading created';
}

document.addEventListener('DOMContentLoaded', assignVal);