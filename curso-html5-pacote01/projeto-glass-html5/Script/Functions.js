function calcPrice(){

    var glassNumber = document.getElementById("glass-number").value;
    
    price = 1500*glassNumber

     document.getElementById("txtPrice").value = price;
}