function numberOfDay() //Transform the user's birthday to a int
{
	//To store the user's birthday in three variables.
  alert("First, enter your birthday day, month then year:");
  var day = parseFloat(prompt("What date were you born?(e.g 1, 15, 31)"));
  var month = parseFloat(prompt("What month were you born?(e.g 1,7,12)"));
  var year = prompt("What year were you born?(e.g 1995, 1876, 2000)");
  //For subsequent calculations year needs to be split into two
  var century = parseFloat(year.slice(0,2));
  var decadeYear = parseFloat(year.slice(2,4));
  if(month > 2)
  {
    month -= 2;
  }
  else
  {
    month += 10;
    decadeYear -= 1;
  }
  //To calculate which day of the week the user was born ***Error given with some dates
  var a = ((13 * month - 1) / 5);
  var aInt = Math.trunc(a);
  var b = (decadeYear / 4);
  var bInt = Math.trunc(b);
  var c = (century / 4);
  var cInt = Math.trunc(c);
  var dayOfTheWeek = (day + aInt + decadeYear + bInt + cInt - 2 * cInt) % 7;
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
  alert(day);
  return day;
}

function akanName(day)
{
  var gender = prompt("What is your gender?");
  var akanName = "";
  var dayOfBirth = day;
  if(gender == "male")
  {
    switch(dayOfBirth)
    {
        case Monday:
          akanName = "Kwadwo";
          break;
        case Tuesday:
          akanName = "Kwabena";
          break;
        case Wednesday:
          akanName = "Kwaku";
          break;
        case Thursday:
          akanName = "Yaw";
          break;
        case Friday:
          akanName = "Kofi";
          break;
        case Saturday:
          akanName = "Kwame";
          break;
        case Sunday:
          akanName = "Kwasi";
          break;
    }
  }
  alert(akanName);
  return akanName;
}

var day = dayOfBirth();
var name = akanName(day);
alert(name);
