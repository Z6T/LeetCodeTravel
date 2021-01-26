function isObject(obj) {
 return Object.prototype.toString.call(obj) === "[object Object]";
}

function defineReactive(obj, key) {
    Object.defineProperty(obj, key, {
        get() {
            
        },
        set() {
            
        },
    })
}

class Vue {
 constructor(options) {
  this.$potions = options;
  this.$data = options.data;
  this.observe(this.$data);
 }

 observe(obj) {
  if (isObject(obj)) {
  }
 }
}

class Observer {
 constructor(value) {
  this.value = value;
  if (isObject(value)) {
   this.walk(value);
  }
 }

 walk(value) {
  Object.keys(value).forEach((key) => {
   defineReactive(obj, key);
  });
 }
}
