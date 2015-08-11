//JavaScript sorting
var msg = document.getElementById("message");
var v = ["dog", "buffalo", "cat", "zebra", "frog", "antelope", "aardvark", "elephant"];
msg.innerHTML += "<p><strong>Original order:</strong> [" + v + "]</p>";  

//sorting in alphabetic order
v.sort();
msg.innerHTML += "<p><strong>Sorted order:</strong> [" + v + "]</p>"; 

//sorting by the length of their name string  Low to High
v.sort(sortbylenghtofstringLowToHigh);
msg.innerHTML += "<p><strong>Sorted by Length of String Low to High:</strong> [" + v + "]</p>";

//sorting by the length of their name string High to Low
v.sort(sortbylenghtofstringHighToLow);
msg.innerHTML += "<p><strong>Sorted by Length of String High to Low:</strong> [" + v + "]</p>";

function sortbylenghtofstringLowToHigh (a,b) {
	if(a.length > b.length){
		return 1;
	}
	else if(a.length == b.length){
		return 0;
	}
	else{
		return -1;
	}
}

function sortbylenghtofstringHighToLow (a,b) {
	if(a.length > b.length){
		return -1;
	}
	else if(a.length == b.length){
		return 0;
	}
	else{
		return 1;
	}
}