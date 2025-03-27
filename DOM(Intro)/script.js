// Dom (Document Object Model)

// There are 4 pillars of Dom
// Selection
// Changing Html
// Changing css
// Event listener

// var h1 = document.querySelector("h1");

// // Eventlistener
// h1.addEventListener("click", function () {
//   // selection

//   console.log(h1);

//   // Changing Html
//   h1.innerHTML = "My name is Mahrukh";

//   // Changing css
//   h1.style.color = "yellow";
//   h1.style.backgroundColor = "black";
// });

// var box = document.querySelector("#box");
// getElementById  is used to select an element by it's id name
// var box = document.getElementById("box");

// querySelectorAll gives node list which is simply array of all the selected elements
// var h1 = document.querySelectorAll("h1");
// h1[2].innerHTML = "khana kha lo";

// var box = document.querySelector("#box");
//textContent only changes text
// box.textContent = "changed";
// innerHTML consider tags written inside it
// box.innerHTML = "<h1>Changed</h1>";
var box = document.querySelector("#box");
var btn = document.querySelector("button");

function changeButton() {
  box.style.backgroundColor = "pink";
}

var box = document.querySelector("#box");
var btn = document.querySelector("button");
// if we write parenthesis with our function it's is going to run immediately without clicking the button.
btn.addEventListener("click", changeButton);
