// function getUserInfo() {
//   return new Promise(function (res, rej) {
//     res({ id: 1, name: "harsh" });
//   });
// }

// function getUserPics(id) {
//   return new Promise(function (res, rej) {
//     res(["pic1", "pic2"]);
//   });
// }

// getUserInfo()
//   .then(function (data) {
//     console.log(data);
//     return getUserPics(data.id);
//   })
//   .then(function (data) {
//     console.log(data);
//   });

//   fetch

fetch("http://127.0.0.1:5501/Async4/index.html")
  .then((res) => res.json()) //when we dont write curly braces  it means it's going to
  // return  res.json()
  .then((data) => {
    console.log(data);
  });

document.querySelector("button").addEventListener("click", function () {
  fetch("https://api.github.com/users/async")
    .then((res) => res.json()) // we havent  written curly braces so it's going  to implicitely return res.json()
    .then((data) => {
      console.log(data);
    });
});

function getUserInfo(username) {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
}
getUserInfo("async").then((data) => {
  console.log(data);
});
