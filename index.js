/*  1. Create a function that can create a triangle pattern according to the height
    01
    02 03
    04 05 06
    07 08 09 10
    Parameters : height -> triangle height
*/

const trianglePattern = function (height) {
  let count = 1;
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      if (count < 10) {
        row += `0${count} `;
      } else {
        row += `${count} `;
      }
      count++;
    }
    console.log(row);
  }
};

trianglePattern(6);

/* 2. Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".
Parameters : n → total looping
○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
*/

const fizzBuzz = function (n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += i === n ? "FizzBuzz" : "FizzBuzz, ";
    } else if (i % 3 === 0) {
      output += i === n ? "Fizz" : "Fizz, ";
    } else if (i % 5 === 0) {
      output += i === n ? "Buzz" : "Buzz, ";
    } else {
      output += i === n ? `${i}` : `${i}, `;
    }
  }
  return output;
};

console.log(fizzBuzz(20));

/* 3. Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))^2
● Parameters : weight & height
● Return values :
    ○ < 18.5 return “less weight”
    ○ 18.5 - 24.9 return “ideal”
    ○ 25.0 - 29.9 return “overweight”
    ○ 30.0 - 39.9 return “very overweight”
    ○ > 39.9 return “obesity”
 */

const calculateBMI = function (weight, height) {
  let bmiResult = weight / height ** 2;
  if (bmiResult < 18.5) {
    return "less weight";
  } else if (bmiResult >= 18.5 && bmiResult < 25) {
    return "ideal";
  } else if (bmiResult >= 25 && bmiResult < 30) {
    return "overweight";
  } else if (bmiResult >= 30 && bmiResult <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
};

console.log(calculateBMI(58, 1.58));

/* 4. Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only
○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
*/

//solution 1
const removeOddNumber = function (array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
    }
  }
  return result;
};

console.log(removeOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//solution 2 using filter method
const removeOddNumber2 = function (array) {
  const result = array.filter(function (value) {
    return value % 2 === 0;
  });
  return result;
};

console.log(removeOddNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/* 5. Write a function to split a string and convert it into an array of words
○ Example : “Hello World” → [“Hello”, “World”]
*/

//solution 1
const splitString = function (string) {
  let result = [];
  let word = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      word += string[i];
    } else {
      result.push(word);
      word = "";
    }
  }
  result.push(word);
  return result;
};

console.log(splitString("hello world"));

//solution 2 using split method
const splitString2 = function (string) {
  return string.split(" ");
};

console.log(splitString2("hello world"));
