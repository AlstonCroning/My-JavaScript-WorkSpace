//Object Literals example

//access 'message' element
var msg = document.getElementById("message");

var car = car || {
        brand: "Ford",
        model: "GTO",
        color: "Blue",
        display: function(){
            msg.innerHTML += "<p>Your car is "+this.color+" "+this.brand+
                " "+this.model+"</p>";
        }
};
car.display();
