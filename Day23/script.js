function callerfun(fn) {
  setTimeout(fn, 3000);
}
callerfun(function () {
  console.log("hey");
});

function hap(a, fn) {
  var newarr = [];
  for (var i = 0; i < a.length; i++) {
    newarr.push(fn(a[i]));
  }
  return newarr;
}

var arr = [1, 2, 3, 4, 5, 6];

var ans = hap(arr, function (val) {
  return val + 2;
});

console.log(ans);

// Write a function that uses closure to create a counter
function abcd() {
  var counter = 0;
  return function () {
    console.log((counter += 1));
  };
}
var makeCount = abcd();
makeCount();
makeCount();
makeCount();

// Write a function to limit the no of times a function is called

function functionLimiter(fn, limit) {
  var count = 0;
  return function () {
    if (count < limit) {
      count++;
      console.log(count);
      fn();
    }
  };
}

var caller = functionLimiter(function () {
  console.log("hey");
}, 3);

caller();
caller();
caller();
caller();
