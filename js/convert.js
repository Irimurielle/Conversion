var litre = function(gallon){
    return gallon * 3.785411784;
    }
    var gallon = parseFloat(prompt("Enter the liquid capacity in gallons"));
    var result = litre(gallon);
    alert("The liquid capacity in litres is :" + " " + result);