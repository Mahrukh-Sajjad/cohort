// // Browser give us small storage called local storage we can store 5-10mb data.
// var btn = document.querySelector("button");
// console.log(btn);
// btn.addEventListener("click", function () {
//   // This loaction.href is used to redirect to a link on click of a button.
//   //   location.href =
//   //     "https://www.google.com.pk/?gws_rd=cr&ei=KkqQWbTVF8mdgAaRp43IDQ";
//   //   loaction.reload() it reloads the page
//   location.reload();
//   //   In variable a the current location is stored
//   var a = location.href;
//   console.log(a);
// });

var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");

btn1.addEventListener("click", function () {
  history.back();
});

btn2.addEventListener("click", function () {
  history.forward();
});
// This gives information relevant to system and browser.
console.log(navigator.userAgent);
// It tells whether u are online or not it gives the boolean value.
console.log(navigator.onLine);

// Local storage is used to store important info like if we have set dark theme on a website when we reopen the
// website it is going to give us the dark theme this happens because of local storage.users login credentials.
// to stay loged in. local storage carries the data untill u explicitely delete it.

// There is another thing called session storage which stores the data untill a tab is opened.
// cookies is like  local storage but it has expiry time unlike local storage we dont have to delete cookies.
// local storage, session and extension storage is in application panel in inspect.

localStorage.clear(); //This is used to delete data from local storage. local storage contains data in key value pair.
localStorage.setItem("user", "Mahrukh");
localStorage.setItem("age", 50); // We will always write key in double quotes.

var user = localStorage.getItem("user");
console.log(user);
localStorage.removeItem("age"); //This is used to remove particular item from local storage.

var arr = [10, 20, 30, 40, 50, 60];

localStorage.setItem("Array", arr); // here the value of array is stored in the form of string.

var obj = {
  username: "Mahrukh",
  age: 8,
};
localStorage.setItem("obj", obj); // local storage  can't handle objects.

var users = [
  {
    name: "Mahrukh",
    age: 6,
    city: "jhelum",
  },
];
var newUsers = JSON.stringify(users); // We can convert this users array into string
localStorage.setItem("user", newUsers);
var newUsers1 = localStorage.getItem("user");
var newUsers2 = JSON.parse(newUsers1);
console.log(newUsers2);

// we can use all the methods in local storage for session storage aswell
document.cookie = "user=sarthak"; //it is used to set the value of user to cookie

var div = document.querySelector("div");
div.classList.add("circle");

div.classList.remove("circle");

document.body.classList.toggle("dark"); //In toggle if class is already present it removes if it is not it adds
