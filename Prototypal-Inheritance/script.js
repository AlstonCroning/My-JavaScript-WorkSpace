//Prototypal Inheritance

//simple Javascript Objects
var msg = document.getElementById("message");

//car constructor
function car(make, model, color) {
    this.make = make || "unknown";
    this.model = model || "model";
    this.color = color || "unpainted";
}

//create objects
var c1 = new car("Ford","Mustang","Blue");
var c2 = new car("Ford","GTO","White");
var c3 = new car();

//this display methods now applies to every instance of the car object
car.prototype.display = function() {
    msg.innerHTML += "<p>Your car is a " + this.color + " " +
    this.make + " " + this.model + ".</p>";
};

//change properties and run methods
c2.color = "Red";
c1.display();
c2.display();
c3.display();

