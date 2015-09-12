//simple Javascript Objects
var msg = document.getElementById("message");

var car = car || {};

car.make = "Ford";
car.model = "Mustang";
car.color = "Blue";

car.display = function () {
    msg.innerHTML += "<p>Your car is a " + this.color + " " + this.make + " " + this.
        model + ".</p>";
};

var myprop = "color";
car[myprop] = "Red";

car.display();//typical way to call the method
//car["display"]();//another way to call the display method