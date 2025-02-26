// There are five methods to print something on console
console.log("Hello World");
console.warn("Hello World");
console.error("Hello World");
console.info("Hello World");
console.table({ name: "Mahrukh", email: "mahrukhsajjad758@gmail.com" });

// use typefo to print datatype of a value
console.log(typeof 123);
console.log(typeof "123");
console.log(typeof undefined);
console.log(typeof null);

// console.group()
console.groupCollapsed("Fruits");
console.log("Apple");
console.log("Banana");
console.groupEnd();

// when we declare an object with const we can't change
// The value but we can change values opf properties.
const obj = {
  name: "Mahrukh",
  age: 27,
  email: "test@gmail.com",
};

Object.freeze(obj);
obj.age = 40;

// There are three methods to convert a string into number
console.log(Number("50"));
console.log(parseInt("50"));
console.log(+"50");

// indexOf()
let str = "javaScript";
console.log(str.indexOf("Script") !== -1);
// We can use search() instead of indexOf()
