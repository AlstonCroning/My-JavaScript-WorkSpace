//Object Literals examples

//access 'message' element
var msg = document.getElementById("message");

//Creating car1 object and using object literal notation
var car1 = car1 || {
        brand: "Ford",
        model: "GTO",
        color: "Blue",
        display: function(){
            msg.innerHTML += "<p>Your car is "+this.color+" "+this.brand+
                " "+this.model+"</p>";
        }
};

//create more car objects
var car2 = car2 || {};
var car3 = car3 || {};
var car4 = car4 || {};

//clone car1 properties into other cars
for(var prop in car1) {
    if(car1.hasOwnProperty(prop)) {
        car2[prop] = car1[prop];
        car3[prop] = car1[prop];
        car4[prop] = car1[prop];
    }
}

//make changes to car2
car2.brand = "Mercedez";
car2.model = "CLK";
car2.color = "White";

//make changes to car3
car3.brand = "Toyota";
car3.model = "Camery";
car3.color = "Black";

//make changes to car4 using an Alternate method
var prop_car4_brand = "brand";
var prop_car4_model = "model";
var prop_car4_color = "color";
car4[prop_car4_brand] = "Ford";
car4[prop_car4_model] = "Mustang";
car4[prop_car4_color] = "Red";

//display Cars
car1.display();
car2.display();
car3.display();
car4["display"]();

//Alternative way of calling the above methods
/*
car1["display"]();
car2["display"]();
car3["display"]();
*/