"use strict";
//
// console.log("Hello from external JavaScript");
//
// alert('Welcome to my website!');
//
// var favColor = prompt('What is your favorite color?');
//
// alert('Great, ' + favColor + ' is my favorite color too!');
//
// var littleMermaid = prompt('How long did you rent The little Mermaid?');
// littleMermaid= Number(littleMermaid);
//
// var hercules = prompt('How long did you rent Hercules?');
// hercules=Number(hercules);
//
// var brotherBear = prompt('How long did you rent Brother Bear?');
// brotherBear=Number(brotherBear);
//
// var pricePerDay = 3;
//
// alert('Your total will be $' + (pricePerDay * (littleMermaid + hercules + brotherBear)));
//
// var googleRate = 400;
//
// var amazonRate = 380;
//
// var fbRate = 350;
//
// var googleHours = prompt('How many hours did you work at Google this week?');
// var amazonHours = prompt('How many hours did you work at Amazon this week?');
// var fbHours = prompt('How many hours did you work at Facebook this week?');
//
// googleHours=Number(googleHours);
// amazonHours=Number(amazonHours);
// fbHours=Number(fbHours);
//
// var total = fbRate * fbHours + amazonRate * amazonHours + googleRate * googleHours;
// alert('You made $' + total + ' this week!' );
//
// var classIsFull; // boolean
// var classSchedulesCheck; //boolean
// var studentEnrolled = (!classIsFull && classSchedulesCheck);
// }
// alert('You can enroll ' + studentEnrolled);
//
// var numItems = prompt('How many items did you buy?');
// var notExpired = confirm('If the offer is not expired press okay');
// var member = confirm('If you are a member press okay') ;
//
// var offer = (member || Number(numItems) > 2) && notExpired;
//
// alert('You can use this offer: ' + offer);
//

// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
function isShortWord(word){
    return word.length < 5;

}

console.log(isShortWord('buy'));

// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.

function isSameLength(word1, word2){
    return word1.length === word2.length;
}

console.log(isSameLength('hello', 'bye'));

// Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that is as many characters long as the second argument in lowercase.

function getSmallerSegment(string, num){
    return string.substring(0,num).toLowerCase();
}
console.log(getSmallerSegment('MUSICK', 4));

// example input: getSmallerSegment("Codeup", 3)
// example output: "cod"




