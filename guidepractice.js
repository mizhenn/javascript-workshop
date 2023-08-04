/* If value truthy then true
if value false , null, undefined, empthy string. */

let value = null
  if (value === true) {
    console.log("true");
  }
   else if (value === false) {
      console.log("The boolean value false is falsy");
    } else if (value === null) {
      console.log("The null value is falsy");
    } else if (value === undefined) {
      console.log("undefined is falsy");
    } else if (value === 0) {
      console.log("The number 0 is falsy (the only falsy number)");
    } else if (value === "") {
      console.log("The empty string is falsy (the only falsy string)");
    }
  

/* Declare a result of num1 and num2
add num1 and num2 
if else sum is less than -1000 then print" is less than -1000";
if else sum is negative value then print " is a negative number";
if else sum is equal 0 then print " is equal to 0";
if else num is largen then 0 " is larger than 0";
if else sum is greater than 10 then print " is greater than 100" */

let numm1 = 50;
let numm2 = 51;
let sum = numm1 + numm2;

if (sum < -1000) {
  console.log(sum + " is less than -1000");
} else if (sum < 0) {
  console.log(sum + " is a negative number");
} else if (sum === 0) {
  console.log(sum + " is equal to 0");
} else if (sum > 0 && sum <= 100) {
  console.log(sum + " is larger than 0");
} else {
  console.log(sum + " is greater than 100");
}


/* if num greater and equal than 5 then print true
if num is smaller than 5 then print false */

let num1 =6;
let num2 = 5; 

if (num1 >= 5 && num2 >= 5) {
  console.log(true);
} else {
  console.log(false);
}

/* if two set of values equal then true
if two values one set does not qeual then false 
*/

const param1A = "cat";
const param1B = "cat";
const param2A = 6;
const param2B = "6";

if (param1A === param1B || param1A == param1B) {
  console.log(true);
}
 else {
  if (param2A === param2B || param2A == param2B) {
      console.log(true);
  } else {
      console.log(false);
  }
}









