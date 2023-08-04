/* Returns a new array with only the odd numbers from the original arrays */

function filterOddNumbers(inputArray) {
  const oddNumbers = inputArray.filter(number => number % 2 !== 0);
  return oddNumbers.length === 1 ? oddNumbers[0] : oddNumbers;
}

const inputArray = [2, 4, 6, 8, 11, 20, 15, 22];
const result = filterOddNumbers(inputArray);
console.log(result);



/*Count how many consonants and vowels the words has */

function countConsonantsAndVowels(inputString) {
  const vowels = "aeiou";
  let consonantCount = 0;
  let vowelCount = 0;

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i].toLowerCase();
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char >= 'a' && char <= 'z') {
      consonantCount++;
    }
  }

  console.log(`Word: ${inputString}`);
  console.log(`Number of consonants: ${consonantCount}`);
  console.log(`Number of vowels: ${vowelCount}`);
}

const inputString = "ukelele";
countConsonantsAndVowels(inputString);



/* Creating new arrays in reverse order. */

const countdown = [1, 2, 3];

for(let index = countdown.length -1; index >=0; index--){
  console.log(countdown[index]); 
}


/* reate a JavaScript code that prints each number from 1 to 100 on a new line.*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


