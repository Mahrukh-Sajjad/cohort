var arr = [3, 1, 4, 3, 1, 4, 2, 5];
var ans = [...new Set(arr)];
var ans1 = ans.sort((a, b) => b - a);
console.log(ans1[1]);

var arr2 = [];

for (var i = arr.length - 1; i >= 0; i--) {
  arr2.push(arr[i]);
}

var arr3 = [3, 4, 1, 3, 4, 7, 6];
var obj = {};
arr3.forEach(function (val) {
  obj[val] === undefined ? (obj[val] = 1) : obj[val]++;
});

let arr6 = [10, 20, 30, 40];
console.log(arr.slice(1, 3));
