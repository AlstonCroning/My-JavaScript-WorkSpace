//Prototypal Inheritance

//simple Javascript Objects
var msg = document.getElementById("message");

//using the 'String' base type
String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};

var s = "reverse me";

//display the results
//alert( s + "\n" + s.reverse() );

for(var c in s){
    if(s.hasOwnProperty(c))
        console.log(c);
}

