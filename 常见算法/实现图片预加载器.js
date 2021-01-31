let imgArr = [
 "https://staging-cnbj2-fds.api.xiaomi.net//scf/static_resources/1609148510781/-1645709539.png",
 "https://staging-cnbj2-fds.api.xiaomi.net//scf/static_resources/1608112980864/-432169055.png",
];

function preLoadImg(arr, callback) {
 let count = 0;
 arr.forEach((url, index) => {
  let img = new Image();
  img.src = url;
  img.onload = () => {
   if (++count === arr.length) {
    callback();
   }
  };
 });
}

preLoadImg(imgArr, (images) => {
 console.log(222);
});
