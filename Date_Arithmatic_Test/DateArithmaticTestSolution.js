//JavaScript Date Arithmetic
var msg = document.getElementById("message");

var dateNow = new Date();
var date2020 = new Date(2020,0,1);

/*
(date2020 - dateNow) //gets the huge number. this is because its the difference in milliseconds
so lets convert into days
(date2020 - dateNow) / 1000 / 60 / 60 / 24;

we divide the following:
 by 1000 to get number of seconds
 by 60 to get minutes
 by 60 again to get number of hours
 by 24 to get number of days
all of them are equivalent to 86400000

JavaScript Doesn't allow invalid dates
so..
eventhough 26+7= 33 and we are declaring that the date is 33rd, it converts it April the 2nd
see below:
*/
var days2020 = Math.ceil( (date2020 - dateNow) / 86400000 );

var date7days = new Date( dateNow.getFullYear(), dateNow.getMonth(), 
dateNow.getDate()+7 ).toLocaleString().slice(0,-13);

msg.innerHTML += "<p>Days remaining to 2020: "+ days2020 +"</p>";
msg.innerHTML += "<p>Date in 7 days: "+ date7days +"</p>";