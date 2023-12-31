﻿! function () {
    "use strict";
    var t = 24,
        e = "px";

    function o(e, o, n) {
        for (var s = e[o], r = s.length, i = 0; i < r; i++) {
            var c = document.getElementById(s[i]);
            if (c) {
                var a = c.offsetHeight;
                if (o.includes("bottom")) {
                    var l = n ? t + (r - (i + 1)) * (a + 8) + (a + 8) : i === r - 1 ? t : t + (r - i) * (a + 8) - (a + 8);
                    c.style.bottom = "".concat(l, "px")
                } else if (o.includes("top")) {
                    var u = n ? t + (r - (i + 1)) * (a + 8) + (a + 8) : i === r - 1 ? t : t + (r - i) * (a + 8) - (a + 8);
                    c.style.top = "".concat(u, "px")
                }
            }
        }
    }

    function n(t, e, o) {
        e && e[o] && (e[o] = e[o].filter((function (e) {
            return e !== t
        })))
    }
    var s = "nolert-custom",
        r = "nolert-notify-section",
        i = {},
        c = !1,
        a = 1;

    function l(l) {
        var u = l.message,
            f = l.type,
            p = l.position,
            y = l.closeIn,
            m = l.maxWidth,
            d = l.autoClose,
            v = l.closeButton,
            g = l.cssOverrides,
            b = l.iconType,
            h = l.noIcon,
            w = l.display;
        try {
            if (!0 === c) return;
            c = !0;
            var x = "".concat(s, "-").concat(a++);
            y < 1e3 && (y = 1e3), !1 === d ? (y = null, v = !0) : function (t, e, s) {
                s && setTimeout((function () {
                    n(t, i, e), o(i, e);
                    var s = document.getElementById(t);
                    s && s.remove()
                }), s + 500)
            }(x, p, y),
                function (t, e, n) {
                    i[e] && i[e].length > 0 ? ("solo" === n ? function (t, e) {
                        for (var o = t[e], n = o.length, s = 0; s < n; s++) {
                            var r = document.getElementById(o[s]);
                            r && r.remove()
                        }
                        t[e] = []
                    }(i, e) : o(i, e, !0), i[e].push(t)) : i[e] = [t]
                }(x, p, w);
            var O = function (r) {
                var c = r.id,
                    a = r.message,
                    l = r.position,
                    u = r.type,
                    f = r.closeIn,
                    p = r.maxWidth,
                    y = r.closeButton,
                    m = r.cssOverrides,
                    d = r.iconType,
                    v = r.noIcon,
                    g = document.createElement("div");
                g.setAttribute("id", c), g.classList.add(s), g.classList.add("nolert-custom-mobile"), p && (g.style.maxWidth = p), m.zIndex && (g.style.zIndex = m.zIndex),
                    function (o, n, s) {
                        switch (o.style.opacity = 0, n) {
                            case "top":
                                o.style.left = "50%", o.style.top = "-80px", o.style.transform = "translate(-50%,0)", setTimeout((function () {
                                    o.style.opacity = 1, o.style.top = "".concat(t).concat(e), o.style.transform = "translate(-50%, 4px)"
                                }), 100), setTimeout((function () {
                                    o.style.transform = "translate(-50%, 0)"
                                }), 500), s && setTimeout((function () {
                                    o.style.opacity = 0
                                }), s);
                                break;
                            case "top-right":
                                o.style.right = "-500px", o.style.top = "".concat(t).concat(e), setTimeout((function () {
                                    o.style.opacity = 1, o.style.right = 0, o.style.transform = "translateX(-24px)"
                                }), 100), setTimeout((function () {
                                    o.style.transform = "translateX(-8px)"
                                }), 500), s && setTimeout((function () {
                                    o.style.transform = "translateX(80px)", o.style.opacity = 0
                                }), s);
                                break;
                            case "top-left":
                                o.style.left = "-500px", o.style.top = "".concat(t).concat(e), setTimeout((function () {
                                    o.style.opacity = 1, o.style.left = 0, o.style.transform = "translateX(24px)"
                                }), 100), setTimeout((function () {
                                    o.style.transform = "translateX(8px)"
                                }), 500), s && setTimeout((function () {
                                    o.style.transform = "translateX(-80px)", o.style.opacity = 0
                                }), s);
                                break;
                            case "bottom":
                                o.style.left = "50%", o.style.bottom = "-500px", o.style.transform = "translateX(-50%)", setTimeout((function () {
                                    o.style.opacity = 1, o.style.bottom = "".concat(t).concat(e), o.style.transform = "translate(-50%, -4px)"
                                }), 100), setTimeout((function () {
                                    o.style.transform = "translate(-50%, 0)"
                                }), 500), s && setTimeout((function () {
                                    o.style.opacity = 0
                                }), s);
                                break;
                            case "bottom-right":
                                o.style.right = "-500px", o.style.bottom = "".concat(t).concat(e), setTimeout((function () {
                                    o.style.opacity = 1, o.style.right = 0, o.style.transform = "translateX(-24px)"
                                }), 100), setTimeout((function () {
                                    o.style.transform = "translateX(-8px)"
                                }), 500), s && setTimeout((function () {
                                    o.style.transform = "translateX(80px)", o.style.opacity = 0
                                }), s);
                                break;
                            case "bottom-left":
                                o.style.left = "-500px", o.style.bottom = "".concat(t).concat(e), setTimeout((function () {
                                    o.style.opacity = 1, o.style.left = 0, o.style.transform = "translateX(24px)"
                                }), 100), setTimeout((function () {
                                    o.style.transform = "translateX(8px)"
                                }), 500), s && setTimeout((function () {
                                    o.style.transform = "translateX(-80px)", o.style.opacity = 0
                                }), s)
                        }
                    }(g, l, f);
                var b = document.createElement("div");
                b.setAttribute("role", "alert"), b.classList.add(u);
                for (var h = 0, w = Object.keys(m); h < w.length; h++) {
                    var x = w[h];
                    "zIndex" !== x && (b.style[x] = m[x])
                }
                var O = document.createElement("div");
                O.classList.add("nolert-content-custom");
                var T = document.createElement("div");
                T.classList.add("nolert-svg-icon-container"), !1 === v && function (t, e, o) {
                    t.innerHTML = !o && "success" === e || "success" === o ? '\n            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/></svg>\n        ' : !o && "danger" === e || "danger" === o ? '\n            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"> <path d="m10.25 5.75-4.5 4.5m0-4.5 4.5 4.5"/> <circle cx="8" cy="8" r="6.25"/> </svg>\n        ' : !o && "warning" === e || "warning" === o ? '\n            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"/></svg>\n        ' : '\n            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/> </svg>\n        '
                }(T, u, d);
                var I = document.createElement("p");
                return I.innerHTML = a, O.appendChild(T), O.appendChild(I), b.appendChild(O), y && function (t, e, s, r) {
                    var i = document.createElement("button");
                    i.classList.add("nolert-close-button"), i.addEventListener("click", (function (t) {
                        return function (t, e, s) {
                            var r = document.getElementById(t);
                            r && r.remove(), n(t, e, s), o(e, s)
                        }(e, s, r)
                    })), i.innerHTML = '\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n            <g>\n                <path fill="none" d="M0 0h24v24H0z"/>\n                <path fill="currentColor" fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>\n            </g>\n        </svg>\n    ', t.appendChild(i)
                }(b, c, i, l), g.appendChild(b), g
            }({
                id: x,
                message: u,
                position: p,
                type: f,
                closeIn: y,
                maxWidth: m,
                closeButton: v,
                cssOverrides: g,
                iconType: b,
                noIcon: h
            });
            ! function (t) {
                var e = document.getElementById(r);
                if (e) e.appendChild(t);
                else {
                    var o = document.createElement("div");
                    o.setAttribute("id", r), o.appendChild(t), document.body.appendChild(o)
                }
            }(O)
        } catch (t) {
            console.log(t)
        } finally {
            c = !1
        }
    }

    function u(t) {
        return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, u(t)
    }

    function f(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), o.push.apply(o, n)
        }
        return o
    }

    function p(t) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? f(Object(o), !0).forEach((function (e) {
                m(t, e, o[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : f(Object(o)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
            }))
        }
        return t
    }

    function y(t, e) {
        for (var o = 0; o < e.length; o++) {
            var n = e[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, d(n.key), n)
        }
    }

    function m(t, e, o) {
        return (e = d(e)) in t ? Object.defineProperty(t, e, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = o, t
    }

    function d(t) {
        var e = function (t, e) {
            if ("object" !== u(t) || null === t) return t;
            var o = t[Symbol.toPrimitive];
            if (void 0 !== o) {
                var n = o.call(t, "string");
                if ("object" !== u(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" === u(e) ? e : String(e)
    }
    var v = function () {
        function t() {
            ! function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t)
        }
        var e, o, n;
        return e = t, n = [{
            key: "trigger",
            value: function (t) {
                var e = t.type,
                    o = t.iconType,
                    n = t.closeButton,
                    s = t.closeIn,
                    r = t.autoClose,
                    i = t.noIcon,
                    c = t.message,
                    a = t.position,
                    u = {
                        type: e || this.config.type,
                        iconType: o || this.config.iconType,
                        closeButton: "boolean" == typeof n ? n : this.config.closeButton,
                        closeIn: s && "number" == typeof s && s > 999 ? s : this.config.closeIn,
                        autoClose: "boolean" == typeof r ? r : this.config.autoClose,
                        noIcon: "boolean" == typeof i ? i : this.config.noIcon,
                        message: c,
                        position: a || this.config.position,
                        cssOverrides: p({}, this.config.cssOverrides),
                        display: this.config.display
                    };
                l(p({}, u))
            }
        }, {
            key: "setConfig",
            value: function (t) {
                if ("object" === u(t))
                    for (var e = 0, o = Object.keys(t); e < o.length; e++) {
                        var n = o[e];
                        switch (n) {
                            case "display":
                                "solo" !== t[n] && "stack" !== t[n] || (this.config[n] = t[n]);
                                break;
                            case "position":
                                this.screenPositions.includes(t[n]) && (this.config[n] = t[n]);
                                break;
                            case "closeButton":
                            case "autoClose":
                            case "noIcon":
                                "boolean" == typeof t[n] && (this.config[n] = t[n]);
                                break;
                            case "closeIn":
                                "number" == typeof t[n] && t[n] > 999 && (this.config[n] = t[n]);
                                break;
                            case "type":
                            case "iconType":
                                this.config[n] = t[n];
                                break;
                            case "cssOverrides":
                                for (var s = t[n], r = 0, i = Object.keys(s); r < i.length; r++) {
                                    var c = i[r];
                                    switch (c) {
                                        case "zIndex":
                                            "number" == typeof s[c] && (this.config.cssOverrides[c] = s[c]);
                                            break;
                                        case "borderRadius":
                                            this.config.cssOverrides[c] = s[c]
                                    }
                                }
                        }
                    }
            }
        }], (o = [{
            key: "NolertNotify",
            value: function () { }
        }]) && y(e.prototype, o), n && y(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t
    }();
    m(v, "screenPositions", ["bottom", "top", "top-left", "top-right", "bottom-left", "bottom-right"]), m(v, "config", {
        type: "info",
        display: "stack",
        position: "bottom",
        closeButton: !0,
        autoClose: !0,
        closeIn: 4e3,
        noIcon: !1,
        cssOverrides: {
            zIndex: 100,
            borderRadius: "4px"
        }
    });
    var g = v;
    window.NolertNotify = g
}();