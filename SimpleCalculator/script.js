/**
 * Created by Dishan Croning on 9/27/2015.
 * Simple Calculator
 * write a program to do multiplication and division of two numbers
 */

//access 'message' element
var msg = document.getElementById("message");

//using object Literal Notation
var calc = calc || {
    add: function(a,b){
        msg.innerHTML += "<p>Addition: " + (a + b) + "</p>";
    },
    subtract: function(a,b){
        msg.innerHTML += "<p>Subtraction: " + (a - b) + "</p>";
    },

    multiply: function(a,b){
        msg.innerHTML += "<p>Multiplication: " + (a * b) + "</p>";
    },

    divide: function(a,b){
        msg.innerHTML += "<p>Division: " + (a / b) + "</p>";
    }
};

//Output Values
calc.add(1,2);//expecting 3
calc.subtract(3,1);//expecting 2
calc.multiply(2,5);//expecting 10
calc.divide(8,2);//expecting 4