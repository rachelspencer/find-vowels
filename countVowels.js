// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// First solution

// function getCount(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let arr = [...str];
//   let vowelCount = 0;
  
//   const filterVowels = arr.map((x) => vowels.includes(x) ? vowelCount++ : null);
//   return vowelCount;
// };


// Second Attempt ES5

// create a vowels array
// change the str parameter to an array
// create a constant vowelCount
// filter over the arr for letters that are in the vowels arr
// if true, add to vowelCount
// once iteration is complete, find length of vowelCount, then return


// function getCount(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let arr = str.split("");

//   const vowelCount = (arr.filter((letter) => vowels.includes(letter))).length;
//   return vowelCount;

//   // };

// // console.log(getCount("apple"))

// third solution ES6

// create vowels array in global scope 
// string concatenation - change str parameter to an array, filter letters to find vowels, add truthy valued to getCount array, then return its length

const vowels = ["a", "e", "i", "o", "u"];

const getCount = str => str.split("").filter(letter => vowels.includes(letter)).length;

console.log(getCount("apple"))