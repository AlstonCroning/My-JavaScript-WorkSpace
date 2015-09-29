//Object Constructors example

//access 'message' element
var msg = document.getElementById("message");

//Car Constructor
function Car (brand,model,color) {
    this.brand = brand || "Unknown";
    this.model = model || "Model";
    this.color = color || "Unpainted";
    this.display = function() {
        msg.innerHTML += "<p>Your car is "+this.color+" "+this.brand+
        " "+this.model+"</p>";
    }
}
//Creating New Objects using Car Constructor
var C1 = new Car("Ford","Mustang","Black");
var C2 = new Car("Ford","GTO","White");
var C3 = new Car();

//Making Changes
C2.color = "Blue";

//Display Cars
C1.display();
C2.display();
C3.display();