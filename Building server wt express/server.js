// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello world");
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// why we dont use http directly bu with express
// verbose and repititive
// No routing ,middlewares and extra features.
// Hard to manage large applications.

// so we use express which is based on http module.

// express is a package.

// npm init -y this command creates a package.json file in our project.

const express = require("express");

const app = express(); // is line pay server create hojata hai.

app.get("/home", (req, res) => {
  res.send("Welcome to home page");
});

app.get("/about", (req, res) => {
  res.send("welcome to about page");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
