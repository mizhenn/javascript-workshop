// What we know about functional programming:
// Is a programming paradigm that emphasizes the use of pure functions and immutable data.

//FIRST CLASS FUNCTION TAB - 3 PROBLEM STATEMENT
//1.Assign a function to a variable and use it to convert a string to uppercase:
    const convertToUpperCase = function (str) {
    return str.toUpperCase();
    };

    const inputString = "Welcome";
    const expected = convertToUpperCase(inputString);
    console.log(expected); 


//2.Create a function that takes a number as input and returns another function that multiplies its input with the original number:
function createMultiplier(factor) {
  return function (number) {
    return factor * number;
  };
}

const multiplyBy3 = createMultiplier(3);
const inputNumber = 7;
const multi = multiplyBy3(inputNumber);
console.log(multi); 


//3.Create a function that takes two numbers as input and returns an object with specific properties:

function createFunction() {
    return function (num1, num2) {
      const result = {
        operation1: num1 + 2, 
        operation2: num2 + 4, 
      };
  
      return result; 
    };
  }
  

const adding2And4 = createFunction(2, 4);
const input1 = 5;
const input2 = 5;
const result = adding2And4(input1, input2);
console.log(result);






//HIGHER-ORDER FUNCTION TAB - 4 PROBLEM STATEMENT
//1.Converts all string elements to lowercase.
const convertToLowerCase = function (str) {
    return str.toLowerCase()   
};

const inputingString = ("Hippopotamus" , "King Cobra" , "Giant Panda" , "Crocodile");
const outprint = convertToLowerCase(inputingString);
console.log(outprint);




//2.Print a string that has a length of more than 11 characters.


const find_long_string(string);
    for string in strings:
        if len(string) > 11:
            print(string)
            break

input_strings = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"]
find_long_string(input_strings)





//3.Create a function using a callback that takes a string as input and returns the string in reverse order.




//4.Create two functions. One function generates runners with specific speeds, and the other simulates a race between two runners over a specified distance. Return the winner's name or 'It's a tie!' if both runners finish simultaneously.








//CURRYING FUNCTION TAB




