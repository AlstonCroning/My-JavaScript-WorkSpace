//creating objects in javascript using a constructor

//simple Javascript Objects
var msg = document.getElementById("message");

//car constructor
function car(make, model, color) {
    this.make = make || "unknown";
    this.model = model || "model";
    this.color = color || "unpainted";
    this.display = function() {
        msg.innerHTML += "<p>Your car is a " + this.color + " " +
        this.make + " " + this.model + ".</p>";
    }
}

//create objects
var c1 = new car("Ford","Mustang","Blue");
var c2 = new car("Ford","GTO","White");
var c3 = new car();

c2.color = "Red";
c1.display();
c2.display();
c3.display();