Array.prototype.reduce = function (callback, prev) {
 for (let i = 0; i < this.length; i++) {
  const curEle = this[i];
  if (typeof prev === "undefined") {
   prev = callback(curEle, this[i + 1], i + 1, this);
  } else {
   prev = callback(prev, curEle, i, this);
  }
 }
 return prev;
};

Array.prototype.filter = function (callback) {
 const res = [];
 for (let i = 0; i < this.length; i++) {
  const element = this[i];
  if (callback(element, i, this)) res.push(element);
 }
 return res;
};

Array.prototype.map = function (callback) {
 const res = [];
 for (let i = 0; i < this.length; i++) {
  const element = this[i];
  res.push(callback(element, i, this));
 }
 return res;
};
let arr = [1, 3, 5, 7, 9];

console.log(
 "reduct",
 arr.reduce((prev, cur) => prev + cur)
);
console.log(
 "filter",
 arr.filter((item) => item > 3)
);
console.log(
 "map",
 arr.map((item) => item + 6)
);
