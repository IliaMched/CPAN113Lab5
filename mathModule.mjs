// mathModule.js
import { findMax } from './arrayModule.mjs';
import { toUpperCase } from './stringModule.mjs';
 

export function add(a, b) { 

  return a+b;

  /* Your code here */ }
export function subtract(a, b) { 
  

  return a-b;
  /* Your code here */ }
  export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}
export function maxMultiUpper(arr, b) {
   let result = findMax(arr);
   result= result *b;
  console.log(toUpperCase(result.toString()));
}