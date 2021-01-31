// 1  找到最小的元素
// 2  放到已排序的序列的末尾
function selectionSort(arr) {
 let smallLestIndex = 0;
 for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
   if (arr[j] < arr[smallLestIndex]) {
    smallLestIndex = j;
   }
  }
  const temp = arr[i];
  arr[i] = arr[smallLestIndex];
  arr[smallLestIndex] = temp;
  smallLestIndex = i + 1;
 }
}
const arr = [52, 2, 8, 2, 90, 66, 7, 99, 1];
selectionSort(arr);
console.log("arr", arr);
