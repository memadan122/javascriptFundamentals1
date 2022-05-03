//bmi-calculator

const height = 5.9;
const weight = 58;

let newHeight = height * 0.3048;
console.log(newHeight);

let newWeight = weight * 2.20462262;
console.log(newWeight);

const bmi = newWeight / newHeight ** 2;
console.log("Your BMI is :  " + bmi + " kg/m2");
