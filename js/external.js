"use strict";

console.log("Hello from external JavaScript");

alert('Welcome to my website!');

var favColor = prompt('What is your favorite color?');

alert('Great, ' + favColor + ' is my favorite color too!');

var littleMermaid = prompt('How long did you rent The little Mermaid?');
littleMermaid= Number(littleMermaid);

var hercules = prompt('How long did you rent Hercules?');
hercules=Number(hercules);

var brotherBear = prompt('How long did you rent Brother Bear?');
brotherBear=Number(brotherBear);

var pricePerDay = 3;

alert('Your total will be $' + (pricePerDay * (littleMermaid + hercules + brotherBear)));

var googleRate = 400;

var amazonRate = 380;

var fbRate = 350;

var googleHours = prompt('How many hours did you work at Google this week?');
var amazonHours = prompt('How many hours did you work at Amazon this week?');
var fbHours = prompt('How many hours did you work at Facebook this week?');

googleHours=Number(googleHours);
amazonHours=Number(amazonHours);
fbHours=Number(fbHours);

var total = fbRate * fbHours + amazonRate * amazonHours + googleRate * googleHours;
alert('You made $' + total + ' this week!' );

var classIsFull; // boolean
var classSchedulesCheck; // boolean
var studentEnrolled = !classFull && classSchedulesCheck;
}


var numItems; // number
var expired; // boolean
var member; // boolean
var offer = (member || numItems > 2) && offer;