
var defaultPageIcon 

function changeIcon(icon){

    image = document.getElementById("icon");

    image.src = icon
}

function changeIconToDefault(){

    image = document.getElementById("icon");

    image.src = defaultPageIcon
}

function setDefaultPageIcon(icon){

    defaultPageIcon = icon
}