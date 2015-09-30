//Prototypal Inheritence

//access 'message' element
var msg = document.getElementById("message");

//Car Constructor
function Car (brand,model,color) {
    this.brand = brand || "Unknown";
    this.model = model || "Model";
    this.color = color || "Unpainted";
}

//Creating New Objects using Car Constructor
var C1 = new Car("Ford","Mustang","Black");
var C2 = new Car("Ford","GTO","White");
var C3 = new Car();

//creating a Display method for Car Prototype
Object.prototype.display = function() {
    msg.innerHTML += "<p>Your car is "+this.color+" "+this.brand+
    " "+this.model+"</p>";
};


//Making Changes
C2.color = "Blue";
//example of running a alternative display method (javascript finds this function 1st and runs it, instead of car prototype display method)
C1.display = function(){
    msg.innerHTML += "<p>Not Telling</p>";
};

//Display Cars
C1.display();
C2.display();
C3.display();

//any object of Base type Object can access Car's method since we declared 'Object' as for the Base type for our display method
var o = {};
o.display();