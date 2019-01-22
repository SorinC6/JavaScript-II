// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
    // getLength passes the length of the array into the callback.
    return cb(arr.length)
}

// const arrLength=getLength(items, function(len){
//     return len;
// })
//ES6
const arrLength = getLength(items, (len) => len)
console.log(arrLength);

function last(arr, cb) {
    // last passes the last item of the array into the callback.
}

function sumNums(x, y, cb) {
    // sumNums adds two numbers (x, y) and passes the result to the callback.
    return cb(x + y);
}

// const sum=sumNums(3,2,function(s){
//     return s
// })
const sum = sumNums(3, 2, s => s);

console.log(sum);

function multiplyNums(x, y, cb) {
    // multiplyNums multiplies two numbers and passes the result to the callback.
    return cb(x * y);
}

// const multiplies=multiplyNums(3,2,function(result){
//     return result;
// })

const multiplies = multiplyNums(3, 2, result => result)
console.log(multiplies);

function contains(item, list, cb) {
    // contains checks if an item is present inside of the given array/list.
    // Pass true to the callback if it is, otherwise pass false.
    return cb(list.includes(item));
}

// const isInside=contains('Pencil',items,function(res){
//     return res;
// })

const isInside = contains('Penci', items, res => res);

console.log(isInside);

/* STRETCH PROBLEM */

//test remove duplicate method:
let arr = [1, 2, 1, 1, 2, 2, 4, 5, 5, 5, 5];


//let uniq=[...new Set(arr)];

// let uniq = arr.filter((item, index, a) => {
//     return a.indexOf(item) === index;
// })

//console.log(uniq);

function removeDuplicates(array, cb) {
    // removeDuplicates removes all duplicate values from the given array.
    // Pass the duplicate free array to the callback function.
    // Do not mutate the original array.
    return cb(array.filter((item, index, a) => {
             return a.indexOf(item) === index;
         }));
}

const removeD = removeDuplicates(arr, r => r);

console.log(removeD);
