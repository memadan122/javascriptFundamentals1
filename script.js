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
