// app.js
import { add, subtract } from './mathModule.mjs';
import { toUpperCase, toLowerCase } from './stringModule.mjs';
 
import { findMax, reverseArray } from './arrayModule.mjs';
import { addAndLogUpper } from './mathModule.mjs';
import { maxMultiUpper } from './mathModule.mjs';
addAndLogUpper(10, 20);  // Test the new function
 
console.log('Max: ', findMax([1, 2, 3, 4, 5]));  // Test findMax
console.log('Reversed: ', reverseArray([1, 2, 3]));  // Test reverseArray
// Call the functions and log results (your choice of arguments)
console.log('Add: ', add(5, 3));  // Test your add function
console.log('Uppercase: ', toUpperCase('hello'));  // Test string manipulation
maxMultiUpper([1, 2, 5, 3], 2);