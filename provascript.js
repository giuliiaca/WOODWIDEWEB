(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [330],
  {
    6445: function (e, t, r) {
      "use strict";
      r.d(t, {
        C: function () {
          return p;
        },
      });
      var n = r(1717),
        o = r(6668),
        a = r(4717),
        u = r(105),
        i = r(863),
        c = ["post"];
      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var p = (0, a.c)(function (e) {
        var t = e.post,
          r = (0, o.Z)(e, c);
        return (0,
        i.tZ)("div", f(f({ sx: { p: { wordBreak: "break-word" } } }, r), {}, { children: (0, u.L5)(t) }));
      });
    },
    7335: function (e, t, r) {
      "use strict";
      r.d(t, {
        k: function () {
          return o;
        },
      });
      var n = r(863),
        o = function (e) {
          var t = e.narrow,
            r = e.children;
          return (0, n.tZ)("div", {
            sx: { variant: "containers.fullWidth" },
            className: t ? "narrow" : "",
            children: (0, n.tZ)("div", { children: r }),
          });
        };
      o.defaultProps = { narrow: !0 };
    },
    698: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return c;
          },
        });
      var n = r(105),
        o = r(6445),
        a = r(7335),
        u = r(4515),
        i = r(863),
        c = !0;
      t.default = function (e) {
        var t,
          r = e.data;
        return (0, i.tZ)(u.Z, {
          data: r,
          breadcrumbs: [
            { label: "Cashmere Radio", href: "/" },
            {
              label: (0, n.YQ)(null === r || void 0 === r ? void 0 : r.page),
              href: (0, n.oC)(null === r || void 0 === r ? void 0 : r.page),
            },
          ],
          title: (0, n.YQ)(null === r || void 0 === r ? void 0 : r.page),
          seo:
            null === r || void 0 === r || null === (t = r.page) || void 0 === t
              ? void 0
              : t.seo,
          children: (0, i.tZ)(a.k, {
            children: (0, i.tZ)("article", {
              children: (0, i.tZ)(o.C, {
                post: null === r || void 0 === r ? void 0 : r.page,
              }),
            }),
          }),
        });
      };
    },
    7142: function (e, t, r) {
      "use strict";
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AmpStateContext = void 0);
      var o = (
        (n = r(7378)) && n.__esModule ? n : { default: n }
      ).default.createContext({});
      t.AmpStateContext = o;
    },
    8758: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isInAmpMode = u),
        (t.useAmp = function () {
          return u(o.default.useContext(a.AmpStateContext));
        });
      var n,
        o = (n = r(7378)) && n.__esModule ? n : { default: n },
        a = r(7142);
      function u() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          r = void 0 !== t && t,
          n = e.hybrid,
          o = void 0 !== n && n,
          a = e.hasQuery,
          u = void 0 !== a && a;
        return r || (o && u);
      }
    },
    9611: function (e, t, r) {
      "use strict";
      var n = r(217);
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultHead = p),
        (t.default = void 0);
      var a,
        u = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var n =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, r)
                    : {};
                n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r]);
              }
          return (t.default = e), t;
        })(r(7378)),
        i = (a = r(8774)) && a.__esModule ? a : { default: a },
        c = r(7142),
        s = r(8602),
        f = r(8758);
      function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [u.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              u.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function l(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === u.default.Fragment
          ? e.concat(
              u.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var d = ["name", "httpEquiv", "charSet", "itemProp"];
      function v(e, t) {
        return e
          .reduce(function (e, t) {
            var r = u.default.Children.toArray(t.props.children);
            return e.concat(r);
          }, [])
          .reduce(l, [])
          .reverse()
          .concat(p(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return function (o) {
                var a = !0,
                  u = !1;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  u = !0;
                  var i = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(i) ? (a = !1) : e.add(i);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (var c = 0, s = d.length; c < s; c++) {
                      var f = d[c];
                      if (o.props.hasOwnProperty(f))
                        if ("charSet" === f) r.has(f) ? (a = !1) : r.add(f);
                        else {
                          var p = o.props[f],
                            l = n[f] || new Set();
                          ("name" === f && u) || !l.has(p)
                            ? (l.add(p), (n[f] = l))
                            : (a = !1);
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (e, r) {
            var a = e.key || r;
            if (
              !t.inAmpMode &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (t) {
                return e.props.href.startsWith(t);
              })
            ) {
              var i = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? o(Object(r), !0).forEach(function (t) {
                        n(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : o(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        );
                      });
                }
                return e;
              })({}, e.props || {});
              return (
                (i["data-href"] = i.href),
                (i.href = void 0),
                (i["data-optimized-fonts"] = !0),
                u.default.cloneElement(e, i)
              );
            }
            return u.default.cloneElement(e, { key: a });
          });
      }
      var h = function (e) {
        var t = e.children,
          r = u.useContext(c.AmpStateContext),
          n = u.useContext(s.HeadManagerContext);
        return u.default.createElement(
          i.default,
          {
            reduceComponentsToState: v,
            headManager: n,
            inAmpMode: f.isInAmpMode(r),
          },
          t
        );
      };
      t.default = h;
    },
    8774: function (e, t, r) {
      "use strict";
      var n = r(5169),
        o = r(3190),
        a = r(2972),
        u = (r(7261), r(7242)),
        i = r(9172),
        c = r(8809);
      function s(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = c(e);
          if (t) {
            var o = c(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return i(this, r);
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var f = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var n =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, r)
                  : {};
              n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r]);
            }
        return (t.default = e), t;
      })(r(7378));
      var p = (function (e) {
        u(r, e);
        var t = s(r);
        function r(e) {
          var a;
          return (
            o(this, r),
            ((a = t.call(this, e)).emitChange = function () {
              a._hasHeadManager &&
                a.props.headManager.updateHead(
                  a.props.reduceComponentsToState(
                    n(a.props.headManager.mountedInstances),
                    a.props
                  )
                );
            }),
            (a._hasHeadManager =
              a.props.headManager && a.props.headManager.mountedInstances),
            a
          );
        }
        return (
          a(r, [
            {
              key: "componentDidMount",
              value: function () {
                this._hasHeadManager &&
                  this.props.headManager.mountedInstances.add(this),
                  this.emitChange();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.emitChange();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this._hasHeadManager &&
                  this.props.headManager.mountedInstances.delete(this),
                  this.emitChange();
              },
            },
            {
              key: "render",
              value: function () {
                return null;
              },
            },
          ]),
          r
        );
      })(f.Component);
      t.default = p;
    },
    993: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[...slug]",
        function () {
          return r(698);
        },
      ]);
    },
    8038: function (e, t, r) {
      e.exports = r(9611);
    },
    8242: function (e, t, r) {
      var n = r(8246);
      (e.exports = function (e) {
        if (Array.isArray(e)) return n(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    6118: function (e) {
      (e.exports = function (e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    3569: function (e) {
      (e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    5169: function (e, t, r) {
      var n = r(8242),
        o = r(6118),
        a = r(4009),
        u = r(3569);
      (e.exports = function (e) {
        return n(e) || o(e) || a(e) || u();
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    6668: function (e, t, r) {
      "use strict";
      function n(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
  },
  function (e) {
    e.O(0, [515, 774, 888, 179], function () {
      return (t = 993), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
