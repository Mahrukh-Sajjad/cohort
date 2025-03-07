// function abcd(fn, time) {
//   setInterval(fn, time * 1000);
// }
// abcd(function () {
//   console.log("hey");
// }, 2);

// Implement a function that returns a function with preset greeting
function greeting(greet) {
  return function (name) {
    console.log(`${greet} , ${name}`);
  };
}

var greetKaro = greeting("Hello");
greetKaro();
greetKaro("Mahrukh");

// Implement a function that takes a callback and only
// executes it once.(HOF + Closure)
function efgh(fnc) {
  var executed = false;
  return function () {
    if (!executed) {
      executed = true;
      fnc();
    }
  };
}
var runfnc = efgh(function () {
  console.log("some code to be executed");
});

runfnc();
runfnc();
runfnc();

// implement a function that throttles another function(Hof +closure)
function throt(fn, time) {
  var lastCall = 0;

  return function () {
    var current = Date.now();
    if (current - lastCall >= time) {
      current = lastCall;
      fn();
    }
  };
}

var fnc = throt(function () {
  console.log("Implement a function after 2000 ms");
}, 7000);

fnc();
fnc();
