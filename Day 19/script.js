// Array  is a Data Structure which can store  multiple values all at one place.
var a = [12, 13, 14];
//  We access members of array by their index and index always starts
// from zero upto arr.length-1  In example below 3 would be displayed
//  on console.
var arr = [1, 2, 3, 4];
console.log(arr[2]);

// second method to use array
var arr2 = new Array();
// We can set values of arrays at any index explicitly
arr2[0] = 12;
arr2[1] = 32;
console.log(arr2);
// making array of size 100
var arr3 = new Array(100);

// Adding 0 to 29 values in array of size 30 using for loop
var arr4 = new Array(30);
for (var i = 0; i < 30; i++) {
  arr4[i] = i;
}
// We can store values of different data types in array.
// This means array is not homogeneous in javascript
var arr5 = [1, 2.4, true, [], {}, function () {}, "Mahrukh"];

// In JavaScript, objects are collections of properties and methods. Each property is a key-value pair,
//  where the key (or name) is a string, and the value can be any data type, including other objects,
//  arrays, or functions.

var person = {
  fname: "Mahrukh",
  lname: "Sajjad",
  email: "mahrukhsajjad758@gmail.com",
};

//  When we want to store different type of values about same element we make objects like
// in example below we want to store firstname, lastname and email about a same person
var person = {
  fname: "Mahrukh",
  lname: "Sajjad",
  email: "mahrukhsajjad758@gmail.com",
};

// There is another method to make an object
var obj2 = new Object();

// How to access an object
var person = {
    fname: "Mahrukh",
    lname: "Sajjad",
    email: "mahrukhsajjad758@gmail.com",
  };
//   This is how we access email of person object
person.email



