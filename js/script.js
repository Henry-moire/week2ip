function numberOfDay() //Transform the user's birthday to a int
{
	//To store the user's birthday in three variables.
  alert("First, enter your birthday day, month then year:");
  var day = parseInt(prompt("What date were you born?(e.g 1, 15, 31)"));
  var month = parseInt(prompt("What month were you born?(e.g 1,7,12)"));
  var year = prompt("What year were you born?(e.g 1995, 1876, 2000)");
  //For subsequent calculations year needs to be split into two
  var century = parseInt(year.slice(0,2));
  var decadeYear = parseInt(year.slice(2,4));
  
  //To calculate which day of the week the user was born
  var dayOfTheWeek = parseInt((((century / 4) - 2 * century - 1) + ((5 * decadeYear / 4) ) + ((26 * (month + 1) / 10)) + day) % 7);
  return dayOfTheWeek;
}

function dayOfBirth(dayNumber) //Transform int from numberOfDay function to the corresponding day
{
	var dayNumber = numberOfDay();
  switch(dayNumber)
  {
  	case 1:
    	var day = "Monday";
    	break;
    case 2:
    	var day = "Tuesday";
    	break;
    case 3:
    	var day = "Wednesday";
    	break;
    case 4:
    	var day = "Thursday";
    	break;
    case 5:
    	var day = "Friday";
    	break;
    case 6:
    	var day = "Saturday";
    	break;
    case 0:
    	var day = "Sunday";
    	break;
  }
  return day;
}
alert(dayOfBirth());
