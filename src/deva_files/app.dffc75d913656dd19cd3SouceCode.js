(() => {
    var e = {
            143: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => a
                });
                var i = n(645),
                    s = n.n(i)()((function(e) {
                        return e[1]
                    }));
                s.push([e.id, "", ""]);
                const a = s
            },
            645: e => {
                "use strict";
                e.exports = function(e) {
                    var t = [];
                    return t.toString = function() {
                        return this.map((function(t) {
                            var n = e(t);
                            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                        })).join("")
                    }, t.i = function(e, n, i) {
                        "string" == typeof e && (e = [
                            [null, e, ""]
                        ]);
                        var s = {};
                        if (i)
                            for (var a = 0; a < this.length; a++) {
                                var o = this[a][0];
                                null != o && (s[o] = !0)
                            }
                        for (var c = 0; c < e.length; c++) {
                            var r = [].concat(e[c]);
                            i && s[r[0]] || (n && (r[2] ? r[2] = "".concat(n, " and ").concat(r[2]) : r[2] = n), t.push(r))
                        }
                    }, t
                }
            },
            379: (e, t, n) => {
                "use strict";
                var i, s = function() {
                        var e = {};
                        return function(t) {
                            if (void 0 === e[t]) {
                                var n = document.querySelector(t);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                    n = n.contentDocument.head
                                } catch (e) {
                                    n = null
                                }
                                e[t] = n
                            }
                            return e[t]
                        }
                    }(),
                    a = [];

                function o(e) {
                    for (var t = -1, n = 0; n < a.length; n++)
                        if (a[n].identifier === e) {
                            t = n;
                            break
                        } return t
                }

                function c(e, t) {
                    for (var n = {}, i = [], s = 0; s < e.length; s++) {
                        var c = e[s],
                            r = t.base ? c[0] + t.base : c[0],
                            M = n[r] || 0,
                            d = "".concat(r, " ").concat(M);
                        n[r] = M + 1;
                        var l = o(d),
                            h = {
                                css: c[1],
                                media: c[2],
                                sourceMap: c[3]
                            }; - 1 !== l ? (a[l].references++, a[l].updater(h)) : a.push({
                            identifier: d,
                            updater: j(h, t),
                            references: 1
                        }), i.push(d)
                    }
                    return i
                }

                function r(e) {
                    var t = document.createElement("style"),
                        i = e.attributes || {};
                    if (void 0 === i.nonce) {
                        var a = n.nc;
                        a && (i.nonce = a)
                    }
                    if (Object.keys(i).forEach((function(e) {
                            t.setAttribute(e, i[e])
                        })), "function" == typeof e.insert) e.insert(t);
                    else {
                        var o = s(e.insert || "head");
                        if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        o.appendChild(t)
                    }
                    return t
                }
                var M, d = (M = [], function(e, t) {
                    return M[e] = t, M.filter(Boolean).join("\n")
                });

                function l(e, t, n, i) {
                    var s = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
                    if (e.styleSheet) e.styleSheet.cssText = d(t, s);
                    else {
                        var a = document.createTextNode(s),
                            o = e.childNodes;
                        o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(a, o[t]) : e.appendChild(a)
                    }
                }

                function h(e, t, n) {
                    var i = n.css,
                        s = n.media,
                        a = n.sourceMap;
                    if (s ? e.setAttribute("media", s) : e.removeAttribute("media"), a && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleSheet) e.styleSheet.cssText = i;
                    else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(i))
                    }
                }
                var N = null,
                    u = 0;

                function j(e, t) {
                    var n, i, s;
                    if (t.singleton) {
                        var a = u++;
                        n = N || (N = r(t)), i = l.bind(null, n, a, !1), s = l.bind(null, n, a, !0)
                    } else n = r(t), i = h.bind(null, n, t), s = function() {
                        ! function(e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(n)
                    };
                    return i(e),
                        function(t) {
                            if (t) {
                                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                                i(e = t)
                            } else s()
                        }
                }
                e.exports = function(e, t) {
                    (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = (void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i));
                    var n = c(e = e || [], t);
                    return function(e) {
                        if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                            for (var i = 0; i < n.length; i++) {
                                var s = o(n[i]);
                                a[s].references--
                            }
                            for (var r = c(e, t), M = 0; M < n.length; M++) {
                                var d = o(n[M]);
                                0 === a[d].references && (a[d].updater(), a.splice(d, 1))
                            }
                            n = r
                        }
                    }
                }
            },
            285: (e, t, n) => {
                "use strict";
                e.exports = n.p + "eaf995c70c7eb307cd6a.png"
            },
            784: (e, t, n) => {
                "use strict";
                e.exports = n.p + "10ab47c0e030e8843ec2.png"
            },
            310: (e, t, n) => {
                var i = {
                    "./bot.png": 285,
                    "./user.png": 784
                };

                function s(e) {
                    var t = a(e);
                    return n(t)
                }

                function a(e) {
                    if (!n.o(i, e)) {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }
                    return i[e]
                }
                s.keys = function() {
                    return Object.keys(i)
                }, s.resolve = a, e.exports = s, s.id = 310
            }
        },
        t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var s = t[i] = {
            id: i,
            exports: {}
        };
        return e[i](s, s.exports, n), s.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
            enumerable: !0,
            get: t[i]
        })
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e;
        n.g.importScripts && (e = n.g.location + "");
        var t = n.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var i = t.getElementsByTagName("script");
            i.length && (e = i[i.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
    })(), (() => {
        "use strict";
        var e = n(379),
            t = n.n(e),
            i = n(143);
        t()(i.Z, {
            insert: "head",
            singleton: !1
        }), i.Z.locals;
        class s {
            constructor(e) {
                this._container = e, this.history = []
            }
            add(e) {
                this.history.push(e);
                let t = document.createElement("div");
                t.classList.add(`chat-item-${e.type}`);
                let i = document.createElement("img");
                i.src = n(310)(`./${e.type}.png`);
                let s = document.createElement("div");
                s.classList.add(`chat-answer-${e.type}`), t.appendChild(s), t.appendChild(i), "user" === e.type ? s.innerHTML = e.content : s.appendChild(e.content), this._container.appendChild(t), this._container.scrollTop = this._container.scrollHeight
            }
        }
        const a = new URL(window.location).searchParams;
        console.log(a);
        let o = a.get("avatar"),
            c = a.get("voice"),
            r = a.get("bot") || "f39c7728-4492-4a92-a239-f5e4f1b82be8",
            M = a.get("bg"),
            d = Number(a.get("rate")) || 1,
            l = 50 * Number(a.get("volume")) || 50,
            h = a.get("chatType") || "text",
            N = a.get("language") || "zh-CN",
            u = a.get("style") || "General",
            j = a.get("actionAreaId") || "default",
            g = a.get("channelId") || "default";
        const y = a.get("botUrl") || "https://deportal.chinaeast2.cloudapp.chinacloudapi.cn";
        new class {
            constructor(e, t) {
                this.container = e, this.isShowHistory = !1, this.chatType = t.chatType, this.isRecord = !1, this.chatTextValue = null, this.player = null, this.chat = new s(document.getElementById("chatContent")), this.speechConfig = SpeechSDK.SpeechConfig.fromSubscription("16a35ad2aa7f4c67adcd7a25fdb25bb7", "chinaeast2"), this.avatar = t.avatar, this.voice = t.voice, this.bot = t.bot, this.bg = t.bg, this.language = t.language, this.rate = t.rate, this.volume = t.volume, this.style = t.style, this.channelId = t.channelId, this.actionAreaId = t.actionAreaId, this.botUrl = t.botUrl, this.showHistoryFlag = !0
            }
            init() {
                this.renderChatAction(this.chatType), this.renderUnity(), document.getElementById("showHistoryBtn").addEventListener("click", (e => {
                    this.isShowHistory = !this.isShowHistory, e.currentTarget.style.transform = this.isShowHistory ? "" : "rotate(180deg)";
                    const t = document.getElementById("chatContainer");
                    t.style.opacity = this.isShowHistory ? 1 : 0, t.style.height = this.isShowHistory ? "70vh" : "0"
                })), this.bg && (document.body.style.backgroundImage = `url(${this.bg})`, document.body.style.backgroundSize = "cover")
            }
            renderChatAction(e) {
                this.container.innerHTML = "";
                const t = document.createElement("div");
                t.classList.add("chat-user-content-btn"), t.addEventListener("click", (e => {
                    null === this.voice ? (this.chatType = "text", this.renderChatAction(this.chatType)) : (this.chatType = "text" === this.chatType ? "voice" : "text", this.renderChatAction(this.chatType))
                })), this.container.appendChild(t), "text" === e && null !== this.voice ? (t.style.backgroundImage = 'url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzEyOTZkYiIgZD0iTTg0MC41MzMgNDIyLjgyN2E0Mi42NjcgNDIuNjY3IDAgMDE0Mi42NjcgNDIuNjY2IDM4OC4zMSAzODguMzEgMCAwMS0zNDUuNjg1IDM4NS45NjNsLjA4NSAxLjg3N3Y4NS4zMzRINzA0YTQyLjY2NyA0Mi42NjcgMCAwMTQuOTkyIDg1LjAzNEw3MDQgMTAyNEgyNzcuMzMzYTQyLjY2NyA0Mi42NjcgMCAwMS00Ljk5Mi04NS4wMzVsNC45OTItLjI5OGgxNzQuOTM0di04NS4zMzRsLjA4NS0xLjg3N2EzODguMzEgMzg4LjMxIDAgMDEtMzQ1LjY4NS0zODUuOTYzIDQyLjY2NyA0Mi42NjcgMCAwMTg1LjMzMyAwIDMwMi45MzMgMzAyLjkzMyAwIDAwNjA1Ljg2NyAwIDQyLjY2NyA0Mi42NjcgMCAwMTQyLjY2Ni00Mi42NjZ6TTQ5NC45MzMgMGEyNTYgMjU2IDAgMDEyNTYgMjU2djIxMy4zMzNhMjU2IDI1NiAwIDExLTUxMiAwVjI1NmEyNTYgMjU2IDAgMDEyNTYtMjU2eiIvPjwvc3ZnPg==")', this.renderChatText().map((e => this.container.appendChild(e)))) : null === this.voice ? (t.style.backgroundImage = 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM3ODg4NTA0MDQ0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjcwMjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMjQzLjIgNTk3LjMzMzMzM2MtMTcuMDY2NjY3LTM4LjQtMjkuODY2NjY3LTg1LjMzMzMzMy0yOS44NjY2NjctMTI4IDAtMjUuNi0xNy4wNjY2NjctNDIuNjY2NjY3LTQyLjY2NjY2Ni00Mi42NjY2NjZzLTQyLjY2NjY2NyAxNy4wNjY2NjctNDIuNjY2NjY3IDQyLjY2NjY2NmMwIDcyLjUzMzMzMyAyMS4zMzMzMzMgMTM2LjUzMzMzMyA1MS4yIDE5MkwyNDMuMiA1OTcuMzMzMzMzek04NTMuMzMzMzMzIDQyNi42NjY2NjdjLTI1LjYgMC00Mi42NjY2NjcgMTcuMDY2NjY3LTQyLjY2NjY2NiA0Mi42NjY2NjYgMCAxNjYuNC0xMzIuMjY2NjY3IDI5OC42NjY2NjctMjk4LjY2NjY2NyAyOTguNjY2NjY3LTIxLjMzMzMzMyAwLTQ2LjkzMzMzMy00LjI2NjY2Ny02OC4yNjY2NjctOC41MzMzMzNsLTY4LjI2NjY2NiA2OC4yNjY2NjZjMjkuODY2NjY3IDEyLjggNTkuNzMzMzMzIDE3LjA2NjY2NyA5My44NjY2NjYgMjEuMzMzMzM0VjkzOC42NjY2NjdIMzQxLjMzMzMzM2MtMjUuNiAwLTQyLjY2NjY2NyAxNy4wNjY2NjctNDIuNjY2NjY2IDQyLjY2NjY2NnMxNy4wNjY2NjcgNDIuNjY2NjY3IDQyLjY2NjY2NiA0Mi42NjY2NjdoMzQxLjMzMzMzNGMyNS42IDAgNDIuNjY2NjY3LTE3LjA2NjY2NyA0Mi42NjY2NjYtNDIuNjY2NjY3cy0xNy4wNjY2NjctNDIuNjY2NjY3LTQyLjY2NjY2Ni00Mi42NjY2NjZoLTEyOHYtODkuNmMxOTItMjEuMzMzMzMzIDM0MS4zMzMzMzMtMTgzLjQ2NjY2NyAzNDEuMzMzMzMzLTM3OS43MzMzMzQgMC0yNS42LTE3LjA2NjY2Ny00Mi42NjY2NjctNDIuNjY2NjY3LTQyLjY2NjY2NnpNNzA4LjI2NjY2NyAxMzIuMjY2NjY3QzY3OC40IDU1LjQ2NjY2NyA2MDEuNiAwIDUxMiAwIDM5Mi41MzMzMzMgMCAyOTguNjY2NjY3IDkzLjg2NjY2NyAyOTguNjY2NjY3IDIxMy4zMzMzMzN2MjU2YzAgMjEuMzMzMzMzIDQuMjY2NjY3IDQyLjY2NjY2NyAxMi44IDY0bDM5Ni44LTQwMS4wNjY2NjZ6IiBwLWlkPSI3MDI0Ij48L3BhdGg+PHBhdGggZD0iTTUyNC44IDY4Mi42NjY2NjdjMTA2LjY2NjY2Ny00LjI2NjY2NyAxOTYuMjY2NjY3LTkzLjg2NjY2NyAyMDAuNTMzMzMzLTIwMC41MzMzMzRMNTI0LjggNjgyLjY2NjY2N3pNOTY4LjUzMzMzMyA1NS40NjY2NjdjLTE3LjA2NjY2Ny0xNy4wNjY2NjctNDIuNjY2NjY3LTE3LjA2NjY2Ny01OS43MzMzMzMgMGwtODUzLjMzMzMzMyA4NTMuMzMzMzMzYy0xNy4wNjY2NjcgMTcuMDY2NjY3LTE3LjA2NjY2NyA0Mi42NjY2NjcgMCA1OS43MzMzMzMgOC41MzMzMzMgOC41MzMzMzMgMTcuMDY2NjY3IDEyLjggMjkuODY2NjY2IDEyLjhzMjEuMzMzMzMzLTQuMjY2NjY3IDI5Ljg2NjY2Ny0xMi44bDg1My4zMzMzMzMtODUzLjMzMzMzM2MxNy4wNjY2NjctMTcuMDY2NjY3IDE3LjA2NjY2Ny00Mi42NjY2NjcgMC01OS43MzMzMzN6IiBwLWlkPSI3MDI1Ij48L3BhdGg+PC9zdmc+")', this.renderChatText().map((e => this.container.appendChild(e)))) : (t.style.backgroundImage = 'url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzEyOTZkYiIgZD0iTTUxNC42IDczQzI2OSA3MyA2OS45IDI3Mi4xIDY5LjkgNTE3LjdTMjY5IDk2Mi40IDUxNC42IDk2Mi40czQ0NC43LTE5OS4xIDQ0NC43LTQ0NC43Uzc2MC4yIDczIDUxNC42IDczem0zOC41IDI4NWgxMDAuNXYxMDAuNUg1NTMuMVYzNTh6bTAgMTI2LjNoMTAwLjV2MTAwLjVINTUzLjFWNDg0LjN6TTM4NyAzNThoMTAwLjV2MTAwLjVIMzg3VjM1OHptMCAxMjYuM2gxMDAuNXYxMDAuNUgzODdWNDg0LjN6TTIyNS4zIDM1OGgxMDAuNXYxMDAuNUgyMjUuM1YzNTh6bTAgMTI2LjNoMTAwLjV2MTAwLjVIMjI1LjNWNDg0LjN6bTQ5Ni41IDI0OC4xSDMwNy40di03MWg0MTQuNHY3MXpNODA0IDU4NC44SDcwMy41VjQ4NC4zSDgwNHYxMDAuNXptMC0xMjYuNEg3MDMuNVYzNThIODA0djEwMC40eiIvPjwvc3ZnPg==")', this.renderChatRecord().map((e => this.container.appendChild(e))))
            }
            renderChatText() {
                const e = document.createElement("input");
                e.type = "text", e.placeholder = "璇疯緭鍏ュ唴瀹�", e.value = this.chatTextValue, e.addEventListener("input", (e => {
                    e.currentTarget.value.trim() && (this.chatTextValue = e.currentTarget.value.trim())
                })), e.addEventListener("keyup", (t => {
                    "Enter" === t.code && (this.chatTextValue && this.chatTextValue.trim() ? (this.chat.add({
                        type: "user",
                        content: this.chatTextValue
                    }), this.send(this.chatTextValue), this.chatTextValue = null, e.value = this.chatTextValue) : alert("璇疯緭鍏ュ唴瀹癸紒"))
                }));
                const t = document.createElement("div");
                return t.classList.add("chat-user-content-send"), t.innerHTML = "鍙戦€�", t.addEventListener("click", (() => {
                    this.chatTextValue && this.chatTextValue.trim() ? (this.chat.add({
                        type: "user",
                        content: this.chatTextValue
                    }), this.send(this.chatTextValue), this.chatTextValue = null, e.value = this.chatTextValue) : alert("璇疯緭鍏ュ唴瀹癸紒")
                })), [e, t]
            }
            renderChatRecord() {
                let e, t = !0,
                    n = "";
                const i = document.createElement("div");
                i.classList.add("chat-user-content-record"), i.id = "btnStartVoiceInput", i.innerHTML = "鐐瑰嚮寮€濮嬭闊宠緭鍏�";
                const s = document.createElement("div");
                return s.classList.add("chat-user-content-record-cancel"), s.innerHTML = "鍙栨秷", s.addEventListener("click", (n => {
                    t = !1, this.stopRecording(e), i.innerHTML = "鐐瑰嚮寮€濮嬭闊宠緭鍏�", s.style.display = "none"
                })), i.addEventListener("click", (a => {
                    this.isRecord = !this.isRecord, this.isRecord ? (i.id = "btnStopVoiceInput", i.innerHTML = "鐐瑰嚮鍋滄褰曢煶骞跺彂閫�", s.style.display = "block", n = "", e = this.asr(), e.startContinuousRecognitionAsync(), e.recognized = (e, t) => {
                        t.result.text && (console.log("recognized", t.result.text), n += t.result.text)
                    }, e.sessionStopped = (e, i) => {
                        t && n && (n = n.trim(), "." != n[n.length - 1] && "銆�" != n[n.length - 1] || (n = n.slice(0, n.length - 1)), console.log("send text", n), this.chat.add({
                            type: "user",
                            content: n
                        }), this.send(n))
                    }) : (i.innerHTML = "鐐瑰嚮寮€濮嬭闊宠緭鍏�", i.id = "btnStartVoiceInput", s.style.display = "none", t = !0, this.stopRecording(e))
                })), [i, s]
            }
            asr() {
                const {
                    speechConfig: e
                } = this;
                e.speechRecognitionLanguage = "zh-CN";
                const t = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
                return new SpeechSDK.SpeechRecognizer(e, t)
            }
            xmlToString(e) {
                return `<speak version="1.0" xmlns="https://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="${this.language}">\n              <voice name='${this.voice}'>\n              <prosody rate="${this.rate}" volume="${this.volume}"><mstts:express-as style="${this.style}" role="Default">\n              ${e}</mstts:express-as></prosody>\n            </voice>\n            </speak>`
            }
            send(e) {
                const t = `${this.botUrl}/dialog-bot/api/${this.bot}/Dialog`,
                    n = new Headers;
                n.set("content-type", "application/json");
                let i = {
                    sessionId: this.sessionId,
                    actionAreaId: this.actionAreaId,
                    channelId: this.channelId,
                    input: {
                        query: {
                            queryText: e
                        }
                    }
                };
                this.sessionId && "" != this.sessionId || delete i.sessionId, !this.voice && this.showHistoryFlag && (document.getElementById("showHistoryBtn").click(), this.showHistoryFlag = !1), fetch(t, {
                    method: "POST",
                    headers: n,
                    body: JSON.stringify(i)
                }).then((e => {
                    200 === e.status && e.json().then((e => {
                        this.sessionId && "" != this.sessionId || (this.sessionId = e.sessionId);
                        const t = e.queryResult.responseText;
                        let n = document.createElement("div"),
                            i = "";
                        for (let e of t) {
                            const t = JSON.parse(e.content);
                            if (t.LeadingMessage) {
                                i += `${t.LeadingMessage}\n`;
                                let e = document.createElement("div");
                                e.classList = ["bot-lead"], e.innerText = t.LeadingMessage, n.appendChild(e)
                            }
                            if (t.Text) {
                                i += `${t.Text}\n`;
                                let e = document.createElement("div");
                                e.classList = ["bot-text"], e.innerText = t.Text, n.appendChild(e)
                            }
                            this.options = t.Options || [];
                            for (let e in t.Options) {
                                i += `${t.Options[e]}\n`;
                                let s = document.createElement("div");
                                s.classList = ["bot-option"], s.innerText = `${t.Options[e]}`, s.addEventListener("click", (() => {
                                    this.chat.add({
                                        type: "user",
                                        content: t.Options[e]
                                    }), this.send(t.Options[e])
                                })), n.appendChild(s)
                            }
                            if (t.EndingMessage) {
                                i += `${t.EndingMessage}`;
                                let e = document.createElement("div");
                                e.classList = ["bot-end"], e.innerText = t.EndingMessage, n.appendChild(e)
                            }
                        }
                        this.chat.add({
                            type: "bot",
                            content: n
                        }), console.log(i), this.synthesizeSpeech(i)
                    }))
                }))
            }
            synthesizeSpeech(e) {
                const {
                    speechConfig: t
                } = this, n = new SpeechSDK.SpeakerAudioDestination, i = SpeechSDK.AudioConfig.fromSpeakerOutput(n), s = new SpeechSDK.SpeechSynthesizer(t, i), a = this.xmlToString(e);
                let o = 0,
                    c = [];
                var r = {
                        lang: "zh_cn",
                        res: [],
                        originalRes: c
                    },
                    M = 0,
                    d = 0;
                s.speakSsmlAsync(a, (e => {
                    e.audioData && e.audioData.byteLength > 0 && this.audioHandler(n, r), s.close()
                }), (e => {
                    console.log("fail", e), s.close()
                })), s.visemeReceived = (e, t) => {
                    o += 1, M = d, d = t.audioOffset, c.push({
                        vise: t.visemeId,
                        offset: t.audioOffset / 1e7
                    }), r.res.push({
                        vise: t.visemeId,
                        offset: (d - M) / 1e7
                    })
                }, n.pause()
            }
            stopRecording(e) {
                e.stopContinuousRecognitionAsync((() => {
                    e.close(), e = void 0
                }), (function(t) {
                    e.close(), e = void 0
                }))
            }
            cancelRecord(e) {}
            renderUnity() {
                const e = document.createElement("iframe");
                e.width = "100%", e.height = "100%", e.style.border = "none", e.src = `https://ke-test-server.chinaeast2.cloudapp.chinacloudapi.cn/${this.avatar}/index.html`, e.id = "unity", this.avatar && document.getElementById("nn-container").appendChild(e)
            }
            audioHandler(e, t) {
                const n = document.getElementById("unity");
                this.player && (this.player.pause(), n && (n.contentWindow.postMessage({
                    type: "visemeclean"
                }, "*"), n.contentWindow.postMessage({
                    type: "deactivate"
                }, "*")), this.player.close(), this.player = null), n && n.contentWindow.postMessage({
                    type: "activate",
                    data: JSON.stringify(t)
                }, "*"), e.resume(), e.onAudioEnd = () => {
                    n && n.contentWindow.postMessage({
                        type: "deactivate"
                    }, "*")
                }, this.player = e
            }
        }(document.getElementById("dialogContainer"), {
            avatar: o,
            voice: c,
            bot: r,
            bg: M,
            chatType: h,
            rate: d,
            volume: l,
            language: N,
            style: u,
            actionAreaId: j,
            channelId: g,
            botUrl: y
        }).init()
    })()
})();