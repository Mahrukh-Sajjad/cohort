var arr = [1, 2, 3, 4];
arr.forEach(function (value) {
  console.log(value);
});
// we cant return inside forEach()
var arr1 = [1, 2, 3, 4];

//  we can return in map function and new array is created.
var ans = arr1.map(function (value) {
  return 12;
});

var ans1 = arr1.filter(function (value) {
  return value > 2;
});

// reduce()
var ans3 = arr.reduce(function (accumulator, key) {
  return accumulator + key;
}, 0);

// Create an array of 5 numbers and log the sum by using .reduce()
var arr2 = [1, 2, 3, 4, 5];
var ans4 = arr2.reduce(function (acc, key) {
  return acc + key;
}, 0);

// Write a while loop to print numbers from 10-1
var i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

// use a while loop to print multiples of 3 from 3 to 30
var k = 1;
while (k <= 10) {
  console.log(k * 3);
  k++;
}

// write a loop to print sum of numbers from 1 to 100
var sum = 0;
for (var m = 1; m <= 100; m++) {
  var sum = sum + m;
}
console.log(sum);

// use for of loop to print the characters of the string javascript
var str = "javascript";
for (var l of str) {
  console.log(l);
}

// remove duplicate values from an array
var arr4 = [1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 5];
var ans4 = [...new Set(arr)];
