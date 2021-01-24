// abacba 转成 aaa,bb,c

function fn(str) {
 const arr = str.split("");
 arr.sort((a, b) => a.charCodeAt() - b.charCodeAt());

 let res = "";
 for (let i = 0; i < arr.length; i++) {
  const a = arr[i];
  const b = arr[i + 1];
  if (a == b) {
   res += a;
  } else {
   res += a + ",";
  }
 }
 return res.substring(0, res.length - 1);
}

console.log(fn("abacba"));
