"use strict";

// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */
//  IIFE
// // (function()
// // {
//     function sayHello(name) {
//         return 'hello, ' + name + '!';
//     }
//
//     /**
//      * TODO:
//      * Call the function 'sayHello' and pass your name as a string literal argument.
//      * Store the result of the function call in a variable named 'helloMessage'.
//      *
//      * console.log 'helloMessage' to check your work
//      */
//     var helloMessage = sayHello('Cory');
//
//     console.log(helloMessage);
//
//     /**
//      * TODO:
//      * Store your name as a string in a variable named 'myName', and pass that
//      * variable to the 'sayHello' function. You should see the same output in the
//      * console.
//      */
//
//     var myName = 'Cory';
//
//     console.log(sayHello(myName));
//
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
//     var random = Math.floor((Math.random() * 3) + 1);
//
//     /**
//      * TODO:
//      * Create a function called 'isTwo' that takes a number as a parameter.
//      * The function should return a boolean value based on whether or not the passed
//      * number is the number 2.
//      *
//      * Example
//      * > isTwo(1) // returns false
//      * > isTwo(2) // returns true
//      * > isTwo(3) // returns false
//      *
//      * Call the function 'isTwo' passing the variable 'random' as a argument.
//      *
//      * console.log *outside of the function* to check your work (you should see a
//      * different result everytime you refresh the page if you are using the random
//      * number)
//      */
//     function isTwo(num) {
//         return num === 2;
//     }
//
//     console.log(isTwo(random));
//
//     /**
//      * TODO:
//      * Create a function named 'calculateTip' to calculate a tip on a bill at a
//      * restaurant. The function should accept a tip percentage and the total of the
//      * bill, and return the amount to tip
//      *
//      * Examples:
//      * > calculateTip(0.20, 20) // returns 4
//      * > calculateTip(0.25, 25.50) // returns 6.37
//      * > calculateTip(0.15, 33.42) // returns 5.013
//      */
//     function calculateTip(tipPercent, billTotal) {
//         return tipPercent * billTotal;
//     }
//
//     /**
//      * TODO:
//      * Use prompt and alert in combination with your calculateTip function to
//      * prompt the user for the bill total and a percentage they would like to tip,
//      * then display the dollar amount they should tip
//      */
//     var billTotal = prompt("What is the bill total without the dollar sign.");
//     var tipPercent = prompt('Enter the percent you would like to tip as a decimal');
//
//     alert('You should tip ' + calculateTip(tipPercent, billTotal) + ' dollars. ');
//     /**
//      * TODO:
//      * Create a function named `applyDiscount`. This function should accept a price
//      * (before a discount is applied), and a discount percentage (a number between 0
//      * and 1). It should return the result of applying the discount to the original
//      * price.
//      *
//      * Example:
//      * > var originalPrice = 100;
//      * > var dicountPercent = .2; // 20%
//      * > applyDiscount(originalPrice, discountPercent) // 80
//      *
//      * > applyDiscount(45.99, 0.12) // 40.4712
//      */
//
//     var originalPrice = 45.99;
//     var discountPercent = .12;
//
//     function applyDiscount(price, discountPercent) {
//         return price - (price * discountPercent);
//     }
//
//     console.log(applyDiscount(originalPrice, discountPercent));

//********* BONUS EXERCISES ***************//


//     //isOdd
//     function isOdd(number){
//         return number % 2 === 1;
//     }
//
//     console.log(isOdd(13)); // true
//     console.log(isOdd(144)); // false
//
// //isEven
//     function isEven(number){
//         return number % 2 === 0;
//     }
//
//     console.log(isEven(13)); // false
//     console.log(isEven(144)); // true
//
//identity
    function identity(input){
        return input;
    }
//
//     console.log(identity('hello')); // hello
//     console.log(identity(7)); // 7
//
// //isFive
//     function isFive(){
//         return 5;
//     }
//
//     console.log(isFive()); // 5
//
// // addFive
//     function addFive(input){
//         return input + isFive()
//     }
//
//     console.log(addFive(15)); // 20
//
// //isMultipleOfFive
//     function isMultipleOfFive(input){
//         return input % isFive() === 0
//     }
//
// console.log(isMultipleOfFive(14)); // false
// console.log(isMultipleOfFive(25)); //true
//
// //isThree
//     function isThree(){
//         return 3
//     }
//
// console.log(isThree()); // 3
//
// //isMultipleOfThree
//     function isMultipleOfThree(input){
//         return input % isThree() === 0;
//     }
//
// console.log(isMultipleOfThree(9)); // true
// console.log(isMultipleOfThree(16)); //false
//
// //isMultipleOfThreeAndFive
//     function isMultipleOfThreeAndFive(input){
//         return (input % isThree() === 0) && (input % isFive() === 0)
//     }
//
// console.log(isMultipleOfThreeAndFive(15)); // true
// console.log(isMultipleOfThreeAndFive(9)); // false
// console.log(isMultipleOfThreeAndFive(5)); // false
//
// // isMultipleOf
//     function isMultipleOf(target, n){
//         return target % n === 0;
//     }
//
// console.log(isMultipleOf(15, 5)); // true
// console.log(isMultipleOf(12, 10)); // false
//
// //isTrue
//     function isTrue(boolean){
//         return boolean === true;
//     }
//
// console.log(isTrue(true)); // true
// console.log(isTrue(false)); // false
//
// //isFalse
//     function isFalse(boolean){
//         return boolean === false;
// }
//
// console.log(isFalse(true)); // false
// console.log(isFalse(false)); // true
//
// //isTruthy
//     function isTruthy(input){
//         return input == true;
//     }
//
// console.log(isTruthy(false)); // false
// console.log(isTruthy(1)); // true
// console.log(isTruthy(15)); // false
// console.log(isTruthy(true)); // true
//
// //isFalsy
//     function isFalsy(input){
//         return input == false;
//
//     }
//
// console.log(isFalsy(false)); // true
// console.log(isFalsy(0)); // true
// console.log(isFalsy(15)); // false
// console.log(isFalsy(true)); // false
//
// //isVowel
//     function isVowel(letter){
//         return letter.toLowerCase() === 'a' || letter.toLowerCase() ==='e'
//         || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() ==='u';
//     }
//
// console.log(isVowel('c')); // false
// console.log(isVowel('E')); // true
// console.log(isVowel('a')); // true
//
// //isConsonant
//     function isConsonant(letter){
//         return letter.toLowerCase() !== 'a' && letter.toLowerCase() !=='e'
//             && letter.toLowerCase() !== 'i' && letter.toLowerCase() !== 'o' && letter.toLowerCase() !=='u';
//     }
//
// console.log(isConsonant('c')); // true
// console.log(isConsonant('E')); // false
// console.log(isConsonant('H')); // true
//
// //isCapital
//     function isCapital(letter){
//         return letter === letter.toUpperCase();
//     }
//
// console.log(isCapital('A')); // true
// console.log(isCapital('b')); // false
//
// //isLowerCase
//     function isLowerCase(letter){
//         return letter === letter.toLowerCase();
//     }
//
// console.log(isLowerCase('A')); // false
// console.log(isLowerCase('b')); // true
//
// // hasLowerCase
//     function hasLowerCase(string){
//         return string !== string.toUpperCase();
//     }
//
// console.log(hasLowerCase('HEllO')); // true
// console.log(hasLowerCase('HOLA')); // false
//
//
// // isSpace
//     function isSpace(letter){
//         return letter === " ";
//
//     }
//
// console.log(isSpace(" "));//true
// console.log(isSpace("a")); // false
// console.log(isSpace(2)); // false


//*** CHALLENGE FUNCTION DRILLS ***
    function getRandomNumber(min,Max){
        return Math.floor((Math.random() * Max) + min)

    }

console.log(getRandomNumber(1, 100));
//isZero
// }());