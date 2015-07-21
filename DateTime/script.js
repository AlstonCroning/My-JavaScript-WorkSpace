/**
 * Created by Dishan Croning on 7/21/2015.
 */

//pointer to the message element in HTML DOM TREE
var message = document.getElementById("message");

//Creating Days of the Week Array
var NamesOfDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

//Creating a Date object
var Date = new Date();

//Gathering Date Information
var Names_Of_Days = NamesOfDays[Date.getDay()]
var Hours = Date.getHours();
var Minutes = Date.getMinutes();
var Seconds = Date.getSeconds();

//Displaying information (Displayed in 24 hour format)
message.innerHTML += "<p>Today is: " + Names_Of_Days + "</p>";
message.innerHTML += "<p>Current Time is: " + Hours + " : " + Minutes + " : " + Seconds + "</p>";