"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).noUiSlider = {});
}(void 0, function (ot) {
  "use strict";

  function n(t) {
    return "object" == _typeof(t) && "function" == typeof t.to;
  }
  function st(t) {
    t.parentElement.removeChild(t);
  }
  function at(t) {
    return null != t;
  }
  function lt(t) {
    t.preventDefault();
  }
  function i(t) {
    return "number" == typeof t && !isNaN(t) && isFinite(t);
  }
  function ut(t, e, r) {
    0 < r && (ft(t, e), setTimeout(function () {
      dt(t, e);
    }, r));
  }
  function ct(t) {
    return Math.max(Math.min(t, 100), 0);
  }
  function pt(t) {
    return Array.isArray(t) ? t : [t];
  }
  function e(t) {
    t = (t = String(t)).split(".");
    return 1 < t.length ? t[1].length : 0;
  }
  function ft(t, e) {
    t.classList && !/\s/.test(e) ? t.classList.add(e) : t.className += " " + e;
  }
  function dt(t, e) {
    t.classList && !/\s/.test(e) ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
  }
  function ht(t) {
    var e = void 0 !== window.pageXOffset,
      r = "CSS1Compat" === (t.compatMode || "");
    return {
      x: e ? window.pageXOffset : (r ? t.documentElement : t.body).scrollLeft,
      y: e ? window.pageYOffset : (r ? t.documentElement : t.body).scrollTop
    };
  }
  function s(t, e) {
    return 100 / (e - t);
  }
  function a(t, e, r) {
    return 100 * e / (t[r + 1] - t[r]);
  }
  function l(t, e) {
    for (var r = 1; t >= e[r];) r += 1;
    return r;
  }
  function r(t, e, r) {
    if (r >= t.slice(-1)[0]) return 100;
    var n = l(r, t),
      i = t[n - 1],
      o = t[n],
      t = e[n - 1],
      n = e[n];
    return t + (r = r, a(o = [i, o], o[0] < 0 ? r + Math.abs(o[0]) : r - o[0], 0) / s(t, n));
  }
  function o(t, e, r, n) {
    if (100 === n) return n;
    var i = l(n, t),
      o = t[i - 1],
      s = t[i];
    return r ? (s - o) / 2 < n - o ? s : o : e[i - 1] ? t[i - 1] + (t = n - t[i - 1], i = e[i - 1], Math.round(t / i) * i) : n;
  }
  ot.PipsMode = void 0, (H = ot.PipsMode || (ot.PipsMode = {})).Range = "range", H.Steps = "steps", H.Positions = "positions", H.Count = "count", H.Values = "values", ot.PipsType = void 0, (H = ot.PipsType || (ot.PipsType = {}))[H.None = -1] = "None", H[H.NoValue = 0] = "NoValue", H[H.LargeValue = 1] = "LargeValue", H[H.SmallValue = 2] = "SmallValue";
  var u = (t.prototype.getDistance = function (t) {
    for (var e = [], r = 0; r < this.xNumSteps.length - 1; r++) e[r] = a(this.xVal, t, r);
    return e;
  }, t.prototype.getAbsoluteDistance = function (t, e, r) {
    var n = 0;
    if (t < this.xPct[this.xPct.length - 1]) for (; t > this.xPct[n + 1];) n++;else t === this.xPct[this.xPct.length - 1] && (n = this.xPct.length - 2);
    r || t !== this.xPct[n + 1] || n++;
    for (var i, o = 1, s = (e = null === e ? [] : e)[n], a = 0, l = 0, u = 0, c = r ? (t - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n]) : (this.xPct[n + 1] - t) / (this.xPct[n + 1] - this.xPct[n]); 0 < s;) i = this.xPct[n + 1 + u] - this.xPct[n + u], 100 < e[n + u] * o + 100 - 100 * c ? (a = i * c, o = (s - 100 * c) / e[n + u], c = 1) : (a = e[n + u] * i / 100 * o, o = 0), r ? (l -= a, 1 <= this.xPct.length + u && u--) : (l += a, 1 <= this.xPct.length - u && u++), s = e[n + u] * o;
    return t + l;
  }, t.prototype.toStepping = function (t) {
    return t = r(this.xVal, this.xPct, t);
  }, t.prototype.fromStepping = function (t) {
    return function (t, e, r) {
      if (100 <= r) return t.slice(-1)[0];
      var n = l(r, e),
        i = t[n - 1],
        o = t[n],
        t = e[n - 1],
        n = e[n];
      return (r - t) * s(t, n) * ((o = [i, o])[1] - o[0]) / 100 + o[0];
    }(this.xVal, this.xPct, t);
  }, t.prototype.getStep = function (t) {
    return t = o(this.xPct, this.xSteps, this.snap, t);
  }, t.prototype.getDefaultStep = function (t, e, r) {
    var n = l(t, this.xPct);
    return (100 === t || e && t === this.xPct[n - 1]) && (n = Math.max(n - 1, 1)), (this.xVal[n] - this.xVal[n - 1]) / r;
  }, t.prototype.getNearbySteps = function (t) {
    t = l(t, this.xPct);
    return {
      stepBefore: {
        startValue: this.xVal[t - 2],
        step: this.xNumSteps[t - 2],
        highestStep: this.xHighestCompleteStep[t - 2]
      },
      thisStep: {
        startValue: this.xVal[t - 1],
        step: this.xNumSteps[t - 1],
        highestStep: this.xHighestCompleteStep[t - 1]
      },
      stepAfter: {
        startValue: this.xVal[t],
        step: this.xNumSteps[t],
        highestStep: this.xHighestCompleteStep[t]
      }
    };
  }, t.prototype.countStepDecimals = function () {
    var t = this.xNumSteps.map(e);
    return Math.max.apply(null, t);
  }, t.prototype.hasNoSize = function () {
    return this.xVal[0] === this.xVal[this.xVal.length - 1];
  }, t.prototype.convert = function (t) {
    return this.getStep(this.toStepping(t));
  }, t.prototype.handleEntryPoint = function (t, e) {
    t = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t);
    if (!i(t) || !i(e[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
    this.xPct.push(t), this.xVal.push(e[0]);
    e = Number(e[1]);
    t ? this.xSteps.push(!isNaN(e) && e) : isNaN(e) || (this.xSteps[0] = e), this.xHighestCompleteStep.push(0);
  }, t.prototype.handleStepPoint = function (t, e) {
    e && (this.xVal[t] !== this.xVal[t + 1] ? (this.xSteps[t] = a([this.xVal[t], this.xVal[t + 1]], e, 0) / s(this.xPct[t], this.xPct[t + 1]), e = (this.xVal[t + 1] - this.xVal[t]) / this.xNumSteps[t], e = Math.ceil(Number(e.toFixed(3)) - 1), e = this.xVal[t] + this.xNumSteps[t] * e, this.xHighestCompleteStep[t] = e) : this.xSteps[t] = this.xHighestCompleteStep[t] = this.xVal[t]);
  }, t);
  function t(e, t, r) {
    var n;
    this.xPct = [], this.xVal = [], this.xSteps = [], this.xNumSteps = [], this.xHighestCompleteStep = [], this.xSteps = [r || !1], this.xNumSteps = [!1], this.snap = t;
    var i = [];
    for (Object.keys(e).forEach(function (t) {
      i.push([pt(e[t]), t]);
    }), i.sort(function (t, e) {
      return t[0][0] - e[0][0];
    }), n = 0; n < i.length; n++) this.handleEntryPoint(i[n][1], i[n][0]);
    for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) this.handleStepPoint(n, this.xNumSteps[n]);
  }
  var c = {
      to: function to(t) {
        return void 0 === t ? "" : t.toFixed(2);
      },
      from: Number
    },
    p = {
      target: "target",
      base: "base",
      origin: "origin",
      handle: "handle",
      handleLower: "handle-lower",
      handleUpper: "handle-upper",
      touchArea: "touch-area",
      horizontal: "horizontal",
      vertical: "vertical",
      background: "background",
      connect: "connect",
      connects: "connects",
      ltr: "ltr",
      rtl: "rtl",
      textDirectionLtr: "txt-dir-ltr",
      textDirectionRtl: "txt-dir-rtl",
      draggable: "draggable",
      drag: "state-drag",
      tap: "state-tap",
      active: "active",
      tooltip: "tooltip",
      pips: "pips",
      pipsHorizontal: "pips-horizontal",
      pipsVertical: "pips-vertical",
      marker: "marker",
      markerHorizontal: "marker-horizontal",
      markerVertical: "marker-vertical",
      markerNormal: "marker-normal",
      markerLarge: "marker-large",
      markerSub: "marker-sub",
      value: "value",
      valueHorizontal: "value-horizontal",
      valueVertical: "value-vertical",
      valueNormal: "value-normal",
      valueLarge: "value-large",
      valueSub: "value-sub"
    },
    mt = {
      tooltips: ".__tooltips",
      aria: ".__aria"
    };
  function f(t, e) {
    if (!i(e)) throw new Error("noUiSlider: 'step' is not numeric.");
    t.singleStep = e;
  }
  function d(t, e) {
    if (!i(e)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
    t.keyboardPageMultiplier = e;
  }
  function h(t, e) {
    if (!i(e)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
    t.keyboardMultiplier = e;
  }
  function m(t, e) {
    if (!i(e)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
    t.keyboardDefaultStep = e;
  }
  function g(t, e) {
    if ("object" != _typeof(e) || Array.isArray(e)) throw new Error("noUiSlider: 'range' is not an object.");
    if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
    t.spectrum = new u(e, t.snap || !1, t.singleStep);
  }
  function v(t, e) {
    if (e = pt(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider: 'start' option is incorrect.");
    t.handles = e.length, t.start = e;
  }
  function b(t, e) {
    if ("boolean" != typeof e) throw new Error("noUiSlider: 'snap' option must be a boolean.");
    t.snap = e;
  }
  function S(t, e) {
    if ("boolean" != typeof e) throw new Error("noUiSlider: 'animate' option must be a boolean.");
    t.animate = e;
  }
  function x(t, e) {
    if ("number" != typeof e) throw new Error("noUiSlider: 'animationDuration' option must be a number.");
    t.animationDuration = e;
  }
  function y(t, e) {
    var r,
      n = [!1];
    if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) {
      for (r = 1; r < t.handles; r++) n.push(e);
      n.push(!1);
    } else {
      if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
      n = e;
    }
    t.connect = n;
  }
  function w(t, e) {
    switch (e) {
      case "horizontal":
        t.ort = 0;
        break;
      case "vertical":
        t.ort = 1;
        break;
      default:
        throw new Error("noUiSlider: 'orientation' option is invalid.");
    }
  }
  function E(t, e) {
    if (!i(e)) throw new Error("noUiSlider: 'margin' option must be numeric.");
    0 !== e && (t.margin = t.spectrum.getDistance(e));
  }
  function P(t, e) {
    if (!i(e)) throw new Error("noUiSlider: 'limit' option must be numeric.");
    if (t.limit = t.spectrum.getDistance(e), !t.limit || t.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
  }
  function C(t, e) {
    var r;
    if (!i(e) && !Array.isArray(e)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    if (Array.isArray(e) && 2 !== e.length && !i(e[0]) && !i(e[1])) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    if (0 !== e) {
      for (Array.isArray(e) || (e = [e, e]), t.padding = [t.spectrum.getDistance(e[0]), t.spectrum.getDistance(e[1])], r = 0; r < t.spectrum.xNumSteps.length - 1; r++) if (t.padding[0][r] < 0 || t.padding[1][r] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
      var n = e[0] + e[1],
        e = t.spectrum.xVal[0];
      if (1 < n / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - e)) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
    }
  }
  function N(t, e) {
    switch (e) {
      case "ltr":
        t.dir = 0;
        break;
      case "rtl":
        t.dir = 1;
        break;
      default:
        throw new Error("noUiSlider: 'direction' option was not recognized.");
    }
  }
  function V(t, e) {
    if ("string" != typeof e) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
    var r = 0 <= e.indexOf("tap"),
      n = 0 <= e.indexOf("drag"),
      i = 0 <= e.indexOf("fixed"),
      o = 0 <= e.indexOf("snap"),
      s = 0 <= e.indexOf("hover"),
      a = 0 <= e.indexOf("unconstrained"),
      l = 0 <= e.indexOf("drag-all"),
      e = 0 <= e.indexOf("smooth-steps");
    if (i) {
      if (2 !== t.handles) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
      E(t, t.start[1] - t.start[0]);
    }
    if (a && (t.margin || t.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
    t.events = {
      tap: r || o,
      drag: n,
      dragAll: l,
      smoothSteps: e,
      fixed: i,
      snap: o,
      hover: s,
      unconstrained: a
    };
  }
  function A(t, e) {
    if (!1 !== e) if (!0 === e || n(e)) {
      t.tooltips = [];
      for (var r = 0; r < t.handles; r++) t.tooltips.push(e);
    } else {
      if ((e = pt(e)).length !== t.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
      e.forEach(function (t) {
        if ("boolean" != typeof t && !n(t)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
      }), t.tooltips = e;
    }
  }
  function k(t, e) {
    if (e.length !== t.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
    t.handleAttributes = e;
  }
  function M(t, e) {
    if (!n(e)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
    t.ariaFormat = e;
  }
  function U(t, e) {
    if (!n(r = e) || "function" != typeof r.from) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    var r;
    t.format = e;
  }
  function D(t, e) {
    if ("boolean" != typeof e) throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
    t.keyboardSupport = e;
  }
  function O(t, e) {
    t.documentElement = e;
  }
  function L(t, e) {
    if ("string" != typeof e && !1 !== e) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
    t.cssPrefix = e;
  }
  function T(e, r) {
    if ("object" != _typeof(r)) throw new Error("noUiSlider: 'cssClasses' must be an object.");
    "string" == typeof e.cssPrefix ? (e.cssClasses = {}, Object.keys(r).forEach(function (t) {
      e.cssClasses[t] = e.cssPrefix + r[t];
    })) : e.cssClasses = r;
  }
  function gt(e) {
    var r = {
        margin: null,
        limit: null,
        padding: null,
        animate: !0,
        animationDuration: 300,
        ariaFormat: c,
        format: c
      },
      n = {
        step: {
          r: !1,
          t: f
        },
        keyboardPageMultiplier: {
          r: !1,
          t: d
        },
        keyboardMultiplier: {
          r: !1,
          t: h
        },
        keyboardDefaultStep: {
          r: !1,
          t: m
        },
        start: {
          r: !0,
          t: v
        },
        connect: {
          r: !0,
          t: y
        },
        direction: {
          r: !0,
          t: N
        },
        snap: {
          r: !1,
          t: b
        },
        animate: {
          r: !1,
          t: S
        },
        animationDuration: {
          r: !1,
          t: x
        },
        range: {
          r: !0,
          t: g
        },
        orientation: {
          r: !1,
          t: w
        },
        margin: {
          r: !1,
          t: E
        },
        limit: {
          r: !1,
          t: P
        },
        padding: {
          r: !1,
          t: C
        },
        behaviour: {
          r: !0,
          t: V
        },
        ariaFormat: {
          r: !1,
          t: M
        },
        format: {
          r: !1,
          t: U
        },
        tooltips: {
          r: !1,
          t: A
        },
        keyboardSupport: {
          r: !0,
          t: D
        },
        documentElement: {
          r: !1,
          t: O
        },
        cssPrefix: {
          r: !0,
          t: L
        },
        cssClasses: {
          r: !0,
          t: T
        },
        handleAttributes: {
          r: !1,
          t: k
        }
      },
      i = {
        connect: !1,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal",
        keyboardSupport: !0,
        cssPrefix: "noUi-",
        cssClasses: p,
        keyboardPageMultiplier: 5,
        keyboardMultiplier: 1,
        keyboardDefaultStep: 10
      };
    e.format && !e.ariaFormat && (e.ariaFormat = e.format), Object.keys(n).forEach(function (t) {
      if (at(e[t]) || void 0 !== i[t]) n[t].t(r, (at(e[t]) ? e : i)[t]);else if (n[t].r) throw new Error("noUiSlider: '" + t + "' is required.");
    }), r.pips = e.pips;
    var t = document.createElement("div"),
      o = void 0 !== t.style.msTransform,
      t = void 0 !== t.style.transform;
    r.transformRule = t ? "transform" : o ? "msTransform" : "webkitTransform";
    return r.style = [["left", "top"], ["right", "bottom"]][r.dir][r.ort], r;
  }
  function j(t, f, o) {
    var i,
      l,
      a,
      n,
      s,
      u,
      c = window.navigator.pointerEnabled ? {
        start: "pointerdown",
        move: "pointermove",
        end: "pointerup"
      } : window.navigator.msPointerEnabled ? {
        start: "MSPointerDown",
        move: "MSPointerMove",
        end: "MSPointerUp"
      } : {
        start: "mousedown touchstart",
        move: "mousemove touchmove",
        end: "mouseup touchend"
      },
      p = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function () {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function get() {
              t = !0;
            }
          });
          window.addEventListener("test", null, e);
        } catch (t) {}
        return t;
      }(),
      d = t,
      S = f.spectrum,
      h = [],
      m = [],
      g = [],
      v = 0,
      b = {},
      x = t.ownerDocument,
      y = f.documentElement || x.documentElement,
      w = x.body,
      E = "rtl" === x.dir || 1 === f.ort ? 0 : 100;
    function P(t, e) {
      var r = x.createElement("div");
      return e && ft(r, e), t.appendChild(r), r;
    }
    function C(t, e) {
      var r,
        t = P(t, f.cssClasses.origin),
        n = P(t, f.cssClasses.handle);
      return P(n, f.cssClasses.touchArea), n.setAttribute("data-handle", String(e)), f.keyboardSupport && (n.setAttribute("tabindex", "0"), n.addEventListener("keydown", function (t) {
        return function (t, e) {
          if (V() || A(e)) return !1;
          var r = ["Left", "Right"],
            n = ["Down", "Up"],
            i = ["PageDown", "PageUp"],
            o = ["Home", "End"];
          f.dir && !f.ort ? r.reverse() : f.ort && !f.dir && (n.reverse(), i.reverse());
          var s = t.key.replace("Arrow", ""),
            a = s === i[0],
            l = s === i[1],
            i = s === n[0] || s === r[0] || a,
            n = s === n[1] || s === r[1] || l,
            r = s === o[0],
            o = s === o[1];
          if (!(i || n || r || o)) return !0;
          if (t.preventDefault(), n || i) {
            var u = i ? 0 : 1,
              u = nt(e)[u];
            if (null === u) return !1;
            !1 === u && (u = S.getDefaultStep(m[e], i, f.keyboardDefaultStep)), u *= l || a ? f.keyboardPageMultiplier : f.keyboardMultiplier, u = Math.max(u, 1e-7), u *= i ? -1 : 1, u = h[e] + u;
          } else u = o ? f.spectrum.xVal[f.spectrum.xVal.length - 1] : f.spectrum.xVal[0];
          return Q(e, S.toStepping(u), !0, !0), I("slide", e), I("update", e), I("change", e), I("set", e), !1;
        }(t, e);
      })), void 0 !== f.handleAttributes && (r = f.handleAttributes[e], Object.keys(r).forEach(function (t) {
        n.setAttribute(t, r[t]);
      })), n.setAttribute("role", "slider"), n.setAttribute("aria-orientation", f.ort ? "vertical" : "horizontal"), 0 === e ? ft(n, f.cssClasses.handleLower) : e === f.handles - 1 && ft(n, f.cssClasses.handleUpper), t.handle = n, t;
    }
    function N(t, e) {
      return !!e && P(t, f.cssClasses.connect);
    }
    function e(t, e) {
      return !(!f.tooltips || !f.tooltips[e]) && P(t.firstChild, f.cssClasses.tooltip);
    }
    function V() {
      return d.hasAttribute("disabled");
    }
    function A(t) {
      return l[t].hasAttribute("disabled");
    }
    function k() {
      s && (Y("update" + mt.tooltips), s.forEach(function (t) {
        t && st(t);
      }), s = null);
    }
    function M() {
      k(), s = l.map(e), X("update" + mt.tooltips, function (t, e, r) {
        s && f.tooltips && !1 !== s[e] && (t = t[e], !0 !== f.tooltips[e] && (t = f.tooltips[e].to(r[e])), s[e].innerHTML = t);
      });
    }
    function U(t, e) {
      return t.map(function (t) {
        return S.fromStepping(e ? S.getStep(t) : t);
      });
    }
    function D(d) {
      var h = function (t) {
          if (t.mode === ot.PipsMode.Range || t.mode === ot.PipsMode.Steps) return S.xVal;
          if (t.mode !== ot.PipsMode.Count) return t.mode === ot.PipsMode.Positions ? U(t.values, t.stepped) : t.mode === ot.PipsMode.Values ? t.stepped ? t.values.map(function (t) {
            return S.fromStepping(S.getStep(S.toStepping(t)));
          }) : t.values : [];
          if (t.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
          for (var e = t.values - 1, r = 100 / e, n = []; e--;) n[e] = e * r;
          return n.push(100), U(n, t.stepped);
        }(d),
        m = {},
        t = S.xVal[0],
        e = S.xVal[S.xVal.length - 1],
        g = !1,
        v = !1,
        b = 0;
      return (h = h.slice().sort(function (t, e) {
        return t - e;
      }).filter(function (t) {
        return !this[t] && (this[t] = !0);
      }, {}))[0] !== t && (h.unshift(t), g = !0), h[h.length - 1] !== e && (h.push(e), v = !0), h.forEach(function (t, e) {
        var r,
          n,
          i,
          o,
          s,
          a,
          l,
          u,
          t = t,
          c = h[e + 1],
          p = d.mode === ot.PipsMode.Steps,
          f = (f = p ? S.xNumSteps[e] : f) || c - t;
        for (void 0 === c && (c = t), f = Math.max(f, 1e-7), r = t; r <= c; r = Number((r + f).toFixed(7))) {
          for (a = (o = (i = S.toStepping(r)) - b) / (d.density || 1), u = o / (l = Math.round(a)), n = 1; n <= l; n += 1) m[(s = b + n * u).toFixed(5)] = [S.fromStepping(s), 0];
          a = -1 < h.indexOf(r) ? ot.PipsType.LargeValue : p ? ot.PipsType.SmallValue : ot.PipsType.NoValue, !e && g && r !== c && (a = 0), r === c && v || (m[i.toFixed(5)] = [r, a]), b = i;
        }
      }), m;
    }
    function O(i, o, s) {
      var t,
        a = x.createElement("div"),
        n = ((t = {})[ot.PipsType.None] = "", t[ot.PipsType.NoValue] = f.cssClasses.valueNormal, t[ot.PipsType.LargeValue] = f.cssClasses.valueLarge, t[ot.PipsType.SmallValue] = f.cssClasses.valueSub, t),
        l = ((t = {})[ot.PipsType.None] = "", t[ot.PipsType.NoValue] = f.cssClasses.markerNormal, t[ot.PipsType.LargeValue] = f.cssClasses.markerLarge, t[ot.PipsType.SmallValue] = f.cssClasses.markerSub, t),
        u = [f.cssClasses.valueHorizontal, f.cssClasses.valueVertical],
        c = [f.cssClasses.markerHorizontal, f.cssClasses.markerVertical];
      function p(t, e) {
        var r = e === f.cssClasses.value;
        return e + " " + (r ? u : c)[f.ort] + " " + (r ? n : l)[t];
      }
      return ft(a, f.cssClasses.pips), ft(a, 0 === f.ort ? f.cssClasses.pipsHorizontal : f.cssClasses.pipsVertical), Object.keys(i).forEach(function (t) {
        var e, r, n;
        r = i[e = t][0], n = i[t][1], (n = o ? o(r, n) : n) !== ot.PipsType.None && ((t = P(a, !1)).className = p(n, f.cssClasses.marker), t.style[f.style] = e + "%", n > ot.PipsType.NoValue && ((t = P(a, !1)).className = p(n, f.cssClasses.value), t.setAttribute("data-value", String(r)), t.style[f.style] = e + "%", t.innerHTML = String(s.to(r))));
      }), a;
    }
    function L() {
      n && (st(n), n = null);
    }
    function T(t) {
      L();
      var e = D(t),
        r = t.filter,
        t = t.format || {
          to: function to(t) {
            return String(Math.round(t));
          }
        };
      return n = d.appendChild(O(e, r, t));
    }
    function j() {
      var t = i.getBoundingClientRect(),
        e = "offset" + ["Width", "Height"][f.ort];
      return 0 === f.ort ? t.width || i[e] : t.height || i[e];
    }
    function z(n, i, o, s) {
      function e(t) {
        var e,
          r = function (e, t, r) {
            var n = 0 === e.type.indexOf("touch"),
              i = 0 === e.type.indexOf("mouse"),
              o = 0 === e.type.indexOf("pointer"),
              s = 0,
              a = 0;
            0 === e.type.indexOf("MSPointer") && (o = !0);
            if ("mousedown" === e.type && !e.buttons && !e.touches) return !1;
            if (n) {
              var l = function l(t) {
                t = t.target;
                return t === r || r.contains(t) || e.composed && e.composedPath().shift() === r;
              };
              if ("touchstart" === e.type) {
                n = Array.prototype.filter.call(e.touches, l);
                if (1 < n.length) return !1;
                s = n[0].pageX, a = n[0].pageY;
              } else {
                l = Array.prototype.find.call(e.changedTouches, l);
                if (!l) return !1;
                s = l.pageX, a = l.pageY;
              }
            }
            t = t || ht(x), (i || o) && (s = e.clientX + t.x, a = e.clientY + t.y);
            return e.pageOffset = t, e.points = [s, a], e.cursor = i || o, e;
          }(t, s.pageOffset, s.target || i);
        return !!r && !(V() && !s.doNotReject) && (e = d, t = f.cssClasses.tap, !((e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className)) && !s.doNotReject) && !(n === c.start && void 0 !== r.buttons && 1 < r.buttons) && (!s.hover || !r.buttons) && (p || r.preventDefault(), r.calcPoint = r.points[f.ort], void o(r, s)));
      }
      var r = [];
      return n.split(" ").forEach(function (t) {
        i.addEventListener(t, e, !!p && {
          passive: !0
        }), r.push([t, e]);
      }), r;
    }
    function H(t) {
      var e,
        r,
        n = ct(n = 100 * (t - (n = i, e = f.ort, r = n.getBoundingClientRect(), n = (t = n.ownerDocument).documentElement, t = ht(t), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (t.x = 0), e ? r.top + t.y - n.clientTop : r.left + t.x - n.clientLeft)) / j());
      return f.dir ? 100 - n : n;
    }
    function F(t, e) {
      "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && _(t, e);
    }
    function R(t, e) {
      if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return _(t, e);
      t = (f.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
      G(0 < t, 100 * t / e.baseSize, e.locations, e.handleNumbers, e.connect);
    }
    function _(t, e) {
      e.handle && (dt(e.handle, f.cssClasses.active), --v), e.listeners.forEach(function (t) {
        y.removeEventListener(t[0], t[1]);
      }), 0 === v && (dt(d, f.cssClasses.drag), K(), t.cursor && (w.style.cursor = "", w.removeEventListener("selectstart", lt))), f.events.smoothSteps && (e.handleNumbers.forEach(function (t) {
        Q(t, m[t], !0, !0, !1, !1);
      }), e.handleNumbers.forEach(function (t) {
        I("update", t);
      })), e.handleNumbers.forEach(function (t) {
        I("change", t), I("set", t), I("end", t);
      });
    }
    function B(t, e) {
      var r, n, i, o;
      e.handleNumbers.some(A) || (1 === e.handleNumbers.length && (o = l[e.handleNumbers[0]].children[0], v += 1, ft(o, f.cssClasses.active)), t.stopPropagation(), n = z(c.move, y, R, {
        target: t.target,
        handle: o,
        connect: e.connect,
        listeners: r = [],
        startCalcPoint: t.calcPoint,
        baseSize: j(),
        pageOffset: t.pageOffset,
        handleNumbers: e.handleNumbers,
        buttonsProperty: t.buttons,
        locations: m.slice()
      }), i = z(c.end, y, _, {
        target: t.target,
        handle: o,
        listeners: r,
        doNotReject: !0,
        handleNumbers: e.handleNumbers
      }), o = z("mouseout", y, F, {
        target: t.target,
        handle: o,
        listeners: r,
        doNotReject: !0,
        handleNumbers: e.handleNumbers
      }), r.push.apply(r, n.concat(i, o)), t.cursor && (w.style.cursor = getComputedStyle(t.target).cursor, 1 < l.length && ft(d, f.cssClasses.drag), w.addEventListener("selectstart", lt, !1)), e.handleNumbers.forEach(function (t) {
        I("start", t);
      }));
    }
    function r(t) {
      t.stopPropagation();
      var i,
        o,
        s,
        e = H(t.calcPoint),
        r = (i = e, s = !(o = 100), l.forEach(function (t, e) {
          var r, n;
          A(e) || (r = m[e], ((n = Math.abs(r - i)) < o || n <= o && r < i || 100 === n && 100 === o) && (s = e, o = n));
        }), s);
      !1 !== r && (f.events.snap || ut(d, f.cssClasses.tap, f.animationDuration), Q(r, e, !0, !0), K(), I("slide", r, !0), I("update", r, !0), f.events.snap ? B(t, {
        handleNumbers: [r]
      }) : (I("change", r, !0), I("set", r, !0)));
    }
    function q(t) {
      var t = H(t.calcPoint),
        t = S.getStep(t),
        e = S.fromStepping(t);
      Object.keys(b).forEach(function (t) {
        "hover" === t.split(".")[0] && b[t].forEach(function (t) {
          t.call(it, e);
        });
      });
    }
    function X(t, e) {
      b[t] = b[t] || [], b[t].push(e), "update" === t.split(".")[0] && l.forEach(function (t, e) {
        I("update", e);
      });
    }
    function Y(t) {
      var n = t && t.split(".")[0],
        i = n ? t.substring(n.length) : t;
      Object.keys(b).forEach(function (t) {
        var e = t.split(".")[0],
          r = t.substring(e.length);
        n && n !== e || i && i !== r || ((e = r) !== mt.aria && e !== mt.tooltips || i === r) && delete b[t];
      });
    }
    function I(r, n, i) {
      Object.keys(b).forEach(function (t) {
        var e = t.split(".")[0];
        r === e && b[t].forEach(function (t) {
          t.call(it, h.map(f.format.to), n, h.slice(), i || !1, m.slice(), it);
        });
      });
    }
    function W(t, e, r, n, i, o, s) {
      var a;
      return 1 < l.length && !f.events.unconstrained && (n && 0 < e && (a = S.getAbsoluteDistance(t[e - 1], f.margin, !1), r = Math.max(r, a)), i && e < l.length - 1 && (a = S.getAbsoluteDistance(t[e + 1], f.margin, !0), r = Math.min(r, a))), 1 < l.length && f.limit && (n && 0 < e && (a = S.getAbsoluteDistance(t[e - 1], f.limit, !1), r = Math.min(r, a)), i && e < l.length - 1 && (a = S.getAbsoluteDistance(t[e + 1], f.limit, !0), r = Math.max(r, a))), f.padding && (0 === e && (a = S.getAbsoluteDistance(0, f.padding[0], !1), r = Math.max(r, a)), e === l.length - 1 && (a = S.getAbsoluteDistance(100, f.padding[1], !0), r = Math.min(r, a))), !((r = ct(r = !s ? S.getStep(r) : r)) === t[e] && !o) && r;
    }
    function $(t, e) {
      var r = f.ort;
      return (r ? e : t) + ", " + (r ? t : e);
    }
    function G(t, r, n, e, i) {
      var o = n.slice(),
        s = e[0],
        a = f.events.smoothSteps,
        l = [!t, t],
        u = [t, !t];
      e = e.slice(), t && e.reverse(), 1 < e.length ? e.forEach(function (t, e) {
        e = W(o, t, o[t] + r, l[e], u[e], !1, a);
        !1 === e ? r = 0 : (r = e - o[t], o[t] = e);
      }) : l = u = [!0];
      var c = !1;
      e.forEach(function (t, e) {
        c = Q(t, n[t] + r, l[e], u[e], !1, a) || c;
      }), c && (e.forEach(function (t) {
        I("update", t), I("slide", t);
      }), null != i && I("drag", s));
    }
    function J(t, e) {
      return f.dir ? 100 - t - e : t;
    }
    function K() {
      g.forEach(function (t) {
        var e = 50 < m[t] ? -1 : 1,
          e = 3 + (l.length + e * t);
        l[t].style.zIndex = String(e);
      });
    }
    function Q(t, e, r, n, i, o) {
      return !1 !== (e = i ? e : W(m, t, e, r, n, !1, o)) && (e = e, m[t = t] = e, h[t] = S.fromStepping(e), e = "translate(" + $(J(e, 0) - E + "%", "0") + ")", l[t].style[f.transformRule] = e, Z(t), Z(t + 1), !0);
    }
    function Z(t) {
      var e, r;
      a[t] && (r = 100, e = "translate(" + $(J(e = (e = 0) !== t ? m[t - 1] : e, r = (r = t !== a.length - 1 ? m[t] : r) - e) + "%", "0") + ")", r = "scale(" + $(r / 100, "1") + ")", a[t].style[f.transformRule] = e + " " + r);
    }
    function tt(t, e) {
      return null === t || !1 === t || void 0 === t ? m[e] : ("number" == typeof t && (t = String(t)), !1 === (t = !1 !== (t = f.format.from(t)) ? S.toStepping(t) : t) || isNaN(t) ? m[e] : t);
    }
    function et(t, e, r) {
      var n = pt(t),
        t = void 0 === m[0];
      e = void 0 === e || e, f.animate && !t && ut(d, f.cssClasses.tap, f.animationDuration), g.forEach(function (t) {
        Q(t, tt(n[t], t), !0, !1, r);
      });
      var i,
        o = 1 === g.length ? 0 : 1;
      for (t && S.hasNoSize() && (r = !0, m[0] = 0, 1 < g.length && (i = 100 / (g.length - 1), g.forEach(function (t) {
        m[t] = t * i;
      }))); o < g.length; ++o) g.forEach(function (t) {
        Q(t, m[t], !0, !0, r);
      });
      K(), g.forEach(function (t) {
        I("update", t), null !== n[t] && e && I("set", t);
      });
    }
    function rt(t) {
      if (t = void 0 === t ? !1 : t) return 1 === h.length ? h[0] : h.slice(0);
      t = h.map(f.format.to);
      return 1 === t.length ? t[0] : t;
    }
    function nt(t) {
      var e = m[t],
        r = S.getNearbySteps(e),
        n = h[t],
        i = r.thisStep.step,
        t = null;
      if (f.snap) return [n - r.stepBefore.startValue || null, r.stepAfter.startValue - n || null];
      !1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n), t = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep, 100 === e ? i = null : 0 === e && (t = null);
      e = S.countStepDecimals();
      return null !== i && !1 !== i && (i = Number(i.toFixed(e))), [t = null !== t && !1 !== t ? Number(t.toFixed(e)) : t, i];
    }
    ft(t = d, f.cssClasses.target), 0 === f.dir ? ft(t, f.cssClasses.ltr) : ft(t, f.cssClasses.rtl), 0 === f.ort ? ft(t, f.cssClasses.horizontal) : ft(t, f.cssClasses.vertical), ft(t, "rtl" === getComputedStyle(t).direction ? f.cssClasses.textDirectionRtl : f.cssClasses.textDirectionLtr), i = P(t, f.cssClasses.base), function (t, e) {
      var r = P(e, f.cssClasses.connects);
      l = [], (a = []).push(N(r, t[0]));
      for (var n = 0; n < f.handles; n++) l.push(C(e, n)), g[n] = n, a.push(N(r, t[n + 1]));
    }(f.connect, i), (u = f.events).fixed || l.forEach(function (t, e) {
      z(c.start, t.children[0], B, {
        handleNumbers: [e]
      });
    }), u.tap && z(c.start, i, r, {}), u.hover && z(c.move, i, q, {
      hover: !0
    }), u.drag && a.forEach(function (e, t) {
      var r, n, i, o, s;
      !1 !== e && 0 !== t && t !== a.length - 1 && (r = l[t - 1], n = l[t], i = [e], o = [r, n], s = [t - 1, t], ft(e, f.cssClasses.draggable), u.fixed && (i.push(r.children[0]), i.push(n.children[0])), u.dragAll && (o = l, s = g), i.forEach(function (t) {
        z(c.start, t, B, {
          handles: o,
          handleNumbers: s,
          connect: e
        });
      }));
    }), et(f.start), f.pips && T(f.pips), f.tooltips && M(), Y("update" + mt.aria), X("update" + mt.aria, function (t, e, o, r, s) {
      g.forEach(function (t) {
        var e = l[t],
          r = W(m, t, 0, !0, !0, !0),
          n = W(m, t, 100, !0, !0, !0),
          i = s[t],
          t = String(f.ariaFormat.to(o[t])),
          r = S.fromStepping(r).toFixed(1),
          n = S.fromStepping(n).toFixed(1),
          i = S.fromStepping(i).toFixed(1);
        e.children[0].setAttribute("aria-valuemin", r), e.children[0].setAttribute("aria-valuemax", n), e.children[0].setAttribute("aria-valuenow", i), e.children[0].setAttribute("aria-valuetext", t);
      });
    });
    var it = {
      destroy: function destroy() {
        for (Y(mt.aria), Y(mt.tooltips), Object.keys(f.cssClasses).forEach(function (t) {
          dt(d, f.cssClasses[t]);
        }); d.firstChild;) d.removeChild(d.firstChild);
        delete d.noUiSlider;
      },
      steps: function steps() {
        return g.map(nt);
      },
      on: X,
      off: Y,
      get: rt,
      set: et,
      setHandle: function setHandle(t, e, r, n) {
        if (!(0 <= (t = Number(t)) && t < g.length)) throw new Error("noUiSlider: invalid handle number, got: " + t);
        Q(t, tt(e, t), !0, !0, n), I("update", t), r && I("set", t);
      },
      reset: function reset(t) {
        et(f.start, t);
      },
      disable: function disable(t) {
        null != t ? (l[t].setAttribute("disabled", ""), l[t].handle.removeAttribute("tabindex")) : (d.setAttribute("disabled", ""), l.forEach(function (t) {
          t.handle.removeAttribute("tabindex");
        }));
      },
      enable: function enable(t) {
        null != t ? (l[t].removeAttribute("disabled"), l[t].handle.setAttribute("tabindex", "0")) : (d.removeAttribute("disabled"), l.forEach(function (t) {
          t.removeAttribute("disabled"), t.handle.setAttribute("tabindex", "0");
        }));
      },
      __moveHandles: function __moveHandles(t, e, r) {
        G(t, e, m, r);
      },
      options: o,
      updateOptions: function updateOptions(e, t) {
        var r = rt(),
          n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
        n.forEach(function (t) {
          void 0 !== e[t] && (o[t] = e[t]);
        });
        var i = gt(o);
        n.forEach(function (t) {
          void 0 !== e[t] && (f[t] = i[t]);
        }), S = i.spectrum, f.margin = i.margin, f.limit = i.limit, f.padding = i.padding, f.pips ? T(f.pips) : L(), (f.tooltips ? M : k)(), m = [], et(at(e.start) ? e.start : r, t);
      },
      target: d,
      removePips: L,
      removeTooltips: k,
      getPositions: function getPositions() {
        return m.slice();
      },
      getTooltips: function getTooltips() {
        return s;
      },
      getOrigins: function getOrigins() {
        return l;
      },
      pips: T
    };
    return it;
  }
  function z(t, e) {
    if (!t || !t.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + t);
    if (t.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
    e = j(t, gt(e), e);
    return t.noUiSlider = e;
  }
  var H = {
    __spectrum: u,
    cssClasses: p,
    create: z
  };
  ot.create = z, ot.cssClasses = p, ot["default"] = H, Object.defineProperty(ot, "__esModule", {
    value: !0
  });
});
/**
 * Accordion v3.3.4
 * Lightweight and accessible accordion module created in pure Javascript
 * https://github.com/michu2k/Accordion
 *
 * Copyright (c) Michał Strumpf
 * Published under MIT License
 */

!function (e) {
  var t = 0,
    n = function e(n, s) {
      var i = this,
        r = this,
        o = !1;
      if (Array.isArray(n)) return !!n.length && n.map(function (t) {
        return new e(t, s);
      });
      var a = {
        init: function init() {
          this.options = Object.assign({
            duration: 600,
            ariaEnabled: !0,
            collapse: !0,
            showMultiple: !1,
            onlyChildNodes: !0,
            openOnInit: [],
            elementClass: "ac",
            triggerClass: "ac-trigger",
            panelClass: "ac-panel",
            activeClass: "is-active",
            beforeOpen: function beforeOpen() {},
            onOpen: function onOpen() {},
            beforeClose: function beforeClose() {},
            onClose: function onClose() {}
          }, s);
          var e = "string" == typeof n;
          this.container = e ? document.querySelector(n) : n, this.createDefinitions(), r.attachEvents();
        },
        createDefinitions: function createDefinitions() {
          var e = this,
            n = this.options,
            s = n.elementClass,
            i = n.openOnInit,
            r = n.onlyChildNodes ? this.container.childNodes : this.container.querySelectorAll(u(s));
          this.elements = Array.from(r).filter(function (e) {
            return e.classList && e.classList.contains(s);
          }), this.firstElement = this.elements[0], this.lastElement = this.elements[this.elements.length - 1], this.elements.filter(function (e) {
            return !e.classList.contains("js-enabled");
          }).forEach(function (n) {
            n.classList.add("js-enabled"), e.generateIDs(n), e.setARIA(n), e.setTransition(n);
            var s = e.elements.indexOf(n);
            t++, i.includes(s) ? e.showElement(n, !1) : e.closeElement(n, !1);
          });
        },
        setTransition: function setTransition(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.options,
            s = n.duration,
            i = n.panelClass,
            r = e.querySelector(u(i)),
            o = l("transitionDuration");
          r.style[o] = t ? null : "".concat(s, "ms");
        },
        generateIDs: function generateIDs(e) {
          var n = this.options,
            s = n.triggerClass,
            i = n.panelClass,
            r = e.querySelector(u(s)),
            o = e.querySelector(u(i));
          e.setAttribute("id", e.id || "ac-".concat(t)), r.setAttribute("id", r.id || "ac-trigger-".concat(t)), o.setAttribute("id", o.id || "ac-panel-".concat(t));
        },
        removeIDs: function removeIDs(e) {
          var t = this.options,
            n = t.triggerClass,
            s = t.panelClass,
            i = e.querySelector(u(n)),
            r = e.querySelector(u(s));
          e.id.startsWith("ac-") && e.removeAttribute("id"), i.id.startsWith("ac-") && i.removeAttribute("id"), r.id.startsWith("ac-") && r.removeAttribute("id");
        },
        setARIA: function setARIA(e) {
          var t = this.options,
            n = t.ariaEnabled,
            s = t.triggerClass,
            i = t.panelClass;
          if (n) {
            var r = e.querySelector(u(s)),
              o = e.querySelector(u(i));
            r.setAttribute("role", "button"), r.setAttribute("aria-controls", o.id), r.setAttribute("aria-disabled", !1), r.setAttribute("aria-expanded", !1), o.setAttribute("role", "region"), o.setAttribute("aria-labelledby", r.id);
          }
        },
        updateARIA: function updateARIA(e, t) {
          var n = t.ariaExpanded,
            s = t.ariaDisabled,
            i = this.options,
            r = i.ariaEnabled,
            o = i.triggerClass;
          if (r) {
            var a = e.querySelector(u(o));
            a.setAttribute("aria-expanded", n), a.setAttribute("aria-disabled", s);
          }
        },
        removeARIA: function removeARIA(e) {
          var t = this.options,
            n = t.ariaEnabled,
            s = t.triggerClass,
            i = t.panelClass;
          if (n) {
            var r = e.querySelector(u(s)),
              o = e.querySelector(u(i));
            r.removeAttribute("role"), r.removeAttribute("aria-controls"), r.removeAttribute("aria-disabled"), r.removeAttribute("aria-expanded"), o.removeAttribute("role"), o.removeAttribute("aria-labelledby");
          }
        },
        focus: function focus(e, t) {
          e.preventDefault();
          var n = this.options.triggerClass;
          t.querySelector(u(n)).focus();
        },
        focusFirstElement: function focusFirstElement(e) {
          this.focus(e, this.firstElement), this.currFocusedIdx = 0;
        },
        focusLastElement: function focusLastElement(e) {
          this.focus(e, this.lastElement), this.currFocusedIdx = this.elements.length - 1;
        },
        focusNextElement: function focusNextElement(e) {
          var t = this.currFocusedIdx + 1;
          if (t > this.elements.length - 1) return this.focusFirstElement(e);
          this.focus(e, this.elements[t]), this.currFocusedIdx = t;
        },
        focusPrevElement: function focusPrevElement(e) {
          var t = this.currFocusedIdx - 1;
          if (t < 0) return this.focusLastElement(e);
          this.focus(e, this.elements[t]), this.currFocusedIdx = t;
        },
        showElement: function showElement(e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = this.options,
            s = n.panelClass,
            i = n.activeClass,
            r = n.collapse,
            o = n.beforeOpen;
          t && o(e);
          var a = e.querySelector(u(s)),
            l = a.scrollHeight;
          e.classList.add(i), requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              a.style.height = t ? "".concat(l, "px") : "auto";
            });
          }), this.updateARIA(e, {
            ariaExpanded: !0,
            ariaDisabled: !r
          });
        },
        closeElement: function closeElement(e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = this.options,
            s = n.panelClass,
            i = n.activeClass,
            r = n.beforeClose,
            o = e.querySelector(u(s)),
            a = o.scrollHeight;
          e.classList.remove(i), t ? (r(e), requestAnimationFrame(function () {
            o.style.height = "".concat(a, "px"), requestAnimationFrame(function () {
              o.style.height = 0;
            });
          })) : o.style.height = 0, this.updateARIA(e, {
            ariaExpanded: !1,
            ariaDisabled: !1
          });
        },
        toggleElement: function toggleElement(e) {
          var t = this.options,
            n = t.activeClass,
            s = t.collapse,
            i = e.classList.contains(n);
          if (!i || s) return i ? this.closeElement(e) : this.showElement(e);
        },
        closeElements: function closeElements() {
          var e = this,
            t = this.options,
            n = t.activeClass;
          t.showMultiple || this.elements.forEach(function (t, s) {
            t.classList.contains(n) && s !== e.currFocusedIdx && e.closeElement(t);
          });
        },
        handleClick: function handleClick(e) {
          var t = this,
            n = e.currentTarget;
          this.elements.forEach(function (s, i) {
            s.contains(n) && "A" !== e.target.nodeName && (t.currFocusedIdx = i, t.closeElements(), t.focus(e, s), t.toggleElement(s));
          });
        },
        handleKeydown: function handleKeydown(e) {
          switch (e.key) {
            case "ArrowUp":
              return this.focusPrevElement(e);
            case "ArrowDown":
              return this.focusNextElement(e);
            case "Home":
              return this.focusFirstElement(e);
            case "End":
              return this.focusLastElement(e);
            default:
              return null;
          }
        },
        handleFocus: function handleFocus(e) {
          var t = e.currentTarget,
            n = this.elements.find(function (e) {
              return e.contains(t);
            });
          this.currFocusedIdx = this.elements.indexOf(n);
        },
        handleTransitionEnd: function handleTransitionEnd(e) {
          if (e.stopPropagation(), "height" === e.propertyName) {
            var t = this.options,
              n = t.onOpen,
              s = t.onClose,
              i = e.currentTarget,
              r = parseInt(i.style.height),
              o = this.elements.find(function (e) {
                return e.contains(i);
              });
            r > 0 ? (i.style.height = "auto", n(o)) : s(o);
          }
        }
      };
      this.attachEvents = function () {
        if (!o) {
          var e = a.options,
            t = e.triggerClass,
            n = e.panelClass;
          a.handleClick = a.handleClick.bind(a), a.handleKeydown = a.handleKeydown.bind(a), a.handleFocus = a.handleFocus.bind(a), a.handleTransitionEnd = a.handleTransitionEnd.bind(a), a.elements.forEach(function (e) {
            var s = e.querySelector(u(t)),
              i = e.querySelector(u(n));
            s.addEventListener("click", a.handleClick), s.addEventListener("keydown", a.handleKeydown), s.addEventListener("focus", a.handleFocus), i.addEventListener("webkitTransitionEnd", a.handleTransitionEnd), i.addEventListener("transitionend", a.handleTransitionEnd);
          }), o = !0;
        }
      }, this.detachEvents = function () {
        if (o) {
          var e = a.options,
            t = e.triggerClass,
            n = e.panelClass;
          a.elements.forEach(function (e) {
            var s = e.querySelector(u(t)),
              i = e.querySelector(u(n));
            s.removeEventListener("click", a.handleClick), s.removeEventListener("keydown", a.handleKeydown), s.removeEventListener("focus", a.handleFocus), i.removeEventListener("webkitTransitionEnd", a.handleTransitionEnd), i.removeEventListener("transitionend", a.handleTransitionEnd);
          }), o = !1;
        }
      }, this.toggle = function (e) {
        var t = a.elements[e];
        t && a.toggleElement(t);
      }, this.open = function (e) {
        var t = a.elements[e];
        t && a.showElement(t);
      }, this.openAll = function () {
        var e = a.options,
          t = e.activeClass,
          n = e.onOpen;
        a.elements.forEach(function (e) {
          e.classList.contains(t) || (a.showElement(e, !1), n(e));
        });
      }, this.close = function (e) {
        var t = a.elements[e];
        t && a.closeElement(t);
      }, this.closeAll = function () {
        var e = a.options,
          t = e.activeClass,
          n = e.onClose;
        a.elements.forEach(function (e) {
          e.classList.contains(t) && (a.closeElement(e, !1), n(e));
        });
      }, this.destroy = function () {
        i.detachEvents(), i.openAll(), a.elements.forEach(function (e) {
          a.removeIDs(e), a.removeARIA(e), a.setTransition(e, !0);
        }), o = !0;
      }, this.update = function () {
        a.createDefinitions(), i.detachEvents(), i.attachEvents();
      };
      var l = function l(e) {
          return "string" == typeof document.documentElement.style[e] ? e : (e = c(e), e = "webkit".concat(e));
        },
        c = function c(e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        },
        u = function u(e) {
          return ".".concat(CSS.escape(e));
        };
      a.init();
    };
  "undefined" != typeof module && void 0 !== module.exports ? module.exports = n : e.Accordion = n;
}(window);
(function (window) {
  if (!window.app) {
    window.app = {};
  }
  var breakpoints = {
    xxl: 1919,
    xl: 1439,
    lg: 1279,
    md: 991,
    sm: 575
  };
  var events = {}; // кастомные события

  window.app.config = {
    events: events,
    breakpoints: breakpoints
    // ...
  };
})(window);
(function (window) {
  if (!window.app) {
    window.app = {};
  }
  var checkResponse = function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430 ".concat(res.status));
  };
  var checkResponseSuccess = function checkResponseSuccess(res) {
    if (res && res.success) {
      return res;
    }
    return Promise.reject("\u041E\u0442\u0432\u0435\u0442 \u043D\u0435 success: ".concat(res));
  };
  var buildHttpClient = function buildHttpClient(baseUrl) {
    return function (endpoint) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return fetch("".concat(baseUrl).concat(endpoint), options).then(checkResponse).then(checkResponseSuccess);
    };
  };
  var setObserver = function setObserver(element, handleObserve) {
    var manualConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var config = _objectSpread({
      childList: true
    }, manualConfig);
    var observer = new MutationObserver(function () {
      return handleObserve(element);
    });
    observer.observe(element, config);
  };
  var findAncestorsByClassName = function findAncestorsByClassName(el, className) {
    var stopElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var ancestorEls = [];
    var currentParent = el.parentElement;
    if (!currentParent) {
      return ancestorEls;
    }
    while (currentParent !== null && currentParent !== stopElement) {
      if (currentParent.classList.contains(className)) {
        ancestorEls = [].concat(_toConsumableArray(ancestorEls), [currentParent]);
      }
      currentParent = currentParent.parentElement;
    }
    return ancestorEls;
  };
  var findAncestorByClassName = function findAncestorByClassName(el, className) {
    var ancestorEl = el.parentElement;
    while (!ancestorEl.classList.contains(className)) {
      ancestorEl = ancestorEl.parentElement;
      if (!ancestorEl) {
        return null;
      }
    }
    return ancestorEl;
  };
  var buildComponentLogger = function buildComponentLogger(componentName) {
    return function (text) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var msg = context ? "".concat(componentName, ":").concat(context, ":").concat(text) : "".concat(componentName, ":").concat(text);
      console.debug(msg);
      if (data) {
        console.dir(data);
      }
    };
  };
  var debounce = function debounce(callee, timeoutMs) {
    return function perform() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var previousCall = this.lastCall;
      this.lastCall = Date.now();
      if (previousCall && this.lastCall - previousCall <= timeoutMs) {
        clearTimeout(this.lastCallTimer);
      }
      this.lastCallTimer = setTimeout(function () {
        return callee.apply(void 0, args);
      }, timeoutMs);
    };
  };
  var throttle = function throttle(callee, timeout) {
    var timer = null;
    return function perform() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (timer) return;
      timer = setTimeout(function () {
        callee.apply(void 0, args);
        clearTimeout(timer);
        timer = null;
      }, timeout);
    };
  };
  window.app.lib = {
    setObserver: setObserver,
    findAncestorsByClassName: findAncestorsByClassName,
    findAncestorByClassName: findAncestorByClassName,
    buildComponentLogger: buildComponentLogger,
    debounce: debounce,
    throttle: throttle,
    checkResponse: checkResponse,
    checkResponseSuccess: checkResponseSuccess,
    buildHttpClient: buildHttpClient
  };
})(window);
// price slider
var sliderPrice = document.getElementById('range-slider-price');
if (sliderPrice) {
  noUiSlider.create(sliderPrice, {
    start: [400, 6310],
    tooltips: [false, {
      to: function to(value) {
        return Math.round(value);
      }
    }],
    connect: true,
    margin: 30,
    step: 10,
    range: {
      'min': 0,
      'max': 9999
    }
  });
  var inputMinPrice = document.getElementById('input-price-min');
  var inputMaxPrice = document.getElementById('input-price-max');
  var inputs = [inputMinPrice, inputMaxPrice];
  sliderPrice.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });
  var setRangeSlider = function setRangeSlider(i, value) {
    var arr = [null, null];
    arr[i] = value;
    sliderPrice.noUiSlider.set(arr);
  };
  inputs.forEach(function (el, index) {
    el.addEventListener('change', function (e) {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}

// THC slider
var sliderThc = document.getElementById('range-slider-thc');
if (sliderThc) {
  noUiSlider.create(sliderThc, {
    start: 62,
    tooltips: [{
      to: function to(value) {
        return Math.round(value);
      }
    }],
    connect: 'lower',
    step: 1,
    range: {
      'min': 0,
      'max': 100
    }
  });
  var inputThc = document.getElementById('input-thc');
  sliderThc.noUiSlider.on('update', function (values, handle) {
    inputThc.value = Math.round(values);
  });
  inputThc.addEventListener('change', function () {
    sliderThc.noUiSlider.set(inputThc.value);
  });
}

// CBD slider
var sliderCbd = document.getElementById('range-slider-cbd');
if (sliderCbd) {
  noUiSlider.create(sliderCbd, {
    start: 62,
    tooltips: [{
      to: function to(value) {
        return Math.round(value);
      }
    }],
    connect: 'lower',
    step: 1,
    range: {
      'min': 0,
      'max': 100
    }
  });
  var inputCbd = document.getElementById('input-cbd');
  sliderCbd.noUiSlider.on('update', function (values, handle) {
    inputCbd.value = Math.round(values);
  });
  inputCbd.addEventListener('change', function () {
    sliderCbd.noUiSlider.set(inputCbd.value);
  });
}

// dropdown
var dropdownBtn = document.querySelector('.dropdown__btn');
var dropdownContent = document.querySelector('.dropdown__content');
dropdownBtn.addEventListener('click', function () {
  dropdownContent.classList.toggle('dropdown__content--show');
});
window.addEventListener('click', function (evt) {
  if (!evt.target.closest('.dropdown__content') && !evt.target.closest('.dropdown__btn')) {
    if (dropdownContent.classList.contains('dropdown__content--show')) {
      dropdownContent.classList.remove('dropdown__content--show');
    }
  }
});
// init Accordion
new Accordion('.accordion-container', {
  showMultiple: true,
  openOnInit: [0, 1, 2]
});

// checkbox handler
var checkboxes = document.querySelectorAll('.options__input');
var badgesList = document.querySelector('.badges');
var tmplBadge = document.querySelector('#tmpl-badge');
var badgeNewItem = tmplBadge.content.querySelector('.badges__item');
var badgeText = tmplBadge.content.querySelector('.badges__text');
var badge = tmplBadge.content.cloneNode(true);
function handleCheckboxChange(event) {
  var checkbox = event.target;
  var badgeId = "badges-".concat(checkbox.id);
  if (checkbox.checked) {
    badgeNewItem.id = badgeId;
    badgeText.textContent = checkbox.name;
    var _badge = tmplBadge.content.cloneNode(true);
    badgesList.append(_badge);
    var _badgesItems = badgesList.querySelectorAll('.badges__item');
    _badgesItems.forEach(function (item) {
      if (item.id === badgeId) {
        var closeBtn = item.querySelector('.badges__close-btn');
        closeBtn.addEventListener('click', function () {
          item.remove();
          checkbox.checked = false;
        });
      }
    });
  } else {
    var _badgesItems2 = badgesList.querySelectorAll('.badges__item');
    _badgesItems2.forEach(function (item) {
      if (item.id === badgeId) {
        item.remove();
      }
    });
  }
}
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', handleCheckboxChange);
});

// badge close btn handler
var badgesItems = badgesList.querySelectorAll('.badges__item');
badgesItems.forEach(function (item) {
  var closeBtn = item.querySelector('.badges__close-btn');
  closeBtn.addEventListener('click', function () {
    item.remove();
    checkboxes.forEach(function (checkbox) {
      if (item.id === "badges-".concat(checkbox.id)) {
        checkbox.checked = false;
      }
    });
  });
});