/*console.log("hello World!");

//data types in javascripts
//operator precedence

//Dynamic Typed

let countryName = "Nepal"; //camel-case convention e.g.countryName
console.log(countryName);
console.log(typeof countryName);

countryName = 88;
console.log(countryName);
console.log(typeof countryName);

//let -> we can change later in the runtime
//const -> we cannot change later in the runtime

const personName = "Madan Bastakoti";
console.log(personName);

// personName = "Dikshak Poudel";

//data types in javascript
// 1. Number
// 2. String
// 3. Object
// 4. Boolean
// 5. List
// 6. undefined
// 7. null

const scoreInt = 78;
const schoolName = "SBS";
const seeMarks = 798.33;
const isValid = false;
const isLoggedin = true;

const nullVal = null;
let myName;

console.log(
  typeof scoreInt,
  typeof schoolName,
  typeof seeMarks,
  typeof isValid,
  typeof isLoggedin
);

console.log(typeof nullVal, typeof myName);

//EVERYTHING IN JAVASCRIPT IS OBJECT.

//Operators in Javascripts +, -, *, /, %,  ++, --, +=, -=, /=, (), **, %=   //Arithemetic Operators
let num1 = 30;
let num2 = 20;
let num3;
num3 = num1 + num2;

console.log(num3, typeof num3);

num3 = num1 - num2;
console.log(num3);

num3 = num1 * num2;
console.log(num3);

num3 = num1 / num2;
console.log(num3);

console.log("value of num3: " + num3);
num3++;
console.log("After the increment: " + num3);

console.log("value of num3: " + num3);
num3--;
console.log("After the decrement: " + num3);
*/

//unary operators  +=, -=, *=, /=

num1 = 15;
num2 = 35;

// num1 = num1 + 10; num1 += 10; both are same
num1 += 10;

console.log("value of num1 (+=): " + num1);

num1 -= 7;
console.log("value of num1 (-=): " + num1);

num1 *= 7;
console.log("value of num1 (*=): " + num1);

num1 /= 7;
console.log("value of num1 (/=): " + num1);

console.log((9 + 2) / 7);

console.log(5 ** 2);
console.log(3 ** 3);

//Logical Operators
// &&, ||, !

//logical operators
//&&, ||, !
//&& and  -->
//      OP1              OP2            Result
//  ........        ...........        .........
//      T               T                  T
//      T               F                  F
//      F               T                  F
//      F               F                  F

//|| or -->
//      OP1              OP2            Result
//  ........        ...........        .........
//      T               T                  T
//      T               F                  T
//      F               T                  T
//      F               F                  F

// ! not -->
//   True  !    False
//   False !   True

//examples
console.log(2 > 3 && 3 < 4);

console.log(2 < 1 || 4 < 6);

//conditional statement
if (3 > 4) {
  console.log("This will not not get executed");
} else if (5 < 7) console.log("5<7 is always right");
else console.log("This will get executed if both are not true");

if (3 < 4) {
  console.log("This will not not get executed");
} else if (5 < 7) console.log("5<7 is always right");
else console.log("This will get executed if both are not true");

if (3 < 4) {
  console.log("This will not not get executed");
} else if (5 > 7) console.log("5<7 is always right");
else console.log("This will get executed if both are not true");

if (3 > 4) {
  console.log("This will not not get executed");
} else if (5 > 7) console.log("5<7 is always right");
else console.log("This will get executed if both are not true");

//income of a person check the income if it is less than 10k, if less than 10k thenyou
//need to earn more if more than 10k and less than 25k then you are earning for yourself.
//income greater tha 25k less than 50k then you are eligible to pay tax 7% print the final amount you will earn .
//income grater than 50k less tha 100k then you are more eligible to pay more tax. tax is 13% print the final amount.
//if value is negative the salary can be, your salary cannot be negative
//income greater than 100k and less than 150k then print you are rich you have to  pay 18% tax
