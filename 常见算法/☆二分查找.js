// 前提是有序数组
function binarySearch(arr, target) {
 let left = 0,
  right = arr.length - 1,
  index = -1,
  intermediateIndex;
 while (left < right) {
  // 根据索引
  intermediateIndex = Math.floor((left + right) / 2);
  if ((arr[intermediateIndex] = target)) {
   return intermediateIndex;
  } else if (arr[intermediateIndex] > target) {
   right = intermediateIndex;
  } else {
   left = intermediateIndex;
  }
 }
}
