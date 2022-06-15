(() => {
    var t, e = {
            649: (t, e, a) => {
                "use strict";
                a(291), a(780), a(287), a(578);
                var i = a(291);

                function n(t) {
                    i("body"), setTimeout(t, 800)
                }
                var o, r, s, d, l = a(291),
                    c = window.requestAnimationFrame || function(t) { window.setTimeout(t, 1e3 / 60) },
                    u = document.querySelectorAll('[data-showInView="false"]'),
                    v = function t() {
                        u.forEach((function(t) {
                            (function(t) { return t.getBoundingClientRect().top <= (window.innerHeight - 50 || document.documentElement.clientHeight - 50) })(t) && t.setAttribute("data-showInView", "true")
                        })), c(t)
                    };

                function b(t) { t.preventDefault() }

                function f(t) { if ((void 0)[t.keyCode]) return b(t), !1 }

                function m() {
                    o = window.innerHeight, r = window.innerWidth;
                    var t = .825 * o,
                        e = .825 * r,
                        a = l(".popup-game__wrapper"),
                        i = r / o >= 3 / 4 ? 3 / 4 : 2 / 3;
                    o > r ? (a.width(e), a.height(e / i)) : (a.width(t * i), a.height(t))
                }
                n((function() {
                    var t, e;
                    window.scrollTo(0, 0), t = l(".popup-game"), e = t.find("img"), l(".game__card ").on("click", (function() { l("video").each((function() { l(this).get(0).pause() })), t.addClass("show"), l("body").addClass("popup"), window.addEventListener("DOMMouseScroll", b, !1), window.addEventListener(d, b, s), window.addEventListener("touchmove", b, s), window.addEventListener("keydown", f, !1) })), e.attr("src", e.attr("data")), e[0].addEventListener("load", (function() { e[0].contentDocument.body.style.background = "#b8479d" })), m(), l(".popup-close").on("click", (function() { l("body").removeClass("popup"), l(".popup-game").removeClass("show"), window.removeEventListener("DOMMouseScroll", b, !1), window.removeEventListener(d, b, s), window.removeEventListener("touchmove", b, s), window.removeEventListener("keydown", f, !1) })), setTimeout((function() { l(".loader").addClass("hiding"), setTimeout((function() { l("body").removeClass("loading"), l("body").addClass("loaded"), l(".loader").remove(), v() }), 300) }), 1e3)
                })), window.onresize = m;
                var p = a(345),
                    h = a.n(p),
                    g = a(291);
                n((function() { g("#owlCarouselVideo").owlCarousel({ items: 2.33, loop: !0, margin: 24, lazyLoad: !0, pagination: !1, dots: !1, nav: !0, navText: ['<img src="'.concat(h(), '" />'), '<img src="'.concat(h(), '" />')], responsive: { 0: { items: 2.5, margin: 8 }, 480: { items: 2.5, margin: 8 }, 575: { items: 2.5, margin: 12 }, 768: { items: 3.33, margin: 16 }, 992: { items: 3.33, margin: 24 } } }) })), a(20);
                var w = a(902),
                    y = a(371),
                    A = a(291);
                w.ZP.registerPlugin(y.Z), A("#owlCarouselVideo").on("click", ".item", (function() {
                    var t = this.getAttribute("data-name"),
                        e = document.getElementById("video-slider"),
                        a = e.getAttribute("data-index"),
                        i = e.currentTime;
                    i == e.duration && (i = 0), document.querySelectorAll('.video-thumbnail[data-index="'.concat(a, '"]')).forEach((function(t) { t.setAttribute("data-25", e.getAttribute("data-25") || !1), t.setAttribute("data-50", e.getAttribute("data-50") || !1), t.setAttribute("data-75", e.getAttribute("data-75") || !1), t.setAttribute("data-100", e.getAttribute("data-100") || !1), t.setAttribute("data-time", i) }));
                    var n = this.getAttribute("src"),
                        o = this.getAttribute("data-index"),
                        r = this.getAttribute("data-time");
                    document.querySelectorAll(".video-thumbnail").forEach((function(t) { return t.classList.remove("active") })), document.querySelectorAll('.video-thumbnail[data-index="'.concat(o, '"]')).forEach((function(t) { return t.classList.add("active") })), e.removeAttribute("poster"), e.setAttribute("data-25", this.getAttribute("data-25") || !1), e.setAttribute("data-50", this.getAttribute("data-50") || !1), e.setAttribute("data-75", this.getAttribute("data-75") || !1), e.setAttribute("data-100", this.getAttribute("data-100") || !1), e.setAttribute("data", t), e.setAttribute("data-index", o), e.src = "".concat(n, "#t=").concat(r), e.play()
                })), n((function() { w.ZP.timeline({ scrollTrigger: { trigger: ".page", start: "0% top", scrub: 1, pin: scroll.pin, markers: scroll.markers, anticipatePin: 1 }, defaults: { ease: "none" } }).to(".videos-heart-right", { yPercent: 150, scale: 1.3, duration: 1 }, 0).to(".videos-heart-left", { yPercent: -150, scale: 1.3, duration: 1 }, 0) })), w.ZP.registerPlugin(y.Z), n((function() { w.ZP.timeline({ scrollTrigger: { trigger: ".page", start: "35% top", scrub: 1, pin: scroll.pin, markers: scroll.markers, anticipatePin: 1 }, defaults: { ease: "none" } }).to(".minigame-heart-right", { yPercent: 50, scale: 1.2, duration: 1 }, 0).to(".minigame-heart-left", { yPercent: -50, scale: 1.2, duration: 1 }, 0) })), a(611)
            },
            578: (t, e, a) => {
                var i, n = a(291),
                    o = "AU - Disney ILY";


                function r(t, e) { e = e || "Click", gtag("event", void 0 === e ? "Click" : e, { event_category: o, event_label: t }), console.log({ event: t, type: e, category: o }) }(i = n("video")).each((function() {
                    var t = n(this),
                        e = t[0];
                    t.attr("data-25", !1), t.attr("data-50", !1), t.attr("data-75", !1), t.attr("data-100", !1), e.addEventListener("volumechange", (function() {
                        var e = t.attr("data");
                        t.prop("muted") ? r(e + "SoundOff_Clicked") : r(e + "SoundOn_Clicked")
                    }), !1), e.addEventListener("play", (function(e) {
                        var a = t.attr("data"),
                            n = this;
                        console.log(), i.each((function() { this.id != n.id && this.pause() })), r(a + "Play_Clicked")
                    }), !1), e.addEventListener("pause", (function() { r(t.attr("data") + "Pause_Clicked") }), !1), e.addEventListener("timeupdate", (function(e) {
                        var a = t.attr("data");
                        e.stopPropagation();
                        var i = 100 * function(t) { for (var e = 0, a = 0; a < t.length; a++) e += t.end(a) - t.start(a); return e }(this.played),
                            n = this.duration;
                        Math.floor(i / n) >= 25 && (0 == t.attr("data-25") || "false" == t.attr("data-25")) && (t.attr("data-25", !0), r(a + "25percent_VideoCompletion", "info")), Math.floor(i / n) >= 50 && (0 == t.attr("data-50") || "false" == t.attr("data-50")) && (t.attr("data-50", !0), r(a + "50percent_VideoCompletion", "info")), Math.floor(i / n) >= 75 && (0 == t.attr("data-75") || "false" == t.attr("data-75")) && (t.attr("data-75", !0), r(a + "75percent_VideoCompletion", "info")), Math.floor(i / n) >= 100 && (0 == t.attr("data-100") || "false" == t.attr("data-100")) && (t.attr("data-100", !0), r(a + "100percent_VideoCompletion", "info"))
                    }), !1)
                })), n("#owlCarouselVideo").on("click", ".item", (function() {
                    var t = this.getAttribute("data-name");
                    r("".concat(t, "_Clicked"), "Click")
                })), n(".game__card ").on("click", (function() { r("PlayTheMinigame_Clicked​") })), n(".btnNext, .btnPrevious").each((function() { n(this).on("click", (function() { r(n(this).attr("data-event")) })) })), n('[data-bs-toggle="tab"]').each((function() { this.addEventListener("show.bs.tab", (function() { r(n(this).attr("data-event")) })) })), window.isFirstInteraction = !1, window.isLandMinigame = !1, n("video").on("volumechange play pause", (function() { window.isFirstInteraction || (r("First Interaction"), window.isFirstInteraction = !0) })), n(document).on("scroll", (function(t) {
                    if (window.isFirstInteraction || (r("First Interaction"), window.isFirstInteraction = !0), !window.isLandMinigame) {
                        var e = n("#sectionMinigame");
                        window.scrollY >= e.position().top - window.innerHeight && (r("Microsite - Active Play"), window.isLandMinigame = !0)
                    }
                }))
            },
            20: (t, e, a) => {
                var i = a(291);
                i("#ariel-discover").one("animationend", (function() {
                    setTimeout((function() {
                        setInterval((function() {
                            var t = i(".discover-content-item-img");
                            i.each(t, (function(t) { i(this).addClass("discover-content-item-img-".concat(t + 1)) }))
                        }), 300), setInterval((function() {
                            var t = i(".discover-content-item-img");
                            i.each(t, (function(t) { i(this).removeClass("discover-content-item-img-".concat(t + 1)) }))
                        }), 7800)
                    }), 300)
                })), mobile = !1;
                var n, o, r;
                n = i("#sparkles"), o = n.find(".sparkle").first(), r = mobile ? 1 : 0, [{ left: ["6%", "-5%"], top: ["17%", "-.5%"], scale: [".5", ".35"] }, { left: ["5%", "5.5%"], top: ["95%", "-1.2%"], scale: [".875", ".35"] }, { left: ["65%", "65%"], top: ["3%", "-.25%"], scale: ["1.4", ".4"] }, { left: ["95%", "75%"], top: ["58%", "-.5%"], scale: [".5", ".35"] }, { left: ["62%", "16.25%"], top: ["94%", "1.35%"], scale: ["1.5", ".4"] }, { left: ["23.5%", "8.5%"], top: ["12%", "11.5%"], scale: ["1.5", ".5"] }, { left: ["92.5%", "74%"], top: ["18.5%", "87.75%"], scale: [".5", ".6"] }, { left: ["88%", "45.5%"], top: ["93%", "89.25%"], scale: ["1.2", ".5"] }, { left: ["76%", "8.5%"], top: ["12%", "11.5%"], scale: ["1.5", ".5"] }, { left: ["6%", "74%"], top: ["43.5%", "87.75%"], scale: [".5", ".6"] }, { left: ["20%", "45.5%"], top: ["89%", "89.25%"], scale: ["1.2", ".5"] }].forEach((function(t, e) {
                    var a = o.clone(),
                        i = 3 * Math.random() + "s";
                    t.scale[r], o.remove(), a.css({ left: t.left[r], top: t.top[r], "animation-delay": i, "-webkit-animation-delay": i }), a.appendTo(n)
                }))
            },
            611: (t, e, a) => {
                var i = a(291);
                window.bootstrap = a(718), i(".meet-disney video").on("click", (function(t) { i(this)[0].play() })), i("video").on("play", (function() { i(this).attr("controls") || i(this).attr("controls", "true") })), i('[data-bs-toggle="tab"]').each((function() { this.addEventListener("hide.bs.tab", (function() { document.querySelector(this.getAttribute("data-bs-target")).querySelector("video").pause() })), this.addEventListener("shown.bs.tab", (function() { document.querySelector(this.getAttribute("data-bs-target")).querySelector("video").play() })) })), i(".btnNext").on("click", (function(t) {
                    if (i(".nav-tabs .active").closest("li").next("li").find("a")[0]) {
                        var e = i(".nav-tabs .active").closest("li").next("li").find("a")[0];
                        new bootstrap.Tab(e).show(), 0 === i(".nav-tabs .active .show").length && (i(".btnNext").attr("disabled", "disabled"), i(".btnPrevious").attr("disabled", "disabled"), i(".nav-link").addClass("disabled"))
                    } else {
                        var a = document.querySelectorAll("#myTab li a");
                        new bootstrap.Tab(a[0]).show(), 0 === i(".nav-tabs .active .show").length && (i(".btnNext").attr("disabled", "disabled"), i(".btnPrevious").attr("disabled", "disabled"), i(".nav-link").addClass("disabled"))
                    }
                    setTimeout((function() { i(".btnNext").removeAttr("disabled"), i(".btnPrevious").removeAttr("disabled"), i(".nav-link").removeClass("disabled") }), 300)
                })), i(".btnPrevious").on("click", (function() {
                    if (i(".nav-tabs .active").closest("li").prev("li").find("a")[0]) {
                        var t = i(".nav-tabs .active").closest("li").prev("li").find("a")[0];
                        new bootstrap.Tab(t).show(), 0 === i(".nav-tabs .active .show").length && (i(".btnPrevious").attr("disabled", "disabled"), i(".btnNext").attr("disabled", "disabled"), i(".nav-link").addClass("disabled"))
                    } else {
                        var e = document.querySelectorAll("#myTab li a");
                        new bootstrap.Tab(e[e.length - 1]).show(), 0 === i(".nav-tabs .active .show").length && (i(".btnPrevious").attr("disabled", "disabled"), i(".btnNext").attr("disabled", "disabled"), i(".nav-link").addClass("disabled"))
                    }
                    setTimeout((function() { i(".btnPrevious").removeAttr("disabled"), i(".btnNext").removeAttr("disabled"), i(".nav-link").removeClass("disabled") }), 300)
                }))
            },
            345: t => { t.exports = "./Assets/next.png" }
        },
        a = {};

    function i(t) { var n = a[t]; if (void 0 !== n) return n.exports; var o = a[t] = { exports: {} }; return e[t].call(o.exports, o, o.exports, i), o.exports }
    i.m = e, t = [], i.O = (e, a, n, o) => {
        if (!a) {
            var r = 1 / 0;
            for (c = 0; c < t.length; c++) {
                for (var [a, n, o] = t[c], s = !0, d = 0; d < a.length; d++)(!1 & o || r >= o) && Object.keys(i.O).every((t => i.O[t](a[d]))) ? a.splice(d--, 1) : (s = !1, o < r && (r = o));
                if (s) {
                    t.splice(c--, 1);
                    var l = n();
                    void 0 !== l && (e = l)
                }
            }
            return e
        }
        o = o || 0;
        for (var c = t.length; c > 0 && t[c - 1][2] > o; c--) t[c] = t[c - 1];
        t[c] = [a, n, o]
    }, i.n = t => { var e = t && t.__esModule ? () => t.default : () => t; return i.d(e, { a: e }), e }, i.d = (t, e) => { for (var a in e) i.o(e, a) && !i.o(t, a) && Object.defineProperty(t, a, { enumerable: !0, get: e[a] }) }, i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.r = t => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, (() => {
        var t = { 179: 0 };
        i.O.j = e => 0 === t[e];
        var e = (e, a) => {
                var n, o, [r, s, d] = a,
                    l = 0;
                if (r.some((e => 0 !== t[e]))) { for (n in s) i.o(s, n) && (i.m[n] = s[n]); if (d) var c = d(i) }
                for (e && e(a); l < r.length; l++) o = r[l], i.o(t, o) && t[o] && t[o][0](), t[o] = 0;
                return i.O(c)
            },
            a = self.webpackChunk = self.webpackChunk || [];
        a.forEach(e.bind(null, 0)), a.push = e.bind(null, a.push.bind(a))
    })();
    var n = i.O(void 0, [736], (() => i(649)));
    n = i.O(n)
})();