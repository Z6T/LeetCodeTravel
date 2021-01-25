// 手写给个xiaotuofeng-mingming-shezhi改成驼峰式xiaotuofengMingmingShezhi
function fn(str) {
 return str.replace(/-([a-z])/g, (str, $1) => {
  return $1.toUpperCase();
 });
}
console.log(fn("xiaotuofeng-mingming-shezhi")); // xiaotuofengMingmingShezhi
