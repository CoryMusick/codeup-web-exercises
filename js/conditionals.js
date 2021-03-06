"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
//  */

    var answer = confirm("Would you like to enter a number?");

    if (confirm("Would you like to enter a number?")){
      var number = prompt("Please enter a number")
    } else { alert("Sad Face :(")}

    number = Number(number);

    if(number - number === 0){

        if (number % 2 === 0){
        alert('The number is even')
    } else{
        alert("The number is odd")
    }

    alert("Your number plus 100 is " + Number(number + 100));

    if(number > 0 ) {
        alert("The number is positive")
    } else{
            alert("The Number is negative")
        }

}else {alert("That is not a number");


//REFACTOR IN FUNCTIONS //
function askForNumber(){
    if (confirm("Would you like to enter a number?")){
      var number = +prompt("Please enter a number");
        return number;
    } else {
        return  alert("Sad Face :("); }
}

function isNumber(num){
       return num - num === 0;
    }
function evenOrOddAlert(num){
    if (num % 2 === 0){
            alert('The number is even');
        return num;
            } else{
            alert("The number is odd");
;        return num
            }
    }
function addOneHundredAlert(num){
        alert("Your number plus 100 is " + Number(num + 100));
        return num;
    }

function postiveOrNegAlert(num){
    if(num > 0 ) {
        return alert("The number is positive")
    } else{
        return alert("The Number is negative")
    }
    }


    function run() {
        var number = askForNumber();

        if(isNumber(number)){

            evenOrOddAlert(number);

            addOneHundredAlert(number);

            postiveOrNegAlert(number);

            } else {
               return alert("That is not a number")
                }
        }
        //call function
    run();




/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

    function analyzeColor (string){
        if (string === 'blue'){

            return 'Blue is the color of the sky';
        }
        else if ( string === 'red') {

            return 'Strawberries are red'
        }
        else if (string === 'cyan'){

            return "I dont't know anything about Cyan."
        }
        else{

            return "I've never heard of that color."
        }
}

console.log(analyzeColor('blue'));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */



/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor(string){
    switch(string){
        case "blue":
            var answer = 'Blue is the color of the sky';
            return answer;
        case 'red':
            var answer = 'Strawberries are red';
            return answer;
        case 'cyan':
            var answer = "I don't know anything about cyan";
            return answer;
        default:
            var answer = "I've never heard of that color";
            return answer;

    }
}

console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var input = prompt("Please enter a color");
analyzeColor(input);

alert(analyzeColor(input));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal (number, bill){
    switch(number){
        case 1:
            return bill - (bill * .10);
        case 2:
            return bill - (bill * .25);
        case 3:
            return bill - (bill * .35);
        case 4:
            return bill - (bill * .50);
        case 5:
            return bill - bill;
        default:
            return bill;
    }
}





/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
console.log(calculateTotal(luckyNumber, 100));
