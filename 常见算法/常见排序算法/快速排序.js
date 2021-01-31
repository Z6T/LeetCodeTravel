function quickSort(arr) {
 if (arr.length < 2) return arr;
 let providIndex = Math.floor(arr.length / 2);
 var pivot = arr.splice(providIndex, 1)[0];

 var left = [];
 var right = [];
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= pivot) {
   left.push(arr[i]);
  } else {
   right.push(arr[i]);
  }
 }
 return quickSort(left).concat([pivot], quickSort(right));
}
const arr = [52, 2, 8, 2, 90, 66, 7, 99, 1];

console.log("arr", quickSort(arr));
