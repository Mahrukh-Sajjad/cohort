function orderFood() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let chance = Math.random < 0.7;
      if (chance) {
        res();
      } else {
        rej();
      }
    }, 2000);
  });
}
orderFood()
  .then(() => {
    console.log("pizza delivered");
  })
  .catch(() => {
    console.log("Delivery Failed");
  });

//   chanined promises: user->   posts->    comments
// tasks
// create getUser()-> resolves with {id:1 , name:"Harsh"}
// getPosts(userId) -> resolves with list of post titles.
// getComments(postId) -> resolves with comments
// chain them together usimg .then and log thr final output.

function getUser() {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res({ id: 1, name: "Harsh" }); // when we pass data to  res function then callback function in then is going to receive that data.
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((res, rej) => {
    res(["title 1 ", "title 2"]);
  });
}

function getComments(postId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["great post", "amazing content", "you rocked"]);
    }, 1000);
  });
}

getUser()
  .then(function (data) {
    console.log(data);
    return getPosts(data.id);
  })
  .then(function (titles) {
    console.log(titles);
    return getComments("vxcvsuvc");
  })
  .then(function (cmts) {
    console.log(cmts);
  })
  .finally(function () {
    console.log("All data fetched");
  });

// fake api delay

// write a function fakeApiCall(endpoint) that:
// Accept a string like "users" or "posts"
// resolves with sum dummy data after the random delay(1-3 sec)

function fakeApiCall(endpoint) {
  const data = {
    users: ["harsh", "shivam", "raghav"],
    posts: ["hey champ", "great going everyone", "let's build this"],
  };

  let delay = Math.random() * 2000 + 1000;
  return new Promise(function (res, rej) {
    setTimeout(function () {
      res(data[endpoint]); // if we want to access literally endpoint property from object we
      // will use . notation but here endpoint is a variable so we will use [] notation .
    }, delay);
  });
}
fakeApiCall("users").then(function (data) {
  console.log(data);
});
