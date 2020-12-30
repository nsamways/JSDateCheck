
// set the target date elements
var tDay = 26;
var tMonth = 12;
var tYear = 2020;

// set target date

var tDate = new Date(tYear, tMonth, tDay);


function dateDifference(targetDate){

	
	// strip out all except year, month, day
	tarDate = new Date(targetDate.getFullYear(), (targetDate.getMonth()-1), targetDate.getDate());

	// get todays date in the appropriate format
	imDate = new Date();
	currDate = new Date(imDate.getFullYear(), imDate.getMonth(), imDate.getDate());
	
	// calculate the difference
	daysDiff = ((currDate - tarDate) / 86400000);
	
	return(parseFloat(daysDiff));
	
}

var daysDiff = dateDifference(tDate);

alert( daysDiff )

if (daysDiff < 0){
	document.getElementById("messageTarget").innerHTML = "Too early";
//	document.writeln("Too early");
}else if (daysDiff > 2){
	document.getElementById("messageTarget").innerHTML = "Too late";
//	document.writeln("Too LATE!")
} else {
	document.getElementById("messageTarget").innerHTML = "Spot ON!"
//	document.writeln("Spot on!")
}

