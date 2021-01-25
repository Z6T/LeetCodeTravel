// abacba 转成 aaa,bb,c

function fn(str) {
 const arr = str.split("");
 arr.sort((a, b) => a.charCodeAt() - b.charCodeAt());
 // 第一种解法
 //  let res = "";
 //  for (let i = 0; i < arr.length; i++) {
 //   const a = arr[i];
 //   const b = arr[i + 1];
 //   if (a == b) {
 //    res += a;
 //   } else {
 //    res += a + ",";
 //   }
 //  }
 //  return res.substring(0, res.length - 1);

 // 第二种解法
 return arr.join("").replace(/([a-z])\1+/g, (str, $1) => {
  console.log("str", str);
 });
}
// s = s.replaceAll("([a-z])\1+", "$1$1");
console.log(fn("abacba"));
