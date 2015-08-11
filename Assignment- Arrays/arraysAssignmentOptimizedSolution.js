//JavaScript sorting
var msg = document.getElementById("message");

var v = ["dog", "buffalo", "cat", "zebra", "frog", "antelope", "aardvark","elephant"];
msg.innerHTML += "<p><strong>original order:</strong> [" + v + "]</p>";

//sorting by alphabetic order
v.sort();
msg.innerHTML += "<p><strong>Sorted in Alphabetical order:</strong> [" + v + "]</p>";

//sorting by length of their characters
var LenghtOfString = v.length;

v.sort(function(a,b){return a.length - b.length;});
msg.innerHTML += "<p><strong>Sorted by length of String:</strong> [" + v + "]</p>";