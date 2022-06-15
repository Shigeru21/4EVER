/*! For license information please see vendor.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
    [736], {
        718: function(t) {
            t.exports = function() {
                "use strict";
                const t = "transitionend",
                    e = t => {
                        let e = t.getAttribute("data-bs-target");
                        if (!e || "#" === e) {
                            let n = t.getAttribute("href");
                            if (!n || !n.includes("#") && !n.startsWith(".")) return null;
                            n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), e = n && "#" !== n ? n.trim() : null
                        }
                        return e
                    },
                    n = t => { const n = e(t); return n && document.querySelector(n) ? n : null },
                    i = t => { const n = e(t); return n ? document.querySelector(n) : null },
                    r = e => { e.dispatchEvent(new Event(t)) },
                    s = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
                    o = t => s(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
                    a = (t, e, n) => {
                        Object.keys(n).forEach((i => {
                            const r = n[i],
                                o = e[i],
                                a = o && s(o) ? "element" : null == (l = o) ? `${l}` : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                            var l;
                            if (!new RegExp(r).test(a)) throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${r}".`)
                        }))
                    },
                    l = t => !(!s(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                    c = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
                    u = t => { if (!document.documentElement.attachShadow) return null; if ("function" == typeof t.getRootNode) { const e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } return t instanceof ShadowRoot ? t : t.parentNode ? u(t.parentNode) : null },
                    h = () => {},
                    d = t => { t.offsetHeight },
                    f = () => { const { jQuery: t } = window; return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null },
                    p = [],
                    g = () => "rtl" === document.documentElement.dir,
                    m = t => {
                        var e;
                        e = () => {
                            const e = f();
                            if (e) {
                                const n = t.NAME,
                                    i = e.fn[n];
                                e.fn[n] = t.jQueryInterface, e.fn[n].Constructor = t, e.fn[n].noConflict = () => (e.fn[n] = i, t.jQueryInterface)
                            }
                        }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", (() => { p.forEach((t => t())) })), p.push(e)) : e()
                    },
                    _ = t => { "function" == typeof t && t() },
                    v = (e, n, i = !0) => {
                        if (!i) return void _(e);
                        const s = (t => {
                            if (!t) return 0;
                            let { transitionDuration: e, transitionDelay: n } = window.getComputedStyle(t);
                            const i = Number.parseFloat(e),
                                r = Number.parseFloat(n);
                            return i || r ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(n))) : 0
                        })(n) + 5;
                        let o = !1;
                        const a = ({ target: i }) => { i === n && (o = !0, n.removeEventListener(t, a), _(e)) };
                        n.addEventListener(t, a), setTimeout((() => { o || r(n) }), s)
                    },
                    y = (t, e, n, i) => { let r = t.indexOf(e); if (-1 === r) return t[!n && i ? t.length - 1 : 0]; const s = t.length; return r += n ? 1 : -1, i && (r = (r + s) % s), t[Math.max(0, Math.min(r, s - 1))] },
                    b = /[^.]*(?=\..*)\.|.*/,
                    w = /\..*/,
                    x = /::\d+$/,
                    E = {};
                let T = 1;
                const C = { mouseenter: "mouseover", mouseleave: "mouseout" },
                    A = /^(mouseenter|mouseleave)/i,
                    k = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

                function O(t, e) { return e && `${e}::${T++}` || t.uidEvent || T++ }

                function S(t) { const e = O(t); return t.uidEvent = e, E[e] = E[e] || {}, E[e] }

                function D(t, e, n = null) { const i = Object.keys(t); for (let r = 0, s = i.length; r < s; r++) { const s = t[i[r]]; if (s.originalHandler === e && s.delegationSelector === n) return s } return null }

                function L(t, e, n) {
                    const i = "string" == typeof e,
                        r = i ? n : e;
                    let s = P(t);
                    return k.has(s) || (s = t), [i, r, s]
                }

                function N(t, e, n, i, r) {
                    if ("string" != typeof e || !t) return;
                    if (n || (n = i, i = null), A.test(e)) {
                        const t = t => function(e) { if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e) };
                        i ? i = t(i) : n = t(n)
                    }
                    const [s, o, a] = L(e, n, i), l = S(t), c = l[a] || (l[a] = {}), u = D(c, o, s ? n : null);
                    if (u) return void(u.oneOff = u.oneOff && r);
                    const h = O(o, e.replace(b, "")),
                        d = s ? function(t, e, n) {
                            return function i(r) {
                                const s = t.querySelectorAll(e);
                                for (let { target: o } = r; o && o !== this; o = o.parentNode)
                                    for (let a = s.length; a--;)
                                        if (s[a] === o) return r.delegateTarget = o, i.oneOff && I.off(t, r.type, e, n), n.apply(o, [r]);
                                return null
                            }
                        }(t, n, i) : function(t, e) { return function n(i) { return i.delegateTarget = t, n.oneOff && I.off(t, i.type, e), e.apply(t, [i]) } }(t, n);
                    d.delegationSelector = s ? n : null, d.originalHandler = o, d.oneOff = r, d.uidEvent = h, c[h] = d, t.addEventListener(a, d, s)
                }

                function M(t, e, n, i, r) {
                    const s = D(e[n], i, r);
                    s && (t.removeEventListener(n, s, Boolean(r)), delete e[n][s.uidEvent])
                }

                function P(t) { return t = t.replace(w, ""), C[t] || t }
                const I = {
                        on(t, e, n, i) { N(t, e, n, i, !1) },
                        one(t, e, n, i) { N(t, e, n, i, !0) },
                        off(t, e, n, i) {
                            if ("string" != typeof e || !t) return;
                            const [r, s, o] = L(e, n, i), a = o !== e, l = S(t), c = e.startsWith(".");
                            if (void 0 !== s) { if (!l || !l[o]) return; return void M(t, l, o, s, r ? n : null) }
                            c && Object.keys(l).forEach((n => {
                                ! function(t, e, n, i) {
                                    const r = e[n] || {};
                                    Object.keys(r).forEach((s => {
                                        if (s.includes(i)) {
                                            const i = r[s];
                                            M(t, e, n, i.originalHandler, i.delegationSelector)
                                        }
                                    }))
                                }(t, l, n, e.slice(1))
                            }));
                            const u = l[o] || {};
                            Object.keys(u).forEach((n => {
                                const i = n.replace(x, "");
                                if (!a || e.includes(i)) {
                                    const e = u[n];
                                    M(t, l, o, e.originalHandler, e.delegationSelector)
                                }
                            }))
                        },
                        trigger(t, e, n) {
                            if ("string" != typeof e || !t) return null;
                            const i = f(),
                                r = P(e),
                                s = e !== r,
                                o = k.has(r);
                            let a, l = !0,
                                c = !0,
                                u = !1,
                                h = null;
                            return s && i && (a = i.Event(e, n), i(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), u = a.isDefaultPrevented()), o ? (h = document.createEvent("HTMLEvents"), h.initEvent(r, l, !0)) : h = new CustomEvent(e, { bubbles: l, cancelable: !0 }), void 0 !== n && Object.keys(n).forEach((t => { Object.defineProperty(h, t, { get: () => n[t] }) })), u && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h
                        }
                    },
                    j = new Map,
                    R = {set(t, e, n) {
                            j.has(t) || j.set(t, new Map);
                            const i = j.get(t);
                            i.has(e) || 0 === i.size ? i.set(e, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
                        },
                        get: (t, e) => j.has(t) && j.get(t).get(e) || null,
                        remove(t, e) {
                            if (!j.has(t)) return;
                            const n = j.get(t);
                            n.delete(e), 0 === n.size && j.delete(t)
                        }
                    };
                class z {
                    constructor(t) {
                        (t = o(t)) && (this._element = t, R.set(this._element, this.constructor.DATA_KEY, this))
                    }
                    dispose() { R.remove(this._element, this.constructor.DATA_KEY), I.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t => { this[t] = null })) }
                    _queueCallback(t, e, n = !0) { v(t, e, n) }
                    static getInstance(t) { return R.get(o(t), this.DATA_KEY) }
                    static getOrCreateInstance(t, e = {}) { return this.getInstance(t) || new this(t, "object" == typeof e ? e : null) }
                    static get VERSION() { return "5.1.3" }
                    static get NAME() { throw new Error('You have to implement the static method "NAME", for each component!') }
                    static get DATA_KEY() { return `bs.${this.NAME}` }
                    static get EVENT_KEY() { return `.${this.DATA_KEY}` }
                }
                const H = (t, e = "hide") => {
                    const n = `click.dismiss${t.EVENT_KEY}`,
                        r = t.NAME;
                    I.on(document, n, `[data-bs-dismiss="${r}"]`, (function(n) {
                        if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), c(this)) return;
                        const s = i(this) || this.closest(`.${r}`);
                        t.getOrCreateInstance(s)[e]()
                    }))
                };
                class $ extends z {
                    static get NAME() { return "alert" }
                    close() {
                        if (I.trigger(this._element, "close.bs.alert").defaultPrevented) return;
                        this._element.classList.remove("show");
                        const t = this._element.classList.contains("fade");
                        this._queueCallback((() => this._destroyElement()), this._element, t)
                    }
                    _destroyElement() { this._element.remove(), I.trigger(this._element, "closed.bs.alert"), this.dispose() }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = $.getOrCreateInstance(this);
                            if ("string" == typeof t) {
                                if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                                e[t](this)
                            }
                        }))
                    }
                }
                H($, "close"), m($);
                const B = '[data-bs-toggle="button"]';
                class q extends z {
                    static get NAME() { return "button" }
                    toggle() { this._element.setAttribute("aria-pressed", this._element.classList.toggle("active")) }
                    static jQueryInterface(t) { return this.each((function() { const e = q.getOrCreateInstance(this); "toggle" === t && e[t]() })) }
                }

                function W(t) { return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t) }

                function F(t) { return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`)) }
                I.on(document, "click.bs.button.data-api", B, (t => {
                    t.preventDefault();
                    const e = t.target.closest(B);
                    q.getOrCreateInstance(e).toggle()
                })), m(q);
                const U = {
                        setDataAttribute(t, e, n) { t.setAttribute(`data-bs-${F(e)}`, n) },
                        removeDataAttribute(t, e) { t.removeAttribute(`data-bs-${F(e)}`) },
                        getDataAttributes(t) {
                            if (!t) return {};
                            const e = {};
                            return Object.keys(t.dataset).filter((t => t.startsWith("bs"))).forEach((n => {
                                let i = n.replace(/^bs/, "");
                                i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = W(t.dataset[n])
                            })), e
                        },
                        getDataAttribute: (t, e) => W(t.getAttribute(`data-bs-${F(e)}`)),
                        offset(t) { const e = t.getBoundingClientRect(); return { top: e.top + window.pageYOffset, left: e.left + window.pageXOffset } },
                        position: t => ({ top: t.offsetTop, left: t.offsetLeft })
                    },
                    X = {
                        find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
                        findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
                        children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
                        parents(t, e) { const n = []; let i = t.parentNode; for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(e) && n.push(i), i = i.parentNode; return n },
                        prev(t, e) {
                            let n = t.previousElementSibling;
                            for (; n;) {
                                if (n.matches(e)) return [n];
                                n = n.previousElementSibling
                            }
                            return []
                        },
                        next(t, e) {
                            let n = t.nextElementSibling;
                            for (; n;) {
                                if (n.matches(e)) return [n];
                                n = n.nextElementSibling
                            }
                            return []
                        },
                        focusableChildren(t) { const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(", "); return this.find(e, t).filter((t => !c(t) && l(t))) }
                    },
                    V = "carousel",
                    Y = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
                    K = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
                    Q = "next",
                    G = "prev",
                    Z = "left",
                    J = "right",
                    tt = { ArrowLeft: J, ArrowRight: Z },
                    et = "slid.bs.carousel",
                    nt = "active",
                    it = ".active.carousel-item";
                class rt extends z {
                    constructor(t, e) { super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = X.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners() }
                    static get Default() { return Y }
                    static get NAME() { return V }
                    next() { this._slide(Q) }
                    nextWhenVisible() {!document.hidden && l(this._element) && this.next() }
                    prev() { this._slide(G) }
                    pause(t) { t || (this._isPaused = !0), X.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (r(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }
                    cycle(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }
                    to(t) {
                        this._activeElement = X.findOne(it, this._element);
                        const e = this._getItemIndex(this._activeElement);
                        if (t > this._items.length - 1 || t < 0) return;
                        if (this._isSliding) return void I.one(this._element, et, (() => this.to(t)));
                        if (e === t) return this.pause(), void this.cycle();
                        const n = t > e ? Q : G;
                        this._slide(n, this._items[t])
                    }
                    _getConfig(t) { return t = {...Y, ...U.getDataAttributes(this._element), ... "object" == typeof t ? t : {} }, a(V, t, K), t }
                    _handleSwipe() {
                        const t = Math.abs(this.touchDeltaX);
                        if (t <= 40) return;
                        const e = t / this.touchDeltaX;
                        this.touchDeltaX = 0, e && this._slide(e > 0 ? J : Z)
                    }
                    _addEventListeners() { this._config.keyboard && I.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && (I.on(this._element, "mouseenter.bs.carousel", (t => this.pause(t))), I.on(this._element, "mouseleave.bs.carousel", (t => this.cycle(t)))), this._config.touch && this._touchSupported && this._addTouchEventListeners() }
                    _addTouchEventListeners() {
                        const t = t => this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType),
                            e = e => { t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX) },
                            n = t => { this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX },
                            i = e => { t(e) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t => this.cycle(t)), 500 + this._config.interval)) };
                        X.find(".carousel-item img", this._element).forEach((t => { I.on(t, "dragstart.bs.carousel", (t => t.preventDefault())) })), this._pointerEvent ? (I.on(this._element, "pointerdown.bs.carousel", (t => e(t))), I.on(this._element, "pointerup.bs.carousel", (t => i(t))), this._element.classList.add("pointer-event")) : (I.on(this._element, "touchstart.bs.carousel", (t => e(t))), I.on(this._element, "touchmove.bs.carousel", (t => n(t))), I.on(this._element, "touchend.bs.carousel", (t => i(t))))
                    }
                    _keydown(t) {
                        if (/input|textarea/i.test(t.target.tagName)) return;
                        const e = tt[t.key];
                        e && (t.preventDefault(), this._slide(e))
                    }
                    _getItemIndex(t) { return this._items = t && t.parentNode ? X.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t) }
                    _getItemByOrder(t, e) { const n = t === Q; return y(this._items, e, n, this._config.wrap) }
                    _triggerSlideEvent(t, e) {
                        const n = this._getItemIndex(t),
                            i = this._getItemIndex(X.findOne(it, this._element));
                        return I.trigger(this._element, "slide.bs.carousel", { relatedTarget: t, direction: e, from: i, to: n })
                    }
                    _setActiveIndicatorElement(t) {
                        if (this._indicatorsElement) {
                            const e = X.findOne(".active", this._indicatorsElement);
                            e.classList.remove(nt), e.removeAttribute("aria-current");
                            const n = X.find("[data-bs-target]", this._indicatorsElement);
                            for (let e = 0; e < n.length; e++)
                                if (Number.parseInt(n[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) { n[e].classList.add(nt), n[e].setAttribute("aria-current", "true"); break }
                        }
                    }
                    _updateInterval() {
                        const t = this._activeElement || X.findOne(it, this._element);
                        if (!t) return;
                        const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
                    }
                    _slide(t, e) {
                        const n = this._directionToOrder(t),
                            i = X.findOne(it, this._element),
                            r = this._getItemIndex(i),
                            s = e || this._getItemByOrder(n, i),
                            o = this._getItemIndex(s),
                            a = Boolean(this._interval),
                            l = n === Q,
                            c = l ? "carousel-item-start" : "carousel-item-end",
                            u = l ? "carousel-item-next" : "carousel-item-prev",
                            h = this._orderToDirection(n);
                        if (s && s.classList.contains(nt)) return void(this._isSliding = !1);
                        if (this._isSliding) return;
                        if (this._triggerSlideEvent(s, h).defaultPrevented) return;
                        if (!i || !s) return;
                        this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s), this._activeElement = s;
                        const f = () => { I.trigger(this._element, et, { relatedTarget: s, direction: h, from: r, to: o }) };
                        if (this._element.classList.contains("slide")) {
                            s.classList.add(u), d(s), i.classList.add(c), s.classList.add(c);
                            const t = () => { s.classList.remove(c, u), s.classList.add(nt), i.classList.remove(nt, u, c), this._isSliding = !1, setTimeout(f, 0) };
                            this._queueCallback(t, i, !0)
                        } else i.classList.remove(nt), s.classList.add(nt), this._isSliding = !1, f();
                        a && this.cycle()
                    }
                    _directionToOrder(t) { return [J, Z].includes(t) ? g() ? t === Z ? G : Q : t === Z ? Q : G : t }
                    _orderToDirection(t) { return [Q, G].includes(t) ? g() ? t === G ? Z : J : t === G ? J : Z : t }
                    static carouselInterface(t, e) {
                        const n = rt.getOrCreateInstance(t, e);
                        let { _config: i } = n;
                        "object" == typeof e && (i = {...i, ...e });
                        const r = "string" == typeof e ? e : i.slide;
                        if ("number" == typeof e) n.to(e);
                        else if ("string" == typeof r) {
                            if (void 0 === n[r]) throw new TypeError(`No method named "${r}"`);
                            n[r]()
                        } else i.interval && i.ride && (n.pause(), n.cycle())
                    }
                    static jQueryInterface(t) { return this.each((function() { rt.carouselInterface(this, t) })) }
                    static dataApiClickHandler(t) {
                        const e = i(this);
                        if (!e || !e.classList.contains("carousel")) return;
                        const n = {...U.getDataAttributes(e), ...U.getDataAttributes(this) },
                            r = this.getAttribute("data-bs-slide-to");
                        r && (n.interval = !1), rt.carouselInterface(e, n), r && rt.getInstance(e).to(r), t.preventDefault()
                    }
                }
                I.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", rt.dataApiClickHandler), I.on(window, "load.bs.carousel.data-api", (() => { const t = X.find('[data-bs-ride="carousel"]'); for (let e = 0, n = t.length; e < n; e++) rt.carouselInterface(t[e], rt.getInstance(t[e])) })), m(rt);
                const st = "collapse",
                    ot = "bs.collapse",
                    at = { toggle: !0, parent: null },
                    lt = { toggle: "boolean", parent: "(null|element)" },
                    ct = "show",
                    ut = "collapse",
                    ht = "collapsing",
                    dt = "collapsed",
                    ft = ":scope .collapse .collapse",
                    pt = '[data-bs-toggle="collapse"]';
                class gt extends z {
                    constructor(t, e) {
                        super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = [];
                        const i = X.find(pt);
                        for (let t = 0, e = i.length; t < e; t++) {
                            const e = i[t],
                                r = n(e),
                                s = X.find(r).filter((t => t === this._element));
                            null !== r && s.length && (this._selector = r, this._triggerArray.push(e))
                        }
                        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
                    }
                    static get Default() { return at }
                    static get NAME() { return st }
                    toggle() { this._isShown() ? this.hide() : this.show() }
                    show() {
                        if (this._isTransitioning || this._isShown()) return;
                        let t, e = [];
                        if (this._config.parent) {
                            const t = X.find(ft, this._config.parent);
                            e = X.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e => !t.includes(e)))
                        }
                        const n = X.findOne(this._selector);
                        if (e.length) { const i = e.find((t => n !== t)); if (t = i ? gt.getInstance(i) : null, t && t._isTransitioning) return }
                        if (I.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
                        e.forEach((e => { n !== e && gt.getOrCreateInstance(e, { toggle: !1 }).hide(), t || R.set(e, ot, null) }));
                        const i = this._getDimension();
                        this._element.classList.remove(ut), this._element.classList.add(ht), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                        const r = `scroll${i[0].toUpperCase()+i.slice(1)}`;
                        this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ut, ct), this._element.style[i] = "", I.trigger(this._element, "shown.bs.collapse") }), this._element, !0), this._element.style[i] = `${this._element[r]}px`
                    }
                    hide() {
                        if (this._isTransitioning || !this._isShown()) return;
                        if (I.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
                        const t = this._getDimension();
                        this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, d(this._element), this._element.classList.add(ht), this._element.classList.remove(ut, ct);
                        const e = this._triggerArray.length;
                        for (let t = 0; t < e; t++) {
                            const e = this._triggerArray[t],
                                n = i(e);
                            n && !this._isShown(n) && this._addAriaAndCollapsedClass([e], !1)
                        }
                        this._isTransitioning = !0;
                        this._element.style[t] = "", this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ut), I.trigger(this._element, "hidden.bs.collapse") }), this._element, !0)
                    }
                    _isShown(t = this._element) { return t.classList.contains(ct) }
                    _getConfig(t) { return (t = {...at, ...U.getDataAttributes(this._element), ...t }).toggle = Boolean(t.toggle), t.parent = o(t.parent), a(st, t, lt), t }
                    _getDimension() { return this._element.classList.contains("collapse-horizontal") ? "width" : "height" }
                    _initializeChildren() {
                        if (!this._config.parent) return;
                        const t = X.find(ft, this._config.parent);
                        X.find(pt, this._config.parent).filter((e => !t.includes(e))).forEach((t => {
                            const e = i(t);
                            e && this._addAriaAndCollapsedClass([t], this._isShown(e))
                        }))
                    }
                    _addAriaAndCollapsedClass(t, e) { t.length && t.forEach((t => { e ? t.classList.remove(dt) : t.classList.add(dt), t.setAttribute("aria-expanded", e) })) }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = {};
                            "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                            const n = gt.getOrCreateInstance(this, e);
                            if ("string" == typeof t) {
                                if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
                                n[t]()
                            }
                        }))
                    }
                }
                I.on(document, "click.bs.collapse.data-api", pt, (function(t) {
                    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
                    const e = n(this);
                    X.find(e).forEach((t => { gt.getOrCreateInstance(t, { toggle: !1 }).toggle() }))
                })), m(gt);
                var mt = "top",
                    _t = "bottom",
                    vt = "right",
                    yt = "left",
                    bt = "auto",
                    wt = [mt, _t, vt, yt],
                    xt = "start",
                    Et = "end",
                    Tt = "clippingParents",
                    Ct = "viewport",
                    At = "popper",
                    kt = "reference",
                    Ot = wt.reduce((function(t, e) { return t.concat([e + "-" + xt, e + "-" + Et]) }), []),
                    St = [].concat(wt, [bt]).reduce((function(t, e) { return t.concat([e, e + "-" + xt, e + "-" + Et]) }), []),
                    Dt = "beforeRead",
                    Lt = "read",
                    Nt = "afterRead",
                    Mt = "beforeMain",
                    Pt = "main",
                    It = "afterMain",
                    jt = "beforeWrite",
                    Rt = "write",
                    zt = "afterWrite",
                    Ht = [Dt, Lt, Nt, Mt, Pt, It, jt, Rt, zt];

                function $t(t) { return t ? (t.nodeName || "").toLowerCase() : null }

                function Bt(t) { if (null == t) return window; if ("[object Window]" !== t.toString()) { var e = t.ownerDocument; return e && e.defaultView || window } return t }

                function qt(t) { return t instanceof Bt(t).Element || t instanceof Element }

                function Wt(t) { return t instanceof Bt(t).HTMLElement || t instanceof HTMLElement }

                function Ft(t) { return "undefined" != typeof ShadowRoot && (t instanceof Bt(t).ShadowRoot || t instanceof ShadowRoot) }
                const Ut = {
                    name: "applyStyles",
                    enabled: !0,
                    phase: "write",
                    fn: function(t) {
                        var e = t.state;
                        Object.keys(e.elements).forEach((function(t) {
                            var n = e.styles[t] || {},
                                i = e.attributes[t] || {},
                                r = e.elements[t];
                            Wt(r) && $t(r) && (Object.assign(r.style, n), Object.keys(i).forEach((function(t) { var e = i[t];!1 === e ? r.removeAttribute(t) : r.setAttribute(t, !0 === e ? "" : e) })))
                        }))
                    },
                    effect: function(t) {
                        var e = t.state,
                            n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
                        return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
                            function() {
                                Object.keys(e.elements).forEach((function(t) {
                                    var i = e.elements[t],
                                        r = e.attributes[t] || {},
                                        s = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function(t, e) { return t[e] = "", t }), {});
                                    Wt(i) && $t(i) && (Object.assign(i.style, s), Object.keys(r).forEach((function(t) { i.removeAttribute(t) })))
                                }))
                            }
                    },
                    requires: ["computeStyles"]
                };

                function Xt(t) { return t.split("-")[0] }

                function Vt(t, e) { var n = t.getBoundingClientRect(); return { width: n.width / 1, height: n.height / 1, top: n.top / 1, right: n.right / 1, bottom: n.bottom / 1, left: n.left / 1, x: n.left / 1, y: n.top / 1 } }

                function Yt(t) {
                    var e = Vt(t),
                        n = t.offsetWidth,
                        i = t.offsetHeight;
                    return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: t.offsetLeft, y: t.offsetTop, width: n, height: i }
                }

                function Kt(t, e) {
                    var n = e.getRootNode && e.getRootNode();
                    if (t.contains(e)) return !0;
                    if (n && Ft(n)) {
                        var i = e;
                        do {
                            if (i && t.isSameNode(i)) return !0;
                            i = i.parentNode || i.host
                        } while (i)
                    }
                    return !1
                }

                function Qt(t) { return Bt(t).getComputedStyle(t) }

                function Gt(t) { return ["table", "td", "th"].indexOf($t(t)) >= 0 }

                function Zt(t) { return ((qt(t) ? t.ownerDocument : t.document) || window.document).documentElement }

                function Jt(t) { return "html" === $t(t) ? t : t.assignedSlot || t.parentNode || (Ft(t) ? t.host : null) || Zt(t) }

                function te(t) { return Wt(t) && "fixed" !== Qt(t).position ? t.offsetParent : null }

                function ee(t) {
                    for (var e = Bt(t), n = te(t); n && Gt(n) && "static" === Qt(n).position;) n = te(n);
                    return n && ("html" === $t(n) || "body" === $t(n) && "static" === Qt(n).position) ? e : n || function(t) {
                        var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                        if (-1 !== navigator.userAgent.indexOf("Trident") && Wt(t) && "fixed" === Qt(t).position) return null;
                        for (var n = Jt(t); Wt(n) && ["html", "body"].indexOf($t(n)) < 0;) {
                            var i = Qt(n);
                            if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || e && "filter" === i.willChange || e && i.filter && "none" !== i.filter) return n;
                            n = n.parentNode
                        }
                        return null
                    }(t) || e
                }

                function ne(t) { return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y" }
                var ie = Math.max,
                    re = Math.min,
                    se = Math.round;

                function oe(t, e, n) { return ie(t, re(e, n)) }

                function ae(t) { return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t) }

                function le(t, e) { return e.reduce((function(e, n) { return e[n] = t, e }), {}) }
                const ce = {
                    name: "arrow",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e, n = t.state,
                            i = t.name,
                            r = t.options,
                            s = n.elements.arrow,
                            o = n.modifiersData.popperOffsets,
                            a = Xt(n.placement),
                            l = ne(a),
                            c = [yt, vt].indexOf(a) >= 0 ? "height" : "width";
                        if (s && o) {
                            var u = function(t, e) { return ae("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, { placement: e.placement })) : t) ? t : le(t, wt)) }(r.padding, n),
                                h = Yt(s),
                                d = "y" === l ? mt : yt,
                                f = "y" === l ? _t : vt,
                                p = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c],
                                g = o[l] - n.rects.reference[l],
                                m = ee(s),
                                _ = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
                                v = p / 2 - g / 2,
                                y = u[d],
                                b = _ - h[c] - u[f],
                                w = _ / 2 - h[c] / 2 + v,
                                x = oe(y, w, b),
                                E = l;
                            n.modifiersData[i] = ((e = {})[E] = x, e.centerOffset = x - w, e)
                        }
                    },
                    effect: function(t) {
                        var e = t.state,
                            n = t.options.element,
                            i = void 0 === n ? "[data-popper-arrow]" : n;
                        null != i && ("string" != typeof i || (i = e.elements.popper.querySelector(i))) && Kt(e.elements.popper, i) && (e.elements.arrow = i)
                    },
                    requires: ["popperOffsets"],
                    requiresIfExists: ["preventOverflow"]
                };

                function ue(t) { return t.split("-")[1] }
                var he = { top: "auto", right: "auto", bottom: "auto", left: "auto" };

                function de(t) {
                    var e, n = t.popper,
                        i = t.popperRect,
                        r = t.placement,
                        s = t.variation,
                        o = t.offsets,
                        a = t.position,
                        l = t.gpuAcceleration,
                        c = t.adaptive,
                        u = t.roundOffsets,
                        h = !0 === u ? function(t) {
                            var e = t.x,
                                n = t.y,
                                i = window.devicePixelRatio || 1;
                            return { x: se(se(e * i) / i) || 0, y: se(se(n * i) / i) || 0 }
                        }(o) : "function" == typeof u ? u(o) : o,
                        d = h.x,
                        f = void 0 === d ? 0 : d,
                        p = h.y,
                        g = void 0 === p ? 0 : p,
                        m = o.hasOwnProperty("x"),
                        _ = o.hasOwnProperty("y"),
                        v = yt,
                        y = mt,
                        b = window;
                    if (c) {
                        var w = ee(n),
                            x = "clientHeight",
                            E = "clientWidth";
                        w === Bt(n) && "static" !== Qt(w = Zt(n)).position && "absolute" === a && (x = "scrollHeight", E = "scrollWidth"), w = w, r !== mt && (r !== yt && r !== vt || s !== Et) || (y = _t, g -= w[x] - i.height, g *= l ? 1 : -1), r !== yt && (r !== mt && r !== _t || s !== Et) || (v = vt, f -= w[E] - i.width, f *= l ? 1 : -1)
                    }
                    var T, C = Object.assign({ position: a }, c && he);
                    return l ? Object.assign({}, C, ((T = {})[y] = _ ? "0" : "", T[v] = m ? "0" : "", T.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)", T)) : Object.assign({}, C, ((e = {})[y] = _ ? g + "px" : "", e[v] = m ? f + "px" : "", e.transform = "", e))
                }
                const fe = {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function(t) {
                        var e = t.state,
                            n = t.options,
                            i = n.gpuAcceleration,
                            r = void 0 === i || i,
                            s = n.adaptive,
                            o = void 0 === s || s,
                            a = n.roundOffsets,
                            l = void 0 === a || a,
                            c = { placement: Xt(e.placement), variation: ue(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: r };
                        null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, de(Object.assign({}, c, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: o, roundOffsets: l })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, de(Object.assign({}, c, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement })
                    },
                    data: {}
                };
                var pe = { passive: !0 };
                const ge = {
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: function(t) {
                        var e = t.state,
                            n = t.instance,
                            i = t.options,
                            r = i.scroll,
                            s = void 0 === r || r,
                            o = i.resize,
                            a = void 0 === o || o,
                            l = Bt(e.elements.popper),
                            c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                        return s && c.forEach((function(t) { t.addEventListener("scroll", n.update, pe) })), a && l.addEventListener("resize", n.update, pe),
                            function() { s && c.forEach((function(t) { t.removeEventListener("scroll", n.update, pe) })), a && l.removeEventListener("resize", n.update, pe) }
                    },
                    data: {}
                };
                var me = { left: "right", right: "left", bottom: "top", top: "bottom" };

                function _e(t) { return t.replace(/left|right|bottom|top/g, (function(t) { return me[t] })) }
                var ve = { start: "end", end: "start" };

                function ye(t) { return t.replace(/start|end/g, (function(t) { return ve[t] })) }

                function be(t) { var e = Bt(t); return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset } }

                function we(t) { return Vt(Zt(t)).left + be(t).scrollLeft }

                function xe(t) {
                    var e = Qt(t),
                        n = e.overflow,
                        i = e.overflowX,
                        r = e.overflowY;
                    return /auto|scroll|overlay|hidden/.test(n + r + i)
                }

                function Ee(t) { return ["html", "body", "#document"].indexOf($t(t)) >= 0 ? t.ownerDocument.body : Wt(t) && xe(t) ? t : Ee(Jt(t)) }

                function Te(t, e) {
                    var n;
                    void 0 === e && (e = []);
                    var i = Ee(t),
                        r = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
                        s = Bt(i),
                        o = r ? [s].concat(s.visualViewport || [], xe(i) ? i : []) : i,
                        a = e.concat(o);
                    return r ? a : a.concat(Te(Jt(o)))
                }

                function Ce(t) { return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height }) }

                function Ae(t, e) {
                    return e === Ct ? Ce(function(t) {
                        var e = Bt(t),
                            n = Zt(t),
                            i = e.visualViewport,
                            r = n.clientWidth,
                            s = n.clientHeight,
                            o = 0,
                            a = 0;
                        return i && (r = i.width, s = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (o = i.offsetLeft, a = i.offsetTop)), { width: r, height: s, x: o + we(t), y: a }
                    }(t)) : Wt(e) ? function(t) { var e = Vt(t); return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e }(e) : Ce(function(t) {
                        var e, n = Zt(t),
                            i = be(t),
                            r = null == (e = t.ownerDocument) ? void 0 : e.body,
                            s = ie(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
                            o = ie(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
                            a = -i.scrollLeft + we(t),
                            l = -i.scrollTop;
                        return "rtl" === Qt(r || n).direction && (a += ie(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: o, x: a, y: l }
                    }(Zt(t)))
                }

                function ke(t, e, n) {
                    var i = "clippingParents" === e ? function(t) {
                            var e = Te(Jt(t)),
                                n = ["absolute", "fixed"].indexOf(Qt(t).position) >= 0 && Wt(t) ? ee(t) : t;
                            return qt(n) ? e.filter((function(t) { return qt(t) && Kt(t, n) && "body" !== $t(t) })) : []
                        }(t) : [].concat(e),
                        r = [].concat(i, [n]),
                        s = r[0],
                        o = r.reduce((function(e, n) { var i = Ae(t, n); return e.top = ie(i.top, e.top), e.right = re(i.right, e.right), e.bottom = re(i.bottom, e.bottom), e.left = ie(i.left, e.left), e }), Ae(t, s));
                    return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o
                }

                function Oe(t) {
                    var e, n = t.reference,
                        i = t.element,
                        r = t.placement,
                        s = r ? Xt(r) : null,
                        o = r ? ue(r) : null,
                        a = n.x + n.width / 2 - i.width / 2,
                        l = n.y + n.height / 2 - i.height / 2;
                    switch (s) {
                        case mt:
                            e = { x: a, y: n.y - i.height };
                            break;
                        case _t:
                            e = { x: a, y: n.y + n.height };
                            break;
                        case vt:
                            e = { x: n.x + n.width, y: l };
                            break;
                        case yt:
                            e = { x: n.x - i.width, y: l };
                            break;
                        default:
                            e = { x: n.x, y: n.y }
                    }
                    var c = s ? ne(s) : null;
                    if (null != c) {
                        var u = "y" === c ? "height" : "width";
                        switch (o) {
                            case xt:
                                e[c] = e[c] - (n[u] / 2 - i[u] / 2);
                                break;
                            case Et:
                                e[c] = e[c] + (n[u] / 2 - i[u] / 2)
                        }
                    }
                    return e
                }

                function Se(t, e) {
                    void 0 === e && (e = {});
                    var n = e,
                        i = n.placement,
                        r = void 0 === i ? t.placement : i,
                        s = n.boundary,
                        o = void 0 === s ? Tt : s,
                        a = n.rootBoundary,
                        l = void 0 === a ? Ct : a,
                        c = n.elementContext,
                        u = void 0 === c ? At : c,
                        h = n.altBoundary,
                        d = void 0 !== h && h,
                        f = n.padding,
                        p = void 0 === f ? 0 : f,
                        g = ae("number" != typeof p ? p : le(p, wt)),
                        m = u === At ? kt : At,
                        _ = t.rects.popper,
                        v = t.elements[d ? m : u],
                        y = ke(qt(v) ? v : v.contextElement || Zt(t.elements.popper), o, l),
                        b = Vt(t.elements.reference),
                        w = Oe({ reference: b, element: _, strategy: "absolute", placement: r }),
                        x = Ce(Object.assign({}, _, w)),
                        E = u === At ? x : b,
                        T = { top: y.top - E.top + g.top, bottom: E.bottom - y.bottom + g.bottom, left: y.left - E.left + g.left, right: E.right - y.right + g.right },
                        C = t.modifiersData.offset;
                    if (u === At && C) {
                        var A = C[r];
                        Object.keys(T).forEach((function(t) {
                            var e = [vt, _t].indexOf(t) >= 0 ? 1 : -1,
                                n = [mt, _t].indexOf(t) >= 0 ? "y" : "x";
                            T[t] += A[n] * e
                        }))
                    }
                    return T
                }

                function De(t, e) {
                    void 0 === e && (e = {});
                    var n = e,
                        i = n.placement,
                        r = n.boundary,
                        s = n.rootBoundary,
                        o = n.padding,
                        a = n.flipVariations,
                        l = n.allowedAutoPlacements,
                        c = void 0 === l ? St : l,
                        u = ue(i),
                        h = u ? a ? Ot : Ot.filter((function(t) { return ue(t) === u })) : wt,
                        d = h.filter((function(t) { return c.indexOf(t) >= 0 }));
                    0 === d.length && (d = h);
                    var f = d.reduce((function(e, n) { return e[n] = Se(t, { placement: n, boundary: r, rootBoundary: s, padding: o })[Xt(n)], e }), {});
                    return Object.keys(f).sort((function(t, e) { return f[t] - f[e] }))
                }
                const Le = {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e = t.state,
                            n = t.options,
                            i = t.name;
                        if (!e.modifiersData[i]._skip) {
                            for (var r = n.mainAxis, s = void 0 === r || r, o = n.altAxis, a = void 0 === o || o, l = n.fallbackPlacements, c = n.padding, u = n.boundary, h = n.rootBoundary, d = n.altBoundary, f = n.flipVariations, p = void 0 === f || f, g = n.allowedAutoPlacements, m = e.options.placement, _ = Xt(m), v = l || (_ !== m && p ? function(t) { if (Xt(t) === bt) return []; var e = _e(t); return [ye(t), e, ye(e)] }(m) : [_e(m)]), y = [m].concat(v).reduce((function(t, n) { return t.concat(Xt(n) === bt ? De(e, { placement: n, boundary: u, rootBoundary: h, padding: c, flipVariations: p, allowedAutoPlacements: g }) : n) }), []), b = e.rects.reference, w = e.rects.popper, x = new Map, E = !0, T = y[0], C = 0; C < y.length; C++) {
                                var A = y[C],
                                    k = Xt(A),
                                    O = ue(A) === xt,
                                    S = [mt, _t].indexOf(k) >= 0,
                                    D = S ? "width" : "height",
                                    L = Se(e, { placement: A, boundary: u, rootBoundary: h, altBoundary: d, padding: c }),
                                    N = S ? O ? vt : yt : O ? _t : mt;
                                b[D] > w[D] && (N = _e(N));
                                var M = _e(N),
                                    P = [];
                                if (s && P.push(L[k] <= 0), a && P.push(L[N] <= 0, L[M] <= 0), P.every((function(t) { return t }))) { T = A, E = !1; break }
                                x.set(A, P)
                            }
                            if (E)
                                for (var I = function(t) { var e = y.find((function(e) { var n = x.get(e); if (n) return n.slice(0, t).every((function(t) { return t })) })); if (e) return T = e, "break" }, j = p ? 3 : 1; j > 0 && "break" !== I(j); j--);
                            e.placement !== T && (e.modifiersData[i]._skip = !0, e.placement = T, e.reset = !0)
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: { _skip: !1 }
                };

                function Ne(t, e, n) { return void 0 === n && (n = { x: 0, y: 0 }), { top: t.top - e.height - n.y, right: t.right - e.width + n.x, bottom: t.bottom - e.height + n.y, left: t.left - e.width - n.x } }

                function Me(t) { return [mt, vt, _t, yt].some((function(e) { return t[e] >= 0 })) }
                const Pe = {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function(t) {
                        var e = t.state,
                            n = t.name,
                            i = e.rects.reference,
                            r = e.rects.popper,
                            s = e.modifiersData.preventOverflow,
                            o = Se(e, { elementContext: "reference" }),
                            a = Se(e, { altBoundary: !0 }),
                            l = Ne(o, i),
                            c = Ne(a, r, s),
                            u = Me(l),
                            h = Me(c);
                        e.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: u, hasPopperEscaped: h }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": u, "data-popper-escaped": h })
                    }
                };
                const Ie = {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function(t) {
                        var e = t.state,
                            n = t.options,
                            i = t.name,
                            r = n.offset,
                            s = void 0 === r ? [0, 0] : r,
                            o = St.reduce((function(t, n) {
                                return t[n] = function(t, e, n) {
                                    var i = Xt(t),
                                        r = [yt, mt].indexOf(i) >= 0 ? -1 : 1,
                                        s = "function" == typeof n ? n(Object.assign({}, e, { placement: t })) : n,
                                        o = s[0],
                                        a = s[1];
                                    return o = o || 0, a = (a || 0) * r, [yt, vt].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
                                }(n, e.rects, s), t
                            }), {}),
                            a = o[e.placement],
                            l = a.x,
                            c = a.y;
                        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[i] = o
                    }
                };
                const je = {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(t) {
                        var e = t.state,
                            n = t.name;
                        e.modifiersData[n] = Oe({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement })
                    },
                    data: {}
                };
                const Re = {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e = t.state,
                            n = t.options,
                            i = t.name,
                            r = n.mainAxis,
                            s = void 0 === r || r,
                            o = n.altAxis,
                            a = void 0 !== o && o,
                            l = n.boundary,
                            c = n.rootBoundary,
                            u = n.altBoundary,
                            h = n.padding,
                            d = n.tether,
                            f = void 0 === d || d,
                            p = n.tetherOffset,
                            g = void 0 === p ? 0 : p,
                            m = Se(e, { boundary: l, rootBoundary: c, padding: h, altBoundary: u }),
                            _ = Xt(e.placement),
                            v = ue(e.placement),
                            y = !v,
                            b = ne(_),
                            w = "x" === b ? "y" : "x",
                            x = e.modifiersData.popperOffsets,
                            E = e.rects.reference,
                            T = e.rects.popper,
                            C = "function" == typeof g ? g(Object.assign({}, e.rects, { placement: e.placement })) : g,
                            A = { x: 0, y: 0 };
                        if (x) {
                            if (s || a) {
                                var k = "y" === b ? mt : yt,
                                    O = "y" === b ? _t : vt,
                                    S = "y" === b ? "height" : "width",
                                    D = x[b],
                                    L = x[b] + m[k],
                                    N = x[b] - m[O],
                                    M = f ? -T[S] / 2 : 0,
                                    P = v === xt ? E[S] : T[S],
                                    I = v === xt ? -T[S] : -E[S],
                                    j = e.elements.arrow,
                                    R = f && j ? Yt(j) : { width: 0, height: 0 },
                                    z = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 },
                                    H = z[k],
                                    $ = z[O],
                                    B = oe(0, E[S], R[S]),
                                    q = y ? E[S] / 2 - M - B - H - C : P - B - H - C,
                                    W = y ? -E[S] / 2 + M + B + $ + C : I + B + $ + C,
                                    F = e.elements.arrow && ee(e.elements.arrow),
                                    U = F ? "y" === b ? F.clientTop || 0 : F.clientLeft || 0 : 0,
                                    X = e.modifiersData.offset ? e.modifiersData.offset[e.placement][b] : 0,
                                    V = x[b] + q - X - U,
                                    Y = x[b] + W - X;
                                if (s) {
                                    var K = oe(f ? re(L, V) : L, D, f ? ie(N, Y) : N);
                                    x[b] = K, A[b] = K - D
                                }
                                if (a) {
                                    var Q = "x" === b ? mt : yt,
                                        G = "x" === b ? _t : vt,
                                        Z = x[w],
                                        J = Z + m[Q],
                                        tt = Z - m[G],
                                        et = oe(f ? re(J, V) : J, Z, f ? ie(tt, Y) : tt);
                                    x[w] = et, A[w] = et - Z
                                }
                            }
                            e.modifiersData[i] = A
                        }
                    },
                    requiresIfExists: ["offset"]
                };

                function ze(t, e, n) {
                    void 0 === n && (n = !1);
                    var i = Wt(e);
                    Wt(e) && function(t) {
                        var e = t.getBoundingClientRect(),
                            n = e.width / t.offsetWidth || 1,
                            i = e.height / t.offsetHeight || 1
                    }(e);
                    var r, s, o = Zt(e),
                        a = Vt(t),
                        l = { scrollLeft: 0, scrollTop: 0 },
                        c = { x: 0, y: 0 };
                    return (i || !i && !n) && (("body" !== $t(e) || xe(o)) && (l = (r = e) !== Bt(r) && Wt(r) ? { scrollLeft: (s = r).scrollLeft, scrollTop: s.scrollTop } : be(r)), Wt(e) ? ((c = Vt(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = we(o))), { x: a.left + l.scrollLeft - c.x, y: a.top + l.scrollTop - c.y, width: a.width, height: a.height }
                }

                function He(t) {
                    var e = new Map,
                        n = new Set,
                        i = [];

                    function r(t) {
                        n.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                            if (!n.has(t)) {
                                var i = e.get(t);
                                i && r(i)
                            }
                        })), i.push(t)
                    }
                    return t.forEach((function(t) { e.set(t.name, t) })), t.forEach((function(t) { n.has(t.name) || r(t) })), i
                }
                var $e = { placement: "bottom", modifiers: [], strategy: "absolute" };

                function Be() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return !e.some((function(t) { return !(t && "function" == typeof t.getBoundingClientRect) })) }

                function qe(t) {
                    void 0 === t && (t = {});
                    var e = t,
                        n = e.defaultModifiers,
                        i = void 0 === n ? [] : n,
                        r = e.defaultOptions,
                        s = void 0 === r ? $e : r;
                    return function(t, e, n) {
                        void 0 === n && (n = s);
                        var r, o, a = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, $e, s), modifiersData: {}, elements: { reference: t, popper: e }, attributes: {}, styles: {} },
                            l = [],
                            c = !1,
                            u = {
                                state: a,
                                setOptions: function(n) {
                                    var r = "function" == typeof n ? n(a.options) : n;
                                    h(), a.options = Object.assign({}, s, a.options, r), a.scrollParents = { reference: qt(t) ? Te(t) : t.contextElement ? Te(t.contextElement) : [], popper: Te(e) };
                                    var o, c, d = function(t) { var e = He(t); return Ht.reduce((function(t, n) { return t.concat(e.filter((function(t) { return t.phase === n }))) }), []) }((o = [].concat(i, a.options.modifiers), c = o.reduce((function(t, e) { var n = t[e.name]; return t[e.name] = n ? Object.assign({}, n, e, { options: Object.assign({}, n.options, e.options), data: Object.assign({}, n.data, e.data) }) : e, t }), {}), Object.keys(c).map((function(t) { return c[t] }))));
                                    return a.orderedModifiers = d.filter((function(t) { return t.enabled })), a.orderedModifiers.forEach((function(t) {
                                        var e = t.name,
                                            n = t.options,
                                            i = void 0 === n ? {} : n,
                                            r = t.effect;
                                        if ("function" == typeof r) {
                                            var s = r({ state: a, name: e, instance: u, options: i }),
                                                o = function() {};
                                            l.push(s || o)
                                        }
                                    })), u.update()
                                },
                                forceUpdate: function() {
                                    if (!c) {
                                        var t = a.elements,
                                            e = t.reference,
                                            n = t.popper;
                                        if (Be(e, n)) {
                                            a.rects = { reference: ze(e, ee(n), "fixed" === a.options.strategy), popper: Yt(n) }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) { return a.modifiersData[t.name] = Object.assign({}, t.data) }));
                                            for (var i = 0; i < a.orderedModifiers.length; i++)
                                                if (!0 !== a.reset) {
                                                    var r = a.orderedModifiers[i],
                                                        s = r.fn,
                                                        o = r.options,
                                                        l = void 0 === o ? {} : o,
                                                        h = r.name;
                                                    "function" == typeof s && (a = s({ state: a, options: l, name: h, instance: u }) || a)
                                                } else a.reset = !1, i = -1
                                        }
                                    }
                                },
                                update: (r = function() { return new Promise((function(t) { u.forceUpdate(), t(a) })) }, function() { return o || (o = new Promise((function(t) { Promise.resolve().then((function() { o = void 0, t(r()) })) }))), o }),
                                destroy: function() { h(), c = !0 }
                            };
                        if (!Be(t, e)) return u;

                        function h() { l.forEach((function(t) { return t() })), l = [] }
                        return u.setOptions(n).then((function(t) {!c && n.onFirstUpdate && n.onFirstUpdate(t) })), u
                    }
                }
                var We = qe(),
                    Fe = qe({ defaultModifiers: [ge, je, fe, Ut] }),
                    Ue = qe({ defaultModifiers: [ge, je, fe, Ut, Ie, Le, Re, ce, Pe] });
                const Xe = Object.freeze({ __proto__: null, popperGenerator: qe, detectOverflow: Se, createPopperBase: We, createPopper: Ue, createPopperLite: Fe, top: mt, bottom: _t, right: vt, left: yt, auto: bt, basePlacements: wt, start: xt, end: Et, clippingParents: Tt, viewport: Ct, popper: At, reference: kt, variationPlacements: Ot, placements: St, beforeRead: Dt, read: Lt, afterRead: Nt, beforeMain: Mt, main: Pt, afterMain: It, beforeWrite: jt, write: Rt, afterWrite: zt, modifierPhases: Ht, applyStyles: Ut, arrow: ce, computeStyles: fe, eventListeners: ge, flip: Le, hide: Pe, offset: Ie, popperOffsets: je, preventOverflow: Re }),
                    Ve = "dropdown",
                    Ye = "Escape",
                    Ke = "Space",
                    Qe = "ArrowUp",
                    Ge = "ArrowDown",
                    Ze = new RegExp("ArrowUp|ArrowDown|Escape"),
                    Je = "click.bs.dropdown.data-api",
                    tn = "keydown.bs.dropdown.data-api",
                    en = "show",
                    nn = '[data-bs-toggle="dropdown"]',
                    rn = ".dropdown-menu",
                    sn = g() ? "top-end" : "top-start",
                    on = g() ? "top-start" : "top-end",
                    an = g() ? "bottom-end" : "bottom-start",
                    ln = g() ? "bottom-start" : "bottom-end",
                    cn = g() ? "left-start" : "right-start",
                    un = g() ? "right-start" : "left-start",
                    hn = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: !0 },
                    dn = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" };
                class fn extends z {
                    constructor(t, e) { super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar() }
                    static get Default() { return hn }
                    static get DefaultType() { return dn }
                    static get NAME() { return Ve }
                    toggle() { return this._isShown() ? this.hide() : this.show() }
                    show() {
                        if (c(this._element) || this._isShown(this._menu)) return;
                        const t = { relatedTarget: this._element };
                        if (I.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return;
                        const e = fn.getParentFromElement(this._element);
                        this._inNavbar ? U.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t => I.on(t, "mouseover", h))), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(en), this._element.classList.add(en), I.trigger(this._element, "shown.bs.dropdown", t)
                    }
                    hide() {
                        if (c(this._element) || !this._isShown(this._menu)) return;
                        const t = { relatedTarget: this._element };
                        this._completeHide(t)
                    }
                    dispose() { this._popper && this._popper.destroy(), super.dispose() }
                    update() { this._inNavbar = this._detectNavbar(), this._popper && this._popper.update() }
                    _completeHide(t) { I.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => I.off(t, "mouseover", h))), this._popper && this._popper.destroy(), this._menu.classList.remove(en), this._element.classList.remove(en), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), I.trigger(this._element, "hidden.bs.dropdown", t)) }
                    _getConfig(t) { if (t = {...this.constructor.Default, ...U.getDataAttributes(this._element), ...t }, a(Ve, t, this.constructor.DefaultType), "object" == typeof t.reference && !s(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Ve.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`); return t }
                    _createPopper(t) {
                        if (void 0 === Xe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        let e = this._element;
                        "parent" === this._config.reference ? e = t : s(this._config.reference) ? e = o(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
                        const n = this._getPopperConfig(),
                            i = n.modifiers.find((t => "applyStyles" === t.name && !1 === t.enabled));
                        this._popper = Ue(e, this._menu, n), i && U.setDataAttribute(this._menu, "popper", "static")
                    }
                    _isShown(t = this._element) { return t.classList.contains(en) }
                    _getMenuElement() { return X.next(this._element, rn)[0] }
                    _getPlacement() { const t = this._element.parentNode; if (t.classList.contains("dropend")) return cn; if (t.classList.contains("dropstart")) return un; const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim(); return t.classList.contains("dropup") ? e ? on : sn : e ? ln : an }
                    _detectNavbar() { return null !== this._element.closest(".navbar") }
                    _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t }
                    _getPopperConfig() { const t = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] }; return "static" === this._config.display && (t.modifiers = [{ name: "applyStyles", enabled: !1 }]), {...t, ... "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig } }
                    _selectMenuItem({ key: t, target: e }) {
                        const n = X.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(l);
                        n.length && y(n, e, t === Ge, !n.includes(e)).focus()
                    }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = fn.getOrCreateInstance(this, t);
                            if ("string" == typeof t) {
                                if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                e[t]()
                            }
                        }))
                    }
                    static clearMenus(t) {
                        if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
                        const e = X.find(nn);
                        for (let n = 0, i = e.length; n < i; n++) {
                            const i = fn.getInstance(e[n]);
                            if (!i || !1 === i._config.autoClose) continue;
                            if (!i._isShown()) continue;
                            const r = { relatedTarget: i._element };
                            if (t) {
                                const e = t.composedPath(),
                                    n = e.includes(i._menu);
                                if (e.includes(i._element) || "inside" === i._config.autoClose && !n || "outside" === i._config.autoClose && n) continue;
                                if (i._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                                "click" === t.type && (r.clickEvent = t)
                            }
                            i._completeHide(r)
                        }
                    }
                    static getParentFromElement(t) { return i(t) || t.parentNode }
                    static dataApiKeydownHandler(t) {
                        if (/input|textarea/i.test(t.target.tagName) ? t.key === Ke || t.key !== Ye && (t.key !== Ge && t.key !== Qe || t.target.closest(rn)) : !Ze.test(t.key)) return;
                        const e = this.classList.contains(en);
                        if (!e && t.key === Ye) return;
                        if (t.preventDefault(), t.stopPropagation(), c(this)) return;
                        const n = this.matches(nn) ? this : X.prev(this, nn)[0],
                            i = fn.getOrCreateInstance(n);
                        if (t.key !== Ye) return t.key === Qe || t.key === Ge ? (e || i.show(), void i._selectMenuItem(t)) : void(e && t.key !== Ke || fn.clearMenus());
                        i.hide()
                    }
                }
                I.on(document, tn, nn, fn.dataApiKeydownHandler), I.on(document, tn, rn, fn.dataApiKeydownHandler), I.on(document, Je, fn.clearMenus), I.on(document, "keyup.bs.dropdown.data-api", fn.clearMenus), I.on(document, Je, nn, (function(t) { t.preventDefault(), fn.getOrCreateInstance(this).toggle() })), m(fn);
                const pn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    gn = ".sticky-top";
                class mn {
                    constructor() { this._element = document.body }
                    getWidth() { const t = document.documentElement.clientWidth; return Math.abs(window.innerWidth - t) }
                    hide() {
                        const t = this.getWidth();
                        this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e => e + t)), this._setElementAttributes(pn, "paddingRight", (e => e + t)), this._setElementAttributes(gn, "marginRight", (e => e - t))
                    }
                    _disableOverFlow() { this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden" }
                    _setElementAttributes(t, e, n) {
                        const i = this.getWidth();
                        this._applyManipulationCallback(t, (t => {
                            if (t !== this._element && window.innerWidth > t.clientWidth + i) return;
                            this._saveInitialAttribute(t, e);
                            const r = window.getComputedStyle(t)[e];
                            t.style[e] = `${n(Number.parseFloat(r))}px`
                        }))
                    }
                    reset() { this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(pn, "paddingRight"), this._resetElementAttributes(gn, "marginRight") }
                    _saveInitialAttribute(t, e) {
                        const n = t.style[e];
                        n && U.setDataAttribute(t, e, n)
                    }
                    _resetElementAttributes(t, e) {
                        this._applyManipulationCallback(t, (t => {
                            const n = U.getDataAttribute(t, e);
                            void 0 === n ? t.style.removeProperty(e) : (U.removeDataAttribute(t, e), t.style[e] = n)
                        }))
                    }
                    _applyManipulationCallback(t, e) { s(t) ? e(t) : X.find(t, this._element).forEach(e) }
                    isOverflowing() { return this.getWidth() > 0 }
                }
                const _n = { className: "modal-backdrop", isVisible: !0, isAnimated: !1, rootElement: "body", clickCallback: null },
                    vn = { className: "string", isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" },
                    yn = "backdrop",
                    bn = "show",
                    wn = "mousedown.bs.backdrop";
                class xn {
                    constructor(t) { this._config = this._getConfig(t), this._isAppended = !1, this._element = null }
                    show(t) { this._config.isVisible ? (this._append(), this._config.isAnimated && d(this._getElement()), this._getElement().classList.add(bn), this._emulateAnimation((() => { _(t) }))) : _(t) }
                    hide(t) { this._config.isVisible ? (this._getElement().classList.remove(bn), this._emulateAnimation((() => { this.dispose(), _(t) }))) : _(t) }
                    _getElement() {
                        if (!this._element) {
                            const t = document.createElement("div");
                            t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
                        }
                        return this._element
                    }
                    _getConfig(t) { return (t = {..._n, ... "object" == typeof t ? t : {} }).rootElement = o(t.rootElement), a(yn, t, vn), t }
                    _append() { this._isAppended || (this._config.rootElement.append(this._getElement()), I.on(this._getElement(), wn, (() => { _(this._config.clickCallback) })), this._isAppended = !0) }
                    dispose() { this._isAppended && (I.off(this._element, wn), this._element.remove(), this._isAppended = !1) }
                    _emulateAnimation(t) { v(t, this._getElement(), this._config.isAnimated) }
                }
                const En = { trapElement: null, autofocus: !0 },
                    Tn = { trapElement: "element", autofocus: "boolean" },
                    Cn = ".bs.focustrap",
                    An = "backward";
                class kn {
                    constructor(t) { this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null }
                    activate() {
                        const { trapElement: t, autofocus: e } = this._config;
                        this._isActive || (e && t.focus(), I.off(document, Cn), I.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), I.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0)
                    }
                    deactivate() { this._isActive && (this._isActive = !1, I.off(document, Cn)) }
                    _handleFocusin(t) {
                        const { target: e } = t, { trapElement: n } = this._config;
                        if (e === document || e === n || n.contains(e)) return;
                        const i = X.focusableChildren(n);
                        0 === i.length ? n.focus() : this._lastTabNavDirection === An ? i[i.length - 1].focus() : i[0].focus()
                    }
                    _handleKeydown(t) { "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? An : "forward") }
                    _getConfig(t) { return t = {...En, ... "object" == typeof t ? t : {} }, a("focustrap", t, Tn), t }
                }
                const On = "modal",
                    Sn = ".bs.modal",
                    Dn = "Escape",
                    Ln = { backdrop: !0, keyboard: !0, focus: !0 },
                    Nn = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" },
                    Mn = "hidden.bs.modal",
                    Pn = "show.bs.modal",
                    In = "resize.bs.modal",
                    jn = "click.dismiss.bs.modal",
                    Rn = "keydown.dismiss.bs.modal",
                    zn = "mousedown.dismiss.bs.modal",
                    Hn = "modal-open",
                    $n = "show",
                    Bn = "modal-static";
                class qn extends z {
                    constructor(t, e) { super(t), this._config = this._getConfig(e), this._dialog = X.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new mn }
                    static get Default() { return Ln }
                    static get NAME() { return On }
                    toggle(t) { return this._isShown ? this.hide() : this.show(t) }
                    show(t) { this._isShown || this._isTransitioning || I.trigger(this._element, Pn, { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Hn), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), I.on(this._dialog, zn, (() => { I.one(this._element, "mouseup.dismiss.bs.modal", (t => { t.target === this._element && (this._ignoreBackdropClick = !0) })) })), this._showBackdrop((() => this._showElement(t)))) }
                    hide() {
                        if (!this._isShown || this._isTransitioning) return;
                        if (I.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
                        this._isShown = !1;
                        const t = this._isAnimated();
                        t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove($n), I.off(this._element, jn), I.off(this._dialog, zn), this._queueCallback((() => this._hideModal()), this._element, t)
                    }
                    dispose() {
                        [window, this._dialog].forEach((t => I.off(t, Sn))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
                    }
                    handleUpdate() { this._adjustDialog() }
                    _initializeBackDrop() { return new xn({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() }) }
                    _initializeFocusTrap() { return new kn({ trapElement: this._element }) }
                    _getConfig(t) { return t = {...Ln, ...U.getDataAttributes(this._element), ... "object" == typeof t ? t : {} }, a(On, t, Nn), t }
                    _showElement(t) {
                        const e = this._isAnimated(),
                            n = X.findOne(".modal-body", this._dialog);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), e && d(this._element), this._element.classList.add($n);
                        this._queueCallback((() => { this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, I.trigger(this._element, "shown.bs.modal", { relatedTarget: t }) }), this._dialog, e)
                    }
                    _setEscapeEvent() { this._isShown ? I.on(this._element, Rn, (t => { this._config.keyboard && t.key === Dn ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== Dn || this._triggerBackdropTransition() })) : I.off(this._element, Rn) }
                    _setResizeEvent() { this._isShown ? I.on(window, In, (() => this._adjustDialog())) : I.off(window, In) }
                    _hideModal() { this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => { document.body.classList.remove(Hn), this._resetAdjustments(), this._scrollBar.reset(), I.trigger(this._element, Mn) })) }
                    _showBackdrop(t) { I.on(this._element, jn, (t => { this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition()) })), this._backdrop.show(t) }
                    _isAnimated() { return this._element.classList.contains("fade") }
                    _triggerBackdropTransition() { if (I.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return; const { classList: t, scrollHeight: e, style: n } = this._element, i = e > document.documentElement.clientHeight;!i && "hidden" === n.overflowY || t.contains(Bn) || (i || (n.overflowY = "hidden"), t.add(Bn), this._queueCallback((() => { t.remove(Bn), i || this._queueCallback((() => { n.overflowY = "" }), this._dialog) }), this._dialog), this._element.focus()) }
                    _adjustDialog() {
                        const t = this._element.scrollHeight > document.documentElement.clientHeight,
                            e = this._scrollBar.getWidth(),
                            n = e > 0;
                        (!n && t && !g() || n && !t && g()) && (this._element.style.paddingLeft = `${e}px`), (n && !t && !g() || !n && t && g()) && (this._element.style.paddingRight = `${e}px`)
                    }
                    _resetAdjustments() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }
                    static jQueryInterface(t, e) {
                        return this.each((function() {
                            const n = qn.getOrCreateInstance(this, t);
                            if ("string" == typeof t) {
                                if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
                                n[t](e)
                            }
                        }))
                    }
                }
                I.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
                    const e = i(this);
                    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), I.one(e, Pn, (t => { t.defaultPrevented || I.one(e, Mn, (() => { l(this) && this.focus() })) }));
                    const n = X.findOne(".modal.show");
                    n && qn.getInstance(n).hide(), qn.getOrCreateInstance(e).toggle(this)
                })), H(qn), m(qn);
                const Wn = "offcanvas",
                    Fn = { backdrop: !0, keyboard: !0, scroll: !1 },
                    Un = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
                    Xn = "show",
                    Vn = ".offcanvas.show",
                    Yn = "hidden.bs.offcanvas";
                class Kn extends z {
                    constructor(t, e) { super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners() }
                    static get NAME() { return Wn }
                    static get Default() { return Fn }
                    toggle(t) { return this._isShown ? this.hide() : this.show(t) }
                    show(t) {
                        if (this._isShown) return;
                        if (I.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t }).defaultPrevented) return;
                        this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new mn).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Xn);
                        this._queueCallback((() => { this._config.scroll || this._focustrap.activate(), I.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t }) }), this._element, !0)
                    }
                    hide() {
                        if (!this._isShown) return;
                        if (I.trigger(this._element, "hide.bs.offcanvas").defaultPrevented) return;
                        this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove(Xn), this._backdrop.hide();
                        this._queueCallback((() => { this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new mn).reset(), I.trigger(this._element, Yn) }), this._element, !0)
                    }
                    dispose() { this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose() }
                    _getConfig(t) { return t = {...Fn, ...U.getDataAttributes(this._element), ... "object" == typeof t ? t : {} }, a(Wn, t, Un), t }
                    _initializeBackDrop() { return new xn({ className: "offcanvas-backdrop", isVisible: this._config.backdrop, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: () => this.hide() }) }
                    _initializeFocusTrap() { return new kn({ trapElement: this._element }) }
                    _addEventListeners() { I.on(this._element, "keydown.dismiss.bs.offcanvas", (t => { this._config.keyboard && "Escape" === t.key && this.hide() })) }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = Kn.getOrCreateInstance(this, t);
                            if ("string" == typeof t) {
                                if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                                e[t](this)
                            }
                        }))
                    }
                }
                I.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
                    const e = i(this);
                    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this)) return;
                    I.one(e, Yn, (() => { l(this) && this.focus() }));
                    const n = X.findOne(Vn);
                    n && n !== e && Kn.getInstance(n).hide(), Kn.getOrCreateInstance(e).toggle(this)
                })), I.on(window, "load.bs.offcanvas.data-api", (() => X.find(Vn).forEach((t => Kn.getOrCreateInstance(t).show())))), H(Kn), m(Kn);
                const Qn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
                    Gn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
                    Zn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
                    Jn = (t, e) => {
                        const n = t.nodeName.toLowerCase();
                        if (e.includes(n)) return !Qn.has(n) || Boolean(Gn.test(t.nodeValue) || Zn.test(t.nodeValue));
                        const i = e.filter((t => t instanceof RegExp));
                        for (let t = 0, e = i.length; t < e; t++)
                            if (i[t].test(n)) return !0;
                        return !1
                    };

                function ti(t, e, n) {
                    if (!t.length) return t;
                    if (n && "function" == typeof n) return n(t);
                    const i = (new window.DOMParser).parseFromString(t, "text/html"),
                        r = [].concat(...i.body.querySelectorAll("*"));
                    for (let t = 0, n = r.length; t < n; t++) {
                        const n = r[t],
                            i = n.nodeName.toLowerCase();
                        if (!Object.keys(e).includes(i)) { n.remove(); continue }
                        const s = [].concat(...n.attributes),
                            o = [].concat(e["*"] || [], e[i] || []);
                        s.forEach((t => { Jn(t, o) || n.removeAttribute(t.nodeName) }))
                    }
                    return i.body.innerHTML
                }
                const ei = "tooltip",
                    ni = new Set(["sanitize", "allowList", "sanitizeFn"]),
                    ii = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(array|string|function)", container: "(string|element|boolean)", fallbackPlacements: "array", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object", popperConfig: "(null|object|function)" },
                    ri = { AUTO: "auto", TOP: "top", RIGHT: g() ? "left" : "right", BOTTOM: "bottom", LEFT: g() ? "right" : "left" },
                    si = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: [0, 0], container: !1, fallbackPlacements: ["top", "right", "bottom", "left"], boundary: "clippingParents", customClass: "", sanitize: !0, sanitizeFn: null, allowList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null },
                    oi = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" },
                    ai = "fade",
                    li = "show",
                    ci = "show",
                    ui = "out",
                    hi = ".tooltip-inner",
                    di = ".modal",
                    fi = "hide.bs.modal",
                    pi = "hover",
                    gi = "focus";
                class mi extends z {
                    constructor(t, e) {
                        if (void 0 === Xe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                        super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
                    }
                    static get Default() { return si }
                    static get NAME() { return ei }
                    static get Event() { return oi }
                    static get DefaultType() { return ii }
                    enable() { this._isEnabled = !0 }
                    disable() { this._isEnabled = !1 }
                    toggleEnabled() { this._isEnabled = !this._isEnabled }
                    toggle(t) {
                        if (this._isEnabled)
                            if (t) {
                                const e = this._initializeOnDelegatedTarget(t);
                                e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                            } else {
                                if (this.getTipElement().classList.contains(li)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }
                    dispose() { clearTimeout(this._timeout), I.off(this._element.closest(di), fi, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose() }
                    show() {
                        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                        if (!this.isWithContent() || !this._isEnabled) return;
                        const t = I.trigger(this._element, this.constructor.Event.SHOW),
                            e = u(this._element),
                            n = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
                        if (t.defaultPrevented || !n) return;
                        "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(hi).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
                        const i = this.getTipElement(),
                            r = (t => { do { t += Math.floor(1e6 * Math.random()) } while (document.getElementById(t)); return t })(this.constructor.NAME);
                        i.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this._config.animation && i.classList.add(ai);
                        const s = "function" == typeof this._config.placement ? this._config.placement.call(this, i, this._element) : this._config.placement,
                            o = this._getAttachment(s);
                        this._addAttachmentClass(o);
                        const { container: a } = this._config;
                        R.set(i, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(i), I.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Ue(this._element, i, this._getPopperConfig(o)), i.classList.add(li);
                        const l = this._resolvePossibleFunction(this._config.customClass);
                        l && i.classList.add(...l.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => { I.on(t, "mouseover", h) }));
                        const c = this.tip.classList.contains(ai);
                        this._queueCallback((() => {
                            const t = this._hoverState;
                            this._hoverState = null, I.trigger(this._element, this.constructor.Event.SHOWN), t === ui && this._leave(null, this)
                        }), this.tip, c)
                    }
                    hide() {
                        if (!this._popper) return;
                        const t = this.getTipElement();
                        if (I.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
                        t.classList.remove(li), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => I.off(t, "mouseover", h))), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
                        const e = this.tip.classList.contains(ai);
                        this._queueCallback((() => { this._isWithActiveTrigger() || (this._hoverState !== ci && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), I.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper()) }), this.tip, e), this._hoverState = ""
                    }
                    update() { null !== this._popper && this._popper.update() }
                    isWithContent() { return Boolean(this.getTitle()) }
                    getTipElement() {
                        if (this.tip) return this.tip;
                        const t = document.createElement("div");
                        t.innerHTML = this._config.template;
                        const e = t.children[0];
                        return this.setContent(e), e.classList.remove(ai, li), this.tip = e, this.tip
                    }
                    setContent(t) { this._sanitizeAndSetContent(t, this.getTitle(), hi) }
                    _sanitizeAndSetContent(t, e, n) {
                        const i = X.findOne(n, t);
                        e || !i ? this.setElementContent(i, e) : i.remove()
                    }
                    setElementContent(t, e) { if (null !== t) return s(e) ? (e = o(e), void(this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void(this._config.html ? (this._config.sanitize && (e = ti(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e) }
                    getTitle() { const t = this._element.getAttribute("data-bs-original-title") || this._config.title; return this._resolvePossibleFunction(t) }
                    updateAttachment(t) { return "right" === t ? "end" : "left" === t ? "start" : t }
                    _initializeOnDelegatedTarget(t, e) { return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig()) }
                    _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t }
                    _resolvePossibleFunction(t) { return "function" == typeof t ? t.call(this._element) : t }
                    _getPopperConfig(t) { const e = { placement: t, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "onChange", enabled: !0, phase: "afterWrite", fn: t => this._handlePopperPlacementChange(t) }], onFirstUpdate: t => { t.options.placement !== t.placement && this._handlePopperPlacementChange(t) } }; return {...e, ... "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig } }
                    _addAttachmentClass(t) { this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`) }
                    _getAttachment(t) { return ri[t.toUpperCase()] }
                    _setListeners() {
                        this._config.trigger.split(" ").forEach((t => {
                            if ("click" === t) I.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t => this.toggle(t)));
                            else if ("manual" !== t) {
                                const e = t === pi ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                                    n = t === pi ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                                I.on(this._element, e, this._config.selector, (t => this._enter(t))), I.on(this._element, n, this._config.selector, (t => this._leave(t)))
                            }
                        })), this._hideModalHandler = () => { this._element && this.hide() }, I.on(this._element.closest(di), fi, this._hideModalHandler), this._config.selector ? this._config = {...this._config, trigger: "manual", selector: "" } : this._fixTitle()
                    }
                    _fixTitle() {
                        const t = this._element.getAttribute("title"),
                            e = typeof this._element.getAttribute("data-bs-original-title");
                        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
                    }
                    _enter(t, e) { e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? gi : pi] = !0), e.getTipElement().classList.contains(li) || e._hoverState === ci ? e._hoverState = ci : (clearTimeout(e._timeout), e._hoverState = ci, e._config.delay && e._config.delay.show ? e._timeout = setTimeout((() => { e._hoverState === ci && e.show() }), e._config.delay.show) : e.show()) }
                    _leave(t, e) { e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? gi : pi] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = ui, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout((() => { e._hoverState === ui && e.hide() }), e._config.delay.hide) : e.hide()) }
                    _isWithActiveTrigger() {
                        for (const t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }
                    _getConfig(t) { const e = U.getDataAttributes(this._element); return Object.keys(e).forEach((t => { ni.has(t) && delete e[t] })), (t = {...this.constructor.Default, ...e, ... "object" == typeof t && t ? t : {} }).container = !1 === t.container ? document.body : o(t.container), "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), a(ei, t, this.constructor.DefaultType), t.sanitize && (t.template = ti(t.template, t.allowList, t.sanitizeFn)), t }
                    _getDelegateConfig() { const t = {}; for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]); return t }
                    _cleanTipClass() {
                        const t = this.getTipElement(),
                            e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                            n = t.getAttribute("class").match(e);
                        null !== n && n.length > 0 && n.map((t => t.trim())).forEach((e => t.classList.remove(e)))
                    }
                    _getBasicClassPrefix() { return "bs-tooltip" }
                    _handlePopperPlacementChange(t) {
                        const { state: e } = t;
                        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
                    }
                    _disposePopper() { this._popper && (this._popper.destroy(), this._popper = null) }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = mi.getOrCreateInstance(this, t);
                            if ("string" == typeof t) {
                                if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                e[t]()
                            }
                        }))
                    }
                }
                m(mi);
                const _i = {...mi.Default, placement: "right", offset: [0, 8], trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' },
                    vi = {...mi.DefaultType, content: "(string|element|function)" },
                    yi = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" };
                class bi extends mi {
                    static get Default() { return _i }
                    static get NAME() { return "popover" }
                    static get Event() { return yi }
                    static get DefaultType() { return vi }
                    isWithContent() { return this.getTitle() || this._getContent() }
                    setContent(t) { this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body") }
                    _getContent() { return this._resolvePossibleFunction(this._config.content) }
                    _getBasicClassPrefix() { return "bs-popover" }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = bi.getOrCreateInstance(this, t);
                            if ("string" == typeof t) {
                                if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                e[t]()
                            }
                        }))
                    }
                }
                m(bi);
                const wi = "scrollspy",
                    xi = ".bs.scrollspy",
                    Ei = { offset: 10, method: "auto", target: "" },
                    Ti = { offset: "number", method: "string", target: "(string|element)" },
                    Ci = "dropdown-item",
                    Ai = "active",
                    ki = ".nav-link",
                    Oi = ".nav-link, .list-group-item, .dropdown-item",
                    Si = "position";
                class Di extends z {
                    constructor(t, e) { super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, I.on(this._scrollElement, "scroll.bs.scrollspy", (() => this._process())), this.refresh(), this._process() }
                    static get Default() { return Ei }
                    static get NAME() { return wi }
                    refresh() {
                        const t = this._scrollElement === this._scrollElement.window ? "offset" : Si,
                            e = "auto" === this._config.method ? t : this._config.method,
                            i = e === Si ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), X.find(Oi, this._config.target).map((t => {
                            const r = n(t),
                                s = r ? X.findOne(r) : null;
                            if (s) { const t = s.getBoundingClientRect(); if (t.width || t.height) return [U[e](s).top + i, r] }
                            return null
                        })).filter((t => t)).sort(((t, e) => t[0] - e[0])).forEach((t => { this._offsets.push(t[0]), this._targets.push(t[1]) }))
                    }
                    dispose() { I.off(this._scrollElement, xi), super.dispose() }
                    _getConfig(t) { return (t = {...Ei, ...U.getDataAttributes(this._element), ... "object" == typeof t && t ? t : {} }).target = o(t.target) || document.documentElement, a(wi, t, Ti), t }
                    _getScrollTop() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }
                    _getScrollHeight() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }
                    _getOffsetHeight() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }
                    _process() {
                        const t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            n = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= n) {
                            const t = this._targets[this._targets.length - 1];
                            this._activeTarget !== t && this._activate(t)
                        } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e]) }
                    }
                    _activate(t) {
                        this._activeTarget = t, this._clear();
                        const e = Oi.split(",").map((e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`)),
                            n = X.findOne(e.join(","), this._config.target);
                        n.classList.add(Ai), n.classList.contains(Ci) ? X.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add(Ai) : X.parents(n, ".nav, .list-group").forEach((t => { X.prev(t, ".nav-link, .list-group-item").forEach((t => t.classList.add(Ai))), X.prev(t, ".nav-item").forEach((t => { X.children(t, ki).forEach((t => t.classList.add(Ai))) })) })), I.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: t })
                    }
                    _clear() { X.find(Oi, this._config.target).filter((t => t.classList.contains(Ai))).forEach((t => t.classList.remove(Ai))) }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = Di.getOrCreateInstance(this, t);
                            if ("string" == typeof t) {
                                if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                e[t]()
                            }
                        }))
                    }
                }
                I.on(window, "load.bs.scrollspy.data-api", (() => { X.find('[data-bs-spy="scroll"]').forEach((t => new Di(t))) })), m(Di);
                const Li = "active",
                    Ni = "fade",
                    Mi = "show",
                    Pi = ".active",
                    Ii = ":scope > li > .active";
                class ji extends z {
                    static get NAME() { return "tab" }
                    show() {
                        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Li)) return;
                        let t;
                        const e = i(this._element),
                            n = this._element.closest(".nav, .list-group");
                        if (n) {
                            const e = "UL" === n.nodeName || "OL" === n.nodeName ? Ii : Pi;
                            t = X.find(e, n), t = t[t.length - 1]
                        }
                        const r = t ? I.trigger(t, "hide.bs.tab", { relatedTarget: this._element }) : null;
                        if (I.trigger(this._element, "show.bs.tab", { relatedTarget: t }).defaultPrevented || null !== r && r.defaultPrevented) return;
                        this._activate(this._element, n);
                        const s = () => { I.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }), I.trigger(this._element, "shown.bs.tab", { relatedTarget: t }) };
                        e ? this._activate(e, e.parentNode, s) : s()
                    }
                    _activate(t, e, n) {
                        const i = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? X.children(e, Pi) : X.find(Ii, e))[0],
                            r = n && i && i.classList.contains(Ni),
                            s = () => this._transitionComplete(t, i, n);
                        i && r ? (i.classList.remove(Mi), this._queueCallback(s, t, !0)) : s()
                    }
                    _transitionComplete(t, e, n) {
                        if (e) {
                            e.classList.remove(Li);
                            const t = X.findOne(":scope > .dropdown-menu .active", e.parentNode);
                            t && t.classList.remove(Li), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                        }
                        t.classList.add(Li), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), d(t), t.classList.contains(Ni) && t.classList.add(Mi);
                        let i = t.parentNode;
                        if (i && "LI" === i.nodeName && (i = i.parentNode), i && i.classList.contains("dropdown-menu")) {
                            const e = t.closest(".dropdown");
                            e && X.find(".dropdown-toggle", e).forEach((t => t.classList.add(Li))), t.setAttribute("aria-expanded", !0)
                        }
                        n && n()
                    }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = ji.getOrCreateInstance(this);
                            if ("string" == typeof t) {
                                if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                e[t]()
                            }
                        }))
                    }
                }
                I.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
                    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this) || ji.getOrCreateInstance(this).show()
                })), m(ji);
                const Ri = "toast",
                    zi = "hide",
                    Hi = "show",
                    $i = "showing",
                    Bi = { animation: "boolean", autohide: "boolean", delay: "number" },
                    qi = { animation: !0, autohide: !0, delay: 5e3 };
                class Wi extends z {
                    constructor(t, e) { super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners() }
                    static get DefaultType() { return Bi }
                    static get Default() { return qi }
                    static get NAME() { return Ri }
                    show() {
                        if (I.trigger(this._element, "show.bs.toast").defaultPrevented) return;
                        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                        this._element.classList.remove(zi), d(this._element), this._element.classList.add(Hi), this._element.classList.add($i), this._queueCallback((() => { this._element.classList.remove($i), I.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide() }), this._element, this._config.animation)
                    }
                    hide() {
                        if (!this._element.classList.contains(Hi)) return;
                        if (I.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
                        this._element.classList.add($i), this._queueCallback((() => { this._element.classList.add(zi), this._element.classList.remove($i), this._element.classList.remove(Hi), I.trigger(this._element, "hidden.bs.toast") }), this._element, this._config.animation)
                    }
                    dispose() { this._clearTimeout(), this._element.classList.contains(Hi) && this._element.classList.remove(Hi), super.dispose() }
                    _getConfig(t) { return t = {...qi, ...U.getDataAttributes(this._element), ... "object" == typeof t && t ? t : {} }, a(Ri, t, this.constructor.DefaultType), t }
                    _maybeScheduleHide() { this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => { this.hide() }), this._config.delay))) }
                    _onInteraction(t, e) {
                        switch (t.type) {
                            case "mouseover":
                            case "mouseout":
                                this._hasMouseInteraction = e;
                                break;
                            case "focusin":
                            case "focusout":
                                this._hasKeyboardInteraction = e
                        }
                        if (e) return void this._clearTimeout();
                        const n = t.relatedTarget;
                        this._element === n || this._element.contains(n) || this._maybeScheduleHide()
                    }
                    _setListeners() { I.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))), I.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))), I.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))), I.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1))) }
                    _clearTimeout() { clearTimeout(this._timeout), this._timeout = null }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = Wi.getOrCreateInstance(this, t);
                            if ("string" == typeof t) {
                                if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                e[t](this)
                            }
                        }))
                    }
                }
                return H(Wi), m(Wi), { Alert: $, Button: q, Carousel: rt, Collapse: gt, Dropdown: fn, Modal: qn, Offcanvas: Kn, Popover: bi, ScrollSpy: Di, Tab: ji, Toast: Wi, Tooltip: mi }
            }()
        },
        780: (t, e, n) => {
            "use strict";
            var i = {};
            n.r(i), n.d(i, { afterMain: () => E, afterRead: () => b, afterWrite: () => A, applyStyles: () => M, arrow: () => G, auto: () => l, basePlacements: () => c, beforeMain: () => w, beforeRead: () => v, beforeWrite: () => T, bottom: () => s, clippingParents: () => d, computeStyles: () => et, createPopper: () => Dt, createPopperBase: () => St, createPopperLite: () => Lt, detectOverflow: () => mt, end: () => h, eventListeners: () => it, flip: () => _t, hide: () => bt, left: () => a, main: () => x, modifierPhases: () => k, offset: () => wt, placements: () => _, popper: () => p, popperGenerator: () => Ot, popperOffsets: () => xt, preventOverflow: () => Et, read: () => y, reference: () => g, right: () => o, start: () => u, top: () => r, variationPlacements: () => m, viewport: () => f, write: () => C });
            var r = "top",
                s = "bottom",
                o = "right",
                a = "left",
                l = "auto",
                c = [r, s, o, a],
                u = "start",
                h = "end",
                d = "clippingParents",
                f = "viewport",
                p = "popper",
                g = "reference",
                m = c.reduce((function(t, e) { return t.concat([e + "-" + u, e + "-" + h]) }), []),
                _ = [].concat(c, [l]).reduce((function(t, e) { return t.concat([e, e + "-" + u, e + "-" + h]) }), []),
                v = "beforeRead",
                y = "read",
                b = "afterRead",
                w = "beforeMain",
                x = "main",
                E = "afterMain",
                T = "beforeWrite",
                C = "write",
                A = "afterWrite",
                k = [v, y, b, w, x, E, T, C, A];

            function O(t) { return t ? (t.nodeName || "").toLowerCase() : null }

            function S(t) { if (null == t) return window; if ("[object Window]" !== t.toString()) { var e = t.ownerDocument; return e && e.defaultView || window } return t }

            function D(t) { return t instanceof S(t).Element || t instanceof Element }

            function L(t) { return t instanceof S(t).HTMLElement || t instanceof HTMLElement }

            function N(t) { return "undefined" != typeof ShadowRoot && (t instanceof S(t).ShadowRoot || t instanceof ShadowRoot) }
            const M = {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function(t) {
                    var e = t.state;
                    Object.keys(e.elements).forEach((function(t) {
                        var n = e.styles[t] || {},
                            i = e.attributes[t] || {},
                            r = e.elements[t];
                        L(r) && O(r) && (Object.assign(r.style, n), Object.keys(i).forEach((function(t) { var e = i[t];!1 === e ? r.removeAttribute(t) : r.setAttribute(t, !0 === e ? "" : e) })))
                    }))
                },
                effect: function(t) {
                    var e = t.state,
                        n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
                    return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
                        function() {
                            Object.keys(e.elements).forEach((function(t) {
                                var i = e.elements[t],
                                    r = e.attributes[t] || {},
                                    s = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function(t, e) { return t[e] = "", t }), {});
                                L(i) && O(i) && (Object.assign(i.style, s), Object.keys(r).forEach((function(t) { i.removeAttribute(t) })))
                            }))
                        }
                },
                requires: ["computeStyles"]
            };

            function P(t) { return t.split("-")[0] }
            var I = Math.max,
                j = Math.min,
                R = Math.round;

            function z(t, e) {
                void 0 === e && (e = !1);
                var n = t.getBoundingClientRect(),
                    i = 1,
                    r = 1;
                if (L(t) && e) {
                    var s = t.offsetHeight,
                        o = t.offsetWidth;
                    o > 0 && (i = R(n.width) / o || 1), s > 0 && (r = R(n.height) / s || 1)
                }
                return { width: n.width / i, height: n.height / r, top: n.top / r, right: n.right / i, bottom: n.bottom / r, left: n.left / i, x: n.left / i, y: n.top / r }
            }

            function H(t) {
                var e = z(t),
                    n = t.offsetWidth,
                    i = t.offsetHeight;
                return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: t.offsetLeft, y: t.offsetTop, width: n, height: i }
            }

            function $(t, e) {
                var n = e.getRootNode && e.getRootNode();
                if (t.contains(e)) return !0;
                if (n && N(n)) {
                    var i = e;
                    do {
                        if (i && t.isSameNode(i)) return !0;
                        i = i.parentNode || i.host
                    } while (i)
                }
                return !1
            }

            function B(t) { return S(t).getComputedStyle(t) }

            function q(t) { return ["table", "td", "th"].indexOf(O(t)) >= 0 }

            function W(t) { return ((D(t) ? t.ownerDocument : t.document) || window.document).documentElement }

            function F(t) { return "html" === O(t) ? t : t.assignedSlot || t.parentNode || (N(t) ? t.host : null) || W(t) }

            function U(t) { return L(t) && "fixed" !== B(t).position ? t.offsetParent : null }

            function X(t) {
                for (var e = S(t), n = U(t); n && q(n) && "static" === B(n).position;) n = U(n);
                return n && ("html" === O(n) || "body" === O(n) && "static" === B(n).position) ? e : n || function(t) {
                    var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                    if (-1 !== navigator.userAgent.indexOf("Trident") && L(t) && "fixed" === B(t).position) return null;
                    var n = F(t);
                    for (N(n) && (n = n.host); L(n) && ["html", "body"].indexOf(O(n)) < 0;) {
                        var i = B(n);
                        if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || e && "filter" === i.willChange || e && i.filter && "none" !== i.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(t) || e
            }

            function V(t) { return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y" }

            function Y(t, e, n) { return I(t, j(e, n)) }

            function K(t) { return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t) }

            function Q(t, e) { return e.reduce((function(e, n) { return e[n] = t, e }), {}) }
            const G = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(t) {
                    var e, n = t.state,
                        i = t.name,
                        l = t.options,
                        u = n.elements.arrow,
                        h = n.modifiersData.popperOffsets,
                        d = P(n.placement),
                        f = V(d),
                        p = [a, o].indexOf(d) >= 0 ? "height" : "width";
                    if (u && h) {
                        var g = function(t, e) { return K("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, { placement: e.placement })) : t) ? t : Q(t, c)) }(l.padding, n),
                            m = H(u),
                            _ = "y" === f ? r : a,
                            v = "y" === f ? s : o,
                            y = n.rects.reference[p] + n.rects.reference[f] - h[f] - n.rects.popper[p],
                            b = h[f] - n.rects.reference[f],
                            w = X(u),
                            x = w ? "y" === f ? w.clientHeight || 0 : w.clientWidth || 0 : 0,
                            E = y / 2 - b / 2,
                            T = g[_],
                            C = x - m[p] - g[v],
                            A = x / 2 - m[p] / 2 + E,
                            k = Y(T, A, C),
                            O = f;
                        n.modifiersData[i] = ((e = {})[O] = k, e.centerOffset = k - A, e)
                    }
                },
                effect: function(t) {
                    var e = t.state,
                        n = t.options.element,
                        i = void 0 === n ? "[data-popper-arrow]" : n;
                    null != i && ("string" != typeof i || (i = e.elements.popper.querySelector(i))) && $(e.elements.popper, i) && (e.elements.arrow = i)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };

            function Z(t) { return t.split("-")[1] }
            var J = { top: "auto", right: "auto", bottom: "auto", left: "auto" };

            function tt(t) {
                var e, n = t.popper,
                    i = t.popperRect,
                    l = t.placement,
                    c = t.variation,
                    u = t.offsets,
                    d = t.position,
                    f = t.gpuAcceleration,
                    p = t.adaptive,
                    g = t.roundOffsets,
                    m = t.isFixed,
                    _ = u.x,
                    v = void 0 === _ ? 0 : _,
                    y = u.y,
                    b = void 0 === y ? 0 : y,
                    w = "function" == typeof g ? g({ x: v, y: b }) : { x: v, y: b };
                v = w.x, b = w.y;
                var x = u.hasOwnProperty("x"),
                    E = u.hasOwnProperty("y"),
                    T = a,
                    C = r,
                    A = window;
                if (p) {
                    var k = X(n),
                        O = "clientHeight",
                        D = "clientWidth";
                    k === S(n) && "static" !== B(k = W(n)).position && "absolute" === d && (O = "scrollHeight", D = "scrollWidth"), k = k, (l === r || (l === a || l === o) && c === h) && (C = s, b -= (m && k === A && A.visualViewport ? A.visualViewport.height : k[O]) - i.height, b *= f ? 1 : -1), l !== a && (l !== r && l !== s || c !== h) || (T = o, v -= (m && k === A && A.visualViewport ? A.visualViewport.width : k[D]) - i.width, v *= f ? 1 : -1)
                }
                var L, N = Object.assign({ position: d }, p && J),
                    M = !0 === g ? function(t) {
                        var e = t.x,
                            n = t.y,
                            i = window.devicePixelRatio || 1;
                        return { x: R(e * i) / i || 0, y: R(n * i) / i || 0 }
                    }({ x: v, y: b }) : { x: v, y: b };
                return v = M.x, b = M.y, f ? Object.assign({}, N, ((L = {})[C] = E ? "0" : "", L[T] = x ? "0" : "", L.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + b + "px)" : "translate3d(" + v + "px, " + b + "px, 0)", L)) : Object.assign({}, N, ((e = {})[C] = E ? b + "px" : "", e[T] = x ? v + "px" : "", e.transform = "", e))
            }
            const et = {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function(t) {
                    var e = t.state,
                        n = t.options,
                        i = n.gpuAcceleration,
                        r = void 0 === i || i,
                        s = n.adaptive,
                        o = void 0 === s || s,
                        a = n.roundOffsets,
                        l = void 0 === a || a,
                        c = { placement: P(e.placement), variation: Z(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: r, isFixed: "fixed" === e.options.strategy };
                    null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, tt(Object.assign({}, c, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: o, roundOffsets: l })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, tt(Object.assign({}, c, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement })
                },
                data: {}
            };
            var nt = { passive: !0 };
            const it = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(t) {
                    var e = t.state,
                        n = t.instance,
                        i = t.options,
                        r = i.scroll,
                        s = void 0 === r || r,
                        o = i.resize,
                        a = void 0 === o || o,
                        l = S(e.elements.popper),
                        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                    return s && c.forEach((function(t) { t.addEventListener("scroll", n.update, nt) })), a && l.addEventListener("resize", n.update, nt),
                        function() { s && c.forEach((function(t) { t.removeEventListener("scroll", n.update, nt) })), a && l.removeEventListener("resize", n.update, nt) }
                },
                data: {}
            };
            var rt = { left: "right", right: "left", bottom: "top", top: "bottom" };

            function st(t) { return t.replace(/left|right|bottom|top/g, (function(t) { return rt[t] })) }
            var ot = { start: "end", end: "start" };

            function at(t) { return t.replace(/start|end/g, (function(t) { return ot[t] })) }

            function lt(t) { var e = S(t); return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset } }

            function ct(t) { return z(W(t)).left + lt(t).scrollLeft }

            function ut(t) {
                var e = B(t),
                    n = e.overflow,
                    i = e.overflowX,
                    r = e.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + r + i)
            }

            function ht(t) { return ["html", "body", "#document"].indexOf(O(t)) >= 0 ? t.ownerDocument.body : L(t) && ut(t) ? t : ht(F(t)) }

            function dt(t, e) {
                var n;
                void 0 === e && (e = []);
                var i = ht(t),
                    r = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
                    s = S(i),
                    o = r ? [s].concat(s.visualViewport || [], ut(i) ? i : []) : i,
                    a = e.concat(o);
                return r ? a : a.concat(dt(F(o)))
            }

            function ft(t) { return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height }) }

            function pt(t, e) {
                return e === f ? ft(function(t) {
                    var e = S(t),
                        n = W(t),
                        i = e.visualViewport,
                        r = n.clientWidth,
                        s = n.clientHeight,
                        o = 0,
                        a = 0;
                    return i && (r = i.width, s = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (o = i.offsetLeft, a = i.offsetTop)), { width: r, height: s, x: o + ct(t), y: a }
                }(t)) : D(e) ? function(t) { var e = z(t); return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e }(e) : ft(function(t) {
                    var e, n = W(t),
                        i = lt(t),
                        r = null == (e = t.ownerDocument) ? void 0 : e.body,
                        s = I(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
                        o = I(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
                        a = -i.scrollLeft + ct(t),
                        l = -i.scrollTop;
                    return "rtl" === B(r || n).direction && (a += I(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: o, x: a, y: l }
                }(W(t)))
            }

            function gt(t) {
                var e, n = t.reference,
                    i = t.element,
                    l = t.placement,
                    c = l ? P(l) : null,
                    d = l ? Z(l) : null,
                    f = n.x + n.width / 2 - i.width / 2,
                    p = n.y + n.height / 2 - i.height / 2;
                switch (c) {
                    case r:
                        e = { x: f, y: n.y - i.height };
                        break;
                    case s:
                        e = { x: f, y: n.y + n.height };
                        break;
                    case o:
                        e = { x: n.x + n.width, y: p };
                        break;
                    case a:
                        e = { x: n.x - i.width, y: p };
                        break;
                    default:
                        e = { x: n.x, y: n.y }
                }
                var g = c ? V(c) : null;
                if (null != g) {
                    var m = "y" === g ? "height" : "width";
                    switch (d) {
                        case u:
                            e[g] = e[g] - (n[m] / 2 - i[m] / 2);
                            break;
                        case h:
                            e[g] = e[g] + (n[m] / 2 - i[m] / 2)
                    }
                }
                return e
            }

            function mt(t, e) {
                void 0 === e && (e = {});
                var n = e,
                    i = n.placement,
                    a = void 0 === i ? t.placement : i,
                    l = n.boundary,
                    u = void 0 === l ? d : l,
                    h = n.rootBoundary,
                    m = void 0 === h ? f : h,
                    _ = n.elementContext,
                    v = void 0 === _ ? p : _,
                    y = n.altBoundary,
                    b = void 0 !== y && y,
                    w = n.padding,
                    x = void 0 === w ? 0 : w,
                    E = K("number" != typeof x ? x : Q(x, c)),
                    T = v === p ? g : p,
                    C = t.rects.popper,
                    A = t.elements[b ? T : v],
                    k = function(t, e, n) {
                        var i = "clippingParents" === e ? function(t) {
                                var e = dt(F(t)),
                                    n = ["absolute", "fixed"].indexOf(B(t).position) >= 0 && L(t) ? X(t) : t;
                                return D(n) ? e.filter((function(t) { return D(t) && $(t, n) && "body" !== O(t) })) : []
                            }(t) : [].concat(e),
                            r = [].concat(i, [n]),
                            s = r[0],
                            o = r.reduce((function(e, n) { var i = pt(t, n); return e.top = I(i.top, e.top), e.right = j(i.right, e.right), e.bottom = j(i.bottom, e.bottom), e.left = I(i.left, e.left), e }), pt(t, s));
                        return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o
                    }(D(A) ? A : A.contextElement || W(t.elements.popper), u, m),
                    S = z(t.elements.reference),
                    N = gt({ reference: S, element: C, strategy: "absolute", placement: a }),
                    M = ft(Object.assign({}, C, N)),
                    P = v === p ? M : S,
                    R = { top: k.top - P.top + E.top, bottom: P.bottom - k.bottom + E.bottom, left: k.left - P.left + E.left, right: P.right - k.right + E.right },
                    H = t.modifiersData.offset;
                if (v === p && H) {
                    var q = H[a];
                    Object.keys(R).forEach((function(t) {
                        var e = [o, s].indexOf(t) >= 0 ? 1 : -1,
                            n = [r, s].indexOf(t) >= 0 ? "y" : "x";
                        R[t] += q[n] * e
                    }))
                }
                return R
            }
            const _t = {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function(t) {
                    var e = t.state,
                        n = t.options,
                        i = t.name;
                    if (!e.modifiersData[i]._skip) {
                        for (var h = n.mainAxis, d = void 0 === h || h, f = n.altAxis, p = void 0 === f || f, g = n.fallbackPlacements, v = n.padding, y = n.boundary, b = n.rootBoundary, w = n.altBoundary, x = n.flipVariations, E = void 0 === x || x, T = n.allowedAutoPlacements, C = e.options.placement, A = P(C), k = g || (A !== C && E ? function(t) { if (P(t) === l) return []; var e = st(t); return [at(t), e, at(e)] }(C) : [st(C)]), O = [C].concat(k).reduce((function(t, n) {
                                return t.concat(P(n) === l ? function(t, e) {
                                    void 0 === e && (e = {});
                                    var n = e,
                                        i = n.placement,
                                        r = n.boundary,
                                        s = n.rootBoundary,
                                        o = n.padding,
                                        a = n.flipVariations,
                                        l = n.allowedAutoPlacements,
                                        u = void 0 === l ? _ : l,
                                        h = Z(i),
                                        d = h ? a ? m : m.filter((function(t) { return Z(t) === h })) : c,
                                        f = d.filter((function(t) { return u.indexOf(t) >= 0 }));
                                    0 === f.length && (f = d);
                                    var p = f.reduce((function(e, n) { return e[n] = mt(t, { placement: n, boundary: r, rootBoundary: s, padding: o })[P(n)], e }), {});
                                    return Object.keys(p).sort((function(t, e) { return p[t] - p[e] }))
                                }(e, { placement: n, boundary: y, rootBoundary: b, padding: v, flipVariations: E, allowedAutoPlacements: T }) : n)
                            }), []), S = e.rects.reference, D = e.rects.popper, L = new Map, N = !0, M = O[0], I = 0; I < O.length; I++) {
                            var j = O[I],
                                R = P(j),
                                z = Z(j) === u,
                                H = [r, s].indexOf(R) >= 0,
                                $ = H ? "width" : "height",
                                B = mt(e, { placement: j, boundary: y, rootBoundary: b, altBoundary: w, padding: v }),
                                q = H ? z ? o : a : z ? s : r;
                            S[$] > D[$] && (q = st(q));
                            var W = st(q),
                                F = [];
                            if (d && F.push(B[R] <= 0), p && F.push(B[q] <= 0, B[W] <= 0), F.every((function(t) { return t }))) { M = j, N = !1; break }
                            L.set(j, F)
                        }
                        if (N)
                            for (var U = function(t) { var e = O.find((function(e) { var n = L.get(e); if (n) return n.slice(0, t).every((function(t) { return t })) })); if (e) return M = e, "break" }, X = E ? 3 : 1; X > 0 && "break" !== U(X); X--);
                        e.placement !== M && (e.modifiersData[i]._skip = !0, e.placement = M, e.reset = !0)
                    }
                },
                requiresIfExists: ["offset"],
                data: { _skip: !1 }
            };

            function vt(t, e, n) { return void 0 === n && (n = { x: 0, y: 0 }), { top: t.top - e.height - n.y, right: t.right - e.width + n.x, bottom: t.bottom - e.height + n.y, left: t.left - e.width - n.x } }

            function yt(t) { return [r, o, s, a].some((function(e) { return t[e] >= 0 })) }
            const bt = {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function(t) {
                        var e = t.state,
                            n = t.name,
                            i = e.rects.reference,
                            r = e.rects.popper,
                            s = e.modifiersData.preventOverflow,
                            o = mt(e, { elementContext: "reference" }),
                            a = mt(e, { altBoundary: !0 }),
                            l = vt(o, i),
                            c = vt(a, r, s),
                            u = yt(l),
                            h = yt(c);
                        e.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: u, hasPopperEscaped: h }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": u, "data-popper-escaped": h })
                    }
                },
                wt = {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function(t) {
                        var e = t.state,
                            n = t.options,
                            i = t.name,
                            s = n.offset,
                            l = void 0 === s ? [0, 0] : s,
                            c = _.reduce((function(t, n) {
                                return t[n] = function(t, e, n) {
                                    var i = P(t),
                                        s = [a, r].indexOf(i) >= 0 ? -1 : 1,
                                        l = "function" == typeof n ? n(Object.assign({}, e, { placement: t })) : n,
                                        c = l[0],
                                        u = l[1];
                                    return c = c || 0, u = (u || 0) * s, [a, o].indexOf(i) >= 0 ? { x: u, y: c } : { x: c, y: u }
                                }(n, e.rects, l), t
                            }), {}),
                            u = c[e.placement],
                            h = u.x,
                            d = u.y;
                        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += h, e.modifiersData.popperOffsets.y += d), e.modifiersData[i] = c
                    }
                },
                xt = {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(t) {
                        var e = t.state,
                            n = t.name;
                        e.modifiersData[n] = gt({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement })
                    },
                    data: {}
                },
                Et = {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e = t.state,
                            n = t.options,
                            i = t.name,
                            l = n.mainAxis,
                            c = void 0 === l || l,
                            h = n.altAxis,
                            d = void 0 !== h && h,
                            f = n.boundary,
                            p = n.rootBoundary,
                            g = n.altBoundary,
                            m = n.padding,
                            _ = n.tether,
                            v = void 0 === _ || _,
                            y = n.tetherOffset,
                            b = void 0 === y ? 0 : y,
                            w = mt(e, { boundary: f, rootBoundary: p, padding: m, altBoundary: g }),
                            x = P(e.placement),
                            E = Z(e.placement),
                            T = !E,
                            C = V(x),
                            A = "x" === C ? "y" : "x",
                            k = e.modifiersData.popperOffsets,
                            O = e.rects.reference,
                            S = e.rects.popper,
                            D = "function" == typeof b ? b(Object.assign({}, e.rects, { placement: e.placement })) : b,
                            L = "number" == typeof D ? { mainAxis: D, altAxis: D } : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
                            N = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
                            M = { x: 0, y: 0 };
                        if (k) {
                            if (c) {
                                var R, z = "y" === C ? r : a,
                                    $ = "y" === C ? s : o,
                                    B = "y" === C ? "height" : "width",
                                    q = k[C],
                                    W = q + w[z],
                                    F = q - w[$],
                                    U = v ? -S[B] / 2 : 0,
                                    K = E === u ? O[B] : S[B],
                                    Q = E === u ? -S[B] : -O[B],
                                    G = e.elements.arrow,
                                    J = v && G ? H(G) : { width: 0, height: 0 },
                                    tt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 },
                                    et = tt[z],
                                    nt = tt[$],
                                    it = Y(0, O[B], J[B]),
                                    rt = T ? O[B] / 2 - U - it - et - L.mainAxis : K - it - et - L.mainAxis,
                                    st = T ? -O[B] / 2 + U + it + nt + L.mainAxis : Q + it + nt + L.mainAxis,
                                    ot = e.elements.arrow && X(e.elements.arrow),
                                    at = ot ? "y" === C ? ot.clientTop || 0 : ot.clientLeft || 0 : 0,
                                    lt = null != (R = null == N ? void 0 : N[C]) ? R : 0,
                                    ct = q + st - lt,
                                    ut = Y(v ? j(W, q + rt - lt - at) : W, q, v ? I(F, ct) : F);
                                k[C] = ut, M[C] = ut - q
                            }
                            if (d) {
                                var ht, dt = "x" === C ? r : a,
                                    ft = "x" === C ? s : o,
                                    pt = k[A],
                                    gt = "y" === A ? "height" : "width",
                                    _t = pt + w[dt],
                                    vt = pt - w[ft],
                                    yt = -1 !== [r, a].indexOf(x),
                                    bt = null != (ht = null == N ? void 0 : N[A]) ? ht : 0,
                                    wt = yt ? _t : pt - O[gt] - S[gt] - bt + L.altAxis,
                                    xt = yt ? pt + O[gt] + S[gt] - bt - L.altAxis : vt,
                                    Et = v && yt ? function(t, e, n) { var i = Y(t, e, n); return i > n ? n : i }(wt, pt, xt) : Y(v ? wt : _t, pt, v ? xt : vt);
                                k[A] = Et, M[A] = Et - pt
                            }
                            e.modifiersData[i] = M
                        }
                    },
                    requiresIfExists: ["offset"]
                };

            function Tt(t, e, n) {
                void 0 === n && (n = !1);
                var i, r, s = L(e),
                    o = L(e) && function(t) {
                        var e = t.getBoundingClientRect(),
                            n = R(e.width) / t.offsetWidth || 1,
                            i = R(e.height) / t.offsetHeight || 1;
                        return 1 !== n || 1 !== i
                    }(e),
                    a = W(e),
                    l = z(t, o),
                    c = { scrollLeft: 0, scrollTop: 0 },
                    u = { x: 0, y: 0 };
                return (s || !s && !n) && (("body" !== O(e) || ut(a)) && (c = (i = e) !== S(i) && L(i) ? { scrollLeft: (r = i).scrollLeft, scrollTop: r.scrollTop } : lt(i)), L(e) ? ((u = z(e, !0)).x += e.clientLeft, u.y += e.clientTop) : a && (u.x = ct(a))), { x: l.left + c.scrollLeft - u.x, y: l.top + c.scrollTop - u.y, width: l.width, height: l.height }
            }

            function Ct(t) {
                var e = new Map,
                    n = new Set,
                    i = [];

                function r(t) {
                    n.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                        if (!n.has(t)) {
                            var i = e.get(t);
                            i && r(i)
                        }
                    })), i.push(t)
                }
                return t.forEach((function(t) { e.set(t.name, t) })), t.forEach((function(t) { n.has(t.name) || r(t) })), i
            }
            var At = { placement: "bottom", modifiers: [], strategy: "absolute" };

            function kt() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return !e.some((function(t) { return !(t && "function" == typeof t.getBoundingClientRect) })) }

            function Ot(t) {
                void 0 === t && (t = {});
                var e = t,
                    n = e.defaultModifiers,
                    i = void 0 === n ? [] : n,
                    r = e.defaultOptions,
                    s = void 0 === r ? At : r;
                return function(t, e, n) {
                    void 0 === n && (n = s);
                    var r, o, a = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, At, s), modifiersData: {}, elements: { reference: t, popper: e }, attributes: {}, styles: {} },
                        l = [],
                        c = !1,
                        u = {
                            state: a,
                            setOptions: function(n) {
                                var r = "function" == typeof n ? n(a.options) : n;
                                h(), a.options = Object.assign({}, s, a.options, r), a.scrollParents = { reference: D(t) ? dt(t) : t.contextElement ? dt(t.contextElement) : [], popper: dt(e) };
                                var o, c, d = function(t) { var e = Ct(t); return k.reduce((function(t, n) { return t.concat(e.filter((function(t) { return t.phase === n }))) }), []) }((o = [].concat(i, a.options.modifiers), c = o.reduce((function(t, e) { var n = t[e.name]; return t[e.name] = n ? Object.assign({}, n, e, { options: Object.assign({}, n.options, e.options), data: Object.assign({}, n.data, e.data) }) : e, t }), {}), Object.keys(c).map((function(t) { return c[t] }))));
                                return a.orderedModifiers = d.filter((function(t) { return t.enabled })), a.orderedModifiers.forEach((function(t) {
                                    var e = t.name,
                                        n = t.options,
                                        i = void 0 === n ? {} : n,
                                        r = t.effect;
                                    if ("function" == typeof r) {
                                        var s = r({ state: a, name: e, instance: u, options: i });
                                        l.push(s || function() {})
                                    }
                                })), u.update()
                            },
                            forceUpdate: function() {
                                if (!c) {
                                    var t = a.elements,
                                        e = t.reference,
                                        n = t.popper;
                                    if (kt(e, n)) {
                                        a.rects = { reference: Tt(e, X(n), "fixed" === a.options.strategy), popper: H(n) }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) { return a.modifiersData[t.name] = Object.assign({}, t.data) }));
                                        for (var i = 0; i < a.orderedModifiers.length; i++)
                                            if (!0 !== a.reset) {
                                                var r = a.orderedModifiers[i],
                                                    s = r.fn,
                                                    o = r.options,
                                                    l = void 0 === o ? {} : o,
                                                    h = r.name;
                                                "function" == typeof s && (a = s({ state: a, options: l, name: h, instance: u }) || a)
                                            } else a.reset = !1, i = -1
                                    }
                                }
                            },
                            update: (r = function() { return new Promise((function(t) { u.forceUpdate(), t(a) })) }, function() { return o || (o = new Promise((function(t) { Promise.resolve().then((function() { o = void 0, t(r()) })) }))), o }),
                            destroy: function() { h(), c = !0 }
                        };
                    if (!kt(t, e)) return u;

                    function h() { l.forEach((function(t) { return t() })), l = [] }
                    return u.setOptions(n).then((function(t) {!c && n.onFirstUpdate && n.onFirstUpdate(t) })), u
                }
            }
            var St = Ot(),
                Dt = Ot({ defaultModifiers: [it, xt, et, M, wt, _t, Et, G, bt] }),
                Lt = Ot({ defaultModifiers: [it, xt, et, M] });
            const Nt = "transitionend",
                Mt = t => {
                    let e = t.getAttribute("data-bs-target");
                    if (!e || "#" === e) {
                        let n = t.getAttribute("href");
                        if (!n || !n.includes("#") && !n.startsWith(".")) return null;
                        n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), e = n && "#" !== n ? n.trim() : null
                    }
                    return e
                },
                Pt = t => { const e = Mt(t); return e && document.querySelector(e) ? e : null },
                It = t => { const e = Mt(t); return e ? document.querySelector(e) : null },
                jt = t => { t.dispatchEvent(new Event(Nt)) },
                Rt = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
                zt = t => Rt(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
                Ht = (t, e, n) => {
                    Object.keys(n).forEach((i => {
                        const r = n[i],
                            s = e[i],
                            o = s && Rt(s) ? "element" : null == (a = s) ? `${a}` : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                        var a;
                        if (!new RegExp(r).test(o)) throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${r}".`)
                    }))
                },
                $t = t => !(!Rt(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                Bt = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
                qt = t => { if (!document.documentElement.attachShadow) return null; if ("function" == typeof t.getRootNode) { const e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } return t instanceof ShadowRoot ? t : t.parentNode ? qt(t.parentNode) : null },
                Wt = () => {},
                Ft = t => { t.offsetHeight },
                Ut = () => { const { jQuery: t } = window; return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null },
                Xt = [],
                Vt = () => "rtl" === document.documentElement.dir,
                Yt = t => {
                    var e;
                    e = () => {
                        const e = Ut();
                        if (e) {
                            const n = t.NAME,
                                i = e.fn[n];
                            e.fn[n] = t.jQueryInterface, e.fn[n].Constructor = t, e.fn[n].noConflict = () => (e.fn[n] = i, t.jQueryInterface)
                        }
                    }, "loading" === document.readyState ? (Xt.length || document.addEventListener("DOMContentLoaded", (() => { Xt.forEach((t => t())) })), Xt.push(e)) : e()
                },
                Kt = t => { "function" == typeof t && t() },
                Qt = (t, e, n = !0) => {
                    if (!n) return void Kt(t);
                    const i = (t => {
                        if (!t) return 0;
                        let { transitionDuration: e, transitionDelay: n } = window.getComputedStyle(t);
                        const i = Number.parseFloat(e),
                            r = Number.parseFloat(n);
                        return i || r ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(n))) : 0
                    })(e) + 5;
                    let r = !1;
                    const s = ({ target: n }) => { n === e && (r = !0, e.removeEventListener(Nt, s), Kt(t)) };
                    e.addEventListener(Nt, s), setTimeout((() => { r || jt(e) }), i)
                },
                Gt = (t, e, n, i) => { let r = t.indexOf(e); if (-1 === r) return t[!n && i ? t.length - 1 : 0]; const s = t.length; return r += n ? 1 : -1, i && (r = (r + s) % s), t[Math.max(0, Math.min(r, s - 1))] },
                Zt = /[^.]*(?=\..*)\.|.*/,
                Jt = /\..*/,
                te = /::\d+$/,
                ee = {};
            let ne = 1;
            const ie = { mouseenter: "mouseover", mouseleave: "mouseout" },
                re = /^(mouseenter|mouseleave)/i,
                se = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

            function oe(t, e) { return e && `${e}::${ne++}` || t.uidEvent || ne++ }

            function ae(t) { const e = oe(t); return t.uidEvent = e, ee[e] = ee[e] || {}, ee[e] }

            function le(t, e, n = null) { const i = Object.keys(t); for (let r = 0, s = i.length; r < s; r++) { const s = t[i[r]]; if (s.originalHandler === e && s.delegationSelector === n) return s } return null }

            function ce(t, e, n) {
                const i = "string" == typeof e,
                    r = i ? n : e;
                let s = de(t);
                return se.has(s) || (s = t), [i, r, s]
            }

            function ue(t, e, n, i, r) {
                if ("string" != typeof e || !t) return;
                if (n || (n = i, i = null), re.test(e)) {
                    const t = t => function(e) { if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e) };
                    i ? i = t(i) : n = t(n)
                }
                const [s, o, a] = ce(e, n, i), l = ae(t), c = l[a] || (l[a] = {}), u = le(c, o, s ? n : null);
                if (u) return void(u.oneOff = u.oneOff && r);
                const h = oe(o, e.replace(Zt, "")),
                    d = s ? function(t, e, n) {
                        return function i(r) {
                            const s = t.querySelectorAll(e);
                            for (let { target: o } = r; o && o !== this; o = o.parentNode)
                                for (let a = s.length; a--;)
                                    if (s[a] === o) return r.delegateTarget = o, i.oneOff && fe.off(t, r.type, e, n), n.apply(o, [r]);
                            return null
                        }
                    }(t, n, i) : function(t, e) { return function n(i) { return i.delegateTarget = t, n.oneOff && fe.off(t, i.type, e), e.apply(t, [i]) } }(t, n);
                d.delegationSelector = s ? n : null, d.originalHandler = o, d.oneOff = r, d.uidEvent = h, c[h] = d, t.addEventListener(a, d, s)
            }

            function he(t, e, n, i, r) {
                const s = le(e[n], i, r);
                s && (t.removeEventListener(n, s, Boolean(r)), delete e[n][s.uidEvent])
            }

            function de(t) { return t = t.replace(Jt, ""), ie[t] || t }
            const fe = {
                    on(t, e, n, i) { ue(t, e, n, i, !1) },
                    one(t, e, n, i) { ue(t, e, n, i, !0) },
                    off(t, e, n, i) {
                        if ("string" != typeof e || !t) return;
                        const [r, s, o] = ce(e, n, i), a = o !== e, l = ae(t), c = e.startsWith(".");
                        if (void 0 !== s) { if (!l || !l[o]) return; return void he(t, l, o, s, r ? n : null) }
                        c && Object.keys(l).forEach((n => {
                            ! function(t, e, n, i) {
                                const r = e[n] || {};
                                Object.keys(r).forEach((s => {
                                    if (s.includes(i)) {
                                        const i = r[s];
                                        he(t, e, n, i.originalHandler, i.delegationSelector)
                                    }
                                }))
                            }(t, l, n, e.slice(1))
                        }));
                        const u = l[o] || {};
                        Object.keys(u).forEach((n => {
                            const i = n.replace(te, "");
                            if (!a || e.includes(i)) {
                                const e = u[n];
                                he(t, l, o, e.originalHandler, e.delegationSelector)
                            }
                        }))
                    },
                    trigger(t, e, n) {
                        if ("string" != typeof e || !t) return null;
                        const i = Ut(),
                            r = de(e),
                            s = e !== r,
                            o = se.has(r);
                        let a, l = !0,
                            c = !0,
                            u = !1,
                            h = null;
                        return s && i && (a = i.Event(e, n), i(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), u = a.isDefaultPrevented()), o ? (h = document.createEvent("HTMLEvents"), h.initEvent(r, l, !0)) : h = new CustomEvent(e, { bubbles: l, cancelable: !0 }), void 0 !== n && Object.keys(n).forEach((t => { Object.defineProperty(h, t, { get: () => n[t] }) })), u && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h
                    }
                },
                pe = new Map,
                ge = {set(t, e, n) {
                        pe.has(t) || pe.set(t, new Map);
                        const i = pe.get(t);
                        i.has(e) || 0 === i.size ? i.set(e, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
                    },
                    get: (t, e) => pe.has(t) && pe.get(t).get(e) || null,
                    remove(t, e) {
                        if (!pe.has(t)) return;
                        const n = pe.get(t);
                        n.delete(e), 0 === n.size && pe.delete(t)
                    }
                };
            class me {
                constructor(t) {
                    (t = zt(t)) && (this._element = t, ge.set(this._element, this.constructor.DATA_KEY, this))
                }
                dispose() { ge.remove(this._element, this.constructor.DATA_KEY), fe.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t => { this[t] = null })) }
                _queueCallback(t, e, n = !0) { Qt(t, e, n) }
                static getInstance(t) { return ge.get(zt(t), this.DATA_KEY) }
                static getOrCreateInstance(t, e = {}) { return this.getInstance(t) || new this(t, "object" == typeof e ? e : null) }
                static get VERSION() { return "5.1.3" }
                static get NAME() { throw new Error('You have to implement the static method "NAME", for each component!') }
                static get DATA_KEY() { return `bs.${this.NAME}` }
                static get EVENT_KEY() { return `.${this.DATA_KEY}` }
            }
            const _e = (t, e = "hide") => {
                const n = `click.dismiss${t.EVENT_KEY}`,
                    i = t.NAME;
                fe.on(document, n, `[data-bs-dismiss="${i}"]`, (function(n) {
                    if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), Bt(this)) return;
                    const r = It(this) || this.closest(`.${i}`);
                    t.getOrCreateInstance(r)[e]()
                }))
            };
            class ve extends me {
                static get NAME() { return "alert" }
                close() {
                    if (fe.trigger(this._element, "close.bs.alert").defaultPrevented) return;
                    this._element.classList.remove("show");
                    const t = this._element.classList.contains("fade");
                    this._queueCallback((() => this._destroyElement()), this._element, t)
                }
                _destroyElement() { this._element.remove(), fe.trigger(this._element, "closed.bs.alert"), this.dispose() }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = ve.getOrCreateInstance(this);
                        if ("string" == typeof t) {
                            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                            e[t](this)
                        }
                    }))
                }
            }
            _e(ve, "close"), Yt(ve);
            const ye = '[data-bs-toggle="button"]';
            class be extends me {
                static get NAME() { return "button" }
                toggle() { this._element.setAttribute("aria-pressed", this._element.classList.toggle("active")) }
                static jQueryInterface(t) { return this.each((function() { const e = be.getOrCreateInstance(this); "toggle" === t && e[t]() })) }
            }

            function we(t) { return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t) }

            function xe(t) { return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`)) }
            fe.on(document, "click.bs.button.data-api", ye, (t => {
                t.preventDefault();
                const e = t.target.closest(ye);
                be.getOrCreateInstance(e).toggle()
            })), Yt(be);
            const Ee = {
                    setDataAttribute(t, e, n) { t.setAttribute(`data-bs-${xe(e)}`, n) },
                    removeDataAttribute(t, e) { t.removeAttribute(`data-bs-${xe(e)}`) },
                    getDataAttributes(t) {
                        if (!t) return {};
                        const e = {};
                        return Object.keys(t.dataset).filter((t => t.startsWith("bs"))).forEach((n => {
                            let i = n.replace(/^bs/, "");
                            i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = we(t.dataset[n])
                        })), e
                    },
                    getDataAttribute: (t, e) => we(t.getAttribute(`data-bs-${xe(e)}`)),
                    offset(t) { const e = t.getBoundingClientRect(); return { top: e.top + window.pageYOffset, left: e.left + window.pageXOffset } },
                    position: t => ({ top: t.offsetTop, left: t.offsetLeft })
                },
                Te = {
                    find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
                    findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
                    children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
                    parents(t, e) { const n = []; let i = t.parentNode; for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(e) && n.push(i), i = i.parentNode; return n },
                    prev(t, e) {
                        let n = t.previousElementSibling;
                        for (; n;) {
                            if (n.matches(e)) return [n];
                            n = n.previousElementSibling
                        }
                        return []
                    },
                    next(t, e) {
                        let n = t.nextElementSibling;
                        for (; n;) {
                            if (n.matches(e)) return [n];
                            n = n.nextElementSibling
                        }
                        return []
                    },
                    focusableChildren(t) { const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(", "); return this.find(e, t).filter((t => !Bt(t) && $t(t))) }
                },
                Ce = "carousel",
                Ae = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
                ke = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
                Oe = "next",
                Se = "prev",
                De = "left",
                Le = "right",
                Ne = { ArrowLeft: Le, ArrowRight: De },
                Me = "slid.bs.carousel",
                Pe = "active",
                Ie = ".active.carousel-item";
            class je extends me {
                constructor(t, e) { super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = Te.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners() }
                static get Default() { return Ae }
                static get NAME() { return Ce }
                next() { this._slide(Oe) }
                nextWhenVisible() {!document.hidden && $t(this._element) && this.next() }
                prev() { this._slide(Se) }
                pause(t) { t || (this._isPaused = !0), Te.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (jt(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }
                cycle(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }
                to(t) {
                    this._activeElement = Te.findOne(Ie, this._element);
                    const e = this._getItemIndex(this._activeElement);
                    if (t > this._items.length - 1 || t < 0) return;
                    if (this._isSliding) return void fe.one(this._element, Me, (() => this.to(t)));
                    if (e === t) return this.pause(), void this.cycle();
                    const n = t > e ? Oe : Se;
                    this._slide(n, this._items[t])
                }
                _getConfig(t) { return t = {...Ae, ...Ee.getDataAttributes(this._element), ... "object" == typeof t ? t : {} }, Ht(Ce, t, ke), t }
                _handleSwipe() {
                    const t = Math.abs(this.touchDeltaX);
                    if (t <= 40) return;
                    const e = t / this.touchDeltaX;
                    this.touchDeltaX = 0, e && this._slide(e > 0 ? Le : De)
                }
                _addEventListeners() { this._config.keyboard && fe.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && (fe.on(this._element, "mouseenter.bs.carousel", (t => this.pause(t))), fe.on(this._element, "mouseleave.bs.carousel", (t => this.cycle(t)))), this._config.touch && this._touchSupported && this._addTouchEventListeners() }
                _addTouchEventListeners() {
                    const t = t => this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType),
                        e = e => { t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX) },
                        n = t => { this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX },
                        i = e => { t(e) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t => this.cycle(t)), 500 + this._config.interval)) };
                    Te.find(".carousel-item img", this._element).forEach((t => { fe.on(t, "dragstart.bs.carousel", (t => t.preventDefault())) })), this._pointerEvent ? (fe.on(this._element, "pointerdown.bs.carousel", (t => e(t))), fe.on(this._element, "pointerup.bs.carousel", (t => i(t))), this._element.classList.add("pointer-event")) : (fe.on(this._element, "touchstart.bs.carousel", (t => e(t))), fe.on(this._element, "touchmove.bs.carousel", (t => n(t))), fe.on(this._element, "touchend.bs.carousel", (t => i(t))))
                }
                _keydown(t) {
                    if (/input|textarea/i.test(t.target.tagName)) return;
                    const e = Ne[t.key];
                    e && (t.preventDefault(), this._slide(e))
                }
                _getItemIndex(t) { return this._items = t && t.parentNode ? Te.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t) }
                _getItemByOrder(t, e) { const n = t === Oe; return Gt(this._items, e, n, this._config.wrap) }
                _triggerSlideEvent(t, e) {
                    const n = this._getItemIndex(t),
                        i = this._getItemIndex(Te.findOne(Ie, this._element));
                    return fe.trigger(this._element, "slide.bs.carousel", { relatedTarget: t, direction: e, from: i, to: n })
                }
                _setActiveIndicatorElement(t) {
                    if (this._indicatorsElement) {
                        const e = Te.findOne(".active", this._indicatorsElement);
                        e.classList.remove(Pe), e.removeAttribute("aria-current");
                        const n = Te.find("[data-bs-target]", this._indicatorsElement);
                        for (let e = 0; e < n.length; e++)
                            if (Number.parseInt(n[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) { n[e].classList.add(Pe), n[e].setAttribute("aria-current", "true"); break }
                    }
                }
                _updateInterval() {
                    const t = this._activeElement || Te.findOne(Ie, this._element);
                    if (!t) return;
                    const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                    e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
                }
                _slide(t, e) {
                    const n = this._directionToOrder(t),
                        i = Te.findOne(Ie, this._element),
                        r = this._getItemIndex(i),
                        s = e || this._getItemByOrder(n, i),
                        o = this._getItemIndex(s),
                        a = Boolean(this._interval),
                        l = n === Oe,
                        c = l ? "carousel-item-start" : "carousel-item-end",
                        u = l ? "carousel-item-next" : "carousel-item-prev",
                        h = this._orderToDirection(n);
                    if (s && s.classList.contains(Pe)) return void(this._isSliding = !1);
                    if (this._isSliding) return;
                    if (this._triggerSlideEvent(s, h).defaultPrevented) return;
                    if (!i || !s) return;
                    this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s), this._activeElement = s;
                    const d = () => { fe.trigger(this._element, Me, { relatedTarget: s, direction: h, from: r, to: o }) };
                    if (this._element.classList.contains("slide")) {
                        s.classList.add(u), Ft(s), i.classList.add(c), s.classList.add(c);
                        const t = () => { s.classList.remove(c, u), s.classList.add(Pe), i.classList.remove(Pe, u, c), this._isSliding = !1, setTimeout(d, 0) };
                        this._queueCallback(t, i, !0)
                    } else i.classList.remove(Pe), s.classList.add(Pe), this._isSliding = !1, d();
                    a && this.cycle()
                }
                _directionToOrder(t) { return [Le, De].includes(t) ? Vt() ? t === De ? Se : Oe : t === De ? Oe : Se : t }
                _orderToDirection(t) { return [Oe, Se].includes(t) ? Vt() ? t === Se ? De : Le : t === Se ? Le : De : t }
                static carouselInterface(t, e) {
                    const n = je.getOrCreateInstance(t, e);
                    let { _config: i } = n;
                    "object" == typeof e && (i = {...i, ...e });
                    const r = "string" == typeof e ? e : i.slide;
                    if ("number" == typeof e) n.to(e);
                    else if ("string" == typeof r) {
                        if (void 0 === n[r]) throw new TypeError(`No method named "${r}"`);
                        n[r]()
                    } else i.interval && i.ride && (n.pause(), n.cycle())
                }
                static jQueryInterface(t) { return this.each((function() { je.carouselInterface(this, t) })) }
                static dataApiClickHandler(t) {
                    const e = It(this);
                    if (!e || !e.classList.contains("carousel")) return;
                    const n = {...Ee.getDataAttributes(e), ...Ee.getDataAttributes(this) },
                        i = this.getAttribute("data-bs-slide-to");
                    i && (n.interval = !1), je.carouselInterface(e, n), i && je.getInstance(e).to(i), t.preventDefault()
                }
            }
            fe.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", je.dataApiClickHandler), fe.on(window, "load.bs.carousel.data-api", (() => { const t = Te.find('[data-bs-ride="carousel"]'); for (let e = 0, n = t.length; e < n; e++) je.carouselInterface(t[e], je.getInstance(t[e])) })), Yt(je);
            const Re = "collapse",
                ze = { toggle: !0, parent: null },
                He = { toggle: "boolean", parent: "(null|element)" },
                $e = "show",
                Be = "collapse",
                qe = "collapsing",
                We = "collapsed",
                Fe = ":scope .collapse .collapse",
                Ue = '[data-bs-toggle="collapse"]';
            class Xe extends me {
                constructor(t, e) {
                    super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = [];
                    const n = Te.find(Ue);
                    for (let t = 0, e = n.length; t < e; t++) {
                        const e = n[t],
                            i = Pt(e),
                            r = Te.find(i).filter((t => t === this._element));
                        null !== i && r.length && (this._selector = i, this._triggerArray.push(e))
                    }
                    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
                }
                static get Default() { return ze }
                static get NAME() { return Re }
                toggle() { this._isShown() ? this.hide() : this.show() }
                show() {
                    if (this._isTransitioning || this._isShown()) return;
                    let t, e = [];
                    if (this._config.parent) {
                        const t = Te.find(Fe, this._config.parent);
                        e = Te.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e => !t.includes(e)))
                    }
                    const n = Te.findOne(this._selector);
                    if (e.length) { const i = e.find((t => n !== t)); if (t = i ? Xe.getInstance(i) : null, t && t._isTransitioning) return }
                    if (fe.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
                    e.forEach((e => { n !== e && Xe.getOrCreateInstance(e, { toggle: !1 }).hide(), t || ge.set(e, "bs.collapse", null) }));
                    const i = this._getDimension();
                    this._element.classList.remove(Be), this._element.classList.add(qe), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                    const r = `scroll${i[0].toUpperCase()+i.slice(1)}`;
                    this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(qe), this._element.classList.add(Be, $e), this._element.style[i] = "", fe.trigger(this._element, "shown.bs.collapse") }), this._element, !0), this._element.style[i] = `${this._element[r]}px`
                }
                hide() {
                    if (this._isTransitioning || !this._isShown()) return;
                    if (fe.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
                    const t = this._getDimension();
                    this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, Ft(this._element), this._element.classList.add(qe), this._element.classList.remove(Be, $e);
                    const e = this._triggerArray.length;
                    for (let t = 0; t < e; t++) {
                        const e = this._triggerArray[t],
                            n = It(e);
                        n && !this._isShown(n) && this._addAriaAndCollapsedClass([e], !1)
                    }
                    this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(qe), this._element.classList.add(Be), fe.trigger(this._element, "hidden.bs.collapse") }), this._element, !0)
                }
                _isShown(t = this._element) { return t.classList.contains($e) }
                _getConfig(t) { return (t = {...ze, ...Ee.getDataAttributes(this._element), ...t }).toggle = Boolean(t.toggle), t.parent = zt(t.parent), Ht(Re, t, He), t }
                _getDimension() { return this._element.classList.contains("collapse-horizontal") ? "width" : "height" }
                _initializeChildren() {
                    if (!this._config.parent) return;
                    const t = Te.find(Fe, this._config.parent);
                    Te.find(Ue, this._config.parent).filter((e => !t.includes(e))).forEach((t => {
                        const e = It(t);
                        e && this._addAriaAndCollapsedClass([t], this._isShown(e))
                    }))
                }
                _addAriaAndCollapsedClass(t, e) { t.length && t.forEach((t => { e ? t.classList.remove(We) : t.classList.add(We), t.setAttribute("aria-expanded", e) })) }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = {};
                        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                        const n = Xe.getOrCreateInstance(this, e);
                        if ("string" == typeof t) {
                            if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
                            n[t]()
                        }
                    }))
                }
            }
            fe.on(document, "click.bs.collapse.data-api", Ue, (function(t) {
                ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
                const e = Pt(this);
                Te.find(e).forEach((t => { Xe.getOrCreateInstance(t, { toggle: !1 }).toggle() }))
            })), Yt(Xe);
            const Ve = "dropdown",
                Ye = "Escape",
                Ke = "Space",
                Qe = "ArrowUp",
                Ge = "ArrowDown",
                Ze = new RegExp("ArrowUp|ArrowDown|Escape"),
                Je = "click.bs.dropdown.data-api",
                tn = "keydown.bs.dropdown.data-api",
                en = "show",
                nn = '[data-bs-toggle="dropdown"]',
                rn = ".dropdown-menu",
                sn = Vt() ? "top-end" : "top-start",
                on = Vt() ? "top-start" : "top-end",
                an = Vt() ? "bottom-end" : "bottom-start",
                ln = Vt() ? "bottom-start" : "bottom-end",
                cn = Vt() ? "left-start" : "right-start",
                un = Vt() ? "right-start" : "left-start",
                hn = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: !0 },
                dn = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" };
            class fn extends me {
                constructor(t, e) { super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar() }
                static get Default() { return hn }
                static get DefaultType() { return dn }
                static get NAME() { return Ve }
                toggle() { return this._isShown() ? this.hide() : this.show() }
                show() {
                    if (Bt(this._element) || this._isShown(this._menu)) return;
                    const t = { relatedTarget: this._element };
                    if (fe.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return;
                    const e = fn.getParentFromElement(this._element);
                    this._inNavbar ? Ee.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t => fe.on(t, "mouseover", Wt))), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(en), this._element.classList.add(en), fe.trigger(this._element, "shown.bs.dropdown", t)
                }
                hide() {
                    if (Bt(this._element) || !this._isShown(this._menu)) return;
                    const t = { relatedTarget: this._element };
                    this._completeHide(t)
                }
                dispose() { this._popper && this._popper.destroy(), super.dispose() }
                update() { this._inNavbar = this._detectNavbar(), this._popper && this._popper.update() }
                _completeHide(t) { fe.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => fe.off(t, "mouseover", Wt))), this._popper && this._popper.destroy(), this._menu.classList.remove(en), this._element.classList.remove(en), this._element.setAttribute("aria-expanded", "false"), Ee.removeDataAttribute(this._menu, "popper"), fe.trigger(this._element, "hidden.bs.dropdown", t)) }
                _getConfig(t) { if (t = {...this.constructor.Default, ...Ee.getDataAttributes(this._element), ...t }, Ht(Ve, t, this.constructor.DefaultType), "object" == typeof t.reference && !Rt(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Ve.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`); return t }
                _createPopper(t) {
                    if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let e = this._element;
                    "parent" === this._config.reference ? e = t : Rt(this._config.reference) ? e = zt(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
                    const n = this._getPopperConfig(),
                        r = n.modifiers.find((t => "applyStyles" === t.name && !1 === t.enabled));
                    this._popper = Dt(e, this._menu, n), r && Ee.setDataAttribute(this._menu, "popper", "static")
                }
                _isShown(t = this._element) { return t.classList.contains(en) }
                _getMenuElement() { return Te.next(this._element, rn)[0] }
                _getPlacement() { const t = this._element.parentNode; if (t.classList.contains("dropend")) return cn; if (t.classList.contains("dropstart")) return un; const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim(); return t.classList.contains("dropup") ? e ? on : sn : e ? ln : an }
                _detectNavbar() { return null !== this._element.closest(".navbar") }
                _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t }
                _getPopperConfig() { const t = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] }; return "static" === this._config.display && (t.modifiers = [{ name: "applyStyles", enabled: !1 }]), {...t, ... "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig } }
                _selectMenuItem({ key: t, target: e }) {
                    const n = Te.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter($t);
                    n.length && Gt(n, e, t === Ge, !n.includes(e)).focus()
                }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = fn.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                            e[t]()
                        }
                    }))
                }
                static clearMenus(t) {
                    if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
                    const e = Te.find(nn);
                    for (let n = 0, i = e.length; n < i; n++) {
                        const i = fn.getInstance(e[n]);
                        if (!i || !1 === i._config.autoClose) continue;
                        if (!i._isShown()) continue;
                        const r = { relatedTarget: i._element };
                        if (t) {
                            const e = t.composedPath(),
                                n = e.includes(i._menu);
                            if (e.includes(i._element) || "inside" === i._config.autoClose && !n || "outside" === i._config.autoClose && n) continue;
                            if (i._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                            "click" === t.type && (r.clickEvent = t)
                        }
                        i._completeHide(r)
                    }
                }
                static getParentFromElement(t) { return It(t) || t.parentNode }
                static dataApiKeydownHandler(t) {
                    if (/input|textarea/i.test(t.target.tagName) ? t.key === Ke || t.key !== Ye && (t.key !== Ge && t.key !== Qe || t.target.closest(rn)) : !Ze.test(t.key)) return;
                    const e = this.classList.contains(en);
                    if (!e && t.key === Ye) return;
                    if (t.preventDefault(), t.stopPropagation(), Bt(this)) return;
                    const n = this.matches(nn) ? this : Te.prev(this, nn)[0],
                        i = fn.getOrCreateInstance(n);
                    if (t.key !== Ye) return t.key === Qe || t.key === Ge ? (e || i.show(), void i._selectMenuItem(t)) : void(e && t.key !== Ke || fn.clearMenus());
                    i.hide()
                }
            }
            fe.on(document, tn, nn, fn.dataApiKeydownHandler), fe.on(document, tn, rn, fn.dataApiKeydownHandler), fe.on(document, Je, fn.clearMenus), fe.on(document, "keyup.bs.dropdown.data-api", fn.clearMenus), fe.on(document, Je, nn, (function(t) { t.preventDefault(), fn.getOrCreateInstance(this).toggle() })), Yt(fn);
            const pn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                gn = ".sticky-top";
            class mn {
                constructor() { this._element = document.body }
                getWidth() { const t = document.documentElement.clientWidth; return Math.abs(window.innerWidth - t) }
                hide() {
                    const t = this.getWidth();
                    this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e => e + t)), this._setElementAttributes(pn, "paddingRight", (e => e + t)), this._setElementAttributes(gn, "marginRight", (e => e - t))
                }
                _disableOverFlow() { this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden" }
                _setElementAttributes(t, e, n) {
                    const i = this.getWidth();
                    this._applyManipulationCallback(t, (t => {
                        if (t !== this._element && window.innerWidth > t.clientWidth + i) return;
                        this._saveInitialAttribute(t, e);
                        const r = window.getComputedStyle(t)[e];
                        t.style[e] = `${n(Number.parseFloat(r))}px`
                    }))
                }
                reset() { this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(pn, "paddingRight"), this._resetElementAttributes(gn, "marginRight") }
                _saveInitialAttribute(t, e) {
                    const n = t.style[e];
                    n && Ee.setDataAttribute(t, e, n)
                }
                _resetElementAttributes(t, e) {
                    this._applyManipulationCallback(t, (t => {
                        const n = Ee.getDataAttribute(t, e);
                        void 0 === n ? t.style.removeProperty(e) : (Ee.removeDataAttribute(t, e), t.style[e] = n)
                    }))
                }
                _applyManipulationCallback(t, e) { Rt(t) ? e(t) : Te.find(t, this._element).forEach(e) }
                isOverflowing() { return this.getWidth() > 0 }
            }
            const _n = { className: "modal-backdrop", isVisible: !0, isAnimated: !1, rootElement: "body", clickCallback: null },
                vn = { className: "string", isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" },
                yn = "show",
                bn = "mousedown.bs.backdrop";
            class wn {
                constructor(t) { this._config = this._getConfig(t), this._isAppended = !1, this._element = null }
                show(t) { this._config.isVisible ? (this._append(), this._config.isAnimated && Ft(this._getElement()), this._getElement().classList.add(yn), this._emulateAnimation((() => { Kt(t) }))) : Kt(t) }
                hide(t) { this._config.isVisible ? (this._getElement().classList.remove(yn), this._emulateAnimation((() => { this.dispose(), Kt(t) }))) : Kt(t) }
                _getElement() {
                    if (!this._element) {
                        const t = document.createElement("div");
                        t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
                    }
                    return this._element
                }
                _getConfig(t) { return (t = {..._n, ... "object" == typeof t ? t : {} }).rootElement = zt(t.rootElement), Ht("backdrop", t, vn), t }
                _append() { this._isAppended || (this._config.rootElement.append(this._getElement()), fe.on(this._getElement(), bn, (() => { Kt(this._config.clickCallback) })), this._isAppended = !0) }
                dispose() { this._isAppended && (fe.off(this._element, bn), this._element.remove(), this._isAppended = !1) }
                _emulateAnimation(t) { Qt(t, this._getElement(), this._config.isAnimated) }
            }
            const xn = { trapElement: null, autofocus: !0 },
                En = { trapElement: "element", autofocus: "boolean" },
                Tn = ".bs.focustrap",
                Cn = "backward";
            class An {
                constructor(t) { this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null }
                activate() {
                    const { trapElement: t, autofocus: e } = this._config;
                    this._isActive || (e && t.focus(), fe.off(document, Tn), fe.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), fe.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0)
                }
                deactivate() { this._isActive && (this._isActive = !1, fe.off(document, Tn)) }
                _handleFocusin(t) {
                    const { target: e } = t, { trapElement: n } = this._config;
                    if (e === document || e === n || n.contains(e)) return;
                    const i = Te.focusableChildren(n);
                    0 === i.length ? n.focus() : this._lastTabNavDirection === Cn ? i[i.length - 1].focus() : i[0].focus()
                }
                _handleKeydown(t) { "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Cn : "forward") }
                _getConfig(t) { return t = {...xn, ... "object" == typeof t ? t : {} }, Ht("focustrap", t, En), t }
            }
            const kn = "modal",
                On = "Escape",
                Sn = { backdrop: !0, keyboard: !0, focus: !0 },
                Dn = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" },
                Ln = "hidden.bs.modal",
                Nn = "show.bs.modal",
                Mn = "resize.bs.modal",
                Pn = "click.dismiss.bs.modal",
                In = "keydown.dismiss.bs.modal",
                jn = "mousedown.dismiss.bs.modal",
                Rn = "modal-open",
                zn = "show",
                Hn = "modal-static";
            class $n extends me {
                constructor(t, e) { super(t), this._config = this._getConfig(e), this._dialog = Te.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new mn }
                static get Default() { return Sn }
                static get NAME() { return kn }
                toggle(t) { return this._isShown ? this.hide() : this.show(t) }
                show(t) { this._isShown || this._isTransitioning || fe.trigger(this._element, Nn, { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Rn), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), fe.on(this._dialog, jn, (() => { fe.one(this._element, "mouseup.dismiss.bs.modal", (t => { t.target === this._element && (this._ignoreBackdropClick = !0) })) })), this._showBackdrop((() => this._showElement(t)))) }
                hide() {
                    if (!this._isShown || this._isTransitioning) return;
                    if (fe.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
                    this._isShown = !1;
                    const t = this._isAnimated();
                    t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(zn), fe.off(this._element, Pn), fe.off(this._dialog, jn), this._queueCallback((() => this._hideModal()), this._element, t)
                }
                dispose() {
                    [window, this._dialog].forEach((t => fe.off(t, ".bs.modal"))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
                }
                handleUpdate() { this._adjustDialog() }
                _initializeBackDrop() { return new wn({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() }) }
                _initializeFocusTrap() { return new An({ trapElement: this._element }) }
                _getConfig(t) { return t = {...Sn, ...Ee.getDataAttributes(this._element), ... "object" == typeof t ? t : {} }, Ht(kn, t, Dn), t }
                _showElement(t) {
                    const e = this._isAnimated(),
                        n = Te.findOne(".modal-body", this._dialog);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), e && Ft(this._element), this._element.classList.add(zn), this._queueCallback((() => { this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, fe.trigger(this._element, "shown.bs.modal", { relatedTarget: t }) }), this._dialog, e)
                }
                _setEscapeEvent() { this._isShown ? fe.on(this._element, In, (t => { this._config.keyboard && t.key === On ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== On || this._triggerBackdropTransition() })) : fe.off(this._element, In) }
                _setResizeEvent() { this._isShown ? fe.on(window, Mn, (() => this._adjustDialog())) : fe.off(window, Mn) }
                _hideModal() { this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => { document.body.classList.remove(Rn), this._resetAdjustments(), this._scrollBar.reset(), fe.trigger(this._element, Ln) })) }
                _showBackdrop(t) { fe.on(this._element, Pn, (t => { this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition()) })), this._backdrop.show(t) }
                _isAnimated() { return this._element.classList.contains("fade") }
                _triggerBackdropTransition() { if (fe.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return; const { classList: t, scrollHeight: e, style: n } = this._element, i = e > document.documentElement.clientHeight;!i && "hidden" === n.overflowY || t.contains(Hn) || (i || (n.overflowY = "hidden"), t.add(Hn), this._queueCallback((() => { t.remove(Hn), i || this._queueCallback((() => { n.overflowY = "" }), this._dialog) }), this._dialog), this._element.focus()) }
                _adjustDialog() {
                    const t = this._element.scrollHeight > document.documentElement.clientHeight,
                        e = this._scrollBar.getWidth(),
                        n = e > 0;
                    (!n && t && !Vt() || n && !t && Vt()) && (this._element.style.paddingLeft = `${e}px`), (n && !t && !Vt() || !n && t && Vt()) && (this._element.style.paddingRight = `${e}px`)
                }
                _resetAdjustments() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }
                static jQueryInterface(t, e) {
                    return this.each((function() {
                        const n = $n.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
                            n[t](e)
                        }
                    }))
                }
            }
            fe.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
                const e = It(this);
                ["A", "AREA"].includes(this.tagName) && t.preventDefault(), fe.one(e, Nn, (t => { t.defaultPrevented || fe.one(e, Ln, (() => { $t(this) && this.focus() })) }));
                const n = Te.findOne(".modal.show");
                n && $n.getInstance(n).hide(), $n.getOrCreateInstance(e).toggle(this)
            })), _e($n), Yt($n);
            const Bn = "offcanvas",
                qn = { backdrop: !0, keyboard: !0, scroll: !1 },
                Wn = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
                Fn = "show",
                Un = ".offcanvas.show",
                Xn = "hidden.bs.offcanvas";
            class Vn extends me {
                constructor(t, e) { super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners() }
                static get NAME() { return Bn }
                static get Default() { return qn }
                toggle(t) { return this._isShown ? this.hide() : this.show(t) }
                show(t) { this._isShown || fe.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new mn).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Fn), this._queueCallback((() => { this._config.scroll || this._focustrap.activate(), fe.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t }) }), this._element, !0)) }
                hide() { this._isShown && (fe.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove(Fn), this._backdrop.hide(), this._queueCallback((() => { this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new mn).reset(), fe.trigger(this._element, Xn) }), this._element, !0))) }
                dispose() { this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose() }
                _getConfig(t) { return t = {...qn, ...Ee.getDataAttributes(this._element), ... "object" == typeof t ? t : {} }, Ht(Bn, t, Wn), t }
                _initializeBackDrop() { return new wn({ className: "offcanvas-backdrop", isVisible: this._config.backdrop, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: () => this.hide() }) }
                _initializeFocusTrap() { return new An({ trapElement: this._element }) }
                _addEventListeners() { fe.on(this._element, "keydown.dismiss.bs.offcanvas", (t => { this._config.keyboard && "Escape" === t.key && this.hide() })) }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = Vn.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                            e[t](this)
                        }
                    }))
                }
            }
            fe.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
                const e = It(this);
                if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), Bt(this)) return;
                fe.one(e, Xn, (() => { $t(this) && this.focus() }));
                const n = Te.findOne(Un);
                n && n !== e && Vn.getInstance(n).hide(), Vn.getOrCreateInstance(e).toggle(this)
            })), fe.on(window, "load.bs.offcanvas.data-api", (() => Te.find(Un).forEach((t => Vn.getOrCreateInstance(t).show())))), _e(Vn), Yt(Vn);
            const Yn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
                Kn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
                Qn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
                Gn = (t, e) => {
                    const n = t.nodeName.toLowerCase();
                    if (e.includes(n)) return !Yn.has(n) || Boolean(Kn.test(t.nodeValue) || Qn.test(t.nodeValue));
                    const i = e.filter((t => t instanceof RegExp));
                    for (let t = 0, e = i.length; t < e; t++)
                        if (i[t].test(n)) return !0;
                    return !1
                };

            function Zn(t, e, n) {
                if (!t.length) return t;
                if (n && "function" == typeof n) return n(t);
                const i = (new window.DOMParser).parseFromString(t, "text/html"),
                    r = [].concat(...i.body.querySelectorAll("*"));
                for (let t = 0, n = r.length; t < n; t++) {
                    const n = r[t],
                        i = n.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) { n.remove(); continue }
                    const s = [].concat(...n.attributes),
                        o = [].concat(e["*"] || [], e[i] || []);
                    s.forEach((t => { Gn(t, o) || n.removeAttribute(t.nodeName) }))
                }
                return i.body.innerHTML
            }
            const Jn = "tooltip",
                ti = new Set(["sanitize", "allowList", "sanitizeFn"]),
                ei = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(array|string|function)", container: "(string|element|boolean)", fallbackPlacements: "array", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object", popperConfig: "(null|object|function)" },
                ni = { AUTO: "auto", TOP: "top", RIGHT: Vt() ? "left" : "right", BOTTOM: "bottom", LEFT: Vt() ? "right" : "left" },
                ii = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: [0, 0], container: !1, fallbackPlacements: ["top", "right", "bottom", "left"], boundary: "clippingParents", customClass: "", sanitize: !0, sanitizeFn: null, allowList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null },
                ri = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" },
                si = "fade",
                oi = "show",
                ai = "show",
                li = "out",
                ci = ".tooltip-inner",
                ui = ".modal",
                hi = "hide.bs.modal",
                di = "hover",
                fi = "focus";
            class pi extends me {
                constructor(t, e) {
                    if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                    super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
                }
                static get Default() { return ii }
                static get NAME() { return Jn }
                static get Event() { return ri }
                static get DefaultType() { return ei }
                enable() { this._isEnabled = !0 }
                disable() { this._isEnabled = !1 }
                toggleEnabled() { this._isEnabled = !this._isEnabled }
                toggle(t) {
                    if (this._isEnabled)
                        if (t) {
                            const e = this._initializeOnDelegatedTarget(t);
                            e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                        } else {
                            if (this.getTipElement().classList.contains(oi)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }
                dispose() { clearTimeout(this._timeout), fe.off(this._element.closest(ui), hi, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose() }
                show() {
                    if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                    if (!this.isWithContent() || !this._isEnabled) return;
                    const t = fe.trigger(this._element, this.constructor.Event.SHOW),
                        e = qt(this._element),
                        n = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
                    if (t.defaultPrevented || !n) return;
                    "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(ci).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
                    const i = this.getTipElement(),
                        r = (t => { do { t += Math.floor(1e6 * Math.random()) } while (document.getElementById(t)); return t })(this.constructor.NAME);
                    i.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this._config.animation && i.classList.add(si);
                    const s = "function" == typeof this._config.placement ? this._config.placement.call(this, i, this._element) : this._config.placement,
                        o = this._getAttachment(s);
                    this._addAttachmentClass(o);
                    const { container: a } = this._config;
                    ge.set(i, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(i), fe.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Dt(this._element, i, this._getPopperConfig(o)), i.classList.add(oi);
                    const l = this._resolvePossibleFunction(this._config.customClass);
                    l && i.classList.add(...l.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => { fe.on(t, "mouseover", Wt) }));
                    const c = this.tip.classList.contains(si);
                    this._queueCallback((() => {
                        const t = this._hoverState;
                        this._hoverState = null, fe.trigger(this._element, this.constructor.Event.SHOWN), t === li && this._leave(null, this)
                    }), this.tip, c)
                }
                hide() {
                    if (!this._popper) return;
                    const t = this.getTipElement();
                    if (fe.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
                    t.classList.remove(oi), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => fe.off(t, "mouseover", Wt))), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
                    const e = this.tip.classList.contains(si);
                    this._queueCallback((() => { this._isWithActiveTrigger() || (this._hoverState !== ai && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), fe.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper()) }), this.tip, e), this._hoverState = ""
                }
                update() { null !== this._popper && this._popper.update() }
                isWithContent() { return Boolean(this.getTitle()) }
                getTipElement() {
                    if (this.tip) return this.tip;
                    const t = document.createElement("div");
                    t.innerHTML = this._config.template;
                    const e = t.children[0];
                    return this.setContent(e), e.classList.remove(si, oi), this.tip = e, this.tip
                }
                setContent(t) { this._sanitizeAndSetContent(t, this.getTitle(), ci) }
                _sanitizeAndSetContent(t, e, n) {
                    const i = Te.findOne(n, t);
                    e || !i ? this.setElementContent(i, e) : i.remove()
                }
                setElementContent(t, e) { if (null !== t) return Rt(e) ? (e = zt(e), void(this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void(this._config.html ? (this._config.sanitize && (e = Zn(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e) }
                getTitle() { const t = this._element.getAttribute("data-bs-original-title") || this._config.title; return this._resolvePossibleFunction(t) }
                updateAttachment(t) { return "right" === t ? "end" : "left" === t ? "start" : t }
                _initializeOnDelegatedTarget(t, e) { return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig()) }
                _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t }
                _resolvePossibleFunction(t) { return "function" == typeof t ? t.call(this._element) : t }
                _getPopperConfig(t) { const e = { placement: t, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "onChange", enabled: !0, phase: "afterWrite", fn: t => this._handlePopperPlacementChange(t) }], onFirstUpdate: t => { t.options.placement !== t.placement && this._handlePopperPlacementChange(t) } }; return {...e, ... "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig } }
                _addAttachmentClass(t) { this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`) }
                _getAttachment(t) { return ni[t.toUpperCase()] }
                _setListeners() {
                    this._config.trigger.split(" ").forEach((t => {
                        if ("click" === t) fe.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t => this.toggle(t)));
                        else if ("manual" !== t) {
                            const e = t === di ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                                n = t === di ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                            fe.on(this._element, e, this._config.selector, (t => this._enter(t))), fe.on(this._element, n, this._config.selector, (t => this._leave(t)))
                        }
                    })), this._hideModalHandler = () => { this._element && this.hide() }, fe.on(this._element.closest(ui), hi, this._hideModalHandler), this._config.selector ? this._config = {...this._config, trigger: "manual", selector: "" } : this._fixTitle()
                }
                _fixTitle() {
                    const t = this._element.getAttribute("title"),
                        e = typeof this._element.getAttribute("data-bs-original-title");
                    (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
                }
                _enter(t, e) { e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? fi : di] = !0), e.getTipElement().classList.contains(oi) || e._hoverState === ai ? e._hoverState = ai : (clearTimeout(e._timeout), e._hoverState = ai, e._config.delay && e._config.delay.show ? e._timeout = setTimeout((() => { e._hoverState === ai && e.show() }), e._config.delay.show) : e.show()) }
                _leave(t, e) { e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? fi : di] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = li, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout((() => { e._hoverState === li && e.hide() }), e._config.delay.hide) : e.hide()) }
                _isWithActiveTrigger() {
                    for (const t in this._activeTrigger)
                        if (this._activeTrigger[t]) return !0;
                    return !1
                }
                _getConfig(t) { const e = Ee.getDataAttributes(this._element); return Object.keys(e).forEach((t => { ti.has(t) && delete e[t] })), (t = {...this.constructor.Default, ...e, ... "object" == typeof t && t ? t : {} }).container = !1 === t.container ? document.body : zt(t.container), "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Ht(Jn, t, this.constructor.DefaultType), t.sanitize && (t.template = Zn(t.template, t.allowList, t.sanitizeFn)), t }
                _getDelegateConfig() { const t = {}; for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]); return t }
                _cleanTipClass() {
                    const t = this.getTipElement(),
                        e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                        n = t.getAttribute("class").match(e);
                    null !== n && n.length > 0 && n.map((t => t.trim())).forEach((e => t.classList.remove(e)))
                }
                _getBasicClassPrefix() { return "bs-tooltip" }
                _handlePopperPlacementChange(t) {
                    const { state: e } = t;
                    e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
                }
                _disposePopper() { this._popper && (this._popper.destroy(), this._popper = null) }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = pi.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                            e[t]()
                        }
                    }))
                }
            }
            Yt(pi);
            const gi = {...pi.Default, placement: "right", offset: [0, 8], trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' },
                mi = {...pi.DefaultType, content: "(string|element|function)" },
                _i = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" };
            class vi extends pi {
                static get Default() { return gi }
                static get NAME() { return "popover" }
                static get Event() { return _i }
                static get DefaultType() { return mi }
                isWithContent() { return this.getTitle() || this._getContent() }
                setContent(t) { this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body") }
                _getContent() { return this._resolvePossibleFunction(this._config.content) }
                _getBasicClassPrefix() { return "bs-popover" }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = vi.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                            e[t]()
                        }
                    }))
                }
            }
            Yt(vi);
            const yi = "scrollspy",
                bi = { offset: 10, method: "auto", target: "" },
                wi = { offset: "number", method: "string", target: "(string|element)" },
                xi = "active",
                Ei = ".nav-link, .list-group-item, .dropdown-item",
                Ti = "position";
            class Ci extends me {
                constructor(t, e) { super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, fe.on(this._scrollElement, "scroll.bs.scrollspy", (() => this._process())), this.refresh(), this._process() }
                static get Default() { return bi }
                static get NAME() { return yi }
                refresh() {
                    const t = this._scrollElement === this._scrollElement.window ? "offset" : Ti,
                        e = "auto" === this._config.method ? t : this._config.method,
                        n = e === Ti ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Te.find(Ei, this._config.target).map((t => {
                        const i = Pt(t),
                            r = i ? Te.findOne(i) : null;
                        if (r) { const t = r.getBoundingClientRect(); if (t.width || t.height) return [Ee[e](r).top + n, i] }
                        return null
                    })).filter((t => t)).sort(((t, e) => t[0] - e[0])).forEach((t => { this._offsets.push(t[0]), this._targets.push(t[1]) }))
                }
                dispose() { fe.off(this._scrollElement, ".bs.scrollspy"), super.dispose() }
                _getConfig(t) { return (t = {...bi, ...Ee.getDataAttributes(this._element), ... "object" == typeof t && t ? t : {} }).target = zt(t.target) || document.documentElement, Ht(yi, t, wi), t }
                _getScrollTop() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }
                _getScrollHeight() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }
                _getOffsetHeight() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }
                _process() {
                    const t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(), t >= n) {
                        const t = this._targets[this._targets.length - 1];
                        this._activeTarget !== t && this._activate(t)
                    } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e]) }
                }
                _activate(t) {
                    this._activeTarget = t, this._clear();
                    const e = Ei.split(",").map((e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`)),
                        n = Te.findOne(e.join(","), this._config.target);
                    n.classList.add(xi), n.classList.contains("dropdown-item") ? Te.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add(xi) : Te.parents(n, ".nav, .list-group").forEach((t => { Te.prev(t, ".nav-link, .list-group-item").forEach((t => t.classList.add(xi))), Te.prev(t, ".nav-item").forEach((t => { Te.children(t, ".nav-link").forEach((t => t.classList.add(xi))) })) })), fe.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: t })
                }
                _clear() { Te.find(Ei, this._config.target).filter((t => t.classList.contains(xi))).forEach((t => t.classList.remove(xi))) }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = Ci.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                            e[t]()
                        }
                    }))
                }
            }
            fe.on(window, "load.bs.scrollspy.data-api", (() => { Te.find('[data-bs-spy="scroll"]').forEach((t => new Ci(t))) })), Yt(Ci);
            const Ai = "active",
                ki = "fade",
                Oi = "show",
                Si = ".active",
                Di = ":scope > li > .active";
            class Li extends me {
                static get NAME() { return "tab" }
                show() {
                    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Ai)) return;
                    let t;
                    const e = It(this._element),
                        n = this._element.closest(".nav, .list-group");
                    if (n) {
                        const e = "UL" === n.nodeName || "OL" === n.nodeName ? Di : Si;
                        t = Te.find(e, n), t = t[t.length - 1]
                    }
                    const i = t ? fe.trigger(t, "hide.bs.tab", { relatedTarget: this._element }) : null;
                    if (fe.trigger(this._element, "show.bs.tab", { relatedTarget: t }).defaultPrevented || null !== i && i.defaultPrevented) return;
                    this._activate(this._element, n);
                    const r = () => { fe.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }), fe.trigger(this._element, "shown.bs.tab", { relatedTarget: t }) };
                    e ? this._activate(e, e.parentNode, r) : r()
                }
                _activate(t, e, n) {
                    const i = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? Te.children(e, Si) : Te.find(Di, e))[0],
                        r = n && i && i.classList.contains(ki),
                        s = () => this._transitionComplete(t, i, n);
                    i && r ? (i.classList.remove(Oi), this._queueCallback(s, t, !0)) : s()
                }
                _transitionComplete(t, e, n) {
                    if (e) {
                        e.classList.remove(Ai);
                        const t = Te.findOne(":scope > .dropdown-menu .active", e.parentNode);
                        t && t.classList.remove(Ai), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                    }
                    t.classList.add(Ai), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Ft(t), t.classList.contains(ki) && t.classList.add(Oi);
                    let i = t.parentNode;
                    if (i && "LI" === i.nodeName && (i = i.parentNode), i && i.classList.contains("dropdown-menu")) {
                        const e = t.closest(".dropdown");
                        e && Te.find(".dropdown-toggle", e).forEach((t => t.classList.add(Ai))), t.setAttribute("aria-expanded", !0)
                    }
                    n && n()
                }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = Li.getOrCreateInstance(this);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                            e[t]()
                        }
                    }))
                }
            }
            fe.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
                ["A", "AREA"].includes(this.tagName) && t.preventDefault(), Bt(this) || Li.getOrCreateInstance(this).show()
            })), Yt(Li);
            const Ni = "toast",
                Mi = "hide",
                Pi = "show",
                Ii = "showing",
                ji = { animation: "boolean", autohide: "boolean", delay: "number" },
                Ri = { animation: !0, autohide: !0, delay: 5e3 };
            class zi extends me {
                constructor(t, e) { super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners() }
                static get DefaultType() { return ji }
                static get Default() { return Ri }
                static get NAME() { return Ni }
                show() { fe.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Mi), Ft(this._element), this._element.classList.add(Pi), this._element.classList.add(Ii), this._queueCallback((() => { this._element.classList.remove(Ii), fe.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide() }), this._element, this._config.animation)) }
                hide() { this._element.classList.contains(Pi) && (fe.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(Ii), this._queueCallback((() => { this._element.classList.add(Mi), this._element.classList.remove(Ii), this._element.classList.remove(Pi), fe.trigger(this._element, "hidden.bs.toast") }), this._element, this._config.animation))) }
                dispose() { this._clearTimeout(), this._element.classList.contains(Pi) && this._element.classList.remove(Pi), super.dispose() }
                _getConfig(t) { return t = {...Ri, ...Ee.getDataAttributes(this._element), ... "object" == typeof t && t ? t : {} }, Ht(Ni, t, this.constructor.DefaultType), t }
                _maybeScheduleHide() { this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => { this.hide() }), this._config.delay))) }
                _onInteraction(t, e) {
                    switch (t.type) {
                        case "mouseover":
                        case "mouseout":
                            this._hasMouseInteraction = e;
                            break;
                        case "focusin":
                        case "focusout":
                            this._hasKeyboardInteraction = e
                    }
                    if (e) return void this._clearTimeout();
                    const n = t.relatedTarget;
                    this._element === n || this._element.contains(n) || this._maybeScheduleHide()
                }
                _setListeners() { fe.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))), fe.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))), fe.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))), fe.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1))) }
                _clearTimeout() { clearTimeout(this._timeout), this._timeout = null }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = zi.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                            e[t](this)
                        }
                    }))
                }
            }
            _e(zi), Yt(zi)
        },
        371: (t, e, n) => {
            "use strict";

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            n.d(e, { Z: () => $e });
            var r, s, o, a, l, c, u, h, d, f, p, g = function() { return r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r },
                m = 1,
                _ = [],
                v = [],
                y = [],
                b = Date.now,
                w = function(t, e) { return e },
                x = function(t, e) { return ~y.indexOf(t) && y[y.indexOf(t) + 1][e] },
                E = function(t) { return !!~f.indexOf(t) },
                T = function(t, e, n, i) { return t.addEventListener(e, n, { passive: !i }) },
                C = function(t, e, n) { return t.removeEventListener(e, n) },
                A = function() { return p && p.isPressed || v.cache++ },
                k = function(t) { return function(e) { return e || 0 === e ? (m && (o.history.scrollRestoration = "manual"), t(e), t.v = e, t.c = v.cache, p && p.isPressed && w("ss", e)) : (v.cache !== t.c || w("ref")) && (t.c = v.cache, t.v = t()), t.v } },
                O = { s: "scrollLeft", p: "left", p2: "Left", os: "right", os2: "Right", d: "width", d2: "Width", a: "x", sc: k((function(t) { return arguments.length ? o.scrollTo(t, S.sc()) : o.pageXOffset || a.scrollLeft || l.scrollLeft || c.scrollLeft || 0 })) },
                S = { s: "scrollTop", p: "top", p2: "Top", os: "bottom", os2: "Bottom", d: "height", d2: "Height", a: "y", op: O, sc: k((function(t) { return arguments.length ? o.scrollTo(O.sc(), t) : o.pageYOffset || a.scrollTop || l.scrollTop || c.scrollTop || 0 })) },
                D = function(t) { return r.utils.toArray(t)[0] || ("string" == typeof t && !1 !== r.config().nullTargetWarn ? console.warn("Element not found:", t) : null) },
                L = function(t, e) {
                    var n = e.s,
                        i = e.sc,
                        r = v.indexOf(t),
                        s = i === S.sc ? 1 : 2;
                    return !~r && (r = v.push(t) - 1), v[r + s] || (v[r + s] = x(t, n) || (E(t) ? i : function(e) { return arguments.length ? t[n] = e : t[n] }))
                },
                N = function(t, e, n) {
                    var i = t,
                        r = t,
                        s = b(),
                        o = s,
                        a = e || 50,
                        l = Math.max(500, 3 * a),
                        c = function(t, e) {
                            var l = b();
                            e || l - s > a ? (r = i, i = t, o = s, s = l) : n ? i += t : i = r + (t - r) / (l - o) * (s - o)
                        };
                    return {
                        update: c,
                        reset: function() { r = i = n ? 0 : i, o = s = 0 },
                        getVelocity: function(t) {
                            var e = o,
                                a = r,
                                u = b();
                            return (t || 0 === t) && t !== i && c(t), s === o || u - o > l ? 0 : (i + (n ? a : -a)) / ((n ? u : s) - e) * 1e3
                        }
                    }
                },
                M = function(t, e) { return e && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t },
                P = function(t) {
                    var e = Math.max.apply(Math, t),
                        n = Math.min.apply(Math, t);
                    return Math.abs(e) >= Math.abs(n) ? e : n
                },
                I = function(t) { return (r = t || g()) && !s && "undefined" != typeof document && document.body && (o = window, a = document, l = a.documentElement, c = a.body, f = [o, a, l, c], r.utils.clamp, h = "onpointerenter" in c ? "pointer" : "mouse", u = j.isTouch = o.matchMedia && o.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in o || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, setTimeout((function() { return m = 0 }), 500), s = 1), s };
            O.op = S, v.cache = 0;
            var j = function() {
                function t(t) { this.init(t) }
                var e, n;
                return t.prototype.init = function(t) {
                    var e, n, i, f;
                    s || I(r) || console.warn("Please gsap.registerPlugin(Observer)"), d || (d = r.core.globals().ScrollTrigger) && d.core && (e = d.core, n = e.bridge || {}, i = e._scrollers, f = e._proxies, i.push.apply(i, v), f.push.apply(f, y), v = i, y = f, w = function(t, e) { return n[t](e) });
                    var g = t.tolerance,
                        m = t.dragMinimum,
                        b = t.type,
                        x = t.target,
                        k = t.lineHeight,
                        j = t.debounce,
                        R = t.preventDefault,
                        z = t.onStop,
                        H = t.onStopDelay,
                        $ = t.ignore,
                        B = t.wheelSpeed,
                        q = t.event,
                        W = t.onDragStart,
                        F = t.onDragEnd,
                        U = t.onDrag,
                        X = t.onPress,
                        V = t.onRelease,
                        Y = t.onRight,
                        K = t.onLeft,
                        Q = t.onUp,
                        G = t.onDown,
                        Z = t.onChangeX,
                        J = t.onChangeY,
                        tt = t.onChange,
                        et = t.onToggleX,
                        nt = t.onToggleY,
                        it = t.onHover,
                        rt = t.onHoverEnd,
                        st = t.onMove,
                        ot = t.ignoreCheck,
                        at = t.isNormalizer,
                        lt = t.onGestureStart,
                        ct = t.onGestureEnd,
                        ut = t.onWheel,
                        ht = t.onEnable,
                        dt = t.onDisable,
                        ft = t.onClick,
                        pt = t.scrollSpeed;
                    this.target = x = D(x) || l, this.vars = t, $ && ($ = r.utils.toArray($)), g = g || 0, m = m || 0, B = B || 1, pt = pt || 1, b = b || "wheel,touch,pointer", j = !1 !== j, k || (k = parseFloat(o.getComputedStyle(c).lineHeight) || 22);
                    var gt, mt, _t, vt, yt, bt = this,
                        wt = 0,
                        xt = 0,
                        Et = L(x, O),
                        Tt = L(x, S),
                        Ct = Et(),
                        At = Tt(),
                        kt = ("ontouchstart" in l ? "touchstart,touchmove,touchcancel,touchend" : b.indexOf("pointer") >= 0 && !("onpointerdown" in l) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(","),
                        Ot = ~b.indexOf("touch") && !~b.indexOf("pointer") && "pointerdown" === kt[0],
                        St = E(x),
                        Dt = x.ownerDocument || a,
                        Lt = [0, 0, 0],
                        Nt = [0, 0, 0],
                        Mt = function(t, e) { return (bt.event = t) && $ && ~$.indexOf(t.target) || e && Ot && "touch" !== t.pointerType || ot && ot(t) },
                        Pt = function() {
                            var t = bt.deltaX = P(Lt),
                                e = bt.deltaY = P(Nt),
                                n = Math.abs(t) >= g,
                                i = Math.abs(e) >= g;
                            tt && (n || i) && tt(bt, t, e, Lt, Nt), n && (Y && bt.deltaX > 0 && Y(bt), K && bt.deltaX < 0 && K(bt), Z && Z(bt), et && bt.deltaX < 0 != wt < 0 && et(bt), wt = bt.deltaX, Lt[0] = Lt[1] = Lt[2] = 0), i && (G && bt.deltaY > 0 && G(bt), Q && bt.deltaY < 0 && Q(bt), J && J(bt), nt && bt.deltaY < 0 != xt < 0 && nt(bt), xt = bt.deltaY, Nt[0] = Nt[1] = Nt[2] = 0), vt && (st(bt), vt = !1), _t && (U(bt), _t = !1), yt && (ut(bt), yt = !1), gt = 0
                        },
                        It = function(t, e, n) { Lt[n] += t, Nt[n] += e, bt._vx.update(t, 2 === n), bt._vy.update(e, 2 === n), j ? gt || (gt = requestAnimationFrame(Pt)) : Pt() },
                        jt = function(t) {
                            if (!Mt(t, 1)) {
                                var e = (t = M(t, R)).clientX,
                                    n = t.clientY,
                                    i = e - bt.x,
                                    r = n - bt.y,
                                    s = bt.isDragging;
                                bt.x = e, bt.y = n, (s || Math.abs(bt.startX - e) >= m || Math.abs(bt.startY - n) >= m) && (U && (_t = !0), s || (bt.isDragging = !0), It(i, r, 2), s || W && W(bt))
                            }
                        },
                        Rt = bt.onPress = function(t) { Mt(t, 1) || (mt.pause(), bt.isPressed = !0, t = M(t, R), wt = xt = 0, bt.startX = bt.x = t.clientX, bt.startY = bt.y = t.clientY, bt._vx.reset(), bt._vy.reset(), T(at ? x : Dt, kt[1], jt, R), bt.deltaX = bt.deltaY = 0, X && X(bt)) },
                        zt = function(t) {
                            if (!Mt(t, 1)) {
                                C(at ? x : Dt, kt[1], jt);
                                var e = bt.isDragging;
                                e || (bt._vx.reset(), bt._vy.reset()), bt.isDragging = bt.isGesturing = bt.isPressed = !1, z && !at && mt.restart(!0), F && e && F(bt), V && V(bt, e)
                            }
                        },
                        Ht = function(t) { return t.touches && t.touches.length > 1 && (bt.isGesturing = !0) && lt(t, bt.isDragging) },
                        $t = function() { return (bt.isGesturing = !1) || ct(bt) },
                        Bt = function(t) {
                            if (!Mt(t)) {
                                var e = Et(),
                                    n = Tt();
                                It((e - Ct) * pt, (n - At) * pt, 1), Ct = e, At = n, z && mt.restart(!0)
                            }
                        },
                        qt = function(t) {
                            if (!Mt(t)) {
                                t = M(t, R), ut && (yt = !0);
                                var e = (1 === t.deltaMode ? k : 2 === t.deltaMode ? o.innerHeight : 1) * B;
                                It(t.deltaX * e, t.deltaY * e, 0), z && !at && mt.restart(!0)
                            }
                        },
                        Wt = function(t) {
                            if (!Mt(t)) {
                                var e = t.clientX,
                                    n = t.clientY,
                                    i = e - bt.x,
                                    r = n - bt.y;
                                bt.x = e, bt.y = n, st && (vt = !0), (i || r) && It(i, r, 2)
                            }
                        },
                        Ft = function(t) { bt.event = t, it(bt) },
                        Ut = function(t) { bt.event = t, rt(bt) },
                        Xt = function(t) { return Mt(t) || M(t, R) && ft(bt) };
                    mt = bt._dc = r.delayedCall(H || .25, (function() { bt._vx.reset(), bt._vy.reset(), mt.pause(), z && z(bt) })).pause(), bt.deltaX = bt.deltaY = 0, bt._vx = N(0, 50, !0), bt._vy = N(0, 50, !0), bt.scrollX = Et, bt.scrollY = Tt, bt.isDragging = bt.isGesturing = bt.isPressed = !1, bt.enable = function(t) { return bt.isEnabled || (T(St ? Dt : x, "scroll", A), b.indexOf("scroll") >= 0 && T(St ? Dt : x, "scroll", Bt, R), b.indexOf("wheel") >= 0 && T(x, "wheel", qt, R), (b.indexOf("touch") >= 0 && u || b.indexOf("pointer") >= 0) && (T(x, kt[0], Rt, R), T(Dt, kt[2], zt), T(Dt, kt[3], zt), ft && T(x, "click", Xt), lt && T(Dt, "gesturestart", Ht), ct && T(Dt, "gestureend", $t), it && T(x, h + "enter", Ft), rt && T(x, h + "leave", Ut), st && T(x, h + "move", Wt)), bt.isEnabled = !0, t && t.type && Rt(t), ht && ht(bt)), bt }, bt.disable = function() { bt.isEnabled && (_.filter((function(t) { return t !== bt && E(t.target) })).length || C(St ? Dt : x, "scroll", A), C(St ? Dt : x, "scroll", Bt), C(x, "wheel", qt), C(x, kt[0], Rt), C(Dt, kt[2], zt), C(Dt, kt[3], zt), C(x, "click", Xt), C(Dt, "gesturestart", Ht), C(Dt, "gestureend", $t), C(x, h + "enter", Ft), C(x, h + "leave", Ut), C(x, h + "move", Wt), bt.isEnabled = !1, dt && dt(bt)) }, bt.kill = function() {
                        bt.disable();
                        var t = _.indexOf(bt);
                        t >= 0 && _.splice(t, 1), p === bt && (p = 0)
                    }, _.push(bt), at && (p = bt), bt.enable(q)
                }, e = t, (n = [{ key: "velocityX", get: function() { return this._vx.getVelocity() } }, { key: "velocityY", get: function() { return this._vy.getVelocity() } }]) && i(e.prototype, n), t
            }();
            j.version = "3.10.2", j.create = function(t) { return new j(t) }, j.register = I, j.getAll = function() { return _.slice() }, j.getById = function(t) { return _.filter((function(e) { return e.vars.id === t }))[0] }, g() && r.registerPlugin(j);
            var R, z, H, $, B, q, W, F, U, X, V, Y, K, Q, G, Z, J, tt, et, nt, it, rt, st, ot, at, lt, ct, ut, ht, dt, ft, pt, gt = 1,
                mt = Date.now,
                _t = mt(),
                vt = 0,
                yt = 0,
                bt = function() { return Q = 1 },
                wt = function() { return Q = 0 },
                xt = function(t) { return t },
                Et = function(t) { return Math.round(1e5 * t) / 1e5 || 0 },
                Tt = function() { return "undefined" != typeof window },
                Ct = function() { return R || Tt() && (R = window.gsap) && R.registerPlugin && R },
                At = function(t) { return !!~W.indexOf(t) },
                kt = function(t) { return x(t, "getBoundingClientRect") || (At(t) ? function() { return Ie.width = H.innerWidth, Ie.height = H.innerHeight, Ie } : function() { return Kt(t) }) },
                Ot = function(t, e) {
                    var n = e.s,
                        i = e.d2,
                        r = e.d,
                        s = e.a;
                    return (n = "scroll" + i) && (s = x(t, n)) ? s() - kt(t)()[r] : At(t) ? (B[n] || q[n]) - (H["inner" + i] || B["client" + i] || q["client" + i]) : t[n] - t["offset" + i]
                },
                St = function(t, e) { for (var n = 0; n < et.length; n += 3)(!e || ~e.indexOf(et[n + 1])) && t(et[n], et[n + 1], et[n + 2]) },
                Dt = function(t) { return "string" == typeof t },
                Lt = function(t) { return "function" == typeof t },
                Nt = function(t) { return "number" == typeof t },
                Mt = function(t) { return "object" == typeof t },
                Pt = function(t) { return Lt(t) && t() },
                It = function(t, e) {
                    return function() {
                        var n = Pt(t),
                            i = Pt(e);
                        return function() { Pt(n), Pt(i) }
                    }
                },
                jt = function(t, e, n) { return t && t.progress(e ? 0 : 1) && n && t.pause() },
                Rt = function(t, e) {
                    if (t.enabled) {
                        var n = e(t);
                        n && n.totalTime && (t.callbackAnimation = n)
                    }
                },
                zt = Math.abs,
                Ht = "right",
                $t = "bottom",
                Bt = "width",
                qt = "height",
                Wt = "padding",
                Ft = "margin",
                Ut = "Width",
                Xt = "px",
                Vt = function(t) { return H.getComputedStyle(t) },
                Yt = function(t, e) { for (var n in e) n in t || (t[n] = e[n]); return t },
                Kt = function(t, e) {
                    var n = e && "matrix(1, 0, 0, 1, 0, 0)" !== Vt(t)[G] && R.to(t, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1),
                        i = t.getBoundingClientRect();
                    return n && n.progress(0).kill(), i
                },
                Qt = function(t, e) { var n = e.d2; return t["offset" + n] || t["client" + n] || 0 },
                Gt = function(t) {
                    var e, n = [],
                        i = t.labels,
                        r = t.duration();
                    for (e in i) n.push(i[e] / r);
                    return n
                },
                Zt = function(t) {
                    var e = R.utils.snap(t),
                        n = Array.isArray(t) && t.slice(0).sort((function(t, e) { return t - e }));
                    return n ? function(t, i, r) {
                        var s;
                        if (void 0 === r && (r = .001), !i) return e(t);
                        if (i > 0) {
                            for (t -= r, s = 0; s < n.length; s++)
                                if (n[s] >= t) return n[s];
                            return n[s - 1]
                        }
                        for (s = n.length, t += r; s--;)
                            if (n[s] <= t) return n[s];
                        return n[0]
                    } : function(n, i, r) { void 0 === r && (r = .001); var s = e(n); return !i || Math.abs(s - n) < r || s - n < 0 == i < 0 ? s : e(i < 0 ? n - t : n + t) }
                },
                Jt = function(t, e, n, i) { return n.split(",").forEach((function(n) { return t(e, n, i) })) },
                te = function(t, e, n, i) { return t.addEventListener(e, n, { passive: !i }) },
                ee = function(t, e, n) { return t.removeEventListener(e, n) },
                ne = function(t, e, n) { return n && n.wheelHandler && t(e, "wheel", n) },
                ie = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" },
                re = { toggleActions: "play", anticipatePin: 0 },
                se = { top: 0, left: 0, center: .5, bottom: 1, right: 1 },
                oe = function(t, e) {
                    if (Dt(t)) {
                        var n = t.indexOf("="),
                            i = ~n ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
                        ~n && (t.indexOf("%") > n && (i *= e / 100), t = t.substr(0, n - 1)), t = i + (t in se ? se[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
                    }
                    return t
                },
                ae = function(t, e, n, i, r, s, o, a) {
                    var l = r.startColor,
                        c = r.endColor,
                        u = r.fontSize,
                        h = r.indent,
                        d = r.fontWeight,
                        f = $.createElement("div"),
                        p = At(n) || "fixed" === x(n, "pinType"),
                        g = -1 !== t.indexOf("scroller"),
                        m = p ? q : n,
                        _ = -1 !== t.indexOf("start"),
                        v = _ ? l : c,
                        y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                    return y += "position:" + ((g || a) && p ? "fixed;" : "absolute;"), (g || a || !p) && (y += (i === S ? Ht : $t) + ":" + (s + parseFloat(h)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), f._isStart = _, f.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), f.style.cssText = y, f.innerText = e || 0 === e ? t + "-" + e : t, m.children[0] ? m.insertBefore(f, m.children[0]) : m.appendChild(f), f._offset = f["offset" + i.op.d2], le(f, 0, i, _), f
                },
                le = function(t, e, n, i) {
                    var r = { display: "block" },
                        s = n[i ? "os2" : "p2"],
                        o = n[i ? "p2" : "os2"];
                    t._isFlipped = i, r[n.a + "Percent"] = i ? -100 : 0, r[n.a] = i ? "1px" : 0, r["border" + s + Ut] = 1, r["border" + o + Ut] = 0, r[n.p] = e + "px", R.set(t, r)
                },
                ce = [],
                ue = {},
                he = function() { return mt() - vt > 34 && Oe() },
                de = function() { st && st.isPressed || (v.cache++, ut || (ut = requestAnimationFrame(Oe)), vt || ye("scrollStart"), vt = mt()) },
                fe = function() { v.cache++, !K && !rt && !$.fullscreenElement && (!ot || lt !== H.innerWidth || Math.abs(H.innerHeight - at) > .25 * H.innerHeight) && F.restart(!0) },
                pe = {},
                ge = [],
                me = [],
                _e = function(t) {
                    var e, n = R.ticker.frame,
                        i = [],
                        r = 0;
                    if (dt !== n || gt) {
                        for (xe(); r < me.length; r += 4)(e = H.matchMedia(me[r]).matches) !== me[r + 3] && (me[r + 3] = e, e ? i.push(r) : xe(1, me[r]) || Lt(me[r + 2]) && me[r + 2]());
                        for (we(), r = 0; r < i.length; r++) e = i[r], ht = me[e], me[e + 2] = me[e + 1](t);
                        ht = 0, z && Ce(0, 1), dt = n, ye("matchMedia")
                    }
                },
                ve = function t() { return ee($e, "scrollEnd", t) || Ce(!0) },
                ye = function(t) { return pe[t] && pe[t].map((function(t) { return t() })) || ge },
                be = [],
                we = function(t) { for (var e = 0; e < be.length; e += 5) t && be[e + 4] !== t || (be[e].style.cssText = be[e + 1], be[e].getBBox && be[e].setAttribute("transform", be[e + 2] || ""), be[e + 3].uncache = 1) },
                xe = function(t, e) {
                    var n;
                    for (Z = 0; Z < ce.length; Z++) n = ce[Z], e && n.media !== e || (t ? n.kill(1) : n.revert());
                    e && we(e), e || ye("revert")
                },
                Ee = function() { return v.cache++ && v.forEach((function(t) { return "function" == typeof t && (t.rec = 0) })) },
                Te = 0,
                Ce = function(t, e) {
                    if (!vt || t) {
                        ft = !0;
                        var n = ye("refreshInit");
                        nt && $e.sort(), e || xe(), ce.slice(0).forEach((function(t) { return t.refresh() })), ce.forEach((function(t) { return "max" === t.vars.end && t.setPositions(t.start, Ot(t.scroller, t._dir)) })), n.forEach((function(t) { return t && t.render && t.render(-1) })), Ee(), F.pause(), Te++, ft = !1, ye("refresh")
                    } else te($e, "scrollEnd", ve)
                },
                Ae = 0,
                ke = 1,
                Oe = function() {
                    if (!ft) {
                        pt && pt.update(0), $e.isUpdating = !0;
                        var t = ce.length,
                            e = mt(),
                            n = e - _t >= 50,
                            i = t && ce[0].scroll();
                        if (ke = Ae > i ? -1 : 1, Ae = i, n && (vt && !Q && e - vt > 200 && (vt = 0, ye("scrollEnd")), V = _t, _t = e), ke < 0) {
                            for (Z = t; Z-- > 0;) ce[Z] && ce[Z].update(0, n);
                            ke = 1
                        } else
                            for (Z = 0; Z < t; Z++) ce[Z] && ce[Z].update(0, n);
                        $e.isUpdating = !1
                    }
                    ut = 0
                },
                Se = ["left", "top", $t, Ht, "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
                De = Se.concat([Bt, qt, "boxSizing", "maxWidth", "maxHeight", "position", Ft, Wt, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]),
                Le = function(t, e, n, i) {
                    if (t.parentNode !== e) {
                        for (var r, s = Se.length, o = e.style, a = t.style; s--;) o[r = Se[s]] = n[r];
                        o.position = "absolute" === n.position ? "absolute" : "relative", "inline" === n.display && (o.display = "inline-block"), a.bottom = a.right = o.flexBasis = "auto", o.overflow = "visible", o.boxSizing = "border-box", o.width = Qt(t, O) + Xt, o.height = Qt(t, S) + Xt, o.padding = a.margin = a.top = a.left = "0", Me(i), a.width = a.maxWidth = n.width, a.height = a.maxHeight = n.height, a.padding = n.padding, t.parentNode.insertBefore(e, t), e.appendChild(t)
                    }
                },
                Ne = /([A-Z])/g,
                Me = function(t) {
                    if (t) {
                        var e, n, i = t.t.style,
                            r = t.length,
                            s = 0;
                        for ((t.t._gsap || R.core.getCache(t.t)).uncache = 1; s < r; s += 2) n = t[s + 1], e = t[s], n ? i[e] = n : i[e] && i.removeProperty(e.replace(Ne, "-$1").toLowerCase())
                    }
                },
                Pe = function(t) { for (var e = De.length, n = t.style, i = [], r = 0; r < e; r++) i.push(De[r], n[De[r]]); return i.t = t, i },
                Ie = { left: 0, top: 0 },
                je = function(t, e, n, i, r, s, o, a, l, c, u, h, d) {
                    Lt(t) && (t = t(a)), Dt(t) && "max" === t.substr(0, 3) && (t = h + ("=" === t.charAt(4) ? oe("0" + t.substr(3), n) : 0));
                    var f, p, g, m = d ? d.time() : 0;
                    if (d && d.seek(0), Nt(t)) o && le(o, n, i, !0);
                    else {
                        Lt(e) && (e = e(a));
                        var _, v, y, b, w = t.split(" ");
                        g = D(e) || q, (_ = Kt(g) || {}) && (_.left || _.top) || "none" !== Vt(g).display || (b = g.style.display, g.style.display = "block", _ = Kt(g), b ? g.style.display = b : g.style.removeProperty("display")), v = oe(w[0], _[i.d]), y = oe(w[1] || "0", n), t = _[i.p] - l[i.p] - c + v + r - y, o && le(o, y, i, n - y < 20 || o._isStart && y > 20), n -= n - y
                    }
                    if (s) {
                        var x = t + n,
                            E = s._isStart;
                        f = "scroll" + i.d2, le(s, x, i, E && x > 20 || !E && (u ? Math.max(q[f], B[f]) : s.parentNode[f]) <= x + 1), u && (l = Kt(o), u && (s.style[i.op.p] = l[i.op.p] - i.op.m - s._offset + Xt))
                    }
                    return d && g && (f = Kt(g), d.seek(h), p = Kt(g), d._caScrollDist = f[i.p] - p[i.p], t = t / d._caScrollDist * h), d && d.seek(m), d ? t : Math.round(t)
                },
                Re = /(webkit|moz|length|cssText|inset)/i,
                ze = function(t, e, n, i) {
                    if (t.parentNode !== e) {
                        var r, s, o = t.style;
                        if (e === q) {
                            for (r in t._stOrig = o.cssText, s = Vt(t)) + r || Re.test(r) || !s[r] || "string" != typeof o[r] || "0" === r || (o[r] = s[r]);
                            o.top = n, o.left = i
                        } else o.cssText = t._stOrig;
                        R.core.getCache(t).uncache = 1, e.appendChild(t)
                    }
                },
                He = function(t, e) {
                    var n, i, r = L(t, e),
                        s = "_scroll" + e.p2,
                        o = function e(o, a, l, c, u) {
                            var h = e.tween,
                                d = a.onComplete,
                                f = {};
                            return l = l || r(), u = c && u || 0, c = c || o - l, h && h.kill(), n = Math.round(l), a[s] = o, a.modifiers = f, f[s] = function(t) { return (t = Et(r())) !== n && t !== i && Math.abs(t - n) > 2 && Math.abs(t - i) > 2 ? (h.kill(), e.tween = 0) : t = l + c * h.ratio + u * h.ratio * h.ratio, i = n, n = Et(t) }, a.onComplete = function() { e.tween = 0, d && d.call(h) }, h = e.tween = R.to(t, a)
                        };
                    return t[s] = r, r.wheelHandler = function() { return o.tween && o.tween.kill() && (o.tween = 0) }, te(t, "wheel", r.wheelHandler), o
                },
                $e = function() {
                    function t(e, n) { z || t.register(R) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, n) }
                    return t.prototype.init = function(e, n) {
                        if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), yt) {
                            var i, r, s, o, a, l, c, u, h, d, f, p, g, m, _, v, b, w, E, T, C, A, k, N, M, P, I, j, z, W, F, Y, G, J, tt, et, rt, st, ot, at, lt, ut = e = Yt(Dt(e) || Nt(e) || e.nodeType ? { trigger: e } : e, re),
                                dt = ut.onUpdate,
                                _t = ut.toggleClass,
                                bt = ut.id,
                                wt = ut.onToggle,
                                Tt = ut.onRefresh,
                                Ct = ut.scrub,
                                St = ut.trigger,
                                Pt = ut.pin,
                                It = ut.pinSpacing,
                                Ht = ut.invalidateOnRefresh,
                                $t = ut.anticipatePin,
                                Bt = ut.onScrubComplete,
                                qt = ut.onSnapComplete,
                                Jt = ut.once,
                                ne = ut.snap,
                                se = ut.pinReparent,
                                le = ut.pinSpacer,
                                he = ut.containerAnimation,
                                pe = ut.fastScrollEnd,
                                ge = ut.preventOverlaps,
                                me = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? O : S,
                                _e = !Ct && 0 !== Ct,
                                ye = D(e.scroller || H),
                                be = R.core.getCache(ye),
                                we = At(ye),
                                xe = "fixed" === ("pinType" in e ? e.pinType : x(ye, "pinType") || we && "fixed"),
                                Ee = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                                Te = _e && e.toggleActions.split(" "),
                                Ce = "markers" in e ? e.markers : re.markers,
                                Ae = we ? 0 : parseFloat(Vt(ye)["border" + me.p2 + Ut]) || 0,
                                Oe = this,
                                Se = e.onRefreshInit && function() { return e.onRefreshInit(Oe) },
                                De = function(t, e, n) {
                                    var i = n.d,
                                        r = n.d2,
                                        s = n.a;
                                    return (s = x(t, "getBoundingClientRect")) ? function() { return s()[i] } : function() { return (e ? H["inner" + r] : t["client" + r]) || 0 }
                                }(ye, we, me),
                                Ne = function(t, e) { return !e || ~y.indexOf(t) ? kt(t) : function() { return Ie } }(ye, we),
                                Re = 0,
                                $e = L(ye, me);
                            if (Oe.media = ht, Oe._dir = me, $t *= 45, Oe.scroller = ye, Oe.scroll = he ? he.time.bind(he) : $e, o = $e(), Oe.vars = e, n = n || e.animation, "refreshPriority" in e && (nt = 1, -9999 === e.refreshPriority && (pt = Oe)), be.tweenScroll = be.tweenScroll || { top: He(ye, S), left: He(ye, O) }, Oe.tweenTo = i = be.tweenScroll[me.p], Oe.scrubDuration = function(t) {
                                    (F = Nt(t) && t) ? W ? W.duration(t) : W = R.to(n, { ease: "expo", totalProgress: "+=0.001", duration: F, paused: !0, onComplete: function() { return Bt && Bt(Oe) } }): (W && W.progress(1).kill(), W = 0)
                                }, n && (n.vars.lazy = !1, n._initted || !1 !== n.vars.immediateRender && !1 !== e.immediateRender && n.render(0, !0, !0), Oe.animation = n.pause(), n.scrollTrigger = Oe, Oe.scrubDuration(Ct), j = 0, bt || (bt = n.vars.id)), ce.push(Oe), ne && (Mt(ne) && !ne.push || (ne = { snapTo: ne }), "scrollBehavior" in q.style && R.set(we ? [q, B] : ye, { scrollBehavior: "auto" }), s = Lt(ne.snapTo) ? ne.snapTo : "labels" === ne.snapTo ? function(t) { return function(e) { return R.utils.snap(Gt(t), e) } }(n) : "labelsDirectional" === ne.snapTo ? (ot = n, function(t, e) { return Zt(Gt(ot))(t, e.direction) }) : !1 !== ne.directional ? function(t, e) { return Zt(ne.snapTo)(t, K ? 0 : e.direction) } : R.utils.snap(ne.snapTo), Y = ne.duration || { min: .1, max: 2 }, Y = Mt(Y) ? X(Y.min, Y.max) : X(Y, Y), G = R.delayedCall(ne.delay || F / 2 || .1, (function() {
                                    if (Math.abs(Oe.getVelocity()) < 10 && !Q && Re !== $e()) {
                                        var t = n && !_e ? n.totalProgress() : Oe.progress,
                                            e = (t - z) / (mt() - V) * 1e3 || 0,
                                            r = R.utils.clamp(-Oe.progress, 1 - Oe.progress, zt(e / 2) * e / .185),
                                            o = Oe.progress + (!1 === ne.inertia ? 0 : r),
                                            a = X(0, 1, s(o, Oe)),
                                            u = $e(),
                                            h = Math.round(l + a * g),
                                            d = ne,
                                            f = d.onStart,
                                            p = d.onInterrupt,
                                            m = d.onComplete,
                                            _ = i.tween;
                                        if (u <= c && u >= l && h !== u) { if (_ && !_._initted && _.data <= zt(h - u)) return;!1 === ne.inertia && (r = a - Oe.progress), i(h, { duration: Y(zt(.185 * Math.max(zt(o - t), zt(a - t)) / e / .05 || 0)), ease: ne.ease || "power3", data: zt(h - u), onInterrupt: function() { return G.restart(!0) && p && p(Oe) }, onComplete: function() { Oe.update(), Re = $e(), j = z = n && !_e ? n.totalProgress() : Oe.progress, qt && qt(Oe), m && m(Oe) } }, u, r * g, h - u - r * g), f && f(Oe, i.tween) }
                                    } else Oe.isActive && G.restart(!0)
                                })).pause()), bt && (ue[bt] = Oe), (st = (St = Oe.trigger = D(St || Pt)) && St._gsap && St._gsap.stRevert) && (st = st(Oe)), Pt = !0 === Pt ? St : D(Pt), Dt(_t) && (_t = { targets: St, className: _t }), Pt && (!1 === It || It === Ft || (It = !(!It && "flex" === Vt(Pt.parentNode).display) && Wt), Oe.pin = Pt, !1 !== e.force3D && R.set(Pt, { force3D: !0 }), (r = R.core.getCache(Pt)).spacer ? m = r.pinState : (le && ((le = D(le)) && !le.nodeType && (le = le.current || le.nativeElement), r.spacerIsNative = !!le, le && (r.spacerState = Pe(le))), r.spacer = b = le || $.createElement("div"), b.classList.add("pin-spacer"), bt && b.classList.add("pin-spacer-" + bt), r.pinState = m = Pe(Pt)), Oe.spacer = b = r.spacer, I = Vt(Pt), k = I[It + me.os2], E = R.getProperty(Pt), T = R.quickSetter(Pt, me.a, Xt), Le(Pt, b, I), v = Pe(Pt)), Ce) {
                                p = Mt(Ce) ? Yt(Ce, ie) : ie, d = ae("scroller-start", bt, ye, me, p, 0), f = ae("scroller-end", bt, ye, me, p, 0, d), w = d["offset" + me.op.d2];
                                var Be = D(x(ye, "content") || ye);
                                u = this.markerStart = ae("start", bt, Be, me, p, w, 0, he), h = this.markerEnd = ae("end", bt, Be, me, p, w, 0, he), he && (rt = R.quickSetter([u, h], me.a, Xt)), xe || y.length && !0 === x(ye, "fixedMarkers") || (lt = Vt(at = we ? q : ye).position, at.style.position = "absolute" === lt || "fixed" === lt ? lt : "relative", R.set([d, f], { force3D: !0 }), M = R.quickSetter(d, me.a, Xt), P = R.quickSetter(f, me.a, Xt))
                            }
                            if (he) {
                                var qe = he.vars.onUpdate,
                                    We = he.vars.onUpdateParams;
                                he.eventCallback("onUpdate", (function() { Oe.update(0, 0, 1), qe && qe.apply(We || []) }))
                            }
                            Oe.previous = function() { return ce[ce.indexOf(Oe) - 1] }, Oe.next = function() { return ce[ce.indexOf(Oe) + 1] }, Oe.revert = function(t) {
                                var e = !1 !== t || !Oe.enabled,
                                    i = K;
                                e !== Oe.isReverted && (e && (Oe.scroll.rec || !K || !ft || (Oe.scroll.rec = $e()), tt = Math.max($e(), Oe.scroll.rec || 0), J = Oe.progress, et = n && n.progress()), u && [u, h, d, f].forEach((function(t) { return t.style.display = e ? "none" : "block" })), e && (K = 1), Oe.update(e), K = i, Pt && (e ? function(t, e, n) {
                                    Me(n);
                                    var i = t._gsap;
                                    if (i.spacerIsNative) Me(i.spacerState);
                                    else if (t.parentNode === e) {
                                        var r = e.parentNode;
                                        r && (r.insertBefore(t, e), r.removeChild(e))
                                    }
                                }(Pt, b, m) : (!se || !Oe.isActive) && Le(Pt, b, Vt(Pt), N)), Oe.isReverted = e)
                            }, Oe.refresh = function(i, r) {
                                if (!K && Oe.enabled || r)
                                    if (Pt && i && vt) te(t, "scrollEnd", ve);
                                    else {
                                        !ft && Se && Se(Oe), K = 1, W && W.pause(), Ht && n && n.time(-.01, !0).invalidate(), Oe.isReverted || Oe.revert();
                                        for (var s, p, y, w, x, T, k, M, P, I, j = De(), z = Ne(), H = he ? he.duration() : Ot(ye, me), $ = 0, B = 0, F = e.end, U = e.endTrigger || St, X = e.start || (0 !== e.start && St ? Pt ? "0 0" : "0 100%" : 0), V = Oe.pinnedContainer = e.pinnedContainer && D(e.pinnedContainer), Y = St && Math.max(0, ce.indexOf(Oe)) || 0, Q = Y; Q--;)(T = ce[Q]).end || T.refresh(0, 1) || (K = 1), !(k = T.pin) || k !== St && k !== Pt || T.isReverted || (I || (I = []), I.unshift(T), T.revert()), T !== ce[Q] && (Y--, Q--);
                                        for (Lt(X) && (X = X(Oe)), l = je(X, St, j, me, $e(), u, d, Oe, z, Ae, xe, H, he) || (Pt ? -.001 : 0), Lt(F) && (F = F(Oe)), Dt(F) && !F.indexOf("+=") && (~F.indexOf(" ") ? F = (Dt(X) ? X.split(" ")[0] : "") + F : ($ = oe(F.substr(2), j), F = Dt(X) ? X : l + $, U = St)), c = Math.max(l, je(F || (U ? "100% 0" : H), U, j, me, $e() + $, h, f, Oe, z, Ae, xe, H, he)) || -.001, g = c - l || (l -= .01) && .001, $ = 0, Q = Y; Q--;)(k = (T = ce[Q]).pin) && T.start - T._pinPush < l && !he && T.end > 0 && (s = T.end - T.start, k !== St && k !== V || Nt(X) || ($ += s * (1 - T.progress)), k === Pt && (B += s));
                                        if (l += $, c += $, Oe._pinPush = B, u && $ && ((s = {})[me.a] = "+=" + $, V && (s[me.p] = "-=" + $e()), R.set([u, h], s)), Pt) s = Vt(Pt), w = me === S, y = $e(), C = parseFloat(E(me.a)) + B, !H && c > 1 && ((we ? q : ye).style["overflow-" + me.a] = "scroll"), Le(Pt, b, s), v = Pe(Pt), p = Kt(Pt, !0), M = xe && L(ye, w ? O : S)(), It && ((N = [It + me.os2, g + B + Xt]).t = b, (Q = It === Wt ? Qt(Pt, me) + g + B : 0) && N.push(me.d, Q + Xt), Me(N), xe && $e(tt)), xe && ((x = { top: p.top + (w ? y - l : M) + Xt, left: p.left + (w ? M : y - l) + Xt, boxSizing: "border-box", position: "fixed" }).width = x.maxWidth = Math.ceil(p.width) + Xt, x.height = x.maxHeight = Math.ceil(p.height) + Xt, x.margin = x.marginTop = x.marginRight = x.marginBottom = x.marginLeft = "0", x.padding = s.padding, x.paddingTop = s.paddingTop, x.paddingRight = s.paddingRight, x.paddingBottom = s.paddingBottom, x.paddingLeft = s.paddingLeft, _ = function(t, e, n) { for (var i, r = [], s = t.length, o = n ? 8 : 0; o < s; o += 2) i = t[o], r.push(i, i in e ? e[i] : t[o + 1]); return r.t = t.t, r }(m, x, se)), n ? (P = n._initted, it(1), n.render(n.duration(), !0, !0), A = E(me.a) - C + g + B, g !== A && _.splice(_.length - 2, 2), n.render(0, !0, !0), P || n.invalidate(), it(0)) : A = g;
                                        else if (St && $e() && !he)
                                            for (p = St.parentNode; p && p !== q;) p._pinOffset && (l -= p._pinOffset, c -= p._pinOffset), p = p.parentNode;
                                        I && I.forEach((function(t) { return t.revert(!1) })), Oe.start = l, Oe.end = c, o = a = $e(), he || (o < tt && $e(tt), Oe.scroll.rec = 0), Oe.revert(!1), G && Oe.isActive && $e(l + g * J), K = 0, n && _e && (n._initted || et) && n.progress() !== et && n.progress(et, !0).render(n.time(), !0, !0), (J !== Oe.progress || he) && (n && !_e && n.totalProgress(J, !0), Oe.progress = J, Oe.update(0, 0, 1)), Pt && It && (b._pinOffset = Math.round(Oe.progress * A)), Tt && Tt(Oe)
                                    }
                            }, Oe.getVelocity = function() { return ($e() - a) / (mt() - V) * 1e3 || 0 }, Oe.endAnimation = function() { jt(Oe.callbackAnimation), n && (W ? W.progress(1) : n.paused() ? _e || jt(n, Oe.direction < 0, 1) : jt(n, n.reversed())) }, Oe.labelToScroll = function(t) { return n && n.labels && (l || Oe.refresh() || l) + n.labels[t] / n.duration() * g || 0 }, Oe.getTrailing = function(t) {
                                var e = ce.indexOf(Oe),
                                    n = Oe.direction > 0 ? ce.slice(0, e).reverse() : ce.slice(e + 1);
                                return (Dt(t) ? n.filter((function(e) { return e.vars.preventOverlaps === t })) : n).filter((function(t) { return Oe.direction > 0 ? t.end <= l : t.start >= c }))
                            }, Oe.update = function(t, e, r) {
                                if (!he || r || t) {
                                    var s, u, h, f, p, m, y, w = Oe.scroll(),
                                        x = t ? 0 : (w - l) / g,
                                        E = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                                        O = Oe.progress;
                                    if (e && (a = o, o = he ? $e() : w, ne && (z = j, j = n && !_e ? n.totalProgress() : E)), $t && !E && Pt && !K && !gt && vt && l < w + (w - a) / (mt() - V) * $t && (E = 1e-4), E !== O && Oe.enabled) {
                                        if (f = (p = (s = Oe.isActive = !!E && E < 1) != (!!O && O < 1)) || !!E != !!O, Oe.direction = E > O ? 1 : -1, Oe.progress = E, f && !K && (u = E && !O ? 0 : 1 === E ? 1 : 1 === O ? 2 : 3, _e && (h = !p && "none" !== Te[u + 1] && Te[u + 1] || Te[u], y = n && ("complete" === h || "reset" === h || h in n))), ge && (p || y) && (y || Ct || !n) && (Lt(ge) ? ge(Oe) : Oe.getTrailing(ge).forEach((function(t) { return t.endAnimation() }))), _e || (!W || K || gt ? n && n.totalProgress(E, !!K) : ((he || pt && pt !== Oe) && W.render(W._dp._time - W._start), W.resetTo ? W.resetTo("totalProgress", E, n._tTime / n._tDur) : (W.vars.totalProgress = E, W.invalidate().restart()))), Pt)
                                            if (t && It && (b.style[It + me.os2] = k), xe) {
                                                if (f) {
                                                    if (m = !t && E > O && c + 1 > w && w + 1 >= Ot(ye, me), se)
                                                        if (t || !s && !m) ze(Pt, b);
                                                        else {
                                                            var D = Kt(Pt, !0),
                                                                L = w - l;
                                                            ze(Pt, q, D.top + (me === S ? L : 0) + Xt, D.left + (me === S ? 0 : L) + Xt)
                                                        }
                                                    Me(s || m ? _ : v), A !== g && E < 1 && s || T(C + (1 !== E || m ? 0 : A))
                                                }
                                            } else T(Et(C + A * E));
                                        ne && !i.tween && !K && !gt && G.restart(!0), _t && (p || Jt && E && (E < 1 || !ct)) && U(_t.targets).forEach((function(t) { return t.classList[s || Jt ? "add" : "remove"](_t.className) })), dt && !_e && !t && dt(Oe), f && !K ? (_e && (y && ("complete" === h ? n.pause().totalProgress(1) : "reset" === h ? n.restart(!0).pause() : "restart" === h ? n.restart(!0) : n[h]()), dt && dt(Oe)), !p && ct || (wt && p && Rt(Oe, wt), Ee[u] && Rt(Oe, Ee[u]), Jt && (1 === E ? Oe.kill(!1, 1) : Ee[u] = 0), p || Ee[u = 1 === E ? 1 : 3] && Rt(Oe, Ee[u])), pe && !s && Math.abs(Oe.getVelocity()) > (Nt(pe) ? pe : 2500) && (jt(Oe.callbackAnimation), W ? W.progress(1) : jt(n, !E, 1))) : _e && dt && !K && dt(Oe)
                                    }
                                    if (P) {
                                        var N = he ? w / he.duration() * (he._caScrollDist || 0) : w;
                                        M(N + (d._isFlipped ? 1 : 0)), P(N)
                                    }
                                    rt && rt(-w / he.duration() * (he._caScrollDist || 0))
                                }
                            }, Oe.enable = function(e, n) { Oe.enabled || (Oe.enabled = !0, te(ye, "resize", fe), te(we ? $ : ye, "scroll", de), Se && te(t, "refreshInit", Se), !1 !== e && (Oe.progress = J = 0, o = a = Re = $e()), !1 !== n && Oe.refresh()) }, Oe.getTween = function(t) { return t && i ? i.tween : W }, Oe.setPositions = function(t, e) { Pt && (C += t - l, A += e - t - g), Oe.start = l = t, Oe.end = c = e, g = e - t, Oe.update() }, Oe.disable = function(e, n) {
                                if (Oe.enabled && (!1 !== e && Oe.revert(), Oe.enabled = Oe.isActive = !1, n || W && W.pause(), tt = 0, r && (r.uncache = 1), Se && ee(t, "refreshInit", Se), G && (G.pause(), i.tween && i.tween.kill() && (i.tween = 0)), !we)) {
                                    for (var s = ce.length; s--;)
                                        if (ce[s].scroller === ye && ce[s] !== Oe) return;
                                    ee(ye, "resize", fe), ee(ye, "scroll", de)
                                }
                            }, Oe.kill = function(t, i) {
                                Oe.disable(t, i), W && !i && W.kill(), bt && delete ue[bt];
                                var s = ce.indexOf(Oe);
                                s >= 0 && ce.splice(s, 1), s === Z && ke > 0 && Z--, s = 0, ce.forEach((function(t) { return t.scroller === Oe.scroller && (s = 1) })), s || (Oe.scroll.rec = 0), n && (n.scrollTrigger = null, t && n.render(-1), i || n.kill()), u && [u, h, d, f].forEach((function(t) { return t.parentNode && t.parentNode.removeChild(t) })), Pt && (r && (r.uncache = 1), s = 0, ce.forEach((function(t) { return t.pin === Pt && s++ })), s || (r.spacer = 0)), e.onKill && e.onKill(Oe)
                            }, Oe.enable(!1, !1), st && st(Oe), n && n.add && !g ? R.delayedCall(.01, (function() { return l || c || Oe.refresh() })) && (g = .01) && (l = c = 0) : Oe.refresh()
                        } else this.update = this.refresh = this.kill = xt
                    }, t.register = function(e) { return z || (R = e || Ct(), Tt() && window.document && t.enable(), z = yt), z }, t.defaults = function(t) {
                        if (t)
                            for (var e in t) re[e] = t[e];
                        return re
                    }, t.disable = function(t, e) { yt = 0, ce.forEach((function(n) { return n[e ? "kill" : "disable"](t) })), ee(H, "wheel", de), ee($, "scroll", de), clearInterval(Y), ee($, "touchcancel", xt), ee(q, "touchstart", xt), Jt(ee, $, "pointerdown,touchstart,mousedown", bt), Jt(ee, $, "pointerup,touchend,mouseup", wt), F.kill(), St(ee); for (var n = 0; n < v.length; n += 3) ne(ee, v[n], v[n + 1]), ne(ee, v[n], v[n + 2]) }, t.enable = function() {
                        if (H = window, $ = document, B = $.documentElement, q = $.body, R && (U = R.utils.toArray, X = R.utils.clamp, it = R.core.suppressOverwrites || xt, R.core.globals("ScrollTrigger", t), q)) {
                            yt = 1, t.isTouch = H.matchMedia && H.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in H || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, W = [H, $, B, q], at = H.innerHeight, lt = H.innerWidth, j.register(R), te($, "scroll", de);
                            var e, n, i = q.style,
                                r = i.borderTopStyle;
                            for (i.borderTopStyle = "solid", e = Kt(q), S.m = Math.round(e.top + S.sc()) || 0, O.m = Math.round(e.left + O.sc()) || 0, r ? i.borderTopStyle = r : i.removeProperty("border-top-style"), Y = setInterval(he, 250), R.delayedCall(.5, (function() { return gt = 0 })), te($, "touchcancel", xt), te(q, "touchstart", xt), Jt(te, $, "pointerdown,touchstart,mousedown", bt), Jt(te, $, "pointerup,touchend,mouseup", wt), G = R.utils.checkPrefix("transform"), De.push(G), z = mt(), F = R.delayedCall(.2, Ce).pause(), et = [$, "visibilitychange", function() {
                                    var t = H.innerWidth,
                                        e = H.innerHeight;
                                    $.hidden ? (J = t, tt = e) : J === t && tt === e || fe()
                                }, $, "DOMContentLoaded", Ce, H, "load", Ce, H, "resize", fe], St(te), ce.forEach((function(t) { return t.enable(0, 1) })), n = 0; n < v.length; n += 3) ne(ee, v[n], v[n + 1]), ne(ee, v[n], v[n + 2])
                        }
                    }, t.config = function(e) {
                        "limitCallbacks" in e && (ct = !!e.limitCallbacks);
                        var n = e.syncInterval;
                        n && clearInterval(Y) || (Y = n) && setInterval(he, n), "ignoreMobileResize" in e && (ot = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (St(ee) || St(te, e.autoRefreshEvents || "none"), rt = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
                    }, t.scrollerProxy = function(t, e) {
                        var n = D(t),
                            i = v.indexOf(n),
                            r = At(n);
                        ~i && v.splice(i, r ? 6 : 2), e && (r ? y.unshift(H, e, q, e, B, e) : y.unshift(n, e))
                    }, t.matchMedia = function(t) { var e, n, i, r, s; for (n in t) i = me.indexOf(n), r = t[n], ht = n, "all" === n ? r() : (e = H.matchMedia(n)) && (e.matches && (s = r()), ~i ? (me[i + 1] = It(me[i + 1], r), me[i + 2] = It(me[i + 2], s)) : (i = me.length, me.push(n, r, s), e.addListener ? e.addListener(_e) : e.addEventListener("change", _e)), me[i + 3] = e.matches), ht = 0; return me }, t.clearMatchMedia = function(t) { t || (me.length = 0), (t = me.indexOf(t)) >= 0 && me.splice(t, 4) }, t.isInViewport = function(t, e, n) {
                        var i = (Dt(t) ? D(t) : t).getBoundingClientRect(),
                            r = i[n ? Bt : qt] * e || 0;
                        return n ? i.right - r > 0 && i.left + r < H.innerWidth : i.bottom - r > 0 && i.top + r < H.innerHeight
                    }, t.positionInViewport = function(t, e, n) {
                        Dt(t) && (t = D(t));
                        var i = t.getBoundingClientRect(),
                            r = i[n ? Bt : qt],
                            s = null == e ? r / 2 : e in se ? se[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0;
                        return n ? (i.left + s) / H.innerWidth : (i.top + s) / H.innerHeight
                    }, t
                }();
            $e.version = "3.10.2", $e.saveStyles = function(t) {
                return t ? U(t).forEach((function(t) {
                    if (t && t.style) {
                        var e = be.indexOf(t);
                        e >= 0 && be.splice(e, 5), be.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), R.core.getCache(t), ht)
                    }
                })) : be
            }, $e.revert = function(t, e) { return xe(!t, e) }, $e.create = function(t, e) { return new $e(t, e) }, $e.refresh = function(t) { return t ? fe() : (z || $e.register()) && Ce(!0) }, $e.update = Oe, $e.clearScrollMemory = Ee, $e.maxScroll = function(t, e) { return Ot(t, e ? O : S) }, $e.getScrollFunc = function(t, e) { return L(D(t), e ? O : S) }, $e.getById = function(t) { return ue[t] }, $e.getAll = function() { return ce.filter((function(t) { return "ScrollSmoother" !== t.vars.id })) }, $e.isScrolling = function() { return !!vt }, $e.snapDirectional = Zt, $e.addEventListener = function(t, e) { var n = pe[t] || (pe[t] = []);~n.indexOf(e) || n.push(e) }, $e.removeEventListener = function(t, e) {
                var n = pe[t],
                    i = n && n.indexOf(e);
                i >= 0 && n.splice(i, 1)
            }, $e.batch = function(t, e) {
                var n, i = [],
                    r = {},
                    s = e.interval || .016,
                    o = e.batchMax || 1e9,
                    a = function(t, e) {
                        var n = [],
                            i = [],
                            r = R.delayedCall(s, (function() { e(n, i), n = [], i = [] })).pause();
                        return function(t) { n.length || r.restart(!0), n.push(t.trigger), i.push(t), o <= n.length && r.progress(1) }
                    };
                for (n in e) r[n] = "on" === n.substr(0, 2) && Lt(e[n]) && "onRefreshInit" !== n ? a(0, e[n]) : e[n];
                return Lt(o) && (o = o(), te($e, "refresh", (function() { return o = e.batchMax() }))), U(t).forEach((function(t) {
                    var e = {};
                    for (n in r) e[n] = r[n];
                    e.trigger = t, i.push($e.create(e))
                })), i
            };
            var Be = function(t, e, n, i) { return e > i ? t(i) : e < 0 && t(0), n > i ? (i - e) / (n - e) : n < 0 ? e / (e - n) : 1 },
                qe = function(t) {!0 === t ? (q.style.removeProperty("touch-action"), B.style.removeProperty("touch-action")) : q.style.touchAction = B.style.touchAction = t ? "pan-" + t : "none" };
            $e.sort = function(t) { return ce.sort(t || function(t, e) { return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0)) }) }, $e.observe = function(t) { return new j(t) }, $e.normalizeScroll = function(t) {
                if (void 0 === t) return st;
                if (!0 === t && st) return st.enable();
                var e = t instanceof j;
                return st && (!1 === t || e && t !== st) && st.kill(), t && !e && (t = function(t) {
                    Mt(t) || (t = {}), t.preventDefault = t.isNormalizer = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
                    var e, n, i, r, s, o, a, l, c, u = t,
                        h = u.normalizeScrollX,
                        d = u.momentum,
                        f = 0,
                        p = L(B, S),
                        g = L(B, O),
                        m = 1,
                        _ = Lt(d) ? function() { return d(e) } : function() { return d || 2.8 },
                        v = function() { return f = mt() },
                        y = function() { return i = !1 },
                        b = xt,
                        w = xt,
                        x = function() { n = Ot(B, S), w = X(0, n), h && (b = X(0, Ot(B, O))), r = Te },
                        E = $e.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                        T = function() { x(), s.isActive() && s.vars.scrollY > n && s.resetTo("scrollY", Ot(B, S)) };
                    return t.ignoreCheck = function(t) {
                        return E && "touchmove" === t.type && function() {
                            if (i) return requestAnimationFrame(y), !0;
                            i = !0
                        }() || m > 1 || e.isGesturing || t.touches && t.touches.length > 1
                    }, t.onPress = function() {
                        var t = m;
                        m = H.visualViewport && H.visualViewport.scale || 1, s.pause(), t !== m && qe(m > 1 || !h && "x"), i = !1, o = g(), a = p(), x(), r = Te
                    }, t.onRelease = t.onGestureStart = function(t, e) {
                        var n = t.event,
                            i = n.changedTouches ? n.changedTouches[0] : n;
                        if (!e || Math.abs(t.x - t.startX) <= 3 && Math.abs(t.y - t.startY) <= 3) R.delayedCall(.05, (function() {
                            if (mt() - f > 300 && !n.defaultPrevented)
                                if (n.target.click) n.target.click();
                                else if (l.createEvent) {
                                var t = l.createEvent("MouseEvents");
                                t.initMouseEvent("click", !0, !0, H, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(t)
                            }
                        })), c.restart(!0);
                        else {
                            var r, o, a = _();
                            h && (o = (r = g()) + .05 * a * -t.velocityX / .227 / m, a *= Be(g, r, o, Ot(B, O)), s.vars.scrollX = b(o)), o = (r = p()) + .05 * a * -t.velocityY / .227 / m, a *= Be(p, r, o, Ot(B, S)), s.vars.scrollY = w(o), s.invalidate().duration(a).play(.01)
                        }
                    }, t.onWheel = function() { return s._ts && s.pause() }, t.onChange = function(t, e, n, i, s) { Te !== r && x(), e && h && g(b(i[2] === e ? o + (t.startX - t.x) / m : g() + e - i[1])), n && p(w(s[2] === n ? a + (t.startY - t.y) / m : p() + n - s[1])), Oe() }, t.onEnable = function(t) { qe(!h && "x"), te(H, "resize", T), t.target.addEventListener("click", v, { capture: !0 }) }, t.onDisable = function(t) { qe(!0), ee(H, "resize", T), ee(t.target, "click", v) }, e = new j(t), l = e.target.ownerDocument || $, c = e._dc, s = R.to(e, { ease: "power4", paused: !0, scrollX: h ? "+=0.1" : "+=0", scrollY: "+=0.1", onComplete: c.vars.onComplete }), e
                }(t)), st = t && t.enable()
            }, $e.core = { _getVelocityProp: N, _scrollers: v, _proxies: y, bridge: { ss: function() { vt || ye("scrollStart"), vt = mt() }, ref: function() { return K } } }, Ct() && R.registerPlugin($e)
        },
        902: (t, e, n) => {
            "use strict";

            function i(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

            function r(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
            n.d(e, { ZP: () => Hi });
            var s, o, a, l, c, u, h, d, f, p, g, m, _, v, y, b, w, x, E, T, C, A, k, O, S, D, L, N, M = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
                P = { duration: .5, overwrite: !1, delay: 0 },
                I = 1e8,
                j = 1e-8,
                R = 2 * Math.PI,
                z = R / 4,
                H = 0,
                $ = Math.sqrt,
                B = Math.cos,
                q = Math.sin,
                W = function(t) { return "string" == typeof t },
                F = function(t) { return "function" == typeof t },
                U = function(t) { return "number" == typeof t },
                X = function(t) { return void 0 === t },
                V = function(t) { return "object" == typeof t },
                Y = function(t) { return !1 !== t },
                K = function() { return "undefined" != typeof window },
                Q = function(t) { return F(t) || W(t) },
                G = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
                Z = Array.isArray,
                J = /(?:-?\.?\d|\.)+/gi,
                tt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
                et = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
                nt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
                it = /[+-]=-?[.\d]+/,
                rt = /[^,'"\[\]\s]+/gi,
                st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
                ot = {},
                at = {},
                lt = function(t) { return (at = Pt(t, ot)) && Tn },
                ct = function(t, e) { return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()") },
                ut = function(t, e) { return !e && console.warn(t) },
                ht = function(t, e) { return t && (ot[t] = e) && at && (at[t] = e) || ot },
                dt = function() { return 0 },
                ft = {},
                pt = [],
                gt = {},
                mt = {},
                _t = {},
                vt = 30,
                yt = [],
                bt = "",
                wt = function(t) {
                    var e, n, i = t[0];
                    if (V(i) || F(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
                        for (n = yt.length; n-- && !yt[n].targetTest(i););
                        e = yt[n]
                    }
                    for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new Xe(t[n], e))) || t.splice(n, 1);
                    return t
                },
                xt = function(t) { return t._gsap || wt(he(t))[0]._gsap },
                Et = function(t, e, n) { return (n = t[e]) && F(n) ? t[e]() : X(n) && t.getAttribute && t.getAttribute(e) || n },
                Tt = function(t, e) { return (t = t.split(",")).forEach(e) || t },
                Ct = function(t) { return Math.round(1e5 * t) / 1e5 || 0 },
                At = function(t) { return Math.round(1e7 * t) / 1e7 || 0 },
                kt = function(t, e) {
                    var n = e.charAt(0),
                        i = parseFloat(e.substr(2));
                    return t = parseFloat(t), "+" === n ? t + i : "-" === n ? t - i : "*" === n ? t * i : t / i
                },
                Ot = function(t, e) { for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n;); return i < n },
                St = function() {
                    var t, e, n = pt.length,
                        i = pt.slice(0);
                    for (gt = {}, pt.length = 0, t = 0; t < n; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
                },
                Dt = function(t, e, n, i) { pt.length && St(), t.render(e, n, i), pt.length && St() },
                Lt = function(t) { var e = parseFloat(t); return (e || 0 === e) && (t + "").match(rt).length < 2 ? e : W(t) ? t.trim() : t },
                Nt = function(t) { return t },
                Mt = function(t, e) { for (var n in e) n in t || (t[n] = e[n]); return t },
                Pt = function(t, e) { for (var n in e) t[n] = e[n]; return t },
                It = function t(e, n) { for (var i in n) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = V(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i]); return e },
                jt = function(t, e) { var n, i = {}; for (n in t) n in e || (i[n] = t[n]); return i },
                Rt = function(t) {
                    var e, n = t.parent || o,
                        i = t.keyframes ? (e = Z(t.keyframes), function(t, n) { for (var i in n) i in t || "duration" === i && e || "ease" === i || (t[i] = n[i]) }) : Mt;
                    if (Y(t.inherit))
                        for (; n;) i(t, n.vars.defaults), n = n.parent || n._dp;
                    return t
                },
                zt = function(t, e, n, i, r) {
                    void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
                    var s, o = t[i];
                    if (r)
                        for (s = e[r]; o && o[r] > s;) o = o._prev;
                    return o ? (e._next = o._next, o._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = o, e.parent = e._dp = t, e
                },
                Ht = function(t, e, n, i) {
                    void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
                    var r = e._prev,
                        s = e._next;
                    r ? r._next = s : t[n] === e && (t[n] = s), s ? s._prev = r : t[i] === e && (t[i] = r), e._next = e._prev = e.parent = null
                },
                $t = function(t, e) { t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0 },
                Bt = function(t, e) {
                    if (t && (!e || e._end > t._dur || e._start < 0))
                        for (var n = t; n;) n._dirty = 1, n = n.parent;
                    return t
                },
                qt = function(t) { for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent; return t },
                Wt = function t(e) { return !e || e._ts && t(e.parent) },
                Ft = function(t) { return t._repeat ? Ut(t._tTime, t = t.duration() + t._rDelay) * t : 0 },
                Ut = function(t, e) { var n = Math.floor(t /= e); return t && n === t ? n - 1 : n },
                Xt = function(t, e) { return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur) },
                Vt = function(t) { return t._end = At(t._start + (t._tDur / Math.abs(t._ts || t._rts || j) || 0)) },
                Yt = function(t, e) { var n = t._dp; return n && n.smoothChildTiming && t._ts && (t._start = At(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Vt(t), n._dirty || Bt(n, t)), t },
                Kt = function(t, e) {
                    var n;
                    if ((e._time || e._initted && !e._dur) && (n = Xt(t.rawTime(), e), (!e._dur || ae(0, e.totalDuration(), n) - e._tTime > j) && e.render(n, !0)), Bt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                        if (t._dur < t.duration())
                            for (n = t; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
                        t._zTime = -1e-8
                    }
                },
                Qt = function(t, e, n, i) { return e.parent && $t(e), e._start = At((U(n) ? n : n || t !== o ? re(t, n, e) : t._time) + e._delay), e._end = At(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), zt(t, e, "_first", "_last", t._sort ? "_start" : 0), te(e) || (t._recent = e), i || Kt(t, e), t },
                Gt = function(t, e) { return (ot.ScrollTrigger || ct("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t) },
                Zt = function(t, e, n, i) { return tn(t, e), t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && h !== Me.frame ? (pt.push(t), t._lazy = [e, i], 1) : void 0 : 1 },
                Jt = function t(e) { var n = e.parent; return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n)) },
                te = function(t) { var e = t.data; return "isFromStart" === e || "isStart" === e },
                ee = function(t, e, n, i) {
                    var r = t._repeat,
                        s = At(e) || 0,
                        o = t._tTime / t._tDur;
                    return o && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = r ? r < 0 ? 1e10 : At(s * (r + 1) + t._rDelay * r) : s, o > 0 && !i ? Yt(t, t._tTime = t._tDur * o) : t.parent && Vt(t), n || Bt(t.parent, t), t
                },
                ne = function(t) { return t instanceof Ye ? Bt(t) : ee(t, t._dur) },
                ie = { _start: 0, endTime: dt, totalDuration: dt },
                re = function t(e, n, i) {
                    var r, s, o, a = e.labels,
                        l = e._recent || ie,
                        c = e.duration() >= I ? l.endTime(!1) : e._dur;
                    return W(n) && (isNaN(n) || n in a) ? (s = n.charAt(0), o = "%" === n.substr(-1), r = n.indexOf("="), "<" === s || ">" === s ? (r >= 0 && (n = n.replace(/=/, "")), ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (o ? (r < 0 ? l : i).totalDuration() / 100 : 1)) : r < 0 ? (n in a || (a[n] = c), a[n]) : (s = parseFloat(n.charAt(r - 1) + n.substr(r + 1)), o && i && (s = s / 100 * (Z(i) ? i[0] : i).totalDuration()), r > 1 ? t(e, n.substr(0, r - 1), i) + s : c + s)) : null == n ? c : +n
                },
                se = function(t, e, n) {
                    var i, r, s = U(e[1]),
                        o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
                        a = e[o];
                    if (s && (a.duration = e[1]), a.parent = n, t) {
                        for (i = a, r = n; r && !("immediateRender" in i);) i = r.vars.defaults || {}, r = Y(r.vars.inherit) && r.parent;
                        a.immediateRender = Y(i.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[o - 1]
                    }
                    return new on(e[0], a, e[o + 1])
                },
                oe = function(t, e) { return t || 0 === t ? e(t) : e },
                ae = function(t, e, n) { return n < t ? t : n > e ? e : n },
                le = function(t, e) { return W(t) && (e = st.exec(t)) ? e[1] : "" },
                ce = [].slice,
                ue = function(t, e) { return t && V(t) && "length" in t && (!e && !t.length || t.length - 1 in t && V(t[0])) && !t.nodeType && t !== a },
                he = function(t, e, n) { return !W(t) || n || !l && Pe() ? Z(t) ? function(t, e, n) { return void 0 === n && (n = []), t.forEach((function(t) { var i; return W(t) && !e || ue(t, 1) ? (i = n).push.apply(i, he(t)) : n.push(t) })) || n }(t, n) : ue(t) ? ce.call(t, 0) : t ? [t] : [] : ce.call((e || c).querySelectorAll(t), 0) },
                de = function(t) { return t.sort((function() { return .5 - Math.random() })) },
                fe = function(t) {
                    if (F(t)) return t;
                    var e = V(t) ? t : { each: t },
                        n = Be(e.ease),
                        i = e.from || 0,
                        r = parseFloat(e.base) || 0,
                        s = {},
                        o = i > 0 && i < 1,
                        a = isNaN(i) || o,
                        l = e.axis,
                        c = i,
                        u = i;
                    return W(i) ? c = u = { center: .5, edges: .5, end: 1 }[i] || 0 : !o && a && (c = i[0], u = i[1]),
                        function(t, o, h) {
                            var d, f, p, g, m, _, v, y, b, w = (h || e).length,
                                x = s[w];
                            if (!x) {
                                if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, I])[1])) {
                                    for (v = -I; v < (v = h[b++].getBoundingClientRect().left) && b < w;);
                                    b--
                                }
                                for (x = s[w] = [], d = a ? Math.min(b, w) * c - .5 : i % b, f = b === I ? 0 : a ? w * u / b - .5 : i / b | 0, v = 0, y = I, _ = 0; _ < w; _++) p = _ % b - d, g = f - (_ / b | 0), x[_] = m = l ? Math.abs("y" === l ? g : p) : $(p * p + g * g), m > v && (v = m), m < y && (y = m);
                                "random" === i && de(x), x.max = v - y, x.min = y, x.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (b > w ? w - 1 : l ? "y" === l ? w / b : b : Math.max(b, w / b)) || 0) * ("edges" === i ? -1 : 1), x.b = w < 0 ? r - w : r, x.u = le(e.amount || e.each) || 0, n = n && w < 0 ? He(n) : n
                            }
                            return w = (x[t] - x.min) / x.max || 0, At(x.b + (n ? n(w) : w) * x.v) + x.u
                        }
                },
                pe = function(t) { var e = Math.pow(10, ((t + "").split(".")[1] || "").length); return function(n) { var i = Math.round(parseFloat(n) / t) * t * e; return (i - i % 1) / e + (U(n) ? 0 : le(n)) } },
                ge = function(t, e) { var n, i, r = Z(t); return !r && V(t) && (n = r = t.radius || I, t.values ? (t = he(t.values), (i = !U(t[0])) && (n *= n)) : t = pe(t.increment)), oe(e, r ? F(t) ? function(e) { return i = t(e), Math.abs(i - e) <= n ? i : e } : function(e) { for (var r, s, o = parseFloat(i ? e.x : e), a = parseFloat(i ? e.y : 0), l = I, c = 0, u = t.length; u--;)(r = i ? (r = t[u].x - o) * r + (s = t[u].y - a) * s : Math.abs(t[u] - o)) < l && (l = r, c = u); return c = !n || l <= n ? t[c] : e, i || c === e || U(e) ? c : c + le(e) } : pe(t)) },
                me = function(t, e, n, i) { return oe(Z(t) ? !e : !0 === n ? !!(n = 0) : !i, (function() { return Z(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * i) / i })) },
                _e = function(t, e, n) { return oe(n, (function(n) { return t[~~e(n)] })) },
                ve = function(t) { for (var e, n, i, r, s = 0, o = ""; ~(e = t.indexOf("random(", s));) i = t.indexOf(")", e), r = "[" === t.charAt(e + 7), n = t.substr(e + 7, i - e - 7).match(r ? rt : J), o += t.substr(s, e - s) + me(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5), s = i + 1; return o + t.substr(s, t.length - s) },
                ye = function(t, e, n, i, r) {
                    var s = e - t,
                        o = i - n;
                    return oe(r, (function(e) { return n + ((e - t) / s * o || 0) }))
                },
                be = function(t, e, n) {
                    var i, r, s, o = t.labels,
                        a = I;
                    for (i in o)(r = o[i] - e) < 0 == !!n && r && a > (r = Math.abs(r)) && (s = i, a = r);
                    return s
                },
                we = function(t, e, n) {
                    var i, r, s = t.vars,
                        o = s[e];
                    if (o) return i = s[e + "Params"], r = s.callbackScope || t, n && pt.length && St(), i ? o.apply(r, i) : o.call(r)
                },
                xe = function(t) { return $t(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && we(t, "onInterrupt"), t },
                Ee = function(t) {
                    var e = (t = !t.name && t.default || t).name,
                        n = F(t),
                        i = e && !n && t.init ? function() { this._props = [] } : t,
                        r = { init: dt, render: gn, add: Ze, kill: _n, modifier: mn, rawVars: 0 },
                        s = { targetTest: 0, get: 0, getSetter: hn, aliases: {}, register: 0 };
                    if (Pe(), t !== i) {
                        if (mt[e]) return;
                        Mt(i, Mt(jt(t, r), s)), Pt(i.prototype, Pt(r, jt(t, s))), mt[i.prop = e] = i, t.targetTest && (yt.push(i), ft[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    ht(e, i), t.register && t.register(Tn, i, bn)
                },
                Te = 255,
                Ce = { aqua: [0, Te, Te], lime: [0, Te, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, Te], navy: [0, 0, 128], white: [Te, Te, Te], olive: [128, 128, 0], yellow: [Te, Te, 0], orange: [Te, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [Te, 0, 0], pink: [Te, 192, 203], cyan: [0, Te, Te], transparent: [Te, Te, Te, 0] },
                Ae = function(t, e, n) { return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * Te + .5 | 0 },
                ke = function(t, e, n) {
                    var i, r, s, o, a, l, c, u, h, d, f = t ? U(t) ? [t >> 16, t >> 8 & Te, t & Te] : 0 : Ce.black;
                    if (!f) {
                        if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ce[t]) f = Ce[t];
                        else if ("#" === t.charAt(0)) {
                            if (t.length < 6 && (i = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + i + i + r + r + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(f = parseInt(t.substr(1, 6), 16)) >> 16, f >> 8 & Te, f & Te, parseInt(t.substr(7), 16) / 255];
                            f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Te, t & Te]
                        } else if ("hsl" === t.substr(0, 3))
                            if (f = d = t.match(J), e) { if (~t.indexOf("=")) return f = t.match(tt), n && f.length < 4 && (f[3] = 1), f } else o = +f[0] % 360 / 360, a = +f[1] / 100, i = 2 * (l = +f[2] / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), f.length > 3 && (f[3] *= 1), f[0] = Ae(o + 1 / 3, i, r), f[1] = Ae(o, i, r), f[2] = Ae(o - 1 / 3, i, r);
                        else f = t.match(J) || Ce.transparent;
                        f = f.map(Number)
                    }
                    return e && !d && (i = f[0] / Te, r = f[1] / Te, s = f[2] / Te, l = ((c = Math.max(i, r, s)) + (u = Math.min(i, r, s))) / 2, c === u ? o = a = 0 : (h = c - u, a = l > .5 ? h / (2 - c - u) : h / (c + u), o = c === i ? (r - s) / h + (r < s ? 6 : 0) : c === r ? (s - i) / h + 2 : (i - r) / h + 4, o *= 60), f[0] = ~~(o + .5), f[1] = ~~(100 * a + .5), f[2] = ~~(100 * l + .5)), n && f.length < 4 && (f[3] = 1), f
                },
                Oe = function(t) {
                    var e = [],
                        n = [],
                        i = -1;
                    return t.split(De).forEach((function(t) {
                        var r = t.match(et) || [];
                        e.push.apply(e, r), n.push(i += r.length + 1)
                    })), e.c = n, e
                },
                Se = function(t, e, n) {
                    var i, r, s, o, a = "",
                        l = (t + a).match(De),
                        c = e ? "hsla(" : "rgba(",
                        u = 0;
                    if (!l) return t;
                    if (l = l.map((function(t) { return (t = ke(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")" })), n && (s = Oe(t), (i = n.c).join(a) !== s.c.join(a)))
                        for (o = (r = t.replace(De, "1").split(et)).length - 1; u < o; u++) a += r[u] + (~i.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (s.length ? s : l.length ? l : n).shift());
                    if (!r)
                        for (o = (r = t.split(De)).length - 1; u < o; u++) a += r[u] + l[u];
                    return a + r[o]
                },
                De = function() { var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b"; for (t in Ce) e += "|" + t + "\\b"; return new RegExp(e + ")", "gi") }(),
                Le = /hsl[a]?\(/,
                Ne = function(t) { var e, n = t.join(" "); if (De.lastIndex = 0, De.test(n)) return e = Le.test(n), t[1] = Se(t[1], e), t[0] = Se(t[0], e, Oe(t[1])), !0 },
                Me = (b = Date.now, w = 500, x = 33, E = b(), T = E, A = C = 1e3 / 240, O = function t(e) {
                    var n, i, r, s, o = b() - T,
                        a = !0 === e;
                    if (o > w && (E += o - x), ((n = (r = (T += o) - E) - A) > 0 || a) && (s = ++_.frame, v = r - 1e3 * _.time, _.time = r /= 1e3, A += n + (n >= C ? 4 : C - n), i = 1), a || (p = g(t)), i)
                        for (y = 0; y < k.length; y++) k[y](r, v, s, e)
                }, _ = {
                    time: 0,
                    frame: 0,
                    tick: function() { O(!0) },
                    deltaRatio: function(t) { return v / (1e3 / (t || 60)) },
                    wake: function() { u && (!l && K() && (a = l = window, c = a.document || {}, ot.gsap = Tn, (a.gsapVersions || (a.gsapVersions = [])).push(Tn.version), lt(at || a.GreenSockGlobals || !a.gsap && a || {}), m = a.requestAnimationFrame), p && _.sleep(), g = m || function(t) { return setTimeout(t, A - 1e3 * _.time + 1 | 0) }, f = 1, O(2)) },
                    sleep: function() {
                        (m ? a.cancelAnimationFrame : clearTimeout)(p), f = 0, g = dt
                    },
                    lagSmoothing: function(t, e) { w = t || 1e8, x = Math.min(e, w, 0) },
                    fps: function(t) { C = 1e3 / (t || 240), A = 1e3 * _.time + C },
                    add: function(t, e, n) { var i = e ? function(e, n, r, s) { t(e, n, r, s), _.remove(i) } : t; return _.remove(t), k[n ? "unshift" : "push"](i), Pe(), i },
                    remove: function(t, e) {~(e = k.indexOf(t)) && k.splice(e, 1) && y >= e && y-- },
                    _listeners: k = []
                }),
                Pe = function() { return !f && Me.wake() },
                Ie = {},
                je = /^[\d.\-M][\d.\-,\s]/,
                Re = /["']/g,
                ze = function(t) { for (var e, n, i, r = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, l = s.length; a < l; a++) n = s[a], e = a !== l - 1 ? n.lastIndexOf(",") : n.length, i = n.substr(0, e), r[o] = isNaN(i) ? i.replace(Re, "").trim() : +i, o = n.substr(e + 1).trim(); return r },
                He = function(t) { return function(e) { return 1 - t(1 - e) } },
                $e = function t(e, n) { for (var i, r = e._first; r;) r instanceof Ye ? t(r, n) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === n || (r.timeline ? t(r.timeline, n) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = n)), r = r._next },
                Be = function(t, e) {
                    return t && (F(t) ? t : Ie[t] || function(t) {
                        var e, n, i, r, s = (t + "").split("("),
                            o = Ie[s[0]];
                        return o && s.length > 1 && o.config ? o.config.apply(null, ~t.indexOf("{") ? [ze(s[1])] : (e = t, n = e.indexOf("(") + 1, i = e.indexOf(")"), r = e.indexOf("(", n), e.substring(n, ~r && r < i ? e.indexOf(")", i + 1) : i)).split(",").map(Lt)) : Ie._CE && je.test(t) ? Ie._CE("", t) : o
                    }(t)) || e
                },
                qe = function(t, e, n, i) { void 0 === n && (n = function(t) { return 1 - e(1 - t) }), void 0 === i && (i = function(t) { return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2 }); var r, s = { easeIn: e, easeOut: n, easeInOut: i }; return Tt(t, (function(t) { for (var e in Ie[t] = ot[t] = s, Ie[r = t.toLowerCase()] = n, s) Ie[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ie[t + "." + e] = s[e] })), s },
                We = function(t) { return function(e) { return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2 } },
                Fe = function t(e, n, i) {
                    var r = n >= 1 ? n : 1,
                        s = (i || (e ? .3 : .45)) / (n < 1 ? n : 1),
                        o = s / R * (Math.asin(1 / r) || 0),
                        a = function(t) { return 1 === t ? 1 : r * Math.pow(2, -10 * t) * q((t - o) * s) + 1 },
                        l = "out" === e ? a : "in" === e ? function(t) { return 1 - a(1 - t) } : We(a);
                    return s = R / s, l.config = function(n, i) { return t(e, n, i) }, l
                },
                Ue = function t(e, n) {
                    void 0 === n && (n = 1.70158);
                    var i = function(t) { return t ? --t * t * ((n + 1) * t + n) + 1 : 0 },
                        r = "out" === e ? i : "in" === e ? function(t) { return 1 - i(1 - t) } : We(i);
                    return r.config = function(n) { return t(e, n) }, r
                };
            Tt("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
                var n = e < 5 ? e + 1 : e;
                qe(t + ",Power" + (n - 1), e ? function(t) { return Math.pow(t, n) } : function(t) { return t }, (function(t) { return 1 - Math.pow(1 - t, n) }), (function(t) { return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2 }))
            })), Ie.Linear.easeNone = Ie.none = Ie.Linear.easeIn, qe("Elastic", Fe("in"), Fe("out"), Fe()), S = 7.5625, L = 1 / (D = 2.75), qe("Bounce", (function(t) { return 1 - N(1 - t) }), N = function(t) { return t < L ? S * t * t : t < .7272727272727273 ? S * Math.pow(t - 1.5 / D, 2) + .75 : t < .9090909090909092 ? S * (t -= 2.25 / D) * t + .9375 : S * Math.pow(t - 2.625 / D, 2) + .984375 }), qe("Expo", (function(t) { return t ? Math.pow(2, 10 * (t - 1)) : 0 })), qe("Circ", (function(t) { return -($(1 - t * t) - 1) })), qe("Sine", (function(t) { return 1 === t ? 1 : 1 - B(t * z) })), qe("Back", Ue("in"), Ue("out"), Ue()), Ie.SteppedEase = Ie.steps = ot.SteppedEase = {
                config: function(t, e) {
                    void 0 === t && (t = 1);
                    var n = 1 / t,
                        i = t + (e ? 0 : 1),
                        r = e ? 1 : 0;
                    return function(t) { return ((i * ae(0, .99999999, t) | 0) + r) * n }
                }
            }, P.ease = Ie["quad.out"], Tt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) { return bt += t + "," + t + "Params," }));
            var Xe = function(t, e) { this.id = H++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Et, this.set = e ? e.getSetter : hn },
                Ve = function() {
                    function t(t) { this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, ee(this, +t.duration, 1, 1), this.data = t.data, f || Me.wake() }
                    var e = t.prototype;
                    return e.delay = function(t) { return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay }, e.duration = function(t) { return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur }, e.totalDuration = function(t) { return arguments.length ? (this._dirty = 0, ee(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur }, e.totalTime = function(t, e) { if (Pe(), !arguments.length) return this._tTime; var n = this._dp; if (n && n.smoothChildTiming && this._ts) { for (Yt(this, t), !n._dp || n.parent || Kt(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Qt(this._dp, this, this._start - this._delay) } return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === j || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Dt(this, t, e)), this }, e.time = function(t, e) { return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ft(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time }, e.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio }, e.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ft(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio }, e.iteration = function(t, e) { var n = this.duration() + this._rDelay; return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Ut(this._tTime, n) + 1 : 1 }, e.timeScale = function(t) { if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts; if (this._rts === t) return this; var e = this.parent && this._ts ? Xt(this.parent._time, this) : this._tTime; return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(ae(-this._delay, this._tDur, e), !0), Vt(this), qt(this) }, e.paused = function(t) { return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== j && (this._tTime -= j)))), this) : this._ps }, e.startTime = function(t) { if (arguments.length) { this._start = t; var e = this.parent || this._dp; return e && (e._sort || !this.parent) && Qt(e, this, t - this._delay), this } return this._start }, e.endTime = function(t) { return this._start + (Y(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1) }, e.rawTime = function(t) { var e = this.parent || this._dp; return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Xt(e.rawTime(t), this) : this._tTime : this._tTime }, e.globalTime = function(t) { for (var e = this, n = arguments.length ? t : e.rawTime(); e;) n = e._start + n / (e._ts || 1), e = e._dp; return n }, e.repeat = function(t) { return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, ne(this)) : -2 === this._repeat ? 1 / 0 : this._repeat }, e.repeatDelay = function(t) { if (arguments.length) { var e = this._time; return this._rDelay = t, ne(this), e ? this.time(e) : this } return this._rDelay }, e.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, e.seek = function(t, e) { return this.totalTime(re(this, t), Y(e)) }, e.restart = function(t, e) { return this.play().totalTime(t ? -this._delay : 0, Y(e)) }, e.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, e.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, e.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, e.resume = function() { return this.paused(!1) }, e.reversed = function(t) { return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0 }, e.invalidate = function() { return this._initted = this._act = 0, this._zTime = -1e-8, this }, e.isActive = function() {
                        var t, e = this.parent || this._dp,
                            n = this._start;
                        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - j))
                    }, e.eventCallback = function(t, e, n) { var i = this.vars; return arguments.length > 1 ? (e ? (i[t] = e, n && (i[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t] }, e.then = function(t) {
                        var e = this;
                        return new Promise((function(n) {
                            var i = F(t) ? t : Nt,
                                r = function() {
                                    var t = e.then;
                                    e.then = null, F(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), n(i), e.then = t
                                };
                            e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
                        }))
                    }, e.kill = function() { xe(this) }, t
                }();
            Mt(Ve.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: !1, _rts: 1 });
            var Ye = function(t) {
                function e(e, n) { var r; return void 0 === e && (e = {}), (r = t.call(this, e) || this).labels = {}, r.smoothChildTiming = !!e.smoothChildTiming, r.autoRemoveChildren = !!e.autoRemoveChildren, r._sort = Y(e.sortChildren), o && Qt(e.parent || o, i(r), n), e.reversed && r.reverse(), e.paused && r.paused(!0), e.scrollTrigger && Gt(i(r), e.scrollTrigger), r }
                r(e, t);
                var n = e.prototype;
                return n.to = function(t, e, n) { return se(0, arguments, this), this }, n.from = function(t, e, n) { return se(1, arguments, this), this }, n.fromTo = function(t, e, n, i) { return se(2, arguments, this), this }, n.set = function(t, e, n) { return e.duration = 0, e.parent = this, Rt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new on(t, e, re(this, n), 1), this }, n.call = function(t, e, n) { return Qt(this, on.delayedCall(0, t, e), n) }, n.staggerTo = function(t, e, n, i, r, s, o) { return n.duration = e, n.stagger = n.stagger || i, n.onComplete = s, n.onCompleteParams = o, n.parent = this, new on(t, n, re(this, r)), this }, n.staggerFrom = function(t, e, n, i, r, s, o) { return n.runBackwards = 1, Rt(n).immediateRender = Y(n.immediateRender), this.staggerTo(t, e, n, i, r, s, o) }, n.staggerFromTo = function(t, e, n, i, r, s, o, a) { return i.startAt = n, Rt(i).immediateRender = Y(i.immediateRender), this.staggerTo(t, e, i, r, s, o, a) }, n.render = function(t, e, n) {
                    var i, r, s, a, l, c, u, h, d, f, p, g, m = this._time,
                        _ = this._dirty ? this.totalDuration() : this._tDur,
                        v = this._dur,
                        y = t <= 0 ? 0 : At(t),
                        b = this._zTime < 0 != t < 0 && (this._initted || !v);
                    if (this !== o && y > _ && t >= 0 && (y = _), y !== this._tTime || n || b) {
                        if (m !== this._time && v && (y += this._time - m, t += this._time - m), i = y, d = this._start, c = !(h = this._ts), b && (v || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                            if (p = this._yoyo, l = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * l + t, e, n);
                            if (i = At(y % l), y === _ ? (a = this._repeat, i = v) : ((a = ~~(y / l)) && a === y / l && (i = v, a--), i > v && (i = v)), f = Ut(this._tTime, l), !m && this._tTime && f !== a && (f = a), p && 1 & a && (i = v - i, g = 1), a !== f && !this._lock) {
                                var w = p && 1 & f,
                                    x = w === (p && 1 & a);
                                if (a < f && (w = !w), m = w ? 0 : v, this._lock = 1, this.render(m || (g ? 0 : At(a * l)), e, !v)._lock = 0, this._tTime = y, !e && this.parent && we(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), m && m !== this._time || c !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                                if (v = this._dur, _ = this._tDur, x && (this._lock = 2, m = w ? v : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !c) return this;
                                $e(this, g)
                            }
                        }
                        if (this._hasPause && !this._forcing && this._lock < 2 && (u = function(t, e, n) {
                                var i;
                                if (n > e)
                                    for (i = t._first; i && i._start <= n;) {
                                        if ("isPause" === i.data && i._start > e) return i;
                                        i = i._next
                                    } else
                                        for (i = t._last; i && i._start >= n;) {
                                            if ("isPause" === i.data && i._start < e) return i;
                                            i = i._prev
                                        }
                            }(this, At(m), At(i)), u && (y -= i - (i = u._start))), this._tTime = y, this._time = i, this._act = !h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, m = 0), !m && i && !e && (we(this, "onStart"), this._tTime !== y)) return this;
                        if (i >= m && t >= 0)
                            for (r = this._first; r;) {
                                if (s = r._next, (r._act || i >= r._start) && r._ts && u !== r) { if (r.parent !== this) return this.render(t, e, n); if (r.render(r._ts > 0 ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, n), i !== this._time || !this._ts && !c) { u = 0, s && (y += this._zTime = -1e-8); break } }
                                r = s
                            } else {
                                r = this._last;
                                for (var E = t < 0 ? t : i; r;) {
                                    if (s = r._prev, (r._act || E <= r._end) && r._ts && u !== r) { if (r.parent !== this) return this.render(t, e, n); if (r.render(r._ts > 0 ? (E - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (E - r._start) * r._ts, e, n), i !== this._time || !this._ts && !c) { u = 0, s && (y += this._zTime = E ? -1e-8 : j); break } }
                                    r = s
                                }
                            }
                        if (u && !e && (this.pause(), u.render(i >= m ? 0 : -1e-8)._zTime = i >= m ? 1 : -1, this._ts)) return this._start = d, Vt(this), this.render(t, e, n);
                        this._onUpdate && !e && we(this, "onUpdate", !0), (y === _ && this._tTime >= this.totalDuration() || !y && m) && (d !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || ((t || !v) && (y === _ && this._ts > 0 || !y && this._ts < 0) && $t(this, 1), e || t < 0 && !m || !y && !m && _ || (we(this, y === _ && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < _ && this.timeScale() > 0) && this._prom())))
                    }
                    return this
                }, n.add = function(t, e) {
                    var n = this;
                    if (U(e) || (e = re(this, e, t)), !(t instanceof Ve)) {
                        if (Z(t)) return t.forEach((function(t) { return n.add(t, e) })), this;
                        if (W(t)) return this.addLabel(t, e);
                        if (!F(t)) return this;
                        t = on.delayedCall(0, t)
                    }
                    return this !== t ? Qt(this, t, e) : this
                }, n.getChildren = function(t, e, n, i) { void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === i && (i = -I); for (var r = [], s = this._first; s;) s._start >= i && (s instanceof on ? e && r.push(s) : (n && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, n)))), s = s._next; return r }, n.getById = function(t) {
                    for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
                        if (e[n].vars.id === t) return e[n]
                }, n.remove = function(t) { return W(t) ? this.removeLabel(t) : F(t) ? this.killTweensOf(t) : (Ht(this, t), t === this._recent && (this._recent = this._last), Bt(this)) }, n.totalTime = function(e, n) { return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = At(Me.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime }, n.addLabel = function(t, e) { return this.labels[t] = re(this, e), this }, n.removeLabel = function(t) { return delete this.labels[t], this }, n.addPause = function(t, e, n) { var i = on.delayedCall(0, e || dt, n); return i.data = "isPause", this._hasPause = 1, Qt(this, i, re(this, t)) }, n.removePause = function(t) { var e = this._first; for (t = re(this, t); e;) e._start === t && "isPause" === e.data && $t(e), e = e._next }, n.killTweensOf = function(t, e, n) { for (var i = this.getTweensOf(t, n), r = i.length; r--;) Ke !== i[r] && i[r].kill(t, e); return this }, n.getTweensOf = function(t, e) { for (var n, i = [], r = he(t), s = this._first, o = U(e); s;) s instanceof on ? Ot(s._targets, r) && (o ? (!Ke || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (n = s.getTweensOf(r, e)).length && i.push.apply(i, n), s = s._next; return i }, n.tweenTo = function(t, e) {
                    e = e || {};
                    var n, i = this,
                        r = re(i, t),
                        s = e,
                        o = s.startAt,
                        a = s.onStart,
                        l = s.onStartParams,
                        c = s.immediateRender,
                        u = on.to(i, Mt({
                            ease: e.ease || "none",
                            lazy: !1,
                            immediateRender: !1,
                            time: r,
                            overwrite: "auto",
                            duration: e.duration || Math.abs((r - (o && "time" in o ? o.time : i._time)) / i.timeScale()) || j,
                            onStart: function() {
                                if (i.pause(), !n) {
                                    var t = e.duration || Math.abs((r - (o && "time" in o ? o.time : i._time)) / i.timeScale());
                                    u._dur !== t && ee(u, t, 0, 1).render(u._time, !0, !0), n = 1
                                }
                                a && a.apply(u, l || [])
                            }
                        }, e));
                    return c ? u.render(0) : u
                }, n.tweenFromTo = function(t, e, n) { return this.tweenTo(e, Mt({ startAt: { time: re(this, t) } }, n)) }, n.recent = function() { return this._recent }, n.nextLabel = function(t) { return void 0 === t && (t = this._time), be(this, re(this, t)) }, n.previousLabel = function(t) { return void 0 === t && (t = this._time), be(this, re(this, t), 1) }, n.currentLabel = function(t) { return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + j) }, n.shiftChildren = function(t, e, n) {
                    void 0 === n && (n = 0);
                    for (var i, r = this._first, s = this.labels; r;) r._start >= n && (r._start += t, r._end += t), r = r._next;
                    if (e)
                        for (i in s) s[i] >= n && (s[i] += t);
                    return Bt(this)
                }, n.invalidate = function() { var e = this._first; for (this._lock = 0; e;) e.invalidate(), e = e._next; return t.prototype.invalidate.call(this) }, n.clear = function(t) { void 0 === t && (t = !0); for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e; return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Bt(this) }, n.totalDuration = function(t) {
                    var e, n, i, r = 0,
                        s = this,
                        a = s._last,
                        l = I;
                    if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
                    if (s._dirty) {
                        for (i = s.parent; a;) e = a._prev, a._dirty && a.totalDuration(), (n = a._start) > l && s._sort && a._ts && !s._lock ? (s._lock = 1, Qt(s, a, n - a._delay, 1)._lock = 0) : l = n, n < 0 && a._ts && (r -= n, (!i && !s._dp || i && i.smoothChildTiming) && (s._start += n / s._ts, s._time -= n, s._tTime -= n), s.shiftChildren(-n, !1, -Infinity), l = 0), a._end > r && a._ts && (r = a._end), a = e;
                        ee(s, s === o && s._time > r ? s._time : r, 1, 1), s._dirty = 0
                    }
                    return s._tDur
                }, e.updateRoot = function(t) {
                    if (o._ts && (Dt(o, Xt(t, o)), h = Me.frame), Me.frame >= vt) {
                        vt += M.autoSleep || 120;
                        var e = o._first;
                        if ((!e || !e._ts) && M.autoSleep && Me._listeners.length < 2) {
                            for (; e && !e._ts;) e = e._next;
                            e || Me.sleep()
                        }
                    }
                }, e
            }(Ve);
            Mt(Ye.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
            var Ke, Qe, Ge = function(t, e, n, i, r, s, o) {
                    var a, l, c, u, h, d, f, p, g = new bn(this._pt, t, e, 0, 1, pn, null, r),
                        m = 0,
                        _ = 0;
                    for (g.b = n, g.e = i, n += "", (f = ~(i += "").indexOf("random(")) && (i = ve(i)), s && (s(p = [n, i], t, e), n = p[0], i = p[1]), l = n.match(nt) || []; a = nt.exec(i);) u = a[0], h = i.substring(m, a.index), c ? c = (c + 1) % 5 : "rgba(" === h.substr(-5) && (c = 1), u !== l[_++] && (d = parseFloat(l[_ - 1]) || 0, g._pt = { _next: g._pt, p: h || 1 === _ ? h : ",", s: d, c: "=" === u.charAt(1) ? kt(d, u) - d : parseFloat(u) - d, m: c && c < 4 ? Math.round : 0 }, m = nt.lastIndex);
                    return g.c = m < i.length ? i.substring(m, i.length) : "", g.fp = o, (it.test(i) || f) && (g.e = 0), this._pt = g, g
                },
                Ze = function(t, e, n, i, r, s, o, a, l) {
                    F(i) && (i = i(r || 0, t, s));
                    var c, u = t[e],
                        h = "get" !== n ? n : F(u) ? l ? t[e.indexOf("set") || !F(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : u,
                        d = F(u) ? l ? cn : ln : an;
                    if (W(i) && (~i.indexOf("random(") && (i = ve(i)), "=" === i.charAt(1) && ((c = kt(h, i) + (le(h) || 0)) || 0 === c) && (i = c)), h !== i || Qe) return isNaN(h * i) || "" === i ? (!u && !(e in t) && ct(e, i), Ge.call(this, t, e, h, i, d, a || M.stringFilter, l)) : (c = new bn(this._pt, t, e, +h || 0, i - (h || 0), "boolean" == typeof u ? fn : dn, 0, d), l && (c.fp = l), o && c.modifier(o, this, t), this._pt = c)
                },
                Je = function(t, e, n, i, r, s) {
                    var o, a, l, c;
                    if (mt[t] && !1 !== (o = new mt[t]).init(r, o.rawVars ? e[t] : function(t, e, n, i, r) { if (F(t) && (t = nn(t, r, e, n, i)), !V(t) || t.style && t.nodeType || Z(t) || G(t)) return W(t) ? nn(t, r, e, n, i) : t; var s, o = {}; for (s in t) o[s] = nn(t[s], r, e, n, i); return o }(e[t], i, r, s, n), n, i, s) && (n._pt = a = new bn(n._pt, r, t, 0, 1, o.render, o, 0, o.priority), n !== d))
                        for (l = n._ptLookup[n._targets.indexOf(r)], c = o._props.length; c--;) l[o._props[c]] = a;
                    return o
                },
                tn = function t(e, n) {
                    var i, r, a, l, c, u, h, d, f, p, g, m, _, v = e.vars,
                        y = v.ease,
                        b = v.startAt,
                        w = v.immediateRender,
                        x = v.lazy,
                        E = v.onUpdate,
                        T = v.onUpdateParams,
                        C = v.callbackScope,
                        A = v.runBackwards,
                        k = v.yoyoEase,
                        O = v.keyframes,
                        S = v.autoRevert,
                        D = e._dur,
                        L = e._startAt,
                        N = e._targets,
                        M = e.parent,
                        R = M && "nested" === M.data ? M.parent._targets : N,
                        z = "auto" === e._overwrite && !s,
                        H = e.timeline;
                    if (H && (!O || !y) && (y = "none"), e._ease = Be(y, P.ease), e._yEase = k ? He(Be(!0 === k ? y : k, P.ease)) : 0, k && e._yoyo && !e._repeat && (k = e._yEase, e._yEase = e._ease, e._ease = k), e._from = !H && !!v.runBackwards, !H || O && !v.stagger) {
                        if (m = (d = N[0] ? xt(N[0]).harness : 0) && v[d.prop], i = jt(v, ft), L && ($t(L.render(-1, !0)), L._lazy = 0), b)
                            if ($t(e._startAt = on.set(N, Mt({ data: "isStart", overwrite: !1, parent: M, immediateRender: !0, lazy: Y(x), startAt: null, delay: 0, onUpdate: E, onUpdateParams: T, callbackScope: C, stagger: 0 }, b))), n < 0 && !w && !S && e._startAt.render(-1, !0), w) { if (n > 0 && !S && (e._startAt = 0), D && n <= 0) return void(n && (e._zTime = n)) } else !1 === S && (e._startAt = 0);
                        else if (A && D)
                            if (L) !S && (e._startAt = 0);
                            else if (n && (w = !1), a = Mt({ overwrite: !1, data: "isFromStart", lazy: w && Y(x), immediateRender: w, stagger: 0, parent: M }, i), m && (a[d.prop] = m), $t(e._startAt = on.set(N, a)), n < 0 && e._startAt.render(-1, !0), e._zTime = n, w) { if (!n) return } else t(e._startAt, j);
                        for (e._pt = e._ptCache = 0, x = D && Y(x) || x && !D, r = 0; r < N.length; r++) {
                            if (h = (c = N[r])._gsap || wt(N)[r]._gsap, e._ptLookup[r] = p = {}, gt[h.id] && pt.length && St(), g = R === N ? r : R.indexOf(c), d && !1 !== (f = new d).init(c, m || i, e, g, R) && (e._pt = l = new bn(e._pt, c, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((function(t) { p[t] = l })), f.priority && (u = 1)), !d || m)
                                for (a in i) mt[a] && (f = Je(a, i, e, g, c, R)) ? f.priority && (u = 1) : p[a] = l = Ze.call(e, c, a, "get", i[a], g, R, 0, v.stringFilter);
                            e._op && e._op[r] && e.kill(c, e._op[r]), z && e._pt && (Ke = e, o.killTweensOf(c, p, e.globalTime(n)), _ = !e.parent, Ke = 0), e._pt && x && (gt[h.id] = 1)
                        }
                        u && yn(e), e._onInit && e._onInit(e)
                    }
                    e._onUpdate = E, e._initted = (!e._op || e._pt) && !_, O && n <= 0 && H.render(I, !0, !0)
                },
                en = function(t, e, n, i) {
                    var r, s, o = e.ease || i || "power1.inOut";
                    if (Z(e)) s = n[t] || (n[t] = []), e.forEach((function(t, n) { return s.push({ t: n / (e.length - 1) * 100, v: t, e: o }) }));
                    else
                        for (r in e) s = n[r] || (n[r] = []), "ease" === r || s.push({ t: parseFloat(t), v: e[r], e: o })
                },
                nn = function(t, e, n, i, r) { return F(t) ? t.call(e, n, i, r) : W(t) && ~t.indexOf("random(") ? ve(t) : t },
                rn = bt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
                sn = {};
            Tt(rn + ",id,stagger,delay,duration,paused,scrollTrigger", (function(t) { return sn[t] = 1 }));
            var on = function(t) {
                function e(e, n, r, a) {
                    var l;
                    "number" == typeof n && (r.duration = n, n = r, r = null);
                    var c, u, h, d, f, p, g, m, _ = (l = t.call(this, a ? n : Rt(n)) || this).vars,
                        v = _.duration,
                        y = _.delay,
                        b = _.immediateRender,
                        w = _.stagger,
                        x = _.overwrite,
                        E = _.keyframes,
                        T = _.defaults,
                        C = _.scrollTrigger,
                        A = _.yoyoEase,
                        k = n.parent || o,
                        O = (Z(e) || G(e) ? U(e[0]) : "length" in n) ? [e] : he(e);
                    if (l._targets = O.length ? wt(O) : ut("GSAP target " + e + " not found. https://greensock.com", !M.nullTargetWarn) || [], l._ptLookup = [], l._overwrite = x, E || w || Q(v) || Q(y)) {
                        if (n = l.vars, (c = l.timeline = new Ye({ data: "nested", defaults: T || {} })).kill(), c.parent = c._dp = i(l), c._start = 0, w || Q(v) || Q(y)) {
                            if (d = O.length, g = w && fe(w), V(w))
                                for (f in w) ~rn.indexOf(f) && (m || (m = {}), m[f] = w[f]);
                            for (u = 0; u < d; u++)(h = jt(n, sn)).stagger = 0, A && (h.yoyoEase = A), m && Pt(h, m), p = O[u], h.duration = +nn(v, i(l), u, p, O), h.delay = (+nn(y, i(l), u, p, O) || 0) - l._delay, !w && 1 === d && h.delay && (l._delay = y = h.delay, l._start += y, h.delay = 0), c.to(p, h, g ? g(u, p, O) : 0), c._ease = Ie.none;
                            c.duration() ? v = y = 0 : l.timeline = 0
                        } else if (E) {
                            Rt(Mt(c.vars.defaults, { ease: "none" })), c._ease = Be(E.ease || n.ease || "none");
                            var S, D, L, N = 0;
                            if (Z(E)) E.forEach((function(t) { return c.to(O, t, ">") }));
                            else {
                                for (f in h = {}, E) "ease" === f || "easeEach" === f || en(f, E[f], h, E.easeEach);
                                for (f in h)
                                    for (S = h[f].sort((function(t, e) { return t.t - e.t })), N = 0, u = 0; u < S.length; u++)(L = { ease: (D = S[u]).e, duration: (D.t - (u ? S[u - 1].t : 0)) / 100 * v })[f] = D.v, c.to(O, L, N), N += L.duration;
                                c.duration() < v && c.to({}, { duration: v - c.duration() })
                            }
                        }
                        v || l.duration(v = c.duration())
                    } else l.timeline = 0;
                    return !0 !== x || s || (Ke = i(l), o.killTweensOf(O), Ke = 0), Qt(k, i(l), r), n.reversed && l.reverse(), n.paused && l.paused(!0), (b || !v && !E && l._start === At(k._time) && Y(b) && Wt(i(l)) && "nested" !== k.data) && (l._tTime = -1e-8, l.render(Math.max(0, -y))), C && Gt(i(l), C), l
                }
                r(e, t);
                var n = e.prototype;
                return n.render = function(t, e, n) {
                    var i, r, s, o, a, l, c, u, h, d = this._time,
                        f = this._tDur,
                        p = this._dur,
                        g = t > f - j && t >= 0 ? f : t < j ? 0 : t;
                    if (p) {
                        if (g !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                            if (i = g, u = this.timeline, this._repeat) {
                                if (o = p + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, n);
                                if (i = At(g % o), g === f ? (s = this._repeat, i = p) : ((s = ~~(g / o)) && s === g / o && (i = p, s--), i > p && (i = p)), (l = this._yoyo && 1 & s) && (h = this._yEase, i = p - i), a = Ut(this._tTime, o), i === d && !n && this._initted) return this._tTime = g, this;
                                s !== a && (u && this._yEase && $e(u, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = n = 1, this.render(At(o * s), !0).invalidate()._lock = 0))
                            }
                            if (!this._initted) { if (Zt(this, t < 0 ? t : i, n, e)) return this._tTime = 0, this; if (d !== this._time) return this; if (p !== this._dur) return this.render(t, e, n) }
                            if (this._tTime = g, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (h || this._ease)(i / p), this._from && (this.ratio = c = 1 - c), i && !d && !e && (we(this, "onStart"), this._tTime !== g)) return this;
                            for (r = this._pt; r;) r.r(c, r.d), r = r._next;
                            u && u.render(t < 0 ? t : !i && l ? -1e-8 : u._dur * u._ease(i / this._dur), e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), we(this, "onUpdate")), this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && we(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !p) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && $t(this, 1), e || t < 0 && !d || !g && !d || (we(this, g === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < f && this.timeScale() > 0) && this._prom()))
                        }
                    } else ! function(t, e, n, i) {
                        var r, s, o, a = t.ratio,
                            l = e < 0 || !e && (!t._start && Jt(t) && (t._initted || !te(t)) || (t._ts < 0 || t._dp._ts < 0) && !te(t)) ? 0 : 1,
                            c = t._rDelay,
                            u = 0;
                        if (c && t._repeat && (u = ae(0, t._tDur, e), s = Ut(u, c), t._yoyo && 1 & s && (l = 1 - l), s !== Ut(t._tTime, c) && (a = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== a || i || t._zTime === j || !e && t._zTime) {
                            if (!t._initted && Zt(t, e, i, n)) return;
                            for (o = t._zTime, t._zTime = e || (n ? j : 0), n || (n = e && !o), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = u, r = t._pt; r;) r.r(l, r.d), r = r._next;
                            t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !n && we(t, "onUpdate"), u && t._repeat && !n && t.parent && we(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && $t(t, 1), n || (we(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                        } else t._zTime || (t._zTime = e)
                    }(this, t, e, n);
                    return this
                }, n.targets = function() { return this._targets }, n.invalidate = function() { return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this) }, n.resetTo = function(t, e, n, i) {
                    f || Me.wake(), this._ts || this.play();
                    var r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                    return this._initted || tn(this, r),
                        function(t, e, n, i, r, s, o) {
                            var a, l, c, u = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                            if (!u)
                                for (u = t._ptCache[e] = [], l = t._ptLookup, c = t._targets.length; c--;) {
                                    if ((a = l[c][e]) && a.d && a.d._pt)
                                        for (a = a.d._pt; a && a.p !== e;) a = a._next;
                                    if (!a) return Qe = 1, t.vars[e] = "+=0", tn(t, o), Qe = 0, 1;
                                    u.push(a)
                                }
                            for (c = u.length; c--;)(a = u[c]).s = !i && 0 !== i || r ? a.s + (i || 0) + s * a.c : i, a.c = n - a.s, a.e && (a.e = Ct(n) + le(a.e)), a.b && (a.b = a.s + le(a.b))
                        }(this, t, e, n, i, this._ease(r / this._dur), r) ? this.resetTo(t, e, n, i) : (Yt(this, 0), this.parent || zt(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
                }, n.kill = function(t, e) {
                    if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? xe(this) : this;
                    if (this.timeline) { var n = this.timeline.totalDuration(); return this.timeline.killTweensOf(t, e, Ke && !0 !== Ke.vars.overwrite)._first || xe(this), this.parent && n !== this.timeline.totalDuration() && ee(this, this._dur * this.timeline._tDur / n, 0, 1), this }
                    var i, r, s, o, a, l, c, u = this._targets,
                        h = t ? he(t) : u,
                        d = this._ptLookup,
                        f = this._pt;
                    if ((!e || "all" === e) && function(t, e) { for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n];); return n < 0 }(u, h)) return "all" === e && (this._pt = 0), xe(this);
                    for (i = this._op = this._op || [], "all" !== e && (W(e) && (a = {}, Tt(e, (function(t) { return a[t] = 1 })), e = a), e = function(t, e) {
                            var n, i, r, s, o = t[0] ? xt(t[0]).harness : 0,
                                a = o && o.aliases;
                            if (!a) return e;
                            for (i in n = Pt({}, e), a)
                                if (i in n)
                                    for (r = (s = a[i].split(",")).length; r--;) n[s[r]] = n[i];
                            return n
                        }(u, e)), c = u.length; c--;)
                        if (~h.indexOf(u[c]))
                            for (a in r = d[c], "all" === e ? (i[c] = e, o = r, s = {}) : (s = i[c] = i[c] || {}, o = e), o)(l = r && r[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || Ht(this, l, "_pt"), delete r[a]), "all" !== s && (s[a] = 1);
                    return this._initted && !this._pt && f && xe(this), this
                }, e.to = function(t, n) { return new e(t, n, arguments[2]) }, e.from = function(t, e) { return se(1, arguments) }, e.delayedCall = function(t, n, i, r) { return new e(n, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: n, onReverseComplete: n, onCompleteParams: i, onReverseCompleteParams: i, callbackScope: r }) }, e.fromTo = function(t, e, n) { return se(2, arguments) }, e.set = function(t, n) { return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(t, n) }, e.killTweensOf = function(t, e, n) { return o.killTweensOf(t, e, n) }, e
            }(Ve);
            Mt(on.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), Tt("staggerTo,staggerFrom,staggerFromTo", (function(t) {
                on[t] = function() {
                    var e = new Ye,
                        n = ce.call(arguments, 0);
                    return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
                }
            }));
            var an = function(t, e, n) { return t[e] = n },
                ln = function(t, e, n) { return t[e](n) },
                cn = function(t, e, n, i) { return t[e](i.fp, n) },
                un = function(t, e, n) { return t.setAttribute(e, n) },
                hn = function(t, e) { return F(t[e]) ? ln : X(t[e]) && t.setAttribute ? un : an },
                dn = function(t, e) { return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e) },
                fn = function(t, e) { return e.set(e.t, e.p, !!(e.s + e.c * t), e) },
                pn = function(t, e) {
                    var n = e._pt,
                        i = "";
                    if (!t && e.b) i = e.b;
                    else if (1 === t && e.e) i = e.e;
                    else {
                        for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i, n = n._next;
                        i += e.c
                    }
                    e.set(e.t, e.p, i, e)
                },
                gn = function(t, e) { for (var n = e._pt; n;) n.r(t, n.d), n = n._next },
                mn = function(t, e, n, i) { for (var r, s = this._pt; s;) r = s._next, s.p === i && s.modifier(t, e, n), s = r },
                _n = function(t) { for (var e, n, i = this._pt; i;) n = i._next, i.p === t && !i.op || i.op === t ? Ht(this, i, "_pt") : i.dep || (e = 1), i = n; return !e },
                vn = function(t, e, n, i) { i.mSet(t, e, i.m.call(i.tween, n, i.mt), i) },
                yn = function(t) {
                    for (var e, n, i, r, s = t._pt; s;) {
                        for (e = s._next, n = i; n && n.pr > s.pr;) n = n._next;
                        (s._prev = n ? n._prev : r) ? s._prev._next = s: i = s, (s._next = n) ? n._prev = s : r = s, s = e
                    }
                    t._pt = i
                },
                bn = function() {
                    function t(t, e, n, i, r, s, o, a, l) { this.t = e, this.s = i, this.c = r, this.p = n, this.r = s || dn, this.d = o || this, this.set = a || an, this.pr = l || 0, this._next = t, t && (t._prev = this) }
                    return t.prototype.modifier = function(t, e, n) { this.mSet = this.mSet || this.set, this.set = vn, this.m = t, this.mt = n, this.tween = e }, t
                }();
            Tt(bt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) { return ft[t] = 1 })), ot.TweenMax = ot.TweenLite = on, ot.TimelineLite = ot.TimelineMax = Ye, o = new Ye({ sortChildren: !1, defaults: P, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 }), M.stringFilter = Ne;
            var wn = {
                registerPlugin: function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    e.forEach((function(t) { return Ee(t) }))
                },
                timeline: function(t) { return new Ye(t) },
                getTweensOf: function(t, e) { return o.getTweensOf(t, e) },
                getProperty: function(t, e, n, i) {
                    W(t) && (t = he(t)[0]);
                    var r = xt(t || {}).get,
                        s = n ? Nt : Lt;
                    return "native" === n && (n = ""), t ? e ? s((mt[e] && mt[e].get || r)(t, e, n, i)) : function(e, n, i) { return s((mt[e] && mt[e].get || r)(t, e, n, i)) } : t
                },
                quickSetter: function(t, e, n) {
                    if ((t = he(t)).length > 1) {
                        var i = t.map((function(t) { return Tn.quickSetter(t, e, n) })),
                            r = i.length;
                        return function(t) { for (var e = r; e--;) i[e](t) }
                    }
                    t = t[0] || {};
                    var s = mt[e],
                        o = xt(t),
                        a = o.harness && (o.harness.aliases || {})[e] || e,
                        l = s ? function(e) {
                            var i = new s;
                            d._pt = 0, i.init(t, n ? e + n : e, d, 0, [t]), i.render(1, i), d._pt && gn(1, d)
                        } : o.set(t, a);
                    return s ? l : function(e) { return l(t, a, n ? e + n : e, o, 1) }
                },
                quickTo: function(t, e, n) {
                    var i, r = Tn.to(t, Pt(((i = {})[e] = "+=0.1", i.paused = !0, i), n || {})),
                        s = function(t, n, i) { return r.resetTo(e, t, n, i) };
                    return s.tween = r, s
                },
                isTweening: function(t) { return o.getTweensOf(t, !0).length > 0 },
                defaults: function(t) { return t && t.ease && (t.ease = Be(t.ease, P.ease)), It(P, t || {}) },
                config: function(t) { return It(M, t || {}) },
                registerEffect: function(t) {
                    var e = t.name,
                        n = t.effect,
                        i = t.plugins,
                        r = t.defaults,
                        s = t.extendTimeline;
                    (i || "").split(",").forEach((function(t) { return t && !mt[t] && !ot[t] && ut(e + " effect requires " + t + " plugin.") })), _t[e] = function(t, e, i) { return n(he(t), Mt(e || {}, r), i) }, s && (Ye.prototype[e] = function(t, n, i) { return this.add(_t[e](t, V(n) ? n : (i = n) && {}, this), i) })
                },
                registerEase: function(t, e) { Ie[t] = Be(e) },
                parseEase: function(t, e) { return arguments.length ? Be(t, e) : Ie },
                getById: function(t) { return o.getById(t) },
                exportRoot: function(t, e) { void 0 === t && (t = {}); var n, i, r = new Ye(t); for (r.smoothChildTiming = Y(t.smoothChildTiming), o.remove(r), r._dp = 0, r._time = r._tTime = o._time, n = o._first; n;) i = n._next, !e && !n._dur && n instanceof on && n.vars.onComplete === n._targets[0] || Qt(r, n, n._start - n._delay), n = i; return Qt(o, r, 0), r },
                utils: {
                    wrap: function t(e, n, i) { var r = n - e; return Z(e) ? _e(e, t(0, e.length), n) : oe(i, (function(t) { return (r + (t - e) % r) % r + e })) },
                    wrapYoyo: function t(e, n, i) {
                        var r = n - e,
                            s = 2 * r;
                        return Z(e) ? _e(e, t(0, e.length - 1), n) : oe(i, (function(t) { return e + ((t = (s + (t - e) % s) % s || 0) > r ? s - t : t) }))
                    },
                    distribute: fe,
                    random: me,
                    snap: ge,
                    normalize: function(t, e, n) { return ye(t, e, 0, 1, n) },
                    getUnit: le,
                    clamp: function(t, e, n) { return oe(n, (function(n) { return ae(t, e, n) })) },
                    splitColor: ke,
                    toArray: he,
                    selector: function(t) {
                        return t = he(t)[0] || ut("Invalid scope") || {},
                            function(e) { var n = t.current || t.nativeElement || t; return he(e, n.querySelectorAll ? n : n === t ? ut("Invalid scope") || c.createElement("div") : t) }
                    },
                    mapRange: ye,
                    pipe: function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return function(t) { return e.reduce((function(t, e) { return e(t) }), t) } },
                    unitize: function(t, e) { return function(n) { return t(parseFloat(n)) + (e || le(n)) } },
                    interpolate: function t(e, n, i, r) {
                        var s = isNaN(e + n) ? 0 : function(t) { return (1 - t) * e + t * n };
                        if (!s) {
                            var o, a, l, c, u, h = W(e),
                                d = {};
                            if (!0 === i && (r = 1) && (i = null), h) e = { p: e }, n = { p: n };
                            else if (Z(e) && !Z(n)) {
                                for (l = [], c = e.length, u = c - 2, a = 1; a < c; a++) l.push(t(e[a - 1], e[a]));
                                c--, s = function(t) { t *= c; var e = Math.min(u, ~~t); return l[e](t - e) }, i = n
                            } else r || (e = Pt(Z(e) ? [] : {}, e));
                            if (!l) {
                                for (o in n) Ze.call(d, e, o, "get", n[o]);
                                s = function(t) { return gn(t, d) || (h ? e.p : e) }
                            }
                        }
                        return oe(i, s)
                    },
                    shuffle: de
                },
                install: lt,
                effects: _t,
                ticker: Me,
                updateRoot: Ye.updateRoot,
                plugins: mt,
                globalTimeline: o,
                core: { PropTween: bn, globals: ht, Tween: on, Timeline: Ye, Animation: Ve, getCache: xt, _removeLinkedListItem: Ht, suppressOverwrites: function(t) { return s = t } }
            };
            Tt("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) { return wn[t] = on[t] })), Me.add(Ye.updateRoot), d = wn.to({}, { duration: 0 });
            var xn = function(t, e) { for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next; return n },
                En = function(t, e) {
                    return {
                        name: t,
                        rawVars: 1,
                        init: function(t, n, i) {
                            i._onInit = function(t) {
                                var i, r;
                                if (W(n) && (i = {}, Tt(n, (function(t) { return i[t] = 1 })), n = i), e) {
                                    for (r in i = {}, n) i[r] = e(n[r]);
                                    n = i
                                }! function(t, e) {
                                    var n, i, r, s = t._targets;
                                    for (n in e)
                                        for (i = s.length; i--;)(r = t._ptLookup[i][n]) && (r = r.d) && (r._pt && (r = xn(r, n)), r && r.modifier && r.modifier(e[n], t, s[i], n))
                                }(t, n)
                            }
                        }
                    }
                },
                Tn = wn.registerPlugin({ name: "attr", init: function(t, e, n, i, r) { var s, o; for (s in e)(o = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], i, r, 0, 0, s)) && (o.op = s), this._props.push(s) } }, { name: "endArray", init: function(t, e) { for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n]) } }, En("roundProps", pe), En("modifiers"), En("snap", ge)) || wn;
            on.version = Ye.version = Tn.version = "3.10.2", u = 1, K() && Pe(), Ie.Power0, Ie.Power1, Ie.Power2, Ie.Power3, Ie.Power4, Ie.Linear, Ie.Quad, Ie.Cubic, Ie.Quart, Ie.Quint, Ie.Strong, Ie.Elastic, Ie.Back, Ie.SteppedEase, Ie.Bounce, Ie.Sine, Ie.Expo, Ie.Circ;
            var Cn, An, kn, On, Sn, Dn, Ln, Nn = {},
                Mn = 180 / Math.PI,
                Pn = Math.PI / 180,
                In = Math.atan2,
                jn = /([A-Z])/g,
                Rn = /(left|right|width|margin|padding|x)/i,
                zn = /[\s,\(]\S/,
                Hn = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
                $n = function(t, e) { return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e) },
                Bn = function(t, e) { return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e) },
                qn = function(t, e) { return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e) },
                Wn = function(t, e) {
                    var n = e.s + e.c * t;
                    e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
                },
                Fn = function(t, e) { return e.set(e.t, e.p, t ? e.e : e.b, e) },
                Un = function(t, e) { return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e) },
                Xn = function(t, e, n) { return t.style[e] = n },
                Vn = function(t, e, n) { return t.style.setProperty(e, n) },
                Yn = function(t, e, n) { return t._gsap[e] = n },
                Kn = function(t, e, n) { return t._gsap.scaleX = t._gsap.scaleY = n },
                Qn = function(t, e, n, i, r) {
                    var s = t._gsap;
                    s.scaleX = s.scaleY = n, s.renderTransform(r, s)
                },
                Gn = function(t, e, n, i, r) {
                    var s = t._gsap;
                    s[e] = n, s.renderTransform(r, s)
                },
                Zn = "transform",
                Jn = Zn + "Origin",
                ti = function(t, e) { var n = An.createElementNS ? An.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : An.createElement(t); return n.style ? n : An.createElement(t) },
                ei = function t(e, n, i) { var r = getComputedStyle(e); return r[n] || r.getPropertyValue(n.replace(jn, "-$1").toLowerCase()) || r.getPropertyValue(n) || !i && t(e, ii(n) || n, 1) || "" },
                ni = "O,Moz,ms,Ms,Webkit".split(","),
                ii = function(t, e, n) {
                    var i = (e || Sn).style,
                        r = 5;
                    if (t in i && !n) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(ni[r] + t in i););
                    return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? ni[r] : "") + t
                },
                ri = function() { "undefined" != typeof window && window.document && (Cn = window, An = Cn.document, kn = An.documentElement, Sn = ti("div") || { style: {} }, ti("div"), Zn = ii(Zn), Jn = Zn + "Origin", Sn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ln = !!ii("perspective"), On = 1) },
                si = function t(e) {
                    var n, i = ti("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        r = this.parentNode,
                        s = this.nextSibling,
                        o = this.style.cssText;
                    if (kn.appendChild(i), i.appendChild(this), this.style.display = "block", e) try { n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t } catch (t) {} else this._gsapBBox && (n = this._gsapBBox());
                    return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), kn.removeChild(i), this.style.cssText = o, n
                },
                oi = function(t, e) {
                    for (var n = e.length; n--;)
                        if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
                },
                ai = function(t) { var e; try { e = t.getBBox() } catch (n) { e = si.call(t, !0) } return e && (e.width || e.height) || t.getBBox === si || (e = si.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +oi(t, ["x", "cx", "x1"]) || 0, y: +oi(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } },
                li = function(t) { return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !ai(t)) },
                ci = function(t, e) {
                    if (e) {
                        var n = t.style;
                        e in Nn && e !== Jn && (e = Zn), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(jn, "-$1").toLowerCase())) : n.removeAttribute(e)
                    }
                },
                ui = function(t, e, n, i, r, s) { var o = new bn(t._pt, e, n, 0, 1, s ? Un : Fn); return t._pt = o, o.b = i, o.e = r, t._props.push(n), o },
                hi = { deg: 1, rad: 1, turn: 1 },
                di = function t(e, n, i, r) {
                    var s, o, a, l, c = parseFloat(i) || 0,
                        u = (i + "").trim().substr((c + "").length) || "px",
                        h = Sn.style,
                        d = Rn.test(n),
                        f = "svg" === e.tagName.toLowerCase(),
                        p = (f ? "client" : "offset") + (d ? "Width" : "Height"),
                        g = 100,
                        m = "px" === r,
                        _ = "%" === r;
                    return r === u || !c || hi[r] || hi[u] ? c : ("px" !== u && !m && (c = t(e, n, i, "px")), l = e.getCTM && li(e), !_ && "%" !== u || !Nn[n] && !~n.indexOf("adius") ? (h[d ? "width" : "height"] = g + (m ? u : r), o = ~n.indexOf("adius") || "em" === r && e.appendChild && !f ? e : e.parentNode, l && (o = (e.ownerSVGElement || {}).parentNode), o && o !== An && o.appendChild || (o = An.body), (a = o._gsap) && _ && a.width && d && a.time === Me.time ? Ct(c / a.width * g) : ((_ || "%" === u) && (h.position = ei(e, "position")), o === e && (h.position = "static"), o.appendChild(Sn), s = Sn[p], o.removeChild(Sn), h.position = "absolute", d && _ && ((a = xt(o)).time = Me.time, a.width = o[p]), Ct(m ? s * c / g : s && c ? g / s * c : 0))) : (s = l ? e.getBBox()[d ? "width" : "height"] : e[p], Ct(_ ? c / s * g : c / 100 * s)))
                },
                fi = function(t, e, n, i) { var r; return On || ri(), e in Hn && "transform" !== e && ~(e = Hn[e]).indexOf(",") && (e = e.split(",")[0]), Nn[e] && "transform" !== e ? (r = Ti(t, i), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : Ci(ei(t, Jn)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || i || ~(r + "").indexOf("calc(")) && (r = _i[e] && _i[e](t, e, n) || ei(t, e) || Et(t, e) || ("opacity" === e ? 1 : 0)), n && !~(r + "").trim().indexOf(" ") ? di(t, e, r, n) + n : r },
                pi = function(t, e, n, i) {
                    if (!n || "none" === n) {
                        var r = ii(e, t, 1),
                            s = r && ei(t, r, 1);
                        s && s !== n ? (e = r, n = s) : "borderColor" === e && (n = ei(t, "borderTopColor"))
                    }
                    var o, a, l, c, u, h, d, f, p, g, m, _ = new bn(this._pt, t.style, e, 0, 1, pn),
                        v = 0,
                        y = 0;
                    if (_.b = n, _.e = i, n += "", "auto" == (i += "") && (t.style[e] = i, i = ei(t, e) || i, t.style[e] = n), Ne(o = [n, i]), i = o[1], l = (n = o[0]).match(et) || [], (i.match(et) || []).length) {
                        for (; a = et.exec(i);) d = a[0], p = i.substring(v, a.index), u ? u = (u + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (u = 1), d !== (h = l[y++] || "") && (c = parseFloat(h) || 0, m = h.substr((c + "").length), "=" === d.charAt(1) && (d = kt(c, d) + m), f = parseFloat(d), g = d.substr((f + "").length), v = et.lastIndex - g.length, g || (g = g || M.units[e] || m, v === i.length && (i += g, _.e += g)), m !== g && (c = di(t, e, h, g) || 0), _._pt = { _next: _._pt, p: p || 1 === y ? p : ",", s: c, c: f - c, m: u && u < 4 || "zIndex" === e ? Math.round : 0 });
                        _.c = v < i.length ? i.substring(v, i.length) : ""
                    } else _.r = "display" === e && "none" === i ? Un : Fn;
                    return it.test(i) && (_.e = 0), this._pt = _, _
                },
                gi = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
                mi = function(t, e) {
                    if (e.tween && e.tween._time === e.tween._dur) {
                        var n, i, r, s = e.t,
                            o = s.style,
                            a = e.u,
                            l = s._gsap;
                        if ("all" === a || !0 === a) o.cssText = "", i = 1;
                        else
                            for (r = (a = a.split(",")).length; --r > -1;) n = a[r], Nn[n] && (i = 1, n = "transformOrigin" === n ? Jn : Zn), ci(s, n);
                        i && (ci(s, Zn), l && (l.svg && s.removeAttribute("transform"), Ti(s, 1), l.uncache = 1))
                    }
                },
                _i = { clearProps: function(t, e, n, i, r) { if ("isFromStart" !== r.data) { var s = t._pt = new bn(t._pt, e, n, 0, 0, mi); return s.u = i, s.pr = -10, s.tween = r, t._props.push(n), 1 } } },
                vi = [1, 0, 0, 1, 0, 0],
                yi = {},
                bi = function(t) { return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t },
                wi = function(t) { var e = ei(t, Zn); return bi(e) ? vi : e.substr(7).match(tt).map(Ct) },
                xi = function(t, e) {
                    var n, i, r, s, o = t._gsap || xt(t),
                        a = t.style,
                        l = wi(t);
                    return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? vi : l : (l !== vi || t.offsetParent || t === kn || o.svg || (r = a.display, a.display = "block", (n = t.parentNode) && t.offsetParent || (s = 1, i = t.nextSibling, kn.appendChild(t)), l = wi(t), r ? a.display = r : ci(t, "display"), s && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : kn.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
                },
                Ei = function(t, e, n, i, r, s) {
                    var o, a, l, c = t._gsap,
                        u = r || xi(t, !0),
                        h = c.xOrigin || 0,
                        d = c.yOrigin || 0,
                        f = c.xOffset || 0,
                        p = c.yOffset || 0,
                        g = u[0],
                        m = u[1],
                        _ = u[2],
                        v = u[3],
                        y = u[4],
                        b = u[5],
                        w = e.split(" "),
                        x = parseFloat(w[0]) || 0,
                        E = parseFloat(w[1]) || 0;
                    n ? u !== vi && (a = g * v - m * _) && (l = x * (-m / a) + E * (g / a) - (g * b - m * y) / a, x = x * (v / a) + E * (-_ / a) + (_ * b - v * y) / a, E = l) : (x = (o = ai(t)).x + (~w[0].indexOf("%") ? x / 100 * o.width : x), E = o.y + (~(w[1] || w[0]).indexOf("%") ? E / 100 * o.height : E)), i || !1 !== i && c.smooth ? (y = x - h, b = E - d, c.xOffset = f + (y * g + b * _) - y, c.yOffset = p + (y * m + b * v) - b) : c.xOffset = c.yOffset = 0, c.xOrigin = x, c.yOrigin = E, c.smooth = !!i, c.origin = e, c.originIsAbsolute = !!n, t.style[Jn] = "0px 0px", s && (ui(s, c, "xOrigin", h, x), ui(s, c, "yOrigin", d, E), ui(s, c, "xOffset", f, c.xOffset), ui(s, c, "yOffset", p, c.yOffset)), t.setAttribute("data-svg-origin", x + " " + E)
                },
                Ti = function(t, e) {
                    var n = t._gsap || new Xe(t);
                    if ("x" in n && !e && !n.uncache) return n;
                    var i, r, s, o, a, l, c, u, h, d, f, p, g, m, _, v, y, b, w, x, E, T, C, A, k, O, S, D, L, N, P, I, j = t.style,
                        R = n.scaleX < 0,
                        z = "px",
                        H = "deg",
                        $ = ei(t, Jn) || "0";
                    return i = r = s = l = c = u = h = d = f = 0, o = a = 1, n.svg = !(!t.getCTM || !li(t)), m = xi(t, n.svg), n.svg && (A = (!n.uncache || "0px 0px" === $) && !e && t.getAttribute("data-svg-origin"), Ei(t, A || $, !!A || n.originIsAbsolute, !1 !== n.smooth, m)), p = n.xOrigin || 0, g = n.yOrigin || 0, m !== vi && (b = m[0], w = m[1], x = m[2], E = m[3], i = T = m[4], r = C = m[5], 6 === m.length ? (o = Math.sqrt(b * b + w * w), a = Math.sqrt(E * E + x * x), l = b || w ? In(w, b) * Mn : 0, (h = x || E ? In(x, E) * Mn + l : 0) && (a *= Math.abs(Math.cos(h * Pn))), n.svg && (i -= p - (p * b + g * x), r -= g - (p * w + g * E))) : (I = m[6], N = m[7], S = m[8], D = m[9], L = m[10], P = m[11], i = m[12], r = m[13], s = m[14], c = (_ = In(I, L)) * Mn, _ && (A = T * (v = Math.cos(-_)) + S * (y = Math.sin(-_)), k = C * v + D * y, O = I * v + L * y, S = T * -y + S * v, D = C * -y + D * v, L = I * -y + L * v, P = N * -y + P * v, T = A, C = k, I = O), u = (_ = In(-x, L)) * Mn, _ && (v = Math.cos(-_), P = E * (y = Math.sin(-_)) + P * v, b = A = b * v - S * y, w = k = w * v - D * y, x = O = x * v - L * y), l = (_ = In(w, b)) * Mn, _ && (A = b * (v = Math.cos(_)) + w * (y = Math.sin(_)), k = T * v + C * y, w = w * v - b * y, C = C * v - T * y, b = A, T = k), c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0, u = 180 - u), o = Ct(Math.sqrt(b * b + w * w + x * x)), a = Ct(Math.sqrt(C * C + I * I)), _ = In(T, C), h = Math.abs(_) > 2e-4 ? _ * Mn : 0, f = P ? 1 / (P < 0 ? -P : P) : 0), n.svg && (A = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !bi(ei(t, Zn)), A && t.setAttribute("transform", A))), Math.abs(h) > 90 && Math.abs(h) < 270 && (R ? (o *= -1, h += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, h += h <= 0 ? 180 : -180)), e = e || n.uncache, n.x = i - ((n.xPercent = i && (!e && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + z, n.y = r - ((n.yPercent = r && (!e && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + z, n.z = s + z, n.scaleX = Ct(o), n.scaleY = Ct(a), n.rotation = Ct(l) + H, n.rotationX = Ct(c) + H, n.rotationY = Ct(u) + H, n.skewX = h + H, n.skewY = d + H, n.transformPerspective = f + z, (n.zOrigin = parseFloat($.split(" ")[2]) || 0) && (j[Jn] = Ci($)), n.xOffset = n.yOffset = 0, n.force3D = M.force3D, n.renderTransform = n.svg ? Ni : Ln ? Li : ki, n.uncache = 0, n
                },
                Ci = function(t) { return (t = t.split(" "))[0] + " " + t[1] },
                Ai = function(t, e, n) { var i = le(e); return Ct(parseFloat(e) + parseFloat(di(t, "x", n + "px", i))) + i },
                ki = function(t, e) { e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Li(t, e) },
                Oi = "0deg",
                Si = "0px",
                Di = ") ",
                Li = function(t, e) {
                    var n = e || this,
                        i = n.xPercent,
                        r = n.yPercent,
                        s = n.x,
                        o = n.y,
                        a = n.z,
                        l = n.rotation,
                        c = n.rotationY,
                        u = n.rotationX,
                        h = n.skewX,
                        d = n.skewY,
                        f = n.scaleX,
                        p = n.scaleY,
                        g = n.transformPerspective,
                        m = n.force3D,
                        _ = n.target,
                        v = n.zOrigin,
                        y = "",
                        b = "auto" === m && t && 1 !== t || !0 === m;
                    if (v && (u !== Oi || c !== Oi)) {
                        var w, x = parseFloat(c) * Pn,
                            E = Math.sin(x),
                            T = Math.cos(x);
                        x = parseFloat(u) * Pn, w = Math.cos(x), s = Ai(_, s, E * w * -v), o = Ai(_, o, -Math.sin(x) * -v), a = Ai(_, a, T * w * -v + v)
                    }
                    g !== Si && (y += "perspective(" + g + Di), (i || r) && (y += "translate(" + i + "%, " + r + "%) "), (b || s !== Si || o !== Si || a !== Si) && (y += a !== Si || b ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + Di), l !== Oi && (y += "rotate(" + l + Di), c !== Oi && (y += "rotateY(" + c + Di), u !== Oi && (y += "rotateX(" + u + Di), h === Oi && d === Oi || (y += "skew(" + h + ", " + d + Di), 1 === f && 1 === p || (y += "scale(" + f + ", " + p + Di), _.style[Zn] = y || "translate(0, 0)"
                },
                Ni = function(t, e) {
                    var n, i, r, s, o, a = e || this,
                        l = a.xPercent,
                        c = a.yPercent,
                        u = a.x,
                        h = a.y,
                        d = a.rotation,
                        f = a.skewX,
                        p = a.skewY,
                        g = a.scaleX,
                        m = a.scaleY,
                        _ = a.target,
                        v = a.xOrigin,
                        y = a.yOrigin,
                        b = a.xOffset,
                        w = a.yOffset,
                        x = a.forceCSS,
                        E = parseFloat(u),
                        T = parseFloat(h);
                    d = parseFloat(d), f = parseFloat(f), (p = parseFloat(p)) && (f += p = parseFloat(p), d += p), d || f ? (d *= Pn, f *= Pn, n = Math.cos(d) * g, i = Math.sin(d) * g, r = Math.sin(d - f) * -m, s = Math.cos(d - f) * m, f && (p *= Pn, o = Math.tan(f - p), r *= o = Math.sqrt(1 + o * o), s *= o, p && (o = Math.tan(p), n *= o = Math.sqrt(1 + o * o), i *= o)), n = Ct(n), i = Ct(i), r = Ct(r), s = Ct(s)) : (n = g, s = m, i = r = 0), (E && !~(u + "").indexOf("px") || T && !~(h + "").indexOf("px")) && (E = di(_, "x", u, "px"), T = di(_, "y", h, "px")), (v || y || b || w) && (E = Ct(E + v - (v * n + y * r) + b), T = Ct(T + y - (v * i + y * s) + w)), (l || c) && (o = _.getBBox(), E = Ct(E + l / 100 * o.width), T = Ct(T + c / 100 * o.height)), o = "matrix(" + n + "," + i + "," + r + "," + s + "," + E + "," + T + ")", _.setAttribute("transform", o), x && (_.style[Zn] = o)
                },
                Mi = function(t, e, n, i, r) {
                    var s, o, a = 360,
                        l = W(r),
                        c = parseFloat(r) * (l && ~r.indexOf("rad") ? Mn : 1) - i,
                        u = i + c + "deg";
                    return l && ("short" === (s = r.split("_")[1]) && (c %= a) != c % 180 && (c += c < 0 ? a : -360), "cw" === s && c < 0 ? c = (c + 36e9) % a - ~~(c / a) * a : "ccw" === s && c > 0 && (c = (c - 36e9) % a - ~~(c / a) * a)), t._pt = o = new bn(t._pt, e, n, i, c, Bn), o.e = u, o.u = "deg", t._props.push(n), o
                },
                Pi = function(t, e) { for (var n in e) t[n] = e[n]; return t },
                Ii = function(t, e, n) {
                    var i, r, s, o, a, l, c, u = Pi({}, n._gsap),
                        h = n.style;
                    for (r in u.svg ? (s = n.getAttribute("transform"), n.setAttribute("transform", ""), h[Zn] = e, i = Ti(n, 1), ci(n, Zn), n.setAttribute("transform", s)) : (s = getComputedStyle(n)[Zn], h[Zn] = e, i = Ti(n, 1), h[Zn] = s), Nn)(s = u[r]) !== (o = i[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (a = le(s) !== (c = le(o)) ? di(n, r, s, c) : parseFloat(s), l = parseFloat(o), t._pt = new bn(t._pt, i, r, a, l - a, $n), t._pt.u = c || 0, t._props.push(r));
                    Pi(i, u)
                };
            Tt("padding,margin,Width,Radius", (function(t, e) {
                var n = "Top",
                    i = "Right",
                    r = "Bottom",
                    s = "Left",
                    o = (e < 3 ? [n, i, r, s] : [n + s, n + i, r + i, r + s]).map((function(n) { return e < 2 ? t + n : "border" + n + t }));
                _i[e > 1 ? "border" + t : t] = function(t, e, n, i, r) {
                    var s, a;
                    if (arguments.length < 4) return s = o.map((function(e) { return fi(t, e, n) })), 5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
                    s = (i + "").split(" "), a = {}, o.forEach((function(t, e) { return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0] })), t.init(e, a, r)
                }
            }));
            var ji, Ri, zi = {
                name: "css",
                register: ri,
                targetTest: function(t) { return t.style && t.nodeType },
                init: function(t, e, n, i, r) {
                    var s, o, a, l, c, u, h, d, f, p, g, m, _, v, y, b, w, x, E, T = this._props,
                        C = t.style,
                        A = n.vars.startAt;
                    for (h in On || ri(), e)
                        if ("autoRound" !== h && (o = e[h], !mt[h] || !Je(h, e, n, i, t, r)))
                            if (c = typeof o, u = _i[h], "function" === c && (c = typeof(o = o.call(n, i, t, r))), "string" === c && ~o.indexOf("random(") && (o = ve(o)), u) u(this, t, h, o, n) && (y = 1);
                            else if ("--" === h.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(h) + "").trim(), o += "", De.lastIndex = 0, De.test(s) || (d = le(s), f = le(o)), f ? d !== f && (s = di(t, h, s, f) + f) : d && (o += d), this.add(C, "setProperty", s, o, i, r, 0, 0, h), T.push(h);
                    else if ("undefined" !== c) {
                        if (A && h in A ? (s = "function" == typeof A[h] ? A[h].call(n, i, t, r) : A[h], W(s) && ~s.indexOf("random(") && (s = ve(s)), le(s + "") || (s += M.units[h] || le(fi(t, h)) || ""), "=" === (s + "").charAt(1) && (s = fi(t, h))) : s = fi(t, h), l = parseFloat(s), (p = "string" === c && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), a = parseFloat(o), h in Hn && ("autoAlpha" === h && (1 === l && "hidden" === fi(t, "visibility") && a && (l = 0), ui(this, C, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== h && "transform" !== h && ~(h = Hn[h]).indexOf(",") && (h = h.split(",")[0])), g = h in Nn)
                            if (m || ((_ = t._gsap).renderTransform && !e.parseTransform || Ti(t, e.parseTransform), v = !1 !== e.smoothOrigin && _.smooth, (m = this._pt = new bn(this._pt, C, Zn, 0, 1, _.renderTransform, _, 0, -1)).dep = 1), "scale" === h) this._pt = new bn(this._pt, _, "scaleY", _.scaleY, (p ? kt(_.scaleY, p + a) : a) - _.scaleY || 0), T.push("scaleY", h), h += "X";
                            else { if ("transformOrigin" === h) { w = void 0, x = void 0, E = void 0, x = (w = (b = o).split(" "))[0], E = w[1] || "50%", "top" !== x && "bottom" !== x && "left" !== E && "right" !== E || (b = x, x = E, E = b), w[0] = gi[x] || x, w[1] = gi[E] || E, o = w.join(" "), _.svg ? Ei(t, o, 0, v, 0, this) : ((f = parseFloat(o.split(" ")[2]) || 0) !== _.zOrigin && ui(this, _, "zOrigin", _.zOrigin, f), ui(this, C, h, Ci(s), Ci(o))); continue } if ("svgOrigin" === h) { Ei(t, o, 1, v, 0, this); continue } if (h in yi) { Mi(this, _, h, l, p ? kt(l, p + o) : o); continue } if ("smoothOrigin" === h) { ui(this, _, "smooth", _.smooth, o); continue } if ("force3D" === h) { _[h] = o; continue } if ("transform" === h) { Ii(this, o, t); continue } }
                        else h in C || (h = ii(h) || h);
                        if (g || (a || 0 === a) && (l || 0 === l) && !zn.test(o) && h in C) a || (a = 0), (d = (s + "").substr((l + "").length)) !== (f = le(o) || (h in M.units ? M.units[h] : d)) && (l = di(t, h, s, f)), this._pt = new bn(this._pt, g ? _ : C, h, l, (p ? kt(l, p + a) : a) - l, g || "px" !== f && "zIndex" !== h || !1 === e.autoRound ? $n : Wn), this._pt.u = f || 0, d !== f && "%" !== f && (this._pt.b = s, this._pt.r = qn);
                        else if (h in C) pi.call(this, t, h, s, p ? p + o : o);
                        else {
                            if (!(h in t)) { ct(h, o); continue }
                            this.add(t, h, s || t[h], p ? p + o : o, i, r)
                        }
                        T.push(h)
                    }
                    y && yn(this)
                },
                get: fi,
                aliases: Hn,
                getSetter: function(t, e, n) { var i = Hn[e]; return i && i.indexOf(",") < 0 && (e = i), e in Nn && e !== Jn && (t._gsap.x || fi(t, "x")) ? n && Dn === n ? "scale" === e ? Kn : Yn : (Dn = n || {}) && ("scale" === e ? Qn : Gn) : t.style && !X(t.style[e]) ? Xn : ~e.indexOf("-") ? Vn : hn(t, e) },
                core: { _removeProperty: ci, _getMatrix: xi }
            };
            Tn.utils.checkPrefix = ii, Ri = Tt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (ji = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) { Nn[t] = 1 })), Tt(ji, (function(t) { M.units[t] = "deg", yi[t] = 1 })), Hn[Ri[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + ji, Tt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
                var e = t.split(":");
                Hn[e[1]] = Ri[e[0]]
            })), Tt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) { M.units[t] = "px" })), Tn.registerPlugin(zi);
            var Hi = Tn.registerPlugin(zi) || Tn;
            Hi.core.Tween
        },
        291: function(t, e) {
            var n;
            ! function(e, n) { "use strict"; "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) { if (!t.document) throw new Error("jQuery requires a window with a document"); return n(t) } : n(e) }("undefined" != typeof window ? window : this, (function(i, r) {
                "use strict";
                var s = [],
                    o = Object.getPrototypeOf,
                    a = s.slice,
                    l = s.flat ? function(t) { return s.flat.call(t) } : function(t) { return s.concat.apply([], t) },
                    c = s.push,
                    u = s.indexOf,
                    h = {},
                    d = h.toString,
                    f = h.hasOwnProperty,
                    p = f.toString,
                    g = p.call(Object),
                    m = {},
                    _ = function(t) { return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item },
                    v = function(t) { return null != t && t === t.window },
                    y = i.document,
                    b = { type: !0, src: !0, nonce: !0, noModule: !0 };

                function w(t, e, n) {
                    var i, r, s = (n = n || y).createElement("script");
                    if (s.text = t, e)
                        for (i in b)(r = e[i] || e.getAttribute && e.getAttribute(i)) && s.setAttribute(i, r);
                    n.head.appendChild(s).parentNode.removeChild(s)
                }

                function x(t) { return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? h[d.call(t)] || "object" : typeof t }
                var E = "3.6.0",
                    T = function(t, e) { return new T.fn.init(t, e) };

                function C(t) {
                    var e = !!t && "length" in t && t.length,
                        n = x(t);
                    return !_(t) && !v(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
                }
                T.fn = T.prototype = {
                    jquery: E,
                    constructor: T,
                    length: 0,
                    toArray: function() { return a.call(this) },
                    get: function(t) { return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t] },
                    pushStack: function(t) { var e = T.merge(this.constructor(), t); return e.prevObject = this, e },
                    each: function(t) { return T.each(this, t) },
                    map: function(t) { return this.pushStack(T.map(this, (function(e, n) { return t.call(e, n, e) }))) },
                    slice: function() { return this.pushStack(a.apply(this, arguments)) },
                    first: function() { return this.eq(0) },
                    last: function() { return this.eq(-1) },
                    even: function() { return this.pushStack(T.grep(this, (function(t, e) { return (e + 1) % 2 }))) },
                    odd: function() { return this.pushStack(T.grep(this, (function(t, e) { return e % 2 }))) },
                    eq: function(t) {
                        var e = this.length,
                            n = +t + (t < 0 ? e : 0);
                        return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
                    },
                    end: function() { return this.prevObject || this.constructor() },
                    push: c,
                    sort: s.sort,
                    splice: s.splice
                }, T.extend = T.fn.extend = function() {
                    var t, e, n, i, r, s, o = arguments[0] || {},
                        a = 1,
                        l = arguments.length,
                        c = !1;
                    for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || _(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
                        if (null != (t = arguments[a]))
                            for (e in t) i = t[e], "__proto__" !== e && o !== i && (c && i && (T.isPlainObject(i) || (r = Array.isArray(i))) ? (n = o[e], s = r && !Array.isArray(n) ? [] : r || T.isPlainObject(n) ? n : {}, r = !1, o[e] = T.extend(c, s, i)) : void 0 !== i && (o[e] = i));
                    return o
                }, T.extend({
                    expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(t) { throw new Error(t) },
                    noop: function() {},
                    isPlainObject: function(t) { var e, n; return !(!t || "[object Object]" !== d.call(t) || (e = o(t)) && ("function" != typeof(n = f.call(e, "constructor") && e.constructor) || p.call(n) !== g)) },
                    isEmptyObject: function(t) { var e; for (e in t) return !1; return !0 },
                    globalEval: function(t, e, n) { w(t, { nonce: e && e.nonce }, n) },
                    each: function(t, e) {
                        var n, i = 0;
                        if (C(t))
                            for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                        else
                            for (i in t)
                                if (!1 === e.call(t[i], i, t[i])) break; return t
                    },
                    makeArray: function(t, e) { var n = e || []; return null != t && (C(Object(t)) ? T.merge(n, "string" == typeof t ? [t] : t) : c.call(n, t)), n },
                    inArray: function(t, e, n) { return null == e ? -1 : u.call(e, t, n) },
                    merge: function(t, e) { for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i]; return t.length = r, t },
                    grep: function(t, e, n) { for (var i = [], r = 0, s = t.length, o = !n; r < s; r++) !e(t[r], r) !== o && i.push(t[r]); return i },
                    map: function(t, e, n) {
                        var i, r, s = 0,
                            o = [];
                        if (C(t))
                            for (i = t.length; s < i; s++) null != (r = e(t[s], s, n)) && o.push(r);
                        else
                            for (s in t) null != (r = e(t[s], s, n)) && o.push(r);
                        return l(o)
                    },
                    guid: 1,
                    support: m
                }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = s[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) { h["[object " + e + "]"] = e.toLowerCase() }));
                var A = function(t) {
                    var e, n, i, r, s, o, a, l, c, u, h, d, f, p, g, m, _, v, y, b = "sizzle" + 1 * new Date,
                        w = t.document,
                        x = 0,
                        E = 0,
                        T = lt(),
                        C = lt(),
                        A = lt(),
                        k = lt(),
                        O = function(t, e) { return t === e && (h = !0), 0 },
                        S = {}.hasOwnProperty,
                        D = [],
                        L = D.pop,
                        N = D.push,
                        M = D.push,
                        P = D.slice,
                        I = function(t, e) {
                            for (var n = 0, i = t.length; n < i; n++)
                                if (t[n] === e) return n;
                            return -1
                        },
                        j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        R = "[\\x20\\t\\r\\n\\f]",
                        z = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                        H = "\\[[\\x20\\t\\r\\n\\f]*(" + z + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + R + "*\\]",
                        $ = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                        B = new RegExp(R + "+", "g"),
                        q = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                        W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                        F = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                        U = new RegExp(R + "|>"),
                        X = new RegExp($),
                        V = new RegExp("^" + z + "$"),
                        Y = { ID: new RegExp("^#(" + z + ")"), CLASS: new RegExp("^\\.(" + z + ")"), TAG: new RegExp("^(" + z + "|[*])"), ATTR: new RegExp("^" + H), PSEUDO: new RegExp("^" + $), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"), bool: new RegExp("^(?:" + j + ")$", "i"), needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i") },
                        K = /HTML$/i,
                        Q = /^(?:input|select|textarea|button)$/i,
                        G = /^h\d$/i,
                        Z = /^[^{]+\{\s*\[native \w/,
                        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        tt = /[+~]/,
                        et = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                        nt = function(t, e) { var n = "0x" + t.slice(1) - 65536; return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) },
                        it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        rt = function(t, e) { return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t },
                        st = function() { d() },
                        ot = bt((function(t) { return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase() }), { dir: "parentNode", next: "legend" });
                    try { M.apply(D = P.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType } catch (t) {
                        M = {
                            apply: D.length ? function(t, e) { N.apply(t, P.call(e)) } : function(t, e) {
                                for (var n = t.length, i = 0; t[n++] = e[i++];);
                                t.length = n - 1
                            }
                        }
                    }

                    function at(t, e, i, r) {
                        var s, a, c, u, h, p, _, v = e && e.ownerDocument,
                            w = e ? e.nodeType : 9;
                        if (i = i || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return i;
                        if (!r && (d(e), e = e || f, g)) {
                            if (11 !== w && (h = J.exec(t)))
                                if (s = h[1]) { if (9 === w) { if (!(c = e.getElementById(s))) return i; if (c.id === s) return i.push(c), i } else if (v && (c = v.getElementById(s)) && y(e, c) && c.id === s) return i.push(c), i } else { if (h[2]) return M.apply(i, e.getElementsByTagName(t)), i; if ((s = h[3]) && n.getElementsByClassName && e.getElementsByClassName) return M.apply(i, e.getElementsByClassName(s)), i }
                            if (n.qsa && !k[t + " "] && (!m || !m.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
                                if (_ = t, v = e, 1 === w && (U.test(t) || F.test(t))) {
                                    for ((v = tt.test(t) && _t(e.parentNode) || e) === e && n.scope || ((u = e.getAttribute("id")) ? u = u.replace(it, rt) : e.setAttribute("id", u = b)), a = (p = o(t)).length; a--;) p[a] = (u ? "#" + u : ":scope") + " " + yt(p[a]);
                                    _ = p.join(",")
                                }
                                try { return M.apply(i, v.querySelectorAll(_)), i } catch (e) { k(t, !0) } finally { u === b && e.removeAttribute("id") }
                            }
                        }
                        return l(t.replace(q, "$1"), e, i, r)
                    }

                    function lt() { var t = []; return function e(n, r) { return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r } }

                    function ct(t) { return t[b] = !0, t }

                    function ut(t) { var e = f.createElement("fieldset"); try { return !!t(e) } catch (t) { return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }

                    function ht(t, e) { for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e }

                    function dt(t, e) {
                        var n = e && t,
                            i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                        if (i) return i;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === e) return -1;
                        return t ? 1 : -1
                    }

                    function ft(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

                    function pt(t) { return function(e) { var n = e.nodeName.toLowerCase(); return ("input" === n || "button" === n) && e.type === t } }

                    function gt(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

                    function mt(t) { return ct((function(e) { return e = +e, ct((function(n, i) { for (var r, s = t([], n.length, e), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r])) })) })) }

                    function _t(t) { return t && void 0 !== t.getElementsByTagName && t }
                    for (e in n = at.support = {}, s = at.isXML = function(t) {
                            var e = t && t.namespaceURI,
                                n = t && (t.ownerDocument || t).documentElement;
                            return !K.test(e || n && n.nodeName || "HTML")
                        }, d = at.setDocument = function(t) {
                            var e, r, o = t ? t.ownerDocument || t : w;
                            return o != f && 9 === o.nodeType && o.documentElement ? (p = (f = o).documentElement, g = !s(f), w != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", st, !1) : r.attachEvent && r.attachEvent("onunload", st)), n.scope = ut((function(t) { return p.appendChild(t).appendChild(f.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length })), n.attributes = ut((function(t) { return t.className = "i", !t.getAttribute("className") })), n.getElementsByTagName = ut((function(t) { return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length })), n.getElementsByClassName = Z.test(f.getElementsByClassName), n.getById = ut((function(t) { return p.appendChild(t).id = b, !f.getElementsByName || !f.getElementsByName(b).length })), n.getById ? (i.filter.ID = function(t) { var e = t.replace(et, nt); return function(t) { return t.getAttribute("id") === e } }, i.find.ID = function(t, e) { if (void 0 !== e.getElementById && g) { var n = e.getElementById(t); return n ? [n] : [] } }) : (i.filter.ID = function(t) { var e = t.replace(et, nt); return function(t) { var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id"); return n && n.value === e } }, i.find.ID = function(t, e) {
                                if (void 0 !== e.getElementById && g) {
                                    var n, i, r, s = e.getElementById(t);
                                    if (s) {
                                        if ((n = s.getAttributeNode("id")) && n.value === t) return [s];
                                        for (r = e.getElementsByName(t), i = 0; s = r[i++];)
                                            if ((n = s.getAttributeNode("id")) && n.value === t) return [s]
                                    }
                                    return []
                                }
                            }), i.find.TAG = n.getElementsByTagName ? function(t, e) { return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0 } : function(t, e) {
                                var n, i = [],
                                    r = 0,
                                    s = e.getElementsByTagName(t);
                                if ("*" === t) { for (; n = s[r++];) 1 === n.nodeType && i.push(n); return i }
                                return s
                            }, i.find.CLASS = n.getElementsByClassName && function(t, e) { if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t) }, _ = [], m = [], (n.qsa = Z.test(f.querySelectorAll)) && (ut((function(t) {
                                var e;
                                p.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + j + ")"), t.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), (e = f.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]"), t.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                            })), ut((function(t) {
                                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var e = f.createElement("input");
                                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                            }))), (n.matchesSelector = Z.test(v = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ut((function(t) { n.disconnectedMatch = v.call(t, "*"), v.call(t, "[s!='']:x"), _.push("!=", $) })), m = m.length && new RegExp(m.join("|")), _ = _.length && new RegExp(_.join("|")), e = Z.test(p.compareDocumentPosition), y = e || Z.test(p.contains) ? function(t, e) {
                                var n = 9 === t.nodeType ? t.documentElement : t,
                                    i = e && e.parentNode;
                                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                            } : function(t, e) {
                                if (e)
                                    for (; e = e.parentNode;)
                                        if (e === t) return !0;
                                return !1
                            }, O = e ? function(t, e) { if (t === e) return h = !0, 0; var i = !t.compareDocumentPosition - !e.compareDocumentPosition; return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t == f || t.ownerDocument == w && y(w, t) ? -1 : e == f || e.ownerDocument == w && y(w, e) ? 1 : u ? I(u, t) - I(u, e) : 0 : 4 & i ? -1 : 1) } : function(t, e) {
                                if (t === e) return h = !0, 0;
                                var n, i = 0,
                                    r = t.parentNode,
                                    s = e.parentNode,
                                    o = [t],
                                    a = [e];
                                if (!r || !s) return t == f ? -1 : e == f ? 1 : r ? -1 : s ? 1 : u ? I(u, t) - I(u, e) : 0;
                                if (r === s) return dt(t, e);
                                for (n = t; n = n.parentNode;) o.unshift(n);
                                for (n = e; n = n.parentNode;) a.unshift(n);
                                for (; o[i] === a[i];) i++;
                                return i ? dt(o[i], a[i]) : o[i] == w ? -1 : a[i] == w ? 1 : 0
                            }, f) : f
                        }, at.matches = function(t, e) { return at(t, null, null, e) }, at.matchesSelector = function(t, e) {
                            if (d(t), n.matchesSelector && g && !k[e + " "] && (!_ || !_.test(e)) && (!m || !m.test(e))) try { var i = v.call(t, e); if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i } catch (t) { k(e, !0) }
                            return at(e, f, null, [t]).length > 0
                        }, at.contains = function(t, e) { return (t.ownerDocument || t) != f && d(t), y(t, e) }, at.attr = function(t, e) {
                            (t.ownerDocument || t) != f && d(t);
                            var r = i.attrHandle[e.toLowerCase()],
                                s = r && S.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
                            return void 0 !== s ? s : n.attributes || !g ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
                        }, at.escape = function(t) { return (t + "").replace(it, rt) }, at.error = function(t) { throw new Error("Syntax error, unrecognized expression: " + t) }, at.uniqueSort = function(t) {
                            var e, i = [],
                                r = 0,
                                s = 0;
                            if (h = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(O), h) { for (; e = t[s++];) e === t[s] && (r = i.push(s)); for (; r--;) t.splice(i[r], 1) }
                            return u = null, t
                        }, r = at.getText = function(t) {
                            var e, n = "",
                                i = 0,
                                s = t.nodeType;
                            if (s) { if (1 === s || 9 === s || 11 === s) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) n += r(t) } else if (3 === s || 4 === s) return t.nodeValue } else
                                for (; e = t[i++];) n += r(e);
                            return n
                        }, i = at.selectors = {
                            cacheLength: 50,
                            createPseudo: ct,
                            match: Y,
                            attrHandle: {},
                            find: {},
                            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                            preFilter: { ATTR: function(t) { return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function(t) { return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t }, PSEUDO: function(t) { var e, n = !t[6] && t[2]; return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && X.test(n) && (e = o(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3)) } },
                            filter: {
                                TAG: function(t) { var e = t.replace(et, nt).toLowerCase(); return "*" === t ? function() { return !0 } : function(t) { return t.nodeName && t.nodeName.toLowerCase() === e } },
                                CLASS: function(t) { var e = T[t + " "]; return e || (e = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + t + "(" + R + "|$)")) && T(t, (function(t) { return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "") })) },
                                ATTR: function(t, e, n) { return function(i) { var r = at.attr(i, t); return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-")) } },
                                CHILD: function(t, e, n, i, r) {
                                    var s = "nth" !== t.slice(0, 3),
                                        o = "last" !== t.slice(-4),
                                        a = "of-type" === e;
                                    return 1 === i && 0 === r ? function(t) { return !!t.parentNode } : function(e, n, l) {
                                        var c, u, h, d, f, p, g = s !== o ? "nextSibling" : "previousSibling",
                                            m = e.parentNode,
                                            _ = a && e.nodeName.toLowerCase(),
                                            v = !l && !a,
                                            y = !1;
                                        if (m) {
                                            if (s) {
                                                for (; g;) {
                                                    for (d = e; d = d[g];)
                                                        if (a ? d.nodeName.toLowerCase() === _ : 1 === d.nodeType) return !1;
                                                    p = g = "only" === t && !p && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (p = [o ? m.firstChild : m.lastChild], o && v) {
                                                for (y = (f = (c = (u = (h = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (y = f = 0) || p.pop();)
                                                    if (1 === d.nodeType && ++y && d === e) { u[t] = [x, f, y]; break }
                                            } else if (v && (y = f = (c = (u = (h = (d = e)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === x && c[1]), !1 === y)
                                                for (;
                                                    (d = ++f && d && d[g] || (y = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== _ : 1 !== d.nodeType) || !++y || (v && ((u = (h = d[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] = [x, y]), d !== e)););
                                            return (y -= r) === i || y % i == 0 && y / i >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(t, e) { var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t); return r[b] ? r(e) : r.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ct((function(t, n) { for (var i, s = r(t, e), o = s.length; o--;) t[i = I(t, s[o])] = !(n[i] = s[o]) })) : function(t) { return r(t, 0, n) }) : r }
                            },
                            pseudos: {
                                not: ct((function(t) {
                                    var e = [],
                                        n = [],
                                        i = a(t.replace(q, "$1"));
                                    return i[b] ? ct((function(t, e, n, r) { for (var s, o = i(t, null, r, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s)) })) : function(t, r, s) { return e[0] = t, i(e, null, s, n), e[0] = null, !n.pop() }
                                })),
                                has: ct((function(t) { return function(e) { return at(t, e).length > 0 } })),
                                contains: ct((function(t) {
                                    return t = t.replace(et, nt),
                                        function(e) { return (e.textContent || r(e)).indexOf(t) > -1 }
                                })),
                                lang: ct((function(t) {
                                    return V.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                                        function(e) {
                                            var n;
                                            do { if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                            return !1
                                        }
                                })),
                                target: function(e) { var n = t.location && t.location.hash; return n && n.slice(1) === e.id },
                                root: function(t) { return t === p },
                                focus: function(t) { return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) },
                                enabled: gt(!1),
                                disabled: gt(!0),
                                checked: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected },
                                selected: function(t) { return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected },
                                empty: function(t) {
                                    for (t = t.firstChild; t; t = t.nextSibling)
                                        if (t.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function(t) { return !i.pseudos.empty(t) },
                                header: function(t) { return G.test(t.nodeName) },
                                input: function(t) { return Q.test(t.nodeName) },
                                button: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e },
                                text: function(t) { var e; return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()) },
                                first: mt((function() { return [0] })),
                                last: mt((function(t, e) { return [e - 1] })),
                                eq: mt((function(t, e, n) { return [n < 0 ? n + e : n] })),
                                even: mt((function(t, e) { for (var n = 0; n < e; n += 2) t.push(n); return t })),
                                odd: mt((function(t, e) { for (var n = 1; n < e; n += 2) t.push(n); return t })),
                                lt: mt((function(t, e, n) { for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0;) t.push(i); return t })),
                                gt: mt((function(t, e, n) { for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i); return t }))
                            }
                        }, i.pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) i.pseudos[e] = ft(e);
                    for (e in { submit: !0, reset: !0 }) i.pseudos[e] = pt(e);

                    function vt() {}

                    function yt(t) { for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value; return i }

                    function bt(t, e, n) {
                        var i = e.dir,
                            r = e.next,
                            s = r || i,
                            o = n && "parentNode" === s,
                            a = E++;
                        return e.first ? function(e, n, r) {
                            for (; e = e[i];)
                                if (1 === e.nodeType || o) return t(e, n, r);
                            return !1
                        } : function(e, n, l) {
                            var c, u, h, d = [x, a];
                            if (l) {
                                for (; e = e[i];)
                                    if ((1 === e.nodeType || o) && t(e, n, l)) return !0
                            } else
                                for (; e = e[i];)
                                    if (1 === e.nodeType || o)
                                        if (u = (h = e[b] || (e[b] = {}))[e.uniqueID] || (h[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                                        else { if ((c = u[s]) && c[0] === x && c[1] === a) return d[2] = c[2]; if (u[s] = d, d[2] = t(e, n, l)) return !0 } return !1
                        }
                    }

                    function wt(t) {
                        return t.length > 1 ? function(e, n, i) {
                            for (var r = t.length; r--;)
                                if (!t[r](e, n, i)) return !1;
                            return !0
                        } : t[0]
                    }

                    function xt(t, e, n, i, r) { for (var s, o = [], a = 0, l = t.length, c = null != e; a < l; a++)(s = t[a]) && (n && !n(s, i, r) || (o.push(s), c && e.push(a))); return o }

                    function Et(t, e, n, i, r, s) {
                        return i && !i[b] && (i = Et(i)), r && !r[b] && (r = Et(r, s)), ct((function(s, o, a, l) {
                            var c, u, h, d = [],
                                f = [],
                                p = o.length,
                                g = s || function(t, e, n) { for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n); return n }(e || "*", a.nodeType ? [a] : a, []),
                                m = !t || !s && e ? g : xt(g, d, t, a, l),
                                _ = n ? r || (s ? t : p || i) ? [] : o : m;
                            if (n && n(m, _, a, l), i)
                                for (c = xt(_, f), i(c, [], a, l), u = c.length; u--;)(h = c[u]) && (_[f[u]] = !(m[f[u]] = h));
                            if (s) {
                                if (r || t) {
                                    if (r) {
                                        for (c = [], u = _.length; u--;)(h = _[u]) && c.push(m[u] = h);
                                        r(null, _ = [], c, l)
                                    }
                                    for (u = _.length; u--;)(h = _[u]) && (c = r ? I(s, h) : d[u]) > -1 && (s[c] = !(o[c] = h))
                                }
                            } else _ = xt(_ === o ? _.splice(p, _.length) : _), r ? r(null, o, _, l) : M.apply(o, _)
                        }))
                    }

                    function Tt(t) {
                        for (var e, n, r, s = t.length, o = i.relative[t[0].type], a = o || i.relative[" "], l = o ? 1 : 0, u = bt((function(t) { return t === e }), a, !0), h = bt((function(t) { return I(e, t) > -1 }), a, !0), d = [function(t, n, i) { var r = !o && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : h(t, n, i)); return e = null, r }]; l < s; l++)
                            if (n = i.relative[t[l].type]) d = [bt(wt(d), n)];
                            else {
                                if ((n = i.filter[t[l].type].apply(null, t[l].matches))[b]) { for (r = ++l; r < s && !i.relative[t[r].type]; r++); return Et(l > 1 && wt(d), l > 1 && yt(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(q, "$1"), n, l < r && Tt(t.slice(l, r)), r < s && Tt(t = t.slice(r)), r < s && yt(t)) }
                                d.push(n)
                            }
                        return wt(d)
                    }
                    return vt.prototype = i.filters = i.pseudos, i.setFilters = new vt, o = at.tokenize = function(t, e) { var n, r, s, o, a, l, c, u = C[t + " "]; if (u) return e ? 0 : u.slice(0); for (a = t, l = [], c = i.preFilter; a;) { for (o in n && !(r = W.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = F.exec(a)) && (n = r.shift(), s.push({ value: n, type: r[0].replace(q, " ") }), a = a.slice(n.length)), i.filter) !(r = Y[o].exec(a)) || c[o] && !(r = c[o](r)) || (n = r.shift(), s.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return e ? a.length : a ? at.error(t) : C(t, l).slice(0) }, a = at.compile = function(t, e) {
                        var n, r = [],
                            s = [],
                            a = A[t + " "];
                        if (!a) {
                            for (e || (e = o(t)), n = e.length; n--;)(a = Tt(e[n]))[b] ? r.push(a) : s.push(a);
                            a = A(t, function(t, e) {
                                var n = e.length > 0,
                                    r = t.length > 0,
                                    s = function(s, o, a, l, u) {
                                        var h, p, m, _ = 0,
                                            v = "0",
                                            y = s && [],
                                            b = [],
                                            w = c,
                                            E = s || r && i.find.TAG("*", u),
                                            T = x += null == w ? 1 : Math.random() || .1,
                                            C = E.length;
                                        for (u && (c = o == f || o || u); v !== C && null != (h = E[v]); v++) {
                                            if (r && h) {
                                                for (p = 0, o || h.ownerDocument == f || (d(h), a = !g); m = t[p++];)
                                                    if (m(h, o || f, a)) { l.push(h); break }
                                                u && (x = T)
                                            }
                                            n && ((h = !m && h) && _--, s && y.push(h))
                                        }
                                        if (_ += v, n && v !== _) {
                                            for (p = 0; m = e[p++];) m(y, b, o, a);
                                            if (s) {
                                                if (_ > 0)
                                                    for (; v--;) y[v] || b[v] || (b[v] = L.call(l));
                                                b = xt(b)
                                            }
                                            M.apply(l, b), u && !s && b.length > 0 && _ + e.length > 1 && at.uniqueSort(l)
                                        }
                                        return u && (x = T, c = w), y
                                    };
                                return n ? ct(s) : s
                            }(s, r)), a.selector = t
                        }
                        return a
                    }, l = at.select = function(t, e, n, r) {
                        var s, l, c, u, h, d = "function" == typeof t && t,
                            f = !r && o(t = d.selector || t);
                        if (n = n || [], 1 === f.length) {
                            if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                                if (!(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n;
                                d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                            }
                            for (s = Y.needsContext.test(t) ? 0 : l.length; s-- && (c = l[s], !i.relative[u = c.type]);)
                                if ((h = i.find[u]) && (r = h(c.matches[0].replace(et, nt), tt.test(l[0].type) && _t(e.parentNode) || e))) { if (l.splice(s, 1), !(t = r.length && yt(l))) return M.apply(n, r), n; break }
                        }
                        return (d || a(t, f))(r, e, !g, n, !e || tt.test(t) && _t(e.parentNode) || e), n
                    }, n.sortStable = b.split("").sort(O).join("") === b, n.detectDuplicates = !!h, d(), n.sortDetached = ut((function(t) { return 1 & t.compareDocumentPosition(f.createElement("fieldset")) })), ut((function(t) { return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") })) || ht("type|href|height|width", (function(t, e, n) { if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) })), n.attributes && ut((function(t) { return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") })) || ht("value", (function(t, e, n) { if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue })), ut((function(t) { return null == t.getAttribute("disabled") })) || ht(j, (function(t, e, n) { var i; if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null })), at
                }(i);
                T.find = A, T.expr = A.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = A.uniqueSort, T.text = A.getText, T.isXMLDoc = A.isXML, T.contains = A.contains, T.escapeSelector = A.escape;
                var k = function(t, e, n) {
                        for (var i = [], r = void 0 !== n;
                            (t = t[e]) && 9 !== t.nodeType;)
                            if (1 === t.nodeType) {
                                if (r && T(t).is(n)) break;
                                i.push(t)
                            }
                        return i
                    },
                    O = function(t, e) { for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t); return n },
                    S = T.expr.match.needsContext;

                function D(t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() }
                var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                function N(t, e, n) { return _(e) ? T.grep(t, (function(t, i) { return !!e.call(t, i, t) !== n })) : e.nodeType ? T.grep(t, (function(t) { return t === e !== n })) : "string" != typeof e ? T.grep(t, (function(t) { return u.call(e, t) > -1 !== n })) : T.filter(e, t, n) }
                T.filter = function(t, e, n) { var i = e[0]; return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? T.find.matchesSelector(i, t) ? [i] : [] : T.find.matches(t, T.grep(e, (function(t) { return 1 === t.nodeType }))) }, T.fn.extend({
                    find: function(t) {
                        var e, n, i = this.length,
                            r = this;
                        if ("string" != typeof t) return this.pushStack(T(t).filter((function() {
                            for (e = 0; e < i; e++)
                                if (T.contains(r[e], this)) return !0
                        })));
                        for (n = this.pushStack([]), e = 0; e < i; e++) T.find(t, r[e], n);
                        return i > 1 ? T.uniqueSort(n) : n
                    },
                    filter: function(t) { return this.pushStack(N(this, t || [], !1)) },
                    not: function(t) { return this.pushStack(N(this, t || [], !0)) },
                    is: function(t) { return !!N(this, "string" == typeof t && S.test(t) ? T(t) : t || [], !1).length }
                });
                var M, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (T.fn.init = function(t, e, n) {
                    var i, r;
                    if (!t) return this;
                    if (n = n || M, "string" == typeof t) {
                        if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : P.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                        if (i[1]) {
                            if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : y, !0)), L.test(i[1]) && T.isPlainObject(e))
                                for (i in e) _(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                            return this
                        }
                        return (r = y.getElementById(i[2])) && (this[0] = r, this.length = 1), this
                    }
                    return t.nodeType ? (this[0] = t, this.length = 1, this) : _(t) ? void 0 !== n.ready ? n.ready(t) : t(T) : T.makeArray(t, this)
                }).prototype = T.fn, M = T(y);
                var I = /^(?:parents|prev(?:Until|All))/,
                    j = { children: !0, contents: !0, next: !0, prev: !0 };

                function R(t, e) {
                    for (;
                        (t = t[e]) && 1 !== t.nodeType;);
                    return t
                }
                T.fn.extend({
                    has: function(t) {
                        var e = T(t, this),
                            n = e.length;
                        return this.filter((function() {
                            for (var t = 0; t < n; t++)
                                if (T.contains(this, e[t])) return !0
                        }))
                    },
                    closest: function(t, e) {
                        var n, i = 0,
                            r = this.length,
                            s = [],
                            o = "string" != typeof t && T(t);
                        if (!S.test(t))
                            for (; i < r; i++)
                                for (n = this[i]; n && n !== e; n = n.parentNode)
                                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, t))) { s.push(n); break }
                        return this.pushStack(s.length > 1 ? T.uniqueSort(s) : s)
                    },
                    index: function(t) { return t ? "string" == typeof t ? u.call(T(t), this[0]) : u.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
                    add: function(t, e) { return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e)))) },
                    addBack: function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }
                }), T.each({ parent: function(t) { var e = t.parentNode; return e && 11 !== e.nodeType ? e : null }, parents: function(t) { return k(t, "parentNode") }, parentsUntil: function(t, e, n) { return k(t, "parentNode", n) }, next: function(t) { return R(t, "nextSibling") }, prev: function(t) { return R(t, "previousSibling") }, nextAll: function(t) { return k(t, "nextSibling") }, prevAll: function(t) { return k(t, "previousSibling") }, nextUntil: function(t, e, n) { return k(t, "nextSibling", n) }, prevUntil: function(t, e, n) { return k(t, "previousSibling", n) }, siblings: function(t) { return O((t.parentNode || {}).firstChild, t) }, children: function(t) { return O(t.firstChild) }, contents: function(t) { return null != t.contentDocument && o(t.contentDocument) ? t.contentDocument : (D(t, "template") && (t = t.content || t), T.merge([], t.childNodes)) } }, (function(t, e) { T.fn[t] = function(n, i) { var r = T.map(this, e, n); return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = T.filter(i, r)), this.length > 1 && (j[t] || T.uniqueSort(r), I.test(t) && r.reverse()), this.pushStack(r) } }));
                var z = /[^\x20\t\r\n\f]+/g;

                function H(t) { return t }

                function $(t) { throw t }

                function B(t, e, n, i) { var r; try { t && _(r = t.promise) ? r.call(t).done(e).fail(n) : t && _(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i)) } catch (t) { n.apply(void 0, [t]) } }
                T.Callbacks = function(t) {
                    t = "string" == typeof t ? function(t) { var e = {}; return T.each(t.match(z) || [], (function(t, n) { e[n] = !0 })), e }(t) : T.extend({}, t);
                    var e, n, i, r, s = [],
                        o = [],
                        a = -1,
                        l = function() {
                            for (r = r || t.once, i = e = !0; o.length; a = -1)
                                for (n = o.shift(); ++a < s.length;) !1 === s[a].apply(n[0], n[1]) && t.stopOnFalse && (a = s.length, n = !1);
                            t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
                        },
                        c = {
                            add: function() { return s && (n && !e && (a = s.length - 1, o.push(n)), function e(n) { T.each(n, (function(n, i) { _(i) ? t.unique && c.has(i) || s.push(i) : i && i.length && "string" !== x(i) && e(i) })) }(arguments), n && !e && l()), this },
                            remove: function() {
                                return T.each(arguments, (function(t, e) {
                                    for (var n;
                                        (n = T.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= a && a--
                                })), this
                            },
                            has: function(t) { return t ? T.inArray(t, s) > -1 : s.length > 0 },
                            empty: function() { return s && (s = []), this },
                            disable: function() { return r = o = [], s = n = "", this },
                            disabled: function() { return !s },
                            lock: function() { return r = o = [], n || e || (s = n = ""), this },
                            locked: function() { return !!r },
                            fireWith: function(t, n) { return r || (n = [t, (n = n || []).slice ? n.slice() : n], o.push(n), e || l()), this },
                            fire: function() { return c.fireWith(this, arguments), this },
                            fired: function() { return !!i }
                        };
                    return c
                }, T.extend({
                    Deferred: function(t) {
                        var e = [
                                ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                                ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                            ],
                            n = "pending",
                            r = {
                                state: function() { return n },
                                always: function() { return s.done(arguments).fail(arguments), this },
                                catch: function(t) { return r.then(null, t) },
                                pipe: function() {
                                    var t = arguments;
                                    return T.Deferred((function(n) {
                                        T.each(e, (function(e, i) {
                                            var r = _(t[i[4]]) && t[i[4]];
                                            s[i[1]]((function() {
                                                var t = r && r.apply(this, arguments);
                                                t && _(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [t] : arguments)
                                            }))
                                        })), t = null
                                    })).promise()
                                },
                                then: function(t, n, r) {
                                    var s = 0;

                                    function o(t, e, n, r) {
                                        return function() {
                                            var a = this,
                                                l = arguments,
                                                c = function() {
                                                    var i, c;
                                                    if (!(t < s)) {
                                                        if ((i = n.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                        c = i && ("object" == typeof i || "function" == typeof i) && i.then, _(c) ? r ? c.call(i, o(s, e, H, r), o(s, e, $, r)) : (s++, c.call(i, o(s, e, H, r), o(s, e, $, r), o(s, e, H, e.notifyWith))) : (n !== H && (a = void 0, l = [i]), (r || e.resolveWith)(a, l))
                                                    }
                                                },
                                                u = r ? c : function() { try { c() } catch (i) { T.Deferred.exceptionHook && T.Deferred.exceptionHook(i, u.stackTrace), t + 1 >= s && (n !== $ && (a = void 0, l = [i]), e.rejectWith(a, l)) } };
                                            t ? u() : (T.Deferred.getStackHook && (u.stackTrace = T.Deferred.getStackHook()), i.setTimeout(u))
                                        }
                                    }
                                    return T.Deferred((function(i) { e[0][3].add(o(0, i, _(r) ? r : H, i.notifyWith)), e[1][3].add(o(0, i, _(t) ? t : H)), e[2][3].add(o(0, i, _(n) ? n : $)) })).promise()
                                },
                                promise: function(t) { return null != t ? T.extend(t, r) : r }
                            },
                            s = {};
                        return T.each(e, (function(t, i) {
                            var o = i[2],
                                a = i[5];
                            r[i[1]] = o.add, a && o.add((function() { n = a }), e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), o.add(i[3].fire), s[i[0]] = function() { return s[i[0] + "With"](this === s ? void 0 : this, arguments), this }, s[i[0] + "With"] = o.fireWith
                        })), r.promise(s), t && t.call(s, s), s
                    },
                    when: function(t) {
                        var e = arguments.length,
                            n = e,
                            i = Array(n),
                            r = a.call(arguments),
                            s = T.Deferred(),
                            o = function(t) { return function(n) { i[t] = this, r[t] = arguments.length > 1 ? a.call(arguments) : n, --e || s.resolveWith(i, r) } };
                        if (e <= 1 && (B(t, s.done(o(n)).resolve, s.reject, !e), "pending" === s.state() || _(r[n] && r[n].then))) return s.then();
                        for (; n--;) B(r[n], o(n), s.reject);
                        return s.promise()
                    }
                });
                var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                T.Deferred.exceptionHook = function(t, e) { i.console && i.console.warn && t && q.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e) }, T.readyException = function(t) { i.setTimeout((function() { throw t })) };
                var W = T.Deferred();

                function F() { y.removeEventListener("DOMContentLoaded", F), i.removeEventListener("load", F), T.ready() }
                T.fn.ready = function(t) { return W.then(t).catch((function(t) { T.readyException(t) })), this }, T.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(t) {
                        (!0 === t ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== t && --T.readyWait > 0 || W.resolveWith(y, [T]))
                    }
                }), T.ready.then = W.then, "complete" === y.readyState || "loading" !== y.readyState && !y.documentElement.doScroll ? i.setTimeout(T.ready) : (y.addEventListener("DOMContentLoaded", F), i.addEventListener("load", F));
                var U = function(t, e, n, i, r, s, o) {
                        var a = 0,
                            l = t.length,
                            c = null == n;
                        if ("object" === x(n))
                            for (a in r = !0, n) U(t, e, a, n[a], !0, s, o);
                        else if (void 0 !== i && (r = !0, _(i) || (o = !0), c && (o ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) { return c.call(T(t), n) })), e))
                            for (; a < l; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
                        return r ? t : c ? e.call(t) : l ? e(t[0], n) : s
                    },
                    X = /^-ms-/,
                    V = /-([a-z])/g;

                function Y(t, e) { return e.toUpperCase() }

                function K(t) { return t.replace(X, "ms-").replace(V, Y) }
                var Q = function(t) { return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType };

                function G() { this.expando = T.expando + G.uid++ }
                G.uid = 1, G.prototype = {
                    cache: function(t) { var e = t[this.expando]; return e || (e = {}, Q(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e },
                    set: function(t, e, n) {
                        var i, r = this.cache(t);
                        if ("string" == typeof e) r[K(e)] = n;
                        else
                            for (i in e) r[K(i)] = e[i];
                        return r
                    },
                    get: function(t, e) { return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][K(e)] },
                    access: function(t, e, n) { return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e) },
                    remove: function(t, e) { var n, i = t[this.expando]; if (void 0 !== i) { if (void 0 !== e) { n = (e = Array.isArray(e) ? e.map(K) : (e = K(e)) in i ? [e] : e.match(z) || []).length; for (; n--;) delete i[e[n]] }(void 0 === e || T.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]) } },
                    hasData: function(t) { var e = t[this.expando]; return void 0 !== e && !T.isEmptyObject(e) }
                };
                var Z = new G,
                    J = new G,
                    tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    et = /[A-Z]/g;

                function nt(t, e, n) {
                    var i;
                    if (void 0 === n && 1 === t.nodeType)
                        if (i = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                            try { n = function(t) { return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t) }(n) } catch (t) {}
                            J.set(t, e, n)
                        } else n = void 0;
                    return n
                }
                T.extend({ hasData: function(t) { return J.hasData(t) || Z.hasData(t) }, data: function(t, e, n) { return J.access(t, e, n) }, removeData: function(t, e) { J.remove(t, e) }, _data: function(t, e, n) { return Z.access(t, e, n) }, _removeData: function(t, e) { Z.remove(t, e) } }), T.fn.extend({
                    data: function(t, e) {
                        var n, i, r, s = this[0],
                            o = s && s.attributes;
                        if (void 0 === t) {
                            if (this.length && (r = J.get(s), 1 === s.nodeType && !Z.get(s, "hasDataAttrs"))) {
                                for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = K(i.slice(5)), nt(s, i, r[i]));
                                Z.set(s, "hasDataAttrs", !0)
                            }
                            return r
                        }
                        return "object" == typeof t ? this.each((function() { J.set(this, t) })) : U(this, (function(e) {
                            var n;
                            if (s && void 0 === e) return void 0 !== (n = J.get(s, t)) || void 0 !== (n = nt(s, t)) ? n : void 0;
                            this.each((function() { J.set(this, t, e) }))
                        }), null, e, arguments.length > 1, null, !0)
                    },
                    removeData: function(t) { return this.each((function() { J.remove(this, t) })) }
                }), T.extend({
                    queue: function(t, e, n) { var i; if (t) return e = (e || "fx") + "queue", i = Z.get(t, e), n && (!i || Array.isArray(n) ? i = Z.access(t, e, T.makeArray(n)) : i.push(n)), i || [] },
                    dequeue: function(t, e) {
                        e = e || "fx";
                        var n = T.queue(t, e),
                            i = n.length,
                            r = n.shift(),
                            s = T._queueHooks(t, e);
                        "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, (function() { T.dequeue(t, e) }), s)), !i && s && s.empty.fire()
                    },
                    _queueHooks: function(t, e) { var n = e + "queueHooks"; return Z.get(t, n) || Z.access(t, n, { empty: T.Callbacks("once memory").add((function() { Z.remove(t, [e + "queue", n]) })) }) }
                }), T.fn.extend({
                    queue: function(t, e) {
                        var n = 2;
                        return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? T.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                            var n = T.queue(this, t, e);
                            T._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && T.dequeue(this, t)
                        }))
                    },
                    dequeue: function(t) { return this.each((function() { T.dequeue(this, t) })) },
                    clearQueue: function(t) { return this.queue(t || "fx", []) },
                    promise: function(t, e) {
                        var n, i = 1,
                            r = T.Deferred(),
                            s = this,
                            o = this.length,
                            a = function() {--i || r.resolveWith(s, [s]) };
                        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(n = Z.get(s[o], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                        return a(), r.promise(e)
                    }
                });
                var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    rt = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$", "i"),
                    st = ["Top", "Right", "Bottom", "Left"],
                    ot = y.documentElement,
                    at = function(t) { return T.contains(t.ownerDocument, t) },
                    lt = { composed: !0 };
                ot.getRootNode && (at = function(t) { return T.contains(t.ownerDocument, t) || t.getRootNode(lt) === t.ownerDocument });
                var ct = function(t, e) { return "none" === (t = e || t).style.display || "" === t.style.display && at(t) && "none" === T.css(t, "display") };

                function ut(t, e, n, i) {
                    var r, s, o = 20,
                        a = i ? function() { return i.cur() } : function() { return T.css(t, e, "") },
                        l = a(),
                        c = n && n[3] || (T.cssNumber[e] ? "" : "px"),
                        u = t.nodeType && (T.cssNumber[e] || "px" !== c && +l) && rt.exec(T.css(t, e));
                    if (u && u[3] !== c) {
                        for (l /= 2, c = c || u[3], u = +l || 1; o--;) T.style(t, e, u + c), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (o = 0), u /= s;
                        u *= 2, T.style(t, e, u + c), n = n || []
                    }
                    return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
                }
                var ht = {};

                function dt(t) {
                    var e, n = t.ownerDocument,
                        i = t.nodeName,
                        r = ht[i];
                    return r || (e = n.body.appendChild(n.createElement(i)), r = T.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), ht[i] = r, r)
                }

                function ft(t, e) { for (var n, i, r = [], s = 0, o = t.length; s < o; s++)(i = t[s]).style && (n = i.style.display, e ? ("none" === n && (r[s] = Z.get(i, "display") || null, r[s] || (i.style.display = "")), "" === i.style.display && ct(i) && (r[s] = dt(i))) : "none" !== n && (r[s] = "none", Z.set(i, "display", n))); for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]); return t }
                T.fn.extend({ show: function() { return ft(this, !0) }, hide: function() { return ft(this) }, toggle: function(t) { return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() { ct(this) ? T(this).show() : T(this).hide() })) } });
                var pt, gt, mt = /^(?:checkbox|radio)$/i,
                    _t = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    vt = /^$|^module$|\/(?:java|ecma)script/i;
                pt = y.createDocumentFragment().appendChild(y.createElement("div")), (gt = y.createElement("input")).setAttribute("type", "radio"), gt.setAttribute("checked", "checked"), gt.setAttribute("name", "t"), pt.appendChild(gt), m.checkClone = pt.cloneNode(!0).cloneNode(!0).lastChild.checked, pt.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!pt.cloneNode(!0).lastChild.defaultValue, pt.innerHTML = "<option></option>", m.option = !!pt.lastChild;
                var yt = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

                function bt(t, e) { var n; return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && D(t, e) ? T.merge([t], n) : n }

                function wt(t, e) { for (var n = 0, i = t.length; n < i; n++) Z.set(t[n], "globalEval", !e || Z.get(e[n], "globalEval")) }
                yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead, yt.th = yt.td, m.option || (yt.optgroup = yt.option = [1, "<select multiple='multiple'>", "</select>"]);
                var xt = /<|&#?\w+;/;

                function Et(t, e, n, i, r) {
                    for (var s, o, a, l, c, u, h = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++)
                        if ((s = t[f]) || 0 === s)
                            if ("object" === x(s)) T.merge(d, s.nodeType ? [s] : s);
                            else if (xt.test(s)) {
                        for (o = o || h.appendChild(e.createElement("div")), a = (_t.exec(s) || ["", ""])[1].toLowerCase(), l = yt[a] || yt._default, o.innerHTML = l[1] + T.htmlPrefilter(s) + l[2], u = l[0]; u--;) o = o.lastChild;
                        T.merge(d, o.childNodes), (o = h.firstChild).textContent = ""
                    } else d.push(e.createTextNode(s));
                    for (h.textContent = "", f = 0; s = d[f++];)
                        if (i && T.inArray(s, i) > -1) r && r.push(s);
                        else if (c = at(s), o = bt(h.appendChild(s), "script"), c && wt(o), n)
                        for (u = 0; s = o[u++];) vt.test(s.type || "") && n.push(s);
                    return h
                }
                var Tt = /^([^.]*)(?:\.(.+)|)/;

                function Ct() { return !0 }

                function At() { return !1 }

                function kt(t, e) { return t === function() { try { return y.activeElement } catch (t) {} }() == ("focus" === e) }

                function Ot(t, e, n, i, r, s) {
                    var o, a;
                    if ("object" == typeof e) { for (a in "string" != typeof n && (i = i || n, n = void 0), e) Ot(t, a, n, i, e[a], s); return t }
                    if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = At;
                    else if (!r) return t;
                    return 1 === s && (o = r, r = function(t) { return T().off(t), o.apply(this, arguments) }, r.guid = o.guid || (o.guid = T.guid++)), t.each((function() { T.event.add(this, e, r, i, n) }))
                }

                function St(t, e, n) {
                    n ? (Z.set(t, e, !1), T.event.add(t, e, {
                        namespace: !1,
                        handler: function(t) {
                            var i, r, s = Z.get(this, e);
                            if (1 & t.isTrigger && this[e]) {
                                if (s.length)(T.event.special[e] || {}).delegateType && t.stopPropagation();
                                else if (s = a.call(arguments), Z.set(this, e, s), i = n(this, e), this[e](), s !== (r = Z.get(this, e)) || i ? Z.set(this, e, !1) : r = {}, s !== r) return t.stopImmediatePropagation(), t.preventDefault(), r && r.value
                            } else s.length && (Z.set(this, e, { value: T.event.trigger(T.extend(s[0], T.Event.prototype), s.slice(1), this) }), t.stopImmediatePropagation())
                        }
                    })) : void 0 === Z.get(t, e) && T.event.add(t, e, Ct)
                }
                T.event = {
                    global: {},
                    add: function(t, e, n, i, r) {
                        var s, o, a, l, c, u, h, d, f, p, g, m = Z.get(t);
                        if (Q(t))
                            for (n.handler && (n = (s = n).handler, r = s.selector), r && T.find.matchesSelector(ot, r), n.guid || (n.guid = T.guid++), (l = m.events) || (l = m.events = Object.create(null)), (o = m.handle) || (o = m.handle = function(e) { return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0 }), c = (e = (e || "").match(z) || [""]).length; c--;) f = g = (a = Tt.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (h = T.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = T.event.special[f] || {}, u = T.extend({ type: f, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && T.expr.match.needsContext.test(r), namespace: p.join(".") }, s), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, p, o) || t.addEventListener && t.addEventListener(f, o)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), T.event.global[f] = !0)
                    },
                    remove: function(t, e, n, i, r) {
                        var s, o, a, l, c, u, h, d, f, p, g, m = Z.hasData(t) && Z.get(t);
                        if (m && (l = m.events)) {
                            for (c = (e = (e || "").match(z) || [""]).length; c--;)
                                if (f = g = (a = Tt.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                                    for (h = T.event.special[f] || {}, d = l[f = (i ? h.delegateType : h.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = d.length; s--;) u = d[s], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(s, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(t, u));
                                    o && !d.length && (h.teardown && !1 !== h.teardown.call(t, p, m.handle) || T.removeEvent(t, f, m.handle), delete l[f])
                                } else
                                    for (f in l) T.event.remove(t, f + e[c], n, i, !0);
                            T.isEmptyObject(l) && Z.remove(t, "handle events")
                        }
                    },
                    dispatch: function(t) {
                        var e, n, i, r, s, o, a = new Array(arguments.length),
                            l = T.event.fix(t),
                            c = (Z.get(this, "events") || Object.create(null))[l.type] || [],
                            u = T.event.special[l.type] || {};
                        for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
                        if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                            for (o = T.event.handlers.call(this, l, c), e = 0;
                                (r = o[e++]) && !l.isPropagationStopped();)
                                for (l.currentTarget = r.elem, n = 0;
                                    (s = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace) || (l.handleObj = s, l.data = s.data, void 0 !== (i = ((T.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                            return u.postDispatch && u.postDispatch.call(this, l), l.result
                        }
                    },
                    handlers: function(t, e) {
                        var n, i, r, s, o, a = [],
                            l = e.delegateCount,
                            c = t.target;
                        if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                            for (; c !== this; c = c.parentNode || this)
                                if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                                    for (s = [], o = {}, n = 0; n < l; n++) void 0 === o[r = (i = e[n]).selector + " "] && (o[r] = i.needsContext ? T(r, this).index(c) > -1 : T.find(r, this, null, [c]).length), o[r] && s.push(i);
                                    s.length && a.push({ elem: c, handlers: s })
                                }
                        return c = this, l < e.length && a.push({ elem: c, handlers: e.slice(l) }), a
                    },
                    addProp: function(t, e) { Object.defineProperty(T.Event.prototype, t, { enumerable: !0, configurable: !0, get: _(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
                    fix: function(t) { return t[T.expando] ? t : new T.Event(t) },
                    special: { load: { noBubble: !0 }, click: { setup: function(t) { var e = this || t; return mt.test(e.type) && e.click && D(e, "input") && St(e, "click", Ct), !1 }, trigger: function(t) { var e = this || t; return mt.test(e.type) && e.click && D(e, "input") && St(e, "click"), !0 }, _default: function(t) { var e = t.target; return mt.test(e.type) && e.click && D(e, "input") && Z.get(e, "click") || D(e, "a") } }, beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } }
                }, T.removeEvent = function(t, e, n) { t.removeEventListener && t.removeEventListener(e, n) }, T.Event = function(t, e) {
                    if (!(this instanceof T.Event)) return new T.Event(t, e);
                    t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Ct : At, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && T.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[T.expando] = !0
                }, T.Event.prototype = {
                    constructor: T.Event,
                    isDefaultPrevented: At,
                    isPropagationStopped: At,
                    isImmediatePropagationStopped: At,
                    isSimulated: !1,
                    preventDefault: function() {
                        var t = this.originalEvent;
                        this.isDefaultPrevented = Ct, t && !this.isSimulated && t.preventDefault()
                    },
                    stopPropagation: function() {
                        var t = this.originalEvent;
                        this.isPropagationStopped = Ct, t && !this.isSimulated && t.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var t = this.originalEvent;
                        this.isImmediatePropagationStopped = Ct, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, T.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, T.event.addProp), T.each({ focus: "focusin", blur: "focusout" }, (function(t, e) { T.event.special[t] = { setup: function() { return St(this, t, kt), !1 }, trigger: function() { return St(this, t), !0 }, _default: function() { return !0 }, delegateType: e } })), T.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, (function(t, e) {
                    T.event.special[t] = {
                        delegateType: e,
                        bindType: e,
                        handle: function(t) {
                            var n, i = this,
                                r = t.relatedTarget,
                                s = t.handleObj;
                            return r && (r === i || T.contains(i, r)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
                        }
                    }
                })), T.fn.extend({ on: function(t, e, n, i) { return Ot(this, t, e, n, i) }, one: function(t, e, n, i) { return Ot(this, t, e, n, i, 1) }, off: function(t, e, n) { var i, r; if (t && t.preventDefault && t.handleObj) return i = t.handleObj, T(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof t) { for (r in t) this.off(r, e, t[r]); return this } return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = At), this.each((function() { T.event.remove(this, t, n, e) })) } });
                var Dt = /<script|<style|<link/i,
                    Lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                function Mt(t, e) { return D(t, "table") && D(11 !== e.nodeType ? e : e.firstChild, "tr") && T(t).children("tbody")[0] || t }

                function Pt(t) { return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t }

                function It(t) { return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t }

                function jt(t, e) {
                    var n, i, r, s, o, a;
                    if (1 === e.nodeType) {
                        if (Z.hasData(t) && (a = Z.get(t).events))
                            for (r in Z.remove(e, "handle events"), a)
                                for (n = 0, i = a[r].length; n < i; n++) T.event.add(e, r, a[r][n]);
                        J.hasData(t) && (s = J.access(t), o = T.extend({}, s), J.set(e, o))
                    }
                }

                function Rt(t, e) { var n = e.nodeName.toLowerCase(); "input" === n && mt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue) }

                function zt(t, e, n, i) {
                    e = l(e);
                    var r, s, o, a, c, u, h = 0,
                        d = t.length,
                        f = d - 1,
                        p = e[0],
                        g = _(p);
                    if (g || d > 1 && "string" == typeof p && !m.checkClone && Lt.test(p)) return t.each((function(r) {
                        var s = t.eq(r);
                        g && (e[0] = p.call(this, r, s.html())), zt(s, e, n, i)
                    }));
                    if (d && (s = (r = Et(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = s), s || i)) {
                        for (a = (o = T.map(bt(r, "script"), Pt)).length; h < d; h++) c = r, h !== f && (c = T.clone(c, !0, !0), a && T.merge(o, bt(c, "script"))), n.call(t[h], c, h);
                        if (a)
                            for (u = o[o.length - 1].ownerDocument, T.map(o, It), h = 0; h < a; h++) c = o[h], vt.test(c.type || "") && !Z.access(c, "globalEval") && T.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? T._evalUrl && !c.noModule && T._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, u) : w(c.textContent.replace(Nt, ""), c, u))
                    }
                    return t
                }

                function Ht(t, e, n) { for (var i, r = e ? T.filter(e, t) : t, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || T.cleanData(bt(i)), i.parentNode && (n && at(i) && wt(bt(i, "script")), i.parentNode.removeChild(i)); return t }
                T.extend({
                    htmlPrefilter: function(t) { return t },
                    clone: function(t, e, n) {
                        var i, r, s, o, a = t.cloneNode(!0),
                            l = at(t);
                        if (!(m.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t)))
                            for (o = bt(a), i = 0, r = (s = bt(t)).length; i < r; i++) Rt(s[i], o[i]);
                        if (e)
                            if (n)
                                for (s = s || bt(t), o = o || bt(a), i = 0, r = s.length; i < r; i++) jt(s[i], o[i]);
                            else jt(t, a);
                        return (o = bt(a, "script")).length > 0 && wt(o, !l && bt(t, "script")), a
                    },
                    cleanData: function(t) {
                        for (var e, n, i, r = T.event.special, s = 0; void 0 !== (n = t[s]); s++)
                            if (Q(n)) {
                                if (e = n[Z.expando]) {
                                    if (e.events)
                                        for (i in e.events) r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, e.handle);
                                    n[Z.expando] = void 0
                                }
                                n[J.expando] && (n[J.expando] = void 0)
                            }
                    }
                }), T.fn.extend({
                    detach: function(t) { return Ht(this, t, !0) },
                    remove: function(t) { return Ht(this, t) },
                    text: function(t) { return U(this, (function(t) { return void 0 === t ? T.text(this) : this.empty().each((function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t) })) }), null, t, arguments.length) },
                    append: function() { return zt(this, arguments, (function(t) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Mt(this, t).appendChild(t) })) },
                    prepend: function() {
                        return zt(this, arguments, (function(t) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = Mt(this, t);
                                e.insertBefore(t, e.firstChild)
                            }
                        }))
                    },
                    before: function() { return zt(this, arguments, (function(t) { this.parentNode && this.parentNode.insertBefore(t, this) })) },
                    after: function() { return zt(this, arguments, (function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) })) },
                    empty: function() { for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (T.cleanData(bt(t, !1)), t.textContent = ""); return this },
                    clone: function(t, e) { return t = null != t && t, e = null == e ? t : e, this.map((function() { return T.clone(this, t, e) })) },
                    html: function(t) {
                        return U(this, (function(t) {
                            var e = this[0] || {},
                                n = 0,
                                i = this.length;
                            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                            if ("string" == typeof t && !Dt.test(t) && !yt[(_t.exec(t) || ["", ""])[1].toLowerCase()]) {
                                t = T.htmlPrefilter(t);
                                try {
                                    for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (T.cleanData(bt(e, !1)), e.innerHTML = t);
                                    e = 0
                                } catch (t) {}
                            }
                            e && this.empty().append(t)
                        }), null, t, arguments.length)
                    },
                    replaceWith: function() {
                        var t = [];
                        return zt(this, arguments, (function(e) {
                            var n = this.parentNode;
                            T.inArray(this, t) < 0 && (T.cleanData(bt(this)), n && n.replaceChild(e, this))
                        }), t)
                    }
                }), T.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, (function(t, e) { T.fn[t] = function(t) { for (var n, i = [], r = T(t), s = r.length - 1, o = 0; o <= s; o++) n = o === s ? this : this.clone(!0), T(r[o])[e](n), c.apply(i, n.get()); return this.pushStack(i) } }));
                var $t = new RegExp("^(" + it + ")(?!px)[a-z%]+$", "i"),
                    Bt = function(t) { var e = t.ownerDocument.defaultView; return e && e.opener || (e = i), e.getComputedStyle(t) },
                    qt = function(t, e, n) { var i, r, s = {}; for (r in e) s[r] = t.style[r], t.style[r] = e[r]; for (r in i = n.call(t), e) t.style[r] = s[r]; return i },
                    Wt = new RegExp(st.join("|"), "i");

                function Ft(t, e, n) { var i, r, s, o, a = t.style; return (n = n || Bt(t)) && ("" !== (o = n.getPropertyValue(e) || n[e]) || at(t) || (o = T.style(t, e)), !m.pixelBoxStyles() && $t.test(o) && Wt.test(e) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o }

                function Ut(t, e) {
                    return {
                        get: function() {
                            if (!t()) return (this.get = e).apply(this, arguments);
                            delete this.get
                        }
                    }
                }! function() {
                    function t() {
                        if (u) {
                            c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ot.appendChild(c).appendChild(u);
                            var t = i.getComputedStyle(u);
                            n = "1%" !== t.top, l = 12 === e(t.marginLeft), u.style.right = "60%", o = 36 === e(t.right), r = 36 === e(t.width), u.style.position = "absolute", s = 12 === e(u.offsetWidth / 3), ot.removeChild(c), u = null
                        }
                    }

                    function e(t) { return Math.round(parseFloat(t)) }
                    var n, r, s, o, a, l, c = y.createElement("div"),
                        u = y.createElement("div");
                    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === u.style.backgroundClip, T.extend(m, { boxSizingReliable: function() { return t(), r }, pixelBoxStyles: function() { return t(), o }, pixelPosition: function() { return t(), n }, reliableMarginLeft: function() { return t(), l }, scrollboxSize: function() { return t(), s }, reliableTrDimensions: function() { var t, e, n, r; return null == a && (t = y.createElement("table"), e = y.createElement("tr"), n = y.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", e.style.cssText = "border:1px solid", e.style.height = "1px", n.style.height = "9px", n.style.display = "block", ot.appendChild(t).appendChild(e).appendChild(n), r = i.getComputedStyle(e), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === e.offsetHeight, ot.removeChild(t)), a } }))
                }();
                var Xt = ["Webkit", "Moz", "ms"],
                    Vt = y.createElement("div").style,
                    Yt = {};

                function Kt(t) {
                    return T.cssProps[t] || Yt[t] || (t in Vt ? t : Yt[t] = function(t) {
                        for (var e = t[0].toUpperCase() + t.slice(1), n = Xt.length; n--;)
                            if ((t = Xt[n] + e) in Vt) return t
                    }(t) || t)
                }
                var Qt = /^(none|table(?!-c[ea]).+)/,
                    Gt = /^--/,
                    Zt = { position: "absolute", visibility: "hidden", display: "block" },
                    Jt = { letterSpacing: "0", fontWeight: "400" };

                function te(t, e, n) { var i = rt.exec(e); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e }

                function ee(t, e, n, i, r, s) {
                    var o = "width" === e ? 1 : 0,
                        a = 0,
                        l = 0;
                    if (n === (i ? "border" : "content")) return 0;
                    for (; o < 4; o += 2) "margin" === n && (l += T.css(t, n + st[o], !0, r)), i ? ("content" === n && (l -= T.css(t, "padding" + st[o], !0, r)), "margin" !== n && (l -= T.css(t, "border" + st[o] + "Width", !0, r))) : (l += T.css(t, "padding" + st[o], !0, r), "padding" !== n ? l += T.css(t, "border" + st[o] + "Width", !0, r) : a += T.css(t, "border" + st[o] + "Width", !0, r));
                    return !i && s >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - .5)) || 0), l
                }

                function ne(t, e, n) {
                    var i = Bt(t),
                        r = (!m.boxSizingReliable() || n) && "border-box" === T.css(t, "boxSizing", !1, i),
                        s = r,
                        o = Ft(t, e, i),
                        a = "offset" + e[0].toUpperCase() + e.slice(1);
                    if ($t.test(o)) {
                        if (!n) return o;
                        o = "auto"
                    }
                    return (!m.boxSizingReliable() && r || !m.reliableTrDimensions() && D(t, "tr") || "auto" === o || !parseFloat(o) && "inline" === T.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === T.css(t, "boxSizing", !1, i), (s = a in t) && (o = t[a])), (o = parseFloat(o) || 0) + ee(t, e, n || (r ? "border" : "content"), s, i, o) + "px"
                }

                function ie(t, e, n, i, r) { return new ie.prototype.init(t, e, n, i, r) }
                T.extend({
                    cssHooks: { opacity: { get: function(t, e) { if (e) { var n = Ft(t, "opacity"); return "" === n ? "1" : n } } } },
                    cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
                    cssProps: {},
                    style: function(t, e, n, i) {
                        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                            var r, s, o, a = K(e),
                                l = Gt.test(e),
                                c = t.style;
                            if (l || (e = Kt(a)), o = T.cssHooks[e] || T.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : c[e];
                            "string" == (s = typeof n) && (r = rt.exec(n)) && r[1] && (n = ut(t, e, r), s = "number"), null != n && n == n && ("number" !== s || l || (n += r && r[3] || (T.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), o && "set" in o && void 0 === (n = o.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
                        }
                    },
                    css: function(t, e, n, i) { var r, s, o, a = K(e); return Gt.test(e) || (e = Kt(a)), (o = T.cssHooks[e] || T.cssHooks[a]) && "get" in o && (r = o.get(t, !0, n)), void 0 === r && (r = Ft(t, e, i)), "normal" === r && e in Jt && (r = Jt[e]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r }
                }), T.each(["height", "width"], (function(t, e) {
                    T.cssHooks[e] = {
                        get: function(t, n, i) { if (n) return !Qt.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ne(t, e, i) : qt(t, Zt, (function() { return ne(t, e, i) })) },
                        set: function(t, n, i) {
                            var r, s = Bt(t),
                                o = !m.scrollboxSize() && "absolute" === s.position,
                                a = (o || i) && "border-box" === T.css(t, "boxSizing", !1, s),
                                l = i ? ee(t, e, i, a, s) : 0;
                            return a && o && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(s[e]) - ee(t, e, "border", !1, s) - .5)), l && (r = rt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = T.css(t, e)), te(0, n, l)
                        }
                    }
                })), T.cssHooks.marginLeft = Ut(m.reliableMarginLeft, (function(t, e) { if (e) return (parseFloat(Ft(t, "marginLeft")) || t.getBoundingClientRect().left - qt(t, { marginLeft: 0 }, (function() { return t.getBoundingClientRect().left }))) + "px" })), T.each({ margin: "", padding: "", border: "Width" }, (function(t, e) { T.cssHooks[t + e] = { expand: function(n) { for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + st[i] + e] = s[i] || s[i - 2] || s[0]; return r } }, "margin" !== t && (T.cssHooks[t + e].set = te) })), T.fn.extend({
                    css: function(t, e) {
                        return U(this, (function(t, e, n) {
                            var i, r, s = {},
                                o = 0;
                            if (Array.isArray(e)) { for (i = Bt(t), r = e.length; o < r; o++) s[e[o]] = T.css(t, e[o], !1, i); return s }
                            return void 0 !== n ? T.style(t, e, n) : T.css(t, e)
                        }), t, e, arguments.length > 1)
                    }
                }), T.Tween = ie, ie.prototype = { constructor: ie, init: function(t, e, n, i, r, s) { this.elem = t, this.prop = n, this.easing = r || T.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (T.cssNumber[n] ? "" : "px") }, cur: function() { var t = ie.propHooks[this.prop]; return t && t.get ? t.get(this) : ie.propHooks._default.get(this) }, run: function(t) { var e, n = ie.propHooks[this.prop]; return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ie.propHooks._default.set(this), this } }, ie.prototype.init.prototype = ie.prototype, ie.propHooks = { _default: { get: function(t) { var e; return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 }, set: function(t) { T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !T.cssHooks[t.prop] && null == t.elem.style[Kt(t.prop)] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit) } } }, ie.propHooks.scrollTop = ie.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, T.easing = { linear: function(t) { return t }, swing: function(t) { return .5 - Math.cos(t * Math.PI) / 2 }, _default: "swing" }, T.fx = ie.prototype.init, T.fx.step = {};
                var re, se, oe = /^(?:toggle|show|hide)$/,
                    ae = /queueHooks$/;

                function le() { se && (!1 === y.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(le) : i.setTimeout(le, T.fx.interval), T.fx.tick()) }

                function ce() { return i.setTimeout((function() { re = void 0 })), re = Date.now() }

                function ue(t, e) {
                    var n, i = 0,
                        r = { height: t };
                    for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = st[i])] = r["padding" + n] = t;
                    return e && (r.opacity = r.width = t), r
                }

                function he(t, e, n) {
                    for (var i, r = (de.tweeners[e] || []).concat(de.tweeners["*"]), s = 0, o = r.length; s < o; s++)
                        if (i = r[s].call(n, e, t)) return i
                }

                function de(t, e, n) {
                    var i, r, s = 0,
                        o = de.prefilters.length,
                        a = T.Deferred().always((function() { delete l.elem })),
                        l = function() { if (r) return !1; for (var e = re || ce(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), s = 0, o = c.tweens.length; s < o; s++) c.tweens[s].run(i); return a.notifyWith(t, [c, i, n]), i < 1 && o ? n : (o || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1) },
                        c = a.promise({
                            elem: t,
                            props: T.extend({}, e),
                            opts: T.extend(!0, { specialEasing: {}, easing: T.easing._default }, n),
                            originalProperties: e,
                            originalOptions: n,
                            startTime: re || ce(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function(e, n) { var i = T.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing); return c.tweens.push(i), i },
                            stop: function(e) {
                                var n = 0,
                                    i = e ? c.tweens.length : 0;
                                if (r) return this;
                                for (r = !0; n < i; n++) c.tweens[n].run(1);
                                return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                            }
                        }),
                        u = c.props;
                    for (function(t, e) {
                            var n, i, r, s, o;
                            for (n in t)
                                if (r = e[i = K(n)], s = t[n], Array.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), (o = T.cssHooks[i]) && "expand" in o)
                                    for (n in s = o.expand(s), delete t[i], s) n in t || (t[n] = s[n], e[n] = r);
                                else e[i] = r
                        }(u, c.opts.specialEasing); s < o; s++)
                        if (i = de.prefilters[s].call(c, t, u, c.opts)) return _(i.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
                    return T.map(u, he, c), _(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), T.fx.timer(T.extend(l, { elem: t, anim: c, queue: c.opts.queue })), c
                }
                T.Animation = T.extend(de, {
                        tweeners: { "*": [function(t, e) { var n = this.createTween(t, e); return ut(n.elem, t, rt.exec(e), n), n }] },
                        tweener: function(t, e) { _(t) ? (e = t, t = ["*"]) : t = t.match(z); for (var n, i = 0, r = t.length; i < r; i++) n = t[i], de.tweeners[n] = de.tweeners[n] || [], de.tweeners[n].unshift(e) },
                        prefilters: [function(t, e, n) {
                            var i, r, s, o, a, l, c, u, h = "width" in e || "height" in e,
                                d = this,
                                f = {},
                                p = t.style,
                                g = t.nodeType && ct(t),
                                m = Z.get(t, "fxshow");
                            for (i in n.queue || (null == (o = T._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function() { o.unqueued || a() }), o.unqueued++, d.always((function() { d.always((function() { o.unqueued--, T.queue(t, "fx").length || o.empty.fire() })) }))), e)
                                if (r = e[i], oe.test(r)) {
                                    if (delete e[i], s = s || "toggle" === r, r === (g ? "hide" : "show")) {
                                        if ("show" !== r || !m || void 0 === m[i]) continue;
                                        g = !0
                                    }
                                    f[i] = m && m[i] || T.style(t, i)
                                }
                            if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(f))
                                for (i in h && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = Z.get(t, "display")), "none" === (u = T.css(t, "display")) && (c ? u = c : (ft([t], !0), c = t.style.display || c, u = T.css(t, "display"), ft([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === T.css(t, "float") && (l || (d.done((function() { p.display = c })), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] }))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = Z.access(t, "fxshow", { display: c }), s && (m.hidden = !g), g && ft([t], !0), d.done((function() { for (i in g || ft([t]), Z.remove(t, "fxshow"), f) T.style(t, i, f[i]) }))), l = he(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
                        }],
                        prefilter: function(t, e) { e ? de.prefilters.unshift(t) : de.prefilters.push(t) }
                    }), T.speed = function(t, e, n) { var i = t && "object" == typeof t ? T.extend({}, t) : { complete: n || !n && e || _(t) && t, duration: t, easing: n && e || e && !_(e) && e }; return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() { _(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue) }, i }, T.fn.extend({
                        fadeTo: function(t, e, n, i) { return this.filter(ct).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i) },
                        animate: function(t, e, n, i) {
                            var r = T.isEmptyObject(t),
                                s = T.speed(e, n, i),
                                o = function() {
                                    var e = de(this, T.extend({}, t), s);
                                    (r || Z.get(this, "finish")) && e.stop(!0)
                                };
                            return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
                        },
                        stop: function(t, e, n) {
                            var i = function(t) {
                                var e = t.stop;
                                delete t.stop, e(n)
                            };
                            return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function() {
                                var e = !0,
                                    r = null != t && t + "queueHooks",
                                    s = T.timers,
                                    o = Z.get(this);
                                if (r) o[r] && o[r].stop && i(o[r]);
                                else
                                    for (r in o) o[r] && o[r].stop && ae.test(r) && i(o[r]);
                                for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n), e = !1, s.splice(r, 1));
                                !e && n || T.dequeue(this, t)
                            }))
                        },
                        finish: function(t) {
                            return !1 !== t && (t = t || "fx"), this.each((function() {
                                var e, n = Z.get(this),
                                    i = n[t + "queue"],
                                    r = n[t + "queueHooks"],
                                    s = T.timers,
                                    o = i ? i.length : 0;
                                for (n.finish = !0, T.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                                for (e = 0; e < o; e++) i[e] && i[e].finish && i[e].finish.call(this);
                                delete n.finish
                            }))
                        }
                    }), T.each(["toggle", "show", "hide"], (function(t, e) {
                        var n = T.fn[e];
                        T.fn[e] = function(t, i, r) { return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ue(e, !0), t, i, r) }
                    })), T.each({ slideDown: ue("show"), slideUp: ue("hide"), slideToggle: ue("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, (function(t, e) { T.fn[t] = function(t, n, i) { return this.animate(e, t, n, i) } })), T.timers = [], T.fx.tick = function() {
                        var t, e = 0,
                            n = T.timers;
                        for (re = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                        n.length || T.fx.stop(), re = void 0
                    }, T.fx.timer = function(t) { T.timers.push(t), T.fx.start() }, T.fx.interval = 13, T.fx.start = function() { se || (se = !0, le()) }, T.fx.stop = function() { se = null }, T.fx.speeds = { slow: 600, fast: 200, _default: 400 }, T.fn.delay = function(t, e) {
                        return t = T.fx && T.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function(e, n) {
                            var r = i.setTimeout(e, t);
                            n.stop = function() { i.clearTimeout(r) }
                        }))
                    },
                    function() {
                        var t = y.createElement("input"),
                            e = y.createElement("select").appendChild(y.createElement("option"));
                        t.type = "checkbox", m.checkOn = "" !== t.value, m.optSelected = e.selected, (t = y.createElement("input")).value = "t", t.type = "radio", m.radioValue = "t" === t.value
                    }();
                var fe, pe = T.expr.attrHandle;
                T.fn.extend({ attr: function(t, e) { return U(this, T.attr, t, e, arguments.length > 1) }, removeAttr: function(t) { return this.each((function() { T.removeAttr(this, t) })) } }), T.extend({
                    attr: function(t, e, n) { var i, r, s = t.nodeType; if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? T.prop(t, e, n) : (1 === s && T.isXMLDoc(t) || (r = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? fe : void 0)), void 0 !== n ? null === n ? void T.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = T.find.attr(t, e)) ? void 0 : i) },
                    attrHooks: { type: { set: function(t, e) { if (!m.radioValue && "radio" === e && D(t, "input")) { var n = t.value; return t.setAttribute("type", e), n && (t.value = n), e } } } },
                    removeAttr: function(t, e) {
                        var n, i = 0,
                            r = e && e.match(z);
                        if (r && 1 === t.nodeType)
                            for (; n = r[i++];) t.removeAttribute(n)
                    }
                }), fe = { set: function(t, e, n) { return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n), n } }, T.each(T.expr.match.bool.source.match(/\w+/g), (function(t, e) {
                    var n = pe[e] || T.find.attr;
                    pe[e] = function(t, e, i) { var r, s, o = e.toLowerCase(); return i || (s = pe[o], pe[o] = r, r = null != n(t, e, i) ? o : null, pe[o] = s), r }
                }));
                var ge = /^(?:input|select|textarea|button)$/i,
                    me = /^(?:a|area)$/i;

                function _e(t) { return (t.match(z) || []).join(" ") }

                function ve(t) { return t.getAttribute && t.getAttribute("class") || "" }

                function ye(t) { return Array.isArray(t) ? t : "string" == typeof t && t.match(z) || [] }
                T.fn.extend({ prop: function(t, e) { return U(this, T.prop, t, e, arguments.length > 1) }, removeProp: function(t) { return this.each((function() { delete this[T.propFix[t] || t] })) } }), T.extend({ prop: function(t, e, n) { var i, r, s = t.nodeType; if (3 !== s && 8 !== s && 2 !== s) return 1 === s && T.isXMLDoc(t) || (e = T.propFix[e] || e, r = T.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e] }, propHooks: { tabIndex: { get: function(t) { var e = T.find.attr(t, "tabindex"); return e ? parseInt(e, 10) : ge.test(t.nodeName) || me.test(t.nodeName) && t.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), m.optSelected || (T.propHooks.selected = {
                    get: function(t) { var e = t.parentNode; return e && e.parentNode && e.parentNode.selectedIndex, null },
                    set: function(t) {
                        var e = t.parentNode;
                        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                    }
                }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() { T.propFix[this.toLowerCase()] = this })), T.fn.extend({
                    addClass: function(t) {
                        var e, n, i, r, s, o, a, l = 0;
                        if (_(t)) return this.each((function(e) { T(this).addClass(t.call(this, e, ve(this))) }));
                        if ((e = ye(t)).length)
                            for (; n = this[l++];)
                                if (r = ve(n), i = 1 === n.nodeType && " " + _e(r) + " ") {
                                    for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                                    r !== (a = _e(i)) && n.setAttribute("class", a)
                                }
                        return this
                    },
                    removeClass: function(t) {
                        var e, n, i, r, s, o, a, l = 0;
                        if (_(t)) return this.each((function(e) { T(this).removeClass(t.call(this, e, ve(this))) }));
                        if (!arguments.length) return this.attr("class", "");
                        if ((e = ye(t)).length)
                            for (; n = this[l++];)
                                if (r = ve(n), i = 1 === n.nodeType && " " + _e(r) + " ") {
                                    for (o = 0; s = e[o++];)
                                        for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                                    r !== (a = _e(i)) && n.setAttribute("class", a)
                                }
                        return this
                    },
                    toggleClass: function(t, e) {
                        var n = typeof t,
                            i = "string" === n || Array.isArray(t);
                        return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : _(t) ? this.each((function(n) { T(this).toggleClass(t.call(this, n, ve(this), e), e) })) : this.each((function() {
                            var e, r, s, o;
                            if (i)
                                for (r = 0, s = T(this), o = ye(t); e = o[r++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                            else void 0 !== t && "boolean" !== n || ((e = ve(this)) && Z.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Z.get(this, "__className__") || ""))
                        }))
                    },
                    hasClass: function(t) {
                        var e, n, i = 0;
                        for (e = " " + t + " "; n = this[i++];)
                            if (1 === n.nodeType && (" " + _e(ve(n)) + " ").indexOf(e) > -1) return !0;
                        return !1
                    }
                });
                var be = /\r/g;
                T.fn.extend({
                    val: function(t) {
                        var e, n, i, r = this[0];
                        return arguments.length ? (i = _(t), this.each((function(n) {
                            var r;
                            1 === this.nodeType && (null == (r = i ? t.call(this, n, T(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = T.map(r, (function(t) { return null == t ? "" : t + "" }))), (e = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                        }))) : r ? (e = T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(be, "") : null == n ? "" : n : void 0
                    }
                }), T.extend({
                    valHooks: {
                        option: { get: function(t) { var e = T.find.attr(t, "value"); return null != e ? e : _e(T.text(t)) } },
                        select: {
                            get: function(t) {
                                var e, n, i, r = t.options,
                                    s = t.selectedIndex,
                                    o = "select-one" === t.type,
                                    a = o ? null : [],
                                    l = o ? s + 1 : r.length;
                                for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                                    if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                                        if (e = T(n).val(), o) return e;
                                        a.push(e)
                                    }
                                return a
                            },
                            set: function(t, e) { for (var n, i, r = t.options, s = T.makeArray(e), o = r.length; o--;)((i = r[o]).selected = T.inArray(T.valHooks.option.get(i), s) > -1) && (n = !0); return n || (t.selectedIndex = -1), s }
                        }
                    }
                }), T.each(["radio", "checkbox"], (function() { T.valHooks[this] = { set: function(t, e) { if (Array.isArray(e)) return t.checked = T.inArray(T(t).val(), e) > -1 } }, m.checkOn || (T.valHooks[this].get = function(t) { return null === t.getAttribute("value") ? "on" : t.value }) })), m.focusin = "onfocusin" in i;
                var we = /^(?:focusinfocus|focusoutblur)$/,
                    xe = function(t) { t.stopPropagation() };
                T.extend(T.event, {
                    trigger: function(t, e, n, r) {
                        var s, o, a, l, c, u, h, d, p = [n || y],
                            g = f.call(t, "type") ? t.type : t,
                            m = f.call(t, "namespace") ? t.namespace.split(".") : [];
                        if (o = d = a = n = n || y, 3 !== n.nodeType && 8 !== n.nodeType && !we.test(g + T.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), c = g.indexOf(":") < 0 && "on" + g, (t = t[T.expando] ? t : new T.Event(g, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : T.makeArray(e, [t]), h = T.event.special[g] || {}, r || !h.trigger || !1 !== h.trigger.apply(n, e))) {
                            if (!r && !h.noBubble && !v(n)) {
                                for (l = h.delegateType || g, we.test(l + g) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                                a === (n.ownerDocument || y) && p.push(a.defaultView || a.parentWindow || i)
                            }
                            for (s = 0;
                                (o = p[s++]) && !t.isPropagationStopped();) d = o, t.type = s > 1 ? l : h.bindType || g, (u = (Z.get(o, "events") || Object.create(null))[t.type] && Z.get(o, "handle")) && u.apply(o, e), (u = c && o[c]) && u.apply && Q(o) && (t.result = u.apply(o, e), !1 === t.result && t.preventDefault());
                            return t.type = g, r || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(p.pop(), e) || !Q(n) || c && _(n[g]) && !v(n) && ((a = n[c]) && (n[c] = null), T.event.triggered = g, t.isPropagationStopped() && d.addEventListener(g, xe), n[g](), t.isPropagationStopped() && d.removeEventListener(g, xe), T.event.triggered = void 0, a && (n[c] = a)), t.result
                        }
                    },
                    simulate: function(t, e, n) {
                        var i = T.extend(new T.Event, n, { type: t, isSimulated: !0 });
                        T.event.trigger(i, null, e)
                    }
                }), T.fn.extend({ trigger: function(t, e) { return this.each((function() { T.event.trigger(t, e, this) })) }, triggerHandler: function(t, e) { var n = this[0]; if (n) return T.event.trigger(t, e, n, !0) } }), m.focusin || T.each({ focus: "focusin", blur: "focusout" }, (function(t, e) {
                    var n = function(t) { T.event.simulate(e, t.target, T.event.fix(t)) };
                    T.event.special[e] = {
                        setup: function() {
                            var i = this.ownerDocument || this.document || this,
                                r = Z.access(i, e);
                            r || i.addEventListener(t, n, !0), Z.access(i, e, (r || 0) + 1)
                        },
                        teardown: function() {
                            var i = this.ownerDocument || this.document || this,
                                r = Z.access(i, e) - 1;
                            r ? Z.access(i, e, r) : (i.removeEventListener(t, n, !0), Z.remove(i, e))
                        }
                    }
                }));
                var Ee = i.location,
                    Te = { guid: Date.now() },
                    Ce = /\?/;
                T.parseXML = function(t) { var e, n; if (!t || "string" != typeof t) return null; try { e = (new i.DOMParser).parseFromString(t, "text/xml") } catch (t) {} return n = e && e.getElementsByTagName("parsererror")[0], e && !n || T.error("Invalid XML: " + (n ? T.map(n.childNodes, (function(t) { return t.textContent })).join("\n") : t)), e };
                var Ae = /\[\]$/,
                    ke = /\r?\n/g,
                    Oe = /^(?:submit|button|image|reset|file)$/i,
                    Se = /^(?:input|select|textarea|keygen)/i;

                function De(t, e, n, i) {
                    var r;
                    if (Array.isArray(e)) T.each(e, (function(e, r) { n || Ae.test(t) ? i(t, r) : De(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i) }));
                    else if (n || "object" !== x(e)) i(t, e);
                    else
                        for (r in e) De(t + "[" + r + "]", e[r], n, i)
                }
                T.param = function(t, e) {
                    var n, i = [],
                        r = function(t, e) {
                            var n = _(e) ? e() : e;
                            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                        };
                    if (null == t) return "";
                    if (Array.isArray(t) || t.jquery && !T.isPlainObject(t)) T.each(t, (function() { r(this.name, this.value) }));
                    else
                        for (n in t) De(n, t[n], e, r);
                    return i.join("&")
                }, T.fn.extend({ serialize: function() { return T.param(this.serializeArray()) }, serializeArray: function() { return this.map((function() { var t = T.prop(this, "elements"); return t ? T.makeArray(t) : this })).filter((function() { var t = this.type; return this.name && !T(this).is(":disabled") && Se.test(this.nodeName) && !Oe.test(t) && (this.checked || !mt.test(t)) })).map((function(t, e) { var n = T(this).val(); return null == n ? null : Array.isArray(n) ? T.map(n, (function(t) { return { name: e.name, value: t.replace(ke, "\r\n") } })) : { name: e.name, value: n.replace(ke, "\r\n") } })).get() } });
                var Le = /%20/g,
                    Ne = /#.*$/,
                    Me = /([?&])_=[^&]*/,
                    Pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    Ie = /^(?:GET|HEAD)$/,
                    je = /^\/\//,
                    Re = {},
                    ze = {},
                    He = "*/".concat("*"),
                    $e = y.createElement("a");

                function Be(t) {
                    return function(e, n) {
                        "string" != typeof e && (n = e, e = "*");
                        var i, r = 0,
                            s = e.toLowerCase().match(z) || [];
                        if (_(n))
                            for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
                    }
                }

                function qe(t, e, n, i) {
                    var r = {},
                        s = t === ze;

                    function o(a) { var l; return r[a] = !0, T.each(t[a] || [], (function(t, a) { var c = a(e, n, i); return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1) })), l }
                    return o(e.dataTypes[0]) || !r["*"] && o("*")
                }

                function We(t, e) { var n, i, r = T.ajaxSettings.flatOptions || {}; for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]); return i && T.extend(!0, t, i), t }
                $e.href = Ee.href, T.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: { url: Ee.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ee.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": He, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": T.parseXML }, flatOptions: { url: !0, context: !0 } },
                    ajaxSetup: function(t, e) { return e ? We(We(t, T.ajaxSettings), e) : We(T.ajaxSettings, t) },
                    ajaxPrefilter: Be(Re),
                    ajaxTransport: Be(ze),
                    ajax: function(t, e) {
                        "object" == typeof t && (e = t, t = void 0), e = e || {};
                        var n, r, s, o, a, l, c, u, h, d, f = T.ajaxSetup({}, e),
                            p = f.context || f,
                            g = f.context && (p.nodeType || p.jquery) ? T(p) : T.event,
                            m = T.Deferred(),
                            _ = T.Callbacks("once memory"),
                            v = f.statusCode || {},
                            b = {},
                            w = {},
                            x = "canceled",
                            E = {
                                readyState: 0,
                                getResponseHeader: function(t) {
                                    var e;
                                    if (c) {
                                        if (!o)
                                            for (o = {}; e = Pe.exec(s);) o[e[1].toLowerCase() + " "] = (o[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                        e = o[t.toLowerCase() + " "]
                                    }
                                    return null == e ? null : e.join(", ")
                                },
                                getAllResponseHeaders: function() { return c ? s : null },
                                setRequestHeader: function(t, e) { return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, b[t] = e), this },
                                overrideMimeType: function(t) { return null == c && (f.mimeType = t), this },
                                statusCode: function(t) {
                                    var e;
                                    if (t)
                                        if (c) E.always(t[E.status]);
                                        else
                                            for (e in t) v[e] = [v[e], t[e]];
                                    return this
                                },
                                abort: function(t) { var e = t || x; return n && n.abort(e), C(0, e), this }
                            };
                        if (m.promise(E), f.url = ((t || f.url || Ee.href) + "").replace(je, Ee.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(z) || [""], null == f.crossDomain) { l = y.createElement("a"); try { l.href = f.url, l.href = l.href, f.crossDomain = $e.protocol + "//" + $e.host != l.protocol + "//" + l.host } catch (t) { f.crossDomain = !0 } }
                        if (f.data && f.processData && "string" != typeof f.data && (f.data = T.param(f.data, f.traditional)), qe(Re, f, e, E), c) return E;
                        for (h in (u = T.event && f.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ie.test(f.type), r = f.url.replace(Ne, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Le, "+")) : (d = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (Ce.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Me, "$1"), d = (Ce.test(r) ? "&" : "?") + "_=" + Te.guid++ + d), f.url = r + d), f.ifModified && (T.lastModified[r] && E.setRequestHeader("If-Modified-Since", T.lastModified[r]), T.etag[r] && E.setRequestHeader("If-None-Match", T.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && E.setRequestHeader("Content-Type", f.contentType), E.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + He + "; q=0.01" : "") : f.accepts["*"]), f.headers) E.setRequestHeader(h, f.headers[h]);
                        if (f.beforeSend && (!1 === f.beforeSend.call(p, E, f) || c)) return E.abort();
                        if (x = "abort", _.add(f.complete), E.done(f.success), E.fail(f.error), n = qe(ze, f, e, E)) {
                            if (E.readyState = 1, u && g.trigger("ajaxSend", [E, f]), c) return E;
                            f.async && f.timeout > 0 && (a = i.setTimeout((function() { E.abort("timeout") }), f.timeout));
                            try { c = !1, n.send(b, C) } catch (t) {
                                if (c) throw t;
                                C(-1, t)
                            }
                        } else C(-1, "No Transport");

                        function C(t, e, o, l) {
                            var h, d, y, b, w, x = e;
                            c || (c = !0, a && i.clearTimeout(a), n = void 0, s = l || "", E.readyState = t > 0 ? 4 : 0, h = t >= 200 && t < 300 || 304 === t, o && (b = function(t, e, n) {
                                for (var i, r, s, o, a = t.contents, l = t.dataTypes;
                                    "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                                if (i)
                                    for (r in a)
                                        if (a[r] && a[r].test(i)) { l.unshift(r); break }
                                if (l[0] in n) s = l[0];
                                else {
                                    for (r in n) {
                                        if (!l[0] || t.converters[r + " " + l[0]]) { s = r; break }
                                        o || (o = r)
                                    }
                                    s = s || o
                                }
                                if (s) return s !== l[0] && l.unshift(s), n[s]
                            }(f, E, o)), !h && T.inArray("script", f.dataTypes) > -1 && T.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}), b = function(t, e, n, i) {
                                var r, s, o, a, l, c = {},
                                    u = t.dataTypes.slice();
                                if (u[1])
                                    for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
                                for (s = u.shift(); s;)
                                    if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift())
                                        if ("*" === s) s = l;
                                        else if ("*" !== l && l !== s) {
                                    if (!(o = c[l + " " + s] || c["* " + s]))
                                        for (r in c)
                                            if ((a = r.split(" "))[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {!0 === o ? o = c[r] : !0 !== c[r] && (s = a[0], u.unshift(a[1])); break }
                                    if (!0 !== o)
                                        if (o && t.throws) e = o(e);
                                        else try { e = o(e) } catch (t) { return { state: "parsererror", error: o ? t : "No conversion from " + l + " to " + s } }
                                }
                                return { state: "success", data: e }
                            }(f, b, E, h), h ? (f.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (T.lastModified[r] = w), (w = E.getResponseHeader("etag")) && (T.etag[r] = w)), 204 === t || "HEAD" === f.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, d = b.data, h = !(y = b.error))) : (y = x, !t && x || (x = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (e || x) + "", h ? m.resolveWith(p, [d, x, E]) : m.rejectWith(p, [E, x, y]), E.statusCode(v), v = void 0, u && g.trigger(h ? "ajaxSuccess" : "ajaxError", [E, f, h ? d : y]), _.fireWith(p, [E, x]), u && (g.trigger("ajaxComplete", [E, f]), --T.active || T.event.trigger("ajaxStop")))
                        }
                        return E
                    },
                    getJSON: function(t, e, n) { return T.get(t, e, n, "json") },
                    getScript: function(t, e) { return T.get(t, void 0, e, "script") }
                }), T.each(["get", "post"], (function(t, e) { T[e] = function(t, n, i, r) { return _(n) && (r = r || i, i = n, n = void 0), T.ajax(T.extend({ url: t, type: e, dataType: r, data: n, success: i }, T.isPlainObject(t) && t)) } })), T.ajaxPrefilter((function(t) { var e; for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "") })), T._evalUrl = function(t, e, n) { return T.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(t) { T.globalEval(t, e, n) } }) }, T.fn.extend({
                    wrapAll: function(t) { var e; return this[0] && (_(t) && (t = t.call(this[0])), e = T(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() { for (var t = this; t.firstElementChild;) t = t.firstElementChild; return t })).append(this)), this },
                    wrapInner: function(t) {
                        return _(t) ? this.each((function(e) { T(this).wrapInner(t.call(this, e)) })) : this.each((function() {
                            var e = T(this),
                                n = e.contents();
                            n.length ? n.wrapAll(t) : e.append(t)
                        }))
                    },
                    wrap: function(t) { var e = _(t); return this.each((function(n) { T(this).wrapAll(e ? t.call(this, n) : t) })) },
                    unwrap: function(t) { return this.parent(t).not("body").each((function() { T(this).replaceWith(this.childNodes) })), this }
                }), T.expr.pseudos.hidden = function(t) { return !T.expr.pseudos.visible(t) }, T.expr.pseudos.visible = function(t) { return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length) }, T.ajaxSettings.xhr = function() { try { return new i.XMLHttpRequest } catch (t) {} };
                var Fe = { 0: 200, 1223: 204 },
                    Ue = T.ajaxSettings.xhr();
                m.cors = !!Ue && "withCredentials" in Ue, m.ajax = Ue = !!Ue, T.ajaxTransport((function(t) {
                    var e, n;
                    if (m.cors || Ue && !t.crossDomain) return {
                        send: function(r, s) {
                            var o, a = t.xhr();
                            if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                                for (o in t.xhrFields) a[o] = t.xhrFields[o];
                            for (o in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(o, r[o]);
                            e = function(t) { return function() { e && (e = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Fe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders())) } }, a.onload = e(), n = a.onerror = a.ontimeout = e("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() { 4 === a.readyState && i.setTimeout((function() { e && n() })) }, e = e("abort");
                            try { a.send(t.hasContent && t.data || null) } catch (t) { if (e) throw t }
                        },
                        abort: function() { e && e() }
                    }
                })), T.ajaxPrefilter((function(t) { t.crossDomain && (t.contents.script = !1) })), T.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(t) { return T.globalEval(t), t } } }), T.ajaxPrefilter("script", (function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET") })), T.ajaxTransport("script", (function(t) { var e, n; if (t.crossDomain || t.scriptAttrs) return { send: function(i, r) { e = T("<script>").attr(t.scriptAttrs || {}).prop({ charset: t.scriptCharset, src: t.url }).on("load error", n = function(t) { e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type) }), y.head.appendChild(e[0]) }, abort: function() { n && n() } } }));
                var Xe, Ve = [],
                    Ye = /(=)\?(?=&|$)|\?\?/;
                T.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var t = Ve.pop() || T.expando + "_" + Te.guid++; return this[t] = !0, t } }), T.ajaxPrefilter("json jsonp", (function(t, e, n) { var r, s, o, a = !1 !== t.jsonp && (Ye.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ye.test(t.data) && "data"); if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = _(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ye, "$1" + r) : !1 !== t.jsonp && (t.url += (Ce.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() { return o || T.error(r + " was not called"), o[0] }, t.dataTypes[0] = "json", s = i[r], i[r] = function() { o = arguments }, n.always((function() { void 0 === s ? T(i).removeProp(r) : i[r] = s, t[r] && (t.jsonpCallback = e.jsonpCallback, Ve.push(r)), o && _(s) && s(o[0]), o = s = void 0 })), "script" })), m.createHTMLDocument = ((Xe = y.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xe.childNodes.length), T.parseHTML = function(t, e, n) { return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (m.createHTMLDocument ? ((i = (e = y.implementation.createHTMLDocument("")).createElement("base")).href = y.location.href, e.head.appendChild(i)) : e = y), s = !n && [], (r = L.exec(t)) ? [e.createElement(r[1])] : (r = Et([t], e, s), s && s.length && T(s).remove(), T.merge([], r.childNodes))); var i, r, s }, T.fn.load = function(t, e, n) {
                    var i, r, s, o = this,
                        a = t.indexOf(" ");
                    return a > -1 && (i = _e(t.slice(a)), t = t.slice(0, a)), _(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && T.ajax({ url: t, type: r || "GET", dataType: "html", data: e }).done((function(t) { s = arguments, o.html(i ? T("<div>").append(T.parseHTML(t)).find(i) : t) })).always(n && function(t, e) { o.each((function() { n.apply(this, s || [t.responseText, e, t]) })) }), this
                }, T.expr.pseudos.animated = function(t) { return T.grep(T.timers, (function(e) { return t === e.elem })).length }, T.offset = {
                    setOffset: function(t, e, n) {
                        var i, r, s, o, a, l, c = T.css(t, "position"),
                            u = T(t),
                            h = {};
                        "static" === c && (t.style.position = "relative"), a = u.offset(), s = T.css(t, "top"), l = T.css(t, "left"), ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (o = (i = u.position()).top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), _(e) && (e = e.call(t, n, T.extend({}, a))), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : u.css(h)
                    }
                }, T.fn.extend({
                    offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each((function(e) { T.offset.setOffset(this, t, e) })); var e, n, i = this[0]; return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
                    position: function() {
                        if (this[0]) {
                            var t, e, n, i = this[0],
                                r = { top: 0, left: 0 };
                            if ("fixed" === T.css(i, "position")) e = i.getBoundingClientRect();
                            else {
                                for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === T.css(t, "position");) t = t.parentNode;
                                t && t !== i && 1 === t.nodeType && ((r = T(t).offset()).top += T.css(t, "borderTopWidth", !0), r.left += T.css(t, "borderLeftWidth", !0))
                            }
                            return { top: e.top - r.top - T.css(i, "marginTop", !0), left: e.left - r.left - T.css(i, "marginLeft", !0) }
                        }
                    },
                    offsetParent: function() { return this.map((function() { for (var t = this.offsetParent; t && "static" === T.css(t, "position");) t = t.offsetParent; return t || ot })) }
                }), T.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, (function(t, e) {
                    var n = "pageYOffset" === e;
                    T.fn[t] = function(i) {
                        return U(this, (function(t, i, r) {
                            var s;
                            if (v(t) ? s = t : 9 === t.nodeType && (s = t.defaultView), void 0 === r) return s ? s[e] : t[i];
                            s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : t[i] = r
                        }), t, i, arguments.length)
                    }
                })), T.each(["top", "left"], (function(t, e) { T.cssHooks[e] = Ut(m.pixelPosition, (function(t, n) { if (n) return n = Ft(t, e), $t.test(n) ? T(t).position()[e] + "px" : n })) })), T.each({ Height: "height", Width: "width" }, (function(t, e) {
                    T.each({ padding: "inner" + t, content: e, "": "outer" + t }, (function(n, i) {
                        T.fn[i] = function(r, s) {
                            var o = arguments.length && (n || "boolean" != typeof r),
                                a = n || (!0 === r || !0 === s ? "margin" : "border");
                            return U(this, (function(e, n, r) { var s; return v(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === r ? T.css(e, n, a) : T.style(e, n, r, a) }), e, o ? r : void 0, o)
                        }
                    }))
                })), T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) { T.fn[e] = function(t) { return this.on(e, t) } })), T.fn.extend({ bind: function(t, e, n) { return this.on(t, null, e, n) }, unbind: function(t, e) { return this.off(t, null, e) }, delegate: function(t, e, n, i) { return this.on(e, t, n, i) }, undelegate: function(t, e, n) { return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n) }, hover: function(t, e) { return this.mouseenter(t).mouseleave(e || t) } }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) { T.fn[e] = function(t, n) { return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e) } }));
                var Ke = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                T.proxy = function(t, e) { var n, i, r; if ("string" == typeof e && (n = t[e], e = t, t = n), _(t)) return i = a.call(arguments, 2), r = function() { return t.apply(e || this, i.concat(a.call(arguments))) }, r.guid = t.guid = t.guid || T.guid++, r }, T.holdReady = function(t) { t ? T.readyWait++ : T.ready(!0) }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = D, T.isFunction = _, T.isWindow = v, T.camelCase = K, T.type = x, T.now = Date.now, T.isNumeric = function(t) { var e = T.type(t); return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t)) }, T.trim = function(t) { return null == t ? "" : (t + "").replace(Ke, "") }, void 0 === (n = function() { return T }.apply(e, [])) || (t.exports = n);
                var Qe = i.jQuery,
                    Ge = i.$;
                return T.noConflict = function(t) { return i.$ === T && (i.$ = Ge), t && i.jQuery === T && (i.jQuery = Qe), T }, void 0 === r && (i.jQuery = i.$ = T), T
            }))
        },
        287: (t, e, n) => {
            var i = n(291),
                r = n(291);
            ! function(t, e, n, r) {
                function s(e, n) { this.settings = null, this.options = t.extend({}, s.Defaults, n), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, t.each(["onResize", "onThrottledResize"], t.proxy((function(e, n) { this._handlers[n] = t.proxy(this[n], this) }), this)), t.each(s.Plugins, t.proxy((function(t, e) { this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this) }), this)), t.each(s.Workers, t.proxy((function(e, n) { this._pipe.push({ filter: n.filter, run: t.proxy(n.run, this) }) }), this)), this.setup(), this.initialize() }
                s.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, checkVisibility: !0, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: e, fallbackEasing: "swing", slideTransition: "", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, s.Width = { Default: "default", Inner: "inner", Outer: "outer" }, s.Type = { Event: "event", State: "state" }, s.Plugins = {}, s.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(t) { t.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, {
                    filter: ["width", "items", "settings"],
                    run: function(t) {
                        var e = this.settings.margin || "",
                            n = !this.settings.autoWidth,
                            i = this.settings.rtl,
                            r = { width: "auto", "margin-left": i ? e : "", "margin-right": i ? "" : e };
                        !n && this.$stage.children().css(r), t.css = r
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function(t) {
                        var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                            n = null,
                            i = this._items.length,
                            r = !this.settings.autoWidth,
                            s = [];
                        for (t.items = { merge: !1, width: e }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = n > 1 || t.items.merge, s[i] = r ? e * n : this._items[i].width();
                        this._widths = s
                    }
                }, {
                    filter: ["items", "settings"],
                    run: function() {
                        var e = [],
                            n = this._items,
                            i = this.settings,
                            r = Math.max(2 * i.items, 4),
                            s = 2 * Math.ceil(n.length / 2),
                            o = i.loop && n.length ? i.rewind ? r : Math.max(r, s) : 0,
                            a = "",
                            l = "";
                        for (o /= 2; o > 0;) e.push(this.normalize(e.length / 2, !0)), a += n[e[e.length - 1]][0].outerHTML, e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)), l = n[e[e.length - 1]][0].outerHTML + l, o -= 1;
                        this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function() {
                        for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, r = 0, s = []; ++n < e;) i = s[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, s.push(i + r * t);
                        this._coordinates = s
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function() {
                        var t = this.settings.stagePadding,
                            e = this._coordinates,
                            n = { width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t, "padding-left": t || "", "padding-right": t || "" };
                        this.$stage.css(n)
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function(t) {
                        var e = this._coordinates.length,
                            n = !this.settings.autoWidth,
                            i = this.$stage.children();
                        if (n && t.items.merge)
                            for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css);
                        else n && (t.css.width = t.items.width, i.css(t.css))
                    }
                }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(t) { t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, {
                    filter: ["width", "position", "items", "settings"],
                    run: function() {
                        var t, e, n, i, r = this.settings.rtl ? 1 : -1,
                            s = 2 * this.settings.stagePadding,
                            o = this.coordinates(this.current()) + s,
                            a = o + this.width() * r,
                            l = [];
                        for (n = 0, i = this._coordinates.length; n < i; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + s * r, (this.op(t, "<=", o) && this.op(t, ">", a) || this.op(e, "<", o) && this.op(e, ">", a)) && l.push(n);
                        this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
                    }
                }], s.prototype.initializeStage = function() { this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(t("<div/>", { class: this.settings.stageOuterClass })), this.$element.append(this.$stage.parent())) }, s.prototype.initializeItems = function() {
                    var e = this.$element.find(".owl-item");
                    if (e.length) return this._items = e.get().map((function(e) { return t(e) })), this._mergers = this._items.map((function() { return 1 })), void this.refresh();
                    this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
                }, s.prototype.initialize = function() {
                    var t, e, n;
                    this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r, n = this.$element.children(e).width(), t.length && n <= 0 && this.preloadAutoWidthImages(t)), this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
                }, s.prototype.isVisible = function() { return !this.settings.checkVisibility || this.$element.is(":visible") }, s.prototype.setup = function() {
                    var e = this.viewport(),
                        n = this.options.responsive,
                        i = -1,
                        r = null;
                    n ? (t.each(n, (function(t) { t <= e && t > i && (i = Number(t)) })), "function" == typeof(r = t.extend({}, this.options, n[i])).stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : r = t.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: r } }), this._breakpoint = i, this.settings = r, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } })
                }, s.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, s.prototype.prepare = function(e) { var n = this.trigger("prepare", { content: e }); return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", { content: n.data }), n.data }, s.prototype.update = function() {
                    for (var e = 0, n = this._pipe.length, i = t.proxy((function(t) { return this[t] }), this._invalidated), r = {}; e < n;)(this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(r), e++;
                    this._invalidated = {}, !this.is("valid") && this.enter("valid")
                }, s.prototype.width = function(t) {
                    switch (t = t || s.Width.Default) {
                        case s.Width.Inner:
                        case s.Width.Outer:
                            return this._width;
                        default:
                            return this._width - 2 * this.settings.stagePadding + this.settings.margin
                    }
                }, s.prototype.refresh = function() { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, s.prototype.onThrottledResize = function() { e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, s.prototype.onResize = function() { return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) }, s.prototype.registerEventHandlers = function() { t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", (function() { return !1 }))), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this))) }, s.prototype.onDragStart = function(e) {
                    var i = null;
                    3 !== e.which && (t.support.transform ? i = { x: (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === i.length ? 12 : 4], y: i[16 === i.length ? 13 : 5] } : (i = this.$stage.position(), i = { x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left, y: i.top }), this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(e), t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy((function(e) {
                        var i = this.difference(this._drag.pointer, this.pointer(e));
                        t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
                    }), this)))
                }, s.prototype.onDragMove = function(t) {
                    var e = null,
                        n = null,
                        i = null,
                        r = this.difference(this._drag.pointer, this.pointer(t)),
                        s = this.difference(this._drag.stage.start, r);
                    this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, s.x = ((s.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * r.x / 5 : 0, s.x = Math.max(Math.min(s.x, e + i), n + i)), this._drag.stage.current = s, this.animate(s.x))
                }, s.prototype.onDragEnd = function(e) {
                    var i = this.difference(this._drag.pointer, this.pointer(e)),
                        r = this._drag.stage.current,
                        s = i.x > 0 ^ this.settings.rtl ? "left" : "right";
                    t(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== i.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", (function() { return !1 }))), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
                }, s.prototype.closest = function(e, n) {
                    var i = -1,
                        s = this.width(),
                        o = this.coordinates();
                    return this.settings.freeDrag || t.each(o, t.proxy((function(t, a) { return "left" === n && e > a - 30 && e < a + 30 ? i = t : "right" === n && e > a - s - 30 && e < a - s + 30 ? i = t + 1 : this.op(e, "<", a) && this.op(e, ">", o[t + 1] !== r ? o[t + 1] : a - s) && (i = "left" === n ? t + 1 : t), -1 === i }), this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
                }, s.prototype.animate = function(e) {
                    var n = this.speed() > 0;
                    this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({ transform: "translate3d(" + e + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") }) : n ? this.$stage.animate({ left: e + "px" }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: e + "px" })
                }, s.prototype.is = function(t) { return this._states.current[t] && this._states.current[t] > 0 }, s.prototype.current = function(t) {
                    if (t === r) return this._current;
                    if (0 === this._items.length) return r;
                    if (t = this.normalize(t), this._current !== t) {
                        var e = this.trigger("change", { property: { name: "position", value: t } });
                        e.data !== r && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } })
                    }
                    return this._current
                }, s.prototype.invalidate = function(e) { return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, (function(t, e) { return e })) }, s.prototype.reset = function(t) {
                    (t = this.normalize(t)) !== r && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
                }, s.prototype.normalize = function(t, e) {
                    var n = this._items.length,
                        i = e ? 0 : this._clones.length;
                    return !this.isNumeric(t) || n < 1 ? t = r : (t < 0 || t >= n + i) && (t = ((t - i / 2) % n + n) % n + i / 2), t
                }, s.prototype.relative = function(t) { return t -= this._clones.length / 2, this.normalize(t, !0) }, s.prototype.maximum = function(t) {
                    var e, n, i, r = this.settings,
                        s = this._coordinates.length;
                    if (r.loop) s = this._clones.length / 2 + this._items.length - 1;
                    else if (r.autoWidth || r.merge) {
                        if (e = this._items.length)
                            for (n = this._items[--e].width(), i = this.$element.width(); e-- && !((n += this._items[e].width() + this.settings.margin) > i););
                        s = e + 1
                    } else s = r.center ? this._items.length - 1 : this._items.length - r.items;
                    return t && (s -= this._clones.length / 2), Math.max(s, 0)
                }, s.prototype.minimum = function(t) { return t ? 0 : this._clones.length / 2 }, s.prototype.items = function(t) { return t === r ? this._items.slice() : (t = this.normalize(t, !0), this._items[t]) }, s.prototype.mergers = function(t) { return t === r ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t]) }, s.prototype.clones = function(e) {
                    var n = this._clones.length / 2,
                        i = n + this._items.length,
                        s = function(t) { return t % 2 == 0 ? i + t / 2 : n - (t + 1) / 2 };
                    return e === r ? t.map(this._clones, (function(t, e) { return s(e) })) : t.map(this._clones, (function(t, n) { return t === e ? s(n) : null }))
                }, s.prototype.speed = function(t) { return t !== r && (this._speed = t), this._speed }, s.prototype.coordinates = function(e) {
                    var n, i = 1,
                        s = e - 1;
                    return e === r ? t.map(this._coordinates, t.proxy((function(t, e) { return this.coordinates(e) }), this)) : (this.settings.center ? (this.settings.rtl && (i = -1, s = e + 1), n = this._coordinates[e], n += (this.width() - n + (this._coordinates[s] || 0)) / 2 * i) : n = this._coordinates[s] || 0, n = Math.ceil(n))
                }, s.prototype.duration = function(t, e, n) { return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed) }, s.prototype.to = function(t, e) {
                    var n = this.current(),
                        i = null,
                        r = t - this.relative(n),
                        s = (r > 0) - (r < 0),
                        o = this._items.length,
                        a = this.minimum(),
                        l = this.maximum();
                    this.settings.loop ? (!this.settings.rewind && Math.abs(r) > o / 2 && (r += -1 * s * o), (i = (((t = n + r) - a) % o + o) % o + a) !== t && i - r <= l && i - r > 0 && (n = i - r, t = i, this.reset(n))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.isVisible() && this.update()
                }, s.prototype.next = function(t) { t = t || !1, this.to(this.relative(this.current()) + 1, t) }, s.prototype.prev = function(t) { t = t || !1, this.to(this.relative(this.current()) - 1, t) }, s.prototype.onTransitionEnd = function(t) {
                    if (t !== r && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
                    this.leave("animating"), this.trigger("translated")
                }, s.prototype.viewport = function() { var i; return this.options.responsiveBaseElement !== e ? i = t(this.options.responsiveBaseElement).width() : e.innerWidth ? i = e.innerWidth : n.documentElement && n.documentElement.clientWidth ? i = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), i }, s.prototype.replace = function(e) { this.$stage.empty(), this._items = [], e && (e = e instanceof i ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter((function() { return 1 === this.nodeType })).each(t.proxy((function(t, e) { e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }), this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, s.prototype.add = function(e, n) {
                    var s = this.relative(this._current);
                    n = n === r ? this._items.length : this.normalize(n, !0), e = e instanceof i ? e : t(e), this.trigger("add", { content: e, position: n }), e = this.prepare(e), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[n - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(e), this._items.splice(n, 0, e), this._mergers.splice(n, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", { content: e, position: n })
                }, s.prototype.remove = function(t) {
                    (t = this.normalize(t, !0)) !== r && (this.trigger("remove", { content: this._items[t], position: t }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: t }))
                }, s.prototype.preloadAutoWidthImages = function(e) { e.each(t.proxy((function(e, n) { this.enter("pre-loading"), n = t(n), t(new Image).one("load", t.proxy((function(t) { n.attr("src", t.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }), this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina")) }), this)) }, s.prototype.destroy = function() {
                    for (var i in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(n).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[i].destroy();
                    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
                }, s.prototype.op = function(t, e, n) {
                    var i = this.settings.rtl;
                    switch (e) {
                        case "<":
                            return i ? t > n : t < n;
                        case ">":
                            return i ? t < n : t > n;
                        case ">=":
                            return i ? t <= n : t >= n;
                        case "<=":
                            return i ? t >= n : t <= n
                    }
                }, s.prototype.on = function(t, e, n, i) { t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n) }, s.prototype.off = function(t, e, n, i) { t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n) }, s.prototype.trigger = function(e, n, i, r, o) {
                    var a = { item: { count: this._items.length, index: this.current() } },
                        l = t.camelCase(t.grep(["on", e, i], (function(t) { return t })).join("-").toLowerCase()),
                        c = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({ relatedTarget: this }, a, n));
                    return this._supress[e] || (t.each(this._plugins, (function(t, e) { e.onTrigger && e.onTrigger(c) })), this.register({ type: s.Type.Event, name: e }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
                }, s.prototype.enter = function(e) { t.each([e].concat(this._states.tags[e] || []), t.proxy((function(t, e) { this._states.current[e] === r && (this._states.current[e] = 0), this._states.current[e]++ }), this)) }, s.prototype.leave = function(e) { t.each([e].concat(this._states.tags[e] || []), t.proxy((function(t, e) { this._states.current[e]-- }), this)) }, s.prototype.register = function(e) {
                    if (e.type === s.Type.Event) {
                        if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                            var n = t.event.special[e.name]._default;
                            t.event.special[e.name]._default = function(t) { return !n || !n.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : n.apply(this, arguments) }, t.event.special[e.name].owl = !0
                        }
                    } else e.type === s.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy((function(n, i) { return t.inArray(n, this._states.tags[e.name]) === i }), this)))
                }, s.prototype.suppress = function(e) { t.each(e, t.proxy((function(t, e) { this._supress[e] = !0 }), this)) }, s.prototype.release = function(e) { t.each(e, t.proxy((function(t, e) { delete this._supress[e] }), this)) }, s.prototype.pointer = function(t) { var n = { x: null, y: null }; return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (n.x = t.pageX, n.y = t.pageY) : (n.x = t.clientX, n.y = t.clientY), n }, s.prototype.isNumeric = function(t) { return !isNaN(parseFloat(t)) }, s.prototype.difference = function(t, e) { return { x: t.x - e.x, y: t.y - e.y } }, t.fn.owlCarousel = function(e) {
                    var n = Array.prototype.slice.call(arguments, 1);
                    return this.each((function() {
                        var i = t(this),
                            r = i.data("owl.carousel");
                        r || (r = new s(this, "object" == typeof e && e), i.data("owl.carousel", r), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], (function(e, n) { r.register({ type: s.Type.Event, name: n }), r.$element.on(n + ".owl.carousel.core", t.proxy((function(t) { t.namespace && t.relatedTarget !== this && (this.suppress([n]), r[n].apply(this, [].slice.call(arguments, 1)), this.release([n])) }), r)) }))), "string" == typeof e && "_" !== e.charAt(0) && r[e].apply(r, n)
                    }))
                }, t.fn.owlCarousel.Constructor = s
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                var r = function(e) { this._core = e, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": t.proxy((function(t) { t.namespace && this._core.settings.autoRefresh && this.watch() }), this) }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers) };
                r.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, r.prototype.watch = function() { this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, r.prototype.refresh = function() { this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, r.prototype.destroy = function() { var t, n; for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]); for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null) }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                var r = function(e) {
                    this._core = e, this._loaded = [], this._handlers = {
                        "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy((function(e) {
                            if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                                var n = this._core.settings,
                                    i = n.center && Math.ceil(n.items / 2) || n.items,
                                    r = n.center && -1 * i || 0,
                                    s = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + r,
                                    o = this._core.clones().length,
                                    a = t.proxy((function(t, e) { this.load(e) }), this);
                                for (n.lazyLoadEager > 0 && (i += n.lazyLoadEager, n.loop && (s -= n.lazyLoadEager, i++)); r++ < i;) this.load(o / 2 + this._core.relative(s)), o && t.each(this._core.clones(this._core.relative(s)), a), s++
                            }
                        }), this)
                    }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
                };
                r.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }, r.prototype.load = function(n) {
                    var i = this._core.$stage.children().eq(n),
                        r = i && i.find(".owl-lazy");
                    !r || t.inArray(i.get(0), this._loaded) > -1 || (r.each(t.proxy((function(n, i) {
                        var r, s = t(i),
                            o = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src") || s.attr("data-srcset");
                        this._core.trigger("load", { element: s, url: o }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy((function() { s.css("opacity", 1), this._core.trigger("loaded", { element: s, url: o }, "lazy") }), this)).attr("src", o) : s.is("source") ? s.one("load.owl.lazy", t.proxy((function() { this._core.trigger("loaded", { element: s, url: o }, "lazy") }), this)).attr("srcset", o) : ((r = new Image).onload = t.proxy((function() { s.css({ "background-image": 'url("' + o + '")', opacity: "1" }), this._core.trigger("loaded", { element: s, url: o }, "lazy") }), this), r.src = o)
                    }), this)), this._loaded.push(i.get(0)))
                }, r.prototype.destroy = function() { var t, e; for (t in this.handlers) this._core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Lazy = r
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                var r = function(n) {
                    this._core = n, this._previousHeight = null, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": t.proxy((function(t) { t.namespace && this._core.settings.autoHeight && this.update() }), this), "changed.owl.carousel": t.proxy((function(t) { t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update() }), this), "loaded.owl.lazy": t.proxy((function(t) { t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }), this) }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
                    var i = this;
                    t(e).on("load", (function() { i._core.settings.autoHeight && i.update() })), t(e).resize((function() { i._core.settings.autoHeight && (null != i._intervalId && clearTimeout(i._intervalId), i._intervalId = setTimeout((function() { i.update() }), 250)) }))
                };
                r.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, r.prototype.update = function() {
                    var e = this._core._current,
                        n = e + this._core.settings.items,
                        i = this._core.settings.lazyLoad,
                        r = this._core.$stage.children().toArray().slice(e, n),
                        s = [],
                        o = 0;
                    t.each(r, (function(e, n) { s.push(t(n).height()) })), (o = Math.max.apply(null, s)) <= 1 && i && this._previousHeight && (o = this._previousHeight), this._previousHeight = o, this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
                }, r.prototype.destroy = function() { var t, e; for (t in this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                var r = function(e) {
                    this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                        "initialized.owl.carousel": t.proxy((function(t) { t.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }), this),
                        "resize.owl.carousel": t.proxy((function(t) { t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault() }), this),
                        "refreshed.owl.carousel": t.proxy((function(t) { t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }), this),
                        "changed.owl.carousel": t.proxy((function(t) { t.namespace && "position" === t.property.name && this._playing && this.stop() }), this),
                        "prepared.owl.carousel": t.proxy((function(e) {
                            if (e.namespace) {
                                var n = t(e.content).find(".owl-video");
                                n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
                            }
                        }), this)
                    }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy((function(t) { this.play(t) }), this))
                };
                r.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, r.prototype.fetch = function(t, e) {
                    var n = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                        i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                        r = t.attr("data-width") || this._core.settings.videoWidth,
                        s = t.attr("data-height") || this._core.settings.videoHeight,
                        o = t.attr("href");
                    if (!o) throw new Error("Missing video URL.");
                    if ((i = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) n = "youtube";
                    else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
                    else {
                        if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                        n = "vzaar"
                    }
                    i = i[6], this._videos[o] = { type: n, id: i, width: r, height: s }, e.attr("data-video", o), this.thumbnail(t, this._videos[o])
                }, r.prototype.thumbnail = function(e, n) {
                    var i, r, s = n.width && n.height ? "width:" + n.width + "px;height:" + n.height + "px;" : "",
                        o = e.find("img"),
                        a = "src",
                        l = "",
                        c = this._core.settings,
                        u = function(n) { i = c.lazyLoad ? t("<div/>", { class: "owl-video-tn " + l, srcType: n }) : t("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + n + ")" }), e.after(i), e.after('<div class="owl-video-play-icon"></div>') };
                    if (e.wrap(t("<div/>", { class: "owl-video-wrapper", style: s })), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), o.length) return u(o.attr(a)), o.remove(), !1;
                    "youtube" === n.type ? (r = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", u(r)) : "vimeo" === n.type ? t.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + n.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { r = t[0].thumbnail_large, u(r) } }) : "vzaar" === n.type && t.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + n.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { r = t.framegrab_url, u(r) } })
                }, r.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, r.prototype.play = function(e) {
                    var n, i = t(e.target).closest("." + this._core.settings.itemClass),
                        r = this._videos[i.attr("data-video")],
                        s = r.width || "100%",
                        o = r.height || this._core.$stage.height();
                    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), (n = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", o), n.attr("width", s), "youtube" === r.type ? n.attr("src", "//www.youtube.com/embed/" + r.id + "?autoplay=1&rel=0&v=" + r.id) : "vimeo" === r.type ? n.attr("src", "//player.vimeo.com/video/" + r.id + "?autoplay=1") : "vzaar" === r.type && n.attr("src", "//view.vzaar.com/" + r.id + "/player?autoplay=true"), t(n).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
                }, r.prototype.isInFullScreen = function() { var e = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement; return e && t(e).parent().hasClass("owl-video-frame") }, r.prototype.destroy = function() { var t, e; for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Video = r
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                var r = function(e) { this.core = e, this.core.options = t.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = { "change.owl.carousel": t.proxy((function(t) { t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value) }), this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy((function(t) { t.namespace && (this.swapping = "translated" == t.type) }), this), "translate.owl.carousel": t.proxy((function(t) { t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }), this) }, this.core.$element.on(this.handlers) };
                r.Defaults = { animateOut: !1, animateIn: !1 }, r.prototype.swap = function() {
                    if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                        this.core.speed(0);
                        var e, n = t.proxy(this.clear, this),
                            i = this.core.$stage.children().eq(this.previous),
                            r = this.core.$stage.children().eq(this.next),
                            s = this.core.settings.animateIn,
                            o = this.core.settings.animateOut;
                        this.core.current() !== this.previous && (o && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(t.support.animation.end, n).css({ left: e + "px" }).addClass("animated owl-animated-out").addClass(o)), s && r.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(s))
                    }
                }, r.prototype.clear = function(e) { t(e.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, r.prototype.destroy = function() { var t, e; for (t in this.handlers) this.core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Animate = r
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                var r = function(e) { this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = { "changed.owl.carousel": t.proxy((function(t) { t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0) }), this), "initialized.owl.carousel": t.proxy((function(t) { t.namespace && this._core.settings.autoplay && this.play() }), this), "play.owl.autoplay": t.proxy((function(t, e, n) { t.namespace && this.play(e, n) }), this), "stop.owl.autoplay": t.proxy((function(t) { t.namespace && this.stop() }), this), "mouseover.owl.autoplay": t.proxy((function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }), this), "mouseleave.owl.autoplay": t.proxy((function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }), this), "touchstart.owl.core": t.proxy((function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }), this), "touchend.owl.core": t.proxy((function() { this._core.settings.autoplayHoverPause && this.play() }), this) }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, r.Defaults, this._core.options) };
                r.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, r.prototype._next = function(i) { this._call = e.setTimeout(t.proxy(this._next, this, i), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || n.hidden || this._core.next(i || this._core.settings.autoplaySpeed) }, r.prototype.read = function() { return (new Date).getTime() - this._time }, r.prototype.play = function(n, i) {
                    var r;
                    this._core.is("rotating") || this._core.enter("rotating"), n = n || this._core.settings.autoplayTimeout, r = Math.min(this._time % (this._timeout || n), n), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % n - r, this._timeout = n, this._call = e.setTimeout(t.proxy(this._next, this, i), n - r)
                }, r.prototype.stop = function() { this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating")) }, r.prototype.pause = function() { this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call)) }, r.prototype.destroy = function() { var t, e; for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.autoplay = r
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                "use strict";
                var r = function(e) { this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": t.proxy((function(e) { e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }), this), "added.owl.carousel": t.proxy((function(t) { t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop()) }), this), "remove.owl.carousel": t.proxy((function(t) { t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1) }), this), "changed.owl.carousel": t.proxy((function(t) { t.namespace && "position" == t.property.name && this.draw() }), this), "initialized.owl.carousel": t.proxy((function(t) { t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }), this), "refreshed.owl.carousel": t.proxy((function(t) { t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }), this) }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers) };
                r.Defaults = { nav: !1, navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'], navSpeed: !1, navElement: 'button type="button" role="presentation"', navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, r.prototype.initialize = function() {
                    var e, n = this._core.settings;
                    for (e in this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy((function(t) { this.prev(n.navSpeed) }), this)), this._controls.$next = t("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy((function(t) { this.next(n.navSpeed) }), this)), n.dotsData || (this._templates = [t('<button role="button">').addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy((function(e) {
                            var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                            e.preventDefault(), this.to(i, n.dotsSpeed)
                        }), this)), this._overrides) this._core[e] = t.proxy(this[e], this)
                }, r.prototype.destroy = function() { var t, e, n, i, r; for (t in r = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]); for (e in this._controls) "$relative" === e && r.navContainer ? this._controls[e].html("") : this._controls[e].remove(); for (i in this.overides) this._core[i] = this._overrides[i]; for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null) }, r.prototype.update = function() {
                    var t, e, n = this._core.clones().length / 2,
                        i = n + this._core.items().length,
                        r = this._core.maximum(!0),
                        s = this._core.settings,
                        o = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
                    if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
                        for (this._pages = [], t = n, e = 0; t < i; t++) {
                            if (e >= o || 0 === e) {
                                if (this._pages.push({ start: Math.min(r, t - n), end: t - n + o - 1 }), Math.min(r, t - n) === r) break;
                                e = 0
                            }
                            e += this._core.mergers(this._core.relative(t))
                        }
                }, r.prototype.draw = function() {
                    var e, n = this._core.settings,
                        i = this._core.items().length <= n.items,
                        r = this._core.relative(this._core.current()),
                        s = n.loop || n.rewind;
                    this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !s && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (e = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
                }, r.prototype.onTrigger = function(e) {
                    var n = this._core.settings;
                    e.page = { index: t.inArray(this.current(), this._pages), count: this._pages.length, size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items) }
                }, r.prototype.current = function() { var e = this._core.relative(this._core.current()); return t.grep(this._pages, t.proxy((function(t, n) { return t.start <= e && t.end >= e }), this)).pop() }, r.prototype.getPosition = function(e) { var n, i, r = this._core.settings; return "page" == r.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += r.slideBy : n -= r.slideBy), n }, r.prototype.next = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e) }, r.prototype.prev = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e) }, r.prototype.to = function(e, n, i) { var r;!i && this._pages.length ? (r = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % r + r) % r].start, n)) : t.proxy(this._overrides.to, this._core)(e, n) }, t.fn.owlCarousel.Constructor.Plugins.Navigation = r
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                "use strict";
                var r = function(n) {
                    this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                        "initialized.owl.carousel": t.proxy((function(n) { n.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation") }), this),
                        "prepared.owl.carousel": t.proxy((function(e) {
                            if (e.namespace) {
                                var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                                if (!n) return;
                                this._hashes[n] = e.content
                            }
                        }), this),
                        "changed.owl.carousel": t.proxy((function(n) {
                            if (n.namespace && "position" === n.property.name) {
                                var i = this._core.items(this._core.relative(this._core.current())),
                                    r = t.map(this._hashes, (function(t, e) { return t === i ? e : null })).join();
                                if (!r || e.location.hash.slice(1) === r) return;
                                e.location.hash = r
                            }
                        }), this)
                    }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy((function(t) {
                        var n = e.location.hash.substring(1),
                            i = this._core.$stage.children(),
                            r = this._hashes[n] && i.index(this._hashes[n]);
                        void 0 !== r && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
                    }), this))
                };
                r.Defaults = { URLhashListener: !1 }, r.prototype.destroy = function() { var n, i; for (n in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(n, this._handlers[n]); for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null) }, t.fn.owlCarousel.Constructor.Plugins.Hash = r
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                var r = t("<support>").get(0).style,
                    s = "Webkit Moz O ms".split(" "),
                    o = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } };

                function a(e, n) {
                    var i = !1,
                        o = e.charAt(0).toUpperCase() + e.slice(1);
                    return t.each((e + " " + s.join(o + " ") + o).split(" "), (function(t, e) { if (void 0 !== r[e]) return i = !n || e, !1 })), i
                }

                function l(t) { return a(t, !0) }!!a("transition") && (t.support.transition = new String(l("transition")), t.support.transition.end = o.transition.end[t.support.transition]), !!a("animation") && (t.support.animation = new String(l("animation")), t.support.animation.end = o.animation.end[t.support.animation]), a("transform") && (t.support.transform = new String(l("transform")), t.support.transform3d = !!a("perspective"))
            }(window.Zepto || r, window, document)
        }
    }
]);