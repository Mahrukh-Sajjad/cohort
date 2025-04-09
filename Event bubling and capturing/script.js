let arr = [10, 20, 30, 40, 50, 60];

// arr.forEach(function () { // for each is a higher order function that takes a function as parameter
// console.log("Hello"); //this is used to iterate elements of an array as there are six elements in an array
// }); // so hello will be printed 6 times.
// in for Each if we are giving index element and index to a function inside foreach first value is always element and second is index.
arr.forEach(function (e, idx) {
  // this e takes each element from array and the function inside for each runs
  console.log(e, idx); // runs till the length of array because it is written in for each.
  //The idx specifies the index of each element.
});
var arr1 = [
  {
    user: "Mahrukh",
    age: 60,
    married: false,
    image:
      "https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?q=80&w=1561&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    istatus: "stranger",
  },
  {
    user: "Khurram",
    age: 80,
    married: true,
    image:
      "https://images.unsplash.com/photo-1614031690812-c20810796cb9?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    istatus: "stranger",
  },
  {
    user: "Adan",
    age: 90,
    married: false,
    image:
      "https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    istatus: "stranger",
  },
];

let Main = document.querySelector(".main");
// var sum = "";
// arr1.forEach(function (elem, idx) {
//   sum =
//     sum +
//     `   <div class="card">
//         <img
//           src="${elem.image}"
//           alt=""
//         />
//         <h1>${elem.user},${elem.age}</h1>
//         <h4>Maried:${elem.married}</h4>
//         <h5>Stranger</h5>
//         <button id=${idx}>Add friend</button>

//       </div>`;
// });
// // In event bubling we target parent and perform some event on it and it's effect is shown our child.

// Main.innerHTML = sum;

function hero() {
  var sum = "";
  arr1.forEach(function (elem, idx) {
    sum =
      sum +
      `   <div class="card">
        <img
          src="${elem.image}"
          alt=""
        />
        <h1>${elem.user},${elem.age}</h1>
        <h4>Maried:${elem.married}</h4>
        <h5>${elem.istatus}</h5>
        <button id=${idx}>Add friend</button>

      </div>`;
  });
  // In event bubling we target parent and perform some event on it and it's effect is shown our child.

  Main.innerHTML = sum;
}
Main.addEventListener("click", function () {
  console.log("Hello");
});
hero();

//Here dets is the parameter that gives details about the event happened this gives an object on console
// and that object contains a property target that tells which tag is clicked
Main.addEventListener("click", function (dets) {
  // console.log(arr1[dets.target.id]); // when we click on button it gives the id
  var gold = arr1[dets.target.id];
  if (gold.istatus == "stranger") {
    gold.istatus = "friend";
  } else {
    gold.istatus = "stranger";
  }

  hero();
});
