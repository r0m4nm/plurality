var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@plurality-network/smart-profile-wallet/dist/index.js
var require_dist = __commonJS({
  "node_modules/@plurality-network/smart-profile-wallet/dist/index.js"(exports, module) {
    (() => {
      var e = { 571: (e2, t2, n2) => {
        "use strict";
        n2.d(t2, { A: () => s });
        var r2 = n2(601), o = n2.n(r2), i = n2(314), a = n2.n(i)()(o());
        a.push([e2.id, ".modalCustom .ant-modal-content {\n    background-color: transparent;\n    box-shadow: none;\n}\n\n.ant-modal-root .ant-modal-mask {\n    background-color: rgba(0, 0, 0, .5);\n}\n\n.ant-modal .ant-modal-close-x {\n    margin-left: -15px;\n}\n\n.modalCustom .ant-modal-close:hover {\n    background-color: transparent !important\n}", ""]);
        const s = a;
      }, 548: (e2, t2, n2) => {
        "use strict";
        n2.d(t2, { A: () => s });
        var r2 = n2(601), o = n2.n(r2), i = n2(314), a = n2.n(i)()(o());
        a.push([e2.id, "body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Lexend', sans-serif;\n    overflow: hidden;\n}", ""]);
        const s = a;
      }, 314: (e2) => {
        "use strict";
        e2.exports = function(e3) {
          var t2 = [];
          return t2.toString = function() {
            return this.map(function(t3) {
              var n2 = "", r2 = void 0 !== t3[5];
              return t3[4] && (n2 += "@supports (".concat(t3[4], ") {")), t3[2] && (n2 += "@media ".concat(t3[2], " {")), r2 && (n2 += "@layer".concat(t3[5].length > 0 ? " ".concat(t3[5]) : "", " {")), n2 += e3(t3), r2 && (n2 += "}"), t3[2] && (n2 += "}"), t3[4] && (n2 += "}"), n2;
            }).join("");
          }, t2.i = function(e4, n2, r2, o, i) {
            "string" == typeof e4 && (e4 = [[null, e4, void 0]]);
            var a = {};
            if (r2)
              for (var s = 0; s < this.length; s++) {
                var l = this[s][0];
                null != l && (a[l] = true);
              }
            for (var c = 0; c < e4.length; c++) {
              var u = [].concat(e4[c]);
              r2 && a[u[0]] || (void 0 !== i && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = i), n2 && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n2) : u[2] = n2), o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = o) : u[4] = "".concat(o)), t2.push(u));
            }
          }, t2;
        };
      }, 601: (e2) => {
        "use strict";
        e2.exports = function(e3) {
          return e3[1];
        };
      }, 787: (e2, t2) => {
        "use strict";
        var n2 = Symbol.for("react.element"), r2 = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy");
        Symbol.for("react.offscreen");
        Symbol.for("react.module.reference"), t2.ForwardRef = u, t2.isMemo = function(e3) {
          return function(e4) {
            if ("object" == typeof e4 && null !== e4) {
              var t3 = e4.$$typeof;
              switch (t3) {
                case n2:
                  switch (e4 = e4.type) {
                    case o:
                    case a:
                    case i:
                    case d:
                    case f:
                      return e4;
                    default:
                      switch (e4 = e4 && e4.$$typeof) {
                        case c:
                        case l:
                        case u:
                        case m:
                        case p:
                        case s:
                          return e4;
                        default:
                          return t3;
                      }
                  }
                case r2:
                  return t3;
              }
            }
          }(e3) === p;
        };
      }, 351: (e2, t2, n2) => {
        "use strict";
        e2.exports = n2(787);
      }, 20: (e2, t2, n2) => {
        "use strict";
        var r2 = n2(953), o = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, s = r2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: true, ref: true, __self: true, __source: true };
        function c(e3, t3, n3) {
          var r3, i2 = {}, c2 = null, u = null;
          for (r3 in void 0 !== n3 && (c2 = "" + n3), void 0 !== t3.key && (c2 = "" + t3.key), void 0 !== t3.ref && (u = t3.ref), t3)
            a.call(t3, r3) && !l.hasOwnProperty(r3) && (i2[r3] = t3[r3]);
          if (e3 && e3.defaultProps)
            for (r3 in t3 = e3.defaultProps)
              void 0 === i2[r3] && (i2[r3] = t3[r3]);
          return { $$typeof: o, type: e3, key: c2, ref: u, props: i2, _owner: s.current };
        }
        t2.Fragment = i, t2.jsx = c, t2.jsxs = c;
      }, 848: (e2, t2, n2) => {
        "use strict";
        e2.exports = n2(20);
      }, 833: (e2) => {
        e2.exports = function(e3, t2, n2, r2) {
          var o = n2 ? n2.call(r2, e3, t2) : void 0;
          if (void 0 !== o)
            return !!o;
          if (e3 === t2)
            return true;
          if ("object" != typeof e3 || !e3 || "object" != typeof t2 || !t2)
            return false;
          var i = Object.keys(e3), a = Object.keys(t2);
          if (i.length !== a.length)
            return false;
          for (var s = Object.prototype.hasOwnProperty.bind(t2), l = 0; l < i.length; l++) {
            var c = i[l];
            if (!s(c))
              return false;
            var u = e3[c], d = t2[c];
            if (false === (o = n2 ? n2.call(r2, u, d, c) : void 0) || void 0 === o && u !== d)
              return false;
          }
          return true;
        };
      }, 72: (e2) => {
        "use strict";
        var t2 = [];
        function n2(e3) {
          for (var n3 = -1, r3 = 0; r3 < t2.length; r3++)
            if (t2[r3].identifier === e3) {
              n3 = r3;
              break;
            }
          return n3;
        }
        function r2(e3, r3) {
          for (var i = {}, a = [], s = 0; s < e3.length; s++) {
            var l = e3[s], c = r3.base ? l[0] + r3.base : l[0], u = i[c] || 0, d = "".concat(c, " ").concat(u);
            i[c] = u + 1;
            var f = n2(d), p = { css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5] };
            if (-1 !== f)
              t2[f].references++, t2[f].updater(p);
            else {
              var m = o(p, r3);
              r3.byIndex = s, t2.splice(s, 0, { identifier: d, updater: m, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function o(e3, t3) {
          var n3 = t3.domAPI(t3);
          return n3.update(e3), function(t4) {
            if (t4) {
              if (t4.css === e3.css && t4.media === e3.media && t4.sourceMap === e3.sourceMap && t4.supports === e3.supports && t4.layer === e3.layer)
                return;
              n3.update(e3 = t4);
            } else
              n3.remove();
          };
        }
        e2.exports = function(e3, o2) {
          var i = r2(e3 = e3 || [], o2 = o2 || {});
          return function(e4) {
            e4 = e4 || [];
            for (var a = 0; a < i.length; a++) {
              var s = n2(i[a]);
              t2[s].references--;
            }
            for (var l = r2(e4, o2), c = 0; c < i.length; c++) {
              var u = n2(i[c]);
              0 === t2[u].references && (t2[u].updater(), t2.splice(u, 1));
            }
            i = l;
          };
        };
      }, 659: (e2) => {
        "use strict";
        var t2 = {};
        e2.exports = function(e3, n2) {
          var r2 = function(e4) {
            if (void 0 === t2[e4]) {
              var n3 = document.querySelector(e4);
              if (window.HTMLIFrameElement && n3 instanceof window.HTMLIFrameElement)
                try {
                  n3 = n3.contentDocument.head;
                } catch (e5) {
                  n3 = null;
                }
              t2[e4] = n3;
            }
            return t2[e4];
          }(e3);
          if (!r2)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          r2.appendChild(n2);
        };
      }, 540: (e2) => {
        "use strict";
        e2.exports = function(e3) {
          var t2 = document.createElement("style");
          return e3.setAttributes(t2, e3.attributes), e3.insert(t2, e3.options), t2;
        };
      }, 56: (e2, t2, n2) => {
        "use strict";
        e2.exports = function(e3) {
          var t3 = n2.nc;
          t3 && e3.setAttribute("nonce", t3);
        };
      }, 825: (e2) => {
        "use strict";
        e2.exports = function(e3) {
          if ("undefined" == typeof document)
            return { update: function() {
            }, remove: function() {
            } };
          var t2 = e3.insertStyleElement(e3);
          return { update: function(n2) {
            !function(e4, t3, n3) {
              var r2 = "";
              n3.supports && (r2 += "@supports (".concat(n3.supports, ") {")), n3.media && (r2 += "@media ".concat(n3.media, " {"));
              var o = void 0 !== n3.layer;
              o && (r2 += "@layer".concat(n3.layer.length > 0 ? " ".concat(n3.layer) : "", " {")), r2 += n3.css, o && (r2 += "}"), n3.media && (r2 += "}"), n3.supports && (r2 += "}");
              var i = n3.sourceMap;
              i && "undefined" != typeof btoa && (r2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t3.styleTagTransform(r2, e4, t3.options);
            }(t2, e3, n2);
          }, remove: function() {
            !function(e4) {
              if (null === e4.parentNode)
                return false;
              e4.parentNode.removeChild(e4);
            }(t2);
          } };
        };
      }, 113: (e2) => {
        "use strict";
        e2.exports = function(e3, t2) {
          if (t2.styleSheet)
            t2.styleSheet.cssText = e3;
          else {
            for (; t2.firstChild; )
              t2.removeChild(t2.firstChild);
            t2.appendChild(document.createTextNode(e3));
          }
        };
      }, 953: (e2) => {
        "use strict";
        e2.exports = __require("react");
      }, 942: (e2, t2) => {
        var n2;
        !function() {
          "use strict";
          var r2 = {}.hasOwnProperty;
          function o() {
            for (var e3 = "", t3 = 0; t3 < arguments.length; t3++) {
              var n3 = arguments[t3];
              n3 && (e3 = a(e3, i(n3)));
            }
            return e3;
          }
          function i(e3) {
            if ("string" == typeof e3 || "number" == typeof e3)
              return e3;
            if ("object" != typeof e3)
              return "";
            if (Array.isArray(e3))
              return o.apply(null, e3);
            if (e3.toString !== Object.prototype.toString && !e3.toString.toString().includes("[native code]"))
              return e3.toString();
            var t3 = "";
            for (var n3 in e3)
              r2.call(e3, n3) && e3[n3] && (t3 = a(t3, n3));
            return t3;
          }
          function a(e3, t3) {
            return t3 ? e3 ? e3 + " " + t3 : e3 + t3 : e3;
          }
          e2.exports ? (o.default = o, e2.exports = o) : void 0 === (n2 = function() {
            return o;
          }.apply(t2, [])) || (e2.exports = n2);
        }();
      } }, t = {};
      function n(r2) {
        var o = t[r2];
        if (void 0 !== o)
          return o.exports;
        var i = t[r2] = { id: r2, exports: {} };
        return e[r2](i, i.exports, n), i.exports;
      }
      n.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return n.d(t2, { a: t2 }), t2;
      }, n.d = (e2, t2) => {
        for (var r2 in t2)
          n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }, n.g = function() {
        if ("object" == typeof globalThis)
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e2) {
          if ("object" == typeof window)
            return window;
        }
      }(), n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      }, n.nc = void 0;
      var r = {};
      (() => {
        "use strict";
        n.r(r), n.d(r, { PluralitySocialConnect: () => uC, default: () => dC });
        var e2 = n(848), t2 = n(953), o = n.n(t2), i = n(72), a = n.n(i), s = n(825), l = n.n(s), c = n(659), u = n.n(c), d = n(56), f = n.n(d), p = n(540), m = n.n(p), g = n(113), h = n.n(g), v = n(548), b = {};
        function y(e3, t3) {
          (null == t3 || t3 > e3.length) && (t3 = e3.length);
          for (var n2 = 0, r2 = Array(t3); n2 < t3; n2++)
            r2[n2] = e3[n2];
          return r2;
        }
        function C(e3) {
          if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
            return Array.from(e3);
        }
        function w(e3, t3) {
          if (e3) {
            if ("string" == typeof e3)
              return y(e3, t3);
            var n2 = {}.toString.call(e3).slice(8, -1);
            return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? y(e3, t3) : void 0;
          }
        }
        function x(e3) {
          return function(e4) {
            if (Array.isArray(e4))
              return y(e4);
          }(e3) || C(e3) || w(e3) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        b.styleTagTransform = h(), b.setAttributes = f(), b.insert = u().bind(null, "head"), b.domAPI = l(), b.insertStyleElement = m(), a()(v.A, b), v.A && v.A.locals && v.A.locals;
        const S = "ant", A = "anticon", E = t2.createContext({ getPrefixCls: (e3, t3) => t3 || (e3 ? `${S}-${e3}` : S), iconPrefixCls: A }), { Consumer: k } = E;
        function O(e3) {
          return O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, O(e3);
        }
        function P(e3) {
          var t3 = function(e4) {
            if ("object" != O(e4) || !e4)
              return e4;
            var t4 = e4[Symbol.toPrimitive];
            if (void 0 !== t4) {
              var n2 = t4.call(e4, "string");
              if ("object" != O(n2))
                return n2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e4);
          }(e3);
          return "symbol" == O(t3) ? t3 : t3 + "";
        }
        function I(e3, t3, n2) {
          return (t3 = P(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
        }
        function j(e3) {
          if (Array.isArray(e3))
            return e3;
        }
        function $() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function N(e3, t3) {
          return j(e3) || function(e4, t4) {
            var n2 = null == e4 ? null : "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
            if (null != n2) {
              var r2, o2, i2, a2, s2 = [], l2 = true, c2 = false;
              try {
                if (i2 = (n2 = n2.call(e4)).next, 0 === t4) {
                  if (Object(n2) !== n2)
                    return;
                  l2 = false;
                } else
                  for (; !(l2 = (r2 = i2.call(n2)).done) && (s2.push(r2.value), s2.length !== t4); l2 = true)
                    ;
              } catch (e5) {
                c2 = true, o2 = e5;
              } finally {
                try {
                  if (!l2 && null != n2.return && (a2 = n2.return(), Object(a2) !== a2))
                    return;
                } finally {
                  if (c2)
                    throw o2;
                }
              }
              return s2;
            }
          }(e3, t3) || w(e3, t3) || $();
        }
        function M(e3, t3) {
          var n2 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(e3);
            t3 && (r2 = r2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function R(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n2 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? M(Object(n2), true).forEach(function(t4) {
              I(e3, t4, n2[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n2)) : M(Object(n2)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n2, t4));
            });
          }
          return e3;
        }
        const B = function(e3) {
          for (var t3, n2 = 0, r2 = 0, o2 = e3.length; o2 >= 4; ++r2, o2 -= 4)
            t3 = 1540483477 * (65535 & (t3 = 255 & e3.charCodeAt(r2) | (255 & e3.charCodeAt(++r2)) << 8 | (255 & e3.charCodeAt(++r2)) << 16 | (255 & e3.charCodeAt(++r2)) << 24)) + (59797 * (t3 >>> 16) << 16), n2 = 1540483477 * (65535 & (t3 ^= t3 >>> 24)) + (59797 * (t3 >>> 16) << 16) ^ 1540483477 * (65535 & n2) + (59797 * (n2 >>> 16) << 16);
          switch (o2) {
            case 3:
              n2 ^= (255 & e3.charCodeAt(r2 + 2)) << 16;
            case 2:
              n2 ^= (255 & e3.charCodeAt(r2 + 1)) << 8;
            case 1:
              n2 = 1540483477 * (65535 & (n2 ^= 255 & e3.charCodeAt(r2))) + (59797 * (n2 >>> 16) << 16);
          }
          return (((n2 = 1540483477 * (65535 & (n2 ^= n2 >>> 13)) + (59797 * (n2 >>> 16) << 16)) ^ n2 >>> 15) >>> 0).toString(36);
        };
        function T() {
          return !("undefined" == typeof window || !window.document || !window.document.createElement);
        }
        function F(e3, t3) {
          if (!e3)
            return false;
          if (e3.contains)
            return e3.contains(t3);
          for (var n2 = t3; n2; ) {
            if (n2 === e3)
              return true;
            n2 = n2.parentNode;
          }
          return false;
        }
        var L = "data-rc-order", z = "data-rc-priority", H = /* @__PURE__ */ new Map();
        function D() {
          var e3 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).mark;
          return e3 ? e3.startsWith("data-") ? e3 : "data-".concat(e3) : "rc-util-key";
        }
        function q(e3) {
          return e3.attachTo ? e3.attachTo : document.querySelector("head") || document.body;
        }
        function V(e3) {
          return Array.from((H.get(e3) || e3).children).filter(function(e4) {
            return "STYLE" === e4.tagName;
          });
        }
        function W(e3) {
          var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!T())
            return null;
          var n2 = t3.csp, r2 = t3.prepend, o2 = t3.priority, i2 = void 0 === o2 ? 0 : o2, a2 = /* @__PURE__ */ function(e4) {
            return "queue" === e4 ? "prependQueue" : e4 ? "prepend" : "append";
          }(r2), s2 = "prependQueue" === a2, l2 = document.createElement("style");
          l2.setAttribute(L, a2), s2 && i2 && l2.setAttribute(z, "".concat(i2)), null != n2 && n2.nonce && (l2.nonce = null == n2 ? void 0 : n2.nonce), l2.innerHTML = e3;
          var c2 = q(t3), u2 = c2.firstChild;
          if (r2) {
            if (s2) {
              var d2 = (t3.styles || V(c2)).filter(function(e4) {
                if (!["prepend", "prependQueue"].includes(e4.getAttribute(L)))
                  return false;
                var t4 = Number(e4.getAttribute(z) || 0);
                return i2 >= t4;
              });
              if (d2.length)
                return c2.insertBefore(l2, d2[d2.length - 1].nextSibling), l2;
            }
            c2.insertBefore(l2, u2);
          } else
            c2.appendChild(l2);
          return l2;
        }
        function K(e3) {
          var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = q(t3);
          return (t3.styles || V(n2)).find(function(n3) {
            return n3.getAttribute(D(t3)) === e3;
          });
        }
        function G(e3) {
          var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = K(e3, t3);
          n2 && q(t3).removeChild(n2);
        }
        function X(e3, t3) {
          var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = q(n2), o2 = V(r2), i2 = R(R({}, n2), {}, { styles: o2 });
          !function(e4, t4) {
            var n3 = H.get(e4);
            if (!n3 || !F(document, n3)) {
              var r3 = W("", t4), o3 = r3.parentNode;
              H.set(e4, o3), e4.removeChild(r3);
            }
          }(r2, i2);
          var a2, s2, l2, c2 = K(t3, i2);
          if (c2)
            return null !== (a2 = i2.csp) && void 0 !== a2 && a2.nonce && c2.nonce !== (null === (s2 = i2.csp) || void 0 === s2 ? void 0 : s2.nonce) && (c2.nonce = null === (l2 = i2.csp) || void 0 === l2 ? void 0 : l2.nonce), c2.innerHTML !== e3 && (c2.innerHTML = e3), c2;
          var u2 = W(e3, i2);
          return u2.setAttribute(D(i2), t3), u2;
        }
        function U(e3, n2, r2) {
          var o2 = t2.useRef({});
          return "value" in o2.current && !r2(o2.current.condition, n2) || (o2.current.value = e3(), o2.current.condition = n2), o2.current.value;
        }
        var _ = {}, Q = [];
        function Y(e3, t3) {
        }
        function Z(e3, t3) {
        }
        function J(e3, t3, n2) {
          t3 || _[n2] || (e3(false, n2), _[n2] = true);
        }
        function ee(e3, t3) {
          J(Y, e3, t3);
        }
        ee.preMessage = function(e3) {
          Q.push(e3);
        }, ee.resetWarned = function() {
          _ = {};
        }, ee.noteOnce = function(e3, t3) {
          J(Z, e3, t3);
        };
        const te = ee, ne = function(e3, t3) {
          var n2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r2 = /* @__PURE__ */ new Set();
          return function e4(t4, o2) {
            var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, a2 = r2.has(t4);
            if (te(!a2, "Warning: There may be circular references"), a2)
              return false;
            if (t4 === o2)
              return true;
            if (n2 && i2 > 1)
              return false;
            r2.add(t4);
            var s2 = i2 + 1;
            if (Array.isArray(t4)) {
              if (!Array.isArray(o2) || t4.length !== o2.length)
                return false;
              for (var l2 = 0; l2 < t4.length; l2++)
                if (!e4(t4[l2], o2[l2], s2))
                  return false;
              return true;
            }
            if (t4 && o2 && "object" === O(t4) && "object" === O(o2)) {
              var c2 = Object.keys(t4);
              return c2.length === Object.keys(o2).length && c2.every(function(n3) {
                return e4(t4[n3], o2[n3], s2);
              });
            }
            return false;
          }(e3, t3);
        };
        function re(e3, t3) {
          if (!(e3 instanceof t3))
            throw new TypeError("Cannot call a class as a function");
        }
        function oe(e3, t3) {
          for (var n2 = 0; n2 < t3.length; n2++) {
            var r2 = t3[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, P(r2.key), r2);
          }
        }
        function ie(e3, t3, n2) {
          return t3 && oe(e3.prototype, t3), n2 && oe(e3, n2), Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }
        function ae(e3) {
          return e3.join("%");
        }
        var se = function() {
          function e3(t3) {
            re(this, e3), I(this, "instanceId", void 0), I(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t3;
          }
          return ie(e3, [{ key: "get", value: function(e4) {
            return this.opGet(ae(e4));
          } }, { key: "opGet", value: function(e4) {
            return this.cache.get(e4) || null;
          } }, { key: "update", value: function(e4, t3) {
            return this.opUpdate(ae(e4), t3);
          } }, { key: "opUpdate", value: function(e4, t3) {
            var n2 = t3(this.cache.get(e4));
            null === n2 ? this.cache.delete(e4) : this.cache.set(e4, n2);
          } }]), e3;
        }();
        const le = se;
        var ce = "data-token-hash", ue = "data-css-hash", de = "__cssinjs_instance__";
        var fe = t2.createContext({ hashPriority: "low", cache: function() {
          var e3 = Math.random().toString(12).slice(2);
          if ("undefined" != typeof document && document.head && document.body) {
            var t3 = document.body.querySelectorAll("style[".concat(ue, "]")) || [], n2 = document.head.firstChild;
            Array.from(t3).forEach(function(t4) {
              t4[de] = t4[de] || e3, t4[de] === e3 && document.head.insertBefore(t4, n2);
            });
            var r2 = {};
            Array.from(document.querySelectorAll("style[".concat(ue, "]"))).forEach(function(t4) {
              var n3, o2 = t4.getAttribute(ue);
              r2[o2] ? t4[de] === e3 && (null === (n3 = t4.parentNode) || void 0 === n3 || n3.removeChild(t4)) : r2[o2] = true;
            });
          }
          return new le(e3);
        }(), defaultCache: true });
        const pe = fe;
        new RegExp("CALC_UNIT", "g");
        var me = function() {
          function e3() {
            re(this, e3), I(this, "cache", void 0), I(this, "keys", void 0), I(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
          }
          return ie(e3, [{ key: "size", value: function() {
            return this.keys.length;
          } }, { key: "internalGet", value: function(e4) {
            var t3, n2, r2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o2 = { map: this.cache };
            return e4.forEach(function(e5) {
              var t4;
              o2 = o2 ? null === (t4 = o2) || void 0 === t4 || null === (t4 = t4.map) || void 0 === t4 ? void 0 : t4.get(e5) : void 0;
            }), null !== (t3 = o2) && void 0 !== t3 && t3.value && r2 && (o2.value[1] = this.cacheCallTimes++), null === (n2 = o2) || void 0 === n2 ? void 0 : n2.value;
          } }, { key: "get", value: function(e4) {
            var t3;
            return null === (t3 = this.internalGet(e4, true)) || void 0 === t3 ? void 0 : t3[0];
          } }, { key: "has", value: function(e4) {
            return !!this.internalGet(e4);
          } }, { key: "set", value: function(t3, n2) {
            var r2 = this;
            if (!this.has(t3)) {
              if (this.size() + 1 > e3.MAX_CACHE_SIZE + e3.MAX_CACHE_OFFSET) {
                var o2 = this.keys.reduce(function(e4, t4) {
                  var n3 = N(e4, 2)[1];
                  return r2.internalGet(t4)[1] < n3 ? [t4, r2.internalGet(t4)[1]] : e4;
                }, [this.keys[0], this.cacheCallTimes]), i2 = N(o2, 1)[0];
                this.delete(i2);
              }
              this.keys.push(t3);
            }
            var a2 = this.cache;
            t3.forEach(function(e4, o3) {
              if (o3 === t3.length - 1)
                a2.set(e4, { value: [n2, r2.cacheCallTimes++] });
              else {
                var i3 = a2.get(e4);
                i3 ? i3.map || (i3.map = /* @__PURE__ */ new Map()) : a2.set(e4, { map: /* @__PURE__ */ new Map() }), a2 = a2.get(e4).map;
              }
            });
          } }, { key: "deleteByPath", value: function(e4, t3) {
            var n2, r2 = e4.get(t3[0]);
            if (1 === t3.length)
              return r2.map ? e4.set(t3[0], { map: r2.map }) : e4.delete(t3[0]), null === (n2 = r2.value) || void 0 === n2 ? void 0 : n2[0];
            var o2 = this.deleteByPath(r2.map, t3.slice(1));
            return r2.map && 0 !== r2.map.size || r2.value || e4.delete(t3[0]), o2;
          } }, { key: "delete", value: function(e4) {
            if (this.has(e4))
              return this.keys = this.keys.filter(function(t3) {
                return !function(e5, t4) {
                  if (e5.length !== t4.length)
                    return false;
                  for (var n2 = 0; n2 < e5.length; n2++)
                    if (e5[n2] !== t4[n2])
                      return false;
                  return true;
                }(t3, e4);
              }), this.deleteByPath(this.cache, e4);
          } }]), e3;
        }();
        I(me, "MAX_CACHE_SIZE", 20), I(me, "MAX_CACHE_OFFSET", 5);
        var ge = 0, he = function() {
          function e3(t3) {
            re(this, e3), I(this, "derivatives", void 0), I(this, "id", void 0), this.derivatives = Array.isArray(t3) ? t3 : [t3], this.id = ge, 0 === t3.length && t3.length, ge += 1;
          }
          return ie(e3, [{ key: "getDerivativeToken", value: function(e4) {
            return this.derivatives.reduce(function(t3, n2) {
              return n2(e4, t3);
            }, void 0);
          } }]), e3;
        }(), ve = new me();
        function be(e3) {
          var t3 = Array.isArray(e3) ? e3 : [e3];
          return ve.has(t3) || ve.set(t3, new he(t3)), ve.get(t3);
        }
        var ye = /* @__PURE__ */ new WeakMap(), Ce = {}, we = /* @__PURE__ */ new WeakMap();
        function xe(e3) {
          var t3 = we.get(e3) || "";
          return t3 || (Object.keys(e3).forEach(function(n2) {
            var r2 = e3[n2];
            t3 += n2, r2 instanceof he ? t3 += r2.id : r2 && "object" === O(r2) ? t3 += xe(r2) : t3 += r2;
          }), t3 = B(t3), we.set(e3, t3)), t3;
        }
        function Se(e3, t3) {
          return B("".concat(t3, "_").concat(xe(e3)));
        }
        "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, "");
        var Ae = T();
        function Ee(e3) {
          return "number" == typeof e3 ? "".concat(e3, "px") : e3;
        }
        function ke(e3, t3, n2) {
          var r2;
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
            return e3;
          var o2 = R(R({}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}), {}, (I(r2 = {}, ce, t3), I(r2, ue, n2), r2)), i2 = Object.keys(o2).map(function(e4) {
            var t4 = o2[e4];
            return t4 ? "".concat(e4, '="').concat(t4, '"') : null;
          }).filter(function(e4) {
            return e4;
          }).join(" ");
          return "<style ".concat(i2, ">").concat(e3, "</style>");
        }
        var Oe = function(e3) {
          var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return "--".concat(t3 ? "".concat(t3, "-") : "").concat(e3).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
        }, Pe = function(e3, t3, n2) {
          return Object.keys(e3).length ? ".".concat(t3).concat(null != n2 && n2.scope ? ".".concat(n2.scope) : "", "{").concat(Object.entries(e3).map(function(e4) {
            var t4 = N(e4, 2), n3 = t4[0], r2 = t4[1];
            return "".concat(n3, ":").concat(r2, ";");
          }).join(""), "}") : "";
        }, Ie = function(e3, t3, n2) {
          var r2 = {}, o2 = {};
          return Object.entries(e3).forEach(function(e4) {
            var t4, i2, a2 = N(e4, 2), s2 = a2[0], l2 = a2[1];
            if (null != n2 && null !== (t4 = n2.preserve) && void 0 !== t4 && t4[s2])
              o2[s2] = l2;
            else if (!("string" != typeof l2 && "number" != typeof l2 || null != n2 && null !== (i2 = n2.ignore) && void 0 !== i2 && i2[s2])) {
              var c2, u2 = Oe(s2, null == n2 ? void 0 : n2.prefix);
              r2[u2] = "number" != typeof l2 || null != n2 && null !== (c2 = n2.unitless) && void 0 !== c2 && c2[s2] ? String(l2) : "".concat(l2, "px"), o2[s2] = "var(".concat(u2, ")");
            }
          }), [o2, Pe(r2, t3, { scope: null == n2 ? void 0 : n2.scope })];
        }, je = T() ? t2.useLayoutEffect : t2.useEffect, $e = function(e3, n2) {
          var r2 = t2.useRef(true);
          je(function() {
            return e3(r2.current);
          }, n2), je(function() {
            return r2.current = false, function() {
              r2.current = true;
            };
          }, []);
        }, Ne = function(e3, t3) {
          $e(function(t4) {
            if (!t4)
              return e3();
          }, t3);
        };
        const Me = $e;
        var Re = R({}, t2).useInsertionEffect;
        const Be = Re ? function(e3, t3, n2) {
          return Re(function() {
            return e3(), t3();
          }, n2);
        } : function(e3, n2, r2) {
          t2.useMemo(e3, r2), Me(function() {
            return n2(true);
          }, r2);
        }, Te = void 0 !== R({}, t2).useInsertionEffect ? function(e3) {
          var n2 = [], r2 = false;
          return t2.useEffect(function() {
            return r2 = false, function() {
              r2 = true, n2.length && n2.forEach(function(e4) {
                return e4();
              });
            };
          }, e3), function(e4) {
            r2 || n2.push(e4);
          };
        } : function() {
          return function(e3) {
            e3();
          };
        };
        function Fe(e3, n2, r2, o2, i2) {
          var a2 = t2.useContext(pe).cache, s2 = ae([e3].concat(x(n2))), l2 = Te([s2]), c2 = function(e4) {
            a2.opUpdate(s2, function(t3) {
              var n3 = N(t3 || [void 0, void 0], 2), o3 = n3[0], i3 = [void 0 === o3 ? 0 : o3, n3[1] || r2()];
              return e4 ? e4(i3) : i3;
            });
          };
          t2.useMemo(function() {
            c2();
          }, [s2]);
          var u2 = a2.opGet(s2)[1];
          return Be(function() {
            null == i2 || i2(u2);
          }, function(e4) {
            return c2(function(t3) {
              var n3 = N(t3, 2), r3 = n3[0], o3 = n3[1];
              return e4 && 0 === r3 && (null == i2 || i2(u2)), [r3 + 1, o3];
            }), function() {
              a2.opUpdate(s2, function(t3) {
                var n3 = N(t3 || [], 2), r3 = n3[0], i3 = void 0 === r3 ? 0 : r3, c3 = n3[1];
                return 0 == i3 - 1 ? (l2(function() {
                  !e4 && a2.opGet(s2) || null == o2 || o2(c3, false);
                }), null) : [i3 - 1, c3];
              });
            };
          }, [s2]), u2;
        }
        var Le = {}, ze = /* @__PURE__ */ new Map();
        var He = "token";
        function De(e3, n2) {
          var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = (0, t2.useContext)(pe), i2 = o2.cache.instanceId, a2 = o2.container, s2 = r2.salt, l2 = void 0 === s2 ? "" : s2, c2 = r2.override, u2 = void 0 === c2 ? Le : c2, d2 = r2.formatToken, f2 = r2.getComputedToken, p2 = r2.cssVar, m2 = function(e4, t3) {
            for (var r3 = ye, o3 = 0; o3 < t3.length; o3 += 1) {
              var i3 = t3[o3];
              r3.has(i3) || r3.set(i3, /* @__PURE__ */ new WeakMap()), r3 = r3.get(i3);
            }
            return r3.has(Ce) || r3.set(Ce, Object.assign.apply(Object, [{}].concat(x(n2)))), r3.get(Ce);
          }(0, n2), g2 = xe(m2), h2 = xe(u2), v2 = p2 ? xe(p2) : "", b2 = Fe(He, [l2, e3.id, g2, h2, v2], function() {
            var t3, n3 = f2 ? f2(m2, u2, e3) : function(e4, t4, n4, r4) {
              var o4 = R(R({}, n4.getDerivativeToken(e4)), t4);
              return r4 && (o4 = r4(o4)), o4;
            }(m2, u2, e3, d2), r3 = R({}, n3), o3 = "";
            if (p2) {
              var i3 = N(Ie(n3, p2.key, { prefix: p2.prefix, ignore: p2.ignore, unitless: p2.unitless, preserve: p2.preserve }), 2);
              n3 = i3[0], o3 = i3[1];
            }
            var a3 = Se(n3, l2);
            n3._tokenKey = a3, r3._tokenKey = Se(r3, l2);
            var s3 = null !== (t3 = null == p2 ? void 0 : p2.key) && void 0 !== t3 ? t3 : a3;
            n3._themeKey = s3, function(e4) {
              ze.set(e4, (ze.get(e4) || 0) + 1);
            }(s3);
            var c3 = "".concat("css", "-").concat(B(a3));
            return n3._hashId = c3, [n3, c3, r3, o3, (null == p2 ? void 0 : p2.key) || ""];
          }, function(e4) {
            !function(e5, t3) {
              ze.set(e5, (ze.get(e5) || 0) - 1);
              var n3 = Array.from(ze.keys()), r3 = n3.filter(function(e6) {
                return (ze.get(e6) || 0) <= 0;
              });
              n3.length - r3.length > 0 && r3.forEach(function(e6) {
                !function(e7, t4) {
                  "undefined" != typeof document && document.querySelectorAll("style[".concat(ce, '="').concat(e7, '"]')).forEach(function(e8) {
                    var n4;
                    e8[de] === t4 && (null === (n4 = e8.parentNode) || void 0 === n4 || n4.removeChild(e8));
                  });
                }(e6, t3), ze.delete(e6);
              });
            }(e4[0]._themeKey, i2);
          }, function(e4) {
            var t3 = N(e4, 4), n3 = t3[0], r3 = t3[3];
            if (p2 && r3) {
              var o3 = X(r3, B("css-variables-".concat(n3._themeKey)), { mark: ue, prepend: "queue", attachTo: a2, priority: -999 });
              o3[de] = i2, o3.setAttribute(ce, n3._themeKey);
            }
          });
          return b2;
        }
        function qe() {
          return qe = Object.assign ? Object.assign.bind() : function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n2 = arguments[t3];
              for (var r2 in n2)
                ({}).hasOwnProperty.call(n2, r2) && (e3[r2] = n2[r2]);
            }
            return e3;
          }, qe.apply(null, arguments);
        }
        const Ve = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
        var We = "comm", Ke = "rule", Ge = "decl", Xe = Math.abs, Ue = String.fromCharCode;
        function _e(e3) {
          return e3.trim();
        }
        function Qe(e3, t3, n2) {
          return e3.replace(t3, n2);
        }
        function Ye(e3, t3, n2) {
          return e3.indexOf(t3, n2);
        }
        function Ze(e3, t3) {
          return 0 | e3.charCodeAt(t3);
        }
        function Je(e3, t3, n2) {
          return e3.slice(t3, n2);
        }
        function et(e3) {
          return e3.length;
        }
        function tt(e3, t3) {
          return t3.push(e3), e3;
        }
        function nt(e3, t3) {
          for (var n2 = "", r2 = 0; r2 < e3.length; r2++)
            n2 += t3(e3[r2], r2, e3, t3) || "";
          return n2;
        }
        function rt(e3, t3, n2, r2) {
          switch (e3.type) {
            case "@layer":
              if (e3.children.length)
                break;
            case "@import":
            case Ge:
              return e3.return = e3.return || e3.value;
            case We:
              return "";
            case "@keyframes":
              return e3.return = e3.value + "{" + nt(e3.children, r2) + "}";
            case Ke:
              if (!et(e3.value = e3.props.join(",")))
                return "";
          }
          return et(n2 = nt(e3.children, r2)) ? e3.return = e3.value + "{" + n2 + "}" : "";
        }
        Object.assign;
        var ot = 1, it = 1, at = 0, st = 0, lt = 0, ct = "";
        function ut(e3, t3, n2, r2, o2, i2, a2, s2) {
          return { value: e3, root: t3, parent: n2, type: r2, props: o2, children: i2, line: ot, column: it, length: a2, return: "", siblings: s2 };
        }
        function dt() {
          return lt = st > 0 ? Ze(ct, --st) : 0, it--, 10 === lt && (it = 1, ot--), lt;
        }
        function ft() {
          return lt = st < at ? Ze(ct, st++) : 0, it++, 10 === lt && (it = 1, ot++), lt;
        }
        function pt() {
          return Ze(ct, st);
        }
        function mt() {
          return st;
        }
        function gt(e3, t3) {
          return Je(ct, e3, t3);
        }
        function ht(e3) {
          switch (e3) {
            case 0:
            case 9:
            case 10:
            case 13:
            case 32:
              return 5;
            case 33:
            case 43:
            case 44:
            case 47:
            case 62:
            case 64:
            case 126:
            case 59:
            case 123:
            case 125:
              return 4;
            case 58:
              return 3;
            case 34:
            case 39:
            case 40:
            case 91:
              return 2;
            case 41:
            case 93:
              return 1;
          }
          return 0;
        }
        function vt(e3) {
          return _e(gt(st - 1, Ct(91 === e3 ? e3 + 2 : 40 === e3 ? e3 + 1 : e3)));
        }
        function bt(e3) {
          for (; (lt = pt()) && lt < 33; )
            ft();
          return ht(e3) > 2 || ht(lt) > 3 ? "" : " ";
        }
        function yt(e3, t3) {
          for (; --t3 && ft() && !(lt < 48 || lt > 102 || lt > 57 && lt < 65 || lt > 70 && lt < 97); )
            ;
          return gt(e3, mt() + (t3 < 6 && 32 == pt() && 32 == ft()));
        }
        function Ct(e3) {
          for (; ft(); )
            switch (lt) {
              case e3:
                return st;
              case 34:
              case 39:
                34 !== e3 && 39 !== e3 && Ct(lt);
                break;
              case 40:
                41 === e3 && Ct(e3);
                break;
              case 92:
                ft();
            }
          return st;
        }
        function wt(e3, t3) {
          for (; ft() && e3 + lt !== 57 && (e3 + lt !== 84 || 47 !== pt()); )
            ;
          return "/*" + gt(t3, st - 1) + "*" + Ue(47 === e3 ? e3 : ft());
        }
        function xt(e3) {
          for (; !ht(pt()); )
            ft();
          return gt(e3, st);
        }
        function St(e3) {
          return function(e4) {
            return ct = "", e4;
          }(At("", null, null, null, [""], e3 = function(e4) {
            return ot = it = 1, at = et(ct = e4), st = 0, [];
          }(e3), 0, [0], e3));
        }
        function At(e3, t3, n2, r2, o2, i2, a2, s2, l2) {
          for (var c2 = 0, u2 = 0, d2 = a2, f2 = 0, p2 = 0, m2 = 0, g2 = 1, h2 = 1, v2 = 1, b2 = 0, y2 = "", C2 = o2, w2 = i2, x2 = r2, S2 = y2; h2; )
            switch (m2 = b2, b2 = ft()) {
              case 40:
                if (108 != m2 && 58 == Ze(S2, d2 - 1)) {
                  -1 != Ye(S2 += Qe(vt(b2), "&", "&\f"), "&\f", Xe(c2 ? s2[c2 - 1] : 0)) && (v2 = -1);
                  break;
                }
              case 34:
              case 39:
              case 91:
                S2 += vt(b2);
                break;
              case 9:
              case 10:
              case 13:
              case 32:
                S2 += bt(m2);
                break;
              case 92:
                S2 += yt(mt() - 1, 7);
                continue;
              case 47:
                switch (pt()) {
                  case 42:
                  case 47:
                    tt(kt(wt(ft(), mt()), t3, n2, l2), l2), 5 != ht(m2 || 1) && 5 != ht(pt() || 1) || !et(S2) || " " === Je(S2, -1, void 0) || (S2 += " ");
                    break;
                  default:
                    S2 += "/";
                }
                break;
              case 123 * g2:
                s2[c2++] = et(S2) * v2;
              case 125 * g2:
              case 59:
              case 0:
                switch (b2) {
                  case 0:
                  case 125:
                    h2 = 0;
                  case 59 + u2:
                    -1 == v2 && (S2 = Qe(S2, /\f/g, "")), p2 > 0 && (et(S2) - d2 || 0 === g2 && 47 === m2) && tt(p2 > 32 ? Ot(S2 + ";", r2, n2, d2 - 1, l2) : Ot(Qe(S2, " ", "") + ";", r2, n2, d2 - 2, l2), l2);
                    break;
                  case 59:
                    S2 += ";";
                  default:
                    if (tt(x2 = Et(S2, t3, n2, c2, u2, o2, s2, y2, C2 = [], w2 = [], d2, i2), i2), 123 === b2)
                      if (0 === u2)
                        At(S2, t3, x2, x2, C2, i2, d2, s2, w2);
                      else
                        switch (99 === f2 && 110 === Ze(S2, 3) ? 100 : f2) {
                          case 100:
                          case 108:
                          case 109:
                          case 115:
                            At(e3, x2, x2, r2 && tt(Et(e3, x2, x2, 0, 0, o2, s2, y2, o2, C2 = [], d2, w2), w2), o2, w2, d2, s2, r2 ? C2 : w2);
                            break;
                          default:
                            At(S2, x2, x2, x2, [""], w2, 0, s2, w2);
                        }
                }
                c2 = u2 = p2 = 0, g2 = v2 = 1, y2 = S2 = "", d2 = a2;
                break;
              case 58:
                d2 = 1 + et(S2), p2 = m2;
              default:
                if (g2 < 1) {
                  if (123 == b2)
                    --g2;
                  else if (125 == b2 && 0 == g2++ && 125 == dt())
                    continue;
                }
                switch (S2 += Ue(b2), b2 * g2) {
                  case 38:
                    v2 = u2 > 0 ? 1 : (S2 += "\f", -1);
                    break;
                  case 44:
                    s2[c2++] = (et(S2) - 1) * v2, v2 = 1;
                    break;
                  case 64:
                    45 === pt() && (S2 += vt(ft())), f2 = pt(), u2 = d2 = et(y2 = S2 += xt(mt())), b2++;
                    break;
                  case 45:
                    45 === m2 && 2 == et(S2) && (g2 = 0);
                }
            }
          return i2;
        }
        function Et(e3, t3, n2, r2, o2, i2, a2, s2, l2, c2, u2, d2) {
          for (var f2 = o2 - 1, p2 = 0 === o2 ? i2 : [""], m2 = function(e4) {
            return e4.length;
          }(p2), g2 = 0, h2 = 0, v2 = 0; g2 < r2; ++g2)
            for (var b2 = 0, y2 = Je(e3, f2 + 1, f2 = Xe(h2 = a2[g2])), C2 = e3; b2 < m2; ++b2)
              (C2 = _e(h2 > 0 ? p2[b2] + " " + y2 : Qe(y2, /&\f/g, p2[b2]))) && (l2[v2++] = C2);
          return ut(e3, t3, n2, 0 === o2 ? Ke : s2, l2, c2, u2, d2);
        }
        function kt(e3, t3, n2, r2) {
          return ut(e3, t3, n2, We, Ue(lt), Je(e3, 2, -2), 0, r2);
        }
        function Ot(e3, t3, n2, r2, o2) {
          return ut(e3, t3, n2, Ge, Je(e3, 0, r2), Je(e3, r2 + 1, -1), r2, o2);
        }
        var Pt, It = "data-ant-cssinjs-cache-path", jt = "_FILE_STYLE__", $t = true;
        var Nt = "_multi_value_";
        function Mt(e3) {
          return nt(St(e3), rt).replace(/\{%%%\:[^;];}/g, ";");
        }
        var Rt = function e3(t3) {
          var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { root: true, parentSelectors: [] }, o2 = r2.root, i2 = r2.injectHash, a2 = r2.parentSelectors, s2 = n2.hashId, l2 = n2.layer, c2 = (n2.path, n2.hashPriority), u2 = n2.transformers, d2 = void 0 === u2 ? [] : u2, f2 = (n2.linters, ""), p2 = {};
          function m2(t4) {
            var r3 = t4.getName(s2);
            if (!p2[r3]) {
              var o3 = N(e3(t4.style, n2, { root: false, parentSelectors: a2 }), 1)[0];
              p2[r3] = "@keyframes ".concat(t4.getName(s2)).concat(o3);
            }
          }
          var g2 = function e4(t4) {
            var n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return t4.forEach(function(t5) {
              Array.isArray(t5) ? e4(t5, n3) : t5 && n3.push(t5);
            }), n3;
          }(Array.isArray(t3) ? t3 : [t3]);
          return g2.forEach(function(t4) {
            var r3 = "string" != typeof t4 || o2 ? t4 : {};
            if ("string" == typeof r3)
              f2 += "".concat(r3, "\n");
            else if (r3._keyframe)
              m2(r3);
            else {
              var l3 = d2.reduce(function(e4, t5) {
                var n3;
                return (null == t5 || null === (n3 = t5.visit) || void 0 === n3 ? void 0 : n3.call(t5, e4)) || e4;
              }, r3);
              Object.keys(l3).forEach(function(t5) {
                var r4 = l3[t5];
                if ("object" !== O(r4) || !r4 || "animationName" === t5 && r4._keyframe || function(e4) {
                  return "object" === O(e4) && e4 && ("_skip_check_" in e4 || Nt in e4);
                }(r4)) {
                  let w2 = function(e4, t6) {
                    var n3 = e4.replace(/[A-Z]/g, function(e5) {
                      return "-".concat(e5.toLowerCase());
                    }), r5 = t6;
                    Ve[e4] || "number" != typeof r5 || 0 === r5 || (r5 = "".concat(r5, "px")), "animationName" === e4 && null != t6 && t6._keyframe && (m2(t6), r5 = t6.getName(s2)), f2 += "".concat(n3, ":").concat(r5, ";");
                  };
                  var u3;
                  var d3 = null !== (u3 = null == r4 ? void 0 : r4.value) && void 0 !== u3 ? u3 : r4;
                  "object" === O(r4) && null != r4 && r4[Nt] && Array.isArray(d3) ? d3.forEach(function(e4) {
                    w2(t5, e4);
                  }) : w2(t5, d3);
                } else {
                  var g3 = false, h2 = t5.trim(), v2 = false;
                  (o2 || i2) && s2 ? h2.startsWith("@") ? g3 = true : h2 = function(e4, t6, n3) {
                    if (!t6)
                      return e4;
                    var r5 = ".".concat(t6), o3 = "low" === n3 ? ":where(".concat(r5, ")") : r5;
                    return e4.split(",").map(function(e5) {
                      var t7, n4 = e5.trim().split(/\s+/), r6 = n4[0] || "", i3 = (null === (t7 = r6.match(/^\w+/)) || void 0 === t7 ? void 0 : t7[0]) || "";
                      return [r6 = "".concat(i3).concat(o3).concat(r6.slice(i3.length))].concat(x(n4.slice(1))).join(" ");
                    }).join(",");
                  }("&" === h2 ? "" : t5, s2, c2) : !o2 || s2 || "&" !== h2 && "" !== h2 || (h2 = "", v2 = true);
                  var b2 = N(e3(r4, n2, { root: v2, injectHash: g3, parentSelectors: [].concat(x(a2), [h2]) }), 2), y2 = b2[0], C2 = b2[1];
                  p2 = R(R({}, p2), C2), f2 += "".concat(h2).concat(y2);
                }
              });
            }
          }), o2 ? l2 && (f2 && (f2 = "@layer ".concat(l2.name, " {").concat(f2, "}")), l2.dependencies && (p2["@layer ".concat(l2.name)] = l2.dependencies.map(function(e4) {
            return "@layer ".concat(e4, ", ").concat(l2.name, ";");
          }).join("\n"))) : f2 = "{".concat(f2, "}"), [f2, p2];
        };
        function Bt(e3, t3) {
          return B("".concat(e3.join("%")).concat(t3));
        }
        function Tt() {
          return null;
        }
        var Ft = "style";
        function Lt(e3, n2) {
          var r2 = e3.token, o2 = e3.path, i2 = e3.hashId, a2 = e3.layer, s2 = e3.nonce, l2 = e3.clientOnly, c2 = e3.order, u2 = void 0 === c2 ? 0 : c2, d2 = t2.useContext(pe), f2 = d2.autoClear, p2 = (d2.mock, d2.defaultCache), m2 = d2.hashPriority, g2 = d2.container, h2 = d2.ssrInline, v2 = d2.transformers, b2 = d2.linters, y2 = d2.cache, C2 = d2.layer, w2 = r2._tokenKey, S2 = [w2];
          C2 && S2.push("layer"), S2.push.apply(S2, x(o2));
          var A2 = Ae, E2 = Fe(Ft, S2, function() {
            var e4 = S2.join("|");
            if (function(e5) {
              return function() {
                if (!Pt && (Pt = {}, T())) {
                  var e6 = document.createElement("div");
                  e6.className = It, e6.style.position = "fixed", e6.style.visibility = "hidden", e6.style.top = "-9999px", document.body.appendChild(e6);
                  var t4 = getComputedStyle(e6).content || "";
                  (t4 = t4.replace(/^"/, "").replace(/"$/, "")).split(";").forEach(function(e7) {
                    var t5 = N(e7.split(":"), 2), n4 = t5[0], r5 = t5[1];
                    Pt[n4] = r5;
                  });
                  var n3, r4 = document.querySelector("style[".concat(It, "]"));
                  r4 && ($t = false, null === (n3 = r4.parentNode) || void 0 === n3 || n3.removeChild(r4)), document.body.removeChild(e6);
                }
              }(), !!Pt[e5];
            }(e4)) {
              var t3 = function(e5) {
                var t4 = Pt[e5], n3 = null;
                if (t4 && T())
                  if ($t)
                    n3 = jt;
                  else {
                    var r4 = document.querySelector("style[".concat(ue, '="').concat(Pt[e5], '"]'));
                    r4 ? n3 = r4.innerHTML : delete Pt[e5];
                  }
                return [n3, t4];
              }(e4), r3 = N(t3, 2), s3 = r3[0], c3 = r3[1];
              if (s3)
                return [s3, w2, c3, {}, l2, u2];
            }
            var d3 = n2(), f3 = N(Rt(d3, { hashId: i2, hashPriority: m2, layer: C2 ? a2 : void 0, path: o2.join("-"), transformers: v2, linters: b2 }), 2), p3 = f3[0], g3 = f3[1], h3 = Mt(p3), y3 = Bt(S2, h3);
            return [h3, w2, y3, g3, l2, u2];
          }, function(e4, t3) {
            var n3 = N(e4, 3)[2];
            (t3 || f2) && Ae && G(n3, { mark: ue });
          }, function(e4) {
            var t3 = N(e4, 4), n3 = t3[0], r3 = (t3[1], t3[2]), o3 = t3[3];
            if (A2 && n3 !== jt) {
              var i3 = { mark: ue, prepend: !C2 && "queue", attachTo: g2, priority: u2 }, a3 = "function" == typeof s2 ? s2() : s2;
              a3 && (i3.csp = { nonce: a3 });
              var l3 = [], c3 = [];
              Object.keys(o3).forEach(function(e5) {
                e5.startsWith("@layer") ? l3.push(e5) : c3.push(e5);
              }), l3.forEach(function(e5) {
                X(Mt(o3[e5]), "_layer-".concat(e5), R(R({}, i3), {}, { prepend: true }));
              });
              var d3 = X(n3, r3, i3);
              d3[de] = y2.instanceId, d3.setAttribute(ce, w2), c3.forEach(function(e5) {
                X(Mt(o3[e5]), "_effect-".concat(e5), i3);
              });
            }
          }), k2 = N(E2, 3), O2 = k2[0], P2 = k2[1], j2 = k2[2];
          return function(e4) {
            var n3, r3;
            return n3 = h2 && !A2 && p2 ? t2.createElement("style", qe({}, (I(r3 = {}, ce, P2), I(r3, ue, j2), r3), { dangerouslySetInnerHTML: { __html: O2 } })) : t2.createElement(Tt, null), t2.createElement(t2.Fragment, null, n3, e4);
          };
        }
        var zt = "cssVar";
        var Ht;
        I(Ht = {}, Ft, function(e3, t3, n2) {
          var r2 = N(e3, 6), o2 = r2[0], i2 = r2[1], a2 = r2[2], s2 = r2[3], l2 = r2[4], c2 = r2[5], u2 = (n2 || {}).plain;
          if (l2)
            return null;
          var d2 = o2, f2 = { "data-rc-order": "prependQueue", "data-rc-priority": "".concat(c2) };
          return d2 = ke(o2, i2, a2, f2, u2), s2 && Object.keys(s2).forEach(function(e4) {
            if (!t3[e4]) {
              t3[e4] = true;
              var n3 = ke(Mt(s2[e4]), i2, "_effect-".concat(e4), f2, u2);
              e4.startsWith("@layer") ? d2 = n3 + d2 : d2 += n3;
            }
          }), [c2, a2, d2];
        }), I(Ht, He, function(e3, t3, n2) {
          var r2 = N(e3, 5), o2 = r2[2], i2 = r2[3], a2 = r2[4], s2 = (n2 || {}).plain;
          if (!i2)
            return null;
          var l2 = o2._tokenKey;
          return [-999, l2, ke(i2, a2, l2, { "data-rc-order": "prependQueue", "data-rc-priority": "".concat(-999) }, s2)];
        }), I(Ht, zt, function(e3, t3, n2) {
          var r2 = N(e3, 4), o2 = r2[1], i2 = r2[2], a2 = r2[3], s2 = (n2 || {}).plain;
          return o2 ? [-999, i2, ke(o2, a2, i2, { "data-rc-order": "prependQueue", "data-rc-priority": "".concat(-999) }, s2)] : null;
        });
        var Dt = function() {
          function e3(t3, n2) {
            re(this, e3), I(this, "name", void 0), I(this, "style", void 0), I(this, "_keyframe", true), this.name = t3, this.style = n2;
          }
          return ie(e3, [{ key: "getName", value: function() {
            var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e4 ? "".concat(e4, "-").concat(this.name) : this.name;
          } }]), e3;
        }();
        const qt = Dt;
        function Vt(e3) {
          return e3.notSplit = true, e3;
        }
        Vt(["borderTop", "borderBottom"]), Vt(["borderTop"]), Vt(["borderBottom"]), Vt(["borderLeft", "borderRight"]), Vt(["borderLeft"]), Vt(["borderRight"]);
        const Wt = (0, t2.createContext)({});
        function Kt(e3, t3) {
          for (var n2 = e3, r2 = 0; r2 < t3.length; r2 += 1) {
            if (null == n2)
              return;
            n2 = n2[t3[r2]];
          }
          return n2;
        }
        function Gt(e3, t3, n2, r2) {
          if (!t3.length)
            return n2;
          var o2, i2, a2 = j(o2 = t3) || C(o2) || w(o2) || $(), s2 = a2[0], l2 = a2.slice(1);
          return i2 = e3 || "number" != typeof s2 ? Array.isArray(e3) ? x(e3) : R({}, e3) : [], r2 && void 0 === n2 && 1 === l2.length ? delete i2[s2][l2[0]] : i2[s2] = Gt(i2[s2], l2, n2, r2), i2;
        }
        function Xt(e3, t3, n2) {
          var r2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          return t3.length && r2 && void 0 === n2 && !Kt(e3, t3.slice(0, -1)) ? e3 : Gt(e3, t3, n2, r2);
        }
        function Ut(e3) {
          return Array.isArray(e3) ? [] : {};
        }
        var _t = "undefined" == typeof Reflect ? Object.keys : Reflect.ownKeys;
        function Qt() {
          for (var e3 = arguments.length, t3 = new Array(e3), n2 = 0; n2 < e3; n2++)
            t3[n2] = arguments[n2];
          var r2 = Ut(t3[0]);
          return t3.forEach(function(e4) {
            !function t4(n3, o2) {
              var i2, a2 = new Set(o2), s2 = Kt(e4, n3), l2 = Array.isArray(s2);
              if (l2 || "object" === O(i2 = s2) && null !== i2 && Object.getPrototypeOf(i2) === Object.prototype) {
                if (!a2.has(s2)) {
                  a2.add(s2);
                  var c2 = Kt(r2, n3);
                  l2 ? r2 = Xt(r2, n3, []) : c2 && "object" === O(c2) || (r2 = Xt(r2, n3, Ut(s2))), _t(s2).forEach(function(e5) {
                    t4([].concat(x(n3), [e5]), a2);
                  });
                }
              } else
                r2 = Xt(r2, n3, s2);
            }([]);
          }), r2;
        }
        function Yt() {
        }
        const Zt = t2.createContext({}), Jt = () => {
          const e3 = () => {
          };
          return e3.deprecated = Yt, e3;
        }, en = (0, t2.createContext)(void 0), tn = R(R({}, { yearFormat: "YYYY", dayFormat: "D", cellMeridiemFormat: "A", monthBeforeYear: true }), {}, { locale: "en_US", today: "Today", now: "Now", backToToday: "Back to today", ok: "OK", clear: "Clear", month: "Month", year: "Year", timeSelect: "select time", dateSelect: "select date", weekSelect: "Choose a week", monthSelect: "Choose a month", yearSelect: "Choose a year", decadeSelect: "Choose a decade", dateFormat: "M/D/YYYY", dateTimeFormat: "M/D/YYYY HH:mm:ss", previousMonth: "Previous month (PageUp)", nextMonth: "Next month (PageDown)", previousYear: "Last year (Control + left)", nextYear: "Next year (Control + right)", previousDecade: "Last decade", nextDecade: "Next decade", previousCentury: "Last century", nextCentury: "Next century" }), nn = { placeholder: "Select time", rangePlaceholder: ["Start time", "End time"] }, rn = { lang: Object.assign({ placeholder: "Select date", yearPlaceholder: "Select year", quarterPlaceholder: "Select quarter", monthPlaceholder: "Select month", weekPlaceholder: "Select week", rangePlaceholder: ["Start date", "End date"], rangeYearPlaceholder: ["Start year", "End year"], rangeQuarterPlaceholder: ["Start quarter", "End quarter"], rangeMonthPlaceholder: ["Start month", "End month"], rangeWeekPlaceholder: ["Start week", "End week"] }, tn), timePickerLocale: Object.assign({}, nn) }, on = "${label} is not a valid ${type}", an = { locale: "en", Pagination: { items_per_page: "/ page", jump_to: "Go to", jump_to_confirm: "confirm", page: "Page", prev_page: "Previous Page", next_page: "Next Page", prev_5: "Previous 5 Pages", next_5: "Next 5 Pages", prev_3: "Previous 3 Pages", next_3: "Next 3 Pages", page_size: "Page Size" }, DatePicker: rn, TimePicker: nn, Calendar: rn, global: { placeholder: "Please select" }, Table: { filterTitle: "Filter menu", filterConfirm: "OK", filterReset: "Reset", filterEmptyText: "No filters", filterCheckall: "Select all items", filterSearchPlaceholder: "Search in filters", emptyText: "No data", selectAll: "Select current page", selectInvert: "Invert current page", selectNone: "Clear all data", selectionAll: "Select all data", sortTitle: "Sort", expand: "Expand row", collapse: "Collapse row", triggerDesc: "Click to sort descending", triggerAsc: "Click to sort ascending", cancelSort: "Click to cancel sorting" }, Tour: { Next: "Next", Previous: "Previous", Finish: "Finish" }, Modal: { okText: "OK", cancelText: "Cancel", justOkText: "OK" }, Popconfirm: { okText: "OK", cancelText: "Cancel" }, Transfer: { titles: ["", ""], searchPlaceholder: "Search here", itemUnit: "item", itemsUnit: "items", remove: "Remove", selectCurrent: "Select current page", removeCurrent: "Remove current page", selectAll: "Select all data", deselectAll: "Deselect all data", removeAll: "Remove all data", selectInvert: "Invert current page" }, Upload: { uploading: "Uploading...", removeFile: "Remove file", uploadError: "Upload error", previewFile: "Preview file", downloadFile: "Download file" }, Empty: { description: "No data" }, Icon: { icon: "icon" }, Text: { edit: "Edit", copy: "Copy", copied: "Copied", expand: "Expand", collapse: "Collapse" }, Form: { optional: "(optional)", defaultValidateMessages: { default: "Field validation error for ${label}", required: "Please enter ${label}", enum: "${label} must be one of [${enum}]", whitespace: "${label} cannot be a blank character", date: { format: "${label} date format is invalid", parse: "${label} cannot be converted to a date", invalid: "${label} is an invalid date" }, types: { string: on, method: on, array: on, object: on, number: on, date: on, boolean: on, integer: on, float: on, regexp: on, email: on, url: on, hex: on }, string: { len: "${label} must be ${len} characters", min: "${label} must be at least ${min} characters", max: "${label} must be up to ${max} characters", range: "${label} must be between ${min}-${max} characters" }, number: { len: "${label} must be equal to ${len}", min: "${label} must be minimum ${min}", max: "${label} must be maximum ${max}", range: "${label} must be between ${min}-${max}" }, array: { len: "Must be ${len} ${label}", min: "At least ${min} ${label}", max: "At most ${max} ${label}", range: "The amount of ${label} must be between ${min}-${max}" }, pattern: { mismatch: "${label} does not match the pattern ${pattern}" } } }, Image: { preview: "Preview" }, QRCode: { expired: "QR code expired", refresh: "Refresh", scanned: "Scanned" }, ColorPicker: { presetEmpty: "Empty", transparent: "Transparent", singleColor: "Single", gradientColor: "Gradient" } };
        let sn = Object.assign({}, an.Modal), ln = [];
        const cn = () => ln.reduce((e3, t3) => Object.assign(Object.assign({}, e3), t3), an.Modal);
        function un() {
          return sn;
        }
        const dn = (0, t2.createContext)(void 0), fn = (e3) => {
          const { locale: n2 = {}, children: r2, _ANT_MARK__: o2 } = e3;
          t2.useEffect(() => {
            const e4 = function(e5) {
              if (e5) {
                const t3 = Object.assign({}, e5);
                return ln.push(t3), sn = cn(), () => {
                  ln = ln.filter((e6) => e6 !== t3), sn = cn();
                };
              }
              sn = Object.assign({}, an.Modal);
            }(null == n2 ? void 0 : n2.Modal);
            return e4;
          }, [n2]);
          const i2 = t2.useMemo(() => Object.assign(Object.assign({}, n2), { exist: true }), [n2]);
          return t2.createElement(dn.Provider, { value: i2 }, r2);
        }, pn = Math.round;
        function mn(e3, t3) {
          const n2 = e3.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r2 = n2.map((e4) => parseFloat(e4));
          for (let e4 = 0; e4 < 3; e4 += 1)
            r2[e4] = t3(r2[e4] || 0, n2[e4] || "", e4);
          return n2[3] ? r2[3] = n2[3].includes("%") ? r2[3] / 100 : r2[3] : r2[3] = 1, r2;
        }
        const gn = (e3, t3, n2) => 0 === n2 ? e3 : e3 / 100;
        function hn(e3, t3) {
          const n2 = t3 || 255;
          return e3 > n2 ? n2 : e3 < 0 ? 0 : e3;
        }
        class vn {
          constructor(e3) {
            function t3(t4) {
              return t4[0] in e3 && t4[1] in e3 && t4[2] in e3;
            }
            if (I(this, "isValid", true), I(this, "r", 0), I(this, "g", 0), I(this, "b", 0), I(this, "a", 1), I(this, "_h", void 0), I(this, "_s", void 0), I(this, "_l", void 0), I(this, "_v", void 0), I(this, "_max", void 0), I(this, "_min", void 0), I(this, "_brightness", void 0), e3)
              if ("string" == typeof e3) {
                let r2 = function(e4) {
                  return n2.startsWith(e4);
                };
                const n2 = e3.trim();
                /^#?[A-F\d]{3,8}$/i.test(n2) ? this.fromHexString(n2) : r2("rgb") ? this.fromRgbString(n2) : r2("hsl") ? this.fromHslString(n2) : (r2("hsv") || r2("hsb")) && this.fromHsvString(n2);
              } else if (e3 instanceof vn)
                this.r = e3.r, this.g = e3.g, this.b = e3.b, this.a = e3.a, this._h = e3._h, this._s = e3._s, this._l = e3._l, this._v = e3._v;
              else if (t3("rgb"))
                this.r = hn(e3.r), this.g = hn(e3.g), this.b = hn(e3.b), this.a = "number" == typeof e3.a ? hn(e3.a, 1) : 1;
              else if (t3("hsl"))
                this.fromHsl(e3);
              else {
                if (!t3("hsv"))
                  throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(e3));
                this.fromHsv(e3);
              }
          }
          setR(e3) {
            return this._sc("r", e3);
          }
          setG(e3) {
            return this._sc("g", e3);
          }
          setB(e3) {
            return this._sc("b", e3);
          }
          setA(e3) {
            return this._sc("a", e3, 1);
          }
          setHue(e3) {
            const t3 = this.toHsv();
            return t3.h = e3, this._c(t3);
          }
          getLuminance() {
            function e3(e4) {
              const t3 = e4 / 255;
              return t3 <= 0.03928 ? t3 / 12.92 : Math.pow((t3 + 0.055) / 1.055, 2.4);
            }
            return 0.2126 * e3(this.r) + 0.7152 * e3(this.g) + 0.0722 * e3(this.b);
          }
          getHue() {
            if (void 0 === this._h) {
              const e3 = this.getMax() - this.getMin();
              this._h = 0 === e3 ? 0 : pn(60 * (this.r === this.getMax() ? (this.g - this.b) / e3 + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / e3 + 2 : (this.r - this.g) / e3 + 4));
            }
            return this._h;
          }
          getSaturation() {
            if (void 0 === this._s) {
              const e3 = this.getMax() - this.getMin();
              this._s = 0 === e3 ? 0 : e3 / this.getMax();
            }
            return this._s;
          }
          getLightness() {
            return void 0 === this._l && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
          }
          getValue() {
            return void 0 === this._v && (this._v = this.getMax() / 255), this._v;
          }
          getBrightness() {
            return void 0 === this._brightness && (this._brightness = (299 * this.r + 587 * this.g + 114 * this.b) / 1e3), this._brightness;
          }
          darken(e3 = 10) {
            const t3 = this.getHue(), n2 = this.getSaturation();
            let r2 = this.getLightness() - e3 / 100;
            return r2 < 0 && (r2 = 0), this._c({ h: t3, s: n2, l: r2, a: this.a });
          }
          lighten(e3 = 10) {
            const t3 = this.getHue(), n2 = this.getSaturation();
            let r2 = this.getLightness() + e3 / 100;
            return r2 > 1 && (r2 = 1), this._c({ h: t3, s: n2, l: r2, a: this.a });
          }
          mix(e3, t3 = 50) {
            const n2 = this._c(e3), r2 = t3 / 100, o2 = (e4) => (n2[e4] - this[e4]) * r2 + this[e4], i2 = { r: pn(o2("r")), g: pn(o2("g")), b: pn(o2("b")), a: pn(100 * o2("a")) / 100 };
            return this._c(i2);
          }
          tint(e3 = 10) {
            return this.mix({ r: 255, g: 255, b: 255, a: 1 }, e3);
          }
          shade(e3 = 10) {
            return this.mix({ r: 0, g: 0, b: 0, a: 1 }, e3);
          }
          onBackground(e3) {
            const t3 = this._c(e3), n2 = this.a + t3.a * (1 - this.a), r2 = (e4) => pn((this[e4] * this.a + t3[e4] * t3.a * (1 - this.a)) / n2);
            return this._c({ r: r2("r"), g: r2("g"), b: r2("b"), a: n2 });
          }
          isDark() {
            return this.getBrightness() < 128;
          }
          isLight() {
            return this.getBrightness() >= 128;
          }
          equals(e3) {
            return this.r === e3.r && this.g === e3.g && this.b === e3.b && this.a === e3.a;
          }
          clone() {
            return this._c(this);
          }
          toHexString() {
            let e3 = "#";
            const t3 = (this.r || 0).toString(16);
            e3 += 2 === t3.length ? t3 : "0" + t3;
            const n2 = (this.g || 0).toString(16);
            e3 += 2 === n2.length ? n2 : "0" + n2;
            const r2 = (this.b || 0).toString(16);
            if (e3 += 2 === r2.length ? r2 : "0" + r2, "number" == typeof this.a && this.a >= 0 && this.a < 1) {
              const t4 = pn(255 * this.a).toString(16);
              e3 += 2 === t4.length ? t4 : "0" + t4;
            }
            return e3;
          }
          toHsl() {
            return { h: this.getHue(), s: this.getSaturation(), l: this.getLightness(), a: this.a };
          }
          toHslString() {
            const e3 = this.getHue(), t3 = pn(100 * this.getSaturation()), n2 = pn(100 * this.getLightness());
            return 1 !== this.a ? `hsla(${e3},${t3}%,${n2}%,${this.a})` : `hsl(${e3},${t3}%,${n2}%)`;
          }
          toHsv() {
            return { h: this.getHue(), s: this.getSaturation(), v: this.getValue(), a: this.a };
          }
          toRgb() {
            return { r: this.r, g: this.g, b: this.b, a: this.a };
          }
          toRgbString() {
            return 1 !== this.a ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
          }
          toString() {
            return this.toRgbString();
          }
          _sc(e3, t3, n2) {
            const r2 = this.clone();
            return r2[e3] = hn(t3, n2), r2;
          }
          _c(e3) {
            return new this.constructor(e3);
          }
          getMax() {
            return void 0 === this._max && (this._max = Math.max(this.r, this.g, this.b)), this._max;
          }
          getMin() {
            return void 0 === this._min && (this._min = Math.min(this.r, this.g, this.b)), this._min;
          }
          fromHexString(e3) {
            const t3 = e3.replace("#", "");
            function n2(e4, n3) {
              return parseInt(t3[e4] + t3[n3 || e4], 16);
            }
            t3.length < 6 ? (this.r = n2(0), this.g = n2(1), this.b = n2(2), this.a = t3[3] ? n2(3) / 255 : 1) : (this.r = n2(0, 1), this.g = n2(2, 3), this.b = n2(4, 5), this.a = t3[6] ? n2(6, 7) / 255 : 1);
          }
          fromHsl({ h: e3, s: t3, l: n2, a: r2 }) {
            if (this._h = e3 % 360, this._s = t3, this._l = n2, this.a = "number" == typeof r2 ? r2 : 1, t3 <= 0) {
              const e4 = pn(255 * n2);
              this.r = e4, this.g = e4, this.b = e4;
            }
            let o2 = 0, i2 = 0, a2 = 0;
            const s2 = e3 / 60, l2 = (1 - Math.abs(2 * n2 - 1)) * t3, c2 = l2 * (1 - Math.abs(s2 % 2 - 1));
            s2 >= 0 && s2 < 1 ? (o2 = l2, i2 = c2) : s2 >= 1 && s2 < 2 ? (o2 = c2, i2 = l2) : s2 >= 2 && s2 < 3 ? (i2 = l2, a2 = c2) : s2 >= 3 && s2 < 4 ? (i2 = c2, a2 = l2) : s2 >= 4 && s2 < 5 ? (o2 = c2, a2 = l2) : s2 >= 5 && s2 < 6 && (o2 = l2, a2 = c2);
            const u2 = n2 - l2 / 2;
            this.r = pn(255 * (o2 + u2)), this.g = pn(255 * (i2 + u2)), this.b = pn(255 * (a2 + u2));
          }
          fromHsv({ h: e3, s: t3, v: n2, a: r2 }) {
            this._h = e3 % 360, this._s = t3, this._v = n2, this.a = "number" == typeof r2 ? r2 : 1;
            const o2 = pn(255 * n2);
            if (this.r = o2, this.g = o2, this.b = o2, t3 <= 0)
              return;
            const i2 = e3 / 60, a2 = Math.floor(i2), s2 = i2 - a2, l2 = pn(n2 * (1 - t3) * 255), c2 = pn(n2 * (1 - t3 * s2) * 255), u2 = pn(n2 * (1 - t3 * (1 - s2)) * 255);
            switch (a2) {
              case 0:
                this.g = u2, this.b = l2;
                break;
              case 1:
                this.r = c2, this.b = l2;
                break;
              case 2:
                this.r = l2, this.b = u2;
                break;
              case 3:
                this.r = l2, this.g = c2;
                break;
              case 4:
                this.r = u2, this.g = l2;
                break;
              default:
                this.g = l2, this.b = c2;
            }
          }
          fromHsvString(e3) {
            const t3 = mn(e3, gn);
            this.fromHsv({ h: t3[0], s: t3[1], v: t3[2], a: t3[3] });
          }
          fromHslString(e3) {
            const t3 = mn(e3, gn);
            this.fromHsl({ h: t3[0], s: t3[1], l: t3[2], a: t3[3] });
          }
          fromRgbString(e3) {
            const t3 = mn(e3, (e4, t4) => t4.includes("%") ? pn(e4 / 100 * 255) : e4);
            this.r = t3[0], this.g = t3[1], this.b = t3[2], this.a = t3[3];
          }
        }
        var bn = [{ index: 7, amount: 15 }, { index: 6, amount: 25 }, { index: 5, amount: 30 }, { index: 5, amount: 45 }, { index: 5, amount: 65 }, { index: 5, amount: 85 }, { index: 4, amount: 90 }, { index: 3, amount: 95 }, { index: 2, amount: 97 }, { index: 1, amount: 98 }];
        function yn(e3, t3, n2) {
          var r2;
          return (r2 = Math.round(e3.h) >= 60 && Math.round(e3.h) <= 240 ? n2 ? Math.round(e3.h) - 2 * t3 : Math.round(e3.h) + 2 * t3 : n2 ? Math.round(e3.h) + 2 * t3 : Math.round(e3.h) - 2 * t3) < 0 ? r2 += 360 : r2 >= 360 && (r2 -= 360), r2;
        }
        function Cn(e3, t3, n2) {
          return 0 === e3.h && 0 === e3.s ? e3.s : ((r2 = n2 ? e3.s - 0.16 * t3 : 4 === t3 ? e3.s + 0.16 : e3.s + 0.05 * t3) > 1 && (r2 = 1), n2 && 5 === t3 && r2 > 0.1 && (r2 = 0.1), r2 < 0.06 && (r2 = 0.06), Math.round(100 * r2) / 100);
          var r2;
        }
        function wn(e3, t3, n2) {
          var r2;
          return r2 = n2 ? e3.v + 0.05 * t3 : e3.v - 0.15 * t3, r2 = Math.max(0, Math.min(1, r2)), Math.round(100 * r2) / 100;
        }
        function xn(e3) {
          for (var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = [], r2 = new vn(e3), o2 = r2.toHsv(), i2 = 5; i2 > 0; i2 -= 1) {
            var a2 = new vn({ h: yn(o2, i2, true), s: Cn(o2, i2, true), v: wn(o2, i2, true) });
            n2.push(a2);
          }
          n2.push(r2);
          for (var s2 = 1; s2 <= 4; s2 += 1) {
            var l2 = new vn({ h: yn(o2, s2), s: Cn(o2, s2), v: wn(o2, s2) });
            n2.push(l2);
          }
          return "dark" === t3.theme ? bn.map(function(e4) {
            var r3 = e4.index, o3 = e4.amount;
            return new vn(t3.backgroundColor || "#141414").mix(n2[r3], o3).toHexString();
          }) : n2.map(function(e4) {
            return e4.toHexString();
          });
        }
        var Sn = { red: "#F5222D", volcano: "#FA541C", orange: "#FA8C16", gold: "#FAAD14", yellow: "#FADB14", lime: "#A0D911", green: "#52C41A", cyan: "#13C2C2", blue: "#1677FF", geekblue: "#2F54EB", purple: "#722ED1", magenta: "#EB2F96", grey: "#666666" }, An = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
        An.primary = An[5];
        var En = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
        En.primary = En[5];
        var kn = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
        kn.primary = kn[5];
        var On = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
        On.primary = On[5];
        var Pn = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
        Pn.primary = Pn[5];
        var In = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
        In.primary = In[5];
        var jn = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
        jn.primary = jn[5];
        var $n = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
        $n.primary = $n[5];
        var Nn = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
        Nn.primary = Nn[5];
        var Mn = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
        Mn.primary = Mn[5];
        var Rn = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
        Rn.primary = Rn[5];
        var Bn = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
        Bn.primary = Bn[5];
        var Tn = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
        Tn.primary = Tn[5];
        var Fn = { red: An, volcano: En, orange: kn, gold: On, yellow: Pn, lime: In, green: jn, cyan: $n, blue: Nn, geekblue: Mn, purple: Rn, magenta: Bn, grey: Tn }, Ln = ["#2a1215", "#431418", "#58181c", "#791a1f", "#a61d24", "#d32029", "#e84749", "#f37370", "#f89f9a", "#fac8c3"];
        Ln.primary = Ln[5];
        var zn = ["#2b1611", "#441d12", "#592716", "#7c3118", "#aa3e19", "#d84a1b", "#e87040", "#f3956a", "#f8b692", "#fad4bc"];
        zn.primary = zn[5];
        var Hn = ["#2b1d11", "#442a11", "#593815", "#7c4a15", "#aa6215", "#d87a16", "#e89a3c", "#f3b765", "#f8cf8d", "#fae3b7"];
        Hn.primary = Hn[5];
        var Dn = ["#2b2111", "#443111", "#594214", "#7c5914", "#aa7714", "#d89614", "#e8b339", "#f3cc62", "#f8df8b", "#faedb5"];
        Dn.primary = Dn[5];
        var qn = ["#2b2611", "#443b11", "#595014", "#7c6e14", "#aa9514", "#d8bd14", "#e8d639", "#f3ea62", "#f8f48b", "#fafab5"];
        qn.primary = qn[5];
        var Vn = ["#1f2611", "#2e3c10", "#3e4f13", "#536d13", "#6f9412", "#8bbb11", "#a9d134", "#c9e75d", "#e4f88b", "#f0fab5"];
        Vn.primary = Vn[5];
        var Wn = ["#162312", "#1d3712", "#274916", "#306317", "#3c8618", "#49aa19", "#6abe39", "#8fd460", "#b2e58b", "#d5f2bb"];
        Wn.primary = Wn[5];
        var Kn = ["#112123", "#113536", "#144848", "#146262", "#138585", "#13a8a8", "#33bcb7", "#58d1c9", "#84e2d8", "#b2f1e8"];
        Kn.primary = Kn[5];
        var Gn = ["#111a2c", "#112545", "#15325b", "#15417e", "#1554ad", "#1668dc", "#3c89e8", "#65a9f3", "#8dc5f8", "#b7dcfa"];
        Gn.primary = Gn[5];
        var Xn = ["#131629", "#161d40", "#1c2755", "#203175", "#263ea0", "#2b4acb", "#5273e0", "#7f9ef3", "#a8c1f8", "#d2e0fa"];
        Xn.primary = Xn[5];
        var Un = ["#1a1325", "#24163a", "#301c4d", "#3e2069", "#51258f", "#642ab5", "#854eca", "#ab7ae0", "#cda8f0", "#ebd7fa"];
        Un.primary = Un[5];
        var _n = ["#291321", "#40162f", "#551c3b", "#75204f", "#a02669", "#cb2b83", "#e0529c", "#f37fb7", "#f8a8cc", "#fad2e3"];
        _n.primary = _n[5];
        var Qn = ["#151515", "#1f1f1f", "#2d2d2d", "#393939", "#494949", "#5a5a5a", "#6a6a6a", "#7b7b7b", "#888888", "#969696"];
        Qn.primary = Qn[5];
        const Yn = { blue: "#1677FF", purple: "#722ED1", cyan: "#13C2C2", green: "#52C41A", magenta: "#EB2F96", pink: "#EB2F96", red: "#F5222D", orange: "#FA8C16", yellow: "#FADB14", volcano: "#FA541C", geekblue: "#2F54EB", gold: "#FAAD14", lime: "#A0D911" }, Zn = Object.assign(Object.assign({}, Yn), { colorPrimary: "#1677ff", colorSuccess: "#52c41a", colorWarning: "#faad14", colorError: "#ff4d4f", colorInfo: "#1677ff", colorLink: "", colorTextBase: "", colorBgBase: "", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'", fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace", fontSize: 14, lineWidth: 1, lineType: "solid", motionUnit: 0.1, motionBase: 0, motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)", motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)", motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)", motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)", motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)", motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)", motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)", motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)", borderRadius: 6, sizeUnit: 4, sizeStep: 4, sizePopupArrow: 16, controlHeight: 32, zIndexBase: 0, zIndexPopupBase: 1e3, opacityImage: 1, wireframe: false, motion: true });
        function Jn(e3) {
          return (e3 + 8) / e3;
        }
        const er = (e3, t3) => new vn(e3).setA(t3).toRgbString(), tr = (e3, t3) => new vn(e3).darken(t3).toHexString(), nr = (e3) => {
          const t3 = xn(e3);
          return { 1: t3[0], 2: t3[1], 3: t3[2], 4: t3[3], 5: t3[4], 6: t3[5], 7: t3[6], 8: t3[4], 9: t3[5], 10: t3[6] };
        }, rr = (e3, t3) => {
          const n2 = e3 || "#fff", r2 = t3 || "#000";
          return { colorBgBase: n2, colorTextBase: r2, colorText: er(r2, 0.88), colorTextSecondary: er(r2, 0.65), colorTextTertiary: er(r2, 0.45), colorTextQuaternary: er(r2, 0.25), colorFill: er(r2, 0.15), colorFillSecondary: er(r2, 0.06), colorFillTertiary: er(r2, 0.04), colorFillQuaternary: er(r2, 0.02), colorBgSolid: er(r2, 1), colorBgSolidHover: er(r2, 0.75), colorBgSolidActive: er(r2, 0.95), colorBgLayout: tr(n2, 4), colorBgContainer: tr(n2, 0), colorBgElevated: tr(n2, 0), colorBgSpotlight: er(r2, 0.85), colorBgBlur: "transparent", colorBorder: tr(n2, 15), colorBorderSecondary: tr(n2, 6) };
        }, or = be(function(e3) {
          Sn.pink = Sn.magenta, Fn.pink = Fn.magenta;
          const t3 = Object.keys(Yn).map((t4) => {
            const n2 = e3[t4] === Sn[t4] ? Fn[t4] : xn(e3[t4]);
            return new Array(10).fill(1).reduce((e4, r2, o2) => (e4[`${t4}-${o2 + 1}`] = n2[o2], e4[`${t4}${o2 + 1}`] = n2[o2], e4), {});
          }).reduce((e4, t4) => Object.assign(Object.assign({}, e4), t4), {});
          return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e3), t3), function(e4, t4) {
            let { generateColorPalettes: n2, generateNeutralColorPalettes: r2 } = t4;
            const { colorSuccess: o2, colorWarning: i2, colorError: a2, colorInfo: s2, colorPrimary: l2, colorBgBase: c2, colorTextBase: u2 } = e4, d2 = n2(l2), f2 = n2(o2), p2 = n2(i2), m2 = n2(a2), g2 = n2(s2), h2 = r2(c2, u2), v2 = n2(e4.colorLink || e4.colorInfo), b2 = new vn(m2[1]).mix(new vn(m2[3]), 50).toHexString();
            return Object.assign(Object.assign({}, h2), { colorPrimaryBg: d2[1], colorPrimaryBgHover: d2[2], colorPrimaryBorder: d2[3], colorPrimaryBorderHover: d2[4], colorPrimaryHover: d2[5], colorPrimary: d2[6], colorPrimaryActive: d2[7], colorPrimaryTextHover: d2[8], colorPrimaryText: d2[9], colorPrimaryTextActive: d2[10], colorSuccessBg: f2[1], colorSuccessBgHover: f2[2], colorSuccessBorder: f2[3], colorSuccessBorderHover: f2[4], colorSuccessHover: f2[4], colorSuccess: f2[6], colorSuccessActive: f2[7], colorSuccessTextHover: f2[8], colorSuccessText: f2[9], colorSuccessTextActive: f2[10], colorErrorBg: m2[1], colorErrorBgHover: m2[2], colorErrorBgFilledHover: b2, colorErrorBgActive: m2[3], colorErrorBorder: m2[3], colorErrorBorderHover: m2[4], colorErrorHover: m2[5], colorError: m2[6], colorErrorActive: m2[7], colorErrorTextHover: m2[8], colorErrorText: m2[9], colorErrorTextActive: m2[10], colorWarningBg: p2[1], colorWarningBgHover: p2[2], colorWarningBorder: p2[3], colorWarningBorderHover: p2[4], colorWarningHover: p2[4], colorWarning: p2[6], colorWarningActive: p2[7], colorWarningTextHover: p2[8], colorWarningText: p2[9], colorWarningTextActive: p2[10], colorInfoBg: g2[1], colorInfoBgHover: g2[2], colorInfoBorder: g2[3], colorInfoBorderHover: g2[4], colorInfoHover: g2[4], colorInfo: g2[6], colorInfoActive: g2[7], colorInfoTextHover: g2[8], colorInfoText: g2[9], colorInfoTextActive: g2[10], colorLinkHover: v2[4], colorLink: v2[6], colorLinkActive: v2[7], colorBgMask: new vn("#000").setA(0.45).toRgbString(), colorWhite: "#fff" });
          }(e3, { generateColorPalettes: nr, generateNeutralColorPalettes: rr })), ((e4) => {
            const t4 = function(e5) {
              const t5 = new Array(10).fill(null).map((t6, n3) => {
                const r3 = n3 - 1, o3 = e5 * Math.pow(Math.E, r3 / 5), i3 = n3 > 1 ? Math.floor(o3) : Math.ceil(o3);
                return 2 * Math.floor(i3 / 2);
              });
              return t5[1] = e5, t5.map((e6) => ({ size: e6, lineHeight: Jn(e6) }));
            }(e4), n2 = t4.map((e5) => e5.size), r2 = t4.map((e5) => e5.lineHeight), o2 = n2[1], i2 = n2[0], a2 = n2[2], s2 = r2[1], l2 = r2[0], c2 = r2[2];
            return { fontSizeSM: i2, fontSize: o2, fontSizeLG: a2, fontSizeXL: n2[3], fontSizeHeading1: n2[6], fontSizeHeading2: n2[5], fontSizeHeading3: n2[4], fontSizeHeading4: n2[3], fontSizeHeading5: n2[2], lineHeight: s2, lineHeightLG: c2, lineHeightSM: l2, fontHeight: Math.round(s2 * o2), fontHeightLG: Math.round(c2 * a2), fontHeightSM: Math.round(l2 * i2), lineHeightHeading1: r2[6], lineHeightHeading2: r2[5], lineHeightHeading3: r2[4], lineHeightHeading4: r2[3], lineHeightHeading5: r2[2] };
          })(e3.fontSize)), function(e4) {
            const { sizeUnit: t4, sizeStep: n2 } = e4;
            return { sizeXXL: t4 * (n2 + 8), sizeXL: t4 * (n2 + 4), sizeLG: t4 * (n2 + 2), sizeMD: t4 * (n2 + 1), sizeMS: t4 * n2, size: t4 * n2, sizeSM: t4 * (n2 - 1), sizeXS: t4 * (n2 - 2), sizeXXS: t4 * (n2 - 3) };
          }(e3)), ((e4) => {
            const { controlHeight: t4 } = e4;
            return { controlHeightSM: 0.75 * t4, controlHeightXS: 0.5 * t4, controlHeightLG: 1.25 * t4 };
          })(e3)), function(e4) {
            const { motionUnit: t4, motionBase: n2, borderRadius: r2, lineWidth: o2 } = e4;
            return Object.assign({ motionDurationFast: `${(n2 + t4).toFixed(1)}s`, motionDurationMid: `${(n2 + 2 * t4).toFixed(1)}s`, motionDurationSlow: `${(n2 + 3 * t4).toFixed(1)}s`, lineWidthBold: o2 + 1 }, ((e5) => {
              let t5 = e5, n3 = e5, r3 = e5, o3 = e5;
              return e5 < 6 && e5 >= 5 ? t5 = e5 + 1 : e5 < 16 && e5 >= 6 ? t5 = e5 + 2 : e5 >= 16 && (t5 = 16), e5 < 7 && e5 >= 5 ? n3 = 4 : e5 < 8 && e5 >= 7 ? n3 = 5 : e5 < 14 && e5 >= 8 ? n3 = 6 : e5 < 16 && e5 >= 14 ? n3 = 7 : e5 >= 16 && (n3 = 8), e5 < 6 && e5 >= 2 ? r3 = 1 : e5 >= 6 && (r3 = 2), e5 > 4 && e5 < 8 ? o3 = 4 : e5 >= 8 && (o3 = 6), { borderRadius: e5, borderRadiusXS: r3, borderRadiusSM: n3, borderRadiusLG: t5, borderRadiusOuter: o3 };
            })(r2));
          }(e3));
        }), ir = { token: Zn, override: { override: Zn }, hashed: true }, ar = o().createContext(ir), sr = `-ant-${Date.now()}-${Math.random()}`;
        const lr = t2.createContext(false), cr = (e3) => {
          let { children: n2, disabled: r2 } = e3;
          const o2 = t2.useContext(lr);
          return t2.createElement(lr.Provider, { value: null != r2 ? r2 : o2 }, n2);
        }, ur = lr, dr = t2.createContext(void 0), fr = (e3) => {
          let { children: n2, size: r2 } = e3;
          const o2 = t2.useContext(dr);
          return t2.createElement(dr.Provider, { value: r2 || o2 }, n2);
        }, pr = dr, mr = Object.assign({}, t2), { useId: gr } = mr, hr = void 0 === gr ? () => "" : gr;
        var vr = n(942), br = n.n(vr);
        const yr = __require("react-dom");
        var Cr = n.n(yr);
        function wr(e3) {
          return e3 instanceof HTMLElement || e3 instanceof SVGElement;
        }
        function xr(e3) {
          var t3, n2 = function(e4) {
            return e4 && "object" === O(e4) && wr(e4.nativeElement) ? e4.nativeElement : wr(e4) ? e4 : null;
          }(e3);
          return n2 || (e3 instanceof o().Component ? null === (t3 = Cr().findDOMNode) || void 0 === t3 ? void 0 : t3.call(Cr(), e3) : null);
        }
        var Sr = n(351), Ar = Symbol.for("react.element"), Er = Symbol.for("react.transitional.element"), kr = Symbol.for("react.fragment");
        function Or(e3) {
          return e3 && "object" === O(e3) && (e3.$$typeof === Ar || e3.$$typeof === Er) && e3.type === kr;
        }
        var Pr = function(e3, t3) {
          "function" == typeof e3 ? e3(t3) : "object" === O(e3) && e3 && "current" in e3 && (e3.current = t3);
        }, Ir = function() {
          for (var e3 = arguments.length, t3 = new Array(e3), n2 = 0; n2 < e3; n2++)
            t3[n2] = arguments[n2];
          var r2 = t3.filter(Boolean);
          return r2.length <= 1 ? r2[0] : function(e4) {
            t3.forEach(function(t4) {
              Pr(t4, e4);
            });
          };
        }, jr = function() {
          for (var e3 = arguments.length, t3 = new Array(e3), n2 = 0; n2 < e3; n2++)
            t3[n2] = arguments[n2];
          return U(function() {
            return Ir.apply(void 0, t3);
          }, t3, function(e4, t4) {
            return e4.length !== t4.length || e4.every(function(e5, n3) {
              return e5 !== t4[n3];
            });
          });
        }, $r = function(e3) {
          var t3, n2;
          if (!e3)
            return false;
          if (Nr(e3) && e3.props.propertyIsEnumerable("ref"))
            return true;
          var r2 = (0, Sr.isMemo)(e3) ? e3.type.type : e3.type;
          return !!("function" != typeof r2 || null !== (t3 = r2.prototype) && void 0 !== t3 && t3.render || r2.$$typeof === Sr.ForwardRef) && !!("function" != typeof e3 || null !== (n2 = e3.prototype) && void 0 !== n2 && n2.render || e3.$$typeof === Sr.ForwardRef);
        };
        function Nr(e3) {
          return (0, t2.isValidElement)(e3) && !Or(e3);
        }
        var Mr = function(e3) {
          if (e3 && Nr(e3)) {
            var t3 = e3;
            return t3.props.propertyIsEnumerable("ref") ? t3.props.ref : t3.ref;
          }
          return null;
        };
        function Rr(e3, t3) {
          if (null == e3)
            return {};
          var n2, r2, o2 = function(e4, t4) {
            if (null == e4)
              return {};
            var n3 = {};
            for (var r3 in e4)
              if ({}.hasOwnProperty.call(e4, r3)) {
                if (t4.includes(r3))
                  continue;
                n3[r3] = e4[r3];
              }
            return n3;
          }(e3, t3);
          if (Object.getOwnPropertySymbols) {
            var i2 = Object.getOwnPropertySymbols(e3);
            for (r2 = 0; r2 < i2.length; r2++)
              n2 = i2[r2], t3.includes(n2) || {}.propertyIsEnumerable.call(e3, n2) && (o2[n2] = e3[n2]);
          }
          return o2;
        }
        var Br = ["children"], Tr = t2.createContext({});
        function Fr(e3) {
          var n2 = e3.children, r2 = Rr(e3, Br);
          return t2.createElement(Tr.Provider, { value: r2 }, n2);
        }
        function Lr(e3, t3) {
          return Lr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, Lr(e3, t3);
        }
        function zr(e3, t3) {
          if ("function" != typeof t3 && null !== t3)
            throw new TypeError("Super expression must either be null or a function");
          e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), Object.defineProperty(e3, "prototype", { writable: false }), t3 && Lr(e3, t3);
        }
        function Hr(e3) {
          return Hr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, Hr(e3);
        }
        function Dr() {
          try {
            var e3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
          } catch (e4) {
          }
          return (Dr = function() {
            return !!e3;
          })();
        }
        function qr(e3) {
          if (void 0 === e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function Vr(e3) {
          var t3 = Dr();
          return function() {
            var n2, r2 = Hr(e3);
            if (t3) {
              var o2 = Hr(this).constructor;
              n2 = Reflect.construct(r2, arguments, o2);
            } else
              n2 = r2.apply(this, arguments);
            return function(e4, t4) {
              if (t4 && ("object" == O(t4) || "function" == typeof t4))
                return t4;
              if (void 0 !== t4)
                throw new TypeError("Derived constructors may only return object or undefined");
              return qr(e4);
            }(this, n2);
          };
        }
        const Wr = function(e3) {
          zr(n2, e3);
          var t3 = Vr(n2);
          function n2() {
            return re(this, n2), t3.apply(this, arguments);
          }
          return ie(n2, [{ key: "render", value: function() {
            return this.props.children;
          } }]), n2;
        }(t2.Component);
        function Kr(e3) {
          var n2 = t2.useRef();
          n2.current = e3;
          var r2 = t2.useCallback(function() {
            for (var e4, t3 = arguments.length, r3 = new Array(t3), o2 = 0; o2 < t3; o2++)
              r3[o2] = arguments[o2];
            return null === (e4 = n2.current) || void 0 === e4 ? void 0 : e4.call.apply(e4, [n2].concat(r3));
          }, []);
          return r2;
        }
        function Gr(e3) {
          var n2 = t2.useRef(false), r2 = N(t2.useState(e3), 2), o2 = r2[0], i2 = r2[1];
          return t2.useEffect(function() {
            return n2.current = false, function() {
              n2.current = true;
            };
          }, []), [o2, function(e4, t3) {
            t3 && n2.current || i2(e4);
          }];
        }
        function Xr(e3) {
          return void 0 !== e3;
        }
        function Ur(e3, t3) {
          var n2 = t3 || {}, r2 = n2.defaultValue, o2 = n2.value, i2 = n2.onChange, a2 = n2.postState, s2 = N(Gr(function() {
            return Xr(o2) ? o2 : Xr(r2) ? "function" == typeof r2 ? r2() : r2 : "function" == typeof e3 ? e3() : e3;
          }), 2), l2 = s2[0], c2 = s2[1], u2 = void 0 !== o2 ? o2 : l2, d2 = a2 ? a2(u2) : u2, f2 = Kr(i2), p2 = N(Gr([u2]), 2), m2 = p2[0], g2 = p2[1];
          return Ne(function() {
            var e4 = m2[0];
            l2 !== e4 && f2(l2, e4);
          }, [m2]), Ne(function() {
            Xr(o2) || c2(o2);
          }, [o2]), [d2, Kr(function(e4, t4) {
            c2(e4, t4), g2([u2], t4);
          })];
        }
        var _r = "none", Qr = "appear", Yr = "enter", Zr = "leave", Jr = "none", eo = "prepare", to = "start", no = "active", ro = "end", oo = "prepared";
        function io(e3, t3) {
          var n2 = {};
          return n2[e3.toLowerCase()] = t3.toLowerCase(), n2["Webkit".concat(e3)] = "webkit".concat(t3), n2["Moz".concat(e3)] = "moz".concat(t3), n2["ms".concat(e3)] = "MS".concat(t3), n2["O".concat(e3)] = "o".concat(t3.toLowerCase()), n2;
        }
        var ao, so, lo, co = (ao = T(), so = "undefined" != typeof window ? window : {}, lo = { animationend: io("Animation", "AnimationEnd"), transitionend: io("Transition", "TransitionEnd") }, ao && ("AnimationEvent" in so || delete lo.animationend.animation, "TransitionEvent" in so || delete lo.transitionend.transition), lo), uo = {};
        if (T()) {
          var fo = document.createElement("div");
          uo = fo.style;
        }
        var po = {};
        function mo(e3) {
          if (po[e3])
            return po[e3];
          var t3 = co[e3];
          if (t3)
            for (var n2 = Object.keys(t3), r2 = n2.length, o2 = 0; o2 < r2; o2 += 1) {
              var i2 = n2[o2];
              if (Object.prototype.hasOwnProperty.call(t3, i2) && i2 in uo)
                return po[e3] = t3[i2], po[e3];
            }
          return "";
        }
        var go = mo("animationend"), ho = mo("transitionend"), vo = !(!go || !ho), bo = go || "animationend", yo = ho || "transitionend";
        function Co(e3, t3) {
          return e3 ? "object" === O(e3) ? e3[t3.replace(/-\w/g, function(e4) {
            return e4[1].toUpperCase();
          })] : "".concat(e3, "-").concat(t3) : null;
        }
        const wo = T() ? t2.useLayoutEffect : t2.useEffect;
        var xo = function(e3) {
          return +setTimeout(e3, 16);
        }, So = function(e3) {
          return clearTimeout(e3);
        };
        "undefined" != typeof window && "requestAnimationFrame" in window && (xo = function(e3) {
          return window.requestAnimationFrame(e3);
        }, So = function(e3) {
          return window.cancelAnimationFrame(e3);
        });
        var Ao = 0, Eo = /* @__PURE__ */ new Map();
        function ko(e3) {
          Eo.delete(e3);
        }
        var Oo = function(e3) {
          var t3 = Ao += 1;
          return function n2(r2) {
            if (0 === r2)
              ko(t3), e3();
            else {
              var o2 = xo(function() {
                n2(r2 - 1);
              });
              Eo.set(t3, o2);
            }
          }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), t3;
        };
        Oo.cancel = function(e3) {
          var t3 = Eo.get(e3);
          return ko(e3), So(t3);
        };
        const Po = Oo;
        var Io = [eo, to, no, ro], jo = [eo, oo], $o = false;
        function No(e3) {
          return e3 === no || e3 === ro;
        }
        function Mo(e3, n2, r2, o2) {
          var i2, a2, s2, l2, c2 = o2.motionEnter, u2 = void 0 === c2 || c2, d2 = o2.motionAppear, f2 = void 0 === d2 || d2, p2 = o2.motionLeave, m2 = void 0 === p2 || p2, g2 = o2.motionDeadline, h2 = o2.motionLeaveImmediately, v2 = o2.onAppearPrepare, b2 = o2.onEnterPrepare, y2 = o2.onLeavePrepare, C2 = o2.onAppearStart, w2 = o2.onEnterStart, x2 = o2.onLeaveStart, S2 = o2.onAppearActive, A2 = o2.onEnterActive, E2 = o2.onLeaveActive, k2 = o2.onAppearEnd, O2 = o2.onEnterEnd, P2 = o2.onLeaveEnd, j2 = o2.onVisibleChanged, $2 = N(Gr(), 2), M2 = $2[0], B2 = $2[1], T2 = (i2 = _r, a2 = t2.useReducer(function(e4) {
            return e4 + 1;
          }, 0), s2 = N(a2, 2)[1], l2 = t2.useRef(i2), [Kr(function() {
            return l2.current;
          }), Kr(function(e4) {
            l2.current = "function" == typeof e4 ? e4(l2.current) : e4, s2();
          })]), F2 = N(T2, 2), L2 = F2[0], z2 = F2[1], H2 = N(Gr(null), 2), D2 = H2[0], q2 = H2[1], V2 = L2(), W2 = (0, t2.useRef)(false), K2 = (0, t2.useRef)(null);
          function G2() {
            return r2();
          }
          var X2 = (0, t2.useRef)(false);
          function U2() {
            z2(_r), q2(null, true);
          }
          var _2 = Kr(function(e4) {
            var t3 = L2();
            if (t3 !== _r) {
              var n3 = G2();
              if (!e4 || e4.deadline || e4.target === n3) {
                var r3, o3 = X2.current;
                t3 === Qr && o3 ? r3 = null == k2 ? void 0 : k2(n3, e4) : t3 === Yr && o3 ? r3 = null == O2 ? void 0 : O2(n3, e4) : t3 === Zr && o3 && (r3 = null == P2 ? void 0 : P2(n3, e4)), o3 && false !== r3 && U2();
              }
            }
          }), Q2 = function(e4) {
            var n3 = (0, t2.useRef)();
            function r3(t3) {
              t3 && (t3.removeEventListener(yo, e4), t3.removeEventListener(bo, e4));
            }
            return t2.useEffect(function() {
              return function() {
                r3(n3.current);
              };
            }, []), [function(t3) {
              n3.current && n3.current !== t3 && r3(n3.current), t3 && t3 !== n3.current && (t3.addEventListener(yo, e4), t3.addEventListener(bo, e4), n3.current = t3);
            }, r3];
          }(_2), Y2 = N(Q2, 1)[0], Z2 = function(e4) {
            switch (e4) {
              case Qr:
                return I(I(I({}, eo, v2), to, C2), no, S2);
              case Yr:
                return I(I(I({}, eo, b2), to, w2), no, A2);
              case Zr:
                return I(I(I({}, eo, y2), to, x2), no, E2);
              default:
                return {};
            }
          }, J2 = t2.useMemo(function() {
            return Z2(V2);
          }, [V2]), ee2 = N(function(e4, n3, r3) {
            var o3 = N(Gr(Jr), 2), i3 = o3[0], a3 = o3[1], s3 = function() {
              var e5 = t2.useRef(null);
              function n4() {
                Po.cancel(e5.current);
              }
              return t2.useEffect(function() {
                return function() {
                  n4();
                };
              }, []), [function t3(r4) {
                var o4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                n4();
                var i4 = Po(function() {
                  o4 <= 1 ? r4({ isCanceled: function() {
                    return i4 !== e5.current;
                  } }) : t3(r4, o4 - 1);
                });
                e5.current = i4;
              }, n4];
            }(), l3 = N(s3, 2), c3 = l3[0], u3 = l3[1], d3 = n3 ? jo : Io;
            return wo(function() {
              if (i3 !== Jr && i3 !== ro) {
                var e5 = d3.indexOf(i3), t3 = d3[e5 + 1], n4 = r3(i3);
                n4 === $o ? a3(t3, true) : t3 && c3(function(e6) {
                  function r4() {
                    e6.isCanceled() || a3(t3, true);
                  }
                  true === n4 ? r4() : Promise.resolve(n4).then(r4);
                });
              }
            }, [e4, i3]), t2.useEffect(function() {
              return function() {
                u3();
              };
            }, []), [function() {
              a3(eo, true);
            }, i3];
          }(V2, !e3, function(e4) {
            if (e4 === eo) {
              var t3 = J2[eo];
              return t3 ? t3(G2()) : $o;
            }
            var n3;
            return ne2 in J2 && q2((null === (n3 = J2[ne2]) || void 0 === n3 ? void 0 : n3.call(J2, G2(), null)) || null), ne2 === no && V2 !== _r && (Y2(G2()), g2 > 0 && (clearTimeout(K2.current), K2.current = setTimeout(function() {
              _2({ deadline: true });
            }, g2))), ne2 === oo && U2(), true;
          }), 2), te2 = ee2[0], ne2 = ee2[1], re2 = No(ne2);
          X2.current = re2;
          var oe2 = (0, t2.useRef)(null);
          wo(function() {
            if (!W2.current || oe2.current !== n2) {
              B2(n2);
              var t3, r3 = W2.current;
              W2.current = true, !r3 && n2 && f2 && (t3 = Qr), r3 && n2 && u2 && (t3 = Yr), (r3 && !n2 && m2 || !r3 && h2 && !n2 && m2) && (t3 = Zr);
              var o3 = Z2(t3);
              t3 && (e3 || o3[eo]) ? (z2(t3), te2()) : z2(_r), oe2.current = n2;
            }
          }, [n2]), (0, t2.useEffect)(function() {
            (V2 === Qr && !f2 || V2 === Yr && !u2 || V2 === Zr && !m2) && z2(_r);
          }, [f2, u2, m2]), (0, t2.useEffect)(function() {
            return function() {
              W2.current = false, clearTimeout(K2.current);
            };
          }, []);
          var ie2 = t2.useRef(false);
          (0, t2.useEffect)(function() {
            M2 && (ie2.current = true), void 0 !== M2 && V2 === _r && ((ie2.current || M2) && (null == j2 || j2(M2)), ie2.current = true);
          }, [M2, V2]);
          var ae2 = D2;
          return J2[eo] && ne2 === to && (ae2 = R({ transition: "none" }, ae2)), [V2, ne2, ae2, null != M2 ? M2 : n2];
        }
        const Ro = function(e3) {
          var n2 = e3;
          "object" === O(e3) && (n2 = e3.transitionSupport);
          var r2 = t2.forwardRef(function(e4, r3) {
            var o2 = e4.visible, i2 = void 0 === o2 || o2, a2 = e4.removeOnLeave, s2 = void 0 === a2 || a2, l2 = e4.forceRender, c2 = e4.children, u2 = e4.motionName, d2 = e4.leavedClassName, f2 = e4.eventProps, p2 = function(e5, t3) {
              return !(!e5.motionName || !n2 || false === t3);
            }(e4, t2.useContext(Tr).motion), m2 = (0, t2.useRef)(), g2 = (0, t2.useRef)(), h2 = N(Mo(p2, i2, function() {
              try {
                return m2.current instanceof HTMLElement ? m2.current : xr(g2.current);
              } catch (e5) {
                return null;
              }
            }, e4), 4), v2 = h2[0], b2 = h2[1], y2 = h2[2], C2 = h2[3], w2 = t2.useRef(C2);
            C2 && (w2.current = true);
            var x2, S2 = t2.useCallback(function(e5) {
              m2.current = e5, Pr(r3, e5);
            }, [r3]), A2 = R(R({}, f2), {}, { visible: i2 });
            if (c2)
              if (v2 === _r)
                x2 = C2 ? c2(R({}, A2), S2) : !s2 && w2.current && d2 ? c2(R(R({}, A2), {}, { className: d2 }), S2) : l2 || !s2 && !d2 ? c2(R(R({}, A2), {}, { style: { display: "none" } }), S2) : null;
              else {
                var E2;
                b2 === eo ? E2 = "prepare" : No(b2) ? E2 = "active" : b2 === to && (E2 = "start");
                var k2 = Co(u2, "".concat(v2, "-").concat(E2));
                x2 = c2(R(R({}, A2), {}, { className: br()(Co(u2, v2), I(I({}, k2, k2 && E2), u2, "string" == typeof u2)), style: y2 }), S2);
              }
            else
              x2 = null;
            return t2.isValidElement(x2) && $r(x2) && (Mr(x2) || (x2 = t2.cloneElement(x2, { ref: S2 }))), t2.createElement(Wr, { ref: g2 }, x2);
          });
          return r2.displayName = "CSSMotion", r2;
        }(vo);
        var Bo = "add", To = "keep", Fo = "remove", Lo = "removed";
        function zo(e3) {
          var t3;
          return R(R({}, t3 = e3 && "object" === O(e3) && "key" in e3 ? e3 : { key: e3 }), {}, { key: String(t3.key) });
        }
        function Ho() {
          return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(zo);
        }
        var Do = ["component", "children", "onVisibleChanged", "onAllRemoved"], qo = ["status"], Vo = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
        const Wo = function() {
          var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ro, n2 = function(n3) {
            zr(o2, n3);
            var r2 = Vr(o2);
            function o2() {
              var e4;
              re(this, o2);
              for (var t3 = arguments.length, n4 = new Array(t3), i2 = 0; i2 < t3; i2++)
                n4[i2] = arguments[i2];
              return I(qr(e4 = r2.call.apply(r2, [this].concat(n4))), "state", { keyEntities: [] }), I(qr(e4), "removeKey", function(t4) {
                e4.setState(function(e5) {
                  return { keyEntities: e5.keyEntities.map(function(e6) {
                    return e6.key !== t4 ? e6 : R(R({}, e6), {}, { status: Lo });
                  }) };
                }, function() {
                  0 === e4.state.keyEntities.filter(function(e5) {
                    return e5.status !== Lo;
                  }).length && e4.props.onAllRemoved && e4.props.onAllRemoved();
                });
              }), e4;
            }
            return ie(o2, [{ key: "render", value: function() {
              var n4 = this, r3 = this.state.keyEntities, o3 = this.props, i2 = o3.component, a2 = o3.children, s2 = o3.onVisibleChanged, l2 = (o3.onAllRemoved, Rr(o3, Do)), c2 = i2 || t2.Fragment, u2 = {};
              return Vo.forEach(function(e4) {
                u2[e4] = l2[e4], delete l2[e4];
              }), delete l2.keys, t2.createElement(c2, l2, r3.map(function(r4, o4) {
                var i3 = r4.status, l3 = Rr(r4, qo), c3 = i3 === Bo || i3 === To;
                return t2.createElement(e3, qe({}, u2, { key: l3.key, visible: c3, eventProps: l3, onVisibleChanged: function(e4) {
                  null == s2 || s2(e4, { key: l3.key }), e4 || n4.removeKey(l3.key);
                } }), function(e4, t3) {
                  return a2(R(R({}, e4), {}, { index: o4 }), t3);
                });
              }));
            } }], [{ key: "getDerivedStateFromProps", value: function(e4, t3) {
              var n4 = e4.keys, r3 = t3.keyEntities, o3 = Ho(n4), i2 = function() {
                var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n5 = [], r4 = 0, o4 = t4.length, i3 = Ho(e5), a2 = Ho(t4);
                i3.forEach(function(e6) {
                  for (var t5 = false, i4 = r4; i4 < o4; i4 += 1) {
                    var s3 = a2[i4];
                    if (s3.key === e6.key) {
                      r4 < i4 && (n5 = n5.concat(a2.slice(r4, i4).map(function(e7) {
                        return R(R({}, e7), {}, { status: Bo });
                      })), r4 = i4), n5.push(R(R({}, s3), {}, { status: To })), r4 += 1, t5 = true;
                      break;
                    }
                  }
                  t5 || n5.push(R(R({}, e6), {}, { status: Fo }));
                }), r4 < o4 && (n5 = n5.concat(a2.slice(r4).map(function(e6) {
                  return R(R({}, e6), {}, { status: Bo });
                })));
                var s2 = {};
                return n5.forEach(function(e6) {
                  var t5 = e6.key;
                  s2[t5] = (s2[t5] || 0) + 1;
                }), Object.keys(s2).filter(function(e6) {
                  return s2[e6] > 1;
                }).forEach(function(e6) {
                  (n5 = n5.filter(function(t5) {
                    var n6 = t5.key, r5 = t5.status;
                    return n6 !== e6 || r5 !== Fo;
                  })).forEach(function(t5) {
                    t5.key === e6 && (t5.status = To);
                  });
                }), n5;
              }(r3, o3);
              return { keyEntities: i2.filter(function(e5) {
                var t4 = r3.find(function(t5) {
                  var n5 = t5.key;
                  return e5.key === n5;
                });
                return !t4 || t4.status !== Lo || e5.status !== Fo;
              }) };
            } }]), o2;
          }(t2.Component);
          return I(n2, "defaultProps", { component: "div" }), n2;
        }(vo), Ko = Ro;
        function Go(e3) {
          return e3 >= 0 && e3 <= 255;
        }
        const Xo = function(e3, t3) {
          const { r: n2, g: r2, b: o2, a: i2 } = new vn(e3).toRgb();
          if (i2 < 1)
            return e3;
          const { r: a2, g: s2, b: l2 } = new vn(t3).toRgb();
          for (let e4 = 0.01; e4 <= 1; e4 += 0.01) {
            const t4 = Math.round((n2 - a2 * (1 - e4)) / e4), i3 = Math.round((r2 - s2 * (1 - e4)) / e4), c2 = Math.round((o2 - l2 * (1 - e4)) / e4);
            if (Go(t4) && Go(i3) && Go(c2))
              return new vn({ r: t4, g: i3, b: c2, a: Math.round(100 * e4) / 100 }).toRgbString();
          }
          return new vn({ r: n2, g: r2, b: o2, a: 1 }).toRgbString();
        };
        function Uo(e3) {
          const { override: t3 } = e3, n2 = function(e4, t4) {
            var n3 = {};
            for (var r3 in e4)
              Object.prototype.hasOwnProperty.call(e4, r3) && t4.indexOf(r3) < 0 && (n3[r3] = e4[r3]);
            if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
              var o3 = 0;
              for (r3 = Object.getOwnPropertySymbols(e4); o3 < r3.length; o3++)
                t4.indexOf(r3[o3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, r3[o3]) && (n3[r3[o3]] = e4[r3[o3]]);
            }
            return n3;
          }(e3, ["override"]), r2 = Object.assign({}, t3);
          Object.keys(Zn).forEach((e4) => {
            delete r2[e4];
          });
          const o2 = Object.assign(Object.assign({}, n2), r2);
          if (false === o2.motion) {
            const e4 = "0s";
            o2.motionDurationFast = e4, o2.motionDurationMid = e4, o2.motionDurationSlow = e4;
          }
          return Object.assign(Object.assign(Object.assign({}, o2), { colorFillContent: o2.colorFillSecondary, colorFillContentHover: o2.colorFill, colorFillAlter: o2.colorFillQuaternary, colorBgContainerDisabled: o2.colorFillTertiary, colorBorderBg: o2.colorBgContainer, colorSplit: Xo(o2.colorBorderSecondary, o2.colorBgContainer), colorTextPlaceholder: o2.colorTextQuaternary, colorTextDisabled: o2.colorTextQuaternary, colorTextHeading: o2.colorText, colorTextLabel: o2.colorTextSecondary, colorTextDescription: o2.colorTextTertiary, colorTextLightSolid: o2.colorWhite, colorHighlight: o2.colorError, colorBgTextHover: o2.colorFillSecondary, colorBgTextActive: o2.colorFill, colorIcon: o2.colorTextTertiary, colorIconHover: o2.colorText, colorErrorOutline: Xo(o2.colorErrorBg, o2.colorBgContainer), colorWarningOutline: Xo(o2.colorWarningBg, o2.colorBgContainer), fontSizeIcon: o2.fontSizeSM, lineWidthFocus: 3 * o2.lineWidth, lineWidth: o2.lineWidth, controlOutlineWidth: 2 * o2.lineWidth, controlInteractiveSize: o2.controlHeight / 2, controlItemBgHover: o2.colorFillTertiary, controlItemBgActive: o2.colorPrimaryBg, controlItemBgActiveHover: o2.colorPrimaryBgHover, controlItemBgActiveDisabled: o2.colorFill, controlTmpOutline: o2.colorFillQuaternary, controlOutline: Xo(o2.colorPrimaryBg, o2.colorBgContainer), lineType: o2.lineType, borderRadius: o2.borderRadius, borderRadiusXS: o2.borderRadiusXS, borderRadiusSM: o2.borderRadiusSM, borderRadiusLG: o2.borderRadiusLG, fontWeightStrong: 600, opacityLoading: 0.65, linkDecoration: "none", linkHoverDecoration: "none", linkFocusDecoration: "none", controlPaddingHorizontal: 12, controlPaddingHorizontalSM: 8, paddingXXS: o2.sizeXXS, paddingXS: o2.sizeXS, paddingSM: o2.sizeSM, padding: o2.size, paddingMD: o2.sizeMD, paddingLG: o2.sizeLG, paddingXL: o2.sizeXL, paddingContentHorizontalLG: o2.sizeLG, paddingContentVerticalLG: o2.sizeMS, paddingContentHorizontal: o2.sizeMS, paddingContentVertical: o2.sizeSM, paddingContentHorizontalSM: o2.size, paddingContentVerticalSM: o2.sizeXS, marginXXS: o2.sizeXXS, marginXS: o2.sizeXS, marginSM: o2.sizeSM, margin: o2.size, marginMD: o2.sizeMD, marginLG: o2.sizeLG, marginXL: o2.sizeXL, marginXXL: o2.sizeXXL, boxShadow: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ", boxShadowSecondary: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ", boxShadowTertiary: "\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ", screenXS: 480, screenXSMin: 480, screenXSMax: 575, screenSM: 576, screenSMMin: 576, screenSMMax: 767, screenMD: 768, screenMDMin: 768, screenMDMax: 991, screenLG: 992, screenLGMin: 992, screenLGMax: 1199, screenXL: 1200, screenXLMin: 1200, screenXLMax: 1599, screenXXL: 1600, screenXXLMin: 1600, boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)", boxShadowCard: `
      0 1px 2px -2px ${new vn("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new vn("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new vn("rgba(0, 0, 0, 0.09)").toRgbString()}
    `, boxShadowDrawerRight: "\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ", boxShadowDrawerLeft: "\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ", boxShadowDrawerUp: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ", boxShadowDrawerDown: "\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ", boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)", boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)", boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)", boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)" }), r2);
        }
        var _o = function(e3, t3) {
          var n2 = {};
          for (var r2 in e3)
            Object.prototype.hasOwnProperty.call(e3, r2) && t3.indexOf(r2) < 0 && (n2[r2] = e3[r2]);
          if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
            var o2 = 0;
            for (r2 = Object.getOwnPropertySymbols(e3); o2 < r2.length; o2++)
              t3.indexOf(r2[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, r2[o2]) && (n2[r2[o2]] = e3[r2[o2]]);
          }
          return n2;
        };
        const Qo = { lineHeight: true, lineHeightSM: true, lineHeightLG: true, lineHeightHeading1: true, lineHeightHeading2: true, lineHeightHeading3: true, lineHeightHeading4: true, lineHeightHeading5: true, opacityLoading: true, fontWeightStrong: true, zIndexPopupBase: true, zIndexBase: true, opacityImage: true }, Yo = { size: true, sizeSM: true, sizeLG: true, sizeMD: true, sizeXS: true, sizeXXS: true, sizeMS: true, sizeXL: true, sizeXXL: true, sizeUnit: true, sizeStep: true, motionBase: true, motionUnit: true }, Zo = { screenXS: true, screenXSMin: true, screenXSMax: true, screenSM: true, screenSMMin: true, screenSMMax: true, screenMD: true, screenMDMin: true, screenMDMax: true, screenLG: true, screenLGMin: true, screenLGMax: true, screenXL: true, screenXLMin: true, screenXLMax: true, screenXXL: true, screenXXLMin: true }, Jo = (e3, t3, n2) => {
          const r2 = n2.getDerivativeToken(e3), { override: o2 } = t3, i2 = _o(t3, ["override"]);
          let a2 = Object.assign(Object.assign({}, r2), { override: o2 });
          return a2 = Uo(a2), i2 && Object.entries(i2).forEach((e4) => {
            let [t4, n3] = e4;
            const { theme: r3 } = n3, o3 = _o(n3, ["theme"]);
            let i3 = o3;
            r3 && (i3 = Jo(Object.assign(Object.assign({}, a2), o3), { override: o3 }, r3)), a2[t4] = i3;
          }), a2;
        };
        function ei() {
          const { token: e3, hashed: t3, theme: n2, override: r2, cssVar: i2 } = o().useContext(ar), a2 = `5.23.0-${t3 || ""}`, s2 = n2 || or, [l2, c2, u2] = De(s2, [Zn, e3], { salt: a2, override: r2, getComputedToken: Jo, formatToken: Uo, cssVar: i2 && { prefix: i2.prefix, key: i2.key, unitless: Qo, ignore: Yo, preserve: Zo } });
          return [s2, u2, t3 ? c2 : "", l2, i2];
        }
        function ti(e3) {
          const { children: n2 } = e3, [, r2] = ei(), { motion: o2 } = r2, i2 = t2.useRef(false);
          return i2.current = i2.current || false === o2, i2.current ? t2.createElement(Fr, { motion: o2 }, n2) : n2;
        }
        const ni = () => null, ri = { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }, oi = function(e3) {
          let t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return { boxSizing: "border-box", margin: 0, padding: 0, color: e3.colorText, fontSize: e3.fontSize, lineHeight: e3.lineHeight, listStyle: "none", fontFamily: t3 ? "inherit" : e3.fontFamily };
        }, ii = (e3) => ({ a: { color: e3.colorLink, textDecoration: e3.linkDecoration, backgroundColor: "transparent", outline: "none", cursor: "pointer", transition: `color ${e3.motionDurationSlow}`, "-webkit-text-decoration-skip": "objects", "&:hover": { color: e3.colorLinkHover }, "&:active": { color: e3.colorLinkActive }, "&:active, &:hover": { textDecoration: e3.linkHoverDecoration, outline: 0 }, "&:focus": { textDecoration: e3.linkFocusDecoration, outline: 0 }, "&[disabled]": { color: e3.colorTextDisabled, cursor: "not-allowed" } } }), ai = (e3, t3) => ({ outline: `${Ee(e3.lineWidthFocus)} solid ${e3.colorPrimaryBorder}`, outlineOffset: null != t3 ? t3 : 1, transition: "outline-offset 0s, outline 0s" }), si = (e3, t3) => ({ "&:focus-visible": Object.assign({}, ai(e3, t3)) }), li = (e3) => ({ [`.${e3}`]: Object.assign(Object.assign({}, { display: "inline-flex", alignItems: "center", color: "inherit", fontStyle: "normal", lineHeight: 0, textAlign: "center", textTransform: "none", verticalAlign: "-0.125em", textRendering: "optimizeLegibility", "-webkit-font-smoothing": "antialiased", "-moz-osx-font-smoothing": "grayscale", "> *": { lineHeight: 1 }, svg: { display: "inline-block" } }), { [`.${e3} .${e3}-icon`]: { display: "block" } }) });
        const ci = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
        let ui, di, fi, pi;
        function mi() {
          return ui || S;
        }
        function gi() {
          return di || A;
        }
        const hi = () => ({ getPrefixCls: (e3, t3) => t3 || (e3 ? `${mi()}-${e3}` : mi()), getIconPrefixCls: gi, getRootPrefixCls: () => ui || mi(), getTheme: () => fi, holderRender: pi }), vi = (e3) => {
          const { children: n2, csp: r2, autoInsertSpaceInButton: o2, alert: i2, anchor: a2, form: s2, locale: l2, componentSize: c2, direction: u2, space: d2, splitter: f2, virtual: p2, dropdownMatchSelectWidth: m2, popupMatchSelectWidth: g2, popupOverflow: h2, legacyLocale: v2, parentContext: b2, iconPrefixCls: y2, theme: C2, componentDisabled: w2, segmented: x2, statistic: S2, spin: k2, calendar: O2, carousel: P2, cascader: I2, collapse: j2, typography: $2, checkbox: N2, descriptions: M2, divider: R2, drawer: B2, skeleton: T2, steps: F2, image: L2, layout: z2, list: H2, mentions: D2, modal: q2, progress: V2, result: W2, slider: K2, breadcrumb: G2, menu: X2, pagination: _2, input: Q2, textArea: Y2, empty: Z2, badge: J2, radio: ee2, rate: te2, switch: re2, transfer: oe2, avatar: ie2, message: ae2, tag: se2, table: le2, card: ce2, tabs: ue2, timeline: de2, timePicker: fe2, upload: pe2, notification: me2, tree: ge2, colorPicker: he2, datePicker: ve2, rangePicker: ye2, flex: Ce2, wave: we2, dropdown: xe2, warning: Se2, tour: Ae2, tooltip: Ee2, popover: ke2, popconfirm: Oe2, floatButtonGroup: Pe2, variant: Ie2, inputNumber: je2, treeSelect: $e2 } = e3, Ne2 = t2.useCallback((t3, n3) => {
            const { prefixCls: r3 } = e3;
            if (n3)
              return n3;
            const o3 = r3 || b2.getPrefixCls("");
            return t3 ? `${o3}-${t3}` : o3;
          }, [b2.getPrefixCls, e3.prefixCls]), Me2 = y2 || b2.iconPrefixCls || A, Re2 = r2 || b2.csp;
          ((e4, t3) => {
            const [n3, r3] = ei();
            Lt({ theme: n3, token: r3, hashId: "", path: ["ant-design-icons", e4], nonce: () => null == t3 ? void 0 : t3.nonce, layer: { name: "antd" } }, () => [li(e4)]);
          })(Me2, Re2);
          const Be2 = function(e4, t3, n3) {
            var r3;
            Jt();
            const o3 = e4 || {}, i3 = false !== o3.inherit && t3 ? t3 : Object.assign(Object.assign({}, ir), { hashed: null !== (r3 = null == t3 ? void 0 : t3.hashed) && void 0 !== r3 ? r3 : ir.hashed, cssVar: null == t3 ? void 0 : t3.cssVar }), a3 = hr();
            return U(() => {
              var r4, s3;
              if (!e4)
                return t3;
              const l3 = Object.assign({}, i3.components);
              Object.keys(e4.components || {}).forEach((t4) => {
                l3[t4] = Object.assign(Object.assign({}, l3[t4]), e4.components[t4]);
              });
              const c3 = `css-var-${a3.replace(/:/g, "")}`, u3 = (null !== (r4 = o3.cssVar) && void 0 !== r4 ? r4 : i3.cssVar) && Object.assign(Object.assign(Object.assign({ prefix: null == n3 ? void 0 : n3.prefixCls }, "object" == typeof i3.cssVar ? i3.cssVar : {}), "object" == typeof o3.cssVar ? o3.cssVar : {}), { key: "object" == typeof o3.cssVar && (null === (s3 = o3.cssVar) || void 0 === s3 ? void 0 : s3.key) || c3 });
              return Object.assign(Object.assign(Object.assign({}, i3), o3), { token: Object.assign(Object.assign({}, i3.token), o3.token), components: l3, cssVar: u3 });
            }, [o3, i3], (e5, t4) => e5.some((e6, n4) => {
              const r4 = t4[n4];
              return !ne(e6, r4, true);
            }));
          }(C2, b2.theme, { prefixCls: Ne2("") }), Te2 = { csp: Re2, autoInsertSpaceInButton: o2, alert: i2, anchor: a2, locale: l2 || v2, direction: u2, space: d2, splitter: f2, virtual: p2, popupMatchSelectWidth: null != g2 ? g2 : m2, popupOverflow: h2, getPrefixCls: Ne2, iconPrefixCls: Me2, theme: Be2, segmented: x2, statistic: S2, spin: k2, calendar: O2, carousel: P2, cascader: I2, collapse: j2, typography: $2, checkbox: N2, descriptions: M2, divider: R2, drawer: B2, skeleton: T2, steps: F2, image: L2, input: Q2, textArea: Y2, layout: z2, list: H2, mentions: D2, modal: q2, progress: V2, result: W2, slider: K2, breadcrumb: G2, menu: X2, pagination: _2, empty: Z2, badge: J2, radio: ee2, rate: te2, switch: re2, transfer: oe2, avatar: ie2, message: ae2, tag: se2, table: le2, card: ce2, tabs: ue2, timeline: de2, timePicker: fe2, upload: pe2, notification: me2, tree: ge2, colorPicker: he2, datePicker: ve2, rangePicker: ye2, flex: Ce2, wave: we2, dropdown: xe2, warning: Se2, tour: Ae2, tooltip: Ee2, popover: ke2, popconfirm: Oe2, floatButtonGroup: Pe2, variant: Ie2, inputNumber: je2, treeSelect: $e2 }, Fe2 = Object.assign({}, b2);
          Object.keys(Te2).forEach((e4) => {
            void 0 !== Te2[e4] && (Fe2[e4] = Te2[e4]);
          }), ci.forEach((t3) => {
            const n3 = e3[t3];
            n3 && (Fe2[t3] = n3);
          }), void 0 !== o2 && (Fe2.button = Object.assign({ autoInsertSpace: o2 }, Fe2.button));
          const Le2 = U(() => Fe2, Fe2, (e4, t3) => {
            const n3 = Object.keys(e4), r3 = Object.keys(t3);
            return n3.length !== r3.length || n3.some((n4) => e4[n4] !== t3[n4]);
          }), ze2 = t2.useMemo(() => ({ prefixCls: Me2, csp: Re2 }), [Me2, Re2]);
          let He2 = t2.createElement(t2.Fragment, null, t2.createElement(ni, { dropdownMatchSelectWidth: m2 }), n2);
          const De2 = t2.useMemo(() => {
            var e4, t3, n3, r3;
            return Qt((null === (e4 = an.Form) || void 0 === e4 ? void 0 : e4.defaultValidateMessages) || {}, (null === (n3 = null === (t3 = Le2.locale) || void 0 === t3 ? void 0 : t3.Form) || void 0 === n3 ? void 0 : n3.defaultValidateMessages) || {}, (null === (r3 = Le2.form) || void 0 === r3 ? void 0 : r3.validateMessages) || {}, (null == s2 ? void 0 : s2.validateMessages) || {});
          }, [Le2, null == s2 ? void 0 : s2.validateMessages]);
          Object.keys(De2).length > 0 && (He2 = t2.createElement(en.Provider, { value: De2 }, He2)), l2 && (He2 = t2.createElement(fn, { locale: l2, _ANT_MARK__: "internalMark" }, He2)), (Me2 || Re2) && (He2 = t2.createElement(Wt.Provider, { value: ze2 }, He2)), c2 && (He2 = t2.createElement(fr, { size: c2 }, He2)), He2 = t2.createElement(ti, null, He2);
          const qe2 = t2.useMemo(() => {
            const e4 = Be2 || {}, { algorithm: t3, token: n3, components: r3, cssVar: o3 } = e4, i3 = function(e5, t4) {
              var n4 = {};
              for (var r4 in e5)
                Object.prototype.hasOwnProperty.call(e5, r4) && t4.indexOf(r4) < 0 && (n4[r4] = e5[r4]);
              if (null != e5 && "function" == typeof Object.getOwnPropertySymbols) {
                var o4 = 0;
                for (r4 = Object.getOwnPropertySymbols(e5); o4 < r4.length; o4++)
                  t4.indexOf(r4[o4]) < 0 && Object.prototype.propertyIsEnumerable.call(e5, r4[o4]) && (n4[r4[o4]] = e5[r4[o4]]);
              }
              return n4;
            }(e4, ["algorithm", "token", "components", "cssVar"]), a3 = t3 && (!Array.isArray(t3) || t3.length > 0) ? be(t3) : or, s3 = {};
            Object.entries(r3 || {}).forEach((e5) => {
              let [t4, n4] = e5;
              const r4 = Object.assign({}, n4);
              "algorithm" in r4 && (true === r4.algorithm ? r4.theme = a3 : (Array.isArray(r4.algorithm) || "function" == typeof r4.algorithm) && (r4.theme = be(r4.algorithm)), delete r4.algorithm), s3[t4] = r4;
            });
            const l3 = Object.assign(Object.assign({}, Zn), n3);
            return Object.assign(Object.assign({}, i3), { theme: a3, token: l3, components: s3, override: Object.assign({ override: l3 }, s3), cssVar: o3 });
          }, [Be2]);
          return C2 && (He2 = t2.createElement(ar.Provider, { value: qe2 }, He2)), Le2.warning && (He2 = t2.createElement(Zt.Provider, { value: Le2.warning }, He2)), void 0 !== w2 && (He2 = t2.createElement(cr, { disabled: w2 }, He2)), t2.createElement(E.Provider, { value: Le2 }, He2);
        }, bi = (e3) => {
          const n2 = t2.useContext(E), r2 = t2.useContext(dn);
          return t2.createElement(vi, Object.assign({ parentContext: n2, legacyLocale: r2 }, e3));
        };
        bi.ConfigContext = E, bi.SizeContext = pr, bi.config = (e3) => {
          const { prefixCls: t3, iconPrefixCls: n2, theme: r2, holderRender: o2 } = e3;
          void 0 !== t3 && (ui = t3), void 0 !== n2 && (di = n2), "holderRender" in e3 && (pi = o2), r2 && (function(e4) {
            return Object.keys(e4).some((e5) => e5.endsWith("Color"));
          }(r2) ? function(e4, t4) {
            const n3 = function(e5, t5) {
              const n4 = {}, r3 = (e6, t6) => {
                let n5 = e6.clone();
                return n5 = (null == t6 ? void 0 : t6(n5)) || n5, n5.toRgbString();
              }, o3 = (e6, t6) => {
                const o4 = new vn(e6), i2 = xn(o4.toRgbString());
                n4[`${t6}-color`] = r3(o4), n4[`${t6}-color-disabled`] = i2[1], n4[`${t6}-color-hover`] = i2[4], n4[`${t6}-color-active`] = i2[6], n4[`${t6}-color-outline`] = o4.clone().setA(0.2).toRgbString(), n4[`${t6}-color-deprecated-bg`] = i2[0], n4[`${t6}-color-deprecated-border`] = i2[2];
              };
              if (t5.primaryColor) {
                o3(t5.primaryColor, "primary");
                const e6 = new vn(t5.primaryColor), i2 = xn(e6.toRgbString());
                i2.forEach((e7, t6) => {
                  n4[`primary-${t6 + 1}`] = e7;
                }), n4["primary-color-deprecated-l-35"] = r3(e6, (e7) => e7.lighten(35)), n4["primary-color-deprecated-l-20"] = r3(e6, (e7) => e7.lighten(20)), n4["primary-color-deprecated-t-20"] = r3(e6, (e7) => e7.tint(20)), n4["primary-color-deprecated-t-50"] = r3(e6, (e7) => e7.tint(50)), n4["primary-color-deprecated-f-12"] = r3(e6, (e7) => e7.setA(0.12 * e7.a));
                const a2 = new vn(i2[0]);
                n4["primary-color-active-deprecated-f-30"] = r3(a2, (e7) => e7.setA(0.3 * e7.a)), n4["primary-color-active-deprecated-d-02"] = r3(a2, (e7) => e7.darken(2));
              }
              return t5.successColor && o3(t5.successColor, "success"), t5.warningColor && o3(t5.warningColor, "warning"), t5.errorColor && o3(t5.errorColor, "error"), t5.infoColor && o3(t5.infoColor, "info"), `
  :root {
    ${Object.keys(n4).map((t6) => `--${e5}-${t6}: ${n4[t6]};`).join("\n")}
  }
  `.trim();
            }(e4, t4);
            T() && X(n3, `${sr}-dynamic-theme`);
          }(mi(), r2) : fi = r2);
        }, bi.useConfig = function() {
          return { componentDisabled: (0, t2.useContext)(ur), componentSize: (0, t2.useContext)(pr) };
        }, Object.defineProperty(bi, "SizeContext", { get: () => pr });
        const yi = bi;
        function Ci() {
          Ci = function() {
            return t3;
          };
          var e3, t3 = {}, n2 = Object.prototype, r2 = n2.hasOwnProperty, o2 = Object.defineProperty || function(e4, t4, n3) {
            e4[t4] = n3.value;
          }, i2 = "function" == typeof Symbol ? Symbol : {}, a2 = i2.iterator || "@@iterator", s2 = i2.asyncIterator || "@@asyncIterator", l2 = i2.toStringTag || "@@toStringTag";
          function c2(e4, t4, n3) {
            return Object.defineProperty(e4, t4, { value: n3, enumerable: true, configurable: true, writable: true }), e4[t4];
          }
          try {
            c2({}, "");
          } catch (e4) {
            c2 = function(e5, t4, n3) {
              return e5[t4] = n3;
            };
          }
          function u2(e4, t4, n3, r3) {
            var i3 = t4 && t4.prototype instanceof v2 ? t4 : v2, a3 = Object.create(i3.prototype), s3 = new $2(r3 || []);
            return o2(a3, "_invoke", { value: k2(e4, n3, s3) }), a3;
          }
          function d2(e4, t4, n3) {
            try {
              return { type: "normal", arg: e4.call(t4, n3) };
            } catch (e5) {
              return { type: "throw", arg: e5 };
            }
          }
          t3.wrap = u2;
          var f2 = "suspendedStart", p2 = "suspendedYield", m2 = "executing", g2 = "completed", h2 = {};
          function v2() {
          }
          function b2() {
          }
          function y2() {
          }
          var C2 = {};
          c2(C2, a2, function() {
            return this;
          });
          var w2 = Object.getPrototypeOf, x2 = w2 && w2(w2(N2([])));
          x2 && x2 !== n2 && r2.call(x2, a2) && (C2 = x2);
          var S2 = y2.prototype = v2.prototype = Object.create(C2);
          function A2(e4) {
            ["next", "throw", "return"].forEach(function(t4) {
              c2(e4, t4, function(e5) {
                return this._invoke(t4, e5);
              });
            });
          }
          function E2(e4, t4) {
            function n3(o3, i4, a3, s3) {
              var l3 = d2(e4[o3], e4, i4);
              if ("throw" !== l3.type) {
                var c3 = l3.arg, u3 = c3.value;
                return u3 && "object" == O(u3) && r2.call(u3, "__await") ? t4.resolve(u3.__await).then(function(e5) {
                  n3("next", e5, a3, s3);
                }, function(e5) {
                  n3("throw", e5, a3, s3);
                }) : t4.resolve(u3).then(function(e5) {
                  c3.value = e5, a3(c3);
                }, function(e5) {
                  return n3("throw", e5, a3, s3);
                });
              }
              s3(l3.arg);
            }
            var i3;
            o2(this, "_invoke", { value: function(e5, r3) {
              function o3() {
                return new t4(function(t5, o4) {
                  n3(e5, r3, t5, o4);
                });
              }
              return i3 = i3 ? i3.then(o3, o3) : o3();
            } });
          }
          function k2(t4, n3, r3) {
            var o3 = f2;
            return function(i3, a3) {
              if (o3 === m2)
                throw Error("Generator is already running");
              if (o3 === g2) {
                if ("throw" === i3)
                  throw a3;
                return { value: e3, done: true };
              }
              for (r3.method = i3, r3.arg = a3; ; ) {
                var s3 = r3.delegate;
                if (s3) {
                  var l3 = P2(s3, r3);
                  if (l3) {
                    if (l3 === h2)
                      continue;
                    return l3;
                  }
                }
                if ("next" === r3.method)
                  r3.sent = r3._sent = r3.arg;
                else if ("throw" === r3.method) {
                  if (o3 === f2)
                    throw o3 = g2, r3.arg;
                  r3.dispatchException(r3.arg);
                } else
                  "return" === r3.method && r3.abrupt("return", r3.arg);
                o3 = m2;
                var c3 = d2(t4, n3, r3);
                if ("normal" === c3.type) {
                  if (o3 = r3.done ? g2 : p2, c3.arg === h2)
                    continue;
                  return { value: c3.arg, done: r3.done };
                }
                "throw" === c3.type && (o3 = g2, r3.method = "throw", r3.arg = c3.arg);
              }
            };
          }
          function P2(t4, n3) {
            var r3 = n3.method, o3 = t4.iterator[r3];
            if (o3 === e3)
              return n3.delegate = null, "throw" === r3 && t4.iterator.return && (n3.method = "return", n3.arg = e3, P2(t4, n3), "throw" === n3.method) || "return" !== r3 && (n3.method = "throw", n3.arg = new TypeError("The iterator does not provide a '" + r3 + "' method")), h2;
            var i3 = d2(o3, t4.iterator, n3.arg);
            if ("throw" === i3.type)
              return n3.method = "throw", n3.arg = i3.arg, n3.delegate = null, h2;
            var a3 = i3.arg;
            return a3 ? a3.done ? (n3[t4.resultName] = a3.value, n3.next = t4.nextLoc, "return" !== n3.method && (n3.method = "next", n3.arg = e3), n3.delegate = null, h2) : a3 : (n3.method = "throw", n3.arg = new TypeError("iterator result is not an object"), n3.delegate = null, h2);
          }
          function I2(e4) {
            var t4 = { tryLoc: e4[0] };
            1 in e4 && (t4.catchLoc = e4[1]), 2 in e4 && (t4.finallyLoc = e4[2], t4.afterLoc = e4[3]), this.tryEntries.push(t4);
          }
          function j2(e4) {
            var t4 = e4.completion || {};
            t4.type = "normal", delete t4.arg, e4.completion = t4;
          }
          function $2(e4) {
            this.tryEntries = [{ tryLoc: "root" }], e4.forEach(I2, this), this.reset(true);
          }
          function N2(t4) {
            if (t4 || "" === t4) {
              var n3 = t4[a2];
              if (n3)
                return n3.call(t4);
              if ("function" == typeof t4.next)
                return t4;
              if (!isNaN(t4.length)) {
                var o3 = -1, i3 = function n4() {
                  for (; ++o3 < t4.length; )
                    if (r2.call(t4, o3))
                      return n4.value = t4[o3], n4.done = false, n4;
                  return n4.value = e3, n4.done = true, n4;
                };
                return i3.next = i3;
              }
            }
            throw new TypeError(O(t4) + " is not iterable");
          }
          return b2.prototype = y2, o2(S2, "constructor", { value: y2, configurable: true }), o2(y2, "constructor", { value: b2, configurable: true }), b2.displayName = c2(y2, l2, "GeneratorFunction"), t3.isGeneratorFunction = function(e4) {
            var t4 = "function" == typeof e4 && e4.constructor;
            return !!t4 && (t4 === b2 || "GeneratorFunction" === (t4.displayName || t4.name));
          }, t3.mark = function(e4) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e4, y2) : (e4.__proto__ = y2, c2(e4, l2, "GeneratorFunction")), e4.prototype = Object.create(S2), e4;
          }, t3.awrap = function(e4) {
            return { __await: e4 };
          }, A2(E2.prototype), c2(E2.prototype, s2, function() {
            return this;
          }), t3.AsyncIterator = E2, t3.async = function(e4, n3, r3, o3, i3) {
            void 0 === i3 && (i3 = Promise);
            var a3 = new E2(u2(e4, n3, r3, o3), i3);
            return t3.isGeneratorFunction(n3) ? a3 : a3.next().then(function(e5) {
              return e5.done ? e5.value : a3.next();
            });
          }, A2(S2), c2(S2, l2, "Generator"), c2(S2, a2, function() {
            return this;
          }), c2(S2, "toString", function() {
            return "[object Generator]";
          }), t3.keys = function(e4) {
            var t4 = Object(e4), n3 = [];
            for (var r3 in t4)
              n3.push(r3);
            return n3.reverse(), function e5() {
              for (; n3.length; ) {
                var r4 = n3.pop();
                if (r4 in t4)
                  return e5.value = r4, e5.done = false, e5;
              }
              return e5.done = true, e5;
            };
          }, t3.values = N2, $2.prototype = { constructor: $2, reset: function(t4) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = e3, this.done = false, this.delegate = null, this.method = "next", this.arg = e3, this.tryEntries.forEach(j2), !t4)
              for (var n3 in this)
                "t" === n3.charAt(0) && r2.call(this, n3) && !isNaN(+n3.slice(1)) && (this[n3] = e3);
          }, stop: function() {
            this.done = true;
            var e4 = this.tryEntries[0].completion;
            if ("throw" === e4.type)
              throw e4.arg;
            return this.rval;
          }, dispatchException: function(t4) {
            if (this.done)
              throw t4;
            var n3 = this;
            function o3(r3, o4) {
              return s3.type = "throw", s3.arg = t4, n3.next = r3, o4 && (n3.method = "next", n3.arg = e3), !!o4;
            }
            for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
              var a3 = this.tryEntries[i3], s3 = a3.completion;
              if ("root" === a3.tryLoc)
                return o3("end");
              if (a3.tryLoc <= this.prev) {
                var l3 = r2.call(a3, "catchLoc"), c3 = r2.call(a3, "finallyLoc");
                if (l3 && c3) {
                  if (this.prev < a3.catchLoc)
                    return o3(a3.catchLoc, true);
                  if (this.prev < a3.finallyLoc)
                    return o3(a3.finallyLoc);
                } else if (l3) {
                  if (this.prev < a3.catchLoc)
                    return o3(a3.catchLoc, true);
                } else {
                  if (!c3)
                    throw Error("try statement without catch or finally");
                  if (this.prev < a3.finallyLoc)
                    return o3(a3.finallyLoc);
                }
              }
            }
          }, abrupt: function(e4, t4) {
            for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
              var o3 = this.tryEntries[n3];
              if (o3.tryLoc <= this.prev && r2.call(o3, "finallyLoc") && this.prev < o3.finallyLoc) {
                var i3 = o3;
                break;
              }
            }
            i3 && ("break" === e4 || "continue" === e4) && i3.tryLoc <= t4 && t4 <= i3.finallyLoc && (i3 = null);
            var a3 = i3 ? i3.completion : {};
            return a3.type = e4, a3.arg = t4, i3 ? (this.method = "next", this.next = i3.finallyLoc, h2) : this.complete(a3);
          }, complete: function(e4, t4) {
            if ("throw" === e4.type)
              throw e4.arg;
            return "break" === e4.type || "continue" === e4.type ? this.next = e4.arg : "return" === e4.type ? (this.rval = this.arg = e4.arg, this.method = "return", this.next = "end") : "normal" === e4.type && t4 && (this.next = t4), h2;
          }, finish: function(e4) {
            for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
              var n3 = this.tryEntries[t4];
              if (n3.finallyLoc === e4)
                return this.complete(n3.completion, n3.afterLoc), j2(n3), h2;
            }
          }, catch: function(e4) {
            for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
              var n3 = this.tryEntries[t4];
              if (n3.tryLoc === e4) {
                var r3 = n3.completion;
                if ("throw" === r3.type) {
                  var o3 = r3.arg;
                  j2(n3);
                }
                return o3;
              }
            }
            throw Error("illegal catch attempt");
          }, delegateYield: function(t4, n3, r3) {
            return this.delegate = { iterator: N2(t4), resultName: n3, nextLoc: r3 }, "next" === this.method && (this.arg = e3), h2;
          } }, t3;
        }
        function wi(e3, t3, n2, r2, o2, i2, a2) {
          try {
            var s2 = e3[i2](a2), l2 = s2.value;
          } catch (e4) {
            return void n2(e4);
          }
          s2.done ? t3(l2) : Promise.resolve(l2).then(r2, o2);
        }
        function xi(e3) {
          return function() {
            var t3 = this, n2 = arguments;
            return new Promise(function(r2, o2) {
              var i2 = e3.apply(t3, n2);
              function a2(e4) {
                wi(i2, r2, o2, a2, s2, "next", e4);
              }
              function s2(e4) {
                wi(i2, r2, o2, a2, s2, "throw", e4);
              }
              a2(void 0);
            });
          };
        }
        var Si, Ai = R({}, yr), Ei = Ai.version, ki = Ai.render, Oi = Ai.unmountComponentAtNode;
        try {
          Number((Ei || "").split(".")[0]) >= 18 && (Si = Ai.createRoot);
        } catch (e3) {
        }
        function Pi(e3) {
          var t3 = Ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          t3 && "object" === O(t3) && (t3.usingClientEntryPoint = e3);
        }
        var Ii = "__rc_react_root__";
        function ji(e3) {
          return $i.apply(this, arguments);
        }
        function $i() {
          return ($i = xi(Ci().mark(function e3(t3) {
            return Ci().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return e4.abrupt("return", Promise.resolve().then(function() {
                      var e5;
                      null === (e5 = t3[Ii]) || void 0 === e5 || e5.unmount(), delete t3[Ii];
                    }));
                  case 1:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        function Ni(e3) {
          Oi(e3);
        }
        function Mi() {
          return (Mi = xi(Ci().mark(function e3(t3) {
            return Ci().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    if (void 0 === Si) {
                      e4.next = 2;
                      break;
                    }
                    return e4.abrupt("return", ji(t3));
                  case 2:
                    Ni(t3);
                  case 3:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        let Ri = (e3, t3) => (function(e4, t4) {
          Si ? function(e5, t5) {
            Pi(true);
            var n2 = t5[Ii] || Si(t5);
            Pi(false), n2.render(e5), t5[Ii] = n2;
          }(e4, t4) : function(e5, t5) {
            null == ki || ki(e5, t5);
          }(e4, t4);
        }(e3, t3), () => function(e4) {
          return Mi.apply(this, arguments);
        }(t3));
        function Bi() {
          return Ri;
        }
        const Ti = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
        function Fi(e3) {
          var t3;
          return null == e3 || null === (t3 = e3.getRootNode) || void 0 === t3 ? void 0 : t3.call(e3);
        }
        function Li(e3) {
          return function(e4) {
            return Fi(e4) instanceof ShadowRoot;
          }(e3) ? Fi(e3) : null;
        }
        function zi(e3) {
          return "object" === O(e3) && "string" == typeof e3.name && "string" == typeof e3.theme && ("object" === O(e3.icon) || "function" == typeof e3.icon);
        }
        function Hi() {
          var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Object.keys(e3).reduce(function(t3, n2) {
            var r2, o2 = e3[n2];
            return "class" === n2 ? (t3.className = o2, delete t3.class) : (delete t3[n2], t3[r2 = n2, r2.replace(/-(.)/g, function(e4, t4) {
              return t4.toUpperCase();
            })] = o2), t3;
          }, {});
        }
        function Di(e3, t3, n2) {
          return n2 ? o().createElement(e3.tag, R(R({ key: t3 }, Hi(e3.attrs)), n2), (e3.children || []).map(function(n3, r2) {
            return Di(n3, "".concat(t3, "-").concat(e3.tag, "-").concat(r2));
          })) : o().createElement(e3.tag, R({ key: t3 }, Hi(e3.attrs)), (e3.children || []).map(function(n3, r2) {
            return Di(n3, "".concat(t3, "-").concat(e3.tag, "-").concat(r2));
          }));
        }
        function qi(e3) {
          return xn(e3)[0];
        }
        function Vi(e3) {
          return e3 ? Array.isArray(e3) ? e3 : [e3] : [];
        }
        var Wi = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Ki = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: false }, Gi = function(e3) {
          var n2, r2, o2, i2, a2, s2 = e3.icon, l2 = e3.className, c2 = e3.onClick, u2 = e3.style, d2 = e3.primaryColor, f2 = e3.secondaryColor, p2 = Rr(e3, Wi), m2 = t2.useRef(), g2 = Ki;
          if (d2 && (g2 = { primaryColor: d2, secondaryColor: f2 || qi(d2) }), n2 = m2, r2 = (0, t2.useContext)(Wt), o2 = r2.csp, i2 = r2.prefixCls, a2 = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n", i2 && (a2 = a2.replace(/anticon/g, i2)), (0, t2.useEffect)(function() {
            var e4 = Li(n2.current);
            X(a2, "@ant-design-icons", { prepend: true, csp: o2, attachTo: e4 });
          }, []), function(e4, t3) {
            te(e4, "[@ant-design/icons] ".concat(t3));
          }(zi(s2), "icon should be icon definiton, but got ".concat(s2)), !zi(s2))
            return null;
          var h2 = s2;
          return h2 && "function" == typeof h2.icon && (h2 = R(R({}, h2), {}, { icon: h2.icon(g2.primaryColor, g2.secondaryColor) })), Di(h2.icon, "svg-".concat(h2.name), R(R({ className: l2, onClick: c2, style: u2, "data-icon": h2.name, width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" }, p2), {}, { ref: m2 }));
        };
        Gi.displayName = "IconReact", Gi.getTwoToneColors = function() {
          return R({}, Ki);
        }, Gi.setTwoToneColors = function(e3) {
          var t3 = e3.primaryColor, n2 = e3.secondaryColor;
          Ki.primaryColor = t3, Ki.secondaryColor = n2 || qi(t3), Ki.calculated = !!n2;
        };
        const Xi = Gi;
        function Ui(e3) {
          var t3 = N(Vi(e3), 2), n2 = t3[0], r2 = t3[1];
          return Xi.setTwoToneColors({ primaryColor: n2, secondaryColor: r2 });
        }
        var _i = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
        Ui(Nn.primary);
        var Qi = t2.forwardRef(function(e3, n2) {
          var r2 = e3.className, o2 = e3.icon, i2 = e3.spin, a2 = e3.rotate, s2 = e3.tabIndex, l2 = e3.onClick, c2 = e3.twoToneColor, u2 = Rr(e3, _i), d2 = t2.useContext(Wt), f2 = d2.prefixCls, p2 = void 0 === f2 ? "anticon" : f2, m2 = d2.rootClassName, g2 = br()(m2, p2, I(I({}, "".concat(p2, "-").concat(o2.name), !!o2.name), "".concat(p2, "-spin"), !!i2 || "loading" === o2.name), r2), h2 = s2;
          void 0 === h2 && l2 && (h2 = -1);
          var v2 = a2 ? { msTransform: "rotate(".concat(a2, "deg)"), transform: "rotate(".concat(a2, "deg)") } : void 0, b2 = N(Vi(c2), 2), y2 = b2[0], C2 = b2[1];
          return t2.createElement("span", qe({ role: "img", "aria-label": o2.name }, u2, { ref: n2, tabIndex: h2, onClick: l2, className: g2 }), t2.createElement(Xi, { icon: o2, primaryColor: y2, secondaryColor: C2, style: v2 }));
        });
        Qi.displayName = "AntdIcon", Qi.getTwoToneColor = function() {
          var e3 = Xi.getTwoToneColors();
          return e3.calculated ? [e3.primaryColor, e3.secondaryColor] : e3.primaryColor;
        }, Qi.setTwoToneColor = Ui;
        const Yi = Qi;
        var Zi = function(e3, n2) {
          return t2.createElement(Yi, qe({}, e3, { ref: n2, icon: Ti }));
        };
        const Ji = t2.forwardRef(Zi), ea = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
        var ta = function(e3, n2) {
          return t2.createElement(Yi, qe({}, e3, { ref: n2, icon: ea }));
        };
        const na = t2.forwardRef(ta), ra = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
        var oa = function(e3, n2) {
          return t2.createElement(Yi, qe({}, e3, { ref: n2, icon: ra }));
        };
        const ia = t2.forwardRef(oa), aa = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
        var sa = function(e3, n2) {
          return t2.createElement(Yi, qe({}, e3, { ref: n2, icon: aa }));
        };
        const la = t2.forwardRef(sa), ca = o().createContext(void 0), ua = 100, da = { Modal: ua, Drawer: ua, Popover: ua, Popconfirm: ua, Tooltip: ua, Tour: ua, FloatButton: ua }, fa = { SelectLike: 50, Dropdown: 50, DatePicker: 50, Menu: 50, ImagePreview: 1 }, pa = (e3, t3) => {
          const [, n2] = ei(), r2 = o().useContext(ca), i2 = e3 in da;
          let a2;
          if (void 0 !== t3)
            a2 = [t3, t3];
          else {
            let o2 = null != r2 ? r2 : 0;
            o2 += i2 ? (r2 ? 0 : n2.zIndexPopupBase) + da[e3] : fa[e3], a2 = [void 0 === r2 ? t3 : o2, o2];
          }
          return a2;
        }, ma = () => ({ height: 0, opacity: 0 }), ga = (e3) => {
          const { scrollHeight: t3 } = e3;
          return { height: t3, opacity: 1 };
        }, ha = (e3) => ({ height: e3 ? e3.offsetHeight : 0 }), va = (e3, t3) => true === (null == t3 ? void 0 : t3.deadline) || "height" === t3.propertyName, ba = (e3, t3, n2) => void 0 !== n2 ? n2 : `${e3}-${t3}`, ya = function() {
          return { motionName: `${arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S}-motion-collapse`, onAppearStart: ma, onEnterStart: ma, onAppearActive: ga, onEnterActive: ga, onLeaveStart: ha, onLeaveActive: ma, onAppearEnd: va, onEnterEnd: va, onLeaveEnd: va, motionDeadline: 500 };
        }, Ca = (e3, n2) => {
          const r2 = t2.useContext(dn);
          return [t2.useMemo(() => {
            var t3;
            const o2 = n2 || an[e3], i2 = null !== (t3 = null == r2 ? void 0 : r2[e3]) && void 0 !== t3 ? t3 : {};
            return Object.assign(Object.assign({}, "function" == typeof o2 ? o2() : o2), i2 || {});
          }, [e3, n2, r2]), t2.useMemo(() => {
            const e4 = null == r2 ? void 0 : r2.locale;
            return (null == r2 ? void 0 : r2.exist) && !e4 ? an.locale : e4;
          }, [r2])];
        };
        function wa(e3, t3) {
          var n2 = Object.assign({}, e3);
          return Array.isArray(t3) && t3.forEach(function(e4) {
            delete n2[e4];
          }), n2;
        }
        const xa = function(e3) {
          if (!e3)
            return false;
          if (e3 instanceof Element) {
            if (e3.offsetParent)
              return true;
            if (e3.getBBox) {
              var t3 = e3.getBBox(), n2 = t3.width, r2 = t3.height;
              if (n2 || r2)
                return true;
            }
            if (e3.getBoundingClientRect) {
              var o2 = e3.getBoundingClientRect(), i2 = o2.width, a2 = o2.height;
              if (i2 || a2)
                return true;
            }
          }
          return false;
        };
        function Sa(e3) {
          return e3 && o().isValidElement(e3) && e3.type === o().Fragment;
        }
        function Aa(e3, t3) {
          return ((e4, t4, n2) => o().isValidElement(e4) ? o().cloneElement(e4, "function" == typeof n2 ? n2(e4.props || {}) : n2) : t4)(e3, e3, t3);
        }
        const Ea = ie(function e3() {
          re(this, e3);
        });
        var ka = "CALC_UNIT", Oa = new RegExp(ka, "g");
        function Pa(e3) {
          return "number" == typeof e3 ? "".concat(e3).concat(ka) : e3;
        }
        var Ia = function(e3) {
          zr(n2, e3);
          var t3 = Vr(n2);
          function n2(e4, r2) {
            var o2;
            re(this, n2), I(qr(o2 = t3.call(this)), "result", ""), I(qr(o2), "unitlessCssVar", void 0), I(qr(o2), "lowPriority", void 0);
            var i2 = O(e4);
            return o2.unitlessCssVar = r2, e4 instanceof n2 ? o2.result = "(".concat(e4.result, ")") : "number" === i2 ? o2.result = Pa(e4) : "string" === i2 && (o2.result = e4), o2;
          }
          return ie(n2, [{ key: "add", value: function(e4) {
            return e4 instanceof n2 ? this.result = "".concat(this.result, " + ").concat(e4.getResult()) : "number" != typeof e4 && "string" != typeof e4 || (this.result = "".concat(this.result, " + ").concat(Pa(e4))), this.lowPriority = true, this;
          } }, { key: "sub", value: function(e4) {
            return e4 instanceof n2 ? this.result = "".concat(this.result, " - ").concat(e4.getResult()) : "number" != typeof e4 && "string" != typeof e4 || (this.result = "".concat(this.result, " - ").concat(Pa(e4))), this.lowPriority = true, this;
          } }, { key: "mul", value: function(e4) {
            return this.lowPriority && (this.result = "(".concat(this.result, ")")), e4 instanceof n2 ? this.result = "".concat(this.result, " * ").concat(e4.getResult(true)) : "number" != typeof e4 && "string" != typeof e4 || (this.result = "".concat(this.result, " * ").concat(e4)), this.lowPriority = false, this;
          } }, { key: "div", value: function(e4) {
            return this.lowPriority && (this.result = "(".concat(this.result, ")")), e4 instanceof n2 ? this.result = "".concat(this.result, " / ").concat(e4.getResult(true)) : "number" != typeof e4 && "string" != typeof e4 || (this.result = "".concat(this.result, " / ").concat(e4)), this.lowPriority = false, this;
          } }, { key: "getResult", value: function(e4) {
            return this.lowPriority || e4 ? "(".concat(this.result, ")") : this.result;
          } }, { key: "equal", value: function(e4) {
            var t4 = this, n3 = (e4 || {}).unit, r2 = true;
            return "boolean" == typeof n3 ? r2 = n3 : Array.from(this.unitlessCssVar).some(function(e5) {
              return t4.result.includes(e5);
            }) && (r2 = false), this.result = this.result.replace(Oa, r2 ? "px" : ""), void 0 !== this.lowPriority ? "calc(".concat(this.result, ")") : this.result;
          } }]), n2;
        }(Ea);
        const ja = function(e3) {
          zr(n2, e3);
          var t3 = Vr(n2);
          function n2(e4) {
            var r2;
            return re(this, n2), I(qr(r2 = t3.call(this)), "result", 0), e4 instanceof n2 ? r2.result = e4.result : "number" == typeof e4 && (r2.result = e4), r2;
          }
          return ie(n2, [{ key: "add", value: function(e4) {
            return e4 instanceof n2 ? this.result += e4.result : "number" == typeof e4 && (this.result += e4), this;
          } }, { key: "sub", value: function(e4) {
            return e4 instanceof n2 ? this.result -= e4.result : "number" == typeof e4 && (this.result -= e4), this;
          } }, { key: "mul", value: function(e4) {
            return e4 instanceof n2 ? this.result *= e4.result : "number" == typeof e4 && (this.result *= e4), this;
          } }, { key: "div", value: function(e4) {
            return e4 instanceof n2 ? this.result /= e4.result : "number" == typeof e4 && (this.result /= e4), this;
          } }, { key: "equal", value: function() {
            return this.result;
          } }]), n2;
        }(Ea), $a = function(e3, t3) {
          return "".concat([t3, e3.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
        }, Na = function(e3, t3, n2, r2) {
          var o2 = R({}, t3[e3]);
          null != r2 && r2.deprecatedTokens && r2.deprecatedTokens.forEach(function(e4) {
            var t4, n3 = N(e4, 2), r3 = n3[0], i3 = n3[1];
            (null != o2 && o2[r3] || null != o2 && o2[i3]) && (null !== (t4 = o2[i3]) && void 0 !== t4 || (o2[i3] = null == o2 ? void 0 : o2[r3]));
          });
          var i2 = R(R({}, n2), o2);
          return Object.keys(i2).forEach(function(e4) {
            i2[e4] === t3[e4] && delete i2[e4];
          }), i2;
        };
        var Ma = "undefined" != typeof CSSINJS_STATISTIC, Ra = true;
        function Ba() {
          for (var e3 = arguments.length, t3 = new Array(e3), n2 = 0; n2 < e3; n2++)
            t3[n2] = arguments[n2];
          if (!Ma)
            return Object.assign.apply(Object, [{}].concat(t3));
          Ra = false;
          var r2 = {};
          return t3.forEach(function(e4) {
            "object" === O(e4) && Object.keys(e4).forEach(function(t4) {
              Object.defineProperty(r2, t4, { configurable: true, enumerable: true, get: function() {
                return e4[t4];
              } });
            });
          }), Ra = true, r2;
        }
        var Ta = {};
        function Fa() {
        }
        const La = function(e3, t3, n2) {
          var r2;
          return "function" == typeof n2 ? n2(Ba(t3, null !== (r2 = t3[e3]) && void 0 !== r2 ? r2 : {})) : null != n2 ? n2 : {};
        };
        var za = function() {
          function e3() {
            re(this, e3), I(this, "map", /* @__PURE__ */ new Map()), I(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), I(this, "nextID", 0), I(this, "lastAccessBeat", /* @__PURE__ */ new Map()), I(this, "accessBeat", 0);
          }
          return ie(e3, [{ key: "set", value: function(e4, t3) {
            this.clear();
            var n2 = this.getCompositeKey(e4);
            this.map.set(n2, t3), this.lastAccessBeat.set(n2, Date.now());
          } }, { key: "get", value: function(e4) {
            var t3 = this.getCompositeKey(e4), n2 = this.map.get(t3);
            return this.lastAccessBeat.set(t3, Date.now()), this.accessBeat += 1, n2;
          } }, { key: "getCompositeKey", value: function(e4) {
            var t3 = this;
            return e4.map(function(e5) {
              return e5 && "object" === O(e5) ? "obj_".concat(t3.getObjectID(e5)) : "".concat(O(e5), "_").concat(e5);
            }).join("|");
          } }, { key: "getObjectID", value: function(e4) {
            if (this.objectIDMap.has(e4))
              return this.objectIDMap.get(e4);
            var t3 = this.nextID;
            return this.objectIDMap.set(e4, t3), this.nextID += 1, t3;
          } }, { key: "clear", value: function() {
            var e4 = this;
            if (this.accessBeat > 1e4) {
              var t3 = Date.now();
              this.lastAccessBeat.forEach(function(n2, r2) {
                t3 - n2 > 6e5 && (e4.map.delete(r2), e4.lastAccessBeat.delete(r2));
              }), this.accessBeat = 0;
            }
          } }]), e3;
        }(), Ha = new za();
        const Da = function() {
          return {};
        }, { genStyleHooks: qa, genComponentStyleHook: Va, genSubStyleComponent: Wa } = function(e3) {
          var n2 = e3.useCSP, r2 = void 0 === n2 ? Da : n2, i2 = e3.useToken, a2 = e3.usePrefix, s2 = e3.getResetStyles, l2 = e3.getCommonStyle, c2 = e3.getCompUnitless;
          function u2(t3, n3, c3) {
            var u3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, d2 = Array.isArray(t3) ? t3 : [t3, t3], f2 = N(d2, 1)[0], p2 = d2.join("-"), m2 = e3.layer || { name: "antd" };
            return function(e4) {
              var t4, d3, g2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e4, h2 = i2(), v2 = h2.theme, b2 = h2.realToken, y2 = h2.hashId, C2 = h2.token, w2 = h2.cssVar, x2 = a2(), S2 = x2.rootPrefixCls, A2 = x2.iconPrefixCls, E2 = r2(), k2 = w2 ? "css" : "js", P2 = (t4 = function() {
                var e5 = /* @__PURE__ */ new Set();
                return w2 && Object.keys(u3.unitless || {}).forEach(function(t5) {
                  e5.add(Oe(t5, w2.prefix)), e5.add(Oe(t5, $a(f2, w2.prefix)));
                }), /* @__PURE__ */ function(e6, t5) {
                  var n4 = "css" === e6 ? Ia : ja;
                  return function(e7) {
                    return new n4(e7, t5);
                  };
                }(k2, e5);
              }, d3 = [k2, f2, null == w2 ? void 0 : w2.prefix], o().useMemo(function() {
                var e5 = Ha.get(d3);
                if (e5)
                  return e5;
                var n4 = t4();
                return Ha.set(d3, n4), n4;
              }, d3)), I2 = /* @__PURE__ */ function(e5) {
                return "js" === e5 ? { max: Math.max, min: Math.min } : { max: function() {
                  for (var e6 = arguments.length, t5 = new Array(e6), n4 = 0; n4 < e6; n4++)
                    t5[n4] = arguments[n4];
                  return "max(".concat(t5.map(function(e7) {
                    return Ee(e7);
                  }).join(","), ")");
                }, min: function() {
                  for (var e6 = arguments.length, t5 = new Array(e6), n4 = 0; n4 < e6; n4++)
                    t5[n4] = arguments[n4];
                  return "min(".concat(t5.map(function(e7) {
                    return Ee(e7);
                  }).join(","), ")");
                } };
              }(k2), j2 = I2.max, $2 = I2.min, N2 = { theme: v2, token: C2, hashId: y2, nonce: function() {
                return E2.nonce;
              }, clientOnly: u3.clientOnly, layer: m2, order: u3.order || -999 };
              return "function" == typeof s2 && Lt(R(R({}, N2), {}, { clientOnly: false, path: ["Shared", S2] }), function() {
                return s2(C2, { prefix: { rootPrefixCls: S2, iconPrefixCls: A2 }, csp: E2 });
              }), [Lt(R(R({}, N2), {}, { path: [p2, e4, A2] }), function() {
                if (false === u3.injectStyle)
                  return [];
                var t5 = function(e5) {
                  var t6, n4 = e5, r4 = Fa;
                  return Ma && "undefined" != typeof Proxy && (t6 = /* @__PURE__ */ new Set(), n4 = new Proxy(e5, { get: function(e6, n5) {
                    var r5;
                    return Ra && (null === (r5 = t6) || void 0 === r5 || r5.add(n5)), e6[n5];
                  } }), r4 = function(e6, n5) {
                    var r5;
                    Ta[e6] = { global: Array.from(t6), component: R(R({}, null === (r5 = Ta[e6]) || void 0 === r5 ? void 0 : r5.component), n5) };
                  }), { token: n4, keys: t6, flush: r4 };
                }(C2), r3 = t5.token, o2 = t5.flush, i3 = La(f2, b2, c3), a3 = ".".concat(e4), s3 = Na(f2, b2, i3, { deprecatedTokens: u3.deprecatedTokens });
                w2 && i3 && "object" === O(i3) && Object.keys(i3).forEach(function(e5) {
                  i3[e5] = "var(".concat(Oe(e5, $a(f2, w2.prefix)), ")");
                });
                var d4 = Ba(r3, { componentCls: a3, prefixCls: e4, iconCls: ".".concat(A2), antCls: ".".concat(S2), calc: P2, max: j2, min: $2 }, w2 ? i3 : s3), p3 = n3(d4, { hashId: y2, prefixCls: e4, rootPrefixCls: S2, iconPrefixCls: A2 });
                o2(f2, s3);
                var m3 = "function" == typeof l2 ? l2(d4, e4, g2, u3.resetFont) : null;
                return [false === u3.resetStyle ? null : m3, p3];
              }), y2];
            };
          }
          return { genStyleHooks: function(e4, n3, r3, a3) {
            var s3 = Array.isArray(e4) ? e4[0] : e4;
            function l3(e5) {
              return "".concat(String(s3)).concat(e5.slice(0, 1).toUpperCase()).concat(e5.slice(1));
            }
            var d2 = (null == a3 ? void 0 : a3.unitless) || {}, f2 = R(R({}, "function" == typeof c2 ? c2(e4) : {}), {}, I({}, l3("zIndexPopup"), true));
            Object.keys(d2).forEach(function(e5) {
              f2[l3(e5)] = d2[e5];
            });
            var p2 = R(R({}, a3), {}, { unitless: f2, prefixToken: l3 }), m2 = u2(e4, n3, r3, p2), g2 = function(e5, n4, r4) {
              var a4 = r4.unitless, s4 = r4.injectStyle, l4 = void 0 === s4 || s4, c3 = r4.prefixToken, u3 = r4.ignore, d3 = function(o2) {
                var s5 = o2.rootCls, l5 = o2.cssVar, d4 = void 0 === l5 ? {} : l5, f3 = i2().realToken;
                return function(e6, n5) {
                  var r5 = e6.key, o3 = e6.prefix, i3 = e6.unitless, a5 = e6.ignore, s6 = e6.token, l6 = e6.scope, c4 = void 0 === l6 ? "" : l6, u4 = (0, t2.useContext)(pe), d5 = u4.cache.instanceId, f4 = u4.container, p3 = s6._tokenKey, m3 = [].concat(x(e6.path), [r5, c4, p3]), g3 = Fe(zt, m3, function() {
                    var e7 = n5(), t3 = N(Ie(e7, r5, { prefix: o3, unitless: i3, ignore: a5, scope: c4 }), 2), s7 = t3[0], l7 = t3[1];
                    return [s7, l7, Bt(m3, l7), r5];
                  }, function(e7) {
                    var t3 = N(e7, 3)[2];
                    Ae && G(t3, { mark: ue });
                  }, function(e7) {
                    var t3 = N(e7, 3), n6 = t3[1], o4 = t3[2];
                    if (n6) {
                      var i4 = X(n6, o4, { mark: ue, prepend: "queue", attachTo: f4, priority: -999 });
                      i4[de] = d5, i4.setAttribute(ce, r5);
                    }
                  });
                }({ path: [e5], prefix: d4.prefix, key: d4.key, unitless: a4, ignore: u3, token: f3, scope: s5 }, function() {
                  var t3 = La(e5, f3, n4), o3 = Na(e5, f3, t3, { deprecatedTokens: null == r4 ? void 0 : r4.deprecatedTokens });
                  return Object.keys(t3).forEach(function(e6) {
                    o3[c3(e6)] = o3[e6], delete o3[e6];
                  }), o3;
                }), null;
              };
              return function(t3) {
                var n5 = i2().cssVar;
                return [function(r5) {
                  return l4 && n5 ? o().createElement(o().Fragment, null, o().createElement(d3, { rootCls: t3, cssVar: n5, component: e5 }), r5) : r5;
                }, null == n5 ? void 0 : n5.key];
              };
            }(s3, r3, p2);
            return function(e5) {
              var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e5, n4 = N(m2(e5, t3), 2)[1], r4 = N(g2(t3), 2);
              return [r4[0], n4, r4[1]];
            };
          }, genSubStyleComponent: function(e4, t3, n3) {
            var r3 = u2(e4, t3, n3, R({ resetStyle: false, order: -998 }, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}));
            return function(e5) {
              var t4 = e5.prefixCls, n4 = e5.rootCls;
              return r3(t4, void 0 === n4 ? t4 : n4), null;
            };
          }, genComponentStyleHook: u2 };
        }({ usePrefix: () => {
          const { getPrefixCls: e3, iconPrefixCls: n2 } = (0, t2.useContext)(E);
          return { rootPrefixCls: e3(), iconPrefixCls: n2 };
        }, useToken: () => {
          const [e3, t3, n2, r2, o2] = ei();
          return { theme: e3, realToken: t3, hashId: n2, token: r2, cssVar: o2 };
        }, useCSP: () => {
          const { csp: e3 } = (0, t2.useContext)(E);
          return null != e3 ? e3 : {};
        }, getResetStyles: (e3, t3) => {
          var n2;
          return [{ "&": ii(e3) }, li(null !== (n2 = null == t3 ? void 0 : t3.prefix.iconPrefixCls) && void 0 !== n2 ? n2 : A)];
        }, getCommonStyle: (e3, t3, n2, r2) => {
          const o2 = `[class^="${t3}"], [class*=" ${t3}"]`, i2 = n2 ? `.${n2}` : o2, a2 = { boxSizing: "border-box", "&::before, &::after": { boxSizing: "border-box" } };
          let s2 = {};
          return false !== r2 && (s2 = { fontFamily: e3.fontFamily, fontSize: e3.fontSize }), { [i2]: Object.assign(Object.assign(Object.assign({}, s2), a2), { [o2]: a2 }) };
        }, getCompUnitless: () => Qo }), Ka = (e3) => {
          const { componentCls: t3, colorPrimary: n2 } = e3;
          return { [t3]: { position: "absolute", background: "transparent", pointerEvents: "none", boxSizing: "border-box", color: `var(--wave-color, ${n2})`, boxShadow: "0 0 0 0 currentcolor", opacity: 0.2, "&.wave-motion-appear": { transition: [`box-shadow 0.4s ${e3.motionEaseOutCirc}`, `opacity 2s ${e3.motionEaseOutCirc}`].join(","), "&-active": { boxShadow: "0 0 0 6px currentcolor", opacity: 0 }, "&.wave-quick": { transition: [`box-shadow ${e3.motionDurationSlow} ${e3.motionEaseInOut}`, `opacity ${e3.motionDurationSlow} ${e3.motionEaseInOut}`].join(",") } } } };
        }, Ga = Va("Wave", (e3) => [Ka(e3)]), Xa = `${S}-wave-target`;
        function Ua(e3) {
          return e3 && "#fff" !== e3 && "#ffffff" !== e3 && "rgb(255, 255, 255)" !== e3 && "rgba(255, 255, 255, 1)" !== e3 && !/rgba\((?:\d*, ){3}0\)/.test(e3) && "transparent" !== e3;
        }
        function _a(e3) {
          return Number.isNaN(e3) ? 0 : e3;
        }
        const Qa = (e3) => {
          const { className: n2, target: r2, component: o2, registerUnmount: i2 } = e3, a2 = t2.useRef(null), s2 = t2.useRef(null);
          t2.useEffect(() => {
            s2.current = i2();
          }, []);
          const [l2, c2] = t2.useState(null), [u2, d2] = t2.useState([]), [f2, p2] = t2.useState(0), [m2, g2] = t2.useState(0), [h2, v2] = t2.useState(0), [b2, y2] = t2.useState(0), [C2, w2] = t2.useState(false), x2 = { left: f2, top: m2, width: h2, height: b2, borderRadius: u2.map((e4) => `${e4}px`).join(" ") };
          function S2() {
            const e4 = getComputedStyle(r2);
            c2(function(e5) {
              const { borderTopColor: t4, borderColor: n4, backgroundColor: r3 } = getComputedStyle(e5);
              return Ua(t4) ? t4 : Ua(n4) ? n4 : Ua(r3) ? r3 : null;
            }(r2));
            const t3 = "static" === e4.position, { borderLeftWidth: n3, borderTopWidth: o3 } = e4;
            p2(t3 ? r2.offsetLeft : _a(-parseFloat(n3))), g2(t3 ? r2.offsetTop : _a(-parseFloat(o3))), v2(r2.offsetWidth), y2(r2.offsetHeight);
            const { borderTopLeftRadius: i3, borderTopRightRadius: a3, borderBottomLeftRadius: s3, borderBottomRightRadius: l3 } = e4;
            d2([i3, a3, l3, s3].map((e5) => _a(parseFloat(e5))));
          }
          if (l2 && (x2["--wave-color"] = l2), t2.useEffect(() => {
            if (r2) {
              const e4 = Po(() => {
                S2(), w2(true);
              });
              let t3;
              return "undefined" != typeof ResizeObserver && (t3 = new ResizeObserver(S2), t3.observe(r2)), () => {
                Po.cancel(e4), null == t3 || t3.disconnect();
              };
            }
          }, []), !C2)
            return null;
          const A2 = ("Checkbox" === o2 || "Radio" === o2) && (null == r2 ? void 0 : r2.classList.contains(Xa));
          return t2.createElement(Ko, { visible: true, motionAppear: true, motionName: "wave-motion", motionDeadline: 5e3, onAppearEnd: (e4, t3) => {
            var n3, r3;
            if (t3.deadline || "opacity" === t3.propertyName) {
              const e5 = null === (n3 = a2.current) || void 0 === n3 ? void 0 : n3.parentElement;
              null === (r3 = s2.current) || void 0 === r3 || r3.call(s2).then(() => {
                null == e5 || e5.remove();
              });
            }
            return false;
          } }, (e4, r3) => {
            let { className: o3 } = e4;
            return t2.createElement("div", { ref: Ir(a2, r3), className: br()(n2, o3, { "wave-quick": A2 }), style: x2 });
          });
        }, Ya = (e3, n2) => {
          var r2;
          const { component: o2 } = n2;
          if ("Checkbox" === o2 && !(null === (r2 = e3.querySelector("input")) || void 0 === r2 ? void 0 : r2.checked))
            return;
          const i2 = document.createElement("div");
          i2.style.position = "absolute", i2.style.left = "0px", i2.style.top = "0px", null == e3 || e3.insertBefore(i2, null == e3 ? void 0 : e3.firstChild);
          const a2 = Bi();
          let s2 = null;
          s2 = a2(t2.createElement(Qa, Object.assign({}, n2, { target: e3, registerUnmount: function() {
            return s2;
          } })), i2);
        }, Za = (e3, n2, r2) => {
          const { wave: o2 } = t2.useContext(E), [, i2, a2] = ei(), s2 = Kr((t3) => {
            const s3 = e3.current;
            if ((null == o2 ? void 0 : o2.disabled) || !s3)
              return;
            const l3 = s3.querySelector(`.${Xa}`) || s3, { showEffect: c2 } = o2 || {};
            (c2 || Ya)(l3, { className: n2, token: i2, component: r2, event: t3, hashId: a2 });
          }), l2 = t2.useRef(null);
          return (e4) => {
            Po.cancel(l2.current), l2.current = Po(() => {
              s2(e4);
            });
          };
        }, Ja = (e3) => {
          const { children: n2, disabled: r2, component: i2 } = e3, { getPrefixCls: a2 } = (0, t2.useContext)(E), s2 = (0, t2.useRef)(null), l2 = a2("wave"), [, c2] = Ga(l2), u2 = Za(s2, br()(l2, c2), i2);
          return o().useEffect(() => {
            const e4 = s2.current;
            if (!e4 || 1 !== e4.nodeType || r2)
              return;
            const t3 = (t4) => {
              !xa(t4.target) || !e4.getAttribute || e4.getAttribute("disabled") || e4.disabled || e4.className.includes("disabled") || e4.className.includes("-leave") || u2(t4);
            };
            return e4.addEventListener("click", t3, true), () => {
              e4.removeEventListener("click", t3, true);
            };
          }, [r2]), o().isValidElement(n2) ? Aa(n2, { ref: $r(n2) ? Ir(Mr(n2), s2) : s2 }) : null != n2 ? n2 : null;
        }, es = (e3) => {
          const t3 = o().useContext(pr);
          return o().useMemo(() => e3 ? "string" == typeof e3 ? null != e3 ? e3 : t3 : e3 instanceof Function ? e3(t3) : t3 : t3, [e3, t3]);
        };
        function ts(e3) {
          var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = [];
          return o().Children.forEach(e3, function(e4) {
            (null != e4 || t3.keepEmpty) && (Array.isArray(e4) ? n2 = n2.concat(ts(e4)) : Or(e4) && e4.props ? n2 = n2.concat(ts(e4.props.children, t3)) : n2.push(e4));
          }), n2;
        }
        const ns = (e3) => {
          const { componentCls: t3 } = e3;
          return { [t3]: { "&-block": { display: "flex", width: "100%" }, "&-vertical": { flexDirection: "column" } } };
        }, rs = (e3) => {
          const { componentCls: t3, antCls: n2 } = e3;
          return { [t3]: { display: "inline-flex", "&-rtl": { direction: "rtl" }, "&-vertical": { flexDirection: "column" }, "&-align": { flexDirection: "column", "&-center": { alignItems: "center" }, "&-start": { alignItems: "flex-start" }, "&-end": { alignItems: "flex-end" }, "&-baseline": { alignItems: "baseline" } }, [`${t3}-item:empty`]: { display: "none" }, [`${t3}-item > ${n2}-badge-not-a-wrapper:only-child`]: { display: "block" } } };
        }, os = (e3) => {
          const { componentCls: t3 } = e3;
          return { [t3]: { "&-gap-row-small": { rowGap: e3.spaceGapSmallSize }, "&-gap-row-middle": { rowGap: e3.spaceGapMiddleSize }, "&-gap-row-large": { rowGap: e3.spaceGapLargeSize }, "&-gap-col-small": { columnGap: e3.spaceGapSmallSize }, "&-gap-col-middle": { columnGap: e3.spaceGapMiddleSize }, "&-gap-col-large": { columnGap: e3.spaceGapLargeSize } } };
        }, is = qa("Space", (e3) => {
          const t3 = Ba(e3, { spaceGapSmallSize: e3.paddingXS, spaceGapMiddleSize: e3.padding, spaceGapLargeSize: e3.paddingLG });
          return [rs(t3), os(t3), ns(t3)];
        }, () => ({}), { resetStyle: false });
        var as = function(e3, t3) {
          var n2 = {};
          for (var r2 in e3)
            Object.prototype.hasOwnProperty.call(e3, r2) && t3.indexOf(r2) < 0 && (n2[r2] = e3[r2]);
          if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
            var o2 = 0;
            for (r2 = Object.getOwnPropertySymbols(e3); o2 < r2.length; o2++)
              t3.indexOf(r2[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, r2[o2]) && (n2[r2[o2]] = e3[r2[o2]]);
          }
          return n2;
        };
        const ss = t2.createContext(null), ls = (e3, n2) => {
          const r2 = t2.useContext(ss), o2 = t2.useMemo(() => {
            if (!r2)
              return "";
            const { compactDirection: t3, isFirstItem: o3, isLastItem: i2 } = r2, a2 = "vertical" === t3 ? "-vertical-" : "-";
            return br()(`${e3}-compact${a2}item`, { [`${e3}-compact${a2}first-item`]: o3, [`${e3}-compact${a2}last-item`]: i2, [`${e3}-compact${a2}item-rtl`]: "rtl" === n2 });
          }, [e3, n2, r2]);
          return { compactSize: null == r2 ? void 0 : r2.compactSize, compactDirection: null == r2 ? void 0 : r2.compactDirection, compactItemClassnames: o2 };
        }, cs = (e3) => {
          let { children: n2 } = e3;
          return t2.createElement(ss.Provider, { value: null }, n2);
        }, us = (e3) => {
          var { children: n2 } = e3, r2 = as(e3, ["children"]);
          return t2.createElement(ss.Provider, { value: r2 }, n2);
        };
        const ds = t2.createContext(void 0), fs = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], ps = /^[\u4E00-\u9FA5]{2}$/, ms = ps.test.bind(ps);
        function gs(e3) {
          return "danger" === e3 ? { danger: true } : { type: e3 };
        }
        function hs(e3) {
          return "string" == typeof e3;
        }
        function vs(e3) {
          return "text" === e3 || "link" === e3;
        }
        ["default", "primary", "danger"].concat(x(fs));
        const bs = (0, t2.forwardRef)((e3, t3) => {
          const { className: n2, style: r2, children: i2, prefixCls: a2 } = e3, s2 = br()(`${a2}-icon`, n2);
          return o().createElement("span", { ref: t3, className: s2, style: r2 }, i2);
        }), ys = bs, Cs = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
        var ws = function(e3, n2) {
          return t2.createElement(Yi, qe({}, e3, { ref: n2, icon: Cs }));
        };
        const xs = t2.forwardRef(ws), Ss = (0, t2.forwardRef)((e3, t3) => {
          const { prefixCls: n2, className: r2, style: i2, iconClassName: a2 } = e3, s2 = br()(`${n2}-loading-icon`, r2);
          return o().createElement(ys, { prefixCls: n2, className: s2, style: i2, ref: t3 }, o().createElement(xs, { className: a2 }));
        }), As = () => ({ width: 0, opacity: 0, transform: "scale(0)" }), Es = (e3) => ({ width: e3.scrollWidth, opacity: 1, transform: "scale(1)" }), ks = (e3) => {
          const { prefixCls: t3, loading: n2, existIcon: r2, className: i2, style: a2, mount: s2 } = e3, l2 = !!n2;
          return r2 ? o().createElement(Ss, { prefixCls: t3, className: i2, style: a2 }) : o().createElement(Ko, { visible: l2, motionName: `${t3}-loading-icon-motion`, motionAppear: !s2, motionEnter: !s2, motionLeave: !s2, removeOnLeave: true, onAppearStart: As, onAppearActive: Es, onEnterStart: As, onEnterActive: Es, onLeaveStart: Es, onLeaveActive: As }, (e4, n3) => {
            let { className: r3, style: s3 } = e4;
            const l3 = Object.assign(Object.assign({}, a2), s3);
            return o().createElement(Ss, { prefixCls: t3, className: br()(i2, r3), style: l3, ref: n3 });
          });
        }, Os = (e3, t3) => ({ [`> span, > ${e3}`]: { "&:not(:last-child)": { [`&, & > ${e3}`]: { "&:not(:disabled)": { borderInlineEndColor: t3 } } }, "&:not(:first-child)": { [`&, & > ${e3}`]: { "&:not(:disabled)": { borderInlineStartColor: t3 } } } } }), Ps = (e3) => {
          const { componentCls: t3, fontSize: n2, lineWidth: r2, groupBorderColor: o2, colorErrorHover: i2 } = e3;
          return { [`${t3}-group`]: [{ position: "relative", display: "inline-flex", [`> span, > ${t3}`]: { "&:not(:last-child)": { [`&, & > ${t3}`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 } }, "&:not(:first-child)": { marginInlineStart: e3.calc(r2).mul(-1).equal(), [`&, & > ${t3}`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 } } }, [t3]: { position: "relative", zIndex: 1, "&:hover, &:focus, &:active": { zIndex: 2 }, "&[disabled]": { zIndex: 0 } }, [`${t3}-icon-only`]: { fontSize: n2 } }, Os(`${t3}-primary`, o2), Os(`${t3}-danger`, i2)] };
        };
        var Is, js = ["b"], $s = ["v"], Ns = function(e3) {
          return Math.round(Number(e3 || 0));
        }, Ms = function(e3) {
          zr(n2, e3);
          var t3 = Vr(n2);
          function n2(e4) {
            return re(this, n2), t3.call(this, function(e5) {
              if (e5 instanceof vn)
                return e5;
              if (e5 && "object" === O(e5) && "h" in e5 && "b" in e5) {
                var t4 = e5, n3 = t4.b;
                return R(R({}, Rr(t4, js)), {}, { v: n3 });
              }
              return "string" == typeof e5 && /hsb/.test(e5) ? e5.replace(/hsb/, "hsv") : e5;
            }(e4));
          }
          return ie(n2, [{ key: "toHsbString", value: function() {
            var e4 = this.toHsb(), t4 = Ns(100 * e4.s), n3 = Ns(100 * e4.b), r2 = Ns(e4.h), o2 = e4.a, i2 = "hsb(".concat(r2, ", ").concat(t4, "%, ").concat(n3, "%)"), a2 = "hsba(".concat(r2, ", ").concat(t4, "%, ").concat(n3, "%, ").concat(o2.toFixed(0 === o2 ? 0 : 2), ")");
            return 1 === o2 ? i2 : a2;
          } }, { key: "toHsb", value: function() {
            var e4 = this.toHsv(), t4 = e4.v;
            return R(R({}, Rr(e4, $s)), {}, { b: t4, a: this.a });
          } }]), n2;
        }(vn);
        (Is = "#1677ff") instanceof Ms || new Ms(Is);
        let Rs = function() {
          return ie(function e3(t3) {
            var n2;
            if (re(this, e3), this.cleared = false, t3 instanceof e3)
              return this.metaColor = t3.metaColor.clone(), this.colors = null === (n2 = t3.colors) || void 0 === n2 ? void 0 : n2.map((t4) => ({ color: new e3(t4.color), percent: t4.percent })), void (this.cleared = t3.cleared);
            const r2 = Array.isArray(t3);
            r2 && t3.length ? (this.colors = t3.map((t4) => {
              let { color: n3, percent: r3 } = t4;
              return { color: new e3(n3), percent: r3 };
            }), this.metaColor = new Ms(this.colors[0].color.metaColor)) : this.metaColor = new Ms(r2 ? "" : t3), (!t3 || r2 && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = true);
          }, [{ key: "toHsb", value: function() {
            return this.metaColor.toHsb();
          } }, { key: "toHsbString", value: function() {
            return this.metaColor.toHsbString();
          } }, { key: "toHex", value: function() {
            return e3 = this.toHexString(), t3 = this.metaColor.a < 1, e3 ? ((e4, t4) => (null == e4 ? void 0 : e4.replace(/[^\w/]/g, "").slice(0, t4 ? 8 : 6)) || "")(e3, t3) : "";
            var e3, t3;
          } }, { key: "toHexString", value: function() {
            return this.metaColor.toHexString();
          } }, { key: "toRgb", value: function() {
            return this.metaColor.toRgb();
          } }, { key: "toRgbString", value: function() {
            return this.metaColor.toRgbString();
          } }, { key: "isGradient", value: function() {
            return !!this.colors && !this.cleared;
          } }, { key: "getColors", value: function() {
            return this.colors || [{ color: this, percent: 0 }];
          } }, { key: "toCssString", value: function() {
            const { colors: e3 } = this;
            return e3 ? `linear-gradient(90deg, ${e3.map((e4) => `${e4.color.toRgbString()} ${e4.percent}%`).join(", ")})` : this.metaColor.toRgbString();
          } }, { key: "equals", value: function(e3) {
            return !(!e3 || this.isGradient() !== e3.isGradient()) && (this.isGradient() ? this.colors.length === e3.colors.length && this.colors.every((t3, n2) => {
              const r2 = e3.colors[n2];
              return t3.percent === r2.percent && t3.color.equals(r2.color);
            }) : this.toHexString() === e3.toHexString());
          } }]);
        }();
        const Bs = (e3) => {
          const { paddingInline: t3, onlyIconSize: n2 } = e3;
          return Ba(e3, { buttonPaddingHorizontal: t3, buttonPaddingVertical: 0, buttonIconOnlyFontSize: n2 });
        }, Ts = (e3) => {
          var t3, n2, r2, o2, i2, a2;
          const s2 = null !== (t3 = e3.contentFontSize) && void 0 !== t3 ? t3 : e3.fontSize, l2 = null !== (n2 = e3.contentFontSizeSM) && void 0 !== n2 ? n2 : e3.fontSize, c2 = null !== (r2 = e3.contentFontSizeLG) && void 0 !== r2 ? r2 : e3.fontSizeLG, u2 = null !== (o2 = e3.contentLineHeight) && void 0 !== o2 ? o2 : Jn(s2), d2 = null !== (i2 = e3.contentLineHeightSM) && void 0 !== i2 ? i2 : Jn(l2), f2 = null !== (a2 = e3.contentLineHeightLG) && void 0 !== a2 ? a2 : Jn(c2), p2 = ((e4, t4) => {
            const { r: n3, g: r3, b: o3, a: i3 } = e4.toRgb(), a3 = new Ms(e4.toRgbString()).onBackground(t4).toHsv();
            return i3 <= 0.5 ? a3.v > 0.5 : 0.299 * n3 + 0.587 * r3 + 0.114 * o3 > 192;
          })(new Rs(e3.colorBgSolid), "#fff") ? "#000" : "#fff";
          return { fontWeight: 400, defaultShadow: `0 ${e3.controlOutlineWidth}px 0 ${e3.controlTmpOutline}`, primaryShadow: `0 ${e3.controlOutlineWidth}px 0 ${e3.controlOutline}`, dangerShadow: `0 ${e3.controlOutlineWidth}px 0 ${e3.colorErrorOutline}`, primaryColor: e3.colorTextLightSolid, dangerColor: e3.colorTextLightSolid, borderColorDisabled: e3.colorBorder, defaultGhostColor: e3.colorBgContainer, ghostBg: "transparent", defaultGhostBorderColor: e3.colorBgContainer, paddingInline: e3.paddingContentHorizontal - e3.lineWidth, paddingInlineLG: e3.paddingContentHorizontal - e3.lineWidth, paddingInlineSM: 8 - e3.lineWidth, onlyIconSize: e3.fontSizeLG, onlyIconSizeSM: e3.fontSizeLG - 2, onlyIconSizeLG: e3.fontSizeLG + 2, groupBorderColor: e3.colorPrimaryHover, linkHoverBg: "transparent", textTextColor: e3.colorText, textTextHoverColor: e3.colorText, textTextActiveColor: e3.colorText, textHoverBg: e3.colorFillTertiary, defaultColor: e3.colorText, defaultBg: e3.colorBgContainer, defaultBorderColor: e3.colorBorder, defaultBorderColorDisabled: e3.colorBorder, defaultHoverBg: e3.colorBgContainer, defaultHoverColor: e3.colorPrimaryHover, defaultHoverBorderColor: e3.colorPrimaryHover, defaultActiveBg: e3.colorBgContainer, defaultActiveColor: e3.colorPrimaryActive, defaultActiveBorderColor: e3.colorPrimaryActive, solidTextColor: p2, contentFontSize: s2, contentFontSizeSM: l2, contentFontSizeLG: c2, contentLineHeight: u2, contentLineHeightSM: d2, contentLineHeightLG: f2, paddingBlock: Math.max((e3.controlHeight - s2 * u2) / 2 - e3.lineWidth, 0), paddingBlockSM: Math.max((e3.controlHeightSM - l2 * d2) / 2 - e3.lineWidth, 0), paddingBlockLG: Math.max((e3.controlHeightLG - c2 * f2) / 2 - e3.lineWidth, 0) };
        }, Fs = (e3) => {
          const { componentCls: t3, iconCls: n2, fontWeight: r2, opacityLoading: o2, motionDurationSlow: i2, motionEaseInOut: a2, marginXS: s2, calc: l2 } = e3;
          return { [t3]: { outline: "none", position: "relative", display: "inline-flex", gap: e3.marginXS, alignItems: "center", justifyContent: "center", fontWeight: r2, whiteSpace: "nowrap", textAlign: "center", backgroundImage: "none", background: "transparent", border: `${Ee(e3.lineWidth)} ${e3.lineType} transparent`, cursor: "pointer", transition: `all ${e3.motionDurationMid} ${e3.motionEaseInOut}`, userSelect: "none", touchAction: "manipulation", color: e3.colorText, "&:disabled > *": { pointerEvents: "none" }, [`${t3}-icon > svg`]: { display: "inline-flex", alignItems: "center", color: "inherit", fontStyle: "normal", lineHeight: 0, textAlign: "center", textTransform: "none", verticalAlign: "-0.125em", textRendering: "optimizeLegibility", "-webkit-font-smoothing": "antialiased", "-moz-osx-font-smoothing": "grayscale", "> *": { lineHeight: 1 }, svg: { display: "inline-block" } }, "> a": { color: "currentColor" }, "&:not(:disabled)": si(e3), [`&${t3}-two-chinese-chars::first-letter`]: { letterSpacing: "0.34em" }, [`&${t3}-two-chinese-chars > *:not(${n2})`]: { marginInlineEnd: "-0.34em", letterSpacing: "0.34em" }, [`&${t3}-icon-only`]: { paddingInline: 0, [`&${t3}-compact-item`]: { flex: "none" }, [`&${t3}-round`]: { width: "auto" } }, [`&${t3}-loading`]: { opacity: o2, cursor: "default" }, [`${t3}-loading-icon`]: { transition: ["width", "opacity", "margin"].map((e4) => `${e4} ${i2} ${a2}`).join(",") }, [`&:not(${t3}-icon-end)`]: { [`${t3}-loading-icon-motion`]: { "&-appear-start, &-enter-start": { marginInlineEnd: l2(s2).mul(-1).equal() }, "&-appear-active, &-enter-active": { marginInlineEnd: 0 }, "&-leave-start": { marginInlineEnd: 0 }, "&-leave-active": { marginInlineEnd: l2(s2).mul(-1).equal() } } }, "&-icon-end": { flexDirection: "row-reverse", [`${t3}-loading-icon-motion`]: { "&-appear-start, &-enter-start": { marginInlineStart: l2(s2).mul(-1).equal() }, "&-appear-active, &-enter-active": { marginInlineStart: 0 }, "&-leave-start": { marginInlineStart: 0 }, "&-leave-active": { marginInlineStart: l2(s2).mul(-1).equal() } } } } };
        }, Ls = (e3, t3, n2) => ({ [`&:not(:disabled):not(${e3}-disabled)`]: { "&:hover": t3, "&:active": n2 } }), zs = (e3) => ({ minWidth: e3.controlHeight, paddingInlineStart: 0, paddingInlineEnd: 0, borderRadius: "50%" }), Hs = (e3) => ({ borderRadius: e3.controlHeight, paddingInlineStart: e3.calc(e3.controlHeight).div(2).equal(), paddingInlineEnd: e3.calc(e3.controlHeight).div(2).equal() }), Ds = (e3) => ({ cursor: "not-allowed", borderColor: e3.borderColorDisabled, color: e3.colorTextDisabled, background: e3.colorBgContainerDisabled, boxShadow: "none" }), qs = (e3, t3, n2, r2, o2, i2, a2, s2) => ({ [`&${e3}-background-ghost`]: Object.assign(Object.assign({ color: n2 || void 0, background: t3, borderColor: r2 || void 0, boxShadow: "none" }, Ls(e3, Object.assign({ background: t3 }, a2), Object.assign({ background: t3 }, s2))), { "&:disabled": { cursor: "not-allowed", color: o2 || void 0, borderColor: i2 || void 0 } }) }), Vs = (e3) => ({ [`&:disabled, &${e3.componentCls}-disabled`]: Object.assign({}, Ds(e3)) }), Ws = (e3) => ({ [`&:disabled, &${e3.componentCls}-disabled`]: { cursor: "not-allowed", color: e3.colorTextDisabled } }), Ks = (e3, t3, n2, r2) => {
          const o2 = r2 && ["link", "text"].includes(r2) ? Ws : Vs;
          return Object.assign(Object.assign({}, o2(e3)), Ls(e3.componentCls, t3, n2));
        }, Gs = (e3, t3, n2, r2, o2) => ({ [`&${e3.componentCls}-variant-solid`]: Object.assign({ color: t3, background: n2 }, Ks(e3, r2, o2)) }), Xs = (e3, t3, n2, r2, o2) => ({ [`&${e3.componentCls}-variant-outlined, &${e3.componentCls}-variant-dashed`]: Object.assign({ borderColor: t3, background: n2 }, Ks(e3, r2, o2)) }), Us = (e3) => ({ [`&${e3.componentCls}-variant-dashed`]: { borderStyle: "dashed" } }), _s = (e3, t3, n2, r2) => ({ [`&${e3.componentCls}-variant-filled`]: Object.assign({ boxShadow: "none", background: t3 }, Ks(e3, n2, r2)) }), Qs = (e3, t3, n2, r2, o2) => ({ [`&${e3.componentCls}-variant-${n2}`]: Object.assign({ color: t3, boxShadow: "none" }, Ks(e3, r2, o2, n2)) }), Ys = (e3) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ color: e3.defaultColor, boxShadow: e3.defaultShadow }, Gs(e3, e3.solidTextColor, e3.colorBgSolid, { color: e3.solidTextColor, background: e3.colorBgSolidHover }, { color: e3.solidTextColor, background: e3.colorBgSolidActive })), Us(e3)), _s(e3, e3.colorFillTertiary, { background: e3.colorFillSecondary }, { background: e3.colorFill })), Qs(e3, e3.textTextColor, "link", { color: e3.colorLinkHover, background: e3.linkHoverBg }, { color: e3.colorLinkActive })), qs(e3.componentCls, e3.ghostBg, e3.defaultGhostColor, e3.defaultGhostBorderColor, e3.colorTextDisabled, e3.colorBorder)), Zs = (e3) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ color: e3.colorPrimary, boxShadow: e3.primaryShadow }, Xs(e3, e3.colorPrimary, e3.colorBgContainer, { color: e3.colorPrimaryTextHover, borderColor: e3.colorPrimaryHover, background: e3.colorBgContainer }, { color: e3.colorPrimaryTextActive, borderColor: e3.colorPrimaryActive, background: e3.colorBgContainer })), Us(e3)), _s(e3, e3.colorPrimaryBg, { background: e3.colorPrimaryBgHover }, { background: e3.colorPrimaryBorder })), Qs(e3, e3.colorLink, "text", { color: e3.colorPrimaryTextHover, background: e3.colorPrimaryBg }, { color: e3.colorPrimaryTextActive, background: e3.colorPrimaryBorder })), qs(e3.componentCls, e3.ghostBg, e3.colorPrimary, e3.colorPrimary, e3.colorTextDisabled, e3.colorBorder, { color: e3.colorPrimaryHover, borderColor: e3.colorPrimaryHover }, { color: e3.colorPrimaryActive, borderColor: e3.colorPrimaryActive })), Js = (e3) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ color: e3.colorError, boxShadow: e3.dangerShadow }, Gs(e3, e3.dangerColor, e3.colorError, { background: e3.colorErrorHover }, { background: e3.colorErrorActive })), Xs(e3, e3.colorError, e3.colorBgContainer, { color: e3.colorErrorHover, borderColor: e3.colorErrorBorderHover }, { color: e3.colorErrorActive, borderColor: e3.colorErrorActive })), Us(e3)), _s(e3, e3.colorErrorBg, { background: e3.colorErrorBgFilledHover }, { background: e3.colorErrorBgActive })), Qs(e3, e3.colorError, "text", { color: e3.colorErrorHover, background: e3.colorErrorBg }, { color: e3.colorErrorHover, background: e3.colorErrorBgActive })), Qs(e3, e3.colorError, "link", { color: e3.colorErrorHover }, { color: e3.colorErrorActive })), qs(e3.componentCls, e3.ghostBg, e3.colorError, e3.colorError, e3.colorTextDisabled, e3.colorBorder, { color: e3.colorErrorHover, borderColor: e3.colorErrorHover }, { color: e3.colorErrorActive, borderColor: e3.colorErrorActive })), el = (e3) => {
          const { componentCls: t3 } = e3;
          return Object.assign({ [`${t3}-color-default`]: Ys(e3), [`${t3}-color-primary`]: Zs(e3), [`${t3}-color-dangerous`]: Js(e3) }, ((e4) => {
            const { componentCls: t4 } = e4;
            return fs.reduce((n2, r2) => {
              const o2 = e4[`${r2}6`], i2 = e4[`${r2}1`], a2 = e4[`${r2}5`], s2 = e4[`${r2}2`], l2 = e4[`${r2}3`], c2 = e4[`${r2}7`], u2 = `0 ${e4.controlOutlineWidth} 0 ${e4[`${r2}1`]}`;
              return Object.assign(Object.assign({}, n2), { [`&${t4}-color-${r2}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ color: o2, boxShadow: u2 }, Gs(e4, e4.colorTextLightSolid, o2, { background: a2 }, { background: c2 })), Xs(e4, o2, e4.colorBgContainer, { color: a2, borderColor: a2, background: e4.colorBgContainer }, { color: c2, borderColor: c2, background: e4.colorBgContainer })), Us(e4)), _s(e4, i2, { background: s2 }, { background: l2 })), Qs(e4, o2, "link", { color: a2 }, { color: c2 })), Qs(e4, o2, "text", { color: a2, background: i2 }, { color: c2, background: l2 })) });
            }, {});
          })(e3));
        }, tl = (e3) => Object.assign(Object.assign(Object.assign(Object.assign({}, Xs(e3, e3.defaultBorderColor, e3.defaultBg, { color: e3.defaultHoverColor, borderColor: e3.defaultHoverBorderColor, background: e3.defaultHoverBg }, { color: e3.defaultActiveColor, borderColor: e3.defaultActiveBorderColor, background: e3.defaultActiveBg })), Qs(e3, e3.textTextColor, "text", { color: e3.textTextHoverColor, background: e3.textHoverBg }, { color: e3.textTextActiveColor, background: e3.colorBgTextActive })), Gs(e3, e3.primaryColor, e3.colorPrimary, { background: e3.colorPrimaryHover, color: e3.primaryColor }, { background: e3.colorPrimaryActive, color: e3.primaryColor })), Qs(e3, e3.colorLink, "link", { color: e3.colorLinkHover, background: e3.linkHoverBg }, { color: e3.colorLinkActive })), nl = function(e3) {
          let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const { componentCls: n2, controlHeight: r2, fontSize: o2, borderRadius: i2, buttonPaddingHorizontal: a2, iconCls: s2, buttonPaddingVertical: l2, buttonIconOnlyFontSize: c2 } = e3;
          return [{ [t3]: { fontSize: o2, height: r2, padding: `${Ee(l2)} ${Ee(a2)}`, borderRadius: i2, [`&${n2}-icon-only`]: { width: r2, [s2]: { fontSize: c2, verticalAlign: "calc(-0.125em - 1px)" } } } }, { [`${n2}${n2}-circle${t3}`]: zs(e3) }, { [`${n2}${n2}-round${t3}`]: Hs(e3) }];
        }, rl = (e3) => {
          const t3 = Ba(e3, { fontSize: e3.contentFontSize });
          return nl(t3, e3.componentCls);
        }, ol = (e3) => {
          const t3 = Ba(e3, { controlHeight: e3.controlHeightSM, fontSize: e3.contentFontSizeSM, padding: e3.paddingXS, buttonPaddingHorizontal: e3.paddingInlineSM, buttonPaddingVertical: 0, borderRadius: e3.borderRadiusSM, buttonIconOnlyFontSize: e3.onlyIconSizeSM });
          return nl(t3, `${e3.componentCls}-sm`);
        }, il = (e3) => {
          const t3 = Ba(e3, { controlHeight: e3.controlHeightLG, fontSize: e3.contentFontSizeLG, buttonPaddingHorizontal: e3.paddingInlineLG, buttonPaddingVertical: 0, borderRadius: e3.borderRadiusLG, buttonIconOnlyFontSize: e3.onlyIconSizeLG });
          return nl(t3, `${e3.componentCls}-lg`);
        }, al = (e3) => {
          const { componentCls: t3 } = e3;
          return { [t3]: { [`&${t3}-block`]: { width: "100%" } } };
        }, sl = qa("Button", (e3) => {
          const t3 = Bs(e3);
          return [Fs(t3), rl(t3), ol(t3), il(t3), al(t3), el(t3), tl(t3), Ps(t3)];
        }, Ts, { unitless: { fontWeight: true, contentLineHeight: true, contentLineHeightSM: true, contentLineHeightLG: true } });
        function ll(e3, t3, n2) {
          const { focusElCls: r2, focus: o2, borderElCls: i2 } = n2, a2 = i2 ? "> *" : "", s2 = ["hover", o2 ? "focus" : null, "active"].filter(Boolean).map((e4) => `&:${e4} ${a2}`).join(",");
          return { [`&-item:not(${t3}-last-item)`]: { marginInlineEnd: e3.calc(e3.lineWidth).mul(-1).equal() }, "&-item": Object.assign(Object.assign({ [s2]: { zIndex: 2 } }, r2 ? { [`&${r2}`]: { zIndex: 2 } } : {}), { [`&[disabled] ${a2}`]: { zIndex: 0 } }) };
        }
        function cl(e3, t3, n2) {
          const { borderElCls: r2 } = n2, o2 = r2 ? `> ${r2}` : "";
          return { [`&-item:not(${t3}-first-item):not(${t3}-last-item) ${o2}`]: { borderRadius: 0 }, [`&-item:not(${t3}-last-item)${t3}-first-item`]: { [`& ${o2}, &${e3}-sm ${o2}, &${e3}-lg ${o2}`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 } }, [`&-item:not(${t3}-first-item)${t3}-last-item`]: { [`& ${o2}, &${e3}-sm ${o2}, &${e3}-lg ${o2}`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 } } };
        }
        function ul(e3) {
          let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { focus: true };
          const { componentCls: n2 } = e3, r2 = `${n2}-compact`;
          return { [r2]: Object.assign(Object.assign({}, ll(e3, r2, t3)), cl(n2, r2, t3)) };
        }
        function dl(e3, t3) {
          return { [`&-item:not(${t3}-last-item)`]: { marginBottom: e3.calc(e3.lineWidth).mul(-1).equal() }, "&-item": { "&:hover,&:focus,&:active": { zIndex: 2 }, "&[disabled]": { zIndex: 0 } } };
        }
        function fl(e3) {
          const t3 = `${e3.componentCls}-compact-vertical`;
          return { [t3]: Object.assign(Object.assign({}, dl(e3, t3)), (n2 = e3.componentCls, r2 = t3, { [`&-item:not(${r2}-first-item):not(${r2}-last-item)`]: { borderRadius: 0 }, [`&-item${r2}-first-item:not(${r2}-last-item)`]: { [`&, &${n2}-sm, &${n2}-lg`]: { borderEndEndRadius: 0, borderEndStartRadius: 0 } }, [`&-item${r2}-last-item:not(${r2}-first-item)`]: { [`&, &${n2}-sm, &${n2}-lg`]: { borderStartStartRadius: 0, borderStartEndRadius: 0 } } })) };
          var n2, r2;
        }
        const pl = (e3) => {
          const { componentCls: t3, colorPrimaryHover: n2, lineWidth: r2, calc: o2 } = e3, i2 = o2(r2).mul(-1).equal(), a2 = (e4) => ({ [`${t3}-compact${e4 ? "-vertical" : ""}-item${t3}-primary:not([disabled])`]: { "& + &::before": { position: "absolute", top: e4 ? i2 : 0, insetInlineStart: e4 ? 0 : i2, backgroundColor: n2, content: '""', width: e4 ? "100%" : r2, height: e4 ? r2 : "100%" } } });
          return Object.assign(Object.assign({}, a2()), a2(true));
        }, ml = Wa(["Button", "compact"], (e3) => {
          const t3 = Bs(e3);
          return [ul(t3), fl(t3), pl(t3)];
        }, Ts);
        const gl = { default: ["default", "outlined"], primary: ["primary", "solid"], dashed: ["default", "dashed"], link: ["primary", "link"], text: ["default", "text"] }, hl = o().forwardRef((e3, n2) => {
          var r2, i2, a2, s2;
          const { loading: l2 = false, prefixCls: c2, color: u2, variant: d2, type: f2, danger: p2 = false, shape: m2 = "default", size: g2, styles: h2, disabled: v2, className: b2, rootClassName: y2, children: C2, icon: w2, iconPosition: x2 = "start", ghost: S2 = false, block: A2 = false, htmlType: k2 = "button", classNames: O2, style: P2 = {}, autoInsertSpace: I2, autoFocus: j2 } = e3, $2 = function(e4, t3) {
            var n3 = {};
            for (var r3 in e4)
              Object.prototype.hasOwnProperty.call(e4, r3) && t3.indexOf(r3) < 0 && (n3[r3] = e4[r3]);
            if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
              var o2 = 0;
              for (r3 = Object.getOwnPropertySymbols(e4); o2 < r3.length; o2++)
                t3.indexOf(r3[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, r3[o2]) && (n3[r3[o2]] = e4[r3[o2]]);
            }
            return n3;
          }(e3, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), N2 = f2 || "default", [M2, R2] = (0, t2.useMemo)(() => {
            if (u2 && d2)
              return [u2, d2];
            const e4 = gl[N2] || [];
            return p2 ? ["danger", e4[1]] : e4;
          }, [f2, u2, d2, p2]), B2 = "danger" === M2 ? "dangerous" : M2, { getPrefixCls: T2, direction: F2, button: L2 } = (0, t2.useContext)(E), z2 = null === (r2 = null != I2 ? I2 : null == L2 ? void 0 : L2.autoInsertSpace) || void 0 === r2 || r2, H2 = T2("btn", c2), [D2, q2, V2] = sl(H2), W2 = (0, t2.useContext)(ur), K2 = null != v2 ? v2 : W2, G2 = (0, t2.useContext)(ds), X2 = (0, t2.useMemo)(() => function(e4) {
            if ("object" == typeof e4 && e4) {
              let t3 = null == e4 ? void 0 : e4.delay;
              return t3 = Number.isNaN(t3) || "number" != typeof t3 ? 0 : t3, { loading: t3 <= 0, delay: t3 };
            }
            return { loading: !!e4, delay: 0 };
          }(l2), [l2]), [U2, _2] = (0, t2.useState)(X2.loading), [Q2, Y2] = (0, t2.useState)(false), Z2 = (0, t2.useRef)(null), J2 = jr(n2, Z2), ee2 = 1 === t2.Children.count(C2) && !w2 && !vs(R2), te2 = (0, t2.useRef)(true);
          o().useEffect(() => (te2.current = false, () => {
            te2.current = true;
          }), []), (0, t2.useEffect)(() => {
            let e4 = null;
            return X2.delay > 0 ? e4 = setTimeout(() => {
              e4 = null, _2(true);
            }, X2.delay) : _2(X2.loading), function() {
              e4 && (clearTimeout(e4), e4 = null);
            };
          }, [X2]), (0, t2.useEffect)(() => {
            if (!Z2.current || !z2)
              return;
            const e4 = Z2.current.textContent || "";
            ee2 && ms(e4) ? Q2 || Y2(true) : Q2 && Y2(false);
          }), (0, t2.useEffect)(() => {
            j2 && Z2.current && Z2.current.focus();
          }, []);
          const ne2 = o().useCallback((t3) => {
            var n3;
            U2 || K2 ? t3.preventDefault() : null === (n3 = e3.onClick) || void 0 === n3 || n3.call(e3, t3);
          }, [e3.onClick, U2, K2]), { compactSize: re2, compactItemClassnames: oe2 } = ls(H2, F2), ie2 = es((e4) => {
            var t3, n3;
            return null !== (n3 = null !== (t3 = null != g2 ? g2 : re2) && void 0 !== t3 ? t3 : G2) && void 0 !== n3 ? n3 : e4;
          }), ae2 = ie2 && null !== (i2 = { large: "lg", small: "sm", middle: void 0 }[ie2]) && void 0 !== i2 ? i2 : "", se2 = U2 ? "loading" : w2, le2 = wa($2, ["navigate"]), ce2 = br()(H2, q2, V2, { [`${H2}-${m2}`]: "default" !== m2 && m2, [`${H2}-${N2}`]: N2, [`${H2}-dangerous`]: p2, [`${H2}-color-${B2}`]: B2, [`${H2}-variant-${R2}`]: R2, [`${H2}-${ae2}`]: ae2, [`${H2}-icon-only`]: !C2 && 0 !== C2 && !!se2, [`${H2}-background-ghost`]: S2 && !vs(R2), [`${H2}-loading`]: U2, [`${H2}-two-chinese-chars`]: Q2 && z2 && !U2, [`${H2}-block`]: A2, [`${H2}-rtl`]: "rtl" === F2, [`${H2}-icon-end`]: "end" === x2 }, oe2, b2, y2, null == L2 ? void 0 : L2.className), ue2 = Object.assign(Object.assign({}, null == L2 ? void 0 : L2.style), P2), de2 = br()(null == O2 ? void 0 : O2.icon, null === (a2 = null == L2 ? void 0 : L2.classNames) || void 0 === a2 ? void 0 : a2.icon), fe2 = Object.assign(Object.assign({}, (null == h2 ? void 0 : h2.icon) || {}), (null === (s2 = null == L2 ? void 0 : L2.styles) || void 0 === s2 ? void 0 : s2.icon) || {}), pe2 = w2 && !U2 ? o().createElement(ys, { prefixCls: H2, className: de2, style: fe2 }, w2) : "object" == typeof l2 && l2.icon ? o().createElement(ys, { prefixCls: H2, className: de2, style: fe2 }, l2.icon) : o().createElement(ks, { existIcon: !!w2, prefixCls: H2, loading: U2, mount: te2.current }), me2 = C2 || 0 === C2 ? function(e4, t3) {
            let n3 = false;
            const r3 = [];
            return o().Children.forEach(e4, (e5) => {
              const t4 = typeof e5, o2 = "string" === t4 || "number" === t4;
              if (n3 && o2) {
                const t5 = r3.length - 1, n4 = r3[t5];
                r3[t5] = `${n4}${e5}`;
              } else
                r3.push(e5);
              n3 = o2;
            }), o().Children.map(r3, (e5) => function(e6, t4) {
              if (null == e6)
                return;
              const n4 = t4 ? " " : "";
              return "string" != typeof e6 && "number" != typeof e6 && hs(e6.type) && ms(e6.props.children) ? Aa(e6, { children: e6.props.children.split("").join(n4) }) : hs(e6) ? ms(e6) ? o().createElement("span", null, e6.split("").join(n4)) : o().createElement("span", null, e6) : Sa(e6) ? o().createElement("span", null, e6) : e6;
            }(e5, t3));
          }(C2, ee2 && z2) : null;
          if (void 0 !== le2.href)
            return D2(o().createElement("a", Object.assign({}, le2, { className: br()(ce2, { [`${H2}-disabled`]: K2 }), href: K2 ? void 0 : le2.href, style: ue2, onClick: ne2, ref: J2, tabIndex: K2 ? -1 : 0 }), pe2, me2));
          let ge2 = o().createElement("button", Object.assign({}, $2, { type: k2, className: ce2, style: ue2, onClick: ne2, disabled: K2, ref: J2 }), pe2, me2, oe2 && o().createElement(ml, { prefixCls: H2 }));
          return vs(R2) || (ge2 = o().createElement(Ja, { component: "Button", disabled: U2 }, ge2)), D2(ge2);
        }), vl = hl;
        vl.Group = (e3) => {
          const { getPrefixCls: n2, direction: r2 } = t2.useContext(E), { prefixCls: o2, size: i2, className: a2 } = e3, s2 = function(e4, t3) {
            var n3 = {};
            for (var r3 in e4)
              Object.prototype.hasOwnProperty.call(e4, r3) && t3.indexOf(r3) < 0 && (n3[r3] = e4[r3]);
            if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
              var o3 = 0;
              for (r3 = Object.getOwnPropertySymbols(e4); o3 < r3.length; o3++)
                t3.indexOf(r3[o3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, r3[o3]) && (n3[r3[o3]] = e4[r3[o3]]);
            }
            return n3;
          }(e3, ["prefixCls", "size", "className"]), l2 = n2("btn-group", o2), [, , c2] = ei();
          let u2 = "";
          switch (i2) {
            case "large":
              u2 = "lg";
              break;
            case "small":
              u2 = "sm";
          }
          const d2 = br()(l2, { [`${l2}-${u2}`]: u2, [`${l2}-rtl`]: "rtl" === r2 }, a2, c2);
          return t2.createElement(ds.Provider, { value: i2 }, t2.createElement("div", Object.assign({}, s2, { className: d2 })));
        }, vl.__ANT_BUTTON = true;
        const bl = vl;
        function yl(e3) {
          return !!(null == e3 ? void 0 : e3.then);
        }
        const Cl = (e3) => {
          const { type: n2, children: r2, prefixCls: o2, buttonProps: i2, close: a2, autoFocus: s2, emitEvent: l2, isSilent: c2, quitOnNullishReturnValue: u2, actionFn: d2 } = e3, f2 = t2.useRef(false), p2 = t2.useRef(null), [m2, g2] = Gr(false), h2 = function() {
            null == a2 || a2.apply(void 0, arguments);
          };
          return t2.useEffect(() => {
            let e4 = null;
            return s2 && (e4 = setTimeout(() => {
              var e5;
              null === (e5 = p2.current) || void 0 === e5 || e5.focus({ preventScroll: true });
            })), () => {
              e4 && clearTimeout(e4);
            };
          }, []), t2.createElement(bl, Object.assign({}, gs(n2), { onClick: (e4) => {
            if (f2.current)
              return;
            if (f2.current = true, !d2)
              return void h2();
            let t3;
            if (l2) {
              if (t3 = d2(e4), u2 && !yl(t3))
                return f2.current = false, void h2(e4);
            } else if (d2.length)
              t3 = d2(a2), f2.current = false;
            else if (t3 = d2(), !yl(t3))
              return void h2();
            ((e5) => {
              yl(e5) && (g2(true), e5.then(function() {
                g2(false, true), h2.apply(void 0, arguments), f2.current = false;
              }, (e6) => {
                if (g2(false, true), f2.current = false, !(null == c2 ? void 0 : c2()))
                  return Promise.reject(e6);
              }));
            })(t3);
          }, loading: m2, prefixCls: o2 }, i2, { ref: p2 }), r2);
        }, wl = o().createContext({}), { Provider: xl } = wl, Sl = () => {
          const { autoFocusButton: e3, cancelButtonProps: n2, cancelTextLocale: r2, isSilent: i2, mergedOkCancel: a2, rootPrefixCls: s2, close: l2, onCancel: c2, onConfirm: u2 } = (0, t2.useContext)(wl);
          return a2 ? o().createElement(Cl, { isSilent: i2, actionFn: c2, close: function() {
            null == l2 || l2.apply(void 0, arguments), null == u2 || u2(false);
          }, autoFocus: "cancel" === e3, buttonProps: n2, prefixCls: `${s2}-btn` }, r2) : null;
        }, Al = () => {
          const { autoFocusButton: e3, close: n2, isSilent: r2, okButtonProps: i2, rootPrefixCls: a2, okTextLocale: s2, okType: l2, onConfirm: c2, onOk: u2 } = (0, t2.useContext)(wl);
          return o().createElement(Cl, { isSilent: r2, type: l2 || "primary", actionFn: u2, close: function() {
            null == n2 || n2.apply(void 0, arguments), null == c2 || c2(true);
          }, autoFocus: "ok" === e3, buttonProps: i2, prefixCls: `${a2}-btn` }, s2);
        }, El = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
        var kl = function(e3, n2) {
          return t2.createElement(Yi, qe({}, e3, { ref: n2, icon: El }));
        };
        const Ol = t2.forwardRef(kl), Pl = t2.createContext(null);
        var Il = [];
        var jl = "rc-util-locker-".concat(Date.now()), $l = 0;
        function Nl(e3) {
          var n2 = !!e3, r2 = N(t2.useState(function() {
            return $l += 1, "".concat(jl, "_").concat($l);
          }), 1)[0];
          Me(function() {
            if (n2) {
              var e4 = (o2 = document.body, "undefined" != typeof document && o2 && o2 instanceof Element ? function(e5) {
                var t4 = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), n3 = document.createElement("div");
                n3.id = t4;
                var r3, o3, i2 = n3.style;
                if (i2.position = "absolute", i2.left = "0", i2.top = "0", i2.width = "100px", i2.height = "100px", i2.overflow = "scroll", e5) {
                  var a2 = getComputedStyle(e5);
                  i2.scrollbarColor = a2.scrollbarColor, i2.scrollbarWidth = a2.scrollbarWidth;
                  var s2 = getComputedStyle(e5, "::-webkit-scrollbar"), l2 = parseInt(s2.width, 10), c2 = parseInt(s2.height, 10);
                  try {
                    var u2 = l2 ? "width: ".concat(s2.width, ";") : "", d2 = c2 ? "height: ".concat(s2.height, ";") : "";
                    X("\n#".concat(t4, "::-webkit-scrollbar {\n").concat(u2, "\n").concat(d2, "\n}"), t4);
                  } catch (e6) {
                    console.error(e6), r3 = l2, o3 = c2;
                  }
                }
                document.body.appendChild(n3);
                var f2 = e5 && r3 && !isNaN(r3) ? r3 : n3.offsetWidth - n3.clientWidth, p2 = e5 && o3 && !isNaN(o3) ? o3 : n3.offsetHeight - n3.clientHeight;
                return document.body.removeChild(n3), G(t4), { width: f2, height: p2 };
              }(o2) : { width: 0, height: 0 }).width, t3 = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
              X("\nhtml body {\n  overflow-y: hidden;\n  ".concat(t3 ? "width: calc(100% - ".concat(e4, "px);") : "", "\n}"), r2);
            } else
              G(r2);
            var o2;
            return function() {
              G(r2);
            };
          }, [n2, r2]);
        }
        var Ml = false, Rl = function(e3) {
          return false !== e3 && (T() && e3 ? "string" == typeof e3 ? document.querySelector(e3) : "function" == typeof e3 ? e3() : e3 : null);
        }, Bl = t2.forwardRef(function(e3, n2) {
          var r2 = e3.open, o2 = e3.autoLock, i2 = e3.getContainer, a2 = (e3.debug, e3.autoDestroy), s2 = void 0 === a2 || a2, l2 = e3.children, c2 = N(t2.useState(r2), 2), u2 = c2[0], d2 = c2[1], f2 = u2 || r2;
          t2.useEffect(function() {
            (s2 || r2) && d2(r2);
          }, [r2, s2]);
          var p2 = N(t2.useState(function() {
            return Rl(i2);
          }), 2), m2 = p2[0], g2 = p2[1];
          t2.useEffect(function() {
            var e4 = Rl(i2);
            g2(null != e4 ? e4 : null);
          });
          var h2 = function(e4) {
            var n3 = N(t2.useState(function() {
              return T() ? document.createElement("div") : null;
            }), 1)[0], r3 = t2.useRef(false), o3 = t2.useContext(Pl), i3 = N(t2.useState(Il), 2), a3 = i3[0], s3 = i3[1], l3 = o3 || (r3.current ? void 0 : function(e5) {
              s3(function(t3) {
                return [e5].concat(x(t3));
              });
            });
            function c3() {
              n3.parentElement || document.body.appendChild(n3), r3.current = true;
            }
            function u3() {
              var e5;
              null === (e5 = n3.parentElement) || void 0 === e5 || e5.removeChild(n3), r3.current = false;
            }
            return Me(function() {
              return e4 ? o3 ? o3(c3) : c3() : u3(), u3;
            }, [e4]), Me(function() {
              a3.length && (a3.forEach(function(e5) {
                return e5();
              }), s3(Il));
            }, [a3]), [n3, l3];
          }(f2 && !m2), v2 = N(h2, 2), b2 = v2[0], y2 = v2[1], C2 = null != m2 ? m2 : b2;
          Nl(o2 && r2 && T() && (C2 === b2 || C2 === document.body));
          var w2 = null;
          l2 && $r(l2) && n2 && (w2 = l2.ref);
          var S2 = jr(w2, n2);
          if (!f2 || !T() || void 0 === m2)
            return null;
          var A2 = false === C2 || Ml, E2 = l2;
          return n2 && (E2 = t2.cloneElement(l2, { ref: S2 })), t2.createElement(Pl.Provider, { value: y2 }, A2 ? E2 : (0, yr.createPortal)(E2, C2));
        });
        const Tl = Bl;
        var Fl = t2.createContext({}), Ll = 0, zl = R({}, t2).useId;
        const Hl = zl ? function(e3) {
          var t3 = zl();
          return e3 || t3;
        } : function(e3) {
          var n2 = N(t2.useState("ssr-id"), 2), r2 = n2[0], o2 = n2[1];
          return t2.useEffect(function() {
            var e4 = Ll;
            Ll += 1, o2("rc_unique_".concat(e4));
          }, []), e3 || r2;
        };
        var Dl = { MAC_ENTER: 3, BACKSPACE: 8, TAB: 9, NUM_CENTER: 12, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, PAUSE: 19, CAPS_LOCK: 20, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, PRINT_SCREEN: 44, INSERT: 45, DELETE: 46, ZERO: 48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56, NINE: 57, QUESTION_MARK: 63, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, META: 91, WIN_KEY_RIGHT: 92, CONTEXT_MENU: 93, NUM_ZERO: 96, NUM_ONE: 97, NUM_TWO: 98, NUM_THREE: 99, NUM_FOUR: 100, NUM_FIVE: 101, NUM_SIX: 102, NUM_SEVEN: 103, NUM_EIGHT: 104, NUM_NINE: 105, NUM_MULTIPLY: 106, NUM_PLUS: 107, NUM_MINUS: 109, NUM_PERIOD: 110, NUM_DIVISION: 111, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, NUMLOCK: 144, SEMICOLON: 186, DASH: 189, EQUALS: 187, COMMA: 188, PERIOD: 190, SLASH: 191, APOSTROPHE: 192, SINGLE_QUOTE: 222, OPEN_SQUARE_BRACKET: 219, BACKSLASH: 220, CLOSE_SQUARE_BRACKET: 221, WIN_KEY: 224, MAC_FF_META: 224, WIN_IME: 229, isTextModifyingKeyEvent: function(e3) {
          var t3 = e3.keyCode;
          if (e3.altKey && !e3.ctrlKey || e3.metaKey || t3 >= Dl.F1 && t3 <= Dl.F12)
            return false;
          switch (t3) {
            case Dl.ALT:
            case Dl.CAPS_LOCK:
            case Dl.CONTEXT_MENU:
            case Dl.CTRL:
            case Dl.DOWN:
            case Dl.END:
            case Dl.ESC:
            case Dl.HOME:
            case Dl.INSERT:
            case Dl.LEFT:
            case Dl.MAC_FF_META:
            case Dl.META:
            case Dl.NUMLOCK:
            case Dl.NUM_CENTER:
            case Dl.PAGE_DOWN:
            case Dl.PAGE_UP:
            case Dl.PAUSE:
            case Dl.PRINT_SCREEN:
            case Dl.RIGHT:
            case Dl.SHIFT:
            case Dl.UP:
            case Dl.WIN_KEY:
            case Dl.WIN_KEY_RIGHT:
              return false;
            default:
              return true;
          }
        }, isCharacterKey: function(e3) {
          if (e3 >= Dl.ZERO && e3 <= Dl.NINE)
            return true;
          if (e3 >= Dl.NUM_ZERO && e3 <= Dl.NUM_MULTIPLY)
            return true;
          if (e3 >= Dl.A && e3 <= Dl.Z)
            return true;
          if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e3)
            return true;
          switch (e3) {
            case Dl.SPACE:
            case Dl.QUESTION_MARK:
            case Dl.NUM_PLUS:
            case Dl.NUM_MINUS:
            case Dl.NUM_PERIOD:
            case Dl.NUM_DIVISION:
            case Dl.SEMICOLON:
            case Dl.DASH:
            case Dl.EQUALS:
            case Dl.COMMA:
            case Dl.PERIOD:
            case Dl.SLASH:
            case Dl.APOSTROPHE:
            case Dl.SINGLE_QUOTE:
            case Dl.OPEN_SQUARE_BRACKET:
            case Dl.BACKSLASH:
            case Dl.CLOSE_SQUARE_BRACKET:
              return true;
            default:
              return false;
          }
        } };
        const ql = Dl;
        var Vl = "".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap", " ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);
        function Wl(e3, t3) {
          return 0 === e3.indexOf(t3);
        }
        function Kl(e3) {
          var t3, n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          t3 = false === n2 ? { aria: true, data: true, attr: true } : true === n2 ? { aria: true } : R({}, n2);
          var r2 = {};
          return Object.keys(e3).forEach(function(n3) {
            (t3.aria && ("role" === n3 || Wl(n3, "aria-")) || t3.data && Wl(n3, "data-") || t3.attr && Vl.includes(n3)) && (r2[n3] = e3[n3]);
          }), r2;
        }
        function Gl(e3, t3, n2) {
          var r2 = t3;
          return !r2 && n2 && (r2 = "".concat(e3, "-").concat(n2)), r2;
        }
        function Xl(e3, t3) {
          var n2 = e3["page".concat(t3 ? "Y" : "X", "Offset")], r2 = "scroll".concat(t3 ? "Top" : "Left");
          if ("number" != typeof n2) {
            var o2 = e3.document;
            "number" != typeof (n2 = o2.documentElement[r2]) && (n2 = o2.body[r2]);
          }
          return n2;
        }
        const Ul = t2.memo(function(e3) {
          return e3.children;
        }, function(e3, t3) {
          return !t3.shouldUpdate;
        });
        var _l = { width: 0, height: 0, overflow: "hidden", outline: "none" }, Ql = { outline: "none" }, Yl = o().forwardRef(function(e3, n2) {
          var r2 = e3.prefixCls, i2 = e3.className, a2 = e3.style, s2 = e3.title, l2 = e3.ariaId, c2 = e3.footer, u2 = e3.closable, d2 = e3.closeIcon, f2 = e3.onClose, p2 = e3.children, m2 = e3.bodyStyle, g2 = e3.bodyProps, h2 = e3.modalRender, v2 = e3.onMouseDown, b2 = e3.onMouseUp, y2 = e3.holderRef, C2 = e3.visible, w2 = e3.forceRender, x2 = e3.width, S2 = e3.height, A2 = e3.classNames, E2 = e3.styles, k2 = o().useContext(Fl).panel, P2 = jr(y2, k2), I2 = (0, t2.useRef)(), j2 = (0, t2.useRef)();
          o().useImperativeHandle(n2, function() {
            return { focus: function() {
              var e4;
              null === (e4 = I2.current) || void 0 === e4 || e4.focus({ preventScroll: true });
            }, changeActive: function(e4) {
              var t3 = document.activeElement;
              e4 && t3 === j2.current ? I2.current.focus({ preventScroll: true }) : e4 || t3 !== I2.current || j2.current.focus({ preventScroll: true });
            } };
          });
          var $2 = {};
          void 0 !== x2 && ($2.width = x2), void 0 !== S2 && ($2.height = S2);
          var N2 = c2 ? o().createElement("div", { className: br()("".concat(r2, "-footer"), null == A2 ? void 0 : A2.footer), style: R({}, null == E2 ? void 0 : E2.footer) }, c2) : null, M2 = s2 ? o().createElement("div", { className: br()("".concat(r2, "-header"), null == A2 ? void 0 : A2.header), style: R({}, null == E2 ? void 0 : E2.header) }, o().createElement("div", { className: "".concat(r2, "-title"), id: l2 }, s2)) : null, B2 = (0, t2.useMemo)(function() {
            return "object" === O(u2) && null !== u2 ? u2 : u2 ? { closeIcon: null != d2 ? d2 : o().createElement("span", { className: "".concat(r2, "-close-x") }) } : {};
          }, [u2, d2, r2]), T2 = Kl(B2, true), F2 = "object" === O(u2) && u2.disabled, L2 = u2 ? o().createElement("button", qe({ type: "button", onClick: f2, "aria-label": "Close" }, T2, { className: "".concat(r2, "-close"), disabled: F2 }), B2.closeIcon) : null, z2 = o().createElement("div", { className: br()("".concat(r2, "-content"), null == A2 ? void 0 : A2.content), style: null == E2 ? void 0 : E2.content }, L2, M2, o().createElement("div", qe({ className: br()("".concat(r2, "-body"), null == A2 ? void 0 : A2.body), style: R(R({}, m2), null == E2 ? void 0 : E2.body) }, g2), p2), N2);
          return o().createElement("div", { key: "dialog-element", role: "dialog", "aria-labelledby": s2 ? l2 : null, "aria-modal": "true", ref: P2, style: R(R({}, a2), $2), className: br()(r2, i2), onMouseDown: v2, onMouseUp: b2 }, o().createElement("div", { ref: I2, tabIndex: 0, style: Ql }, o().createElement(Ul, { shouldUpdate: C2 || w2 }, h2 ? h2(z2) : z2)), o().createElement("div", { tabIndex: 0, ref: j2, style: _l }));
        });
        const Zl = Yl;
        var Jl = t2.forwardRef(function(e3, n2) {
          var r2 = e3.prefixCls, o2 = e3.title, i2 = e3.style, a2 = e3.className, s2 = e3.visible, l2 = e3.forceRender, c2 = e3.destroyOnClose, u2 = e3.motionName, d2 = e3.ariaId, f2 = e3.onVisibleChanged, p2 = e3.mousePosition, m2 = (0, t2.useRef)(), g2 = N(t2.useState(), 2), h2 = g2[0], v2 = g2[1], b2 = {};
          function y2() {
            var e4 = function(e5) {
              var t3 = e5.getBoundingClientRect(), n3 = { left: t3.left, top: t3.top }, r3 = e5.ownerDocument, o3 = r3.defaultView || r3.parentWindow;
              return n3.left += Xl(o3), n3.top += Xl(o3, true), n3;
            }(m2.current);
            v2(p2 && (p2.x || p2.y) ? "".concat(p2.x - e4.left, "px ").concat(p2.y - e4.top, "px") : "");
          }
          return h2 && (b2.transformOrigin = h2), t2.createElement(Ko, { visible: s2, onVisibleChanged: f2, onAppearPrepare: y2, onEnterPrepare: y2, forceRender: l2, motionName: u2, removeOnLeave: c2, ref: m2 }, function(s3, l3) {
            var c3 = s3.className, u3 = s3.style;
            return t2.createElement(Zl, qe({}, e3, { ref: n2, title: o2, ariaId: d2, prefixCls: r2, holderRef: l3, style: R(R(R({}, u3), i2), b2), className: br()(a2, c3) }));
          });
        });
        Jl.displayName = "Content";
        const ec = Jl, tc = function(e3) {
          var n2 = e3.prefixCls, r2 = e3.style, o2 = e3.visible, i2 = e3.maskProps, a2 = e3.motionName, s2 = e3.className;
          return t2.createElement(Ko, { key: "mask", visible: o2, motionName: a2, leavedClassName: "".concat(n2, "-mask-hidden") }, function(e4, o3) {
            var a3 = e4.className, l2 = e4.style;
            return t2.createElement("div", qe({ ref: o3, style: R(R({}, l2), r2), className: br()("".concat(n2, "-mask"), a3, s2) }, i2));
          });
        }, nc = function(e3) {
          var n2 = e3.prefixCls, r2 = void 0 === n2 ? "rc-dialog" : n2, o2 = e3.zIndex, i2 = e3.visible, a2 = void 0 !== i2 && i2, s2 = e3.keyboard, l2 = void 0 === s2 || s2, c2 = e3.focusTriggerAfterClose, u2 = void 0 === c2 || c2, d2 = e3.wrapStyle, f2 = e3.wrapClassName, p2 = e3.wrapProps, m2 = e3.onClose, g2 = e3.afterOpenChange, h2 = e3.afterClose, v2 = e3.transitionName, b2 = e3.animation, y2 = e3.closable, C2 = void 0 === y2 || y2, w2 = e3.mask, x2 = void 0 === w2 || w2, S2 = e3.maskTransitionName, A2 = e3.maskAnimation, E2 = e3.maskClosable, k2 = void 0 === E2 || E2, O2 = e3.maskStyle, P2 = e3.maskProps, I2 = e3.rootClassName, j2 = e3.classNames, $2 = e3.styles, M2 = (0, t2.useRef)(), B2 = (0, t2.useRef)(), T2 = (0, t2.useRef)(), L2 = N(t2.useState(a2), 2), z2 = L2[0], H2 = L2[1], D2 = Hl();
          function q2(e4) {
            null == m2 || m2(e4);
          }
          var V2 = (0, t2.useRef)(false), W2 = (0, t2.useRef)(), K2 = null;
          k2 && (K2 = function(e4) {
            V2.current ? V2.current = false : B2.current === e4.target && q2(e4);
          }), (0, t2.useEffect)(function() {
            a2 && (H2(true), F(B2.current, document.activeElement) || (M2.current = document.activeElement));
          }, [a2]), (0, t2.useEffect)(function() {
            return function() {
              clearTimeout(W2.current);
            };
          }, []);
          var G2 = R(R(R({ zIndex: o2 }, d2), null == $2 ? void 0 : $2.wrapper), {}, { display: z2 ? null : "none" });
          return t2.createElement("div", qe({ className: br()("".concat(r2, "-root"), I2) }, Kl(e3, { data: true })), t2.createElement(tc, { prefixCls: r2, visible: x2 && a2, motionName: Gl(r2, S2, A2), style: R(R({ zIndex: o2 }, O2), null == $2 ? void 0 : $2.mask), maskProps: P2, className: null == j2 ? void 0 : j2.mask }), t2.createElement("div", qe({ tabIndex: -1, onKeyDown: function(e4) {
            if (l2 && e4.keyCode === ql.ESC)
              return e4.stopPropagation(), void q2(e4);
            a2 && e4.keyCode === ql.TAB && T2.current.changeActive(!e4.shiftKey);
          }, className: br()("".concat(r2, "-wrap"), f2, null == j2 ? void 0 : j2.wrapper), ref: B2, onClick: K2, style: G2 }, p2), t2.createElement(ec, qe({}, e3, { onMouseDown: function() {
            clearTimeout(W2.current), V2.current = true;
          }, onMouseUp: function() {
            W2.current = setTimeout(function() {
              V2.current = false;
            });
          }, ref: T2, closable: C2, ariaId: D2, prefixCls: r2, visible: a2 && z2, onClose: q2, onVisibleChanged: function(e4) {
            if (e4)
              F(B2.current, document.activeElement) || null === (t3 = T2.current) || void 0 === t3 || t3.focus();
            else {
              if (H2(false), x2 && M2.current && u2) {
                try {
                  M2.current.focus({ preventScroll: true });
                } catch (e5) {
                }
                M2.current = null;
              }
              z2 && (null == h2 || h2());
            }
            var t3;
            null == g2 || g2(e4);
          }, motionName: Gl(r2, v2, b2) }))));
        };
        var rc = function(e3) {
          var n2 = e3.visible, r2 = e3.getContainer, o2 = e3.forceRender, i2 = e3.destroyOnClose, a2 = void 0 !== i2 && i2, s2 = e3.afterClose, l2 = e3.panelRef, c2 = N(t2.useState(n2), 2), u2 = c2[0], d2 = c2[1], f2 = t2.useMemo(function() {
            return { panel: l2 };
          }, [l2]);
          return t2.useEffect(function() {
            n2 && d2(true);
          }, [n2]), o2 || !a2 || u2 ? t2.createElement(Fl.Provider, { value: f2 }, t2.createElement(Tl, { open: n2 || o2 || u2, autoDestroy: false, getContainer: r2, autoLock: n2 || u2 }, t2.createElement(nc, qe({}, e3, { destroyOnClose: a2, afterClose: function() {
            null == s2 || s2(), d2(false);
          } })))) : null;
        };
        rc.displayName = "Dialog";
        const oc = rc;
        var ic = "RC_FORM_INTERNAL_HOOKS", ac = function() {
          te(false, "Can not find FormContext. Please make sure you wrap Field under Form.");
        };
        const sc = t2.createContext({ getFieldValue: ac, getFieldsValue: ac, getFieldError: ac, getFieldWarning: ac, getFieldsError: ac, isFieldsTouched: ac, isFieldTouched: ac, isFieldValidating: ac, isFieldsValidating: ac, resetFields: ac, setFields: ac, setFieldValue: ac, setFieldsValue: ac, validateFields: ac, submit: ac, getInternalHooks: function() {
          return ac(), { dispatch: ac, initEntityValue: ac, registerField: ac, useSubscribe: ac, setInitialValues: ac, destroyForm: ac, setCallbacks: ac, registerWatch: ac, getFields: ac, setValidateMessages: ac, setPreserve: ac, getInitialValue: ac };
        } }), lc = t2.createContext(null);
        function cc(e3) {
          return null == e3 ? [] : Array.isArray(e3) ? e3 : [e3];
        }
        function uc() {
          return { default: "Validation error on field %s", required: "%s is required", enum: "%s must be one of %s", whitespace: "%s cannot be empty", date: { format: "%s date %s is invalid for format %s", parse: "%s date could not be parsed, %s is invalid ", invalid: "%s date %s is invalid" }, types: { string: "%s is not a %s", method: "%s is not a %s (function)", array: "%s is not an %s", object: "%s is not an %s", number: "%s is not a %s", date: "%s is not a %s", boolean: "%s is not a %s", integer: "%s is not an %s", float: "%s is not a %s", regexp: "%s is not a valid %s", email: "%s is not a valid %s", url: "%s is not a valid %s", hex: "%s is not a valid %s" }, string: { len: "%s must be exactly %s characters", min: "%s must be at least %s characters", max: "%s cannot be longer than %s characters", range: "%s must be between %s and %s characters" }, number: { len: "%s must equal %s", min: "%s cannot be less than %s", max: "%s cannot be greater than %s", range: "%s must be between %s and %s" }, array: { len: "%s must be exactly %s in length", min: "%s cannot be less than %s in length", max: "%s cannot be greater than %s in length", range: "%s must be between %s and %s in length" }, pattern: { mismatch: "%s value %s does not match pattern %s" }, clone: function() {
            var e3 = JSON.parse(JSON.stringify(this));
            return e3.clone = this.clone, e3;
          } };
        }
        var dc = uc();
        function fc(e3) {
          var t3 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return fc = function(e4) {
            if (null === e4 || !function(e5) {
              try {
                return -1 !== Function.toString.call(e5).indexOf("[native code]");
              } catch (t4) {
                return "function" == typeof e5;
              }
            }(e4))
              return e4;
            if ("function" != typeof e4)
              throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t3) {
              if (t3.has(e4))
                return t3.get(e4);
              t3.set(e4, n2);
            }
            function n2() {
              return function(e5, t4, n3) {
                if (Dr())
                  return Reflect.construct.apply(null, arguments);
                var r2 = [null];
                r2.push.apply(r2, t4);
                var o2 = new (e5.bind.apply(e5, r2))();
                return n3 && Lr(o2, n3.prototype), o2;
              }(e4, arguments, Hr(this).constructor);
            }
            return n2.prototype = Object.create(e4.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), Lr(n2, e4);
          }, fc(e3);
        }
        var pc = /%[sdj%]/g;
        function mc(e3) {
          if (!e3 || !e3.length)
            return null;
          var t3 = {};
          return e3.forEach(function(e4) {
            var n2 = e4.field;
            t3[n2] = t3[n2] || [], t3[n2].push(e4);
          }), t3;
        }
        function gc(e3) {
          for (var t3 = arguments.length, n2 = new Array(t3 > 1 ? t3 - 1 : 0), r2 = 1; r2 < t3; r2++)
            n2[r2 - 1] = arguments[r2];
          var o2 = 0, i2 = n2.length;
          if ("function" == typeof e3)
            return e3.apply(null, n2);
          if ("string" == typeof e3) {
            var a2 = e3.replace(pc, function(e4) {
              if ("%%" === e4)
                return "%";
              if (o2 >= i2)
                return e4;
              switch (e4) {
                case "%s":
                  return String(n2[o2++]);
                case "%d":
                  return Number(n2[o2++]);
                case "%j":
                  try {
                    return JSON.stringify(n2[o2++]);
                  } catch (e5) {
                    return "[Circular]";
                  }
                  break;
                default:
                  return e4;
              }
            });
            return a2;
          }
          return e3;
        }
        function hc(e3, t3) {
          return null == e3 || !("array" !== t3 || !Array.isArray(e3) || e3.length) || !(!/* @__PURE__ */ function(e4) {
            return "string" === e4 || "url" === e4 || "hex" === e4 || "email" === e4 || "date" === e4 || "pattern" === e4;
          }(t3) || "string" != typeof e3 || e3);
        }
        function vc(e3, t3, n2) {
          var r2 = 0, o2 = e3.length;
          !function i2(a2) {
            if (a2 && a2.length)
              n2(a2);
            else {
              var s2 = r2;
              r2 += 1, s2 < o2 ? t3(e3[s2], i2) : n2([]);
            }
          }([]);
        }
        "undefined" != typeof process && process.env;
        var bc = function(e3) {
          zr(n2, e3);
          var t3 = Vr(n2);
          function n2(e4, r2) {
            var o2;
            return re(this, n2), I(qr(o2 = t3.call(this, "Async Validation Error")), "errors", void 0), I(qr(o2), "fields", void 0), o2.errors = e4, o2.fields = r2, o2;
          }
          return ie(n2);
        }(fc(Error));
        function yc(e3, t3) {
          return function(n2) {
            var r2, o2;
            return r2 = e3.fullFields ? function(e4, t4) {
              for (var n3 = e4, r3 = 0; r3 < t4.length; r3++) {
                if (null == n3)
                  return n3;
                n3 = n3[t4[r3]];
              }
              return n3;
            }(t3, e3.fullFields) : t3[n2.field || e3.fullField], (o2 = n2) && void 0 !== o2.message ? (n2.field = n2.field || e3.fullField, n2.fieldValue = r2, n2) : { message: "function" == typeof n2 ? n2() : n2, fieldValue: r2, field: n2.field || e3.fullField };
          };
        }
        function Cc(e3, t3) {
          if (t3) {
            for (var n2 in t3)
              if (t3.hasOwnProperty(n2)) {
                var r2 = t3[n2];
                "object" === O(r2) && "object" === O(e3[n2]) ? e3[n2] = R(R({}, e3[n2]), r2) : e3[n2] = r2;
              }
          }
          return e3;
        }
        var wc = "enum";
        const xc = function(e3, t3, n2, r2, o2, i2) {
          !e3.required || n2.hasOwnProperty(e3.field) && !hc(t3, i2 || e3.type) || r2.push(gc(o2.messages.required, e3.fullField));
        };
        var Sc, Ac = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/, Ec = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i, kc = { integer: function(e3) {
          return kc.number(e3) && parseInt(e3, 10) === e3;
        }, float: function(e3) {
          return kc.number(e3) && !kc.integer(e3);
        }, array: function(e3) {
          return Array.isArray(e3);
        }, regexp: function(e3) {
          if (e3 instanceof RegExp)
            return true;
          try {
            return !!new RegExp(e3);
          } catch (e4) {
            return false;
          }
        }, date: function(e3) {
          return "function" == typeof e3.getTime && "function" == typeof e3.getMonth && "function" == typeof e3.getYear && !isNaN(e3.getTime());
        }, number: function(e3) {
          return !isNaN(e3) && "number" == typeof e3;
        }, object: function(e3) {
          return "object" === O(e3) && !kc.array(e3);
        }, method: function(e3) {
          return "function" == typeof e3;
        }, email: function(e3) {
          return "string" == typeof e3 && e3.length <= 320 && !!e3.match(Ac);
        }, url: function(e3) {
          return "string" == typeof e3 && e3.length <= 2048 && !!e3.match(function() {
            if (Sc)
              return Sc;
            var e4 = "[a-fA-F\\d:]", t3 = function(t4) {
              return t4 && t4.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e4, ")|(?<=").concat(e4, ")(?=\\s|$))") : "";
            }, n2 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r2 = "[a-fA-F\\d]{1,4}", o2 = ["(?:".concat(r2, ":){7}(?:").concat(r2, "|:)"), "(?:".concat(r2, ":){6}(?:").concat(n2, "|:").concat(r2, "|:)"), "(?:".concat(r2, ":){5}(?::").concat(n2, "|(?::").concat(r2, "){1,2}|:)"), "(?:".concat(r2, ":){4}(?:(?::").concat(r2, "){0,1}:").concat(n2, "|(?::").concat(r2, "){1,3}|:)"), "(?:".concat(r2, ":){3}(?:(?::").concat(r2, "){0,2}:").concat(n2, "|(?::").concat(r2, "){1,4}|:)"), "(?:".concat(r2, ":){2}(?:(?::").concat(r2, "){0,3}:").concat(n2, "|(?::").concat(r2, "){1,5}|:)"), "(?:".concat(r2, ":){1}(?:(?::").concat(r2, "){0,4}:").concat(n2, "|(?::").concat(r2, "){1,6}|:)"), "(?::(?:(?::".concat(r2, "){0,5}:").concat(n2, "|(?::").concat(r2, "){1,7}|:))")], i2 = "(?:".concat(o2.join("|"), ")").concat("(?:%[0-9a-zA-Z]{1,})?"), a2 = new RegExp("(?:^".concat(n2, "$)|(?:^").concat(i2, "$)")), s2 = new RegExp("^".concat(n2, "$")), l2 = new RegExp("^".concat(i2, "$")), c2 = function(e5) {
              return e5 && e5.exact ? a2 : new RegExp("(?:".concat(t3(e5)).concat(n2).concat(t3(e5), ")|(?:").concat(t3(e5)).concat(i2).concat(t3(e5), ")"), "g");
            };
            c2.v4 = function(e5) {
              return e5 && e5.exact ? s2 : new RegExp("".concat(t3(e5)).concat(n2).concat(t3(e5)), "g");
            }, c2.v6 = function(e5) {
              return e5 && e5.exact ? l2 : new RegExp("".concat(t3(e5)).concat(i2).concat(t3(e5)), "g");
            };
            var u2 = c2.v4().source, d2 = c2.v6().source, f2 = "(?:".concat("(?:(?:[a-z]+:)?//)", "|www\\.)").concat("(?:\\S+(?::\\S*)?@)?", "(?:localhost|").concat(u2, "|").concat(d2, "|").concat("(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)").concat("(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*").concat("(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", ")").concat("(?::\\d{2,5})?").concat('(?:[/?#][^\\s"]*)?');
            return Sc = new RegExp("(?:^".concat(f2, "$)"), "i");
          }());
        }, hex: function(e3) {
          return "string" == typeof e3 && !!e3.match(Ec);
        } };
        const Oc = xc, Pc = function(e3, t3, n2, r2, o2) {
          (/^\s+$/.test(t3) || "" === t3) && r2.push(gc(o2.messages.whitespace, e3.fullField));
        }, Ic = function(e3, t3, n2, r2, o2) {
          if (e3.required && void 0 === t3)
            xc(e3, t3, n2, r2, o2);
          else {
            var i2 = e3.type;
            ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"].indexOf(i2) > -1 ? kc[i2](t3) || r2.push(gc(o2.messages.types[i2], e3.fullField, e3.type)) : i2 && O(t3) !== e3.type && r2.push(gc(o2.messages.types[i2], e3.fullField, e3.type));
          }
        }, jc = function(e3, t3, n2, r2, o2) {
          var i2 = "number" == typeof e3.len, a2 = "number" == typeof e3.min, s2 = "number" == typeof e3.max, l2 = t3, c2 = null, u2 = "number" == typeof t3, d2 = "string" == typeof t3, f2 = Array.isArray(t3);
          if (u2 ? c2 = "number" : d2 ? c2 = "string" : f2 && (c2 = "array"), !c2)
            return false;
          f2 && (l2 = t3.length), d2 && (l2 = t3.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length), i2 ? l2 !== e3.len && r2.push(gc(o2.messages[c2].len, e3.fullField, e3.len)) : a2 && !s2 && l2 < e3.min ? r2.push(gc(o2.messages[c2].min, e3.fullField, e3.min)) : s2 && !a2 && l2 > e3.max ? r2.push(gc(o2.messages[c2].max, e3.fullField, e3.max)) : a2 && s2 && (l2 < e3.min || l2 > e3.max) && r2.push(gc(o2.messages[c2].range, e3.fullField, e3.min, e3.max));
        }, $c = function(e3, t3, n2, r2, o2) {
          e3[wc] = Array.isArray(e3[wc]) ? e3[wc] : [], -1 === e3[wc].indexOf(t3) && r2.push(gc(o2.messages[wc], e3.fullField, e3[wc].join(", ")));
        }, Nc = function(e3, t3, n2, r2, o2) {
          e3.pattern && (e3.pattern instanceof RegExp ? (e3.pattern.lastIndex = 0, e3.pattern.test(t3) || r2.push(gc(o2.messages.pattern.mismatch, e3.fullField, t3, e3.pattern))) : "string" == typeof e3.pattern && (new RegExp(e3.pattern).test(t3) || r2.push(gc(o2.messages.pattern.mismatch, e3.fullField, t3, e3.pattern))));
        }, Mc = function(e3, t3, n2, r2, o2) {
          var i2 = e3.type, a2 = [];
          if (e3.required || !e3.required && r2.hasOwnProperty(e3.field)) {
            if (hc(t3, i2) && !e3.required)
              return n2();
            Oc(e3, t3, r2, a2, o2, i2), hc(t3, i2) || Ic(e3, t3, r2, a2, o2);
          }
          n2(a2);
        }, Rc = { string: function(e3, t3, n2, r2, o2) {
          var i2 = [];
          if (e3.required || !e3.required && r2.hasOwnProperty(e3.field)) {
            if (hc(t3, "string") && !e3.required)
              return n2();
            Oc(e3, t3, r2, i2, o2, "string"), hc(t3, "string") || (Ic(e3, t3, r2, i2, o2), jc(e3, t3, r2, i2, o2), Nc(e3, t3, r2, i2, o2), true === e3.whitespace && Pc(e3, t3, r2, i2, o2));
          }
          n2(i2);
        }, method: function(e3, t3, n2, r2, o2) {
          var i2 = [];
          if (e3.required || !e3.required && r2.hasOwnProperty(e3.field)) {
            if (hc(t3) && !e3.required)
              return n2();
            Oc(e3, t3, r2, i2, o2), void 0 !== t3 && Ic(e3, t3, r2, i2, o2);
          }
          n2(i2);
        }, number: function(e3, t3, n2, r2, o2) {
          var i2 = [];
          if (e3.required || !e3.required && r2.hasOwnProperty(e3.field)) {
            if ("" === t3 && (t3 = void 0), hc(t3) && !e3.required)
              return n2();
            Oc(e3, t3, r2, i2, o2), void 0 !== t3 && (Ic(e3, t3, r2, i2, o2), jc(e3, t3, r2, i2, o2));
          }
          n2(i2);
        }, boolean: function(e3, t3, n2, r2, o2) {
          var i2 = [];
          if (e3.required || !e3.required && r2.hasOwnProperty(e3.field)) {
            if (hc(t3) && !e3.required)
              return n2();
            Oc(e3, t3, r2, i2, o2), void 0 !== t3 && Ic(e3, t3, r2, i2, o2);
          }
          n2(i2);
        }, regexp: function(e3, t3, n2, r2, o2) {
          var i2 = [];
          if (e3.required || !e3.required && r2.hasOwnProperty(e3.field)) {
            if (hc(t3) && !e3.required)
              return n2();
            Oc(e3, t3, r2, i2, o2), hc(t3) || Ic(e3, t3, r2, i2, o2);
          }
          n2(i2);
        }, integer: function(e3, t3, n2, r2, o2) {
          var i2 = [];
          if (e3.required || !e3.required && r2.hasOwnProperty(e3.field)) {
            if (hc(t3) && !e3.required)
              return n2();
            Oc(e3, t3, r2, i2, o2), void 0 !== t3 && (Ic(e3, t3, r2, i2, o2), jc(e3, t3, r2, i2, o2));
          }
          n2(i2);
        }, float: function(e3, t3, n2, r2, o2) {
          var i2 = [];
          if (e3.required || !e3.required && r2.hasOwnProperty(e3.field)) {
            if (hc(t3) && !e3.required)
              return n2();
            Oc(e3, t3, r2, i2, o2), void 0 !== t3 && (Ic(e3, t3, r2, i2, o2), jc(e3, t3, r2, i2, o2));
          }
          n2(i2);
        }, array: function(e3, t3, n2, r2, o2) {
          var i2 = [];
          if (e3.required || !e3.required && r2.hasOwnProperty(e3.field)) {
            if (null == t3 && !e3.required)
              return n2();
            Oc(e3, t3, r2, i2, o2, "array"), null != t3 && (Ic(e3, t3, r2, i2, o2), jc(e3, t3, r2, i2, o2));
          }
          n2(i2);
        }, object: function(e3, t3, n2, r2, o2) {
          var i2 = [];
          if (e3.required || !e3.required && r2.hasOwnProperty(e3.field)) {
            if (hc(t3) && !e3.required)
              return n2();
            Oc(e3, t3, r2, i2, o2), void 0 !== t3 && Ic(e3, t3, r2, i2, o2);
          }
          n2(i2);
        }, enum: function(e3, t3, n2, r2, o2) {
          var i2 = [];
          if (e3.required || !e3.required && r2.hasOwnProperty(e3.field)) {
            if (hc(t3) && !e3.required)
              return n2();
            Oc(e3, t3, r2, i2, o2), void 0 !== t3 && $c(e3, t3, r2, i2, o2);
          }
          n2(i2);
        }, pattern: function(e3, t3, n2, r2, o2) {
          var i2 = [];
          if (e3.required || !e3.required && r2.hasOwnProperty(e3.field)) {
            if (hc(t3, "string") && !e3.required)
              return n2();
            Oc(e3, t3, r2, i2, o2), hc(t3, "string") || Nc(e3, t3, r2, i2, o2);
          }
          n2(i2);
        }, date: function(e3, t3, n2, r2, o2) {
          var i2 = [];
          if (e3.required || !e3.required && r2.hasOwnProperty(e3.field)) {
            if (hc(t3, "date") && !e3.required)
              return n2();
            var a2;
            Oc(e3, t3, r2, i2, o2), hc(t3, "date") || (a2 = t3 instanceof Date ? t3 : new Date(t3), Ic(e3, a2, r2, i2, o2), a2 && jc(e3, a2.getTime(), r2, i2, o2));
          }
          n2(i2);
        }, url: Mc, hex: Mc, email: Mc, required: function(e3, t3, n2, r2, o2) {
          var i2 = [], a2 = Array.isArray(t3) ? "array" : O(t3);
          Oc(e3, t3, r2, i2, o2, a2), n2(i2);
        }, any: function(e3, t3, n2, r2, o2) {
          var i2 = [];
          if (e3.required || !e3.required && r2.hasOwnProperty(e3.field)) {
            if (hc(t3) && !e3.required)
              return n2();
            Oc(e3, t3, r2, i2, o2);
          }
          n2(i2);
        } };
        var Bc = function() {
          function e3(t3) {
            re(this, e3), I(this, "rules", null), I(this, "_messages", dc), this.define(t3);
          }
          return ie(e3, [{ key: "define", value: function(e4) {
            var t3 = this;
            if (!e4)
              throw new Error("Cannot configure a schema with no rules");
            if ("object" !== O(e4) || Array.isArray(e4))
              throw new Error("Rules must be an object");
            this.rules = {}, Object.keys(e4).forEach(function(n2) {
              var r2 = e4[n2];
              t3.rules[n2] = Array.isArray(r2) ? r2 : [r2];
            });
          } }, { key: "messages", value: function(e4) {
            return e4 && (this._messages = Cc(uc(), e4)), this._messages;
          } }, { key: "validate", value: function(t3) {
            var n2 = this, r2 = t3, o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
            };
            if ("function" == typeof o2 && (i2 = o2, o2 = {}), !this.rules || 0 === Object.keys(this.rules).length)
              return i2 && i2(null, r2), Promise.resolve(r2);
            if (o2.messages) {
              var a2 = this.messages();
              a2 === dc && (a2 = uc()), Cc(a2, o2.messages), o2.messages = a2;
            } else
              o2.messages = this.messages();
            var s2 = {};
            (o2.keys || Object.keys(this.rules)).forEach(function(e4) {
              var o3 = n2.rules[e4], i3 = r2[e4];
              o3.forEach(function(o4) {
                var a3 = o4;
                "function" == typeof a3.transform && (r2 === t3 && (r2 = R({}, r2)), null != (i3 = r2[e4] = a3.transform(i3)) && (a3.type = a3.type || (Array.isArray(i3) ? "array" : O(i3)))), (a3 = "function" == typeof a3 ? { validator: a3 } : R({}, a3)).validator = n2.getValidationMethod(a3), a3.validator && (a3.field = e4, a3.fullField = a3.fullField || e4, a3.type = n2.getType(a3), s2[e4] = s2[e4] || [], s2[e4].push({ rule: a3, value: i3, source: r2, field: e4 }));
              });
            });
            var l2 = {};
            return function(e4, t4, n3, r3, o3) {
              if (t4.first) {
                var i3 = new Promise(function(t5, i4) {
                  var a4 = function(e5) {
                    var t6 = [];
                    return Object.keys(e5).forEach(function(n4) {
                      t6.push.apply(t6, x(e5[n4] || []));
                    }), t6;
                  }(e4);
                  vc(a4, n3, function(e5) {
                    return r3(e5), e5.length ? i4(new bc(e5, mc(e5))) : t5(o3);
                  });
                });
                return i3.catch(function(e5) {
                  return e5;
                }), i3;
              }
              var a3 = true === t4.firstFields ? Object.keys(e4) : t4.firstFields || [], s3 = Object.keys(e4), l3 = s3.length, c2 = 0, u2 = [], d2 = new Promise(function(t5, i4) {
                var d3 = function(e5) {
                  if (u2.push.apply(u2, e5), ++c2 === l3)
                    return r3(u2), u2.length ? i4(new bc(u2, mc(u2))) : t5(o3);
                };
                s3.length || (r3(u2), t5(o3)), s3.forEach(function(t6) {
                  var r4 = e4[t6];
                  -1 !== a3.indexOf(t6) ? vc(r4, n3, d3) : function(e5, t7, n4) {
                    var r5 = [], o4 = 0, i5 = e5.length;
                    function a4(e6) {
                      r5.push.apply(r5, x(e6 || [])), ++o4 === i5 && n4(r5);
                    }
                    e5.forEach(function(e6) {
                      t7(e6, a4);
                    });
                  }(r4, n3, d3);
                });
              });
              return d2.catch(function(e5) {
                return e5;
              }), d2;
            }(s2, o2, function(t4, n3) {
              var i3, a3 = t4.rule, s3 = !("object" !== a3.type && "array" !== a3.type || "object" !== O(a3.fields) && "object" !== O(a3.defaultField));
              function c2(e4, t5) {
                return R(R({}, t5), {}, { fullField: "".concat(a3.fullField, ".").concat(e4), fullFields: a3.fullFields ? [].concat(x(a3.fullFields), [e4]) : [e4] });
              }
              function u2() {
                var i4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], u3 = Array.isArray(i4) ? i4 : [i4];
                !o2.suppressWarning && u3.length && e3.warning("async-validator:", u3), u3.length && void 0 !== a3.message && (u3 = [].concat(a3.message));
                var d3 = u3.map(yc(a3, r2));
                if (o2.first && d3.length)
                  return l2[a3.field] = 1, n3(d3);
                if (s3) {
                  if (a3.required && !t4.value)
                    return void 0 !== a3.message ? d3 = [].concat(a3.message).map(yc(a3, r2)) : o2.error && (d3 = [o2.error(a3, gc(o2.messages.required, a3.field))]), n3(d3);
                  var f3 = {};
                  a3.defaultField && Object.keys(t4.value).map(function(e4) {
                    f3[e4] = a3.defaultField;
                  }), f3 = R(R({}, f3), t4.rule.fields);
                  var p2 = {};
                  Object.keys(f3).forEach(function(e4) {
                    var t5 = f3[e4], n4 = Array.isArray(t5) ? t5 : [t5];
                    p2[e4] = n4.map(c2.bind(null, e4));
                  });
                  var m2 = new e3(p2);
                  m2.messages(o2.messages), t4.rule.options && (t4.rule.options.messages = o2.messages, t4.rule.options.error = o2.error), m2.validate(t4.value, t4.rule.options || o2, function(e4) {
                    var t5 = [];
                    d3 && d3.length && t5.push.apply(t5, x(d3)), e4 && e4.length && t5.push.apply(t5, x(e4)), n3(t5.length ? t5 : null);
                  });
                } else
                  n3(d3);
              }
              if (s3 = s3 && (a3.required || !a3.required && t4.value), a3.field = t4.field, a3.asyncValidator)
                i3 = a3.asyncValidator(a3, t4.value, u2, t4.source, o2);
              else if (a3.validator) {
                try {
                  i3 = a3.validator(a3, t4.value, u2, t4.source, o2);
                } catch (e4) {
                  var d2, f2;
                  null === (d2 = (f2 = console).error) || void 0 === d2 || d2.call(f2, e4), o2.suppressValidatorError || setTimeout(function() {
                    throw e4;
                  }, 0), u2(e4.message);
                }
                true === i3 ? u2() : false === i3 ? u2("function" == typeof a3.message ? a3.message(a3.fullField || a3.field) : a3.message || "".concat(a3.fullField || a3.field, " fails")) : i3 instanceof Array ? u2(i3) : i3 instanceof Error && u2(i3.message);
              }
              i3 && i3.then && i3.then(function() {
                return u2();
              }, function(e4) {
                return u2(e4);
              });
            }, function(e4) {
              !function(e5) {
                var t4, n3, o3 = [], a3 = {};
                for (var s3 = 0; s3 < e5.length; s3++)
                  t4 = e5[s3], n3 = void 0, Array.isArray(t4) ? o3 = (n3 = o3).concat.apply(n3, x(t4)) : o3.push(t4);
                o3.length ? (a3 = mc(o3), i2(o3, a3)) : i2(null, r2);
              }(e4);
            }, r2);
          } }, { key: "getType", value: function(e4) {
            if (void 0 === e4.type && e4.pattern instanceof RegExp && (e4.type = "pattern"), "function" != typeof e4.validator && e4.type && !Rc.hasOwnProperty(e4.type))
              throw new Error(gc("Unknown rule type %s", e4.type));
            return e4.type || "string";
          } }, { key: "getValidationMethod", value: function(e4) {
            if ("function" == typeof e4.validator)
              return e4.validator;
            var t3 = Object.keys(e4), n2 = t3.indexOf("message");
            return -1 !== n2 && t3.splice(n2, 1), 1 === t3.length && "required" === t3[0] ? Rc.required : Rc[this.getType(e4)] || void 0;
          } }]), e3;
        }();
        I(Bc, "register", function(e3, t3) {
          if ("function" != typeof t3)
            throw new Error("Cannot register a validator by type, validator is not a function");
          Rc[e3] = t3;
        }), I(Bc, "warning", function() {
        }), I(Bc, "messages", dc), I(Bc, "validators", Rc);
        var Tc = "'${name}' is not a valid ${type}", Fc = { default: "Validation error on field '${name}'", required: "'${name}' is required", enum: "'${name}' must be one of [${enum}]", whitespace: "'${name}' cannot be empty", date: { format: "'${name}' is invalid for format date", parse: "'${name}' could not be parsed as date", invalid: "'${name}' is invalid date" }, types: { string: Tc, method: Tc, array: Tc, object: Tc, number: Tc, date: Tc, boolean: Tc, integer: Tc, float: Tc, regexp: Tc, email: Tc, url: Tc, hex: Tc }, string: { len: "'${name}' must be exactly ${len} characters", min: "'${name}' must be at least ${min} characters", max: "'${name}' cannot be longer than ${max} characters", range: "'${name}' must be between ${min} and ${max} characters" }, number: { len: "'${name}' must equal ${len}", min: "'${name}' cannot be less than ${min}", max: "'${name}' cannot be greater than ${max}", range: "'${name}' must be between ${min} and ${max}" }, array: { len: "'${name}' must be exactly ${len} in length", min: "'${name}' cannot be less than ${min} in length", max: "'${name}' cannot be greater than ${max} in length", range: "'${name}' must be between ${min} and ${max} in length" }, pattern: { mismatch: "'${name}' does not match pattern ${pattern}" } }, Lc = Bc;
        function zc(e3, t3) {
          return e3.replace(/\\?\$\{\w+\}/g, function(e4) {
            if (e4.startsWith("\\"))
              return e4.slice(1);
            var n2 = e4.slice(2, -1);
            return t3[n2];
          });
        }
        var Hc = "CODE_LOGIC_ERROR";
        function Dc(e3, t3, n2, r2, o2) {
          return qc.apply(this, arguments);
        }
        function qc() {
          return qc = xi(Ci().mark(function e3(n2, r2, o2, i2, a2) {
            var s2, l2, c2, u2, d2, f2, p2, m2, g2;
            return Ci().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return delete (s2 = R({}, o2)).ruleIndex, Lc.warning = function() {
                    }, s2.validator && (l2 = s2.validator, s2.validator = function() {
                      try {
                        return l2.apply(void 0, arguments);
                      } catch (e5) {
                        return console.error(e5), Promise.reject(Hc);
                      }
                    }), c2 = null, s2 && "array" === s2.type && s2.defaultField && (c2 = s2.defaultField, delete s2.defaultField), u2 = new Lc(I({}, n2, [s2])), d2 = Qt(Fc, i2.validateMessages), u2.messages(d2), f2 = [], e4.prev = 10, e4.next = 13, Promise.resolve(u2.validate(I({}, n2, r2), R({}, i2)));
                  case 13:
                    e4.next = 18;
                    break;
                  case 15:
                    e4.prev = 15, e4.t0 = e4.catch(10), e4.t0.errors && (f2 = e4.t0.errors.map(function(e5, n3) {
                      var r3 = e5.message, o3 = r3 === Hc ? d2.default : r3;
                      return t2.isValidElement(o3) ? t2.cloneElement(o3, { key: "error_".concat(n3) }) : o3;
                    }));
                  case 18:
                    if (f2.length || !c2) {
                      e4.next = 23;
                      break;
                    }
                    return e4.next = 21, Promise.all(r2.map(function(e5, t3) {
                      return Dc("".concat(n2, ".").concat(t3), e5, c2, i2, a2);
                    }));
                  case 21:
                    return p2 = e4.sent, e4.abrupt("return", p2.reduce(function(e5, t3) {
                      return [].concat(x(e5), x(t3));
                    }, []));
                  case 23:
                    return m2 = R(R({}, o2), {}, { name: n2, enum: (o2.enum || []).join(", ") }, a2), g2 = f2.map(function(e5) {
                      return "string" == typeof e5 ? zc(e5, m2) : e5;
                    }), e4.abrupt("return", g2);
                  case 26:
                  case "end":
                    return e4.stop();
                }
            }, e3, null, [[10, 15]]);
          })), qc.apply(this, arguments);
        }
        function Vc(e3, t3, n2, r2, o2, i2) {
          var a2, s2 = e3.join("."), l2 = n2.map(function(e4, t4) {
            var n3 = e4.validator, r3 = R(R({}, e4), {}, { ruleIndex: t4 });
            return n3 && (r3.validator = function(e5, t5, r4) {
              var o3 = false, i3 = n3(e5, t5, function() {
                for (var e6 = arguments.length, t6 = new Array(e6), n4 = 0; n4 < e6; n4++)
                  t6[n4] = arguments[n4];
                Promise.resolve().then(function() {
                  te(!o3, "Your validator function has already return a promise. `callback` will be ignored."), o3 || r4.apply(void 0, t6);
                });
              });
              o3 = i3 && "function" == typeof i3.then && "function" == typeof i3.catch, te(o3, "`callback` is deprecated. Please return a promise instead."), o3 && i3.then(function() {
                r4();
              }).catch(function(e6) {
                r4(e6 || " ");
              });
            }), r3;
          }).sort(function(e4, t4) {
            var n3 = e4.warningOnly, r3 = e4.ruleIndex, o3 = t4.warningOnly, i3 = t4.ruleIndex;
            return !!n3 == !!o3 ? r3 - i3 : n3 ? 1 : -1;
          });
          if (true === o2)
            a2 = new Promise(function() {
              var e4 = xi(Ci().mark(function e5(n3, o3) {
                var a3, c3, u2;
                return Ci().wrap(function(e6) {
                  for (; ; )
                    switch (e6.prev = e6.next) {
                      case 0:
                        a3 = 0;
                      case 1:
                        if (!(a3 < l2.length)) {
                          e6.next = 12;
                          break;
                        }
                        return c3 = l2[a3], e6.next = 5, Dc(s2, t3, c3, r2, i2);
                      case 5:
                        if (!(u2 = e6.sent).length) {
                          e6.next = 9;
                          break;
                        }
                        return o3([{ errors: u2, rule: c3 }]), e6.abrupt("return");
                      case 9:
                        a3 += 1, e6.next = 1;
                        break;
                      case 12:
                        n3([]);
                      case 13:
                      case "end":
                        return e6.stop();
                    }
                }, e5);
              }));
              return function(t4, n3) {
                return e4.apply(this, arguments);
              };
            }());
          else {
            var c2 = l2.map(function(e4) {
              return Dc(s2, t3, e4, r2, i2).then(function(t4) {
                return { errors: t4, rule: e4 };
              });
            });
            a2 = (o2 ? function(e4) {
              return Kc.apply(this, arguments);
            }(c2) : function(e4) {
              return Wc.apply(this, arguments);
            }(c2)).then(function(e4) {
              return Promise.reject(e4);
            });
          }
          return a2.catch(function(e4) {
            return e4;
          }), a2;
        }
        function Wc() {
          return (Wc = xi(Ci().mark(function e3(t3) {
            return Ci().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return e4.abrupt("return", Promise.all(t3).then(function(e5) {
                      var t4;
                      return (t4 = []).concat.apply(t4, x(e5));
                    }));
                  case 1:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        function Kc() {
          return (Kc = xi(Ci().mark(function e3(t3) {
            var n2;
            return Ci().wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return n2 = 0, e4.abrupt("return", new Promise(function(e5) {
                      t3.forEach(function(r2) {
                        r2.then(function(r3) {
                          r3.errors.length && e5([r3]), (n2 += 1) === t3.length && e5([]);
                        });
                      });
                    }));
                  case 2:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          }))).apply(this, arguments);
        }
        function Gc(e3) {
          return cc(e3);
        }
        function Xc(e3, t3) {
          var n2 = {};
          return t3.forEach(function(t4) {
            var r2 = Kt(e3, t4);
            n2 = Xt(n2, t4, r2);
          }), n2;
        }
        function Uc(e3, t3) {
          var n2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return e3 && e3.some(function(e4) {
            return _c(t3, e4, n2);
          });
        }
        function _c(e3, t3) {
          return !(!e3 || !t3) && !(!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) && e3.length !== t3.length) && t3.every(function(t4, n2) {
            return e3[n2] === t4;
          });
        }
        function Qc(e3) {
          var t3 = arguments.length <= 1 ? void 0 : arguments[1];
          return t3 && t3.target && "object" === O(t3.target) && e3 in t3.target ? t3.target[e3] : t3;
        }
        function Yc(e3, t3, n2) {
          var r2 = e3.length;
          if (t3 < 0 || t3 >= r2 || n2 < 0 || n2 >= r2)
            return e3;
          var o2 = e3[t3], i2 = t3 - n2;
          return i2 > 0 ? [].concat(x(e3.slice(0, n2)), [o2], x(e3.slice(n2, t3)), x(e3.slice(t3 + 1, r2))) : i2 < 0 ? [].concat(x(e3.slice(0, t3)), x(e3.slice(t3 + 1, n2 + 1)), [o2], x(e3.slice(n2 + 1, r2))) : e3;
        }
        var Zc = ["name"], Jc = [];
        function eu(e3, t3, n2, r2, o2, i2) {
          return "function" == typeof e3 ? e3(t3, n2, "source" in i2 ? { source: i2.source } : {}) : r2 !== o2;
        }
        var tu = function(e3) {
          zr(r2, e3);
          var n2 = Vr(r2);
          function r2(e4) {
            var o2;
            return re(this, r2), I(qr(o2 = n2.call(this, e4)), "state", { resetCount: 0 }), I(qr(o2), "cancelRegisterFunc", null), I(qr(o2), "mounted", false), I(qr(o2), "touched", false), I(qr(o2), "dirty", false), I(qr(o2), "validatePromise", void 0), I(qr(o2), "prevValidating", void 0), I(qr(o2), "errors", Jc), I(qr(o2), "warnings", Jc), I(qr(o2), "cancelRegister", function() {
              var e5 = o2.props, t3 = e5.preserve, n3 = e5.isListField, r3 = e5.name;
              o2.cancelRegisterFunc && o2.cancelRegisterFunc(n3, t3, Gc(r3)), o2.cancelRegisterFunc = null;
            }), I(qr(o2), "getNamePath", function() {
              var e5 = o2.props, t3 = e5.name, n3 = e5.fieldContext.prefixName;
              return void 0 !== t3 ? [].concat(x(void 0 === n3 ? [] : n3), x(t3)) : [];
            }), I(qr(o2), "getRules", function() {
              var e5 = o2.props, t3 = e5.rules, n3 = void 0 === t3 ? [] : t3, r3 = e5.fieldContext;
              return n3.map(function(e6) {
                return "function" == typeof e6 ? e6(r3) : e6;
              });
            }), I(qr(o2), "refresh", function() {
              o2.mounted && o2.setState(function(e5) {
                return { resetCount: e5.resetCount + 1 };
              });
            }), I(qr(o2), "metaCache", null), I(qr(o2), "triggerMetaEvent", function(e5) {
              var t3 = o2.props.onMetaChange;
              if (t3) {
                var n3 = R(R({}, o2.getMeta()), {}, { destroy: e5 });
                ne(o2.metaCache, n3) || t3(n3), o2.metaCache = n3;
              } else
                o2.metaCache = null;
            }), I(qr(o2), "onStoreChange", function(e5, t3, n3) {
              var r3 = o2.props, i2 = r3.shouldUpdate, a2 = r3.dependencies, s2 = void 0 === a2 ? [] : a2, l2 = r3.onReset, c2 = n3.store, u2 = o2.getNamePath(), d2 = o2.getValue(e5), f2 = o2.getValue(c2), p2 = t3 && Uc(t3, u2);
              switch ("valueUpdate" !== n3.type || "external" !== n3.source || ne(d2, f2) || (o2.touched = true, o2.dirty = true, o2.validatePromise = null, o2.errors = Jc, o2.warnings = Jc, o2.triggerMetaEvent()), n3.type) {
                case "reset":
                  if (!t3 || p2)
                    return o2.touched = false, o2.dirty = false, o2.validatePromise = void 0, o2.errors = Jc, o2.warnings = Jc, o2.triggerMetaEvent(), null == l2 || l2(), void o2.refresh();
                  break;
                case "remove":
                  if (i2 && eu(i2, e5, c2, d2, f2, n3))
                    return void o2.reRender();
                  break;
                case "setField":
                  var m2 = n3.data;
                  if (p2)
                    return "touched" in m2 && (o2.touched = m2.touched), "validating" in m2 && !("originRCField" in m2) && (o2.validatePromise = m2.validating ? Promise.resolve([]) : null), "errors" in m2 && (o2.errors = m2.errors || Jc), "warnings" in m2 && (o2.warnings = m2.warnings || Jc), o2.dirty = true, o2.triggerMetaEvent(), void o2.reRender();
                  if ("value" in m2 && Uc(t3, u2, true))
                    return void o2.reRender();
                  if (i2 && !u2.length && eu(i2, e5, c2, d2, f2, n3))
                    return void o2.reRender();
                  break;
                case "dependenciesUpdate":
                  if (s2.map(Gc).some(function(e6) {
                    return Uc(n3.relatedFields, e6);
                  }))
                    return void o2.reRender();
                  break;
                default:
                  if (p2 || (!s2.length || u2.length || i2) && eu(i2, e5, c2, d2, f2, n3))
                    return void o2.reRender();
              }
              true === i2 && o2.reRender();
            }), I(qr(o2), "validateRules", function(e5) {
              var t3 = o2.getNamePath(), n3 = o2.getValue(), r3 = e5 || {}, i2 = r3.triggerName, a2 = r3.validateOnly, s2 = void 0 !== a2 && a2, l2 = Promise.resolve().then(xi(Ci().mark(function r4() {
                var a3, s3, c2, u2, d2, f2, p2;
                return Ci().wrap(function(r5) {
                  for (; ; )
                    switch (r5.prev = r5.next) {
                      case 0:
                        if (o2.mounted) {
                          r5.next = 2;
                          break;
                        }
                        return r5.abrupt("return", []);
                      case 2:
                        if (a3 = o2.props, s3 = a3.validateFirst, c2 = void 0 !== s3 && s3, u2 = a3.messageVariables, d2 = a3.validateDebounce, f2 = o2.getRules(), i2 && (f2 = f2.filter(function(e6) {
                          return e6;
                        }).filter(function(e6) {
                          var t4 = e6.validateTrigger;
                          return !t4 || cc(t4).includes(i2);
                        })), !d2 || !i2) {
                          r5.next = 10;
                          break;
                        }
                        return r5.next = 8, new Promise(function(e6) {
                          setTimeout(e6, d2);
                        });
                      case 8:
                        if (o2.validatePromise === l2) {
                          r5.next = 10;
                          break;
                        }
                        return r5.abrupt("return", []);
                      case 10:
                        return (p2 = Vc(t3, n3, f2, e5, c2, u2)).catch(function(e6) {
                          return e6;
                        }).then(function() {
                          var e6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jc;
                          if (o2.validatePromise === l2) {
                            var t4;
                            o2.validatePromise = null;
                            var n4 = [], r6 = [];
                            null === (t4 = e6.forEach) || void 0 === t4 || t4.call(e6, function(e7) {
                              var t5 = e7.rule.warningOnly, o3 = e7.errors, i3 = void 0 === o3 ? Jc : o3;
                              t5 ? r6.push.apply(r6, x(i3)) : n4.push.apply(n4, x(i3));
                            }), o2.errors = n4, o2.warnings = r6, o2.triggerMetaEvent(), o2.reRender();
                          }
                        }), r5.abrupt("return", p2);
                      case 13:
                      case "end":
                        return r5.stop();
                    }
                }, r4);
              })));
              return s2 || (o2.validatePromise = l2, o2.dirty = true, o2.errors = Jc, o2.warnings = Jc, o2.triggerMetaEvent(), o2.reRender()), l2;
            }), I(qr(o2), "isFieldValidating", function() {
              return !!o2.validatePromise;
            }), I(qr(o2), "isFieldTouched", function() {
              return o2.touched;
            }), I(qr(o2), "isFieldDirty", function() {
              return !(!o2.dirty && void 0 === o2.props.initialValue) || void 0 !== (0, o2.props.fieldContext.getInternalHooks(ic).getInitialValue)(o2.getNamePath());
            }), I(qr(o2), "getErrors", function() {
              return o2.errors;
            }), I(qr(o2), "getWarnings", function() {
              return o2.warnings;
            }), I(qr(o2), "isListField", function() {
              return o2.props.isListField;
            }), I(qr(o2), "isList", function() {
              return o2.props.isList;
            }), I(qr(o2), "isPreserve", function() {
              return o2.props.preserve;
            }), I(qr(o2), "getMeta", function() {
              return o2.prevValidating = o2.isFieldValidating(), { touched: o2.isFieldTouched(), validating: o2.prevValidating, errors: o2.errors, warnings: o2.warnings, name: o2.getNamePath(), validated: null === o2.validatePromise };
            }), I(qr(o2), "getOnlyChild", function(e5) {
              if ("function" == typeof e5) {
                var n3 = o2.getMeta();
                return R(R({}, o2.getOnlyChild(e5(o2.getControlled(), n3, o2.props.fieldContext))), {}, { isFunction: true });
              }
              var r3 = ts(e5);
              return 1 === r3.length && t2.isValidElement(r3[0]) ? { child: r3[0], isFunction: false } : { child: r3, isFunction: false };
            }), I(qr(o2), "getValue", function(e5) {
              var t3 = o2.props.fieldContext.getFieldsValue, n3 = o2.getNamePath();
              return Kt(e5 || t3(true), n3);
            }), I(qr(o2), "getControlled", function() {
              var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t3 = o2.props, n3 = t3.name, r3 = t3.trigger, i2 = t3.validateTrigger, a2 = t3.getValueFromEvent, s2 = t3.normalize, l2 = t3.valuePropName, c2 = t3.getValueProps, u2 = t3.fieldContext, d2 = void 0 !== i2 ? i2 : u2.validateTrigger, f2 = o2.getNamePath(), p2 = u2.getInternalHooks, m2 = u2.getFieldsValue, g2 = p2(ic).dispatch, h2 = o2.getValue(), v2 = c2 || function(e6) {
                return I({}, l2, e6);
              }, b2 = e5[r3], y2 = void 0 !== n3 ? v2(h2) : {}, C2 = R(R({}, e5), y2);
              return C2[r3] = function() {
                var e6;
                o2.touched = true, o2.dirty = true, o2.triggerMetaEvent();
                for (var t4 = arguments.length, n4 = new Array(t4), r4 = 0; r4 < t4; r4++)
                  n4[r4] = arguments[r4];
                e6 = a2 ? a2.apply(void 0, n4) : Qc.apply(void 0, [l2].concat(n4)), s2 && (e6 = s2(e6, h2, m2(true))), e6 !== h2 && g2({ type: "updateValue", namePath: f2, value: e6 }), b2 && b2.apply(void 0, n4);
              }, cc(d2 || []).forEach(function(e6) {
                var t4 = C2[e6];
                C2[e6] = function() {
                  t4 && t4.apply(void 0, arguments);
                  var n4 = o2.props.rules;
                  n4 && n4.length && g2({ type: "validateField", namePath: f2, triggerName: e6 });
                };
              }), C2;
            }), e4.fieldContext && (0, (0, e4.fieldContext.getInternalHooks)(ic).initEntityValue)(qr(o2)), o2;
          }
          return ie(r2, [{ key: "componentDidMount", value: function() {
            var e4 = this.props, t3 = e4.shouldUpdate, n3 = e4.fieldContext;
            if (this.mounted = true, n3) {
              var r3 = (0, n3.getInternalHooks)(ic).registerField;
              this.cancelRegisterFunc = r3(this);
            }
            true === t3 && this.reRender();
          } }, { key: "componentWillUnmount", value: function() {
            this.cancelRegister(), this.triggerMetaEvent(true), this.mounted = false;
          } }, { key: "reRender", value: function() {
            this.mounted && this.forceUpdate();
          } }, { key: "render", value: function() {
            var e4, n3 = this.state.resetCount, r3 = this.props.children, o2 = this.getOnlyChild(r3), i2 = o2.child;
            return o2.isFunction ? e4 = i2 : t2.isValidElement(i2) ? e4 = t2.cloneElement(i2, this.getControlled(i2.props)) : (te(!i2, "`children` of Field is not validate ReactElement."), e4 = i2), t2.createElement(t2.Fragment, { key: n3 }, e4);
          } }]), r2;
        }(t2.Component);
        I(tu, "contextType", sc), I(tu, "defaultProps", { trigger: "onChange", valuePropName: "value" });
        const nu = function(e3) {
          var n2, r2 = e3.name, o2 = Rr(e3, Zc), i2 = t2.useContext(sc), a2 = t2.useContext(lc), s2 = void 0 !== r2 ? Gc(r2) : void 0, l2 = null !== (n2 = o2.isListField) && void 0 !== n2 ? n2 : !!a2, c2 = "keep";
          return l2 || (c2 = "_".concat((s2 || []).join("_"))), t2.createElement(tu, qe({ key: c2, name: s2, isListField: l2 }, o2, { fieldContext: i2 }));
        };
        var ru = "__@field_split__";
        function ou(e3) {
          return e3.map(function(e4) {
            return "".concat(O(e4), ":").concat(e4);
          }).join(ru);
        }
        var iu = function() {
          function e3() {
            re(this, e3), I(this, "kvs", /* @__PURE__ */ new Map());
          }
          return ie(e3, [{ key: "set", value: function(e4, t3) {
            this.kvs.set(ou(e4), t3);
          } }, { key: "get", value: function(e4) {
            return this.kvs.get(ou(e4));
          } }, { key: "update", value: function(e4, t3) {
            var n2 = t3(this.get(e4));
            n2 ? this.set(e4, n2) : this.delete(e4);
          } }, { key: "delete", value: function(e4) {
            this.kvs.delete(ou(e4));
          } }, { key: "map", value: function(e4) {
            return x(this.kvs.entries()).map(function(t3) {
              var n2 = N(t3, 2), r2 = n2[0], o2 = n2[1], i2 = r2.split(ru);
              return e4({ key: i2.map(function(e5) {
                var t4 = N(e5.match(/^([^:]*):(.*)$/), 3), n3 = t4[1], r3 = t4[2];
                return "number" === n3 ? Number(r3) : r3;
              }), value: o2 });
            });
          } }, { key: "toJSON", value: function() {
            var e4 = {};
            return this.map(function(t3) {
              var n2 = t3.key, r2 = t3.value;
              return e4[n2.join(".")] = r2, null;
            }), e4;
          } }]), e3;
        }();
        const au = iu;
        var su = ["name"], lu = ie(function e3(t3) {
          var n2 = this;
          re(this, e3), I(this, "formHooked", false), I(this, "forceRootUpdate", void 0), I(this, "subscribable", true), I(this, "store", {}), I(this, "fieldEntities", []), I(this, "initialValues", {}), I(this, "callbacks", {}), I(this, "validateMessages", null), I(this, "preserve", null), I(this, "lastValidatePromise", null), I(this, "getForm", function() {
            return { getFieldValue: n2.getFieldValue, getFieldsValue: n2.getFieldsValue, getFieldError: n2.getFieldError, getFieldWarning: n2.getFieldWarning, getFieldsError: n2.getFieldsError, isFieldsTouched: n2.isFieldsTouched, isFieldTouched: n2.isFieldTouched, isFieldValidating: n2.isFieldValidating, isFieldsValidating: n2.isFieldsValidating, resetFields: n2.resetFields, setFields: n2.setFields, setFieldValue: n2.setFieldValue, setFieldsValue: n2.setFieldsValue, validateFields: n2.validateFields, submit: n2.submit, _init: true, getInternalHooks: n2.getInternalHooks };
          }), I(this, "getInternalHooks", function(e4) {
            return e4 === ic ? (n2.formHooked = true, { dispatch: n2.dispatch, initEntityValue: n2.initEntityValue, registerField: n2.registerField, useSubscribe: n2.useSubscribe, setInitialValues: n2.setInitialValues, destroyForm: n2.destroyForm, setCallbacks: n2.setCallbacks, setValidateMessages: n2.setValidateMessages, getFields: n2.getFields, setPreserve: n2.setPreserve, getInitialValue: n2.getInitialValue, registerWatch: n2.registerWatch }) : (te(false, "`getInternalHooks` is internal usage. Should not call directly."), null);
          }), I(this, "useSubscribe", function(e4) {
            n2.subscribable = e4;
          }), I(this, "prevWithoutPreserves", null), I(this, "setInitialValues", function(e4, t4) {
            if (n2.initialValues = e4 || {}, t4) {
              var r2, o2 = Qt(e4, n2.store);
              null === (r2 = n2.prevWithoutPreserves) || void 0 === r2 || r2.map(function(t5) {
                var n3 = t5.key;
                o2 = Xt(o2, n3, Kt(e4, n3));
              }), n2.prevWithoutPreserves = null, n2.updateStore(o2);
            }
          }), I(this, "destroyForm", function(e4) {
            if (e4)
              n2.updateStore({});
            else {
              var t4 = new au();
              n2.getFieldEntities(true).forEach(function(e5) {
                n2.isMergedPreserve(e5.isPreserve()) || t4.set(e5.getNamePath(), true);
              }), n2.prevWithoutPreserves = t4;
            }
          }), I(this, "getInitialValue", function(e4) {
            var t4 = Kt(n2.initialValues, e4);
            return e4.length ? Qt(t4) : t4;
          }), I(this, "setCallbacks", function(e4) {
            n2.callbacks = e4;
          }), I(this, "setValidateMessages", function(e4) {
            n2.validateMessages = e4;
          }), I(this, "setPreserve", function(e4) {
            n2.preserve = e4;
          }), I(this, "watchList", []), I(this, "registerWatch", function(e4) {
            return n2.watchList.push(e4), function() {
              n2.watchList = n2.watchList.filter(function(t4) {
                return t4 !== e4;
              });
            };
          }), I(this, "notifyWatch", function() {
            var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            if (n2.watchList.length) {
              var t4 = n2.getFieldsValue(), r2 = n2.getFieldsValue(true);
              n2.watchList.forEach(function(n3) {
                n3(t4, r2, e4);
              });
            }
          }), I(this, "timeoutId", null), I(this, "warningUnhooked", function() {
          }), I(this, "updateStore", function(e4) {
            n2.store = e4;
          }), I(this, "getFieldEntities", function() {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? n2.fieldEntities.filter(function(e4) {
              return e4.getNamePath().length;
            }) : n2.fieldEntities;
          }), I(this, "getFieldsMap", function() {
            var e4 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t4 = new au();
            return n2.getFieldEntities(e4).forEach(function(e5) {
              var n3 = e5.getNamePath();
              t4.set(n3, e5);
            }), t4;
          }), I(this, "getFieldEntitiesForNamePathList", function(e4) {
            if (!e4)
              return n2.getFieldEntities(true);
            var t4 = n2.getFieldsMap(true);
            return e4.map(function(e5) {
              var n3 = Gc(e5);
              return t4.get(n3) || { INVALIDATE_NAME_PATH: Gc(e5) };
            });
          }), I(this, "getFieldsValue", function(e4, t4) {
            var r2, o2, i2;
            if (n2.warningUnhooked(), true === e4 || Array.isArray(e4) ? (r2 = e4, o2 = t4) : e4 && "object" === O(e4) && (i2 = e4.strict, o2 = e4.filter), true === r2 && !o2)
              return n2.store;
            var a2 = n2.getFieldEntitiesForNamePathList(Array.isArray(r2) ? r2 : null), s2 = [];
            return a2.forEach(function(e5) {
              var t5, n3, a3, l2, c2 = "INVALIDATE_NAME_PATH" in e5 ? e5.INVALIDATE_NAME_PATH : e5.getNamePath();
              if (i2) {
                if (null !== (a3 = (l2 = e5).isList) && void 0 !== a3 && a3.call(l2))
                  return;
              } else if (!r2 && null !== (t5 = (n3 = e5).isListField) && void 0 !== t5 && t5.call(n3))
                return;
              if (o2) {
                var u2 = "getMeta" in e5 ? e5.getMeta() : null;
                o2(u2) && s2.push(c2);
              } else
                s2.push(c2);
            }), Xc(n2.store, s2.map(Gc));
          }), I(this, "getFieldValue", function(e4) {
            n2.warningUnhooked();
            var t4 = Gc(e4);
            return Kt(n2.store, t4);
          }), I(this, "getFieldsError", function(e4) {
            return n2.warningUnhooked(), n2.getFieldEntitiesForNamePathList(e4).map(function(t4, n3) {
              return t4 && !("INVALIDATE_NAME_PATH" in t4) ? { name: t4.getNamePath(), errors: t4.getErrors(), warnings: t4.getWarnings() } : { name: Gc(e4[n3]), errors: [], warnings: [] };
            });
          }), I(this, "getFieldError", function(e4) {
            n2.warningUnhooked();
            var t4 = Gc(e4);
            return n2.getFieldsError([t4])[0].errors;
          }), I(this, "getFieldWarning", function(e4) {
            n2.warningUnhooked();
            var t4 = Gc(e4);
            return n2.getFieldsError([t4])[0].warnings;
          }), I(this, "isFieldsTouched", function() {
            n2.warningUnhooked();
            for (var e4 = arguments.length, t4 = new Array(e4), r2 = 0; r2 < e4; r2++)
              t4[r2] = arguments[r2];
            var o2, i2 = t4[0], a2 = t4[1], s2 = false;
            0 === t4.length ? o2 = null : 1 === t4.length ? Array.isArray(i2) ? (o2 = i2.map(Gc), s2 = false) : (o2 = null, s2 = i2) : (o2 = i2.map(Gc), s2 = a2);
            var l2 = n2.getFieldEntities(true), c2 = function(e5) {
              return e5.isFieldTouched();
            };
            if (!o2)
              return s2 ? l2.every(function(e5) {
                return c2(e5) || e5.isList();
              }) : l2.some(c2);
            var u2 = new au();
            o2.forEach(function(e5) {
              u2.set(e5, []);
            }), l2.forEach(function(e5) {
              var t5 = e5.getNamePath();
              o2.forEach(function(n3) {
                n3.every(function(e6, n4) {
                  return t5[n4] === e6;
                }) && u2.update(n3, function(t6) {
                  return [].concat(x(t6), [e5]);
                });
              });
            });
            var d2 = function(e5) {
              return e5.some(c2);
            }, f2 = u2.map(function(e5) {
              return e5.value;
            });
            return s2 ? f2.every(d2) : f2.some(d2);
          }), I(this, "isFieldTouched", function(e4) {
            return n2.warningUnhooked(), n2.isFieldsTouched([e4]);
          }), I(this, "isFieldsValidating", function(e4) {
            n2.warningUnhooked();
            var t4 = n2.getFieldEntities();
            if (!e4)
              return t4.some(function(e5) {
                return e5.isFieldValidating();
              });
            var r2 = e4.map(Gc);
            return t4.some(function(e5) {
              var t5 = e5.getNamePath();
              return Uc(r2, t5) && e5.isFieldValidating();
            });
          }), I(this, "isFieldValidating", function(e4) {
            return n2.warningUnhooked(), n2.isFieldsValidating([e4]);
          }), I(this, "resetWithFieldInitialValue", function() {
            var e4, t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = new au(), o2 = n2.getFieldEntities(true);
            o2.forEach(function(e5) {
              var t5 = e5.props.initialValue, n3 = e5.getNamePath();
              if (void 0 !== t5) {
                var o3 = r2.get(n3) || /* @__PURE__ */ new Set();
                o3.add({ entity: e5, value: t5 }), r2.set(n3, o3);
              }
            }), t4.entities ? e4 = t4.entities : t4.namePathList ? (e4 = [], t4.namePathList.forEach(function(t5) {
              var n3, o3 = r2.get(t5);
              o3 && (n3 = e4).push.apply(n3, x(x(o3).map(function(e5) {
                return e5.entity;
              })));
            })) : e4 = o2, e4.forEach(function(e5) {
              if (void 0 !== e5.props.initialValue) {
                var o3 = e5.getNamePath();
                if (void 0 !== n2.getInitialValue(o3))
                  te(false, "Form already set 'initialValues' with path '".concat(o3.join("."), "'. Field can not overwrite it."));
                else {
                  var i2 = r2.get(o3);
                  if (i2 && i2.size > 1)
                    te(false, "Multiple Field with path '".concat(o3.join("."), "' set 'initialValue'. Can not decide which one to pick."));
                  else if (i2) {
                    var a2 = n2.getFieldValue(o3);
                    e5.isListField() || t4.skipExist && void 0 !== a2 || n2.updateStore(Xt(n2.store, o3, x(i2)[0].value));
                  }
                }
              }
            });
          }), I(this, "resetFields", function(e4) {
            n2.warningUnhooked();
            var t4 = n2.store;
            if (!e4)
              return n2.updateStore(Qt(n2.initialValues)), n2.resetWithFieldInitialValue(), n2.notifyObservers(t4, null, { type: "reset" }), void n2.notifyWatch();
            var r2 = e4.map(Gc);
            r2.forEach(function(e5) {
              var t5 = n2.getInitialValue(e5);
              n2.updateStore(Xt(n2.store, e5, t5));
            }), n2.resetWithFieldInitialValue({ namePathList: r2 }), n2.notifyObservers(t4, r2, { type: "reset" }), n2.notifyWatch(r2);
          }), I(this, "setFields", function(e4) {
            n2.warningUnhooked();
            var t4 = n2.store, r2 = [];
            e4.forEach(function(e5) {
              var o2 = e5.name, i2 = Rr(e5, su), a2 = Gc(o2);
              r2.push(a2), "value" in i2 && n2.updateStore(Xt(n2.store, a2, i2.value)), n2.notifyObservers(t4, [a2], { type: "setField", data: e5 });
            }), n2.notifyWatch(r2);
          }), I(this, "getFields", function() {
            return n2.getFieldEntities(true).map(function(e4) {
              var t4 = e4.getNamePath(), r2 = R(R({}, e4.getMeta()), {}, { name: t4, value: n2.getFieldValue(t4) });
              return Object.defineProperty(r2, "originRCField", { value: true }), r2;
            });
          }), I(this, "initEntityValue", function(e4) {
            var t4 = e4.props.initialValue;
            if (void 0 !== t4) {
              var r2 = e4.getNamePath();
              void 0 === Kt(n2.store, r2) && n2.updateStore(Xt(n2.store, r2, t4));
            }
          }), I(this, "isMergedPreserve", function(e4) {
            var t4 = void 0 !== e4 ? e4 : n2.preserve;
            return null == t4 || t4;
          }), I(this, "registerField", function(e4) {
            n2.fieldEntities.push(e4);
            var t4 = e4.getNamePath();
            if (n2.notifyWatch([t4]), void 0 !== e4.props.initialValue) {
              var r2 = n2.store;
              n2.resetWithFieldInitialValue({ entities: [e4], skipExist: true }), n2.notifyObservers(r2, [e4.getNamePath()], { type: "valueUpdate", source: "internal" });
            }
            return function(r3, o2) {
              var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
              if (n2.fieldEntities = n2.fieldEntities.filter(function(t5) {
                return t5 !== e4;
              }), !n2.isMergedPreserve(o2) && (!r3 || i2.length > 1)) {
                var a2 = r3 ? void 0 : n2.getInitialValue(t4);
                if (t4.length && n2.getFieldValue(t4) !== a2 && n2.fieldEntities.every(function(e5) {
                  return !_c(e5.getNamePath(), t4);
                })) {
                  var s2 = n2.store;
                  n2.updateStore(Xt(s2, t4, a2, true)), n2.notifyObservers(s2, [t4], { type: "remove" }), n2.triggerDependenciesUpdate(s2, t4);
                }
              }
              n2.notifyWatch([t4]);
            };
          }), I(this, "dispatch", function(e4) {
            switch (e4.type) {
              case "updateValue":
                var t4 = e4.namePath, r2 = e4.value;
                n2.updateValue(t4, r2);
                break;
              case "validateField":
                var o2 = e4.namePath, i2 = e4.triggerName;
                n2.validateFields([o2], { triggerName: i2 });
            }
          }), I(this, "notifyObservers", function(e4, t4, r2) {
            if (n2.subscribable) {
              var o2 = R(R({}, r2), {}, { store: n2.getFieldsValue(true) });
              n2.getFieldEntities().forEach(function(n3) {
                (0, n3.onStoreChange)(e4, t4, o2);
              });
            } else
              n2.forceRootUpdate();
          }), I(this, "triggerDependenciesUpdate", function(e4, t4) {
            var r2 = n2.getDependencyChildrenFields(t4);
            return r2.length && n2.validateFields(r2), n2.notifyObservers(e4, r2, { type: "dependenciesUpdate", relatedFields: [t4].concat(x(r2)) }), r2;
          }), I(this, "updateValue", function(e4, t4) {
            var r2 = Gc(e4), o2 = n2.store;
            n2.updateStore(Xt(n2.store, r2, t4)), n2.notifyObservers(o2, [r2], { type: "valueUpdate", source: "internal" }), n2.notifyWatch([r2]);
            var i2 = n2.triggerDependenciesUpdate(o2, r2), a2 = n2.callbacks.onValuesChange;
            a2 && a2(Xc(n2.store, [r2]), n2.getFieldsValue()), n2.triggerOnFieldsChange([r2].concat(x(i2)));
          }), I(this, "setFieldsValue", function(e4) {
            n2.warningUnhooked();
            var t4 = n2.store;
            if (e4) {
              var r2 = Qt(n2.store, e4);
              n2.updateStore(r2);
            }
            n2.notifyObservers(t4, null, { type: "valueUpdate", source: "external" }), n2.notifyWatch();
          }), I(this, "setFieldValue", function(e4, t4) {
            n2.setFields([{ name: e4, value: t4, errors: [], warnings: [] }]);
          }), I(this, "getDependencyChildrenFields", function(e4) {
            var t4 = /* @__PURE__ */ new Set(), r2 = [], o2 = new au();
            return n2.getFieldEntities().forEach(function(e5) {
              (e5.props.dependencies || []).forEach(function(t5) {
                var n3 = Gc(t5);
                o2.update(n3, function() {
                  var t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : /* @__PURE__ */ new Set();
                  return t6.add(e5), t6;
                });
              });
            }), function e5(n3) {
              (o2.get(n3) || /* @__PURE__ */ new Set()).forEach(function(n4) {
                if (!t4.has(n4)) {
                  t4.add(n4);
                  var o3 = n4.getNamePath();
                  n4.isFieldDirty() && o3.length && (r2.push(o3), e5(o3));
                }
              });
            }(e4), r2;
          }), I(this, "triggerOnFieldsChange", function(e4, t4) {
            var r2 = n2.callbacks.onFieldsChange;
            if (r2) {
              var o2 = n2.getFields();
              if (t4) {
                var i2 = new au();
                t4.forEach(function(e5) {
                  var t5 = e5.name, n3 = e5.errors;
                  i2.set(t5, n3);
                }), o2.forEach(function(e5) {
                  e5.errors = i2.get(e5.name) || e5.errors;
                });
              }
              var a2 = o2.filter(function(t5) {
                var n3 = t5.name;
                return Uc(e4, n3);
              });
              a2.length && r2(a2, o2);
            }
          }), I(this, "validateFields", function(e4, t4) {
            var r2, o2;
            n2.warningUnhooked(), Array.isArray(e4) || "string" == typeof e4 || "string" == typeof t4 ? (r2 = e4, o2 = t4) : o2 = e4;
            var i2 = !!r2, a2 = i2 ? r2.map(Gc) : [], s2 = [], l2 = String(Date.now()), c2 = /* @__PURE__ */ new Set(), u2 = o2 || {}, d2 = u2.recursive, f2 = u2.dirty;
            n2.getFieldEntities(true).forEach(function(e5) {
              if (i2 || a2.push(e5.getNamePath()), e5.props.rules && e5.props.rules.length && (!f2 || e5.isFieldDirty())) {
                var t5 = e5.getNamePath();
                if (c2.add(t5.join(l2)), !i2 || Uc(a2, t5, d2)) {
                  var r3 = e5.validateRules(R({ validateMessages: R(R({}, Fc), n2.validateMessages) }, o2));
                  s2.push(r3.then(function() {
                    return { name: t5, errors: [], warnings: [] };
                  }).catch(function(e6) {
                    var n3, r4 = [], o3 = [];
                    return null === (n3 = e6.forEach) || void 0 === n3 || n3.call(e6, function(e7) {
                      var t6 = e7.rule.warningOnly, n4 = e7.errors;
                      t6 ? o3.push.apply(o3, x(n4)) : r4.push.apply(r4, x(n4));
                    }), r4.length ? Promise.reject({ name: t5, errors: r4, warnings: o3 }) : { name: t5, errors: r4, warnings: o3 };
                  }));
                }
              }
            });
            var p2 = function(e5) {
              var t5 = false, n3 = e5.length, r3 = [];
              return e5.length ? new Promise(function(o3, i3) {
                e5.forEach(function(e6, a3) {
                  e6.catch(function(e7) {
                    return t5 = true, e7;
                  }).then(function(e7) {
                    n3 -= 1, r3[a3] = e7, n3 > 0 || (t5 && i3(r3), o3(r3));
                  });
                });
              }) : Promise.resolve([]);
            }(s2);
            n2.lastValidatePromise = p2, p2.catch(function(e5) {
              return e5;
            }).then(function(e5) {
              var t5 = e5.map(function(e6) {
                return e6.name;
              });
              n2.notifyObservers(n2.store, t5, { type: "validateFinish" }), n2.triggerOnFieldsChange(t5, e5);
            });
            var m2 = p2.then(function() {
              return n2.lastValidatePromise === p2 ? Promise.resolve(n2.getFieldsValue(a2)) : Promise.reject([]);
            }).catch(function(e5) {
              var t5 = e5.filter(function(e6) {
                return e6 && e6.errors.length;
              });
              return Promise.reject({ values: n2.getFieldsValue(a2), errorFields: t5, outOfDate: n2.lastValidatePromise !== p2 });
            });
            m2.catch(function(e5) {
              return e5;
            });
            var g2 = a2.filter(function(e5) {
              return c2.has(e5.join(l2));
            });
            return n2.triggerOnFieldsChange(g2), m2;
          }), I(this, "submit", function() {
            n2.warningUnhooked(), n2.validateFields().then(function(e4) {
              var t4 = n2.callbacks.onFinish;
              if (t4)
                try {
                  t4(e4);
                } catch (e5) {
                  console.error(e5);
                }
            }).catch(function(e4) {
              var t4 = n2.callbacks.onFinishFailed;
              t4 && t4(e4);
            });
          }), this.forceRootUpdate = t3;
        });
        const cu = function(e3) {
          var n2 = t2.useRef(), r2 = N(t2.useState({}), 2)[1];
          if (!n2.current)
            if (e3)
              n2.current = e3;
            else {
              var o2 = new lu(function() {
                r2({});
              });
              n2.current = o2.getForm();
            }
          return [n2.current];
        };
        var uu = t2.createContext({ triggerFormChange: function() {
        }, triggerFormFinish: function() {
        }, registerForm: function() {
        }, unregisterForm: function() {
        } });
        const du = uu;
        var fu = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"];
        const pu = function(e3, n2) {
          var r2 = e3.name, o2 = e3.initialValues, i2 = e3.fields, a2 = e3.form, s2 = e3.preserve, l2 = e3.children, c2 = e3.component, u2 = void 0 === c2 ? "form" : c2, d2 = e3.validateMessages, f2 = e3.validateTrigger, p2 = void 0 === f2 ? "onChange" : f2, m2 = e3.onValuesChange, g2 = e3.onFieldsChange, h2 = e3.onFinish, v2 = e3.onFinishFailed, b2 = e3.clearOnDestroy, y2 = Rr(e3, fu), C2 = t2.useRef(null), w2 = t2.useContext(du), S2 = N(cu(a2), 1)[0], A2 = S2.getInternalHooks(ic), E2 = A2.useSubscribe, k2 = A2.setInitialValues, P2 = A2.setCallbacks, I2 = A2.setValidateMessages, j2 = A2.setPreserve, $2 = A2.destroyForm;
          t2.useImperativeHandle(n2, function() {
            return R(R({}, S2), {}, { nativeElement: C2.current });
          }), t2.useEffect(function() {
            return w2.registerForm(r2, S2), function() {
              w2.unregisterForm(r2);
            };
          }, [w2, S2, r2]), I2(R(R({}, w2.validateMessages), d2)), P2({ onValuesChange: m2, onFieldsChange: function(e4) {
            if (w2.triggerFormChange(r2, e4), g2) {
              for (var t3 = arguments.length, n3 = new Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
                n3[o3 - 1] = arguments[o3];
              g2.apply(void 0, [e4].concat(n3));
            }
          }, onFinish: function(e4) {
            w2.triggerFormFinish(r2, e4), h2 && h2(e4);
          }, onFinishFailed: v2 }), j2(s2);
          var M2, B2 = t2.useRef(null);
          k2(o2, !B2.current), B2.current || (B2.current = true), t2.useEffect(function() {
            return function() {
              return $2(b2);
            };
          }, []);
          var T2 = "function" == typeof l2;
          M2 = T2 ? l2(S2.getFieldsValue(true), S2) : l2, E2(!T2);
          var F2 = t2.useRef();
          t2.useEffect(function() {
            (function(e4, t3) {
              if (e4 === t3)
                return true;
              if (!e4 && t3 || e4 && !t3)
                return false;
              if (!e4 || !t3 || "object" !== O(e4) || "object" !== O(t3))
                return false;
              var n3 = Object.keys(e4), r3 = Object.keys(t3);
              return x(new Set([].concat(n3, r3))).every(function(n4) {
                var r4 = e4[n4], o3 = t3[n4];
                return "function" == typeof r4 && "function" == typeof o3 || r4 === o3;
              });
            })(F2.current || [], i2 || []) || S2.setFields(i2 || []), F2.current = i2;
          }, [i2, S2]);
          var L2 = t2.useMemo(function() {
            return R(R({}, S2), {}, { validateTrigger: p2 });
          }, [S2, p2]), z2 = t2.createElement(lc.Provider, { value: null }, t2.createElement(sc.Provider, { value: L2 }, M2));
          return false === u2 ? z2 : t2.createElement(u2, qe({}, y2, { ref: C2, onSubmit: function(e4) {
            e4.preventDefault(), e4.stopPropagation(), S2.submit();
          }, onReset: function(e4) {
            var t3;
            e4.preventDefault(), S2.resetFields(), null === (t3 = y2.onReset) || void 0 === t3 || t3.call(y2, e4);
          } }), z2);
        };
        function mu(e3) {
          try {
            return JSON.stringify(e3);
          } catch (e4) {
            return Math.random();
          }
        }
        var gu = t2.forwardRef(pu);
        gu.FormProvider = function(e3) {
          var n2 = e3.validateMessages, r2 = e3.onFormChange, o2 = e3.onFormFinish, i2 = e3.children, a2 = t2.useContext(uu), s2 = t2.useRef({});
          return t2.createElement(uu.Provider, { value: R(R({}, a2), {}, { validateMessages: R(R({}, a2.validateMessages), n2), triggerFormChange: function(e4, t3) {
            r2 && r2(e4, { changedFields: t3, forms: s2.current }), a2.triggerFormChange(e4, t3);
          }, triggerFormFinish: function(e4, t3) {
            o2 && o2(e4, { values: t3, forms: s2.current }), a2.triggerFormFinish(e4, t3);
          }, registerForm: function(e4, t3) {
            e4 && (s2.current = R(R({}, s2.current), {}, I({}, e4, t3))), a2.registerForm(e4, t3);
          }, unregisterForm: function(e4) {
            var t3 = R({}, s2.current);
            delete t3[e4], s2.current = t3, a2.unregisterForm(e4);
          } }) }, i2);
        }, gu.Field = nu, gu.List = function(e3) {
          var n2 = e3.name, r2 = e3.initialValue, o2 = e3.children, i2 = e3.rules, a2 = e3.validateTrigger, s2 = e3.isListField, l2 = t2.useContext(sc), c2 = t2.useContext(lc), u2 = t2.useRef({ keys: [], id: 0 }).current, d2 = t2.useMemo(function() {
            var e4 = Gc(l2.prefixName) || [];
            return [].concat(x(e4), x(Gc(n2)));
          }, [l2.prefixName, n2]), f2 = t2.useMemo(function() {
            return R(R({}, l2), {}, { prefixName: d2 });
          }, [l2, d2]), p2 = t2.useMemo(function() {
            return { getKey: function(e4) {
              var t3 = d2.length, n3 = e4[t3];
              return [u2.keys[n3], e4.slice(t3 + 1)];
            } };
          }, [d2]);
          return "function" != typeof o2 ? (te(false, "Form.List only accepts function as children."), null) : t2.createElement(lc.Provider, { value: p2 }, t2.createElement(sc.Provider, { value: f2 }, t2.createElement(nu, { name: [], shouldUpdate: function(e4, t3, n3) {
            return "internal" !== n3.source && e4 !== t3;
          }, rules: i2, validateTrigger: a2, initialValue: r2, isList: true, isListField: null != s2 ? s2 : !!c2 }, function(e4, t3) {
            var n3 = e4.value, r3 = void 0 === n3 ? [] : n3, i3 = e4.onChange, a3 = l2.getFieldValue, s3 = function() {
              return a3(d2 || []) || [];
            }, c3 = { add: function(e5, t4) {
              var n4 = s3();
              t4 >= 0 && t4 <= n4.length ? (u2.keys = [].concat(x(u2.keys.slice(0, t4)), [u2.id], x(u2.keys.slice(t4))), i3([].concat(x(n4.slice(0, t4)), [e5], x(n4.slice(t4))))) : (u2.keys = [].concat(x(u2.keys), [u2.id]), i3([].concat(x(n4), [e5]))), u2.id += 1;
            }, remove: function(e5) {
              var t4 = s3(), n4 = new Set(Array.isArray(e5) ? e5 : [e5]);
              n4.size <= 0 || (u2.keys = u2.keys.filter(function(e6, t5) {
                return !n4.has(t5);
              }), i3(t4.filter(function(e6, t5) {
                return !n4.has(t5);
              })));
            }, move: function(e5, t4) {
              if (e5 !== t4) {
                var n4 = s3();
                e5 < 0 || e5 >= n4.length || t4 < 0 || t4 >= n4.length || (u2.keys = Yc(u2.keys, e5, t4), i3(Yc(n4, e5, t4)));
              }
            } }, f3 = r3 || [];
            return Array.isArray(f3) || (f3 = []), o2(f3.map(function(e5, t4) {
              var n4 = u2.keys[t4];
              return void 0 === n4 && (u2.keys[t4] = u2.id, n4 = u2.keys[t4], u2.id += 1), { name: t4, key: n4, isListField: true };
            }), c3, t3);
          })));
        }, gu.useForm = cu, gu.useWatch = function() {
          for (var e3 = arguments.length, n2 = new Array(e3), r2 = 0; r2 < e3; r2++)
            n2[r2] = arguments[r2];
          var o2 = n2[0], i2 = n2[1], a2 = void 0 === i2 ? {} : i2, s2 = function(e4) {
            return e4 && !!e4._init;
          }(a2) ? { form: a2 } : a2, l2 = s2.form, c2 = N((0, t2.useState)(), 2), u2 = c2[0], d2 = c2[1], f2 = (0, t2.useMemo)(function() {
            return mu(u2);
          }, [u2]), p2 = (0, t2.useRef)(f2);
          p2.current = f2;
          var m2 = (0, t2.useContext)(sc), g2 = l2 || m2, h2 = g2 && g2._init, v2 = Gc(o2), b2 = (0, t2.useRef)(v2);
          return b2.current = v2, (0, t2.useEffect)(function() {
            if (h2) {
              var e4 = g2.getFieldsValue, t3 = (0, g2.getInternalHooks)(ic).registerWatch, n3 = function(e5, t4) {
                var n4 = s2.preserve ? t4 : e5;
                return "function" == typeof o2 ? o2(n4) : Kt(n4, b2.current);
              }, r3 = t3(function(e5, t4) {
                var r4 = n3(e5, t4), o3 = mu(r4);
                p2.current !== o3 && (p2.current = o3, d2(r4));
              }), i3 = n3(e4(), e4(true));
              return u2 !== i3 && d2(i3), r3;
            }
          }, [h2]), u2;
        };
        const hu = t2.createContext({}), vu = (e3) => {
          let { children: n2, status: r2, override: o2 } = e3;
          const i2 = t2.useContext(hu), a2 = t2.useMemo(() => {
            const e4 = Object.assign({}, i2);
            return o2 && delete e4.isFormItemInput, r2 && (delete e4.status, delete e4.hasFeedback, delete e4.feedbackIcon), e4;
          }, [r2, o2, i2]);
          return t2.createElement(hu.Provider, { value: a2 }, n2);
        }, bu = (e3) => {
          const { space: t3, form: n2, children: r2 } = e3;
          if (null == r2)
            return null;
          let i2 = r2;
          return n2 && (i2 = o().createElement(vu, { override: true, status: true }, i2)), t3 && (i2 = o().createElement(cs, null, i2)), i2;
        };
        function yu(e3) {
          if (e3)
            return { closable: e3.closable, closeIcon: e3.closeIcon };
        }
        function Cu(e3) {
          const { closable: t3, closeIcon: n2 } = e3 || {};
          return o().useMemo(() => {
            if (!t3 && (false === t3 || false === n2 || null === n2))
              return false;
            if (void 0 === t3 && void 0 === n2)
              return null;
            let e4 = { closeIcon: "boolean" != typeof n2 && null !== n2 ? n2 : void 0 };
            return t3 && "object" == typeof t3 && (e4 = Object.assign(Object.assign({}, e4), t3)), e4;
          }, [t3, n2]);
        }
        function wu() {
          const e3 = {};
          for (var t3 = arguments.length, n2 = new Array(t3), r2 = 0; r2 < t3; r2++)
            n2[r2] = arguments[r2];
          return n2.forEach((t4) => {
            t4 && Object.keys(t4).forEach((n3) => {
              void 0 !== t4[n3] && (e3[n3] = t4[n3]);
            });
          }), e3;
        }
        const xu = {}, Su = (e3) => {
          const [, , , , t3] = ei();
          return t3 ? `${e3}-css-var` : "";
        }, Au = (e3) => {
          const { prefixCls: n2, className: r2, style: o2, size: i2, shape: a2 } = e3, s2 = br()({ [`${n2}-lg`]: "large" === i2, [`${n2}-sm`]: "small" === i2 }), l2 = br()({ [`${n2}-circle`]: "circle" === a2, [`${n2}-square`]: "square" === a2, [`${n2}-round`]: "round" === a2 }), c2 = t2.useMemo(() => "number" == typeof i2 ? { width: i2, height: i2, lineHeight: `${i2}px` } : {}, [i2]);
          return t2.createElement("span", { className: br()(n2, s2, l2, r2), style: Object.assign(Object.assign({}, c2), o2) });
        }, Eu = new qt("ant-skeleton-loading", { "0%": { backgroundPosition: "100% 50%" }, "100%": { backgroundPosition: "0 50%" } }), ku = (e3) => ({ height: e3, lineHeight: Ee(e3) }), Ou = (e3) => Object.assign({ width: e3 }, ku(e3)), Pu = (e3) => ({ background: e3.skeletonLoadingBackground, backgroundSize: "400% 100%", animationName: Eu, animationDuration: e3.skeletonLoadingMotionDuration, animationTimingFunction: "ease", animationIterationCount: "infinite" }), Iu = (e3, t3) => Object.assign({ width: t3(e3).mul(5).equal(), minWidth: t3(e3).mul(5).equal() }, ku(e3)), ju = (e3) => {
          const { skeletonAvatarCls: t3, gradientFromColor: n2, controlHeight: r2, controlHeightLG: o2, controlHeightSM: i2 } = e3;
          return { [t3]: Object.assign({ display: "inline-block", verticalAlign: "top", background: n2 }, Ou(r2)), [`${t3}${t3}-circle`]: { borderRadius: "50%" }, [`${t3}${t3}-lg`]: Object.assign({}, Ou(o2)), [`${t3}${t3}-sm`]: Object.assign({}, Ou(i2)) };
        }, $u = (e3) => {
          const { controlHeight: t3, borderRadiusSM: n2, skeletonInputCls: r2, controlHeightLG: o2, controlHeightSM: i2, gradientFromColor: a2, calc: s2 } = e3;
          return { [r2]: Object.assign({ display: "inline-block", verticalAlign: "top", background: a2, borderRadius: n2 }, Iu(t3, s2)), [`${r2}-lg`]: Object.assign({}, Iu(o2, s2)), [`${r2}-sm`]: Object.assign({}, Iu(i2, s2)) };
        }, Nu = (e3) => Object.assign({ width: e3 }, ku(e3)), Mu = (e3) => {
          const { skeletonImageCls: t3, imageSizeBase: n2, gradientFromColor: r2, borderRadiusSM: o2, calc: i2 } = e3;
          return { [t3]: Object.assign(Object.assign({ display: "inline-flex", alignItems: "center", justifyContent: "center", verticalAlign: "middle", background: r2, borderRadius: o2 }, Nu(i2(n2).mul(2).equal())), { [`${t3}-path`]: { fill: "#bfbfbf" }, [`${t3}-svg`]: Object.assign(Object.assign({}, Nu(n2)), { maxWidth: i2(n2).mul(4).equal(), maxHeight: i2(n2).mul(4).equal() }), [`${t3}-svg${t3}-svg-circle`]: { borderRadius: "50%" } }), [`${t3}${t3}-circle`]: { borderRadius: "50%" } };
        }, Ru = (e3, t3, n2) => {
          const { skeletonButtonCls: r2 } = e3;
          return { [`${n2}${r2}-circle`]: { width: t3, minWidth: t3, borderRadius: "50%" }, [`${n2}${r2}-round`]: { borderRadius: t3 } };
        }, Bu = (e3, t3) => Object.assign({ width: t3(e3).mul(2).equal(), minWidth: t3(e3).mul(2).equal() }, ku(e3)), Tu = (e3) => {
          const { borderRadiusSM: t3, skeletonButtonCls: n2, controlHeight: r2, controlHeightLG: o2, controlHeightSM: i2, gradientFromColor: a2, calc: s2 } = e3;
          return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ [n2]: Object.assign({ display: "inline-block", verticalAlign: "top", background: a2, borderRadius: t3, width: s2(r2).mul(2).equal(), minWidth: s2(r2).mul(2).equal() }, Bu(r2, s2)) }, Ru(e3, r2, n2)), { [`${n2}-lg`]: Object.assign({}, Bu(o2, s2)) }), Ru(e3, o2, `${n2}-lg`)), { [`${n2}-sm`]: Object.assign({}, Bu(i2, s2)) }), Ru(e3, i2, `${n2}-sm`));
        }, Fu = (e3) => {
          const { componentCls: t3, skeletonAvatarCls: n2, skeletonTitleCls: r2, skeletonParagraphCls: o2, skeletonButtonCls: i2, skeletonInputCls: a2, skeletonImageCls: s2, controlHeight: l2, controlHeightLG: c2, controlHeightSM: u2, gradientFromColor: d2, padding: f2, marginSM: p2, borderRadius: m2, titleHeight: g2, blockRadius: h2, paragraphLiHeight: v2, controlHeightXS: b2, paragraphMarginTop: y2 } = e3;
          return { [t3]: { display: "table", width: "100%", [`${t3}-header`]: { display: "table-cell", paddingInlineEnd: f2, verticalAlign: "top", [n2]: Object.assign({ display: "inline-block", verticalAlign: "top", background: d2 }, Ou(l2)), [`${n2}-circle`]: { borderRadius: "50%" }, [`${n2}-lg`]: Object.assign({}, Ou(c2)), [`${n2}-sm`]: Object.assign({}, Ou(u2)) }, [`${t3}-content`]: { display: "table-cell", width: "100%", verticalAlign: "top", [r2]: { width: "100%", height: g2, background: d2, borderRadius: h2, [`+ ${o2}`]: { marginBlockStart: u2 } }, [o2]: { padding: 0, "> li": { width: "100%", height: v2, listStyle: "none", background: d2, borderRadius: h2, "+ li": { marginBlockStart: b2 } } }, [`${o2}> li:last-child:not(:first-child):not(:nth-child(2))`]: { width: "61%" } }, [`&-round ${t3}-content`]: { [`${r2}, ${o2} > li`]: { borderRadius: m2 } } }, [`${t3}-with-avatar ${t3}-content`]: { [r2]: { marginBlockStart: p2, [`+ ${o2}`]: { marginBlockStart: y2 } } }, [`${t3}${t3}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({ display: "inline-block", width: "auto" }, Tu(e3)), ju(e3)), $u(e3)), Mu(e3)), [`${t3}${t3}-block`]: { width: "100%", [i2]: { width: "100%" }, [a2]: { width: "100%" } }, [`${t3}${t3}-active`]: { [`
        ${r2},
        ${o2} > li,
        ${n2},
        ${i2},
        ${a2},
        ${s2}
      `]: Object.assign({}, Pu(e3)) } };
        }, Lu = qa("Skeleton", (e3) => {
          const { componentCls: t3, calc: n2 } = e3, r2 = Ba(e3, { skeletonAvatarCls: `${t3}-avatar`, skeletonTitleCls: `${t3}-title`, skeletonParagraphCls: `${t3}-paragraph`, skeletonButtonCls: `${t3}-button`, skeletonInputCls: `${t3}-input`, skeletonImageCls: `${t3}-image`, imageSizeBase: n2(e3.controlHeight).mul(1.5).equal(), borderRadius: 100, skeletonLoadingBackground: `linear-gradient(90deg, ${e3.gradientFromColor} 25%, ${e3.gradientToColor} 37%, ${e3.gradientFromColor} 63%)`, skeletonLoadingMotionDuration: "1.4s" });
          return [Fu(r2)];
        }, (e3) => {
          const { colorFillContent: t3, colorFill: n2 } = e3;
          return { color: t3, colorGradientEnd: n2, gradientFromColor: t3, gradientToColor: n2, titleHeight: e3.controlHeight / 2, blockRadius: e3.borderRadiusSM, paragraphMarginTop: e3.marginLG + e3.marginXXS, paragraphLiHeight: e3.controlHeight / 2 };
        }, { deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]] }), zu = (e3, t3) => {
          const { width: n2, rows: r2 = 2 } = t3;
          return Array.isArray(n2) ? n2[e3] : r2 - 1 === e3 ? n2 : void 0;
        }, Hu = (e3) => {
          const { prefixCls: n2, className: r2, style: o2, rows: i2 } = e3, a2 = x(new Array(i2)).map((n3, r3) => t2.createElement("li", { key: r3, style: { width: zu(r3, e3) } }));
          return t2.createElement("ul", { className: br()(n2, r2), style: o2 }, a2);
        }, Du = (e3) => {
          let { prefixCls: n2, className: r2, width: o2, style: i2 } = e3;
          return t2.createElement("h3", { className: br()(n2, r2), style: Object.assign({ width: o2 }, i2) });
        };
        function qu(e3) {
          return e3 && "object" == typeof e3 ? e3 : {};
        }
        const Vu = (e3) => {
          const { prefixCls: n2, loading: r2, className: o2, rootClassName: i2, style: a2, children: s2, avatar: l2 = false, title: c2 = true, paragraph: u2 = true, active: d2, round: f2 } = e3, { getPrefixCls: p2, direction: m2, skeleton: g2 } = t2.useContext(E), h2 = p2("skeleton", n2), [v2, b2, y2] = Lu(h2);
          if (r2 || !("loading" in e3)) {
            const e4 = !!l2, n3 = !!c2, r3 = !!u2;
            let s3, p3;
            if (e4) {
              const e5 = Object.assign(Object.assign({ prefixCls: `${h2}-avatar` }, /* @__PURE__ */ function(e6, t3) {
                return e6 && !t3 ? { size: "large", shape: "square" } : { size: "large", shape: "circle" };
              }(n3, r3)), qu(l2));
              s3 = t2.createElement("div", { className: `${h2}-header` }, t2.createElement(Au, Object.assign({}, e5)));
            }
            if (n3 || r3) {
              let o3, i3;
              if (n3) {
                const n4 = Object.assign(Object.assign({ prefixCls: `${h2}-title` }, /* @__PURE__ */ function(e5, t3) {
                  return !e5 && t3 ? { width: "38%" } : e5 && t3 ? { width: "50%" } : {};
                }(e4, r3)), qu(c2));
                o3 = t2.createElement(Du, Object.assign({}, n4));
              }
              if (r3) {
                const r4 = Object.assign(Object.assign({ prefixCls: `${h2}-paragraph` }, function(e5, t3) {
                  const n4 = {};
                  return e5 && t3 || (n4.width = "61%"), n4.rows = !e5 && t3 ? 3 : 2, n4;
                }(e4, n3)), qu(u2));
                i3 = t2.createElement(Hu, Object.assign({}, r4));
              }
              p3 = t2.createElement("div", { className: `${h2}-content` }, o3, i3);
            }
            const C2 = br()(h2, { [`${h2}-with-avatar`]: e4, [`${h2}-active`]: d2, [`${h2}-rtl`]: "rtl" === m2, [`${h2}-round`]: f2 }, null == g2 ? void 0 : g2.className, o2, i2, b2, y2);
            return v2(t2.createElement("div", { className: C2, style: Object.assign(Object.assign({}, null == g2 ? void 0 : g2.style), a2) }, s3, p3));
          }
          return null != s2 ? s2 : null;
        };
        Vu.Button = (e3) => {
          const { prefixCls: n2, className: r2, rootClassName: o2, active: i2, block: a2 = false, size: s2 = "default" } = e3, { getPrefixCls: l2 } = t2.useContext(E), c2 = l2("skeleton", n2), [u2, d2, f2] = Lu(c2), p2 = wa(e3, ["prefixCls"]), m2 = br()(c2, `${c2}-element`, { [`${c2}-active`]: i2, [`${c2}-block`]: a2 }, r2, o2, d2, f2);
          return u2(t2.createElement("div", { className: m2 }, t2.createElement(Au, Object.assign({ prefixCls: `${c2}-button`, size: s2 }, p2))));
        }, Vu.Avatar = (e3) => {
          const { prefixCls: n2, className: r2, rootClassName: o2, active: i2, shape: a2 = "circle", size: s2 = "default" } = e3, { getPrefixCls: l2 } = t2.useContext(E), c2 = l2("skeleton", n2), [u2, d2, f2] = Lu(c2), p2 = wa(e3, ["prefixCls", "className"]), m2 = br()(c2, `${c2}-element`, { [`${c2}-active`]: i2 }, r2, o2, d2, f2);
          return u2(t2.createElement("div", { className: m2 }, t2.createElement(Au, Object.assign({ prefixCls: `${c2}-avatar`, shape: a2, size: s2 }, p2))));
        }, Vu.Input = (e3) => {
          const { prefixCls: n2, className: r2, rootClassName: o2, active: i2, block: a2, size: s2 = "default" } = e3, { getPrefixCls: l2 } = t2.useContext(E), c2 = l2("skeleton", n2), [u2, d2, f2] = Lu(c2), p2 = wa(e3, ["prefixCls"]), m2 = br()(c2, `${c2}-element`, { [`${c2}-active`]: i2, [`${c2}-block`]: a2 }, r2, o2, d2, f2);
          return u2(t2.createElement("div", { className: m2 }, t2.createElement(Au, Object.assign({ prefixCls: `${c2}-input`, size: s2 }, p2))));
        }, Vu.Image = (e3) => {
          const { prefixCls: n2, className: r2, rootClassName: o2, style: i2, active: a2 } = e3, { getPrefixCls: s2 } = t2.useContext(E), l2 = s2("skeleton", n2), [c2, u2, d2] = Lu(l2), f2 = br()(l2, `${l2}-element`, { [`${l2}-active`]: a2 }, r2, o2, u2, d2);
          return c2(t2.createElement("div", { className: f2 }, t2.createElement("div", { className: br()(`${l2}-image`, r2), style: i2 }, t2.createElement("svg", { viewBox: "0 0 1098 1024", xmlns: "http://www.w3.org/2000/svg", className: `${l2}-image-svg` }, t2.createElement("title", null, "Image placeholder"), t2.createElement("path", { d: "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", className: `${l2}-image-path` })))));
        }, Vu.Node = (e3) => {
          const { prefixCls: n2, className: r2, rootClassName: o2, style: i2, active: a2, children: s2 } = e3, { getPrefixCls: l2 } = t2.useContext(E), c2 = l2("skeleton", n2), [u2, d2, f2] = Lu(c2), p2 = br()(c2, `${c2}-element`, { [`${c2}-active`]: a2 }, d2, r2, o2, f2);
          return u2(t2.createElement("div", { className: p2 }, t2.createElement("div", { className: br()(`${c2}-image`, r2), style: i2 }, s2)));
        };
        const Wu = Vu;
        function Ku() {
        }
        const Gu = t2.createContext({ add: Ku, remove: Ku }), Xu = () => {
          const { cancelButtonProps: e3, cancelTextLocale: n2, onCancel: r2 } = (0, t2.useContext)(wl);
          return o().createElement(bl, Object.assign({ onClick: r2 }, e3), n2);
        }, Uu = () => {
          const { confirmLoading: e3, okButtonProps: n2, okType: r2, okTextLocale: i2, onOk: a2 } = (0, t2.useContext)(wl);
          return o().createElement(bl, Object.assign({}, gs(r2), { loading: e3, onClick: a2 }, n2), i2);
        };
        function _u(e3, t3) {
          return o().createElement("span", { className: `${e3}-close-x` }, t3 || o().createElement(Ol, { className: `${e3}-close-icon` }));
        }
        const Qu = (e3) => {
          const { okText: t3, okType: n2 = "primary", cancelText: r2, confirmLoading: i2, onOk: a2, onCancel: s2, okButtonProps: l2, cancelButtonProps: c2, footer: u2 } = e3, [d2] = Ca("Modal", un()), f2 = { confirmLoading: i2, okButtonProps: l2, cancelButtonProps: c2, okTextLocale: t3 || (null == d2 ? void 0 : d2.okText), cancelTextLocale: r2 || (null == d2 ? void 0 : d2.cancelText), okType: n2, onOk: a2, onCancel: s2 }, p2 = o().useMemo(() => f2, x(Object.values(f2)));
          let m2;
          return "function" == typeof u2 || void 0 === u2 ? (m2 = o().createElement(o().Fragment, null, o().createElement(Xu, null), o().createElement(Uu, null)), "function" == typeof u2 && (m2 = u2(m2, { OkBtn: Uu, CancelBtn: Xu })), m2 = o().createElement(xl, { value: p2 }, m2)) : m2 = u2, o().createElement(cr, { disabled: false }, m2);
        }, Yu = (e3) => {
          const { componentCls: t3 } = e3;
          return { [t3]: { position: "relative", maxWidth: "100%", minHeight: 1 } };
        }, Zu = (e3, t3) => ((e4, t4) => {
          const { prefixCls: n2, componentCls: r2, gridColumns: o2 } = e4, i2 = {};
          for (let e5 = o2; e5 >= 0; e5--)
            0 === e5 ? (i2[`${r2}${t4}-${e5}`] = { display: "none" }, i2[`${r2}-push-${e5}`] = { insetInlineStart: "auto" }, i2[`${r2}-pull-${e5}`] = { insetInlineEnd: "auto" }, i2[`${r2}${t4}-push-${e5}`] = { insetInlineStart: "auto" }, i2[`${r2}${t4}-pull-${e5}`] = { insetInlineEnd: "auto" }, i2[`${r2}${t4}-offset-${e5}`] = { marginInlineStart: 0 }, i2[`${r2}${t4}-order-${e5}`] = { order: 0 }) : (i2[`${r2}${t4}-${e5}`] = [{ "--ant-display": "block", display: "block" }, { display: "var(--ant-display)", flex: `0 0 ${e5 / o2 * 100}%`, maxWidth: e5 / o2 * 100 + "%" }], i2[`${r2}${t4}-push-${e5}`] = { insetInlineStart: e5 / o2 * 100 + "%" }, i2[`${r2}${t4}-pull-${e5}`] = { insetInlineEnd: e5 / o2 * 100 + "%" }, i2[`${r2}${t4}-offset-${e5}`] = { marginInlineStart: e5 / o2 * 100 + "%" }, i2[`${r2}${t4}-order-${e5}`] = { order: e5 });
          return i2[`${r2}${t4}-flex`] = { flex: `var(--${n2}${t4}-flex)` }, i2;
        })(e3, t3), Ju = (qa("Grid", (e3) => {
          const { componentCls: t3 } = e3;
          return { [t3]: { display: "flex", flexFlow: "row wrap", minWidth: 0, "&::before, &::after": { display: "flex" }, "&-no-wrap": { flexWrap: "nowrap" }, "&-start": { justifyContent: "flex-start" }, "&-center": { justifyContent: "center" }, "&-end": { justifyContent: "flex-end" }, "&-space-between": { justifyContent: "space-between" }, "&-space-around": { justifyContent: "space-around" }, "&-space-evenly": { justifyContent: "space-evenly" }, "&-top": { alignItems: "flex-start" }, "&-middle": { alignItems: "center" }, "&-bottom": { alignItems: "flex-end" } } };
        }, () => ({})), (e3) => ({ xs: e3.screenXSMin, sm: e3.screenSMMin, md: e3.screenMDMin, lg: e3.screenLGMin, xl: e3.screenXLMin, xxl: e3.screenXXLMin })), ed = (qa("Grid", (e3) => {
          const t3 = Ba(e3, { gridColumns: 24 }), n2 = Ju(t3);
          return delete n2.xs, [Yu(t3), Zu(t3, ""), Zu(t3, "-xs"), Object.keys(n2).map((e4) => ((e5, t4, n3) => ({ [`@media (min-width: ${Ee(t4)})`]: Object.assign({}, Zu(e5, n3)) }))(t3, n2[e4], `-${e4}`)).reduce((e4, t4) => Object.assign(Object.assign({}, e4), t4), {})];
        }, () => ({})), (e3) => ({ animationDuration: e3, animationFillMode: "both" })), td = (e3) => ({ animationDuration: e3, animationFillMode: "both" }), nd = function(e3, t3, n2, r2) {
          const o2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4] ? "&" : "";
          return { [`
      ${o2}${e3}-enter,
      ${o2}${e3}-appear
    `]: Object.assign(Object.assign({}, ed(r2)), { animationPlayState: "paused" }), [`${o2}${e3}-leave`]: Object.assign(Object.assign({}, td(r2)), { animationPlayState: "paused" }), [`
      ${o2}${e3}-enter${e3}-enter-active,
      ${o2}${e3}-appear${e3}-appear-active
    `]: { animationName: t3, animationPlayState: "running" }, [`${o2}${e3}-leave${e3}-leave-active`]: { animationName: n2, animationPlayState: "running", pointerEvents: "none" } };
        }, rd = new qt("antFadeIn", { "0%": { opacity: 0 }, "100%": { opacity: 1 } }), od = new qt("antFadeOut", { "0%": { opacity: 1 }, "100%": { opacity: 0 } }), id = function(e3) {
          let t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const { antCls: n2 } = e3, r2 = `${n2}-fade`, o2 = t3 ? "&" : "";
          return [nd(r2, rd, od, e3.motionDurationMid, t3), { [`
        ${o2}${r2}-enter,
        ${o2}${r2}-appear
      `]: { opacity: 0, animationTimingFunction: "linear" }, [`${o2}${r2}-leave`]: { animationTimingFunction: "linear" } }];
        }, ad = new qt("antZoomIn", { "0%": { transform: "scale(0.2)", opacity: 0 }, "100%": { transform: "scale(1)", opacity: 1 } }), sd = new qt("antZoomOut", { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(0.2)", opacity: 0 } }), ld = new qt("antZoomBigIn", { "0%": { transform: "scale(0.8)", opacity: 0 }, "100%": { transform: "scale(1)", opacity: 1 } }), cd = new qt("antZoomBigOut", { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(0.8)", opacity: 0 } }), ud = new qt("antZoomUpIn", { "0%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 }, "100%": { transform: "scale(1)", transformOrigin: "50% 0%" } }), dd = new qt("antZoomUpOut", { "0%": { transform: "scale(1)", transformOrigin: "50% 0%" }, "100%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 } }), fd = { zoom: { inKeyframes: ad, outKeyframes: sd }, "zoom-big": { inKeyframes: ld, outKeyframes: cd }, "zoom-big-fast": { inKeyframes: ld, outKeyframes: cd }, "zoom-left": { inKeyframes: new qt("antZoomLeftIn", { "0%": { transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0 }, "100%": { transform: "scale(1)", transformOrigin: "0% 50%" } }), outKeyframes: new qt("antZoomLeftOut", { "0%": { transform: "scale(1)", transformOrigin: "0% 50%" }, "100%": { transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0 } }) }, "zoom-right": { inKeyframes: new qt("antZoomRightIn", { "0%": { transform: "scale(0.8)", transformOrigin: "100% 50%", opacity: 0 }, "100%": { transform: "scale(1)", transformOrigin: "100% 50%" } }), outKeyframes: new qt("antZoomRightOut", { "0%": { transform: "scale(1)", transformOrigin: "100% 50%" }, "100%": { transform: "scale(0.8)", transformOrigin: "100% 50%", opacity: 0 } }) }, "zoom-up": { inKeyframes: ud, outKeyframes: dd }, "zoom-down": { inKeyframes: new qt("antZoomDownIn", { "0%": { transform: "scale(0.8)", transformOrigin: "50% 100%", opacity: 0 }, "100%": { transform: "scale(1)", transformOrigin: "50% 100%" } }), outKeyframes: new qt("antZoomDownOut", { "0%": { transform: "scale(1)", transformOrigin: "50% 100%" }, "100%": { transform: "scale(0.8)", transformOrigin: "50% 100%", opacity: 0 } }) } }, pd = (e3, t3) => {
          const { antCls: n2 } = e3, r2 = `${n2}-${t3}`, { inKeyframes: o2, outKeyframes: i2 } = fd[t3];
          return [nd(r2, o2, i2, "zoom-big-fast" === t3 ? e3.motionDurationFast : e3.motionDurationMid), { [`
        ${r2}-enter,
        ${r2}-appear
      `]: { transform: "scale(0)", opacity: 0, animationTimingFunction: e3.motionEaseOutCirc, "&-prepare": { transform: "none" } }, [`${r2}-leave`]: { animationTimingFunction: e3.motionEaseInOutCirc } }];
        };
        function md(e3) {
          return { position: e3, inset: 0 };
        }
        const gd = (e3) => {
          const { componentCls: t3, antCls: n2 } = e3;
          return [{ [`${t3}-root`]: { [`${t3}${n2}-zoom-enter, ${t3}${n2}-zoom-appear`]: { transform: "none", opacity: 0, animationDuration: e3.motionDurationSlow, userSelect: "none" }, [`${t3}${n2}-zoom-leave ${t3}-content`]: { pointerEvents: "none" }, [`${t3}-mask`]: Object.assign(Object.assign({}, md("fixed")), { zIndex: e3.zIndexPopupBase, height: "100%", backgroundColor: e3.colorBgMask, pointerEvents: "none", [`${t3}-hidden`]: { display: "none" } }), [`${t3}-wrap`]: Object.assign(Object.assign({}, md("fixed")), { zIndex: e3.zIndexPopupBase, overflow: "auto", outline: 0, WebkitOverflowScrolling: "touch" }) } }, { [`${t3}-root`]: id(e3) }];
        }, hd = (e3) => {
          const { componentCls: t3 } = e3;
          return [{ [`${t3}-root`]: { [`${t3}-wrap-rtl`]: { direction: "rtl" }, [`${t3}-centered`]: { textAlign: "center", "&::before": { display: "inline-block", width: 0, height: "100%", verticalAlign: "middle", content: '""' }, [t3]: { top: 0, display: "inline-block", paddingBottom: 0, textAlign: "start", verticalAlign: "middle" } }, [`@media (max-width: ${e3.screenSMMax}px)`]: { [t3]: { maxWidth: "calc(100vw - 16px)", margin: `${Ee(e3.marginXS)} auto` }, [`${t3}-centered`]: { [t3]: { flex: 1 } } } } }, { [t3]: Object.assign(Object.assign({}, oi(e3)), { pointerEvents: "none", position: "relative", top: 100, width: "auto", maxWidth: `calc(100vw - ${Ee(e3.calc(e3.margin).mul(2).equal())})`, margin: "0 auto", paddingBottom: e3.paddingLG, [`${t3}-title`]: { margin: 0, color: e3.titleColor, fontWeight: e3.fontWeightStrong, fontSize: e3.titleFontSize, lineHeight: e3.titleLineHeight, wordWrap: "break-word" }, [`${t3}-content`]: { position: "relative", backgroundColor: e3.contentBg, backgroundClip: "padding-box", border: 0, borderRadius: e3.borderRadiusLG, boxShadow: e3.boxShadow, pointerEvents: "auto", padding: e3.contentPadding }, [`${t3}-close`]: Object.assign({ position: "absolute", top: e3.calc(e3.modalHeaderHeight).sub(e3.modalCloseBtnSize).div(2).equal(), insetInlineEnd: e3.calc(e3.modalHeaderHeight).sub(e3.modalCloseBtnSize).div(2).equal(), zIndex: e3.calc(e3.zIndexPopupBase).add(10).equal(), padding: 0, color: e3.modalCloseIconColor, fontWeight: e3.fontWeightStrong, lineHeight: 1, textDecoration: "none", background: "transparent", borderRadius: e3.borderRadiusSM, width: e3.modalCloseBtnSize, height: e3.modalCloseBtnSize, border: 0, outline: 0, cursor: "pointer", transition: `color ${e3.motionDurationMid}, background-color ${e3.motionDurationMid}`, "&-x": { display: "flex", fontSize: e3.fontSizeLG, fontStyle: "normal", lineHeight: Ee(e3.modalCloseBtnSize), justifyContent: "center", textTransform: "none", textRendering: "auto" }, "&:disabled": { pointerEvents: "none" }, "&:hover": { color: e3.modalCloseIconHoverColor, backgroundColor: e3.colorBgTextHover, textDecoration: "none" }, "&:active": { backgroundColor: e3.colorBgTextActive } }, si(e3)), [`${t3}-header`]: { color: e3.colorText, background: e3.headerBg, borderRadius: `${Ee(e3.borderRadiusLG)} ${Ee(e3.borderRadiusLG)} 0 0`, marginBottom: e3.headerMarginBottom, padding: e3.headerPadding, borderBottom: e3.headerBorderBottom }, [`${t3}-body`]: { fontSize: e3.fontSize, lineHeight: e3.lineHeight, wordWrap: "break-word", padding: e3.bodyPadding, [`${t3}-body-skeleton`]: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: `${Ee(e3.margin)} auto` } }, [`${t3}-footer`]: { textAlign: "end", background: e3.footerBg, marginTop: e3.footerMarginTop, padding: e3.footerPadding, borderTop: e3.footerBorderTop, borderRadius: e3.footerBorderRadius, [`> ${e3.antCls}-btn + ${e3.antCls}-btn`]: { marginInlineStart: e3.marginXS } }, [`${t3}-open`]: { overflow: "hidden" } }) }, { [`${t3}-pure-panel`]: { top: "auto", padding: 0, display: "flex", flexDirection: "column", [`${t3}-content,
          ${t3}-body,
          ${t3}-confirm-body-wrapper`]: { display: "flex", flexDirection: "column", flex: "auto" }, [`${t3}-confirm-body`]: { marginBottom: "auto" } } }];
        }, vd = (e3) => {
          const { componentCls: t3 } = e3;
          return { [`${t3}-root`]: { [`${t3}-wrap-rtl`]: { direction: "rtl", [`${t3}-confirm-body`]: { direction: "rtl" } } } };
        }, bd = (e3) => {
          const { componentCls: t3 } = e3, n2 = Ju(e3);
          delete n2.xs;
          const r2 = Object.keys(n2).map((e4) => ({ [`@media (min-width: ${Ee(n2[e4])})`]: { width: `var(--${t3.replace(".", "")}-${e4}-width)` } }));
          return { [`${t3}-root`]: { [t3]: [{ width: `var(--${t3.replace(".", "")}-xs-width)` }].concat(x(r2)) } };
        }, yd = (e3) => {
          const t3 = e3.padding, n2 = e3.fontSizeHeading5, r2 = e3.lineHeightHeading5;
          return Ba(e3, { modalHeaderHeight: e3.calc(e3.calc(r2).mul(n2).equal()).add(e3.calc(t3).mul(2).equal()).equal(), modalFooterBorderColorSplit: e3.colorSplit, modalFooterBorderStyle: e3.lineType, modalFooterBorderWidth: e3.lineWidth, modalCloseIconColor: e3.colorIcon, modalCloseIconHoverColor: e3.colorIconHover, modalCloseBtnSize: e3.controlHeight, modalConfirmIconSize: e3.fontHeight, modalTitleHeight: e3.calc(e3.titleFontSize).mul(e3.titleLineHeight).equal() });
        }, Cd = (e3) => ({ footerBg: "transparent", headerBg: e3.colorBgElevated, titleLineHeight: e3.lineHeightHeading5, titleFontSize: e3.fontSizeHeading5, contentBg: e3.colorBgElevated, titleColor: e3.colorTextHeading, contentPadding: e3.wireframe ? 0 : `${Ee(e3.paddingMD)} ${Ee(e3.paddingContentHorizontalLG)}`, headerPadding: e3.wireframe ? `${Ee(e3.padding)} ${Ee(e3.paddingLG)}` : 0, headerBorderBottom: e3.wireframe ? `${Ee(e3.lineWidth)} ${e3.lineType} ${e3.colorSplit}` : "none", headerMarginBottom: e3.wireframe ? 0 : e3.marginXS, bodyPadding: e3.wireframe ? e3.paddingLG : 0, footerPadding: e3.wireframe ? `${Ee(e3.paddingXS)} ${Ee(e3.padding)}` : 0, footerBorderTop: e3.wireframe ? `${Ee(e3.lineWidth)} ${e3.lineType} ${e3.colorSplit}` : "none", footerBorderRadius: e3.wireframe ? `0 0 ${Ee(e3.borderRadiusLG)} ${Ee(e3.borderRadiusLG)}` : 0, footerMarginTop: e3.wireframe ? 0 : e3.marginSM, confirmBodyPadding: e3.wireframe ? `${Ee(2 * e3.padding)} ${Ee(2 * e3.padding)} ${Ee(e3.paddingLG)}` : 0, confirmIconMarginInlineEnd: e3.wireframe ? e3.margin : e3.marginSM, confirmBtnsMarginTop: e3.wireframe ? e3.marginLG : e3.marginSM }), wd = qa("Modal", (e3) => {
          const t3 = yd(e3);
          return [hd(t3), vd(t3), gd(t3), pd(t3, "zoom"), bd(t3)];
        }, Cd, { unitless: { titleLineHeight: true } });
        let xd;
        T() && window.document.documentElement && document.documentElement.addEventListener("click", (e3) => {
          xd = { x: e3.pageX, y: e3.pageY }, setTimeout(() => {
            xd = null;
          }, 100);
        }, true);
        const Sd = (e3) => {
          var n2;
          const { getPopupContainer: r2, getPrefixCls: i2, direction: a2, modal: s2 } = t2.useContext(E), l2 = (t3) => {
            const { onCancel: n3 } = e3;
            null == n3 || n3(t3);
          }, { prefixCls: c2, className: u2, rootClassName: d2, open: f2, wrapClassName: p2, centered: m2, getContainer: g2, focusTriggerAfterClose: h2 = true, style: v2, visible: b2, width: y2 = 520, footer: C2, classNames: w2, styles: x2, children: S2, loading: A2 } = e3, k2 = function(e4, t3) {
            var n3 = {};
            for (var r3 in e4)
              Object.prototype.hasOwnProperty.call(e4, r3) && t3.indexOf(r3) < 0 && (n3[r3] = e4[r3]);
            if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
              var o2 = 0;
              for (r3 = Object.getOwnPropertySymbols(e4); o2 < r3.length; o2++)
                t3.indexOf(r3[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, r3[o2]) && (n3[r3[o2]] = e4[r3[o2]]);
            }
            return n3;
          }(e3, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "focusTriggerAfterClose", "style", "visible", "width", "footer", "classNames", "styles", "children", "loading"]), O2 = i2("modal", c2), P2 = i2(), I2 = Su(O2), [j2, $2, N2] = wd(O2, I2), M2 = br()(p2, { [`${O2}-centered`]: !!m2, [`${O2}-wrap-rtl`]: "rtl" === a2 }), R2 = null === C2 || A2 ? null : t2.createElement(Qu, Object.assign({}, e3, { onOk: (t3) => {
            const { onOk: n3 } = e3;
            null == n3 || n3(t3);
          }, onCancel: l2 })), [B2, T2, F2] = function(e4, t3) {
            let n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xu;
            const r3 = Cu(e4), i3 = Cu(t3), a3 = "boolean" != typeof r3 && !!(null == r3 ? void 0 : r3.disabled), s3 = o().useMemo(() => Object.assign({ closeIcon: o().createElement(Ol, null) }, n3), [n3]), l3 = o().useMemo(() => false !== r3 && (r3 ? wu(s3, i3, r3) : false !== i3 && (i3 ? wu(s3, i3) : !!s3.closable && s3)), [r3, i3, s3]);
            return o().useMemo(() => {
              if (false === l3)
                return [false, null, a3];
              const { closeIconRender: e5 } = s3, { closeIcon: t4 } = l3;
              let n4 = t4;
              if (null != n4) {
                e5 && (n4 = e5(t4));
                const r4 = Kl(l3, true);
                Object.keys(r4).length && (n4 = o().isValidElement(n4) ? o().cloneElement(n4, r4) : o().createElement("span", Object.assign({}, r4), n4));
              }
              return [true, n4, a3];
            }, [l3, s3]);
          }(yu(e3), yu(s2), { closable: true, closeIcon: t2.createElement(Ol, { className: `${O2}-close-icon` }), closeIconRender: (e4) => _u(O2, e4) }), L2 = function(e4) {
            const n3 = t2.useContext(Gu), r3 = t2.useRef(null);
            return Kr((t3) => {
              if (t3) {
                const o2 = e4 ? t3.querySelector(e4) : t3;
                n3.add(o2), r3.current = o2;
              } else
                n3.remove(r3.current);
            });
          }(`.${O2}-content`), [z2, H2] = pa("Modal", k2.zIndex), [D2, q2] = t2.useMemo(() => y2 && "object" == typeof y2 ? [void 0, y2] : [y2, void 0], [y2]), V2 = t2.useMemo(() => {
            const e4 = {};
            return q2 && Object.keys(q2).forEach((t3) => {
              const n3 = q2[t3];
              void 0 !== n3 && (e4[`--${O2}-${t3}-width`] = "number" == typeof n3 ? `${n3}px` : n3);
            }), e4;
          }, [q2]);
          return j2(t2.createElement(bu, { form: true, space: true }, t2.createElement(ca.Provider, { value: H2 }, t2.createElement(oc, Object.assign({ width: D2 }, k2, { zIndex: z2, getContainer: void 0 === g2 ? r2 : g2, prefixCls: O2, rootClassName: br()($2, d2, N2, I2), footer: R2, visible: null != f2 ? f2 : b2, mousePosition: null !== (n2 = k2.mousePosition) && void 0 !== n2 ? n2 : xd, onClose: l2, closable: B2 ? { disabled: F2, closeIcon: T2 } : B2, closeIcon: T2, focusTriggerAfterClose: h2, transitionName: ba(P2, "zoom", e3.transitionName), maskTransitionName: ba(P2, "fade", e3.maskTransitionName), className: br()($2, u2, null == s2 ? void 0 : s2.className), style: Object.assign(Object.assign(Object.assign({}, null == s2 ? void 0 : s2.style), v2), V2), classNames: Object.assign(Object.assign(Object.assign({}, null == s2 ? void 0 : s2.classNames), w2), { wrapper: br()(M2, null == w2 ? void 0 : w2.wrapper) }), styles: Object.assign(Object.assign({}, null == s2 ? void 0 : s2.styles), x2), panelRef: L2 }), A2 ? t2.createElement(Wu, { active: true, title: false, paragraph: { rows: 4 }, className: `${O2}-body-skeleton` }) : S2))));
        }, Ad = (e3) => {
          const { componentCls: t3, titleFontSize: n2, titleLineHeight: r2, modalConfirmIconSize: o2, fontSize: i2, lineHeight: a2, modalTitleHeight: s2, fontHeight: l2, confirmBodyPadding: c2 } = e3, u2 = `${t3}-confirm`;
          return { [u2]: { "&-rtl": { direction: "rtl" }, [`${e3.antCls}-modal-header`]: { display: "none" }, [`${u2}-body-wrapper`]: Object.assign({}, { "&::before": { display: "table", content: '""' }, "&::after": { display: "table", clear: "both", content: '""' } }), [`&${t3} ${t3}-body`]: { padding: c2 }, [`${u2}-body`]: { display: "flex", flexWrap: "nowrap", alignItems: "start", [`> ${e3.iconCls}`]: { flex: "none", fontSize: o2, marginInlineEnd: e3.confirmIconMarginInlineEnd, marginTop: e3.calc(e3.calc(l2).sub(o2).equal()).div(2).equal() }, [`&-has-title > ${e3.iconCls}`]: { marginTop: e3.calc(e3.calc(s2).sub(o2).equal()).div(2).equal() } }, [`${u2}-paragraph`]: { display: "flex", flexDirection: "column", flex: "auto", rowGap: e3.marginXS, maxWidth: `calc(100% - ${Ee(e3.marginSM)})` }, [`${e3.iconCls} + ${u2}-paragraph`]: { maxWidth: `calc(100% - ${Ee(e3.calc(e3.modalConfirmIconSize).add(e3.marginSM).equal())})` }, [`${u2}-title`]: { color: e3.colorTextHeading, fontWeight: e3.fontWeightStrong, fontSize: n2, lineHeight: r2 }, [`${u2}-content`]: { color: e3.colorText, fontSize: i2, lineHeight: a2 }, [`${u2}-btns`]: { textAlign: "end", marginTop: e3.confirmBtnsMarginTop, [`${e3.antCls}-btn + ${e3.antCls}-btn`]: { marginBottom: 0, marginInlineStart: e3.marginXS } } }, [`${u2}-error ${u2}-body > ${e3.iconCls}`]: { color: e3.colorError }, [`${u2}-warning ${u2}-body > ${e3.iconCls},
        ${u2}-confirm ${u2}-body > ${e3.iconCls}`]: { color: e3.colorWarning }, [`${u2}-info ${u2}-body > ${e3.iconCls}`]: { color: e3.colorInfo }, [`${u2}-success ${u2}-body > ${e3.iconCls}`]: { color: e3.colorSuccess } };
        }, Ed = Wa(["Modal", "confirm"], (e3) => {
          const t3 = yd(e3);
          return [Ad(t3)];
        }, Cd, { order: -1e3 });
        function kd(e3) {
          const { prefixCls: n2, icon: r2, okText: o2, cancelText: i2, confirmPrefixCls: a2, type: s2, okCancel: l2, footer: c2, locale: u2 } = e3, d2 = function(e4, t3) {
            var n3 = {};
            for (var r3 in e4)
              Object.prototype.hasOwnProperty.call(e4, r3) && t3.indexOf(r3) < 0 && (n3[r3] = e4[r3]);
            if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
              var o3 = 0;
              for (r3 = Object.getOwnPropertySymbols(e4); o3 < r3.length; o3++)
                t3.indexOf(r3[o3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, r3[o3]) && (n3[r3[o3]] = e4[r3[o3]]);
            }
            return n3;
          }(e3, ["prefixCls", "icon", "okText", "cancelText", "confirmPrefixCls", "type", "okCancel", "footer", "locale"]);
          let f2 = r2;
          if (!r2 && null !== r2)
            switch (s2) {
              case "info":
                f2 = t2.createElement(la, null);
                break;
              case "success":
                f2 = t2.createElement(Ji, null);
                break;
              case "error":
                f2 = t2.createElement(na, null);
                break;
              default:
                f2 = t2.createElement(ia, null);
            }
          const p2 = null != l2 ? l2 : "confirm" === s2, m2 = null !== e3.autoFocusButton && (e3.autoFocusButton || "ok"), [g2] = Ca("Modal"), h2 = u2 || g2, v2 = o2 || (p2 ? null == h2 ? void 0 : h2.okText : null == h2 ? void 0 : h2.justOkText), b2 = i2 || (null == h2 ? void 0 : h2.cancelText), y2 = Object.assign({ autoFocusButton: m2, cancelTextLocale: b2, okTextLocale: v2, mergedOkCancel: p2 }, d2), C2 = t2.useMemo(() => y2, x(Object.values(y2))), w2 = t2.createElement(t2.Fragment, null, t2.createElement(Sl, null), t2.createElement(Al, null)), S2 = void 0 !== e3.title && null !== e3.title, A2 = `${a2}-body`;
          return t2.createElement("div", { className: `${a2}-body-wrapper` }, t2.createElement("div", { className: br()(A2, { [`${A2}-has-title`]: S2 }) }, f2, t2.createElement("div", { className: `${a2}-paragraph` }, S2 && t2.createElement("span", { className: `${a2}-title` }, e3.title), t2.createElement("div", { className: `${a2}-content` }, e3.content))), void 0 === c2 || "function" == typeof c2 ? t2.createElement(xl, { value: C2 }, t2.createElement("div", { className: `${a2}-btns` }, "function" == typeof c2 ? c2(w2, { OkBtn: Al, CancelBtn: Sl }) : w2)) : c2, t2.createElement(Ed, { prefixCls: n2 }));
        }
        const Od = (e3) => {
          const { close: n2, zIndex: r2, maskStyle: o2, direction: i2, prefixCls: a2, wrapClassName: s2, rootPrefixCls: l2, bodyStyle: c2, closable: u2 = false, onConfirm: d2, styles: f2 } = e3, p2 = `${a2}-confirm`, m2 = e3.width || 416, g2 = e3.style || {}, h2 = void 0 === e3.mask || e3.mask, v2 = void 0 !== e3.maskClosable && e3.maskClosable, b2 = br()(p2, `${p2}-${e3.type}`, { [`${p2}-rtl`]: "rtl" === i2 }, e3.className), [, y2] = ei(), C2 = t2.useMemo(() => void 0 !== r2 ? r2 : y2.zIndexPopupBase + 1e3, [r2, y2]);
          return t2.createElement(Sd, Object.assign({}, e3, { className: b2, wrapClassName: br()({ [`${p2}-centered`]: !!e3.centered }, s2), onCancel: () => {
            null == n2 || n2({ triggerCancel: true }), null == d2 || d2(false);
          }, title: "", footer: null, transitionName: ba(l2 || "", "zoom", e3.transitionName), maskTransitionName: ba(l2 || "", "fade", e3.maskTransitionName), mask: h2, maskClosable: v2, style: g2, styles: Object.assign({ body: c2, mask: o2 }, f2), width: m2, zIndex: C2, closable: u2 }), t2.createElement(kd, Object.assign({}, e3, { confirmPrefixCls: p2 })));
        }, Pd = (e3) => {
          const { rootPrefixCls: n2, iconPrefixCls: r2, direction: o2, theme: i2 } = e3;
          return t2.createElement(yi, { prefixCls: n2, iconPrefixCls: r2, direction: o2, theme: i2 }, t2.createElement(Od, Object.assign({}, e3)));
        }, Id = [];
        let jd = "";
        function $d() {
          return jd;
        }
        const Nd = (e3) => {
          var n2, r2;
          const { prefixCls: i2, getContainer: a2, direction: s2 } = e3, l2 = un(), c2 = (0, t2.useContext)(E), u2 = $d() || c2.getPrefixCls(), d2 = i2 || `${u2}-modal`;
          let f2 = a2;
          return false === f2 && (f2 = void 0), o().createElement(Pd, Object.assign({}, e3, { rootPrefixCls: u2, prefixCls: d2, iconPrefixCls: c2.iconPrefixCls, theme: c2.theme, direction: null != s2 ? s2 : c2.direction, locale: null !== (r2 = null === (n2 = c2.locale) || void 0 === n2 ? void 0 : n2.Modal) && void 0 !== r2 ? r2 : l2, getContainer: f2 }));
        };
        function Md(e3) {
          const t3 = hi(), n2 = document.createDocumentFragment();
          let r2, i2, a2 = Object.assign(Object.assign({}, e3), { close: c2, open: true });
          function s2() {
            for (var t4, n3 = arguments.length, r3 = new Array(n3), o2 = 0; o2 < n3; o2++)
              r3[o2] = arguments[o2];
            var a3;
            r3.some((e4) => null == e4 ? void 0 : e4.triggerCancel) && (null === (t4 = e3.onCancel) || void 0 === t4 || (a3 = t4).call.apply(a3, [e3, () => {
            }].concat(x(r3.slice(1)))));
            for (let e4 = 0; e4 < Id.length; e4++)
              if (Id[e4] === c2) {
                Id.splice(e4, 1);
                break;
              }
            i2();
          }
          function l2(e4) {
            clearTimeout(r2), r2 = setTimeout(() => {
              const r3 = t3.getPrefixCls(void 0, $d()), a3 = t3.getIconPrefixCls(), s3 = t3.getTheme(), l3 = o().createElement(Nd, Object.assign({}, e4)), c3 = Bi();
              i2 = c3(o().createElement(yi, { prefixCls: r3, iconPrefixCls: a3, theme: s3 }, t3.holderRender ? t3.holderRender(l3) : l3), n2);
            });
          }
          function c2() {
            for (var t4 = arguments.length, n3 = new Array(t4), r3 = 0; r3 < t4; r3++)
              n3[r3] = arguments[r3];
            a2 = Object.assign(Object.assign({}, a2), { open: false, afterClose: () => {
              "function" == typeof e3.afterClose && e3.afterClose(), s2.apply(this, n3);
            } }), a2.visible && delete a2.visible, l2(a2);
          }
          return l2(a2), Id.push(c2), { destroy: c2, update: function(e4) {
            a2 = "function" == typeof e4 ? e4(a2) : Object.assign(Object.assign({}, a2), e4), l2(a2);
          } };
        }
        function Rd(e3) {
          return Object.assign(Object.assign({}, e3), { type: "warning" });
        }
        function Bd(e3) {
          return Object.assign(Object.assign({}, e3), { type: "info" });
        }
        function Td(e3) {
          return Object.assign(Object.assign({}, e3), { type: "success" });
        }
        function Fd(e3) {
          return Object.assign(Object.assign({}, e3), { type: "error" });
        }
        function Ld(e3) {
          return Object.assign(Object.assign({}, e3), { type: "confirm" });
        }
        function zd(e3) {
          return (n2) => t2.createElement(yi, { theme: { token: { motion: false, zIndexPopupBase: 0 } } }, t2.createElement(e3, Object.assign({}, n2)));
        }
        const Hd = zd((e3) => {
          const { prefixCls: n2, className: r2, closeIcon: o2, closable: i2, type: a2, title: s2, children: l2, footer: c2 } = e3, u2 = function(e4, t3) {
            var n3 = {};
            for (var r3 in e4)
              Object.prototype.hasOwnProperty.call(e4, r3) && t3.indexOf(r3) < 0 && (n3[r3] = e4[r3]);
            if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
              var o3 = 0;
              for (r3 = Object.getOwnPropertySymbols(e4); o3 < r3.length; o3++)
                t3.indexOf(r3[o3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, r3[o3]) && (n3[r3[o3]] = e4[r3[o3]]);
            }
            return n3;
          }(e3, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children", "footer"]), { getPrefixCls: d2 } = t2.useContext(E), f2 = d2(), p2 = n2 || d2("modal"), m2 = Su(f2), [g2, h2, v2] = wd(p2, m2), b2 = `${p2}-confirm`;
          let y2 = {};
          return y2 = a2 ? { closable: null != i2 && i2, title: "", footer: "", children: t2.createElement(kd, Object.assign({}, e3, { prefixCls: p2, confirmPrefixCls: b2, rootPrefixCls: f2, content: l2 })) } : { closable: null == i2 || i2, title: s2, footer: null !== c2 && t2.createElement(Qu, Object.assign({}, e3)), children: l2 }, g2(t2.createElement(Zl, Object.assign({ prefixCls: p2, className: br()(h2, `${p2}-pure-panel`, a2 && b2, a2 && `${b2}-${a2}`, r2, v2, m2) }, u2, { closeIcon: _u(p2, o2), closable: i2 }, y2)));
        });
        const Dd = (e3, n2) => {
          var r2, { afterClose: o2, config: i2 } = e3, a2 = function(e4, t3) {
            var n3 = {};
            for (var r3 in e4)
              Object.prototype.hasOwnProperty.call(e4, r3) && t3.indexOf(r3) < 0 && (n3[r3] = e4[r3]);
            if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
              var o3 = 0;
              for (r3 = Object.getOwnPropertySymbols(e4); o3 < r3.length; o3++)
                t3.indexOf(r3[o3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, r3[o3]) && (n3[r3[o3]] = e4[r3[o3]]);
            }
            return n3;
          }(e3, ["afterClose", "config"]);
          const [s2, l2] = t2.useState(true), [c2, u2] = t2.useState(i2), { direction: d2, getPrefixCls: f2 } = t2.useContext(E), p2 = f2("modal"), m2 = f2(), g2 = function() {
            var e4, t3;
            l2(false);
            for (var n3 = arguments.length, r3 = new Array(n3), o3 = 0; o3 < n3; o3++)
              r3[o3] = arguments[o3];
            r3.some((e5) => null == e5 ? void 0 : e5.triggerCancel) && (null === (e4 = c2.onCancel) || void 0 === e4 || (t3 = e4).call.apply(t3, [c2, () => {
            }].concat(x(r3.slice(1)))));
          };
          t2.useImperativeHandle(n2, () => ({ destroy: g2, update: (e4) => {
            u2((t3) => Object.assign(Object.assign({}, t3), e4));
          } }));
          const h2 = null !== (r2 = c2.okCancel) && void 0 !== r2 ? r2 : "confirm" === c2.type, [v2] = Ca("Modal", an.Modal);
          return t2.createElement(Pd, Object.assign({ prefixCls: p2, rootPrefixCls: m2 }, c2, { close: g2, open: s2, afterClose: () => {
            var e4;
            o2(), null === (e4 = c2.afterClose) || void 0 === e4 || e4.call(c2);
          }, okText: c2.okText || (h2 ? null == v2 ? void 0 : v2.okText : null == v2 ? void 0 : v2.justOkText), direction: c2.direction || d2, cancelText: c2.cancelText || (null == v2 ? void 0 : v2.cancelText) }, a2));
        }, qd = t2.forwardRef(Dd);
        let Vd = 0;
        const Wd = t2.memo(t2.forwardRef((e3, n2) => {
          const [r2, o2] = function() {
            const [e4, n3] = t2.useState([]);
            return [e4, t2.useCallback((e5) => (n3((t3) => [].concat(x(t3), [e5])), () => {
              n3((t3) => t3.filter((t4) => t4 !== e5));
            }), [])];
          }();
          return t2.useImperativeHandle(n2, () => ({ patchElement: o2 }), []), t2.createElement(t2.Fragment, null, r2);
        }));
        function Kd(e3) {
          return Md(Rd(e3));
        }
        const Gd = Sd;
        Gd.useModal = function() {
          const e3 = t2.useRef(null), [n2, r2] = t2.useState([]);
          t2.useEffect(() => {
            n2.length && (x(n2).forEach((e4) => {
              e4();
            }), r2([]));
          }, [n2]);
          const o2 = t2.useCallback((n3) => function(o3) {
            var i2;
            Vd += 1;
            const a2 = t2.createRef();
            let s2;
            const l2 = new Promise((e4) => {
              s2 = e4;
            });
            let c2, u2 = false;
            const d2 = t2.createElement(qd, { key: `modal-${Vd}`, config: n3(o3), ref: a2, afterClose: () => {
              null == c2 || c2();
            }, isSilent: () => u2, onConfirm: (e4) => {
              s2(e4);
            } });
            c2 = null === (i2 = e3.current) || void 0 === i2 ? void 0 : i2.patchElement(d2), c2 && Id.push(c2);
            const f2 = { destroy: () => {
              function e4() {
                var e5;
                null === (e5 = a2.current) || void 0 === e5 || e5.destroy();
              }
              a2.current ? e4() : r2((t3) => [].concat(x(t3), [e4]));
            }, update: (e4) => {
              function t3() {
                var t4;
                null === (t4 = a2.current) || void 0 === t4 || t4.update(e4);
              }
              a2.current ? t3() : r2((e5) => [].concat(x(e5), [t3]));
            }, then: (e4) => (u2 = true, l2.then(e4)) };
            return f2;
          }, []);
          return [t2.useMemo(() => ({ info: o2(Bd), success: o2(Td), error: o2(Fd), warning: o2(Rd), confirm: o2(Ld) }), []), t2.createElement(Wd, { key: "modal-holder", ref: e3 })];
        }, Gd.info = function(e3) {
          return Md(Bd(e3));
        }, Gd.success = function(e3) {
          return Md(Td(e3));
        }, Gd.error = function(e3) {
          return Md(Fd(e3));
        }, Gd.warning = Kd, Gd.warn = Kd, Gd.confirm = function(e3) {
          return Md(Ld(e3));
        }, Gd.destroyAll = function() {
          for (; Id.length; ) {
            const e3 = Id.pop();
            e3 && e3();
          }
        }, Gd.config = function(e3) {
          let { rootPrefixCls: t3 } = e3;
          jd = t3;
        }, Gd._InternalPanelDoNotUseOrYouWillBeFired = Hd;
        const Xd = Gd;
        var Ud = n(571), _d = {};
        _d.styleTagTransform = h(), _d.setAttributes = f(), _d.insert = u().bind(null, "head"), _d.domAPI = l(), _d.insertStyleElement = m(), a()(Ud.A, _d), Ud.A && Ud.A.locals && Ud.A.locals;
        const Qd = ({ isOpen: t3, showMask: n2, closePlurality: r2, frameUrl: o2, style: i2 }) => (0, e2.jsx)(e2.Fragment, { children: (0, e2.jsx)(Xd, { visible: !t3, footer: null, centered: true, onOk: () => {
          r2();
        }, onCancel: () => {
          r2();
        }, maskClosable: false, width: 460, mask: n2, closable: n2, bodyStyle: { height: "560px", padding: 0 }, style: { borderRadius: "20px", backgroundColor: "transparent" }, className: "modalCustom", children: (0, e2.jsx)("div", { className: "popup-container", children: (0, e2.jsx)("div", { className: "popup-content", children: (0, e2.jsx)("iframe", { title: "PluralityPopup", src: o2, frameBorder: "0", id: "iframe", style: i2, allow: "transparency" }) }) }) }) }), Yd = class {
          static sendRequest = (e3, ...t3) => {
            const n2 = localStorage.getItem("isOpen");
            return new Promise((r2, o2) => {
              const i2 = `msg-${Date.now()}`;
              function a2(t4) {
                t4.data.eventName !== e3 && "errorMessage" !== t4.data.eventName || t4.data.id !== i2 ? "noEthersProvider" === t4.data.eventName && t4.data.id === i2 && alert(`${t4.data}`) : (r2(t4.data), window.removeEventListener("message", a2));
              }
              console.log("registering event listener for"), console.log(i2), window.addEventListener("message", a2);
              const s2 = document.getElementById("iframe");
              if (s2?.contentWindow) {
                const r3 = { id: i2, type: "metamaskRequest", method: e3, isWidgetOpen: n2 || "false" };
                t3.length > 0 && ("sendTransaction" === e3 ? r3.raw_transaction = t3[0] : "getTransactionCount" === e3 ? r3.address = t3[0] : "getAllAccounts" === e3 || "getConnectedAccount" === e3 || "getBalance" === e3 || "getBlockNumber" === e3 || "switchNetwork" === e3 ? r3.rpc = t3[0] : "getPublicData" === e3 || "setPublicData" === e3 || "setAppData" === e3 || "getPrivateData" === e3 || "getAppData" === e3 || "setPrivateData" === e3 ? r3.key = t3[0] : "navigateTo" === e3 ? r3.step = t3[0] : r3.message = t3[0]), t3.length > 1 && ("switchNetwork" === e3 || "getAllAccounts" === e3 || "getConnectedAccount" === e3 || "getBalance" === e3 || "getBlockNumber" === e3 ? r3.chain_id = t3[1] : "sendTransaction" === e3 || "getTransactionCount" === e3 ? r3.rpc = t3[1] : "setPublicData" === e3 || "setAppData" === e3 || "setPrivateData" === e3 ? r3.value = t3[1] : r3.signature = t3[1]), t3.length > 2 && ("sendTransaction" === e3 || "getTransactionCount" === e3 ? r3.chain_id = t3[2] : (r3.address = t3[0], r3.abi = t3[1], r3.method_name = t3[2], r3.method_params = t3[3], r3.rpc = t3[4], r3.chain_id = t3[5], r3.options = t3[6])), s2.contentWindow.postMessage(r3, "https://app.plurality.network");
              } else
                window.removeEventListener("message", a2), o2(new Error("Iframe not found or iframe content window is not accessible"));
            });
          };
        };
        var Zd = t2.createContext(null), Jd = function() {
          if ("undefined" != typeof Map)
            return Map;
          function e3(e4, t3) {
            var n2 = -1;
            return e4.some(function(e5, r2) {
              return e5[0] === t3 && (n2 = r2, true);
            }), n2;
          }
          return function() {
            function t3() {
              this.__entries__ = [];
            }
            return Object.defineProperty(t3.prototype, "size", { get: function() {
              return this.__entries__.length;
            }, enumerable: true, configurable: true }), t3.prototype.get = function(t4) {
              var n2 = e3(this.__entries__, t4), r2 = this.__entries__[n2];
              return r2 && r2[1];
            }, t3.prototype.set = function(t4, n2) {
              var r2 = e3(this.__entries__, t4);
              ~r2 ? this.__entries__[r2][1] = n2 : this.__entries__.push([t4, n2]);
            }, t3.prototype.delete = function(t4) {
              var n2 = this.__entries__, r2 = e3(n2, t4);
              ~r2 && n2.splice(r2, 1);
            }, t3.prototype.has = function(t4) {
              return !!~e3(this.__entries__, t4);
            }, t3.prototype.clear = function() {
              this.__entries__.splice(0);
            }, t3.prototype.forEach = function(e4, t4) {
              void 0 === t4 && (t4 = null);
              for (var n2 = 0, r2 = this.__entries__; n2 < r2.length; n2++) {
                var o2 = r2[n2];
                e4.call(t4, o2[1], o2[0]);
              }
            }, t3;
          }();
        }(), ef = "undefined" != typeof window && "undefined" != typeof document && window.document === document, tf = void 0 !== n.g && n.g.Math === Math ? n.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(), nf = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(tf) : function(e3) {
          return setTimeout(function() {
            return e3(Date.now());
          }, 1e3 / 60);
        }, rf = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], of = "undefined" != typeof MutationObserver, af = function() {
          function e3() {
            this.connected_ = false, this.mutationEventsAdded_ = false, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = /* @__PURE__ */ function(e4) {
              var t3 = false, n2 = false, r2 = 0;
              function o2() {
                t3 && (t3 = false, e4()), n2 && a2();
              }
              function i2() {
                nf(o2);
              }
              function a2() {
                var e5 = Date.now();
                if (t3) {
                  if (e5 - r2 < 2)
                    return;
                  n2 = true;
                } else
                  t3 = true, n2 = false, setTimeout(i2, 20);
                r2 = e5;
              }
              return a2;
            }(this.refresh.bind(this));
          }
          return e3.prototype.addObserver = function(e4) {
            ~this.observers_.indexOf(e4) || this.observers_.push(e4), this.connected_ || this.connect_();
          }, e3.prototype.removeObserver = function(e4) {
            var t3 = this.observers_, n2 = t3.indexOf(e4);
            ~n2 && t3.splice(n2, 1), !t3.length && this.connected_ && this.disconnect_();
          }, e3.prototype.refresh = function() {
            this.updateObservers_() && this.refresh();
          }, e3.prototype.updateObservers_ = function() {
            var e4 = this.observers_.filter(function(e5) {
              return e5.gatherActive(), e5.hasActive();
            });
            return e4.forEach(function(e5) {
              return e5.broadcastActive();
            }), e4.length > 0;
          }, e3.prototype.connect_ = function() {
            ef && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), of ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: true, childList: true, characterData: true, subtree: true })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = true), this.connected_ = true);
          }, e3.prototype.disconnect_ = function() {
            ef && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = false, this.connected_ = false);
          }, e3.prototype.onTransitionEnd_ = function(e4) {
            var t3 = e4.propertyName, n2 = void 0 === t3 ? "" : t3;
            rf.some(function(e5) {
              return !!~n2.indexOf(e5);
            }) && this.refresh();
          }, e3.getInstance = function() {
            return this.instance_ || (this.instance_ = new e3()), this.instance_;
          }, e3.instance_ = null, e3;
        }(), sf = function(e3, t3) {
          for (var n2 = 0, r2 = Object.keys(t3); n2 < r2.length; n2++) {
            var o2 = r2[n2];
            Object.defineProperty(e3, o2, { value: t3[o2], enumerable: false, writable: false, configurable: true });
          }
          return e3;
        }, lf = function(e3) {
          return e3 && e3.ownerDocument && e3.ownerDocument.defaultView || tf;
        }, cf = mf(0, 0, 0, 0);
        function uf(e3) {
          return parseFloat(e3) || 0;
        }
        function df(e3) {
          for (var t3 = [], n2 = 1; n2 < arguments.length; n2++)
            t3[n2 - 1] = arguments[n2];
          return t3.reduce(function(t4, n3) {
            return t4 + uf(e3["border-" + n3 + "-width"]);
          }, 0);
        }
        var ff = "undefined" != typeof SVGGraphicsElement ? function(e3) {
          return e3 instanceof lf(e3).SVGGraphicsElement;
        } : function(e3) {
          return e3 instanceof lf(e3).SVGElement && "function" == typeof e3.getBBox;
        };
        function pf(e3) {
          return ef ? ff(e3) ? function(e4) {
            var t3 = e4.getBBox();
            return mf(0, 0, t3.width, t3.height);
          }(e3) : function(e4) {
            var t3 = e4.clientWidth, n2 = e4.clientHeight;
            if (!t3 && !n2)
              return cf;
            var r2 = lf(e4).getComputedStyle(e4), o2 = function(e5) {
              for (var t4 = {}, n3 = 0, r3 = ["top", "right", "bottom", "left"]; n3 < r3.length; n3++) {
                var o3 = r3[n3], i3 = e5["padding-" + o3];
                t4[o3] = uf(i3);
              }
              return t4;
            }(r2), i2 = o2.left + o2.right, a2 = o2.top + o2.bottom, s2 = uf(r2.width), l2 = uf(r2.height);
            if ("border-box" === r2.boxSizing && (Math.round(s2 + i2) !== t3 && (s2 -= df(r2, "left", "right") + i2), Math.round(l2 + a2) !== n2 && (l2 -= df(r2, "top", "bottom") + a2)), !function(e5) {
              return e5 === lf(e5).document.documentElement;
            }(e4)) {
              var c2 = Math.round(s2 + i2) - t3, u2 = Math.round(l2 + a2) - n2;
              1 !== Math.abs(c2) && (s2 -= c2), 1 !== Math.abs(u2) && (l2 -= u2);
            }
            return mf(o2.left, o2.top, s2, l2);
          }(e3) : cf;
        }
        function mf(e3, t3, n2, r2) {
          return { x: e3, y: t3, width: n2, height: r2 };
        }
        var gf = function() {
          function e3(e4) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = mf(0, 0, 0, 0), this.target = e4;
          }
          return e3.prototype.isActive = function() {
            var e4 = pf(this.target);
            return this.contentRect_ = e4, e4.width !== this.broadcastWidth || e4.height !== this.broadcastHeight;
          }, e3.prototype.broadcastRect = function() {
            var e4 = this.contentRect_;
            return this.broadcastWidth = e4.width, this.broadcastHeight = e4.height, e4;
          }, e3;
        }(), hf = function(e3, t3) {
          var n2 = function(e4) {
            var t4 = e4.x, n3 = e4.y, r2 = e4.width, o2 = e4.height, i2 = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, a2 = Object.create(i2.prototype);
            return sf(a2, { x: t4, y: n3, width: r2, height: o2, top: n3, right: t4 + r2, bottom: o2 + n3, left: t4 }), a2;
          }(t3);
          sf(this, { target: e3, contentRect: n2 });
        }, vf = function() {
          function e3(e4, t3, n2) {
            if (this.activeObservations_ = [], this.observations_ = new Jd(), "function" != typeof e4)
              throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = e4, this.controller_ = t3, this.callbackCtx_ = n2;
          }
          return e3.prototype.observe = function(e4) {
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(e4 instanceof lf(e4).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var t3 = this.observations_;
              t3.has(e4) || (t3.set(e4, new gf(e4)), this.controller_.addObserver(this), this.controller_.refresh());
            }
          }, e3.prototype.unobserve = function(e4) {
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(e4 instanceof lf(e4).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var t3 = this.observations_;
              t3.has(e4) && (t3.delete(e4), t3.size || this.controller_.removeObserver(this));
            }
          }, e3.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
          }, e3.prototype.gatherActive = function() {
            var e4 = this;
            this.clearActive(), this.observations_.forEach(function(t3) {
              t3.isActive() && e4.activeObservations_.push(t3);
            });
          }, e3.prototype.broadcastActive = function() {
            if (this.hasActive()) {
              var e4 = this.callbackCtx_, t3 = this.activeObservations_.map(function(e5) {
                return new hf(e5.target, e5.broadcastRect());
              });
              this.callback_.call(e4, t3, e4), this.clearActive();
            }
          }, e3.prototype.clearActive = function() {
            this.activeObservations_.splice(0);
          }, e3.prototype.hasActive = function() {
            return this.activeObservations_.length > 0;
          }, e3;
        }(), bf = "undefined" != typeof WeakMap ? /* @__PURE__ */ new WeakMap() : new Jd(), yf = function e3(t3) {
          if (!(this instanceof e3))
            throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          var n2 = af.getInstance(), r2 = new vf(t3, n2, this);
          bf.set(this, r2);
        };
        ["observe", "unobserve", "disconnect"].forEach(function(e3) {
          yf.prototype[e3] = function() {
            var t3;
            return (t3 = bf.get(this))[e3].apply(t3, arguments);
          };
        });
        const Cf = void 0 !== tf.ResizeObserver ? tf.ResizeObserver : yf;
        var wf = /* @__PURE__ */ new Map(), xf = new Cf(function(e3) {
          e3.forEach(function(e4) {
            var t3, n2 = e4.target;
            null === (t3 = wf.get(n2)) || void 0 === t3 || t3.forEach(function(e5) {
              return e5(n2);
            });
          });
        }), Sf = function(e3) {
          zr(n2, e3);
          var t3 = Vr(n2);
          function n2() {
            return re(this, n2), t3.apply(this, arguments);
          }
          return ie(n2, [{ key: "render", value: function() {
            return this.props.children;
          } }]), n2;
        }(t2.Component);
        function Af(e3, n2) {
          var r2 = e3.children, o2 = e3.disabled, i2 = t2.useRef(null), a2 = t2.useRef(null), s2 = t2.useContext(Zd), l2 = "function" == typeof r2, c2 = l2 ? r2(i2) : r2, u2 = t2.useRef({ width: -1, height: -1, offsetWidth: -1, offsetHeight: -1 }), d2 = !l2 && t2.isValidElement(c2) && $r(c2), f2 = d2 ? Mr(c2) : null, p2 = jr(f2, i2), m2 = function() {
            var e4;
            return xr(i2.current) || (i2.current && "object" === O(i2.current) ? xr(null === (e4 = i2.current) || void 0 === e4 ? void 0 : e4.nativeElement) : null) || xr(a2.current);
          };
          t2.useImperativeHandle(n2, function() {
            return m2();
          });
          var g2 = t2.useRef(e3);
          g2.current = e3;
          var h2 = t2.useCallback(function(e4) {
            var t3 = g2.current, n3 = t3.onResize, r3 = t3.data, o3 = e4.getBoundingClientRect(), i3 = o3.width, a3 = o3.height, l3 = e4.offsetWidth, c3 = e4.offsetHeight, d3 = Math.floor(i3), f3 = Math.floor(a3);
            if (u2.current.width !== d3 || u2.current.height !== f3 || u2.current.offsetWidth !== l3 || u2.current.offsetHeight !== c3) {
              var p3 = { width: d3, height: f3, offsetWidth: l3, offsetHeight: c3 };
              u2.current = p3;
              var m3 = l3 === Math.round(i3) ? i3 : l3, h3 = c3 === Math.round(a3) ? a3 : c3, v2 = R(R({}, p3), {}, { offsetWidth: m3, offsetHeight: h3 });
              null == s2 || s2(v2, e4, r3), n3 && Promise.resolve().then(function() {
                n3(v2, e4);
              });
            }
          }, []);
          return t2.useEffect(function() {
            var e4, t3, n3 = m2();
            return n3 && !o2 && (e4 = n3, t3 = h2, wf.has(e4) || (wf.set(e4, /* @__PURE__ */ new Set()), xf.observe(e4)), wf.get(e4).add(t3)), function() {
              return function(e5, t4) {
                wf.has(e5) && (wf.get(e5).delete(t4), wf.get(e5).size || (xf.unobserve(e5), wf.delete(e5)));
              }(n3, h2);
            };
          }, [i2.current, o2]), t2.createElement(Sf, { ref: a2 }, d2 ? t2.cloneElement(c2, { ref: p2 }) : c2);
        }
        const Ef = t2.forwardRef(Af);
        function kf(e3, n2) {
          var r2 = e3.children;
          return ("function" == typeof r2 ? [r2] : ts(r2)).map(function(r3, o2) {
            var i2 = (null == r3 ? void 0 : r3.key) || "".concat("rc-observer-key", "-").concat(o2);
            return t2.createElement(Ef, qe({}, e3, { key: i2, ref: 0 === o2 ? n2 : void 0 }), r3);
          });
        }
        var Of = t2.forwardRef(kf);
        Of.Collection = function(e3) {
          var n2 = e3.children, r2 = e3.onBatchResize, o2 = t2.useRef(0), i2 = t2.useRef([]), a2 = t2.useContext(Zd), s2 = t2.useCallback(function(e4, t3, n3) {
            o2.current += 1;
            var s3 = o2.current;
            i2.current.push({ size: e4, element: t3, data: n3 }), Promise.resolve().then(function() {
              s3 === o2.current && (null == r2 || r2(i2.current), i2.current = []);
            }), null == a2 || a2(e4, t3, n3);
          }, [r2, a2]);
          return t2.createElement(Zd.Provider, { value: s2 }, n2);
        };
        const Pf = Of;
        var If = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], jf = void 0;
        function $f(e3, n2) {
          var r2 = e3.prefixCls, o2 = e3.invalidate, i2 = e3.item, a2 = e3.renderItem, s2 = e3.responsive, l2 = e3.responsiveDisabled, c2 = e3.registerSize, u2 = e3.itemKey, d2 = e3.className, f2 = e3.style, p2 = e3.children, m2 = e3.display, g2 = e3.order, h2 = e3.component, v2 = void 0 === h2 ? "div" : h2, b2 = Rr(e3, If), y2 = s2 && !m2;
          function C2(e4) {
            c2(u2, e4);
          }
          t2.useEffect(function() {
            return function() {
              C2(null);
            };
          }, []);
          var w2, x2 = a2 && i2 !== jf ? a2(i2, { index: g2 }) : p2;
          o2 || (w2 = { opacity: y2 ? 0 : 1, height: y2 ? 0 : jf, overflowY: y2 ? "hidden" : jf, order: s2 ? g2 : jf, pointerEvents: y2 ? "none" : jf, position: y2 ? "absolute" : jf });
          var S2 = {};
          y2 && (S2["aria-hidden"] = true);
          var A2 = t2.createElement(v2, qe({ className: br()(!o2 && r2, d2), style: R(R({}, w2), f2) }, S2, b2, { ref: n2 }), x2);
          return s2 && (A2 = t2.createElement(Pf, { onResize: function(e4) {
            C2(e4.offsetWidth);
          }, disabled: l2 }, A2)), A2;
        }
        var Nf = t2.forwardRef($f);
        Nf.displayName = "Item";
        const Mf = Nf;
        function Rf(e3, n2) {
          var r2 = N(t2.useState(n2), 2), o2 = r2[0], i2 = r2[1];
          return [o2, Kr(function(t3) {
            e3(function() {
              i2(t3);
            });
          })];
        }
        var Bf = o().createContext(null), Tf = ["component"], Ff = ["className"], Lf = ["className"], zf = function(e3, n2) {
          var r2 = t2.useContext(Bf);
          if (!r2) {
            var o2 = e3.component, i2 = void 0 === o2 ? "div" : o2, a2 = Rr(e3, Tf);
            return t2.createElement(i2, qe({}, a2, { ref: n2 }));
          }
          var s2 = r2.className, l2 = Rr(r2, Ff), c2 = e3.className, u2 = Rr(e3, Lf);
          return t2.createElement(Bf.Provider, { value: null }, t2.createElement(Mf, qe({ ref: n2, className: br()(s2, c2) }, l2, u2)));
        }, Hf = t2.forwardRef(zf);
        Hf.displayName = "RawItem";
        const Df = Hf;
        var qf = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], Vf = "responsive", Wf = "invalidate";
        function Kf(e3) {
          return "+ ".concat(e3.length, " ...");
        }
        function Gf(e3, n2) {
          var r2, o2 = e3.prefixCls, i2 = void 0 === o2 ? "rc-overflow" : o2, a2 = e3.data, s2 = void 0 === a2 ? [] : a2, l2 = e3.renderItem, c2 = e3.renderRawItem, u2 = e3.itemKey, d2 = e3.itemWidth, f2 = void 0 === d2 ? 10 : d2, p2 = e3.ssr, m2 = e3.style, g2 = e3.className, h2 = e3.maxCount, v2 = e3.renderRest, b2 = e3.renderRawRest, y2 = e3.suffix, C2 = e3.component, w2 = void 0 === C2 ? "div" : C2, x2 = e3.itemComponent, S2 = e3.onVisibleChange, A2 = Rr(e3, qf), E2 = "full" === p2, k2 = (r2 = t2.useRef(null), function(e4) {
            r2.current || (r2.current = [], function(e5) {
              if ("undefined" == typeof MessageChannel)
                Po(e5);
              else {
                var t3 = new MessageChannel();
                t3.port1.onmessage = function() {
                  return e5();
                }, t3.port2.postMessage(void 0);
              }
            }(function() {
              (0, yr.unstable_batchedUpdates)(function() {
                r2.current.forEach(function(e5) {
                  e5();
                }), r2.current = null;
              });
            })), r2.current.push(e4);
          }), O2 = N(Rf(k2, null), 2), P2 = O2[0], I2 = O2[1], j2 = P2 || 0, $2 = N(Rf(k2, /* @__PURE__ */ new Map()), 2), M2 = $2[0], B2 = $2[1], T2 = N(Rf(k2, 0), 2), F2 = T2[0], L2 = T2[1], z2 = N(Rf(k2, 0), 2), H2 = z2[0], D2 = z2[1], q2 = N(Rf(k2, 0), 2), V2 = q2[0], W2 = q2[1], K2 = N((0, t2.useState)(null), 2), G2 = K2[0], X2 = K2[1], U2 = N((0, t2.useState)(null), 2), _2 = U2[0], Q2 = U2[1], Y2 = t2.useMemo(function() {
            return null === _2 && E2 ? Number.MAX_SAFE_INTEGER : _2 || 0;
          }, [_2, P2]), Z2 = N((0, t2.useState)(false), 2), J2 = Z2[0], ee2 = Z2[1], te2 = "".concat(i2, "-item"), ne2 = Math.max(F2, H2), re2 = h2 === Vf, oe2 = s2.length && re2, ie2 = h2 === Wf, ae2 = oe2 || "number" == typeof h2 && s2.length > h2, se2 = (0, t2.useMemo)(function() {
            var e4 = s2;
            return oe2 ? e4 = null === P2 && E2 ? s2 : s2.slice(0, Math.min(s2.length, j2 / f2)) : "number" == typeof h2 && (e4 = s2.slice(0, h2)), e4;
          }, [s2, f2, P2, h2, oe2]), le2 = (0, t2.useMemo)(function() {
            return oe2 ? s2.slice(Y2 + 1) : s2.slice(se2.length);
          }, [s2, se2, oe2, Y2]), ce2 = (0, t2.useCallback)(function(e4, t3) {
            var n3;
            return "function" == typeof u2 ? u2(e4) : null !== (n3 = u2 && (null == e4 ? void 0 : e4[u2])) && void 0 !== n3 ? n3 : t3;
          }, [u2]), ue2 = (0, t2.useCallback)(l2 || function(e4) {
            return e4;
          }, [l2]);
          function de2(e4, t3, n3) {
            (_2 !== e4 || void 0 !== t3 && t3 !== G2) && (Q2(e4), n3 || (ee2(e4 < s2.length - 1), null == S2 || S2(e4)), void 0 !== t3 && X2(t3));
          }
          function fe2(e4, t3) {
            B2(function(n3) {
              var r3 = new Map(n3);
              return null === t3 ? r3.delete(e4) : r3.set(e4, t3), r3;
            });
          }
          function pe2(e4) {
            return M2.get(ce2(se2[e4], e4));
          }
          Me(function() {
            if (j2 && "number" == typeof ne2 && se2) {
              var e4 = V2, t3 = se2.length, n3 = t3 - 1;
              if (!t3)
                return void de2(0, null);
              for (var r3 = 0; r3 < t3; r3 += 1) {
                var o3 = pe2(r3);
                if (E2 && (o3 = o3 || 0), void 0 === o3) {
                  de2(r3 - 1, void 0, true);
                  break;
                }
                if (e4 += o3, 0 === n3 && e4 <= j2 || r3 === n3 - 1 && e4 + pe2(n3) <= j2) {
                  de2(n3, null);
                  break;
                }
                if (e4 + ne2 > j2) {
                  de2(r3 - 1, e4 - o3 - V2 + H2);
                  break;
                }
              }
              y2 && pe2(0) + V2 > j2 && X2(null);
            }
          }, [j2, M2, H2, V2, ce2, se2]);
          var me2 = J2 && !!le2.length, ge2 = {};
          null !== G2 && oe2 && (ge2 = { position: "absolute", left: G2, top: 0 });
          var he2 = { prefixCls: te2, responsive: oe2, component: x2, invalidate: ie2 }, ve2 = c2 ? function(e4, n3) {
            var r3 = ce2(e4, n3);
            return t2.createElement(Bf.Provider, { key: r3, value: R(R({}, he2), {}, { order: n3, item: e4, itemKey: r3, registerSize: fe2, display: n3 <= Y2 }) }, c2(e4, n3));
          } : function(e4, n3) {
            var r3 = ce2(e4, n3);
            return t2.createElement(Mf, qe({}, he2, { order: n3, key: r3, item: e4, renderItem: ue2, itemKey: r3, registerSize: fe2, display: n3 <= Y2 }));
          }, be2 = { order: me2 ? Y2 : Number.MAX_SAFE_INTEGER, className: "".concat(te2, "-rest"), registerSize: function(e4, t3) {
            D2(t3), L2(H2);
          }, display: me2 }, ye2 = v2 || Kf, Ce2 = b2 ? t2.createElement(Bf.Provider, { value: R(R({}, he2), be2) }, b2(le2)) : t2.createElement(Mf, qe({}, he2, be2), "function" == typeof ye2 ? ye2(le2) : ye2), we2 = t2.createElement(w2, qe({ className: br()(!ie2 && i2, g2), style: m2, ref: n2 }, A2), se2.map(ve2), ae2 ? Ce2 : null, y2 && t2.createElement(Mf, qe({}, he2, { responsive: re2, responsiveDisabled: !oe2, order: Y2, className: "".concat(te2, "-suffix"), registerSize: function(e4, t3) {
            W2(t3);
          }, display: true, style: ge2 }), y2));
          return re2 ? t2.createElement(Pf, { onResize: function(e4, t3) {
            I2(t3.clientWidth);
          }, disabled: !oe2 }, we2) : we2;
        }
        var Xf = t2.forwardRef(Gf);
        Xf.displayName = "Overflow", Xf.Item = Df, Xf.RESPONSIVE = Vf, Xf.INVALIDATE = Wf;
        const Uf = Xf;
        var _f = t2.createContext(null);
        function Qf(e3, t3) {
          return void 0 === e3 ? null : "".concat(e3, "-").concat(t3);
        }
        function Yf(e3) {
          return Qf(t2.useContext(_f), e3);
        }
        var Zf = ["children", "locked"], Jf = t2.createContext(null);
        function ep(e3) {
          var n2 = e3.children, r2 = e3.locked, o2 = Rr(e3, Zf), i2 = t2.useContext(Jf), a2 = U(function() {
            return e4 = o2, t3 = R({}, i2), Object.keys(e4).forEach(function(n3) {
              var r3 = e4[n3];
              void 0 !== r3 && (t3[n3] = r3);
            }), t3;
            var e4, t3;
          }, [i2, o2], function(e4, t3) {
            return !(r2 || e4[0] === t3[0] && ne(e4[1], t3[1], true));
          });
          return t2.createElement(Jf.Provider, { value: a2 }, n2);
        }
        var tp = [], np = t2.createContext(null);
        function rp() {
          return t2.useContext(np);
        }
        var op = t2.createContext(tp);
        function ip(e3) {
          var n2 = t2.useContext(op);
          return t2.useMemo(function() {
            return void 0 !== e3 ? [].concat(x(n2), [e3]) : n2;
          }, [n2, e3]);
        }
        var ap = t2.createContext(null);
        const sp = t2.createContext({});
        function lp(e3) {
          var t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (xa(e3)) {
            var n2 = e3.nodeName.toLowerCase(), r2 = ["input", "select", "textarea", "button"].includes(n2) || e3.isContentEditable || "a" === n2 && !!e3.getAttribute("href"), o2 = e3.getAttribute("tabindex"), i2 = Number(o2), a2 = null;
            return o2 && !Number.isNaN(i2) ? a2 = i2 : r2 && null === a2 && (a2 = 0), r2 && e3.disabled && (a2 = null), null !== a2 && (a2 >= 0 || t3 && a2 < 0);
          }
          return false;
        }
        var cp = ql.LEFT, up = ql.RIGHT, dp = ql.UP, fp = ql.DOWN, pp = ql.ENTER, mp = ql.ESC, gp = ql.HOME, hp = ql.END, vp = [dp, fp, cp, up];
        function bp(e3, t3) {
          return function(e4) {
            var t4 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n2 = x(e4.querySelectorAll("*")).filter(function(e5) {
              return lp(e5, t4);
            });
            return lp(e4, t4) && n2.unshift(e4), n2;
          }(e3, true).filter(function(e4) {
            return t3.has(e4);
          });
        }
        function yp(e3, t3, n2) {
          var r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          if (!e3)
            return null;
          var o2 = bp(e3, t3), i2 = o2.length, a2 = o2.findIndex(function(e4) {
            return n2 === e4;
          });
          return r2 < 0 ? -1 === a2 ? a2 = i2 - 1 : a2 -= 1 : r2 > 0 && (a2 += 1), o2[a2 = (a2 + i2) % i2];
        }
        var Cp = function(e3, t3) {
          var n2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Map(), o2 = /* @__PURE__ */ new Map();
          return e3.forEach(function(e4) {
            var i2 = document.querySelector("[data-menu-id='".concat(Qf(t3, e4), "']"));
            i2 && (n2.add(i2), o2.set(i2, e4), r2.set(e4, i2));
          }), { elements: n2, key2element: r2, element2key: o2 };
        };
        var wp = "__RC_UTIL_PATH_SPLIT__", xp = function(e3) {
          return e3.join(wp);
        }, Sp = "rc-menu-more";
        function Ap(e3) {
          var n2 = t2.useRef(e3);
          n2.current = e3;
          var r2 = t2.useCallback(function() {
            for (var e4, t3 = arguments.length, r3 = new Array(t3), o2 = 0; o2 < t3; o2++)
              r3[o2] = arguments[o2];
            return null === (e4 = n2.current) || void 0 === e4 ? void 0 : e4.call.apply(e4, [n2].concat(r3));
          }, []);
          return e3 ? r2 : void 0;
        }
        var Ep = Math.random().toFixed(5).toString().slice(2), kp = 0;
        function Op(e3, n2, r2, o2) {
          var i2 = t2.useContext(Jf), a2 = i2.activeKey, s2 = i2.onActive, l2 = i2.onInactive, c2 = { active: a2 === e3 };
          return n2 || (c2.onMouseEnter = function(t3) {
            null == r2 || r2({ key: e3, domEvent: t3 }), s2(e3);
          }, c2.onMouseLeave = function(t3) {
            null == o2 || o2({ key: e3, domEvent: t3 }), l2(e3);
          }), c2;
        }
        function Pp(e3) {
          var n2 = t2.useContext(Jf), r2 = n2.mode, o2 = n2.rtl, i2 = n2.inlineIndent;
          return "inline" !== r2 ? null : o2 ? { paddingRight: e3 * i2 } : { paddingLeft: e3 * i2 };
        }
        function Ip(e3) {
          var n2, r2 = e3.icon, o2 = e3.props, i2 = e3.children;
          return null === r2 || false === r2 ? null : ("function" == typeof r2 ? n2 = t2.createElement(r2, R({}, o2)) : "boolean" != typeof r2 && (n2 = r2), n2 || i2 || null);
        }
        var jp = ["item"];
        function $p(e3) {
          var t3 = e3.item, n2 = Rr(e3, jp);
          return Object.defineProperty(n2, "item", { get: function() {
            return te(false, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t3;
          } }), n2;
        }
        var Np = ["title", "attribute", "elementRef"], Mp = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], Rp = ["active"], Bp = function(e3) {
          zr(r2, e3);
          var n2 = Vr(r2);
          function r2() {
            return re(this, r2), n2.apply(this, arguments);
          }
          return ie(r2, [{ key: "render", value: function() {
            var e4 = this.props, n3 = e4.title, r3 = e4.attribute, o2 = e4.elementRef, i2 = wa(Rr(e4, Np), ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
            return te(!r3, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), t2.createElement(Uf.Item, qe({}, r3, { title: "string" == typeof n3 ? n3 : void 0 }, i2, { ref: o2 }));
          } }]), r2;
        }(t2.Component), Tp = t2.forwardRef(function(e3, n2) {
          var r2 = e3.style, o2 = e3.className, i2 = e3.eventKey, a2 = (e3.warnKey, e3.disabled), s2 = e3.itemIcon, l2 = e3.children, c2 = e3.role, u2 = e3.onMouseEnter, d2 = e3.onMouseLeave, f2 = e3.onClick, p2 = e3.onKeyDown, m2 = e3.onFocus, g2 = Rr(e3, Mp), h2 = Yf(i2), v2 = t2.useContext(Jf), b2 = v2.prefixCls, y2 = v2.onItemClick, C2 = v2.disabled, w2 = v2.overflowDisabled, S2 = v2.itemIcon, A2 = v2.selectedKeys, E2 = v2.onActive, k2 = t2.useContext(sp)._internalRenderMenuItem, O2 = "".concat(b2, "-item"), P2 = t2.useRef(), j2 = t2.useRef(), $2 = C2 || a2, N2 = jr(n2, j2), M2 = ip(i2), B2 = function(e4) {
            return { key: i2, keyPath: x(M2).reverse(), item: P2.current, domEvent: e4 };
          }, T2 = s2 || S2, F2 = Op(i2, $2, u2, d2), L2 = F2.active, z2 = Rr(F2, Rp), H2 = A2.includes(i2), D2 = Pp(M2.length), q2 = {};
          "option" === e3.role && (q2["aria-selected"] = H2);
          var V2 = t2.createElement(Bp, qe({ ref: P2, elementRef: N2, role: null === c2 ? "none" : c2 || "menuitem", tabIndex: a2 ? null : -1, "data-menu-id": w2 && h2 ? null : h2 }, wa(g2, ["extra"]), z2, q2, { component: "li", "aria-disabled": a2, style: R(R({}, D2), r2), className: br()(O2, I(I(I({}, "".concat(O2, "-active"), L2), "".concat(O2, "-selected"), H2), "".concat(O2, "-disabled"), $2), o2), onClick: function(e4) {
            if (!$2) {
              var t3 = B2(e4);
              null == f2 || f2($p(t3)), y2(t3);
            }
          }, onKeyDown: function(e4) {
            if (null == p2 || p2(e4), e4.which === ql.ENTER) {
              var t3 = B2(e4);
              null == f2 || f2($p(t3)), y2(t3);
            }
          }, onFocus: function(e4) {
            E2(i2), null == m2 || m2(e4);
          } }), l2, t2.createElement(Ip, { props: R(R({}, e3), {}, { isSelected: H2 }), icon: T2 }));
          return k2 && (V2 = k2(V2, e3, { selected: H2 })), V2;
        });
        function Fp(e3, n2) {
          var r2 = e3.eventKey, o2 = rp(), i2 = ip(r2);
          return t2.useEffect(function() {
            if (o2)
              return o2.registerPath(r2, i2), function() {
                o2.unregisterPath(r2, i2);
              };
          }, [i2]), o2 ? null : t2.createElement(Tp, qe({}, e3, { ref: n2 }));
        }
        const Lp = t2.forwardRef(Fp);
        var zp = ["className", "children"], Hp = function(e3, n2) {
          var r2 = e3.className, o2 = e3.children, i2 = Rr(e3, zp), a2 = t2.useContext(Jf), s2 = a2.prefixCls, l2 = a2.mode, c2 = a2.rtl;
          return t2.createElement("ul", qe({ className: br()(s2, c2 && "".concat(s2, "-rtl"), "".concat(s2, "-sub"), "".concat(s2, "-").concat("inline" === l2 ? "inline" : "vertical"), r2), role: "menu" }, i2, { "data-menu-list": true, ref: n2 }), o2);
        }, Dp = t2.forwardRef(Hp);
        Dp.displayName = "SubMenuList";
        const qp = Dp;
        function Vp(e3, n2) {
          return ts(e3).map(function(e4, r2) {
            if (t2.isValidElement(e4)) {
              var o2, i2, a2 = e4.key, s2 = null !== (o2 = null === (i2 = e4.props) || void 0 === i2 ? void 0 : i2.eventKey) && void 0 !== o2 ? o2 : a2;
              null == s2 && (s2 = "tmp_key-".concat([].concat(x(n2), [r2]).join("-")));
              var l2 = { key: s2, eventKey: s2 };
              return t2.cloneElement(e4, l2);
            }
            return e4;
          });
        }
        function Wp(e3) {
          var n2 = e3.prefixCls, r2 = e3.align, o2 = e3.arrow, i2 = e3.arrowPos, a2 = o2 || {}, s2 = a2.className, l2 = a2.content, c2 = i2.x, u2 = void 0 === c2 ? 0 : c2, d2 = i2.y, f2 = void 0 === d2 ? 0 : d2, p2 = t2.useRef();
          if (!r2 || !r2.points)
            return null;
          var m2 = { position: "absolute" };
          if (false !== r2.autoArrow) {
            var g2 = r2.points[0], h2 = r2.points[1], v2 = g2[0], b2 = g2[1], y2 = h2[0], C2 = h2[1];
            v2 !== y2 && ["t", "b"].includes(v2) ? "t" === v2 ? m2.top = 0 : m2.bottom = 0 : m2.top = f2, b2 !== C2 && ["l", "r"].includes(b2) ? "l" === b2 ? m2.left = 0 : m2.right = 0 : m2.left = u2;
          }
          return t2.createElement("div", { ref: p2, className: br()("".concat(n2, "-arrow"), s2), style: m2 }, l2);
        }
        function Kp(e3) {
          var n2 = e3.prefixCls, r2 = e3.open, o2 = e3.zIndex, i2 = e3.mask, a2 = e3.motion;
          return i2 ? t2.createElement(Ko, qe({}, a2, { motionAppear: true, visible: r2, removeOnLeave: true }), function(e4) {
            var r3 = e4.className;
            return t2.createElement("div", { style: { zIndex: o2 }, className: br()("".concat(n2, "-mask"), r3) });
          }) : null;
        }
        var Gp = t2.memo(function(e3) {
          return e3.children;
        }, function(e3, t3) {
          return t3.cache;
        });
        const Xp = Gp;
        var Up = t2.forwardRef(function(e3, n2) {
          var r2 = e3.popup, o2 = e3.className, i2 = e3.prefixCls, a2 = e3.style, s2 = e3.target, l2 = e3.onVisibleChanged, c2 = e3.open, u2 = e3.keepDom, d2 = e3.fresh, f2 = e3.onClick, p2 = e3.mask, m2 = e3.arrow, g2 = e3.arrowPos, h2 = e3.align, v2 = e3.motion, b2 = e3.maskMotion, y2 = e3.forceRender, C2 = e3.getPopupContainer, w2 = e3.autoDestroy, x2 = e3.portal, S2 = e3.zIndex, A2 = e3.onMouseEnter, E2 = e3.onMouseLeave, k2 = e3.onPointerEnter, O2 = e3.onPointerDownCapture, P2 = e3.ready, I2 = e3.offsetX, j2 = e3.offsetY, $2 = e3.offsetR, M2 = e3.offsetB, B2 = e3.onAlign, T2 = e3.onPrepare, F2 = e3.stretch, L2 = e3.targetWidth, z2 = e3.targetHeight, H2 = "function" == typeof r2 ? r2() : r2, D2 = c2 || u2, q2 = (null == C2 ? void 0 : C2.length) > 0, V2 = N(t2.useState(!C2 || !q2), 2), W2 = V2[0], K2 = V2[1];
          if (Me(function() {
            !W2 && q2 && s2 && K2(true);
          }, [W2, q2, s2]), !W2)
            return null;
          var G2 = "auto", X2 = { left: "-1000vw", top: "-1000vh", right: G2, bottom: G2 };
          if (P2 || !c2) {
            var U2, _2 = h2.points, Q2 = h2.dynamicInset || (null === (U2 = h2._experimental) || void 0 === U2 ? void 0 : U2.dynamicInset), Y2 = Q2 && "r" === _2[0][1], Z2 = Q2 && "b" === _2[0][0];
            Y2 ? (X2.right = $2, X2.left = G2) : (X2.left = I2, X2.right = G2), Z2 ? (X2.bottom = M2, X2.top = G2) : (X2.top = j2, X2.bottom = G2);
          }
          var J2 = {};
          return F2 && (F2.includes("height") && z2 ? J2.height = z2 : F2.includes("minHeight") && z2 && (J2.minHeight = z2), F2.includes("width") && L2 ? J2.width = L2 : F2.includes("minWidth") && L2 && (J2.minWidth = L2)), c2 || (J2.pointerEvents = "none"), t2.createElement(x2, { open: y2 || D2, getContainer: C2 && function() {
            return C2(s2);
          }, autoDestroy: w2 }, t2.createElement(Kp, { prefixCls: i2, open: c2, zIndex: S2, mask: p2, motion: b2 }), t2.createElement(Pf, { onResize: B2, disabled: !c2 }, function(e4) {
            return t2.createElement(Ko, qe({ motionAppear: true, motionEnter: true, motionLeave: true, removeOnLeave: false, forceRender: y2, leavedClassName: "".concat(i2, "-hidden") }, v2, { onAppearPrepare: T2, onEnterPrepare: T2, visible: c2, onVisibleChanged: function(e5) {
              var t3;
              null == v2 || null === (t3 = v2.onVisibleChanged) || void 0 === t3 || t3.call(v2, e5), l2(e5);
            } }), function(r3, s3) {
              var l3 = r3.className, u3 = r3.style, p3 = br()(i2, l3, o2);
              return t2.createElement("div", { ref: Ir(e4, n2, s3), className: p3, style: R(R(R(R({ "--arrow-x": "".concat(g2.x || 0, "px"), "--arrow-y": "".concat(g2.y || 0, "px") }, X2), J2), u3), {}, { boxSizing: "border-box", zIndex: S2 }, a2), onMouseEnter: A2, onMouseLeave: E2, onPointerEnter: k2, onClick: f2, onPointerDownCapture: O2 }, m2 && t2.createElement(Wp, { prefixCls: i2, arrow: m2, arrowPos: g2, align: h2 }), t2.createElement(Xp, { cache: !c2 && !d2 }, H2));
            });
          }));
        });
        const _p = Up;
        var Qp = t2.forwardRef(function(e3, n2) {
          var r2 = e3.children, o2 = e3.getTriggerDOMNode, i2 = $r(r2), a2 = t2.useCallback(function(e4) {
            Pr(n2, o2 ? o2(e4) : e4);
          }, [o2]), s2 = jr(a2, Mr(r2));
          return i2 ? t2.cloneElement(r2, { ref: s2 }) : r2;
        });
        const Yp = Qp, Zp = t2.createContext(null);
        function Jp(e3) {
          return e3 ? Array.isArray(e3) ? e3 : [e3] : [];
        }
        function em() {
          var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return (arguments.length > 2 ? arguments[2] : void 0) ? e3[0] === t3[0] : e3[0] === t3[0] && e3[1] === t3[1];
        }
        function tm(e3, t3, n2, r2) {
          return t3 || (n2 ? { motionName: "".concat(e3, "-").concat(n2) } : r2 ? { motionName: r2 } : null);
        }
        function nm(e3) {
          return e3.ownerDocument.defaultView;
        }
        function rm(e3) {
          for (var t3 = [], n2 = null == e3 ? void 0 : e3.parentElement, r2 = ["hidden", "scroll", "clip", "auto"]; n2; ) {
            var o2 = nm(n2).getComputedStyle(n2);
            [o2.overflowX, o2.overflowY, o2.overflow].some(function(e4) {
              return r2.includes(e4);
            }) && t3.push(n2), n2 = n2.parentElement;
          }
          return t3;
        }
        function om(e3) {
          var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return Number.isNaN(e3) ? t3 : e3;
        }
        function im(e3) {
          return om(parseFloat(e3), 0);
        }
        function am(e3, t3) {
          var n2 = R({}, e3);
          return (t3 || []).forEach(function(e4) {
            if (!(e4 instanceof HTMLBodyElement || e4 instanceof HTMLHtmlElement)) {
              var t4 = nm(e4).getComputedStyle(e4), r2 = t4.overflow, o2 = t4.overflowClipMargin, i2 = t4.borderTopWidth, a2 = t4.borderBottomWidth, s2 = t4.borderLeftWidth, l2 = t4.borderRightWidth, c2 = e4.getBoundingClientRect(), u2 = e4.offsetHeight, d2 = e4.clientHeight, f2 = e4.offsetWidth, p2 = e4.clientWidth, m2 = im(i2), g2 = im(a2), h2 = im(s2), v2 = im(l2), b2 = om(Math.round(c2.width / f2 * 1e3) / 1e3), y2 = om(Math.round(c2.height / u2 * 1e3) / 1e3), C2 = (f2 - p2 - h2 - v2) * b2, w2 = (u2 - d2 - m2 - g2) * y2, x2 = m2 * y2, S2 = g2 * y2, A2 = h2 * b2, E2 = v2 * b2, k2 = 0, O2 = 0;
              if ("clip" === r2) {
                var P2 = im(o2);
                k2 = P2 * b2, O2 = P2 * y2;
              }
              var I2 = c2.x + A2 - k2, j2 = c2.y + x2 - O2, $2 = I2 + c2.width + 2 * k2 - A2 - E2 - C2, N2 = j2 + c2.height + 2 * O2 - x2 - S2 - w2;
              n2.left = Math.max(n2.left, I2), n2.top = Math.max(n2.top, j2), n2.right = Math.min(n2.right, $2), n2.bottom = Math.min(n2.bottom, N2);
            }
          }), n2;
        }
        function sm(e3) {
          var t3 = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0), n2 = t3.match(/^(.*)\%$/);
          return n2 ? e3 * (parseFloat(n2[1]) / 100) : parseFloat(t3);
        }
        function lm(e3, t3) {
          var n2 = N(t3 || [], 2), r2 = n2[0], o2 = n2[1];
          return [sm(e3.width, r2), sm(e3.height, o2)];
        }
        function cm() {
          var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return [e3[0], e3[1]];
        }
        function um(e3, t3) {
          var n2, r2 = t3[0], o2 = t3[1];
          return n2 = "t" === r2 ? e3.y : "b" === r2 ? e3.y + e3.height : e3.y + e3.height / 2, { x: "l" === o2 ? e3.x : "r" === o2 ? e3.x + e3.width : e3.x + e3.width / 2, y: n2 };
        }
        function dm(e3, t3) {
          var n2 = { t: "b", b: "t", l: "r", r: "l" };
          return e3.map(function(e4, r2) {
            return r2 === t3 ? n2[e4] || "c" : e4;
          }).join("");
        }
        var fm = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
        const pm = function() {
          var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tl, n2 = t2.forwardRef(function(n3, r2) {
            var o2 = n3.prefixCls, i2 = void 0 === o2 ? "rc-trigger-popup" : o2, a2 = n3.children, s2 = n3.action, l2 = void 0 === s2 ? "hover" : s2, c2 = n3.showAction, u2 = n3.hideAction, d2 = n3.popupVisible, f2 = n3.defaultPopupVisible, p2 = n3.onPopupVisibleChange, m2 = n3.afterPopupVisibleChange, g2 = n3.mouseEnterDelay, h2 = n3.mouseLeaveDelay, v2 = void 0 === h2 ? 0.1 : h2, b2 = n3.focusDelay, y2 = n3.blurDelay, C2 = n3.mask, w2 = n3.maskClosable, S2 = void 0 === w2 || w2, A2 = n3.getPopupContainer, E2 = n3.forceRender, k2 = n3.autoDestroy, O2 = n3.destroyPopupOnHide, P2 = n3.popup, I2 = n3.popupClassName, j2 = n3.popupStyle, $2 = n3.popupPlacement, M2 = n3.builtinPlacements, B2 = void 0 === M2 ? {} : M2, T2 = n3.popupAlign, F2 = n3.zIndex, L2 = n3.stretch, z2 = n3.getPopupClassNameFromAlign, H2 = n3.fresh, D2 = n3.alignPoint, q2 = n3.onPopupClick, V2 = n3.onPopupAlign, W2 = n3.arrow, K2 = n3.popupMotion, G2 = n3.maskMotion, X2 = n3.popupTransitionName, U2 = n3.popupAnimation, _2 = n3.maskTransitionName, Q2 = n3.maskAnimation, Y2 = n3.className, Z2 = n3.getTriggerDOMNode, J2 = Rr(n3, fm), ee2 = k2 || O2 || false, te2 = N(t2.useState(false), 2), ne2 = te2[0], re2 = te2[1];
            Me(function() {
              re2(function() {
                if ("undefined" == typeof navigator || "undefined" == typeof window)
                  return false;
                var e4 = navigator.userAgent || navigator.vendor || window.opera;
                return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e4) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null == e4 ? void 0 : e4.substr(0, 4));
              }());
            }, []);
            var oe2 = t2.useRef({}), ie2 = t2.useContext(Zp), ae2 = t2.useMemo(function() {
              return { registerSubPopup: function(e4, t3) {
                oe2.current[e4] = t3, null == ie2 || ie2.registerSubPopup(e4, t3);
              } };
            }, [ie2]), se2 = Hl(), le2 = N(t2.useState(null), 2), ce2 = le2[0], ue2 = le2[1], de2 = t2.useRef(null), fe2 = Kr(function(e4) {
              de2.current = e4, wr(e4) && ce2 !== e4 && ue2(e4), null == ie2 || ie2.registerSubPopup(se2, e4);
            }), pe2 = N(t2.useState(null), 2), me2 = pe2[0], ge2 = pe2[1], he2 = t2.useRef(null), ve2 = Kr(function(e4) {
              wr(e4) && me2 !== e4 && (ge2(e4), he2.current = e4);
            }), be2 = t2.Children.only(a2), ye2 = (null == be2 ? void 0 : be2.props) || {}, Ce2 = {}, we2 = Kr(function(e4) {
              var t3, n4, r3 = me2;
              return (null == r3 ? void 0 : r3.contains(e4)) || (null === (t3 = Li(r3)) || void 0 === t3 ? void 0 : t3.host) === e4 || e4 === r3 || (null == ce2 ? void 0 : ce2.contains(e4)) || (null === (n4 = Li(ce2)) || void 0 === n4 ? void 0 : n4.host) === e4 || e4 === ce2 || Object.values(oe2.current).some(function(t4) {
                return (null == t4 ? void 0 : t4.contains(e4)) || e4 === t4;
              });
            }), xe2 = tm(i2, K2, U2, X2), Se2 = tm(i2, G2, Q2, _2), Ae2 = N(t2.useState(f2 || false), 2), Ee2 = Ae2[0], ke2 = Ae2[1], Oe2 = null != d2 ? d2 : Ee2, Pe2 = Kr(function(e4) {
              void 0 === d2 && ke2(e4);
            });
            Me(function() {
              ke2(d2 || false);
            }, [d2]);
            var Ie2 = t2.useRef(Oe2);
            Ie2.current = Oe2;
            var je2 = t2.useRef([]);
            je2.current = [];
            var $e2 = Kr(function(e4) {
              var t3;
              Pe2(e4), (null !== (t3 = je2.current[je2.current.length - 1]) && void 0 !== t3 ? t3 : Oe2) !== e4 && (je2.current.push(e4), null == p2 || p2(e4));
            }), Ne2 = t2.useRef(), Re2 = function() {
              clearTimeout(Ne2.current);
            }, Be2 = function(e4) {
              var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
              Re2(), 0 === t3 ? $e2(e4) : Ne2.current = setTimeout(function() {
                $e2(e4);
              }, 1e3 * t3);
            };
            t2.useEffect(function() {
              return Re2;
            }, []);
            var Te2 = N(t2.useState(false), 2), Fe2 = Te2[0], Le2 = Te2[1];
            Me(function(e4) {
              e4 && !Oe2 || Le2(true);
            }, [Oe2]);
            var ze2 = N(t2.useState(null), 2), He2 = ze2[0], De2 = ze2[1], qe2 = N(t2.useState(null), 2), Ve2 = qe2[0], We2 = qe2[1], Ke2 = function(e4) {
              We2([e4.clientX, e4.clientY]);
            }, Ge2 = function(e4, n4, r3, o3, i3, a3, s3) {
              var l3 = N(t2.useState({ ready: false, offsetX: 0, offsetY: 0, offsetR: 0, offsetB: 0, arrowX: 0, arrowY: 0, scaleX: 1, scaleY: 1, align: i3[o3] || {} }), 2), c3 = l3[0], u3 = l3[1], d3 = t2.useRef(0), f3 = t2.useMemo(function() {
                return n4 ? rm(n4) : [];
              }, [n4]), p3 = t2.useRef({});
              e4 || (p3.current = {});
              var m3 = Kr(function() {
                if (n4 && r3 && e4) {
                  let pt3 = function(e5, t4) {
                    var n5 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : J3, r4 = $3.x + e5, o4 = $3.y + t4, i4 = r4 + q3, a4 = o4 + D3, s4 = Math.max(r4, n5.left), l5 = Math.max(o4, n5.top), c5 = Math.min(i4, n5.right), u4 = Math.min(a4, n5.bottom);
                    return Math.max(0, (c5 - s4) * (u4 - l5));
                  }, mt3 = function() {
                    we3 = $3.y + Ce3, xe3 = we3 + D3, Se3 = $3.x + ye3, Ae3 = Se3 + q3;
                  };
                  var t3, l4, c4, d4, m4, g4 = n4, h3 = g4.ownerDocument, v3 = nm(g4).getComputedStyle(g4), b3 = v3.width, y3 = v3.height, C3 = v3.position, w3 = g4.style.left, x2 = g4.style.top, S3 = g4.style.right, A3 = g4.style.bottom, E3 = g4.style.overflow, k3 = R(R({}, i3[o3]), a3), O3 = h3.createElement("div");
                  if (null === (t3 = g4.parentElement) || void 0 === t3 || t3.appendChild(O3), O3.style.left = "".concat(g4.offsetLeft, "px"), O3.style.top = "".concat(g4.offsetTop, "px"), O3.style.position = C3, O3.style.height = "".concat(g4.offsetHeight, "px"), O3.style.width = "".concat(g4.offsetWidth, "px"), g4.style.left = "0", g4.style.top = "0", g4.style.right = "auto", g4.style.bottom = "auto", g4.style.overflow = "hidden", Array.isArray(r3))
                    m4 = { x: r3[0], y: r3[1], width: 0, height: 0 };
                  else {
                    var P3, I3, j3 = r3.getBoundingClientRect();
                    j3.x = null !== (P3 = j3.x) && void 0 !== P3 ? P3 : j3.left, j3.y = null !== (I3 = j3.y) && void 0 !== I3 ? I3 : j3.top, m4 = { x: j3.x, y: j3.y, width: j3.width, height: j3.height };
                  }
                  var $3 = g4.getBoundingClientRect();
                  $3.x = null !== (l4 = $3.x) && void 0 !== l4 ? l4 : $3.left, $3.y = null !== (c4 = $3.y) && void 0 !== c4 ? c4 : $3.top;
                  var M3 = h3.documentElement, B3 = M3.clientWidth, T3 = M3.clientHeight, F3 = M3.scrollWidth, L3 = M3.scrollHeight, z3 = M3.scrollTop, H3 = M3.scrollLeft, D3 = $3.height, q3 = $3.width, V3 = m4.height, W3 = m4.width, K3 = { left: 0, top: 0, right: B3, bottom: T3 }, G3 = { left: -H3, top: -z3, right: F3 - H3, bottom: L3 - z3 }, X3 = k3.htmlRegion, U3 = "visible", _3 = "visibleFirst";
                  "scroll" !== X3 && X3 !== _3 && (X3 = U3);
                  var Q3 = X3 === _3, Y3 = am(G3, f3), Z3 = am(K3, f3), J3 = X3 === U3 ? Z3 : Y3, ee3 = Q3 ? Z3 : J3;
                  g4.style.left = "auto", g4.style.top = "auto", g4.style.right = "0", g4.style.bottom = "0";
                  var te3 = g4.getBoundingClientRect();
                  g4.style.left = w3, g4.style.top = x2, g4.style.right = S3, g4.style.bottom = A3, g4.style.overflow = E3, null === (d4 = g4.parentElement) || void 0 === d4 || d4.removeChild(O3);
                  var ne3 = om(Math.round(q3 / parseFloat(b3) * 1e3) / 1e3), re3 = om(Math.round(D3 / parseFloat(y3) * 1e3) / 1e3);
                  if (0 === ne3 || 0 === re3 || wr(r3) && !xa(r3))
                    return;
                  var oe3 = k3.offset, ie3 = k3.targetOffset, ae3 = N(lm($3, oe3), 2), se3 = ae3[0], le3 = ae3[1], ce3 = N(lm(m4, ie3), 2), ue3 = ce3[0], de3 = ce3[1];
                  m4.x -= ue3, m4.y -= de3;
                  var fe3 = N(k3.points || [], 2), pe3 = fe3[0], me3 = cm(fe3[1]), ge3 = cm(pe3), he3 = um(m4, me3), ve3 = um($3, ge3), be3 = R({}, k3), ye3 = he3.x - ve3.x + se3, Ce3 = he3.y - ve3.y + le3;
                  var we3, xe3, Se3, Ae3, Ee3 = pt3(ye3, Ce3), ke3 = pt3(ye3, Ce3, Z3), Oe3 = um(m4, ["t", "l"]), Pe3 = um($3, ["t", "l"]), Ie3 = um(m4, ["b", "r"]), je3 = um($3, ["b", "r"]), $e3 = k3.overflow || {}, Ne3 = $e3.adjustX, Me2 = $e3.adjustY, Re3 = $e3.shiftX, Be3 = $e3.shiftY, Te3 = function(e5) {
                    return "boolean" == typeof e5 ? e5 : e5 >= 0;
                  };
                  mt3();
                  var Fe3 = Te3(Me2), Le3 = ge3[0] === me3[0];
                  if (Fe3 && "t" === ge3[0] && (xe3 > ee3.bottom || p3.current.bt)) {
                    var ze3 = Ce3;
                    Le3 ? ze3 -= D3 - V3 : ze3 = Oe3.y - je3.y - le3;
                    var He3 = pt3(ye3, ze3), De3 = pt3(ye3, ze3, Z3);
                    He3 > Ee3 || He3 === Ee3 && (!Q3 || De3 >= ke3) ? (p3.current.bt = true, Ce3 = ze3, le3 = -le3, be3.points = [dm(ge3, 0), dm(me3, 0)]) : p3.current.bt = false;
                  }
                  if (Fe3 && "b" === ge3[0] && (we3 < ee3.top || p3.current.tb)) {
                    var qe3 = Ce3;
                    Le3 ? qe3 += D3 - V3 : qe3 = Ie3.y - Pe3.y - le3;
                    var Ve3 = pt3(ye3, qe3), We3 = pt3(ye3, qe3, Z3);
                    Ve3 > Ee3 || Ve3 === Ee3 && (!Q3 || We3 >= ke3) ? (p3.current.tb = true, Ce3 = qe3, le3 = -le3, be3.points = [dm(ge3, 0), dm(me3, 0)]) : p3.current.tb = false;
                  }
                  var Ke3 = Te3(Ne3), Ge3 = ge3[1] === me3[1];
                  if (Ke3 && "l" === ge3[1] && (Ae3 > ee3.right || p3.current.rl)) {
                    var Xe3 = ye3;
                    Ge3 ? Xe3 -= q3 - W3 : Xe3 = Oe3.x - je3.x - se3;
                    var Ue3 = pt3(Xe3, Ce3), _e3 = pt3(Xe3, Ce3, Z3);
                    Ue3 > Ee3 || Ue3 === Ee3 && (!Q3 || _e3 >= ke3) ? (p3.current.rl = true, ye3 = Xe3, se3 = -se3, be3.points = [dm(ge3, 1), dm(me3, 1)]) : p3.current.rl = false;
                  }
                  if (Ke3 && "r" === ge3[1] && (Se3 < ee3.left || p3.current.lr)) {
                    var Qe3 = ye3;
                    Ge3 ? Qe3 += q3 - W3 : Qe3 = Ie3.x - Pe3.x - se3;
                    var Ye3 = pt3(Qe3, Ce3), Ze3 = pt3(Qe3, Ce3, Z3);
                    Ye3 > Ee3 || Ye3 === Ee3 && (!Q3 || Ze3 >= ke3) ? (p3.current.lr = true, ye3 = Qe3, se3 = -se3, be3.points = [dm(ge3, 1), dm(me3, 1)]) : p3.current.lr = false;
                  }
                  mt3();
                  var Je3 = true === Re3 ? 0 : Re3;
                  "number" == typeof Je3 && (Se3 < Z3.left && (ye3 -= Se3 - Z3.left - se3, m4.x + W3 < Z3.left + Je3 && (ye3 += m4.x - Z3.left + W3 - Je3)), Ae3 > Z3.right && (ye3 -= Ae3 - Z3.right - se3, m4.x > Z3.right - Je3 && (ye3 += m4.x - Z3.right + Je3)));
                  var et3 = true === Be3 ? 0 : Be3;
                  "number" == typeof et3 && (we3 < Z3.top && (Ce3 -= we3 - Z3.top - le3, m4.y + V3 < Z3.top + et3 && (Ce3 += m4.y - Z3.top + V3 - et3)), xe3 > Z3.bottom && (Ce3 -= xe3 - Z3.bottom - le3, m4.y > Z3.bottom - et3 && (Ce3 += m4.y - Z3.bottom + et3)));
                  var tt3 = $3.x + ye3, nt3 = tt3 + q3, rt3 = $3.y + Ce3, ot3 = rt3 + D3, it3 = m4.x, at3 = it3 + W3, st3 = m4.y, lt3 = st3 + V3, ct3 = (Math.max(tt3, it3) + Math.min(nt3, at3)) / 2 - tt3, ut3 = (Math.max(rt3, st3) + Math.min(ot3, lt3)) / 2 - rt3;
                  null == s3 || s3(n4, be3);
                  var dt3 = te3.right - $3.x - (ye3 + $3.width), ft3 = te3.bottom - $3.y - (Ce3 + $3.height);
                  1 === ne3 && (ye3 = Math.round(ye3), dt3 = Math.round(dt3)), 1 === re3 && (Ce3 = Math.round(Ce3), ft3 = Math.round(ft3)), u3({ ready: true, offsetX: ye3 / ne3, offsetY: Ce3 / re3, offsetR: dt3 / ne3, offsetB: ft3 / re3, arrowX: ct3 / ne3, arrowY: ut3 / re3, scaleX: ne3, scaleY: re3, align: be3 });
                }
              }), g3 = function() {
                u3(function(e5) {
                  return R(R({}, e5), {}, { ready: false });
                });
              };
              return Me(g3, [o3]), Me(function() {
                e4 || g3();
              }, [e4]), [c3.ready, c3.offsetX, c3.offsetY, c3.offsetR, c3.offsetB, c3.arrowX, c3.arrowY, c3.scaleX, c3.scaleY, c3.align, function() {
                d3.current += 1;
                var e5 = d3.current;
                Promise.resolve().then(function() {
                  d3.current === e5 && m3();
                });
              }];
            }(Oe2, ce2, D2 && null !== Ve2 ? Ve2 : me2, $2, B2, T2, V2), Xe2 = N(Ge2, 11), Ue2 = Xe2[0], _e2 = Xe2[1], Qe2 = Xe2[2], Ye2 = Xe2[3], Ze2 = Xe2[4], Je2 = Xe2[5], et2 = Xe2[6], tt2 = Xe2[7], nt2 = Xe2[8], rt2 = Xe2[9], ot2 = Xe2[10], it2 = function(e4, n4, r3, o3) {
              return t2.useMemo(function() {
                var t3 = Jp(null != r3 ? r3 : n4), i3 = Jp(null != o3 ? o3 : n4), a3 = new Set(t3), s3 = new Set(i3);
                return e4 && (a3.has("hover") && (a3.delete("hover"), a3.add("click")), s3.has("hover") && (s3.delete("hover"), s3.add("click"))), [a3, s3];
              }, [e4, n4, r3, o3]);
            }(ne2, l2, c2, u2), at2 = N(it2, 2), st2 = at2[0], lt2 = at2[1], ct2 = st2.has("click"), ut2 = lt2.has("click") || lt2.has("contextMenu"), dt2 = Kr(function() {
              Fe2 || ot2();
            });
            !function(e4, t3, n4, r3) {
              Me(function() {
                if (e4 && t3 && n4) {
                  let c3 = function() {
                    r3(), Ie2.current && D2 && ut2 && Be2(false);
                  };
                  var o3 = n4, i3 = rm(t3), a3 = rm(o3), s3 = nm(o3), l3 = new Set([s3].concat(x(i3), x(a3)));
                  return l3.forEach(function(e5) {
                    e5.addEventListener("scroll", c3, { passive: true });
                  }), s3.addEventListener("resize", c3, { passive: true }), r3(), function() {
                    l3.forEach(function(e5) {
                      e5.removeEventListener("scroll", c3), s3.removeEventListener("resize", c3);
                    });
                  };
                }
              }, [e4, t3, n4]);
            }(Oe2, me2, ce2, dt2), Me(function() {
              dt2();
            }, [Ve2, $2]), Me(function() {
              !Oe2 || null != B2 && B2[$2] || dt2();
            }, [JSON.stringify(T2)]);
            var ft2 = t2.useMemo(function() {
              var e4 = function(e5, t3, n4, r3) {
                for (var o3 = n4.points, i3 = Object.keys(e5), a3 = 0; a3 < i3.length; a3 += 1) {
                  var s3, l3 = i3[a3];
                  if (em(null === (s3 = e5[l3]) || void 0 === s3 ? void 0 : s3.points, o3, r3))
                    return "".concat(t3, "-placement-").concat(l3);
                }
                return "";
              }(B2, i2, rt2, D2);
              return br()(e4, null == z2 ? void 0 : z2(rt2));
            }, [rt2, z2, B2, i2, D2]);
            t2.useImperativeHandle(r2, function() {
              return { nativeElement: he2.current, popupElement: de2.current, forceAlign: dt2 };
            });
            var pt2 = N(t2.useState(0), 2), mt2 = pt2[0], gt2 = pt2[1], ht2 = N(t2.useState(0), 2), vt2 = ht2[0], bt2 = ht2[1], yt2 = function() {
              if (L2 && me2) {
                var e4 = me2.getBoundingClientRect();
                gt2(e4.width), bt2(e4.height);
              }
            };
            function Ct2(e4, t3, n4, r3) {
              Ce2[e4] = function(o3) {
                var i3;
                null == r3 || r3(o3), Be2(t3, n4);
                for (var a3 = arguments.length, s3 = new Array(a3 > 1 ? a3 - 1 : 0), l3 = 1; l3 < a3; l3++)
                  s3[l3 - 1] = arguments[l3];
                null === (i3 = ye2[e4]) || void 0 === i3 || i3.call.apply(i3, [ye2, o3].concat(s3));
              };
            }
            Me(function() {
              He2 && (ot2(), He2(), De2(null));
            }, [He2]), (ct2 || ut2) && (Ce2.onClick = function(e4) {
              var t3;
              Ie2.current && ut2 ? Be2(false) : !Ie2.current && ct2 && (Ke2(e4), Be2(true));
              for (var n4 = arguments.length, r3 = new Array(n4 > 1 ? n4 - 1 : 0), o3 = 1; o3 < n4; o3++)
                r3[o3 - 1] = arguments[o3];
              null === (t3 = ye2.onClick) || void 0 === t3 || t3.call.apply(t3, [ye2, e4].concat(r3));
            });
            var wt2, xt2, St2 = function(e4, n4, r3, o3, i3, a3, s3, l3) {
              var c3 = t2.useRef(e4);
              c3.current = e4;
              var u3 = t2.useRef(false);
              return t2.useEffect(function() {
                if (n4 && o3 && (!i3 || a3)) {
                  var e5 = function() {
                    u3.current = false;
                  }, t3 = function(e6) {
                    var t4;
                    !c3.current || s3((null === (t4 = e6.composedPath) || void 0 === t4 || null === (t4 = t4.call(e6)) || void 0 === t4 ? void 0 : t4[0]) || e6.target) || u3.current || l3(false);
                  }, d3 = nm(o3);
                  d3.addEventListener("pointerdown", e5, true), d3.addEventListener("mousedown", t3, true), d3.addEventListener("contextmenu", t3, true);
                  var f3 = Li(r3);
                  return f3 && (f3.addEventListener("mousedown", t3, true), f3.addEventListener("contextmenu", t3, true)), function() {
                    d3.removeEventListener("pointerdown", e5, true), d3.removeEventListener("mousedown", t3, true), d3.removeEventListener("contextmenu", t3, true), f3 && (f3.removeEventListener("mousedown", t3, true), f3.removeEventListener("contextmenu", t3, true));
                  };
                }
              }, [n4, r3, o3, i3, a3]), function() {
                u3.current = true;
              };
            }(Oe2, ut2, me2, ce2, C2, S2, we2, Be2), At2 = st2.has("hover"), Et2 = lt2.has("hover");
            At2 && (Ct2("onMouseEnter", true, g2, function(e4) {
              Ke2(e4);
            }), Ct2("onPointerEnter", true, g2, function(e4) {
              Ke2(e4);
            }), wt2 = function(e4) {
              (Oe2 || Fe2) && null != ce2 && ce2.contains(e4.target) && Be2(true, g2);
            }, D2 && (Ce2.onMouseMove = function(e4) {
              var t3;
              null === (t3 = ye2.onMouseMove) || void 0 === t3 || t3.call(ye2, e4);
            })), Et2 && (Ct2("onMouseLeave", false, v2), Ct2("onPointerLeave", false, v2), xt2 = function() {
              Be2(false, v2);
            }), st2.has("focus") && Ct2("onFocus", true, b2), lt2.has("focus") && Ct2("onBlur", false, y2), st2.has("contextMenu") && (Ce2.onContextMenu = function(e4) {
              var t3;
              Ie2.current && lt2.has("contextMenu") ? Be2(false) : (Ke2(e4), Be2(true)), e4.preventDefault();
              for (var n4 = arguments.length, r3 = new Array(n4 > 1 ? n4 - 1 : 0), o3 = 1; o3 < n4; o3++)
                r3[o3 - 1] = arguments[o3];
              null === (t3 = ye2.onContextMenu) || void 0 === t3 || t3.call.apply(t3, [ye2, e4].concat(r3));
            }), Y2 && (Ce2.className = br()(ye2.className, Y2));
            var kt2 = R(R({}, ye2), Ce2), Ot2 = {};
            ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"].forEach(function(e4) {
              J2[e4] && (Ot2[e4] = function() {
                for (var t3, n4 = arguments.length, r3 = new Array(n4), o3 = 0; o3 < n4; o3++)
                  r3[o3] = arguments[o3];
                null === (t3 = kt2[e4]) || void 0 === t3 || t3.call.apply(t3, [kt2].concat(r3)), J2[e4].apply(J2, r3);
              });
            });
            var Pt2 = t2.cloneElement(be2, R(R({}, kt2), Ot2)), It2 = { x: Je2, y: et2 }, jt2 = W2 ? R({}, true !== W2 ? W2 : {}) : null;
            return t2.createElement(t2.Fragment, null, t2.createElement(Pf, { disabled: !Oe2, ref: ve2, onResize: function() {
              yt2(), dt2();
            } }, t2.createElement(Yp, { getTriggerDOMNode: Z2 }, Pt2)), t2.createElement(Zp.Provider, { value: ae2 }, t2.createElement(_p, { portal: e3, ref: fe2, prefixCls: i2, popup: P2, className: br()(I2, ft2), style: j2, target: me2, onMouseEnter: wt2, onMouseLeave: xt2, onPointerEnter: wt2, zIndex: F2, open: Oe2, keepDom: Fe2, fresh: H2, onClick: q2, onPointerDownCapture: St2, mask: C2, motion: xe2, maskMotion: Se2, onVisibleChanged: function(e4) {
              Le2(false), ot2(), null == m2 || m2(e4);
            }, onPrepare: function() {
              return new Promise(function(e4) {
                yt2(), De2(function() {
                  return e4;
                });
              });
            }, forceRender: E2, autoDestroy: ee2, getPopupContainer: A2, align: rt2, arrow: jt2, arrowPos: It2, ready: Ue2, offsetX: _e2, offsetY: Qe2, offsetR: Ye2, offsetB: Ze2, onAlign: dt2, stretch: L2, targetWidth: mt2 / tt2, targetHeight: vt2 / nt2 })));
          });
          return n2;
        }(Tl);
        var mm = { adjustX: 1, adjustY: 1 }, gm = { topLeft: { points: ["bl", "tl"], overflow: mm }, topRight: { points: ["br", "tr"], overflow: mm }, bottomLeft: { points: ["tl", "bl"], overflow: mm }, bottomRight: { points: ["tr", "br"], overflow: mm }, leftTop: { points: ["tr", "tl"], overflow: mm }, leftBottom: { points: ["br", "bl"], overflow: mm }, rightTop: { points: ["tl", "tr"], overflow: mm }, rightBottom: { points: ["bl", "br"], overflow: mm } }, hm = { topLeft: { points: ["bl", "tl"], overflow: mm }, topRight: { points: ["br", "tr"], overflow: mm }, bottomLeft: { points: ["tl", "bl"], overflow: mm }, bottomRight: { points: ["tr", "br"], overflow: mm }, rightTop: { points: ["tr", "tl"], overflow: mm }, rightBottom: { points: ["br", "bl"], overflow: mm }, leftTop: { points: ["tl", "tr"], overflow: mm }, leftBottom: { points: ["bl", "br"], overflow: mm } };
        function vm(e3, t3, n2) {
          return t3 || (n2 ? n2[e3] || n2.other : void 0);
        }
        var bm = { horizontal: "bottomLeft", vertical: "rightTop", "vertical-left": "rightTop", "vertical-right": "leftTop" };
        function ym(e3) {
          var n2 = e3.prefixCls, r2 = e3.visible, o2 = e3.children, i2 = e3.popup, a2 = e3.popupStyle, s2 = e3.popupClassName, l2 = e3.popupOffset, c2 = e3.disabled, u2 = e3.mode, d2 = e3.onVisibleChange, f2 = t2.useContext(Jf), p2 = f2.getPopupContainer, m2 = f2.rtl, g2 = f2.subMenuOpenDelay, h2 = f2.subMenuCloseDelay, v2 = f2.builtinPlacements, b2 = f2.triggerSubMenuAction, y2 = f2.forceSubMenuRender, C2 = f2.rootClassName, w2 = f2.motion, x2 = f2.defaultMotions, S2 = N(t2.useState(false), 2), A2 = S2[0], E2 = S2[1], k2 = R(R({}, m2 ? hm : gm), v2), O2 = bm[u2], P2 = vm(u2, w2, x2), j2 = t2.useRef(P2);
          "inline" !== u2 && (j2.current = P2);
          var $2 = R(R({}, j2.current), {}, { leavedClassName: "".concat(n2, "-hidden"), removeOnLeave: false, motionAppear: true }), M2 = t2.useRef();
          return t2.useEffect(function() {
            return M2.current = Po(function() {
              E2(r2);
            }), function() {
              Po.cancel(M2.current);
            };
          }, [r2]), t2.createElement(pm, { prefixCls: n2, popupClassName: br()("".concat(n2, "-popup"), I({}, "".concat(n2, "-rtl"), m2), s2, C2), stretch: "horizontal" === u2 ? "minWidth" : null, getPopupContainer: p2, builtinPlacements: k2, popupPlacement: O2, popupVisible: A2, popup: i2, popupStyle: a2, popupAlign: l2 && { offset: l2 }, action: c2 ? [] : [b2], mouseEnterDelay: g2, mouseLeaveDelay: h2, onPopupVisibleChange: d2, forceRender: y2, popupMotion: $2, fresh: true }, o2);
        }
        function Cm(e3) {
          var n2 = e3.id, r2 = e3.open, o2 = e3.keyPath, i2 = e3.children, a2 = "inline", s2 = t2.useContext(Jf), l2 = s2.prefixCls, c2 = s2.forceSubMenuRender, u2 = s2.motion, d2 = s2.defaultMotions, f2 = s2.mode, p2 = t2.useRef(false);
          p2.current = f2 === a2;
          var m2 = N(t2.useState(!p2.current), 2), g2 = m2[0], h2 = m2[1], v2 = !!p2.current && r2;
          t2.useEffect(function() {
            p2.current && h2(false);
          }, [f2]);
          var b2 = R({}, vm(a2, u2, d2));
          o2.length > 1 && (b2.motionAppear = false);
          var y2 = b2.onVisibleChanged;
          return b2.onVisibleChanged = function(e4) {
            return p2.current || e4 || h2(true), null == y2 ? void 0 : y2(e4);
          }, g2 ? null : t2.createElement(ep, { mode: a2, locked: !p2.current }, t2.createElement(Ko, qe({ visible: v2 }, b2, { forceRender: c2, removeOnLeave: false, leavedClassName: "".concat(l2, "-hidden") }), function(e4) {
            var r3 = e4.className, o3 = e4.style;
            return t2.createElement(qp, { id: n2, className: r3, style: o3 }, i2);
          }));
        }
        var wm = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], xm = ["active"], Sm = t2.forwardRef(function(e3, n2) {
          var r2 = e3.style, o2 = e3.className, i2 = e3.title, a2 = e3.eventKey, s2 = (e3.warnKey, e3.disabled), l2 = e3.internalPopupClose, c2 = e3.children, u2 = e3.itemIcon, d2 = e3.expandIcon, f2 = e3.popupClassName, p2 = e3.popupOffset, m2 = e3.popupStyle, g2 = e3.onClick, h2 = e3.onMouseEnter, v2 = e3.onMouseLeave, b2 = e3.onTitleClick, y2 = e3.onTitleMouseEnter, C2 = e3.onTitleMouseLeave, w2 = Rr(e3, wm), x2 = Yf(a2), S2 = t2.useContext(Jf), A2 = S2.prefixCls, E2 = S2.mode, k2 = S2.openKeys, O2 = S2.disabled, P2 = S2.overflowDisabled, j2 = S2.activeKey, $2 = S2.selectedKeys, M2 = S2.itemIcon, B2 = S2.expandIcon, T2 = S2.onItemClick, F2 = S2.onOpenChange, L2 = S2.onActive, z2 = t2.useContext(sp)._internalRenderSubMenuItem, H2 = t2.useContext(ap).isSubPathKey, D2 = ip(), q2 = "".concat(A2, "-submenu"), V2 = O2 || s2, W2 = t2.useRef(), K2 = t2.useRef(), G2 = null != u2 ? u2 : M2, X2 = null != d2 ? d2 : B2, U2 = k2.includes(a2), _2 = !P2 && U2, Q2 = H2($2, a2), Y2 = Op(a2, V2, y2, C2), Z2 = Y2.active, J2 = Rr(Y2, xm), ee2 = N(t2.useState(false), 2), te2 = ee2[0], ne2 = ee2[1], re2 = function(e4) {
            V2 || ne2(e4);
          }, oe2 = t2.useMemo(function() {
            return Z2 || "inline" !== E2 && (te2 || H2([j2], a2));
          }, [E2, Z2, j2, te2, a2, H2]), ie2 = Pp(D2.length), ae2 = Ap(function(e4) {
            null == g2 || g2($p(e4)), T2(e4);
          }), se2 = x2 && "".concat(x2, "-popup"), le2 = t2.createElement("div", qe({ role: "menuitem", style: ie2, className: "".concat(q2, "-title"), tabIndex: V2 ? null : -1, ref: W2, title: "string" == typeof i2 ? i2 : null, "data-menu-id": P2 && x2 ? null : x2, "aria-expanded": _2, "aria-haspopup": true, "aria-controls": se2, "aria-disabled": V2, onClick: function(e4) {
            V2 || (null == b2 || b2({ key: a2, domEvent: e4 }), "inline" === E2 && F2(a2, !U2));
          }, onFocus: function() {
            L2(a2);
          } }, J2), i2, t2.createElement(Ip, { icon: "horizontal" !== E2 ? X2 : void 0, props: R(R({}, e3), {}, { isOpen: _2, isSubMenu: true }) }, t2.createElement("i", { className: "".concat(q2, "-arrow") }))), ce2 = t2.useRef(E2);
          if ("inline" !== E2 && D2.length > 1 ? ce2.current = "vertical" : ce2.current = E2, !P2) {
            var ue2 = ce2.current;
            le2 = t2.createElement(ym, { mode: ue2, prefixCls: q2, visible: !l2 && _2 && "inline" !== E2, popupClassName: f2, popupOffset: p2, popupStyle: m2, popup: t2.createElement(ep, { mode: "horizontal" === ue2 ? "vertical" : ue2 }, t2.createElement(qp, { id: se2, ref: K2 }, c2)), disabled: V2, onVisibleChange: function(e4) {
              "inline" !== E2 && F2(a2, e4);
            } }, le2);
          }
          var de2 = t2.createElement(Uf.Item, qe({ ref: n2, role: "none" }, w2, { component: "li", style: r2, className: br()(q2, "".concat(q2, "-").concat(E2), o2, I(I(I(I({}, "".concat(q2, "-open"), _2), "".concat(q2, "-active"), oe2), "".concat(q2, "-selected"), Q2), "".concat(q2, "-disabled"), V2)), onMouseEnter: function(e4) {
            re2(true), null == h2 || h2({ key: a2, domEvent: e4 });
          }, onMouseLeave: function(e4) {
            re2(false), null == v2 || v2({ key: a2, domEvent: e4 });
          } }), le2, !P2 && t2.createElement(Cm, { id: se2, open: _2, keyPath: D2 }, c2));
          return z2 && (de2 = z2(de2, e3, { selected: Q2, active: oe2, open: _2, disabled: V2 })), t2.createElement(ep, { onItemClick: ae2, mode: "horizontal" === E2 ? "vertical" : E2, itemIcon: G2, expandIcon: X2 }, de2);
        });
        const Am = t2.forwardRef(function(e3, n2) {
          var r2, o2 = e3.eventKey, i2 = e3.children, a2 = ip(o2), s2 = Vp(i2, a2), l2 = rp();
          return t2.useEffect(function() {
            if (l2)
              return l2.registerPath(o2, a2), function() {
                l2.unregisterPath(o2, a2);
              };
          }, [a2]), r2 = l2 ? s2 : t2.createElement(Sm, qe({ ref: n2 }, e3), s2), t2.createElement(op.Provider, { value: a2 }, r2);
        });
        function Em(e3) {
          var n2 = e3.className, r2 = e3.style, o2 = t2.useContext(Jf).prefixCls;
          return rp() ? null : t2.createElement("li", { role: "separator", className: br()("".concat(o2, "-item-divider"), n2), style: r2 });
        }
        var km = ["className", "title", "eventKey", "children"], Om = t2.forwardRef(function(e3, n2) {
          var r2 = e3.className, o2 = e3.title, i2 = (e3.eventKey, e3.children), a2 = Rr(e3, km), s2 = t2.useContext(Jf).prefixCls, l2 = "".concat(s2, "-item-group");
          return t2.createElement("li", qe({ ref: n2, role: "presentation" }, a2, { onClick: function(e4) {
            return e4.stopPropagation();
          }, className: br()(l2, r2) }), t2.createElement("div", { role: "presentation", className: "".concat(l2, "-title"), title: "string" == typeof o2 ? o2 : void 0 }, o2), t2.createElement("ul", { role: "group", className: "".concat(l2, "-list") }, i2));
        });
        const Pm = t2.forwardRef(function(e3, n2) {
          var r2 = e3.eventKey, o2 = Vp(e3.children, ip(r2));
          return rp() ? o2 : t2.createElement(Om, qe({ ref: n2 }, wa(e3, ["warnKey"])), o2);
        });
        var Im = ["label", "children", "key", "type", "extra"];
        function jm(e3, n2, r2) {
          var o2 = n2.item, i2 = n2.group, a2 = n2.submenu, s2 = n2.divider;
          return (e3 || []).map(function(e4, l2) {
            if (e4 && "object" === O(e4)) {
              var c2 = e4, u2 = c2.label, d2 = c2.children, f2 = c2.key, p2 = c2.type, m2 = c2.extra, g2 = Rr(c2, Im), h2 = null != f2 ? f2 : "tmp-".concat(l2);
              return d2 || "group" === p2 ? "group" === p2 ? t2.createElement(i2, qe({ key: h2 }, g2, { title: u2 }), jm(d2, n2, r2)) : t2.createElement(a2, qe({ key: h2 }, g2, { title: u2 }), jm(d2, n2, r2)) : "divider" === p2 ? t2.createElement(s2, qe({ key: h2 }, g2)) : t2.createElement(o2, qe({ key: h2 }, g2, { extra: m2 }), u2, (!!m2 || 0 === m2) && t2.createElement("span", { className: "".concat(r2, "-item-extra") }, m2));
            }
            return null;
          }).filter(function(e4) {
            return e4;
          });
        }
        function $m(e3, t3, n2, r2, o2) {
          var i2 = e3, a2 = R({ divider: Em, item: Lp, group: Pm, submenu: Am }, r2);
          return t3 && (i2 = jm(t3, a2, o2)), Vp(i2, n2);
        }
        var Nm = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem", "_internalComponents"], Mm = [], Rm = t2.forwardRef(function(e3, n2) {
          var r2, o2 = e3, i2 = o2.prefixCls, a2 = void 0 === i2 ? "rc-menu" : i2, s2 = o2.rootClassName, l2 = o2.style, c2 = o2.className, u2 = o2.tabIndex, d2 = void 0 === u2 ? 0 : u2, f2 = o2.items, p2 = o2.children, m2 = o2.direction, g2 = o2.id, h2 = o2.mode, v2 = void 0 === h2 ? "vertical" : h2, b2 = o2.inlineCollapsed, y2 = o2.disabled, C2 = o2.disabledOverflow, w2 = o2.subMenuOpenDelay, S2 = void 0 === w2 ? 0.1 : w2, A2 = o2.subMenuCloseDelay, E2 = void 0 === A2 ? 0.1 : A2, k2 = o2.forceSubMenuRender, O2 = o2.defaultOpenKeys, P2 = o2.openKeys, j2 = o2.activeKey, $2 = o2.defaultActiveFirst, M2 = o2.selectable, B2 = void 0 === M2 || M2, T2 = o2.multiple, F2 = void 0 !== T2 && T2, L2 = o2.defaultSelectedKeys, z2 = o2.selectedKeys, H2 = o2.onSelect, D2 = o2.onDeselect, q2 = o2.inlineIndent, V2 = void 0 === q2 ? 24 : q2, W2 = o2.motion, K2 = o2.defaultMotions, G2 = o2.triggerSubMenuAction, X2 = void 0 === G2 ? "hover" : G2, U2 = o2.builtinPlacements, _2 = o2.itemIcon, Q2 = o2.expandIcon, Y2 = o2.overflowedIndicator, Z2 = void 0 === Y2 ? "..." : Y2, J2 = o2.overflowedIndicatorPopupClassName, ee2 = o2.getPopupContainer, te2 = o2.onClick, re2 = o2.onOpenChange, oe2 = o2.onKeyDown, ie2 = (o2.openAnimation, o2.openTransitionName, o2._internalRenderMenuItem), ae2 = o2._internalRenderSubMenuItem, se2 = o2._internalComponents, le2 = Rr(o2, Nm), ce2 = N(t2.useMemo(function() {
            return [$m(p2, f2, Mm, se2, a2), $m(p2, f2, Mm, {}, a2)];
          }, [p2, f2, se2]), 2), ue2 = ce2[0], de2 = ce2[1], fe2 = N(t2.useState(false), 2), pe2 = fe2[0], me2 = fe2[1], ge2 = t2.useRef(), he2 = function(e4) {
            var n3 = N(Ur(e4, { value: e4 }), 2), r3 = n3[0], o3 = n3[1];
            return t2.useEffect(function() {
              kp += 1;
              var e5 = "".concat(Ep, "-").concat(kp);
              o3("rc-menu-uuid-".concat(e5));
            }, []), r3;
          }(g2), ve2 = "rtl" === m2, be2 = Ur(O2, { value: P2, postState: function(e4) {
            return e4 || Mm;
          } }), ye2 = N(be2, 2), Ce2 = ye2[0], we2 = ye2[1], xe2 = function(e4) {
            function t3() {
              we2(e4), null == re2 || re2(e4);
            }
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (0, yr.flushSync)(t3) : t3();
          }, Se2 = N(t2.useState(Ce2), 2), Ae2 = Se2[0], Ee2 = Se2[1], ke2 = t2.useRef(false), Oe2 = N(t2.useMemo(function() {
            return "inline" !== v2 && "vertical" !== v2 || !b2 ? [v2, false] : ["vertical", b2];
          }, [v2, b2]), 2), Pe2 = Oe2[0], Ie2 = Oe2[1], je2 = "inline" === Pe2, $e2 = N(t2.useState(Pe2), 2), Ne2 = $e2[0], Me2 = $e2[1], Re2 = N(t2.useState(Ie2), 2), Be2 = Re2[0], Te2 = Re2[1];
          t2.useEffect(function() {
            Me2(Pe2), Te2(Ie2), ke2.current && (je2 ? we2(Ae2) : xe2(Mm));
          }, [Pe2, Ie2]);
          var Fe2 = N(t2.useState(0), 2), Le2 = Fe2[0], ze2 = Fe2[1], He2 = Le2 >= ue2.length - 1 || "horizontal" !== Ne2 || C2;
          t2.useEffect(function() {
            je2 && Ee2(Ce2);
          }, [Ce2]), t2.useEffect(function() {
            return ke2.current = true, function() {
              ke2.current = false;
            };
          }, []);
          var De2 = function() {
            var e4 = N(t2.useState({}), 2)[1], n3 = (0, t2.useRef)(/* @__PURE__ */ new Map()), r3 = (0, t2.useRef)(/* @__PURE__ */ new Map()), o3 = N(t2.useState([]), 2), i3 = o3[0], a3 = o3[1], s3 = (0, t2.useRef)(0), l3 = (0, t2.useRef)(false), c3 = (0, t2.useCallback)(function(t3, o4) {
              var i4 = xp(o4);
              r3.current.set(i4, t3), n3.current.set(t3, i4), s3.current += 1;
              var a4, c4 = s3.current;
              a4 = function() {
                c4 === s3.current && (l3.current || e4({}));
              }, Promise.resolve().then(a4);
            }, []), u3 = (0, t2.useCallback)(function(e5, t3) {
              var o4 = xp(t3);
              r3.current.delete(o4), n3.current.delete(e5);
            }, []), d3 = (0, t2.useCallback)(function(e5) {
              a3(e5);
            }, []), f3 = (0, t2.useCallback)(function(e5, t3) {
              var r4 = (n3.current.get(e5) || "").split(wp);
              return t3 && i3.includes(r4[0]) && r4.unshift(Sp), r4;
            }, [i3]), p3 = (0, t2.useCallback)(function(e5, t3) {
              return e5.filter(function(e6) {
                return void 0 !== e6;
              }).some(function(e6) {
                return f3(e6, true).includes(t3);
              });
            }, [f3]), m3 = (0, t2.useCallback)(function(e5) {
              var t3 = "".concat(n3.current.get(e5)).concat(wp), o4 = /* @__PURE__ */ new Set();
              return x(r3.current.keys()).forEach(function(e6) {
                e6.startsWith(t3) && o4.add(r3.current.get(e6));
              }), o4;
            }, []);
            return t2.useEffect(function() {
              return function() {
                l3.current = true;
              };
            }, []), { registerPath: c3, unregisterPath: u3, refreshOverflowKeys: d3, isSubPathKey: p3, getKeyPath: f3, getKeys: function() {
              var e5 = x(n3.current.keys());
              return i3.length && e5.push(Sp), e5;
            }, getSubPathKeys: m3 };
          }(), Ve2 = De2.registerPath, We2 = De2.unregisterPath, Ke2 = De2.refreshOverflowKeys, Ge2 = De2.isSubPathKey, Xe2 = De2.getKeyPath, Ue2 = De2.getKeys, _e2 = De2.getSubPathKeys, Qe2 = t2.useMemo(function() {
            return { registerPath: Ve2, unregisterPath: We2 };
          }, [Ve2, We2]), Ye2 = t2.useMemo(function() {
            return { isSubPathKey: Ge2 };
          }, [Ge2]);
          t2.useEffect(function() {
            Ke2(He2 ? Mm : ue2.slice(Le2 + 1).map(function(e4) {
              return e4.key;
            }));
          }, [Le2, He2]);
          var Ze2 = N(Ur(j2 || $2 && (null === (r2 = ue2[0]) || void 0 === r2 ? void 0 : r2.key), { value: j2 }), 2), Je2 = Ze2[0], et2 = Ze2[1], tt2 = Ap(function(e4) {
            et2(e4);
          }), nt2 = Ap(function() {
            et2(void 0);
          });
          (0, t2.useImperativeHandle)(n2, function() {
            return { list: ge2.current, focus: function(e4) {
              var t3, n3, r3 = Ue2(), o3 = Cp(r3, he2), i3 = o3.elements, a3 = o3.key2element, s3 = o3.element2key, l3 = bp(ge2.current, i3), c3 = null != Je2 ? Je2 : l3[0] ? s3.get(l3[0]) : null === (t3 = ue2.find(function(e5) {
                return !e5.props.disabled;
              })) || void 0 === t3 ? void 0 : t3.key, u3 = a3.get(c3);
              c3 && u3 && (null == u3 || null === (n3 = u3.focus) || void 0 === n3 || n3.call(u3, e4));
            } };
          });
          var rt2 = Ur(L2 || [], { value: z2, postState: function(e4) {
            return Array.isArray(e4) ? e4 : null == e4 ? Mm : [e4];
          } }), ot2 = N(rt2, 2), it2 = ot2[0], at2 = ot2[1], st2 = Ap(function(e4) {
            null == te2 || te2($p(e4)), function(e5) {
              if (B2) {
                var t3, n3 = e5.key, r3 = it2.includes(n3);
                t3 = F2 ? r3 ? it2.filter(function(e6) {
                  return e6 !== n3;
                }) : [].concat(x(it2), [n3]) : [n3], at2(t3);
                var o3 = R(R({}, e5), {}, { selectedKeys: t3 });
                r3 ? null == D2 || D2(o3) : null == H2 || H2(o3);
              }
              !F2 && Ce2.length && "inline" !== Ne2 && xe2(Mm);
            }(e4);
          }), lt2 = Ap(function(e4, t3) {
            var n3 = Ce2.filter(function(t4) {
              return t4 !== e4;
            });
            if (t3)
              n3.push(e4);
            else if ("inline" !== Ne2) {
              var r3 = _e2(e4);
              n3 = n3.filter(function(e5) {
                return !r3.has(e5);
              });
            }
            ne(Ce2, n3, true) || xe2(n3, true);
          }), ct2 = function(e4, n3, r3, o3, i3, a3, s3, l3, c3, u3) {
            var d3 = t2.useRef(), f3 = t2.useRef();
            f3.current = n3;
            var p3 = function() {
              Po.cancel(d3.current);
            };
            return t2.useEffect(function() {
              return function() {
                p3();
              };
            }, []), function(t3) {
              var m3 = t3.which;
              if ([].concat(vp, [pp, mp, gp, hp]).includes(m3)) {
                var g3 = a3(), h3 = Cp(g3, o3), v3 = h3, b3 = v3.elements, y3 = v3.key2element, C3 = v3.element2key, w3 = function(e5, t4) {
                  for (var n4 = e5 || document.activeElement; n4; ) {
                    if (t4.has(n4))
                      return n4;
                    n4 = n4.parentElement;
                  }
                  return null;
                }(y3.get(n3), b3), x2 = C3.get(w3), S3 = function(e5, t4, n4, r4) {
                  var o4, i4 = "prev", a4 = "next", s4 = "children", l4 = "parent";
                  if ("inline" === e5 && r4 === pp)
                    return { inlineTrigger: true };
                  var c4 = I(I({}, dp, i4), fp, a4), u4 = I(I(I(I({}, cp, n4 ? a4 : i4), up, n4 ? i4 : a4), fp, s4), pp, s4), d4 = I(I(I(I(I(I({}, dp, i4), fp, a4), pp, s4), mp, l4), cp, n4 ? s4 : l4), up, n4 ? l4 : s4);
                  switch (null === (o4 = { inline: c4, horizontal: u4, vertical: d4, inlineSub: c4, horizontalSub: d4, verticalSub: d4 }["".concat(e5).concat(t4 ? "" : "Sub")]) || void 0 === o4 ? void 0 : o4[r4]) {
                    case i4:
                      return { offset: -1, sibling: true };
                    case a4:
                      return { offset: 1, sibling: true };
                    case l4:
                      return { offset: -1, sibling: false };
                    case s4:
                      return { offset: 1, sibling: false };
                    default:
                      return null;
                  }
                }(e4, 1 === s3(x2, true).length, r3, m3);
                if (!S3 && m3 !== gp && m3 !== hp)
                  return;
                (vp.includes(m3) || [gp, hp].includes(m3)) && t3.preventDefault();
                var A3 = function(e5) {
                  if (e5) {
                    var t4 = e5, n4 = e5.querySelector("a");
                    null != n4 && n4.getAttribute("href") && (t4 = n4);
                    var r4 = C3.get(e5);
                    l3(r4), p3(), d3.current = Po(function() {
                      f3.current === r4 && t4.focus();
                    });
                  }
                };
                if ([gp, hp].includes(m3) || S3.sibling || !w3) {
                  var E3, k3, O3 = bp(E3 = w3 && "inline" !== e4 ? function(e5) {
                    for (var t4 = e5; t4; ) {
                      if (t4.getAttribute("data-menu-list"))
                        return t4;
                      t4 = t4.parentElement;
                    }
                    return null;
                  }(w3) : i3.current, b3);
                  k3 = m3 === gp ? O3[0] : m3 === hp ? O3[O3.length - 1] : yp(E3, b3, w3, S3.offset), A3(k3);
                } else if (S3.inlineTrigger)
                  c3(x2);
                else if (S3.offset > 0)
                  c3(x2, true), p3(), d3.current = Po(function() {
                    h3 = Cp(g3, o3);
                    var e5 = w3.getAttribute("aria-controls"), t4 = yp(document.getElementById(e5), h3.elements);
                    A3(t4);
                  }, 5);
                else if (S3.offset < 0) {
                  var P3 = s3(x2, true), j3 = P3[P3.length - 2], $3 = y3.get(j3);
                  c3(j3, false), A3($3);
                }
              }
              null == u3 || u3(t3);
            };
          }(Ne2, Je2, ve2, he2, ge2, Ue2, Xe2, et2, function(e4, t3) {
            var n3 = null != t3 ? t3 : !Ce2.includes(e4);
            lt2(e4, n3);
          }, oe2);
          t2.useEffect(function() {
            me2(true);
          }, []);
          var ut2 = t2.useMemo(function() {
            return { _internalRenderMenuItem: ie2, _internalRenderSubMenuItem: ae2 };
          }, [ie2, ae2]), dt2 = "horizontal" !== Ne2 || C2 ? ue2 : ue2.map(function(e4, n3) {
            return t2.createElement(ep, { key: e4.key, overflowDisabled: n3 > Le2 }, e4);
          }), ft2 = t2.createElement(Uf, qe({ id: g2, ref: ge2, prefixCls: "".concat(a2, "-overflow"), component: "ul", itemComponent: Lp, className: br()(a2, "".concat(a2, "-root"), "".concat(a2, "-").concat(Ne2), c2, I(I({}, "".concat(a2, "-inline-collapsed"), Be2), "".concat(a2, "-rtl"), ve2), s2), dir: m2, style: l2, role: "menu", tabIndex: d2, data: dt2, renderRawItem: function(e4) {
            return e4;
          }, renderRawRest: function(e4) {
            var n3 = e4.length, r3 = n3 ? ue2.slice(-n3) : null;
            return t2.createElement(Am, { eventKey: Sp, title: Z2, disabled: He2, internalPopupClose: 0 === n3, popupClassName: J2 }, r3);
          }, maxCount: "horizontal" !== Ne2 || C2 ? Uf.INVALIDATE : Uf.RESPONSIVE, ssr: "full", "data-menu-list": true, onVisibleChange: function(e4) {
            ze2(e4);
          }, onKeyDown: ct2 }, le2));
          return t2.createElement(sp.Provider, { value: ut2 }, t2.createElement(_f.Provider, { value: he2 }, t2.createElement(ep, { prefixCls: a2, rootClassName: s2, mode: Ne2, openKeys: Ce2, rtl: ve2, disabled: y2, motion: pe2 ? W2 : null, defaultMotions: pe2 ? K2 : null, activeKey: Je2, onActive: tt2, onInactive: nt2, selectedKeys: it2, inlineIndent: V2, subMenuOpenDelay: S2, subMenuCloseDelay: E2, forceSubMenuRender: k2, builtinPlacements: U2, triggerSubMenuAction: X2, getPopupContainer: ee2, itemIcon: _2, expandIcon: Q2, onItemClick: st2, onOpenChange: lt2 }, t2.createElement(ap.Provider, { value: Ye2 }, ft2), t2.createElement("div", { style: { display: "none" }, "aria-hidden": true }, t2.createElement(np.Provider, { value: Qe2 }, de2)))));
        }), Bm = Rm;
        Bm.Item = Lp, Bm.SubMenu = Am, Bm.ItemGroup = Pm, Bm.Divider = Em;
        const Tm = Bm, Fm = t2.createContext({}), Lm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" };
        var zm = function(e3, n2) {
          return t2.createElement(Yi, qe({}, e3, { ref: n2, icon: Lm }));
        };
        const Hm = t2.forwardRef(zm), Dm = (0, t2.createContext)({ prefixCls: "", firstLevel: true, inlineCollapsed: false });
        const qm = (e3) => {
          const { prefixCls: n2, className: r2, dashed: o2 } = e3, i2 = function(e4, t3) {
            var n3 = {};
            for (var r3 in e4)
              Object.prototype.hasOwnProperty.call(e4, r3) && t3.indexOf(r3) < 0 && (n3[r3] = e4[r3]);
            if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
              var o3 = 0;
              for (r3 = Object.getOwnPropertySymbols(e4); o3 < r3.length; o3++)
                t3.indexOf(r3[o3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, r3[o3]) && (n3[r3[o3]] = e4[r3[o3]]);
            }
            return n3;
          }(e3, ["prefixCls", "className", "dashed"]), { getPrefixCls: a2 } = t2.useContext(E), s2 = a2("menu", n2), l2 = br()({ [`${s2}-item-divider-dashed`]: !!o2 }, r2);
          return t2.createElement(Em, Object.assign({ className: l2 }, i2));
        };
        function Vm(e3) {
          var n2 = e3.children, r2 = e3.prefixCls, o2 = e3.id, i2 = e3.overlayInnerStyle, a2 = e3.bodyClassName, s2 = e3.className, l2 = e3.style;
          return t2.createElement("div", { className: br()("".concat(r2, "-content"), s2), style: l2 }, t2.createElement("div", { className: br()("".concat(r2, "-inner"), a2), id: o2, role: "tooltip", style: i2 }, "function" == typeof n2 ? n2() : n2));
        }
        var Wm = { shiftX: 64, adjustY: 1 }, Km = { adjustX: 1, shiftY: true }, Gm = [0, 0], Xm = { left: { points: ["cr", "cl"], overflow: Km, offset: [-4, 0], targetOffset: Gm }, right: { points: ["cl", "cr"], overflow: Km, offset: [4, 0], targetOffset: Gm }, top: { points: ["bc", "tc"], overflow: Wm, offset: [0, -4], targetOffset: Gm }, bottom: { points: ["tc", "bc"], overflow: Wm, offset: [0, 4], targetOffset: Gm }, topLeft: { points: ["bl", "tl"], overflow: Wm, offset: [0, -4], targetOffset: Gm }, leftTop: { points: ["tr", "tl"], overflow: Km, offset: [-4, 0], targetOffset: Gm }, topRight: { points: ["br", "tr"], overflow: Wm, offset: [0, -4], targetOffset: Gm }, rightTop: { points: ["tl", "tr"], overflow: Km, offset: [4, 0], targetOffset: Gm }, bottomRight: { points: ["tr", "br"], overflow: Wm, offset: [0, 4], targetOffset: Gm }, rightBottom: { points: ["bl", "br"], overflow: Km, offset: [4, 0], targetOffset: Gm }, bottomLeft: { points: ["tl", "bl"], overflow: Wm, offset: [0, 4], targetOffset: Gm }, leftBottom: { points: ["br", "bl"], overflow: Km, offset: [-4, 0], targetOffset: Gm } }, Um = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"], _m = function(e3, n2) {
          var r2 = e3.overlayClassName, o2 = e3.trigger, i2 = void 0 === o2 ? ["hover"] : o2, a2 = e3.mouseEnterDelay, s2 = void 0 === a2 ? 0 : a2, l2 = e3.mouseLeaveDelay, c2 = void 0 === l2 ? 0.1 : l2, u2 = e3.overlayStyle, d2 = e3.prefixCls, f2 = void 0 === d2 ? "rc-tooltip" : d2, p2 = e3.children, m2 = e3.onVisibleChange, g2 = e3.afterVisibleChange, h2 = e3.transitionName, v2 = e3.animation, b2 = e3.motion, y2 = e3.placement, C2 = void 0 === y2 ? "right" : y2, w2 = e3.align, x2 = void 0 === w2 ? {} : w2, S2 = e3.destroyTooltipOnHide, A2 = void 0 !== S2 && S2, E2 = e3.defaultVisible, k2 = e3.getTooltipContainer, O2 = e3.overlayInnerStyle, P2 = (e3.arrowContent, e3.overlay), I2 = e3.id, j2 = e3.showArrow, $2 = void 0 === j2 || j2, N2 = e3.classNames, M2 = e3.styles, B2 = Rr(e3, Um), T2 = (0, t2.useRef)(null);
          (0, t2.useImperativeHandle)(n2, function() {
            return T2.current;
          });
          var F2 = R({}, B2);
          return "visible" in e3 && (F2.popupVisible = e3.visible), t2.createElement(pm, qe({ popupClassName: br()(r2, null == N2 ? void 0 : N2.root), prefixCls: f2, popup: function() {
            return t2.createElement(Vm, { key: "content", prefixCls: f2, id: I2, bodyClassName: null == N2 ? void 0 : N2.body, overlayInnerStyle: R(R({}, O2), null == M2 ? void 0 : M2.body) }, P2);
          }, action: i2, builtinPlacements: Xm, popupPlacement: C2, ref: T2, popupAlign: x2, getPopupContainer: k2, onPopupVisibleChange: m2, afterPopupVisibleChange: g2, popupTransitionName: h2, popupAnimation: v2, popupMotion: b2, defaultPopupVisible: E2, autoDestroy: A2, mouseLeaveDelay: c2, popupStyle: R(R({}, u2), null == M2 ? void 0 : M2.root), mouseEnterDelay: s2, arrow: $2 }, F2), p2);
        };
        const Qm = (0, t2.forwardRef)(_m);
        function Ym(e3) {
          const { sizePopupArrow: t3, borderRadiusXS: n2, borderRadiusOuter: r2 } = e3, o2 = t3 / 2, i2 = o2, a2 = 1 * r2 / Math.sqrt(2), s2 = o2 - r2 * (1 - 1 / Math.sqrt(2)), l2 = o2 - n2 * (1 / Math.sqrt(2)), c2 = r2 * (Math.sqrt(2) - 1) + n2 * (1 / Math.sqrt(2)), u2 = 2 * o2 - l2, d2 = c2, f2 = 2 * o2 - a2, p2 = s2, m2 = 2 * o2 - 0, g2 = i2, h2 = o2 * Math.sqrt(2) + r2 * (Math.sqrt(2) - 2), v2 = r2 * (Math.sqrt(2) - 1);
          return { arrowShadowWidth: h2, arrowPath: `path('M 0 ${i2} A ${r2} ${r2} 0 0 0 ${a2} ${s2} L ${l2} ${c2} A ${n2} ${n2} 0 0 1 ${u2} ${d2} L ${f2} ${p2} A ${r2} ${r2} 0 0 0 ${m2} ${g2} Z')`, arrowPolygon: `polygon(${v2}px 100%, 50% ${v2}px, ${2 * o2 - v2}px 100%, ${v2}px 100%)` };
        }
        const Zm = (e3, t3, n2) => {
          const { sizePopupArrow: r2, arrowPolygon: o2, arrowPath: i2, arrowShadowWidth: a2, borderRadiusXS: s2, calc: l2 } = e3;
          return { pointerEvents: "none", width: r2, height: r2, overflow: "hidden", "&::before": { position: "absolute", bottom: 0, insetInlineStart: 0, width: r2, height: l2(r2).div(2).equal(), background: t3, clipPath: { _multi_value_: true, value: [o2, i2] }, content: '""' }, "&::after": { content: '""', position: "absolute", width: a2, height: a2, bottom: 0, insetInline: 0, margin: "auto", borderRadius: { _skip_check_: true, value: `0 0 ${Ee(s2)} 0` }, transform: "translateY(50%) rotate(-135deg)", boxShadow: n2, zIndex: 0, background: "transparent" } };
        };
        function Jm(e3) {
          const { contentRadius: t3, limitVerticalRadius: n2 } = e3, r2 = t3 > 12 ? t3 + 2 : 12;
          return { arrowOffsetHorizontal: r2, arrowOffsetVertical: n2 ? 8 : r2 };
        }
        function eg(e3, t3) {
          return e3 ? t3 : {};
        }
        function tg(e3, t3, n2) {
          const { componentCls: r2, boxShadowPopoverArrow: o2, arrowOffsetVertical: i2, arrowOffsetHorizontal: a2 } = e3, { arrowDistance: s2 = 0, arrowPlacement: l2 = { left: true, right: true, top: true, bottom: true } } = n2 || {};
          return { [r2]: Object.assign(Object.assign(Object.assign(Object.assign({ [`${r2}-arrow`]: [Object.assign(Object.assign({ position: "absolute", zIndex: 1, display: "block" }, Zm(e3, t3, o2)), { "&:before": { background: t3 } })] }, eg(!!l2.top, { [[`&-placement-top > ${r2}-arrow`, `&-placement-topLeft > ${r2}-arrow`, `&-placement-topRight > ${r2}-arrow`].join(",")]: { bottom: s2, transform: "translateY(100%) rotate(180deg)" }, [`&-placement-top > ${r2}-arrow`]: { left: { _skip_check_: true, value: "50%" }, transform: "translateX(-50%) translateY(100%) rotate(180deg)" }, "&-placement-topLeft": { "--arrow-offset-horizontal": a2, [`> ${r2}-arrow`]: { left: { _skip_check_: true, value: a2 } } }, "&-placement-topRight": { "--arrow-offset-horizontal": `calc(100% - ${Ee(a2)})`, [`> ${r2}-arrow`]: { right: { _skip_check_: true, value: a2 } } } })), eg(!!l2.bottom, { [[`&-placement-bottom > ${r2}-arrow`, `&-placement-bottomLeft > ${r2}-arrow`, `&-placement-bottomRight > ${r2}-arrow`].join(",")]: { top: s2, transform: "translateY(-100%)" }, [`&-placement-bottom > ${r2}-arrow`]: { left: { _skip_check_: true, value: "50%" }, transform: "translateX(-50%) translateY(-100%)" }, "&-placement-bottomLeft": { "--arrow-offset-horizontal": a2, [`> ${r2}-arrow`]: { left: { _skip_check_: true, value: a2 } } }, "&-placement-bottomRight": { "--arrow-offset-horizontal": `calc(100% - ${Ee(a2)})`, [`> ${r2}-arrow`]: { right: { _skip_check_: true, value: a2 } } } })), eg(!!l2.left, { [[`&-placement-left > ${r2}-arrow`, `&-placement-leftTop > ${r2}-arrow`, `&-placement-leftBottom > ${r2}-arrow`].join(",")]: { right: { _skip_check_: true, value: s2 }, transform: "translateX(100%) rotate(90deg)" }, [`&-placement-left > ${r2}-arrow`]: { top: { _skip_check_: true, value: "50%" }, transform: "translateY(-50%) translateX(100%) rotate(90deg)" }, [`&-placement-leftTop > ${r2}-arrow`]: { top: i2 }, [`&-placement-leftBottom > ${r2}-arrow`]: { bottom: i2 } })), eg(!!l2.right, { [[`&-placement-right > ${r2}-arrow`, `&-placement-rightTop > ${r2}-arrow`, `&-placement-rightBottom > ${r2}-arrow`].join(",")]: { left: { _skip_check_: true, value: s2 }, transform: "translateX(-100%) rotate(-90deg)" }, [`&-placement-right > ${r2}-arrow`]: { top: { _skip_check_: true, value: "50%" }, transform: "translateY(-50%) translateX(-100%) rotate(-90deg)" }, [`&-placement-rightTop > ${r2}-arrow`]: { top: i2 }, [`&-placement-rightBottom > ${r2}-arrow`]: { bottom: i2 } })) };
        }
        const ng = { left: { points: ["cr", "cl"] }, right: { points: ["cl", "cr"] }, top: { points: ["bc", "tc"] }, bottom: { points: ["tc", "bc"] }, topLeft: { points: ["bl", "tl"] }, leftTop: { points: ["tr", "tl"] }, topRight: { points: ["br", "tr"] }, rightTop: { points: ["tl", "tr"] }, bottomRight: { points: ["tr", "br"] }, rightBottom: { points: ["bl", "br"] }, bottomLeft: { points: ["tl", "bl"] }, leftBottom: { points: ["br", "bl"] } }, rg = { topLeft: { points: ["bl", "tc"] }, leftTop: { points: ["tr", "cl"] }, topRight: { points: ["br", "tc"] }, rightTop: { points: ["tl", "cr"] }, bottomRight: { points: ["tr", "bc"] }, rightBottom: { points: ["bl", "cr"] }, bottomLeft: { points: ["tl", "bc"] }, leftBottom: { points: ["br", "cl"] } }, og = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
        function ig(e3) {
          const { arrowWidth: t3, autoAdjustOverflow: n2, arrowPointAtCenter: r2, offset: o2, borderRadius: i2, visibleFirst: a2 } = e3, s2 = t3 / 2, l2 = {};
          return Object.keys(ng).forEach((e4) => {
            const c2 = r2 && rg[e4] || ng[e4], u2 = Object.assign(Object.assign({}, c2), { offset: [0, 0], dynamicInset: true });
            switch (l2[e4] = u2, og.has(e4) && (u2.autoArrow = false), e4) {
              case "top":
              case "topLeft":
              case "topRight":
                u2.offset[1] = -s2 - o2;
                break;
              case "bottom":
              case "bottomLeft":
              case "bottomRight":
                u2.offset[1] = s2 + o2;
                break;
              case "left":
              case "leftTop":
              case "leftBottom":
                u2.offset[0] = -s2 - o2;
                break;
              case "right":
              case "rightTop":
              case "rightBottom":
                u2.offset[0] = s2 + o2;
            }
            const d2 = Jm({ contentRadius: i2, limitVerticalRadius: true });
            if (r2)
              switch (e4) {
                case "topLeft":
                case "bottomLeft":
                  u2.offset[0] = -d2.arrowOffsetHorizontal - s2;
                  break;
                case "topRight":
                case "bottomRight":
                  u2.offset[0] = d2.arrowOffsetHorizontal + s2;
                  break;
                case "leftTop":
                case "rightTop":
                  u2.offset[1] = 2 * -d2.arrowOffsetHorizontal + s2;
                  break;
                case "leftBottom":
                case "rightBottom":
                  u2.offset[1] = 2 * d2.arrowOffsetHorizontal - s2;
              }
            u2.overflow = function(e5, t4, n3, r3) {
              if (false === r3)
                return { adjustX: false, adjustY: false };
              const o3 = r3 && "object" == typeof r3 ? r3 : {}, i3 = {};
              switch (e5) {
                case "top":
                case "bottom":
                  i3.shiftX = 2 * t4.arrowOffsetHorizontal + n3, i3.shiftY = true, i3.adjustY = true;
                  break;
                case "left":
                case "right":
                  i3.shiftY = 2 * t4.arrowOffsetVertical + n3, i3.shiftX = true, i3.adjustX = true;
              }
              const a3 = Object.assign(Object.assign({}, i3), o3);
              return a3.shiftX || (a3.adjustX = true), a3.shiftY || (a3.adjustY = true), a3;
            }(e4, d2, t3, n2), a2 && (u2.htmlRegion = "visibleFirst");
          }), l2;
        }
        function ag(e3, t3) {
          return fs.reduce((n2, r2) => {
            const o2 = e3[`${r2}1`], i2 = e3[`${r2}3`], a2 = e3[`${r2}6`], s2 = e3[`${r2}7`];
            return Object.assign(Object.assign({}, n2), t3(r2, { lightColor: o2, lightBorderColor: i2, darkColor: a2, textColor: s2 }));
          }, {});
        }
        const sg = (e3) => {
          const { calc: t3, componentCls: n2, tooltipMaxWidth: r2, tooltipColor: o2, tooltipBg: i2, tooltipBorderRadius: a2, zIndexPopup: s2, controlHeight: l2, boxShadowSecondary: c2, paddingSM: u2, paddingXS: d2, arrowOffsetHorizontal: f2, sizePopupArrow: p2 } = e3, m2 = t3(a2).add(p2).add(f2).equal(), g2 = t3(a2).mul(2).add(p2).equal();
          return [{ [n2]: Object.assign(Object.assign(Object.assign(Object.assign({}, oi(e3)), { position: "absolute", zIndex: s2, display: "block", width: "max-content", maxWidth: r2, visibility: "visible", "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))", transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "), "&-hidden": { display: "none" }, "--antd-arrow-background-color": i2, [`${n2}-inner`]: { minWidth: g2, minHeight: l2, padding: `${Ee(e3.calc(u2).div(2).equal())} ${Ee(d2)}`, color: o2, textAlign: "start", textDecoration: "none", wordWrap: "break-word", backgroundColor: i2, borderRadius: a2, boxShadow: c2, boxSizing: "border-box" }, [["&-placement-topLeft", "&-placement-topRight", "&-placement-bottomLeft", "&-placement-bottomRight"].join(",")]: { minWidth: m2 }, [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: { [`${n2}-inner`]: { borderRadius: e3.min(a2, 8) } }, [`${n2}-content`]: { position: "relative" } }), ag(e3, (e4, t4) => {
            let { darkColor: r3 } = t4;
            return { [`&${n2}-${e4}`]: { [`${n2}-inner`]: { backgroundColor: r3 }, [`${n2}-arrow`]: { "--antd-arrow-background-color": r3 } } };
          })), { "&-rtl": { direction: "rtl" } }) }, tg(e3, "var(--antd-arrow-background-color)"), { [`${n2}-pure`]: { position: "relative", maxWidth: "none", margin: e3.sizePopupArrow } }];
        }, lg = (e3) => Object.assign(Object.assign({ zIndexPopup: e3.zIndexPopupBase + 70 }, Jm({ contentRadius: e3.borderRadius, limitVerticalRadius: true })), Ym(Ba(e3, { borderRadiusOuter: Math.min(e3.borderRadiusOuter, 4) }))), cg = function(e3) {
          const t3 = qa("Tooltip", (e4) => {
            const { borderRadius: t4, colorTextLightSolid: n2, colorBgSpotlight: r2 } = e4, o2 = Ba(e4, { tooltipMaxWidth: 250, tooltipColor: n2, tooltipBorderRadius: t4, tooltipBg: r2 });
            return [sg(o2), pd(e4, "zoom-big-fast")];
          }, lg, { resetStyle: false, injectStyle: !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1] });
          return t3(e3);
        }, ug = fs.map((e3) => `${e3}-inverse`);
        function dg(e3, t3) {
          const n2 = function(e4) {
            return arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] ? fs.includes(e4) : [].concat(x(ug), x(fs)).includes(e4);
          }(t3), r2 = br()({ [`${e3}-${t3}`]: t3 && n2 }), o2 = {}, i2 = {};
          return t3 && !n2 && (o2.background = t3, i2["--antd-arrow-background-color"] = t3), { className: r2, overlayStyle: o2, arrowStyle: i2 };
        }
        const fg = t2.forwardRef((e3, n2) => {
          var r2, o2, i2, a2, s2, l2;
          const { prefixCls: c2, openClassName: u2, getTooltipContainer: d2, color: f2, overlayInnerStyle: p2, children: m2, afterOpenChange: g2, afterVisibleChange: h2, destroyTooltipOnHide: v2, arrow: b2 = true, title: y2, overlay: C2, builtinPlacements: w2, arrowPointAtCenter: x2 = false, autoAdjustOverflow: S2 = true } = e3, A2 = !!b2, [, k2] = ei(), { getPopupContainer: O2, getPrefixCls: P2, direction: I2, tooltip: j2 } = t2.useContext(E), $2 = Jt(), N2 = t2.useRef(null), M2 = () => {
            var e4;
            null === (e4 = N2.current) || void 0 === e4 || e4.forceAlign();
          };
          t2.useImperativeHandle(n2, () => {
            var e4;
            return { forceAlign: M2, forcePopupAlign: () => {
              $2.deprecated(false, "forcePopupAlign", "forceAlign"), M2();
            }, nativeElement: null === (e4 = N2.current) || void 0 === e4 ? void 0 : e4.nativeElement };
          });
          const [R2, B2] = Ur(false, { value: null !== (r2 = e3.open) && void 0 !== r2 ? r2 : e3.visible, defaultValue: null !== (o2 = e3.defaultOpen) && void 0 !== o2 ? o2 : e3.defaultVisible }), T2 = !y2 && !C2 && 0 !== y2, F2 = t2.useMemo(() => {
            var e4, t3;
            let n3 = x2;
            return "object" == typeof b2 && (n3 = null !== (t3 = null !== (e4 = b2.pointAtCenter) && void 0 !== e4 ? e4 : b2.arrowPointAtCenter) && void 0 !== t3 ? t3 : x2), w2 || ig({ arrowPointAtCenter: n3, autoAdjustOverflow: S2, arrowWidth: A2 ? k2.sizePopupArrow : 0, borderRadius: k2.borderRadius, offset: k2.marginXXS, visibleFirst: true });
          }, [x2, b2, w2, k2]), L2 = t2.useMemo(() => 0 === y2 ? y2 : C2 || y2 || "", [C2, y2]), z2 = t2.createElement(bu, { space: true }, "function" == typeof L2 ? L2() : L2), { getPopupContainer: H2, placement: D2 = "top", mouseEnterDelay: q2 = 0.1, mouseLeaveDelay: V2 = 0.1, overlayStyle: W2, rootClassName: K2, overlayClassName: G2, styles: X2, classNames: U2 } = e3, _2 = function(e4, t3) {
            var n3 = {};
            for (var r3 in e4)
              Object.prototype.hasOwnProperty.call(e4, r3) && t3.indexOf(r3) < 0 && (n3[r3] = e4[r3]);
            if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
              var o3 = 0;
              for (r3 = Object.getOwnPropertySymbols(e4); o3 < r3.length; o3++)
                t3.indexOf(r3[o3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, r3[o3]) && (n3[r3[o3]] = e4[r3[o3]]);
            }
            return n3;
          }(e3, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]), Q2 = P2("tooltip", c2), Y2 = P2(), Z2 = e3["data-popover-inject"];
          let J2 = R2;
          "open" in e3 || "visible" in e3 || !T2 || (J2 = false);
          const ee2 = t2.isValidElement(m2) && !Sa(m2) ? m2 : t2.createElement("span", null, m2), te2 = ee2.props, ne2 = te2.className && "string" != typeof te2.className ? te2.className : br()(te2.className, u2 || `${Q2}-open`), [re2, oe2, ie2] = cg(Q2, !Z2), ae2 = dg(Q2, f2), se2 = ae2.arrowStyle, le2 = br()(G2, { [`${Q2}-rtl`]: "rtl" === I2 }, ae2.className, K2, oe2, ie2, null == j2 ? void 0 : j2.className, null === (i2 = null == j2 ? void 0 : j2.classNames) || void 0 === i2 ? void 0 : i2.root, null == U2 ? void 0 : U2.root), ce2 = br()(null === (a2 = null == j2 ? void 0 : j2.classNames) || void 0 === a2 ? void 0 : a2.body, null == U2 ? void 0 : U2.body), [ue2, de2] = pa("Tooltip", _2.zIndex), fe2 = t2.createElement(Qm, Object.assign({}, _2, { zIndex: ue2, showArrow: A2, placement: D2, mouseEnterDelay: q2, mouseLeaveDelay: V2, prefixCls: Q2, classNames: { root: le2, body: ce2 }, styles: { root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, se2), null === (s2 = null == j2 ? void 0 : j2.styles) || void 0 === s2 ? void 0 : s2.root), null == j2 ? void 0 : j2.style), W2), null == X2 ? void 0 : X2.root), body: Object.assign(Object.assign(Object.assign(Object.assign({}, null === (l2 = null == j2 ? void 0 : j2.styles) || void 0 === l2 ? void 0 : l2.body), p2), null == X2 ? void 0 : X2.body), ae2.overlayStyle) }, getTooltipContainer: H2 || d2 || O2, ref: N2, builtinPlacements: F2, overlay: z2, visible: J2, onVisibleChange: (t3) => {
            var n3, r3;
            B2(!T2 && t3), T2 || (null === (n3 = e3.onOpenChange) || void 0 === n3 || n3.call(e3, t3), null === (r3 = e3.onVisibleChange) || void 0 === r3 || r3.call(e3, t3));
          }, afterVisibleChange: null != g2 ? g2 : h2, arrowContent: t2.createElement("span", { className: `${Q2}-arrow-content` }), motion: { motionName: ba(Y2, "zoom-big-fast", e3.transitionName), motionDeadline: 1e3 }, destroyTooltipOnHide: !!v2 }), J2 ? Aa(ee2, { className: ne2 }) : ee2);
          return re2(t2.createElement(ca.Provider, { value: de2 }, fe2));
        }), pg = fg;
        pg._InternalPanelDoNotUseOrYouWillBeFired = (e3) => {
          const { prefixCls: n2, className: r2, placement: o2 = "top", title: i2, color: a2, overlayInnerStyle: s2 } = e3, { getPrefixCls: l2 } = t2.useContext(E), c2 = l2("tooltip", n2), [u2, d2, f2] = cg(c2), p2 = dg(c2, a2), m2 = p2.arrowStyle, g2 = Object.assign(Object.assign({}, s2), p2.overlayStyle), h2 = br()(d2, f2, c2, `${c2}-pure`, `${c2}-placement-${o2}`, r2, p2.className);
          return u2(t2.createElement("div", { className: h2, style: m2 }, t2.createElement("div", { className: `${c2}-arrow` }), t2.createElement(Vm, Object.assign({}, e3, { className: d2, prefixCls: c2, overlayInnerStyle: g2 }), i2)));
        };
        const mg = pg, gg = (e3) => {
          var n2;
          const { className: r2, children: o2, icon: i2, title: a2, danger: s2, extra: l2 } = e3, { prefixCls: c2, firstLevel: u2, direction: d2, disableMenuItemTitleTooltip: f2, inlineCollapsed: p2 } = t2.useContext(Dm), { siderCollapsed: m2 } = t2.useContext(Fm);
          let g2 = a2;
          void 0 === a2 ? g2 = u2 ? o2 : "" : false === a2 && (g2 = "");
          const h2 = { title: g2 };
          m2 || p2 || (h2.title = null, h2.open = false);
          const v2 = ts(o2).length;
          let b2 = t2.createElement(Lp, Object.assign({}, wa(e3, ["title", "icon", "danger"]), { className: br()({ [`${c2}-item-danger`]: s2, [`${c2}-item-only-child`]: 1 === (i2 ? v2 + 1 : v2) }, r2), title: "string" == typeof a2 ? a2 : void 0 }), Aa(i2, { className: br()(t2.isValidElement(i2) ? null === (n2 = i2.props) || void 0 === n2 ? void 0 : n2.className : "", `${c2}-item-icon`) }), ((e4) => {
            const n3 = null == o2 ? void 0 : o2[0], r3 = t2.createElement("span", { className: br()(`${c2}-title-content`, { [`${c2}-title-content-with-extra`]: !!l2 || 0 === l2 }) }, o2);
            return (!i2 || t2.isValidElement(o2) && "span" === o2.type) && o2 && e4 && u2 && "string" == typeof n3 ? t2.createElement("div", { className: `${c2}-inline-collapsed-noicon` }, n3.charAt(0)) : r3;
          })(p2));
          return f2 || (b2 = t2.createElement(mg, Object.assign({}, h2, { placement: "rtl" === d2 ? "left" : "right", classNames: { root: `${c2}-inline-collapsed-tooltip` } }), b2)), b2;
        };
        const hg = t2.createContext(null), vg = t2.forwardRef((e3, n2) => {
          const { children: r2 } = e3, o2 = function(e4, t3) {
            var n3 = {};
            for (var r3 in e4)
              Object.prototype.hasOwnProperty.call(e4, r3) && t3.indexOf(r3) < 0 && (n3[r3] = e4[r3]);
            if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
              var o3 = 0;
              for (r3 = Object.getOwnPropertySymbols(e4); o3 < r3.length; o3++)
                t3.indexOf(r3[o3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, r3[o3]) && (n3[r3[o3]] = e4[r3[o3]]);
            }
            return n3;
          }(e3, ["children"]), i2 = t2.useContext(hg), a2 = t2.useMemo(() => Object.assign(Object.assign({}, i2), o2), [i2, o2.prefixCls, o2.mode, o2.selectable, o2.rootClassName]), s2 = function(e4) {
            return Nr(e4) && $r(e4);
          }(r2), l2 = jr(n2, s2 ? Mr(r2) : null);
          return t2.createElement(hg.Provider, { value: a2 }, t2.createElement(bu, { space: true }, s2 ? t2.cloneElement(r2, { ref: l2 }) : r2));
        }), bg = hg, yg = (e3) => ({ [e3.componentCls]: { [`${e3.antCls}-motion-collapse-legacy`]: { overflow: "hidden", "&-active": { transition: `height ${e3.motionDurationMid} ${e3.motionEaseInOut},
        opacity ${e3.motionDurationMid} ${e3.motionEaseInOut} !important` } }, [`${e3.antCls}-motion-collapse`]: { overflow: "hidden", transition: `height ${e3.motionDurationMid} ${e3.motionEaseInOut},
        opacity ${e3.motionDurationMid} ${e3.motionEaseInOut} !important` } } }), Cg = new qt("antSlideUpIn", { "0%": { transform: "scaleY(0.8)", transformOrigin: "0% 0%", opacity: 0 }, "100%": { transform: "scaleY(1)", transformOrigin: "0% 0%", opacity: 1 } }), wg = new qt("antSlideUpOut", { "0%": { transform: "scaleY(1)", transformOrigin: "0% 0%", opacity: 1 }, "100%": { transform: "scaleY(0.8)", transformOrigin: "0% 0%", opacity: 0 } }), xg = new qt("antSlideDownIn", { "0%": { transform: "scaleY(0.8)", transformOrigin: "100% 100%", opacity: 0 }, "100%": { transform: "scaleY(1)", transformOrigin: "100% 100%", opacity: 1 } }), Sg = new qt("antSlideDownOut", { "0%": { transform: "scaleY(1)", transformOrigin: "100% 100%", opacity: 1 }, "100%": { transform: "scaleY(0.8)", transformOrigin: "100% 100%", opacity: 0 } }), Ag = new qt("antSlideLeftIn", { "0%": { transform: "scaleX(0.8)", transformOrigin: "0% 0%", opacity: 0 }, "100%": { transform: "scaleX(1)", transformOrigin: "0% 0%", opacity: 1 } }), Eg = new qt("antSlideLeftOut", { "0%": { transform: "scaleX(1)", transformOrigin: "0% 0%", opacity: 1 }, "100%": { transform: "scaleX(0.8)", transformOrigin: "0% 0%", opacity: 0 } }), kg = new qt("antSlideRightIn", { "0%": { transform: "scaleX(0.8)", transformOrigin: "100% 0%", opacity: 0 }, "100%": { transform: "scaleX(1)", transformOrigin: "100% 0%", opacity: 1 } }), Og = new qt("antSlideRightOut", { "0%": { transform: "scaleX(1)", transformOrigin: "100% 0%", opacity: 1 }, "100%": { transform: "scaleX(0.8)", transformOrigin: "100% 0%", opacity: 0 } }), Pg = { "slide-up": { inKeyframes: Cg, outKeyframes: wg }, "slide-down": { inKeyframes: xg, outKeyframes: Sg }, "slide-left": { inKeyframes: Ag, outKeyframes: Eg }, "slide-right": { inKeyframes: kg, outKeyframes: Og } }, Ig = (e3, t3) => {
          const { antCls: n2 } = e3, r2 = `${n2}-${t3}`, { inKeyframes: o2, outKeyframes: i2 } = Pg[t3];
          return [nd(r2, o2, i2, e3.motionDurationMid), { [`
      ${r2}-enter,
      ${r2}-appear
    `]: { transform: "scale(0)", transformOrigin: "0% 0%", opacity: 0, animationTimingFunction: e3.motionEaseOutQuint, "&-prepare": { transform: "scale(1)" } }, [`${r2}-leave`]: { animationTimingFunction: e3.motionEaseInQuint } }];
        }, jg = (e3) => {
          const { componentCls: t3, motionDurationSlow: n2, horizontalLineHeight: r2, colorSplit: o2, lineWidth: i2, lineType: a2, itemPaddingInline: s2 } = e3;
          return { [`${t3}-horizontal`]: { lineHeight: r2, border: 0, borderBottom: `${Ee(i2)} ${a2} ${o2}`, boxShadow: "none", "&::after": { display: "block", clear: "both", height: 0, content: '"\\20"' }, [`${t3}-item, ${t3}-submenu`]: { position: "relative", display: "inline-block", verticalAlign: "bottom", paddingInline: s2 }, [`> ${t3}-item:hover,
        > ${t3}-item-active,
        > ${t3}-submenu ${t3}-submenu-title:hover`]: { backgroundColor: "transparent" }, [`${t3}-item, ${t3}-submenu-title`]: { transition: [`border-color ${n2}`, `background ${n2}`].join(",") }, [`${t3}-submenu-arrow`]: { display: "none" } } };
        }, $g = (e3) => {
          let { componentCls: t3, menuArrowOffset: n2, calc: r2 } = e3;
          return { [`${t3}-rtl`]: { direction: "rtl" }, [`${t3}-submenu-rtl`]: { transformOrigin: "100% 0" }, [`${t3}-rtl${t3}-vertical,
    ${t3}-submenu-rtl ${t3}-vertical`]: { [`${t3}-submenu-arrow`]: { "&::before": { transform: `rotate(-45deg) translateY(${Ee(r2(n2).mul(-1).equal())})` }, "&::after": { transform: `rotate(45deg) translateY(${Ee(n2)})` } } } };
        }, Ng = (e3) => Object.assign({}, ai(e3)), Mg = (e3, t3) => {
          const { componentCls: n2, itemColor: r2, itemSelectedColor: o2, subMenuItemSelectedColor: i2, groupTitleColor: a2, itemBg: s2, subMenuItemBg: l2, itemSelectedBg: c2, activeBarHeight: u2, activeBarWidth: d2, activeBarBorderWidth: f2, motionDurationSlow: p2, motionEaseInOut: m2, motionEaseOut: g2, itemPaddingInline: h2, motionDurationMid: v2, itemHoverColor: b2, lineType: y2, colorSplit: C2, itemDisabledColor: w2, dangerItemColor: x2, dangerItemHoverColor: S2, dangerItemSelectedColor: A2, dangerItemActiveBg: E2, dangerItemSelectedBg: k2, popupBg: O2, itemHoverBg: P2, itemActiveBg: I2, menuSubMenuBg: j2, horizontalItemSelectedColor: $2, horizontalItemSelectedBg: N2, horizontalItemBorderRadius: M2, horizontalItemHoverBg: R2 } = e3;
          return { [`${n2}-${t3}, ${n2}-${t3} > ${n2}`]: { color: r2, background: s2, [`&${n2}-root:focus-visible`]: Object.assign({}, Ng(e3)), [`${n2}-item`]: { "&-group-title, &-extra": { color: a2 } }, [`${n2}-submenu-selected > ${n2}-submenu-title`]: { color: i2 }, [`${n2}-item, ${n2}-submenu-title`]: { color: r2, [`&:not(${n2}-item-disabled):focus-visible`]: Object.assign({}, Ng(e3)) }, [`${n2}-item-disabled, ${n2}-submenu-disabled`]: { color: `${w2} !important` }, [`${n2}-item:not(${n2}-item-selected):not(${n2}-submenu-selected)`]: { [`&:hover, > ${n2}-submenu-title:hover`]: { color: b2 } }, [`&:not(${n2}-horizontal)`]: { [`${n2}-item:not(${n2}-item-selected)`]: { "&:hover": { backgroundColor: P2 }, "&:active": { backgroundColor: I2 } }, [`${n2}-submenu-title`]: { "&:hover": { backgroundColor: P2 }, "&:active": { backgroundColor: I2 } } }, [`${n2}-item-danger`]: { color: x2, [`&${n2}-item:hover`]: { [`&:not(${n2}-item-selected):not(${n2}-submenu-selected)`]: { color: S2 } }, [`&${n2}-item:active`]: { background: E2 } }, [`${n2}-item a`]: { "&, &:hover": { color: "inherit" } }, [`${n2}-item-selected`]: { color: o2, [`&${n2}-item-danger`]: { color: A2 }, "a, a:hover": { color: "inherit" } }, [`& ${n2}-item-selected`]: { backgroundColor: c2, [`&${n2}-item-danger`]: { backgroundColor: k2 } }, [`&${n2}-submenu > ${n2}`]: { backgroundColor: j2 }, [`&${n2}-popup > ${n2}`]: { backgroundColor: O2 }, [`&${n2}-submenu-popup > ${n2}`]: { backgroundColor: O2 }, [`&${n2}-horizontal`]: Object.assign(Object.assign({}, "dark" === t3 ? { borderBottom: 0 } : {}), { [`> ${n2}-item, > ${n2}-submenu`]: { top: f2, marginTop: e3.calc(f2).mul(-1).equal(), marginBottom: 0, borderRadius: M2, "&::after": { position: "absolute", insetInline: h2, bottom: 0, borderBottom: `${Ee(u2)} solid transparent`, transition: `border-color ${p2} ${m2}`, content: '""' }, "&:hover, &-active, &-open": { background: R2, "&::after": { borderBottomWidth: u2, borderBottomColor: $2 } }, "&-selected": { color: $2, backgroundColor: N2, "&:hover": { backgroundColor: N2 }, "&::after": { borderBottomWidth: u2, borderBottomColor: $2 } } } }), [`&${n2}-root`]: { [`&${n2}-inline, &${n2}-vertical`]: { borderInlineEnd: `${Ee(f2)} ${y2} ${C2}` } }, [`&${n2}-inline`]: { [`${n2}-sub${n2}-inline`]: { background: l2 }, [`${n2}-item`]: { position: "relative", "&::after": { position: "absolute", insetBlock: 0, insetInlineEnd: 0, borderInlineEnd: `${Ee(d2)} solid ${o2}`, transform: "scaleY(0.0001)", opacity: 0, transition: [`transform ${v2} ${g2}`, `opacity ${v2} ${g2}`].join(","), content: '""' }, [`&${n2}-item-danger`]: { "&::after": { borderInlineEndColor: A2 } } }, [`${n2}-selected, ${n2}-item-selected`]: { "&::after": { transform: "scaleY(1)", opacity: 1, transition: [`transform ${v2} ${m2}`, `opacity ${v2} ${m2}`].join(",") } } } } };
        }, Rg = (e3) => {
          const { componentCls: t3, itemHeight: n2, itemMarginInline: r2, padding: o2, menuArrowSize: i2, marginXS: a2, itemMarginBlock: s2, itemWidth: l2, itemPaddingInline: c2 } = e3, u2 = e3.calc(i2).add(o2).add(a2).equal();
          return { [`${t3}-item`]: { position: "relative", overflow: "hidden" }, [`${t3}-item, ${t3}-submenu-title`]: { height: n2, lineHeight: Ee(n2), paddingInline: c2, overflow: "hidden", textOverflow: "ellipsis", marginInline: r2, marginBlock: s2, width: l2 }, [`> ${t3}-item,
            > ${t3}-submenu > ${t3}-submenu-title`]: { height: n2, lineHeight: Ee(n2) }, [`${t3}-item-group-list ${t3}-submenu-title,
            ${t3}-submenu-title`]: { paddingInlineEnd: u2 } };
        }, Bg = (e3) => {
          const { componentCls: t3, iconCls: n2, itemHeight: r2, colorTextLightSolid: o2, dropdownWidth: i2, controlHeightLG: a2, motionEaseOut: s2, paddingXL: l2, itemMarginInline: c2, fontSizeLG: u2, motionDurationFast: d2, motionDurationSlow: f2, paddingXS: p2, boxShadowSecondary: m2, collapsedWidth: g2, collapsedIconSize: h2 } = e3, v2 = { height: r2, lineHeight: Ee(r2), listStylePosition: "inside", listStyleType: "disc" };
          return [{ [t3]: { "&-inline, &-vertical": Object.assign({ [`&${t3}-root`]: { boxShadow: "none" } }, Rg(e3)) }, [`${t3}-submenu-popup`]: { [`${t3}-vertical`]: Object.assign(Object.assign({}, Rg(e3)), { boxShadow: m2 }) } }, { [`${t3}-submenu-popup ${t3}-vertical${t3}-sub`]: { minWidth: i2, maxHeight: `calc(100vh - ${Ee(e3.calc(a2).mul(2.5).equal())})`, padding: "0", overflow: "hidden", borderInlineEnd: 0, "&:not([class*='-active'])": { overflowX: "hidden", overflowY: "auto" } } }, { [`${t3}-inline`]: { width: "100%", [`&${t3}-root`]: { [`${t3}-item, ${t3}-submenu-title`]: { display: "flex", alignItems: "center", transition: [`border-color ${f2}`, `background ${f2}`, `padding ${d2} ${s2}`].join(","), [`> ${t3}-title-content`]: { flex: "auto", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis" }, "> *": { flex: "none" } } }, [`${t3}-sub${t3}-inline`]: { padding: 0, border: 0, borderRadius: 0, boxShadow: "none", [`& > ${t3}-submenu > ${t3}-submenu-title`]: v2, [`& ${t3}-item-group-title`]: { paddingInlineStart: l2 } }, [`${t3}-item`]: v2 } }, { [`${t3}-inline-collapsed`]: { width: g2, [`&${t3}-root`]: { [`${t3}-item, ${t3}-submenu ${t3}-submenu-title`]: { [`> ${t3}-inline-collapsed-noicon`]: { fontSize: u2, textAlign: "center" } } }, [`> ${t3}-item,
          > ${t3}-item-group > ${t3}-item-group-list > ${t3}-item,
          > ${t3}-item-group > ${t3}-item-group-list > ${t3}-submenu > ${t3}-submenu-title,
          > ${t3}-submenu > ${t3}-submenu-title`]: { insetInlineStart: 0, paddingInline: `calc(50% - ${Ee(e3.calc(h2).div(2).equal())} - ${Ee(c2)})`, textOverflow: "clip", [`
            ${t3}-submenu-arrow,
            ${t3}-submenu-expand-icon
          `]: { opacity: 0 }, [`${t3}-item-icon, ${n2}`]: { margin: 0, fontSize: h2, lineHeight: Ee(r2), "+ span": { display: "inline-block", opacity: 0 } } }, [`${t3}-item-icon, ${n2}`]: { display: "inline-block" }, "&-tooltip": { pointerEvents: "none", [`${t3}-item-icon, ${n2}`]: { display: "none" }, "a, a:hover": { color: o2 } }, [`${t3}-item-group-title`]: Object.assign(Object.assign({}, ri), { paddingInline: p2 }) } }];
        }, Tg = (e3) => {
          const { componentCls: t3, motionDurationSlow: n2, motionDurationMid: r2, motionEaseInOut: o2, motionEaseOut: i2, iconCls: a2, iconSize: s2, iconMarginInlineEnd: l2 } = e3;
          return { [`${t3}-item, ${t3}-submenu-title`]: { position: "relative", display: "block", margin: 0, whiteSpace: "nowrap", cursor: "pointer", transition: [`border-color ${n2}`, `background ${n2}`, `padding calc(${n2} + 0.1s) ${o2}`].join(","), [`${t3}-item-icon, ${a2}`]: { minWidth: s2, fontSize: s2, transition: [`font-size ${r2} ${i2}`, `margin ${n2} ${o2}`, `color ${n2}`].join(","), "+ span": { marginInlineStart: l2, opacity: 1, transition: [`opacity ${n2} ${o2}`, `margin ${n2}`, `color ${n2}`].join(",") } }, [`${t3}-item-icon`]: Object.assign({}, { display: "inline-flex", alignItems: "center", color: "inherit", fontStyle: "normal", lineHeight: 0, textAlign: "center", textTransform: "none", verticalAlign: "-0.125em", textRendering: "optimizeLegibility", "-webkit-font-smoothing": "antialiased", "-moz-osx-font-smoothing": "grayscale", "> *": { lineHeight: 1 }, svg: { display: "inline-block" } }), [`&${t3}-item-only-child`]: { [`> ${a2}, > ${t3}-item-icon`]: { marginInlineEnd: 0 } } }, [`${t3}-item-disabled, ${t3}-submenu-disabled`]: { background: "none !important", cursor: "not-allowed", "&::after": { borderColor: "transparent !important" }, a: { color: "inherit !important" }, [`> ${t3}-submenu-title`]: { color: "inherit !important", cursor: "not-allowed" } } };
        }, Fg = (e3) => {
          const { componentCls: t3, motionDurationSlow: n2, motionEaseInOut: r2, borderRadius: o2, menuArrowSize: i2, menuArrowOffset: a2 } = e3;
          return { [`${t3}-submenu`]: { "&-expand-icon, &-arrow": { position: "absolute", top: "50%", insetInlineEnd: e3.margin, width: i2, color: "currentcolor", transform: "translateY(-50%)", transition: `transform ${n2} ${r2}, opacity ${n2}` }, "&-arrow": { "&::before, &::after": { position: "absolute", width: e3.calc(i2).mul(0.6).equal(), height: e3.calc(i2).mul(0.15).equal(), backgroundColor: "currentcolor", borderRadius: o2, transition: [`background ${n2} ${r2}`, `transform ${n2} ${r2}`, `top ${n2} ${r2}`, `color ${n2} ${r2}`].join(","), content: '""' }, "&::before": { transform: `rotate(45deg) translateY(${Ee(e3.calc(a2).mul(-1).equal())})` }, "&::after": { transform: `rotate(-45deg) translateY(${Ee(a2)})` } } } };
        }, Lg = (e3) => {
          const { antCls: t3, componentCls: n2, fontSize: r2, motionDurationSlow: o2, motionDurationMid: i2, motionEaseInOut: a2, paddingXS: s2, padding: l2, colorSplit: c2, lineWidth: u2, zIndexPopup: d2, borderRadiusLG: f2, subMenuItemBorderRadius: p2, menuArrowSize: m2, menuArrowOffset: g2, lineType: h2, groupTitleLineHeight: v2, groupTitleFontSize: b2 } = e3;
          return [{ "": { [n2]: Object.assign(Object.assign({}, { "&::before": { display: "table", content: '""' }, "&::after": { display: "table", clear: "both", content: '""' } }), { "&-hidden": { display: "none" } }) }, [`${n2}-submenu-hidden`]: { display: "none" } }, { [n2]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, oi(e3)), { "&::before": { display: "table", content: '""' }, "&::after": { display: "table", clear: "both", content: '""' } }), { marginBottom: 0, paddingInlineStart: 0, fontSize: r2, lineHeight: 0, listStyle: "none", outline: "none", transition: `width ${o2} cubic-bezier(0.2, 0, 0, 1) 0s`, "ul, ol": { margin: 0, padding: 0, listStyle: "none" }, "&-overflow": { display: "flex", [`${n2}-item`]: { flex: "none" } }, [`${n2}-item, ${n2}-submenu, ${n2}-submenu-title`]: { borderRadius: e3.itemBorderRadius }, [`${n2}-item-group-title`]: { padding: `${Ee(s2)} ${Ee(l2)}`, fontSize: b2, lineHeight: v2, transition: `all ${o2}` }, [`&-horizontal ${n2}-submenu`]: { transition: [`border-color ${o2} ${a2}`, `background ${o2} ${a2}`].join(",") }, [`${n2}-submenu, ${n2}-submenu-inline`]: { transition: [`border-color ${o2} ${a2}`, `background ${o2} ${a2}`, `padding ${i2} ${a2}`].join(",") }, [`${n2}-submenu ${n2}-sub`]: { cursor: "initial", transition: [`background ${o2} ${a2}`, `padding ${o2} ${a2}`].join(",") }, [`${n2}-title-content`]: { transition: `color ${o2}`, "&-with-extra": { display: "inline-flex", alignItems: "center", width: "100%" }, [`> ${t3}-typography-ellipsis-single-line`]: { display: "inline", verticalAlign: "unset" }, [`${n2}-item-extra`]: { marginInlineStart: "auto", paddingInlineStart: e3.padding } }, [`${n2}-item a`]: { "&::before": { position: "absolute", inset: 0, backgroundColor: "transparent", content: '""' } }, [`${n2}-item-divider`]: { overflow: "hidden", lineHeight: 0, borderColor: c2, borderStyle: h2, borderWidth: 0, borderTopWidth: u2, marginBlock: u2, padding: 0, "&-dashed": { borderStyle: "dashed" } } }), Tg(e3)), { [`${n2}-item-group`]: { [`${n2}-item-group-list`]: { margin: 0, padding: 0, [`${n2}-item, ${n2}-submenu-title`]: { paddingInline: `${Ee(e3.calc(r2).mul(2).equal())} ${Ee(l2)}` } } }, "&-submenu": { "&-popup": { position: "absolute", zIndex: d2, borderRadius: f2, boxShadow: "none", transformOrigin: "0 0", [`&${n2}-submenu`]: { background: "transparent" }, "&::before": { position: "absolute", inset: 0, zIndex: -1, width: "100%", height: "100%", opacity: 0, content: '""' }, [`> ${n2}`]: Object.assign(Object.assign(Object.assign({ borderRadius: f2 }, Tg(e3)), Fg(e3)), { [`${n2}-item, ${n2}-submenu > ${n2}-submenu-title`]: { borderRadius: p2 }, [`${n2}-submenu-title::after`]: { transition: `transform ${o2} ${a2}` } }) }, "\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ": { transformOrigin: "100% 0" }, "\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ": { transformOrigin: "100% 100%" }, "\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ": { transformOrigin: "0 100%" }, "\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ": { transformOrigin: "0 0" }, "\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ": { paddingInlineEnd: e3.paddingXS }, "\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ": { paddingInlineStart: e3.paddingXS }, "\n          &-placement-topRight,\n          &-placement-topLeft\n          ": { paddingBottom: e3.paddingXS }, "\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ": { paddingTop: e3.paddingXS } } }), Fg(e3)), { [`&-inline-collapsed ${n2}-submenu-arrow,
        &-inline ${n2}-submenu-arrow`]: { "&::before": { transform: `rotate(-45deg) translateX(${Ee(g2)})` }, "&::after": { transform: `rotate(45deg) translateX(${Ee(e3.calc(g2).mul(-1).equal())})` } }, [`${n2}-submenu-open${n2}-submenu-inline > ${n2}-submenu-title > ${n2}-submenu-arrow`]: { transform: `translateY(${Ee(e3.calc(m2).mul(0.2).mul(-1).equal())})`, "&::after": { transform: `rotate(-45deg) translateX(${Ee(e3.calc(g2).mul(-1).equal())})` }, "&::before": { transform: `rotate(45deg) translateX(${Ee(g2)})` } } }) }, { [`${t3}-layout-header`]: { [n2]: { lineHeight: "inherit" } } }];
        }, zg = (e3) => {
          var t3, n2, r2;
          const { colorPrimary: o2, colorError: i2, colorTextDisabled: a2, colorErrorBg: s2, colorText: l2, colorTextDescription: c2, colorBgContainer: u2, colorFillAlter: d2, colorFillContent: f2, lineWidth: p2, lineWidthBold: m2, controlItemBgActive: g2, colorBgTextHover: h2, controlHeightLG: v2, lineHeight: b2, colorBgElevated: y2, marginXXS: C2, padding: w2, fontSize: x2, controlHeightSM: S2, fontSizeLG: A2, colorTextLightSolid: E2, colorErrorHover: k2 } = e3, O2 = null !== (t3 = e3.activeBarWidth) && void 0 !== t3 ? t3 : 0, P2 = null !== (n2 = e3.activeBarBorderWidth) && void 0 !== n2 ? n2 : p2, I2 = null !== (r2 = e3.itemMarginInline) && void 0 !== r2 ? r2 : e3.marginXXS, j2 = new vn(E2).setA(0.65).toRgbString();
          return { dropdownWidth: 160, zIndexPopup: e3.zIndexPopupBase + 50, radiusItem: e3.borderRadiusLG, itemBorderRadius: e3.borderRadiusLG, radiusSubMenuItem: e3.borderRadiusSM, subMenuItemBorderRadius: e3.borderRadiusSM, colorItemText: l2, itemColor: l2, colorItemTextHover: l2, itemHoverColor: l2, colorItemTextHoverHorizontal: o2, horizontalItemHoverColor: o2, colorGroupTitle: c2, groupTitleColor: c2, colorItemTextSelected: o2, itemSelectedColor: o2, subMenuItemSelectedColor: o2, colorItemTextSelectedHorizontal: o2, horizontalItemSelectedColor: o2, colorItemBg: u2, itemBg: u2, colorItemBgHover: h2, itemHoverBg: h2, colorItemBgActive: f2, itemActiveBg: g2, colorSubItemBg: d2, subMenuItemBg: d2, colorItemBgSelected: g2, itemSelectedBg: g2, colorItemBgSelectedHorizontal: "transparent", horizontalItemSelectedBg: "transparent", colorActiveBarWidth: 0, activeBarWidth: O2, colorActiveBarHeight: m2, activeBarHeight: m2, colorActiveBarBorderSize: p2, activeBarBorderWidth: P2, colorItemTextDisabled: a2, itemDisabledColor: a2, colorDangerItemText: i2, dangerItemColor: i2, colorDangerItemTextHover: i2, dangerItemHoverColor: i2, colorDangerItemTextSelected: i2, dangerItemSelectedColor: i2, colorDangerItemBgActive: s2, dangerItemActiveBg: s2, colorDangerItemBgSelected: s2, dangerItemSelectedBg: s2, itemMarginInline: I2, horizontalItemBorderRadius: 0, horizontalItemHoverBg: "transparent", itemHeight: v2, groupTitleLineHeight: b2, collapsedWidth: 2 * v2, popupBg: y2, itemMarginBlock: C2, itemPaddingInline: w2, horizontalLineHeight: 1.15 * v2 + "px", iconSize: x2, iconMarginInlineEnd: S2 - x2, collapsedIconSize: A2, groupTitleFontSize: x2, darkItemDisabledColor: new vn(E2).setA(0.25).toRgbString(), darkItemColor: j2, darkDangerItemColor: i2, darkItemBg: "#001529", darkPopupBg: "#001529", darkSubMenuItemBg: "#000c17", darkItemSelectedColor: E2, darkItemSelectedBg: o2, darkDangerItemSelectedBg: i2, darkItemHoverBg: "transparent", darkGroupTitleColor: j2, darkItemHoverColor: E2, darkDangerItemHoverColor: k2, darkDangerItemSelectedColor: E2, darkDangerItemActiveBg: i2, itemWidth: O2 ? `calc(100% + ${P2}px)` : `calc(100% - ${2 * I2}px)` };
        }, Hg = function(e3) {
          let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e3;
          const n2 = qa("Menu", (e4) => {
            const { colorBgElevated: t4, controlHeightLG: n3, fontSize: r2, darkItemColor: o2, darkDangerItemColor: i2, darkItemBg: a2, darkSubMenuItemBg: s2, darkItemSelectedColor: l2, darkItemSelectedBg: c2, darkDangerItemSelectedBg: u2, darkItemHoverBg: d2, darkGroupTitleColor: f2, darkItemHoverColor: p2, darkItemDisabledColor: m2, darkDangerItemHoverColor: g2, darkDangerItemSelectedColor: h2, darkDangerItemActiveBg: v2, popupBg: b2, darkPopupBg: y2 } = e4, C2 = e4.calc(r2).div(7).mul(5).equal(), w2 = Ba(e4, { menuArrowSize: C2, menuHorizontalHeight: e4.calc(n3).mul(1.15).equal(), menuArrowOffset: e4.calc(C2).mul(0.25).equal(), menuSubMenuBg: t4, calc: e4.calc, popupBg: b2 }), x2 = Ba(w2, { itemColor: o2, itemHoverColor: p2, groupTitleColor: f2, itemSelectedColor: l2, itemBg: a2, popupBg: y2, subMenuItemBg: s2, itemActiveBg: "transparent", itemSelectedBg: c2, activeBarHeight: 0, activeBarBorderWidth: 0, itemHoverBg: d2, itemDisabledColor: m2, dangerItemColor: i2, dangerItemHoverColor: g2, dangerItemSelectedColor: h2, dangerItemActiveBg: v2, dangerItemSelectedBg: u2, menuSubMenuBg: s2, horizontalItemSelectedColor: l2, horizontalItemSelectedBg: c2 });
            return [Lg(w2), jg(w2), Bg(w2), Mg(w2, "light"), Mg(x2, "dark"), $g(w2), yg(w2), Ig(w2, "slide-up"), Ig(w2, "slide-down"), pd(w2, "zoom-big")];
          }, zg, { deprecatedTokens: [["colorGroupTitle", "groupTitleColor"], ["radiusItem", "itemBorderRadius"], ["radiusSubMenuItem", "subMenuItemBorderRadius"], ["colorItemText", "itemColor"], ["colorItemTextHover", "itemHoverColor"], ["colorItemTextHoverHorizontal", "horizontalItemHoverColor"], ["colorItemTextSelected", "itemSelectedColor"], ["colorItemTextSelectedHorizontal", "horizontalItemSelectedColor"], ["colorItemTextDisabled", "itemDisabledColor"], ["colorDangerItemText", "dangerItemColor"], ["colorDangerItemTextHover", "dangerItemHoverColor"], ["colorDangerItemTextSelected", "dangerItemSelectedColor"], ["colorDangerItemBgActive", "dangerItemActiveBg"], ["colorDangerItemBgSelected", "dangerItemSelectedBg"], ["colorItemBg", "itemBg"], ["colorItemBgHover", "itemHoverBg"], ["colorSubItemBg", "subMenuItemBg"], ["colorItemBgActive", "itemActiveBg"], ["colorItemBgSelectedHorizontal", "horizontalItemSelectedBg"], ["colorActiveBarWidth", "activeBarWidth"], ["colorActiveBarHeight", "activeBarHeight"], ["colorActiveBarBorderSize", "activeBarBorderWidth"], ["colorItemBgSelected", "itemSelectedBg"]], injectStyle: !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], unitless: { groupTitleLineHeight: true } });
          return n2(e3, t3);
        }, Dg = (e3) => {
          var n2;
          const { popupClassName: r2, icon: o2, title: i2, theme: a2 } = e3, s2 = t2.useContext(Dm), { prefixCls: l2, inlineCollapsed: c2, theme: u2 } = s2, d2 = ip();
          let f2;
          if (o2) {
            const e4 = t2.isValidElement(i2) && "span" === i2.type;
            f2 = t2.createElement(t2.Fragment, null, Aa(o2, { className: br()(t2.isValidElement(o2) ? null === (n2 = o2.props) || void 0 === n2 ? void 0 : n2.className : "", `${l2}-item-icon`) }), e4 ? i2 : t2.createElement("span", { className: `${l2}-title-content` }, i2));
          } else
            f2 = c2 && !d2.length && i2 && "string" == typeof i2 ? t2.createElement("div", { className: `${l2}-inline-collapsed-noicon` }, i2.charAt(0)) : t2.createElement("span", { className: `${l2}-title-content` }, i2);
          const p2 = t2.useMemo(() => Object.assign(Object.assign({}, s2), { firstLevel: false }), [s2]), [m2] = pa("Menu");
          return t2.createElement(Dm.Provider, { value: p2 }, t2.createElement(Am, Object.assign({}, wa(e3, ["icon"]), { title: f2, popupClassName: br()(l2, r2, `${l2}-${a2 || u2}`), popupStyle: Object.assign({ zIndex: m2 }, e3.popupStyle) })));
        };
        function qg(e3) {
          return null === e3 || false === e3;
        }
        const Vg = { item: gg, submenu: Dg, divider: qm }, Wg = (0, t2.forwardRef)((e3, n2) => {
          var r2;
          const o2 = t2.useContext(bg), i2 = o2 || {}, { getPrefixCls: a2, getPopupContainer: s2, direction: l2, menu: c2 } = t2.useContext(E), u2 = a2(), { prefixCls: d2, className: f2, style: p2, theme: m2 = "light", expandIcon: g2, _internalDisableMenuItemTitleTooltip: h2, inlineCollapsed: v2, siderCollapsed: b2, rootClassName: y2, mode: C2, selectable: w2, onClick: x2, overflowedIndicatorPopupClassName: S2 } = e3, A2 = wa(function(e4, t3) {
            var n3 = {};
            for (var r3 in e4)
              Object.prototype.hasOwnProperty.call(e4, r3) && t3.indexOf(r3) < 0 && (n3[r3] = e4[r3]);
            if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
              var o3 = 0;
              for (r3 = Object.getOwnPropertySymbols(e4); o3 < r3.length; o3++)
                t3.indexOf(r3[o3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, r3[o3]) && (n3[r3[o3]] = e4[r3[o3]]);
            }
            return n3;
          }(e3, ["prefixCls", "className", "style", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "rootClassName", "mode", "selectable", "onClick", "overflowedIndicatorPopupClassName"]), ["collapsedWidth"]);
          null === (r2 = i2.validator) || void 0 === r2 || r2.call(i2, { mode: C2 });
          const k2 = Kr(function() {
            var e4;
            null == x2 || x2.apply(void 0, arguments), null === (e4 = i2.onClick) || void 0 === e4 || e4.call(i2);
          }), O2 = i2.mode || C2, P2 = null != w2 ? w2 : i2.selectable, I2 = null != v2 ? v2 : b2, j2 = { horizontal: { motionName: `${u2}-slide-up` }, inline: ya(u2), other: { motionName: `${u2}-zoom-big` } }, $2 = a2("menu", d2 || i2.prefixCls), N2 = Su($2), [M2, R2, B2] = Hg($2, N2, !o2), T2 = br()(`${$2}-${m2}`, null == c2 ? void 0 : c2.className, f2), F2 = t2.useMemo(() => {
            var e4, n3;
            if ("function" == typeof g2 || qg(g2))
              return g2 || null;
            if ("function" == typeof i2.expandIcon || qg(i2.expandIcon))
              return i2.expandIcon || null;
            if ("function" == typeof (null == c2 ? void 0 : c2.expandIcon) || qg(null == c2 ? void 0 : c2.expandIcon))
              return (null == c2 ? void 0 : c2.expandIcon) || null;
            const r3 = null !== (e4 = null != g2 ? g2 : null == i2 ? void 0 : i2.expandIcon) && void 0 !== e4 ? e4 : null == c2 ? void 0 : c2.expandIcon;
            return Aa(r3, { className: br()(`${$2}-submenu-expand-icon`, t2.isValidElement(r3) ? null === (n3 = r3.props) || void 0 === n3 ? void 0 : n3.className : void 0) });
          }, [g2, null == i2 ? void 0 : i2.expandIcon, null == c2 ? void 0 : c2.expandIcon, $2]), L2 = t2.useMemo(() => ({ prefixCls: $2, inlineCollapsed: I2 || false, direction: l2, firstLevel: true, theme: m2, mode: O2, disableMenuItemTitleTooltip: h2 }), [$2, I2, l2, h2, m2]);
          return M2(t2.createElement(bg.Provider, { value: null }, t2.createElement(Dm.Provider, { value: L2 }, t2.createElement(Tm, Object.assign({ getPopupContainer: s2, overflowedIndicator: t2.createElement(Hm, null), overflowedIndicatorPopupClassName: br()($2, `${$2}-${m2}`, S2), mode: O2, selectable: P2, onClick: k2 }, A2, { inlineCollapsed: I2, style: Object.assign(Object.assign({}, null == c2 ? void 0 : c2.style), p2), className: T2, prefixCls: $2, direction: l2, defaultMotions: j2, expandIcon: F2, ref: n2, rootClassName: br()(y2, R2, i2.rootClassName, B2, N2), _internalComponents: Vg })))));
        }), Kg = Wg, Gg = (0, t2.forwardRef)((e3, n2) => {
          const r2 = (0, t2.useRef)(null), o2 = t2.useContext(Fm);
          return (0, t2.useImperativeHandle)(n2, () => ({ menu: r2.current, focus: (e4) => {
            var t3;
            null === (t3 = r2.current) || void 0 === t3 || t3.focus(e4);
          } })), t2.createElement(Kg, Object.assign({ ref: r2 }, e3, o2));
        });
        Gg.Item = gg, Gg.SubMenu = Dg, Gg.Divider = qm, Gg.ItemGroup = Pm;
        const Xg = Gg, Ug = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
        var _g = function(e3, n2) {
          return t2.createElement(Yi, qe({}, e3, { ref: n2, icon: Ug }));
        };
        const Qg = t2.forwardRef(_g);
        var Yg = ql.ESC, Zg = ql.TAB;
        const Jg = (0, t2.forwardRef)(function(e3, n2) {
          var r2 = e3.overlay, i2 = e3.arrow, a2 = e3.prefixCls, s2 = (0, t2.useMemo)(function() {
            return "function" == typeof r2 ? r2() : r2;
          }, [r2]), l2 = Ir(n2, Mr(s2));
          return o().createElement(o().Fragment, null, i2 && o().createElement("div", { className: "".concat(a2, "-arrow") }), o().cloneElement(s2, { ref: $r(s2) ? l2 : void 0 }));
        });
        var eh = { adjustX: 1, adjustY: 1 }, th = [0, 0];
        const nh = { topLeft: { points: ["bl", "tl"], overflow: eh, offset: [0, -4], targetOffset: th }, top: { points: ["bc", "tc"], overflow: eh, offset: [0, -4], targetOffset: th }, topRight: { points: ["br", "tr"], overflow: eh, offset: [0, -4], targetOffset: th }, bottomLeft: { points: ["tl", "bl"], overflow: eh, offset: [0, 4], targetOffset: th }, bottom: { points: ["tc", "bc"], overflow: eh, offset: [0, 4], targetOffset: th }, bottomRight: { points: ["tr", "br"], overflow: eh, offset: [0, 4], targetOffset: th } };
        var rh = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
        function oh(e3, n2) {
          var r2, i2 = e3.arrow, a2 = void 0 !== i2 && i2, s2 = e3.prefixCls, l2 = void 0 === s2 ? "rc-dropdown" : s2, c2 = e3.transitionName, u2 = e3.animation, d2 = e3.align, f2 = e3.placement, p2 = void 0 === f2 ? "bottomLeft" : f2, m2 = e3.placements, g2 = void 0 === m2 ? nh : m2, h2 = e3.getPopupContainer, v2 = e3.showAction, b2 = e3.hideAction, y2 = e3.overlayClassName, C2 = e3.overlayStyle, w2 = e3.visible, x2 = e3.trigger, S2 = void 0 === x2 ? ["hover"] : x2, A2 = e3.autoFocus, E2 = e3.overlay, k2 = e3.children, O2 = e3.onVisibleChange, P2 = Rr(e3, rh), j2 = N(o().useState(), 2), $2 = j2[0], M2 = j2[1], R2 = "visible" in e3 ? w2 : $2, B2 = o().useRef(null), T2 = o().useRef(null), F2 = o().useRef(null);
          o().useImperativeHandle(n2, function() {
            return B2.current;
          });
          var L2 = function(e4) {
            M2(e4), null == O2 || O2(e4);
          };
          !function(e4) {
            var n3 = e4.visible, r3 = e4.triggerRef, o2 = e4.onVisibleChange, i3 = e4.autoFocus, a3 = e4.overlayRef, s3 = t2.useRef(false), l3 = function() {
              var e5, t3;
              n3 && (null === (e5 = r3.current) || void 0 === e5 || null === (t3 = e5.focus) || void 0 === t3 || t3.call(e5), null == o2 || o2(false));
            }, c3 = function() {
              var e5;
              return !(null === (e5 = a3.current) || void 0 === e5 || !e5.focus || (a3.current.focus(), s3.current = true, 0));
            }, u3 = function(e5) {
              switch (e5.keyCode) {
                case Yg:
                  l3();
                  break;
                case Zg:
                  var t3 = false;
                  s3.current || (t3 = c3()), t3 ? e5.preventDefault() : l3();
              }
            };
            t2.useEffect(function() {
              return n3 ? (window.addEventListener("keydown", u3), i3 && Po(c3, 3), function() {
                window.removeEventListener("keydown", u3), s3.current = false;
              }) : function() {
                s3.current = false;
              };
            }, [n3]);
          }({ visible: R2, triggerRef: F2, onVisibleChange: L2, autoFocus: A2, overlayRef: T2 });
          var z2, H2, D2, q2 = function() {
            return o().createElement(Jg, { ref: T2, overlay: E2, prefixCls: l2, arrow: a2 });
          }, V2 = o().cloneElement(k2, { className: br()(null === (r2 = k2.props) || void 0 === r2 ? void 0 : r2.className, R2 && (z2 = e3.openClassName, void 0 !== z2 ? z2 : "".concat(l2, "-open"))), ref: $r(k2) ? Ir(F2, Mr(k2)) : void 0 }), W2 = b2;
          return W2 || -1 === S2.indexOf("contextMenu") || (W2 = ["click"]), o().createElement(pm, qe({ builtinPlacements: g2 }, P2, { prefixCls: l2, ref: B2, popupClassName: br()(y2, I({}, "".concat(l2, "-show-arrow"), a2)), popupStyle: C2, action: S2, showAction: v2, hideAction: W2, popupPlacement: p2, popupAlign: d2, popupTransitionName: c2, popupAnimation: u2, popupVisible: R2, stretch: (H2 = e3.minOverlayWidthMatchTrigger, D2 = e3.alignPoint, ("minOverlayWidthMatchTrigger" in e3 ? H2 : !D2) ? "minWidth" : ""), popup: "function" == typeof E2 ? q2 : q2(), onPopupVisibleChange: L2, onPopupClick: function(t3) {
            var n3 = e3.onOverlayClick;
            M2(false), n3 && n3(t3);
          }, getPopupContainer: h2 }), V2);
        }
        const ih = o().forwardRef(oh), ah = new qt("antMoveDownIn", { "0%": { transform: "translate3d(0, 100%, 0)", transformOrigin: "0 0", opacity: 0 }, "100%": { transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1 } }), sh = new qt("antMoveDownOut", { "0%": { transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1 }, "100%": { transform: "translate3d(0, 100%, 0)", transformOrigin: "0 0", opacity: 0 } }), lh = new qt("antMoveLeftIn", { "0%": { transform: "translate3d(-100%, 0, 0)", transformOrigin: "0 0", opacity: 0 }, "100%": { transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1 } }), ch = new qt("antMoveLeftOut", { "0%": { transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1 }, "100%": { transform: "translate3d(-100%, 0, 0)", transformOrigin: "0 0", opacity: 0 } }), uh = new qt("antMoveRightIn", { "0%": { transform: "translate3d(100%, 0, 0)", transformOrigin: "0 0", opacity: 0 }, "100%": { transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1 } }), dh = new qt("antMoveRightOut", { "0%": { transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1 }, "100%": { transform: "translate3d(100%, 0, 0)", transformOrigin: "0 0", opacity: 0 } }), fh = { "move-up": { inKeyframes: new qt("antMoveUpIn", { "0%": { transform: "translate3d(0, -100%, 0)", transformOrigin: "0 0", opacity: 0 }, "100%": { transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1 } }), outKeyframes: new qt("antMoveUpOut", { "0%": { transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1 }, "100%": { transform: "translate3d(0, -100%, 0)", transformOrigin: "0 0", opacity: 0 } }) }, "move-down": { inKeyframes: ah, outKeyframes: sh }, "move-left": { inKeyframes: lh, outKeyframes: ch }, "move-right": { inKeyframes: uh, outKeyframes: dh } }, ph = (e3, t3) => {
          const { antCls: n2 } = e3, r2 = `${n2}-${t3}`, { inKeyframes: o2, outKeyframes: i2 } = fh[t3];
          return [nd(r2, o2, i2, e3.motionDurationMid), { [`
        ${r2}-enter,
        ${r2}-appear
      `]: { opacity: 0, animationTimingFunction: e3.motionEaseOutCirc }, [`${r2}-leave`]: { animationTimingFunction: e3.motionEaseInOutCirc } }];
        }, mh = (e3) => {
          const { componentCls: t3, menuCls: n2, colorError: r2, colorTextLightSolid: o2 } = e3, i2 = `${n2}-item`;
          return { [`${t3}, ${t3}-menu-submenu`]: { [`${n2} ${i2}`]: { [`&${i2}-danger:not(${i2}-disabled)`]: { color: r2, "&:hover": { color: o2, backgroundColor: r2 } } } } };
        }, gh = (e3) => {
          const { componentCls: t3, menuCls: n2, zIndexPopup: r2, dropdownArrowDistance: o2, sizePopupArrow: i2, antCls: a2, iconCls: s2, motionDurationMid: l2, paddingBlock: c2, fontSize: u2, dropdownEdgeChildPadding: d2, colorTextDisabled: f2, fontSizeIcon: p2, controlPaddingHorizontal: m2, colorBgElevated: g2 } = e3;
          return [{ [t3]: { position: "absolute", top: -9999, left: { _skip_check_: true, value: -9999 }, zIndex: r2, display: "block", "&::before": { position: "absolute", insetBlock: e3.calc(i2).div(2).sub(o2).equal(), zIndex: -9999, opacity: 1e-4, content: '""' }, "&-menu-vertical": { maxHeight: "100vh", overflowY: "auto" }, [`&-trigger${a2}-btn`]: { [`& > ${s2}-down, & > ${a2}-btn-icon > ${s2}-down`]: { fontSize: p2 } }, [`${t3}-wrap`]: { position: "relative", [`${a2}-btn > ${s2}-down`]: { fontSize: p2 }, [`${s2}-down::before`]: { transition: `transform ${l2}` } }, [`${t3}-wrap-open`]: { [`${s2}-down::before`]: { transform: "rotate(180deg)" } }, "\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ": { display: "none" }, [`&${a2}-slide-down-enter${a2}-slide-down-enter-active${t3}-placement-bottomLeft,
          &${a2}-slide-down-appear${a2}-slide-down-appear-active${t3}-placement-bottomLeft,
          &${a2}-slide-down-enter${a2}-slide-down-enter-active${t3}-placement-bottom,
          &${a2}-slide-down-appear${a2}-slide-down-appear-active${t3}-placement-bottom,
          &${a2}-slide-down-enter${a2}-slide-down-enter-active${t3}-placement-bottomRight,
          &${a2}-slide-down-appear${a2}-slide-down-appear-active${t3}-placement-bottomRight`]: { animationName: Cg }, [`&${a2}-slide-up-enter${a2}-slide-up-enter-active${t3}-placement-topLeft,
          &${a2}-slide-up-appear${a2}-slide-up-appear-active${t3}-placement-topLeft,
          &${a2}-slide-up-enter${a2}-slide-up-enter-active${t3}-placement-top,
          &${a2}-slide-up-appear${a2}-slide-up-appear-active${t3}-placement-top,
          &${a2}-slide-up-enter${a2}-slide-up-enter-active${t3}-placement-topRight,
          &${a2}-slide-up-appear${a2}-slide-up-appear-active${t3}-placement-topRight`]: { animationName: xg }, [`&${a2}-slide-down-leave${a2}-slide-down-leave-active${t3}-placement-bottomLeft,
          &${a2}-slide-down-leave${a2}-slide-down-leave-active${t3}-placement-bottom,
          &${a2}-slide-down-leave${a2}-slide-down-leave-active${t3}-placement-bottomRight`]: { animationName: wg }, [`&${a2}-slide-up-leave${a2}-slide-up-leave-active${t3}-placement-topLeft,
          &${a2}-slide-up-leave${a2}-slide-up-leave-active${t3}-placement-top,
          &${a2}-slide-up-leave${a2}-slide-up-leave-active${t3}-placement-topRight`]: { animationName: Sg } } }, tg(e3, g2, { arrowPlacement: { top: true, bottom: true } }), { [`${t3} ${n2}`]: { position: "relative", margin: 0 }, [`${n2}-submenu-popup`]: { position: "absolute", zIndex: r2, background: "transparent", boxShadow: "none", transformOrigin: "0 0", "ul, li": { listStyle: "none", margin: 0 } }, [`${t3}, ${t3}-menu-submenu`]: Object.assign(Object.assign({}, oi(e3)), { [n2]: Object.assign(Object.assign({ padding: d2, listStyleType: "none", backgroundColor: g2, backgroundClip: "padding-box", borderRadius: e3.borderRadiusLG, outline: "none", boxShadow: e3.boxShadowSecondary }, si(e3)), { "&:empty": { padding: 0, boxShadow: "none" }, [`${n2}-item-group-title`]: { padding: `${Ee(c2)} ${Ee(m2)}`, color: e3.colorTextDescription, transition: `all ${l2}` }, [`${n2}-item`]: { position: "relative", display: "flex", alignItems: "center" }, [`${n2}-item-icon`]: { minWidth: u2, marginInlineEnd: e3.marginXS, fontSize: e3.fontSizeSM }, [`${n2}-title-content`]: { flex: "auto", "&-with-extra": { display: "inline-flex", alignItems: "center", width: "100%" }, "> a": { color: "inherit", transition: `all ${l2}`, "&:hover": { color: "inherit" }, "&::after": { position: "absolute", inset: 0, content: '""' } }, [`${n2}-item-extra`]: { paddingInlineStart: e3.padding, marginInlineStart: "auto", fontSize: e3.fontSizeSM, color: e3.colorTextDescription } }, [`${n2}-item, ${n2}-submenu-title`]: Object.assign(Object.assign({ display: "flex", margin: 0, padding: `${Ee(c2)} ${Ee(m2)}`, color: e3.colorText, fontWeight: "normal", fontSize: u2, lineHeight: e3.lineHeight, cursor: "pointer", transition: `all ${l2}`, borderRadius: e3.borderRadiusSM, "&:hover, &-active": { backgroundColor: e3.controlItemBgHover } }, si(e3)), { "&-selected": { color: e3.colorPrimary, backgroundColor: e3.controlItemBgActive, "&:hover, &-active": { backgroundColor: e3.controlItemBgActiveHover } }, "&-disabled": { color: f2, cursor: "not-allowed", "&:hover": { color: f2, backgroundColor: g2, cursor: "not-allowed" }, a: { pointerEvents: "none" } }, "&-divider": { height: 1, margin: `${Ee(e3.marginXXS)} 0`, overflow: "hidden", lineHeight: 0, backgroundColor: e3.colorSplit }, [`${t3}-menu-submenu-expand-icon`]: { position: "absolute", insetInlineEnd: e3.paddingXS, [`${t3}-menu-submenu-arrow-icon`]: { marginInlineEnd: "0 !important", color: e3.colorTextDescription, fontSize: p2, fontStyle: "normal" } } }), [`${n2}-item-group-list`]: { margin: `0 ${Ee(e3.marginXS)}`, padding: 0, listStyle: "none" }, [`${n2}-submenu-title`]: { paddingInlineEnd: e3.calc(m2).add(e3.fontSizeSM).equal() }, [`${n2}-submenu-vertical`]: { position: "relative" }, [`${n2}-submenu${n2}-submenu-disabled ${t3}-menu-submenu-title`]: { [`&, ${t3}-menu-submenu-arrow-icon`]: { color: f2, backgroundColor: g2, cursor: "not-allowed" } }, [`${n2}-submenu-selected ${t3}-menu-submenu-title`]: { color: e3.colorPrimary } }) }) }, [Ig(e3, "slide-up"), Ig(e3, "slide-down"), ph(e3, "move-up"), ph(e3, "move-down"), pd(e3, "zoom-big")]];
        }, hh = qa("Dropdown", (e3) => {
          const { marginXXS: t3, sizePopupArrow: n2, paddingXXS: r2, componentCls: o2 } = e3, i2 = Ba(e3, { menuCls: `${o2}-menu`, dropdownArrowDistance: e3.calc(n2).div(2).add(t3).equal(), dropdownEdgeChildPadding: r2 });
          return [gh(i2), mh(i2)];
        }, (e3) => Object.assign(Object.assign({ zIndexPopup: e3.zIndexPopupBase + 50, paddingBlock: (e3.controlHeight - e3.fontSize * e3.lineHeight) / 2 }, Jm({ contentRadius: e3.borderRadiusLG, limitVerticalRadius: true })), Ym(e3)), { resetStyle: false }), vh = (e3) => {
          var n2;
          const { menu: r2, arrow: o2, prefixCls: i2, children: a2, trigger: s2, disabled: l2, dropdownRender: c2, getPopupContainer: u2, overlayClassName: d2, rootClassName: f2, overlayStyle: p2, open: m2, onOpenChange: g2, visible: h2, onVisibleChange: v2, mouseEnterDelay: b2 = 0.15, mouseLeaveDelay: y2 = 0.1, autoAdjustOverflow: C2 = true, placement: w2 = "", overlay: x2, transitionName: S2 } = e3, { getPopupContainer: A2, getPrefixCls: k2, direction: O2, dropdown: P2 } = t2.useContext(E);
          Jt();
          const I2 = t2.useMemo(() => {
            const e4 = k2();
            return void 0 !== S2 ? S2 : w2.includes("top") ? `${e4}-slide-down` : `${e4}-slide-up`;
          }, [k2, w2, S2]), j2 = t2.useMemo(() => w2 ? w2.includes("Center") ? w2.slice(0, w2.indexOf("Center")) : w2 : "rtl" === O2 ? "bottomRight" : "bottomLeft", [w2, O2]), $2 = k2("dropdown", i2), N2 = Su($2), [M2, R2, B2] = hh($2, N2), [, T2] = ei(), F2 = t2.Children.only("object" != typeof (_2 = a2) && "function" != typeof _2 || null === _2 ? t2.createElement("span", null, a2) : a2), L2 = Aa(F2, { className: br()(`${$2}-trigger`, { [`${$2}-rtl`]: "rtl" === O2 }, F2.props.className), disabled: null !== (n2 = F2.props.disabled) && void 0 !== n2 ? n2 : l2 }), z2 = l2 ? [] : s2, H2 = !!(null == z2 ? void 0 : z2.includes("contextMenu")), [D2, q2] = Ur(false, { value: null != m2 ? m2 : h2 }), V2 = Kr((e4) => {
            null == g2 || g2(e4, { source: "trigger" }), null == v2 || v2(e4), q2(e4);
          }), W2 = br()(d2, f2, R2, B2, N2, null == P2 ? void 0 : P2.className, { [`${$2}-rtl`]: "rtl" === O2 }), K2 = ig({ arrowPointAtCenter: "object" == typeof o2 && o2.pointAtCenter, autoAdjustOverflow: C2, offset: T2.marginXXS, arrowWidth: o2 ? T2.sizePopupArrow : 0, borderRadius: T2.borderRadius }), G2 = t2.useCallback(() => {
            (null == r2 ? void 0 : r2.selectable) && (null == r2 ? void 0 : r2.multiple) || (null == g2 || g2(false, { source: "menu" }), q2(false));
          }, [null == r2 ? void 0 : r2.selectable, null == r2 ? void 0 : r2.multiple]), [X2, U2] = pa("Dropdown", null == p2 ? void 0 : p2.zIndex);
          var _2;
          let Q2 = t2.createElement(ih, Object.assign({ alignPoint: H2 }, wa(e3, ["rootClassName"]), { mouseEnterDelay: b2, mouseLeaveDelay: y2, visible: D2, builtinPlacements: K2, arrow: !!o2, overlayClassName: W2, prefixCls: $2, getPopupContainer: u2 || A2, transitionName: I2, trigger: z2, overlay: () => {
            let e4;
            return e4 = (null == r2 ? void 0 : r2.items) ? t2.createElement(Xg, Object.assign({}, r2)) : "function" == typeof x2 ? x2() : x2, c2 && (e4 = c2(e4)), e4 = t2.Children.only("string" == typeof e4 ? t2.createElement("span", null, e4) : e4), t2.createElement(vg, { prefixCls: `${$2}-menu`, rootClassName: br()(B2, N2), expandIcon: t2.createElement("span", { className: `${$2}-menu-submenu-arrow` }, t2.createElement(Qg, { className: `${$2}-menu-submenu-arrow-icon` })), mode: "vertical", selectable: false, onClick: G2, validator: (e5) => {
              let { mode: t3 } = e5;
            } }, e4);
          }, placement: j2, onVisibleChange: V2, overlayStyle: Object.assign(Object.assign(Object.assign({}, null == P2 ? void 0 : P2.style), p2), { zIndex: X2 }) }), L2);
          return X2 && (Q2 = t2.createElement(ca.Provider, { value: U2 }, Q2)), M2(Q2);
        }, bh = ((e3, n2, r2, o2, i2) => zd((a2) => {
          const { prefixCls: s2, style: l2 } = a2, c2 = t2.useRef(null), [u2, d2] = t2.useState(0), [f2, p2] = t2.useState(0), [m2, g2] = Ur(false, { value: a2.open }), { getPrefixCls: h2 } = t2.useContext(E), v2 = h2(o2 || "select", s2);
          t2.useEffect(() => {
            if (g2(true), "undefined" != typeof ResizeObserver) {
              const e4 = new ResizeObserver((e5) => {
                const t4 = e5[0].target;
                d2(t4.offsetHeight + 8), p2(t4.offsetWidth);
              }), t3 = setInterval(() => {
                var n3;
                const r3 = i2 ? `.${i2(v2)}` : `.${v2}-dropdown`, o3 = null === (n3 = c2.current) || void 0 === n3 ? void 0 : n3.querySelector(r3);
                o3 && (clearInterval(t3), e4.observe(o3));
              }, 10);
              return () => {
                clearInterval(t3), e4.disconnect();
              };
            }
          }, []);
          let b2 = Object.assign(Object.assign({}, a2), { style: Object.assign(Object.assign({}, l2), { margin: 0 }), open: m2, visible: m2, getPopupContainer: () => c2.current });
          r2 && (b2 = r2(b2)), n2 && Object.assign(b2, { [n2]: { overflow: { adjustX: false, adjustY: false } } });
          const y2 = { paddingBottom: u2, position: "relative", minWidth: f2 };
          return t2.createElement("div", { ref: c2, style: y2 }, t2.createElement(e3, Object.assign({}, b2)));
        }))(vh, "align", void 0, "dropdown", (e3) => e3);
        vh._InternalPanelDoNotUseOrYouWillBeFired = (e3) => t2.createElement(bh, Object.assign({}, e3), t2.createElement("span", null));
        const yh = vh;
        function Ch(e3) {
          return ["small", "middle", "large"].includes(e3);
        }
        function wh(e3) {
          return !!e3 && "number" == typeof e3 && !Number.isNaN(e3);
        }
        const xh = o().createContext({ latestIndex: 0 }), Sh = xh.Provider, Ah = (e3) => {
          let { className: n2, index: r2, children: o2, split: i2, style: a2 } = e3;
          const { latestIndex: s2 } = t2.useContext(xh);
          return null == o2 ? null : t2.createElement(t2.Fragment, null, t2.createElement("div", { className: n2, style: a2 }, o2), r2 < s2 && i2 && t2.createElement("span", { className: `${n2}-split` }, i2));
        };
        const Eh = t2.forwardRef((e3, n2) => {
          var r2, o2, i2;
          const { getPrefixCls: a2, space: s2, direction: l2 } = t2.useContext(E), { size: c2 = null !== (r2 = null == s2 ? void 0 : s2.size) && void 0 !== r2 ? r2 : "small", align: u2, className: d2, rootClassName: f2, children: p2, direction: m2 = "horizontal", prefixCls: g2, split: h2, style: v2, wrap: b2 = false, classNames: y2, styles: C2 } = e3, w2 = function(e4, t3) {
            var n3 = {};
            for (var r3 in e4)
              Object.prototype.hasOwnProperty.call(e4, r3) && t3.indexOf(r3) < 0 && (n3[r3] = e4[r3]);
            if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
              var o3 = 0;
              for (r3 = Object.getOwnPropertySymbols(e4); o3 < r3.length; o3++)
                t3.indexOf(r3[o3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, r3[o3]) && (n3[r3[o3]] = e4[r3[o3]]);
            }
            return n3;
          }(e3, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [x2, S2] = Array.isArray(c2) ? c2 : [c2, c2], A2 = Ch(S2), k2 = Ch(x2), O2 = wh(S2), P2 = wh(x2), I2 = ts(p2, { keepEmpty: true }), j2 = void 0 === u2 && "horizontal" === m2 ? "center" : u2, $2 = a2("space", g2), [N2, M2, R2] = is($2), B2 = br()($2, null == s2 ? void 0 : s2.className, M2, `${$2}-${m2}`, { [`${$2}-rtl`]: "rtl" === l2, [`${$2}-align-${j2}`]: j2, [`${$2}-gap-row-${S2}`]: A2, [`${$2}-gap-col-${x2}`]: k2 }, d2, f2, R2), T2 = br()(`${$2}-item`, null !== (o2 = null == y2 ? void 0 : y2.item) && void 0 !== o2 ? o2 : null === (i2 = null == s2 ? void 0 : s2.classNames) || void 0 === i2 ? void 0 : i2.item);
          let F2 = 0;
          const L2 = I2.map((e4, n3) => {
            var r3, o3;
            null != e4 && (F2 = n3);
            const i3 = (null == e4 ? void 0 : e4.key) || `${T2}-${n3}`;
            return t2.createElement(Ah, { className: T2, key: i3, index: n3, split: h2, style: null !== (r3 = null == C2 ? void 0 : C2.item) && void 0 !== r3 ? r3 : null === (o3 = null == s2 ? void 0 : s2.styles) || void 0 === o3 ? void 0 : o3.item }, e4);
          }), z2 = t2.useMemo(() => ({ latestIndex: F2 }), [F2]);
          if (0 === I2.length)
            return null;
          const H2 = {};
          return b2 && (H2.flexWrap = "wrap"), !k2 && P2 && (H2.columnGap = x2), !A2 && O2 && (H2.rowGap = S2), N2(t2.createElement("div", Object.assign({ ref: n2, className: B2, style: Object.assign(Object.assign(Object.assign({}, H2), null == s2 ? void 0 : s2.style), v2) }, w2), t2.createElement(Sh, { value: z2 }, L2)));
        }), kh = Eh;
        kh.Compact = (e3) => {
          const { getPrefixCls: n2, direction: r2 } = t2.useContext(E), { size: o2, direction: i2, block: a2, prefixCls: s2, className: l2, rootClassName: c2, children: u2 } = e3, d2 = as(e3, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), f2 = es((e4) => null != o2 ? o2 : e4), p2 = n2("space-compact", s2), [m2, g2] = is(p2), h2 = br()(p2, g2, { [`${p2}-rtl`]: "rtl" === r2, [`${p2}-block`]: a2, [`${p2}-vertical`]: "vertical" === i2 }, l2, c2), v2 = t2.useContext(ss), b2 = ts(u2), y2 = t2.useMemo(() => b2.map((e4, n3) => {
            const r3 = (null == e4 ? void 0 : e4.key) || `${p2}-item-${n3}`;
            return t2.createElement(us, { key: r3, compactSize: f2, compactDirection: i2, isFirstItem: 0 === n3 && (!v2 || (null == v2 ? void 0 : v2.isFirstItem)), isLastItem: n3 === b2.length - 1 && (!v2 || (null == v2 ? void 0 : v2.isLastItem)) }, e4);
          }), [o2, b2, v2]);
          return 0 === b2.length ? null : m2(t2.createElement("div", Object.assign({ className: h2 }, d2), y2));
        };
        const Oh = kh;
        const Ph = (e3) => {
          const { getPopupContainer: n2, getPrefixCls: r2, direction: o2 } = t2.useContext(E), { prefixCls: i2, type: a2 = "default", danger: s2, disabled: l2, loading: c2, onClick: u2, htmlType: d2, children: f2, className: p2, menu: m2, arrow: g2, autoFocus: h2, overlay: v2, trigger: b2, align: y2, open: C2, onOpenChange: w2, placement: x2, getPopupContainer: S2, href: A2, icon: k2 = t2.createElement(Hm, null), title: O2, buttonsRender: P2 = (e4) => e4, mouseEnterDelay: I2, mouseLeaveDelay: j2, overlayClassName: $2, overlayStyle: N2, destroyPopupOnHide: M2, dropdownRender: R2 } = e3, B2 = function(e4, t3) {
            var n3 = {};
            for (var r3 in e4)
              Object.prototype.hasOwnProperty.call(e4, r3) && t3.indexOf(r3) < 0 && (n3[r3] = e4[r3]);
            if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
              var o3 = 0;
              for (r3 = Object.getOwnPropertySymbols(e4); o3 < r3.length; o3++)
                t3.indexOf(r3[o3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, r3[o3]) && (n3[r3[o3]] = e4[r3[o3]]);
            }
            return n3;
          }(e3, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "dropdownRender"]), T2 = r2("dropdown", i2), F2 = `${T2}-button`, L2 = { menu: m2, arrow: g2, autoFocus: h2, align: y2, disabled: l2, trigger: l2 ? [] : b2, onOpenChange: w2, getPopupContainer: S2 || n2, mouseEnterDelay: I2, mouseLeaveDelay: j2, overlayClassName: $2, overlayStyle: N2, destroyPopupOnHide: M2, dropdownRender: R2 }, { compactSize: z2, compactItemClassnames: H2 } = ls(T2, o2), D2 = br()(F2, H2, p2);
          "overlay" in e3 && (L2.overlay = v2), "open" in e3 && (L2.open = C2), L2.placement = "placement" in e3 ? x2 : "rtl" === o2 ? "bottomLeft" : "bottomRight";
          const q2 = t2.createElement(bl, { type: a2, danger: s2, disabled: l2, loading: c2, onClick: u2, htmlType: d2, href: A2, title: O2 }, f2), V2 = t2.createElement(bl, { type: a2, danger: s2, icon: k2 }), [W2, K2] = P2([q2, V2]);
          return t2.createElement(Oh.Compact, Object.assign({ className: D2, size: z2, block: true }, B2), W2, t2.createElement(yh, Object.assign({}, L2), K2));
        };
        Ph.__ANT_BUTTON = true;
        const Ih = Ph, jh = yh;
        jh.Button = Ih;
        const $h = jh;
        var Nh = function() {
          return Nh = Object.assign || function(e3) {
            for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, Nh.apply(this, arguments);
        };
        function Mh(e3, t3, n2) {
          if (n2 || 2 === arguments.length)
            for (var r2, o2 = 0, i2 = t3.length; o2 < i2; o2++)
              !r2 && o2 in t3 || (r2 || (r2 = Array.prototype.slice.call(t3, 0, o2)), r2[o2] = t3[o2]);
          return e3.concat(r2 || Array.prototype.slice.call(t3));
        }
        Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError;
        var Rh = n(833), Bh = n.n(Rh), Th = "-ms-", Fh = "-moz-", Lh = "-webkit-", zh = "comm", Hh = "rule", Dh = "decl", qh = "@keyframes", Vh = Math.abs, Wh = String.fromCharCode, Kh = Object.assign;
        function Gh(e3) {
          return e3.trim();
        }
        function Xh(e3, t3) {
          return (e3 = t3.exec(e3)) ? e3[0] : e3;
        }
        function Uh(e3, t3, n2) {
          return e3.replace(t3, n2);
        }
        function _h(e3, t3, n2) {
          return e3.indexOf(t3, n2);
        }
        function Qh(e3, t3) {
          return 0 | e3.charCodeAt(t3);
        }
        function Yh(e3, t3, n2) {
          return e3.slice(t3, n2);
        }
        function Zh(e3) {
          return e3.length;
        }
        function Jh(e3) {
          return e3.length;
        }
        function ev(e3, t3) {
          return t3.push(e3), e3;
        }
        function tv(e3, t3) {
          return e3.filter(function(e4) {
            return !Xh(e4, t3);
          });
        }
        var nv = 1, rv = 1, ov = 0, iv = 0, av = 0, sv = "";
        function lv(e3, t3, n2, r2, o2, i2, a2, s2) {
          return { value: e3, root: t3, parent: n2, type: r2, props: o2, children: i2, line: nv, column: rv, length: a2, return: "", siblings: s2 };
        }
        function cv(e3, t3) {
          return Kh(lv("", null, null, "", null, null, 0, e3.siblings), e3, { length: -e3.length }, t3);
        }
        function uv(e3) {
          for (; e3.root; )
            e3 = cv(e3.root, { children: [e3] });
          ev(e3, e3.siblings);
        }
        function dv() {
          return av = iv < ov ? Qh(sv, iv++) : 0, rv++, 10 === av && (rv = 1, nv++), av;
        }
        function fv() {
          return Qh(sv, iv);
        }
        function pv() {
          return iv;
        }
        function mv(e3, t3) {
          return Yh(sv, e3, t3);
        }
        function gv(e3) {
          switch (e3) {
            case 0:
            case 9:
            case 10:
            case 13:
            case 32:
              return 5;
            case 33:
            case 43:
            case 44:
            case 47:
            case 62:
            case 64:
            case 126:
            case 59:
            case 123:
            case 125:
              return 4;
            case 58:
              return 3;
            case 34:
            case 39:
            case 40:
            case 91:
              return 2;
            case 41:
            case 93:
              return 1;
          }
          return 0;
        }
        function hv(e3) {
          return Gh(mv(iv - 1, yv(91 === e3 ? e3 + 2 : 40 === e3 ? e3 + 1 : e3)));
        }
        function vv(e3) {
          for (; (av = fv()) && av < 33; )
            dv();
          return gv(e3) > 2 || gv(av) > 3 ? "" : " ";
        }
        function bv(e3, t3) {
          for (; --t3 && dv() && !(av < 48 || av > 102 || av > 57 && av < 65 || av > 70 && av < 97); )
            ;
          return mv(e3, pv() + (t3 < 6 && 32 == fv() && 32 == dv()));
        }
        function yv(e3) {
          for (; dv(); )
            switch (av) {
              case e3:
                return iv;
              case 34:
              case 39:
                34 !== e3 && 39 !== e3 && yv(av);
                break;
              case 40:
                41 === e3 && yv(e3);
                break;
              case 92:
                dv();
            }
          return iv;
        }
        function Cv(e3, t3) {
          for (; dv() && e3 + av !== 57 && (e3 + av !== 84 || 47 !== fv()); )
            ;
          return "/*" + mv(t3, iv - 1) + "*" + Wh(47 === e3 ? e3 : dv());
        }
        function wv(e3) {
          for (; !gv(fv()); )
            dv();
          return mv(e3, iv);
        }
        function xv(e3, t3) {
          for (var n2 = "", r2 = 0; r2 < e3.length; r2++)
            n2 += t3(e3[r2], r2, e3, t3) || "";
          return n2;
        }
        function Sv(e3, t3, n2, r2) {
          switch (e3.type) {
            case "@layer":
              if (e3.children.length)
                break;
            case "@import":
            case Dh:
              return e3.return = e3.return || e3.value;
            case zh:
              return "";
            case qh:
              return e3.return = e3.value + "{" + xv(e3.children, r2) + "}";
            case Hh:
              if (!Zh(e3.value = e3.props.join(",")))
                return "";
          }
          return Zh(n2 = xv(e3.children, r2)) ? e3.return = e3.value + "{" + n2 + "}" : "";
        }
        function Av(e3, t3, n2) {
          switch (function(e4, t4) {
            return 45 ^ Qh(e4, 0) ? (((t4 << 2 ^ Qh(e4, 0)) << 2 ^ Qh(e4, 1)) << 2 ^ Qh(e4, 2)) << 2 ^ Qh(e4, 3) : 0;
          }(e3, t3)) {
            case 5103:
              return Lh + "print-" + e3 + e3;
            case 5737:
            case 4201:
            case 3177:
            case 3433:
            case 1641:
            case 4457:
            case 2921:
            case 5572:
            case 6356:
            case 5844:
            case 3191:
            case 6645:
            case 3005:
            case 6391:
            case 5879:
            case 5623:
            case 6135:
            case 4599:
            case 4855:
            case 4215:
            case 6389:
            case 5109:
            case 5365:
            case 5621:
            case 3829:
              return Lh + e3 + e3;
            case 4789:
              return Fh + e3 + e3;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
              return Lh + e3 + Fh + e3 + Th + e3 + e3;
            case 5936:
              switch (Qh(e3, t3 + 11)) {
                case 114:
                  return Lh + e3 + Th + Uh(e3, /[svh]\w+-[tblr]{2}/, "tb") + e3;
                case 108:
                  return Lh + e3 + Th + Uh(e3, /[svh]\w+-[tblr]{2}/, "tb-rl") + e3;
                case 45:
                  return Lh + e3 + Th + Uh(e3, /[svh]\w+-[tblr]{2}/, "lr") + e3;
              }
            case 6828:
            case 4268:
            case 2903:
              return Lh + e3 + Th + e3 + e3;
            case 6165:
              return Lh + e3 + Th + "flex-" + e3 + e3;
            case 5187:
              return Lh + e3 + Uh(e3, /(\w+).+(:[^]+)/, Lh + "box-$1$2" + Th + "flex-$1$2") + e3;
            case 5443:
              return Lh + e3 + Th + "flex-item-" + Uh(e3, /flex-|-self/g, "") + (Xh(e3, /flex-|baseline/) ? "" : Th + "grid-row-" + Uh(e3, /flex-|-self/g, "")) + e3;
            case 4675:
              return Lh + e3 + Th + "flex-line-pack" + Uh(e3, /align-content|flex-|-self/g, "") + e3;
            case 5548:
              return Lh + e3 + Th + Uh(e3, "shrink", "negative") + e3;
            case 5292:
              return Lh + e3 + Th + Uh(e3, "basis", "preferred-size") + e3;
            case 6060:
              return Lh + "box-" + Uh(e3, "-grow", "") + Lh + e3 + Th + Uh(e3, "grow", "positive") + e3;
            case 4554:
              return Lh + Uh(e3, /([^-])(transform)/g, "$1" + Lh + "$2") + e3;
            case 6187:
              return Uh(Uh(Uh(e3, /(zoom-|grab)/, Lh + "$1"), /(image-set)/, Lh + "$1"), e3, "") + e3;
            case 5495:
            case 3959:
              return Uh(e3, /(image-set\([^]*)/, Lh + "$1$`$1");
            case 4968:
              return Uh(Uh(e3, /(.+:)(flex-)?(.*)/, Lh + "box-pack:$3" + Th + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Lh + e3 + e3;
            case 4200:
              if (!Xh(e3, /flex-|baseline/))
                return Th + "grid-column-align" + Yh(e3, t3) + e3;
              break;
            case 2592:
            case 3360:
              return Th + Uh(e3, "template-", "") + e3;
            case 4384:
            case 3616:
              return n2 && n2.some(function(e4, n3) {
                return t3 = n3, Xh(e4.props, /grid-\w+-end/);
              }) ? ~_h(e3 + (n2 = n2[t3].value), "span", 0) ? e3 : Th + Uh(e3, "-start", "") + e3 + Th + "grid-row-span:" + (~_h(n2, "span", 0) ? Xh(n2, /\d+/) : +Xh(n2, /\d+/) - +Xh(e3, /\d+/)) + ";" : Th + Uh(e3, "-start", "") + e3;
            case 4896:
            case 4128:
              return n2 && n2.some(function(e4) {
                return Xh(e4.props, /grid-\w+-start/);
              }) ? e3 : Th + Uh(Uh(e3, "-end", "-span"), "span ", "") + e3;
            case 4095:
            case 3583:
            case 4068:
            case 2532:
              return Uh(e3, /(.+)-inline(.+)/, Lh + "$1$2") + e3;
            case 8116:
            case 7059:
            case 5753:
            case 5535:
            case 5445:
            case 5701:
            case 4933:
            case 4677:
            case 5533:
            case 5789:
            case 5021:
            case 4765:
              if (Zh(e3) - 1 - t3 > 6)
                switch (Qh(e3, t3 + 1)) {
                  case 109:
                    if (45 !== Qh(e3, t3 + 4))
                      break;
                  case 102:
                    return Uh(e3, /(.+:)(.+)-([^]+)/, "$1" + Lh + "$2-$3$1" + Fh + (108 == Qh(e3, t3 + 3) ? "$3" : "$2-$3")) + e3;
                  case 115:
                    return ~_h(e3, "stretch", 0) ? Av(Uh(e3, "stretch", "fill-available"), t3, n2) + e3 : e3;
                }
              break;
            case 5152:
            case 5920:
              return Uh(e3, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(t4, n3, r2, o2, i2, a2, s2) {
                return Th + n3 + ":" + r2 + s2 + (o2 ? Th + n3 + "-span:" + (i2 ? a2 : +a2 - +r2) + s2 : "") + e3;
              });
            case 4949:
              if (121 === Qh(e3, t3 + 6))
                return Uh(e3, ":", ":" + Lh) + e3;
              break;
            case 6444:
              switch (Qh(e3, 45 === Qh(e3, 14) ? 18 : 11)) {
                case 120:
                  return Uh(e3, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Lh + (45 === Qh(e3, 14) ? "inline-" : "") + "box$3$1" + Lh + "$2$3$1" + Th + "$2box$3") + e3;
                case 100:
                  return Uh(e3, ":", ":" + Th) + e3;
              }
              break;
            case 5719:
            case 2647:
            case 2135:
            case 3927:
            case 2391:
              return Uh(e3, "scroll-", "scroll-snap-") + e3;
          }
          return e3;
        }
        function Ev(e3, t3, n2, r2) {
          if (e3.length > -1 && !e3.return)
            switch (e3.type) {
              case Dh:
                return void (e3.return = Av(e3.value, e3.length, n2));
              case qh:
                return xv([cv(e3, { value: Uh(e3.value, "@", "@" + Lh) })], r2);
              case Hh:
                if (e3.length)
                  return function(e4, t4) {
                    return e4.map(t4).join("");
                  }(n2 = e3.props, function(t4) {
                    switch (Xh(t4, r2 = /(::plac\w+|:read-\w+)/)) {
                      case ":read-only":
                      case ":read-write":
                        uv(cv(e3, { props: [Uh(t4, /:(read-\w+)/, ":-moz-$1")] })), uv(cv(e3, { props: [t4] })), Kh(e3, { props: tv(n2, r2) });
                        break;
                      case "::placeholder":
                        uv(cv(e3, { props: [Uh(t4, /:(plac\w+)/, ":" + Lh + "input-$1")] })), uv(cv(e3, { props: [Uh(t4, /:(plac\w+)/, ":-moz-$1")] })), uv(cv(e3, { props: [Uh(t4, /:(plac\w+)/, Th + "input-$1")] })), uv(cv(e3, { props: [t4] })), Kh(e3, { props: tv(n2, r2) });
                    }
                    return "";
                  });
            }
        }
        function kv(e3) {
          return function(e4) {
            return sv = "", e4;
          }(Ov("", null, null, null, [""], e3 = function(e4) {
            return nv = rv = 1, ov = Zh(sv = e4), iv = 0, [];
          }(e3), 0, [0], e3));
        }
        function Ov(e3, t3, n2, r2, o2, i2, a2, s2, l2) {
          for (var c2 = 0, u2 = 0, d2 = a2, f2 = 0, p2 = 0, m2 = 0, g2 = 1, h2 = 1, v2 = 1, b2 = 0, y2 = "", C2 = o2, w2 = i2, x2 = r2, S2 = y2; h2; )
            switch (m2 = b2, b2 = dv()) {
              case 40:
                if (108 != m2 && 58 == Qh(S2, d2 - 1)) {
                  -1 != _h(S2 += Uh(hv(b2), "&", "&\f"), "&\f", Vh(c2 ? s2[c2 - 1] : 0)) && (v2 = -1);
                  break;
                }
              case 34:
              case 39:
              case 91:
                S2 += hv(b2);
                break;
              case 9:
              case 10:
              case 13:
              case 32:
                S2 += vv(m2);
                break;
              case 92:
                S2 += bv(pv() - 1, 7);
                continue;
              case 47:
                switch (fv()) {
                  case 42:
                  case 47:
                    ev(Iv(Cv(dv(), pv()), t3, n2, l2), l2);
                    break;
                  default:
                    S2 += "/";
                }
                break;
              case 123 * g2:
                s2[c2++] = Zh(S2) * v2;
              case 125 * g2:
              case 59:
              case 0:
                switch (b2) {
                  case 0:
                  case 125:
                    h2 = 0;
                  case 59 + u2:
                    -1 == v2 && (S2 = Uh(S2, /\f/g, "")), p2 > 0 && Zh(S2) - d2 && ev(p2 > 32 ? jv(S2 + ";", r2, n2, d2 - 1, l2) : jv(Uh(S2, " ", "") + ";", r2, n2, d2 - 2, l2), l2);
                    break;
                  case 59:
                    S2 += ";";
                  default:
                    if (ev(x2 = Pv(S2, t3, n2, c2, u2, o2, s2, y2, C2 = [], w2 = [], d2, i2), i2), 123 === b2)
                      if (0 === u2)
                        Ov(S2, t3, x2, x2, C2, i2, d2, s2, w2);
                      else
                        switch (99 === f2 && 110 === Qh(S2, 3) ? 100 : f2) {
                          case 100:
                          case 108:
                          case 109:
                          case 115:
                            Ov(e3, x2, x2, r2 && ev(Pv(e3, x2, x2, 0, 0, o2, s2, y2, o2, C2 = [], d2, w2), w2), o2, w2, d2, s2, r2 ? C2 : w2);
                            break;
                          default:
                            Ov(S2, x2, x2, x2, [""], w2, 0, s2, w2);
                        }
                }
                c2 = u2 = p2 = 0, g2 = v2 = 1, y2 = S2 = "", d2 = a2;
                break;
              case 58:
                d2 = 1 + Zh(S2), p2 = m2;
              default:
                if (g2 < 1) {
                  if (123 == b2)
                    --g2;
                  else if (125 == b2 && 0 == g2++ && 125 == (av = iv > 0 ? Qh(sv, --iv) : 0, rv--, 10 === av && (rv = 1, nv--), av))
                    continue;
                }
                switch (S2 += Wh(b2), b2 * g2) {
                  case 38:
                    v2 = u2 > 0 ? 1 : (S2 += "\f", -1);
                    break;
                  case 44:
                    s2[c2++] = (Zh(S2) - 1) * v2, v2 = 1;
                    break;
                  case 64:
                    45 === fv() && (S2 += hv(dv())), f2 = fv(), u2 = d2 = Zh(y2 = S2 += wv(pv())), b2++;
                    break;
                  case 45:
                    45 === m2 && 2 == Zh(S2) && (g2 = 0);
                }
            }
          return i2;
        }
        function Pv(e3, t3, n2, r2, o2, i2, a2, s2, l2, c2, u2, d2) {
          for (var f2 = o2 - 1, p2 = 0 === o2 ? i2 : [""], m2 = Jh(p2), g2 = 0, h2 = 0, v2 = 0; g2 < r2; ++g2)
            for (var b2 = 0, y2 = Yh(e3, f2 + 1, f2 = Vh(h2 = a2[g2])), C2 = e3; b2 < m2; ++b2)
              (C2 = Gh(h2 > 0 ? p2[b2] + " " + y2 : Uh(y2, /&\f/g, p2[b2]))) && (l2[v2++] = C2);
          return lv(e3, t3, n2, 0 === o2 ? Hh : s2, l2, c2, u2, d2);
        }
        function Iv(e3, t3, n2, r2) {
          return lv(e3, t3, n2, zh, Wh(av), Yh(e3, 2, -2), 0, r2);
        }
        function jv(e3, t3, n2, r2, o2) {
          return lv(e3, t3, n2, Dh, Yh(e3, 0, r2), Yh(e3, r2 + 1, -1), r2, o2);
        }
        var $v = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, Nv = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Mv = "active", Rv = "data-styled-version", Bv = "6.1.14", Tv = "/*!sc*/\n", Fv = "undefined" != typeof window && "HTMLElement" in window, Lv = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY && "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY), zv = (/* @__PURE__ */ new Set(), Object.freeze([])), Hv = Object.freeze({});
        var Dv = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), qv = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vv = /(^-|-$)/g;
        function Wv(e3) {
          return e3.replace(qv, "-").replace(Vv, "");
        }
        var Kv = /(a)(d)/gi, Gv = function(e3) {
          return String.fromCharCode(e3 + (e3 > 25 ? 39 : 97));
        };
        function Xv(e3) {
          var t3, n2 = "";
          for (t3 = Math.abs(e3); t3 > 52; t3 = t3 / 52 | 0)
            n2 = Gv(t3 % 52) + n2;
          return (Gv(t3 % 52) + n2).replace(Kv, "$1-$2");
        }
        var Uv, _v = function(e3, t3) {
          for (var n2 = t3.length; n2; )
            e3 = 33 * e3 ^ t3.charCodeAt(--n2);
          return e3;
        }, Qv = function(e3) {
          return _v(5381, e3);
        };
        function Yv(e3) {
          return "string" == typeof e3 && true;
        }
        var Zv = "function" == typeof Symbol && Symbol.for, Jv = Zv ? Symbol.for("react.memo") : 60115, eb = Zv ? Symbol.for("react.forward_ref") : 60112, tb = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, nb = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, rb = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, ob = ((Uv = {})[eb] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, Uv[Jv] = rb, Uv);
        function ib(e3) {
          return ("type" in (t3 = e3) && t3.type.$$typeof) === Jv ? rb : "$$typeof" in e3 ? ob[e3.$$typeof] : tb;
          var t3;
        }
        var ab = Object.defineProperty, sb = Object.getOwnPropertyNames, lb = Object.getOwnPropertySymbols, cb = Object.getOwnPropertyDescriptor, ub = Object.getPrototypeOf, db = Object.prototype;
        function fb(e3, t3, n2) {
          if ("string" != typeof t3) {
            if (db) {
              var r2 = ub(t3);
              r2 && r2 !== db && fb(e3, r2, n2);
            }
            var o2 = sb(t3);
            lb && (o2 = o2.concat(lb(t3)));
            for (var i2 = ib(e3), a2 = ib(t3), s2 = 0; s2 < o2.length; ++s2) {
              var l2 = o2[s2];
              if (!(l2 in nb || n2 && n2[l2] || a2 && l2 in a2 || i2 && l2 in i2)) {
                var c2 = cb(t3, l2);
                try {
                  ab(e3, l2, c2);
                } catch (e4) {
                }
              }
            }
          }
          return e3;
        }
        function pb(e3) {
          return "function" == typeof e3;
        }
        function mb(e3) {
          return "object" == typeof e3 && "styledComponentId" in e3;
        }
        function gb(e3, t3) {
          return e3 && t3 ? "".concat(e3, " ").concat(t3) : e3 || t3 || "";
        }
        function hb(e3, t3) {
          if (0 === e3.length)
            return "";
          for (var n2 = e3[0], r2 = 1; r2 < e3.length; r2++)
            n2 += t3 ? t3 + e3[r2] : e3[r2];
          return n2;
        }
        function vb(e3) {
          return null !== e3 && "object" == typeof e3 && e3.constructor.name === Object.name && !("props" in e3 && e3.$$typeof);
        }
        function bb(e3, t3, n2) {
          if (void 0 === n2 && (n2 = false), !n2 && !vb(e3) && !Array.isArray(e3))
            return t3;
          if (Array.isArray(t3))
            for (var r2 = 0; r2 < t3.length; r2++)
              e3[r2] = bb(e3[r2], t3[r2]);
          else if (vb(t3))
            for (var r2 in t3)
              e3[r2] = bb(e3[r2], t3[r2]);
          return e3;
        }
        function yb(e3, t3) {
          Object.defineProperty(e3, "toString", { value: t3 });
        }
        function Cb(e3) {
          for (var t3 = [], n2 = 1; n2 < arguments.length; n2++)
            t3[n2 - 1] = arguments[n2];
          return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e3, " for more information.").concat(t3.length > 0 ? " Args: ".concat(t3.join(", ")) : ""));
        }
        var wb = function() {
          function e3(e4) {
            this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e4;
          }
          return e3.prototype.indexOfGroup = function(e4) {
            for (var t3 = 0, n2 = 0; n2 < e4; n2++)
              t3 += this.groupSizes[n2];
            return t3;
          }, e3.prototype.insertRules = function(e4, t3) {
            if (e4 >= this.groupSizes.length) {
              for (var n2 = this.groupSizes, r2 = n2.length, o2 = r2; e4 >= o2; )
                if ((o2 <<= 1) < 0)
                  throw Cb(16, "".concat(e4));
              this.groupSizes = new Uint32Array(o2), this.groupSizes.set(n2), this.length = o2;
              for (var i2 = r2; i2 < o2; i2++)
                this.groupSizes[i2] = 0;
            }
            for (var a2 = this.indexOfGroup(e4 + 1), s2 = (i2 = 0, t3.length); i2 < s2; i2++)
              this.tag.insertRule(a2, t3[i2]) && (this.groupSizes[e4]++, a2++);
          }, e3.prototype.clearGroup = function(e4) {
            if (e4 < this.length) {
              var t3 = this.groupSizes[e4], n2 = this.indexOfGroup(e4), r2 = n2 + t3;
              this.groupSizes[e4] = 0;
              for (var o2 = n2; o2 < r2; o2++)
                this.tag.deleteRule(n2);
            }
          }, e3.prototype.getGroup = function(e4) {
            var t3 = "";
            if (e4 >= this.length || 0 === this.groupSizes[e4])
              return t3;
            for (var n2 = this.groupSizes[e4], r2 = this.indexOfGroup(e4), o2 = r2 + n2, i2 = r2; i2 < o2; i2++)
              t3 += "".concat(this.tag.getRule(i2)).concat(Tv);
            return t3;
          }, e3;
        }(), xb = /* @__PURE__ */ new Map(), Sb = /* @__PURE__ */ new Map(), Ab = 1, Eb = function(e3) {
          if (xb.has(e3))
            return xb.get(e3);
          for (; Sb.has(Ab); )
            Ab++;
          var t3 = Ab++;
          return xb.set(e3, t3), Sb.set(t3, e3), t3;
        }, kb = function(e3, t3) {
          Ab = t3 + 1, xb.set(e3, t3), Sb.set(t3, e3);
        }, Ob = "style[".concat(Nv, "][").concat(Rv, '="').concat(Bv, '"]'), Pb = new RegExp("^".concat(Nv, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ib = function(e3, t3, n2) {
          for (var r2, o2 = n2.split(","), i2 = 0, a2 = o2.length; i2 < a2; i2++)
            (r2 = o2[i2]) && e3.registerName(t3, r2);
        }, jb = function(e3, t3) {
          for (var n2, r2 = (null !== (n2 = t3.textContent) && void 0 !== n2 ? n2 : "").split(Tv), o2 = [], i2 = 0, a2 = r2.length; i2 < a2; i2++) {
            var s2 = r2[i2].trim();
            if (s2) {
              var l2 = s2.match(Pb);
              if (l2) {
                var c2 = 0 | parseInt(l2[1], 10), u2 = l2[2];
                0 !== c2 && (kb(u2, c2), Ib(e3, u2, l2[3]), e3.getTag().insertRules(c2, o2)), o2.length = 0;
              } else
                o2.push(s2);
            }
          }
        }, $b = function(e3) {
          for (var t3 = document.querySelectorAll(Ob), n2 = 0, r2 = t3.length; n2 < r2; n2++) {
            var o2 = t3[n2];
            o2 && o2.getAttribute(Nv) !== Mv && (jb(e3, o2), o2.parentNode && o2.parentNode.removeChild(o2));
          }
        };
        function Nb() {
          return n.nc;
        }
        var Mb = function(e3) {
          var t3 = document.head, n2 = e3 || t3, r2 = document.createElement("style"), o2 = function(e4) {
            var t4 = Array.from(e4.querySelectorAll("style[".concat(Nv, "]")));
            return t4[t4.length - 1];
          }(n2), i2 = void 0 !== o2 ? o2.nextSibling : null;
          r2.setAttribute(Nv, Mv), r2.setAttribute(Rv, Bv);
          var a2 = Nb();
          return a2 && r2.setAttribute("nonce", a2), n2.insertBefore(r2, i2), r2;
        }, Rb = function() {
          function e3(e4) {
            this.element = Mb(e4), this.element.appendChild(document.createTextNode("")), this.sheet = function(e5) {
              if (e5.sheet)
                return e5.sheet;
              for (var t3 = document.styleSheets, n2 = 0, r2 = t3.length; n2 < r2; n2++) {
                var o2 = t3[n2];
                if (o2.ownerNode === e5)
                  return o2;
              }
              throw Cb(17);
            }(this.element), this.length = 0;
          }
          return e3.prototype.insertRule = function(e4, t3) {
            try {
              return this.sheet.insertRule(t3, e4), this.length++, true;
            } catch (e5) {
              return false;
            }
          }, e3.prototype.deleteRule = function(e4) {
            this.sheet.deleteRule(e4), this.length--;
          }, e3.prototype.getRule = function(e4) {
            var t3 = this.sheet.cssRules[e4];
            return t3 && t3.cssText ? t3.cssText : "";
          }, e3;
        }(), Bb = function() {
          function e3(e4) {
            this.element = Mb(e4), this.nodes = this.element.childNodes, this.length = 0;
          }
          return e3.prototype.insertRule = function(e4, t3) {
            if (e4 <= this.length && e4 >= 0) {
              var n2 = document.createTextNode(t3);
              return this.element.insertBefore(n2, this.nodes[e4] || null), this.length++, true;
            }
            return false;
          }, e3.prototype.deleteRule = function(e4) {
            this.element.removeChild(this.nodes[e4]), this.length--;
          }, e3.prototype.getRule = function(e4) {
            return e4 < this.length ? this.nodes[e4].textContent : "";
          }, e3;
        }(), Tb = function() {
          function e3(e4) {
            this.rules = [], this.length = 0;
          }
          return e3.prototype.insertRule = function(e4, t3) {
            return e4 <= this.length && (this.rules.splice(e4, 0, t3), this.length++, true);
          }, e3.prototype.deleteRule = function(e4) {
            this.rules.splice(e4, 1), this.length--;
          }, e3.prototype.getRule = function(e4) {
            return e4 < this.length ? this.rules[e4] : "";
          }, e3;
        }(), Fb = Fv, Lb = { isServer: !Fv, useCSSOMInjection: !Lv }, zb = function() {
          function e3(e4, t3, n2) {
            void 0 === e4 && (e4 = Hv), void 0 === t3 && (t3 = {});
            var r2 = this;
            this.options = Nh(Nh({}, Lb), e4), this.gs = t3, this.names = new Map(n2), this.server = !!e4.isServer, !this.server && Fv && Fb && (Fb = false, $b(this)), yb(this, function() {
              return function(e5) {
                for (var t4 = e5.getTag(), n3 = t4.length, r3 = "", o2 = function(n4) {
                  var o3 = function(e6) {
                    return Sb.get(e6);
                  }(n4);
                  if (void 0 === o3)
                    return "continue";
                  var i3 = e5.names.get(o3), a2 = t4.getGroup(n4);
                  if (void 0 === i3 || !i3.size || 0 === a2.length)
                    return "continue";
                  var s2 = "".concat(Nv, ".g").concat(n4, '[id="').concat(o3, '"]'), l2 = "";
                  void 0 !== i3 && i3.forEach(function(e6) {
                    e6.length > 0 && (l2 += "".concat(e6, ","));
                  }), r3 += "".concat(a2).concat(s2, '{content:"').concat(l2, '"}').concat(Tv);
                }, i2 = 0; i2 < n3; i2++)
                  o2(i2);
                return r3;
              }(r2);
            });
          }
          return e3.registerId = function(e4) {
            return Eb(e4);
          }, e3.prototype.rehydrate = function() {
            !this.server && Fv && $b(this);
          }, e3.prototype.reconstructWithOptions = function(t3, n2) {
            return void 0 === n2 && (n2 = true), new e3(Nh(Nh({}, this.options), t3), this.gs, n2 && this.names || void 0);
          }, e3.prototype.allocateGSInstance = function(e4) {
            return this.gs[e4] = (this.gs[e4] || 0) + 1;
          }, e3.prototype.getTag = function() {
            return this.tag || (this.tag = (e4 = function(e5) {
              var t3 = e5.useCSSOMInjection, n2 = e5.target;
              return e5.isServer ? new Tb(n2) : t3 ? new Rb(n2) : new Bb(n2);
            }(this.options), new wb(e4)));
            var e4;
          }, e3.prototype.hasNameForId = function(e4, t3) {
            return this.names.has(e4) && this.names.get(e4).has(t3);
          }, e3.prototype.registerName = function(e4, t3) {
            if (Eb(e4), this.names.has(e4))
              this.names.get(e4).add(t3);
            else {
              var n2 = /* @__PURE__ */ new Set();
              n2.add(t3), this.names.set(e4, n2);
            }
          }, e3.prototype.insertRules = function(e4, t3, n2) {
            this.registerName(e4, t3), this.getTag().insertRules(Eb(e4), n2);
          }, e3.prototype.clearNames = function(e4) {
            this.names.has(e4) && this.names.get(e4).clear();
          }, e3.prototype.clearRules = function(e4) {
            this.getTag().clearGroup(Eb(e4)), this.clearNames(e4);
          }, e3.prototype.clearTag = function() {
            this.tag = void 0;
          }, e3;
        }(), Hb = /&/g, Db = /^\s*\/\/.*$/gm;
        function qb(e3, t3) {
          return e3.map(function(e4) {
            return "rule" === e4.type && (e4.value = "".concat(t3, " ").concat(e4.value), e4.value = e4.value.replaceAll(",", ",".concat(t3, " ")), e4.props = e4.props.map(function(e5) {
              return "".concat(t3, " ").concat(e5);
            })), Array.isArray(e4.children) && "@keyframes" !== e4.type && (e4.children = qb(e4.children, t3)), e4;
          });
        }
        function Vb(e3) {
          var t3, n2, r2, o2 = void 0 === e3 ? Hv : e3, i2 = o2.options, a2 = void 0 === i2 ? Hv : i2, s2 = o2.plugins, l2 = void 0 === s2 ? zv : s2, c2 = function(e4, r3, o3) {
            return o3.startsWith(n2) && o3.endsWith(n2) && o3.replaceAll(n2, "").length > 0 ? ".".concat(t3) : e4;
          }, u2 = l2.slice();
          u2.push(function(e4) {
            e4.type === Hh && e4.value.includes("&") && (e4.props[0] = e4.props[0].replace(Hb, n2).replace(r2, c2));
          }), a2.prefix && u2.push(Ev), u2.push(Sv);
          var d2 = function(e4, o3, i3, s3) {
            void 0 === o3 && (o3 = ""), void 0 === i3 && (i3 = ""), void 0 === s3 && (s3 = "&"), t3 = s3, n2 = o3, r2 = new RegExp("\\".concat(n2, "\\b"), "g");
            var l3 = e4.replace(Db, ""), c3 = kv(i3 || o3 ? "".concat(i3, " ").concat(o3, " { ").concat(l3, " }") : l3);
            a2.namespace && (c3 = qb(c3, a2.namespace));
            var d3, f2, p2, m2 = [];
            return xv(c3, (d3 = u2.concat((p2 = function(e5) {
              return m2.push(e5);
            }, function(e5) {
              e5.root || (e5 = e5.return) && p2(e5);
            })), f2 = Jh(d3), function(e5, t4, n3, r3) {
              for (var o4 = "", i4 = 0; i4 < f2; i4++)
                o4 += d3[i4](e5, t4, n3, r3) || "";
              return o4;
            })), m2;
          };
          return d2.hash = l2.length ? l2.reduce(function(e4, t4) {
            return t4.name || Cb(15), _v(e4, t4.name);
          }, 5381).toString() : "", d2;
        }
        var Wb = new zb(), Kb = Vb(), Gb = o().createContext({ shouldForwardProp: void 0, styleSheet: Wb, stylis: Kb }), Xb = (Gb.Consumer, o().createContext(void 0));
        function Ub() {
          return (0, t2.useContext)(Gb);
        }
        function _b(e3) {
          var n2 = (0, t2.useState)(e3.stylisPlugins), r2 = n2[0], i2 = n2[1], a2 = Ub().styleSheet, s2 = (0, t2.useMemo)(function() {
            var t3 = a2;
            return e3.sheet ? t3 = e3.sheet : e3.target && (t3 = t3.reconstructWithOptions({ target: e3.target }, false)), e3.disableCSSOMInjection && (t3 = t3.reconstructWithOptions({ useCSSOMInjection: false })), t3;
          }, [e3.disableCSSOMInjection, e3.sheet, e3.target, a2]), l2 = (0, t2.useMemo)(function() {
            return Vb({ options: { namespace: e3.namespace, prefix: e3.enableVendorPrefixes }, plugins: r2 });
          }, [e3.enableVendorPrefixes, e3.namespace, r2]);
          (0, t2.useEffect)(function() {
            Bh()(r2, e3.stylisPlugins) || i2(e3.stylisPlugins);
          }, [e3.stylisPlugins]);
          var c2 = (0, t2.useMemo)(function() {
            return { shouldForwardProp: e3.shouldForwardProp, styleSheet: s2, stylis: l2 };
          }, [e3.shouldForwardProp, s2, l2]);
          return o().createElement(Gb.Provider, { value: c2 }, o().createElement(Xb.Provider, { value: l2 }, e3.children));
        }
        var Qb = function() {
          function e3(e4, t3) {
            var n2 = this;
            this.inject = function(e5, t4) {
              void 0 === t4 && (t4 = Kb);
              var r2 = n2.name + t4.hash;
              e5.hasNameForId(n2.id, r2) || e5.insertRules(n2.id, r2, t4(n2.rules, r2, "@keyframes"));
            }, this.name = e4, this.id = "sc-keyframes-".concat(e4), this.rules = t3, yb(this, function() {
              throw Cb(12, String(n2.name));
            });
          }
          return e3.prototype.getName = function(e4) {
            return void 0 === e4 && (e4 = Kb), this.name + e4.hash;
          }, e3;
        }(), Yb = function(e3) {
          return e3 >= "A" && e3 <= "Z";
        };
        function Zb(e3) {
          for (var t3 = "", n2 = 0; n2 < e3.length; n2++) {
            var r2 = e3[n2];
            if (1 === n2 && "-" === r2 && "-" === e3[0])
              return e3;
            Yb(r2) ? t3 += "-" + r2.toLowerCase() : t3 += r2;
          }
          return t3.startsWith("ms-") ? "-" + t3 : t3;
        }
        var Jb = function(e3) {
          return null == e3 || false === e3 || "" === e3;
        }, ey = function(e3) {
          var t3, n2, r2 = [];
          for (var o2 in e3) {
            var i2 = e3[o2];
            e3.hasOwnProperty(o2) && !Jb(i2) && (Array.isArray(i2) && i2.isCss || pb(i2) ? r2.push("".concat(Zb(o2), ":"), i2, ";") : vb(i2) ? r2.push.apply(r2, Mh(Mh(["".concat(o2, " {")], ey(i2), false), ["}"], false)) : r2.push("".concat(Zb(o2), ": ").concat((t3 = o2, null == (n2 = i2) || "boolean" == typeof n2 || "" === n2 ? "" : "number" != typeof n2 || 0 === n2 || t3 in $v || t3.startsWith("--") ? String(n2).trim() : "".concat(n2, "px")), ";")));
          }
          return r2;
        };
        function ty(e3, t3, n2, r2) {
          return Jb(e3) ? [] : mb(e3) ? [".".concat(e3.styledComponentId)] : pb(e3) ? !pb(o2 = e3) || o2.prototype && o2.prototype.isReactComponent || !t3 ? [e3] : ty(e3(t3), t3, n2, r2) : e3 instanceof Qb ? n2 ? (e3.inject(n2, r2), [e3.getName(r2)]) : [e3] : vb(e3) ? ey(e3) : Array.isArray(e3) ? Array.prototype.concat.apply(zv, e3.map(function(e4) {
            return ty(e4, t3, n2, r2);
          })) : [e3.toString()];
          var o2;
        }
        function ny(e3) {
          for (var t3 = 0; t3 < e3.length; t3 += 1) {
            var n2 = e3[t3];
            if (pb(n2) && !mb(n2))
              return false;
          }
          return true;
        }
        var ry = Qv(Bv), oy = function() {
          function e3(e4, t3, n2) {
            this.rules = e4, this.staticRulesId = "", this.isStatic = (void 0 === n2 || n2.isStatic) && ny(e4), this.componentId = t3, this.baseHash = _v(ry, t3), this.baseStyle = n2, zb.registerId(t3);
          }
          return e3.prototype.generateAndInjectStyles = function(e4, t3, n2) {
            var r2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e4, t3, n2) : "";
            if (this.isStatic && !n2.hash)
              if (this.staticRulesId && t3.hasNameForId(this.componentId, this.staticRulesId))
                r2 = gb(r2, this.staticRulesId);
              else {
                var o2 = hb(ty(this.rules, e4, t3, n2)), i2 = Xv(_v(this.baseHash, o2) >>> 0);
                if (!t3.hasNameForId(this.componentId, i2)) {
                  var a2 = n2(o2, ".".concat(i2), void 0, this.componentId);
                  t3.insertRules(this.componentId, i2, a2);
                }
                r2 = gb(r2, i2), this.staticRulesId = i2;
              }
            else {
              for (var s2 = _v(this.baseHash, n2.hash), l2 = "", c2 = 0; c2 < this.rules.length; c2++) {
                var u2 = this.rules[c2];
                if ("string" == typeof u2)
                  l2 += u2;
                else if (u2) {
                  var d2 = hb(ty(u2, e4, t3, n2));
                  s2 = _v(s2, d2 + c2), l2 += d2;
                }
              }
              if (l2) {
                var f2 = Xv(s2 >>> 0);
                t3.hasNameForId(this.componentId, f2) || t3.insertRules(this.componentId, f2, n2(l2, ".".concat(f2), void 0, this.componentId)), r2 = gb(r2, f2);
              }
            }
            return r2;
          }, e3;
        }(), iy = o().createContext(void 0);
        iy.Consumer;
        var ay = {};
        function sy(e3, n2, r2) {
          var i2 = mb(e3), a2 = e3, s2 = !Yv(e3), l2 = n2.attrs, c2 = void 0 === l2 ? zv : l2, u2 = n2.componentId, d2 = void 0 === u2 ? function(e4, t3) {
            var n3 = "string" != typeof e4 ? "sc" : Wv(e4);
            ay[n3] = (ay[n3] || 0) + 1;
            var r3 = "".concat(n3, "-").concat(function(e5) {
              return Xv(Qv(e5) >>> 0);
            }(Bv + n3 + ay[n3]));
            return t3 ? "".concat(t3, "-").concat(r3) : r3;
          }(n2.displayName, n2.parentComponentId) : u2, f2 = n2.displayName, p2 = void 0 === f2 ? function(e4) {
            return Yv(e4) ? "styled.".concat(e4) : "Styled(".concat(function(e5) {
              return e5.displayName || e5.name || "Component";
            }(e4), ")");
          }(e3) : f2, m2 = n2.displayName && n2.componentId ? "".concat(Wv(n2.displayName), "-").concat(n2.componentId) : n2.componentId || d2, g2 = i2 && a2.attrs ? a2.attrs.concat(c2).filter(Boolean) : c2, h2 = n2.shouldForwardProp;
          if (i2 && a2.shouldForwardProp) {
            var v2 = a2.shouldForwardProp;
            if (n2.shouldForwardProp) {
              var b2 = n2.shouldForwardProp;
              h2 = function(e4, t3) {
                return v2(e4, t3) && b2(e4, t3);
              };
            } else
              h2 = v2;
          }
          var y2 = new oy(r2, m2, i2 ? a2.componentStyle : void 0);
          function C2(e4, n3) {
            return function(e5, n4, r3) {
              var i3 = e5.attrs, a3 = e5.componentStyle, s3 = e5.defaultProps, l3 = e5.foldedComponentIds, c3 = e5.styledComponentId, u3 = e5.target, d3 = o().useContext(iy), f3 = Ub(), p3 = e5.shouldForwardProp || f3.shouldForwardProp, m3 = function(e6, t3, n5) {
                return void 0 === n5 && (n5 = Hv), e6.theme !== n5.theme && e6.theme || t3 || n5.theme;
              }(n4, d3, s3) || Hv, g3 = function(e6, t3, n5) {
                for (var r4, o2 = Nh(Nh({}, t3), { className: void 0, theme: n5 }), i4 = 0; i4 < e6.length; i4 += 1) {
                  var a4 = pb(r4 = e6[i4]) ? r4(o2) : r4;
                  for (var s4 in a4)
                    o2[s4] = "className" === s4 ? gb(o2[s4], a4[s4]) : "style" === s4 ? Nh(Nh({}, o2[s4]), a4[s4]) : a4[s4];
                }
                return t3.className && (o2.className = gb(o2.className, t3.className)), o2;
              }(i3, n4, m3), h3 = g3.as || u3, v3 = {};
              for (var b3 in g3)
                void 0 === g3[b3] || "$" === b3[0] || "as" === b3 || "theme" === b3 && g3.theme === m3 || ("forwardedAs" === b3 ? v3.as = g3.forwardedAs : p3 && !p3(b3, h3) || (v3[b3] = g3[b3]));
              var y3 = function(e6, t3) {
                var n5 = Ub();
                return e6.generateAndInjectStyles(t3, n5.styleSheet, n5.stylis);
              }(a3, g3), C3 = gb(l3, c3);
              return y3 && (C3 += " " + y3), g3.className && (C3 += " " + g3.className), v3[Yv(h3) && !Dv.has(h3) ? "class" : "className"] = C3, r3 && (v3.ref = r3), (0, t2.createElement)(h3, v3);
            }(w2, e4, n3);
          }
          C2.displayName = p2;
          var w2 = o().forwardRef(C2);
          return w2.attrs = g2, w2.componentStyle = y2, w2.displayName = p2, w2.shouldForwardProp = h2, w2.foldedComponentIds = i2 ? gb(a2.foldedComponentIds, a2.styledComponentId) : "", w2.styledComponentId = m2, w2.target = i2 ? a2.target : e3, Object.defineProperty(w2, "defaultProps", { get: function() {
            return this._foldedDefaultProps;
          }, set: function(e4) {
            this._foldedDefaultProps = i2 ? function(e5) {
              for (var t3 = [], n3 = 1; n3 < arguments.length; n3++)
                t3[n3 - 1] = arguments[n3];
              for (var r3 = 0, o2 = t3; r3 < o2.length; r3++)
                bb(e5, o2[r3], true);
              return e5;
            }({}, a2.defaultProps, e4) : e4;
          } }), yb(w2, function() {
            return ".".concat(w2.styledComponentId);
          }), s2 && fb(w2, e3, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), w2;
        }
        function ly(e3, t3) {
          for (var n2 = [e3[0]], r2 = 0, o2 = t3.length; r2 < o2; r2 += 1)
            n2.push(t3[r2], e3[r2 + 1]);
          return n2;
        }
        /* @__PURE__ */ new Set();
        var cy = function(e3) {
          return Object.assign(e3, { isCss: true });
        };
        function uy(e3) {
          for (var t3 = [], n2 = 1; n2 < arguments.length; n2++)
            t3[n2 - 1] = arguments[n2];
          if (pb(e3) || vb(e3))
            return cy(ty(ly(zv, Mh([e3], t3, true))));
          var r2 = e3;
          return 0 === t3.length && 1 === r2.length && "string" == typeof r2[0] ? ty(r2) : cy(ty(ly(r2, t3)));
        }
        function dy(e3, t3, n2) {
          if (void 0 === n2 && (n2 = Hv), !t3)
            throw Cb(1, t3);
          var r2 = function(r3) {
            for (var o2 = [], i2 = 1; i2 < arguments.length; i2++)
              o2[i2 - 1] = arguments[i2];
            return e3(t3, n2, uy.apply(void 0, Mh([r3], o2, false)));
          };
          return r2.attrs = function(r3) {
            return dy(e3, t3, Nh(Nh({}, n2), { attrs: Array.prototype.concat(n2.attrs, r3).filter(Boolean) }));
          }, r2.withConfig = function(r3) {
            return dy(e3, t3, Nh(Nh({}, n2), r3));
          }, r2;
        }
        var fy = function(e3) {
          return dy(sy, e3);
        }, py = fy;
        Dv.forEach(function(e3) {
          py[e3] = fy(e3);
        }), function() {
          function e3(e4, t3) {
            this.rules = e4, this.componentId = t3, this.isStatic = ny(e4), zb.registerId(this.componentId + 1);
          }
          e3.prototype.createStyles = function(e4, t3, n2, r2) {
            var o2 = r2(hb(ty(this.rules, t3, n2, r2)), ""), i2 = this.componentId + e4;
            n2.insertRules(i2, i2, o2);
          }, e3.prototype.removeStyles = function(e4, t3) {
            t3.clearRules(this.componentId + e4);
          }, e3.prototype.renderStyles = function(e4, t3, n2, r2) {
            e4 > 2 && zb.registerId(this.componentId + e4), this.removeStyles(e4, n2), this.createStyles(e4, t3, n2, r2);
          };
        }(), function() {
          function e3() {
            var e4 = this;
            this._emitSheetCSS = function() {
              var t3 = e4.instance.toString();
              if (!t3)
                return "";
              var n2 = Nb(), r2 = hb([n2 && 'nonce="'.concat(n2, '"'), "".concat(Nv, '="true"'), "".concat(Rv, '="').concat(Bv, '"')].filter(Boolean), " ");
              return "<style ".concat(r2, ">").concat(t3, "</style>");
            }, this.getStyleTags = function() {
              if (e4.sealed)
                throw Cb(2);
              return e4._emitSheetCSS();
            }, this.getStyleElement = function() {
              var t3;
              if (e4.sealed)
                throw Cb(2);
              var n2 = e4.instance.toString();
              if (!n2)
                return [];
              var r2 = ((t3 = {})[Nv] = "", t3[Rv] = Bv, t3.dangerouslySetInnerHTML = { __html: n2 }, t3), i2 = Nb();
              return i2 && (r2.nonce = i2), [o().createElement("style", Nh({}, r2, { key: "sc-0-0" }))];
            }, this.seal = function() {
              e4.sealed = true;
            }, this.instance = new zb({ isServer: true }), this.sealed = false;
          }
          e3.prototype.collectStyles = function(e4) {
            if (this.sealed)
              throw Cb(2);
            return o().createElement(_b, { sheet: this.instance }, e4);
          }, e3.prototype.interleaveWithNodeStream = function(e4) {
            throw Cb(3);
          };
        }(), "__sc-".concat(Nv, "__");
        const my = () => (0, e2.jsxs)("svg", { width: "145", height: "151", viewBox: "0 0 145 151", fill: "none", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", children: [(0, e2.jsx)("rect", { x: "0.5", width: "144", height: "151", fill: "url(#pattern0_842_54)" }), (0, e2.jsx)("rect", { x: "0.5", width: "144", height: "151", fill: "url(#pattern1_842_54)" }), (0, e2.jsxs)("defs", { children: [(0, e2.jsx)("pattern", { id: "pattern0_842_54", patternContentUnits: "objectBoundingBox", width: "1", height: "1", children: (0, e2.jsx)("use", { xlinkHref: "#image0_842_54", transform: "matrix(0.00291281 0 0 0.00277778 -0.0243056 0)" }) }), (0, e2.jsx)("pattern", { id: "pattern1_842_54", patternContentUnits: "objectBoundingBox", width: "1", height: "1", children: (0, e2.jsx)("use", { xlinkHref: "#image0_842_54", transform: "matrix(0.00291281 0 0 0.00277778 -0.0243056 0)" }) }), (0, e2.jsx)("image", { id: "image0_842_54", width: "360", height: "360", xlinkHref: "data:image/png;base64,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" })] })] }), gy = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" } }] }, name: "caret-up", theme: "outlined" };
        var hy = function(e3, n2) {
          return t2.createElement(Yi, qe({}, e3, { ref: n2, icon: gy }));
        };
        const vy = t2.forwardRef(hy), by = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, name: "caret-down", theme: "outlined" };
        var yy = function(e3, n2) {
          return t2.createElement(Yi, qe({}, e3, { ref: n2, icon: by }));
        };
        const Cy = t2.forwardRef(yy), wy = () => (0, e2.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, e2.jsx)("path", { d: "M6 13.5L9 11.2125L12 13.5L10.875 9.7875L13.875 7.65H10.2L9 3.75L7.8 7.65H4.125L7.125 9.7875L6 13.5ZM9 16.5C7.9625 16.5 6.9875 16.3031 6.075 15.9094C5.1625 15.5156 4.36875 14.9813 3.69375 14.3063C3.01875 13.6313 2.48438 12.8375 2.09063 11.925C1.69687 11.0125 1.5 10.0375 1.5 9C1.5 7.9625 1.69687 6.9875 2.09063 6.075C2.48438 5.1625 3.01875 4.36875 3.69375 3.69375C4.36875 3.01875 5.1625 2.48438 6.075 2.09063C6.9875 1.69687 7.9625 1.5 9 1.5C10.0375 1.5 11.0125 1.69687 11.925 2.09063C12.8375 2.48438 13.6313 3.01875 14.3063 3.69375C14.9813 4.36875 15.5156 5.1625 15.9094 6.075C16.3031 6.9875 16.5 7.9625 16.5 9C16.5 10.0375 16.3031 11.0125 15.9094 11.925C15.5156 12.8375 14.9813 13.6313 14.3063 14.3063C13.6313 14.9813 12.8375 15.5156 11.925 15.9094C11.0125 16.3031 10.0375 16.5 9 16.5Z", fill: "#1D1B20" }) }), xy = py(bl)`
  width: 180px;
  border-radius: 70px;
  border: none;
  background-color: ${(e3) => "dark" === e3.$theme ? "#000000 !important" : "transparent !important"};
  color: #fff;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  box-shadow: none;
  transition: background-color 0.8s ease;
  overflow: hidden;
  padding: 25px 10px !important;

  .avatar {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .anticon-caret-down, .anticon-caret-up {
    color: lightgray !important;
  }

  &:hover {
    background-color: #acacac !important;
    color: #fff !important;
  }

  > svg:first-of-type {
    width: 50px;
    height: 60px;
  }
`, Sy = py(Xg)`
  background-color: #F9F9F9 !important;
  width: 270px;
  max-width: 100%;
  border-radius: 25px !important;

  span {
    color: #545454 !important;
  }

  .ant-dropdown-menu-item {
    padding: 0 15px !important;
    font-family: 'Lexend';
    font-size: 16px;
    font-weight: 400;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #F9F9F9 !important;
      color: #000;
    }

    .basic-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 10px;
      span {
        font-family: 'Lexend';
        font-size: 16px;
        font-weight: 400;
      }

      .basic-info-details {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100;
  }
`, Ay = "https://app.plurality.network", Ey = ({ theme: n2, userData: r2, handleClick: o2 }) => {
          const [i2, a2] = (0, t2.useState)(false), { profileIcon: s2, username: l2, ratings: c2 } = r2, u2 = (e3) => {
            const t3 = document.getElementById("iframe");
            if (t3?.contentWindow) {
              const n3 = { id: `msg-${Date.now()}`, type: "goToStep", step: e3 };
              t3.contentWindow.postMessage(n3, Ay);
            }
            o2();
          }, d2 = (0, e2.jsxs)(Sy, { $theme: n2, children: [(0, e2.jsx)(Xg.Item, { children: (0, e2.jsxs)("div", { className: "basic-info", children: [(0, e2.jsx)("div", { className: "basic-info-details", children: (0, e2.jsx)("span", { children: l2 }) }), (0, e2.jsx)("div", { className: "stars", children: Array.from({ length: c2 || 0 }, (t3, n3) => (0, e2.jsx)(wy, {}, n3)) })] }) }, "1"), (0, e2.jsx)("hr", {}), (0, e2.jsx)(Xg.Item, { style: { marginTop: "10px" }, onClick: () => u2("profile"), children: (0, e2.jsx)("span", { children: "Profile" }) }, "2"), (0, e2.jsx)(Xg.Item, { style: { marginTop: "10px" }, onClick: () => u2("wallet"), children: (0, e2.jsx)("span", { children: "Wallet" }) }, "3"), (0, e2.jsx)(Xg.Item, { style: { marginTop: "10px" }, onClick: () => u2("socialConnect"), children: (0, e2.jsx)("span", { children: "Connect Platforms" }) }, "4"), (0, e2.jsx)(Xg.Item, { style: { marginTop: "10px", marginBottom: "10px" }, onClick: () => u2("profileSettings"), children: (0, e2.jsx)("span", { children: "Update Profile" }) }, "5"), (0, e2.jsx)("hr", {}), (0, e2.jsx)(Xg.Item, { style: { marginTop: "10px", marginBottom: "10px" }, onClick: () => {
            const e3 = document.getElementById("iframe"), t3 = localStorage.getItem("metamask") ? "metamask" : "lit";
            if (e3?.contentWindow) {
              const n3 = { id: `msg-${Date.now()}`, type: "logoutRequest", platform: t3 };
              e3.contentWindow.postMessage(n3, Ay);
            }
          }, children: (0, e2.jsx)("span", { children: "Logout" }) }, "6")] });
          return (0, e2.jsxs)("div", { className: "content-wrapper", children: [(0, e2.jsx)("div", { className: "vertical-line" }), (0, e2.jsx)($h, { overlay: d2, trigger: ["hover"], onVisibleChange: () => {
            a2(!i2);
          }, visible: i2, overlayClassName: "custom-dropdown", children: (0, e2.jsxs)(xy, { $isOpen: i2, $theme: n2, children: [(0, e2.jsx)("div", { className: "avatar", children: s2 ? (0, e2.jsx)("img", { src: s2, alt: "profile-icon" }) : (0, e2.jsx)(my, {}) }), i2 ? (0, e2.jsx)(vy, {}) : (0, e2.jsx)(Cy, {})] }) })] });
        }, ky = py(bl)`
  min-width: ${(e3) => e3.minWidth || "180px"};
  height: ${(e3) => e3.height || "40px"};
  border-radius: ${(e3) => e3.borderRadius || "10px"};
  border: none;
  font-size: ${(e3) => e3.fontSize || "14px"};
  font-family: ${(e3) => e3.fontFamily || "Lexend, sans-serif"};;
  background-color: ${(e3) => e3.backgroundColor || "#ACACAC"};
  color: ${(e3) => e3.color || "#fff"};
  margin-top: ${(e3) => e3.marginTop || "0.5rem"};
  transition: background-color 0.8s ease;
  
  &:hover {
    background-color: ${(e3) => e3.hoverBackgroundColor || "#000000"} !important;
    color: ${(e3) => e3.hoverTextColor || "#fff"} !important;
  }
`, Oy = ({ text: t3, handleClick: n2, customizations: r2 }) => (0, e2.jsx)(ky, { type: "default", onClick: n2, ...r2, children: t3 }), Py = o().createContext({});
        var Iy = t2.forwardRef(function(e3, n2) {
          var r2 = e3.prefixCls, o2 = e3.style, i2 = e3.className, a2 = e3.duration, s2 = void 0 === a2 ? 4.5 : a2, l2 = e3.showProgress, c2 = e3.pauseOnHover, u2 = void 0 === c2 || c2, d2 = e3.eventKey, f2 = e3.content, p2 = e3.closable, m2 = e3.closeIcon, g2 = void 0 === m2 ? "x" : m2, h2 = e3.props, v2 = e3.onClick, b2 = e3.onNoticeClose, y2 = e3.times, C2 = e3.hovering, w2 = N(t2.useState(false), 2), x2 = w2[0], S2 = w2[1], A2 = N(t2.useState(0), 2), E2 = A2[0], k2 = A2[1], P2 = N(t2.useState(0), 2), j2 = P2[0], $2 = P2[1], M2 = C2 || x2, R2 = s2 > 0 && l2, B2 = function() {
            b2(d2);
          };
          t2.useEffect(function() {
            if (!M2 && s2 > 0) {
              var e4 = Date.now() - j2, t3 = setTimeout(function() {
                B2();
              }, 1e3 * s2 - j2);
              return function() {
                u2 && clearTimeout(t3), $2(Date.now() - e4);
              };
            }
          }, [s2, M2, y2]), t2.useEffect(function() {
            if (!M2 && R2 && (u2 || 0 === j2)) {
              var e4, t3 = performance.now();
              return function n3() {
                cancelAnimationFrame(e4), e4 = requestAnimationFrame(function(e5) {
                  var r3 = e5 + j2 - t3, o3 = Math.min(r3 / (1e3 * s2), 1);
                  k2(100 * o3), o3 < 1 && n3();
                });
              }(), function() {
                u2 && cancelAnimationFrame(e4);
              };
            }
          }, [s2, j2, M2, R2, y2]);
          var T2 = t2.useMemo(function() {
            return "object" === O(p2) && null !== p2 ? p2 : p2 ? { closeIcon: g2 } : {};
          }, [p2, g2]), F2 = Kl(T2, true), L2 = 100 - (!E2 || E2 < 0 ? 0 : E2 > 100 ? 100 : E2), z2 = "".concat(r2, "-notice");
          return t2.createElement("div", qe({}, h2, { ref: n2, className: br()(z2, i2, I({}, "".concat(z2, "-closable"), p2)), style: o2, onMouseEnter: function(e4) {
            var t3;
            S2(true), null == h2 || null === (t3 = h2.onMouseEnter) || void 0 === t3 || t3.call(h2, e4);
          }, onMouseLeave: function(e4) {
            var t3;
            S2(false), null == h2 || null === (t3 = h2.onMouseLeave) || void 0 === t3 || t3.call(h2, e4);
          }, onClick: v2 }), t2.createElement("div", { className: "".concat(z2, "-content") }, f2), p2 && t2.createElement("a", qe({ tabIndex: 0, className: "".concat(z2, "-close"), onKeyDown: function(e4) {
            "Enter" !== e4.key && "Enter" !== e4.code && e4.keyCode !== ql.ENTER || B2();
          }, "aria-label": "Close" }, F2, { onClick: function(e4) {
            e4.preventDefault(), e4.stopPropagation(), B2();
          } }), T2.closeIcon), R2 && t2.createElement("progress", { className: "".concat(z2, "-progress"), max: "100", value: L2 }, L2 + "%"));
        });
        const jy = Iy;
        var $y = o().createContext({});
        const Ny = function(e3) {
          var t3 = e3.children, n2 = e3.classNames;
          return o().createElement($y.Provider, { value: { classNames: n2 } }, t3);
        };
        var My = ["className", "style", "classNames", "styles"];
        const Ry = function(e3) {
          var n2, r2, i2, a2, s2, l2 = e3.configList, c2 = e3.placement, u2 = e3.prefixCls, d2 = e3.className, f2 = e3.style, p2 = e3.motion, m2 = e3.onAllNoticeRemoved, g2 = e3.onNoticeClose, h2 = e3.stack, v2 = (0, t2.useContext)($y).classNames, b2 = (0, t2.useRef)({}), y2 = N((0, t2.useState)(null), 2), C2 = y2[0], w2 = y2[1], S2 = N((0, t2.useState)([]), 2), A2 = S2[0], E2 = S2[1], k2 = l2.map(function(e4) {
            return { config: e4, key: String(e4.key) };
          }), P2 = N((s2 = { offset: 8, threshold: 3, gap: 16 }, (n2 = h2) && "object" === O(n2) && (s2.offset = null !== (r2 = n2.offset) && void 0 !== r2 ? r2 : 8, s2.threshold = null !== (i2 = n2.threshold) && void 0 !== i2 ? i2 : 3, s2.gap = null !== (a2 = n2.gap) && void 0 !== a2 ? a2 : 16), [!!n2, s2]), 2), j2 = P2[0], $2 = P2[1], M2 = $2.offset, B2 = $2.threshold, T2 = $2.gap, F2 = j2 && (A2.length > 0 || k2.length <= B2), L2 = "function" == typeof p2 ? p2(c2) : p2;
          return (0, t2.useEffect)(function() {
            j2 && A2.length > 1 && E2(function(e4) {
              return e4.filter(function(e5) {
                return k2.some(function(t3) {
                  var n3 = t3.key;
                  return e5 === n3;
                });
              });
            });
          }, [A2, k2, j2]), (0, t2.useEffect)(function() {
            var e4, t3;
            j2 && b2.current[null === (e4 = k2[k2.length - 1]) || void 0 === e4 ? void 0 : e4.key] && w2(b2.current[null === (t3 = k2[k2.length - 1]) || void 0 === t3 ? void 0 : t3.key]);
          }, [k2, j2]), o().createElement(Wo, qe({ key: c2, className: br()(u2, "".concat(u2, "-").concat(c2), null == v2 ? void 0 : v2.list, d2, I(I({}, "".concat(u2, "-stack"), !!j2), "".concat(u2, "-stack-expanded"), F2)), style: f2, keys: k2, motionAppear: true }, L2, { onAllRemoved: function() {
            m2(c2);
          } }), function(e4, t3) {
            var n3 = e4.config, r3 = e4.className, i3 = e4.style, a3 = e4.index, s3 = n3, l3 = s3.key, d3 = s3.times, f3 = String(l3), p3 = n3, m3 = p3.className, h3 = p3.style, y3 = p3.classNames, w3 = p3.styles, S3 = Rr(p3, My), O2 = k2.findIndex(function(e5) {
              return e5.key === f3;
            }), P3 = {};
            if (j2) {
              var I2 = k2.length - 1 - (O2 > -1 ? O2 : a3 - 1), $3 = "top" === c2 || "bottom" === c2 ? "-50%" : "0";
              if (I2 > 0) {
                var N2, B3, L3;
                P3.height = F2 ? null === (N2 = b2.current[f3]) || void 0 === N2 ? void 0 : N2.offsetHeight : null == C2 ? void 0 : C2.offsetHeight;
                for (var z2 = 0, H2 = 0; H2 < I2; H2++) {
                  var D2;
                  z2 += (null === (D2 = b2.current[k2[k2.length - 1 - H2].key]) || void 0 === D2 ? void 0 : D2.offsetHeight) + T2;
                }
                var q2 = (F2 ? z2 : I2 * M2) * (c2.startsWith("top") ? 1 : -1), V2 = !F2 && null != C2 && C2.offsetWidth && null !== (B3 = b2.current[f3]) && void 0 !== B3 && B3.offsetWidth ? ((null == C2 ? void 0 : C2.offsetWidth) - 2 * M2 * (I2 < 3 ? I2 : 3)) / (null === (L3 = b2.current[f3]) || void 0 === L3 ? void 0 : L3.offsetWidth) : 1;
                P3.transform = "translate3d(".concat($3, ", ").concat(q2, "px, 0) scaleX(").concat(V2, ")");
              } else
                P3.transform = "translate3d(".concat($3, ", 0, 0)");
            }
            return o().createElement("div", { ref: t3, className: br()("".concat(u2, "-notice-wrapper"), r3, null == y3 ? void 0 : y3.wrapper), style: R(R(R({}, i3), P3), null == w3 ? void 0 : w3.wrapper), onMouseEnter: function() {
              return E2(function(e5) {
                return e5.includes(f3) ? e5 : [].concat(x(e5), [f3]);
              });
            }, onMouseLeave: function() {
              return E2(function(e5) {
                return e5.filter(function(e6) {
                  return e6 !== f3;
                });
              });
            } }, o().createElement(jy, qe({}, S3, { ref: function(e5) {
              O2 > -1 ? b2.current[f3] = e5 : delete b2.current[f3];
            }, prefixCls: u2, classNames: y3, styles: w3, className: br()(m3, null == v2 ? void 0 : v2.notice), style: h3, times: d3, key: l3, eventKey: l3, onNoticeClose: g2, hovering: j2 && A2.length > 0 })));
          });
        };
        var By = t2.forwardRef(function(e3, n2) {
          var r2 = e3.prefixCls, o2 = void 0 === r2 ? "rc-notification" : r2, i2 = e3.container, a2 = e3.motion, s2 = e3.maxCount, l2 = e3.className, c2 = e3.style, u2 = e3.onAllRemoved, d2 = e3.stack, f2 = e3.renderNotifications, p2 = N(t2.useState([]), 2), m2 = p2[0], g2 = p2[1], h2 = function(e4) {
            var t3, n3 = m2.find(function(t4) {
              return t4.key === e4;
            });
            null == n3 || null === (t3 = n3.onClose) || void 0 === t3 || t3.call(n3), g2(function(t4) {
              return t4.filter(function(t5) {
                return t5.key !== e4;
              });
            });
          };
          t2.useImperativeHandle(n2, function() {
            return { open: function(e4) {
              g2(function(t3) {
                var n3, r3 = x(t3), o3 = r3.findIndex(function(t4) {
                  return t4.key === e4.key;
                }), i3 = R({}, e4);
                return o3 >= 0 ? (i3.times = ((null === (n3 = t3[o3]) || void 0 === n3 ? void 0 : n3.times) || 0) + 1, r3[o3] = i3) : (i3.times = 0, r3.push(i3)), s2 > 0 && r3.length > s2 && (r3 = r3.slice(-s2)), r3;
              });
            }, close: function(e4) {
              h2(e4);
            }, destroy: function() {
              g2([]);
            } };
          });
          var v2 = N(t2.useState({}), 2), b2 = v2[0], y2 = v2[1];
          t2.useEffect(function() {
            var e4 = {};
            m2.forEach(function(t3) {
              var n3 = t3.placement, r3 = void 0 === n3 ? "topRight" : n3;
              r3 && (e4[r3] = e4[r3] || [], e4[r3].push(t3));
            }), Object.keys(b2).forEach(function(t3) {
              e4[t3] = e4[t3] || [];
            }), y2(e4);
          }, [m2]);
          var C2 = function(e4) {
            y2(function(t3) {
              var n3 = R({}, t3);
              return (n3[e4] || []).length || delete n3[e4], n3;
            });
          }, w2 = t2.useRef(false);
          if (t2.useEffect(function() {
            Object.keys(b2).length > 0 ? w2.current = true : w2.current && (null == u2 || u2(), w2.current = false);
          }, [b2]), !i2)
            return null;
          var S2 = Object.keys(b2);
          return (0, yr.createPortal)(t2.createElement(t2.Fragment, null, S2.map(function(e4) {
            var n3 = b2[e4], r3 = t2.createElement(Ry, { key: e4, configList: n3, placement: e4, prefixCls: o2, className: null == l2 ? void 0 : l2(e4), style: null == c2 ? void 0 : c2(e4), motion: a2, onNoticeClose: h2, onAllNoticeRemoved: C2, stack: d2 });
            return f2 ? f2(r3, { prefixCls: o2, key: e4 }) : r3;
          })), i2);
        });
        const Ty = By;
        var Fy = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"], Ly = function() {
          return document.body;
        }, zy = 0;
        const Hy = (e3) => {
          const { componentCls: t3, iconCls: n2, boxShadow: r2, colorText: o2, colorSuccess: i2, colorError: a2, colorWarning: s2, colorInfo: l2, fontSizeLG: c2, motionEaseInOutCirc: u2, motionDurationSlow: d2, marginXS: f2, paddingXS: p2, borderRadiusLG: m2, zIndexPopup: g2, contentPadding: h2, contentBg: v2 } = e3, b2 = `${t3}-notice`, y2 = new qt("MessageMoveIn", { "0%": { padding: 0, transform: "translateY(-100%)", opacity: 0 }, "100%": { padding: p2, transform: "translateY(0)", opacity: 1 } }), C2 = new qt("MessageMoveOut", { "0%": { maxHeight: e3.height, padding: p2, opacity: 1 }, "100%": { maxHeight: 0, padding: 0, opacity: 0 } }), w2 = { padding: p2, textAlign: "center", [`${t3}-custom-content`]: { display: "flex", alignItems: "center" }, [`${t3}-custom-content > ${n2}`]: { marginInlineEnd: f2, fontSize: c2 }, [`${b2}-content`]: { display: "inline-block", padding: h2, background: v2, borderRadius: m2, boxShadow: r2, pointerEvents: "all" }, [`${t3}-success > ${n2}`]: { color: i2 }, [`${t3}-error > ${n2}`]: { color: a2 }, [`${t3}-warning > ${n2}`]: { color: s2 }, [`${t3}-info > ${n2},
      ${t3}-loading > ${n2}`]: { color: l2 } };
          return [{ [t3]: Object.assign(Object.assign({}, oi(e3)), { color: o2, position: "fixed", top: f2, width: "100%", pointerEvents: "none", zIndex: g2, [`${t3}-move-up`]: { animationFillMode: "forwards" }, [`
        ${t3}-move-up-appear,
        ${t3}-move-up-enter
      `]: { animationName: y2, animationDuration: d2, animationPlayState: "paused", animationTimingFunction: u2 }, [`
        ${t3}-move-up-appear${t3}-move-up-appear-active,
        ${t3}-move-up-enter${t3}-move-up-enter-active
      `]: { animationPlayState: "running" }, [`${t3}-move-up-leave`]: { animationName: C2, animationDuration: d2, animationPlayState: "paused", animationTimingFunction: u2 }, [`${t3}-move-up-leave${t3}-move-up-leave-active`]: { animationPlayState: "running" }, "&-rtl": { direction: "rtl", span: { direction: "rtl" } } }) }, { [t3]: { [`${b2}-wrapper`]: Object.assign({}, w2) } }, { [`${t3}-notice-pure-panel`]: Object.assign(Object.assign({}, w2), { padding: 0, textAlign: "start" }) }];
        }, Dy = qa("Message", (e3) => {
          const t3 = Ba(e3, { height: 150 });
          return [Hy(t3)];
        }, (e3) => ({ zIndexPopup: e3.zIndexPopupBase + 1e3 + 10, contentBg: e3.colorBgElevated, contentPadding: `${(e3.controlHeightLG - e3.fontSize * e3.lineHeight) / 2}px ${e3.paddingSM}px` }));
        const qy = { info: t2.createElement(la, null), success: t2.createElement(Ji, null), error: t2.createElement(na, null), warning: t2.createElement(ia, null), loading: t2.createElement(xs, null) }, Vy = (e3) => {
          let { prefixCls: n2, type: r2, icon: o2, children: i2 } = e3;
          return t2.createElement("div", { className: br()(`${n2}-custom-content`, `${n2}-${r2}`) }, o2 || qy[r2], t2.createElement("span", null, i2));
        };
        function Wy(e3) {
          let t3;
          const n2 = new Promise((n3) => {
            t3 = e3(() => {
              n3(true);
            });
          }), r2 = () => {
            null == t3 || t3();
          };
          return r2.then = (e4, t4) => n2.then(e4, t4), r2.promise = n2, r2;
        }
        const Ky = 3, Gy = (e3) => {
          let { children: n2, prefixCls: r2 } = e3;
          const o2 = Su(r2), [i2, a2, s2] = Dy(r2, o2);
          return i2(t2.createElement(Ny, { classNames: { list: br()(a2, s2, o2) } }, n2));
        }, Xy = (e3, n2) => {
          let { prefixCls: r2, key: o2 } = n2;
          return t2.createElement(Gy, { prefixCls: r2, key: o2 }, e3);
        }, Uy = t2.forwardRef((e3, n2) => {
          const { top: r2, prefixCls: o2, getContainer: i2, maxCount: a2, duration: s2 = Ky, rtl: l2, transitionName: c2, onAllRemoved: u2 } = e3, { getPrefixCls: d2, getPopupContainer: f2, message: p2, direction: m2 } = t2.useContext(E), g2 = o2 || d2("message"), h2 = t2.createElement("span", { className: `${g2}-close-x` }, t2.createElement(Ol, { className: `${g2}-close-icon` })), [v2, b2] = function() {
            var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n3 = e4.getContainer, r3 = void 0 === n3 ? Ly : n3, o3 = e4.motion, i3 = e4.prefixCls, a3 = e4.maxCount, s3 = e4.className, l3 = e4.style, c3 = e4.onAllRemoved, u3 = e4.stack, d3 = e4.renderNotifications, f3 = Rr(e4, Fy), p3 = N(t2.useState(), 2), m3 = p3[0], g3 = p3[1], h3 = t2.useRef(), v3 = t2.createElement(Ty, { container: m3, ref: h3, prefixCls: i3, motion: o3, maxCount: a3, className: s3, style: l3, onAllRemoved: c3, stack: u3, renderNotifications: d3 }), b3 = N(t2.useState([]), 2), y2 = b3[0], C2 = b3[1], w2 = t2.useMemo(function() {
              return { open: function(e5) {
                var t3 = function() {
                  for (var e6 = {}, t4 = arguments.length, n4 = new Array(t4), r4 = 0; r4 < t4; r4++)
                    n4[r4] = arguments[r4];
                  return n4.forEach(function(t5) {
                    t5 && Object.keys(t5).forEach(function(n5) {
                      var r5 = t5[n5];
                      void 0 !== r5 && (e6[n5] = r5);
                    });
                  }), e6;
                }(f3, e5);
                null !== t3.key && void 0 !== t3.key || (t3.key = "rc-notification-".concat(zy), zy += 1), C2(function(e6) {
                  return [].concat(x(e6), [{ type: "open", config: t3 }]);
                });
              }, close: function(e5) {
                C2(function(t3) {
                  return [].concat(x(t3), [{ type: "close", key: e5 }]);
                });
              }, destroy: function() {
                C2(function(e5) {
                  return [].concat(x(e5), [{ type: "destroy" }]);
                });
              } };
            }, []);
            return t2.useEffect(function() {
              g3(r3());
            }), t2.useEffect(function() {
              h3.current && y2.length && (y2.forEach(function(e5) {
                switch (e5.type) {
                  case "open":
                    h3.current.open(e5.config);
                    break;
                  case "close":
                    h3.current.close(e5.key);
                    break;
                  case "destroy":
                    h3.current.destroy();
                }
              }), C2(function(e5) {
                return e5.filter(function(e6) {
                  return !y2.includes(e6);
                });
              }));
            }, [y2]), [w2, v3];
          }({ prefixCls: g2, style: () => ({ left: "50%", transform: "translateX(-50%)", top: null != r2 ? r2 : 8 }), className: () => br()({ [`${g2}-rtl`]: null != l2 ? l2 : "rtl" === m2 }), motion: () => function(e4, t3) {
            return { motionName: null != t3 ? t3 : `${e4}-move-up` };
          }(g2, c2), closable: false, closeIcon: h2, duration: s2, getContainer: () => (null == i2 ? void 0 : i2()) || (null == f2 ? void 0 : f2()) || document.body, maxCount: a2, onAllRemoved: u2, renderNotifications: Xy });
          return t2.useImperativeHandle(n2, () => Object.assign(Object.assign({}, v2), { prefixCls: g2, message: p2 })), b2;
        });
        let _y = 0;
        function Qy(e3) {
          const n2 = t2.useRef(null), r2 = (Jt(), t2.useMemo(() => {
            const e4 = (e5) => {
              var t3;
              null === (t3 = n2.current) || void 0 === t3 || t3.close(e5);
            }, r3 = (r4) => {
              if (!n2.current) {
                const e5 = () => {
                };
                return e5.then = () => {
                }, e5;
              }
              const { open: o3, prefixCls: i2, message: a2 } = n2.current, s2 = `${i2}-notice`, { content: l2, icon: c2, type: u2, key: d2, className: f2, style: p2, onClose: m2 } = r4, g2 = function(e5, t3) {
                var n3 = {};
                for (var r5 in e5)
                  Object.prototype.hasOwnProperty.call(e5, r5) && t3.indexOf(r5) < 0 && (n3[r5] = e5[r5]);
                if (null != e5 && "function" == typeof Object.getOwnPropertySymbols) {
                  var o4 = 0;
                  for (r5 = Object.getOwnPropertySymbols(e5); o4 < r5.length; o4++)
                    t3.indexOf(r5[o4]) < 0 && Object.prototype.propertyIsEnumerable.call(e5, r5[o4]) && (n3[r5[o4]] = e5[r5[o4]]);
                }
                return n3;
              }(r4, ["content", "icon", "type", "key", "className", "style", "onClose"]);
              let h2 = d2;
              return null == h2 && (_y += 1, h2 = `antd-message-${_y}`), Wy((n3) => (o3(Object.assign(Object.assign({}, g2), { key: h2, content: t2.createElement(Vy, { prefixCls: i2, type: u2, icon: c2 }, l2), placement: "top", className: br()(u2 && `${s2}-${u2}`, f2, null == a2 ? void 0 : a2.className), style: Object.assign(Object.assign({}, null == a2 ? void 0 : a2.style), p2), onClose: () => {
                null == m2 || m2(), n3();
              } })), () => {
                e4(h2);
              }));
            }, o2 = { open: r3, destroy: (t3) => {
              var r4;
              void 0 !== t3 ? e4(t3) : null === (r4 = n2.current) || void 0 === r4 || r4.destroy();
            } };
            return ["info", "success", "warning", "error", "loading"].forEach((e5) => {
              o2[e5] = (t3, n3, o3) => {
                let i2, a2, s2;
                i2 = t3 && "object" == typeof t3 && "content" in t3 ? t3 : { content: t3 }, "function" == typeof n3 ? s2 = n3 : (a2 = n3, s2 = o3);
                const l2 = Object.assign(Object.assign({ onClose: s2, duration: a2 }, i2), { type: e5 });
                return r3(l2);
              };
            }), o2;
          }, []));
          return [r2, t2.createElement(Uy, Object.assign({ key: "message-holder" }, e3, { ref: n2 }))];
        }
        let Yy = null, Zy = (e3) => e3(), Jy = [], eC = {};
        function tC() {
          const { getContainer: e3, duration: t3, rtl: n2, maxCount: r2, top: o2 } = eC, i2 = (null == e3 ? void 0 : e3()) || document.body;
          return { getContainer: () => i2, duration: t3, rtl: n2, maxCount: r2, top: o2 };
        }
        const nC = o().forwardRef((e3, n2) => {
          const { messageConfig: r2, sync: i2 } = e3, { getPrefixCls: a2 } = (0, t2.useContext)(E), s2 = eC.prefixCls || a2("message"), l2 = (0, t2.useContext)(Py), [c2, u2] = Qy(Object.assign(Object.assign(Object.assign({}, r2), { prefixCls: s2 }), l2.message));
          return o().useImperativeHandle(n2, () => {
            const e4 = Object.assign({}, c2);
            return Object.keys(e4).forEach((t3) => {
              e4[t3] = function() {
                return i2(), c2[t3].apply(c2, arguments);
              };
            }), { instance: e4, sync: i2 };
          }), u2;
        }), rC = o().forwardRef((e3, t3) => {
          const [n2, r2] = o().useState(tC), i2 = () => {
            r2(tC);
          };
          o().useEffect(i2, []);
          const a2 = hi(), s2 = a2.getRootPrefixCls(), l2 = a2.getIconPrefixCls(), c2 = a2.getTheme(), u2 = o().createElement(nC, { ref: t3, sync: i2, messageConfig: n2 });
          return o().createElement(yi, { prefixCls: s2, iconPrefixCls: l2, theme: c2 }, a2.holderRender ? a2.holderRender(u2) : u2);
        });
        function oC() {
          if (!Yy) {
            const e3 = document.createDocumentFragment(), t3 = { fragment: e3 };
            return Yy = t3, void Zy(() => {
              Bi()(o().createElement(rC, { ref: (e4) => {
                const { instance: n2, sync: r2 } = e4 || {};
                Promise.resolve().then(() => {
                  !t3.instance && n2 && (t3.instance = n2, t3.sync = r2, oC());
                });
              } }), e3);
            });
          }
          Yy.instance && (Jy.forEach((e3) => {
            const { type: t3, skipped: n2 } = e3;
            if (!n2)
              switch (t3) {
                case "open":
                  Zy(() => {
                    const t4 = Yy.instance.open(Object.assign(Object.assign({}, eC), e3.config));
                    null == t4 || t4.then(e3.resolve), e3.setCloseFn(t4);
                  });
                  break;
                case "destroy":
                  Zy(() => {
                    null == Yy || Yy.instance.destroy(e3.key);
                  });
                  break;
                default:
                  Zy(() => {
                    var n3;
                    const r2 = (n3 = Yy.instance)[t3].apply(n3, x(e3.args));
                    null == r2 || r2.then(e3.resolve), e3.setCloseFn(r2);
                  });
              }
          }), Jy = []);
        }
        const iC = { open: function(e3) {
          const t3 = Wy((t4) => {
            let n2;
            const r2 = { type: "open", config: e3, resolve: t4, setCloseFn: (e4) => {
              n2 = e4;
            } };
            return Jy.push(r2), () => {
              n2 ? Zy(() => {
                n2();
              }) : r2.skipped = true;
            };
          });
          return oC(), t3;
        }, destroy: (e3) => {
          Jy.push({ type: "destroy", key: e3 }), oC();
        }, config: function(e3) {
          eC = Object.assign(Object.assign({}, eC), e3), Zy(() => {
            var e4;
            null === (e4 = null == Yy ? void 0 : Yy.sync) || void 0 === e4 || e4.call(Yy);
          });
        }, useMessage: function(e3) {
          return Qy(e3);
        }, _InternalPanelDoNotUseOrYouWillBeFired: (e3) => {
          const { prefixCls: n2, className: r2, type: o2, icon: i2, content: a2 } = e3, s2 = function(e4, t3) {
            var n3 = {};
            for (var r3 in e4)
              Object.prototype.hasOwnProperty.call(e4, r3) && t3.indexOf(r3) < 0 && (n3[r3] = e4[r3]);
            if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
              var o3 = 0;
              for (r3 = Object.getOwnPropertySymbols(e4); o3 < r3.length; o3++)
                t3.indexOf(r3[o3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, r3[o3]) && (n3[r3[o3]] = e4[r3[o3]]);
            }
            return n3;
          }(e3, ["prefixCls", "className", "type", "icon", "content"]), { getPrefixCls: l2 } = t2.useContext(E), c2 = n2 || l2("message"), u2 = Su(c2), [d2, f2, p2] = Dy(c2, u2);
          return d2(t2.createElement(jy, Object.assign({}, s2, { prefixCls: c2, className: br()(r2, f2, `${c2}-notice-pure-panel`, p2, u2), eventKey: "pure", duration: null, content: t2.createElement(Vy, { prefixCls: c2, type: o2, icon: i2 }, a2) })));
        } };
        ["success", "info", "warning", "error", "loading"].forEach((e3) => {
          iC[e3] = function() {
            for (var t3 = arguments.length, n2 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n2[r2] = arguments[r2];
            return function(e4, t4) {
              hi();
              const n3 = Wy((n4) => {
                let r3;
                const o2 = { type: e4, args: t4, resolve: n4, setCloseFn: (e5) => {
                  r3 = e5;
                } };
                return Jy.push(o2), () => {
                  r3 ? Zy(() => {
                    r3();
                  }) : o2.skipped = true;
                };
              });
              return oC(), n3;
            }(e3, n2);
          };
        });
        const aC = iC, sC = ["profile", "socialConnect", "wallet", "profileSettings"], lC = "https://app.plurality.network", cC = false;
        class uC extends t2.Component {
          static instance = null;
          constructor(e3) {
            super(e3), uC.instance = this, this.state = { iframeStyle: { width: "100%", height: 0, border: "none", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", background: "transparent" }, isOpen: false, showMask: false, isDisabled: false, isMetamaskConnected: false, isLitConnected: false, userData: { username: "", profileIcon: "", ratings: 0, scores: [], consent: false } };
          }
          getBaseUrl() {
            return this.props.options.clientId ? `${lC}/?client_id=${this.props.options.clientId}` : lC;
          }
          static openSocialConnectPopup = () => {
            this.instance && this.instance.openSocialConnectPopup();
          };
          openSocialConnectPopup = () => {
            const e3 = this.getBaseUrl() || "*";
            this.setState({ iframeStyle: { ...this.state.iframeStyle, width: "100%", height: 600 }, isOpen: true, showMask: true, isDisabled: cC });
            const t3 = document.getElementById("iframe");
            t3?.contentWindow && t3.contentWindow.postMessage({ data: "refresh" }, e3);
          };
          openInvisiblePopup = () => {
            this.setState({ iframeStyle: { ...this.state.iframeStyle, width: 0, height: 0 }, isOpen: true, isDisabled: cC }), this.performAsyncTasks();
          };
          closeSocialConnectPopup = () => {
            this.setState({ iframeStyle: { ...this.state.iframeStyle, width: 0, height: 0 }, isOpen: false, isDisabled: cC });
          };
          static checkLitConnection = () => {
            const e3 = localStorage.getItem("lit") || "false";
            return !!JSON.parse(e3) || (alert("Connect Profile first"), false);
          };
          static checkConnection = () => {
            const e3 = localStorage.getItem("lit") || "false";
            return !JSON.parse(e3) || (alert("Profile already connected!"), false);
          };
          static getAllAccounts = async (e3 = "", t3 = "") => {
            if (this.checkLitConnection())
              return Yd.sendRequest("getAllAccounts");
          };
          static getConnectedAccount = async (e3 = "", t3 = "") => {
            if (this.checkLitConnection())
              return await Yd.sendRequest("getConnectedAccount");
          };
          static getBalance = (e3 = "", t3 = "") => {
            if (this.checkLitConnection())
              return Yd.sendRequest("getBalance");
          };
          static getMessageSignature = (e3) => {
            if (this.checkLitConnection())
              return this.instance && this.instance.openSocialConnectPopup(), Yd.sendRequest("getMessageSignature", e3);
          };
          static verifyMessageSignature = (e3, t3) => {
            if (this.checkLitConnection())
              return Yd.sendRequest("verifyMessageSignature", e3, t3);
          };
          static sendTransaction = (e3, t3 = "", n2 = "") => {
            if (this.checkLitConnection())
              return this.instance && this.openSocialConnectPopup(), Yd.sendRequest("sendTransaction", e3, t3, n2);
          };
          static getBlockNumber = (e3 = "", t3 = "") => {
            if (this.checkLitConnection())
              return Yd.sendRequest("getBlockNumber");
          };
          static getTransactionCount = (e3, t3 = "", n2 = "") => {
            if (this.checkLitConnection())
              return Yd.sendRequest("getTransactionCount", e3, t3, n2);
          };
          static readFromContract = (e3, t3, n2, r2, o2 = "", i2 = "") => {
            if (this.checkLitConnection())
              return Yd.sendRequest("readFromContract", e3, t3, n2, r2, o2, i2);
          };
          static writeToContract = (e3, t3, n2, r2, o2 = "", i2 = "", a2) => {
            if (this.checkLitConnection())
              return this.instance && this.instance.openSocialConnectPopup(), Yd.sendRequest("writeToContract", e3, t3, n2, r2, o2, i2, a2);
          };
          static getLoginInfo = () => {
            if (this.checkLitConnection())
              return Yd.sendRequest("getLoginInfo");
          };
          static setPublicData = (e3, t3) => {
            if (this.checkLitConnection())
              return Yd.sendRequest("setPublicData", e3, t3);
          };
          static getPublicData = (e3) => {
            if (this.checkLitConnection())
              return Yd.sendRequest("getPublicData", e3);
          };
          static setPrivateData = (e3, t3) => {
            if (this.checkLitConnection())
              return Yd.sendRequest("setPrivateData", e3, t3);
          };
          static getPrivateData = (e3) => {
            if (this.checkLitConnection())
              return Yd.sendRequest("getPrivateData", e3);
          };
          static updateConsentOption = () => {
            if (this.checkLitConnection())
              return this.instance && this.instance.openSocialConnectPopup(), Yd.sendRequest("updateConsentData");
          };
          static getSmartProfileData = () => {
            if (this.checkLitConnection())
              return Yd.sendRequest("getSmartProfile");
          };
          static getAppData = (e3) => {
            if (this.checkLitConnection())
              return Yd.sendRequest("getAppData", e3);
          };
          static setAppData = (e3, t3) => {
            if (this.checkLitConnection())
              return Yd.sendRequest("setAppData", e3, t3);
          };
          static navigateTo = (e3) => {
            if (this.checkLitConnection()) {
              if (!sC.includes(e3))
                return alert("This page does not exist!"), false;
              Yd.sendRequest("navigateTo", e3), this.openSocialConnectPopup();
            }
          };
          static connectProfile = () => {
            this.checkConnection() && this.openSocialConnectPopup();
          };
          static disconnectProfile = () => {
            if (!this.checkLitConnection())
              return;
            const e3 = document.getElementById("iframe");
            if (e3?.contentWindow) {
              const t3 = { id: `msg-${Date.now()}`, type: "logoutRequest" };
              e3.contentWindow.postMessage(t3, lC);
            }
          };
          sleep = (e3) => new Promise((t3) => setTimeout(t3, e3));
          async performAsyncTasks() {
            await this.sleep(1), this.closeSocialConnectPopup();
          }
          componentDidMount() {
            this.openInvisiblePopup(), window.addEventListener("message", this.handleIframeMessage);
          }
          componentWillUnmount() {
            window.removeEventListener("message", this.handleIframeMessage);
          }
          handleIframeMessage = (e3) => {
            if (e3.origin !== lC)
              return;
            const { eventName: t3, data: n2 } = e3.data;
            if ("metamaskConnection" === t3)
              this.setState({ isMetamaskConnected: n2.isConnected }), n2?.isConnected ? localStorage.setItem("metamask", "true") : localStorage.setItem("metamask", "false");
            else if ("litConnection" === t3) {
              if (this.setState({ isLitConnected: n2.isConnected }), n2?.isConnected) {
                const e4 = { status: n2.isConnected, pluralityToken: n2.token };
                localStorage.setItem("lit", "true"), this.props.onDataReturned?.(e4);
              } else
                localStorage.setItem("lit", "false");
              if (n2?.logout) {
                const e4 = { logout: n2.logout, message: "User logged out successfully!" };
                this.props.onProfileLogout?.(e4);
              }
            } else
              "userData" === t3 ? (this.setState((e4) => ({ userData: { ...e4.userData, username: n2.name, profileIcon: n2.avatar, ratings: n2.rating, consent: n2.consent, ...n2.scores && { scores: n2.scores } } })), localStorage.setItem("userData", JSON.stringify(n2))) : "consentData" === t3 || "getMessageSignature" === t3 ? (n2?.consent || "getMessageSignature" === t3) && this.closeSocialConnectPopup() : "walletSendTransaction" === t3 && (console.log("Wallet tsx", n2), aC.error(n2));
            "smartProfileData" === t3 && window.localStorage.setItem("smartProfileData", n2.profileData);
          };
          render() {
            return (0, e2.jsxs)(e2.Fragment, { children: [this.props.options.headless ? null : this.state.isMetamaskConnected || this.state.isLitConnected ? (0, e2.jsx)(Ey, { theme: this.props.options.theme, userData: this.state.userData, handleClick: this.openSocialConnectPopup }) : (0, e2.jsx)(Oy, { customizations: this.props.customization, text: this.props.options.text || "Connect Profile", handleClick: this.openSocialConnectPopup }), (0, e2.jsx)(Qd, { closePlurality: this.closeSocialConnectPopup, isOpen: !this.state.isOpen, showMask: this.state.showMask, frameUrl: this.getBaseUrl(), style: this.state.iframeStyle })] });
          }
        }
        const dC = uC;
      })(), module.exports = r;
    })();
  }
});

// src/PluralityWallet.tsx
var import_smart_profile_wallet = __toESM(require_dist(), 1);
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var PluralityWallet = ({
  clientId,
  theme = "light",
  text = "Login",
  onLogin
}) => {
  const [isLogin, setLogin] = useState(false);
  const options = {
    clientId,
    theme,
    text
  };
  const abi = '[{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
  const rawTx = JSON.stringify({
    to: "0xe613B4cd69Fe20E8bd0F0D79a264210886bA1AA2",
    value: "10000000000000000",
    gasLimit: "21000",
    gasPrice: "50000000000"
  });
  const txParams = JSON.stringify([8]);
  const txOptions = JSON.stringify({ gasLimit: 2e6 });
  const getAllAccounts = async () => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.getAllAccounts();
    if (response) {
      const allAccounts = response.data;
      alert(`All Accounts: ${allAccounts[0]}`);
      return allAccounts[0]?.address;
    }
  };
  const getConnectedAccount = async () => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.getConnectedAccount();
    if (response) {
      const connectedAccount = response.data;
      alert(`Connected Account: ${connectedAccount}`);
      return connectedAccount?.address;
    }
  };
  const getMessageSignature = async (message) => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.getMessageSignature(
      message
    );
    if (response) {
      const signMessage = response.data;
      alert(`Sign Message Data: ${signMessage}`);
      console.log(signMessage);
      return signMessage;
    }
  };
  const getVerifyMessageData = async (message, key) => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.verifyMessageSignature(
      message,
      key
    );
    if (response) {
      const verifyMessage = response.data;
      alert(`Verification Signature Data: ${verifyMessage}`);
      return verifyMessage;
    }
  };
  const getBalanceData = async (rpc, chainId) => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.getBalance(
      rpc,
      chainId
    );
    if (response) {
      const getBalance = response.data;
      alert(`Balance: ${getBalance}`);
      return getBalance;
    }
  };
  const sendTransactionData = async (rawTx2, rpc, chainId) => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.sendTransaction(
      rawTx2,
      rpc,
      chainId
    );
    if (response) {
      console.log(
        "Send Transaction Response (Inisde dApp): ",
        response.data
      );
      const sendTransactionData2 = response.data;
      return sendTransactionData2;
    }
  };
  const fetchBlockNumber = async (rpc, chainId) => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.getBlockNumber(
      rpc,
      chainId
    );
    if (response) {
      const blockNumber = response.data;
      alert(`Block Number: ${blockNumber}`);
      return blockNumber;
    }
  };
  const fetchTransactionCount = async (address, rpc, chainId) => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.getTransactionCount(
      address,
      rpc,
      chainId
    );
    if (response) {
      const transactionCount = response.data;
      alert(`Transaction Count: ${transactionCount}`);
      return transactionCount;
    }
  };
  const readFromContractData = async (address, abiVal, action, params, rpc, chainId) => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.readFromContract(
      address,
      abiVal,
      action,
      params,
      rpc,
      chainId
    );
    if (response) {
      const readContract = response.data;
      alert(`Read From Contract Data: ${readContract}`);
      return readContract;
    }
  };
  const writeToContractData = async (address, abiVal, action, params, rpc, chainId, options2) => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.writeToContract(
      address,
      abiVal,
      action,
      params,
      rpc,
      chainId,
      options2
    );
    console.log("res", response);
    if (response) {
      const writeContract = response.data;
      alert(`Write To a Contract: ${writeContract}`);
      return writeContract;
    }
  };
  const loadPublicData = async () => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.getPublicData(
      "name"
    );
    if (response) {
      alert(response.data);
      console.log("Load Public Data  (Inside dApp):", response.data);
    }
  };
  const storePublicData = async () => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.setPublicData(
      "name",
      "plural-abc"
    );
    if (response) {
      alert(response.data);
      console.log("response", response.data);
    }
  };
  const loadPrivateData = async () => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.getPrivateData(
      "work"
    );
    if (response) {
      alert(response.data);
      console.log("response", response.data);
    }
  };
  const storePrivateData = async () => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.setPrivateData(
      "work",
      "Plurality"
    );
    if (response) {
      alert(response.data);
      console.log("response", response.data);
    }
  };
  const updateConsent = async () => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.updateConsentOption();
    if (response) {
      const smartProfileData = response.data;
      alert(`Connected Account: ${JSON.stringify(response.data)}`);
      return smartProfileData;
    }
  };
  const fetchSmartProfileData = async () => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.getSmartProfileData();
    if (response) {
      const smartProfileData = response.data;
      alert(`Connected Account: ${JSON.stringify(response.data)}`);
      return smartProfileData;
    }
  };
  const fetchLoginInfo = async () => {
    const response = await import_smart_profile_wallet.PluralitySocialConnect.getLoginInfo();
    if (response) {
      const loginInfoData = response.data;
      console.log(
        "Connected Account Info (Inisde dApp)::",
        loginInfoData
      );
      alert(`Connected Account: ${JSON.stringify(loginInfoData)}`);
      return loginInfoData;
    }
  };
  const handleDataReturned = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Login info callback data (Inisde dApp)::", receivedData);
    setLogin(true);
    if (onLogin) {
      onLogin(receivedData);
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        height: "100vh",
        width: "100vw"
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "right",
              padding: "20px"
            },
            children: /* @__PURE__ */ jsx(
              import_smart_profile_wallet.PluralitySocialConnect,
              {
                options,
                onDataReturned: handleDataReturned
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              padding: "20px",
              gap: "8px"
            },
            children: isLogin && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { children: " Wallet SDK Functions " }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("button", { onClick: () => getAllAccounts(), children: "Get All Accounts" }),
              "\xA0",
              /* @__PURE__ */ jsx("button", { onClick: () => getConnectedAccount(), children: "Get Connected Account" }),
              "\xA0",
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => getMessageSignature(
                    "Example `personal_sign` message."
                  ),
                  children: "Sign Message"
                }
              ),
              "\xA0",
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => getVerifyMessageData(
                    "Example `personal_sign` message.",
                    "0x8e2eeb0a7fe472bcd9751e2a8f27b60050c98a3140c07679bd1a00082de1fce86c9dbaad511503e1c4b2e9f57f7ddf971865eb9f177387879417ef0776c02cf41b"
                  ),
                  children: "Verify Message"
                }
              ),
              "\xA0",
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => getBalanceData(
                    "https://ethereum-sepolia.rpc.subquery.network/public",
                    "11155111"
                  ),
                  children: "Get Balance"
                }
              ),
              "\xA0",
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => sendTransactionData(
                    rawTx,
                    "https://ethereum-sepolia.rpc.subquery.network/public",
                    "11155111"
                  ),
                  children: "Send Transaction"
                }
              ),
              "\xA0",
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => fetchTransactionCount(
                    "0xe613B4cd69Fe20E8bd0F0D79a264210886bA1AA2",
                    "https://ethereum-sepolia.rpc.subquery.network/public",
                    "11155111"
                  ),
                  children: "Get Transaction count"
                }
              ),
              "\xA0",
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => readFromContractData(
                    "0x8E26aa0b6c7A396C92237C6a87cCD6271F67f937",
                    abi,
                    "retrieve",
                    "",
                    "https://ethereum-sepolia.rpc.subquery.network/public",
                    "11155111"
                  ),
                  children: "Read Contract"
                }
              ),
              "\xA0",
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => writeToContractData(
                    "0x8E26aa0b6c7A396C92237C6a87cCD6271F67f937",
                    abi,
                    "store",
                    txParams,
                    "https://ethereum-sepolia.rpc.subquery.network/public",
                    "11155111",
                    txOptions
                  ),
                  children: "Write Contract"
                }
              ),
              /* @__PURE__ */ jsx("hr", {}),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("h1", { children: "Profile SDK Functions" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("button", { onClick: () => storePublicData(), children: "Set Public Metadata" }),
              "\xA0",
              /* @__PURE__ */ jsx("button", { onClick: () => loadPublicData(), children: "Get Public Metadata" }),
              "\xA0",
              /* @__PURE__ */ jsx("button", { onClick: () => storePrivateData(), children: "Set Private Metadata" }),
              "\xA0",
              /* @__PURE__ */ jsx("button", { onClick: () => loadPrivateData(), children: "Get Private Metadata" }),
              "\xA0",
              /* @__PURE__ */ jsx("button", { onClick: () => fetchLoginInfo(), children: "Get Login Info" }),
              "\xA0",
              /* @__PURE__ */ jsx("button", { onClick: () => updateConsent(), children: "Update Consent" }),
              "\xA0",
              /* @__PURE__ */ jsx("button", { onClick: () => fetchSmartProfileData(), children: "Get Smart Profile Data" })
            ] })
          }
        )
      ]
    }
  );
};
var PluralityWallet_default = PluralityWallet;
export {
  PluralityWallet,
  PluralityWallet_default as default
};
/*! Bundled license information:

@plurality-network/smart-profile-wallet/dist/index.js:
  (*! For license information please see index.js.LICENSE.txt *)
*/
