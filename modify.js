(function (ie) {
  typeof define == "function" && define.amd ? define(ie) : ie();
})(function () {
  "use strict";
  var xu = Object.defineProperty;
  var bu = (ie, I, qe) =>
    I in ie
      ? xu(ie, I, { enumerable: !0, configurable: !0, writable: !0, value: qe })
      : (ie[I] = qe);
  var Oe = (ie, I, qe) => bu(ie, typeof I != "symbol" ? I + "" : I, qe);
  var ie,
    I,
    qe,
    Ke,
    oo,
    ro,
    Qt,
    en,
    tn,
    nn,
    io,
    ut = {},
    ao = [],
    Gi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    Ct = Array.isArray;
  function Ce(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function so(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function z(e, t, n) {
    var o,
      r,
      i,
      a = {};
    for (i in t)
      i == "key" ? (o = t[i]) : i == "ref" ? (r = t[i]) : (a[i] = t[i]);
    if (
      (arguments.length > 2 &&
        (a.children = arguments.length > 3 ? ie.call(arguments, 2) : n),
      typeof e == "function" && e.defaultProps != null)
    )
      for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
    return dt(e, a, o, r, null);
  }
  function dt(e, t, n, o, r) {
    var i = {
      type: e,
      props: t,
      key: n,
      ref: o,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      constructor: void 0,
      __v: r ?? ++qe,
      __i: -1,
      __u: 0,
    };
    return r == null && I.vnode != null && I.vnode(i), i;
  }
  function lo() {
    return { current: null };
  }
  function ne(e) {
    return e.children;
  }
  function pe(e, t) {
    (this.props = e), (this.context = t);
  }
  function Ye(e, t) {
    if (t == null) return e.__ ? Ye(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
    return typeof e.type == "function" ? Ye(e) : null;
  }
  function co(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return co(e);
    }
  }
  function on(e) {
    ((!e.__d && (e.__d = !0) && Ke.push(e) && !St.__r++) ||
      oo !== I.debounceRendering) &&
      ((oo = I.debounceRendering) || ro)(St);
  }
  function St() {
    var e, t, n, o, r, i, a, s;
    for (Ke.sort(Qt); (e = Ke.shift()); )
      e.__d &&
        ((t = Ke.length),
        (o = void 0),
        (i = (r = (n = e).__v).__e),
        (a = []),
        (s = []),
        n.__P &&
          (((o = Ce({}, r)).__v = r.__v + 1),
          I.vnode && I.vnode(o),
          rn(
            n.__P,
            o,
            r,
            n.__n,
            n.__P.ownerSVGElement !== void 0,
            32 & r.__u ? [i] : null,
            a,
            i ?? Ye(r),
            !!(32 & r.__u),
            s
          ),
          (o.__v = r.__v),
          (o.__.__k[o.__i] = o),
          _o(a, o, s),
          o.__e != i && co(o)),
        Ke.length > t && Ke.sort(Qt));
    St.__r = 0;
  }
  function uo(e, t, n, o, r, i, a, s, l, c, d) {
    var u,
      m,
      p,
      v,
      f,
      _ = (o && o.__k) || ao,
      h = t.length;
    for (n.__d = l, Xi(n, t, _), l = n.__d, u = 0; u < h; u++)
      (p = n.__k[u]) != null &&
        typeof p != "boolean" &&
        typeof p != "function" &&
        ((m = p.__i === -1 ? ut : _[p.__i] || ut),
        (p.__i = u),
        rn(e, p, m, r, i, a, s, l, c, d),
        (v = p.__e),
        p.ref &&
          m.ref != p.ref &&
          (m.ref && an(m.ref, null, p), d.push(p.ref, p.__c || v, p)),
        f == null && v != null && (f = v),
        65536 & p.__u || m.__k === p.__k
          ? (l && !l.isConnected && (l = Ye(m)), (l = fo(p, l, e)))
          : typeof p.type == "function" && p.__d !== void 0
          ? (l = p.__d)
          : v && (l = v.nextSibling),
        (p.__d = void 0),
        (p.__u &= -196609));
    (n.__d = l), (n.__e = f);
  }
  function Xi(e, t, n) {
    var o,
      r,
      i,
      a,
      s,
      l = t.length,
      c = n.length,
      d = c,
      u = 0;
    for (e.__k = [], o = 0; o < l; o++)
      (a = o + u),
        (r = e.__k[o] =
          (r = t[o]) == null || typeof r == "boolean" || typeof r == "function"
            ? null
            : typeof r == "string" ||
              typeof r == "number" ||
              typeof r == "bigint" ||
              r.constructor == String
            ? dt(null, r, null, null, null)
            : Ct(r)
            ? dt(ne, { children: r }, null, null, null)
            : r.constructor === void 0 && r.__b > 0
            ? dt(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v)
            : r) != null
          ? ((r.__ = e),
            (r.__b = e.__b + 1),
            (s = Zi(r, n, a, d)),
            (r.__i = s),
            (i = null),
            s !== -1 && (d--, (i = n[s]) && (i.__u |= 131072)),
            i == null || i.__v === null
              ? (s == -1 && u--,
                typeof r.type != "function" && (r.__u |= 65536))
              : s !== a &&
                (s === a + 1
                  ? u++
                  : s > a
                  ? d > l - a
                    ? (u += s - a)
                    : u--
                  : s < a
                  ? s == a - 1 && (u = s - a)
                  : (u = 0),
                s !== o + u && (r.__u |= 65536)))
          : (i = n[a]) &&
            i.key == null &&
            i.__e &&
            !(131072 & i.__u) &&
            (i.__e == e.__d && (e.__d = Ye(i)),
            sn(i, i, !1),
            (n[a] = null),
            d--);
    if (d)
      for (o = 0; o < c; o++)
        (i = n[o]) != null &&
          !(131072 & i.__u) &&
          (i.__e == e.__d && (e.__d = Ye(i)), sn(i, i));
  }
  function fo(e, t, n) {
    var o, r;
    if (typeof e.type == "function") {
      for (o = e.__k, r = 0; o && r < o.length; r++)
        o[r] && ((o[r].__ = e), (t = fo(o[r], t, n)));
      return t;
    }
    e.__e != t && (n.insertBefore(e.__e, t || null), (t = e.__e));
    do t = t && t.nextSibling;
    while (t != null && t.nodeType === 8);
    return t;
  }
  function Se(e, t) {
    return (
      (t = t || []),
      e == null ||
        typeof e == "boolean" ||
        (Ct(e)
          ? e.some(function (n) {
              Se(n, t);
            })
          : t.push(e)),
      t
    );
  }
  function Zi(e, t, n, o) {
    var r = e.key,
      i = e.type,
      a = n - 1,
      s = n + 1,
      l = t[n];
    if (l === null || (l && r == l.key && i === l.type && !(131072 & l.__u)))
      return n;
    if (o > (l != null && !(131072 & l.__u) ? 1 : 0))
      for (; a >= 0 || s < t.length; ) {
        if (a >= 0) {
          if ((l = t[a]) && !(131072 & l.__u) && r == l.key && i === l.type)
            return a;
          a--;
        }
        if (s < t.length) {
          if ((l = t[s]) && !(131072 & l.__u) && r == l.key && i === l.type)
            return s;
          s++;
        }
      }
    return -1;
  }
  function po(e, t, n) {
    t[0] === "-"
      ? e.setProperty(t, n ?? "")
      : (e[t] =
          n == null ? "" : typeof n != "number" || Gi.test(t) ? n : n + "px");
  }
  function Et(e, t, n, o, r) {
    var i;
    e: if (t === "style")
      if (typeof n == "string") e.style.cssText = n;
      else {
        if ((typeof o == "string" && (e.style.cssText = o = ""), o))
          for (t in o) (n && t in n) || po(e.style, t, "");
        if (n) for (t in n) (o && n[t] === o[t]) || po(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      (i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
        (t =
          t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn"
            ? t.toLowerCase().slice(2)
            : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + i] = n),
        n
          ? o
            ? (n.u = o.u)
            : ((n.u = en), e.addEventListener(t, i ? nn : tn, i))
          : e.removeEventListener(t, i ? nn : tn, i);
    else {
      if (r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        t != "width" &&
        t != "height" &&
        t != "href" &&
        t != "list" &&
        t != "form" &&
        t != "tabIndex" &&
        t != "download" &&
        t != "rowSpan" &&
        t != "colSpan" &&
        t != "role" &&
        t in e
      )
        try {
          e[t] = n ?? "";
          break e;
        } catch {}
      typeof n == "function" ||
        (n == null || (n === !1 && t[4] !== "-")
          ? e.removeAttribute(t)
          : e.setAttribute(t, n));
    }
  }
  function ho(e) {
    return function (t) {
      if (this.l) {
        var n = this.l[t.type + e];
        if (t.t == null) t.t = en++;
        else if (t.t < n.u) return;
        return n(I.event ? I.event(t) : t);
      }
    };
  }
  function rn(e, t, n, o, r, i, a, s, l, c) {
    var d,
      u,
      m,
      p,
      v,
      f,
      _,
      h,
      g,
      x,
      b,
      w,
      A,
      C,
      k,
      S = t.type;
    if (t.constructor !== void 0) return null;
    128 & n.__u && ((l = !!(32 & n.__u)), (i = [(s = t.__e = n.__e)])),
      (d = I.__b) && d(t);
    e: if (typeof S == "function")
      try {
        if (
          ((h = t.props),
          (g = (d = S.contextType) && o[d.__c]),
          (x = d ? (g ? g.props.value : d.__) : o),
          n.__c
            ? (_ = (u = t.__c = n.__c).__ = u.__E)
            : ("prototype" in S && S.prototype.render
                ? (t.__c = u = new S(h, x))
                : ((t.__c = u = new pe(h, x)),
                  (u.constructor = S),
                  (u.render = Qi)),
              g && g.sub(u),
              (u.props = h),
              u.state || (u.state = {}),
              (u.context = x),
              (u.__n = o),
              (m = u.__d = !0),
              (u.__h = []),
              (u._sb = [])),
          u.__s == null && (u.__s = u.state),
          S.getDerivedStateFromProps != null &&
            (u.__s == u.state && (u.__s = Ce({}, u.__s)),
            Ce(u.__s, S.getDerivedStateFromProps(h, u.__s))),
          (p = u.props),
          (v = u.state),
          (u.__v = t),
          m)
        )
          S.getDerivedStateFromProps == null &&
            u.componentWillMount != null &&
            u.componentWillMount(),
            u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (
            (S.getDerivedStateFromProps == null &&
              h !== p &&
              u.componentWillReceiveProps != null &&
              u.componentWillReceiveProps(h, x),
            !u.__e &&
              ((u.shouldComponentUpdate != null &&
                u.shouldComponentUpdate(h, u.__s, x) === !1) ||
                t.__v === n.__v))
          ) {
            for (
              t.__v !== n.__v &&
                ((u.props = h), (u.state = u.__s), (u.__d = !1)),
                t.__e = n.__e,
                t.__k = n.__k,
                t.__k.forEach(function (M) {
                  M && (M.__ = t);
                }),
                b = 0;
              b < u._sb.length;
              b++
            )
              u.__h.push(u._sb[b]);
            (u._sb = []), u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(h, u.__s, x),
            u.componentDidUpdate != null &&
              u.__h.push(function () {
                u.componentDidUpdate(p, v, f);
              });
        }
        if (
          ((u.context = x),
          (u.props = h),
          (u.__P = e),
          (u.__e = !1),
          (w = I.__r),
          (A = 0),
          "prototype" in S && S.prototype.render)
        ) {
          for (
            u.state = u.__s,
              u.__d = !1,
              w && w(t),
              d = u.render(u.props, u.state, u.context),
              C = 0;
            C < u._sb.length;
            C++
          )
            u.__h.push(u._sb[C]);
          u._sb = [];
        } else
          do
            (u.__d = !1),
              w && w(t),
              (d = u.render(u.props, u.state, u.context)),
              (u.state = u.__s);
          while (u.__d && ++A < 25);
        (u.state = u.__s),
          u.getChildContext != null && (o = Ce(Ce({}, o), u.getChildContext())),
          m ||
            u.getSnapshotBeforeUpdate == null ||
            (f = u.getSnapshotBeforeUpdate(p, v)),
          uo(
            e,
            Ct(
              (k =
                d != null && d.type === ne && d.key == null
                  ? d.props.children
                  : d)
            )
              ? k
              : [k],
            t,
            n,
            o,
            r,
            i,
            a,
            s,
            l,
            c
          ),
          (u.base = t.__e),
          (t.__u &= -161),
          u.__h.length && a.push(u),
          _ && (u.__E = u.__ = null);
      } catch (M) {
        (t.__v = null),
          l || i != null
            ? ((t.__e = s), (t.__u |= l ? 160 : 32), (i[i.indexOf(s)] = null))
            : ((t.__e = n.__e), (t.__k = n.__k)),
          I.__e(M, t, n);
      }
    else
      i == null && t.__v === n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (t.__e = Ji(n.__e, t, n, o, r, i, a, l, c));
    (d = I.diffed) && d(t);
  }
  function _o(e, t, n) {
    t.__d = void 0;
    for (var o = 0; o < n.length; o++) an(n[o], n[++o], n[++o]);
    I.__c && I.__c(t, e),
      e.some(function (r) {
        try {
          (e = r.__h),
            (r.__h = []),
            e.some(function (i) {
              i.call(r);
            });
        } catch (i) {
          I.__e(i, r.__v);
        }
      });
  }
  function Ji(e, t, n, o, r, i, a, s, l) {
    var c,
      d,
      u,
      m,
      p,
      v,
      f,
      _ = n.props,
      h = t.props,
      g = t.type;
    if ((g === "svg" && (r = !0), i != null)) {
      for (c = 0; c < i.length; c++)
        if (
          (p = i[c]) &&
          "setAttribute" in p == !!g &&
          (g ? p.localName === g : p.nodeType === 3)
        ) {
          (e = p), (i[c] = null);
          break;
        }
    }
    if (e == null) {
      if (g === null) return document.createTextNode(h);
      (e = r
        ? document.createElementNS("http://www.w3.org/2000/svg", g)
        : document.createElement(g, h.is && h)),
        (i = null),
        (s = !1);
    }
    if (g === null) _ === h || (s && e.data === h) || (e.data = h);
    else {
      if (
        ((i = i && ie.call(e.childNodes)), (_ = n.props || ut), !s && i != null)
      )
        for (_ = {}, c = 0; c < e.attributes.length; c++)
          _[(p = e.attributes[c]).name] = p.value;
      for (c in _)
        (p = _[c]),
          c == "children" ||
            (c == "dangerouslySetInnerHTML"
              ? (u = p)
              : c === "key" || c in h || Et(e, c, null, p, r));
      for (c in h)
        (p = h[c]),
          c == "children"
            ? (m = p)
            : c == "dangerouslySetInnerHTML"
            ? (d = p)
            : c == "value"
            ? (v = p)
            : c == "checked"
            ? (f = p)
            : c === "key" ||
              (s && typeof p != "function") ||
              _[c] === p ||
              Et(e, c, p, _[c], r);
      if (d)
        s ||
          (u && (d.__html === u.__html || d.__html === e.innerHTML)) ||
          (e.innerHTML = d.__html),
          (t.__k = []);
      else if (
        (u && (e.innerHTML = ""),
        uo(
          e,
          Ct(m) ? m : [m],
          t,
          n,
          o,
          r && g !== "foreignObject",
          i,
          a,
          i ? i[0] : n.__k && Ye(n, 0),
          s,
          l
        ),
        i != null)
      )
        for (c = i.length; c--; ) i[c] != null && so(i[c]);
      s ||
        ((c = "value"),
        v !== void 0 &&
          (v !== e[c] ||
            (g === "progress" && !v) ||
            (g === "option" && v !== _[c])) &&
          Et(e, c, v, _[c], !1),
        (c = "checked"),
        f !== void 0 && f !== e[c] && Et(e, c, f, _[c], !1));
    }
    return e;
  }
  function an(e, t, n) {
    try {
      typeof e == "function" ? e(t) : (e.current = t);
    } catch (o) {
      I.__e(o, n);
    }
  }
  function sn(e, t, n) {
    var o, r;
    if (
      (I.unmount && I.unmount(e),
      (o = e.ref) && ((o.current && o.current !== e.__e) || an(o, null, t)),
      (o = e.__c) != null)
    ) {
      if (o.componentWillUnmount)
        try {
          o.componentWillUnmount();
        } catch (i) {
          I.__e(i, t);
        }
      o.base = o.__P = null;
    }
    if ((o = e.__k))
      for (r = 0; r < o.length; r++)
        o[r] && sn(o[r], t, n || typeof e.type != "function");
    n || e.__e == null || so(e.__e), (e.__c = e.__ = e.__e = e.__d = void 0);
  }
  function Qi(e, t, n) {
    return this.constructor(e, n);
  }
  function Ne(e, t, n) {
    var o, r, i, a;
    I.__ && I.__(e, t),
      (r = (o = typeof n == "function") ? null : (n && n.__k) || t.__k),
      (i = []),
      (a = []),
      rn(
        t,
        (e = ((!o && n) || t).__k = z(ne, null, [e])),
        r || ut,
        ut,
        t.ownerSVGElement !== void 0,
        !o && n ? [n] : r ? null : t.firstChild ? ie.call(t.childNodes) : null,
        i,
        !o && n ? n : r ? r.__e : t.firstChild,
        o,
        a
      ),
      _o(i, e, a);
  }
  function ln(e, t) {
    Ne(e, t, ln);
  }
  function cn(e, t, n) {
    var o,
      r,
      i,
      a,
      s = Ce({}, e.props);
    for (i in (e.type && e.type.defaultProps && (a = e.type.defaultProps), t))
      i == "key"
        ? (o = t[i])
        : i == "ref"
        ? (r = t[i])
        : (s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i]);
    return (
      arguments.length > 2 &&
        (s.children = arguments.length > 3 ? ie.call(arguments, 2) : n),
      dt(e.type, s, o || e.key, r || e.ref, null)
    );
  }
  function Le(e, t) {
    var n = {
      __c: (t = "__cC" + io++),
      __: e,
      Consumer: function (o, r) {
        return o.children(r);
      },
      Provider: function (o) {
        var r, i;
        return (
          this.getChildContext ||
            ((r = []),
            ((i = {})[t] = this),
            (this.getChildContext = function () {
              return i;
            }),
            (this.shouldComponentUpdate = function (a) {
              this.props.value !== a.value &&
                r.some(function (s) {
                  (s.__e = !0), on(s);
                });
            }),
            (this.sub = function (a) {
              r.push(a);
              var s = a.componentWillUnmount;
              a.componentWillUnmount = function () {
                r.splice(r.indexOf(a), 1), s && s.call(a);
              };
            })),
          o.children
        );
      },
    };
    return (n.Provider.__ = n.Consumer.contextType = n);
  }
  (ie = ao.slice),
    (I = {
      __e: function (e, t, n, o) {
        for (var r, i, a; (t = t.__); )
          if ((r = t.__c) && !r.__)
            try {
              if (
                ((i = r.constructor) &&
                  i.getDerivedStateFromError != null &&
                  (r.setState(i.getDerivedStateFromError(e)), (a = r.__d)),
                r.componentDidCatch != null &&
                  (r.componentDidCatch(e, o || {}), (a = r.__d)),
                a)
              )
                return (r.__E = r);
            } catch (s) {
              e = s;
            }
        throw e;
      },
    }),
    (qe = 0),
    (pe.prototype.setState = function (e, t) {
      var n;
      (n =
        this.__s != null && this.__s !== this.state
          ? this.__s
          : (this.__s = Ce({}, this.state))),
        typeof e == "function" && (e = e(Ce({}, n), this.props)),
        e && Ce(n, e),
        e != null && this.__v && (t && this._sb.push(t), on(this));
    }),
    (pe.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), on(this));
    }),
    (pe.prototype.render = ne),
    (Ke = []),
    (ro =
      typeof Promise == "function"
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (Qt = function (e, t) {
      return e.__v.__b - t.__v.__b;
    }),
    (St.__r = 0),
    (en = 0),
    (tn = ho(!1)),
    (nn = ho(!0)),
    (io = 0);
  function un() {
    return (un = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }).apply(this, arguments);
  }
  var ea = ["context", "children"];
  function ta(e) {
    this.getChildContext = function () {
      return e.context;
    };
    var t = e.children,
      n = (function (o, r) {
        if (o == null) return {};
        var i,
          a,
          s = {},
          l = Object.keys(o);
        for (a = 0; a < l.length; a++)
          r.indexOf((i = l[a])) >= 0 || (s[i] = o[i]);
        return s;
      })(e, ea);
    return cn(t, n);
  }
  function na() {
    var e = new CustomEvent("_preact", {
      detail: {},
      bubbles: !0,
      cancelable: !0,
    });
    this.dispatchEvent(e),
      (this._vdom = z(
        ta,
        un({}, this._props, { context: e.detail.context }),
        (function t(n, o) {
          if (n.nodeType === 3) return n.data;
          if (n.nodeType !== 1) return null;
          var r = [],
            i = {},
            a = 0,
            s = n.attributes,
            l = n.childNodes;
          for (a = s.length; a--; )
            s[a].name !== "slot" &&
              ((i[s[a].name] = s[a].value), (i[mo(s[a].name)] = s[a].value));
          for (a = l.length; a--; ) {
            var c = t(l[a], null),
              d = l[a].slot;
            d ? (i[d] = z(vo, { name: d }, c)) : (r[a] = c);
          }
          var u = o ? z(vo, null, r) : r;
          return z(o || n.nodeName.toLowerCase(), i, u);
        })(this, this._vdomComponent)
      )),
      (this.hasAttribute("hydrate") ? ln : Ne)(this._vdom, this._root);
  }
  function mo(e) {
    return e.replace(/-(\w)/g, function (t, n) {
      return n ? n.toUpperCase() : "";
    });
  }
  function oa(e, t, n) {
    if (this._vdom) {
      var o = {};
      (o[e] = n = n ?? void 0),
        (o[mo(e)] = n),
        (this._vdom = cn(this._vdom, o)),
        Ne(this._vdom, this._root);
    }
  }
  function ra() {
    Ne((this._vdom = null), this._root);
  }
  function vo(e, t) {
    var n = this;
    return z(
      "slot",
      un({}, e, {
        ref: function (o) {
          o
            ? ((n.ref = o),
              n._listener ||
                ((n._listener = function (r) {
                  r.stopPropagation(), (r.detail.context = t);
                }),
                o.addEventListener("_preact", n._listener)))
            : n.ref.removeEventListener("_preact", n._listener);
        },
      })
    );
  }
  function ia(e, t, n, o) {
    function r() {
      var i = Reflect.construct(HTMLElement, [], r);
      return (
        (i._vdomComponent = e),
        (i._root = i.attachShadow({ mode: o.mode || "open" })),
        i
      );
    }
    return (
      ((r.prototype = Object.create(HTMLElement.prototype)).constructor = r),
      (r.prototype.connectedCallback = na),
      (r.prototype.attributeChangedCallback = oa),
      (r.prototype.disconnectedCallback = ra),
      (n = n || e.observedAttributes || Object.keys(e.propTypes || {})),
      (r.observedAttributes = n),
      n.forEach(function (i) {
        Object.defineProperty(r.prototype, i, {
          get: function () {
            return this._vdom.props[i];
          },
          set: function (a) {
            this._vdom
              ? this.attributeChangedCallback(i, null, a)
              : (this._props || (this._props = {}),
                (this._props[i] = a),
                this.connectedCallback());
            var s = typeof a;
            (a != null &&
              s !== "string" &&
              s !== "boolean" &&
              s !== "number") ||
              this.setAttribute(i, a);
          },
        });
      }),
      customElements.define(t, r)
    );
  }
  var aa = 0;
  function y(e, t, n, o, r, i) {
    var a,
      s,
      l = {};
    for (s in t) s == "ref" ? (a = t[s]) : (l[s] = t[s]);
    var c = {
      type: e,
      props: l,
      key: n,
      ref: a,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      constructor: void 0,
      __v: --aa,
      __i: -1,
      __u: 0,
      __source: r,
      __self: i,
    };
    if (typeof e == "function" && (a = e.defaultProps))
      for (s in a) l[s] === void 0 && (l[s] = a[s]);
    return I.vnode && I.vnode(c), c;
  }
  var Ee,
    K,
    dn,
    go,
    Qe = 0,
    yo = [],
    Pt = [],
    J = I,
    xo = J.__b,
    bo = J.__r,
    wo = J.diffed,
    Co = J.__c,
    So = J.unmount,
    Eo = J.__;
  function Ge(e, t) {
    J.__h && J.__h(K, e, Qe || t), (Qe = 0);
    var n = K.__H || (K.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({ __V: Pt }), n.__[e];
  }
  function E(e) {
    return (Qe = 1), fn(To, e);
  }
  function fn(e, t, n) {
    var o = Ge(Ee++, 2);
    if (
      ((o.t = e),
      !o.__c &&
        ((o.__ = [
          n ? n(t) : To(void 0, t),
          function (s) {
            var l = o.__N ? o.__N[0] : o.__[0],
              c = o.t(l, s);
            l !== c && ((o.__N = [c, o.__[1]]), o.__c.setState({}));
          },
        ]),
        (o.__c = K),
        !K.u))
    ) {
      var r = function (s, l, c) {
        if (!o.__c.__H) return !0;
        var d = o.__c.__H.__.filter(function (m) {
          return !!m.__c;
        });
        if (
          d.every(function (m) {
            return !m.__N;
          })
        )
          return !i || i.call(this, s, l, c);
        var u = !1;
        return (
          d.forEach(function (m) {
            if (m.__N) {
              var p = m.__[0];
              (m.__ = m.__N), (m.__N = void 0), p !== m.__[0] && (u = !0);
            }
          }),
          !(!u && o.__c.props === s) && (!i || i.call(this, s, l, c))
        );
      };
      K.u = !0;
      var i = K.shouldComponentUpdate,
        a = K.componentWillUpdate;
      (K.componentWillUpdate = function (s, l, c) {
        if (this.__e) {
          var d = i;
          (i = void 0), r(s, l, c), (i = d);
        }
        a && a.call(this, s, l, c);
      }),
        (K.shouldComponentUpdate = r);
    }
    return o.__N || o.__;
  }
  function L(e, t) {
    var n = Ge(Ee++, 3);
    !J.__s && hn(n.__H, t) && ((n.__ = e), (n.i = t), K.__H.__h.push(n));
  }
  function De(e, t) {
    var n = Ge(Ee++, 4);
    !J.__s && hn(n.__H, t) && ((n.__ = e), (n.i = t), K.__h.push(n));
  }
  function O(e) {
    return (
      (Qe = 5),
      Z(function () {
        return { current: e };
      }, [])
    );
  }
  function Po(e, t, n) {
    (Qe = 6),
      De(
        function () {
          return typeof e == "function"
            ? (e(t()),
              function () {
                return e(null);
              })
            : e
            ? ((e.current = t()),
              function () {
                return (e.current = null);
              })
            : void 0;
        },
        n == null ? n : n.concat(e)
      );
  }
  function Z(e, t) {
    var n = Ge(Ee++, 7);
    return hn(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__;
  }
  function Y(e, t) {
    return (
      (Qe = 8),
      Z(function () {
        return e;
      }, t)
    );
  }
  function Xe(e) {
    var t = K.context[e.__c],
      n = Ge(Ee++, 9);
    return (
      (n.c = e),
      t ? (n.__ == null && ((n.__ = !0), t.sub(K)), t.props.value) : e.__
    );
  }
  function Ao(e, t) {
    J.useDebugValue && J.useDebugValue(t ? t(e) : e);
  }
  function sa(e) {
    var t = Ge(Ee++, 10),
      n = E();
    return (
      (t.__ = e),
      K.componentDidCatch ||
        (K.componentDidCatch = function (o, r) {
          t.__ && t.__(o, r), n[1](o);
        }),
      [
        n[0],
        function () {
          n[1](void 0);
        },
      ]
    );
  }
  function ko() {
    var e = Ge(Ee++, 11);
    if (!e.__) {
      for (var t = K.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
      var n = t.__m || (t.__m = [0, 0]);
      e.__ = "P" + n[0] + "-" + n[1]++;
    }
    return e.__;
  }
  function la() {
    for (var e; (e = yo.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(At), e.__H.__h.forEach(pn), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), J.__e(t, e.__v);
        }
  }
  (J.__b = function (e) {
    (K = null), xo && xo(e);
  }),
    (J.__ = function (e, t) {
      e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Eo && Eo(e, t);
    }),
    (J.__r = function (e) {
      bo && bo(e), (Ee = 0);
      var t = (K = e.__c).__H;
      t &&
        (dn === K
          ? ((t.__h = []),
            (K.__h = []),
            t.__.forEach(function (n) {
              n.__N && (n.__ = n.__N), (n.__V = Pt), (n.__N = n.i = void 0);
            }))
          : (t.__h.forEach(At), t.__h.forEach(pn), (t.__h = []), (Ee = 0))),
        (dn = K);
    }),
    (J.diffed = function (e) {
      wo && wo(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((yo.push(t) !== 1 && go === J.requestAnimationFrame) ||
            ((go = J.requestAnimationFrame) || ca)(la)),
        t.__H.__.forEach(function (n) {
          n.i && (n.__H = n.i),
            n.__V !== Pt && (n.__ = n.__V),
            (n.i = void 0),
            (n.__V = Pt);
        })),
        (dn = K = null);
    }),
    (J.__c = function (e, t) {
      t.some(function (n) {
        try {
          n.__h.forEach(At),
            (n.__h = n.__h.filter(function (o) {
              return !o.__ || pn(o);
            }));
        } catch (o) {
          t.some(function (r) {
            r.__h && (r.__h = []);
          }),
            (t = []),
            J.__e(o, n.__v);
        }
      }),
        Co && Co(e, t);
    }),
    (J.unmount = function (e) {
      So && So(e);
      var t,
        n = e.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (o) {
          try {
            At(o);
          } catch (r) {
            t = r;
          }
        }),
        (n.__H = void 0),
        t && J.__e(t, n.__v));
    });
  var Io = typeof requestAnimationFrame == "function";
  function ca(e) {
    var t,
      n = function () {
        clearTimeout(o), Io && cancelAnimationFrame(t), setTimeout(e);
      },
      o = setTimeout(n, 100);
    Io && (t = requestAnimationFrame(n));
  }
  function At(e) {
    var t = K,
      n = e.__c;
    typeof n == "function" && ((e.__c = void 0), n()), (K = t);
  }
  function pn(e) {
    var t = K;
    (e.__c = e.__()), (K = t);
  }
  function hn(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (n, o) {
        return n !== e[o];
      })
    );
  }
  function To(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  const Ro = "https://api.elevenlabs.io",
    Oo = "https://api.us.elevenlabs.io",
    ua = "wss://api.elevenlabs.io",
    da = "wss://api.us.elevenlabs.io";
  function No(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function _n(e, t) {
    for (var n in e) if (n !== "__source" && !(n in t)) return !0;
    for (var o in t) if (o !== "__source" && e[o] !== t[o]) return !0;
    return !1;
  }
  function kt(e, t) {
    (this.props = e), (this.context = t);
  }
  function Lo(e, t) {
    function n(r) {
      var i = this.props.ref,
        a = i == r.ref;
      return (
        !a && i && (i.call ? i(null) : (i.current = null)),
        t ? !t(this.props, r) || !a : _n(this.props, r)
      );
    }
    function o(r) {
      return (this.shouldComponentUpdate = n), z(e, r);
    }
    return (
      (o.displayName = "Memo(" + (e.displayName || e.name) + ")"),
      (o.prototype.isReactComponent = !0),
      (o.__f = !0),
      o
    );
  }
  ((kt.prototype = new pe()).isPureReactComponent = !0),
    (kt.prototype.shouldComponentUpdate = function (e, t) {
      return _n(this.props, e) || _n(this.state, t);
    });
  var Do = I.__b;
  I.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
      Do && Do(e);
  };
  var fa =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) ||
    3911;
  function D(e) {
    function t(n) {
      var o = No({}, n);
      return delete o.ref, e(o, n.ref || null);
    }
    return (
      (t.$$typeof = fa),
      (t.render = t),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
      t
    );
  }
  var Mo = function (e, t) {
      return e == null ? null : Se(Se(e).map(t));
    },
    Me = {
      map: Mo,
      forEach: Mo,
      count: function (e) {
        return e ? Se(e).length : 0;
      },
      only: function (e) {
        var t = Se(e);
        if (t.length !== 1) throw "Children.only";
        return t[0];
      },
      toArray: Se,
    },
    pa = I.__e;
  I.__e = function (e, t, n, o) {
    if (e.then) {
      for (var r, i = t; (i = i.__); )
        if ((r = i.__c) && r.__c)
          return (
            t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), r.__c(e, t)
          );
    }
    pa(e, t, n, o);
  };
  var Fo = I.unmount;
  function Bo(e, t, n) {
    return (
      e &&
        (e.__c &&
          e.__c.__H &&
          (e.__c.__H.__.forEach(function (o) {
            typeof o.__c == "function" && o.__c();
          }),
          (e.__c.__H = null)),
        (e = No({}, e)).__c != null &&
          (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
        (e.__k =
          e.__k &&
          e.__k.map(function (o) {
            return Bo(o, t, n);
          }))),
      e
    );
  }
  function $o(e, t, n) {
    return (
      e &&
        n &&
        ((e.__v = null),
        (e.__k =
          e.__k &&
          e.__k.map(function (o) {
            return $o(o, t, n);
          })),
        e.__c &&
          e.__c.__P === t &&
          (e.__e && n.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = n))),
      e
    );
  }
  function ft() {
    (this.__u = 0), (this.t = null), (this.__b = null);
  }
  function Vo(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function Wo(e) {
    var t, n, o;
    function r(i) {
      if (
        (t ||
          (t = e()).then(
            function (a) {
              n = a.default || a;
            },
            function (a) {
              o = a;
            }
          ),
        o)
      )
        throw o;
      if (!n) throw t;
      return z(n, i);
    }
    return (r.displayName = "Lazy"), (r.__f = !0), r;
  }
  function et() {
    (this.u = null), (this.o = null);
  }
  (I.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Fo && Fo(e);
  }),
    ((ft.prototype = new pe()).__c = function (e, t) {
      var n = t.__c,
        o = this;
      o.t == null && (o.t = []), o.t.push(n);
      var r = Vo(o.__v),
        i = !1,
        a = function () {
          i || ((i = !0), (n.__R = null), r ? r(s) : s());
        };
      n.__R = a;
      var s = function () {
        if (!--o.__u) {
          if (o.state.__a) {
            var l = o.state.__a;
            o.__v.__k[0] = $o(l, l.__c.__P, l.__c.__O);
          }
          var c;
          for (o.setState({ __a: (o.__b = null) }); (c = o.t.pop()); )
            c.forceUpdate();
        }
      };
      o.__u++ || 32 & t.__u || o.setState({ __a: (o.__b = o.__v.__k[0]) }),
        e.then(a, a);
    }),
    (ft.prototype.componentWillUnmount = function () {
      this.t = [];
    }),
    (ft.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var n = document.createElement("div"),
            o = this.__v.__k[0].__c;
          this.__v.__k[0] = Bo(this.__b, n, (o.__O = o.__P));
        }
        this.__b = null;
      }
      var r = t.__a && z(ne, null, e.fallback);
      return r && (r.__u &= -33), [z(ne, null, t.__a ? null : e.children), r];
    });
  var Ho = function (e, t, n) {
    if (
      (++n[1] === n[0] && e.o.delete(t),
      e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    )
      for (n = e.u; n; ) {
        for (; n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        e.u = n = n[2];
      }
  };
  function ha(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function _a(e) {
    var t = this,
      n = e.i;
    (t.componentWillUnmount = function () {
      Ne(null, t.l), (t.l = null), (t.i = null);
    }),
      t.i && t.i !== n && t.componentWillUnmount(),
      t.l ||
        ((t.i = n),
        (t.l = {
          nodeType: 1,
          parentNode: n,
          childNodes: [],
          appendChild: function (o) {
            this.childNodes.push(o), t.i.appendChild(o);
          },
          insertBefore: function (o, r) {
            this.childNodes.push(o), t.i.appendChild(o);
          },
          removeChild: function (o) {
            this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1),
              t.i.removeChild(o);
          },
        })),
      Ne(z(ha, { context: t.context }, e.__v), t.l);
  }
  function It(e, t) {
    var n = z(_a, { __v: e, i: t });
    return (n.containerInfo = t), n;
  }
  ((et.prototype = new pe()).__a = function (e) {
    var t = this,
      n = Vo(t.__v),
      o = t.o.get(e);
    return (
      o[0]++,
      function (r) {
        var i = function () {
          t.props.revealOrder ? (o.push(r), Ho(t, e, o)) : r();
        };
        n ? n(i) : i();
      }
    );
  }),
    (et.prototype.render = function (e) {
      (this.u = null), (this.o = new Map());
      var t = Se(e.children);
      e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
      for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
      return e.children;
    }),
    (et.prototype.componentDidUpdate = et.prototype.componentDidMount =
      function () {
        var e = this;
        this.o.forEach(function (t, n) {
          Ho(e, n, t);
        });
      });
  var Uo =
      (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) ||
      60103,
    ma =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    va = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    ga = /[A-Z0-9]/g,
    ya = typeof document < "u",
    xa = function (e) {
      return (
        typeof Symbol < "u" && typeof Symbol() == "symbol"
          ? /fil|che|rad/
          : /fil|che|ra/
      ).test(e);
    };
  function zo(e, t, n) {
    return (
      t.__k == null && (t.textContent = ""),
      Ne(e, t),
      typeof n == "function" && n(),
      e ? e.__c : null
    );
  }
  function jo(e, t, n) {
    return ln(e, t), typeof n == "function" && n(), e ? e.__c : null;
  }
  (pe.prototype.isReactComponent = {}),
    [
      "componentWillMount",
      "componentWillReceiveProps",
      "componentWillUpdate",
    ].forEach(function (e) {
      Object.defineProperty(pe.prototype, e, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    });
  var qo = I.event;
  function ba() {}
  function wa() {
    return this.cancelBubble;
  }
  function Ca() {
    return this.defaultPrevented;
  }
  I.event = function (e) {
    return (
      qo && (e = qo(e)),
      (e.persist = ba),
      (e.isPropagationStopped = wa),
      (e.isDefaultPrevented = Ca),
      (e.nativeEvent = e)
    );
  };
  var mn,
    Sa = {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    Ko = I.vnode;
  I.vnode = function (e) {
    typeof e.type == "string" &&
      (function (t) {
        var n = t.props,
          o = t.type,
          r = {};
        for (var i in n) {
          var a = n[i];
          if (
            !(
              (i === "value" && "defaultValue" in n && a == null) ||
              (ya && i === "children" && o === "noscript") ||
              i === "class" ||
              i === "className"
            )
          ) {
            var s = i.toLowerCase();
            i === "defaultValue" && "value" in n && n.value == null
              ? (i = "value")
              : i === "download" && a === !0
              ? (a = "")
              : s === "translate" && a === "no"
              ? (a = !1)
              : s === "ondoubleclick"
              ? (i = "ondblclick")
              : s !== "onchange" ||
                (o !== "input" && o !== "textarea") ||
                xa(n.type)
              ? s === "onfocus"
                ? (i = "onfocusin")
                : s === "onblur"
                ? (i = "onfocusout")
                : va.test(i)
                ? (i = s)
                : o.indexOf("-") === -1 && ma.test(i)
                ? (i = i.replace(ga, "-$&").toLowerCase())
                : a === null && (a = void 0)
              : (s = i = "oninput"),
              s === "oninput" && r[(i = s)] && (i = "oninputCapture"),
              (r[i] = a);
          }
        }
        o == "select" &&
          r.multiple &&
          Array.isArray(r.value) &&
          (r.value = Se(n.children).forEach(function (l) {
            l.props.selected = r.value.indexOf(l.props.value) != -1;
          })),
          o == "select" &&
            r.defaultValue != null &&
            (r.value = Se(n.children).forEach(function (l) {
              l.props.selected = r.multiple
                ? r.defaultValue.indexOf(l.props.value) != -1
                : r.defaultValue == l.props.value;
            })),
          n.class && !n.className
            ? ((r.class = n.class), Object.defineProperty(r, "className", Sa))
            : ((n.className && !n.class) || (n.class && n.className)) &&
              (r.class = r.className = n.className),
          (t.props = r);
      })(e),
      (e.$$typeof = Uo),
      Ko && Ko(e);
  };
  var Yo = I.__r;
  I.__r = function (e) {
    Yo && Yo(e), (mn = e.__c);
  };
  var Go = I.diffed;
  I.diffed = function (e) {
    Go && Go(e);
    var t = e.props,
      n = e.__e;
    n != null &&
      e.type === "textarea" &&
      "value" in t &&
      t.value !== n.value &&
      (n.value = t.value == null ? "" : t.value),
      (mn = null);
  };
  var Xo = {
      ReactCurrentDispatcher: {
        current: {
          readContext: function (e) {
            return mn.__n[e.__c].props.value;
          },
        },
      },
    },
    Ea = "17.0.2";
  function Zo(e) {
    return z.bind(null, e);
  }
  function Pe(e) {
    return !!e && e.$$typeof === Uo;
  }
  function Jo(e) {
    return Pe(e) && e.type === ne;
  }
  function Qo(e) {
    return (
      !!e &&
      !!e.displayName &&
      (typeof e.displayName == "string" || e.displayName instanceof String) &&
      e.displayName.startsWith("Memo(")
    );
  }
  function pt(e) {
    return Pe(e) ? cn.apply(null, arguments) : e;
  }
  function er(e) {
    return !!e.__k && (Ne(null, e), !0);
  }
  function tr(e) {
    return (e && (e.base || (e.nodeType === 1 && e))) || null;
  }
  var nr = function (e, t) {
      return e(t);
    },
    Tt = function (e, t) {
      return e(t);
    },
    or = ne;
  function vn(e) {
    e();
  }
  function rr(e) {
    return e;
  }
  function ir() {
    return [!1, vn];
  }
  var ar = De,
    sr = Pe;
  function lr(e, t) {
    var n = t(),
      o = E({ h: { __: n, v: t } }),
      r = o[0].h,
      i = o[1];
    return (
      De(
        function () {
          (r.__ = n), (r.v = t), gn(r) && i({ h: r });
        },
        [e, n, t]
      ),
      L(
        function () {
          return (
            gn(r) && i({ h: r }),
            e(function () {
              gn(r) && i({ h: r });
            })
          );
        },
        [e]
      ),
      n
    );
  }
  function gn(e) {
    var t,
      n,
      o = e.v,
      r = e.__;
    try {
      var i = o();
      return !(
        ((t = r) === (n = i) && (t !== 0 || 1 / t == 1 / n)) ||
        (t != t && n != n)
      );
    } catch {
      return !0;
    }
  }
  var Ae = {
    useState: E,
    useId: ko,
    useReducer: fn,
    useEffect: L,
    useLayoutEffect: De,
    useInsertionEffect: ar,
    useTransition: ir,
    useDeferredValue: rr,
    useSyncExternalStore: lr,
    startTransition: vn,
    useRef: O,
    useImperativeHandle: Po,
    useMemo: Z,
    useCallback: Y,
    useContext: Xe,
    useDebugValue: Ao,
    version: "17.0.2",
    Children: Me,
    render: zo,
    hydrate: jo,
    unmountComponentAtNode: er,
    createPortal: It,
    createElement: z,
    createContext: Le,
    createFactory: Zo,
    cloneElement: pt,
    createRef: lo,
    Fragment: ne,
    isValidElement: Pe,
    isElement: sr,
    isFragment: Jo,
    isMemo: Qo,
    findDOMNode: tr,
    Component: pe,
    PureComponent: kt,
    memo: Lo,
    forwardRef: D,
    flushSync: Tt,
    unstable_batchedUpdates: nr,
    StrictMode: or,
    Suspense: ft,
    SuspenseList: et,
    lazy: Wo,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Xo,
  };
  const Pa = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Children: Me,
        Component: pe,
        Fragment: ne,
        PureComponent: kt,
        StrictMode: or,
        Suspense: ft,
        SuspenseList: et,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Xo,
        cloneElement: pt,
        createContext: Le,
        createElement: z,
        createFactory: Zo,
        createPortal: It,
        createRef: lo,
        default: Ae,
        findDOMNode: tr,
        flushSync: Tt,
        forwardRef: D,
        hydrate: jo,
        isElement: sr,
        isFragment: Jo,
        isMemo: Qo,
        isValidElement: Pe,
        lazy: Wo,
        memo: Lo,
        render: zo,
        startTransition: vn,
        unmountComponentAtNode: er,
        unstable_batchedUpdates: nr,
        useCallback: Y,
        useContext: Xe,
        useDebugValue: Ao,
        useDeferredValue: rr,
        useEffect: L,
        useErrorBoundary: sa,
        useId: ko,
        useImperativeHandle: Po,
        useInsertionEffect: ar,
        useLayoutEffect: De,
        useMemo: Z,
        useReducer: fn,
        useRef: O,
        useState: E,
        useSyncExternalStore: lr,
        useTransition: ir,
        version: Ea,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
  function Rt() {
    return (
      (Rt = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }),
      Rt.apply(null, arguments)
    );
  }
  function Aa(e) {
    const t = new Uint8Array(e);
    return window.btoa(String.fromCharCode(...t));
  }
  function ka(e) {
    const t = window.atob(e),
      n = t.length,
      o = new Uint8Array(n);
    for (let r = 0; r < n; r++) o[r] = t.charCodeAt(r);
    return o.buffer;
  }
  const Ia = new Blob(
      [
        `
      const BIAS = 0x84;
      const CLIP = 32635;
      const encodeTable = [
        0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,
        4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
        5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
        5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7
      ];
      
      function encodeSample(sample) {
        let sign;
        let exponent;
        let mantissa;
        let muLawSample;
        sign = (sample >> 8) & 0x80;
        if (sign !== 0) sample = -sample;
        sample = sample + BIAS;
        if (sample > CLIP) sample = CLIP;
        exponent = encodeTable[(sample>>7) & 0xFF];
        mantissa = (sample >> (exponent+3)) & 0x0F;
        muLawSample = ~(sign | (exponent << 4) | mantissa);
        
        return muLawSample;
      }
    
      class RawAudioProcessor extends AudioWorkletProcessor {
        constructor() {
          super();
                    
          this.port.onmessage = ({ data }) => {
            this.buffer = []; // Initialize an empty buffer
            this.bufferSize = data.sampleRate / 4;
            
            if (globalThis.LibSampleRate && sampleRate !== data.sampleRate) {
              globalThis.LibSampleRate.create(1, sampleRate, data.sampleRate).then(resampler => {
                this.resampler = resampler;
              });
            } 
          };
        }
        process(inputs) {
          if (!this.buffer) {
            return true;
          }
          
          const input = inputs[0]; // Get the first input node
          if (input.length > 0) {
            let channelData = input[0]; // Get the first channel's data

            // Resample the audio if necessary
            if (this.resampler) {
              channelData = this.resampler.full(channelData);
            }

            // Add channel data to the buffer
            this.buffer.push(...channelData);
            // Get max volume 
            let sum = 0.0;
            for (let i = 0; i < channelData.length; i++) {
              sum += channelData[i] * channelData[i];
            }
            const maxVolume = Math.sqrt(sum / channelData.length);
            // Check if buffer size has reached or exceeded the threshold
            if (this.buffer.length >= this.bufferSize) {
              const float32Array = new Float32Array(this.buffer)
              let encodedArray = this.format === "ulaw"
                ? new Uint8Array(float32Array.length)
                : new Int16Array(float32Array.length);

              // Iterate through the Float32Array and convert each sample to PCM16
              for (let i = 0; i < float32Array.length; i++) {
                // Clamp the value to the range [-1, 1]
                let sample = Math.max(-1, Math.min(1, float32Array[i]));

                // Scale the sample to the range [-32768, 32767]
                let value = sample < 0 ? sample * 32768 : sample * 32767;
                if (this.format === "ulaw") {
                  value = encodeSample(Math.round(value));
                }

                encodedArray[i] = value;
              }

              // Send the buffered data to the main script
              this.port.postMessage([encodedArray, maxVolume]);

              // Clear the buffer after sending
              this.buffer = [];
            }
          }
          return true; // Continue processing
        }
      }
      registerProcessor("raw-audio-processor", RawAudioProcessor);
  `,
      ],
      { type: "application/javascript" }
    ),
    Ta = URL.createObjectURL(Ia);
  class yn {
    static async create({
      sampleRate: t,
      format: n,
      preferHeadphonesForIosDevices: o,
    }) {
      let r = null,
        i = null;
      try {
        const mediaDevicesCheck = function (type) {
          if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            if (type) {
              return navigator.mediaDevices.getUserMedia({ audio: type });
            } else {
              return navigator.mediaDevices.getUserMedia({ audio: !0 });
            }
          } else {
            return Promise.reject(
              new Error("getUserMedia is not supported in this environment")
            );
          }
        };
        const l = {
            sampleRate: { ideal: t },
            echoCancellation: { ideal: !0 },
            noiseSuppression: { ideal: !0 },
          },
          c = await mediaDevicesCheck();
        if (
          (c == null || c.getTracks().forEach((v) => v.stop()),
          ([
            "iPad Simulator",
            "iPhone Simulator",
            "iPod Simulator",
            "iPad",
            "iPhone",
            "iPod",
          ].includes(navigator.platform) ||
            (navigator.userAgent.includes("Mac") &&
              "ontouchend" in document)) &&
            o)
        ) {
          const v = (
            await window.navigator.mediaDevices.enumerateDevices()
          ).find(
            (f) =>
              f.kind === "audioinput" &&
              ["airpod", "headphone", "earphone"].find((_) =>
                f.label.toLowerCase().includes(_)
              )
          );
          v && (l.deviceId = { ideal: v.deviceId });
        }
        const d = navigator.mediaDevices.getSupportedConstraints().sampleRate;
        r = new window.AudioContext(d ? { sampleRate: t } : {});
        const u = r.createAnalyser();
        d ||
          (await r.audioWorklet.addModule(
            "https://cdn.jsdelivr.net/npm/@alexanderolsen/libsamplerate-js@2.1.2/dist/libsamplerate.worklet.js"
          )),
          await r.audioWorklet.addModule(Ta),
          (i = await mediaDevicesCheck(l));
        const m = r.createMediaStreamSource(i),
          p = new AudioWorkletNode(r, "raw-audio-processor");
        return (
          p.port.postMessage({ type: "setFormat", format: n, sampleRate: t }),
          m.connect(u),
          u.connect(p),
          new yn(r, u, p, i)
        );
      } catch (l) {
        var a, s;
        throw (
          ((a = i) == null || a.getTracks().forEach((c) => c.stop()),
          (s = r) == null || s.close(),
          l)
        );
      }
    }
    constructor(t, n, o, r) {
      (this.context = void 0),
        (this.analyser = void 0),
        (this.worklet = void 0),
        (this.inputStream = void 0),
        (this.context = t),
        (this.analyser = n),
        (this.worklet = o),
        (this.inputStream = r);
    }
    async close() {
      this.inputStream.getTracks().forEach((t) => t.stop()),
        await this.context.close();
    }
  }
  const Ra = new Blob(
      [
        `
      const decodeTable = [0,132,396,924,1980,4092,8316,16764];
      
      export function decodeSample(muLawSample) {
        let sign;
        let exponent;
        let mantissa;
        let sample;
        muLawSample = ~muLawSample;
        sign = (muLawSample & 0x80);
        exponent = (muLawSample >> 4) & 0x07;
        mantissa = muLawSample & 0x0F;
        sample = decodeTable[exponent] + (mantissa << (exponent+3));
        if (sign !== 0) sample = -sample;

        return sample;
      }
      
      class AudioConcatProcessor extends AudioWorkletProcessor {
        constructor() {
          super();
          this.buffers = []; // Initialize an empty buffer
          this.cursor = 0;
          this.currentBuffer = null;
          this.wasInterrupted = false;
          this.finished = false;
          
          this.port.onmessage = ({ data }) => {
            switch (data.type) {
              case "setFormat":
                this.format = data.format;
                break;
              case "buffer":
                this.wasInterrupted = false;
                this.buffers.push(
                  this.format === "ulaw"
                    ? new Uint8Array(data.buffer)
                    : new Int16Array(data.buffer)
                );
                break;
              case "interrupt":
                this.wasInterrupted = true;
                break;
              case "clearInterrupted":
                if (this.wasInterrupted) {
                  this.wasInterrupted = false;
                  this.buffers = [];
                  this.currentBuffer = null;
                }
            }
          };
        }
        process(_, outputs) {
          let finished = false;
          const output = outputs[0][0];
          for (let i = 0; i < output.length; i++) {
            if (!this.currentBuffer) {
              if (this.buffers.length === 0) {
                finished = true;
                break;
              }
              this.currentBuffer = this.buffers.shift();
              this.cursor = 0;
            }

            let value = this.currentBuffer[this.cursor];
            if (this.format === "ulaw") {
              value = decodeSample(value);
            }
            output[i] = value / 32768;
            this.cursor++;

            if (this.cursor >= this.currentBuffer.length) {
              this.currentBuffer = null;
            }
          }

          if (this.finished !== finished) {
            this.finished = finished;
            this.port.postMessage({ type: "process", finished });
          }

          return true; // Continue processing
        }
      }

      registerProcessor("audio-concat-processor", AudioConcatProcessor);
    `,
      ],
      { type: "application/javascript" }
    ),
    Oa = URL.createObjectURL(Ra);
  class xn {
    static async create({ sampleRate: t, format: n }) {
      let o = null;
      try {
        o = new AudioContext({ sampleRate: t });
        const i = o.createAnalyser(),
          a = o.createGain();
        a.connect(i),
          i.connect(o.destination),
          await o.audioWorklet.addModule(Oa);
        const s = new AudioWorkletNode(o, "audio-concat-processor");
        return (
          s.port.postMessage({ type: "setFormat", format: n }),
          s.connect(a),
          new xn(o, i, a, s)
        );
      } catch (i) {
        var r;
        throw ((r = o) == null || r.close(), i);
      }
    }
    constructor(t, n, o, r) {
      (this.context = void 0),
        (this.analyser = void 0),
        (this.gain = void 0),
        (this.worklet = void 0),
        (this.context = t),
        (this.analyser = n),
        (this.gain = o),
        (this.worklet = r);
    }
    async close() {
      await this.context.close();
    }
  }
  function cr(e) {
    return !!e.type;
  }
  let Na = class Yi {
    static async create(t) {
      let n = null;
      try {
        var o;
        const i = (o = t.origin) != null ? o : "wss://api.elevenlabs.io",
          a = t.signedUrl
            ? t.signedUrl
            : i + "/v1/convai/conversation?agent_id=" + t.agentId,
          s = ["convai"];
        t.authorization && s.push(`bearer.${t.authorization}`),
          (n = new WebSocket(a, s));
        const l = await new Promise((v, f) => {
            n.addEventListener(
              "open",
              () => {
                var _;
                const h = { type: "conversation_initiation_client_data" };
                var g, x, b, w;
                t.overrides &&
                  (h.conversation_config_override = {
                    agent: {
                      prompt:
                        (g = t.overrides.agent) == null ? void 0 : g.prompt,
                      first_message:
                        (x = t.overrides.agent) == null
                          ? void 0
                          : x.firstMessage,
                      language:
                        (b = t.overrides.agent) == null ? void 0 : b.language,
                    },
                    tts: {
                      voice_id:
                        (w = t.overrides.tts) == null ? void 0 : w.voiceId,
                    },
                  }),
                  t.customLlmExtraBody &&
                    (h.custom_llm_extra_body = t.customLlmExtraBody),
                  t.dynamicVariables &&
                    (h.dynamic_variables = t.dynamicVariables),
                  (_ = n) == null || _.send(JSON.stringify(h));
              },
              { once: !0 }
            ),
              n.addEventListener("error", f),
              n.addEventListener("close", f),
              n.addEventListener(
                "message",
                (_) => {
                  const h = JSON.parse(_.data);
                  cr(h) &&
                    (h.type === "conversation_initiation_metadata"
                      ? v(h.conversation_initiation_metadata_event)
                      : console.warn(
                          "First received message is not conversation metadata."
                        ));
                },
                { once: !0 }
              );
          }),
          {
            conversation_id: c,
            agent_output_audio_format: d,
            user_input_audio_format: u,
          } = l,
          m = ur(u ?? "pcm_16000"),
          p = ur(d);
        return new Yi(n, c, m, p);
      } catch (i) {
        var r;
        throw ((r = n) == null || r.close(), i);
      }
    }
    constructor(t, n, o, r) {
      (this.socket = void 0),
        (this.conversationId = void 0),
        (this.inputFormat = void 0),
        (this.outputFormat = void 0),
        (this.socket = t),
        (this.conversationId = n),
        (this.inputFormat = o),
        (this.outputFormat = r);
    }
    close() {
      this.socket.close();
    }
    sendMessage(t) {
      this.socket.send(JSON.stringify(t));
    }
  };
  function ur(e) {
    const [t, n] = e.split("_");
    if (!["pcm", "ulaw"].includes(t)) throw new Error(`Invalid format: ${e}`);
    const o = parseInt(n);
    if (isNaN(o)) throw new Error(`Invalid sample rate: ${n}`);
    return { format: t, sampleRate: o };
  }
  const La = { clientTools: {} },
    Da = {
      onConnect: () => {},
      onDebug: () => {},
      onDisconnect: () => {},
      onError: () => {},
      onMessage: () => {},
      onModeChange: () => {},
      onStatusChange: () => {},
      onCanSendFeedbackChange: () => {},
    };
  class bn {
    static async startSession(t) {
      const n = Rt({}, La, Da, t);
      n.onStatusChange({ status: "connecting" }),
        n.onCanSendFeedbackChange({ canSendFeedback: !1 });
      let o = null,
        r = null,
        i = null;
      try {
        return (
          (r = await Na.create(t)),
          ([o, i] = await Promise.all([
            yn.create(
              Rt({}, r.inputFormat, {
                preferHeadphonesForIosDevices: t.preferHeadphonesForIosDevices,
              })
            ),
            xn.create(r.outputFormat),
          ])),
          new bn(n, r, o, i)
        );
      } catch (c) {
        var a, s, l;
        throw (
          (n.onStatusChange({ status: "disconnected" }),
          (a = r) == null || a.close(),
          await ((s = o) == null ? void 0 : s.close()),
          await ((l = i) == null ? void 0 : l.close()),
          c)
        );
      }
    }
    constructor(t, n, o, r) {
      var i = this;
      (this.options = void 0),
        (this.connection = void 0),
        (this.input = void 0),
        (this.output = void 0),
        (this.lastInterruptTimestamp = 0),
        (this.mode = "listening"),
        (this.status = "connecting"),
        (this.inputFrequencyData = void 0),
        (this.outputFrequencyData = void 0),
        (this.volume = 1),
        (this.currentEventId = 1),
        (this.lastFeedbackEventId = 1),
        (this.canSendFeedback = !1),
        (this.endSession = async function () {
          i.status === "connected" &&
            (i.updateStatus("disconnecting"),
            i.connection.close(),
            await i.input.close(),
            await i.output.close(),
            i.updateStatus("disconnected"));
        }),
        (this.updateMode = (a) => {
          a !== this.mode &&
            ((this.mode = a), this.options.onModeChange({ mode: a }));
        }),
        (this.updateStatus = (a) => {
          a !== this.status &&
            ((this.status = a), this.options.onStatusChange({ status: a }));
        }),
        (this.updateCanSendFeedback = () => {
          const a = this.currentEventId !== this.lastFeedbackEventId;
          this.canSendFeedback !== a &&
            ((this.canSendFeedback = a),
            this.options.onCanSendFeedbackChange({ canSendFeedback: a }));
        }),
        (this.onEvent = async function (a) {
          try {
            const l = JSON.parse(a.data);
            if (!cr(l)) return;
            switch (l.type) {
              case "interruption":
                l.interruption_event &&
                  (i.lastInterruptTimestamp = l.interruption_event.event_id),
                  i.fadeOutAudio();
                break;
              case "agent_response":
                i.options.onMessage({
                  source: "ai",
                  message: l.agent_response_event.agent_response,
                });
                break;
              case "user_transcript":
                i.options.onMessage({
                  source: "user",
                  message: l.user_transcription_event.user_transcript,
                });
                break;
              case "internal_tentative_agent_response":
                i.options.onDebug({
                  type: "tentative_agent_response",
                  response:
                    l.tentative_agent_response_internal_event
                      .tentative_agent_response,
                });
                break;
              case "client_tool_call":
                if (
                  i.options.clientTools.hasOwnProperty(
                    l.client_tool_call.tool_name
                  )
                ) {
                  try {
                    var s;
                    const c =
                      (s = await i.options.clientTools[
                        l.client_tool_call.tool_name
                      ](l.client_tool_call.parameters)) != null
                        ? s
                        : "Client tool execution successful.";
                    i.connection.sendMessage({
                      type: "client_tool_result",
                      tool_call_id: l.client_tool_call.tool_call_id,
                      result: c,
                      is_error: !1,
                    });
                  } catch (c) {
                    i.onError(
                      "Client tool execution failed with following error: " +
                        (c == null ? void 0 : c.message),
                      { clientToolName: l.client_tool_call.tool_name }
                    ),
                      i.connection.sendMessage({
                        type: "client_tool_result",
                        tool_call_id: l.client_tool_call.tool_call_id,
                        result:
                          "Client tool execution failed: " +
                          (c == null ? void 0 : c.message),
                        is_error: !0,
                      });
                  }
                  break;
                }
                if (i.options.onUnhandledClientToolCall) {
                  i.options.onUnhandledClientToolCall(l.client_tool_call);
                  break;
                }
                i.onError(
                  `Client tool with name ${l.client_tool_call.tool_name} is not defined on client`,
                  { clientToolName: l.client_tool_call.tool_name }
                ),
                  i.connection.sendMessage({
                    type: "client_tool_result",
                    tool_call_id: l.client_tool_call.tool_call_id,
                    result: `Client tool with name ${l.client_tool_call.tool_name} is not defined on client`,
                    is_error: !0,
                  });
                break;
              case "audio":
                i.lastInterruptTimestamp <= l.audio_event.event_id &&
                  (i.addAudioBase64Chunk(l.audio_event.audio_base_64),
                  (i.currentEventId = l.audio_event.event_id),
                  i.updateCanSendFeedback(),
                  i.updateMode("speaking"));
                break;
              case "ping":
                i.connection.sendMessage({
                  type: "pong",
                  event_id: l.ping_event.event_id,
                });
                break;
              default:
                i.options.onDebug(l);
            }
          } catch {
            return void i.onError("Failed to parse event data", { event: a });
          }
        }),
        (this.onInputWorkletMessage = (a) => {
          this.status === "connected" &&
            this.connection.sendMessage({
              user_audio_chunk: Aa(a.data[0].buffer),
            });
        }),
        (this.onOutputWorkletMessage = ({ data: a }) => {
          a.type === "process" &&
            this.updateMode(a.finished ? "listening" : "speaking");
        }),
        (this.addAudioBase64Chunk = async function (a) {
          (i.output.gain.gain.value = i.volume),
            i.output.worklet.port.postMessage({ type: "clearInterrupted" }),
            i.output.worklet.port.postMessage({
              type: "buffer",
              buffer: ka(a),
            });
        }),
        (this.fadeOutAudio = async function () {
          i.updateMode("listening"),
            i.output.worklet.port.postMessage({ type: "interrupt" }),
            i.output.gain.gain.exponentialRampToValueAtTime(
              1e-4,
              i.output.context.currentTime + 2
            ),
            setTimeout(() => {
              (i.output.gain.gain.value = i.volume),
                i.output.worklet.port.postMessage({ type: "clearInterrupted" });
            }, 2e3);
        }),
        (this.onError = (a, s) => {
          console.error(a, s), this.options.onError(a, s);
        }),
        (this.calculateVolume = (a) => {
          if (a.length === 0) return 0;
          let s = 0;
          for (let l = 0; l < a.length; l++) s += a[l] / 255;
          return (s /= a.length), s < 0 ? 0 : s > 1 ? 1 : s;
        }),
        (this.getId = () => this.connection.conversationId),
        (this.setVolume = ({ volume: a }) => {
          this.volume = a;
        }),
        (this.getInputByteFrequencyData = () => (
          this.inputFrequencyData != null ||
            (this.inputFrequencyData = new Uint8Array(
              this.input.analyser.frequencyBinCount
            )),
          this.input.analyser.getByteFrequencyData(this.inputFrequencyData),
          this.inputFrequencyData
        )),
        (this.getOutputByteFrequencyData = () => (
          this.outputFrequencyData != null ||
            (this.outputFrequencyData = new Uint8Array(
              this.output.analyser.frequencyBinCount
            )),
          this.output.analyser.getByteFrequencyData(this.outputFrequencyData),
          this.outputFrequencyData
        )),
        (this.getInputVolume = () =>
          this.calculateVolume(this.getInputByteFrequencyData())),
        (this.getOutputVolume = () =>
          this.calculateVolume(this.getOutputByteFrequencyData())),
        (this.sendFeedback = (a) => {
          this.canSendFeedback
            ? (this.connection.sendMessage({
                type: "feedback",
                score: a ? "like" : "dislike",
                event_id: this.currentEventId,
              }),
              (this.lastFeedbackEventId = this.currentEventId),
              this.updateCanSendFeedback())
            : console.warn(
                this.lastFeedbackEventId === 0
                  ? "Cannot send feedback: the conversation has not started yet."
                  : "Cannot send feedback: feedback has already been sent for the current response."
              );
        }),
        (this.options = t),
        (this.connection = n),
        (this.input = o),
        (this.output = r),
        this.options.onConnect({ conversationId: n.conversationId }),
        this.connection.socket.addEventListener("message", (a) => {
          this.onEvent(a);
        }),
        this.connection.socket.addEventListener("error", (a) => {
          this.updateStatus("disconnected"), this.onError("Socket error", a);
        }),
        this.connection.socket.addEventListener("close", () => {
          this.updateStatus("disconnected"), this.options.onDisconnect();
        }),
        (this.input.worklet.port.onmessage = this.onInputWorkletMessage),
        (this.output.worklet.port.onmessage = this.onOutputWorkletMessage),
        this.updateStatus("connected");
    }
  }
  function Ma(e, t, n = "https://api.elevenlabs.io") {
    return fetch(`${n}/v1/convai/conversations/${e}/feedback`, {
      method: "POST",
      body: JSON.stringify({ feedback: t ? "like" : "dislike" }),
      headers: { "Content-Type": "application/json" },
    });
  }
  function wn() {
    return (
      (wn = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }),
      wn.apply(null, arguments)
    );
  }
  function Fa(e) {
    const t = O(null),
      n = O(null),
      [o, r] = E("disconnected"),
      [i, a] = E(!1),
      [s, l] = E("listening");
    return (
      L(
        () => () => {
          var c;
          (c = t.current) == null || c.endSession();
        },
        []
      ),
      {
        startSession: async (c) => {
          if (t.current) return t.current.getId();
          if (n.current) return (await n.current).getId();
          try {
            return (
              (n.current = bn.startSession(
                wn({}, e ?? {}, c ?? {}, {
                  onModeChange: ({ mode: d }) => {
                    l(d);
                  },
                  onStatusChange: ({ status: d }) => {
                    r(d);
                  },
                  onCanSendFeedbackChange: ({ canSendFeedback: d }) => {
                    a(d);
                  },
                })
              )),
              (t.current = await n.current),
              t.current.getId()
            );
          } finally {
            n.current = null;
          }
        },
        endSession: async () => {
          const c = t.current;
          (t.current = null), await (c == null ? void 0 : c.endSession());
        },
        setVolume: ({ volume: c }) => {
          var d;
          (d = t.current) == null || d.setVolume({ volume: c });
        },
        getInputByteFrequencyData: () => {
          var c;
          return (c = t.current) == null
            ? void 0
            : c.getInputByteFrequencyData();
        },
        getOutputByteFrequencyData: () => {
          var c;
          return (c = t.current) == null
            ? void 0
            : c.getOutputByteFrequencyData();
        },
        getInputVolume: () => {
          var c, d;
          return (c = (d = t.current) == null ? void 0 : d.getInputVolume()) !=
            null
            ? c
            : 0;
        },
        getOutputVolume: () => {
          var c, d;
          return (c = (d = t.current) == null ? void 0 : d.getOutputVolume()) !=
            null
            ? c
            : 0;
        },
        sendFeedback: (c) => {
          var d;
          (d = t.current) == null || d.sendFeedback(c);
        },
        status: o,
        canSendFeedback: i,
        isSpeaking: s === "speaking",
      }
    );
  }
  function Ba(e) {
    return y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      height: "24px",
      width: "24px",
      ...e,
      children: y("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
      }),
    });
  }
  function dr(e) {
    return y("svg", {
      viewBox: "0 0 640 640",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      stroke: "currentColor",
      fill: "currentColor",
      ...e,
      children: y("path", {
        d: "M 82.6 88.6 l 104 -24 c 11.3 -2.6 22.9 3.3 27.5 13.9 l 48 112 c 4.2 9.8 1.4 21.3 -6.9 28 l -60.6 49.6 c 36 76.7 98.9 140.5 177.2 177.2 l 49.6 -60.6 c 6.8 -8.3 18.2 -11.1 28 -6.9 l 112 48 C 572.1 430.5 578 442.1 575.4 453.4 l -24 104 C 548.9 568.2 539.3 576 528 576 c -256.1 0 -464 -207.5 -464 -464 c 0 -11.2 7.7 -20.9 18.6 -23.4 z",
      }),
    });
  }
  function $a(e) {
    return y("svg", {
      viewBox: "0 0 640 640",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      stroke: "currentColor",
      fill: "currentColor",
      ...e,
      children: y("path", {
        d: "M 371.8 445.4 l 49.6 -60.6 c 6.8 -8.3 18.2 -11.1 28 -6.9 l 112 48 c 10.7 4.6 16.5 16.1 13.9 27.5 l -24 104 c -2.5 10.8 -12.1 18.6 -23.4 18.6 c -100.7 0 -193.7 -32.4 -269.7 -86.9 l 80 -61.8 c 10.9 6.5 22.1 12.7 33.6 18.1 z m -365.6 76.7 L 164.9 399.5 C 102.1 320.4 64 220.9 64 112 c 0 -11.2 7.7 -20.9 18.6 -23.4 l 104 -24 c 11.3 -2.6 22.9 3.3 27.5 13.9 l 48 112 c 4.2 9.8 1.4 21.3 -6.9 28 l -60.6 49.6 c 12.2 26.1 27.9 50.3 46 72.8 L 594.5 67.4 C 601.5 62 611.5 63.2 617 70.2 L 636.6 95.4 c 5.4 7 4.2 17 -2.8 22.4 l -588.4 454.7 c -7 5.4 -17 4.2 -22.5 -2.8 l -19.6 -25.3 c -5.4 -6.8 -4.1 -16.9 2.9 -22.3 z",
      }),
    });
  }
  function Va(e) {
    return y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      className: "lucide lucide-thumbs-up",
      ...e,
      children: [
        y("path", { d: "M7 10v12" }),
        y("path", {
          d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
        }),
      ],
    });
  }
  function Wa(e) {
    return y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      ...e,
      children: [
        y("path", { d: "M17 14V2" }),
        y("path", {
          d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
        }),
      ],
    });
  }
  const P = {
      wrapper: "_wrapper_edaxv_15",
      box: "_box_edaxv_36",
      open: "_open_edaxv_54",
      expandable: "_expandable_edaxv_59",
      termsShown: "_termsShown_edaxv_65",
      compact: "_compact_edaxv_69",
      avatar: "_avatar_edaxv_75",
      avatarBackground: "_avatarBackground_edaxv_91",
      avatarImage: "_avatarImage_edaxv_101",
      canvas: "_canvas_edaxv_113",
      actions: "_actions_edaxv_118",
      hasLanguageSelect: "_hasLanguageSelect_edaxv_126",
      actionButtons: "_actionButtons_edaxv_136",
      status: "_status_edaxv_145",
      btn: "_btn_edaxv_159",
      disabled: "_disabled_edaxv_205",
      secondary: "_secondary_edaxv_219",
      iconBtn: "_iconBtn_edaxv_233",
      select: "_select_edaxv_237",
      ellipsis: "_ellipsis_edaxv_243",
      icon: "_icon_edaxv_233",
      minimize: "_minimize_edaxv_263",
      openContent: "_openContent_edaxv_278",
      closedContent: "_closedContent_edaxv_293",
      poweredBy: "_poweredBy_edaxv_310",
      full: "_full_edaxv_320",
      terms: "_terms_edaxv_65",
      strong: "_strong_edaxv_355",
      termsFooter: "_termsFooter_edaxv_387",
      feedback: "_feedback_edaxv_398",
      show: "_show_edaxv_414",
      flag: "_flag_edaxv_424",
      selectContent: "_selectContent_edaxv_432",
      selectViewport: "_selectViewport_edaxv_443",
      selectValue: "_selectValue_edaxv_447",
      selectIcon: "_selectIcon_edaxv_453",
      selectItem: "_selectItem_edaxv_461",
      selectItemIndicator: "_selectItemIndicator_edaxv_480",
      selectScrollButton: "_selectScrollButton_edaxv_489",
    },
    Ha = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uOffsets[7];
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform sampler2D uPerlinTexture;

in vec2 vUv;

out vec4 outColor;

const float PI = 3.14159265358979323846;

// Draw a single oval with soft edges and calculate its gradient color
bool drawOval(vec2 polarUv, vec2 polarCenter, float a, float b, bool reverseGradient, float softness, out vec4 color) {
    vec2 p = polarUv - polarCenter;
    float oval = (p.x * p.x) / (a * a) + (p.y * p.y) / (b * b);
    
    float edge = smoothstep(1.0, 1.0 - softness, oval);
    
    if (edge > 0.0) {
        float gradient = reverseGradient ? (1.0 - (p.x / a + 1.0) / 2.0) : ((p.x / a + 1.0) / 2.0);
        color = vec4(vec3(gradient), 0.8 * edge);
        return true;
    }
    return false;
}

// Map grayscale value to a 4-color ramp (color1, color2, color3, color4)
vec3 colorRamp(float grayscale, vec3 color1, vec3 color2, vec3 color3, vec3 color4) {
    if (grayscale < 0.33) {
        return mix(color1, color2, grayscale * 3.0);
    } else if (grayscale < 0.66) {
        return mix(color2, color3, (grayscale - 0.33) * 3.0);
    } else {
        return mix(color3, color4, (grayscale - 0.66) * 3.0);
    }
}

vec2 hash2(vec2 p) {
    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);
}

// 2D noise for the ring
float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    
    vec2 u = f * f * (3.0 - 2.0 * f);
    float n = mix(
        mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
            dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
        mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
            dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
        u.y
    );

    return 0.5 + 0.5 * n;
}

float sharpRing(vec2 uv, float theta, float time) {
    float ringStart = 1.0;
    float ringWidth = 0.5;
    float noiseScale = 5.0;
    
    vec2 noiseCoord = vec2(theta / (2.0 * PI), time * 0.1);
    noiseCoord *= noiseScale;
    
    float noise = noise2D(noiseCoord);
    noise = (noise - 0.5) * 4.0;
    
    return ringStart + noise * ringWidth * 1.5;
}

float smoothRing(vec2 uv, float time) {
    float angle = atan(uv.y, uv.x);
    if (angle < 0.0) angle += 2.0 * PI;
    
    vec2 noiseCoord = vec2(angle / (2.0 * PI), time * 0.1);
    noiseCoord *= 6.0;
    
    float noise = noise2D(noiseCoord);
    noise = (noise - 0.5) * 8.0;
    
    float ringStart = 0.9;
    float ringWidth = 0.3;
    
    return ringStart + noise * ringWidth;
}

void main() {
    // Normalize vUv to be centered around (0.0, 0.0)
    vec2 uv = vUv * 2.0 - 1.0;

    // Convert uv to polar coordinates
    float radius = length(uv);
    float theta = atan(uv.y, uv.x);
    if (theta < 0.0) theta += 2.0 * PI; // Normalize theta to [0, 2*PI]

    // Initialize the base color to white
    vec4 color = vec4(1.0, 1.0, 1.0, 1.0);

    // Original parameters for the ovals in polar coordinates
    float originalCenters[7] = float[7](0.0, 0.5 * PI, 1.0 * PI, 1.5 * PI, 2.0 * PI, 2.5 * PI, 3.0 * PI);

    // Parameters for the animated centers in polar coordinates
    float centers[7];
    for (int i = 0; i < 7; i++) {
        centers[i] = originalCenters[i] + 0.5 * sin(uTime / 20.0 + uOffsets[i]);
    }

    float a, b;
    vec4 ovalColor;

    // Check if the pixel is inside any of the ovals
    for (int i = 0; i < 7; i++) {
        float noise = texture(uPerlinTexture, vec2(mod(centers[i] + uTime * 0.05, 1.0), 0.5)).r;
        a = noise * 1.5; // Increased variance: goes from 0.0 to 1.0
        b = noise * 4.5; // Tall semi-minor axis
        bool reverseGradient = (i % 2 == 1); // Reverse gradient for every second oval

        // Calculate the distance in polar coordinates
        float distTheta = abs(theta - centers[i]);
        if (distTheta > PI) distTheta = 2.0 * PI - distTheta; // Shortest distance on circle
        float distRadius = radius;

        float softness = 0.4; // Controls edge softness (e.g. how much blur is applied to the ovals)

        // Check if the pixel is inside the oval in polar coordinates
        if (drawOval(vec2(distTheta, distRadius), vec2(0.0, 0.0), a, b, reverseGradient, softness, ovalColor)) {
            // Blend the oval color with the existing color
            color.rgb = mix(color.rgb, ovalColor.rgb, ovalColor.a);
            color.a = max(color.a, ovalColor.a); // Max alpha
        }
    }
    
    // Calculate both noisy rings
    float ringRadius1 = sharpRing(uv, theta, uTime);
    float ringRadius2 = smoothRing(uv, uTime);
    
    // Blend both rings
    float ringAlpha1 = (radius >= ringRadius1) ? 0.3 : 0.0;
    float ringAlpha2 = smoothstep(ringRadius2 - 0.05, ringRadius2 + 0.05, radius) * 0.25;
    
    float totalRingAlpha = max(ringAlpha1, ringAlpha2);
    
    // Apply screen blend mode for combined rings
    vec3 ringColor = vec3(1.0); // White ring color
    color.rgb = 1.0 - (1.0 - color.rgb) * (1.0 - ringColor * totalRingAlpha);

    // Define colours to ramp against greyscale (could increase the amount of colours in the ramp)
    vec3 color1 = vec3(0.0, 0.0, 0.0); // Black
    vec3 color2 = uColor1; // Darker Color
    vec3 color3 = uColor2; // Lighter Color
    vec3 color4 = vec3(1.0, 1.0, 1.0); // White

    // Convert grayscale color to the color ramp
    float luminance = color.r; 
    color.rgb = colorRamp(luminance, color1, color2, color3, color4); // Apply the color ramp

    outColor = color;
}
`,
    Ua = `#version 300 es
precision highp float;

in vec2 position;

out vec2 vUv;

void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0, 1);
}
`,
    fr = 0,
    za = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]),
    ja =
      "https://storage.googleapis.com/eleven-public-cdn/images/perlin-noise.png",
    be = class be {
      constructor(t) {
        Oe(this, "gl");
        Oe(this, "program");
        Oe(this, "startTime");
        Oe(this, "rafId", null);
        Oe(this, "resizeObserver");
        Oe(this, "copyNoiseImage", () => {
          this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            0,
            this.gl.RGBA,
            this.gl.RGBA,
            this.gl.UNSIGNED_BYTE,
            be.noiseImage
          ),
            this.gl.generateMipmap(this.gl.TEXTURE_2D);
        });
        Oe(this, "render", () => {
          if (!this.gl) {
            this.rafId = null;
            return;
          }
          const t = (performance.now() - this.startTime) / 1e3;
          this.gl.uniform1f(
            this.gl.getUniformLocation(this.program, "uTime"),
            t
          ),
            this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4),
            (this.rafId = requestAnimationFrame(this.render));
        });
        const n = t.getContext("webgl2", { depth: !1, stencil: !1 });
        this.gl = n;
        const o = this.getShader(n.FRAGMENT_SHADER, Ha),
          r = this.getShader(n.VERTEX_SHADER, Ua);
        if (!o || !r) throw new Error("Failed to compile shaders");
        if (
          ((this.program = n.createProgram()),
          n.attachShader(this.program, o),
          n.attachShader(this.program, r),
          n.linkProgram(this.program),
          !n.getProgramParameter(this.program, n.LINK_STATUS))
        )
          throw new Error("Failed to link program");
        const i = n.createTexture();
        n.bindTexture(n.TEXTURE_2D, i),
          n.texImage2D(
            n.TEXTURE_2D,
            0,
            n.RGBA,
            1,
            1,
            0,
            n.RGBA,
            n.UNSIGNED_BYTE,
            new Uint8Array([128, 128, 128, 255])
          ),
          be.noiseImage ||
            ((be.noiseImage = new Image()),
            (be.noiseImage.crossOrigin = "anonymous"),
            (be.noiseImage.src = ja)),
          be.noiseImage.complete
            ? this.copyNoiseImage()
            : be.noiseImage.addEventListener("load", this.copyNoiseImage);
        const a = n.createBuffer();
        n.bindBuffer(n.ARRAY_BUFFER, a),
          n.bufferData(n.ARRAY_BUFFER, za, n.STATIC_DRAW),
          n.vertexAttribPointer(fr, 2, n.FLOAT, !1, 0, 0),
          n.enableVertexAttribArray(fr),
          n.useProgram(this.program),
          n.uniform1i(n.getUniformLocation(this.program, "uPerlinTexture"), 0),
          n.uniform1fv(
            n.getUniformLocation(this.program, "uOffsets"),
            new Float32Array(7).map(() => Math.random() * Math.PI * 2)
          ),
          this.updateColors("#2792DC", "#9CE6E6"),
          (this.resizeObserver = new ResizeObserver((l) => {
            const c = l[0];
            let d;
            c.devicePixelContentBoxSize
              ? (d = c.devicePixelContentBoxSize[0])
              : (d = c.contentBoxSize[0]),
              (t.width = Math.min(512, d.inlineSize)),
              (t.height = Math.min(512, d.blockSize)),
              this.updateViewport();
          }));
        const s = t.parentElement;
        if (s)
          try {
            this.resizeObserver.observe(s, { box: "device-pixel-content-box" });
          } catch {
            this.resizeObserver.observe(s);
          }
        (this.startTime = performance.now()),
          (this.rafId = requestAnimationFrame(this.render));
      }
      dispose() {
        var t, n, o;
        this.rafId !== null && cancelAnimationFrame(this.rafId),
          (t = this.resizeObserver) == null || t.disconnect(),
          (o =
            (n = this.gl) == null
              ? void 0
              : n.getExtension("WEBGL_lose_context")) == null ||
            o.loseContext(),
          (this.gl = null),
          (this.program = null);
      }
      updateViewport() {
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
      }
      updateColors(t, n) {
        this.updateColor("uColor1", t), this.updateColor("uColor2", n);
      }
      updateColor(t, n) {
        try {
          const o = parseInt(n.slice(1, 3), 16) / 255,
            r = parseInt(n.slice(3, 5), 16) / 255,
            i = parseInt(n.slice(5, 7), 16) / 255;
          this.gl.uniform3fv(this.gl.getUniformLocation(this.program, t), [
            Math.pow(o, 2.2),
            Math.pow(r, 2.2),
            Math.pow(i, 2.2),
          ]);
        } catch (o) {
          console.error(`[ConversationalAI] Failed to parse ${n} as color:`, o);
        }
      }
      getShader(t, n) {
        const o = this.gl.createShader(t);
        return (
          this.gl.shaderSource(o, n),
          this.gl.compileShader(o),
          this.gl.getShaderParameter(o, this.gl.COMPILE_STATUS)
            ? o
            : (this.gl.deleteShader(o), null)
        );
      }
    };
  Oe(be, "noiseImage");
  let Cn = be;
  function qa({
    getInputVolume: e,
    getOutputVolume: t,
    isSpeaking: n,
    status: o,
    config: r,
  }) {
    const i = O(null),
      a = O(null);
    return (
      L(() => {
        if (o === "disconnected") {
          (i.current.style.transform = ""),
            (a.current.style.transform = ""),
            (a.current.style.opacity = "");
          return;
        }
        let s;
        function l() {
          const c = e(),
            d = t(),
            u = n ? 1 : 0.5,
            m = n ? 1 : 1 - c * 0.6,
            p = n ? 1 + d * 0.6 : 1;
          (i.current.style.transform = `scale(${p})`),
            (a.current.style.transform = `scale(${m})`),
            (a.current.style.opacity = `${u}`),
            (s = requestAnimationFrame(l));
        }
        return (
          l(),
          () => {
            cancelAnimationFrame(s);
          }
        );
      }, [o]),
      y("div", {
        className: P.avatar,
        children: [
          y("div", { ref: i, className: P.avatarBackground }),
          y("div", {
            ref: a,
            style: {
              backgroundImage:
                r.type === "image"
                  ? `url(${r.url})`
                  : r.type === "url"
                  ? `url(${r.custom_url})`
                  : void 0,
            },
            className: P.avatarImage,
            children:
              r.type === "orb" &&
              y(Ka, { color1: r.color_1, color2: r.color_2 }),
          }),
        ],
      })
    );
  }
  function Ka({ color1: e, color2: t }) {
    const n = O(null),
      o = O(null);
    return (
      L(() => {
        var r;
        try {
          o.current = new Cn(n.current);
        } catch {
          (r = o.current) == null || r.dispose(), (o.current = null);
        }
        return () => {
          var i;
          (i = o.current) == null || i.dispose();
        };
      }, []),
      L(() => {
        var r;
        (r = o.current) == null || r.updateColors(e, t);
      }, [e, t]),
      y("canvas", { className: P.canvas, ref: n })
    );
  }
  function pr(e) {
    var t,
      n,
      o = "";
    if (typeof e == "string" || typeof e == "number") o += e;
    else if (typeof e == "object")
      if (Array.isArray(e)) {
        var r = e.length;
        for (t = 0; t < r; t++)
          e[t] && (n = pr(e[t])) && (o && (o += " "), (o += n));
      } else for (n in e) e[n] && (o && (o += " "), (o += n));
    return o;
  }
  function ve() {
    for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)
      (e = arguments[n]) && (t = pr(e)) && (o && (o += " "), (o += t));
    return o;
  }
  function hr() {
    return y("div", {
      className: P.poweredBy,
      // children: "",
    });
  }
  const Sn = {
    en: { name: "English", flagCode: "us", languageCode: "en" },
    zh: { name: "Chinese", flagCode: "cn", languageCode: "zh" },
    es: { name: "Spanish", flagCode: "es", languageCode: "es" },
    hi: { name: "Hindi", flagCode: "in", languageCode: "hi" },
    pt: { name: "Portuguese", flagCode: "pt", languageCode: "pt" },
    fr: { name: "French", flagCode: "fr", languageCode: "fr" },
    de: { name: "German", flagCode: "de", languageCode: "de" },
    ja: { name: "Japanese", flagCode: "jp", languageCode: "ja" },
    ar: { name: "Arabic", flagCode: "ae", languageCode: "ar" },
    ru: { name: "Russian", flagCode: "ru", languageCode: "ru" },
    ko: { name: "Korean", flagCode: "kr", languageCode: "ko" },
    id: { name: "Indonesian", flagCode: "id", languageCode: "id" },
    it: { name: "Italian", flagCode: "it", languageCode: "it" },
    nl: { name: "Dutch", flagCode: "nl", languageCode: "nl" },
    tr: { name: "Turkish", flagCode: "tr", languageCode: "tr" },
    pl: { name: "Polish", flagCode: "pl", languageCode: "pl" },
    sv: { name: "Swedish", flagCode: "se", languageCode: "sv" },
    fil: { name: "Filipino", flagCode: "ph", languageCode: "fi" },
    ms: { name: "Malay", flagCode: "my", languageCode: "ms" },
    ro: { name: "Romanian", flagCode: "ro", languageCode: "ro" },
    uk: { name: "Ukrainian", flagCode: "ua", languageCode: "uk" },
    el: { name: "Greek", flagCode: "gr", languageCode: "el" },
    cs: { name: "Czech", flagCode: "cz", languageCode: "cs" },
    da: { name: "Danish", flagCode: "dk", languageCode: "da" },
    fi: { name: "Finnish", flagCode: "fi", languageCode: "fi" },
    bg: { name: "Bulgarian", flagCode: "bg", languageCode: "bg" },
    hr: { name: "Croatian", flagCode: "hr", languageCode: "hr" },
    sk: { name: "Slovak", flagCode: "sk", languageCode: "sk" },
    ta: { name: "Tamil", flagCode: "in", languageCode: "ta" },
    hu: { name: "Hungarian", flagCode: "hu", languageCode: "hu" },
    no: { name: "Norwegian", flagCode: "no", languageCode: "no" },
    vi: { name: "Vietnamese", flagCode: "vn", languageCode: "vi" },
  };
  function _r(e, [t, n]) {
    return Math.min(n, Math.max(t, e));
  }
  function ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (r) {
      if ((e == null || e(r), n === !1 || !r.defaultPrevented))
        return t == null ? void 0 : t(r);
    };
  }
  function mr(e, t = []) {
    let n = [];
    function o(i, a) {
      const s = Le(a),
        l = n.length;
      n = [...n, a];
      function c(u) {
        const { scope: m, children: p, ...v } = u,
          f = (m == null ? void 0 : m[e][l]) || s,
          _ = Z(() => v, Object.values(v));
        return y(f.Provider, { value: _, children: p });
      }
      function d(u, m) {
        const p = (m == null ? void 0 : m[e][l]) || s,
          v = Xe(p);
        if (v) return v;
        if (a !== void 0) return a;
        throw new Error(`\`${u}\` must be used within \`${i}\``);
      }
      return (c.displayName = i + "Provider"), [c, d];
    }
    const r = () => {
      const i = n.map((a) => Le(a));
      return function (s) {
        const l = (s == null ? void 0 : s[e]) || i;
        return Z(() => ({ [`__scope${e}`]: { ...s, [e]: l } }), [s, l]);
      };
    };
    return (r.scopeName = e), [o, Ya(r, ...t)];
  }
  function Ya(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
      const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
      return function (i) {
        const a = o.reduce((s, { useScope: l, scopeName: c }) => {
          const u = l(i)[`__scope${c}`];
          return { ...s, ...u };
        }, {});
        return Z(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
      };
    };
    return (n.scopeName = t.scopeName), n;
  }
  function Ga(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t);
  }
  function vr(...e) {
    return (t) => e.forEach((n) => Ga(n, t));
  }
  function oe(...e) {
    return Y(vr(...e), e);
  }
  var ht = D((e, t) => {
    const { children: n, ...o } = e,
      r = Me.toArray(n),
      i = r.find(Za);
    if (i) {
      const a = i.props.children,
        s = r.map((l) =>
          l === i
            ? Me.count(a) > 1
              ? Me.only(null)
              : Pe(a)
              ? a.props.children
              : null
            : l
        );
      return y(En, { ...o, ref: t, children: Pe(a) ? pt(a, void 0, s) : null });
    }
    return y(En, { ...o, ref: t, children: n });
  });
  ht.displayName = "Slot";
  var En = D((e, t) => {
    const { children: n, ...o } = e;
    if (Pe(n)) {
      const r = Qa(n);
      return pt(n, { ...Ja(o, n.props), ref: t ? vr(t, r) : r });
    }
    return Me.count(n) > 1 ? Me.only(null) : null;
  });
  En.displayName = "SlotClone";
  var Xa = ({ children: e }) => y(ne, { children: e });
  function Za(e) {
    return Pe(e) && e.type === Xa;
  }
  function Ja(e, t) {
    const n = { ...t };
    for (const o in t) {
      const r = e[o],
        i = t[o];
      /^on[A-Z]/.test(o)
        ? r && i
          ? (n[o] = (...s) => {
              i(...s), r(...s);
            })
          : r && (n[o] = r)
        : o === "style"
        ? (n[o] = { ...r, ...i })
        : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
    }
    return { ...e, ...n };
  }
  function Qa(e) {
    var o, r;
    let t =
        (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
          ? void 0
          : o.get,
      n = t && "isReactWarning" in t && t.isReactWarning;
    return n
      ? e.ref
      : ((t =
          (r = Object.getOwnPropertyDescriptor(e, "ref")) == null
            ? void 0
            : r.get),
        (n = t && "isReactWarning" in t && t.isReactWarning),
        n ? e.props.ref : e.props.ref || e.ref);
  }
  function es(e) {
    const t = e + "CollectionProvider",
      [n, o] = mr(t),
      [r, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
      a = (p) => {
        const { scope: v, children: f } = p,
          _ = Ae.useRef(null),
          h = Ae.useRef(new Map()).current;
        return y(r, { scope: v, itemMap: h, collectionRef: _, children: f });
      };
    a.displayName = t;
    const s = e + "CollectionSlot",
      l = Ae.forwardRef((p, v) => {
        const { scope: f, children: _ } = p,
          h = i(s, f),
          g = oe(v, h.collectionRef);
        return y(ht, { ref: g, children: _ });
      });
    l.displayName = s;
    const c = e + "CollectionItemSlot",
      d = "data-radix-collection-item",
      u = Ae.forwardRef((p, v) => {
        const { scope: f, children: _, ...h } = p,
          g = Ae.useRef(null),
          x = oe(v, g),
          b = i(c, f);
        return (
          Ae.useEffect(
            () => (
              b.itemMap.set(g, { ref: g, ...h }), () => void b.itemMap.delete(g)
            )
          ),
          y(ht, { [d]: "", ref: x, children: _ })
        );
      });
    u.displayName = c;
    function m(p) {
      const v = i(e + "CollectionConsumer", p);
      return Ae.useCallback(() => {
        const _ = v.collectionRef.current;
        if (!_) return [];
        const h = Array.from(_.querySelectorAll(`[${d}]`));
        return Array.from(v.itemMap.values()).sort(
          (b, w) => h.indexOf(b.ref.current) - h.indexOf(w.ref.current)
        );
      }, [v.collectionRef, v.itemMap]);
    }
    return [{ Provider: a, Slot: l, ItemSlot: u }, m, o];
  }
  function ts(e, t = []) {
    let n = [];
    function o(i, a) {
      const s = Le(a),
        l = n.length;
      n = [...n, a];
      const c = (u) => {
        var h;
        const { scope: m, children: p, ...v } = u,
          f = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[l]) || s,
          _ = Z(() => v, Object.values(v));
        return y(f.Provider, { value: _, children: p });
      };
      c.displayName = i + "Provider";
      function d(u, m) {
        var f;
        const p =
            ((f = m == null ? void 0 : m[e]) == null ? void 0 : f[l]) || s,
          v = Xe(p);
        if (v) return v;
        if (a !== void 0) return a;
        throw new Error(`\`${u}\` must be used within \`${i}\``);
      }
      return [c, d];
    }
    const r = () => {
      const i = n.map((a) => Le(a));
      return function (s) {
        const l = (s == null ? void 0 : s[e]) || i;
        return Z(() => ({ [`__scope${e}`]: { ...s, [e]: l } }), [s, l]);
      };
    };
    return (r.scopeName = e), [o, ns(r, ...t)];
  }
  function ns(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
      const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
      return function (i) {
        const a = o.reduce((s, { useScope: l, scopeName: c }) => {
          const u = l(i)[`__scope${c}`];
          return { ...s, ...u };
        }, {});
        return Z(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
      };
    };
    return (n.scopeName = t.scopeName), n;
  }
  var os = Le(void 0);
  function rs(e) {
    const t = Xe(os);
    return e || t || "ltr";
  }
  var is = [
      "a",
      "button",
      "div",
      "form",
      "h2",
      "h3",
      "img",
      "input",
      "label",
      "li",
      "nav",
      "ol",
      "p",
      "span",
      "svg",
      "ul",
    ],
    te = is.reduce((e, t) => {
      const n = D((o, r) => {
        const { asChild: i, ...a } = o,
          s = i ? ht : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          y(s, { ...a, ref: r })
        );
      });
      return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
    }, {});
  function as(e, t) {
    e && Tt(() => e.dispatchEvent(t));
  }
  function ke(e) {
    const t = O(e);
    return (
      L(() => {
        t.current = e;
      }),
      Z(
        () =>
          (...n) => {
            var o;
            return (o = t.current) == null ? void 0 : o.call(t, ...n);
          },
        []
      )
    );
  }
  function ss(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = ke(e);
    L(() => {
      const o = (r) => {
        r.key === "Escape" && n(r);
      };
      return (
        t.addEventListener("keydown", o, { capture: !0 }),
        () => t.removeEventListener("keydown", o, { capture: !0 })
      );
    }, [n, t]);
  }
  var ls = "DismissableLayer",
    Pn = "dismissableLayer.update",
    cs = "dismissableLayer.pointerDownOutside",
    us = "dismissableLayer.focusOutside",
    gr,
    yr = Le({
      layers: new Set(),
      layersWithOutsidePointerEventsDisabled: new Set(),
      branches: new Set(),
    }),
    xr = D((e, t) => {
      const {
          disableOutsidePointerEvents: n = !1,
          onEscapeKeyDown: o,
          onPointerDownOutside: r,
          onFocusOutside: i,
          onInteractOutside: a,
          onDismiss: s,
          ...l
        } = e,
        c = Xe(yr),
        [d, u] = E(null),
        m =
          (d == null ? void 0 : d.ownerDocument) ??
          (globalThis == null ? void 0 : globalThis.document),
        [, p] = E({}),
        v = oe(t, (C) => u(C)),
        f = Array.from(c.layers),
        [_] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
        h = f.indexOf(_),
        g = d ? f.indexOf(d) : -1,
        x = c.layersWithOutsidePointerEventsDisabled.size > 0,
        b = g >= h,
        w = ps((C) => {
          const k = C.target,
            S = [...c.branches].some((M) => M.contains(k));
          !b ||
            S ||
            (r == null || r(C),
            a == null || a(C),
            C.defaultPrevented || s == null || s());
        }, m),
        A = hs((C) => {
          const k = C.target;
          [...c.branches].some((M) => M.contains(k)) ||
            (i == null || i(C),
            a == null || a(C),
            C.defaultPrevented || s == null || s());
        }, m);
      return (
        ss((C) => {
          g === c.layers.size - 1 &&
            (o == null || o(C),
            !C.defaultPrevented && s && (C.preventDefault(), s()));
        }, m),
        L(() => {
          if (d)
            return (
              n &&
                (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((gr = m.body.style.pointerEvents),
                  (m.body.style.pointerEvents = "none")),
                c.layersWithOutsidePointerEventsDisabled.add(d)),
              c.layers.add(d),
              br(),
              () => {
                n &&
                  c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                  (m.body.style.pointerEvents = gr);
              }
            );
        }, [d, m, n, c]),
        L(
          () => () => {
            d &&
              (c.layers.delete(d),
              c.layersWithOutsidePointerEventsDisabled.delete(d),
              br());
          },
          [d, c]
        ),
        L(() => {
          const C = () => p({});
          return (
            document.addEventListener(Pn, C),
            () => document.removeEventListener(Pn, C)
          );
        }, []),
        y(te.div, {
          ...l,
          ref: v,
          style: {
            pointerEvents: x ? (b ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: ee(e.onFocusCapture, A.onFocusCapture),
          onBlurCapture: ee(e.onBlurCapture, A.onBlurCapture),
          onPointerDownCapture: ee(
            e.onPointerDownCapture,
            w.onPointerDownCapture
          ),
        })
      );
    });
  xr.displayName = ls;
  var ds = "DismissableLayerBranch",
    fs = D((e, t) => {
      const n = Xe(yr),
        o = O(null),
        r = oe(t, o);
      return (
        L(() => {
          const i = o.current;
          if (i)
            return (
              n.branches.add(i),
              () => {
                n.branches.delete(i);
              }
            );
        }, [n.branches]),
        y(te.div, { ...e, ref: r })
      );
    });
  fs.displayName = ds;
  function ps(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = ke(e),
      o = O(!1),
      r = O(() => {});
    return (
      L(() => {
        const i = (s) => {
            if (s.target && !o.current) {
              let l = function () {
                wr(cs, n, c, { discrete: !0 });
              };
              const c = { originalEvent: s };
              s.pointerType === "touch"
                ? (t.removeEventListener("click", r.current),
                  (r.current = l),
                  t.addEventListener("click", r.current, { once: !0 }))
                : l();
            } else t.removeEventListener("click", r.current);
            o.current = !1;
          },
          a = window.setTimeout(() => {
            t.addEventListener("pointerdown", i);
          }, 0);
        return () => {
          window.clearTimeout(a),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", r.current);
        };
      }, [t, n]),
      { onPointerDownCapture: () => (o.current = !0) }
    );
  }
  function hs(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = ke(e),
      o = O(!1);
    return (
      L(() => {
        const r = (i) => {
          i.target &&
            !o.current &&
            wr(us, n, { originalEvent: i }, { discrete: !1 });
        };
        return (
          t.addEventListener("focusin", r),
          () => t.removeEventListener("focusin", r)
        );
      }, [t, n]),
      {
        onFocusCapture: () => (o.current = !0),
        onBlurCapture: () => (o.current = !1),
      }
    );
  }
  function br() {
    const e = new CustomEvent(Pn);
    document.dispatchEvent(e);
  }
  function wr(e, t, n, { discrete: o }) {
    const r = n.originalEvent.target,
      i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    t && r.addEventListener(e, t, { once: !0 }),
      o ? as(r, i) : r.dispatchEvent(i);
  }
  var An = 0;
  function _s() {
    L(() => {
      const e = document.querySelectorAll("[data-radix-focus-guard]");
      return (
        document.body.insertAdjacentElement("afterbegin", e[0] ?? Cr()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? Cr()),
        An++,
        () => {
          An === 1 &&
            document
              .querySelectorAll("[data-radix-focus-guard]")
              .forEach((t) => t.remove()),
            An--;
        }
      );
    }, []);
  }
  function Cr() {
    const e = document.createElement("span");
    return (
      e.setAttribute("data-radix-focus-guard", ""),
      (e.tabIndex = 0),
      (e.style.outline = "none"),
      (e.style.opacity = "0"),
      (e.style.position = "fixed"),
      (e.style.pointerEvents = "none"),
      e
    );
  }
  var kn = "focusScope.autoFocusOnMount",
    In = "focusScope.autoFocusOnUnmount",
    Sr = { bubbles: !1, cancelable: !0 },
    ms = "FocusScope",
    Er = D((e, t) => {
      const {
          loop: n = !1,
          trapped: o = !1,
          onMountAutoFocus: r,
          onUnmountAutoFocus: i,
          ...a
        } = e,
        [s, l] = E(null),
        c = ke(r),
        d = ke(i),
        u = O(null),
        m = oe(t, (f) => l(f)),
        p = O({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        }).current;
      L(() => {
        if (o) {
          let f = function (x) {
              if (p.paused || !s) return;
              const b = x.target;
              s.contains(b) ? (u.current = b) : Fe(u.current, { select: !0 });
            },
            _ = function (x) {
              if (p.paused || !s) return;
              const b = x.relatedTarget;
              b !== null && (s.contains(b) || Fe(u.current, { select: !0 }));
            },
            h = function (x) {
              if (document.activeElement === document.body)
                for (const w of x) w.removedNodes.length > 0 && Fe(s);
            };
          document.addEventListener("focusin", f),
            document.addEventListener("focusout", _);
          const g = new MutationObserver(h);
          return (
            s && g.observe(s, { childList: !0, subtree: !0 }),
            () => {
              document.removeEventListener("focusin", f),
                document.removeEventListener("focusout", _),
                g.disconnect();
            }
          );
        }
      }, [o, s, p.paused]),
        L(() => {
          if (s) {
            kr.add(p);
            const f = document.activeElement;
            if (!s.contains(f)) {
              const h = new CustomEvent(kn, Sr);
              s.addEventListener(kn, c),
                s.dispatchEvent(h),
                h.defaultPrevented ||
                  (vs(ws(Pr(s)), { select: !0 }),
                  document.activeElement === f && Fe(s));
            }
            return () => {
              s.removeEventListener(kn, c),
                setTimeout(() => {
                  const h = new CustomEvent(In, Sr);
                  s.addEventListener(In, d),
                    s.dispatchEvent(h),
                    h.defaultPrevented ||
                      Fe(f ?? document.body, { select: !0 }),
                    s.removeEventListener(In, d),
                    kr.remove(p);
                }, 0);
            };
          }
        }, [s, c, d, p]);
      const v = Y(
        (f) => {
          if ((!n && !o) || p.paused) return;
          const _ = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey,
            h = document.activeElement;
          if (_ && h) {
            const g = f.currentTarget,
              [x, b] = gs(g);
            x && b
              ? !f.shiftKey && h === b
                ? (f.preventDefault(), n && Fe(x, { select: !0 }))
                : f.shiftKey &&
                  h === x &&
                  (f.preventDefault(), n && Fe(b, { select: !0 }))
              : h === g && f.preventDefault();
          }
        },
        [n, o, p.paused]
      );
      return y(te.div, { tabIndex: -1, ...a, ref: m, onKeyDown: v });
    });
  Er.displayName = ms;
  function vs(e, { select: t = !1 } = {}) {
    const n = document.activeElement;
    for (const o of e)
      if ((Fe(o, { select: t }), document.activeElement !== n)) return;
  }
  function gs(e) {
    const t = Pr(e),
      n = Ar(t, e),
      o = Ar(t.reverse(), e);
    return [n, o];
  }
  function Pr(e) {
    const t = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (o) => {
          const r = o.tagName === "INPUT" && o.type === "hidden";
          return o.disabled || o.hidden || r
            ? NodeFilter.FILTER_SKIP
            : o.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
        },
      });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
  }
  function Ar(e, t) {
    for (const n of e) if (!ys(n, { upTo: t })) return n;
  }
  function ys(e, { upTo: t }) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e; ) {
      if (t !== void 0 && e === t) return !1;
      if (getComputedStyle(e).display === "none") return !0;
      e = e.parentElement;
    }
    return !1;
  }
  function xs(e) {
    return e instanceof HTMLInputElement && "select" in e;
  }
  function Fe(e, { select: t = !1 } = {}) {
    if (e && e.focus) {
      const n = document.activeElement;
      e.focus({ preventScroll: !0 }), e !== n && xs(e) && t && e.select();
    }
  }
  var kr = bs();
  function bs() {
    let e = [];
    return {
      add(t) {
        const n = e[0];
        t !== n && (n == null || n.pause()), (e = Ir(e, t)), e.unshift(t);
      },
      remove(t) {
        var n;
        (e = Ir(e, t)), (n = e[0]) == null || n.resume();
      },
    };
  }
  function Ir(e, t) {
    const n = [...e],
      o = n.indexOf(t);
    return o !== -1 && n.splice(o, 1), n;
  }
  function ws(e) {
    return e.filter((t) => t.tagName !== "A");
  }
  var se = globalThis != null && globalThis.document ? De : () => {},
    Cs = Pa.useId || (() => {}),
    Ss = 0;
  function Tn(e) {
    const [t, n] = E(Cs());
    return (
      se(() => {
        e || n((o) => o ?? String(Ss++));
      }, [e]),
      e || (t ? `radix-${t}` : "")
    );
  }
  const Es = ["top", "right", "bottom", "left"],
    Be = Math.min,
    le = Math.max,
    Ot = Math.round,
    Nt = Math.floor,
    $e = (e) => ({ x: e, y: e }),
    Ps = { left: "right", right: "left", bottom: "top", top: "bottom" },
    As = { start: "end", end: "start" };
  function Rn(e, t, n) {
    return le(e, Be(t, n));
  }
  function Ie(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Te(e) {
    return e.split("-")[0];
  }
  function tt(e) {
    return e.split("-")[1];
  }
  function On(e) {
    return e === "x" ? "y" : "x";
  }
  function Nn(e) {
    return e === "y" ? "height" : "width";
  }
  function Ve(e) {
    return ["top", "bottom"].includes(Te(e)) ? "y" : "x";
  }
  function Ln(e) {
    return On(Ve(e));
  }
  function ks(e, t, n) {
    n === void 0 && (n = !1);
    const o = tt(e),
      r = Ln(e),
      i = Nn(r);
    let a =
      r === "x"
        ? o === (n ? "end" : "start")
          ? "right"
          : "left"
        : o === "start"
        ? "bottom"
        : "top";
    return t.reference[i] > t.floating[i] && (a = Lt(a)), [a, Lt(a)];
  }
  function Is(e) {
    const t = Lt(e);
    return [Dn(e), t, Dn(t)];
  }
  function Dn(e) {
    return e.replace(/start|end/g, (t) => As[t]);
  }
  function Ts(e, t, n) {
    const o = ["left", "right"],
      r = ["right", "left"],
      i = ["top", "bottom"],
      a = ["bottom", "top"];
    switch (e) {
      case "top":
      case "bottom":
        return n ? (t ? r : o) : t ? o : r;
      case "left":
      case "right":
        return t ? i : a;
      default:
        return [];
    }
  }
  function Rs(e, t, n, o) {
    const r = tt(e);
    let i = Ts(Te(e), n === "start", o);
    return (
      r && ((i = i.map((a) => a + "-" + r)), t && (i = i.concat(i.map(Dn)))), i
    );
  }
  function Lt(e) {
    return e.replace(/left|right|bottom|top/g, (t) => Ps[t]);
  }
  function Os(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }
  function Tr(e) {
    return typeof e != "number"
      ? Os(e)
      : { top: e, right: e, bottom: e, left: e };
  }
  function Dt(e) {
    const { x: t, y: n, width: o, height: r } = e;
    return {
      width: o,
      height: r,
      top: n,
      left: t,
      right: t + o,
      bottom: n + r,
      x: t,
      y: n,
    };
  }
  function Rr(e, t, n) {
    let { reference: o, floating: r } = e;
    const i = Ve(t),
      a = Ln(t),
      s = Nn(a),
      l = Te(t),
      c = i === "y",
      d = o.x + o.width / 2 - r.width / 2,
      u = o.y + o.height / 2 - r.height / 2,
      m = o[s] / 2 - r[s] / 2;
    let p;
    switch (l) {
      case "top":
        p = { x: d, y: o.y - r.height };
        break;
      case "bottom":
        p = { x: d, y: o.y + o.height };
        break;
      case "right":
        p = { x: o.x + o.width, y: u };
        break;
      case "left":
        p = { x: o.x - r.width, y: u };
        break;
      default:
        p = { x: o.x, y: o.y };
    }
    switch (tt(t)) {
      case "start":
        p[a] -= m * (n && c ? -1 : 1);
        break;
      case "end":
        p[a] += m * (n && c ? -1 : 1);
        break;
    }
    return p;
  }
  const Ns = async (e, t, n) => {
    const {
        placement: o = "bottom",
        strategy: r = "absolute",
        middleware: i = [],
        platform: a,
      } = n,
      s = i.filter(Boolean),
      l = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let c = await a.getElementRects({ reference: e, floating: t, strategy: r }),
      { x: d, y: u } = Rr(c, o, l),
      m = o,
      p = {},
      v = 0;
    for (let f = 0; f < s.length; f++) {
      const { name: _, fn: h } = s[f],
        {
          x: g,
          y: x,
          data: b,
          reset: w,
        } = await h({
          x: d,
          y: u,
          initialPlacement: o,
          placement: m,
          strategy: r,
          middlewareData: p,
          rects: c,
          platform: a,
          elements: { reference: e, floating: t },
        });
      (d = g ?? d),
        (u = x ?? u),
        (p = { ...p, [_]: { ...p[_], ...b } }),
        w &&
          v <= 50 &&
          (v++,
          typeof w == "object" &&
            (w.placement && (m = w.placement),
            w.rects &&
              (c =
                w.rects === !0
                  ? await a.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: r,
                    })
                  : w.rects),
            ({ x: d, y: u } = Rr(c, m, l))),
          (f = -1));
    }
    return { x: d, y: u, placement: m, strategy: r, middlewareData: p };
  };
  async function _t(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: o, y: r, platform: i, rects: a, elements: s, strategy: l } = e,
      {
        boundary: c = "clippingAncestors",
        rootBoundary: d = "viewport",
        elementContext: u = "floating",
        altBoundary: m = !1,
        padding: p = 0,
      } = Ie(t, e),
      v = Tr(p),
      _ = s[m ? (u === "floating" ? "reference" : "floating") : u],
      h = Dt(
        await i.getClippingRect({
          element:
            (n = await (i.isElement == null ? void 0 : i.isElement(_))) ==
              null || n
              ? _
              : _.contextElement ||
                (await (i.getDocumentElement == null
                  ? void 0
                  : i.getDocumentElement(s.floating))),
          boundary: c,
          rootBoundary: d,
          strategy: l,
        })
      ),
      g =
        u === "floating"
          ? { x: o, y: r, width: a.floating.width, height: a.floating.height }
          : a.reference,
      x = await (i.getOffsetParent == null
        ? void 0
        : i.getOffsetParent(s.floating)),
      b = (await (i.isElement == null ? void 0 : i.isElement(x)))
        ? (await (i.getScale == null ? void 0 : i.getScale(x))) || {
            x: 1,
            y: 1,
          }
        : { x: 1, y: 1 },
      w = Dt(
        i.convertOffsetParentRelativeRectToViewportRelativeRect
          ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
              elements: s,
              rect: g,
              offsetParent: x,
              strategy: l,
            })
          : g
      );
    return {
      top: (h.top - w.top + v.top) / b.y,
      bottom: (w.bottom - h.bottom + v.bottom) / b.y,
      left: (h.left - w.left + v.left) / b.x,
      right: (w.right - h.right + v.right) / b.x,
    };
  }
  const Ls = (e) => ({
      name: "arrow",
      options: e,
      async fn(t) {
        const {
            x: n,
            y: o,
            placement: r,
            rects: i,
            platform: a,
            elements: s,
            middlewareData: l,
          } = t,
          { element: c, padding: d = 0 } = Ie(e, t) || {};
        if (c == null) return {};
        const u = Tr(d),
          m = { x: n, y: o },
          p = Ln(r),
          v = Nn(p),
          f = await a.getDimensions(c),
          _ = p === "y",
          h = _ ? "top" : "left",
          g = _ ? "bottom" : "right",
          x = _ ? "clientHeight" : "clientWidth",
          b = i.reference[v] + i.reference[p] - m[p] - i.floating[v],
          w = m[p] - i.reference[p],
          A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
        let C = A ? A[x] : 0;
        (!C || !(await (a.isElement == null ? void 0 : a.isElement(A)))) &&
          (C = s.floating[x] || i.floating[v]);
        const k = b / 2 - w / 2,
          S = C / 2 - f[v] / 2 - 1,
          M = Be(u[h], S),
          G = Be(u[g], S),
          j = M,
          F = C - f[v] - G,
          V = C / 2 - f[v] / 2 + k,
          X = Rn(j, V, F),
          B =
            !l.arrow &&
            tt(r) != null &&
            V !== X &&
            i.reference[v] / 2 - (V < j ? M : G) - f[v] / 2 < 0,
          W = B ? (V < j ? V - j : V - F) : 0;
        return {
          [p]: m[p] + W,
          data: {
            [p]: X,
            centerOffset: V - X - W,
            ...(B && { alignmentOffset: W }),
          },
          reset: B,
        };
      },
    }),
    Ds = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "flip",
          options: e,
          async fn(t) {
            var n, o;
            const {
                placement: r,
                middlewareData: i,
                rects: a,
                initialPlacement: s,
                platform: l,
                elements: c,
              } = t,
              {
                mainAxis: d = !0,
                crossAxis: u = !0,
                fallbackPlacements: m,
                fallbackStrategy: p = "bestFit",
                fallbackAxisSideDirection: v = "none",
                flipAlignment: f = !0,
                ..._
              } = Ie(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset) return {};
            const h = Te(r),
              g = Ve(s),
              x = Te(s) === s,
              b = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
              w = m || (x || !f ? [Lt(s)] : Is(s)),
              A = v !== "none";
            !m && A && w.push(...Rs(s, f, v, b));
            const C = [s, ...w],
              k = await _t(t, _),
              S = [];
            let M = ((o = i.flip) == null ? void 0 : o.overflows) || [];
            if ((d && S.push(k[h]), u)) {
              const V = ks(r, a, b);
              S.push(k[V[0]], k[V[1]]);
            }
            if (
              ((M = [...M, { placement: r, overflows: S }]),
              !S.every((V) => V <= 0))
            ) {
              var G, j;
              const V = (((G = i.flip) == null ? void 0 : G.index) || 0) + 1,
                X = C[V];
              if (X)
                return {
                  data: { index: V, overflows: M },
                  reset: { placement: X },
                };
              let B =
                (j = M.filter((W) => W.overflows[0] <= 0).sort(
                  (W, R) => W.overflows[1] - R.overflows[1]
                )[0]) == null
                  ? void 0
                  : j.placement;
              if (!B)
                switch (p) {
                  case "bestFit": {
                    var F;
                    const W =
                      (F = M.filter((R) => {
                        if (A) {
                          const q = Ve(R.placement);
                          return q === g || q === "y";
                        }
                        return !0;
                      })
                        .map((R) => [
                          R.placement,
                          R.overflows
                            .filter((q) => q > 0)
                            .reduce((q, re) => q + re, 0),
                        ])
                        .sort((R, q) => R[1] - q[1])[0]) == null
                        ? void 0
                        : F[0];
                    W && (B = W);
                    break;
                  }
                  case "initialPlacement":
                    B = s;
                    break;
                }
              if (r !== B) return { reset: { placement: B } };
            }
            return {};
          },
        }
      );
    };
  function Or(e, t) {
    return {
      top: e.top - t.height,
      right: e.right - t.width,
      bottom: e.bottom - t.height,
      left: e.left - t.width,
    };
  }
  function Nr(e) {
    return Es.some((t) => e[t] >= 0);
  }
  const Ms = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: o = "referenceHidden", ...r } = Ie(e, t);
          switch (o) {
            case "referenceHidden": {
              const i = await _t(t, { ...r, elementContext: "reference" }),
                a = Or(i, n.reference);
              return {
                data: { referenceHiddenOffsets: a, referenceHidden: Nr(a) },
              };
            }
            case "escaped": {
              const i = await _t(t, { ...r, altBoundary: !0 }),
                a = Or(i, n.floating);
              return { data: { escapedOffsets: a, escaped: Nr(a) } };
            }
            default:
              return {};
          }
        },
      }
    );
  };
  async function Fs(e, t) {
    const { placement: n, platform: o, elements: r } = e,
      i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
      a = Te(n),
      s = tt(n),
      l = Ve(n) === "y",
      c = ["left", "top"].includes(a) ? -1 : 1,
      d = i && l ? -1 : 1,
      u = Ie(t, e);
    let {
      mainAxis: m,
      crossAxis: p,
      alignmentAxis: v,
    } = typeof u == "number"
      ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: u.mainAxis || 0,
          crossAxis: u.crossAxis || 0,
          alignmentAxis: u.alignmentAxis,
        };
    return (
      s && typeof v == "number" && (p = s === "end" ? v * -1 : v),
      l ? { x: p * d, y: m * c } : { x: m * c, y: p * d }
    );
  }
  const Bs = function (e) {
      return (
        e === void 0 && (e = 0),
        {
          name: "offset",
          options: e,
          async fn(t) {
            var n, o;
            const { x: r, y: i, placement: a, middlewareData: s } = t,
              l = await Fs(t, e);
            return a === ((n = s.offset) == null ? void 0 : n.placement) &&
              (o = s.arrow) != null &&
              o.alignmentOffset
              ? {}
              : { x: r + l.x, y: i + l.y, data: { ...l, placement: a } };
          },
        }
      );
    },
    $s = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "shift",
          options: e,
          async fn(t) {
            const { x: n, y: o, placement: r } = t,
              {
                mainAxis: i = !0,
                crossAxis: a = !1,
                limiter: s = {
                  fn: (_) => {
                    let { x: h, y: g } = _;
                    return { x: h, y: g };
                  },
                },
                ...l
              } = Ie(e, t),
              c = { x: n, y: o },
              d = await _t(t, l),
              u = Ve(Te(r)),
              m = On(u);
            let p = c[m],
              v = c[u];
            if (i) {
              const _ = m === "y" ? "top" : "left",
                h = m === "y" ? "bottom" : "right",
                g = p + d[_],
                x = p - d[h];
              p = Rn(g, p, x);
            }
            if (a) {
              const _ = u === "y" ? "top" : "left",
                h = u === "y" ? "bottom" : "right",
                g = v + d[_],
                x = v - d[h];
              v = Rn(g, v, x);
            }
            const f = s.fn({ ...t, [m]: p, [u]: v });
            return {
              ...f,
              data: { x: f.x - n, y: f.y - o, enabled: { [m]: i, [u]: a } },
            };
          },
        }
      );
    },
    Vs = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          options: e,
          fn(t) {
            const { x: n, y: o, placement: r, rects: i, middlewareData: a } = t,
              { offset: s = 0, mainAxis: l = !0, crossAxis: c = !0 } = Ie(e, t),
              d = { x: n, y: o },
              u = Ve(r),
              m = On(u);
            let p = d[m],
              v = d[u];
            const f = Ie(s, t),
              _ =
                typeof f == "number"
                  ? { mainAxis: f, crossAxis: 0 }
                  : { mainAxis: 0, crossAxis: 0, ...f };
            if (l) {
              const x = m === "y" ? "height" : "width",
                b = i.reference[m] - i.floating[x] + _.mainAxis,
                w = i.reference[m] + i.reference[x] - _.mainAxis;
              p < b ? (p = b) : p > w && (p = w);
            }
            if (c) {
              var h, g;
              const x = m === "y" ? "width" : "height",
                b = ["top", "left"].includes(Te(r)),
                w =
                  i.reference[u] -
                  i.floating[x] +
                  ((b && ((h = a.offset) == null ? void 0 : h[u])) || 0) +
                  (b ? 0 : _.crossAxis),
                A =
                  i.reference[u] +
                  i.reference[x] +
                  (b ? 0 : ((g = a.offset) == null ? void 0 : g[u]) || 0) -
                  (b ? _.crossAxis : 0);
              v < w ? (v = w) : v > A && (v = A);
            }
            return { [m]: p, [u]: v };
          },
        }
      );
    },
    Ws = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "size",
          options: e,
          async fn(t) {
            var n, o;
            const { placement: r, rects: i, platform: a, elements: s } = t,
              { apply: l = () => {}, ...c } = Ie(e, t),
              d = await _t(t, c),
              u = Te(r),
              m = tt(r),
              p = Ve(r) === "y",
              { width: v, height: f } = i.floating;
            let _, h;
            u === "top" || u === "bottom"
              ? ((_ = u),
                (h =
                  m ===
                  ((await (a.isRTL == null ? void 0 : a.isRTL(s.floating)))
                    ? "start"
                    : "end")
                    ? "left"
                    : "right"))
              : ((h = u), (_ = m === "end" ? "top" : "bottom"));
            const g = f - d.top - d.bottom,
              x = v - d.left - d.right,
              b = Be(f - d[_], g),
              w = Be(v - d[h], x),
              A = !t.middlewareData.shift;
            let C = b,
              k = w;
            if (
              ((n = t.middlewareData.shift) != null && n.enabled.x && (k = x),
              (o = t.middlewareData.shift) != null && o.enabled.y && (C = g),
              A && !m)
            ) {
              const M = le(d.left, 0),
                G = le(d.right, 0),
                j = le(d.top, 0),
                F = le(d.bottom, 0);
              p
                ? (k =
                    v - 2 * (M !== 0 || G !== 0 ? M + G : le(d.left, d.right)))
                : (C =
                    f - 2 * (j !== 0 || F !== 0 ? j + F : le(d.top, d.bottom)));
            }
            await l({ ...t, availableWidth: k, availableHeight: C });
            const S = await a.getDimensions(s.floating);
            return v !== S.width || f !== S.height
              ? { reset: { rects: !0 } }
              : {};
          },
        }
      );
    };
  function Mt() {
    return typeof window < "u";
  }
  function nt(e) {
    return Lr(e) ? (e.nodeName || "").toLowerCase() : "#document";
  }
  function ce(e) {
    var t;
    return (
      (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
      window
    );
  }
  function ge(e) {
    var t;
    return (t = (Lr(e) ? e.ownerDocument : e.document) || window.document) ==
      null
      ? void 0
      : t.documentElement;
  }
  function Lr(e) {
    return Mt() ? e instanceof Node || e instanceof ce(e).Node : !1;
  }
  function he(e) {
    return Mt() ? e instanceof Element || e instanceof ce(e).Element : !1;
  }
  function ye(e) {
    return Mt()
      ? e instanceof HTMLElement || e instanceof ce(e).HTMLElement
      : !1;
  }
  function Dr(e) {
    return !Mt() || typeof ShadowRoot > "u"
      ? !1
      : e instanceof ShadowRoot || e instanceof ce(e).ShadowRoot;
  }
  function mt(e) {
    const { overflow: t, overflowX: n, overflowY: o, display: r } = _e(e);
    return (
      /auto|scroll|overlay|hidden|clip/.test(t + o + n) &&
      !["inline", "contents"].includes(r)
    );
  }
  function Hs(e) {
    return ["table", "td", "th"].includes(nt(e));
  }
  function Ft(e) {
    return [":popover-open", ":modal"].some((t) => {
      try {
        return e.matches(t);
      } catch {
        return !1;
      }
    });
  }
  function Mn(e) {
    const t = Fn(),
      n = he(e) ? _e(e) : e;
    return (
      n.transform !== "none" ||
      n.perspective !== "none" ||
      (n.containerType ? n.containerType !== "normal" : !1) ||
      (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
      (!t && (n.filter ? n.filter !== "none" : !1)) ||
      ["transform", "perspective", "filter"].some((o) =>
        (n.willChange || "").includes(o)
      ) ||
      ["paint", "layout", "strict", "content"].some((o) =>
        (n.contain || "").includes(o)
      )
    );
  }
  function Us(e) {
    let t = We(e);
    for (; ye(t) && !ot(t); ) {
      if (Mn(t)) return t;
      if (Ft(t)) return null;
      t = We(t);
    }
    return null;
  }
  function Fn() {
    return typeof CSS > "u" || !CSS.supports
      ? !1
      : CSS.supports("-webkit-backdrop-filter", "none");
  }
  function ot(e) {
    return ["html", "body", "#document"].includes(nt(e));
  }
  function _e(e) {
    return ce(e).getComputedStyle(e);
  }
  function Bt(e) {
    return he(e)
      ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
      : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
  }
  function We(e) {
    if (nt(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || (Dr(e) && e.host) || ge(e);
    return Dr(t) ? t.host : t;
  }
  function Mr(e) {
    const t = We(e);
    return ot(t)
      ? e.ownerDocument
        ? e.ownerDocument.body
        : e.body
      : ye(t) && mt(t)
      ? t
      : Mr(t);
  }
  function vt(e, t, n) {
    var o;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const r = Mr(e),
      i = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
      a = ce(r);
    if (i) {
      const s = Bn(a);
      return t.concat(
        a,
        a.visualViewport || [],
        mt(r) ? r : [],
        s && n ? vt(s) : []
      );
    }
    return t.concat(r, vt(r, [], n));
  }
  function Bn(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
  }
  function Fr(e) {
    const t = _e(e);
    let n = parseFloat(t.width) || 0,
      o = parseFloat(t.height) || 0;
    const r = ye(e),
      i = r ? e.offsetWidth : n,
      a = r ? e.offsetHeight : o,
      s = Ot(n) !== i || Ot(o) !== a;
    return s && ((n = i), (o = a)), { width: n, height: o, $: s };
  }
  function $n(e) {
    return he(e) ? e : e.contextElement;
  }
  function rt(e) {
    const t = $n(e);
    if (!ye(t)) return $e(1);
    const n = t.getBoundingClientRect(),
      { width: o, height: r, $: i } = Fr(t);
    let a = (i ? Ot(n.width) : n.width) / o,
      s = (i ? Ot(n.height) : n.height) / r;
    return (
      (!a || !Number.isFinite(a)) && (a = 1),
      (!s || !Number.isFinite(s)) && (s = 1),
      { x: a, y: s }
    );
  }
  const zs = $e(0);
  function Br(e) {
    const t = ce(e);
    return !Fn() || !t.visualViewport
      ? zs
      : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
  }
  function js(e, t, n) {
    return t === void 0 && (t = !1), !n || (t && n !== ce(e)) ? !1 : t;
  }
  function Ze(e, t, n, o) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
      i = $n(e);
    let a = $e(1);
    t && (o ? he(o) && (a = rt(o)) : (a = rt(e)));
    const s = js(i, n, o) ? Br(i) : $e(0);
    let l = (r.left + s.x) / a.x,
      c = (r.top + s.y) / a.y,
      d = r.width / a.x,
      u = r.height / a.y;
    if (i) {
      const m = ce(i),
        p = o && he(o) ? ce(o) : o;
      let v = m,
        f = Bn(v);
      for (; f && o && p !== v; ) {
        const _ = rt(f),
          h = f.getBoundingClientRect(),
          g = _e(f),
          x = h.left + (f.clientLeft + parseFloat(g.paddingLeft)) * _.x,
          b = h.top + (f.clientTop + parseFloat(g.paddingTop)) * _.y;
        (l *= _.x),
          (c *= _.y),
          (d *= _.x),
          (u *= _.y),
          (l += x),
          (c += b),
          (v = ce(f)),
          (f = Bn(v));
      }
    }
    return Dt({ width: d, height: u, x: l, y: c });
  }
  function qs(e) {
    let { elements: t, rect: n, offsetParent: o, strategy: r } = e;
    const i = r === "fixed",
      a = ge(o),
      s = t ? Ft(t.floating) : !1;
    if (o === a || (s && i)) return n;
    let l = { scrollLeft: 0, scrollTop: 0 },
      c = $e(1);
    const d = $e(0),
      u = ye(o);
    if (
      (u || (!u && !i)) &&
      ((nt(o) !== "body" || mt(a)) && (l = Bt(o)), ye(o))
    ) {
      const m = Ze(o);
      (c = rt(o)), (d.x = m.x + o.clientLeft), (d.y = m.y + o.clientTop);
    }
    return {
      width: n.width * c.x,
      height: n.height * c.y,
      x: n.x * c.x - l.scrollLeft * c.x + d.x,
      y: n.y * c.y - l.scrollTop * c.y + d.y,
    };
  }
  function Ks(e) {
    return Array.from(e.getClientRects());
  }
  function Vn(e, t) {
    const n = Bt(e).scrollLeft;
    return t ? t.left + n : Ze(ge(e)).left + n;
  }
  function Ys(e) {
    const t = ge(e),
      n = Bt(e),
      o = e.ownerDocument.body,
      r = le(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
      i = le(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
    let a = -n.scrollLeft + Vn(e);
    const s = -n.scrollTop;
    return (
      _e(o).direction === "rtl" && (a += le(t.clientWidth, o.clientWidth) - r),
      { width: r, height: i, x: a, y: s }
    );
  }
  function Gs(e, t) {
    const n = ce(e),
      o = ge(e),
      r = n.visualViewport;
    let i = o.clientWidth,
      a = o.clientHeight,
      s = 0,
      l = 0;
    if (r) {
      (i = r.width), (a = r.height);
      const c = Fn();
      (!c || (c && t === "fixed")) && ((s = r.offsetLeft), (l = r.offsetTop));
    }
    return { width: i, height: a, x: s, y: l };
  }
  function Xs(e, t) {
    const n = Ze(e, !0, t === "fixed"),
      o = n.top + e.clientTop,
      r = n.left + e.clientLeft,
      i = ye(e) ? rt(e) : $e(1),
      a = e.clientWidth * i.x,
      s = e.clientHeight * i.y,
      l = r * i.x,
      c = o * i.y;
    return { width: a, height: s, x: l, y: c };
  }
  function $r(e, t, n) {
    let o;
    if (t === "viewport") o = Gs(e, n);
    else if (t === "document") o = Ys(ge(e));
    else if (he(t)) o = Xs(t, n);
    else {
      const r = Br(e);
      o = { ...t, x: t.x - r.x, y: t.y - r.y };
    }
    return Dt(o);
  }
  function Vr(e, t) {
    const n = We(e);
    return n === t || !he(n) || ot(n)
      ? !1
      : _e(n).position === "fixed" || Vr(n, t);
  }
  function Zs(e, t) {
    const n = t.get(e);
    if (n) return n;
    let o = vt(e, [], !1).filter((s) => he(s) && nt(s) !== "body"),
      r = null;
    const i = _e(e).position === "fixed";
    let a = i ? We(e) : e;
    for (; he(a) && !ot(a); ) {
      const s = _e(a),
        l = Mn(a);
      !l && s.position === "fixed" && (r = null),
        (
          i
            ? !l && !r
            : (!l &&
                s.position === "static" &&
                !!r &&
                ["absolute", "fixed"].includes(r.position)) ||
              (mt(a) && !l && Vr(e, a))
        )
          ? (o = o.filter((d) => d !== a))
          : (r = s),
        (a = We(a));
    }
    return t.set(e, o), o;
  }
  function Js(e) {
    let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
    const a = [
        ...(n === "clippingAncestors"
          ? Ft(t)
            ? []
            : Zs(t, this._c)
          : [].concat(n)),
        o,
      ],
      s = a[0],
      l = a.reduce((c, d) => {
        const u = $r(t, d, r);
        return (
          (c.top = le(u.top, c.top)),
          (c.right = Be(u.right, c.right)),
          (c.bottom = Be(u.bottom, c.bottom)),
          (c.left = le(u.left, c.left)),
          c
        );
      }, $r(t, s, r));
    return {
      width: l.right - l.left,
      height: l.bottom - l.top,
      x: l.left,
      y: l.top,
    };
  }
  function Qs(e) {
    const { width: t, height: n } = Fr(e);
    return { width: t, height: n };
  }
  function el(e, t, n) {
    const o = ye(t),
      r = ge(t),
      i = n === "fixed",
      a = Ze(e, !0, i, t);
    let s = { scrollLeft: 0, scrollTop: 0 };
    const l = $e(0);
    if (o || (!o && !i))
      if (((nt(t) !== "body" || mt(r)) && (s = Bt(t)), o)) {
        const p = Ze(t, !0, i, t);
        (l.x = p.x + t.clientLeft), (l.y = p.y + t.clientTop);
      } else r && (l.x = Vn(r));
    let c = 0,
      d = 0;
    if (r && !o && !i) {
      const p = r.getBoundingClientRect();
      (d = p.top + s.scrollTop), (c = p.left + s.scrollLeft - Vn(r, p));
    }
    const u = a.left + s.scrollLeft - l.x - c,
      m = a.top + s.scrollTop - l.y - d;
    return { x: u, y: m, width: a.width, height: a.height };
  }
  function Wn(e) {
    return _e(e).position === "static";
  }
  function Wr(e, t) {
    if (!ye(e) || _e(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return ge(e) === n && (n = n.ownerDocument.body), n;
  }
  function Hr(e, t) {
    const n = ce(e);
    if (Ft(e)) return n;
    if (!ye(e)) {
      let r = We(e);
      for (; r && !ot(r); ) {
        if (he(r) && !Wn(r)) return r;
        r = We(r);
      }
      return n;
    }
    let o = Wr(e, t);
    for (; o && Hs(o) && Wn(o); ) o = Wr(o, t);
    return o && ot(o) && Wn(o) && !Mn(o) ? n : o || Us(e) || n;
  }
  const tl = async function (e) {
    const t = this.getOffsetParent || Hr,
      n = this.getDimensions,
      o = await n(e.floating);
    return {
      reference: el(e.reference, await t(e.floating), e.strategy),
      floating: { x: 0, y: 0, width: o.width, height: o.height },
    };
  };
  function nl(e) {
    return _e(e).direction === "rtl";
  }
  const ol = {
    convertOffsetParentRelativeRectToViewportRelativeRect: qs,
    getDocumentElement: ge,
    getClippingRect: Js,
    getOffsetParent: Hr,
    getElementRects: tl,
    getClientRects: Ks,
    getDimensions: Qs,
    getScale: rt,
    isElement: he,
    isRTL: nl,
  };
  function rl(e, t) {
    let n = null,
      o;
    const r = ge(e);
    function i() {
      var s;
      clearTimeout(o), (s = n) == null || s.disconnect(), (n = null);
    }
    function a(s, l) {
      s === void 0 && (s = !1), l === void 0 && (l = 1), i();
      const {
        left: c,
        top: d,
        width: u,
        height: m,
      } = e.getBoundingClientRect();
      if ((s || t(), !u || !m)) return;
      const p = Nt(d),
        v = Nt(r.clientWidth - (c + u)),
        f = Nt(r.clientHeight - (d + m)),
        _ = Nt(c),
        g = {
          rootMargin: -p + "px " + -v + "px " + -f + "px " + -_ + "px",
          threshold: le(0, Be(1, l)) || 1,
        };
      let x = !0;
      function b(w) {
        const A = w[0].intersectionRatio;
        if (A !== l) {
          if (!x) return a();
          A
            ? a(!1, A)
            : (o = setTimeout(() => {
                a(!1, 1e-7);
              }, 1e3));
        }
        x = !1;
      }
      try {
        n = new IntersectionObserver(b, { ...g, root: r.ownerDocument });
      } catch {
        n = new IntersectionObserver(b, g);
      }
      n.observe(e);
    }
    return a(!0), i;
  }
  function il(e, t, n, o) {
    o === void 0 && (o = {});
    const {
        ancestorScroll: r = !0,
        ancestorResize: i = !0,
        elementResize: a = typeof ResizeObserver == "function",
        layoutShift: s = typeof IntersectionObserver == "function",
        animationFrame: l = !1,
      } = o,
      c = $n(e),
      d = r || i ? [...(c ? vt(c) : []), ...vt(t)] : [];
    d.forEach((h) => {
      r && h.addEventListener("scroll", n, { passive: !0 }),
        i && h.addEventListener("resize", n);
    });
    const u = c && s ? rl(c, n) : null;
    let m = -1,
      p = null;
    a &&
      ((p = new ResizeObserver((h) => {
        let [g] = h;
        g &&
          g.target === c &&
          p &&
          (p.unobserve(t),
          cancelAnimationFrame(m),
          (m = requestAnimationFrame(() => {
            var x;
            (x = p) == null || x.observe(t);
          }))),
          n();
      })),
      c && !l && p.observe(c),
      p.observe(t));
    let v,
      f = l ? Ze(e) : null;
    l && _();
    function _() {
      const h = Ze(e);
      f &&
        (h.x !== f.x ||
          h.y !== f.y ||
          h.width !== f.width ||
          h.height !== f.height) &&
        n(),
        (f = h),
        (v = requestAnimationFrame(_));
    }
    return (
      n(),
      () => {
        var h;
        d.forEach((g) => {
          r && g.removeEventListener("scroll", n),
            i && g.removeEventListener("resize", n);
        }),
          u == null || u(),
          (h = p) == null || h.disconnect(),
          (p = null),
          l && cancelAnimationFrame(v);
      }
    );
  }
  const al = Bs,
    sl = $s,
    ll = Ds,
    cl = Ws,
    ul = Ms,
    Ur = Ls,
    dl = Vs,
    fl = (e, t, n) => {
      const o = new Map(),
        r = { platform: ol, ...n },
        i = { ...r.platform, _c: o };
      return Ns(e, t, { ...r, platform: i });
    };
  var $t = typeof document < "u" ? De : L;
  function Vt(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, o, r;
    if (e && t && typeof e == "object") {
      if (Array.isArray(e)) {
        if (((n = e.length), n !== t.length)) return !1;
        for (o = n; o-- !== 0; ) if (!Vt(e[o], t[o])) return !1;
        return !0;
      }
      if (((r = Object.keys(e)), (n = r.length), n !== Object.keys(t).length))
        return !1;
      for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(t, r[o])) return !1;
      for (o = n; o-- !== 0; ) {
        const i = r[o];
        if (!(i === "_owner" && e.$$typeof) && !Vt(e[i], t[i])) return !1;
      }
      return !0;
    }
    return e !== e && t !== t;
  }
  function zr(e) {
    return typeof window > "u"
      ? 1
      : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function jr(e, t) {
    const n = zr(e);
    return Math.round(t * n) / n;
  }
  function Hn(e) {
    const t = O(e);
    return (
      $t(() => {
        t.current = e;
      }),
      t
    );
  }
  function pl(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: o = [],
        platform: r,
        elements: { reference: i, floating: a } = {},
        transform: s = !0,
        whileElementsMounted: l,
        open: c,
      } = e,
      [d, u] = E({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1,
      }),
      [m, p] = E(o);
    Vt(m, o) || p(o);
    const [v, f] = E(null),
      [_, h] = E(null),
      g = Y((R) => {
        R !== A.current && ((A.current = R), f(R));
      }, []),
      x = Y((R) => {
        R !== C.current && ((C.current = R), h(R));
      }, []),
      b = i || v,
      w = a || _,
      A = O(null),
      C = O(null),
      k = O(d),
      S = l != null,
      M = Hn(l),
      G = Hn(r),
      j = Hn(c),
      F = Y(() => {
        if (!A.current || !C.current) return;
        const R = { placement: t, strategy: n, middleware: m };
        G.current && (R.platform = G.current),
          fl(A.current, C.current, R).then((q) => {
            const re = { ...q, isPositioned: j.current !== !1 };
            V.current &&
              !Vt(k.current, re) &&
              ((k.current = re),
              Tt(() => {
                u(re);
              }));
          });
      }, [m, t, n, G, j]);
    $t(() => {
      c === !1 &&
        k.current.isPositioned &&
        ((k.current.isPositioned = !1), u((R) => ({ ...R, isPositioned: !1 })));
    }, [c]);
    const V = O(!1);
    $t(
      () => (
        (V.current = !0),
        () => {
          V.current = !1;
        }
      ),
      []
    ),
      $t(() => {
        if ((b && (A.current = b), w && (C.current = w), b && w)) {
          if (M.current) return M.current(b, w, F);
          F();
        }
      }, [b, w, F, M, S]);
    const X = Z(
        () => ({ reference: A, floating: C, setReference: g, setFloating: x }),
        [g, x]
      ),
      B = Z(() => ({ reference: b, floating: w }), [b, w]),
      W = Z(() => {
        const R = { position: n, left: 0, top: 0 };
        if (!B.floating) return R;
        const q = jr(B.floating, d.x),
          re = jr(B.floating, d.y);
        return s
          ? {
              ...R,
              transform: "translate(" + q + "px, " + re + "px)",
              ...(zr(B.floating) >= 1.5 && { willChange: "transform" }),
            }
          : { position: n, left: q, top: re };
      }, [n, s, B.floating, d.x, d.y]);
    return Z(
      () => ({ ...d, update: F, refs: X, elements: B, floatingStyles: W }),
      [d, F, X, B, W]
    );
  }
  const hl = (e) => {
      function t(n) {
        return {}.hasOwnProperty.call(n, "current");
      }
      return {
        name: "arrow",
        options: e,
        fn(n) {
          const { element: o, padding: r } = typeof e == "function" ? e(n) : e;
          return o && t(o)
            ? o.current != null
              ? Ur({ element: o.current, padding: r }).fn(n)
              : {}
            : o
            ? Ur({ element: o, padding: r }).fn(n)
            : {};
        },
      };
    },
    _l = (e, t) => ({ ...al(e), options: [e, t] }),
    ml = (e, t) => ({ ...sl(e), options: [e, t] }),
    vl = (e, t) => ({ ...dl(e), options: [e, t] }),
    gl = (e, t) => ({ ...ll(e), options: [e, t] }),
    yl = (e, t) => ({ ...cl(e), options: [e, t] }),
    xl = (e, t) => ({ ...ul(e), options: [e, t] }),
    bl = (e, t) => ({ ...hl(e), options: [e, t] });
  var wl = "Arrow",
    qr = D((e, t) => {
      const { children: n, width: o = 10, height: r = 5, ...i } = e;
      return y(te.svg, {
        ...i,
        ref: t,
        width: o,
        height: r,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : y("polygon", { points: "0,0 30,0 15,10" }),
      });
    });
  qr.displayName = wl;
  var Cl = qr;
  function Sl(e) {
    const [t, n] = E(void 0);
    return (
      se(() => {
        if (e) {
          n({ width: e.offsetWidth, height: e.offsetHeight });
          const o = new ResizeObserver((r) => {
            if (!Array.isArray(r) || !r.length) return;
            const i = r[0];
            let a, s;
            if ("borderBoxSize" in i) {
              const l = i.borderBoxSize,
                c = Array.isArray(l) ? l[0] : l;
              (a = c.inlineSize), (s = c.blockSize);
            } else (a = e.offsetWidth), (s = e.offsetHeight);
            n({ width: a, height: s });
          });
          return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
        } else n(void 0);
      }, [e]),
      t
    );
  }
  var Un = "Popper",
    [Kr, Yr] = mr(Un),
    [El, Gr] = Kr(Un),
    Xr = (e) => {
      const { __scopePopper: t, children: n } = e,
        [o, r] = E(null);
      return y(El, { scope: t, anchor: o, onAnchorChange: r, children: n });
    };
  Xr.displayName = Un;
  var Zr = "PopperAnchor",
    Jr = D((e, t) => {
      const { __scopePopper: n, virtualRef: o, ...r } = e,
        i = Gr(Zr, n),
        a = O(null),
        s = oe(t, a);
      return (
        L(() => {
          i.onAnchorChange((o == null ? void 0 : o.current) || a.current);
        }),
        o ? null : y(te.div, { ...r, ref: s })
      );
    });
  Jr.displayName = Zr;
  var zn = "PopperContent",
    [Pl, Al] = Kr(zn),
    Qr = D((e, t) => {
      var T, N, Q, H, $, U;
      const {
          __scopePopper: n,
          side: o = "bottom",
          sideOffset: r = 0,
          align: i = "center",
          alignOffset: a = 0,
          arrowPadding: s = 0,
          avoidCollisions: l = !0,
          collisionBoundary: c = [],
          collisionPadding: d = 0,
          sticky: u = "partial",
          hideWhenDetached: m = !1,
          updatePositionStrategy: p = "optimized",
          onPlaced: v,
          ...f
        } = e,
        _ = Gr(zn, n),
        [h, g] = E(null),
        x = oe(t, (ue) => g(ue)),
        [b, w] = E(null),
        A = Sl(b),
        C = (A == null ? void 0 : A.width) ?? 0,
        k = (A == null ? void 0 : A.height) ?? 0,
        S = o + (i !== "center" ? "-" + i : ""),
        M =
          typeof d == "number"
            ? d
            : { top: 0, right: 0, bottom: 0, left: 0, ...d },
        G = Array.isArray(c) ? c : [c],
        j = G.length > 0,
        F = { padding: M, boundary: G.filter(Il), altBoundary: j },
        {
          refs: V,
          floatingStyles: X,
          placement: B,
          isPositioned: W,
          middlewareData: R,
        } = pl({
          strategy: "fixed",
          placement: S,
          whileElementsMounted: (...ue) =>
            il(...ue, { animationFrame: p === "always" }),
          elements: { reference: _.anchor },
          middleware: [
            _l({ mainAxis: r + k, alignmentAxis: a }),
            l &&
              ml({
                mainAxis: !0,
                crossAxis: !1,
                limiter: u === "partial" ? vl() : void 0,
                ...F,
              }),
            l && gl({ ...F }),
            yl({
              ...F,
              apply: ({
                elements: ue,
                rects: we,
                availableWidth: xt,
                availableHeight: bt,
              }) => {
                const { width: wt, height: yu } = we.reference,
                  Jt = ue.floating.style;
                Jt.setProperty("--radix-popper-available-width", `${xt}px`),
                  Jt.setProperty("--radix-popper-available-height", `${bt}px`),
                  Jt.setProperty("--radix-popper-anchor-width", `${wt}px`),
                  Jt.setProperty("--radix-popper-anchor-height", `${yu}px`);
              },
            }),
            b && bl({ element: b, padding: s }),
            Tl({ arrowWidth: C, arrowHeight: k }),
            m && xl({ strategy: "referenceHidden", ...F }),
          ],
        }),
        [q, re] = ni(B),
        de = ke(v);
      se(() => {
        W && (de == null || de());
      }, [W, de]);
      const ze = (T = R.arrow) == null ? void 0 : T.x,
        je = (N = R.arrow) == null ? void 0 : N.y,
        fe = ((Q = R.arrow) == null ? void 0 : Q.centerOffset) !== 0,
        [ae, Re] = E();
      return (
        se(() => {
          h && Re(window.getComputedStyle(h).zIndex);
        }, [h]),
        y("div", {
          ref: V.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...X,
            transform: W ? X.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ae,
            "--radix-popper-transform-origin": [
              (H = R.transformOrigin) == null ? void 0 : H.x,
              ($ = R.transformOrigin) == null ? void 0 : $.y,
            ].join(" "),
            ...(((U = R.hide) == null ? void 0 : U.referenceHidden) && {
              visibility: "hidden",
              pointerEvents: "none",
            }),
          },
          dir: e.dir,
          children: y(Pl, {
            scope: n,
            placedSide: q,
            onArrowChange: w,
            arrowX: ze,
            arrowY: je,
            shouldHideArrow: fe,
            children: y(te.div, {
              "data-side": q,
              "data-align": re,
              ...f,
              ref: x,
              style: { ...f.style, animation: W ? void 0 : "none" },
            }),
          }),
        })
      );
    });
  Qr.displayName = zn;
  var ei = "PopperArrow",
    kl = { top: "bottom", right: "left", bottom: "top", left: "right" },
    ti = D(function (t, n) {
      const { __scopePopper: o, ...r } = t,
        i = Al(ei, o),
        a = kl[i.placedSide];
      return y("span", {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0",
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)",
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0,
        },
        children: y(Cl, {
          ...r,
          ref: n,
          style: { ...r.style, display: "block" },
        }),
      });
    });
  ti.displayName = ei;
  function Il(e) {
    return e !== null;
  }
  var Tl = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
      var _, h, g;
      const { placement: n, rects: o, middlewareData: r } = t,
        a = ((_ = r.arrow) == null ? void 0 : _.centerOffset) !== 0,
        s = a ? 0 : e.arrowWidth,
        l = a ? 0 : e.arrowHeight,
        [c, d] = ni(n),
        u = { start: "0%", center: "50%", end: "100%" }[d],
        m = (((h = r.arrow) == null ? void 0 : h.x) ?? 0) + s / 2,
        p = (((g = r.arrow) == null ? void 0 : g.y) ?? 0) + l / 2;
      let v = "",
        f = "";
      return (
        c === "bottom"
          ? ((v = a ? u : `${m}px`), (f = `${-l}px`))
          : c === "top"
          ? ((v = a ? u : `${m}px`), (f = `${o.floating.height + l}px`))
          : c === "right"
          ? ((v = `${-l}px`), (f = a ? u : `${p}px`))
          : c === "left" &&
            ((v = `${o.floating.width + l}px`), (f = a ? u : `${p}px`)),
        { data: { x: v, y: f } }
      );
    },
  });
  function ni(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
  }
  var Rl = Xr,
    Ol = Jr,
    Nl = Qr,
    Ll = ti,
    Dl = "Portal",
    oi = D((e, t) => {
      var s;
      const { container: n, ...o } = e,
        [r, i] = E(!1);
      se(() => i(!0), []);
      const a =
        n ||
        (r &&
          ((s = globalThis == null ? void 0 : globalThis.document) == null
            ? void 0
            : s.body));
      return a ? Ae.createPortal(y(te.div, { ...o, ref: t }), a) : null;
    });
  oi.displayName = Dl;
  function ri({ prop: e, defaultProp: t, onChange: n = () => {} }) {
    const [o, r] = Ml({ defaultProp: t, onChange: n }),
      i = e !== void 0,
      a = i ? e : o,
      s = ke(n),
      l = Y(
        (c) => {
          if (i) {
            const u = typeof c == "function" ? c(e) : c;
            u !== e && s(u);
          } else r(c);
        },
        [i, e, r, s]
      );
    return [a, l];
  }
  function Ml({ defaultProp: e, onChange: t }) {
    const n = E(e),
      [o] = n,
      r = O(o),
      i = ke(t);
    return (
      L(() => {
        r.current !== o && (i(o), (r.current = o));
      }, [o, r, i]),
      n
    );
  }
  function Fl(e) {
    const t = O({ value: e, previous: e });
    return Z(
      () => (
        t.current.value !== e &&
          ((t.current.previous = t.current.value), (t.current.value = e)),
        t.current.previous
      ),
      [e]
    );
  }
  var Bl = "VisuallyHidden",
    ii = D((e, t) =>
      y(te.span, {
        ...e,
        ref: t,
        style: {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...e.style,
        },
      })
    );
  ii.displayName = Bl;
  var $l = function (e) {
      if (typeof document > "u") return null;
      var t = Array.isArray(e) ? e[0] : e;
      return t.ownerDocument.body;
    },
    it = new WeakMap(),
    Wt = new WeakMap(),
    Ht = {},
    jn = 0,
    ai = function (e) {
      return e && (e.host || ai(e.parentNode));
    },
    Vl = function (e, t) {
      return t
        .map(function (n) {
          if (e.contains(n)) return n;
          var o = ai(n);
          return o && e.contains(o)
            ? o
            : (console.error(
                "aria-hidden",
                n,
                "in not contained inside",
                e,
                ". Doing nothing"
              ),
              null);
        })
        .filter(function (n) {
          return !!n;
        });
    },
    Wl = function (e, t, n, o) {
      var r = Vl(t, Array.isArray(e) ? e : [e]);
      Ht[n] || (Ht[n] = new WeakMap());
      var i = Ht[n],
        a = [],
        s = new Set(),
        l = new Set(r),
        c = function (u) {
          !u || s.has(u) || (s.add(u), c(u.parentNode));
        };
      r.forEach(c);
      var d = function (u) {
        !u ||
          l.has(u) ||
          Array.prototype.forEach.call(u.children, function (m) {
            if (s.has(m)) d(m);
            else {
              var p = m.getAttribute(o),
                v = p !== null && p !== "false",
                f = (it.get(m) || 0) + 1,
                _ = (i.get(m) || 0) + 1;
              it.set(m, f),
                i.set(m, _),
                a.push(m),
                f === 1 && v && Wt.set(m, !0),
                _ === 1 && m.setAttribute(n, "true"),
                v || m.setAttribute(o, "true");
            }
          });
      };
      return (
        d(t),
        s.clear(),
        jn++,
        function () {
          a.forEach(function (u) {
            var m = it.get(u) - 1,
              p = i.get(u) - 1;
            it.set(u, m),
              i.set(u, p),
              m || (Wt.has(u) || u.removeAttribute(o), Wt.delete(u)),
              p || u.removeAttribute(n);
          }),
            jn--,
            jn ||
              ((it = new WeakMap()),
              (it = new WeakMap()),
              (Wt = new WeakMap()),
              (Ht = {}));
        }
      );
    },
    Hl = function (e, t, n) {
      n === void 0 && (n = "data-aria-hidden");
      var o = Array.from(Array.isArray(e) ? e : [e]),
        r = $l(e);
      return r
        ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))),
          Wl(o, r, n, "aria-hidden"))
        : function () {
            return null;
          };
    },
    xe = function () {
      return (
        (xe =
          Object.assign ||
          function (t) {
            for (var n, o = 1, r = arguments.length; o < r; o++) {
              n = arguments[o];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }),
        xe.apply(this, arguments)
      );
    };
  function si(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
        t.indexOf(o[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
          (n[o[r]] = e[o[r]]);
    return n;
  }
  function Ul(e, t, n) {
    if (n || arguments.length === 2)
      for (var o = 0, r = t.length, i; o < r; o++)
        (i || !(o in t)) &&
          (i || (i = Array.prototype.slice.call(t, 0, o)), (i[o] = t[o]));
    return e.concat(i || Array.prototype.slice.call(t));
  }
  typeof SuppressedError == "function" && SuppressedError;
  var Ut = "right-scroll-bar-position",
    zt = "width-before-scroll-bar",
    zl = "with-scroll-bars-hidden",
    jl = "--removed-body-scroll-bar-size";
  function qn(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e;
  }
  function ql(e, t) {
    var n = E(function () {
      return {
        value: e,
        callback: t,
        facade: {
          get current() {
            return n.value;
          },
          set current(o) {
            var r = n.value;
            r !== o && ((n.value = o), n.callback(o, r));
          },
        },
      };
    })[0];
    return (n.callback = t), n.facade;
  }
  var li = new WeakMap();
  function Kl(e, t) {
    var n = ql(null, function (o) {
      return e.forEach(function (r) {
        return qn(r, o);
      });
    });
    return (
      De(
        function () {
          var o = li.get(n);
          if (o) {
            var r = new Set(o),
              i = new Set(e),
              a = n.current;
            r.forEach(function (s) {
              i.has(s) || qn(s, null);
            }),
              i.forEach(function (s) {
                r.has(s) || qn(s, a);
              });
          }
          li.set(n, e);
        },
        [e]
      ),
      n
    );
  }
  function Yl(e) {
    return e;
  }
  function Gl(e, t) {
    t === void 0 && (t = Yl);
    var n = [],
      o = !1,
      r = {
        read: function () {
          if (o)
            throw new Error(
              "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
            );
          return n.length ? n[n.length - 1] : e;
        },
        useMedium: function (i) {
          var a = t(i, o);
          return (
            n.push(a),
            function () {
              n = n.filter(function (s) {
                return s !== a;
              });
            }
          );
        },
        assignSyncMedium: function (i) {
          for (o = !0; n.length; ) {
            var a = n;
            (n = []), a.forEach(i);
          }
          n = {
            push: function (s) {
              return i(s);
            },
            filter: function () {
              return n;
            },
          };
        },
        assignMedium: function (i) {
          o = !0;
          var a = [];
          if (n.length) {
            var s = n;
            (n = []), s.forEach(i), (a = n);
          }
          var l = function () {
              var d = a;
              (a = []), d.forEach(i);
            },
            c = function () {
              return Promise.resolve().then(l);
            };
          c(),
            (n = {
              push: function (d) {
                a.push(d), c();
              },
              filter: function (d) {
                return (a = a.filter(d)), n;
              },
            });
        },
      };
    return r;
  }
  function Xl(e) {
    e === void 0 && (e = {});
    var t = Gl(null);
    return (t.options = xe({ async: !0, ssr: !1 }, e)), t;
  }
  var ci = function (e) {
    var t = e.sideCar,
      n = si(e, ["sideCar"]);
    if (!t)
      throw new Error(
        "Sidecar: please provide `sideCar` property to import the right car"
      );
    var o = t.read();
    if (!o) throw new Error("Sidecar medium not found");
    return z(o, xe({}, n));
  };
  ci.isSideCarExport = !0;
  function Zl(e, t) {
    return e.useMedium(t), ci;
  }
  var ui = Xl(),
    Kn = function () {},
    jt = D(function (e, t) {
      var n = O(null),
        o = E({
          onScrollCapture: Kn,
          onWheelCapture: Kn,
          onTouchMoveCapture: Kn,
        }),
        r = o[0],
        i = o[1],
        a = e.forwardProps,
        s = e.children,
        l = e.className,
        c = e.removeScrollBar,
        d = e.enabled,
        u = e.shards,
        m = e.sideCar,
        p = e.noIsolation,
        v = e.inert,
        f = e.allowPinchZoom,
        _ = e.as,
        h = _ === void 0 ? "div" : _,
        g = e.gapMode,
        x = si(e, [
          "forwardProps",
          "children",
          "className",
          "removeScrollBar",
          "enabled",
          "shards",
          "sideCar",
          "noIsolation",
          "inert",
          "allowPinchZoom",
          "as",
          "gapMode",
        ]),
        b = m,
        w = Kl([n, t]),
        A = xe(xe({}, x), r);
      return z(
        ne,
        null,
        d &&
          z(b, {
            sideCar: ui,
            removeScrollBar: c,
            shards: u,
            noIsolation: p,
            inert: v,
            setCallbacks: i,
            allowPinchZoom: !!f,
            lockRef: n,
            gapMode: g,
          }),
        a
          ? pt(Me.only(s), xe(xe({}, A), { ref: w }))
          : z(h, xe({}, A, { className: l, ref: w }), s)
      );
    });
  (jt.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
    (jt.classNames = { fullWidth: zt, zeroRight: Ut });
  var Jl = function () {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
  function Ql() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = Jl();
    return t && e.setAttribute("nonce", t), e;
  }
  function ec(e, t) {
    e.styleSheet
      ? (e.styleSheet.cssText = t)
      : e.appendChild(document.createTextNode(t));
  }
  function tc(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e);
  }
  var nc = function () {
      var e = 0,
        t = null;
      return {
        add: function (n) {
          e == 0 && (t = Ql()) && (ec(t, n), tc(t)), e++;
        },
        remove: function () {
          e--,
            !e &&
              t &&
              (t.parentNode && t.parentNode.removeChild(t), (t = null));
        },
      };
    },
    oc = function () {
      var e = nc();
      return function (t, n) {
        L(
          function () {
            return (
              e.add(t),
              function () {
                e.remove();
              }
            );
          },
          [t && n]
        );
      };
    },
    di = function () {
      var e = oc(),
        t = function (n) {
          var o = n.styles,
            r = n.dynamic;
          return e(o, r), null;
        };
      return t;
    },
    rc = { left: 0, top: 0, right: 0, gap: 0 },
    Yn = function (e) {
      return parseInt(e || "", 10) || 0;
    },
    ic = function (e) {
      var t = window.getComputedStyle(document.body),
        n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
        o = t[e === "padding" ? "paddingTop" : "marginTop"],
        r = t[e === "padding" ? "paddingRight" : "marginRight"];
      return [Yn(n), Yn(o), Yn(r)];
    },
    ac = function (e) {
      if ((e === void 0 && (e = "margin"), typeof window > "u")) return rc;
      var t = ic(e),
        n = document.documentElement.clientWidth,
        o = window.innerWidth;
      return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, o - n + t[2] - t[0]),
      };
    },
    sc = di(),
    at = "data-scroll-locked",
    lc = function (e, t, n, o) {
      var r = e.left,
        i = e.top,
        a = e.right,
        s = e.gap;
      return (
        n === void 0 && (n = "margin"),
        `
  .`
          .concat(
            zl,
            ` {
   overflow: hidden `
          )
          .concat(
            o,
            `;
   padding-right: `
          )
          .concat(s, "px ")
          .concat(
            o,
            `;
  }
  body[`
          )
          .concat(
            at,
            `] {
    overflow: hidden `
          )
          .concat(
            o,
            `;
    overscroll-behavior: contain;
    `
          )
          .concat(
            [
              t && "position: relative ".concat(o, ";"),
              n === "margin" &&
                `
    padding-left: `
                  .concat(
                    r,
                    `px;
    padding-top: `
                  )
                  .concat(
                    i,
                    `px;
    padding-right: `
                  )
                  .concat(
                    a,
                    `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                  )
                  .concat(s, "px ")
                  .concat(
                    o,
                    `;
    `
                  ),
              n === "padding" &&
                "padding-right: ".concat(s, "px ").concat(o, ";"),
            ]
              .filter(Boolean)
              .join(""),
            `
  }
  
  .`
          )
          .concat(
            Ut,
            ` {
    right: `
          )
          .concat(s, "px ")
          .concat(
            o,
            `;
  }
  
  .`
          )
          .concat(
            zt,
            ` {
    margin-right: `
          )
          .concat(s, "px ")
          .concat(
            o,
            `;
  }
  
  .`
          )
          .concat(Ut, " .")
          .concat(
            Ut,
            ` {
    right: 0 `
          )
          .concat(
            o,
            `;
  }
  
  .`
          )
          .concat(zt, " .")
          .concat(
            zt,
            ` {
    margin-right: 0 `
          )
          .concat(
            o,
            `;
  }
  
  body[`
          )
          .concat(
            at,
            `] {
    `
          )
          .concat(jl, ": ")
          .concat(
            s,
            `px;
  }
`
          )
      );
    },
    fi = function () {
      var e = parseInt(document.body.getAttribute(at) || "0", 10);
      return isFinite(e) ? e : 0;
    },
    cc = function () {
      L(function () {
        return (
          document.body.setAttribute(at, (fi() + 1).toString()),
          function () {
            var e = fi() - 1;
            e <= 0
              ? document.body.removeAttribute(at)
              : document.body.setAttribute(at, e.toString());
          }
        );
      }, []);
    },
    uc = function (e) {
      var t = e.noRelative,
        n = e.noImportant,
        o = e.gapMode,
        r = o === void 0 ? "margin" : o;
      cc();
      var i = Z(
        function () {
          return ac(r);
        },
        [r]
      );
      return z(sc, { styles: lc(i, !t, r, n ? "" : "!important") });
    },
    Gn = !1;
  if (typeof window < "u")
    try {
      var qt = Object.defineProperty({}, "passive", {
        get: function () {
          return (Gn = !0), !0;
        },
      });
      window.addEventListener("test", qt, qt),
        window.removeEventListener("test", qt, qt);
    } catch {
      Gn = !1;
    }
  var st = Gn ? { passive: !1 } : !1,
    dc = function (e) {
      return e.tagName === "TEXTAREA";
    },
    pi = function (e, t) {
      if (!(e instanceof Element)) return !1;
      var n = window.getComputedStyle(e);
      return (
        n[t] !== "hidden" &&
        !(n.overflowY === n.overflowX && !dc(e) && n[t] === "visible")
      );
    },
    fc = function (e) {
      return pi(e, "overflowY");
    },
    pc = function (e) {
      return pi(e, "overflowX");
    },
    hi = function (e, t) {
      var n = t.ownerDocument,
        o = t;
      do {
        typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
        var r = _i(e, o);
        if (r) {
          var i = mi(e, o),
            a = i[1],
            s = i[2];
          if (a > s) return !0;
        }
        o = o.parentNode;
      } while (o && o !== n.body);
      return !1;
    },
    hc = function (e) {
      var t = e.scrollTop,
        n = e.scrollHeight,
        o = e.clientHeight;
      return [t, n, o];
    },
    _c = function (e) {
      var t = e.scrollLeft,
        n = e.scrollWidth,
        o = e.clientWidth;
      return [t, n, o];
    },
    _i = function (e, t) {
      return e === "v" ? fc(t) : pc(t);
    },
    mi = function (e, t) {
      return e === "v" ? hc(t) : _c(t);
    },
    mc = function (e, t) {
      return e === "h" && t === "rtl" ? -1 : 1;
    },
    vc = function (e, t, n, o, r) {
      var i = mc(e, window.getComputedStyle(t).direction),
        a = i * o,
        s = n.target,
        l = t.contains(s),
        c = !1,
        d = a > 0,
        u = 0,
        m = 0;
      do {
        var p = mi(e, s),
          v = p[0],
          f = p[1],
          _ = p[2],
          h = f - _ - i * v;
        (v || h) && _i(e, s) && ((u += h), (m += v)),
          s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode);
      } while (
        (!l && s !== document.body) ||
        (l && (t.contains(s) || t === s))
      );
      return ((d && Math.abs(u) < 1) || (!d && Math.abs(m) < 1)) && (c = !0), c;
    },
    Kt = function (e) {
      return "changedTouches" in e
        ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
        : [0, 0];
    },
    vi = function (e) {
      return [e.deltaX, e.deltaY];
    },
    gi = function (e) {
      return e && "current" in e ? e.current : e;
    },
    gc = function (e, t) {
      return e[0] === t[0] && e[1] === t[1];
    },
    yc = function (e) {
      return `
  .block-interactivity-`
        .concat(
          e,
          ` {pointer-events: none;}
  .allow-interactivity-`
        )
        .concat(
          e,
          ` {pointer-events: all;}
`
        );
    },
    xc = 0,
    lt = [];
  function bc(e) {
    var t = O([]),
      n = O([0, 0]),
      o = O(),
      r = E(xc++)[0],
      i = E(di)[0],
      a = O(e);
    L(
      function () {
        a.current = e;
      },
      [e]
    ),
      L(
        function () {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(r));
            var f = Ul(
              [e.lockRef.current],
              (e.shards || []).map(gi),
              !0
            ).filter(Boolean);
            return (
              f.forEach(function (_) {
                return _.classList.add("allow-interactivity-".concat(r));
              }),
              function () {
                document.body.classList.remove(
                  "block-interactivity-".concat(r)
                ),
                  f.forEach(function (_) {
                    return _.classList.remove("allow-interactivity-".concat(r));
                  });
              }
            );
          }
        },
        [e.inert, e.lockRef.current, e.shards]
      );
    var s = Y(function (f, _) {
        if (
          ("touches" in f && f.touches.length === 2) ||
          (f.type === "wheel" && f.ctrlKey)
        )
          return !a.current.allowPinchZoom;
        var h = Kt(f),
          g = n.current,
          x = "deltaX" in f ? f.deltaX : g[0] - h[0],
          b = "deltaY" in f ? f.deltaY : g[1] - h[1],
          w,
          A = f.target,
          C = Math.abs(x) > Math.abs(b) ? "h" : "v";
        if ("touches" in f && C === "h" && A.type === "range") return !1;
        var k = hi(C, A);
        if (!k) return !0;
        if ((k ? (w = C) : ((w = C === "v" ? "h" : "v"), (k = hi(C, A))), !k))
          return !1;
        if (
          (!o.current && "changedTouches" in f && (x || b) && (o.current = w),
          !w)
        )
          return !0;
        var S = o.current || w;
        return vc(S, _, f, S === "h" ? x : b);
      }, []),
      l = Y(function (f) {
        var _ = f;
        if (!(!lt.length || lt[lt.length - 1] !== i)) {
          var h = "deltaY" in _ ? vi(_) : Kt(_),
            g = t.current.filter(function (w) {
              return (
                w.name === _.type &&
                (w.target === _.target || _.target === w.shadowParent) &&
                gc(w.delta, h)
              );
            })[0];
          if (g && g.should) {
            _.cancelable && _.preventDefault();
            return;
          }
          if (!g) {
            var x = (a.current.shards || [])
                .map(gi)
                .filter(Boolean)
                .filter(function (w) {
                  return w.contains(_.target);
                }),
              b = x.length > 0 ? s(_, x[0]) : !a.current.noIsolation;
            b && _.cancelable && _.preventDefault();
          }
        }
      }, []),
      c = Y(function (f, _, h, g) {
        var x = {
          name: f,
          delta: _,
          target: h,
          should: g,
          shadowParent: wc(h),
        };
        t.current.push(x),
          setTimeout(function () {
            t.current = t.current.filter(function (b) {
              return b !== x;
            });
          }, 1);
      }, []),
      d = Y(function (f) {
        (n.current = Kt(f)), (o.current = void 0);
      }, []),
      u = Y(function (f) {
        c(f.type, vi(f), f.target, s(f, e.lockRef.current));
      }, []),
      m = Y(function (f) {
        c(f.type, Kt(f), f.target, s(f, e.lockRef.current));
      }, []);
    L(function () {
      return (
        lt.push(i),
        e.setCallbacks({
          onScrollCapture: u,
          onWheelCapture: u,
          onTouchMoveCapture: m,
        }),
        document.addEventListener("wheel", l, st),
        document.addEventListener("touchmove", l, st),
        document.addEventListener("touchstart", d, st),
        function () {
          (lt = lt.filter(function (f) {
            return f !== i;
          })),
            document.removeEventListener("wheel", l, st),
            document.removeEventListener("touchmove", l, st),
            document.removeEventListener("touchstart", d, st);
        }
      );
    }, []);
    var p = e.removeScrollBar,
      v = e.inert;
    return z(
      ne,
      null,
      v ? z(i, { styles: yc(r) }) : null,
      p ? z(uc, { gapMode: e.gapMode }) : null
    );
  }
  function wc(e) {
    for (var t = null; e !== null; )
      e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
        (e = e.parentNode);
    return t;
  }
  const Cc = Zl(ui, bc);
  var yi = D(function (e, t) {
    return z(jt, xe({}, e, { ref: t, sideCar: Cc }));
  });
  yi.classNames = jt.classNames;
  var Sc = [" ", "Enter", "ArrowUp", "ArrowDown"],
    Ec = [" ", "Enter"],
    gt = "Select",
    [Yt, Gt, Pc] = es(gt),
    [ct, sd] = ts(gt, [Pc, Yr]),
    Xt = Yr(),
    [Ac, He] = ct(gt),
    [kc, Ic] = ct(gt),
    xi = (e) => {
      const {
          __scopeSelect: t,
          children: n,
          open: o,
          defaultOpen: r,
          onOpenChange: i,
          value: a,
          defaultValue: s,
          onValueChange: l,
          dir: c,
          name: d,
          autoComplete: u,
          disabled: m,
          required: p,
          form: v,
        } = e,
        f = Xt(t),
        [_, h] = E(null),
        [g, x] = E(null),
        [b, w] = E(!1),
        A = rs(c),
        [C = !1, k] = ri({ prop: o, defaultProp: r, onChange: i }),
        [S, M] = ri({ prop: a, defaultProp: s, onChange: l }),
        G = O(null),
        j = _ ? v || !!_.closest("form") : !0,
        [F, V] = E(new Set()),
        X = Array.from(F)
          .map((B) => B.props.value)
          .join(";");
      return y(Rl, {
        ...f,
        children: y(Ac, {
          required: p,
          scope: t,
          trigger: _,
          onTriggerChange: h,
          valueNode: g,
          onValueNodeChange: x,
          valueNodeHasChildren: b,
          onValueNodeHasChildrenChange: w,
          contentId: Tn(),
          value: S,
          onValueChange: M,
          open: C,
          onOpenChange: k,
          dir: A,
          triggerPointerDownPosRef: G,
          disabled: m,
          children: [
            y(Yt.Provider, {
              scope: t,
              children: y(kc, {
                scope: e.__scopeSelect,
                onNativeOptionAdd: Y((B) => {
                  V((W) => new Set(W).add(B));
                }, []),
                onNativeOptionRemove: Y((B) => {
                  V((W) => {
                    const R = new Set(W);
                    return R.delete(B), R;
                  });
                }, []),
                children: n,
              }),
            }),
            j
              ? y(
                  Hi,
                  {
                    "aria-hidden": !0,
                    required: p,
                    tabIndex: -1,
                    name: d,
                    autoComplete: u,
                    value: S,
                    onChange: (B) => M(B.target.value),
                    disabled: m,
                    form: v,
                    children: [
                      S === void 0 ? y("option", { value: "" }) : null,
                      Array.from(F),
                    ],
                  },
                  X
                )
              : null,
          ],
        }),
      });
    };
  xi.displayName = gt;
  var bi = "SelectTrigger",
    wi = D((e, t) => {
      const { __scopeSelect: n, disabled: o = !1, ...r } = e,
        i = Xt(n),
        a = He(bi, n),
        s = a.disabled || o,
        l = oe(t, a.onTriggerChange),
        c = Gt(n),
        d = O("touch"),
        [u, m, p] = Ui((f) => {
          const _ = c().filter((x) => !x.disabled),
            h = _.find((x) => x.value === a.value),
            g = zi(_, f, h);
          g !== void 0 && a.onValueChange(g.value);
        }),
        v = (f) => {
          s || (a.onOpenChange(!0), p()),
            f &&
              (a.triggerPointerDownPosRef.current = {
                x: Math.round(f.pageX),
                y: Math.round(f.pageY),
              });
        };
      return y(Ol, {
        asChild: !0,
        ...i,
        children: y(te.button, {
          type: "button",
          role: "combobox",
          "aria-controls": a.contentId,
          "aria-expanded": a.open,
          "aria-required": a.required,
          "aria-autocomplete": "none",
          dir: a.dir,
          "data-state": a.open ? "open" : "closed",
          disabled: s,
          "data-disabled": s ? "" : void 0,
          "data-placeholder": Wi(a.value) ? "" : void 0,
          ...r,
          ref: l,
          onClick: ee(r.onClick, (f) => {
            f.currentTarget.focus(), d.current !== "mouse" && v(f);
          }),
          onPointerDown: ee(r.onPointerDown, (f) => {
            d.current = f.pointerType;
            const _ = f.target;
            _.hasPointerCapture(f.pointerId) &&
              _.releasePointerCapture(f.pointerId),
              f.button === 0 &&
                f.ctrlKey === !1 &&
                f.pointerType === "mouse" &&
                (v(f), f.preventDefault());
          }),
          onKeyDown: ee(r.onKeyDown, (f) => {
            const _ = u.current !== "";
            !(f.ctrlKey || f.altKey || f.metaKey) &&
              f.key.length === 1 &&
              m(f.key),
              !(_ && f.key === " ") &&
                Sc.includes(f.key) &&
                (v(), f.preventDefault());
          }),
        }),
      });
    });
  wi.displayName = bi;
  var Ci = "SelectValue",
    Tc = D((e, t) => {
      const {
          __scopeSelect: n,
          className: o,
          style: r,
          children: i,
          placeholder: a = "",
          ...s
        } = e,
        l = He(Ci, n),
        { onValueNodeHasChildrenChange: c } = l,
        d = i !== void 0,
        u = oe(t, l.onValueNodeChange);
      return (
        se(() => {
          c(d);
        }, [c, d]),
        y(te.span, {
          ...s,
          ref: u,
          style: { pointerEvents: "none" },
          children: Wi(l.value) ? y(ne, { children: a }) : i,
        })
      );
    });
  Tc.displayName = Ci;
  var Rc = "SelectIcon",
    Si = D((e, t) => {
      const { __scopeSelect: n, children: o, ...r } = e;
      return y(te.span, {
        "aria-hidden": !0,
        ...r,
        ref: t,
        children: o || "â–¼",
      });
    });
  Si.displayName = Rc;
  var Oc = "SelectPortal",
    Ei = (e) => y(oi, { asChild: !0, ...e });
  Ei.displayName = Oc;
  var Je = "SelectContent",
    Pi = D((e, t) => {
      const n = He(Je, e.__scopeSelect),
        [o, r] = E();
      if (
        (se(() => {
          r(new DocumentFragment());
        }, []),
        !n.open)
      ) {
        const i = o;
        return i
          ? It(
              y(Ai, {
                scope: e.__scopeSelect,
                children: y(Yt.Slot, {
                  scope: e.__scopeSelect,
                  children: y("div", { children: e.children }),
                }),
              }),
              i
            )
          : null;
      }
      return y(ki, { ...e, ref: t });
    });
  Pi.displayName = Je;
  var me = 10,
    [Ai, Ue] = ct(Je),
    Nc = "SelectContentImpl",
    ki = D((e, t) => {
      const {
          __scopeSelect: n,
          position: o = "item-aligned",
          onCloseAutoFocus: r,
          onEscapeKeyDown: i,
          onPointerDownOutside: a,
          side: s,
          sideOffset: l,
          align: c,
          alignOffset: d,
          arrowPadding: u,
          collisionBoundary: m,
          collisionPadding: p,
          sticky: v,
          hideWhenDetached: f,
          avoidCollisions: _,
          ...h
        } = e,
        g = He(Je, n),
        [x, b] = E(null),
        [w, A] = E(null),
        C = oe(t, (T) => b(T)),
        [k, S] = E(null),
        [M, G] = E(null),
        j = Gt(n),
        [F, V] = E(!1),
        X = O(!1);
      L(() => {
        if (x) return Hl(x);
      }, [x]),
        _s();
      const B = Y(
          (T) => {
            const [N, ...Q] = j().map((U) => U.ref.current),
              [H] = Q.slice(-1),
              $ = document.activeElement;
            for (const U of T)
              if (
                U === $ ||
                (U == null || U.scrollIntoView({ block: "nearest" }),
                U === N && w && (w.scrollTop = 0),
                U === H && w && (w.scrollTop = w.scrollHeight),
                U == null || U.focus(),
                document.activeElement !== $)
              )
                return;
          },
          [j, w]
        ),
        W = Y(() => B([k, x]), [B, k, x]);
      L(() => {
        F && W();
      }, [F, W]);
      const { onOpenChange: R, triggerPointerDownPosRef: q } = g;
      L(() => {
        if (x) {
          let T = { x: 0, y: 0 };
          const N = (H) => {
              var $, U;
              T = {
                x: Math.abs(
                  Math.round(H.pageX) -
                    ((($ = q.current) == null ? void 0 : $.x) ?? 0)
                ),
                y: Math.abs(
                  Math.round(H.pageY) -
                    (((U = q.current) == null ? void 0 : U.y) ?? 0)
                ),
              };
            },
            Q = (H) => {
              T.x <= 10 && T.y <= 10
                ? H.preventDefault()
                : x.contains(H.target) || R(!1),
                document.removeEventListener("pointermove", N),
                (q.current = null);
            };
          return (
            q.current !== null &&
              (document.addEventListener("pointermove", N),
              document.addEventListener("pointerup", Q, {
                capture: !0,
                once: !0,
              })),
            () => {
              document.removeEventListener("pointermove", N),
                document.removeEventListener("pointerup", Q, { capture: !0 });
            }
          );
        }
      }, [x, R, q]),
        L(() => {
          const T = () => R(!1);
          return (
            window.addEventListener("blur", T),
            window.addEventListener("resize", T),
            () => {
              window.removeEventListener("blur", T),
                window.removeEventListener("resize", T);
            }
          );
        }, [R]);
      const [re, de] = Ui((T) => {
          const N = j().filter(($) => !$.disabled),
            Q = N.find(($) => $.ref.current === document.activeElement),
            H = zi(N, T, Q);
          H && setTimeout(() => H.ref.current.focus());
        }),
        ze = Y(
          (T, N, Q) => {
            const H = !X.current && !Q;
            ((g.value !== void 0 && g.value === N) || H) &&
              (S(T), H && (X.current = !0));
          },
          [g.value]
        ),
        je = Y(() => (x == null ? void 0 : x.focus()), [x]),
        fe = Y(
          (T, N, Q) => {
            const H = !X.current && !Q;
            ((g.value !== void 0 && g.value === N) || H) && G(T);
          },
          [g.value]
        ),
        ae = o === "popper" ? Xn : Ii,
        Re =
          ae === Xn
            ? {
                side: s,
                sideOffset: l,
                align: c,
                alignOffset: d,
                arrowPadding: u,
                collisionBoundary: m,
                collisionPadding: p,
                sticky: v,
                hideWhenDetached: f,
                avoidCollisions: _,
              }
            : {};
      return y(Ai, {
        scope: n,
        content: x,
        viewport: w,
        onViewportChange: A,
        itemRefCallback: ze,
        selectedItem: k,
        onItemLeave: je,
        itemTextRefCallback: fe,
        focusSelectedItem: W,
        selectedItemText: M,
        position: o,
        isPositioned: F,
        searchRef: re,
        children: y(yi, {
          as: ht,
          allowPinchZoom: !0,
          children: y(Er, {
            asChild: !0,
            trapped: g.open,
            onMountAutoFocus: (T) => {
              T.preventDefault();
            },
            onUnmountAutoFocus: ee(r, (T) => {
              var N;
              (N = g.trigger) == null || N.focus({ preventScroll: !0 }),
                T.preventDefault();
            }),
            children: y(xr, {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: i,
              onPointerDownOutside: a,
              onFocusOutside: (T) => T.preventDefault(),
              onDismiss: () => g.onOpenChange(!1),
              children: y(ae, {
                role: "listbox",
                id: g.contentId,
                "data-state": g.open ? "open" : "closed",
                dir: g.dir,
                onContextMenu: (T) => T.preventDefault(),
                ...h,
                ...Re,
                onPlaced: () => V(!0),
                ref: C,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  outline: "none",
                  ...h.style,
                },
                onKeyDown: ee(h.onKeyDown, (T) => {
                  const N = T.ctrlKey || T.altKey || T.metaKey;
                  if (
                    (T.key === "Tab" && T.preventDefault(),
                    !N && T.key.length === 1 && de(T.key),
                    ["ArrowUp", "ArrowDown", "Home", "End"].includes(T.key))
                  ) {
                    let H = j()
                      .filter(($) => !$.disabled)
                      .map(($) => $.ref.current);
                    if (
                      (["ArrowUp", "End"].includes(T.key) &&
                        (H = H.slice().reverse()),
                      ["ArrowUp", "ArrowDown"].includes(T.key))
                    ) {
                      const $ = T.target,
                        U = H.indexOf($);
                      H = H.slice(U + 1);
                    }
                    setTimeout(() => B(H)), T.preventDefault();
                  }
                }),
              }),
            }),
          }),
        }),
      });
    });
  ki.displayName = Nc;
  var Lc = "SelectItemAlignedPosition",
    Ii = D((e, t) => {
      const { __scopeSelect: n, onPlaced: o, ...r } = e,
        i = He(Je, n),
        a = Ue(Je, n),
        [s, l] = E(null),
        [c, d] = E(null),
        u = oe(t, (C) => d(C)),
        m = Gt(n),
        p = O(!1),
        v = O(!0),
        {
          viewport: f,
          selectedItem: _,
          selectedItemText: h,
          focusSelectedItem: g,
        } = a,
        x = Y(() => {
          if (i.trigger && i.valueNode && s && c && f && _ && h) {
            const C = i.trigger.getBoundingClientRect(),
              k = c.getBoundingClientRect(),
              S = i.valueNode.getBoundingClientRect(),
              M = h.getBoundingClientRect();
            if (i.dir !== "rtl") {
              const $ = M.left - k.left,
                U = S.left - $,
                ue = C.left - U,
                we = C.width + ue,
                xt = Math.max(we, k.width),
                bt = window.innerWidth - me,
                wt = _r(U, [me, Math.max(me, bt - xt)]);
              (s.style.minWidth = we + "px"), (s.style.left = wt + "px");
            } else {
              const $ = k.right - M.right,
                U = window.innerWidth - S.right - $,
                ue = window.innerWidth - C.right - U,
                we = C.width + ue,
                xt = Math.max(we, k.width),
                bt = window.innerWidth - me,
                wt = _r(U, [me, Math.max(me, bt - xt)]);
              (s.style.minWidth = we + "px"), (s.style.right = wt + "px");
            }
            const G = m(),
              j = window.innerHeight - me * 2,
              F = f.scrollHeight,
              V = window.getComputedStyle(c),
              X = parseInt(V.borderTopWidth, 10),
              B = parseInt(V.paddingTop, 10),
              W = parseInt(V.borderBottomWidth, 10),
              R = parseInt(V.paddingBottom, 10),
              q = X + B + F + R + W,
              re = Math.min(_.offsetHeight * 5, q),
              de = window.getComputedStyle(f),
              ze = parseInt(de.paddingTop, 10),
              je = parseInt(de.paddingBottom, 10),
              fe = C.top + C.height / 2 - me,
              ae = j - fe,
              Re = _.offsetHeight / 2,
              T = _.offsetTop + Re,
              N = X + B + T,
              Q = q - N;
            if (N <= fe) {
              const $ = G.length > 0 && _ === G[G.length - 1].ref.current;
              s.style.bottom = "0px";
              const U = c.clientHeight - f.offsetTop - f.offsetHeight,
                ue = Math.max(ae, Re + ($ ? je : 0) + U + W),
                we = N + ue;
              s.style.height = we + "px";
            } else {
              const $ = G.length > 0 && _ === G[0].ref.current;
              s.style.top = "0px";
              const ue = Math.max(fe, X + f.offsetTop + ($ ? ze : 0) + Re) + Q;
              (s.style.height = ue + "px"),
                (f.scrollTop = N - fe + f.offsetTop);
            }
            (s.style.margin = `${me}px 0`),
              (s.style.minHeight = re + "px"),
              (s.style.maxHeight = j + "px"),
              o == null || o(),
              requestAnimationFrame(() => (p.current = !0));
          }
        }, [m, i.trigger, i.valueNode, s, c, f, _, h, i.dir, o]);
      se(() => x(), [x]);
      const [b, w] = E();
      se(() => {
        c && w(window.getComputedStyle(c).zIndex);
      }, [c]);
      const A = Y(
        (C) => {
          C && v.current === !0 && (x(), g == null || g(), (v.current = !1));
        },
        [x, g]
      );
      return y(Mc, {
        scope: n,
        contentWrapper: s,
        shouldExpandOnScrollRef: p,
        onScrollButtonChange: A,
        children: y("div", {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: b,
          },
          children: y(te.div, {
            ...r,
            ref: u,
            style: { boxSizing: "border-box", maxHeight: "100%", ...r.style },
          }),
        }),
      });
    });
  Ii.displayName = Lc;
  var Dc = "SelectPopperPosition",
    Xn = D((e, t) => {
      const {
          __scopeSelect: n,
          align: o = "start",
          collisionPadding: r = me,
          ...i
        } = e,
        a = Xt(n);
      return y(Nl, {
        ...a,
        ...i,
        ref: t,
        align: o,
        collisionPadding: r,
        style: {
          boxSizing: "border-box",
          ...i.style,
          "--radix-select-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-select-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
        },
      });
    });
  Xn.displayName = Dc;
  var [Mc, Zn] = ct(Je, {}),
    Jn = "SelectViewport",
    Ti = D((e, t) => {
      const { __scopeSelect: n, nonce: o, ...r } = e,
        i = Ue(Jn, n),
        a = Zn(Jn, n),
        s = oe(t, i.onViewportChange),
        l = O(0);
      return y(ne, {
        children: [
          y("style", {
            dangerouslySetInnerHTML: {
              __html:
                "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
            },
            nonce: o,
          }),
          y(Yt.Slot, {
            scope: n,
            children: y(te.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...r,
              ref: s,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...r.style,
              },
              onScroll: ee(r.onScroll, (c) => {
                const d = c.currentTarget,
                  { contentWrapper: u, shouldExpandOnScrollRef: m } = a;
                if (m != null && m.current && u) {
                  const p = Math.abs(l.current - d.scrollTop);
                  if (p > 0) {
                    const v = window.innerHeight - me * 2,
                      f = parseFloat(u.style.minHeight),
                      _ = parseFloat(u.style.height),
                      h = Math.max(f, _);
                    if (h < v) {
                      const g = h + p,
                        x = Math.min(v, g),
                        b = g - x;
                      (u.style.height = x + "px"),
                        u.style.bottom === "0px" &&
                          ((d.scrollTop = b > 0 ? b : 0),
                          (u.style.justifyContent = "flex-end"));
                    }
                  }
                }
                l.current = d.scrollTop;
              }),
            }),
          }),
        ],
      });
    });
  Ti.displayName = Jn;
  var Ri = "SelectGroup",
    [Fc, Bc] = ct(Ri),
    $c = D((e, t) => {
      const { __scopeSelect: n, ...o } = e,
        r = Tn();
      return y(Fc, {
        scope: n,
        id: r,
        children: y(te.div, {
          role: "group",
          "aria-labelledby": r,
          ...o,
          ref: t,
        }),
      });
    });
  $c.displayName = Ri;
  var Oi = "SelectLabel",
    Vc = D((e, t) => {
      const { __scopeSelect: n, ...o } = e,
        r = Bc(Oi, n);
      return y(te.div, { id: r.id, ...o, ref: t });
    });
  Vc.displayName = Oi;
  var Zt = "SelectItem",
    [Wc, Ni] = ct(Zt),
    Li = D((e, t) => {
      const {
          __scopeSelect: n,
          value: o,
          disabled: r = !1,
          textValue: i,
          ...a
        } = e,
        s = He(Zt, n),
        l = Ue(Zt, n),
        c = s.value === o,
        [d, u] = E(i ?? ""),
        [m, p] = E(!1),
        v = oe(t, (g) => {
          var x;
          return (x = l.itemRefCallback) == null ? void 0 : x.call(l, g, o, r);
        }),
        f = Tn(),
        _ = O("touch"),
        h = () => {
          r || (s.onValueChange(o), s.onOpenChange(!1));
        };
      if (o === "")
        throw new Error(
          "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
        );
      return y(Wc, {
        scope: n,
        value: o,
        disabled: r,
        textId: f,
        isSelected: c,
        onItemTextChange: Y((g) => {
          u((x) => x || ((g == null ? void 0 : g.textContent) ?? "").trim());
        }, []),
        children: y(Yt.ItemSlot, {
          scope: n,
          value: o,
          disabled: r,
          textValue: d,
          children: y(te.div, {
            role: "option",
            "aria-labelledby": f,
            "data-highlighted": m ? "" : void 0,
            "aria-selected": c && m,
            "data-state": c ? "checked" : "unchecked",
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            tabIndex: r ? void 0 : -1,
            ...a,
            ref: v,
            onFocus: ee(a.onFocus, () => p(!0)),
            onBlur: ee(a.onBlur, () => p(!1)),
            onClick: ee(a.onClick, () => {
              _.current !== "mouse" && h();
            }),
            onPointerUp: ee(a.onPointerUp, () => {
              _.current === "mouse" && h();
            }),
            onPointerDown: ee(a.onPointerDown, (g) => {
              _.current = g.pointerType;
            }),
            onPointerMove: ee(a.onPointerMove, (g) => {
              var x;
              (_.current = g.pointerType),
                r
                  ? (x = l.onItemLeave) == null || x.call(l)
                  : _.current === "mouse" &&
                    g.currentTarget.focus({ preventScroll: !0 });
            }),
            onPointerLeave: ee(a.onPointerLeave, (g) => {
              var x;
              g.currentTarget === document.activeElement &&
                ((x = l.onItemLeave) == null || x.call(l));
            }),
            onKeyDown: ee(a.onKeyDown, (g) => {
              var b;
              (((b = l.searchRef) == null ? void 0 : b.current) !== "" &&
                g.key === " ") ||
                (Ec.includes(g.key) && h(),
                g.key === " " && g.preventDefault());
            }),
          }),
        }),
      });
    });
  Li.displayName = Zt;
  var yt = "SelectItemText",
    Di = D((e, t) => {
      const { __scopeSelect: n, className: o, style: r, ...i } = e,
        a = He(yt, n),
        s = Ue(yt, n),
        l = Ni(yt, n),
        c = Ic(yt, n),
        [d, u] = E(null),
        m = oe(
          t,
          (h) => u(h),
          l.onItemTextChange,
          (h) => {
            var g;
            return (g = s.itemTextRefCallback) == null
              ? void 0
              : g.call(s, h, l.value, l.disabled);
          }
        ),
        p = d == null ? void 0 : d.textContent,
        v = Z(
          () =>
            y(
              "option",
              { value: l.value, disabled: l.disabled, children: p },
              l.value
            ),
          [l.disabled, l.value, p]
        ),
        { onNativeOptionAdd: f, onNativeOptionRemove: _ } = c;
      return (
        se(() => (f(v), () => _(v)), [f, _, v]),
        y(ne, {
          children: [
            y(te.span, { id: l.textId, ...i, ref: m }),
            l.isSelected && a.valueNode && !a.valueNodeHasChildren
              ? It(i.children, a.valueNode)
              : null,
          ],
        })
      );
    });
  Di.displayName = yt;
  var Mi = "SelectItemIndicator",
    Fi = D((e, t) => {
      const { __scopeSelect: n, ...o } = e;
      return Ni(Mi, n).isSelected
        ? y(te.span, { "aria-hidden": !0, ...o, ref: t })
        : null;
    });
  Fi.displayName = Mi;
  var Qn = "SelectScrollUpButton",
    Bi = D((e, t) => {
      const n = Ue(Qn, e.__scopeSelect),
        o = Zn(Qn, e.__scopeSelect),
        [r, i] = E(!1),
        a = oe(t, o.onScrollButtonChange);
      return (
        se(() => {
          if (n.viewport && n.isPositioned) {
            let s = function () {
              const c = l.scrollTop > 0;
              i(c);
            };
            const l = n.viewport;
            return (
              s(),
              l.addEventListener("scroll", s),
              () => l.removeEventListener("scroll", s)
            );
          }
        }, [n.viewport, n.isPositioned]),
        r
          ? y(Vi, {
              ...e,
              ref: a,
              onAutoScroll: () => {
                const { viewport: s, selectedItem: l } = n;
                s && l && (s.scrollTop = s.scrollTop - l.offsetHeight);
              },
            })
          : null
      );
    });
  Bi.displayName = Qn;
  var eo = "SelectScrollDownButton",
    $i = D((e, t) => {
      const n = Ue(eo, e.__scopeSelect),
        o = Zn(eo, e.__scopeSelect),
        [r, i] = E(!1),
        a = oe(t, o.onScrollButtonChange);
      return (
        se(() => {
          if (n.viewport && n.isPositioned) {
            let s = function () {
              const c = l.scrollHeight - l.clientHeight,
                d = Math.ceil(l.scrollTop) < c;
              i(d);
            };
            const l = n.viewport;
            return (
              s(),
              l.addEventListener("scroll", s),
              () => l.removeEventListener("scroll", s)
            );
          }
        }, [n.viewport, n.isPositioned]),
        r
          ? y(Vi, {
              ...e,
              ref: a,
              onAutoScroll: () => {
                const { viewport: s, selectedItem: l } = n;
                s && l && (s.scrollTop = s.scrollTop + l.offsetHeight);
              },
            })
          : null
      );
    });
  $i.displayName = eo;
  var Vi = D((e, t) => {
      const { __scopeSelect: n, onAutoScroll: o, ...r } = e,
        i = Ue("SelectScrollButton", n),
        a = O(null),
        s = Gt(n),
        l = Y(() => {
          a.current !== null &&
            (window.clearInterval(a.current), (a.current = null));
        }, []);
      return (
        L(() => () => l(), [l]),
        se(() => {
          var d;
          const c = s().find((u) => u.ref.current === document.activeElement);
          (d = c == null ? void 0 : c.ref.current) == null ||
            d.scrollIntoView({ block: "nearest" });
        }, [s]),
        y(te.div, {
          "aria-hidden": !0,
          ...r,
          ref: t,
          style: { flexShrink: 0, ...r.style },
          onPointerDown: ee(r.onPointerDown, () => {
            a.current === null && (a.current = window.setInterval(o, 50));
          }),
          onPointerMove: ee(r.onPointerMove, () => {
            var c;
            (c = i.onItemLeave) == null || c.call(i),
              a.current === null && (a.current = window.setInterval(o, 50));
          }),
          onPointerLeave: ee(r.onPointerLeave, () => {
            l();
          }),
        })
      );
    }),
    Hc = "SelectSeparator",
    Uc = D((e, t) => {
      const { __scopeSelect: n, ...o } = e;
      return y(te.div, { "aria-hidden": !0, ...o, ref: t });
    });
  Uc.displayName = Hc;
  var to = "SelectArrow",
    zc = D((e, t) => {
      const { __scopeSelect: n, ...o } = e,
        r = Xt(n),
        i = He(to, n),
        a = Ue(to, n);
      return i.open && a.position === "popper"
        ? y(Ll, { ...r, ...o, ref: t })
        : null;
    });
  zc.displayName = to;
  function Wi(e) {
    return e === "" || e === void 0;
  }
  var Hi = D((e, t) => {
    const { value: n, ...o } = e,
      r = O(null),
      i = oe(t, r),
      a = Fl(n);
    return (
      L(() => {
        const s = r.current,
          l = window.HTMLSelectElement.prototype,
          d = Object.getOwnPropertyDescriptor(l, "value").set;
        if (a !== n && d) {
          const u = new Event("change", { bubbles: !0 });
          d.call(s, n), s.dispatchEvent(u);
        }
      }, [a, n]),
      y(ii, {
        asChild: !0,
        children: y("select", { ...o, ref: i, defaultValue: n }),
      })
    );
  });
  Hi.displayName = "BubbleSelect";
  function Ui(e) {
    const t = ke(e),
      n = O(""),
      o = O(0),
      r = Y(
        (a) => {
          const s = n.current + a;
          t(s),
            (function l(c) {
              (n.current = c),
                window.clearTimeout(o.current),
                c !== "" && (o.current = window.setTimeout(() => l(""), 1e3));
            })(s);
        },
        [t]
      ),
      i = Y(() => {
        (n.current = ""), window.clearTimeout(o.current);
      }, []);
    return L(() => () => window.clearTimeout(o.current), []), [n, r, i];
  }
  function zi(e, t, n) {
    const r = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t,
      i = n ? e.indexOf(n) : -1;
    let a = jc(e, Math.max(i, 0));
    r.length === 1 && (a = a.filter((c) => c !== n));
    const l = a.find((c) =>
      c.textValue.toLowerCase().startsWith(r.toLowerCase())
    );
    return l !== n ? l : void 0;
  }
  function jc(e, t) {
    return e.map((n, o) => e[(t + o) % e.length]);
  }
  var qc = xi,
    Kc = wi,
    Yc = Si,
    Gc = Ei,
    Xc = Pi,
    Zc = Ti,
    Jc = Li,
    Qc = Di,
    eu = Fi,
    tu = Bi,
    nu = $i;
  function no(e, t) {
    if (e == null) return {};
    var n = {},
      o = Object.keys(e),
      r,
      i;
    for (i = 0; i < o.length; i++)
      (r = o[i]), !(t.indexOf(r) >= 0) && (n[r] = e[r]);
    return n;
  }
  var ou = ["color"],
    ru = D(function (e, t) {
      var n = e.color,
        o = n === void 0 ? "currentColor" : n,
        r = no(e, ou);
      return z(
        "svg",
        Object.assign(
          {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          r,
          { ref: t }
        ),
        z("path", {
          d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
          fill: o,
          fillRule: "evenodd",
          clipRule: "evenodd",
        })
      );
    }),
    iu = ["color"],
    ji = D(function (e, t) {
      var n = e.color,
        o = n === void 0 ? "currentColor" : n,
        r = no(e, iu);
      return z(
        "svg",
        Object.assign(
          {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          r,
          { ref: t }
        ),
        z("path", {
          d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
          fill: o,
          fillRule: "evenodd",
          clipRule: "evenodd",
        })
      );
    }),
    au = ["color"],
    su = D(function (e, t) {
      var n = e.color,
        o = n === void 0 ? "currentColor" : n,
        r = no(e, au);
      return z(
        "svg",
        Object.assign(
          {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          r,
          { ref: t }
        ),
        z("path", {
          d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
          fill: o,
          fillRule: "evenodd",
          clipRule: "evenodd",
        })
      );
    });
  function qi({ flagCode: e }) {
    return y("img", {
      className: P.flag,
      src: `https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${e}.svg`,
      alt: `${e.toUpperCase()} flag`,
    });
  }
  function lu({ portal: e, value: t, options: n, onChange: o }) {
    const r = Z(
        () =>
          n
            .map((a) => Sn[a])
            .filter(Boolean)
            .sort((a, s) => a.name.localeCompare(s.name)),
        [n]
      ),
      i = Sn[t] ?? Sn.en;
    return y(qc, {
      value: t,
      onValueChange: o,
      children: [
        y(Kc, {
          className: ve(P.btn, P.secondary, P.select),
          "aria-label": "Food",
          children: [
            y(qi, { flagCode: i.flagCode }),
            y("span", { className: P.selectValue, children: i.name }),
            y(Yc, { className: P.selectIcon, children: y(ji, {}) }),
          ],
        }),
        y(Gc, {
          container: e,
          children: y(Xc, {
            className: P.selectContent,
            position: "popper",
            sideOffset: 8,
            align: "end",
            side: "top",
            children: [
              y(tu, { className: P.selectScrollButton, children: y(su, {}) }),
              y(Zc, {
                className: P.selectViewport,
                children: r.map((a) =>
                  y(Jc, {
                    value: a.languageCode,
                    className: ve(P.selectItem),
                    children: [
                      y(qi, { flagCode: a.flagCode }),
                      y(Qc, { children: a.name }),
                      y(eu, {
                        className: P.selectItemIndicator,
                        children: y(ru, {}),
                      }),
                    ],
                  })
                ),
              }),
              y(nu, { className: P.selectScrollButton, children: y(ji, {}) }),
            ],
          }),
        }),
      ],
    });
  }
  const cu = 1e3 * 60,
    uu = 1e3 * 5;
  function du({
    termsKey: e,
    config: t,
    avatar: n,
    contents: o,
    variant: r,
    feedbackMode: i,
    location: a,
    languageConfig: s,
  }) {
    const l = Z(() => (e ? !!localStorage.getItem(e) : !1), [e]),
      c = O(null),
      d = O(null),
      u = O(null),
      [m, p] = E(l),
      [v, f] = E(!1),
      [_, h] = E(null),
      [g, x] = E(!1),
      [b, w] = E(!1),
      A = Fa(),
      {
        startSession: C,
        endSession: k,
        sendFeedback: S,
        canSendFeedback: M,
        status: G,
        isSpeaking: j,
      } = A,
      F = G === "disconnected",
      V = b || r !== "expandable" || !F,
      [X, B] = E(null),
      [W, R] = E(0),
      [q, re] = E(s.defaultValue);
    L(() => {
      if (F) {
        const N = setTimeout(() => B(null), 3e5);
        return () => clearTimeout(N);
      }
    }, [F]),
      L(() => () => k(), []),
      L(() => {
        var N;
        if (u.current) {
          const Q = () => {
            let $ = null;
            for (const U of u.current.assignedElements())
              if (U instanceof HTMLFormElement) {
                $ = U;
                break;
              }
            h($), x(($ == null ? void 0 : $.checkValidity()) ?? !1);
          };
          Q();
          const H = u.current;
          return (
            H.addEventListener("slotchange", Q),
            () => H.removeEventListener("slotchange", Q)
          );
        } else
          h(d.current),
            x(((N = d.current) == null ? void 0 : N.checkValidity()) ?? !1);
      }, [o.terms]),
      L(() => {
        l || !_ ? (f(!1), p(!0)) : !l && _ && p(!1);
      }, [l, _]);
    async function de(N) {
      const Q = new CustomEvent("elevenlabs-convai:call", {
        bubbles: !0,
        composed: !0,
        detail: {
          config: {
            ...t,
            overrides: { agent: { language: s.options ? q : void 0 } },
          },
        },
      });
      N.dispatchEvent(Q);
      const H = await C(Q.detail.config);
      R(0), B(H);
    }
    const [ze, je] = E(M);
    L(() => {
      if (M) {
        const N = setTimeout(() => {
          je(!0);
        }, uu);
        return () => clearTimeout(N);
      } else je(!1);
    }, [M]);
    const [fe, ae] = Z(
        () =>
          Date.now() - W < cu
            ? []
            : F && X && (i === "end" || i === "during")
            ? [
                "Was the call helpful?",
                (N) => {
                  Ma(X, N, a === "us" ? Oo : Ro).catch(() => {
                    console.error(
                      `[ConversationalAI] Cannot send feedback for conversation ${X}`
                    );
                  }),
                    B(null),
                    R(Date.now());
                },
              ]
            : !F && ze && i === "during"
            ? [
                "Is this response helpful?",
                (N) => {
                  S(N), R(Date.now());
                },
              ]
            : [],
        [F, X, ze, i, a, W, j]
      ),
      [Re, T] = E(null);
    return (
      L(() => {
        fe && T(fe);
      }, [fe]),
      y("div", {
        ref: c,
        className: ve(
          P.wrapper,
          P[r],
          V && P.open,
          v && P.termsShown,
          s.options && P.hasLanguageSelect
        ),
        children: [
          r !== "expandable" && y(hr, {}),
          r === "expandable" &&
            y("button", {
              disabled: !F,
              className: ve(P.btn, P.minimize),
              onClick: () => w(!b),
              title: o.expand,
              children: [
                y(Ba, { className: P.openContent }),
                y("div", {
                  className: P.closedContent,
                  children: [
                    y(dr, { className: P.icon }),
                    y("div", { className: P.ellipsis, children: o.expand }),
                  ],
                }),
              ],
            }),
          y("div", {
            className: P.box,
            children: [
              y("div", {
                className: P.terms,
                children: [
                  o.terms
                    ? y("form", {
                        ref: d,
                        onInput: () => {
                          x((_ == null ? void 0 : _.checkValidity()) ?? !1);
                        },
                        dangerouslySetInnerHTML: { __html: o.terms },
                      })
                    : y("slot", {
                        onInput: () => {
                          x((_ == null ? void 0 : _.checkValidity()) ?? !1);
                        },
                        ref: u,
                        name: "terms",
                      }),
                  y("div", {
                    class: P.termsFooter,
                    children: [
                      y("button", {
                        className: ve(P.btn, P.secondary),
                        type: "button",
                        onClick: () => {
                          f(!1);
                        },
                        children: "Cancel",
                      }),
                      y("button", {
                        className: ve(P.btn, !g && P.disabled),
                        type: "button",
                        onClick: (N) => {
                          _ != null &&
                            _.reportValidity() &&
                            (p(!0),
                            e && localStorage.setItem(e, "true"),
                            f(!1),
                            de(N.currentTarget));
                        },
                        children: "Agree",
                      }),
                    ],
                  }),
                ],
              }),
              !v &&
                y(ne, {
                  children: [
                    y(qa, { config: n, ...A }),
                    y("div", {
                      className: P.actions,
                      children: [
                        r !== "compact" &&
                          y("p", {
                            className: P.status,
                            children: F
                              ? o.action
                              : j
                              ? o.speaking
                              : o.listening,
                          }),
                        F
                          ? y("div", {
                              className: P.actionButtons,
                              children: [
                                y("button", {
                                  className: P.btn,
                                  title: o.startCall,
                                  onClick: (N) => {
                                    if (!m) {
                                      f(!0);
                                      return;
                                    }
                                    de(N.currentTarget);
                                  },
                                  children: [
                                    y(dr, { className: P.icon }),
                                    y("div", {
                                      className: P.ellipsis,
                                      children: o.startCall,
                                    }),
                                  ],
                                }),
                                s.options &&
                                  y(lu, {
                                    value: q,
                                    onChange: re,
                                    options: s.options,
                                    portal: c.current ?? void 0,
                                  }),
                              ],
                            })
                          : y("button", {
                              className: ve(P.btn, P.secondary),
                              title: o.endCall,
                              onClick: () => k(),
                              children: [
                                y($a, { className: P.icon }),
                                y("div", {
                                  className: P.ellipsis,
                                  children: o.endCall,
                                }),
                              ],
                            }),
                        r === "expandable" && y(hr, {}),
                      ],
                    }),
                  ],
                }),
            ],
          }),
          i !== "none" &&
            y("div", {
              className: ve(P.feedback, ae && P.show),
              children: [
                Re,
                y("button", {
                  className: ve(P.btn, P.secondary, P.iconBtn),
                  title: "Yes",
                  onClick: () => (ae == null ? void 0 : ae(!0)),
                  children: y(Va, { className: P.icon }),
                }),
                y("button", {
                  className: ve(P.btn, P.secondary, P.iconBtn),
                  title: "No",
                  onClick: () => (ae == null ? void 0 : ae(!1)),
                  children: y(Wa, { className: P.icon }),
                }),
              ],
            }),
        ],
      })
    );
  }
  const Ki = ["full", "compact", "expandable"];
  function fu(e) {
    return Ki.includes(e) ? e : Ki[0];
  }
  function pu(e = "us") {
    switch (e) {
      case "us":
      case "global":
        return e;
      default:
        return (
          console.warn(
            `[ConversationalAI] Invalid server-location: ${e}. Defaulting to "us"`
          ),
          "us"
        );
    }
  }
  const hu = [
      "variant",
      "override-config",
      "avatar-image-url",
      "avatar-orb-color-1",
      "avatar-orb-color-2",
      "agent-id",
      "signed-url",
      "action-text",
      "start-call-text",
      "end-call-text",
      "expand-text",
      "listening-text",
      "speaking-text",
      "terms-key",
      "server-location",
      "language",
    ],
    _u =
      '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"; *{box-sizing:border-box}:host{pointer-events:none;z-index:1000} ._wrapper_edaxv_15{display:flex;gap:16px;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}._box_edaxv_36{background-color:var(--el-bg-color);color:var(--el-text-color);border:1px solid var(--el-border-color);display:flex;;gap:16px;padding:20px;border-radius:var(--el-border-radius);pointer-events:none;opacity:0;transition:opacity .2s var(--el-timing-function);max-width:calc(100vw - 64px);max-height:calc(100vh - 64px)}._open_edaxv_54 ._box_edaxv_36{pointer-events:initial;opacity:1}._expandable_edaxv_59 ._box_edaxv_36{flex-direction:column;padding:24px;gap:20px}._expandable_edaxv_59:not(._termsShown_edaxv_65) ._box_edaxv_36{padding-top:40px}._compact_edaxv_69:not(._termsShown_edaxv_65) ._box_edaxv_36{gap:8px;padding:12px;border-radius:32px}._avatar_edaxv_75{position:relative;width:54px;height:54px}._compact_edaxv_69 ._avatar_edaxv_75{width:36px;height:36px}._expandable_edaxv_59 ._avatar_edaxv_75{width:86px;height:86px}._avatarBackground_edaxv_91{border-radius:50%;position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px;background-color:var(--el-border-color)}._avatarImage_edaxv_101{border-radius:50%;position:absolute;top:0;left:0;right:0;bottom:0;background-size:cover;background-color:var(--el-bg-color);overflow:hidden}._canvas_edaxv_113{width:100%;height:100%}._actions_edaxv_118{min-width:156px;width:min-content;display:flex;gap:11px;flex-direction:column}._hasLanguageSelect_edaxv_126 ._actions_edaxv_118{min-width:200px}._expandable_edaxv_59 ._actions_edaxv_118{min-width:180px;width:min-content;justify-content:end}._actionButtons_edaxv_136{display:flex;gap:8px}._expandable_edaxv_59 ._actionButtons_edaxv_136{flex-direction:column}._status_edaxv_145{font-size:14px;text-wrap:nowrap;line-height:10px;margin:0;color:var(--el-text-color)}._expandable_edaxv_59 ._status_edaxv_145{text-align:center;text-wrap:wrap;line-height:18px}._btn_edaxv_159{--el-ring-color: transparent;--el-ring-radius: 0;--el-focus-ring-radius: 0;--el-border-width: 0;background-color:var(--el-btn-color);color:var(--el-btn-text-color);border-radius:var(--el-btn-radius);box-shadow:0 1px 2px #1018280d,0 0 0 var(--el-ring-radius) var(--el-ring-color),0 0 0 var(--el-focus-ring-radius) var(--el-focus-color),inset 0 0 0 var(--el-border-width) var(--el-border-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:0 16px;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;font-size:14px;font-weight:500;transition:all .2s var(--el-timing-function);flex-grow:1;height:36px;max-width:320px}._expandable_edaxv_59 ._btn_edaxv_159{flex-grow:0}._btn_edaxv_159:hover{--el-ring-color: rgba(125, 135, 155, .2);--el-ring-radius: 3px}._btn_edaxv_159:active{--el-ring-color: rgba(101, 115, 135, .3);--el-ring-radius: 3px}._btn_edaxv_159._disabled_edaxv_205{opacity:.5}._btn_edaxv_159:disabled{opacity:.5;pointer-events:none}._btn_edaxv_159:focus-visible{--el-focus-ring-radius: 1px;outline:none}._btn_edaxv_159._secondary_edaxv_219{--el-border-width: 1px;background-color:var(--el-bg-color);color:var(--el-text-color)}._btn_edaxv_159._secondary_edaxv_219:hover{--el-ring-color: rgba(135, 145, 165, .1)}._btn_edaxv_159._secondary_edaxv_219:active{--el-ring-color: rgba(125, 135, 155, .2)}._btn_edaxv_159._iconBtn_edaxv_233{height:32px}._btn_edaxv_159._select_edaxv_237{flex-grow:0;padding:6px;gap:4px}._ellipsis_edaxv_243{overflow:hidden;text-overflow:ellipsis}._icon_edaxv_233{margin-left:-6px;margin-right:4px;width:16px;height:16px;flex-shrink:0}._iconBtn_edaxv_233 ._icon_edaxv_233{margin-left:-6px;margin-right:-6px;width:12px;height:12px}._minimize_edaxv_263{pointer-events:all;display:grid;grid-template-columns:1fr;position:relative;overflow:hidden}._open_edaxv_54 ._minimize_edaxv_263{grid-template-columns:0fr;align-items:center;height:36px;padding:0 18px}._openContent_edaxv_278{position:absolute;top:7px;left:6px;opacity:0;pointer-events:none;rotate:90deg}._open_edaxv_54 ._openContent_edaxv_278{opacity:1;pointer-events:initial;rotate:0deg}._closedContent_edaxv_293{min-width:0;display:flex;align-items:center;justify-content:center}._open_edaxv_54 ._closedContent_edaxv_293{opacity:0;pointer-events:none}._openContent_edaxv_278,._closedContent_edaxv_293{transition:all .2s var(--el-timing-function)}._poweredBy_edaxv_310{pointer-events:all;color:var(--el-text-color);font-size:10px;opacity:.5;align-self:center;text-align:center}._compact_edaxv_69 ._poweredBy_edaxv_310,._full_edaxv_320 ._poweredBy_edaxv_310{margin:-8px 0 -20px}._terms_edaxv_65{display:none;max-width:480px;font-size:14px;line-height:20px;accent-color:var(--el-btn-color)}._terms_edaxv_65 form{display:flex;flex-direction:column;gap:16px}._terms_edaxv_65 p,._terms_edaxv_65 ul,._terms_edaxv_65 ol,._terms_edaxv_65 h1,._terms_edaxv_65 h2,._terms_edaxv_65 h3,._terms_edaxv_65 h4,._terms_edaxv_65 h5,._terms_edaxv_65 h6{margin:0;font-weight:400}._terms_edaxv_65 a{color:var(--el-text-color)}._terms_edaxv_65 ._strong_edaxv_355{font-weight:500}._terms_edaxv_65 h1{font-size:35px}._terms_edaxv_65 h2{font-size:28px}._terms_edaxv_65 h3{font-size:24px}._terms_edaxv_65 h4{font-size:20px}._terms_edaxv_65 h5{font-size:18px}._terms_edaxv_65 h6{font-size:16px}._termsShown_edaxv_65 ._terms_edaxv_65{display:block}._termsFooter_edaxv_387{display:flex;gap:8px;justify-content:end;margin-top:20px}._termsFooter_edaxv_387 ._btn_edaxv_159{flex-grow:0}._feedback_edaxv_398{display:flex;align-items:center;gap:8px;z-index:1;opacity:0;translate:0 8px;transition:all .6s var(--el-timing-function);font-size:10px;text-wrap:nowrap;line-height:10px;margin:0;color:var(--el-text-color)}._feedback_edaxv_398._show_edaxv_414{opacity:.5;translate:0 0;pointer-events:auto}._feedback_edaxv_398._show_edaxv_414:hover{opacity:1}._flag_edaxv_424{width:24px;height:24px;border-radius:50%;object-fit:cover;border:1px solid var(--el-border-color)}._selectContent_edaxv_432{z-index:1;overflow:hidden;background-color:var(--el-bg-color);color:var(--el-text-color);border:1px solid var(--el-border-color);border-radius:var(--el-border-radius);max-height:min(384px,var(--radix-select-content-available-height));min-width:var(--radix-select-trigger-width)}._selectViewport_edaxv_443{padding:8px}._selectValue_edaxv_447{display:none;margin-right:auto;margin-left:auto}._selectIcon_edaxv_453{padding-right:4px}._expandable_edaxv_59 ._selectValue_edaxv_447{display:inline}._selectItem_edaxv_461{display:flex;-webkit-user-select:none;user-select:none;align-items:center;padding:6px 32px 6px 6px;gap:8px;cursor:pointer;border-radius:var(--el-border-radius);position:relative}._selectItem_edaxv_461:focus-visible{outline:none}._selectItem_edaxv_461[data-highlighted]{background-color:#8080801a}._selectItemIndicator_edaxv_480{position:absolute;right:0;width:24px;display:inline-flex;align-items:center;justify-content:center}._selectScrollButton_edaxv_489{display:flex;align-items:center;justify-content:center;height:24px;background-color:var(--el-bg-color);cursor:default}';
  function mu({ config: e }) {
    let t = _u;
    const n = Z(
      () => `:host {
  --el-bg-color: ${(e == null ? void 0 : e.bg_color) ?? "#fff"};
  --el-text-color: ${(e == null ? void 0 : e.text_color) ?? "#000"};
  --el-border-color: ${(e == null ? void 0 : e.border_color) ?? "#e1e1e1"};
  --el-border-radius: ${(e == null ? void 0 : e.border_radius) ?? "20"}px;
  --el-btn-color: ${(e == null ? void 0 : e.btn_color) ?? "#000"};
  --el-btn-text-color: ${(e == null ? void 0 : e.btn_text_color) ?? "#fff"};
  --el-btn-radius: ${(e == null ? void 0 : e.btn_radius) ?? "32"}px;
  --el-focus-color: ${(e == null ? void 0 : e.focus_color) ?? "#000"};
  --el-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}`,
      [e]
    );
    return y("style", { children: [n, t] });
  }
  function vu({
    variant: e,
    language: t,
    ["terms-key"]: n,
    ["agent-id"]: o,
    ["signed-url"]: r,
    ["override-config"]: i,
    ["avatar-image-url"]: a,
    ["avatar-orb-color-1"]: s,
    ["avatar-orb-color-2"]: l,
    ["action-text"]: c,
    ["start-call-text"]: d,
    ["end-call-text"]: u,
    ["expand-text"]: m,
    ["listening-text"]: p,
    ["speaking-text"]: v,
    ["server-location"]: f,
  }) {
    const _ = Z(() => pu(f), [f]),
      [h, g] = E(null),
      [x, b] = E(null),
      w = Z(
        () =>
          a
            ? { type: "image", url: a }
            : s && l
            ? { type: "orb", color_1: s, color_2: l }
            : (h == null ? void 0 : h.avatar) ?? null,
        [a, s, l, h]
      ),
      A = Z(
        () => ({
          startCall:
            d ?? (h == null ? void 0 : h.start_call_text) ?? "Start a call",
          endCall: u ?? (h == null ? void 0 : h.end_call_text) ?? "End",
          action: c ?? (h == null ? void 0 : h.action_text) ?? "Need help?",
          expand: m ?? (h == null ? void 0 : h.expand_text) ?? "Chat with AI",
          listening:
            p ?? (h == null ? void 0 : h.listening_text) ?? "Listening",
          speaking:
            v ?? (h == null ? void 0 : h.speaking_text) ?? "Talk to interrupt",
          terms: (h == null ? void 0 : h.terms_html) ?? "",
        }),
        [c, d, u, m, p, v, h]
      ),
      C = Z(() => {
        var k;
        return {
          defaultValue:
            t &&
            (k = h == null ? void 0 : h.supported_language_overrides) != null &&
            k.includes(t)
              ? t
              : (h == null ? void 0 : h.language) ?? "en",
          options: h == null ? void 0 : h.supported_language_overrides,
        };
      }, [h, t]);
    return (
      L(() => {
        if (i)
          try {
            const S = JSON.parse(i);
            if (S) {
              g(S);
              return;
            }
          } catch (S) {
            console.error(
              `[ConversationalAI] Cannot parse override-config: ${
                S == null ? void 0 : S.message
              }`
            );
          }
        if (!o) {
          g(null);
          return;
        }
        const k = new AbortController();
        return (
          gu(o, _, k.signal)
            .then((S) => {
              k.signal.aborted || g(S);
            })
            .catch((S) => {
              console.error(
                `[ConversationalAI] Cannot fetch config for agent ${o}: ${
                  S == null ? void 0 : S.message
                }`
              ),
                k.signal.aborted || g(null);
            }),
          () => {
            k.abort();
          }
        );
      }, [o, _, i]),
      L(() => {
        if (o) {
          b({ agentId: o, origin: _ === "us" ? da : ua });
          return;
        }
        if (r) {
          b({ signedUrl: r });
          return;
        }
        b(null),
          console.error(
            "[ConversationalAI] Either agent-id or signed-url is required"
          );
      }, [o, r, _]),
      y(ne, {
        children: [
          y(mu, { config: h }),
          h &&
            x &&
            w &&
            y(du, {
              termsKey: n ?? h.terms_key,
              config: x,
              contents: A,
              feedbackMode: h.feedback_mode,
              location: _,
              variant: fu(e ?? (h == null ? void 0 : h.variant)),
              avatar: w,
              languageConfig: C,
            }),
        ],
      })
    );
  }
  async function gu(e, t, n) {
    const i = await (
      await fetch(`${t === "us" ? Oo : Ro}/v1/convai/agents/${e}/widget`, {
        signal: n,
      })
    ).json();
    if (!i.widget_config)
      throw new Error("Response does not contain widget_config");
    return i.widget_config;
  }
  ia(vu, "elevenlabs-convai", hu, { shadow: !0 });
});
