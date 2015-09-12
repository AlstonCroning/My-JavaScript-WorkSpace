//simple Javascript Objects
var msg = document.getElementById("message");

//defining object literal notation
var car = car || {
    make: "Ford",
    model: "Mustang",
    color: "Blue",
    display: function() {
        msg.innerHTML += "<p>your car is a "+this.color+ " "+this.make+" "+
        this.model+".</p>";
    }
};

var car2 = car2 || {};

for( var prop in car ){
    if(car.hasOwnProperty(prop)) {
        car2[prop] = car[prop];
    }
}

car2.color = "pink";
car2.model = "GTO";

car.display();
car2.display();