// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/single-spa/lib/esm/single-spa.min.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addErrorHandler = c;
exports.checkActivityFunctions = Tt;
exports.ensureJQuerySupport = lt;
exports.getAppNames = Ot;
exports.getAppStatus = Pt;
exports.getMountedApps = yt;
exports.mountRootParcel = W;
exports.navigateToUrl = et;
exports.pathToActiveWhen = Dt;
exports.registerApplication = bt;
exports.removeErrorHandler = s;
exports.setBootstrapMaxTime = J;
exports.setMountMaxTime = H;
exports.setUnloadMaxTime = V;
exports.setUnmountMaxTime = Q;
exports.start = Bt;
exports.triggerAppChange = Lt;
exports.unloadApplication = Nt;
exports.unregisterApplication = At;
exports.UPDATING = exports.UNMOUNTING = exports.SKIP_BECAUSE_BROKEN = exports.NOT_MOUNTED = exports.NOT_LOADED = exports.NOT_BOOTSTRAPPED = exports.MOUNTING = exports.MOUNTED = exports.LOAD_ERROR = exports.LOADING_SOURCE_CODE = exports.BOOTSTRAPPING = void 0;

var _singleSpa = require("single-spa");

/* single-spa@5.9.2 - ESM - prod */
var n = Object.freeze({
  __proto__: null,

  get start() {
    return Bt;
  },

  get ensureJQuerySupport() {
    return lt;
  },

  get setBootstrapMaxTime() {
    return J;
  },

  get setMountMaxTime() {
    return H;
  },

  get setUnmountMaxTime() {
    return Q;
  },

  get setUnloadMaxTime() {
    return V;
  },

  get registerApplication() {
    return bt;
  },

  get unregisterApplication() {
    return At;
  },

  get getMountedApps() {
    return yt;
  },

  get getAppStatus() {
    return Pt;
  },

  get unloadApplication() {
    return Nt;
  },

  get checkActivityFunctions() {
    return Tt;
  },

  get getAppNames() {
    return Ot;
  },

  get pathToActiveWhen() {
    return Dt;
  },

  get navigateToUrl() {
    return et;
  },

  get triggerAppChange() {
    return Lt;
  },

  get addErrorHandler() {
    return c;
  },

  get removeErrorHandler() {
    return s;
  },

  get mountRootParcel() {
    return W;
  },

  get NOT_LOADED() {
    return p;
  },

  get LOADING_SOURCE_CODE() {
    return h;
  },

  get NOT_BOOTSTRAPPED() {
    return m;
  },

  get BOOTSTRAPPING() {
    return v;
  },

  get NOT_MOUNTED() {
    return d;
  },

  get MOUNTING() {
    return w;
  },

  get UPDATING() {
    return E;
  },

  get LOAD_ERROR() {
    return O;
  },

  get MOUNTED() {
    return g;
  },

  get UNMOUNTING() {
    return y;
  },

  get SKIP_BECAUSE_BROKEN() {
    return P;
  }

});

function e(t) {
  return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(t);
}

function r(t, n, e) {
  return n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}

var o = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}).CustomEvent,
    i = function () {
  try {
    var t = new o("cat", {
      detail: {
        foo: "bar"
      }
    });
    return "cat" === t.type && "bar" === t.detail.foo;
  } catch (t) {}

  return !1;
}() ? o : "undefined" != typeof document && "function" == typeof document.createEvent ? function (t, n) {
  var e = document.createEvent("CustomEvent");
  return n ? e.initCustomEvent(t, n.bubbles, n.cancelable, n.detail) : e.initCustomEvent(t, !1, !1, void 0), e;
} : function (t, n) {
  var e = document.createEventObject();
  return e.type = t, n ? (e.bubbles = Boolean(n.bubbles), e.cancelable = Boolean(n.cancelable), e.detail = n.detail) : (e.bubbles = !1, e.cancelable = !1, e.detail = void 0), e;
},
    u = [];

function a(t, n, e) {
  var r = l(t, n, e);
  u.length ? u.forEach(function (t) {
    return t(r);
  }) : setTimeout(function () {
    throw r;
  });
}

function c(t) {
  if ("function" != typeof t) throw Error(f(28, !1));
  u.push(t);
}

function s(t) {
  if ("function" != typeof t) throw Error(f(29, !1));
  var n = !1;
  return u = u.filter(function (e) {
    var r = e === t;
    return n = n || r, !r;
  }), n;
}

function f(t, n) {
  for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), o = 2; o < e; o++) r[o - 2] = arguments[o];

  return "single-spa minified message #".concat(t, ": ").concat(n ? n + " " : "", "See https://single-spa.js.org/error/?code=").concat(t).concat(r.length ? "&arg=".concat(r.join("&arg=")) : "");
}

function l(t, n, e) {
  var r,
      o = "".concat(S(n), " '").concat(A(n), "' died in status ").concat(n.status, ": ");

  if (t instanceof Error) {
    try {
      t.message = o + t.message;
    } catch (t) {}

    r = t;
  } else {
    console.warn(f(30, !1, n.status, A(n)));

    try {
      r = Error(o + JSON.stringify(t));
    } catch (n) {
      r = t;
    }
  }

  return r.appOrParcelName = A(n), n.status = e, r;
}

var p = "NOT_LOADED",
    h = "LOADING_SOURCE_CODE",
    m = "NOT_BOOTSTRAPPED",
    v = "BOOTSTRAPPING",
    d = "NOT_MOUNTED",
    w = "MOUNTING",
    g = "MOUNTED",
    E = "UPDATING",
    y = "UNMOUNTING",
    O = "LOAD_ERROR",
    P = "SKIP_BECAUSE_BROKEN";
exports.SKIP_BECAUSE_BROKEN = P;
exports.LOAD_ERROR = O;
exports.UNMOUNTING = y;
exports.UPDATING = E;
exports.MOUNTED = g;
exports.MOUNTING = w;
exports.NOT_MOUNTED = d;
exports.BOOTSTRAPPING = v;
exports.NOT_BOOTSTRAPPED = m;
exports.LOADING_SOURCE_CODE = h;
exports.NOT_LOADED = p;

function b(t) {
  return t.status === g;
}

function T(t) {
  try {
    return t.activeWhen(window.location);
  } catch (n) {
    return a(n, t, P), !1;
  }
}

function A(t) {
  return t.name;
}

function N(t) {
  return Boolean(t.unmountThisParcel);
}

function S(t) {
  return N(t) ? "parcel" : "application";
}

function _() {
  for (var t = arguments.length - 1; t > 0; t--) for (var n in arguments[t]) "__proto__" !== n && (arguments[t - 1][n] = arguments[t][n]);

  return arguments[0];
}

function D(t, n) {
  for (var e = 0; e < t.length; e++) if (n(t[e])) return t[e];

  return null;
}

function U(t) {
  return t && ("function" == typeof t || (n = t, Array.isArray(n) && !D(n, function (t) {
    return "function" != typeof t;
  })));
  var n;
}

function j(t, n) {
  var e = t[n] || [];
  0 === (e = Array.isArray(e) ? e : [e]).length && (e = [function () {
    return Promise.resolve();
  }]);
  var r = S(t),
      o = A(t);
  return function (t) {
    return e.reduce(function (e, i, u) {
      return e.then(function () {
        var e = i(t);
        return M(e) ? e : Promise.reject(f(15, !1, r, o, n, u));
      });
    }, Promise.resolve());
  };
}

function M(t) {
  return t && "function" == typeof t.then && "function" == typeof t.catch;
}

function L(t, n) {
  return Promise.resolve().then(function () {
    return t.status !== m ? t : (t.status = v, t.bootstrap ? q(t, "bootstrap").then(e).catch(function (e) {
      if (n) throw l(e, t, P);
      return a(e, t, P), t;
    }) : Promise.resolve().then(e));
  });

  function e() {
    return t.status = d, t;
  }
}

function R(t, n) {
  return Promise.resolve().then(function () {
    if (t.status !== g) return t;
    t.status = y;
    var e = Object.keys(t.parcels).map(function (n) {
      return t.parcels[n].unmountThisParcel();
    });
    return Promise.all(e).then(r, function (e) {
      return r().then(function () {
        var r = Error(e.message);
        if (n) throw l(r, t, P);
        a(r, t, P);
      });
    }).then(function () {
      return t;
    });

    function r() {
      return q(t, "unmount").then(function () {
        t.status = d;
      }).catch(function (e) {
        if (n) throw l(e, t, P);
        a(e, t, P);
      });
    }
  });
}

var I = !1,
    x = !1;

function B(t, n) {
  return Promise.resolve().then(function () {
    return t.status !== d ? t : (I || (window.dispatchEvent(new i("single-spa:before-first-mount")), I = !0), q(t, "mount").then(function () {
      return t.status = g, x || (window.dispatchEvent(new i("single-spa:first-mount")), x = !0), t;
    }).catch(function (e) {
      return t.status = g, R(t, !0).then(r, r);

      function r() {
        if (n) throw l(e, t, P);
        return a(e, t, P), t;
      }
    }));
  });
}

var G = 0,
    C = {
  parcels: {}
};

function W() {
  return $.apply(C, arguments);
}

function $(t, n) {
  var r = this;
  if (!t || "object" !== e(t) && "function" != typeof t) throw Error(f(2, !1));
  if (t.name && "string" != typeof t.name) throw Error(f(3, !1, e(t.name)));
  if ("object" !== e(n)) throw Error(f(4, !1, name, e(n)));
  if (!n.domElement) throw Error(f(5, !1, name));
  var o,
      i = G++,
      u = "function" == typeof t,
      a = u ? t : function () {
    return Promise.resolve(t);
  },
      c = {
    id: i,
    parcels: {},
    status: u ? h : m,
    customProps: n,
    parentName: A(r),
    unmountThisParcel: function () {
      return y.then(function () {
        if (c.status !== g) throw Error(f(6, !1, name, c.status));
        return R(c, !0);
      }).then(function (t) {
        return c.parentName && delete r.parcels[c.id], t;
      }).then(function (t) {
        return p(t), t;
      }).catch(function (t) {
        throw c.status = P, v(t), t;
      });
    }
  };
  r.parcels[i] = c;
  var s = a();
  if (!s || "function" != typeof s.then) throw Error(f(7, !1));
  var p,
      v,
      w = (s = s.then(function (t) {
    if (!t) throw Error(f(8, !1));
    var n = t.name || "parcel-".concat(i);
    if (Object.prototype.hasOwnProperty.call(t, "bootstrap") && !U(t.bootstrap)) throw Error(f(9, !1, n));
    if (!U(t.mount)) throw Error(f(10, !1, n));
    if (!U(t.unmount)) throw Error(f(11, !1, n));
    if (t.update && !U(t.update)) throw Error(f(12, !1, n));
    var e = j(t, "bootstrap"),
        r = j(t, "mount"),
        u = j(t, "unmount");
    c.status = m, c.name = n, c.bootstrap = e, c.mount = r, c.unmount = u, c.timeouts = z(t.timeouts), t.update && (c.update = j(t, "update"), o.update = function (t) {
      return c.customProps = t, k(function (t) {
        return Promise.resolve().then(function () {
          if (t.status !== g) throw Error(f(32, !1, A(t)));
          return t.status = E, q(t, "update").then(function () {
            return t.status = g, t;
          }).catch(function (n) {
            throw l(n, t, P);
          });
        });
      }(c));
    });
  })).then(function () {
    return L(c, !0);
  }),
      y = w.then(function () {
    return B(c, !0);
  }),
      O = new Promise(function (t, n) {
    p = t, v = n;
  });
  return o = {
    mount: function () {
      return k(Promise.resolve().then(function () {
        if (c.status !== d) throw Error(f(13, !1, name, c.status));
        return r.parcels[i] = c, B(c);
      }));
    },
    unmount: function () {
      return k(c.unmountThisParcel());
    },
    getStatus: function () {
      return c.status;
    },
    loadPromise: k(s),
    bootstrapPromise: k(w),
    mountPromise: k(y),
    unmountPromise: k(O)
  };
}

function k(t) {
  return t.then(function () {
    return null;
  });
}

function K(t) {
  var r = A(t),
      o = "function" == typeof t.customProps ? t.customProps(r, window.location) : t.customProps;
  ("object" !== e(o) || null === o || Array.isArray(o)) && (o = {}, console.warn(f(40, !1), r, o));

  var i = _({}, o, {
    name: r,
    mountParcel: $.bind(t),
    singleSpa: n
  });

  return N(t) && (i.unmountSelf = t.unmountThisParcel), i;
}

var F = {
  bootstrap: {
    millis: 4e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  mount: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  unmount: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  unload: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  update: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  }
};

function J(t, n, e) {
  if ("number" != typeof t || t <= 0) throw Error(f(16, !1));
  F.bootstrap = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: e || 1e3
  };
}

function H(t, n, e) {
  if ("number" != typeof t || t <= 0) throw Error(f(17, !1));
  F.mount = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: e || 1e3
  };
}

function Q(t, n, e) {
  if ("number" != typeof t || t <= 0) throw Error(f(18, !1));
  F.unmount = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: e || 1e3
  };
}

function V(t, n, e) {
  if ("number" != typeof t || t <= 0) throw Error(f(19, !1));
  F.unload = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: e || 1e3
  };
}

function q(t, n) {
  var e = t.timeouts[n],
      r = e.warningMillis,
      o = S(t);
  return new Promise(function (i, u) {
    var a = !1,
        c = !1;
    t[n](K(t)).then(function (t) {
      a = !0, i(t);
    }).catch(function (t) {
      a = !0, u(t);
    }), setTimeout(function () {
      return l(1);
    }, r), setTimeout(function () {
      return l(!0);
    }, e.millis);
    var s = f(31, !1, n, o, A(t), e.millis);

    function l(t) {
      if (!a) if (!0 === t) c = !0, e.dieOnTimeout ? u(Error(s)) : console.error(s);else if (!c) {
        var n = t,
            o = n * r;
        console.warn(s), o + r < e.millis && setTimeout(function () {
          return l(n + 1);
        }, r);
      }
    }
  });
}

function z(t) {
  var n = {};

  for (var e in F) n[e] = _({}, F[e], t && t[e] || {});

  return n;
}

function X(t) {
  return Promise.resolve().then(function () {
    return t.loadPromise ? t.loadPromise : t.status !== p && t.status !== O ? t : (t.status = h, t.loadPromise = Promise.resolve().then(function () {
      var o = t.loadApp(K(t));
      if (!M(o)) throw r = !0, Error(f(33, !1, A(t)));
      return o.then(function (r) {
        var o;
        t.loadErrorTime = null, "object" !== e(n = r) && (o = 34), Object.prototype.hasOwnProperty.call(n, "bootstrap") && !U(n.bootstrap) && (o = 35), U(n.mount) || (o = 36), U(n.unmount) || (o = 37);
        var i = S(n);

        if (o) {
          var u;

          try {
            u = JSON.stringify(n);
          } catch (t) {}

          return console.error(f(o, !1, i, A(t), u), n), a(void 0, t, P), t;
        }

        return n.devtools && n.devtools.overlays && (t.devtools.overlays = _({}, t.devtools.overlays, n.devtools.overlays)), t.status = m, t.bootstrap = j(n, "bootstrap"), t.mount = j(n, "mount"), t.unmount = j(n, "unmount"), t.unload = j(n, "unload"), t.timeouts = z(n.timeouts), delete t.loadPromise, t;
      });
    }).catch(function (n) {
      var e;
      return delete t.loadPromise, r ? e = P : (e = O, t.loadErrorTime = new Date().getTime()), a(n, t, e), t;
    }));
    var n, r;
  });
}

var Y,
    Z = "undefined" != typeof window,
    tt = {
  hashchange: [],
  popstate: []
},
    nt = ["hashchange", "popstate"];

function et(t) {
  var n;
  if ("string" == typeof t) n = t;else if (this && this.href) n = this.href;else {
    if (!(t && t.currentTarget && t.currentTarget.href && t.preventDefault)) throw Error(f(14, !1));
    n = t.currentTarget.href, t.preventDefault();
  }
  var e = st(window.location.href),
      r = st(n);
  0 === n.indexOf("#") ? window.location.hash = r.hash : e.host !== r.host && r.host ? window.location.href = n : r.pathname === e.pathname && r.search === e.search ? window.location.hash = r.hash : window.history.pushState(null, null, n);
}

function rt(t) {
  var n = this;

  if (t) {
    var e = t[0].type;
    nt.indexOf(e) >= 0 && tt[e].forEach(function (e) {
      try {
        e.apply(n, t);
      } catch (t) {
        setTimeout(function () {
          throw t;
        });
      }
    });
  }
}

function ot() {
  Rt([], arguments);
}

function it(t, n) {
  return function () {
    var e = window.location.href,
        r = t.apply(this, arguments),
        o = window.location.href;
    return Y && e === o || (Gt() ? window.dispatchEvent(ut(window.history.state, n)) : Rt([])), r;
  };
}

function ut(t, n) {
  var e;

  try {
    e = new PopStateEvent("popstate", {
      state: t
    });
  } catch (n) {
    (e = document.createEvent("PopStateEvent")).initPopStateEvent("popstate", !1, !1, t);
  }

  return e.singleSpa = !0, e.singleSpaTrigger = n, e;
}

if (Z) {
  window.addEventListener("hashchange", ot), window.addEventListener("popstate", ot);
  var at = window.addEventListener,
      ct = window.removeEventListener;
  window.addEventListener = function (t, n) {
    if (!("function" == typeof n && nt.indexOf(t) >= 0) || D(tt[t], function (t) {
      return t === n;
    })) return at.apply(this, arguments);
    tt[t].push(n);
  }, window.removeEventListener = function (t, n) {
    if (!("function" == typeof n && nt.indexOf(t) >= 0)) return ct.apply(this, arguments);
    tt[t] = tt[t].filter(function (t) {
      return t !== n;
    });
  }, window.history.pushState = it(window.history.pushState, "pushState"), window.history.replaceState = it(window.history.replaceState, "replaceState"), window.singleSpaNavigate ? console.warn(f(41, !1)) : window.singleSpaNavigate = et;
}

function st(t) {
  var n = document.createElement("a");
  return n.href = t, n;
}

var ft = !1;

function lt() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.jQuery;

  if (t || window.$ && window.$.fn && window.$.fn.jquery && (t = window.$), t && !ft) {
    var n = t.fn.on,
        e = t.fn.off;
    t.fn.on = function (t, e) {
      return pt.call(this, n, window.addEventListener, t, e, arguments);
    }, t.fn.off = function (t, n) {
      return pt.call(this, e, window.removeEventListener, t, n, arguments);
    }, ft = !0;
  }
}

function pt(t, n, e, r, o) {
  return "string" != typeof e ? t.apply(this, o) : (e.split(/\s+/).forEach(function (t) {
    nt.indexOf(t) >= 0 && (n(t, r), e = e.replace(t, ""));
  }), "" === e.trim() ? this : t.apply(this, o));
}

var ht = {};

function mt(n) {
  return Promise.resolve().then(function () {
    var e = ht[A(n)];
    if (!e) return n;
    if (n.status === p) return vt(n, e), n;
    if ("UNLOADING" === n.status) return e.promise.then(function () {
      return n;
    });
    if (n.status !== d && n.status !== _singleSpa.LOAD_ERROR) return n;
    var r = n.status === _singleSpa.LOAD_ERROR ? Promise.resolve() : q(n, "unload");
    return n.status = "UNLOADING", r.then(function () {
      return vt(n, e), n;
    }).catch(function (t) {
      return function (t, n, e) {
        delete ht[A(t)], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, a(e, t, P), n.reject(e);
      }(n, e, t), n;
    });
  });
}

function vt(t, n) {
  delete ht[A(t)], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, t.status = p, n.resolve();
}

function dt(t, n, e, r) {
  ht[A(t)] = {
    app: t,
    resolve: e,
    reject: r
  }, Object.defineProperty(ht[A(t)], "promise", {
    get: n
  });
}

function wt(t) {
  return ht[t];
}

var gt = [];

function Et() {
  var t = [],
      n = [],
      e = [],
      r = [],
      o = new Date().getTime();
  return gt.forEach(function (i) {
    var u = i.status !== P && T(i);

    switch (i.status) {
      case O:
        u && o - i.loadErrorTime >= 200 && e.push(i);
        break;

      case p:
      case h:
        u && e.push(i);
        break;

      case m:
      case d:
        !u && wt(A(i)) ? t.push(i) : u && r.push(i);
        break;

      case g:
        u || n.push(i);
    }
  }), {
    appsToUnload: t,
    appsToUnmount: n,
    appsToLoad: e,
    appsToMount: r
  };
}

function yt() {
  return gt.filter(b).map(A);
}

function Ot() {
  return gt.map(A);
}

function Pt(t) {
  var n = D(gt, function (n) {
    return A(n) === t;
  });
  return n ? n.status : null;
}

function bt(t, n, r, o) {
  var i = function (t, n, r, o) {
    var i,
        u = {
      name: null,
      loadApp: null,
      activeWhen: null,
      customProps: null
    };
    return "object" === e(t) ? (function (t) {
      if (Array.isArray(t) || null === t) throw Error(f(39, !1));
      var n = ["name", "app", "activeWhen", "customProps"],
          r = Object.keys(t).reduce(function (t, e) {
        return n.indexOf(e) >= 0 ? t : t.concat(e);
      }, []);
      if (0 !== r.length) throw Error(f(38, !1, n.join(", "), r.join(", ")));
      if ("string" != typeof t.name || 0 === t.name.length) throw Error(f(20, !1));
      if ("object" !== e(t.app) && "function" != typeof t.app) throw Error(f(20, !1));

      var o = function (t) {
        return "string" == typeof t || "function" == typeof t;
      };

      if (!(o(t.activeWhen) || Array.isArray(t.activeWhen) && t.activeWhen.every(o))) throw Error(f(24, !1));
      if (!_t(t.customProps)) throw Error(f(22, !1));
    }(t), u.name = t.name, u.loadApp = t.app, u.activeWhen = t.activeWhen, u.customProps = t.customProps) : (function (t, n, e, r) {
      if ("string" != typeof t || 0 === t.length) throw Error(f(20, !1));
      if (!n) throw Error(f(23, !1));
      if ("function" != typeof e) throw Error(f(24, !1));
      if (!_t(r)) throw Error(f(22, !1));
    }(t, n, r, o), u.name = t, u.loadApp = n, u.activeWhen = r, u.customProps = o), u.loadApp = "function" != typeof (i = u.loadApp) ? function () {
      return Promise.resolve(i);
    } : i, u.customProps = function (t) {
      return t || {};
    }(u.customProps), u.activeWhen = function (t) {
      var n = Array.isArray(t) ? t : [t];
      return n = n.map(function (t) {
        return "function" == typeof t ? t : Dt(t);
      }), function (t) {
        return n.some(function (n) {
          return n(t);
        });
      };
    }(u.activeWhen), u;
  }(t, n, r, o);

  if (-1 !== Ot().indexOf(i.name)) throw Error(f(21, !1, i.name));
  gt.push(_({
    loadErrorTime: null,
    status: p,
    parcels: {},
    devtools: {
      overlays: {
        options: {},
        selectors: []
      }
    }
  }, i)), Z && (lt(), Rt());
}

function Tt() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location;
  return gt.filter(function (n) {
    return n.activeWhen(t);
  }).map(A);
}

function At(t) {
  if (0 === gt.filter(function (n) {
    return A(n) === t;
  }).length) throw Error(f(25, !1, t));
  return Nt(t).then(function () {
    var n = gt.map(A).indexOf(t);
    gt.splice(n, 1);
  });
}

function Nt(t) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    waitForUnmount: !1
  };
  if ("string" != typeof t) throw Error(f(26, !1));
  var e = D(gt, function (n) {
    return A(n) === t;
  });
  if (!e) throw Error(f(27, !1, t));
  var r,
      o = wt(A(e));

  if (n && n.waitForUnmount) {
    if (o) return o.promise;
    var i = new Promise(function (t, n) {
      dt(e, function () {
        return i;
      }, t, n);
    });
    return i;
  }

  return o ? (r = o.promise, St(e, o.resolve, o.reject)) : r = new Promise(function (t, n) {
    dt(e, function () {
      return r;
    }, t, n), St(e, t, n);
  }), r;
}

function St(t, n, e) {
  R(t).then(mt).then(function () {
    n(), setTimeout(function () {
      Rt();
    });
  }).catch(e);
}

function _t(t) {
  return !t || "function" == typeof t || "object" === e(t) && null !== t && !Array.isArray(t);
}

function Dt(t, n) {
  var e = function (t, n) {
    var e = 0,
        r = !1,
        o = "^";
    "/" !== t[0] && (t = "/" + t);

    for (var i = 0; i < t.length; i++) {
      var u = t[i];
      (!r && ":" === u || r && "/" === u) && a(i);
    }

    return a(t.length), new RegExp(o, "i");

    function a(i) {
      var u = t.slice(e, i).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
      if (o += r ? "[^/]+/?" : u, i === t.length) if (r) n && (o += "$");else {
        var a = n ? "" : ".*";
        o = "/" === o.charAt(o.length - 1) ? "".concat(o).concat(a, "$") : "".concat(o, "(/").concat(a, ")?(#.*)?$");
      }
      r = !r, e = i;
    }
  }(t, n);

  return function (t) {
    var n = t.href.replace(t.origin, "").replace(t.search, "").split("?")[0];
    return e.test(n);
  };
}

var Ut = !1,
    jt = [],
    Mt = Z && window.location.href;

function Lt() {
  return Rt();
}

function Rt() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      n = arguments.length > 1 ? arguments[1] : void 0;
  if (Ut) return new Promise(function (t, e) {
    jt.push({
      resolve: t,
      reject: e,
      eventArguments: n
    });
  });
  var e,
      o = Et(),
      u = o.appsToUnload,
      a = o.appsToUnmount,
      c = o.appsToLoad,
      s = o.appsToMount,
      f = !1,
      l = Mt,
      h = Mt = window.location.href;
  return Gt() ? (Ut = !0, e = u.concat(c, a, s), w()) : (e = c, v());

  function m() {
    f = !0;
  }

  function v() {
    return Promise.resolve().then(function () {
      var t = c.map(X);
      return Promise.all(t).then(y).then(function () {
        return [];
      }).catch(function (t) {
        throw y(), t;
      });
    });
  }

  function w() {
    return Promise.resolve().then(function () {
      if (window.dispatchEvent(new i(0 === e.length ? "single-spa:before-no-app-change" : "single-spa:before-app-change", O(!0))), window.dispatchEvent(new i("single-spa:before-routing-event", O(!0, {
        cancelNavigation: m
      }))), f) return window.dispatchEvent(new i("single-spa:before-mount-routing-event", O(!0))), E(), void et(l);
      var n = u.map(mt),
          r = a.map(R).map(function (t) {
        return t.then(mt);
      }).concat(n),
          o = Promise.all(r);
      o.then(function () {
        window.dispatchEvent(new i("single-spa:before-mount-routing-event", O(!0)));
      });
      var p = c.map(function (t) {
        return X(t).then(function (t) {
          return It(t, o);
        });
      }),
          h = s.filter(function (t) {
        return c.indexOf(t) < 0;
      }).map(function (t) {
        return It(t, o);
      });
      return o.catch(function (t) {
        throw y(), t;
      }).then(function () {
        return y(), Promise.all(p.concat(h)).catch(function (n) {
          throw t.forEach(function (t) {
            return t.reject(n);
          }), n;
        }).then(E);
      });
    });
  }

  function E() {
    var n = yt();
    t.forEach(function (t) {
      return t.resolve(n);
    });

    try {
      var r = 0 === e.length ? "single-spa:no-app-change" : "single-spa:app-change";
      window.dispatchEvent(new i(r, O())), window.dispatchEvent(new i("single-spa:routing-event", O()));
    } catch (t) {
      setTimeout(function () {
        throw t;
      });
    }

    if (Ut = !1, jt.length > 0) {
      var o = jt;
      jt = [], Rt(o);
    }

    return n;
  }

  function y() {
    t.forEach(function (t) {
      rt(t.eventArguments);
    }), rt(n);
  }

  function O() {
    var t,
        o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        i = arguments.length > 1 ? arguments[1] : void 0,
        m = {},
        v = (r(t = {}, g, []), r(t, d, []), r(t, p, []), r(t, P, []), t);
    o ? (c.concat(s).forEach(function (t, n) {
      E(t, g);
    }), u.forEach(function (t) {
      E(t, p);
    }), a.forEach(function (t) {
      E(t, d);
    })) : e.forEach(function (t) {
      E(t);
    });
    var w = {
      detail: {
        newAppStatuses: m,
        appsByNewStatus: v,
        totalAppChanges: e.length,
        originalEvent: null == n ? void 0 : n[0],
        oldUrl: l,
        newUrl: h,
        navigationIsCanceled: f
      }
    };
    return i && _(w.detail, i), w;

    function E(t, n) {
      var e = A(t);
      n = n || Pt(e), m[e] = n, (v[n] = v[n] || []).push(e);
    }
  }
}

function It(t, n) {
  return T(t) ? L(t).then(function (t) {
    return n.then(function () {
      return T(t) ? B(t) : t;
    });
  }) : n.then(function () {
    return t;
  });
}

var xt = !1;

function Bt(t) {
  var n;
  xt = !0, t && t.urlRerouteOnly && (n = t.urlRerouteOnly, Y = n), Z && Rt();
}

function Gt() {
  return xt;
}

Z && setTimeout(function () {
  xt || console.warn(f(1, !1));
}, 5e3);
var Ct = {
  getRawAppData: function () {
    return [].concat(gt);
  },
  reroute: Rt,
  NOT_LOADED: p,
  toLoadPromise: X,
  toBootstrapPromise: L,
  unregisterApplication: At
};
Z && window.__SINGLE_SPA_DEVTOOLS__ && (window.__SINGLE_SPA_DEVTOOLS__.exposedMethods = Ct);
},{"single-spa":"node_modules/single-spa/lib/esm/single-spa.min.js"}],"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"single-spa-config.js":[function(require,module,exports) {
"use strict";

var singleSpa = _interopRequireWildcard(require("single-spa"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var name = 'app1';
/* loading 是一个返回 promise 的函数，用于 加载/解析 应用代码。
 * 它的目的是为延迟加载提供便利 —— single-spa 只有在需要时才会下载应用程序的代码。
 * 在这个示例中，在 webpack 中支持 import ()并返回 Promise，但是 single-spa 可以使用任何返回 Promise 的加载函数。
 */

var app = function app() {
  return require("_bundle_loader")(require.resolve('./app1/app1.js'));
};
/* Single-spa 配置顶级路由，以确定哪个应用程序对于指定 url 是活动的。
 * 您可以以任何您喜欢的方式实现此路由。
 * 一种有用的约定是在url前面加上活动应用程序的名称，以使顶层路由保持简单。
 */


var activeWhen = '/app1';
singleSpa.registerApplication({
  name: name,
  app: app,
  activeWhen: activeWhen
});
singleSpa.start();
},{"single-spa":"node_modules/single-spa/lib/esm/single-spa.min.js","_bundle_loader":"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-loader.js","./app1/app1.js":[["app1.01002397.js","app1/app1.js"],"app1.01002397.js.map","app1/app1.js"]}],"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63464" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0,"single-spa-config.js"], null)
//# sourceMappingURL=/single-spa-config.c2901611.js.map