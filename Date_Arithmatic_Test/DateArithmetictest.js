//JavaScript Date Arithmetic
var msg = document.getElementById("message");

var dateNow = new Date();
var date2020 = new Date(2020,0,1);
var dateOf7daysAfter = new Date();

//algorithm for 'days remaining till 2020-1-1'
var days2020 = Math.round((Date.parse("Jan 1, 2020") - Date.parse(dateNow))/86400000);

//algorithm for 'date from 7 days from now'
dateOf7daysAfter.setDate( 25+7);
var date7days = dateOf7daysAfter.getDate();

msg.innerHTML += "<p>Days remaining to 2020: "+ days2020 + " days</p>";
msg.innerHTML += "<p>Date in 7 days: "+ date7days + " April 1st</p>";

//days remaining till 2020-1-1
console.log(  Math.round((Date.parse("Jan 1, 2020") - Date.parse(dateNow))/86400000) + " days untill 2020-1-1"  );
																			
//date from 7 days from now
console.log( "Date in 7 Days:\n" + dateOf7daysAfter );



//1st answer
//console.log(  Math.round((Date.parse("Jan 1, 2020") - Date.parse(dateNow))/86400000) + " days untill 2020-1-1"  );
//console.log( dateNow.getFullYear() );
//console.log( date2020.getFullYear() + "-" + (date2020.getMonth()+1) + "-" + date2020.getDay() );
//console.log( Math.round((Date.parse(dateOf7daysAfter) - Date.parse(dateNow))/86400000) );
//dateNow.setFullYear(2015,3,1);