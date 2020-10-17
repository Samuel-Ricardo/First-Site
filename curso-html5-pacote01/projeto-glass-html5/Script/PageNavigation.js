
var defaultIcon 

function changeIcon(icon){

    image = document.getElementById("icon");

    image.src = icon
}

function changeIconToDefault(){

    image = document.getElementById("icon");

    image.src = defaultIcon
}

function setDefaultIcon(icon){

    defaultIcon = icon
}