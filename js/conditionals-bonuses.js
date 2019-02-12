//
// ================================= CONDITIONALS BONUSES
// __
// Write a function makeJustinMessage() that returns the string "It's Justin!" if the input to the function is the string "justin" and "It's not Justin" otherwise.
//     If the input contains white space or numbers, return the string "INVALID INPUT".
function makeJustinMessage(input){
    var regEx =/[\d\s]/;

    if (input === 'justin'){
        return "It's Justin!"
    }
    else if(regEx.test(input)){
        return "INVALID INPUT";
    }
    else{
        return "It's not Justin";
    }
}

console.log(makeJustinMessage('justin')); // It's Justin
console.log(makeJustinMessage('jusssstin')); //It's not justin
console.log(makeJustinMessage('just9n')); //Invalid Input
console.log(makeJustinMessage('jus  tin')); //invalid input
//     __
// Write a function that returns a string describing the action to be taken for a given street light color input. For example, if the function input is the string "red", a message like "STOP!" could be returned from the function. Input should not be case sensitive.
function stoplight(color){
    switch(color){
        case 'red' :
            return "STOP!";
        case 'yellow' :
            return "SLOW DOWN";
        case 'green' :
            return 'GO';
        default:
            return 'Invalid Input';

    }
}
console.log(stoplight("red")); // stop
console.log(stoplight('yellow')); // yellow
console.log(stoplight('green')); // go
console.log(stoplight('GREEN')); // invalid
//     __
// Create a function that simply returns an input as an output. If no input is passed to the function when it is called, return the string "no input provided."
function provideInput(input){
return (input == null ? "No input provided" : input);
}

console.log(provideInput()); // No input provided
console.log(provideInput('INPUT')); //INPUT

// Create a function that returns a unique message string for a given digit input. If the input is not a single digit, return the string "too many digits". If the input is not a number, return "invalid input". String digits like "1" or "9" are valid inputs.
//     __
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
//     Catch any invalid inputs (not indicating a day of the week).
// For each day, allow the user to enter the abbreviated day (e.g. 'Monday', 'monday', 'Mon', or 'mon')
// __
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator
// __
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months

function pickASeason(){
    var season = prompt('Please pick a season: Spring, Summer, Fall, Winter').toLowerCase();

    if(season === 'spring'){
        alert('You picked spring, please choose a month...');
        var month= prompt('March, April, or May').toLowerCase().substring(0,3);
        if (month === 'mar'){
            alert("Saint Patricks day is in March!");
            return month;
        }
        else if(month === 'apr'){
            alert("April Fools!");
            return month;
        }
        else if(month === 'may'){
            alert('Cinco de May is on the 5th!');
            return month;
        }
        else{
            alert('Sorry, not a valid input!');
            return "Invalid Input"
        }
    }
    else if(season === 'summer'){
        alert('You picked summer, please choose a month...');
        var month= prompt('June, July, or August').toLowerCase().substring(0,3);
        if (month === 'jun'){
            alert("June 6th 1944 was D-day");
            return month;
        }
        else if(month === 'jul'){
            alert("July 4th is independence day!");
            return month;
        }
        else if(month === 'aug'){
            alert('Nothing cool happens in August');
            return month;
        }
        else{
            alert('Sorry, not a valid input!');
            return "Invalid Input"
        }
    }
    else if(season === 'fall' || season === 'autumn'){
        alert('You picked fall, please choose a month...');
        var month= prompt('September, October, or November').toLowerCase().substring(0,3);
        if (month === 'sep'){
            alert("Oktoberfest begins in Germany on Sept 21st");
            return month;
        }
        else if(month === 'oct'){
            alert("October 31st is Halloween, spooky.");
            return month;
        }
        else if(month === 'nov'){
            alert('Thanksgiving is in November');
            return month;
        }
        else{
            alert('Sorry, not a valid input!');
            return "Invalid Input"
        }
    }
    else if(season === 'winter') {
        alert('You picked winter, please choose a month...');
        var month = prompt('December, January, or February').toLowerCase().substring(0, 3);
        if (month === 'dec') {
            alert("Christmas obviously");
            return month;
        } else if (month === 'jan') {
            alert("January 21st is MLK's Birthday");
            return month;
        } else if (month === 'feb') {
            alert('Valentines day is a capitalist\'s holiday');
            return month;
        } else {
            alert('Sorry, not a valid input!');
            return "Invalid Input"
        }
    }
    else{
    alert('Sorry you didn\'t pick a valid season');
    return 'invalid input';
    }
}


pickASeason();


// }
// GOLD STAR BONUS
// Create a distance-unit-conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//     Prompt the user for a second unit of measurement to convert to.
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
// Use these conversion functions to make the correct unit conversion
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//     DOUBLE GOLD STAR BONUS
//     Allow unit conversion to metric system units