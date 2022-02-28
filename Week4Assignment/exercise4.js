function assignVal() {
    var element = document.getElementById('identifier');
    element.firstChild.nodeValue = 'New Heading created';
    const para = document.createElement("p");
    para.textContent = "Lorem Ipsum";
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(para);
}

document.addEventListener('click', assignVal);