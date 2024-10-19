// arrayModule.js
export function findMax(arr) { 
  
  let max = arr[0]; 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; 
    }
  }
  return max;
  /* Your code here */ }


export function reverseArray(arr) { 
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
  
  
  /* Your code here */ }