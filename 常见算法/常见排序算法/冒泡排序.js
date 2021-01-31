// 比较相邻颜色。大的元素后置  所以第一轮就找出了最大的
const arr = [52, 2, 8, 2, 90, 66, 7, 99, 1];
function bubleSort(arr) {
 for (let i = 0; i < arr.length - 1; i++) {
  // 比较的轮数  先找出最大的
  for (let j = 0; j < arr.length - 1 - i; j++) {
   //比较的两个数字的头一个
   if (arr[j] > arr[j + 1]) {
    const temp = arr[j] - arr[j + 1];
    arr[j] = arr[j] - temp;
    arr[j + 1] = arr[j + 1] + temp;
   }
  }
 }
}

console.log("bubleSort(arr)", bubleSort(arr), arr);
