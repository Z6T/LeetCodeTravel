function ajax(options) {
 const { async, data, method, url } = options;
 const xhr = new XMLHttpRequest();
 return new Promise((resolve, reject) => {
  let params = [],
   encodeParams = "";
  if (typeof data === "object") {
   for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
     const val = data[key];
     params.push(`${encodeURI(key)}=${encodeURI(val)}`);
    }
   }
   encodeParams = params.join("&");
  }
  if (method.toLowerCase() == "get") {
   url += encodeParams;
  }
  xhr.open(url, method, async);
  if (method === "get") {
   xhr.send(null);
  } else {
   xhr.send(encodeParams);
  }
  xhr.onreadystatechange = () => {
   if (xhr.readyState == 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
     resolve(xhr.responseText);
    } else {
     reject();
    }
   }
  };

  xhr.onerror = (err) => {
   reject(err);
  };
 });
}
