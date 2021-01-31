// 找到数的位置   然后把数字插入进去

function insetSort(arr) {
 for (let i = 1; i < arr.length; i++) {
  let target = i;
  for (let j = i - 1; j < arr.length; j--) {
   if (arr[target] < arr[j]) {
    [arr[target], arr[j]] = [arr[j], arr[target]];
    target = j;
   } else {
    break;
   }
  }
 }
}

const arr = [52, 2, 8, 2, 90, 66, 7, 99, 1];
insetSort(arr);
console.log("arr", arr);
