// var num = Math.random() * 10; // it will give value from 0 to 9 i.e 10 excluded.
// // console.log(num);
// var num2 = Math.floor(num);
// console.log(num2);

// // Template literals (``) is another way to write strings. it is used to write string in javascript expression.
// console.log(`hello ${num2}`);

// var btn = document.querySelector("button");
// var box = document.querySelector("#box");

// btn.addEventListener("click", function () {
//   var c1 = Math.floor(Math.random() * 256); //This line of code is going to generate random no from 0 to 255
//   var c2 = Math.floor(Math.random() * 256);
//   var c3 = Math.floor(Math.random() * 256);
//   box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
//   console.log(c1);
// });

// Picking random values from array
// let pslTeams = ["IU", "KK", "LQ", "MS", "PZ", "QG"];
// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// btn.addEventListener("click", function () {
//   let winner = Math.floor(Math.random() * pslTeams.length);
//   h1.innerHTML = pslTeams[winner]; // for string and setting html expression we use quotes. for javascript expressions we dont use quotes.
// });

var arr = [
  {
    team: "IU",
    primary: "yellow",
    secondary: "green",
  },
  {
    team: "KK",
    primary: "red",
    secondary: "black",
  },
  {
    team: "LQ",
    primary: "blue",
    secondary: "gold",
  },
  {
    team: "MS",
    primary: "purple",
    secondary: "gold",
  },
  {
    team: "PZ",
    primary: "orange",
    secondary: "black",
  },
  {
    team: "QG",
    primary: "teal",
    secondary: "coral",
  },
];

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
btn.addEventListener("click", function () {
  let num = Math.floor(Math.random() * arr.length);
  var winner = arr[num];
  h1.innerHTML = winner.team;
  h1.style.backgroundColor = winner.primary;
  h1.style.color = winner.secondary;
});
