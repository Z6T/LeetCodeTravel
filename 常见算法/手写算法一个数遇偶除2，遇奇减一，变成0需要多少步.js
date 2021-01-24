function fn(num) {
 let count = 0;
 while (!num) {
  if (num % 2 === 0) {
   num = num / 2;
  } else {
   num = num - 1;
  }
  count++;
 }
 return count;
}
