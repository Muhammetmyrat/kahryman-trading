!(function (t) {
  var e = {}
  function i(n) {
    if (e[n]) return e[n].exports
    var o = (e[n] = { i: n, l: !1, exports: {} })
    return t[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports
  }
  ;(i.m = t),
    (i.c = e),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
    }),
    (i.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var n = Object.create(null)
      if (
        (i.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          i.d(
            n,
            o,
            function (e) {
              return t[e]
            }.bind(null, o)
          )
      return n
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default
            }
          : function () {
              return t
            }
      return i.d(e, 'a', e), e
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (i.p = ''),
    i((i.s = 114))
})([
  function (t, e, i) {
    'use strict'
    ;(function (t, n) {
      i.d(e, 'k', function () {
        return o
      }),
        i.d(e, 'm', function () {
          return a
        }),
        i.d(e, 'l', function () {
          return r
        }),
        i.d(e, 'i', function () {
          return l
        }),
        i.d(e, 'a', function () {
          return u
        }),
        i.d(e, 'b', function () {
          return c
        }),
        i.d(e, 'c', function () {
          return h
        }),
        i.d(e, 'd', function () {
          return p
        }),
        i.d(e, 'e', function () {
          return f
        }),
        i.d(e, 'f', function () {
          return d
        }),
        i.d(e, 'g', function () {
          return _
        }),
        i.d(e, 'h', function () {
          return g
        }),
        i.d(e, 'j', function () {
          return m
        })
      /*!
       * VERSION: 2.1.3
       * DATE: 2019-05-17
       * UPDATES AND DOCS AT: http://greensock.com
       *
       * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
       * This work is subject to the terms at http://greensock.com/standard-license or for
       * Club GreenSock members, the software agreement that was issued with your membership.
       *
       * @author: Jack Doyle, jack@greensock.com
       */
      var o =
          'undefined' != typeof window
            ? window
            : t.exports && void 0 !== n
            ? n
            : {},
        r = (function (t) {
          var e = {},
            i = t.document,
            n = (t.GreenSockGlobals = t.GreenSockGlobals || t)
          if (n.TweenLite) return n.TweenLite
          var o,
            r,
            a,
            s,
            l,
            u,
            c,
            h = function (t) {
              var e,
                i = t.split('.'),
                o = n
              for (e = 0; e < i.length; e++) o[i[e]] = o = o[i[e]] || {}
              return o
            },
            p = h('com.greensock'),
            f = function (t) {
              var e,
                i = [],
                n = t.length
              for (e = 0; e !== n; i.push(t[e++]));
              return i
            },
            d = function () {},
            _ =
              ((u = Object.prototype.toString),
              (c = u.call([])),
              function (t) {
                return (
                  null != t &&
                  (t instanceof Array ||
                    ('object' == typeof t && !!t.push && u.call(t) === c))
                )
              }),
            g = {},
            m = function (t, i, o, r) {
              ;(this.sc = g[t] ? g[t].sc : []),
                (g[t] = this),
                (this.gsClass = null),
                (this.func = o)
              var a = []
              ;(this.check = function (s) {
                for (var l, u, c, p, f = i.length, d = f; --f > -1; )
                  (l = g[i[f]] || new m(i[f], [])).gsClass
                    ? ((a[f] = l.gsClass), d--)
                    : s && l.sc.push(this)
                if (0 === d && o)
                  for (
                    c = (u = ('com.greensock.' + t).split('.')).pop(),
                      p = h(u.join('.'))[c] = this.gsClass = o.apply(o, a),
                      r && (n[c] = e[c] = p),
                      f = 0;
                    f < this.sc.length;
                    f++
                  )
                    this.sc[f].check()
              }),
                this.check(!0)
            },
            y = (t._gsDefine = function (t, e, i, n) {
              return new m(t, e, i, n)
            }),
            v = (p._class = function (t, e, i) {
              return (
                (e = e || function () {}),
                y(
                  t,
                  [],
                  function () {
                    return e
                  },
                  i
                ),
                e
              )
            })
          y.globals = n
          var b = [0, 0, 1, 1],
            C = v(
              'easing.Ease',
              function (t, e, i, n) {
                ;(this._func = t),
                  (this._type = i || 0),
                  (this._power = n || 0),
                  (this._params = e ? b.concat(e) : b)
              },
              !0
            ),
            w = (C.map = {}),
            T = (C.register = function (t, e, i, n) {
              for (
                var o,
                  r,
                  a,
                  s,
                  l = e.split(','),
                  u = l.length,
                  c = (i || 'easeIn,easeOut,easeInOut').split(',');
                --u > -1;

              )
                for (
                  r = l[u],
                    o = n ? v('easing.' + r, null, !0) : p.easing[r] || {},
                    a = c.length;
                  --a > -1;

                )
                  (s = c[a]),
                    (w[r + '.' + s] =
                      w[s + r] =
                      o[s] =
                        t.getRatio ? t : t[s] || new t())
            })
          for (
            (a = C.prototype)._calcEnd = !1,
              a.getRatio = function (t) {
                if (this._func)
                  return (
                    (this._params[0] = t), this._func.apply(null, this._params)
                  )
                var e = this._type,
                  i = this._power,
                  n =
                    1 === e
                      ? 1 - t
                      : 2 === e
                      ? t
                      : t < 0.5
                      ? 2 * t
                      : 2 * (1 - t)
                return (
                  1 === i
                    ? (n *= n)
                    : 2 === i
                    ? (n *= n * n)
                    : 3 === i
                    ? (n *= n * n * n)
                    : 4 === i && (n *= n * n * n * n),
                  1 === e ? 1 - n : 2 === e ? n : t < 0.5 ? n / 2 : 1 - n / 2
                )
              },
              r = (o = ['Linear', 'Quad', 'Cubic', 'Quart', 'Quint,Strong'])
                .length;
            --r > -1;

          )
            (a = o[r] + ',Power' + r),
              T(new C(null, null, 1, r), a, 'easeOut', !0),
              T(
                new C(null, null, 2, r),
                a,
                'easeIn' + (0 === r ? ',easeNone' : '')
              ),
              T(new C(null, null, 3, r), a, 'easeInOut')
          ;(w.linear = p.easing.Linear.easeIn),
            (w.swing = p.easing.Quad.easeInOut)
          var S = v('events.EventDispatcher', function (t) {
            ;(this._listeners = {}), (this._eventTarget = t || this)
          })
          ;((a = S.prototype).addEventListener = function (t, e, i, n, o) {
            o = o || 0
            var r,
              a,
              u = this._listeners[t],
              c = 0
            for (
              this !== s || l || s.wake(),
                null == u && (this._listeners[t] = u = []),
                a = u.length;
              --a > -1;

            )
              (r = u[a]).c === e && r.s === i
                ? u.splice(a, 1)
                : 0 === c && r.pr < o && (c = a + 1)
            u.splice(c, 0, { c: e, s: i, up: n, pr: o })
          }),
            (a.removeEventListener = function (t, e) {
              var i,
                n = this._listeners[t]
              if (n)
                for (i = n.length; --i > -1; )
                  if (n[i].c === e) return void n.splice(i, 1)
            }),
            (a.dispatchEvent = function (t) {
              var e,
                i,
                n,
                o = this._listeners[t]
              if (o)
                for (
                  (e = o.length) > 1 && (o = o.slice(0)), i = this._eventTarget;
                  --e > -1;

                )
                  (n = o[e]) &&
                    (n.up
                      ? n.c.call(n.s || i, { type: t, target: i })
                      : n.c.call(n.s || i))
            })
          var A = t.requestAnimationFrame,
            O = t.cancelAnimationFrame,
            E =
              Date.now ||
              function () {
                return new Date().getTime()
              },
            x = E()
          for (r = (o = ['ms', 'moz', 'webkit', 'o']).length; --r > -1 && !A; )
            (A = t[o[r] + 'RequestAnimationFrame']),
              (O =
                t[o[r] + 'CancelAnimationFrame'] ||
                t[o[r] + 'CancelRequestAnimationFrame'])
          v('Ticker', function (t, e) {
            var n,
              o,
              r,
              a,
              u,
              c = this,
              h = E(),
              p = !(!1 === e || !A) && 'auto',
              f = 500,
              _ = 33,
              g = function (t) {
                var e,
                  i,
                  s = E() - x
                s > f && (h += s - _),
                  (x += s),
                  (c.time = (x - h) / 1e3),
                  (e = c.time - u),
                  (!n || e > 0 || !0 === t) &&
                    (c.frame++, (u += e + (e >= a ? 0.004 : a - e)), (i = !0)),
                  !0 !== t && (r = o(g)),
                  i && c.dispatchEvent('tick')
              }
            S.call(c),
              (c.time = c.frame = 0),
              (c.tick = function () {
                g(!0)
              }),
              (c.lagSmoothing = function (t, e) {
                if (!arguments.length) return f < 1 / 1e-8
                ;(f = t || 1 / 1e-8), (_ = Math.min(e, f, 0))
              }),
              (c.sleep = function () {
                null != r &&
                  (p && O ? O(r) : clearTimeout(r),
                  (o = d),
                  (r = null),
                  c === s && (l = !1))
              }),
              (c.wake = function (t) {
                null !== r
                  ? c.sleep()
                  : t
                  ? (h += -x + (x = E()))
                  : c.frame > 10 && (x = E() - f + 5),
                  (o =
                    0 === n
                      ? d
                      : p && A
                      ? A
                      : function (t) {
                          return setTimeout(t, (1e3 * (u - c.time) + 1) | 0)
                        }),
                  c === s && (l = !0),
                  g(2)
              }),
              (c.fps = function (t) {
                if (!arguments.length) return n
                ;(a = 1 / ((n = t) || 60)), (u = this.time + a), c.wake()
              }),
              (c.useRAF = function (t) {
                if (!arguments.length) return p
                c.sleep(), (p = t), c.fps(n)
              }),
              c.fps(t),
              setTimeout(function () {
                'auto' === p &&
                  c.frame < 5 &&
                  'hidden' !== (i || {}).visibilityState &&
                  c.useRAF(!1)
              }, 1500)
          }),
            ((a = p.Ticker.prototype =
              new p.events.EventDispatcher()).constructor = p.Ticker)
          var D = v('core.Animation', function (t, e) {
            if (
              ((this.vars = e = e || {}),
              (this._duration = this._totalDuration = t || 0),
              (this._delay = Number(e.delay) || 0),
              (this._timeScale = 1),
              (this._active = !!e.immediateRender),
              (this.data = e.data),
              (this._reversed = !!e.reversed),
              q)
            ) {
              l || s.wake()
              var i = this.vars.useFrames ? Z : q
              i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
          })
          ;(s = D.ticker = new p.Ticker()),
            ((a = D.prototype)._dirty = a._gc = a._initted = a._paused = !1),
            (a._totalTime = a._time = 0),
            (a._rawPrevTime = -1),
            (a._next = a._last = a._onUpdate = a._timeline = a.timeline = null),
            (a._paused = !1)
          var P = function () {
            l &&
              E() - x > 2e3 &&
              ('hidden' !== (i || {}).visibilityState || !s.lagSmoothing()) &&
              s.wake()
            var t = setTimeout(P, 2e3)
            t.unref && t.unref()
          }
          P(),
            (a.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }),
            (a.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0)
            }),
            (a.resume = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!1)
            }),
            (a.seek = function (t, e) {
              return this.totalTime(Number(t), !1 !== e)
            }),
            (a.restart = function (t, e) {
              return this.reversed(!1)
                .paused(!1)
                .totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }),
            (a.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              )
            }),
            (a.render = function (t, e, i) {}),
            (a.invalidate = function () {
              return (
                (this._time = this._totalTime = 0),
                (this._initted = this._gc = !1),
                (this._rawPrevTime = -1),
                (!this._gc && this.timeline) || this._enabled(!0),
                this
              )
            }),
            (a.isActive = function () {
              var t,
                e = this._timeline,
                i = this._startTime
              return (
                !e ||
                (!this._gc &&
                  !this._paused &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= i &&
                  t < i + this.totalDuration() / this._timeScale - 1e-8)
              )
            }),
            (a._enabled = function (t, e) {
              return (
                l || s.wake(),
                (this._gc = !t),
                (this._active = this.isActive()),
                !0 !== e &&
                  (t && !this.timeline
                    ? this._timeline.add(this, this._startTime - this._delay)
                    : !t && this.timeline && this._timeline._remove(this, !0)),
                !1
              )
            }),
            (a._kill = function (t, e) {
              return this._enabled(!1, !1)
            }),
            (a.kill = function (t, e) {
              return this._kill(t, e), this
            }),
            (a._uncache = function (t) {
              for (var e = t ? this : this.timeline; e; )
                (e._dirty = !0), (e = e.timeline)
              return this
            }),
            (a._swapSelfInParams = function (t) {
              for (var e = t.length, i = t.concat(); --e > -1; )
                '{self}' === t[e] && (i[e] = this)
              return i
            }),
            (a._callback = function (t) {
              var e = this.vars,
                i = e[t],
                n = e[t + 'Params'],
                o = e[t + 'Scope'] || e.callbackScope || this
              switch (n ? n.length : 0) {
                case 0:
                  i.call(o)
                  break
                case 1:
                  i.call(o, n[0])
                  break
                case 2:
                  i.call(o, n[0], n[1])
                  break
                default:
                  i.apply(o, n)
              }
            }),
            (a.eventCallback = function (t, e, i, n) {
              if ('on' === (t || '').substr(0, 2)) {
                var o = this.vars
                if (1 === arguments.length) return o[t]
                null == e
                  ? delete o[t]
                  : ((o[t] = e),
                    (o[t + 'Params'] =
                      _(i) && -1 !== i.join('').indexOf('{self}')
                        ? this._swapSelfInParams(i)
                        : i),
                    (o[t + 'Scope'] = n)),
                  'onUpdate' === t && (this._onUpdate = e)
              }
              return this
            }),
            (a.delay = function (t) {
              return arguments.length
                ? (this._timeline.smoothChildTiming &&
                    this.startTime(this._startTime + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay
            }),
            (a.duration = function (t) {
              return arguments.length
                ? ((this._duration = this._totalDuration = t),
                  this._uncache(!0),
                  this._timeline.smoothChildTiming &&
                    this._time > 0 &&
                    this._time < this._duration &&
                    0 !== t &&
                    this.totalTime(this._totalTime * (t / this._duration), !0),
                  this)
                : ((this._dirty = !1), this._duration)
            }),
            (a.totalDuration = function (t) {
              return (
                (this._dirty = !1),
                arguments.length ? this.duration(t) : this._totalDuration
              )
            }),
            (a.time = function (t, e) {
              return arguments.length
                ? (this._dirty && this.totalDuration(),
                  this.totalTime(t > this._duration ? this._duration : t, e))
                : this._time
            }),
            (a.totalTime = function (t, e, i) {
              if ((l || s.wake(), !arguments.length)) return this._totalTime
              if (this._timeline) {
                if (
                  (t < 0 && !i && (t += this.totalDuration()),
                  this._timeline.smoothChildTiming)
                ) {
                  this._dirty && this.totalDuration()
                  var n = this._totalDuration,
                    o = this._timeline
                  if (
                    (t > n && !i && (t = n),
                    (this._startTime =
                      (this._paused ? this._pauseTime : o._time) -
                      (this._reversed ? n - t : t) / this._timeScale),
                    o._dirty || this._uncache(!1),
                    o._timeline)
                  )
                    for (; o._timeline; )
                      o._timeline._time !==
                        (o._startTime + o._totalTime) / o._timeScale &&
                        o.totalTime(o._totalTime, !0),
                        (o = o._timeline)
                }
                this._gc && this._enabled(!0, !1),
                  (this._totalTime === t && 0 !== this._duration) ||
                    (L.length && J(), this.render(t, e, !1), L.length && J())
              }
              return this
            }),
            (a.progress = a.totalProgress =
              function (t, e) {
                var i = this.duration()
                return arguments.length
                  ? this.totalTime(i * t, e)
                  : i
                  ? this._time / i
                  : this.ratio
              }),
            (a.startTime = function (t) {
              return arguments.length
                ? (t !== this._startTime &&
                    ((this._startTime = t),
                    this.timeline &&
                      this.timeline._sortChildren &&
                      this.timeline.add(this, t - this._delay)),
                  this)
                : this._startTime
            }),
            (a.endTime = function (t) {
              return (
                this._startTime +
                (0 != t ? this.totalDuration() : this.duration()) /
                  this._timeScale
              )
            }),
            (a.timeScale = function (t) {
              if (!arguments.length) return this._timeScale
              var e, i
              for (
                t = t || 1e-8,
                  this._timeline &&
                    this._timeline.smoothChildTiming &&
                    ((i =
                      (e = this._pauseTime) || 0 === e
                        ? e
                        : this._timeline.totalTime()),
                    (this._startTime =
                      i - ((i - this._startTime) * this._timeScale) / t)),
                  this._timeScale = t,
                  i = this.timeline;
                i && i.timeline;

              )
                (i._dirty = !0), i.totalDuration(), (i = i.timeline)
              return this
            }),
            (a.reversed = function (t) {
              return arguments.length
                ? (t != this._reversed &&
                    ((this._reversed = t),
                    this.totalTime(
                      this._timeline && !this._timeline.smoothChildTiming
                        ? this.totalDuration() - this._totalTime
                        : this._totalTime,
                      !0
                    )),
                  this)
                : this._reversed
            }),
            (a.paused = function (t) {
              if (!arguments.length) return this._paused
              var e,
                i,
                n = this._timeline
              return (
                t != this._paused &&
                  n &&
                  (l || t || s.wake(),
                  (i = (e = n.rawTime()) - this._pauseTime),
                  !t &&
                    n.smoothChildTiming &&
                    ((this._startTime += i), this._uncache(!1)),
                  (this._pauseTime = t ? e : null),
                  (this._paused = t),
                  (this._active = this.isActive()),
                  !t &&
                    0 !== i &&
                    this._initted &&
                    this.duration() &&
                    ((e = n.smoothChildTiming
                      ? this._totalTime
                      : (e - this._startTime) / this._timeScale),
                    this.render(e, e === this._totalTime, !0))),
                this._gc && !t && this._enabled(!0, !1),
                this
              )
            })
          var I = v('core.SimpleTimeline', function (t) {
            D.call(this, 0, t),
              (this.autoRemoveChildren = this.smoothChildTiming = !0)
          })
          ;((a = I.prototype = new D()).constructor = I),
            (a.kill()._gc = !1),
            (a._first = a._last = a._recent = null),
            (a._sortChildren = !1),
            (a.add = a.insert =
              function (t, e, i, n) {
                var o, r
                if (
                  ((t._startTime = Number(e || 0) + t._delay),
                  t._paused &&
                    this !== t._timeline &&
                    (t._pauseTime =
                      this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
                  t.timeline && t.timeline._remove(t, !0),
                  (t.timeline = t._timeline = this),
                  t._gc && t._enabled(!0, !0),
                  (o = this._last),
                  this._sortChildren)
                )
                  for (r = t._startTime; o && o._startTime > r; ) o = o._prev
                return (
                  o
                    ? ((t._next = o._next), (o._next = t))
                    : ((t._next = this._first), (this._first = t)),
                  t._next ? (t._next._prev = t) : (this._last = t),
                  (t._prev = o),
                  (this._recent = t),
                  this._timeline && this._uncache(!0),
                  this
                )
              }),
            (a._remove = function (t, e) {
              return (
                t.timeline === this &&
                  (e || t._enabled(!1, !0),
                  t._prev
                    ? (t._prev._next = t._next)
                    : this._first === t && (this._first = t._next),
                  t._next
                    ? (t._next._prev = t._prev)
                    : this._last === t && (this._last = t._prev),
                  (t._next = t._prev = t.timeline = null),
                  t === this._recent && (this._recent = this._last),
                  this._timeline && this._uncache(!0)),
                this
              )
            }),
            (a.render = function (t, e, i) {
              var n,
                o = this._first
              for (this._totalTime = this._time = this._rawPrevTime = t; o; )
                (n = o._next),
                  (o._active || (t >= o._startTime && !o._paused && !o._gc)) &&
                    (o._reversed
                      ? o.render(
                          (o._dirty ? o.totalDuration() : o._totalDuration) -
                            (t - o._startTime) * o._timeScale,
                          e,
                          i
                        )
                      : o.render((t - o._startTime) * o._timeScale, e, i)),
                  (o = n)
            }),
            (a.rawTime = function () {
              return l || s.wake(), this._totalTime
            })
          var k = v(
              'TweenLite',
              function (e, i, n) {
                if (
                  (D.call(this, i, n),
                  (this.render = k.prototype.render),
                  null == e)
                )
                  throw 'Cannot tween a null target.'
                this.target = e = 'string' != typeof e ? e : k.selector(e) || e
                var o,
                  r,
                  a,
                  s =
                    e.jquery ||
                    (e.length &&
                      e !== t &&
                      e[0] &&
                      (e[0] === t ||
                        (e[0].nodeType && e[0].style && !e.nodeType))),
                  l = this.vars.overwrite
                if (
                  ((this._overwrite = l =
                    null == l
                      ? X[k.defaultOverwrite]
                      : 'number' == typeof l
                      ? l >> 0
                      : X[l]),
                  (s || e instanceof Array || (e.push && _(e))) &&
                    'number' != typeof e[0])
                )
                  for (
                    this._targets = a = f(e),
                      this._propLookup = [],
                      this._siblings = [],
                      o = 0;
                    o < a.length;
                    o++
                  )
                    (r = a[o])
                      ? 'string' != typeof r
                        ? r.length &&
                          r !== t &&
                          r[0] &&
                          (r[0] === t ||
                            (r[0].nodeType && r[0].style && !r.nodeType))
                          ? (a.splice(o--, 1),
                            (this._targets = a = a.concat(f(r))))
                          : ((this._siblings[o] = Q(r, this, !1)),
                            1 === l &&
                              this._siblings[o].length > 1 &&
                              tt(r, this, null, 1, this._siblings[o]))
                        : 'string' == typeof (r = a[o--] = k.selector(r)) &&
                          a.splice(o + 1, 1)
                      : a.splice(o--, 1)
                else
                  (this._propLookup = {}),
                    (this._siblings = Q(e, this, !1)),
                    1 === l &&
                      this._siblings.length > 1 &&
                      tt(e, this, null, 1, this._siblings)
                ;(this.vars.immediateRender ||
                  (0 === i &&
                    0 === this._delay &&
                    !1 !== this.vars.immediateRender)) &&
                  ((this._time = -1e-8), this.render(Math.min(0, -this._delay)))
              },
              !0
            ),
            F = function (e) {
              return (
                e &&
                e.length &&
                e !== t &&
                e[0] &&
                (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))
              )
            }
          ;((a = k.prototype = new D()).constructor = k),
            (a.kill()._gc = !1),
            (a.ratio = 0),
            (a._firstPT = a._targets = a._overwrittenProps = a._startAt = null),
            (a._notifyPluginsOfEnabled = a._lazy = !1),
            (k.version = '2.1.3'),
            (k.defaultEase = a._ease = new C(null, null, 1, 1)),
            (k.defaultOverwrite = 'auto'),
            (k.ticker = s),
            (k.autoSleep = 120),
            (k.lagSmoothing = function (t, e) {
              s.lagSmoothing(t, e)
            }),
            (k.selector =
              t.$ ||
              t.jQuery ||
              function (e) {
                var n = t.$ || t.jQuery
                return n
                  ? ((k.selector = n), n(e))
                  : (i || (i = t.document),
                    i
                      ? i.querySelectorAll
                        ? i.querySelectorAll(e)
                        : i.getElementById(
                            '#' === e.charAt(0) ? e.substr(1) : e
                          )
                      : e)
              })
          var L = [],
            N = {},
            R = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            M = /[\+-]=-?[\.\d]/,
            B = function (t) {
              for (var e, i = this._firstPT; i; )
                (e = i.blob
                  ? 1 === t && null != this.end
                    ? this.end
                    : t
                    ? this.join('')
                    : this.start
                  : i.c * t + i.s),
                  i.m
                    ? (e = i.m.call(
                        this._tween,
                        e,
                        this._target || i.t,
                        this._tween
                      ))
                    : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0),
                  i.f
                    ? i.fp
                      ? i.t[i.p](i.fp, e)
                      : i.t[i.p](e)
                    : (i.t[i.p] = e),
                  (i = i._next)
            },
            j = function (t) {
              return ((1e3 * t) | 0) / 1e3 + ''
            },
            H = function (t, e, i, n) {
              var o,
                r,
                a,
                s,
                l,
                u,
                c,
                h = [],
                p = 0,
                f = '',
                d = 0
              for (
                h.start = t,
                  h.end = e,
                  t = h[0] = t + '',
                  e = h[1] = e + '',
                  i && (i(h), (t = h[0]), (e = h[1])),
                  h.length = 0,
                  o = t.match(R) || [],
                  r = e.match(R) || [],
                  n &&
                    ((n._next = null),
                    (n.blob = 1),
                    (h._firstPT = h._applyPT = n)),
                  l = r.length,
                  s = 0;
                s < l;
                s++
              )
                (c = r[s]),
                  (f += (u = e.substr(p, e.indexOf(c, p) - p)) || !s ? u : ','),
                  (p += u.length),
                  d ? (d = (d + 1) % 5) : 'rgba(' === u.substr(-5) && (d = 1),
                  c === o[s] || o.length <= s
                    ? (f += c)
                    : (f && (h.push(f), (f = '')),
                      (a = parseFloat(o[s])),
                      h.push(a),
                      (h._firstPT = {
                        _next: h._firstPT,
                        t: h,
                        p: h.length - 1,
                        s: a,
                        c:
                          ('=' === c.charAt(1)
                            ? parseInt(c.charAt(0) + '1', 10) *
                              parseFloat(c.substr(2))
                            : parseFloat(c) - a) || 0,
                        f: 0,
                        m: d && d < 4 ? Math.round : j,
                      })),
                  (p += c.length)
              return (
                (f += e.substr(p)) && h.push(f),
                (h.setRatio = B),
                M.test(e) && (h.end = null),
                h
              )
            },
            U = function (t, e, i, n, o, r, a, s, l) {
              'function' == typeof n && (n = n(l || 0, t))
              var u = typeof t[e],
                c =
                  'function' !== u
                    ? ''
                    : e.indexOf('set') ||
                      'function' != typeof t['get' + e.substr(3)]
                    ? e
                    : 'get' + e.substr(3),
                h = 'get' !== i ? i : c ? (a ? t[c](a) : t[c]()) : t[e],
                p = 'string' == typeof n && '=' === n.charAt(1),
                f = {
                  t: t,
                  p: e,
                  s: h,
                  f: 'function' === u,
                  pg: 0,
                  n: o || e,
                  m: r ? ('function' == typeof r ? r : Math.round) : 0,
                  pr: 0,
                  c: p
                    ? parseInt(n.charAt(0) + '1', 10) * parseFloat(n.substr(2))
                    : parseFloat(n) - h || 0,
                }
              if (
                (('number' != typeof h || ('number' != typeof n && !p)) &&
                  (a ||
                  isNaN(h) ||
                  (!p && isNaN(n)) ||
                  'boolean' == typeof h ||
                  'boolean' == typeof n
                    ? ((f.fp = a),
                      (f = {
                        t: H(
                          h,
                          p
                            ? parseFloat(f.s) +
                                f.c +
                                (f.s + '').replace(/[0-9\-\.]/g, '')
                            : n,
                          s || k.defaultStringFilter,
                          f
                        ),
                        p: 'setRatio',
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: o || e,
                        pr: 0,
                        m: 0,
                      }))
                    : ((f.s = parseFloat(h)),
                      p || (f.c = parseFloat(n) - f.s || 0))),
                f.c)
              )
                return (
                  (f._next = this._firstPT) && (f._next._prev = f),
                  (this._firstPT = f),
                  f
                )
            },
            z = (k._internals = {
              isArray: _,
              isSelector: F,
              lazyTweens: L,
              blobDif: H,
            }),
            G = (k._plugins = {}),
            V = (z.tweenLookup = {}),
            W = 0,
            Y = (z.reservedProps = {
              ease: 1,
              delay: 1,
              overwrite: 1,
              onComplete: 1,
              onCompleteParams: 1,
              onCompleteScope: 1,
              useFrames: 1,
              runBackwards: 1,
              startAt: 1,
              onUpdate: 1,
              onUpdateParams: 1,
              onUpdateScope: 1,
              onStart: 1,
              onStartParams: 1,
              onStartScope: 1,
              onReverseComplete: 1,
              onReverseCompleteParams: 1,
              onReverseCompleteScope: 1,
              onRepeat: 1,
              onRepeatParams: 1,
              onRepeatScope: 1,
              easeParams: 1,
              yoyo: 1,
              immediateRender: 1,
              repeat: 1,
              repeatDelay: 1,
              data: 1,
              paused: 1,
              reversed: 1,
              autoCSS: 1,
              lazy: 1,
              onOverwrite: 1,
              callbackScope: 1,
              stringFilter: 1,
              id: 1,
              yoyoEase: 1,
              stagger: 1,
            }),
            X = {
              none: 0,
              all: 1,
              auto: 2,
              concurrent: 3,
              allOnStart: 4,
              preexisting: 5,
              true: 1,
              false: 0,
            },
            Z = (D._rootFramesTimeline = new I()),
            q = (D._rootTimeline = new I()),
            K = 30,
            J = (z.lazyRender = function () {
              var t,
                e,
                i = L.length
              for (N = {}, t = 0; t < i; t++)
                (e = L[t]) &&
                  !1 !== e._lazy &&
                  (e.render(e._lazy[0], e._lazy[1], !0), (e._lazy = !1))
              L.length = 0
            })
          ;(q._startTime = s.time),
            (Z._startTime = s.frame),
            (q._active = Z._active = !0),
            setTimeout(J, 1),
            (D._updateRoot = k.render =
              function () {
                var t, e, i
                if (
                  (L.length && J(),
                  q.render((s.time - q._startTime) * q._timeScale, !1, !1),
                  Z.render((s.frame - Z._startTime) * Z._timeScale, !1, !1),
                  L.length && J(),
                  s.frame >= K)
                ) {
                  for (i in ((K = s.frame + (parseInt(k.autoSleep, 10) || 120)),
                  V)) {
                    for (t = (e = V[i].tweens).length; --t > -1; )
                      e[t]._gc && e.splice(t, 1)
                    0 === e.length && delete V[i]
                  }
                  if (
                    (!(i = q._first) || i._paused) &&
                    k.autoSleep &&
                    !Z._first &&
                    1 === s._listeners.tick.length
                  ) {
                    for (; i && i._paused; ) i = i._next
                    i || s.sleep()
                  }
                }
              }),
            s.addEventListener('tick', D._updateRoot)
          var Q = function (t, e, i) {
              var n,
                o,
                r = t._gsTweenID
              if (
                (V[r || (t._gsTweenID = r = 't' + W++)] ||
                  (V[r] = { target: t, tweens: [] }),
                e && (((n = V[r].tweens)[(o = n.length)] = e), i))
              )
                for (; --o > -1; ) n[o] === e && n.splice(o, 1)
              return V[r].tweens
            },
            $ = function (t, e, i, n) {
              var o,
                r,
                a = t.vars.onOverwrite
              return (
                a && (o = a(t, e, i, n)),
                (a = k.onOverwrite) && (r = a(t, e, i, n)),
                !1 !== o && !1 !== r
              )
            },
            tt = function (t, e, i, n, o) {
              var r, a, s, l
              if (1 === n || n >= 4) {
                for (l = o.length, r = 0; r < l; r++)
                  if ((s = o[r]) !== e)
                    s._gc || (s._kill(null, t, e) && (a = !0))
                  else if (5 === n) break
                return a
              }
              var u,
                c = e._startTime + 1e-8,
                h = [],
                p = 0,
                f = 0 === e._duration
              for (r = o.length; --r > -1; )
                (s = o[r]) === e ||
                  s._gc ||
                  s._paused ||
                  (s._timeline !== e._timeline
                    ? ((u = u || et(e, 0, f)),
                      0 === et(s, u, f) && (h[p++] = s))
                    : s._startTime <= c &&
                      s._startTime + s.totalDuration() / s._timeScale > c &&
                      (((f || !s._initted) && c - s._startTime <= 2e-8) ||
                        (h[p++] = s)))
              for (r = p; --r > -1; )
                if (
                  ((l = (s = h[r])._firstPT),
                  2 === n && s._kill(i, t, e) && (a = !0),
                  2 !== n || (!s._firstPT && s._initted && l))
                ) {
                  if (2 !== n && !$(s, e)) continue
                  s._enabled(!1, !1) && (a = !0)
                }
              return a
            },
            et = function (t, e, i) {
              for (
                var n = t._timeline, o = n._timeScale, r = t._startTime;
                n._timeline;

              ) {
                if (((r += n._startTime), (o *= n._timeScale), n._paused))
                  return -100
                n = n._timeline
              }
              return (r /= o) > e
                ? r - e
                : (i && r === e) || (!t._initted && r - e < 2e-8)
                ? 1e-8
                : (r += t.totalDuration() / t._timeScale / o) > e + 1e-8
                ? 0
                : r - e - 1e-8
            }
          ;(a._init = function () {
            var t,
              e,
              i,
              n,
              o,
              r,
              a = this.vars,
              s = this._overwrittenProps,
              l = this._duration,
              u = !!a.immediateRender,
              c = a.ease,
              h = this._startAt
            if (a.startAt) {
              for (n in (h && (h.render(-1, !0), h.kill()),
              (o = {}),
              a.startAt))
                o[n] = a.startAt[n]
              if (
                ((o.data = 'isStart'),
                (o.overwrite = !1),
                (o.immediateRender = !0),
                (o.lazy = u && !1 !== a.lazy),
                (o.startAt = o.delay = null),
                (o.onUpdate = a.onUpdate),
                (o.onUpdateParams = a.onUpdateParams),
                (o.onUpdateScope = a.onUpdateScope || a.callbackScope || this),
                (this._startAt = k.to(this.target || {}, 0, o)),
                u)
              )
                if (this._time > 0) this._startAt = null
                else if (0 !== l) return
            } else if (a.runBackwards && 0 !== l)
              if (h) h.render(-1, !0), h.kill(), (this._startAt = null)
              else {
                for (n in (0 !== this._time && (u = !1), (i = {}), a))
                  (Y[n] && 'autoCSS' !== n) || (i[n] = a[n])
                if (
                  ((i.overwrite = 0),
                  (i.data = 'isFromStart'),
                  (i.lazy = u && !1 !== a.lazy),
                  (i.immediateRender = u),
                  (this._startAt = k.to(this.target, 0, i)),
                  u)
                ) {
                  if (0 === this._time) return
                } else
                  this._startAt._init(),
                    this._startAt._enabled(!1),
                    this.vars.immediateRender && (this._startAt = null)
              }
            if (
              ((this._ease = c =
                c
                  ? c instanceof C
                    ? c
                    : 'function' == typeof c
                    ? new C(c, a.easeParams)
                    : w[c] || k.defaultEase
                  : k.defaultEase),
              a.easeParams instanceof Array &&
                c.config &&
                (this._ease = c.config.apply(c, a.easeParams)),
              (this._easeType = this._ease._type),
              (this._easePower = this._ease._power),
              (this._firstPT = null),
              this._targets)
            )
              for (r = this._targets.length, t = 0; t < r; t++)
                this._initProps(
                  this._targets[t],
                  (this._propLookup[t] = {}),
                  this._siblings[t],
                  s ? s[t] : null,
                  t
                ) && (e = !0)
            else
              e = this._initProps(
                this.target,
                this._propLookup,
                this._siblings,
                s,
                0
              )
            if (
              (e && k._onPluginEvent('_onInitAllProps', this),
              s &&
                (this._firstPT ||
                  ('function' != typeof this.target && this._enabled(!1, !1))),
              a.runBackwards)
            )
              for (i = this._firstPT; i; )
                (i.s += i.c), (i.c = -i.c), (i = i._next)
            ;(this._onUpdate = a.onUpdate), (this._initted = !0)
          }),
            (a._initProps = function (e, i, n, o, r) {
              var a, s, l, u, c, h
              if (null == e) return !1
              for (a in (N[e._gsTweenID] && J(),
              this.vars.css ||
                (e.style &&
                  e !== t &&
                  e.nodeType &&
                  G.css &&
                  !1 !== this.vars.autoCSS &&
                  (function (t, e) {
                    var i,
                      n = {}
                    for (i in t)
                      Y[i] ||
                        (i in e &&
                          'transform' !== i &&
                          'x' !== i &&
                          'y' !== i &&
                          'width' !== i &&
                          'height' !== i &&
                          'className' !== i &&
                          'border' !== i) ||
                        !(!G[i] || (G[i] && G[i]._autoCSS)) ||
                        ((n[i] = t[i]), delete t[i])
                    t.css = n
                  })(this.vars, e)),
              this.vars))
                if (((h = this.vars[a]), Y[a]))
                  h &&
                    (h instanceof Array || (h.push && _(h))) &&
                    -1 !== h.join('').indexOf('{self}') &&
                    (this.vars[a] = h = this._swapSelfInParams(h, this))
                else if (
                  G[a] &&
                  (u = new G[a]())._onInitTween(e, this.vars[a], this, r)
                ) {
                  for (
                    this._firstPT = c =
                      {
                        _next: this._firstPT,
                        t: u,
                        p: 'setRatio',
                        s: 0,
                        c: 1,
                        f: 1,
                        n: a,
                        pg: 1,
                        pr: u._priority,
                        m: 0,
                      },
                      s = u._overwriteProps.length;
                    --s > -1;

                  )
                    i[u._overwriteProps[s]] = this._firstPT
                  ;(u._priority || u._onInitAllProps) && (l = !0),
                    (u._onDisable || u._onEnable) &&
                      (this._notifyPluginsOfEnabled = !0),
                    c._next && (c._next._prev = c)
                } else
                  i[a] = U.call(
                    this,
                    e,
                    a,
                    'get',
                    h,
                    a,
                    0,
                    null,
                    this.vars.stringFilter,
                    r
                  )
              return o && this._kill(o, e)
                ? this._initProps(e, i, n, o, r)
                : this._overwrite > 1 &&
                  this._firstPT &&
                  n.length > 1 &&
                  tt(e, this, i, this._overwrite, n)
                ? (this._kill(i, e), this._initProps(e, i, n, o, r))
                : (this._firstPT &&
                    ((!1 !== this.vars.lazy && this._duration) ||
                      (this.vars.lazy && !this._duration)) &&
                    (N[e._gsTweenID] = !0),
                  l)
            }),
            (a.render = function (t, e, i) {
              var n,
                o,
                r,
                a,
                s = this._time,
                l = this._duration,
                u = this._rawPrevTime
              if (t >= l - 1e-8 && t >= 0)
                (this._totalTime = this._time = l),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(1)
                    : 1),
                  this._reversed ||
                    ((n = !0),
                    (o = 'onComplete'),
                    (i = i || this._timeline.autoRemoveChildren)),
                  0 === l &&
                    (this._initted || !this.vars.lazy || i) &&
                    (this._startTime === this._timeline._duration && (t = 0),
                    (u < 0 ||
                      (t <= 0 && t >= -1e-8) ||
                      (1e-8 === u && 'isPause' !== this.data)) &&
                      u !== t &&
                      ((i = !0), u > 1e-8 && (o = 'onReverseComplete')),
                    (this._rawPrevTime = a = !e || t || u === t ? t : 1e-8))
              else if (t < 1e-8)
                (this._totalTime = this._time = 0),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(0)
                    : 0),
                  (0 !== s || (0 === l && u > 0)) &&
                    ((o = 'onReverseComplete'), (n = this._reversed)),
                  t > -1e-8
                    ? (t = 0)
                    : t < 0 &&
                      ((this._active = !1),
                      0 === l &&
                        (this._initted || !this.vars.lazy || i) &&
                        (u >= 0 &&
                          (1e-8 !== u || 'isPause' !== this.data) &&
                          (i = !0),
                        (this._rawPrevTime = a =
                          !e || t || u === t ? t : 1e-8))),
                  (!this._initted ||
                    (this._startAt && this._startAt.progress())) &&
                    (i = !0)
              else if (((this._totalTime = this._time = t), this._easeType)) {
                var c = t / l,
                  h = this._easeType,
                  p = this._easePower
                ;(1 === h || (3 === h && c >= 0.5)) && (c = 1 - c),
                  3 === h && (c *= 2),
                  1 === p
                    ? (c *= c)
                    : 2 === p
                    ? (c *= c * c)
                    : 3 === p
                    ? (c *= c * c * c)
                    : 4 === p && (c *= c * c * c * c),
                  (this.ratio =
                    1 === h
                      ? 1 - c
                      : 2 === h
                      ? c
                      : t / l < 0.5
                      ? c / 2
                      : 1 - c / 2)
              } else this.ratio = this._ease.getRatio(t / l)
              if (this._time !== s || i) {
                if (!this._initted) {
                  if ((this._init(), !this._initted || this._gc)) return
                  if (
                    !i &&
                    this._firstPT &&
                    ((!1 !== this.vars.lazy && this._duration) ||
                      (this.vars.lazy && !this._duration))
                  )
                    return (
                      (this._time = this._totalTime = s),
                      (this._rawPrevTime = u),
                      L.push(this),
                      void (this._lazy = [t, e])
                    )
                  this._time && !n
                    ? (this.ratio = this._ease.getRatio(this._time / l))
                    : n &&
                      this._ease._calcEnd &&
                      (this.ratio = this._ease.getRatio(
                        0 === this._time ? 0 : 1
                      ))
                }
                for (
                  !1 !== this._lazy && (this._lazy = !1),
                    this._active ||
                      (!this._paused &&
                        this._time !== s &&
                        t >= 0 &&
                        (this._active = !0)),
                    0 === s &&
                      (this._startAt &&
                        (t >= 0
                          ? this._startAt.render(t, !0, i)
                          : o || (o = '_dummyGS')),
                      this.vars.onStart &&
                        ((0 === this._time && 0 !== l) ||
                          e ||
                          this._callback('onStart'))),
                    r = this._firstPT;
                  r;

                )
                  r.f
                    ? r.t[r.p](r.c * this.ratio + r.s)
                    : (r.t[r.p] = r.c * this.ratio + r.s),
                    (r = r._next)
                this._onUpdate &&
                  (t < 0 &&
                    this._startAt &&
                    -1e-4 !== t &&
                    this._startAt.render(t, !0, i),
                  e ||
                    ((this._time !== s || n || i) &&
                      this._callback('onUpdate'))),
                  o &&
                    ((this._gc && !i) ||
                      (t < 0 &&
                        this._startAt &&
                        !this._onUpdate &&
                        -1e-4 !== t &&
                        this._startAt.render(t, !0, i),
                      n &&
                        (this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[o] && this._callback(o),
                      0 === l &&
                        1e-8 === this._rawPrevTime &&
                        1e-8 !== a &&
                        (this._rawPrevTime = 0)))
              }
            }),
            (a._kill = function (t, e, i) {
              if (
                ('all' === t && (t = null),
                null == t && (null == e || e === this.target))
              )
                return (this._lazy = !1), this._enabled(!1, !1)
              e =
                'string' != typeof e
                  ? e || this._targets || this.target
                  : k.selector(e) || e
              var n,
                o,
                r,
                a,
                s,
                l,
                u,
                c,
                h,
                p =
                  i &&
                  this._time &&
                  i._startTime === this._startTime &&
                  this._timeline === i._timeline,
                f = this._firstPT
              if ((_(e) || F(e)) && 'number' != typeof e[0])
                for (n = e.length; --n > -1; )
                  this._kill(t, e[n], i) && (l = !0)
              else {
                if (this._targets) {
                  for (n = this._targets.length; --n > -1; )
                    if (e === this._targets[n]) {
                      ;(s = this._propLookup[n] || {}),
                        (this._overwrittenProps = this._overwrittenProps || []),
                        (o = this._overwrittenProps[n] =
                          t ? this._overwrittenProps[n] || {} : 'all')
                      break
                    }
                } else {
                  if (e !== this.target) return !1
                  ;(s = this._propLookup),
                    (o = this._overwrittenProps =
                      t ? this._overwrittenProps || {} : 'all')
                }
                if (s) {
                  if (
                    ((u = t || s),
                    (c =
                      t !== o &&
                      'all' !== o &&
                      t !== s &&
                      ('object' != typeof t || !t._tempKill)),
                    i && (k.onOverwrite || this.vars.onOverwrite))
                  ) {
                    for (r in u) s[r] && (h || (h = []), h.push(r))
                    if ((h || !t) && !$(this, i, e, h)) return !1
                  }
                  for (r in u)
                    (a = s[r]) &&
                      (p && (a.f ? a.t[a.p](a.s) : (a.t[a.p] = a.s), (l = !0)),
                      a.pg && a.t._kill(u) && (l = !0),
                      (a.pg && 0 !== a.t._overwriteProps.length) ||
                        (a._prev
                          ? (a._prev._next = a._next)
                          : a === this._firstPT && (this._firstPT = a._next),
                        a._next && (a._next._prev = a._prev),
                        (a._next = a._prev = null)),
                      delete s[r]),
                      c && (o[r] = 1)
                  !this._firstPT && this._initted && f && this._enabled(!1, !1)
                }
              }
              return l
            }),
            (a.invalidate = function () {
              this._notifyPluginsOfEnabled &&
                k._onPluginEvent('_onDisable', this)
              var t = this._time
              return (
                (this._firstPT =
                  this._overwrittenProps =
                  this._startAt =
                  this._onUpdate =
                    null),
                (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                (this._propLookup = this._targets ? {} : []),
                D.prototype.invalidate.call(this),
                this.vars.immediateRender &&
                  ((this._time = -1e-8),
                  this.render(t, !1, !1 !== this.vars.lazy)),
                this
              )
            }),
            (a._enabled = function (t, e) {
              if ((l || s.wake(), t && this._gc)) {
                var i,
                  n = this._targets
                if (n)
                  for (i = n.length; --i > -1; )
                    this._siblings[i] = Q(n[i], this, !0)
                else this._siblings = Q(this.target, this, !0)
              }
              return (
                D.prototype._enabled.call(this, t, e),
                !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
                  k._onPluginEvent(t ? '_onEnable' : '_onDisable', this)
              )
            }),
            (k.to = function (t, e, i) {
              return new k(t, e, i)
            }),
            (k.from = function (t, e, i) {
              return (
                (i.runBackwards = !0),
                (i.immediateRender = 0 != i.immediateRender),
                new k(t, e, i)
              )
            }),
            (k.fromTo = function (t, e, i, n) {
              return (
                (n.startAt = i),
                (n.immediateRender =
                  0 != n.immediateRender && 0 != i.immediateRender),
                new k(t, e, n)
              )
            }),
            (k.delayedCall = function (t, e, i, n, o) {
              return new k(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: o,
                overwrite: 0,
              })
            }),
            (k.set = function (t, e) {
              return new k(t, 0, e)
            }),
            (k.getTweensOf = function (t, e) {
              if (null == t) return []
              var i, n, o, r
              if (
                ((t = 'string' != typeof t ? t : k.selector(t) || t),
                (_(t) || F(t)) && 'number' != typeof t[0])
              ) {
                for (i = t.length, n = []; --i > -1; )
                  n = n.concat(k.getTweensOf(t[i], e))
                for (i = n.length; --i > -1; )
                  for (r = n[i], o = i; --o > -1; ) r === n[o] && n.splice(i, 1)
              } else if (t._gsTweenID)
                for (i = (n = Q(t).concat()).length; --i > -1; )
                  (n[i]._gc || (e && !n[i].isActive())) && n.splice(i, 1)
              return n || []
            }),
            (k.killTweensOf = k.killDelayedCallsTo =
              function (t, e, i) {
                'object' == typeof e && ((i = e), (e = !1))
                for (var n = k.getTweensOf(t, e), o = n.length; --o > -1; )
                  n[o]._kill(i, t)
              })
          var it = v(
            'plugins.TweenPlugin',
            function (t, e) {
              ;(this._overwriteProps = (t || '').split(',')),
                (this._propName = this._overwriteProps[0]),
                (this._priority = e || 0),
                (this._super = it.prototype)
            },
            !0
          )
          if (
            ((a = it.prototype),
            (it.version = '1.19.0'),
            (it.API = 2),
            (a._firstPT = null),
            (a._addTween = U),
            (a.setRatio = B),
            (a._kill = function (t) {
              var e,
                i = this._overwriteProps,
                n = this._firstPT
              if (null != t[this._propName]) this._overwriteProps = []
              else
                for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1)
              for (; n; )
                null != t[n.n] &&
                  (n._next && (n._next._prev = n._prev),
                  n._prev
                    ? ((n._prev._next = n._next), (n._prev = null))
                    : this._firstPT === n && (this._firstPT = n._next)),
                  (n = n._next)
              return !1
            }),
            (a._mod = a._roundProps =
              function (t) {
                for (var e, i = this._firstPT; i; )
                  (e =
                    t[this._propName] ||
                    (null != i.n &&
                      t[i.n.split(this._propName + '_').join('')])) &&
                    'function' == typeof e &&
                    (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)),
                    (i = i._next)
              }),
            (k._onPluginEvent = function (t, e) {
              var i,
                n,
                o,
                r,
                a,
                s = e._firstPT
              if ('_onInitAllProps' === t) {
                for (; s; ) {
                  for (a = s._next, n = o; n && n.pr > s.pr; ) n = n._next
                  ;(s._prev = n ? n._prev : r) ? (s._prev._next = s) : (o = s),
                    (s._next = n) ? (n._prev = s) : (r = s),
                    (s = a)
                }
                s = e._firstPT = o
              }
              for (; s; )
                s.pg && 'function' == typeof s.t[t] && s.t[t]() && (i = !0),
                  (s = s._next)
              return i
            }),
            (it.activate = function (t) {
              for (var e = t.length; --e > -1; )
                t[e].API === it.API && (G[new t[e]()._propName] = t[e])
              return !0
            }),
            (y.plugin = function (t) {
              if (!(t && t.propName && t.init && t.API))
                throw 'illegal plugin definition.'
              var e,
                i = t.propName,
                n = t.priority || 0,
                o = t.overwriteProps,
                r = {
                  init: '_onInitTween',
                  set: 'setRatio',
                  kill: '_kill',
                  round: '_mod',
                  mod: '_mod',
                  initAll: '_onInitAllProps',
                },
                a = v(
                  'plugins.' +
                    i.charAt(0).toUpperCase() +
                    i.substr(1) +
                    'Plugin',
                  function () {
                    it.call(this, i, n), (this._overwriteProps = o || [])
                  },
                  !0 === t.global
                ),
                s = (a.prototype = new it(i))
              for (e in ((s.constructor = a), (a.API = t.API), r))
                'function' == typeof t[e] && (s[r[e]] = t[e])
              return (a.version = t.version), it.activate([a]), a
            }),
            (o = t._gsQueue))
          ) {
            for (r = 0; r < o.length; r++) o[r]()
            for (a in g)
              g[a].func ||
                t.console.log('GSAP encountered missing dependency: ' + a)
          }
          return (l = !1), k
        })(o),
        a = o.GreenSockGlobals,
        s = a.com.greensock,
        l = s.core.SimpleTimeline,
        u = s.core.Animation,
        c = a.Ease,
        h = a.Linear,
        p = h,
        f = a.Power1,
        d = a.Power2,
        _ = a.Power3,
        g = a.Power4,
        m = a.TweenPlugin
      s.events.EventDispatcher
    }.call(this, i(187)(t), i(75)))
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.UIComponent = void 0)
    var n = i(45),
      o = i(184),
      r = i(185),
      a = i(70),
      s = i(186),
      l = i(4),
      u = (function () {
        function t(t) {
          void 0 === t && (t = null),
            (this._elementName = t),
            (this._children = []),
            (this.onAddedToStageSignal = new l.Signal()),
            (this.onRemovedFromStageSignal = new l.Signal()),
            (this.onStyleAppliedSignal = new l.Signal()),
            (this.onStageResizeSignal = new l.Signal()),
            this._elementName || (this._elementName = 'ui-component'),
            this.initView(),
            this.initNativeEventsControllers(),
            this.initStyleController(),
            this.initDOMOberver()
        }
        return (
          Object.defineProperty(t.prototype, 'view', {
            get: function () {
              return this._view
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'transform', {
            get: function () {
              return this._styleController
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'children', {
            get: function () {
              return this._children
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'isStaged', {
            get: function () {
              return (
                !(!document || !document.body) &&
                document.body.contains(this.view)
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'interactive', {
            get: function () {
              return 'none' != this._view.style.pointerEvents
            },
            set: function (t) {
              ;(this._view.style.pointerEvents = t ? 'auto' : 'none'),
                n.DeviceUtils.IS_IE &&
                  (this._view.onclick = t
                    ? null
                    : function (t) {
                        t.preventDefault()
                      })
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.addNativeListener = function (t, e, i) {
            return this._nativeViewEvents.addListener(t, e, i)
          }),
          (t.prototype.removeNativeListener = function (t) {
            this._nativeViewEvents.removeListener(t)
          }),
          (t.prototype.removeAllNativeListeners = function () {
            this._nativeViewEvents.removeAllListeners()
          }),
          (t.prototype.destroy = function (t) {
            void 0 === t && (t = !0),
              t &&
                this.children.forEach(function (t) {
                  setTimeout(function () {
                    t.destroy()
                  }, 1)
                }),
              this.onAddedToStageSignal.removeAll(),
              this.onRemovedFromStageSignal.removeAll(),
              this.onStyleAppliedSignal.removeAll(),
              this.onStageResizeSignal.removeAll(),
              this._nativeViewEvents.destroy(),
              this._nativeWindowEvents.destroy(),
              this._domObserver.destroy(),
              this.view && (this._view.remove(), (this._view = null))
          }),
          (t.prototype.applyStyle = function (t) {
            this._styleController.applyStyle(t),
              this.onStyleAppliedSignal.dispatch()
          }),
          (t.prototype.addChild = function (t) {
            ;-1 == this._children.indexOf(t) && this._children.push(t),
              this._view.appendChild(t.view)
          }),
          (t.prototype.addChildAt = function (t, e) {
            ;-1 != this._children.indexOf(t) &&
              this._children.splice(this._children.indexOf(t), 1),
              this._children.splice(e, 0, t),
              this._view.insertBefore(t.view, this.view.childNodes[e])
          }),
          (t.prototype.removeChild = function (t, e, i) {
            void 0 === e && (e = !1), void 0 === i && (i = !0)
            var n = this._children.indexOf(t)
            ;-1 != n && this._children.splice(n, 1),
              t.view &&
                t.view.parentElement &&
                t.view.parentElement.removeChild(t.view),
              e && t.destroy(i)
          }),
          (t.prototype.removeAllChildren = function (t, e) {
            for (
              void 0 === t && (t = !1), void 0 === e && (e = !0);
              this.children.length > 0;

            ) {
              var i = this.children[this.children.length - 1]
              this.removeChild(i, t, e)
            }
          }),
          (t.prototype.updateStyles = function () {}),
          (t.prototype.initView = function () {
            'string' == typeof this._elementName
              ? (r.CustomElementsUtils.isHTML5Element(this._elementName) ||
                  r.CustomElementsUtils.defineCustomElement(this._elementName),
                (this._view = document.createElement(this._elementName)))
              : this._elementName instanceof HTMLElement &&
                (this._view = this._elementName)
          }),
          (t.prototype.initNativeEventsControllers = function () {
            var t = this
            ;(this._nativeViewEvents = new a.NativeEventsController(
              this._view
            )),
              (this._nativeWindowEvents = new a.NativeEventsController(window)),
              this._nativeWindowEvents.addListener('resize', function () {
                return t.onStageResized()
              })
          }),
          (t.prototype.initStyleController = function () {
            ;(this._styleController = new o.NativeStylesController(this._view)),
              'string' != typeof this._elementName ||
                r.CustomElementsUtils.isHTML5Element(this._elementName) ||
                this._styleController.applyStyle({ display: 'block' })
          }),
          (t.prototype.initDOMOberver = function () {
            var t = this
            ;(this._domObserver = new s.DOMObserver(this._view)),
              this._domObserver.onAddedToStageSignal.add(function () {
                return t.onAddedToStage()
              }),
              this._domObserver.onRemovedFromStageSignal.add(function () {
                return t.onRemovedFromStage()
              })
          }),
          (t.prototype.onStageResized = function () {
            this.updateStyles(), this.onStageResizeSignal.dispatch()
          }),
          (t.prototype.onAddedToStage = function () {
            this.updateStyles(), this.onAddedToStageSignal.dispatch()
          }),
          (t.prototype.onRemovedFromStage = function () {
            this.onRemovedFromStageSignal.dispatch()
          }),
          t
        )
      })()
    e.UIComponent = u
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.Size = void 0)
    var n = i(3),
      o = i(44),
      r = i(10),
      a = (function () {
        function t() {}
        return (
          Object.defineProperty(t, 'APP_WIDTH', {
            get: function () {
              return n.AppConfig.APP_CONTAINER_ELEMENT.offsetWidth
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'APP_HEIGHT', {
            get: function () {
              return n.AppConfig.APP_CONTAINER_ELEMENT.offsetHeight
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'APP_SIZE_FACTOR', {
            get: function () {
              var e = o.MathUtils.calcProgressWithinValues(
                  320,
                  1200,
                  t.APP_WIDTH
                ),
                i = o.MathUtils.calcProgressWithinValues(320, 950, t.APP_HEIGHT)
              return i < e ? i : e
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'HEADER_HEIGHT', {
            get: function () {
              return 4 * t.CONTENT_MARGIN
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'NAVIGATION_BAR_HEIGHT', {
            get: function () {
              return 44
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'NAVIGATION_BAR_DOT_SIZE', {
            get: function () {
              return 7
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'NAVIAGTION_MARGIN', {
            get: function () {
              return 0.5 * (t.APP_WIDTH - t.NAVIGATION_WIDTH)
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'NAVIGATION_BIG_ARROW_MARGIN', {
            get: function () {
              return t.APP_WIDTH >= 1200
                ? t.NAVIAGTION_MARGIN - (50 * t.APP_SIZE_FACTOR + 5)
                : t.NAVIAGTION_MARGIN - (25 * t.APP_SIZE_FACTOR + 5)
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'NAVIGATION_WIDTH', {
            get: function () {
              return t.APP_WIDTH > 1590
                ? 1248
                : t.APP_WIDTH >= 1200
                ? e(1200, 1590, 944, 1248)
                : t.APP_WIDTH >= 992
                ? e(992, 1199, 900, 1088)
                : t.APP_WIDTH >= 320
                ? e(320, 991, 290, 900)
                : t.APP_WIDTH - 30
              function e(e, i, n, r) {
                return (
                  n +
                  (r - n) *
                    o.MathUtils.calcProgressWithinValues(e, i, t.APP_WIDTH)
                )
              }
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'MIN_CONTENT_POSITION_WIDTH', {
            get: function () {
              return 300 * t.APP_SIZE_FACTOR + 200
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'MIN_CONTENT_POSITION_HEIGHT', {
            get: function () {
              return 150 * t.APP_SIZE_FACTOR + 150
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'MAX_CONTENT_POSITION_HEIGHT', {
            get: function () {
              return 200 * t.APP_SIZE_FACTOR + 200
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'CONTENT_MARGIN', {
            get: function () {
              return 10 * t.APP_SIZE_FACTOR + 15
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'TOPIC_OFFSET_Y', {
            get: function () {
              return 20 * t.APP_SIZE_FACTOR + 20
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'CLOSE_ICON_SIZE', {
            get: function () {
              return r.Font.H1_FONTSIZE
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'CONTENT_TYPE_ICON_SIZE', {
            get: function () {
              return 49 * t.APP_SIZE_FACTOR + 19
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'PROFILE_ICON_SIZE', {
            get: function () {
              return 10 * t.APP_SIZE_FACTOR + 33
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        )
      })()
    e.Size = a
  },
  function (t, e, i) {
    ;('use strict')
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.AppConfig = void 0)
    var n = i(2),
      o = i(23),
      r = i(6),
      a = (function () {
        function t() {}
        return (
          Object.defineProperty(t, 'TOPIC_MOUSE_ROTATE_FACTOR', {
            get: function () {
              return (
                (1 - n.Size.APP_SIZE_FACTOR) * t.TOPIC_MOUSE_ROTATE_VALUE * 2 +
                t.TOPIC_MOUSE_ROTATE_VALUE
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.EASY_XDM_MIN_HEIGHT = 550),
          (t.FLOCKLER_SITE_ID = o.URLUtils.getUrlParam('site', '7659')),
          (t.FLOCKLER_API =
            'http://10.192.3.37:3001/api/en/' + t.FLOCKLER_SITE_ID),
          (t.TOPIC_BACKGROUND_IMAGE_KEY = '_background-image_'),
          (t.SHOW_EDITOR_WARNINGS = !1),
          (t.USE_CACHED_PROXY_MEDIA = !0),
          (t.CACHED_MEDIA_PATH = 'https://d3anuxel1dwdon.cloudfront.net/'),
          (t.ORIGINAL_MEDIA_PATHES = [
            'https://pbs.twimg.com/',
            'https://scontent.xx.fbcdn.net/',
            'https://i.ytimg.com/',
            'https://media.licdn.com/',
            'https://fcld-assets.azureedge.net/',
          ]),
          (t.HIGHLIGHT_COLOR =
            '#' +
            o.URLUtils.getUrlParam('color', r.Color.YELLOW).replace('#', '')),
          (t.BACKGROUND_DARKNESS = 0.4),
          (t.TOPIC_CHANGE_DURATION = 1.7),
          (t.TOPIC_ITEM_SWITCH_DURATION = 1.9),
          (t.TOPIC_ITEM_CONTENT_EXPAND_DURATION = 1.5),
          (t.TOPIC_MOUSE_ROTATE_VALUE = 0.005),
          (t.TOPIC_MOUSE_TRANSLATE_FACTOR = 0.05),
          (t.TOPIC_ITEM_MOUSE_TRANSLATE_FACTOR = 0.1),
          t
        )
      })()
    e.AppConfig = a
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.Signal = void 0)
    var n = (function () {
      function t() {
        this._listeners = []
      }
      return (
        (t.prototype.add = function (t) {
          return (
            this.callbackAlreadyExists(t) ||
              this._listeners.push({ callback: t }),
            t
          )
        }),
        (t.prototype.addOnce = function (t) {
          return (
            this.callbackAlreadyExists(t) ||
              this._listeners.push({ callback: t, onlyOnce: !0 }),
            t
          )
        }),
        (t.prototype.remove = function (t) {
          var e = void 0
          this._listeners.forEach(function (i, n) {
            i.callback == t && (e = n)
          }),
            null != e && this._listeners.splice(e, 1)
        }),
        (t.prototype.removeAll = function () {
          this._listeners = []
        }),
        (t.prototype.dispatch = function (t) {
          var e = this
          this._listeners.forEach(function (i) {
            i.callback(t), i.onlyOnce && e.remove(i.callback)
          })
        }),
        (t.prototype.callbackAlreadyExists = function (t) {
          var e = !1
          return (
            this._listeners.forEach(function (i) {
              i.callback == t && (e = !0)
            }),
            e
          )
        }),
        t
      )
    })()
    e.Signal = n
  },
  function (t, e, i) {
    'use strict'
    i.r(e),
      i.d(e, 'default', function () {
        return B
      }),
      i.d(e, 'TweenLite', function () {
        return n.l
      }),
      i.d(e, 'TweenMax', function () {
        return B
      }),
      i.d(e, 'TimelineLite', function () {
        return o
      }),
      i.d(e, 'TimelineMax', function () {
        return r
      }),
      i.d(e, 'CSSPlugin', function () {
        return s
      }),
      i.d(e, 'AttrPlugin', function () {
        return l
      }),
      i.d(e, 'BezierPlugin', function () {
        return O
      }),
      i.d(e, 'RoundPropsPlugin', function () {
        return u
      }),
      i.d(e, 'DirectionalRotationPlugin', function () {
        return f
      }),
      i.d(e, 'TweenPlugin', function () {
        return n.j
      }),
      i.d(e, 'Ease', function () {
        return n.b
      }),
      i.d(e, 'Power0', function () {
        return n.d
      }),
      i.d(e, 'Power1', function () {
        return n.e
      }),
      i.d(e, 'Power2', function () {
        return n.f
      }),
      i.d(e, 'Power3', function () {
        return n.g
      }),
      i.d(e, 'Power4', function () {
        return n.h
      }),
      i.d(e, 'Linear', function () {
        return n.c
      }),
      i.d(e, 'Back', function () {
        return x
      }),
      i.d(e, 'Elastic', function () {
        return D
      }),
      i.d(e, 'Bounce', function () {
        return P
      }),
      i.d(e, 'RoughEase', function () {
        return I
      }),
      i.d(e, 'SlowMo', function () {
        return k
      }),
      i.d(e, 'SteppedEase', function () {
        return F
      }),
      i.d(e, 'Circ', function () {
        return L
      }),
      i.d(e, 'Expo', function () {
        return N
      }),
      i.d(e, 'Sine', function () {
        return R
      }),
      i.d(e, 'ExpoScaleEase', function () {
        return M
      }),
      i.d(e, '_gsScope', function () {
        return n.k
      })
    var n = i(0)
    /*!
     * VERSION: 2.1.3
     * DATE: 2019-05-17
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */ n.k._gsDefine(
      'TimelineLite',
      ['core.Animation', 'core.SimpleTimeline', 'TweenLite'],
      function () {
        var t = function (t) {
            n.i.call(this, t)
            var e,
              i,
              o = this.vars
            for (i in ((this._labels = {}),
            (this.autoRemoveChildren = !!o.autoRemoveChildren),
            (this.smoothChildTiming = !!o.smoothChildTiming),
            (this._sortChildren = !0),
            (this._onUpdate = o.onUpdate),
            o))
              (e = o[i]),
                r(e) &&
                  -1 !== e.join('').indexOf('{self}') &&
                  (o[i] = this._swapSelfInParams(e))
            r(o.tweens) && this.add(o.tweens, 0, o.align, o.stagger)
          },
          e = n.l._internals,
          i = (t._internals = {}),
          o = e.isSelector,
          r = e.isArray,
          a = e.lazyTweens,
          s = e.lazyRender,
          l = n.k._gsDefine.globals,
          u = function (t) {
            var e,
              i = {}
            for (e in t) i[e] = t[e]
            return i
          },
          c = function (t, e, i) {
            var n,
              o,
              r = t.cycle
            for (n in r)
              (o = r[n]),
                (t[n] =
                  'function' == typeof o ? o(i, e[i], e) : o[i % o.length])
            delete t.cycle
          },
          h = (i.pauseCallback = function () {}),
          p = function (t, e, i, n) {
            var o = 'immediateRender'
            return o in e || (e[o] = !((i && !1 === i[o]) || n)), e
          },
          f = function (t) {
            if ('function' == typeof t) return t
            var e = 'object' == typeof t ? t : { each: t },
              i = e.ease,
              n = e.from || 0,
              o = e.base || 0,
              r = {},
              a = isNaN(n),
              s = e.axis,
              l = { center: 0.5, end: 1 }[n] || 0
            return function (t, u, c) {
              var h,
                p,
                f,
                d,
                _,
                g,
                m,
                y,
                v,
                b = (c || e).length,
                C = r[b]
              if (!C) {
                if (!(v = 'auto' === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                  for (
                    m = -1 / 0;
                    m < (m = c[v++].getBoundingClientRect().left) && v < b;

                  );
                  v--
                }
                for (
                  C = r[b] = [],
                    h = a ? Math.min(v, b) * l - 0.5 : n % v,
                    p = a ? (b * l) / v - 0.5 : (n / v) | 0,
                    m = 0,
                    y = 1 / 0,
                    g = 0;
                  g < b;
                  g++
                )
                  (f = (g % v) - h),
                    (d = p - ((g / v) | 0)),
                    (C[g] = _ =
                      s
                        ? Math.abs('y' === s ? d : f)
                        : Math.sqrt(f * f + d * d)),
                    _ > m && (m = _),
                    _ < y && (y = _)
                ;(C.max = m - y),
                  (C.min = y),
                  (C.v = b =
                    e.amount ||
                    e.each *
                      (v > b
                        ? b - 1
                        : s
                        ? 'y' === s
                          ? b / v
                          : v
                        : Math.max(v, b / v)) ||
                    0),
                  (C.b = b < 0 ? o - b : o)
              }
              return (
                (b = (C[t] - C.min) / C.max),
                C.b + (i ? i.getRatio(b) : b) * C.v
              )
            }
          },
          d = (t.prototype = new n.i())
        return (
          (t.version = '2.1.3'),
          (t.distribute = f),
          (d.constructor = t),
          (d.kill()._gc = d._forcingPlayhead = d._hasPause = !1),
          (d.to = function (t, e, i, o) {
            var r = (i.repeat && l.TweenMax) || n.l
            return e ? this.add(new r(t, e, i), o) : this.set(t, i, o)
          }),
          (d.from = function (t, e, i, o) {
            return this.add(
              ((i.repeat && l.TweenMax) || n.l).from(t, e, p(0, i)),
              o
            )
          }),
          (d.fromTo = function (t, e, i, o, r) {
            var a = (o.repeat && l.TweenMax) || n.l
            return (
              (o = p(0, o, i)),
              e ? this.add(a.fromTo(t, e, i, o), r) : this.set(t, o, r)
            )
          }),
          (d.staggerTo = function (e, i, r, a, s, l, h, p) {
            var d,
              _,
              g = new t({
                onComplete: l,
                onCompleteParams: h,
                callbackScope: p,
                smoothChildTiming: this.smoothChildTiming,
              }),
              m = f(r.stagger || a),
              y = r.startAt,
              v = r.cycle
            for (
              'string' == typeof e && (e = n.l.selector(e) || e),
                o((e = e || [])) &&
                  (e = (function (t) {
                    var e,
                      i = [],
                      n = t.length
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                  })(e)),
                _ = 0;
              _ < e.length;
              _++
            )
              (d = u(r)),
                y && ((d.startAt = u(y)), y.cycle && c(d.startAt, e, _)),
                v &&
                  (c(d, e, _),
                  null != d.duration && ((i = d.duration), delete d.duration)),
                g.to(e[_], i, d, m(_, e[_], e))
            return this.add(g, s)
          }),
          (d.staggerFrom = function (t, e, i, n, o, r, a, s) {
            return (
              (i.runBackwards = !0),
              this.staggerTo(t, e, p(0, i), n, o, r, a, s)
            )
          }),
          (d.staggerFromTo = function (t, e, i, n, o, r, a, s, l) {
            return (
              (n.startAt = i), this.staggerTo(t, e, p(0, n, i), o, r, a, s, l)
            )
          }),
          (d.call = function (t, e, i, o) {
            return this.add(n.l.delayedCall(0, t, e, i), o)
          }),
          (d.set = function (t, e, i) {
            return this.add(new n.l(t, 0, p(0, e, null, !0)), i)
          }),
          (t.exportRoot = function (e, i) {
            null == (e = e || {}).smoothChildTiming &&
              (e.smoothChildTiming = !0)
            var o,
              r,
              a,
              s,
              l = new t(e),
              u = l._timeline
            for (
              null == i && (i = !0),
                u._remove(l, !0),
                l._startTime = 0,
                l._rawPrevTime = l._time = l._totalTime = u._time,
                a = u._first;
              a;

            )
              (s = a._next),
                (i && a instanceof n.l && a.target === a.vars.onComplete) ||
                  ((r = a._startTime - a._delay) < 0 && (o = 1), l.add(a, r)),
                (a = s)
            return u.add(l, 0), o && l.totalDuration(), l
          }),
          (d.add = function (e, i, o, a) {
            var s, l, u, c, h, p
            if (
              ('number' != typeof i &&
                (i = this._parseTimeOrLabel(i, 0, !0, e)),
              !(e instanceof n.a))
            ) {
              if (e instanceof Array || (e && e.push && r(e))) {
                for (
                  o = o || 'normal', a = a || 0, s = i, l = e.length, u = 0;
                  u < l;
                  u++
                )
                  r((c = e[u])) && (c = new t({ tweens: c })),
                    this.add(c, s),
                    'string' != typeof c &&
                      'function' != typeof c &&
                      ('sequence' === o
                        ? (s = c._startTime + c.totalDuration() / c._timeScale)
                        : 'start' === o && (c._startTime -= c.delay())),
                    (s += a)
                return this._uncache(!0)
              }
              if ('string' == typeof e) return this.addLabel(e, i)
              if ('function' != typeof e)
                throw (
                  'Cannot add ' +
                  e +
                  ' into the timeline; it is not a tween, timeline, function, or string.'
                )
              e = n.l.delayedCall(0, e)
            }
            if (
              (n.i.prototype.add.call(this, e, i),
              (e._time || (!e._duration && e._initted)) &&
                ((s = (this.rawTime() - e._startTime) * e._timeScale),
                (!e._duration ||
                  Math.abs(Math.max(0, Math.min(e.totalDuration(), s))) -
                    e._totalTime >
                    1e-5) &&
                  e.render(s, !1, !1)),
              (this._gc || this._time === this._duration) &&
                !this._paused &&
                this._duration < this.duration())
            )
              for (p = (h = this).rawTime() > e._startTime; h._timeline; )
                p && h._timeline.smoothChildTiming
                  ? h.totalTime(h._totalTime, !0)
                  : h._gc && h._enabled(!0, !1),
                  (h = h._timeline)
            return this
          }),
          (d.remove = function (t) {
            if (t instanceof n.a) {
              this._remove(t, !1)
              var e = (t._timeline = t.vars.useFrames
                ? n.a._rootFramesTimeline
                : n.a._rootTimeline)
              return (
                (t._startTime =
                  (t._paused ? t._pauseTime : e._time) -
                  (t._reversed
                    ? t.totalDuration() - t._totalTime
                    : t._totalTime) /
                    t._timeScale),
                this
              )
            }
            if (t instanceof Array || (t && t.push && r(t))) {
              for (var i = t.length; --i > -1; ) this.remove(t[i])
              return this
            }
            return 'string' == typeof t
              ? this.removeLabel(t)
              : this.kill(null, t)
          }),
          (d._remove = function (t, e) {
            return (
              n.i.prototype._remove.call(this, t, e),
              this._last
                ? this._time > this.duration() &&
                  ((this._time = this._duration),
                  (this._totalTime = this._totalDuration))
                : (this._time =
                    this._totalTime =
                    this._duration =
                    this._totalDuration =
                      0),
              this
            )
          }),
          (d.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
          }),
          (d.insert = d.insertMultiple =
            function (t, e, i, n) {
              return this.add(t, e || 0, i, n)
            }),
          (d.appendMultiple = function (t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
          }),
          (d.addLabel = function (t, e) {
            return (this._labels[t] = this._parseTimeOrLabel(e)), this
          }),
          (d.addPause = function (t, e, i, o) {
            var r = n.l.delayedCall(0, h, i, o || this)
            return (
              (r.vars.onComplete = r.vars.onReverseComplete = e),
              (r.data = 'isPause'),
              (this._hasPause = !0),
              this.add(r, t)
            )
          }),
          (d.removeLabel = function (t) {
            return delete this._labels[t], this
          }),
          (d.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1
          }),
          (d._parseTimeOrLabel = function (t, e, i, o) {
            var a, s
            if (o instanceof n.a && o.timeline === this) this.remove(o)
            else if (o && (o instanceof Array || (o.push && r(o))))
              for (s = o.length; --s > -1; )
                o[s] instanceof n.a &&
                  o[s].timeline === this &&
                  this.remove(o[s])
            if (
              ((a =
                'number' != typeof t || e
                  ? this.duration() > 99999999999
                    ? this.recent().endTime(!1)
                    : this._duration
                  : 0),
              'string' == typeof e)
            )
              return this._parseTimeOrLabel(
                e,
                i && 'number' == typeof t && null == this._labels[e]
                  ? t - a
                  : 0,
                i
              )
            if (
              ((e = e || 0),
              'string' != typeof t || (!isNaN(t) && null == this._labels[t]))
            )
              null == t && (t = a)
            else {
              if (-1 === (s = t.indexOf('=')))
                return null == this._labels[t]
                  ? i
                    ? (this._labels[t] = a + e)
                    : e
                  : this._labels[t] + e
              ;(e =
                parseInt(t.charAt(s - 1) + '1', 10) * Number(t.substr(s + 1))),
                (t =
                  s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, i) : a)
            }
            return Number(t) + e
          }),
          (d.seek = function (t, e) {
            return this.totalTime(
              'number' == typeof t ? t : this._parseTimeOrLabel(t),
              !1 !== e
            )
          }),
          (d.stop = function () {
            return this.paused(!0)
          }),
          (d.gotoAndPlay = function (t, e) {
            return this.play(t, e)
          }),
          (d.gotoAndStop = function (t, e) {
            return this.pause(t, e)
          }),
          (d.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1)
            var n,
              o,
              r,
              l,
              u,
              c,
              h,
              p,
              f = this._time,
              d = this._dirty ? this.totalDuration() : this._totalDuration,
              _ = this._startTime,
              g = this._timeScale,
              m = this._paused
            if (
              (f !== this._time && (t += this._time - f),
              this._hasPause && !this._forcingPlayhead && !e)
            ) {
              if (t > f)
                for (n = this._first; n && n._startTime <= t && !c; )
                  n._duration ||
                    'isPause' !== n.data ||
                    n.ratio ||
                    (0 === n._startTime && 0 === this._rawPrevTime) ||
                    (c = n),
                    (n = n._next)
              else
                for (n = this._last; n && n._startTime >= t && !c; )
                  n._duration ||
                    ('isPause' === n.data && n._rawPrevTime > 0 && (c = n)),
                    (n = n._prev)
              c &&
                ((this._time = this._totalTime = t = c._startTime),
                (p =
                  this._startTime +
                  (this._reversed ? this._duration - t : t) / this._timeScale))
            }
            if (t >= d - 1e-8 && t >= 0)
              (this._totalTime = this._time = d),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((o = !0),
                  (l = 'onComplete'),
                  (u = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((t <= 0 && t >= -1e-8) ||
                      this._rawPrevTime < 0 ||
                      1e-8 === this._rawPrevTime) &&
                    this._rawPrevTime !== t &&
                    this._first &&
                    ((u = !0),
                    this._rawPrevTime > 1e-8 && (l = 'onReverseComplete'))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t
                    ? t
                    : 1e-8),
                (t = d + 1e-4)
            else if (t < 1e-8)
              if (
                ((this._totalTime = this._time = 0),
                t > -1e-8 && (t = 0),
                (0 !== f ||
                  (0 === this._duration &&
                    1e-8 !== this._rawPrevTime &&
                    (this._rawPrevTime > 0 ||
                      (t < 0 && this._rawPrevTime >= 0)))) &&
                  ((l = 'onReverseComplete'), (o = this._reversed)),
                t < 0)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((u = o = !0), (l = 'onReverseComplete'))
                    : this._rawPrevTime >= 0 && this._first && (u = !0),
                  (this._rawPrevTime = t)
              else {
                if (
                  ((this._rawPrevTime =
                    this._duration || !e || t || this._rawPrevTime === t
                      ? t
                      : 1e-8),
                  0 === t && o)
                )
                  for (n = this._first; n && 0 === n._startTime; )
                    n._duration || (o = !1), (n = n._next)
                ;(t = 0), this._initted || (u = !0)
              }
            else this._totalTime = this._time = this._rawPrevTime = t
            if ((this._time !== f && this._first) || i || u || c) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._time !== f &&
                    t > 0 &&
                    (this._active = !0)),
                0 === f &&
                  this.vars.onStart &&
                  ((0 === this._time && this._duration) ||
                    e ||
                    this._callback('onStart')),
                (h = this._time) >= f)
              )
                for (
                  n = this._first;
                  n &&
                  ((r = n._next), h === this._time && (!this._paused || m));

                )
                  (n._active || (n._startTime <= h && !n._paused && !n._gc)) &&
                    (c === n && (this.pause(), (this._pauseTime = p)),
                    n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i)),
                    (n = r)
              else
                for (
                  n = this._last;
                  n &&
                  ((r = n._prev), h === this._time && (!this._paused || m));

                ) {
                  if (
                    n._active ||
                    (n._startTime <= f && !n._paused && !n._gc)
                  ) {
                    if (c === n) {
                      for (c = n._prev; c && c.endTime() > this._time; )
                        c.render(
                          c._reversed
                            ? c.totalDuration() -
                                (t - c._startTime) * c._timeScale
                            : (t - c._startTime) * c._timeScale,
                          e,
                          i
                        ),
                          (c = c._prev)
                      ;(c = null), this.pause(), (this._pauseTime = p)
                    }
                    n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i)
                  }
                  n = r
                }
              this._onUpdate &&
                (e || (a.length && s(), this._callback('onUpdate'))),
                l &&
                  (this._gc ||
                    (_ !== this._startTime && g === this._timeScale) ||
                    ((0 === this._time || d >= this.totalDuration()) &&
                      (o &&
                        (a.length && s(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[l] && this._callback(l))))
            }
          }),
          (d._hasPausedChild = function () {
            for (var e = this._first; e; ) {
              if (e._paused || (e instanceof t && e._hasPausedChild()))
                return !0
              e = e._next
            }
            return !1
          }),
          (d.getChildren = function (t, e, i, o) {
            o = o || -9999999999
            for (var r = [], a = this._first, s = 0; a; )
              a._startTime < o ||
                (a instanceof n.l
                  ? !1 !== e && (r[s++] = a)
                  : (!1 !== i && (r[s++] = a),
                    !1 !== t &&
                      (s = (r = r.concat(a.getChildren(!0, e, i))).length))),
                (a = a._next)
            return r
          }),
          (d.getTweensOf = function (t, e) {
            var i,
              o,
              r = this._gc,
              a = [],
              s = 0
            for (
              r && this._enabled(!0, !0), o = (i = n.l.getTweensOf(t)).length;
              --o > -1;

            )
              (i[o].timeline === this || (e && this._contains(i[o]))) &&
                (a[s++] = i[o])
            return r && this._enabled(!1, !0), a
          }),
          (d.recent = function () {
            return this._recent
          }),
          (d._contains = function (t) {
            for (var e = t.timeline; e; ) {
              if (e === this) return !0
              e = e.timeline
            }
            return !1
          }),
          (d.shiftChildren = function (t, e, i) {
            i = i || 0
            for (var n, o = this._first, r = this._labels; o; )
              o._startTime >= i && (o._startTime += t), (o = o._next)
            if (e) for (n in r) r[n] >= i && (r[n] += t)
            return this._uncache(!0)
          }),
          (d._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1)
            for (
              var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
                n = i.length,
                o = !1;
              --n > -1;

            )
              i[n]._kill(t, e) && (o = !0)
            return o
          }),
          (d.clear = function (t) {
            var e = this.getChildren(!1, !0, !0),
              i = e.length
            for (this._time = this._totalTime = 0; --i > -1; )
              e[i]._enabled(!1, !1)
            return !1 !== t && (this._labels = {}), this._uncache(!0)
          }),
          (d.invalidate = function () {
            for (var t = this._first; t; ) t.invalidate(), (t = t._next)
            return n.a.prototype.invalidate.call(this)
          }),
          (d._enabled = function (t, e) {
            if (t === this._gc)
              for (var i = this._first; i; ) i._enabled(t, !0), (i = i._next)
            return n.i.prototype._enabled.call(this, t, e)
          }),
          (d.totalTime = function (t, e, i) {
            this._forcingPlayhead = !0
            var o = n.a.prototype.totalTime.apply(this, arguments)
            return (this._forcingPlayhead = !1), o
          }),
          (d.duration = function (t) {
            return arguments.length
              ? (0 !== this.duration() &&
                  0 !== t &&
                  this.timeScale(this._duration / t),
                this)
              : (this._dirty && this.totalDuration(), this._duration)
          }),
          (d.totalDuration = function (t) {
            if (!arguments.length) {
              if (this._dirty) {
                for (
                  var e, i, n = 0, o = this, r = o._last, a = 999999999999;
                  r;

                )
                  (e = r._prev),
                    r._dirty && r.totalDuration(),
                    r._startTime > a &&
                    o._sortChildren &&
                    !r._paused &&
                    !o._calculatingDuration
                      ? ((o._calculatingDuration = 1),
                        o.add(r, r._startTime - r._delay),
                        (o._calculatingDuration = 0))
                      : (a = r._startTime),
                    r._startTime < 0 &&
                      !r._paused &&
                      ((n -= r._startTime),
                      o._timeline.smoothChildTiming &&
                        ((o._startTime += r._startTime / o._timeScale),
                        (o._time -= r._startTime),
                        (o._totalTime -= r._startTime),
                        (o._rawPrevTime -= r._startTime)),
                      o.shiftChildren(-r._startTime, !1, -9999999999),
                      (a = 0)),
                    (i = r._startTime + r._totalDuration / r._timeScale) > n &&
                      (n = i),
                    (r = e)
                ;(o._duration = o._totalDuration = n), (o._dirty = !1)
              }
              return this._totalDuration
            }
            return t && this.totalDuration()
              ? this.timeScale(this._totalDuration / t)
              : this
          }),
          (d.paused = function (t) {
            if (!1 === t && this._paused)
              for (var e = this._first; e; )
                e._startTime === this._time &&
                  'isPause' === e.data &&
                  (e._rawPrevTime = 0),
                  (e = e._next)
            return n.a.prototype.paused.apply(this, arguments)
          }),
          (d.usesFrames = function () {
            for (var t = this._timeline; t._timeline; ) t = t._timeline
            return t === n.a._rootFramesTimeline
          }),
          (d.rawTime = function (t) {
            return t &&
              (this._paused ||
                (this._repeat && this.time() > 0 && this.totalProgress() < 1))
              ? this._totalTime % (this._duration + this._repeatDelay)
              : this._paused
              ? this._totalTime
              : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
          }),
          t
        )
      },
      !0
    )
    var o = n.m.TimelineLite
    /*!
     * VERSION: 2.1.3
     * DATE: 2019-05-17
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */ n.k._gsDefine(
      'TimelineMax',
      ['TimelineLite', 'TweenLite', 'easing.Ease'],
      function () {
        var t = function (t) {
            o.call(this, t),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = !!this.vars.yoyo),
              (this._dirty = !0)
          },
          e = n.l._internals,
          i = e.lazyTweens,
          r = e.lazyRender,
          a = n.k._gsDefine.globals,
          s = new n.b(null, null, 1, 0),
          l = (t.prototype = new o())
        return (
          (l.constructor = t),
          (l.kill()._gc = !1),
          (t.version = '2.1.3'),
          (l.invalidate = function () {
            return (
              (this._yoyo = !!this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              o.prototype.invalidate.call(this)
            )
          }),
          (l.addCallback = function (t, e, i, o) {
            return this.add(n.l.delayedCall(0, t, i, o), e)
          }),
          (l.removeCallback = function (t, e) {
            if (t)
              if (null == e) this._kill(null, t)
              else
                for (
                  var i = this.getTweensOf(t, !1),
                    n = i.length,
                    o = this._parseTimeOrLabel(e);
                  --n > -1;

                )
                  i[n]._startTime === o && i[n]._enabled(!1, !1)
            return this
          }),
          (l.removePause = function (t) {
            return this.removeCallback(o._internals.pauseCallback, t)
          }),
          (l.tweenTo = function (t, e) {
            e = e || {}
            var i,
              o,
              r,
              l = {
                ease: s,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1,
              },
              u = (e.repeat && a.TweenMax) || n.l
            for (o in e) l[o] = e[o]
            return (
              (l.time = this._parseTimeOrLabel(t)),
              (i =
                Math.abs(Number(l.time) - this._time) / this._timeScale ||
                0.001),
              (r = new u(this, i, l)),
              (l.onStart = function () {
                r.target.paused(!0),
                  r.vars.time === r.target.time() ||
                    i !== r.duration() ||
                    r.isFromTo ||
                    r
                      .duration(
                        Math.abs(r.vars.time - r.target.time()) /
                          r.target._timeScale
                      )
                      .render(r.time(), !0, !0),
                  e.onStart &&
                    e.onStart.apply(
                      e.onStartScope || e.callbackScope || r,
                      e.onStartParams || []
                    )
              }),
              r
            )
          }),
          (l.tweenFromTo = function (t, e, i) {
            ;(i = i || {}),
              (t = this._parseTimeOrLabel(t)),
              (i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this,
              }),
              (i.immediateRender = !1 !== i.immediateRender)
            var n = this.tweenTo(e, i)
            return (
              (n.isFromTo = 1),
              n.duration(Math.abs(n.vars.time - t) / this._timeScale || 0.001)
            )
          }),
          (l.render = function (t, e, n) {
            this._gc && this._enabled(!0, !1)
            var o,
              a,
              s,
              l,
              u,
              c,
              h,
              p,
              f,
              d = this._time,
              _ = this._dirty ? this.totalDuration() : this._totalDuration,
              g = this._duration,
              m = this._totalTime,
              y = this._startTime,
              v = this._timeScale,
              b = this._rawPrevTime,
              C = this._paused,
              w = this._cycle
            if (
              (d !== this._time && (t += this._time - d),
              t >= _ - 1e-8 && t >= 0)
            )
              this._locked ||
                ((this._totalTime = _), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((a = !0),
                  (l = 'onComplete'),
                  (u = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((t <= 0 && t >= -1e-8) || b < 0 || 1e-8 === b) &&
                    b !== t &&
                    this._first &&
                    ((u = !0), b > 1e-8 && (l = 'onReverseComplete'))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t
                    ? t
                    : 1e-8),
                this._yoyo && 1 & this._cycle
                  ? (this._time = t = 0)
                  : ((this._time = g), (t = g + 1e-4))
            else if (t < 1e-8)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                (this._time = 0),
                t > -1e-8 && (t = 0),
                (0 !== d ||
                  (0 === g &&
                    1e-8 !== b &&
                    (b > 0 || (t < 0 && b >= 0)) &&
                    !this._locked)) &&
                  ((l = 'onReverseComplete'), (a = this._reversed)),
                t < 0)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((u = a = !0), (l = 'onReverseComplete'))
                    : b >= 0 && this._first && (u = !0),
                  (this._rawPrevTime = t)
              else {
                if (
                  ((this._rawPrevTime =
                    g || !e || t || this._rawPrevTime === t ? t : 1e-8),
                  0 === t && a)
                )
                  for (o = this._first; o && 0 === o._startTime; )
                    o._duration || (a = !1), (o = o._next)
                ;(t = 0), this._initted || (u = !0)
              }
            else
              0 === g && b < 0 && (u = !0),
                (this._time = this._rawPrevTime = t),
                this._locked ||
                  ((this._totalTime = t),
                  0 !== this._repeat &&
                    ((c = g + this._repeatDelay),
                    (this._cycle = (this._totalTime / c) >> 0),
                    this._cycle &&
                      this._cycle === this._totalTime / c &&
                      m <= t &&
                      this._cycle--,
                    (this._time = this._totalTime - this._cycle * c),
                    this._yoyo &&
                      1 & this._cycle &&
                      (this._time = g - this._time),
                    this._time > g
                      ? ((this._time = g), (t = g + 1e-4))
                      : this._time < 0
                      ? (this._time = t = 0)
                      : (t = this._time)))
            if (this._hasPause && !this._forcingPlayhead && !e) {
              if ((t = this._time) > d || (this._repeat && w !== this._cycle))
                for (o = this._first; o && o._startTime <= t && !h; )
                  o._duration ||
                    'isPause' !== o.data ||
                    o.ratio ||
                    (0 === o._startTime && 0 === this._rawPrevTime) ||
                    (h = o),
                    (o = o._next)
              else
                for (o = this._last; o && o._startTime >= t && !h; )
                  o._duration ||
                    ('isPause' === o.data && o._rawPrevTime > 0 && (h = o)),
                    (o = o._prev)
              h &&
                ((f =
                  this._startTime +
                  (this._reversed
                    ? this._duration - h._startTime
                    : h._startTime) /
                    this._timeScale),
                h._startTime < g &&
                  ((this._time = this._rawPrevTime = t = h._startTime),
                  (this._totalTime =
                    t +
                    this._cycle * (this._totalDuration + this._repeatDelay))))
            }
            if (this._cycle !== w && !this._locked) {
              var T = this._yoyo && 0 != (1 & w),
                S = T === (this._yoyo && 0 != (1 & this._cycle)),
                A = this._totalTime,
                O = this._cycle,
                E = this._rawPrevTime,
                x = this._time
              if (
                ((this._totalTime = w * g),
                this._cycle < w ? (T = !T) : (this._totalTime += g),
                (this._time = d),
                (this._rawPrevTime = 0 === g ? b - 1e-4 : b),
                (this._cycle = w),
                (this._locked = !0),
                (d = T ? 0 : g),
                this.render(d, e, 0 === g),
                e ||
                  this._gc ||
                  (this.vars.onRepeat &&
                    ((this._cycle = O),
                    (this._locked = !1),
                    this._callback('onRepeat'))),
                d !== this._time)
              )
                return
              if (
                (S &&
                  ((this._cycle = w),
                  (this._locked = !0),
                  (d = T ? g + 1e-4 : -1e-4),
                  this.render(d, !0, !1)),
                (this._locked = !1),
                this._paused && !C)
              )
                return
              ;(this._time = x),
                (this._totalTime = A),
                (this._cycle = O),
                (this._rawPrevTime = E)
            }
            if ((this._time !== d && this._first) || n || u || h) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._totalTime !== m &&
                    t > 0 &&
                    (this._active = !0)),
                0 === m &&
                  this.vars.onStart &&
                  ((0 === this._totalTime && this._totalDuration) ||
                    e ||
                    this._callback('onStart')),
                (p = this._time) >= d)
              )
                for (
                  o = this._first;
                  o &&
                  ((s = o._next), p === this._time && (!this._paused || C));

                )
                  (o._active ||
                    (o._startTime <= this._time && !o._paused && !o._gc)) &&
                    (h === o && (this.pause(), (this._pauseTime = f)),
                    o._reversed
                      ? o.render(
                          (o._dirty ? o.totalDuration() : o._totalDuration) -
                            (t - o._startTime) * o._timeScale,
                          e,
                          n
                        )
                      : o.render((t - o._startTime) * o._timeScale, e, n)),
                    (o = s)
              else
                for (
                  o = this._last;
                  o &&
                  ((s = o._prev), p === this._time && (!this._paused || C));

                ) {
                  if (
                    o._active ||
                    (o._startTime <= d && !o._paused && !o._gc)
                  ) {
                    if (h === o) {
                      for (h = o._prev; h && h.endTime() > this._time; )
                        h.render(
                          h._reversed
                            ? h.totalDuration() -
                                (t - h._startTime) * h._timeScale
                            : (t - h._startTime) * h._timeScale,
                          e,
                          n
                        ),
                          (h = h._prev)
                      ;(h = null), this.pause(), (this._pauseTime = f)
                    }
                    o._reversed
                      ? o.render(
                          (o._dirty ? o.totalDuration() : o._totalDuration) -
                            (t - o._startTime) * o._timeScale,
                          e,
                          n
                        )
                      : o.render((t - o._startTime) * o._timeScale, e, n)
                  }
                  o = s
                }
              this._onUpdate &&
                (e || (i.length && r(), this._callback('onUpdate'))),
                l &&
                  (this._locked ||
                    this._gc ||
                    (y !== this._startTime && v === this._timeScale) ||
                    ((0 === this._time || _ >= this.totalDuration()) &&
                      (a &&
                        (i.length && r(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[l] && this._callback(l))))
            } else
              m !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback('onUpdate'))
          }),
          (l.getActive = function (t, e, i) {
            var n,
              o,
              r = [],
              a = this.getChildren(t || null == t, e || null == t, !!i),
              s = 0,
              l = a.length
            for (n = 0; n < l; n++) (o = a[n]).isActive() && (r[s++] = o)
            return r
          }),
          (l.getLabelAfter = function (t) {
            t || (0 !== t && (t = this._time))
            var e,
              i = this.getLabelsArray(),
              n = i.length
            for (e = 0; e < n; e++) if (i[e].time > t) return i[e].name
            return null
          }),
          (l.getLabelBefore = function (t) {
            null == t && (t = this._time)
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
              if (e[i].time < t) return e[i].name
            return null
          }),
          (l.getLabelsArray = function () {
            var t,
              e = [],
              i = 0
            for (t in this._labels) e[i++] = { time: this._labels[t], name: t }
            return (
              e.sort(function (t, e) {
                return t.time - e.time
              }),
              e
            )
          }),
          (l.invalidate = function () {
            return (this._locked = !1), o.prototype.invalidate.call(this)
          }),
          (l.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration() || 0
          }),
          (l.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration() || 0
          }),
          (l.totalDuration = function (t) {
            return arguments.length
              ? -1 !== this._repeat && t
                ? this.timeScale(this.totalDuration() / t)
                : this
              : (this._dirty &&
                  (o.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration)
          }),
          (l.time = function (t, e) {
            if (!arguments.length) return this._time
            this._dirty && this.totalDuration()
            var i = this._duration,
              n = this._cycle,
              o = n * (i + this._repeatDelay)
            return (
              t > i && (t = i),
              this.totalTime(
                this._yoyo && 1 & n ? i - t + o : this._repeat ? t + o : t,
                e
              )
            )
          }),
          (l.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat
          }),
          (l.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay
          }),
          (l.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo
          }),
          (l.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.getLabelBefore(this._time + 1e-8)
          }),
          t
        )
      },
      !0
    )
    var r = n.m.TimelineMax
    /*!
     * VERSION: 2.1.3
     * DATE: 2019-05-17
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/ n.k._gsDefine(
      'TweenMax',
      ['core.Animation', 'core.SimpleTimeline', 'TweenLite'],
      function () {
        var t = function (t) {
            var e,
              i = [],
              n = t.length
            for (e = 0; e !== n; i.push(t[e++]));
            return i
          },
          e = function (t, e, i) {
            var n,
              o,
              r = t.cycle
            for (n in r)
              (o = r[n]),
                (t[n] =
                  'function' == typeof o ? o(i, e[i], e) : o[i % o.length])
            delete t.cycle
          },
          i = function (t) {
            if ('function' == typeof t) return t
            var e = 'object' == typeof t ? t : { each: t },
              i = e.ease,
              n = e.from || 0,
              o = e.base || 0,
              r = {},
              a = isNaN(n),
              s = e.axis,
              l = { center: 0.5, end: 1 }[n] || 0
            return function (t, u, c) {
              var h,
                p,
                f,
                d,
                _,
                g,
                m,
                y,
                v,
                b = (c || e).length,
                C = r[b]
              if (!C) {
                if (!(v = 'auto' === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                  for (
                    m = -1 / 0;
                    m < (m = c[v++].getBoundingClientRect().left) && v < b;

                  );
                  v--
                }
                for (
                  C = r[b] = [],
                    h = a ? Math.min(v, b) * l - 0.5 : n % v,
                    p = a ? (b * l) / v - 0.5 : (n / v) | 0,
                    m = 0,
                    y = 1 / 0,
                    g = 0;
                  g < b;
                  g++
                )
                  (f = (g % v) - h),
                    (d = p - ((g / v) | 0)),
                    (C[g] = _ =
                      s
                        ? Math.abs('y' === s ? d : f)
                        : Math.sqrt(f * f + d * d)),
                    _ > m && (m = _),
                    _ < y && (y = _)
                ;(C.max = m - y),
                  (C.min = y),
                  (C.v = b =
                    e.amount ||
                    e.each *
                      (v > b
                        ? b - 1
                        : s
                        ? 'y' === s
                          ? b / v
                          : v
                        : Math.max(v, b / v)) ||
                    0),
                  (C.b = b < 0 ? o - b : o)
              }
              return (
                (b = (C[t] - C.min) / C.max),
                C.b + (i ? i.getRatio(b) : b) * C.v
              )
            }
          },
          o = function (t, e, i) {
            n.l.call(this, t, e, i),
              (this._cycle = 0),
              (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._repeat && this._uncache(!0),
              (this.render = o.prototype.render)
          },
          r = n.l._internals,
          a = r.isSelector,
          s = r.isArray,
          l = (o.prototype = n.l.to({}, 0.1, {})),
          u = []
        ;(o.version = '2.1.3'),
          (l.constructor = o),
          (l.kill()._gc = !1),
          (o.killTweensOf = o.killDelayedCallsTo = n.l.killTweensOf),
          (o.getTweensOf = n.l.getTweensOf),
          (o.lagSmoothing = n.l.lagSmoothing),
          (o.ticker = n.l.ticker),
          (o.render = n.l.render),
          (o.distribute = i),
          (l.invalidate = function () {
            return (
              (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._yoyoEase = null),
              this._uncache(!0),
              n.l.prototype.invalidate.call(this)
            )
          }),
          (l.updateTo = function (t, e) {
            var i,
              o = this.ratio,
              r = this.vars.immediateRender || t.immediateRender
            for (i in (e &&
              this._startTime < this._timeline._time &&
              ((this._startTime = this._timeline._time),
              this._uncache(!1),
              this._gc
                ? this._enabled(!0, !1)
                : this._timeline.insert(this, this._startTime - this._delay)),
            t))
              this.vars[i] = t[i]
            if (this._initted || r)
              if (e) (this._initted = !1), r && this.render(0, !0, !0)
              else if (
                (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled &&
                  this._firstPT &&
                  n.l._onPluginEvent('_onDisable', this),
                this._time / this._duration > 0.998)
              ) {
                var a = this._totalTime
                this.render(0, !0, !1),
                  (this._initted = !1),
                  this.render(a, !0, !1)
              } else if (
                ((this._initted = !1), this._init(), this._time > 0 || r)
              )
                for (var s, l = 1 / (1 - o), u = this._firstPT; u; )
                  (s = u.s + u.c), (u.c *= l), (u.s = s - u.c), (u = u._next)
            return this
          }),
          (l.render = function (t, e, i) {
            this._initted ||
              (0 === this._duration && this.vars.repeat && this.invalidate())
            var o,
              a,
              s,
              l,
              u,
              c,
              h,
              p,
              f,
              d = this._dirty ? this.totalDuration() : this._totalDuration,
              _ = this._time,
              g = this._totalTime,
              m = this._cycle,
              y = this._duration,
              v = this._rawPrevTime
            if (
              (t >= d - 1e-8 && t >= 0
                ? ((this._totalTime = d),
                  (this._cycle = this._repeat),
                  this._yoyo && 0 != (1 & this._cycle)
                    ? ((this._time = 0),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(0)
                        : 0))
                    : ((this._time = y),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(1)
                        : 1)),
                  this._reversed ||
                    ((o = !0),
                    (a = 'onComplete'),
                    (i = i || this._timeline.autoRemoveChildren)),
                  0 === y &&
                    (this._initted || !this.vars.lazy || i) &&
                    (this._startTime === this._timeline._duration && (t = 0),
                    (v < 0 ||
                      (t <= 0 && t >= -1e-8) ||
                      (1e-8 === v && 'isPause' !== this.data)) &&
                      v !== t &&
                      ((i = !0), v > 1e-8 && (a = 'onReverseComplete')),
                    (this._rawPrevTime = p = !e || t || v === t ? t : 1e-8)))
                : t < 1e-8
                ? ((this._totalTime = this._time = this._cycle = 0),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(0)
                    : 0),
                  (0 !== g || (0 === y && v > 0)) &&
                    ((a = 'onReverseComplete'), (o = this._reversed)),
                  t > -1e-8
                    ? (t = 0)
                    : t < 0 &&
                      ((this._active = !1),
                      0 === y &&
                        (this._initted || !this.vars.lazy || i) &&
                        (v >= 0 && (i = !0),
                        (this._rawPrevTime = p =
                          !e || t || v === t ? t : 1e-8))),
                  this._initted || (i = !0))
                : ((this._totalTime = this._time = t),
                  0 !== this._repeat &&
                    ((l = y + this._repeatDelay),
                    (this._cycle = (this._totalTime / l) >> 0),
                    0 !== this._cycle &&
                      this._cycle === this._totalTime / l &&
                      g <= t &&
                      this._cycle--,
                    (this._time = this._totalTime - this._cycle * l),
                    this._yoyo &&
                      0 != (1 & this._cycle) &&
                      ((this._time = y - this._time),
                      (f = this._yoyoEase || this.vars.yoyoEase) &&
                        (this._yoyoEase ||
                          (!0 !== f || this._initted
                            ? (this._yoyoEase = f =
                                !0 === f
                                  ? this._ease
                                  : f instanceof n.b
                                  ? f
                                  : n.b.map[f])
                            : ((f = this.vars.ease),
                              (this._yoyoEase = f =
                                f
                                  ? f instanceof n.b
                                    ? f
                                    : 'function' == typeof f
                                    ? new n.b(f, this.vars.easeParams)
                                    : n.b.map[f] || n.l.defaultEase
                                  : n.l.defaultEase))),
                        (this.ratio = f
                          ? 1 - f.getRatio((y - this._time) / y)
                          : 0))),
                    this._time > y
                      ? (this._time = y)
                      : this._time < 0 && (this._time = 0)),
                  this._easeType && !f
                    ? ((u = this._time / y),
                      (1 === (c = this._easeType) || (3 === c && u >= 0.5)) &&
                        (u = 1 - u),
                      3 === c && (u *= 2),
                      1 === (h = this._easePower)
                        ? (u *= u)
                        : 2 === h
                        ? (u *= u * u)
                        : 3 === h
                        ? (u *= u * u * u)
                        : 4 === h && (u *= u * u * u * u),
                      (this.ratio =
                        1 === c
                          ? 1 - u
                          : 2 === c
                          ? u
                          : this._time / y < 0.5
                          ? u / 2
                          : 1 - u / 2))
                    : f || (this.ratio = this._ease.getRatio(this._time / y))),
              _ !== this._time || i || m !== this._cycle)
            ) {
              if (!this._initted) {
                if ((this._init(), !this._initted || this._gc)) return
                if (
                  !i &&
                  this._firstPT &&
                  ((!1 !== this.vars.lazy && this._duration) ||
                    (this.vars.lazy && !this._duration))
                )
                  return (
                    (this._time = _),
                    (this._totalTime = g),
                    (this._rawPrevTime = v),
                    (this._cycle = m),
                    r.lazyTweens.push(this),
                    void (this._lazy = [t, e])
                  )
                !this._time || o || f
                  ? o &&
                    this._ease._calcEnd &&
                    !f &&
                    (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                  : (this.ratio = this._ease.getRatio(this._time / y))
              }
              for (
                !1 !== this._lazy && (this._lazy = !1),
                  this._active ||
                    (!this._paused &&
                      this._time !== _ &&
                      t >= 0 &&
                      (this._active = !0)),
                  0 === g &&
                    (2 === this._initted && t > 0 && this._init(),
                    this._startAt &&
                      (t >= 0
                        ? this._startAt.render(t, !0, i)
                        : a || (a = '_dummyGS')),
                    this.vars.onStart &&
                      ((0 === this._totalTime && 0 !== y) ||
                        e ||
                        this._callback('onStart'))),
                  s = this._firstPT;
                s;

              )
                s.f
                  ? s.t[s.p](s.c * this.ratio + s.s)
                  : (s.t[s.p] = s.c * this.ratio + s.s),
                  (s = s._next)
              this._onUpdate &&
                (t < 0 &&
                  this._startAt &&
                  this._startTime &&
                  this._startAt.render(t, !0, i),
                e ||
                  ((this._totalTime !== g || a) && this._callback('onUpdate'))),
                this._cycle !== m &&
                  (e ||
                    this._gc ||
                    (this.vars.onRepeat && this._callback('onRepeat'))),
                a &&
                  ((this._gc && !i) ||
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startTime &&
                      this._startAt.render(t, !0, i),
                    o &&
                      (this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !e && this.vars[a] && this._callback(a),
                    0 === y &&
                      1e-8 === this._rawPrevTime &&
                      1e-8 !== p &&
                      (this._rawPrevTime = 0)))
            } else
              g !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback('onUpdate'))
          }),
          (o.to = function (t, e, i) {
            return new o(t, e, i)
          }),
          (o.from = function (t, e, i) {
            return (
              (i.runBackwards = !0),
              (i.immediateRender = 0 != i.immediateRender),
              new o(t, e, i)
            )
          }),
          (o.fromTo = function (t, e, i, n) {
            return (
              (n.startAt = i),
              (n.immediateRender =
                0 != n.immediateRender && 0 != i.immediateRender),
              new o(t, e, n)
            )
          }),
          (o.staggerTo = o.allTo =
            function (r, l, c, h, p, f, d) {
              var _,
                g,
                m,
                y,
                v = [],
                b = i(c.stagger || h),
                C = c.cycle,
                w = (c.startAt || u).cycle
              for (
                s(r) ||
                  ('string' == typeof r && (r = n.l.selector(r) || r),
                  a(r) && (r = t(r))),
                  _ = (r = r || []).length - 1,
                  m = 0;
                m <= _;
                m++
              ) {
                for (y in ((g = {}), c)) g[y] = c[y]
                if (
                  (C &&
                    (e(g, r, m),
                    null != g.duration &&
                      ((l = g.duration), delete g.duration)),
                  w)
                ) {
                  for (y in ((w = g.startAt = {}), c.startAt))
                    w[y] = c.startAt[y]
                  e(g.startAt, r, m)
                }
                ;(g.delay = b(m, r[m], r) + (g.delay || 0)),
                  m === _ &&
                    p &&
                    (g.onComplete = function () {
                      c.onComplete &&
                        c.onComplete.apply(
                          c.onCompleteScope || this,
                          arguments
                        ),
                        p.apply(d || c.callbackScope || this, f || u)
                    }),
                  (v[m] = new o(r[m], l, g))
              }
              return v
            }),
          (o.staggerFrom = o.allFrom =
            function (t, e, i, n, r, a, s) {
              return (
                (i.runBackwards = !0),
                (i.immediateRender = 0 != i.immediateRender),
                o.staggerTo(t, e, i, n, r, a, s)
              )
            }),
          (o.staggerFromTo = o.allFromTo =
            function (t, e, i, n, r, a, s, l) {
              return (
                (n.startAt = i),
                (n.immediateRender =
                  0 != n.immediateRender && 0 != i.immediateRender),
                o.staggerTo(t, e, n, r, a, s, l)
              )
            }),
          (o.delayedCall = function (t, e, i, n, r) {
            return new o(e, 0, {
              delay: t,
              onComplete: e,
              onCompleteParams: i,
              callbackScope: n,
              onReverseComplete: e,
              onReverseCompleteParams: i,
              immediateRender: !1,
              useFrames: r,
              overwrite: 0,
            })
          }),
          (o.set = function (t, e) {
            return new o(t, 0, e)
          }),
          (o.isTweening = function (t) {
            return n.l.getTweensOf(t, !0).length > 0
          })
        var c = function (t, e) {
            for (var i = [], o = 0, r = t._first; r; )
              r instanceof n.l
                ? (i[o++] = r)
                : (e && (i[o++] = r), (o = (i = i.concat(c(r, e))).length)),
                (r = r._next)
            return i
          },
          h = (o.getAllTweens = function (t) {
            return c(n.a._rootTimeline, t).concat(c(n.a._rootFramesTimeline, t))
          })
        ;(o.killAll = function (t, e, i, o) {
          null == e && (e = !0), null == i && (i = !0)
          var r,
            a,
            s,
            l = h(0 != o),
            u = l.length,
            c = e && i && o
          for (s = 0; s < u; s++)
            (a = l[s]),
              (c ||
                a instanceof n.i ||
                ((r = a.target === a.vars.onComplete) && i) ||
                (e && !r)) &&
                (t
                  ? a.totalTime(a._reversed ? 0 : a.totalDuration())
                  : a._enabled(!1, !1))
        }),
          (o.killChildTweensOf = function (e, i) {
            if (null != e) {
              var l,
                u,
                c,
                h,
                p,
                f = r.tweenLookup
              if (
                ('string' == typeof e && (e = n.l.selector(e) || e),
                a(e) && (e = t(e)),
                s(e))
              )
                for (h = e.length; --h > -1; ) o.killChildTweensOf(e[h], i)
              else {
                for (c in ((l = []), f))
                  for (u = f[c].target.parentNode; u; )
                    u === e && (l = l.concat(f[c].tweens)), (u = u.parentNode)
                for (p = l.length, h = 0; h < p; h++)
                  i && l[h].totalTime(l[h].totalDuration()),
                    l[h]._enabled(!1, !1)
              }
            }
          })
        var p = function (t, e, i, o) {
          ;(e = !1 !== e), (i = !1 !== i)
          for (
            var r, a, s = h((o = !1 !== o)), l = e && i && o, u = s.length;
            --u > -1;

          )
            (a = s[u]),
              (l ||
                a instanceof n.i ||
                ((r = a.target === a.vars.onComplete) && i) ||
                (e && !r)) &&
                a.paused(t)
        }
        return (
          (o.pauseAll = function (t, e, i) {
            p(!0, t, e, i)
          }),
          (o.resumeAll = function (t, e, i) {
            p(!1, t, e, i)
          }),
          (o.globalTimeScale = function (t) {
            var e = n.a._rootTimeline,
              i = n.l.ticker.time
            return arguments.length
              ? ((t = t || 1e-8),
                (e._startTime = i - ((i - e._startTime) * e._timeScale) / t),
                (e = n.a._rootFramesTimeline),
                (i = n.l.ticker.frame),
                (e._startTime = i - ((i - e._startTime) * e._timeScale) / t),
                (e._timeScale = n.a._rootTimeline._timeScale = t),
                t)
              : e._timeScale
          }),
          (l.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this.duration()
              ? this._time / this._duration
              : this.ratio
          }),
          (l.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration()
          }),
          (l.time = function (t, e) {
            if (!arguments.length) return this._time
            this._dirty && this.totalDuration()
            var i = this._duration,
              n = this._cycle,
              o = n * (i + this._repeatDelay)
            return (
              t > i && (t = i),
              this.totalTime(
                this._yoyo && 1 & n ? i - t + o : this._repeat ? t + o : t,
                e
              )
            )
          }),
          (l.duration = function (t) {
            return arguments.length
              ? n.a.prototype.duration.call(this, t)
              : this._duration
          }),
          (l.totalDuration = function (t) {
            return arguments.length
              ? -1 === this._repeat
                ? this
                : this.duration(
                    (t - this._repeat * this._repeatDelay) / (this._repeat + 1)
                  )
              : (this._dirty &&
                  ((this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat),
                  (this._dirty = !1)),
                this._totalDuration)
          }),
          (l.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat
          }),
          (l.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay
          }),
          (l.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo
          }),
          o
        )
      },
      !0
    )
    var a = n.m.TweenMax
    /*!
     * VERSION: 2.1.3
     * DATE: 2019-05-17
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */
    n.k._gsDefine(
      'plugins.CSSPlugin',
      ['plugins.TweenPlugin', 'TweenLite'],
      function () {
        var t,
          e,
          i,
          o,
          r = function () {
            n.j.call(this, 'css'),
              (this._overwriteProps.length = 0),
              (this.setRatio = r.prototype.setRatio)
          },
          a = n.k._gsDefine.globals,
          s = {},
          l = (r.prototype = new n.j('css'))
        ;(l.constructor = r),
          (r.version = '2.1.3'),
          (r.API = 2),
          (r.defaultTransformPerspective = 0),
          (r.defaultSkewType = 'compensated'),
          (r.defaultSmoothOrigin = !0),
          (l = 'px'),
          (r.suffixMap = {
            top: l,
            right: l,
            bottom: l,
            left: l,
            width: l,
            height: l,
            fontSize: l,
            padding: l,
            margin: l,
            perspective: l,
            lineHeight: '',
          })
        var u,
          c,
          h,
          p,
          f,
          d,
          _,
          g,
          m = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
          C = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          w = /(?:\d|\-|\+|=|#|\.)*/g,
          T = /opacity *= *([^)]*)/i,
          S = /opacity:([^;]*)/i,
          A = /alpha\(opacity *=.+?\)/i,
          O = /^(rgb|hsl)/,
          E = /([A-Z])/g,
          x = /-([a-z])/gi,
          D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          P = function (t, e) {
            return e.toUpperCase()
          },
          I = /(?:Left|Right|Width)/i,
          k = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          L = /,(?=[^\)]*(?:\(|$))/gi,
          N = /[\s,\(]/i,
          R = Math.PI / 180,
          M = 180 / Math.PI,
          B = {},
          j = { style: {} },
          H = n.k.document || {
            createElement: function () {
              return j
            },
          },
          U = function (t, e) {
            var i = H.createElementNS
              ? H.createElementNS(e || 'http://www.w3.org/1999/xhtml', t)
              : H.createElement(t)
            return i.style ? i : H.createElement(t)
          },
          z = U('div'),
          G = U('img'),
          V = (r._internals = { _specialProps: s }),
          W = (n.k.navigator || {}).userAgent || '',
          Y = (function () {
            var t = W.indexOf('Android'),
              e = U('a')
            return (
              (h =
                -1 !== W.indexOf('Safari') &&
                -1 === W.indexOf('Chrome') &&
                (-1 === t || parseFloat(W.substr(t + 8, 2)) > 3)),
              (f = h && parseFloat(W.substr(W.indexOf('Version/') + 8, 2)) < 6),
              (p = -1 !== W.indexOf('Firefox')),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) &&
                (d = parseFloat(RegExp.$1)),
              !!e &&
                ((e.style.cssText = 'top:1px;opacity:.55;'),
                /^0.55/.test(e.style.opacity))
            )
          })(),
          X = function (t) {
            return T.test(
              'string' == typeof t
                ? t
                : (t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                    ''
            )
              ? parseFloat(RegExp.$1) / 100
              : 1
          },
          Z = function (t) {
            n.k.console && console.log(t)
          },
          q = '',
          K = '',
          J = function (t, e) {
            var i,
              n,
              o = (e = e || z).style
            if (void 0 !== o[t]) return t
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1),
                i = ['O', 'Moz', 'ms', 'Ms', 'Webkit'],
                n = 5;
              --n > -1 && void 0 === o[i[n] + t];

            );
            return n >= 0
              ? ((q = '-' + (K = 3 === n ? 'ms' : i[n]).toLowerCase() + '-'),
                K + t)
              : null
          },
          Q =
            'undefined' != typeof window
              ? window
              : H.defaultView || { getComputedStyle: function () {} },
          $ = function (t) {
            return Q.getComputedStyle(t)
          },
          tt = (r.getStyle = function (t, e, i, n, o) {
            var r
            return Y || 'opacity' !== e
              ? (!n && t.style[e]
                  ? (r = t.style[e])
                  : (i = i || $(t))
                  ? (r =
                      i[e] ||
                      i.getPropertyValue(e) ||
                      i.getPropertyValue(e.replace(E, '-$1').toLowerCase()))
                  : t.currentStyle && (r = t.currentStyle[e]),
                null == o ||
                (r && 'none' !== r && 'auto' !== r && 'auto auto' !== r)
                  ? r
                  : o)
              : X(t)
          }),
          et = (V.convertToPixels = function (t, e, i, o, a) {
            if ('px' === o || (!o && 'lineHeight' !== e)) return i
            if ('auto' === o || !i) return 0
            var s,
              l,
              u,
              c = I.test(e),
              h = t,
              p = z.style,
              f = i < 0,
              d = 1 === i
            if ((f && (i = -i), d && (i *= 100), 'lineHeight' !== e || o))
              if ('%' === o && -1 !== e.indexOf('border'))
                s = (i / 100) * (c ? t.clientWidth : t.clientHeight)
              else {
                if (
                  ((p.cssText =
                    'border:0 solid red;position:' +
                    tt(t, 'position') +
                    ';line-height:0;'),
                  '%' !== o &&
                    h.appendChild &&
                    'v' !== o.charAt(0) &&
                    'rem' !== o)
                )
                  p[c ? 'borderLeftWidth' : 'borderTopWidth'] = i + o
                else {
                  if (
                    ((h = t.parentNode || H.body),
                    -1 !== tt(h, 'display').indexOf('flex') &&
                      (p.position = 'absolute'),
                    (l = h._gsCache),
                    (u = n.l.ticker.frame),
                    l && c && l.time === u)
                  )
                    return (l.width * i) / 100
                  p[c ? 'width' : 'height'] = i + o
                }
                h.appendChild(z),
                  (s = parseFloat(z[c ? 'offsetWidth' : 'offsetHeight'])),
                  h.removeChild(z),
                  c &&
                    '%' === o &&
                    !1 !== r.cacheWidths &&
                    (((l = h._gsCache = h._gsCache || {}).time = u),
                    (l.width = (s / i) * 100)),
                  0 !== s || a || (s = et(t, e, i, o, !0))
              }
            else
              (l = $(t).lineHeight),
                (t.style.lineHeight = i),
                (s = parseFloat($(t).lineHeight)),
                (t.style.lineHeight = l)
            return d && (s /= 100), f ? -s : s
          }),
          it = (V.calculateOffset = function (t, e, i) {
            if ('absolute' !== tt(t, 'position', i)) return 0
            var n = 'left' === e ? 'Left' : 'Top',
              o = tt(t, 'margin' + n, i)
            return (
              t['offset' + n] - (et(t, e, parseFloat(o), o.replace(w, '')) || 0)
            )
          }),
          nt = function (t, e) {
            var i,
              n,
              o,
              r = {}
            if ((e = e || $(t)))
              if ((i = e.length))
                for (; --i > -1; )
                  (-1 !== (o = e[i]).indexOf('-transform') && Lt !== o) ||
                    (r[o.replace(x, P)] = e.getPropertyValue(o))
              else
                for (i in e)
                  (-1 !== i.indexOf('Transform') && Ft !== i) || (r[i] = e[i])
            else if ((e = t.currentStyle || t.style))
              for (i in e)
                'string' == typeof i &&
                  void 0 === r[i] &&
                  (r[i.replace(x, P)] = e[i])
            return (
              Y || (r.opacity = X(t)),
              (n = Xt(t, e, !1)),
              (r.rotation = n.rotation),
              (r.skewX = n.skewX),
              (r.scaleX = n.scaleX),
              (r.scaleY = n.scaleY),
              (r.x = n.x),
              (r.y = n.y),
              Rt &&
                ((r.z = n.z),
                (r.rotationX = n.rotationX),
                (r.rotationY = n.rotationY),
                (r.scaleZ = n.scaleZ)),
              r.filters && delete r.filters,
              r
            )
          },
          ot = function (t, e, i, n, o) {
            var r,
              a,
              s,
              l = {},
              u = t.style
            for (a in i)
              'cssText' !== a &&
                'length' !== a &&
                isNaN(a) &&
                (e[a] !== (r = i[a]) || (o && o[a])) &&
                -1 === a.indexOf('Origin') &&
                (('number' != typeof r && 'string' != typeof r) ||
                  ((l[a] =
                    'auto' !== r || ('left' !== a && 'top' !== a)
                      ? ('' !== r && 'auto' !== r && 'none' !== r) ||
                        'string' != typeof e[a] ||
                        '' === e[a].replace(C, '')
                        ? r
                        : 0
                      : it(t, a)),
                  void 0 !== u[a] && (s = new vt(u, a, u[a], s))))
            if (n) for (a in n) 'className' !== a && (l[a] = n[a])
            return { difs: l, firstMPT: s }
          },
          rt = { width: ['Left', 'Right'], height: ['Top', 'Bottom'] },
          at = ['marginLeft', 'marginRight', 'marginTop', 'marginBottom'],
          st = function (t, e, i) {
            if ('svg' === (t.nodeName + '').toLowerCase())
              return (i || $(t))[e] || 0
            if (t.getCTM && Vt(t)) return t.getBBox()[e] || 0
            var n = parseFloat('width' === e ? t.offsetWidth : t.offsetHeight),
              o = rt[e],
              r = o.length
            for (i = i || $(t); --r > -1; )
              (n -= parseFloat(tt(t, 'padding' + o[r], i, !0)) || 0),
                (n -= parseFloat(tt(t, 'border' + o[r] + 'Width', i, !0)) || 0)
            return n
          },
          lt = function (t, e) {
            if ('contain' === t || 'auto' === t || 'auto auto' === t)
              return t + ' '
            ;(null != t && '' !== t) || (t = '0 0')
            var i,
              n = t.split(' '),
              o =
                -1 !== t.indexOf('left')
                  ? '0%'
                  : -1 !== t.indexOf('right')
                  ? '100%'
                  : n[0],
              r =
                -1 !== t.indexOf('top')
                  ? '0%'
                  : -1 !== t.indexOf('bottom')
                  ? '100%'
                  : n[1]
            if (n.length > 3 && !e) {
              for (
                n = t.split(', ').join(',').split(','), t = [], i = 0;
                i < n.length;
                i++
              )
                t.push(lt(n[i]))
              return t.join(',')
            }
            return (
              null == r
                ? (r = 'center' === o ? '50%' : '0')
                : 'center' === r && (r = '50%'),
              ('center' === o ||
                (isNaN(parseFloat(o)) && -1 === (o + '').indexOf('='))) &&
                (o = '50%'),
              (t = o + ' ' + r + (n.length > 2 ? ' ' + n[2] : '')),
              e &&
                ((e.oxp = -1 !== o.indexOf('%')),
                (e.oyp = -1 !== r.indexOf('%')),
                (e.oxr = '=' === o.charAt(1)),
                (e.oyr = '=' === r.charAt(1)),
                (e.ox = parseFloat(o.replace(C, ''))),
                (e.oy = parseFloat(r.replace(C, ''))),
                (e.v = t)),
              e || t
            )
          },
          ut = function (t, e) {
            return (
              'function' == typeof t && (t = t(g, _)),
              'string' == typeof t && '=' === t.charAt(1)
                ? parseInt(t.charAt(0) + '1', 10) * parseFloat(t.substr(2))
                : parseFloat(t) - parseFloat(e) || 0
            )
          },
          ct = function (t, e) {
            'function' == typeof t && (t = t(g, _))
            var i = 'string' == typeof t && '=' === t.charAt(1)
            return (
              'string' == typeof t &&
                'v' === t.charAt(t.length - 2) &&
                (t =
                  (i ? t.substr(0, 2) : 0) +
                  window[
                    'inner' + ('vh' === t.substr(-2) ? 'Height' : 'Width')
                  ] *
                    (parseFloat(i ? t.substr(2) : t) / 100)),
              null == t
                ? e
                : i
                ? parseInt(t.charAt(0) + '1', 10) * parseFloat(t.substr(2)) + e
                : parseFloat(t) || 0
            )
          },
          ht = function (t, e, i, n) {
            var o, r, a, s
            return (
              'function' == typeof t && (t = t(g, _)),
              null == t
                ? (a = e)
                : 'number' == typeof t
                ? (a = t)
                : (360,
                  (o = t.split('_')),
                  (r =
                    ((s = '=' === t.charAt(1))
                      ? parseInt(t.charAt(0) + '1', 10) *
                        parseFloat(o[0].substr(2))
                      : parseFloat(o[0])) *
                      (-1 === t.indexOf('rad') ? 1 : M) -
                    (s ? 0 : e)),
                  o.length &&
                    (n && (n[i] = e + r),
                    -1 !== t.indexOf('short') &&
                      (r %= 360) !== r % 180 &&
                      (r = r < 0 ? r + 360 : r - 360),
                    -1 !== t.indexOf('_cw') && r < 0
                      ? (r =
                          ((r + 3599999999640) % 360) - 360 * ((r / 360) | 0))
                      : -1 !== t.indexOf('ccw') &&
                        r > 0 &&
                        (r =
                          ((r - 3599999999640) % 360) - 360 * ((r / 360) | 0))),
                  (a = e + r)),
              a < 1e-6 && a > -1e-6 && (a = 0),
              a
            )
          },
          pt = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          ft = function (t, e, i) {
            return (
              (255 *
                (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
                  ? e + (i - e) * t * 6
                  : t < 0.5
                  ? i
                  : 3 * t < 2
                  ? e + (i - e) * (2 / 3 - t) * 6
                  : e) +
                0.5) |
              0
            )
          },
          dt = (r.parseColor = function (t, e) {
            var i, n, o, r, a, s, l, u, c, h, p
            if (t)
              if ('number' == typeof t) i = [t >> 16, (t >> 8) & 255, 255 & t]
              else {
                if (
                  (',' === t.charAt(t.length - 1) &&
                    (t = t.substr(0, t.length - 1)),
                  pt[t])
                )
                  i = pt[t]
                else if ('#' === t.charAt(0))
                  4 === t.length &&
                    ((n = t.charAt(1)),
                    (o = t.charAt(2)),
                    (r = t.charAt(3)),
                    (t = '#' + n + n + o + o + r + r)),
                    (i = [
                      (t = parseInt(t.substr(1), 16)) >> 16,
                      (t >> 8) & 255,
                      255 & t,
                    ])
                else if ('hsl' === t.substr(0, 3))
                  if (((i = p = t.match(m)), e)) {
                    if (-1 !== t.indexOf('=')) return t.match(y)
                  } else
                    (a = (Number(i[0]) % 360) / 360),
                      (s = Number(i[1]) / 100),
                      (n =
                        2 * (l = Number(i[2]) / 100) -
                        (o = l <= 0.5 ? l * (s + 1) : l + s - l * s)),
                      i.length > 3 && (i[3] = Number(i[3])),
                      (i[0] = ft(a + 1 / 3, n, o)),
                      (i[1] = ft(a, n, o)),
                      (i[2] = ft(a - 1 / 3, n, o))
                else i = t.match(m) || pt.transparent
                ;(i[0] = Number(i[0])),
                  (i[1] = Number(i[1])),
                  (i[2] = Number(i[2])),
                  i.length > 3 && (i[3] = Number(i[3]))
              }
            else i = pt.black
            return (
              e &&
                !p &&
                ((n = i[0] / 255),
                (o = i[1] / 255),
                (r = i[2] / 255),
                (l = ((u = Math.max(n, o, r)) + (c = Math.min(n, o, r))) / 2),
                u === c
                  ? (a = s = 0)
                  : ((h = u - c),
                    (s = l > 0.5 ? h / (2 - u - c) : h / (u + c)),
                    (a =
                      u === n
                        ? (o - r) / h + (o < r ? 6 : 0)
                        : u === o
                        ? (r - n) / h + 2
                        : (n - o) / h + 4),
                    (a *= 60)),
                (i[0] = (a + 0.5) | 0),
                (i[1] = (100 * s + 0.5) | 0),
                (i[2] = (100 * l + 0.5) | 0)),
              i
            )
          }),
          _t = function (t, e) {
            var i,
              n,
              o,
              r = t.match(gt) || [],
              a = 0,
              s = ''
            if (!r.length) return t
            for (i = 0; i < r.length; i++)
              (n = r[i]),
                (a += (o = t.substr(a, t.indexOf(n, a) - a)).length + n.length),
                3 === (n = dt(n, e)).length && n.push(1),
                (s +=
                  o +
                  (e
                    ? 'hsla(' + n[0] + ',' + n[1] + '%,' + n[2] + '%,' + n[3]
                    : 'rgba(' + n.join(',')) +
                  ')')
            return s + t.substr(a)
          },
          gt =
            '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b'
        for (l in pt) gt += '|' + l + '\\b'
        ;(gt = new RegExp(gt + ')', 'gi')),
          (r.colorStringFilter = function (t) {
            var e,
              i = t[0] + ' ' + t[1]
            gt.test(i) &&
              ((e = -1 !== i.indexOf('hsl(') || -1 !== i.indexOf('hsla(')),
              (t[0] = _t(t[0], e)),
              (t[1] = _t(t[1], e))),
              (gt.lastIndex = 0)
          }),
          n.l.defaultStringFilter ||
            (n.l.defaultStringFilter = r.colorStringFilter)
        var mt = function (t, e, i, n) {
            if (null == t)
              return function (t) {
                return t
              }
            var o,
              r = e ? (t.match(gt) || [''])[0] : '',
              a = t.split(r).join('').match(v) || [],
              s = t.substr(0, t.indexOf(a[0])),
              l = ')' === t.charAt(t.length - 1) ? ')' : '',
              u = -1 !== t.indexOf(' ') ? ' ' : ',',
              c = a.length,
              h = c > 0 ? a[0].replace(m, '') : ''
            return c
              ? (o = e
                  ? function (t) {
                      var e, p, f, d
                      if ('number' == typeof t) t += h
                      else if (n && L.test(t)) {
                        for (
                          d = t.replace(L, '|').split('|'), f = 0;
                          f < d.length;
                          f++
                        )
                          d[f] = o(d[f])
                        return d.join(',')
                      }
                      if (
                        ((e = (t.match(gt) || [r])[0]),
                        (f = (p = t.split(e).join('').match(v) || []).length),
                        c > f--)
                      )
                        for (; ++f < c; ) p[f] = i ? p[((f - 1) / 2) | 0] : a[f]
                      return (
                        s +
                        p.join(u) +
                        u +
                        e +
                        l +
                        (-1 !== t.indexOf('inset') ? ' inset' : '')
                      )
                    }
                  : function (t) {
                      var e, r, p
                      if ('number' == typeof t) t += h
                      else if (n && L.test(t)) {
                        for (
                          r = t.replace(L, '|').split('|'), p = 0;
                          p < r.length;
                          p++
                        )
                          r[p] = o(r[p])
                        return r.join(',')
                      }
                      if (
                        ((p = (e = t.match(',' === u ? v : b) || []).length),
                        c > p--)
                      )
                        for (; ++p < c; ) e[p] = i ? e[((p - 1) / 2) | 0] : a[p]
                      return (
                        ((s && 'none' !== t && t.substr(0, t.indexOf(e[0]))) ||
                          s) +
                        e.join(u) +
                        l
                      )
                    })
              : function (t) {
                  return t
                }
          },
          yt = function (t) {
            return (
              (t = t.split(',')),
              function (e, i, n, o, r, a, s) {
                var l,
                  u = (i + '').split(' ')
                for (s = {}, l = 0; l < 4; l++)
                  s[t[l]] = u[l] = u[l] || u[((l - 1) / 2) >> 0]
                return o.parse(e, s, r, a)
              }
            )
          },
          vt =
            ((V._setPluginRatio = function (t) {
              this.plugin.setRatio(t)
              for (
                var e, i, n, o, r, a = this.data, s = a.proxy, l = a.firstMPT;
                l;

              )
                (e = s[l.v]),
                  l.r ? (e = l.r(e)) : e < 1e-6 && e > -1e-6 && (e = 0),
                  (l.t[l.p] = e),
                  (l = l._next)
              if (
                (a.autoRotate &&
                  (a.autoRotate.rotation = a.mod
                    ? a.mod.call(this._tween, s.rotation, this.t, this._tween)
                    : s.rotation),
                1 === t || 0 === t)
              )
                for (l = a.firstMPT, r = 1 === t ? 'e' : 'b'; l; ) {
                  if ((i = l.t).type) {
                    if (1 === i.type) {
                      for (o = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++)
                        o += i['xn' + n] + i['xs' + (n + 1)]
                      i[r] = o
                    }
                  } else i[r] = i.s + i.xs0
                  l = l._next
                }
            }),
            function (t, e, i, n, o) {
              ;(this.t = t),
                (this.p = e),
                (this.v = i),
                (this.r = o),
                n && ((n._prev = this), (this._next = n))
            }),
          bt =
            ((V._parseToProxy = function (t, e, i, n, o, r) {
              var a,
                s,
                l,
                u,
                c,
                h = n,
                p = {},
                f = {},
                d = i._transform,
                _ = B
              for (
                i._transform = null,
                  B = e,
                  n = c = i.parse(t, e, n, o),
                  B = _,
                  r &&
                    ((i._transform = d),
                    h && ((h._prev = null), h._prev && (h._prev._next = null)));
                n && n !== h;

              ) {
                if (
                  n.type <= 1 &&
                  ((f[(s = n.p)] = n.s + n.c),
                  (p[s] = n.s),
                  r || ((u = new vt(n, 's', s, u, n.r)), (n.c = 0)),
                  1 === n.type)
                )
                  for (a = n.l; --a > 0; )
                    (l = 'xn' + a),
                      (f[(s = n.p + '_' + l)] = n.data[l]),
                      (p[s] = n[l]),
                      r || (u = new vt(n, l, s, u, n.rxp[l]))
                n = n._next
              }
              return { proxy: p, end: f, firstMPT: u, pt: c }
            }),
            (V.CSSPropTween = function (e, i, n, r, a, s, l, u, c, h, p) {
              ;(this.t = e),
                (this.p = i),
                (this.s = n),
                (this.c = r),
                (this.n = l || i),
                e instanceof bt || o.push(this.n),
                (this.r = u ? ('function' == typeof u ? u : Math.round) : u),
                (this.type = s || 0),
                c && ((this.pr = c), (t = !0)),
                (this.b = void 0 === h ? n : h),
                (this.e = void 0 === p ? n + r : p),
                a && ((this._next = a), (a._prev = this))
            })),
          Ct = function (t, e, i, n, o, r) {
            var a = new bt(t, e, i, n - i, o, -1, r)
            return (a.b = i), (a.e = a.xs0 = n), a
          },
          wt = (r.parseComplex = function (t, e, i, n, o, a, s, l, c, h) {
            ;(i = i || a || ''),
              'function' == typeof n && (n = n(g, _)),
              (s = new bt(t, e, 0, 0, s, h ? 2 : 1, null, !1, l, i, n)),
              (n += ''),
              o &&
                gt.test(n + i) &&
                ((n = [i, n]), r.colorStringFilter(n), (i = n[0]), (n = n[1]))
            var p,
              f,
              d,
              v,
              b,
              C,
              w,
              T,
              S,
              A,
              O,
              E,
              x,
              D = i.split(', ').join(',').split(' '),
              P = n.split(', ').join(',').split(' '),
              I = D.length,
              k = !1 !== u
            for (
              (-1 === n.indexOf(',') && -1 === i.indexOf(',')) ||
                (-1 !== (n + i).indexOf('rgb') || -1 !== (n + i).indexOf('hsl')
                  ? ((D = D.join(' ').replace(L, ', ').split(' ')),
                    (P = P.join(' ').replace(L, ', ').split(' ')))
                  : ((D = D.join(' ').split(',').join(', ').split(' ')),
                    (P = P.join(' ').split(',').join(', ').split(' '))),
                (I = D.length)),
                I !== P.length && (I = (D = (a || '').split(' ')).length),
                s.plugin = c,
                s.setRatio = h,
                gt.lastIndex = 0,
                p = 0;
              p < I;
              p++
            )
              if (((v = D[p]), (b = P[p] + ''), (T = parseFloat(v)) || 0 === T))
                s.appendXtra(
                  '',
                  T,
                  ut(b, T),
                  b.replace(y, ''),
                  !(!k || -1 === b.indexOf('px')) && Math.round,
                  !0
                )
              else if (o && gt.test(v))
                (E = ')' + ((E = b.indexOf(')') + 1) ? b.substr(E) : '')),
                  (x = -1 !== b.indexOf('hsl') && Y),
                  (A = b),
                  (v = dt(v, x)),
                  (b = dt(b, x)),
                  (S = v.length + b.length > 6) && !Y && 0 === b[3]
                    ? ((s['xs' + s.l] += s.l ? ' transparent' : 'transparent'),
                      (s.e = s.e.split(P[p]).join('transparent')))
                    : (Y || (S = !1),
                      x
                        ? s
                            .appendXtra(
                              A.substr(0, A.indexOf('hsl')) +
                                (S ? 'hsla(' : 'hsl('),
                              v[0],
                              ut(b[0], v[0]),
                              ',',
                              !1,
                              !0
                            )
                            .appendXtra('', v[1], ut(b[1], v[1]), '%,', !1)
                            .appendXtra(
                              '',
                              v[2],
                              ut(b[2], v[2]),
                              S ? '%,' : '%' + E,
                              !1
                            )
                        : s
                            .appendXtra(
                              A.substr(0, A.indexOf('rgb')) +
                                (S ? 'rgba(' : 'rgb('),
                              v[0],
                              b[0] - v[0],
                              ',',
                              Math.round,
                              !0
                            )
                            .appendXtra('', v[1], b[1] - v[1], ',', Math.round)
                            .appendXtra(
                              '',
                              v[2],
                              b[2] - v[2],
                              S ? ',' : E,
                              Math.round
                            ),
                      S &&
                        ((v = v.length < 4 ? 1 : v[3]),
                        s.appendXtra(
                          '',
                          v,
                          (b.length < 4 ? 1 : b[3]) - v,
                          E,
                          !1
                        ))),
                  (gt.lastIndex = 0)
              else if ((C = v.match(m))) {
                if (!(w = b.match(y)) || w.length !== C.length) return s
                for (d = 0, f = 0; f < C.length; f++)
                  (O = C[f]),
                    (A = v.indexOf(O, d)),
                    s.appendXtra(
                      v.substr(d, A - d),
                      Number(O),
                      ut(w[f], O),
                      '',
                      !(!k || 'px' !== v.substr(A + O.length, 2)) && Math.round,
                      0 === f
                    ),
                    (d = A + O.length)
                s['xs' + s.l] += v.substr(d)
              } else s['xs' + s.l] += s.l || s['xs' + s.l] ? ' ' + b : b
            if (-1 !== n.indexOf('=') && s.data) {
              for (E = s.xs0 + s.data.s, p = 1; p < s.l; p++)
                E += s['xs' + p] + s.data['xn' + p]
              s.e = E + s['xs' + p]
            }
            return s.l || ((s.type = -1), (s.xs0 = s.e)), s.xfirst || s
          }),
          Tt = 9
        for ((l = bt.prototype).l = l.pr = 0; --Tt > 0; )
          (l['xn' + Tt] = 0), (l['xs' + Tt] = '')
        ;(l.xs0 = ''),
          (l._next =
            l._prev =
            l.xfirst =
            l.data =
            l.plugin =
            l.setRatio =
            l.rxp =
              null),
          (l.appendXtra = function (t, e, i, n, o, r) {
            var a = this,
              s = a.l
            return (
              (a['xs' + s] += r && (s || a['xs' + s]) ? ' ' + t : t || ''),
              i || 0 === s || a.plugin
                ? (a.l++,
                  (a.type = a.setRatio ? 2 : 1),
                  (a['xs' + a.l] = n || ''),
                  s > 0
                    ? ((a.data['xn' + s] = e + i),
                      (a.rxp['xn' + s] = o),
                      (a['xn' + s] = e),
                      a.plugin ||
                        ((a.xfirst = new bt(
                          a,
                          'xn' + s,
                          e,
                          i,
                          a.xfirst || a,
                          0,
                          a.n,
                          o,
                          a.pr
                        )),
                        (a.xfirst.xs0 = 0)),
                      a)
                    : ((a.data = { s: e + i }),
                      (a.rxp = {}),
                      (a.s = e),
                      (a.c = i),
                      (a.r = o),
                      a))
                : ((a['xs' + s] += e + (n || '')), a)
            )
          })
        var St = function (t, e) {
            ;(e = e || {}),
              (this.p = (e.prefix && J(t)) || t),
              (s[t] = s[this.p] = this),
              (this.format =
                e.formatter ||
                mt(e.defaultValue, e.color, e.collapsible, e.multi)),
              e.parser && (this.parse = e.parser),
              (this.clrs = e.color),
              (this.multi = e.multi),
              (this.keyword = e.keyword),
              (this.dflt = e.defaultValue),
              (this.allowFunc = e.allowFunc),
              (this.pr = e.priority || 0)
          },
          At = (V._registerComplexSpecialProp = function (t, e, i) {
            'object' != typeof e && (e = { parser: i })
            var n,
              o = t.split(','),
              r = e.defaultValue
            for (i = i || [r], n = 0; n < o.length; n++)
              (e.prefix = 0 === n && e.prefix),
                (e.defaultValue = i[n] || r),
                new St(o[n], e)
          }),
          Ot = (V._registerPluginProp = function (t) {
            if (!s[t]) {
              var e = t.charAt(0).toUpperCase() + t.substr(1) + 'Plugin'
              At(t, {
                parser: function (t, i, n, o, r, l, u) {
                  var c = a.com.greensock.plugins[e]
                  return c
                    ? (c._cssRegister(), s[n].parse(t, i, n, o, r, l, u))
                    : (Z('Error: ' + e + ' js file not loaded.'), r)
                },
              })
            }
          })
        ;((l = St.prototype).parseComplex = function (t, e, i, n, o, r) {
          var a,
            s,
            l,
            u,
            c,
            h,
            p = this.keyword
          if (
            (this.multi &&
              (L.test(i) || L.test(e)
                ? ((s = e.replace(L, '|').split('|')),
                  (l = i.replace(L, '|').split('|')))
                : p && ((s = [e]), (l = [i]))),
            l)
          ) {
            for (
              u = l.length > s.length ? l.length : s.length, a = 0;
              a < u;
              a++
            )
              (e = s[a] = s[a] || this.dflt),
                (i = l[a] = l[a] || this.dflt),
                p &&
                  (c = e.indexOf(p)) !== (h = i.indexOf(p)) &&
                  (-1 === h
                    ? (s[a] = s[a].split(p).join(''))
                    : -1 === c && (s[a] += ' ' + p))
            ;(e = s.join(', ')), (i = l.join(', '))
          }
          return wt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, o, r)
        }),
          (l.parse = function (t, e, n, o, r, a, s) {
            return this.parseComplex(
              t.style,
              this.format(tt(t, this.p, i, !1, this.dflt)),
              this.format(e),
              r,
              a
            )
          }),
          (r.registerSpecialProp = function (t, e, i) {
            At(t, {
              parser: function (t, n, o, r, a, s, l) {
                var u = new bt(t, o, 0, 0, a, 2, o, !1, i)
                return (u.plugin = s), (u.setRatio = e(t, n, r._tween, o)), u
              },
              priority: i,
            })
          }),
          (r.useSVGTransformAttr = !0)
        var Et,
          xt,
          Dt,
          Pt,
          It,
          kt =
            'scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent'.split(
              ','
            ),
          Ft = J('transform'),
          Lt = q + 'transform',
          Nt = J('transformOrigin'),
          Rt = null !== J('perspective'),
          Mt = (V.Transform = function () {
            ;(this.perspective =
              parseFloat(r.defaultTransformPerspective) || 0),
              (this.force3D =
                !(!1 === r.defaultForce3D || !Rt) &&
                (r.defaultForce3D || 'auto'))
          }),
          Bt = n.k.SVGElement,
          jt = function (t, e, i) {
            var n,
              o = H.createElementNS('http://www.w3.org/2000/svg', t),
              r = /([a-z])([A-Z])/g
            for (n in i)
              o.setAttributeNS(null, n.replace(r, '$1-$2').toLowerCase(), i[n])
            return e.appendChild(o), o
          },
          Ht = H.documentElement || {},
          Ut =
            ((It = d || (/Android/i.test(W) && !n.k.chrome)),
            H.createElementNS &&
              Ht.appendChild &&
              !It &&
              ((xt = jt('svg', Ht)),
              (Pt = (Dt = jt('rect', xt, {
                width: 100,
                height: 50,
                x: 100,
              })).getBoundingClientRect().width),
              (Dt.style[Nt] = '50% 50%'),
              (Dt.style[Ft] = 'scaleX(0.5)'),
              (It = Pt === Dt.getBoundingClientRect().width && !(p && Rt)),
              Ht.removeChild(xt)),
            It),
          zt = function (t, e, i, n, o, a) {
            var s,
              l,
              u,
              c,
              h,
              p,
              f,
              d,
              _,
              g,
              m,
              y,
              v,
              b,
              C = t._gsTransform,
              w = Yt(t, !0)
            C && ((v = C.xOrigin), (b = C.yOrigin)),
              (!n || (s = n.split(' ')).length < 2) &&
                (0 === (f = t.getBBox()).x &&
                  0 === f.y &&
                  f.width + f.height === 0 &&
                  (f = {
                    x:
                      parseFloat(
                        t.hasAttribute('x')
                          ? t.getAttribute('x')
                          : t.hasAttribute('cx')
                          ? t.getAttribute('cx')
                          : 0
                      ) || 0,
                    y:
                      parseFloat(
                        t.hasAttribute('y')
                          ? t.getAttribute('y')
                          : t.hasAttribute('cy')
                          ? t.getAttribute('cy')
                          : 0
                      ) || 0,
                    width: 0,
                    height: 0,
                  }),
                (s = [
                  (-1 !== (e = lt(e).split(' '))[0].indexOf('%')
                    ? (parseFloat(e[0]) / 100) * f.width
                    : parseFloat(e[0])) + f.x,
                  (-1 !== e[1].indexOf('%')
                    ? (parseFloat(e[1]) / 100) * f.height
                    : parseFloat(e[1])) + f.y,
                ])),
              (i.xOrigin = c = parseFloat(s[0])),
              (i.yOrigin = h = parseFloat(s[1])),
              n &&
                w !== Wt &&
                ((p = w[0]),
                (f = w[1]),
                (d = w[2]),
                (_ = w[3]),
                (g = w[4]),
                (m = w[5]),
                (y = p * _ - f * d) &&
                  ((l = c * (_ / y) + h * (-d / y) + (d * m - _ * g) / y),
                  (u = c * (-f / y) + h * (p / y) - (p * m - f * g) / y),
                  (c = i.xOrigin = s[0] = l),
                  (h = i.yOrigin = s[1] = u))),
              C &&
                (a &&
                  ((i.xOffset = C.xOffset), (i.yOffset = C.yOffset), (C = i)),
                o || (!1 !== o && !1 !== r.defaultSmoothOrigin)
                  ? ((l = c - v),
                    (u = h - b),
                    (C.xOffset += l * w[0] + u * w[2] - l),
                    (C.yOffset += l * w[1] + u * w[3] - u))
                  : (C.xOffset = C.yOffset = 0)),
              a || t.setAttribute('data-svg-origin', s.join(' '))
          },
          Gt = function (t) {
            var e,
              i = U(
                'svg',
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute('xmlns')) ||
                  'http://www.w3.org/2000/svg'
              ),
              n = this.parentNode,
              o = this.nextSibling,
              r = this.style.cssText
            if (
              (Ht.appendChild(i),
              i.appendChild(this),
              (this.style.display = 'block'),
              t)
            )
              try {
                ;(e = this.getBBox()),
                  (this._originalGetBBox = this.getBBox),
                  (this.getBBox = Gt)
              } catch (t) {}
            else this._originalGetBBox && (e = this._originalGetBBox())
            return (
              o ? n.insertBefore(this, o) : n.appendChild(this),
              Ht.removeChild(i),
              (this.style.cssText = r),
              e
            )
          },
          Vt = function (t) {
            return !(
              !Bt ||
              !t.getCTM ||
              (t.parentNode && !t.ownerSVGElement) ||
              !(function (t) {
                try {
                  return t.getBBox()
                } catch (e) {
                  return Gt.call(t, !0)
                }
              })(t)
            )
          },
          Wt = [1, 0, 0, 1, 0, 0],
          Yt = function (t, e) {
            var i,
              n,
              o,
              r,
              a,
              s,
              l,
              u = t._gsTransform || new Mt(),
              c = t.style
            if (
              (Ft
                ? (n = tt(t, Lt, null, !0))
                : t.currentStyle &&
                  (n =
                    (n = t.currentStyle.filter.match(k)) && 4 === n.length
                      ? [
                          n[0].substr(4),
                          Number(n[2].substr(4)),
                          Number(n[1].substr(4)),
                          n[3].substr(4),
                          u.x || 0,
                          u.y || 0,
                        ].join(',')
                      : ''),
              (i = !n || 'none' === n || 'matrix(1, 0, 0, 1, 0, 0)' === n),
              Ft &&
                i &&
                !t.offsetParent &&
                t !== Ht &&
                ((r = c.display),
                (c.display = 'block'),
                ((l = t.parentNode) && t.offsetParent) ||
                  ((a = 1), (s = t.nextSibling), Ht.appendChild(t)),
                (i =
                  !(n = tt(t, Lt, null, !0)) ||
                  'none' === n ||
                  'matrix(1, 0, 0, 1, 0, 0)' === n),
                r ? (c.display = r) : Jt(c, 'display'),
                a &&
                  (s
                    ? l.insertBefore(t, s)
                    : l
                    ? l.appendChild(t)
                    : Ht.removeChild(t))),
              (u.svg || (t.getCTM && Vt(t))) &&
                (i &&
                  -1 !== (c[Ft] + '').indexOf('matrix') &&
                  ((n = c[Ft]), (i = 0)),
                (o = t.getAttribute('transform')),
                i &&
                  o &&
                  ((n =
                    'matrix(' +
                    (o = t.transform.baseVal.consolidate().matrix).a +
                    ',' +
                    o.b +
                    ',' +
                    o.c +
                    ',' +
                    o.d +
                    ',' +
                    o.e +
                    ',' +
                    o.f +
                    ')'),
                  (i = 0))),
              i)
            )
              return Wt
            for (o = (n || '').match(m) || [], Tt = o.length; --Tt > -1; )
              (r = Number(o[Tt])),
                (o[Tt] = (a = r - (r |= 0))
                  ? ((1e5 * a + (a < 0 ? -0.5 : 0.5)) | 0) / 1e5 + r
                  : r)
            return e && o.length > 6
              ? [o[0], o[1], o[4], o[5], o[12], o[13]]
              : o
          },
          Xt = (V.getTransform = function (t, e, i, o) {
            if (t._gsTransform && i && !o) return t._gsTransform
            var a,
              s,
              l,
              u,
              c,
              h,
              p = (i && t._gsTransform) || new Mt(),
              f = p.scaleX < 0,
              d = 1e5,
              _ =
                (Rt &&
                  (parseFloat(tt(t, Nt, e, !1, '0 0 0').split(' ')[2]) ||
                    p.zOrigin)) ||
                0,
              g = parseFloat(r.defaultTransformPerspective) || 0
            if (
              ((p.svg = !(!t.getCTM || !Vt(t))),
              p.svg &&
                (zt(
                  t,
                  tt(t, Nt, e, !1, '50% 50%') + '',
                  p,
                  t.getAttribute('data-svg-origin')
                ),
                (Et = r.useSVGTransformAttr || Ut)),
              (a = Yt(t)) !== Wt)
            ) {
              if (16 === a.length) {
                var m,
                  y,
                  v,
                  b,
                  C,
                  w = a[0],
                  T = a[1],
                  S = a[2],
                  A = a[3],
                  O = a[4],
                  E = a[5],
                  x = a[6],
                  D = a[7],
                  P = a[8],
                  I = a[9],
                  k = a[10],
                  F = a[12],
                  L = a[13],
                  N = a[14],
                  R = a[11],
                  B = Math.atan2(x, k)
                p.zOrigin &&
                  ((F = P * (N = -p.zOrigin) - a[12]),
                  (L = I * N - a[13]),
                  (N = k * N + p.zOrigin - a[14])),
                  (p.rotationX = B * M),
                  B &&
                    ((m = O * (b = Math.cos(-B)) + P * (C = Math.sin(-B))),
                    (y = E * b + I * C),
                    (v = x * b + k * C),
                    (P = O * -C + P * b),
                    (I = E * -C + I * b),
                    (k = x * -C + k * b),
                    (R = D * -C + R * b),
                    (O = m),
                    (E = y),
                    (x = v)),
                  (B = Math.atan2(-S, k)),
                  (p.rotationY = B * M),
                  B &&
                    ((y = T * (b = Math.cos(-B)) - I * (C = Math.sin(-B))),
                    (v = S * b - k * C),
                    (I = T * C + I * b),
                    (k = S * C + k * b),
                    (R = A * C + R * b),
                    (w = m = w * b - P * C),
                    (T = y),
                    (S = v)),
                  (B = Math.atan2(T, w)),
                  (p.rotation = B * M),
                  B &&
                    ((m = w * (b = Math.cos(B)) + T * (C = Math.sin(B))),
                    (y = O * b + E * C),
                    (v = P * b + I * C),
                    (T = T * b - w * C),
                    (E = E * b - O * C),
                    (I = I * b - P * C),
                    (w = m),
                    (O = y),
                    (P = v)),
                  p.rotationX &&
                    Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 &&
                    ((p.rotationX = p.rotation = 0),
                    (p.rotationY = 180 - p.rotationY)),
                  (B = Math.atan2(O, E)),
                  (p.scaleX =
                    ((Math.sqrt(w * w + T * T + S * S) * d + 0.5) | 0) / d),
                  (p.scaleY = ((Math.sqrt(E * E + x * x) * d + 0.5) | 0) / d),
                  (p.scaleZ =
                    ((Math.sqrt(P * P + I * I + k * k) * d + 0.5) | 0) / d),
                  (w /= p.scaleX),
                  (O /= p.scaleY),
                  (T /= p.scaleX),
                  (E /= p.scaleY),
                  Math.abs(B) > 2e-5
                    ? ((p.skewX = B * M),
                      (O = 0),
                      'simple' !== p.skewType && (p.scaleY *= 1 / Math.cos(B)))
                    : (p.skewX = 0),
                  (p.perspective = R ? 1 / (R < 0 ? -R : R) : 0),
                  (p.x = F),
                  (p.y = L),
                  (p.z = N),
                  p.svg &&
                    ((p.x -= p.xOrigin - (p.xOrigin * w - p.yOrigin * O)),
                    (p.y -= p.yOrigin - (p.yOrigin * T - p.xOrigin * E)))
              } else if (
                !Rt ||
                o ||
                !a.length ||
                p.x !== a[4] ||
                p.y !== a[5] ||
                (!p.rotationX && !p.rotationY)
              ) {
                var j = a.length >= 6,
                  H = j ? a[0] : 1,
                  U = a[1] || 0,
                  z = a[2] || 0,
                  G = j ? a[3] : 1
                ;(p.x = a[4] || 0),
                  (p.y = a[5] || 0),
                  (l = Math.sqrt(H * H + U * U)),
                  (u = Math.sqrt(G * G + z * z)),
                  (c = H || U ? Math.atan2(U, H) * M : p.rotation || 0),
                  (h = z || G ? Math.atan2(z, G) * M + c : p.skewX || 0),
                  (p.scaleX = l),
                  (p.scaleY = u),
                  (p.rotation = c),
                  (p.skewX = h),
                  Rt &&
                    ((p.rotationX = p.rotationY = p.z = 0),
                    (p.perspective = g),
                    (p.scaleZ = 1)),
                  p.svg &&
                    ((p.x -= p.xOrigin - (p.xOrigin * H + p.yOrigin * z)),
                    (p.y -= p.yOrigin - (p.xOrigin * U + p.yOrigin * G)))
              }
              for (s in (Math.abs(p.skewX) > 90 &&
                Math.abs(p.skewX) < 270 &&
                (f
                  ? ((p.scaleX *= -1),
                    (p.skewX += p.rotation <= 0 ? 180 : -180),
                    (p.rotation += p.rotation <= 0 ? 180 : -180))
                  : ((p.scaleY *= -1), (p.skewX += p.skewX <= 0 ? 180 : -180))),
              (p.zOrigin = _),
              p))
                p[s] < 2e-5 && p[s] > -2e-5 && (p[s] = 0)
            }
            return (
              i &&
                ((t._gsTransform = p),
                p.svg &&
                  (Et && t.style[Ft]
                    ? n.l.delayedCall(0.001, function () {
                        Jt(t.style, Ft)
                      })
                    : !Et &&
                      t.getAttribute('transform') &&
                      n.l.delayedCall(0.001, function () {
                        t.removeAttribute('transform')
                      }))),
              p
            )
          }),
          Zt = function (t) {
            var e,
              i,
              n = this.data,
              o = -n.rotation * R,
              r = o + n.skewX * R,
              a = 1e5,
              s = ((Math.cos(o) * n.scaleX * a) | 0) / a,
              l = ((Math.sin(o) * n.scaleX * a) | 0) / a,
              u = ((Math.sin(r) * -n.scaleY * a) | 0) / a,
              c = ((Math.cos(r) * n.scaleY * a) | 0) / a,
              h = this.t.style,
              p = this.t.currentStyle
            if (p) {
              ;(i = l), (l = -u), (u = -i), (e = p.filter), (h.filter = '')
              var f,
                _,
                g = this.t.offsetWidth,
                m = this.t.offsetHeight,
                y = 'absolute' !== p.position,
                v =
                  'progid:DXImageTransform.Microsoft.Matrix(M11=' +
                  s +
                  ', M12=' +
                  l +
                  ', M21=' +
                  u +
                  ', M22=' +
                  c,
                b = n.x + (g * n.xPercent) / 100,
                C = n.y + (m * n.yPercent) / 100
              if (
                (null != n.ox &&
                  ((b +=
                    (f = (n.oxp ? g * n.ox * 0.01 : n.ox) - g / 2) -
                    (f * s +
                      (_ = (n.oyp ? m * n.oy * 0.01 : n.oy) - m / 2) * l)),
                  (C += _ - (f * u + _ * c))),
                (v += y
                  ? ', Dx=' +
                    ((f = g / 2) - (f * s + (_ = m / 2) * l) + b) +
                    ', Dy=' +
                    (_ - (f * u + _ * c) + C) +
                    ')'
                  : ", sizingMethod='auto expand')"),
                -1 !== e.indexOf('DXImageTransform.Microsoft.Matrix(')
                  ? (h.filter = e.replace(F, v))
                  : (h.filter = v + ' ' + e),
                (0 !== t && 1 !== t) ||
                  (1 === s &&
                    0 === l &&
                    0 === u &&
                    1 === c &&
                    ((y && -1 === v.indexOf('Dx=0, Dy=0')) ||
                      (T.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                      (-1 === e.indexOf(e.indexOf('Alpha')) &&
                        h.removeAttribute('filter')))),
                !y)
              ) {
                var S,
                  A,
                  O,
                  E = d < 8 ? 1 : -1
                for (
                  f = n.ieOffsetX || 0,
                    _ = n.ieOffsetY || 0,
                    n.ieOffsetX = Math.round(
                      (g - ((s < 0 ? -s : s) * g + (l < 0 ? -l : l) * m)) / 2 +
                        b
                    ),
                    n.ieOffsetY = Math.round(
                      (m - ((c < 0 ? -c : c) * m + (u < 0 ? -u : u) * g)) / 2 +
                        C
                    ),
                    Tt = 0;
                  Tt < 4;
                  Tt++
                )
                  (O =
                    (i =
                      -1 !== (S = p[(A = at[Tt])]).indexOf('px')
                        ? parseFloat(S)
                        : et(this.t, A, parseFloat(S), S.replace(w, '')) ||
                          0) !== n[A]
                      ? Tt < 2
                        ? -n.ieOffsetX
                        : -n.ieOffsetY
                      : Tt < 2
                      ? f - n.ieOffsetX
                      : _ - n.ieOffsetY),
                    (h[A] =
                      (n[A] = Math.round(
                        i - O * (0 === Tt || 2 === Tt ? 1 : E)
                      )) + 'px')
              }
            }
          },
          qt =
            (V.set3DTransformRatio =
            V.setTransformRatio =
              function (t) {
                var e,
                  i,
                  n,
                  o,
                  r,
                  a,
                  s,
                  l,
                  u,
                  c,
                  h,
                  f,
                  d,
                  _,
                  g,
                  m,
                  y,
                  v,
                  b,
                  C,
                  w,
                  T = this.data,
                  S = this.t.style,
                  A = T.rotation,
                  O = T.rotationX,
                  E = T.rotationY,
                  x = T.scaleX,
                  D = T.scaleY,
                  P = T.scaleZ,
                  I = T.x,
                  k = T.y,
                  F = T.z,
                  L = T.svg,
                  N = T.perspective,
                  M = T.force3D,
                  B = T.skewY,
                  j = T.skewX
                if (
                  (B && ((j += B), (A += B)),
                  !(
                    (((1 !== t && 0 !== t) ||
                      'auto' !== M ||
                      (this.tween._totalTime !== this.tween._totalDuration &&
                        this.tween._totalTime)) &&
                      M) ||
                    F ||
                    N ||
                    E ||
                    O ||
                    1 !== P
                  ) ||
                    (Et && L) ||
                    !Rt)
                )
                  A || j || L
                    ? ((A *= R),
                      (C = j * R),
                      (w = 1e5),
                      (i = Math.cos(A) * x),
                      (r = Math.sin(A) * x),
                      (n = Math.sin(A - C) * -D),
                      (a = Math.cos(A - C) * D),
                      C &&
                        'simple' === T.skewType &&
                        ((e = Math.tan(C - B * R)),
                        (n *= e = Math.sqrt(1 + e * e)),
                        (a *= e),
                        B &&
                          ((e = Math.tan(B * R)),
                          (i *= e = Math.sqrt(1 + e * e)),
                          (r *= e))),
                      L &&
                        ((I +=
                          T.xOrigin -
                          (T.xOrigin * i + T.yOrigin * n) +
                          T.xOffset),
                        (k +=
                          T.yOrigin -
                          (T.xOrigin * r + T.yOrigin * a) +
                          T.yOffset),
                        Et &&
                          (T.xPercent || T.yPercent) &&
                          ((g = this.t.getBBox()),
                          (I += 0.01 * T.xPercent * g.width),
                          (k += 0.01 * T.yPercent * g.height)),
                        I < (g = 1e-6) && I > -g && (I = 0),
                        k < g && k > -g && (k = 0)),
                      (b =
                        ((i * w) | 0) / w +
                        ',' +
                        ((r * w) | 0) / w +
                        ',' +
                        ((n * w) | 0) / w +
                        ',' +
                        ((a * w) | 0) / w +
                        ',' +
                        I +
                        ',' +
                        k +
                        ')'),
                      L && Et
                        ? this.t.setAttribute('transform', 'matrix(' + b)
                        : (S[Ft] =
                            (T.xPercent || T.yPercent
                              ? 'translate(' +
                                T.xPercent +
                                '%,' +
                                T.yPercent +
                                '%) matrix('
                              : 'matrix(') + b))
                    : (S[Ft] =
                        (T.xPercent || T.yPercent
                          ? 'translate(' +
                            T.xPercent +
                            '%,' +
                            T.yPercent +
                            '%) matrix('
                          : 'matrix(') +
                        x +
                        ',0,0,' +
                        D +
                        ',' +
                        I +
                        ',' +
                        k +
                        ')')
                else {
                  if (
                    (p &&
                      (x < (g = 1e-4) && x > -g && (x = P = 2e-5),
                      D < g && D > -g && (D = P = 2e-5),
                      !N || T.z || T.rotationX || T.rotationY || (N = 0)),
                    A || j)
                  )
                    (A *= R),
                      (m = i = Math.cos(A)),
                      (y = r = Math.sin(A)),
                      j &&
                        ((A -= j * R),
                        (m = Math.cos(A)),
                        (y = Math.sin(A)),
                        'simple' === T.skewType &&
                          ((e = Math.tan((j - B) * R)),
                          (m *= e = Math.sqrt(1 + e * e)),
                          (y *= e),
                          T.skewY &&
                            ((e = Math.tan(B * R)),
                            (i *= e = Math.sqrt(1 + e * e)),
                            (r *= e)))),
                      (n = -y),
                      (a = m)
                  else {
                    if (!(E || O || 1 !== P || N || L))
                      return void (S[Ft] =
                        (T.xPercent || T.yPercent
                          ? 'translate(' +
                            T.xPercent +
                            '%,' +
                            T.yPercent +
                            '%) translate3d('
                          : 'translate3d(') +
                        I +
                        'px,' +
                        k +
                        'px,' +
                        F +
                        'px)' +
                        (1 !== x || 1 !== D
                          ? ' scale(' + x + ',' + D + ')'
                          : ''))
                    ;(i = a = 1), (n = r = 0)
                  }
                  ;(c = 1),
                    (o = s = l = u = h = f = 0),
                    (d = N ? -1 / N : 0),
                    (_ = T.zOrigin),
                    (g = 1e-6),
                    ',',
                    '0',
                    (A = E * R) &&
                      ((m = Math.cos(A)),
                      (l = -(y = Math.sin(A))),
                      (h = d * -y),
                      (o = i * y),
                      (s = r * y),
                      (c = m),
                      (d *= m),
                      (i *= m),
                      (r *= m)),
                    (A = O * R) &&
                      ((e = n * (m = Math.cos(A)) + o * (y = Math.sin(A))),
                      (v = a * m + s * y),
                      (u = c * y),
                      (f = d * y),
                      (o = n * -y + o * m),
                      (s = a * -y + s * m),
                      (c *= m),
                      (d *= m),
                      (n = e),
                      (a = v)),
                    1 !== P && ((o *= P), (s *= P), (c *= P), (d *= P)),
                    1 !== D && ((n *= D), (a *= D), (u *= D), (f *= D)),
                    1 !== x && ((i *= x), (r *= x), (l *= x), (h *= x)),
                    (_ || L) &&
                      (_ && ((I += o * -_), (k += s * -_), (F += c * -_ + _)),
                      L &&
                        ((I +=
                          T.xOrigin -
                          (T.xOrigin * i + T.yOrigin * n) +
                          T.xOffset),
                        (k +=
                          T.yOrigin -
                          (T.xOrigin * r + T.yOrigin * a) +
                          T.yOffset)),
                      I < g && I > -g && (I = '0'),
                      k < g && k > -g && (k = '0'),
                      F < g && F > -g && (F = 0)),
                    (b =
                      T.xPercent || T.yPercent
                        ? 'translate(' +
                          T.xPercent +
                          '%,' +
                          T.yPercent +
                          '%) matrix3d('
                        : 'matrix3d('),
                    (b +=
                      (i < g && i > -g ? '0' : i) +
                      ',' +
                      (r < g && r > -g ? '0' : r) +
                      ',' +
                      (l < g && l > -g ? '0' : l)),
                    (b +=
                      ',' +
                      (h < g && h > -g ? '0' : h) +
                      ',' +
                      (n < g && n > -g ? '0' : n) +
                      ',' +
                      (a < g && a > -g ? '0' : a)),
                    O || E || 1 !== P
                      ? ((b +=
                          ',' +
                          (u < g && u > -g ? '0' : u) +
                          ',' +
                          (f < g && f > -g ? '0' : f) +
                          ',' +
                          (o < g && o > -g ? '0' : o)),
                        (b +=
                          ',' +
                          (s < g && s > -g ? '0' : s) +
                          ',' +
                          (c < g && c > -g ? '0' : c) +
                          ',' +
                          (d < g && d > -g ? '0' : d) +
                          ','))
                      : (b += ',0,0,0,0,1,0,'),
                    (b +=
                      I + ',' + k + ',' + F + ',' + (N ? 1 + -F / N : 1) + ')'),
                    (S[Ft] = b)
                }
              })
        ;((l = Mt.prototype).x =
          l.y =
          l.z =
          l.skewX =
          l.skewY =
          l.rotation =
          l.rotationX =
          l.rotationY =
          l.zOrigin =
          l.xPercent =
          l.yPercent =
          l.xOffset =
          l.yOffset =
            0),
          (l.scaleX = l.scaleY = l.scaleZ = 1),
          At(
            'transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin',
            {
              parser: function (t, e, n, o, a, s, l) {
                if (o._lastParsedTransform === l) return a
                o._lastParsedTransform = l
                var u = l.scale && 'function' == typeof l.scale ? l.scale : 0
                u && (l.scale = u(g, t))
                var c,
                  h,
                  p,
                  f,
                  d,
                  m,
                  y,
                  v,
                  b,
                  C = t._gsTransform,
                  w = t.style,
                  T = kt.length,
                  S = l,
                  A = {},
                  O = Xt(t, i, !0, S.parseTransform),
                  E =
                    S.transform &&
                    ('function' == typeof S.transform
                      ? S.transform(g, _)
                      : S.transform)
                if (
                  ((O.skewType = S.skewType || O.skewType || r.defaultSkewType),
                  (o._transform = O),
                  'rotationZ' in S && (S.rotation = S.rotationZ),
                  E && 'string' == typeof E && Ft)
                )
                  ((h = z.style)[Ft] = E),
                    (h.display = 'block'),
                    (h.position = 'absolute'),
                    -1 !== E.indexOf('%') &&
                      ((h.width = tt(t, 'width')),
                      (h.height = tt(t, 'height'))),
                    H.body.appendChild(z),
                    (c = Xt(z, null, !1)),
                    'simple' === O.skewType &&
                      (c.scaleY *= Math.cos(c.skewX * R)),
                    O.svg &&
                      ((m = O.xOrigin),
                      (y = O.yOrigin),
                      (c.x -= O.xOffset),
                      (c.y -= O.yOffset),
                      (S.transformOrigin || S.svgOrigin) &&
                        ((E = {}),
                        zt(
                          t,
                          lt(S.transformOrigin),
                          E,
                          S.svgOrigin,
                          S.smoothOrigin,
                          !0
                        ),
                        (m = E.xOrigin),
                        (y = E.yOrigin),
                        (c.x -= E.xOffset - O.xOffset),
                        (c.y -= E.yOffset - O.yOffset)),
                      (m || y) &&
                        ((v = Yt(z, !0)),
                        (c.x -= m - (m * v[0] + y * v[2])),
                        (c.y -= y - (m * v[1] + y * v[3])))),
                    H.body.removeChild(z),
                    c.perspective || (c.perspective = O.perspective),
                    null != S.xPercent &&
                      (c.xPercent = ct(S.xPercent, O.xPercent)),
                    null != S.yPercent &&
                      (c.yPercent = ct(S.yPercent, O.yPercent))
                else if ('object' == typeof S) {
                  if (
                    ((c = {
                      scaleX: ct(
                        null != S.scaleX ? S.scaleX : S.scale,
                        O.scaleX
                      ),
                      scaleY: ct(
                        null != S.scaleY ? S.scaleY : S.scale,
                        O.scaleY
                      ),
                      scaleZ: ct(S.scaleZ, O.scaleZ),
                      x: ct(S.x, O.x),
                      y: ct(S.y, O.y),
                      z: ct(S.z, O.z),
                      xPercent: ct(S.xPercent, O.xPercent),
                      yPercent: ct(S.yPercent, O.yPercent),
                      perspective: ct(S.transformPerspective, O.perspective),
                    }),
                    null != (d = S.directionalRotation))
                  )
                    if ('object' == typeof d) for (h in d) S[h] = d[h]
                    else S.rotation = d
                  'string' == typeof S.x &&
                    -1 !== S.x.indexOf('%') &&
                    ((c.x = 0), (c.xPercent = ct(S.x, O.xPercent))),
                    'string' == typeof S.y &&
                      -1 !== S.y.indexOf('%') &&
                      ((c.y = 0), (c.yPercent = ct(S.y, O.yPercent))),
                    (c.rotation = ht(
                      'rotation' in S
                        ? S.rotation
                        : 'shortRotation' in S
                        ? S.shortRotation + '_short'
                        : O.rotation,
                      O.rotation,
                      'rotation',
                      A
                    )),
                    Rt &&
                      ((c.rotationX = ht(
                        'rotationX' in S
                          ? S.rotationX
                          : 'shortRotationX' in S
                          ? S.shortRotationX + '_short'
                          : O.rotationX || 0,
                        O.rotationX,
                        'rotationX',
                        A
                      )),
                      (c.rotationY = ht(
                        'rotationY' in S
                          ? S.rotationY
                          : 'shortRotationY' in S
                          ? S.shortRotationY + '_short'
                          : O.rotationY || 0,
                        O.rotationY,
                        'rotationY',
                        A
                      ))),
                    (c.skewX = ht(S.skewX, O.skewX)),
                    (c.skewY = ht(S.skewY, O.skewY))
                }
                for (
                  Rt &&
                    null != S.force3D &&
                    ((O.force3D = S.force3D), (f = !0)),
                    (p =
                      O.force3D ||
                      O.z ||
                      O.rotationX ||
                      O.rotationY ||
                      c.z ||
                      c.rotationX ||
                      c.rotationY ||
                      c.perspective) ||
                      null == S.scale ||
                      (c.scaleZ = 1);
                  --T > -1;

                )
                  ((E = c[(b = kt[T])] - O[b]) > 1e-6 ||
                    E < -1e-6 ||
                    null != S[b] ||
                    null != B[b]) &&
                    ((f = !0),
                    (a = new bt(O, b, O[b], E, a)),
                    b in A && (a.e = A[b]),
                    (a.xs0 = 0),
                    (a.plugin = s),
                    o._overwriteProps.push(a.n))
                return (
                  (E =
                    'function' == typeof S.transformOrigin
                      ? S.transformOrigin(g, _)
                      : S.transformOrigin),
                  O.svg &&
                    (E || S.svgOrigin) &&
                    ((m = O.xOffset),
                    (y = O.yOffset),
                    zt(t, lt(E), c, S.svgOrigin, S.smoothOrigin),
                    (a = Ct(
                      O,
                      'xOrigin',
                      (C ? O : c).xOrigin,
                      c.xOrigin,
                      a,
                      'transformOrigin'
                    )),
                    (a = Ct(
                      O,
                      'yOrigin',
                      (C ? O : c).yOrigin,
                      c.yOrigin,
                      a,
                      'transformOrigin'
                    )),
                    (m === O.xOffset && y === O.yOffset) ||
                      ((a = Ct(
                        O,
                        'xOffset',
                        C ? m : O.xOffset,
                        O.xOffset,
                        a,
                        'transformOrigin'
                      )),
                      (a = Ct(
                        O,
                        'yOffset',
                        C ? y : O.yOffset,
                        O.yOffset,
                        a,
                        'transformOrigin'
                      ))),
                    (E = '0px 0px')),
                  (E || (Rt && p && O.zOrigin)) &&
                    (Ft
                      ? ((f = !0),
                        (b = Nt),
                        E ||
                          (E =
                            (E = (tt(t, b, i, !1, '50% 50%') + '').split(
                              ' '
                            ))[0] +
                            ' ' +
                            E[1] +
                            ' ' +
                            O.zOrigin +
                            'px'),
                        (E += ''),
                        ((a = new bt(w, b, 0, 0, a, -1, 'transformOrigin')).b =
                          w[b]),
                        (a.plugin = s),
                        Rt
                          ? ((h = O.zOrigin),
                            (E = E.split(' ')),
                            (O.zOrigin =
                              (E.length > 2 ? parseFloat(E[2]) : h) || 0),
                            (a.xs0 = a.e =
                              E[0] + ' ' + (E[1] || '50%') + ' 0px'),
                            ((a = new bt(O, 'zOrigin', 0, 0, a, -1, a.n)).b =
                              h),
                            (a.xs0 = a.e = O.zOrigin))
                          : (a.xs0 = a.e = E))
                      : lt(E + '', O)),
                  f &&
                    (o._transformType =
                      (O.svg && Et) || (!p && 3 !== this._transformType)
                        ? 2
                        : 3),
                  u && (l.scale = u),
                  a
                )
              },
              allowFunc: !0,
              prefix: !0,
            }
          ),
          At('boxShadow', {
            defaultValue: '0px 0px 0px 0px #999',
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: 'inset',
          }),
          At('clipPath', {
            defaultValue: 'inset(0%)',
            prefix: !0,
            multi: !0,
            formatter: mt('inset(0% 0% 0% 0%)', !1, !0),
          }),
          At('borderRadius', {
            defaultValue: '0px',
            parser: function (t, n, o, r, a, s) {
              n = this.format(n)
              var l,
                u,
                c,
                h,
                p,
                f,
                d,
                _,
                g,
                m,
                y,
                v,
                b,
                C,
                w,
                T,
                S = [
                  'borderTopLeftRadius',
                  'borderTopRightRadius',
                  'borderBottomRightRadius',
                  'borderBottomLeftRadius',
                ],
                A = t.style
              for (
                g = parseFloat(t.offsetWidth),
                  m = parseFloat(t.offsetHeight),
                  l = n.split(' '),
                  u = 0;
                u < S.length;
                u++
              )
                this.p.indexOf('border') && (S[u] = J(S[u])),
                  -1 !== (p = h = tt(t, S[u], i, !1, '0px')).indexOf(' ') &&
                    ((h = p.split(' ')), (p = h[0]), (h = h[1])),
                  (f = c = l[u]),
                  (d = parseFloat(p)),
                  (v = p.substr((d + '').length)),
                  (b = '=' === f.charAt(1))
                    ? ((_ = parseInt(f.charAt(0) + '1', 10)),
                      (f = f.substr(2)),
                      (_ *= parseFloat(f)),
                      (y = f.substr((_ + '').length - (_ < 0 ? 1 : 0)) || ''))
                    : ((_ = parseFloat(f)), (y = f.substr((_ + '').length))),
                  '' === y && (y = e[o] || v),
                  y !== v &&
                    ((C = et(t, 'borderLeft', d, v)),
                    (w = et(t, 'borderTop', d, v)),
                    '%' === y
                      ? ((p = (C / g) * 100 + '%'), (h = (w / m) * 100 + '%'))
                      : 'em' === y
                      ? ((p = C / (T = et(t, 'borderLeft', 1, 'em')) + 'em'),
                        (h = w / T + 'em'))
                      : ((p = C + 'px'), (h = w + 'px')),
                    b &&
                      ((f = parseFloat(p) + _ + y),
                      (c = parseFloat(h) + _ + y))),
                  (a = wt(A, S[u], p + ' ' + h, f + ' ' + c, !1, '0px', a))
              return a
            },
            prefix: !0,
            formatter: mt('0px 0px 0px 0px', !1, !0),
          }),
          At(
            'borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius',
            {
              defaultValue: '0px',
              parser: function (t, e, n, o, r, a) {
                return wt(
                  t.style,
                  n,
                  this.format(tt(t, n, i, !1, '0px 0px')),
                  this.format(e),
                  !1,
                  '0px',
                  r
                )
              },
              prefix: !0,
              formatter: mt('0px 0px', !1, !0),
            }
          ),
          At('backgroundPosition', {
            defaultValue: '0 0',
            parser: function (t, e, n, o, r, a) {
              var s,
                l,
                u,
                c,
                h,
                p,
                f = 'background-position',
                _ = i || $(t),
                g = this.format(
                  (_
                    ? d
                      ? _.getPropertyValue(f + '-x') +
                        ' ' +
                        _.getPropertyValue(f + '-y')
                      : _.getPropertyValue(f)
                    : t.currentStyle.backgroundPositionX +
                      ' ' +
                      t.currentStyle.backgroundPositionY) || '0 0'
                ),
                m = this.format(e)
              if (
                (-1 !== g.indexOf('%')) != (-1 !== m.indexOf('%')) &&
                m.split(',').length < 2 &&
                (p = tt(t, 'backgroundImage').replace(D, '')) &&
                'none' !== p
              ) {
                for (
                  s = g.split(' '),
                    l = m.split(' '),
                    G.setAttribute('src', p),
                    u = 2;
                  --u > -1;

                )
                  (c = -1 !== (g = s[u]).indexOf('%')) !==
                    (-1 !== l[u].indexOf('%')) &&
                    ((h =
                      0 === u
                        ? t.offsetWidth - G.width
                        : t.offsetHeight - G.height),
                    (s[u] = c
                      ? (parseFloat(g) / 100) * h + 'px'
                      : (parseFloat(g) / h) * 100 + '%'))
                g = s.join(' ')
              }
              return this.parseComplex(t.style, g, m, r, a)
            },
            formatter: lt,
          }),
          At('backgroundSize', {
            defaultValue: '0 0',
            formatter: function (t) {
              return 'co' === (t += '').substr(0, 2)
                ? t
                : lt(-1 === t.indexOf(' ') ? t + ' ' + t : t)
            },
          }),
          At('perspective', { defaultValue: '0px', prefix: !0 }),
          At('perspectiveOrigin', { defaultValue: '50% 50%', prefix: !0 }),
          At('transformStyle', { prefix: !0 }),
          At('backfaceVisibility', { prefix: !0 }),
          At('userSelect', { prefix: !0 }),
          At('margin', {
            parser: yt('marginTop,marginRight,marginBottom,marginLeft'),
          }),
          At('padding', {
            parser: yt('paddingTop,paddingRight,paddingBottom,paddingLeft'),
          }),
          At('clip', {
            defaultValue: 'rect(0px,0px,0px,0px)',
            parser: function (t, e, n, o, r, a) {
              var s, l, u
              return (
                d < 9
                  ? ((l = t.currentStyle),
                    (u = d < 8 ? ' ' : ','),
                    (s =
                      'rect(' +
                      l.clipTop +
                      u +
                      l.clipRight +
                      u +
                      l.clipBottom +
                      u +
                      l.clipLeft +
                      ')'),
                    (e = this.format(e).split(',').join(u)))
                  : ((s = this.format(tt(t, this.p, i, !1, this.dflt))),
                    (e = this.format(e))),
                this.parseComplex(t.style, s, e, r, a)
              )
            },
          }),
          At('textShadow', {
            defaultValue: '0px 0px 0px #999',
            color: !0,
            multi: !0,
          }),
          At('autoRound,strictUnits', {
            parser: function (t, e, i, n, o) {
              return o
            },
          }),
          At('border', {
            defaultValue: '0px solid #000',
            parser: function (t, e, n, o, r, a) {
              var s = tt(t, 'borderTopWidth', i, !1, '0px'),
                l = this.format(e).split(' '),
                u = l[0].replace(w, '')
              return (
                'px' !== u &&
                  (s = parseFloat(s) / et(t, 'borderTopWidth', 1, u) + u),
                this.parseComplex(
                  t.style,
                  this.format(
                    s +
                      ' ' +
                      tt(t, 'borderTopStyle', i, !1, 'solid') +
                      ' ' +
                      tt(t, 'borderTopColor', i, !1, '#000')
                  ),
                  l.join(' '),
                  r,
                  a
                )
              )
            },
            color: !0,
            formatter: function (t) {
              var e = t.split(' ')
              return (
                e[0] +
                ' ' +
                (e[1] || 'solid') +
                ' ' +
                (t.match(gt) || ['#000'])[0]
              )
            },
          }),
          At('borderWidth', {
            parser: yt(
              'borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth'
            ),
          }),
          At('float,cssFloat,styleFloat', {
            parser: function (t, e, i, n, o, r) {
              var a = t.style,
                s = 'cssFloat' in a ? 'cssFloat' : 'styleFloat'
              return new bt(a, s, 0, 0, o, -1, i, !1, 0, a[s], e)
            },
          })
        var Kt = function (t) {
          var e,
            i = this.t,
            n = i.filter || tt(this.data, 'filter') || '',
            o = (this.s + this.c * t) | 0
          100 === o &&
            (-1 === n.indexOf('atrix(') &&
            -1 === n.indexOf('radient(') &&
            -1 === n.indexOf('oader(')
              ? (i.removeAttribute('filter'), (e = !tt(this.data, 'filter')))
              : ((i.filter = n.replace(A, '')), (e = !0))),
            e ||
              (this.xn1 && (i.filter = n = n || 'alpha(opacity=' + o + ')'),
              -1 === n.indexOf('pacity')
                ? (0 === o && this.xn1) ||
                  (i.filter = n + ' alpha(opacity=' + o + ')')
                : (i.filter = n.replace(T, 'opacity=' + o)))
        }
        At('opacity,alpha,autoAlpha', {
          defaultValue: '1',
          parser: function (t, e, n, o, r, a) {
            var s = parseFloat(tt(t, 'opacity', i, !1, '1')),
              l = t.style,
              u = 'autoAlpha' === n
            return (
              'string' == typeof e &&
                '=' === e.charAt(1) &&
                (e =
                  ('-' === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s),
              u &&
                1 === s &&
                'hidden' === tt(t, 'visibility', i) &&
                0 !== e &&
                (s = 0),
              Y
                ? (r = new bt(l, 'opacity', s, e - s, r))
                : (((r = new bt(l, 'opacity', 100 * s, 100 * (e - s), r)).xn1 =
                    u ? 1 : 0),
                  (l.zoom = 1),
                  (r.type = 2),
                  (r.b = 'alpha(opacity=' + r.s + ')'),
                  (r.e = 'alpha(opacity=' + (r.s + r.c) + ')'),
                  (r.data = t),
                  (r.plugin = a),
                  (r.setRatio = Kt)),
              u &&
                (((r = new bt(
                  l,
                  'visibility',
                  0,
                  0,
                  r,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== s ? 'inherit' : 'hidden',
                  0 === e ? 'hidden' : 'inherit'
                )).xs0 = 'inherit'),
                o._overwriteProps.push(r.n),
                o._overwriteProps.push(n)),
              r
            )
          },
        })
        var Jt = function (t, e) {
            e &&
              (t.removeProperty
                ? (('ms' !== e.substr(0, 2) && 'webkit' !== e.substr(0, 6)) ||
                    (e = '-' + e),
                  t.removeProperty(e.replace(E, '-$1').toLowerCase()))
                : t.removeAttribute(e))
          },
          Qt = function (t) {
            if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
              this.t.setAttribute('class', 0 === t ? this.b : this.e)
              for (var e = this.data, i = this.t.style; e; )
                e.v ? (i[e.p] = e.v) : Jt(i, e.p), (e = e._next)
              1 === t &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null)
            } else
              this.t.getAttribute('class') !== this.e &&
                this.t.setAttribute('class', this.e)
          }
        At('className', {
          parser: function (e, n, o, r, a, s, l) {
            var u,
              c,
              h,
              p,
              f,
              d = e.getAttribute('class') || '',
              _ = e.style.cssText
            if (
              (((a = r._classNamePT = new bt(e, o, 0, 0, a, 2)).setRatio = Qt),
              (a.pr = -11),
              (t = !0),
              (a.b = d),
              (c = nt(e, i)),
              (h = e._gsClassPT))
            ) {
              for (p = {}, f = h.data; f; ) (p[f.p] = 1), (f = f._next)
              h.setRatio(1)
            }
            return (
              (e._gsClassPT = a),
              (a.e =
                '=' !== n.charAt(1)
                  ? n
                  : d.replace(
                      new RegExp('(?:\\s|^)' + n.substr(2) + '(?![\\w-])'),
                      ''
                    ) + ('+' === n.charAt(0) ? ' ' + n.substr(2) : '')),
              e.setAttribute('class', a.e),
              (u = ot(e, c, nt(e), l, p)),
              e.setAttribute('class', d),
              (a.data = u.firstMPT),
              e.style.cssText !== _ && (e.style.cssText = _),
              (a = a.xfirst = r.parse(e, u.difs, a, s))
            )
          },
        })
        var $t = function (t) {
          if (
            (1 === t || 0 === t) &&
            this.data._totalTime === this.data._totalDuration &&
            'isFromStart' !== this.data.data
          ) {
            var e,
              i,
              n,
              o,
              r,
              a = this.t.style,
              l = s.transform.parse
            if ('all' === this.e) (a.cssText = ''), (o = !0)
            else
              for (
                n = (e = this.e.split(' ').join('').split(',')).length;
                --n > -1;

              )
                (i = e[n]),
                  s[i] &&
                    (s[i].parse === l
                      ? (o = !0)
                      : (i = 'transformOrigin' === i ? Nt : s[i].p)),
                  Jt(a, i)
            o &&
              (Jt(a, Ft),
              (r = this.t._gsTransform) &&
                (r.svg &&
                  (this.t.removeAttribute('data-svg-origin'),
                  this.t.removeAttribute('transform')),
                delete this.t._gsTransform))
          }
        }
        for (
          At('clearProps', {
            parser: function (e, i, n, o, r) {
              return (
                ((r = new bt(e, n, 0, 0, r, 2)).setRatio = $t),
                (r.e = i),
                (r.pr = -10),
                (r.data = o._tween),
                (t = !0),
                r
              )
            },
          }),
            l = 'bezier,throwProps,physicsProps,physics2D'.split(','),
            Tt = l.length;
          Tt--;

        )
          Ot(l[Tt])
        ;((l = r.prototype)._firstPT =
          l._lastParsedTransform =
          l._transform =
            null),
          (l._onInitTween = function (n, a, l, p) {
            if (!n.nodeType) return !1
            ;(this._target = _ = n),
              (this._tween = l),
              (this._vars = a),
              (g = p),
              (u = a.autoRound),
              (t = !1),
              (e = a.suffixMap || r.suffixMap),
              (i = $(n)),
              (o = this._overwriteProps)
            var d,
              m,
              y,
              v,
              b,
              C,
              w,
              T,
              A,
              O = n.style
            if (
              (c &&
                '' === O.zIndex &&
                (('auto' !== (d = tt(n, 'zIndex', i)) && '' !== d) ||
                  this._addLazySet(O, 'zIndex', 0)),
              'string' == typeof a &&
                ((v = O.cssText),
                (d = nt(n, i)),
                (O.cssText = v + ';' + a),
                (d = ot(n, d, nt(n)).difs),
                !Y && S.test(a) && (d.opacity = parseFloat(RegExp.$1)),
                (a = d),
                (O.cssText = v)),
              a.className
                ? (this._firstPT = m =
                    s.className.parse(
                      n,
                      a.className,
                      'className',
                      this,
                      null,
                      null,
                      a
                    ))
                : (this._firstPT = m = this.parse(n, a, null)),
              this._transformType)
            ) {
              for (
                A = 3 === this._transformType,
                  Ft
                    ? h &&
                      ((c = !0),
                      '' === O.zIndex &&
                        (('auto' !== (w = tt(n, 'zIndex', i)) && '' !== w) ||
                          this._addLazySet(O, 'zIndex', 0)),
                      f &&
                        this._addLazySet(
                          O,
                          'WebkitBackfaceVisibility',
                          this._vars.WebkitBackfaceVisibility ||
                            (A ? 'visible' : 'hidden')
                        ))
                    : (O.zoom = 1),
                  y = m;
                y && y._next;

              )
                y = y._next
              ;(T = new bt(n, 'transform', 0, 0, null, 2)),
                this._linkCSSP(T, null, y),
                (T.setRatio = Ft ? qt : Zt),
                (T.data = this._transform || Xt(n, i, !0)),
                (T.tween = l),
                (T.pr = -1),
                o.pop()
            }
            if (t) {
              for (; m; ) {
                for (C = m._next, y = v; y && y.pr > m.pr; ) y = y._next
                ;(m._prev = y ? y._prev : b) ? (m._prev._next = m) : (v = m),
                  (m._next = y) ? (y._prev = m) : (b = m),
                  (m = C)
              }
              this._firstPT = v
            }
            return !0
          }),
          (l.parse = function (t, n, o, r) {
            var a,
              l,
              c,
              h,
              p,
              f,
              d,
              m,
              y,
              v,
              b = t.style
            for (a in n) {
              if (
                ((f = n[a]),
                (l = s[a]),
                'function' != typeof f || (l && l.allowFunc) || (f = f(g, _)),
                l)
              )
                o = l.parse(t, f, a, this, o, r, n)
              else {
                if ('--' === a.substr(0, 2)) {
                  this._tween._propLookup[a] = this._addTween.call(
                    this._tween,
                    t.style,
                    'setProperty',
                    $(t).getPropertyValue(a) + '',
                    f + '',
                    a,
                    !1,
                    a
                  )
                  continue
                }
                ;(p = tt(t, a, i) + ''),
                  (y = 'string' == typeof f),
                  'color' === a ||
                  'fill' === a ||
                  'stroke' === a ||
                  -1 !== a.indexOf('Color') ||
                  (y && O.test(f))
                    ? (y ||
                        (f =
                          ((f = dt(f)).length > 3 ? 'rgba(' : 'rgb(') +
                          f.join(',') +
                          ')'),
                      (o = wt(b, a, p, f, !0, 'transparent', o, 0, r)))
                    : y && N.test(f)
                    ? (o = wt(b, a, p, f, !0, null, o, 0, r))
                    : ((d =
                        (c = parseFloat(p)) || 0 === c
                          ? p.substr((c + '').length)
                          : ''),
                      ('' !== p && 'auto' !== p) ||
                        ('width' === a || 'height' === a
                          ? ((c = st(t, a, i)), (d = 'px'))
                          : 'left' === a || 'top' === a
                          ? ((c = it(t, a, i)), (d = 'px'))
                          : ((c = 'opacity' !== a ? 0 : 1), (d = ''))),
                      (v = y && '=' === f.charAt(1))
                        ? ((h = parseInt(f.charAt(0) + '1', 10)),
                          (f = f.substr(2)),
                          (h *= parseFloat(f)),
                          (m = f.replace(w, '')))
                        : ((h = parseFloat(f)),
                          (m = y ? f.replace(w, '') : '')),
                      '' === m && (m = a in e ? e[a] : d),
                      (f = h || 0 === h ? (v ? h + c : h) + m : n[a]),
                      d !== m &&
                        (('' === m && 'lineHeight' !== a) ||
                          ((h || 0 === h) &&
                            c &&
                            ((c = et(t, a, c, d)),
                            '%' === m
                              ? ((c /= et(t, a, 100, '%') / 100),
                                !0 !== n.strictUnits && (p = c + '%'))
                              : 'em' === m ||
                                'rem' === m ||
                                'vw' === m ||
                                'vh' === m
                              ? (c /= et(t, a, 1, m))
                              : 'px' !== m &&
                                ((h = et(t, a, h, m)), (m = 'px')),
                            v && (h || 0 === h) && (f = h + c + m)))),
                      v && (h += c),
                      (!c && 0 !== c) || (!h && 0 !== h)
                        ? void 0 !== b[a] &&
                          (f || (f + '' != 'NaN' && null != f))
                          ? ((o = new bt(
                              b,
                              a,
                              h || c || 0,
                              0,
                              o,
                              -1,
                              a,
                              !1,
                              0,
                              p,
                              f
                            )).xs0 =
                              'none' !== f ||
                              ('display' !== a && -1 === a.indexOf('Style'))
                                ? f
                                : p)
                          : Z('invalid ' + a + ' tween value: ' + n[a])
                        : ((o = new bt(
                            b,
                            a,
                            c,
                            h - c,
                            o,
                            0,
                            a,
                            !1 !== u && ('px' === m || 'zIndex' === a),
                            0,
                            p,
                            f
                          )).xs0 = m))
              }
              r && o && !o.plugin && (o.plugin = r)
            }
            return o
          }),
          (l.setRatio = function (t) {
            var e,
              i,
              n,
              o = this._firstPT
            if (
              1 !== t ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                t ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                -1e-6 === this._tween._rawPrevTime
              )
                for (; o; ) {
                  if (
                    ((e = o.c * t + o.s),
                    o.r ? (e = o.r(e)) : e < 1e-6 && e > -1e-6 && (e = 0),
                    o.type)
                  )
                    if (1 === o.type)
                      if (2 === (n = o.l))
                        o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2
                      else if (3 === n)
                        o.t[o.p] =
                          o.xs0 + e + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3
                      else if (4 === n)
                        o.t[o.p] =
                          o.xs0 +
                          e +
                          o.xs1 +
                          o.xn1 +
                          o.xs2 +
                          o.xn2 +
                          o.xs3 +
                          o.xn3 +
                          o.xs4
                      else if (5 === n)
                        o.t[o.p] =
                          o.xs0 +
                          e +
                          o.xs1 +
                          o.xn1 +
                          o.xs2 +
                          o.xn2 +
                          o.xs3 +
                          o.xn3 +
                          o.xs4 +
                          o.xn4 +
                          o.xs5
                      else {
                        for (i = o.xs0 + e + o.xs1, n = 1; n < o.l; n++)
                          i += o['xn' + n] + o['xs' + (n + 1)]
                        o.t[o.p] = i
                      }
                    else
                      -1 === o.type
                        ? (o.t[o.p] = o.xs0)
                        : o.setRatio && o.setRatio(t)
                  else o.t[o.p] = e + o.xs0
                  o = o._next
                }
              else
                for (; o; )
                  2 !== o.type ? (o.t[o.p] = o.b) : o.setRatio(t), (o = o._next)
            else
              for (; o; ) {
                if (2 !== o.type)
                  if (o.r && -1 !== o.type)
                    if (((e = o.r(o.s + o.c)), o.type)) {
                      if (1 === o.type) {
                        for (
                          n = o.l, i = o.xs0 + e + o.xs1, n = 1;
                          n < o.l;
                          n++
                        )
                          i += o['xn' + n] + o['xs' + (n + 1)]
                        o.t[o.p] = i
                      }
                    } else o.t[o.p] = e + o.xs0
                  else o.t[o.p] = o.e
                else o.setRatio(t)
                o = o._next
              }
          }),
          (l._enableTransforms = function (t) {
            ;(this._transform = this._transform || Xt(this._target, i, !0)),
              (this._transformType =
                (this._transform.svg && Et) || (!t && 3 !== this._transformType)
                  ? 2
                  : 3)
          })
        var te = function (t) {
          ;(this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0)
        }
        ;(l._addLazySet = function (t, e, i) {
          var n = (this._firstPT = new bt(t, e, 0, 0, this._firstPT, 2))
          ;(n.e = i), (n.setRatio = te), (n.data = this)
        }),
          (l._linkCSSP = function (t, e, i, n) {
            return (
              t &&
                (e && (e._prev = t),
                t._next && (t._next._prev = t._prev),
                t._prev
                  ? (t._prev._next = t._next)
                  : this._firstPT === t &&
                    ((this._firstPT = t._next), (n = !0)),
                i
                  ? (i._next = t)
                  : n || null !== this._firstPT || (this._firstPT = t),
                (t._next = e),
                (t._prev = i)),
              t
            )
          }),
          (l._mod = function (t) {
            for (var e = this._firstPT; e; )
              'function' == typeof t[e.p] && (e.r = t[e.p]), (e = e._next)
          }),
          (l._kill = function (t) {
            var e,
              i,
              o,
              r = t
            if (t.autoAlpha || t.alpha) {
              for (i in ((r = {}), t)) r[i] = t[i]
              ;(r.opacity = 1), r.autoAlpha && (r.visibility = 1)
            }
            for (
              t.className &&
                (e = this._classNamePT) &&
                ((o = e.xfirst) && o._prev
                  ? this._linkCSSP(o._prev, e._next, o._prev._prev)
                  : o === this._firstPT && (this._firstPT = e._next),
                e._next && this._linkCSSP(e._next, e._next._next, o._prev),
                (this._classNamePT = null)),
                e = this._firstPT;
              e;

            )
              e.plugin &&
                e.plugin !== i &&
                e.plugin._kill &&
                (e.plugin._kill(t), (i = e.plugin)),
                (e = e._next)
            return n.j.prototype._kill.call(this, r)
          })
        var ee = function (t, e, i) {
          var n, o, r, a
          if (t.slice) for (o = t.length; --o > -1; ) ee(t[o], e, i)
          else
            for (o = (n = t.childNodes).length; --o > -1; )
              (a = (r = n[o]).type),
                r.style && (e.push(nt(r)), i && i.push(r)),
                (1 !== a && 9 !== a && 11 !== a) ||
                  !r.childNodes.length ||
                  ee(r, e, i)
        }
        return (
          (r.cascadeTo = function (t, e, i) {
            var o,
              r,
              a,
              s,
              l = n.l.to(t, e, i),
              u = [l],
              c = [],
              h = [],
              p = [],
              f = n.l._internals.reservedProps
            for (
              t = l._targets || l.target,
                ee(t, c, p),
                l.render(e, !0, !0),
                ee(t, h),
                l.render(0, !0, !0),
                l._enabled(!0),
                o = p.length;
              --o > -1;

            )
              if ((r = ot(p[o], c[o], h[o])).firstMPT) {
                for (a in ((r = r.difs), i)) f[a] && (r[a] = i[a])
                for (a in ((s = {}), r)) s[a] = c[o][a]
                u.push(n.l.fromTo(p[o], e, s, r))
              }
            return u
          }),
          n.j.activate([r]),
          r
        )
      },
      !0
    )
    var s = n.m.CSSPlugin,
      l = n.k._gsDefine.plugin({
        propName: 'attr',
        API: 2,
        version: '0.6.1',
        init: function (t, e, i, n) {
          var o, r
          if ('function' != typeof t.setAttribute) return !1
          for (o in e)
            'function' == typeof (r = e[o]) && (r = r(n, t)),
              this._addTween(
                t,
                'setAttribute',
                t.getAttribute(o) + '',
                r + '',
                o,
                !1,
                o
              ),
              this._overwriteProps.push(o)
          return !0
        },
      }),
      u = n.k._gsDefine.plugin({
        propName: 'roundProps',
        version: '1.7.0',
        priority: -1,
        API: 2,
        init: function (t, e, i) {
          return (this._tween = i), !0
        },
      }),
      c = function (t) {
        var e = t < 1 ? Math.pow(10, (t + '').length - 2) : 1
        return function (i) {
          return ((Math.round(i / t) * t * e) | 0) / e
        }
      },
      h = function (t, e) {
        for (; t; ) t.f || t.blob || (t.m = e || Math.round), (t = t._next)
      },
      p = u.prototype
    /*!
     * VERSION: 0.6.1
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */ ;(p._onInitAllProps = function () {
      var t,
        e,
        i,
        n,
        o = this._tween,
        r = o.vars.roundProps,
        a = {},
        s = o._propLookup.roundProps
      if ('object' != typeof r || r.push)
        for (
          'string' == typeof r && (r = r.split(',')), i = r.length;
          --i > -1;

        )
          a[r[i]] = Math.round
      else for (n in r) a[n] = c(r[n])
      for (n in a)
        for (t = o._firstPT; t; )
          (e = t._next),
            t.pg
              ? t.t._mod(a)
              : t.n === n &&
                (2 === t.f && t.t
                  ? h(t.t._firstPT, a[n])
                  : (this._add(t.t, n, t.s, t.c, a[n]),
                    e && (e._prev = t._prev),
                    t._prev
                      ? (t._prev._next = e)
                      : o._firstPT === t && (o._firstPT = e),
                    (t._next = t._prev = null),
                    (o._propLookup[n] = s))),
            (t = e)
      return !1
    }),
      (p._add = function (t, e, i, n, o) {
        this._addTween(t, e, i, i + n, e, o || Math.round),
          this._overwriteProps.push(e)
      })
    /*!
     * VERSION: 0.3.1
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/
    var f = n.k._gsDefine.plugin({
      propName: 'directionalRotation',
      version: '0.3.1',
      API: 2,
      init: function (t, e, i, n) {
        'object' != typeof e && (e = { rotation: e }), (this.finals = {})
        var o,
          r,
          a,
          s,
          l,
          u,
          c = !0 === e.useRadians ? 2 * Math.PI : 360
        for (o in e)
          'useRadians' !== o &&
            ('function' == typeof (s = e[o]) && (s = s(n, t)),
            (r = (u = (s + '').split('_'))[0]),
            (a = parseFloat(
              'function' != typeof t[o]
                ? t[o]
                : t[
                    o.indexOf('set') ||
                    'function' != typeof t['get' + o.substr(3)]
                      ? o
                      : 'get' + o.substr(3)
                  ]()
            )),
            (l =
              (s = this.finals[o] =
                'string' == typeof r && '=' === r.charAt(1)
                  ? a + parseInt(r.charAt(0) + '1', 10) * Number(r.substr(2))
                  : Number(r) || 0) - a),
            u.length &&
              (-1 !== (r = u.join('_')).indexOf('short') &&
                (l %= c) !== l % (c / 2) &&
                (l = l < 0 ? l + c : l - c),
              -1 !== r.indexOf('_cw') && l < 0
                ? (l = ((l + 9999999999 * c) % c) - ((l / c) | 0) * c)
                : -1 !== r.indexOf('ccw') &&
                  l > 0 &&
                  (l = ((l - 9999999999 * c) % c) - ((l / c) | 0) * c)),
            (l > 1e-6 || l < -1e-6) &&
              (this._addTween(t, o, a, a + l, o), this._overwriteProps.push(o)))
        return !0
      },
      set: function (t) {
        var e
        if (1 !== t) this._super.setRatio.call(this, t)
        else
          for (e = this._firstPT; e; )
            e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]),
              (e = e._next)
      },
    })
    f._autoCSS = !0
    /*!
     * VERSION: 1.3.9
     * DATE: 2019-05-17
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/
    var d = 180 / Math.PI,
      _ = [],
      g = [],
      m = [],
      y = {},
      v = n.k._gsDefine.globals,
      b = function (t, e, i, n) {
        i === n && (i = n - (n - e) / 1e6),
          t === e && (e = t + (i - t) / 1e6),
          (this.a = t),
          (this.b = e),
          (this.c = i),
          (this.d = n),
          (this.da = n - t),
          (this.ca = i - t),
          (this.ba = e - t)
      },
      C = function (t, e, i, n) {
        var o = { a: t },
          r = {},
          a = {},
          s = { c: n },
          l = (t + e) / 2,
          u = (e + i) / 2,
          c = (i + n) / 2,
          h = (l + u) / 2,
          p = (u + c) / 2,
          f = (p - h) / 8
        return (
          (o.b = l + (t - l) / 4),
          (r.b = h + f),
          (o.c = r.a = (o.b + r.b) / 2),
          (r.c = a.a = (h + p) / 2),
          (a.b = p - f),
          (s.b = c + (n - c) / 4),
          (a.c = s.a = (a.b + s.b) / 2),
          [o, r, a, s]
        )
      },
      w = function (t, e, i, n, o) {
        var r,
          a,
          s,
          l,
          u,
          c,
          h,
          p,
          f,
          d,
          y,
          v,
          b,
          w = t.length - 1,
          T = 0,
          S = t[0].a
        for (r = 0; r < w; r++)
          (a = (u = t[T]).a),
            (s = u.d),
            (l = t[T + 1].d),
            o
              ? ((y = _[r]),
                (b = (((v = g[r]) + y) * e * 0.25) / (n ? 0.5 : m[r] || 0.5)),
                (p =
                  s -
                  ((c = s - (s - a) * (n ? 0.5 * e : 0 !== y ? b / y : 0)) +
                    ((((h = s + (l - s) * (n ? 0.5 * e : 0 !== v ? b / v : 0)) -
                      c) *
                      ((3 * y) / (y + v) + 0.5)) /
                      4 || 0))))
              : (p =
                  s -
                  ((c = s - (s - a) * e * 0.5) + (h = s + (l - s) * e * 0.5)) /
                    2),
            (c += p),
            (h += p),
            (u.c = f = c),
            (u.b = 0 !== r ? S : (S = u.a + 0.6 * (u.c - u.a))),
            (u.da = s - a),
            (u.ca = f - a),
            (u.ba = S - a),
            i
              ? ((d = C(a, S, f, s)),
                t.splice(T, 1, d[0], d[1], d[2], d[3]),
                (T += 4))
              : T++,
            (S = h)
        ;((u = t[T]).b = S),
          (u.c = S + 0.4 * (u.d - S)),
          (u.da = u.d - u.a),
          (u.ca = u.c - u.a),
          (u.ba = S - u.a),
          i &&
            ((d = C(u.a, S, u.c, u.d)), t.splice(T, 1, d[0], d[1], d[2], d[3]))
      },
      T = function (t, e, i, n) {
        var o,
          r,
          a,
          s,
          l,
          u,
          c = []
        if (n)
          for (r = (t = [n].concat(t)).length; --r > -1; )
            'string' == typeof (u = t[r][e]) &&
              '=' === u.charAt(1) &&
              (t[r][e] = n[e] + Number(u.charAt(0) + u.substr(2)))
        if ((o = t.length - 2) < 0)
          return (c[0] = new b(t[0][e], 0, 0, t[0][e])), c
        for (r = 0; r < o; r++)
          (a = t[r][e]),
            (s = t[r + 1][e]),
            (c[r] = new b(a, 0, 0, s)),
            i &&
              ((l = t[r + 2][e]),
              (_[r] = (_[r] || 0) + (s - a) * (s - a)),
              (g[r] = (g[r] || 0) + (l - s) * (l - s)))
        return (c[r] = new b(t[r][e], 0, 0, t[r + 1][e])), c
      },
      S = function (t, e, i, n, o, r) {
        var a,
          s,
          l,
          u,
          c,
          h,
          p,
          f,
          d = {},
          v = [],
          b = r || t[0]
        for (s in ((o =
          'string' == typeof o
            ? ',' + o + ','
            : ',x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,'),
        null == e && (e = 1),
        t[0]))
          v.push(s)
        if (t.length > 1) {
          for (f = t[t.length - 1], p = !0, a = v.length; --a > -1; )
            if (((s = v[a]), Math.abs(b[s] - f[s]) > 0.05)) {
              p = !1
              break
            }
          p &&
            ((t = t.concat()),
            r && t.unshift(r),
            t.push(t[1]),
            (r = t[t.length - 3]))
        }
        for (_.length = g.length = m.length = 0, a = v.length; --a > -1; )
          (s = v[a]),
            (y[s] = -1 !== o.indexOf(',' + s + ',')),
            (d[s] = T(t, s, y[s], r))
        for (a = _.length; --a > -1; )
          (_[a] = Math.sqrt(_[a])), (g[a] = Math.sqrt(g[a]))
        if (!n) {
          for (a = v.length; --a > -1; )
            if (y[s])
              for (h = (l = d[v[a]]).length - 1, u = 0; u < h; u++)
                (c = l[u + 1].da / g[u] + l[u].da / _[u] || 0),
                  (m[u] = (m[u] || 0) + c * c)
          for (a = m.length; --a > -1; ) m[a] = Math.sqrt(m[a])
        }
        for (a = v.length, u = i ? 4 : 1; --a > -1; )
          (l = d[(s = v[a])]),
            w(l, e, i, n, y[s]),
            p && (l.splice(0, u), l.splice(l.length - u, u))
        return d
      },
      A = function (t, e, i) {
        for (
          var n, o, r, a, s, l, u, c, h, p, f, d = 1 / i, _ = t.length;
          --_ > -1;

        )
          for (
            r = (p = t[_]).a,
              a = p.d - r,
              s = p.c - r,
              l = p.b - r,
              n = o = 0,
              c = 1;
            c <= i;
            c++
          )
            (n =
              o -
              (o =
                ((u = d * c) * u * a + 3 * (h = 1 - u) * (u * s + h * l)) * u)),
              (e[(f = _ * i + c - 1)] = (e[f] || 0) + n * n)
      },
      O = n.k._gsDefine.plugin({
        propName: 'bezier',
        priority: -1,
        version: '1.3.9',
        API: 2,
        global: !0,
        init: function (t, e, i) {
          ;(this._target = t),
            e instanceof Array && (e = { values: e }),
            (this._func = {}),
            (this._mod = {}),
            (this._props = []),
            (this._timeRes =
              null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10))
          var n,
            o,
            r,
            a,
            s,
            l = e.values || [],
            u = {},
            c = l[0],
            h = e.autoRotate || i.vars.orientToBezier
          for (n in ((this._autoRotate = h
            ? h instanceof Array
              ? h
              : [['x', 'y', 'rotation', !0 === h ? 0 : Number(h) || 0]]
            : null),
          c))
            this._props.push(n)
          for (r = this._props.length; --r > -1; )
            (n = this._props[r]),
              this._overwriteProps.push(n),
              (o = this._func[n] = 'function' == typeof t[n]),
              (u[n] = o
                ? t[
                    n.indexOf('set') ||
                    'function' != typeof t['get' + n.substr(3)]
                      ? n
                      : 'get' + n.substr(3)
                  ]()
                : parseFloat(t[n])),
              s || (u[n] !== l[0][n] && (s = u))
          if (
            ((this._beziers =
              'cubic' !== e.type && 'quadratic' !== e.type && 'soft' !== e.type
                ? S(
                    l,
                    isNaN(e.curviness) ? 1 : e.curviness,
                    !1,
                    'thruBasic' === e.type,
                    e.correlate,
                    s
                  )
                : (function (t, e, i) {
                    var n,
                      o,
                      r,
                      a,
                      s,
                      l,
                      u,
                      c,
                      h,
                      p,
                      f,
                      d = {},
                      _ = 'cubic' === (e = e || 'soft') ? 3 : 2,
                      g = 'soft' === e,
                      m = []
                    if (
                      (g && i && (t = [i].concat(t)),
                      null == t || t.length < _ + 1)
                    )
                      throw 'invalid Bezier data'
                    for (h in t[0]) m.push(h)
                    for (l = m.length; --l > -1; ) {
                      for (
                        d[(h = m[l])] = s = [], p = 0, c = t.length, u = 0;
                        u < c;
                        u++
                      )
                        (n =
                          null == i
                            ? t[u][h]
                            : 'string' == typeof (f = t[u][h]) &&
                              '=' === f.charAt(1)
                            ? i[h] + Number(f.charAt(0) + f.substr(2))
                            : Number(f)),
                          g &&
                            u > 1 &&
                            u < c - 1 &&
                            (s[p++] = (n + s[p - 2]) / 2),
                          (s[p++] = n)
                      for (c = p - _ + 1, p = 0, u = 0; u < c; u += _)
                        (n = s[u]),
                          (o = s[u + 1]),
                          (r = s[u + 2]),
                          (a = 2 === _ ? 0 : s[u + 3]),
                          (s[p++] = f =
                            3 === _
                              ? new b(n, o, r, a)
                              : new b(n, (2 * o + n) / 3, (2 * o + r) / 3, r))
                      s.length = p
                    }
                    return d
                  })(l, e.type, u)),
            (this._segCount = this._beziers[n].length),
            this._timeRes)
          ) {
            var p = (function (t, e) {
              var i,
                n,
                o,
                r,
                a = [],
                s = [],
                l = 0,
                u = 0,
                c = (e = e >> 0 || 6) - 1,
                h = [],
                p = []
              for (i in t) A(t[i], a, e)
              for (o = a.length, n = 0; n < o; n++)
                (l += Math.sqrt(a[n])),
                  (p[(r = n % e)] = l),
                  r === c &&
                    ((u += l),
                    (h[(r = (n / e) >> 0)] = p),
                    (s[r] = u),
                    (l = 0),
                    (p = []))
              return { length: u, lengths: s, segments: h }
            })(this._beziers, this._timeRes)
            ;(this._length = p.length),
              (this._lengths = p.lengths),
              (this._segments = p.segments),
              (this._l1 = this._li = this._s1 = this._si = 0),
              (this._l2 = this._lengths[0]),
              (this._curSeg = this._segments[0]),
              (this._s2 = this._curSeg[0]),
              (this._prec = 1 / this._curSeg.length)
          }
          if ((h = this._autoRotate))
            for (
              this._initialRotations = [],
                h[0] instanceof Array || (this._autoRotate = h = [h]),
                r = h.length;
              --r > -1;

            ) {
              for (a = 0; a < 3; a++)
                (n = h[r][a]),
                  (this._func[n] =
                    'function' == typeof t[n] &&
                    t[
                      n.indexOf('set') ||
                      'function' != typeof t['get' + n.substr(3)]
                        ? n
                        : 'get' + n.substr(3)
                    ])
              ;(n = h[r][2]),
                (this._initialRotations[r] =
                  (this._func[n]
                    ? this._func[n].call(this._target)
                    : this._target[n]) || 0),
                this._overwriteProps.push(n)
            }
          return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0
        },
        set: function (t) {
          var e,
            i,
            n,
            o,
            r,
            a,
            s,
            l,
            u,
            c,
            h,
            p = this._segCount,
            f = this._func,
            _ = this._target,
            g = t !== this._startRatio
          if (this._timeRes) {
            if (
              ((u = this._lengths),
              (c = this._curSeg),
              (h = t * this._length),
              (n = this._li),
              h > this._l2 && n < p - 1)
            ) {
              for (l = p - 1; n < l && (this._l2 = u[++n]) <= h; );
              ;(this._l1 = u[n - 1]),
                (this._li = n),
                (this._curSeg = c = this._segments[n]),
                (this._s2 = c[(this._s1 = this._si = 0)])
            } else if (h < this._l1 && n > 0) {
              for (; n > 0 && (this._l1 = u[--n]) >= h; );
              0 === n && h < this._l1 ? (this._l1 = 0) : n++,
                (this._l2 = u[n]),
                (this._li = n),
                (this._curSeg = c = this._segments[n]),
                (this._s1 = c[(this._si = c.length - 1) - 1] || 0),
                (this._s2 = c[this._si])
            }
            if (
              ((e = n),
              (h -= this._l1),
              (n = this._si),
              h > this._s2 && n < c.length - 1)
            ) {
              for (l = c.length - 1; n < l && (this._s2 = c[++n]) <= h; );
              ;(this._s1 = c[n - 1]), (this._si = n)
            } else if (h < this._s1 && n > 0) {
              for (; n > 0 && (this._s1 = c[--n]) >= h; );
              0 === n && h < this._s1 ? (this._s1 = 0) : n++,
                (this._s2 = c[n]),
                (this._si = n)
            }
            a =
              1 === t
                ? 1
                : (n + (h - this._s1) / (this._s2 - this._s1)) * this._prec || 0
          } else
            a =
              (t - (e = t < 0 ? 0 : t >= 1 ? p - 1 : (p * t) >> 0) * (1 / p)) *
              p
          for (i = 1 - a, n = this._props.length; --n > -1; )
            (o = this._props[n]),
              (s =
                (a * a * (r = this._beziers[o][e]).da +
                  3 * i * (a * r.ca + i * r.ba)) *
                  a +
                r.a),
              this._mod[o] && (s = this._mod[o](s, _)),
              f[o] ? _[o](s) : (_[o] = s)
          if (this._autoRotate) {
            var m,
              y,
              v,
              b,
              C,
              w,
              T,
              S = this._autoRotate
            for (n = S.length; --n > -1; )
              (o = S[n][2]),
                (w = S[n][3] || 0),
                (T = !0 === S[n][4] ? 1 : d),
                (r = this._beziers[S[n][0]]),
                (m = this._beziers[S[n][1]]),
                r &&
                  m &&
                  ((r = r[e]),
                  (m = m[e]),
                  (y = r.a + (r.b - r.a) * a),
                  (y += ((b = r.b + (r.c - r.b) * a) - y) * a),
                  (b += (r.c + (r.d - r.c) * a - b) * a),
                  (v = m.a + (m.b - m.a) * a),
                  (v += ((C = m.b + (m.c - m.b) * a) - v) * a),
                  (C += (m.c + (m.d - m.c) * a - C) * a),
                  (s = g
                    ? Math.atan2(C - v, b - y) * T + w
                    : this._initialRotations[n]),
                  this._mod[o] && (s = this._mod[o](s, _)),
                  f[o] ? _[o](s) : (_[o] = s))
          }
        },
      }),
      E = O.prototype
    ;(O.bezierThrough = S),
      (O.cubicToQuadratic = C),
      (O._autoCSS = !0),
      (O.quadraticToCubic = function (t, e, i) {
        return new b(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
      }),
      (O._cssRegister = function () {
        var t = v.CSSPlugin
        if (t) {
          var e = t._internals,
            i = e._parseToProxy,
            n = e._setPluginRatio,
            o = e.CSSPropTween
          e._registerComplexSpecialProp('bezier', {
            parser: function (t, e, r, a, s, l) {
              e instanceof Array && (e = { values: e }), (l = new O())
              var u,
                c,
                h,
                p = e.values,
                f = p.length - 1,
                d = [],
                _ = {}
              if (f < 0) return s
              for (u = 0; u <= f; u++)
                (h = i(t, p[u], a, s, l, f !== u)), (d[u] = h.end)
              for (c in e) _[c] = e[c]
              return (
                (_.values = d),
                ((s = new o(t, 'bezier', 0, 0, h.pt, 2)).data = h),
                (s.plugin = l),
                (s.setRatio = n),
                0 === _.autoRotate && (_.autoRotate = !0),
                !_.autoRotate ||
                  _.autoRotate instanceof Array ||
                  ((u = !0 === _.autoRotate ? 0 : Number(_.autoRotate)),
                  (_.autoRotate =
                    null != h.end.left
                      ? [['left', 'top', 'rotation', u, !1]]
                      : null != h.end.x && [['x', 'y', 'rotation', u, !1]])),
                _.autoRotate &&
                  (a._transform || a._enableTransforms(!1),
                  (h.autoRotate = a._target._gsTransform),
                  (h.proxy.rotation = h.autoRotate.rotation || 0),
                  a._overwriteProps.push('rotation')),
                l._onInitTween(h.proxy, _, a._tween),
                s
              )
            },
          })
        }
      }),
      (E._mod = function (t) {
        for (var e, i = this._overwriteProps, n = i.length; --n > -1; )
          (e = t[i[n]]) && 'function' == typeof e && (this._mod[i[n]] = e)
      }),
      (E._kill = function (t) {
        var e,
          i,
          n = this._props
        for (e in this._beziers)
          if (e in t)
            for (
              delete this._beziers[e], delete this._func[e], i = n.length;
              --i > -1;

            )
              n[i] === e && n.splice(i, 1)
        if ((n = this._autoRotate))
          for (i = n.length; --i > -1; ) t[n[i][2]] && n.splice(i, 1)
        return this._super._kill.call(this, t)
      }),
      /*!
       * VERSION: 1.16.1
       * DATE: 2018-08-27
       * UPDATES AND DOCS AT: http://greensock.com
       *
       * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
       * This work is subject to the terms at http://greensock.com/standard-license or for
       * Club GreenSock members, the software agreement that was issued with your membership.
       *
       * @author: Jack Doyle, jack@greensock.com
       **/
      n.k._gsDefine(
        'easing.Back',
        ['easing.Ease'],
        function () {
          var t,
            e,
            i,
            o,
            r = n.k.GreenSockGlobals || n.k,
            a = r.com.greensock,
            s = 2 * Math.PI,
            l = Math.PI / 2,
            u = a._class,
            c = function (t, e) {
              var i = u('easing.' + t, function () {}, !0),
                o = (i.prototype = new n.b())
              return (o.constructor = i), (o.getRatio = e), i
            },
            h = n.b.register || function () {},
            p = function (t, e, i, n, o) {
              var r = u(
                'easing.' + t,
                { easeOut: new e(), easeIn: new i(), easeInOut: new n() },
                !0
              )
              return h(r, t), r
            },
            f = function (t, e, i) {
              ;(this.t = t),
                (this.v = e),
                i &&
                  ((this.next = i),
                  (i.prev = this),
                  (this.c = i.v - e),
                  (this.gap = i.t - t))
            },
            d = function (t, e) {
              var i = u(
                  'easing.' + t,
                  function (t) {
                    ;(this._p1 = t || 0 === t ? t : 1.70158),
                      (this._p2 = 1.525 * this._p1)
                  },
                  !0
                ),
                o = (i.prototype = new n.b())
              return (
                (o.constructor = i),
                (o.getRatio = e),
                (o.config = function (t) {
                  return new i(t)
                }),
                i
              )
            },
            _ = p(
              'Back',
              d('BackOut', function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
              }),
              d('BackIn', function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
              }),
              d('BackInOut', function (t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                  : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
              })
            ),
            g = u(
              'easing.SlowMo',
              function (t, e, i) {
                ;(e = e || 0 === e ? e : 0.7),
                  null == t ? (t = 0.7) : t > 1 && (t = 1),
                  (this._p = 1 !== t ? e : 0),
                  (this._p1 = (1 - t) / 2),
                  (this._p2 = t),
                  (this._p3 = this._p1 + this._p2),
                  (this._calcEnd = !0 === i)
              },
              !0
            ),
            m = (g.prototype = new n.b())
          return (
            (m.constructor = g),
            (m.getRatio = function (t) {
              var e = t + (0.5 - t) * this._p
              return t < this._p1
                ? this._calcEnd
                  ? 1 - (t = 1 - t / this._p1) * t
                  : e - (t = 1 - t / this._p1) * t * t * t * e
                : t > this._p3
                ? this._calcEnd
                  ? 1 === t
                    ? 0
                    : 1 - (t = (t - this._p3) / this._p1) * t
                  : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                : this._calcEnd
                ? 1
                : e
            }),
            (g.ease = new g(0.7, 0.7)),
            (m.config = g.config =
              function (t, e, i) {
                return new g(t, e, i)
              }),
            ((m = (t = u(
              'easing.SteppedEase',
              function (t, e) {
                ;(t = t || 1),
                  (this._p1 = 1 / t),
                  (this._p2 = t + (e ? 0 : 1)),
                  (this._p3 = e ? 1 : 0)
              },
              !0
            )).prototype =
              new n.b()).constructor = t),
            (m.getRatio = function (t) {
              return (
                t < 0 ? (t = 0) : t >= 1 && (t = 0.999999999),
                (((this._p2 * t) | 0) + this._p3) * this._p1
              )
            }),
            (m.config = t.config =
              function (e, i) {
                return new t(e, i)
              }),
            ((m = (e = u(
              'easing.ExpoScaleEase',
              function (t, e, i) {
                ;(this._p1 = Math.log(e / t)),
                  (this._p2 = e - t),
                  (this._p3 = t),
                  (this._ease = i)
              },
              !0
            )).prototype =
              new n.b()).constructor = e),
            (m.getRatio = function (t) {
              return (
                this._ease && (t = this._ease.getRatio(t)),
                (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
              )
            }),
            (m.config = e.config =
              function (t, i, n) {
                return new e(t, i, n)
              }),
            ((m = (i = u(
              'easing.RoughEase',
              function (t) {
                for (
                  var e,
                    i,
                    o,
                    r,
                    a,
                    s,
                    l = (t = t || {}).taper || 'none',
                    u = [],
                    c = 0,
                    h = 0 | (t.points || 20),
                    p = h,
                    d = !1 !== t.randomize,
                    _ = !0 === t.clamp,
                    g = t.template instanceof n.b ? t.template : null,
                    m = 'number' == typeof t.strength ? 0.4 * t.strength : 0.4;
                  --p > -1;

                )
                  (e = d ? Math.random() : (1 / h) * p),
                    (i = g ? g.getRatio(e) : e),
                    (o =
                      'none' === l
                        ? m
                        : 'out' === l
                        ? (r = 1 - e) * r * m
                        : 'in' === l
                        ? e * e * m
                        : e < 0.5
                        ? (r = 2 * e) * r * 0.5 * m
                        : (r = 2 * (1 - e)) * r * 0.5 * m),
                    d
                      ? (i += Math.random() * o - 0.5 * o)
                      : p % 2
                      ? (i += 0.5 * o)
                      : (i -= 0.5 * o),
                    _ && (i > 1 ? (i = 1) : i < 0 && (i = 0)),
                    (u[c++] = { x: e, y: i })
                for (
                  u.sort(function (t, e) {
                    return t.x - e.x
                  }),
                    s = new f(1, 1, null),
                    p = h;
                  --p > -1;

                )
                  (a = u[p]), (s = new f(a.x, a.y, s))
                this._prev = new f(0, 0, 0 !== s.t ? s : s.next)
              },
              !0
            )).prototype =
              new n.b()).constructor = i),
            (m.getRatio = function (t) {
              var e = this._prev
              if (t > e.t) {
                for (; e.next && t >= e.t; ) e = e.next
                e = e.prev
              } else for (; e.prev && t <= e.t; ) e = e.prev
              return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c
            }),
            (m.config = function (t) {
              return new i(t)
            }),
            (i.ease = new i()),
            p(
              'Bounce',
              c('BounceOut', function (t) {
                return t < 1 / 2.75
                  ? 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                  : t < 2.5 / 2.75
                  ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                  : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
              }),
              c('BounceIn', function (t) {
                return (t = 1 - t) < 1 / 2.75
                  ? 1 - 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                  : t < 2.5 / 2.75
                  ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                  : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375)
              }),
              c('BounceInOut', function (t) {
                var e = t < 0.5
                return (
                  (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75
                    ? (t *= 7.5625 * t)
                    : (t =
                        t < 2 / 2.75
                          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                          : t < 2.5 / 2.75
                          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                  e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                )
              })
            ),
            p(
              'Circ',
              c('CircOut', function (t) {
                return Math.sqrt(1 - (t -= 1) * t)
              }),
              c('CircIn', function (t) {
                return -(Math.sqrt(1 - t * t) - 1)
              }),
              c('CircInOut', function (t) {
                return (t *= 2) < 1
                  ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                  : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
              })
            ),
            p(
              'Elastic',
              (o = function (t, e, i) {
                var o = u(
                    'easing.' + t,
                    function (t, e) {
                      ;(this._p1 = t >= 1 ? t : 1),
                        (this._p2 = (e || i) / (t < 1 ? t : 1)),
                        (this._p3 =
                          (this._p2 / s) * (Math.asin(1 / this._p1) || 0)),
                        (this._p2 = s / this._p2)
                    },
                    !0
                  ),
                  r = (o.prototype = new n.b())
                return (
                  (r.constructor = o),
                  (r.getRatio = e),
                  (r.config = function (t, e) {
                    return new o(t, e)
                  }),
                  o
                )
              })(
                'ElasticOut',
                function (t) {
                  return (
                    this._p1 *
                      Math.pow(2, -10 * t) *
                      Math.sin((t - this._p3) * this._p2) +
                    1
                  )
                },
                0.3
              ),
              o(
                'ElasticIn',
                function (t) {
                  return (
                    -this._p1 *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin((t - this._p3) * this._p2)
                  )
                },
                0.3
              ),
              o(
                'ElasticInOut',
                function (t) {
                  return (t *= 2) < 1
                    ? this._p1 *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin((t - this._p3) * this._p2) *
                        -0.5
                    : this._p1 *
                        Math.pow(2, -10 * (t -= 1)) *
                        Math.sin((t - this._p3) * this._p2) *
                        0.5 +
                        1
                },
                0.45
              )
            ),
            p(
              'Expo',
              c('ExpoOut', function (t) {
                return 1 - Math.pow(2, -10 * t)
              }),
              c('ExpoIn', function (t) {
                return Math.pow(2, 10 * (t - 1)) - 0.001
              }),
              c('ExpoInOut', function (t) {
                return (t *= 2) < 1
                  ? 0.5 * Math.pow(2, 10 * (t - 1))
                  : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))
              })
            ),
            p(
              'Sine',
              c('SineOut', function (t) {
                return Math.sin(t * l)
              }),
              c('SineIn', function (t) {
                return 1 - Math.cos(t * l)
              }),
              c('SineInOut', function (t) {
                return -0.5 * (Math.cos(Math.PI * t) - 1)
              })
            ),
            u(
              'easing.EaseLookup',
              {
                find: function (t) {
                  return n.b.map[t]
                },
              },
              !0
            ),
            h(r.SlowMo, 'SlowMo', 'ease,'),
            h(i, 'RoughEase', 'ease,'),
            h(t, 'SteppedEase', 'ease,'),
            _
          )
        },
        !0
      )
    var x = n.m.Back,
      D = n.m.Elastic,
      P = n.m.Bounce,
      I = n.m.RoughEase,
      k = n.m.SlowMo,
      F = n.m.SteppedEase,
      L = n.m.Circ,
      N = n.m.Expo,
      R = n.m.Sine,
      M = n.m.ExpoScaleEase,
      B = a
    B._autoActivated = [o, r, s, l, O, u, f, x, D, P, I, k, F, L, N, R, M]
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.Color = void 0)
    var n = (function () {
      function t() {}
      return (
        (t.hexToRgb = function (t) {
          var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)
          return e
            ? {
                r: parseInt(e[1], 16),
                g: parseInt(e[2], 16),
                b: parseInt(e[3], 16),
              }
            : null
        }),
        (t.WHITE = '#FFFFFF'),
        (t.LIGHT_GREY = '#CCCCCC'),
        (t.GREY = '#7C7C7C'),
        (t.DARK_GREY = '#333333'),
        (t.BLACK = '#000000'),
        (t.YELLOW = '#F39500'),
        (t.BLUE = '#345698'),
        t
      )
    })()
    e.Color = n
  },
  function (t, e, i) {
    ;(function (e) {
      var i = function (t) {
        return t && t.Math == Math && t
      }
      t.exports =
        i('object' == typeof globalThis && globalThis) ||
        i('object' == typeof window && window) ||
        i('object' == typeof self && self) ||
        i('object' == typeof e && e) ||
        (function () {
          return this
        })() ||
        Function('return this')()
    }.call(this, i(75)))
  },
  function (t, e) {
    t.exports = function (t) {
      return 'function' == typeof t
    }
  },
  function (t, e, i) {
    var n = i(7),
      o = i(83),
      r = i(16),
      a = i(84),
      s = i(80),
      l = i(79),
      u = o('wks'),
      c = n.Symbol,
      h = l ? c : (c && c.withoutSetter) || a
    t.exports = function (t) {
      return (
        (r(u, t) && (s || 'string' == typeof u[t])) ||
          (s && r(c, t) ? (u[t] = c[t]) : (u[t] = h('Symbol.' + t))),
        u[t]
      )
    }
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.Font = void 0)
    var n = i(2),
      o = (function () {
        function t() {}
        return (
          Object.defineProperty(t, 'TITLE_NAVIGATION_FONT_SIZE', {
            get: function () {
              return 20 * n.Size.APP_SIZE_FACTOR + 16
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'H1_FONTSIZE', {
            get: function () {
              return 14 * n.Size.APP_SIZE_FACTOR + 16
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'ARTICLE_P_FONTSIZE', {
            get: function () {
              return 6 * n.Size.APP_SIZE_FACTOR + 12
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'GENERAL_P_FONTSIZE', {
            get: function () {
              return 6 * n.Size.APP_SIZE_FACTOR + 10
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'NAVIGATION_BAR_FONTSIZE', {
            get: function () {
              return 8 * n.Size.APP_SIZE_FACTOR + 12
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'QUOTE_FONTSIZE', {
            get: function () {
              return 14 * n.Size.APP_SIZE_FACTOR + 16
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.BOLD_FAMILY =
            "HelveticaNeue-Bold, 'Helvetica Neue LT W01_75 Bold', Helvetica, Arial, sans-serif"),
          (t.REGULAR_FAMILY =
            "HelveticaNeue, HelveticaNeue-Regular, 'Helvetica Neue LT W05_55 Roman', Helvetica, Arial, sans-serif"),
          (t.LIGHT_ITALIC_FAMILY =
            "HelveticaNeue-LightItalic, 'Helvetica Neue LT W05_45 Light', Helvetica, Arial, sans-serif"),
          t
        )
      })()
    e.Font = o
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.SVGComponent = void 0)
    var r = i(189),
      a = i(1),
      s = i(45),
      l = (function (t) {
        function e(e, i) {
          void 0 === i && (i = 'svg-component')
          var n = t.call(this, i) || this
          return (
            (n.view.innerHTML = n.addIDPrefix(e)),
            (n._svgRoot = n.view.getElementsByTagName('svg')[0]),
            (n._viewBoxAttr = n._svgRoot.getAttribute('viewBox')),
            n._svgRoot.removeAttribute('viewBox'),
            n._svgRoot.getElementsByTagName('title')[0] &&
              n._svgRoot.removeChild(
                n._svgRoot.getElementsByTagName('title')[0]
              ),
            n
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'defaultWidth', {
            get: function () {
              return parseFloat(this._viewBoxAttr.split(' ')[2])
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'defaultHeight', {
            get: function () {
              return parseFloat(this._viewBoxAttr.split(' ')[3])
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'width', {
            set: function (t) {
              this._svgRoot.setAttribute('width', t.toString() + 'px')
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'height', {
            set: function (t) {
              this._svgRoot.setAttribute('height', t.toString() + 'px')
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.clearSizeDefinition = function () {
            this._svgRoot.removeAttribute('width'),
              this._svgRoot.removeAttribute('height'),
              this._svgRoot.setAttribute('viewBox', this._viewBoxAttr),
              s.DeviceUtils.IS_IE &&
                (this._svgRoot.style.height =
                  this._viewBoxAttr.split(' ')[3] + 'px')
          }),
          (e.prototype.getElementByID = function (t) {
            return r.SVGUtils.getElementByID(this._svgRoot, this.idPrefix, t)
          }),
          (e.prototype.getElementsByID = function (t) {
            return r.SVGUtils.getElementsByID(this._svgRoot, this.idPrefix, t)
          }),
          Object.defineProperty(e.prototype, 'idPrefix', {
            get: function () {
              var t = this._svgRoot
                .getElementsByTagName('g')[0]
                .getAttribute('id')
              return t.indexOf('___') > 0
                ? '__' + t.split('__')[1] + '___'
                : '__' + t.split('__')[1] + '__'
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.addIDPrefix = function (t) {
            if (-1 != t.indexOf('__')) return t
            var e = '__' + this.generateHashFromSource(t) + '__'
            return (t = t.split('id="').join('id="' + e))
          }),
          (e.prototype.generateHashFromSource = function (t) {
            var e,
              i = 0
            if (0 === t.length) return i
            for (e = 0; e < t.length; e++)
              (i = (i << 5) - i + t.charCodeAt(e)), (i |= 0)
            return Math.abs(Math.round(Math.random() * i))
          }),
          e
        )
      })(a.UIComponent)
    e.SVGComponent = l
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }
  },
  function (t, e, i) {
    var n = i(18)
    t.exports = function (t) {
      if (n(t)) return t
      throw TypeError(String(t) + ' is not an object')
    }
  },
  function (t, e, i) {
    var n = i(7),
      o = i(49).f,
      r = i(20),
      a = i(22),
      s = i(55),
      l = i(122),
      u = i(89)
    t.exports = function (t, e) {
      var i,
        c,
        h,
        p,
        f,
        d = t.target,
        _ = t.global,
        g = t.stat
      if ((i = _ ? n : g ? n[d] || s(d, {}) : (n[d] || {}).prototype))
        for (c in e) {
          if (
            ((p = e[c]),
            (h = t.noTargetGet ? (f = o(i, c)) && f.value : i[c]),
            !u(_ ? c : d + (g ? '.' : '#') + c, t.forced) && void 0 !== h)
          ) {
            if (typeof p == typeof h) continue
            l(p, h)
          }
          ;(t.sham || (h && h.sham)) && r(p, 'sham', !0), a(i, c, p, t)
        }
    }
  },
  function (t, e, i) {
    var n = i(7),
      o = i(8),
      r = function (t) {
        return o(t) ? t : void 0
      }
    t.exports = function (t, e) {
      return arguments.length < 2 ? r(n[t]) : n[t] && n[t][e]
    }
  },
  function (t, e, i) {
    var n = i(36),
      o = {}.hasOwnProperty
    t.exports =
      Object.hasOwn ||
      function (t, e) {
        return o.call(n(t), e)
      }
  },
  function (t, e, i) {
    var n = i(12)
    t.exports = !n(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7
          },
        })[1]
      )
    })
  },
  function (t, e, i) {
    var n = i(8)
    t.exports = function (t) {
      return 'object' == typeof t ? null !== t : n(t)
    }
  },
  function (t, e, i) {
    var n = i(8),
      o = i(82)
    t.exports = function (t) {
      if (n(t)) return t
      throw TypeError(o(t) + ' is not a function')
    }
  },
  function (t, e, i) {
    var n = i(17),
      o = i(21),
      r = i(25)
    t.exports = n
      ? function (t, e, i) {
          return o.f(t, e, r(1, i))
        }
      : function (t, e, i) {
          return (t[e] = i), t
        }
  },
  function (t, e, i) {
    var n = i(17),
      o = i(85),
      r = i(13),
      a = i(52),
      s = Object.defineProperty
    e.f = n
      ? s
      : function (t, e, i) {
          if ((r(t), (e = a(e)), r(i), o))
            try {
              return s(t, e, i)
            } catch (t) {}
          if ('get' in i || 'set' in i)
            throw TypeError('Accessors not supported')
          return 'value' in i && (t[e] = i.value), t
        }
  },
  function (t, e, i) {
    var n = i(7),
      o = i(8),
      r = i(16),
      a = i(20),
      s = i(55),
      l = i(38),
      u = i(39),
      c = i(86).CONFIGURABLE,
      h = u.get,
      p = u.enforce,
      f = String(String).split('String')
    ;(t.exports = function (t, e, i, l) {
      var u,
        h = !!l && !!l.unsafe,
        d = !!l && !!l.enumerable,
        _ = !!l && !!l.noTargetGet,
        g = l && void 0 !== l.name ? l.name : e
      o(i) &&
        ('Symbol(' === String(g).slice(0, 7) &&
          (g = '[' + String(g).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
        (!r(i, 'name') || (c && i.name !== g)) && a(i, 'name', g),
        (u = p(i)).source ||
          (u.source = f.join('string' == typeof g ? g : ''))),
        t !== n
          ? (h ? !_ && t[e] && (d = !0) : delete t[e],
            d ? (t[e] = i) : a(t, e, i))
          : d
          ? (t[e] = i)
          : s(e, i)
    })(Function.prototype, 'toString', function () {
      return (o(this) && h(this).source) || l(this)
    })
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.URLUtils = void 0)
    var n = (function () {
      function t() {}
      return (
        (t.getUrlParam = function (e, i) {
          void 0 === i && (i = void 0)
          var n = t.getUrlParams()[e]
          return n || i
        }),
        (t.getUrlParams = function () {
          var t = {}
          return (
            location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (e) {
              for (var i = [], n = 1; n < arguments.length; n++)
                i[n - 1] = arguments[n]
              var o = i[0]
              return (t[o] = i[1]), e
            }),
            t
          )
        }),
        (t.openLink = function (t, e, i) {
          void 0 === e && (e = !0),
            void 0 === i && (i = !1),
            -1 != t.indexOf('mailto') || -1 != t.indexOf('whatsapp')
              ? (location.href = t)
              : i
              ? window
                  .open(
                    t,
                    '',
                    'width=600, height=300, menubar=no, toolbar=no, resizable=yes, scrollbars=yes'
                  )
                  .focus()
              : window.open(t, e ? '_blank' : '_self').focus()
        }),
        (t.downloadURL = function (t, e) {
          var i = document.createElement('a')
          document.body.appendChild(i),
            (i.download = e),
            (i.href = t),
            (i.target = '_blank'),
            i.click(),
            i.remove()
        }),
        t
      )
    })()
    e.URLUtils = n
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.Ease = void 0)
    var n = i(197),
      o = (function () {
        function t() {}
        return (
          (t.Power5easeInOut = n.default.create(
            'power5easeInOut',
            'M0,0 C0.224,0 0.132,0.89 0.39,0.974 0.504,1.01 0.82,1 1,1'
          )),
          t
        )
      })()
    e.Ease = o
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      }
    }
  },
  function (t, e) {
    t.exports = !1
  },
  function (t, e) {
    t.exports = {}
  },
  function (t, e, i) {
    'use strict'
    var n = i(19),
      o = function (t) {
        var e, i
        ;(this.promise = new t(function (t, n) {
          if (void 0 !== e || void 0 !== i)
            throw TypeError('Bad Promise constructor')
          ;(e = t), (i = n)
        })),
          (this.resolve = n(e)),
          (this.reject = n(i))
      }
    t.exports.f = function (t) {
      return new o(t)
    }
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TopicItemType = void 0)
    var n = (function () {
      function t() {}
      return (
        (t.ARTICLE = 'article'),
        (t.QUOTE = 'quote'),
        (t.YOUTUBE = 'video'),
        (t.TWITTER = 'tweet'),
        (t.FACEBOOK = 'facebook_post'),
        (t.LINKEDIN = 'linkedin'),
        (t.INSTAGRAM = 'instagram'),
        (t.DOWNLOAD = 'download'),
        t
      )
    })()
    e.TopicItemType = n
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TopicItemExpandableContent = void 0)
    var r = i(108),
      a = i(193),
      s = i(195),
      l = i(6),
      u = i(2),
      c = i(5),
      h = i(3),
      p = i(24),
      f = i(198),
      d = i(199),
      _ = i(1),
      g = (function (t) {
        function e(e, i) {
          var n = t.call(this, e) || this
          return (
            (n._options = i),
            n._options.overflowGradientColor ||
              (n._options.overflowGradientColor = l.Color.WHITE),
            n.initScrollableContent(),
            n.initExpandButton(),
            n.initScrollButton(),
            n.initCloseButton(),
            n
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'selected', {
            set: function (t) {
              var e = this
              if (
                ((this._selected = t),
                this._expandButton && (this._expandButton.interactive = t),
                this._options.expandOnSelect)
              ) {
                var i = function () {
                  e._expandedWidth && e._expandedHeight
                    ? e.expand(t)
                    : t &&
                      c.TweenMax.delayedCall(0.1, function () {
                        i()
                      })
                }
                i()
              }
              this.updateContentInteractivity()
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'expanded', {
            get: function () {
              return !this._options.expandOnSelect && this._expanded
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'useExpandButton', {
            set: function (t) {
              t != this._options.useExpandButton &&
                ((this._options.useExpandButton = t),
                this._expandButton
                  ? (this._expandButton.destroy(),
                    (this._expandButton = void 0))
                  : this.initExpandButton(),
                this.updateStyles())
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.expand = function (e) {
            var i = this
            t.prototype.expand.call(this, e),
              (this._expanding = !0),
              this.updateSizeValues(),
              this.updateContentInteractivity(),
              c.TweenMax.to(
                this.view,
                h.AppConfig.TOPIC_ITEM_CONTENT_EXPAND_DURATION,
                {
                  width: e ? this._expandedWidth : this._standardWidth,
                  height: e ? this._expandedHeight : this._standardHeight,
                  ease: p.Ease.Power5easeInOut,
                }
              ),
              this._scrollableContent &&
                (c.TweenMax.to(
                  this._scrollableContent.view,
                  h.AppConfig.TOPIC_ITEM_CONTENT_EXPAND_DURATION,
                  {
                    height: e ? this._expandedHeight : this._standardHeight,
                    ease: p.Ease.Power5easeInOut,
                    onUpdate: function () {
                      i.onContentScrolled()
                    },
                    onComplete: function () {
                      ;(i._expanding = !1), i.onContentScrolled()
                    },
                  }
                ),
                c.TweenMax.to(
                  this._scrollContent.view,
                  h.AppConfig.TOPIC_ITEM_CONTENT_EXPAND_DURATION,
                  {
                    paddingTop: this.calcContentPaddingTop(),
                    ease: p.Ease.Power5easeInOut,
                  }
                )),
              e
                ? (this.updateScrollButton(),
                  this._expandButton && this._expandButton.hide(),
                  this._options.expandOnSelect ||
                    (this._closeButton.show(), this.onExpandSignal.dispatch()))
                : (this.updateScrollButton(),
                  this._expandButton && this._expandButton.show(),
                  this._scrollableContent &&
                    c.TweenMax.to(
                      this._scrollableContent,
                      h.AppConfig.TOPIC_ITEM_CONTENT_EXPAND_DURATION,
                      {
                        scrollTop: 0,
                        ease: p.Ease.Power5easeInOut,
                      }
                    ),
                  this._options.expandOnSelect ||
                    (this._closeButton.hide(), this.onCloseSignal.dispatch()))
          }),
          (e.prototype.updateStyles = function () {
            var e = this
            if (
              (t.prototype.updateStyles.call(this),
              this.updateSizeValues(),
              this.applyStyle({
                width: this._currentWidth,
                height: this._currentHeight,
                backgroundColor: l.Color.WHITE,
                overflow: 'hidden',
                webkitBackfaceVisibility: 'hidden',
                mozBackfaceVisibility: 'hidden',
                webkitMaskImage: '-webkit-radial-gradient(white, black)',
              }),
              this._closeButton.applyStyle({
                position: 'absolute',
                top: 0.5 * u.Size.CONTENT_MARGIN,
                right: 0.5 * u.Size.CONTENT_MARGIN,
              }),
              this._expandButton &&
                this._expandButton.applyStyle({
                  position: 'absolute',
                  width: '100%',
                  bottom: 0,
                }),
              this._scrollButton &&
                this._scrollButton.applyStyle({
                  position: 'absolute',
                  width: '100%',
                  bottom: 0,
                }),
              this._scrollContent)
            ) {
              var i = this.calcScrollableContentHeight()
              this._scrollableContent.applyStyle({
                position: 'absolute',
                top: 0,
                width: this._contentWidth
                  ? this._contentWidth
                  : this._standardWidth,
                height: this._currentHeight,
              }),
                this._scrollContent.applyStyle({
                  boxSizing: 'border-box',
                  paddingTop: this.calcContentPaddingTop(),
                  paddingLeft: u.Size.CONTENT_MARGIN,
                  paddingRight: u.Size.CONTENT_MARGIN,
                  paddingBottom: u.Size.CONTENT_MARGIN,
                }),
                c.TweenMax.delayedCall(0.1, function () {
                  i != e.calcScrollableContentHeight() &&
                    (e.updateStyles(), e.onHeightChangeSignal.dispatch())
                })
            }
            this.updateSizeValues(),
              this.updateContentInteractivity(),
              this.updateScrollButton(),
              this._expanded ||
                (this._expandedHeight <= this._standardHeight
                  ? this._expandButton && this._expandButton.hide(!0)
                  : this._expandButton &&
                    (this._expandButton.show(!0),
                    (this._expandButton.interactive = this._selected)))
          }),
          (e.prototype.initExpandButton = function () {
            var t = this
            this._options.useExpandButton &&
              ((this._expandButton = new a.ExpandButton(
                this._options.overflowGradientColor
              )),
              this._expandButton.onClickSignal.add(function () {
                return t.onExpandButtonClicked()
              }),
              this.addChild(this._expandButton))
          }),
          (e.prototype.initScrollButton = function () {
            var t = this
            this._options.useScrollButton &&
              ((this._scrollButton = new d.ScrollButton(
                this._options.overflowGradientColor
              )),
              (this._scrollButton.showIcon = !1),
              this._scrollButton.onClickSignal.add(function () {
                return t.onScrollButtonClicked()
              }),
              this.addChild(this._scrollButton))
          }),
          (e.prototype.initCloseButton = function () {
            var t = this
            ;(this._closeButton = new s.CloseButton(
              this._options.closeButtonColor
            )),
              this._closeButton.hide(!0),
              this._closeButton.onClickSignal.add(function () {
                return t.onCloseButtonClicked()
              }),
              this.addChild(this._closeButton)
          }),
          (e.prototype.initScrollableContent = function () {
            var t = this
            this._options.useScrollableContent &&
              ((this._scrollableContent = new f.ScrollableContent()),
              (this._scrollableContent.enabled = !1),
              this._scrollableContent.onScrollingSignal.add(function () {
                return t.onContentScrolled()
              }),
              (this._scrollContent = new _.UIComponent('scroll-content')),
              this._scrollableContent.addChild(this._scrollContent),
              this.addChild(this._scrollableContent))
          }),
          (e.prototype.updateSizeValues = function () {
            ;(this._standardWidth = 200),
              (this._standardHeight = 200),
              (this._expandedWidth = 300),
              (this._expandedHeight = 300),
              (this._currentWidth = this._expanded
                ? this._expandedWidth
                : this._standardWidth),
              (this._currentHeight = this._expanded
                ? this._expandedHeight
                : this._standardHeight)
          }),
          (e.prototype.updateContentInteractivity = function () {
            if (this._scrollableContent) {
              var t = !1
              this._selected &&
                ((!this._expanded &&
                  this._scrollableContent.hasScrollableContent) ||
                  (t = !0)),
                (this._scrollableContent.enabled = t),
                (this._scrollableContent.interactive = t),
                (this._scrollContent.interactive = t)
            }
          }),
          (e.prototype.updateScrollButton = function () {
            if (this._scrollButton) {
              var t = !1,
                e =
                  this._scrollableContent.scrollTop >=
                  this._scrollableContent.maxScrollTop - 1
              this._expanded
                ? !this._scrollableContent.hasScrollableContent ||
                  e ||
                  this._expanding
                  ? (this._scrollButton.hide(),
                    (this._scrollButton.showIcon = !1),
                    (this._scrollButton.showGradient = !1))
                  : ((t = !0),
                    this._scrollButton.show(),
                    (this._scrollButton.showGradient = !1),
                    (this._scrollButton.showIcon = !0))
                : this._expandedHeight > this._standardHeight
                ? (this._scrollButton.show(),
                  (this._scrollButton.showGradient =
                    this._options.showScrollOverflowGradient),
                  (this._scrollButton.showIcon = !1))
                : this._scrollButton.hide(),
                (this._scrollButton.interactive = t)
            }
          }),
          (e.prototype.calcScrollableContentHeight = function () {
            var t =
              this._scrollableContent.scrollHeight + 2 * u.Size.CONTENT_MARGIN
            return Math.round(t)
          }),
          (e.prototype.calcContentPaddingTop = function () {
            return u.Size.CONTENT_MARGIN
          }),
          (e.prototype.onExpandButtonClicked = function () {
            this.expand(!0)
          }),
          (e.prototype.onScrollButtonClicked = function () {
            var t =
              this._scrollableContent.scrollTop + 0.5 * this._expandedHeight
            t > this._scrollableContent.maxScrollTop &&
              (t = this._scrollableContent.maxScrollTop),
              c.TweenMax.to(this._scrollableContent, 0.7, {
                scrollTop: t,
                ease: c.Power4.easeInOut,
              })
          }),
          (e.prototype.onCloseButtonClicked = function () {
            this.expand(!1)
          }),
          (e.prototype.onContentScrolled = function () {
            this.updateScrollButton()
          }),
          e
        )
      })(r.TopicItemContent)
    e.TopicItemExpandableContent = g
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.FlocklerUtils = void 0)
    var n = i(2),
      o = (function () {
        function t() {}
        return (
          (t.createOriginalImageURL = function (t) {
            return (
              t.replace('/thumbs', '/files').split('_s')[0] +
              '.' +
              t.split('.').pop()
            )
          }),
          (t.createOptimizedBackgroundImageURL = function (t) {
            var e = 500
            return (
              n.Size.APP_WIDTH > 500 && (e = 900),
              n.Size.APP_WIDTH > 900 && (e = 1200),
              n.Size.APP_WIDTH > 1200 && (e = 1600),
              this.createResizedImageURL(t, e, 0)
            )
          }),
          (t.createResizedImageURL = function (t, e, i) {
            var n = new RegExp('(_(s|c|l|m)\\d+x\\d+)+', 'i'),
              o = new RegExp('_qd+', 'i'),
              r = new RegExp('_noupscale', 'i')
            return (t = t
              .replace(n, '_s' + e + 'x' + i)
              .replace(o, '')
              .replace(r, ''))
          }),
          t
        )
      })()
    e.FlocklerUtils = o
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.MediaUtils = void 0)
    var n = i(3),
      o = (function () {
        function t() {}
        return (
          (t.getMediaURL = function (t) {
            if (t)
              return n.AppConfig.USE_CACHED_PROXY_MEDIA
                ? (n.AppConfig.ORIGINAL_MEDIA_PATHES.forEach(function (e) {
                    t = t.replace(e, n.AppConfig.CACHED_MEDIA_PATH)
                  }),
                  t)
                : t
          }),
          t
        )
      })()
    e.MediaUtils = o
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.LinkUtils = void 0)
    var n = i(213),
      o = (function () {
        function t() {}
        return (
          (t.linkify = function (t) {
            return n(t)
          }),
          (t.hashTagLinkify = function (t, e) {
            return t.replace(/(^|\s)(#[a-z\d-ÄÖÜäöüß]+)/gi, function (t) {
              return (
                '<a href="' +
                (e + t.toLowerCase().replace(' #', '').replace('#', '')) +
                '" target="_blank">' +
                t +
                '</a>'
              )
            })
          }),
          (t.isInternalLink = function (t) {
            return -1 != t.indexOf('basf.com/')
          }),
          t
        )
      })()
    e.LinkUtils = o
  },
  function (t, e, i) {
    var n = i(77),
      o = i(51)
    t.exports = function (t) {
      return n(o(t))
    }
  },
  function (t, e, i) {
    var n = i(15)
    t.exports = n('navigator', 'userAgent') || ''
  },
  function (t, e, i) {
    var n = i(51)
    t.exports = function (t) {
      return Object(n(t))
    }
  },
  function (t, e, i) {
    var n = i(7),
      o = i(18),
      r = n.document,
      a = o(r) && o(r.createElement)
    t.exports = function (t) {
      return a ? r.createElement(t) : {}
    }
  },
  function (t, e, i) {
    var n = i(8),
      o = i(54),
      r = Function.toString
    n(o.inspectSource) ||
      (o.inspectSource = function (t) {
        return r.call(t)
      }),
      (t.exports = o.inspectSource)
  },
  function (t, e, i) {
    var n,
      o,
      r,
      a = i(121),
      s = i(7),
      l = i(18),
      u = i(20),
      c = i(16),
      h = i(54),
      p = i(56),
      f = i(57),
      d = s.WeakMap
    if (a || h.state) {
      var _ = h.state || (h.state = new d()),
        g = _.get,
        m = _.has,
        y = _.set
      ;(n = function (t, e) {
        if (m.call(_, t)) throw new TypeError('Object already initialized')
        return (e.facade = t), y.call(_, t, e), e
      }),
        (o = function (t) {
          return g.call(_, t) || {}
        }),
        (r = function (t) {
          return m.call(_, t)
        })
    } else {
      var v = p('state')
      ;(f[v] = !0),
        (n = function (t, e) {
          if (c(t, v)) throw new TypeError('Object already initialized')
          return (e.facade = t), u(t, v, e), e
        }),
        (o = function (t) {
          return c(t, v) ? t[v] : {}
        }),
        (r = function (t) {
          return c(t, v)
        })
    }
    t.exports = {
      set: n,
      get: o,
      has: r,
      enforce: function (t) {
        return r(t) ? o(t) : n(t, {})
      },
      getterFor: function (t) {
        return function (e) {
          var i
          if (!l(e) || (i = o(e)).type !== t)
            throw TypeError('Incompatible receiver, ' + t + ' required')
          return i
        }
      },
    }
  },
  function (t, e, i) {
    var n,
      o = i(13),
      r = i(130),
      a = i(60),
      s = i(57),
      l = i(91),
      u = i(37),
      c = i(56),
      h = c('IE_PROTO'),
      p = function () {},
      f = function (t) {
        return '<script>' + t + '</script>'
      },
      d = function (t) {
        t.write(f('')), t.close()
        var e = t.parentWindow.Object
        return (t = null), e
      },
      _ = function () {
        try {
          n = new ActiveXObject('htmlfile')
        } catch (t) {}
        var t, e
        _ =
          'undefined' != typeof document
            ? document.domain && n
              ? d(n)
              : (((e = u('iframe')).style.display = 'none'),
                l.appendChild(e),
                (e.src = String('javascript:')),
                (t = e.contentWindow.document).open(),
                t.write(f('document.F=Object')),
                t.close(),
                t.F)
            : d(n)
        for (var i = a.length; i--; ) delete _.prototype[a[i]]
        return _()
      }
    ;(s[h] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var i
          return (
            null !== t
              ? ((p.prototype = o(t)),
                (i = new p()),
                (p.prototype = null),
                (i[h] = t))
              : (i = _()),
            void 0 === e ? i : r(i, e)
          )
        })
  },
  function (t, e, i) {
    var n = i(13),
      o = i(92),
      r = i(59),
      a = i(63),
      s = i(93),
      l = i(64),
      u = i(94),
      c = function (t, e) {
        ;(this.stopped = t), (this.result = e)
      }
    t.exports = function (t, e, i) {
      var h,
        p,
        f,
        d,
        _,
        g,
        m,
        y = i && i.that,
        v = !(!i || !i.AS_ENTRIES),
        b = !(!i || !i.IS_ITERATOR),
        C = !(!i || !i.INTERRUPTED),
        w = a(e, y, 1 + v + C),
        T = function (t) {
          return h && u(h, 'normal', t), new c(!0, t)
        },
        S = function (t) {
          return v
            ? (n(t), C ? w(t[0], t[1], T) : w(t[0], t[1]))
            : C
            ? w(t, T)
            : w(t)
        }
      if (b) h = t
      else {
        if (!(p = l(t))) throw TypeError(String(t) + ' is not iterable')
        if (o(p)) {
          for (f = 0, d = r(t); d > f; f++)
            if ((_ = S(t[f])) && _ instanceof c) return _
          return new c(!1)
        }
        h = s(t, p)
      }
      for (g = h.next; !(m = g.call(h)).done; ) {
        try {
          _ = S(m.value)
        } catch (t) {
          u(h, 'throw', t)
        }
        if ('object' == typeof _ && _ && _ instanceof c) return _
      }
      return new c(!1)
    }
  },
  function (t, e, i) {
    var n = i(65),
      o = i(8),
      r = i(50),
      a = i(9)('toStringTag'),
      s =
        'Arguments' ==
        r(
          (function () {
            return arguments
          })()
        )
    t.exports = n
      ? r
      : function (t) {
          var e, i, n
          return void 0 === t
            ? 'Undefined'
            : null === t
            ? 'Null'
            : 'string' ==
              typeof (i = (function (t, e) {
                try {
                  return t[e]
                } catch (t) {}
              })((e = Object(t)), a))
            ? i
            : s
            ? r(e)
            : 'Object' == (n = r(e)) && o(e.callee)
            ? 'Arguments'
            : n
        }
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return { error: !1, value: t() }
      } catch (t) {
        return { error: !0, value: t }
      }
    }
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.MathUtils = void 0)
    var n = (function () {
      function t() {}
      return (
        (t.isMouseInRect = function (t, e, i) {
          return (
            t.left <= e &&
            e <= t.left + t.width &&
            t.top <= i &&
            i <= t.top + t.height
          )
        }),
        (t.degToRad = function (t) {
          return (t * Math.PI) / 180
        }),
        (t.polarToCartesian = function (t, e, i, n) {
          var o = ((n - 90) * Math.PI) / 180
          return { x: t + i * Math.cos(o), y: e + i * Math.sin(o) }
        }),
        (t.calcProgressWithinValues = function (t, e, i) {
          var n = (i - t) / (e - t)
          return n < 0 && (n = 0), n > 1 && (n = 1), n
        }),
        t
      )
    })()
    e.MathUtils = n
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.DeviceUtils = void 0)
    var n = (function () {
      function t() {}
      return (
        Object.defineProperty(t, 'HAS_TOUCH_SCREEN', {
          get: function () {
            return navigator.maxTouchPoints > 0 || 'ontouchstart' in window
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t, 'IS_IOS', {
          get: function () {
            return (
              /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t, 'IS_MOBILE', {
          get: function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t, 'IS_IE', {
          get: function () {
            var t = this.getInternetExplorerVersion()
            return 10 == t || 11 == t
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t, 'IS_FIREFOX', {
          get: function () {
            return -1 != navigator.userAgent.search('Firefox')
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t, 'IS_EDGE', {
          get: function () {
            return -1 != navigator.userAgent.search('Edge')
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t, 'IS_WINDOWS', {
          get: function () {
            return navigator.platform.toUpperCase().indexOf('WIN') > -1
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t, 'IS_MAC', {
          get: function () {
            return navigator.platform.toUpperCase().indexOf('MAC') >= 0
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t, 'IS_WINDOWS_MOBILE', {
          get: function () {
            var t = !1
            return (
              navigator.userAgent.match(/Windows Phone/i) && (t = !0),
              navigator.userAgent.match(/iemobile/i) && (t = !0),
              navigator.userAgent.match(/WPDesktop/i) && (t = !0),
              t
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.getInternetExplorerVersion = function () {
          var t = -1
          if ('Microsoft Internet Explorer' == navigator.appName) {
            var e = navigator.userAgent
            null != new RegExp('MSIE ([0-9]+[.0-9]*)').exec(e) &&
              (t = parseFloat(RegExp.$1))
          } else if ('Netscape' == navigator.appName) {
            e = navigator.userAgent
            null != new RegExp('Trident/.*rv:([0-9]+[.0-9]*)').exec(e) &&
              (t = parseFloat(RegExp.$1))
          }
          return t
        }),
        t
      )
    })()
    e.DeviceUtils = n
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.Gradient = void 0)
    var r = i(6),
      a = (function (t) {
        function e(e) {
          var i = t.call(this, 'background-gradient') || this
          return (i._gradientColor = e), i
        }
        return (
          o(e, t),
          (e.prototype.updateStyles = function () {
            var t = r.Color.hexToRgb(this._gradientColor),
              e = 'rgba(' + t.r + ', ' + t.g + ', ' + t.b + ', 0)',
              i = 'rgba(' + t.r + ', ' + t.g + ', ' + t.b + ', 1)'
            this.applyStyle({
              backgroundImage:
                'linear-gradient(to bottom, ' + e + ', ' + i + ')',
            })
          }),
          e
        )
      })(i(1).UIComponent)
    e.Gradient = a
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.GenericPostContentData = void 0)
    var n = (function () {
      function t(t) {
        this._data = t
      }
      return (
        Object.defineProperty(t.prototype, 'type', {
          get: function () {
            return this._data.type
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'logoURL', {
          get: function () {},
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'message', {
          get: function () {},
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'profileImageURL', {
          get: function () {},
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'profileName', {
          get: function () {},
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'imageURL', {
          get: function () {},
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'timeSincePublish', {
          get: function () {},
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'postURL', {
          get: function () {},
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.calcTimeSincePublish = function (t) {
          var e = new Date(t),
            i = new Date(),
            n = Math.abs((i.getTime() - e.getTime()) / 864e5)
          if (n <= 1) {
            var o = Math.round(24 * n)
            return 0 == o
              ? 'just now'
              : o + ' hour' + (o <= 1 ? '' : 's') + ' ago'
          }
          var r = Math.floor(n)
          return r + ' day' + (r <= 1 ? '' : 's') + ' ago'
        }),
        t
      )
    })()
    e.GenericPostContentData = n
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.BackgroundImage = void 0)
    var r = i(46),
      a = i(4),
      s = (function (t) {
        function e(e, i) {
          void 0 === i && (i = void 0)
          var n = t.call(this, 'background-image') || this
          return (
            (n._imageURL = e),
            (n._gradientOverlayColor = i),
            (n.onLoadedSignal = new a.Signal()),
            n.loadImage(),
            n._gradientOverlayColor && n.initGradientOverlay(),
            n
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'naturalWidth', {
            get: function () {
              return this._image.naturalWidth
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'naturalHeight', {
            get: function () {
              return this._image.naturalHeight
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'ratio', {
            get: function () {
              return this.naturalWidth / this.naturalHeight
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'gradientAlpha', {
            set: function (t) {
              this._gradientOverlay &&
                this._gradientOverlay.applyStyle({ opacity: t })
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this), this.onLoadedSignal.removeAll()
          }),
          (e.prototype.updateStyles = function () {
            this.applyStyle({
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }),
              this._gradientOverlay &&
                this._gradientOverlay.applyStyle({
                  width: '100%',
                  height: '100%',
                })
          }),
          (e.prototype.initGradientOverlay = function () {
            ;(this._gradientOverlay = new r.Gradient(
              this._gradientOverlayColor
            )),
              this.addChild(this._gradientOverlay)
          }),
          (e.prototype.loadImage = function () {
            var t = this
            this._imageURL &&
              ((this._image = new Image()),
              (this._image.onload = function () {
                return t.onImageLoaded()
              }),
              (this._image.src = `http://10.192.3.37:3001/` + this._imageURL))
          }),
          (e.prototype.onImageLoaded = function () {
            this.applyStyle({
              backgroundImage:
                'url(http://10.192.3.37:3001/' + this._imageURL + ')',
            }),
              this.onLoadedSignal.dispatch()
          }),
          e
        )
      })(i(1).UIComponent)
    e.BackgroundImage = s
  },
  function (t, e, i) {
    var n = i(17),
      o = i(76),
      r = i(25),
      a = i(34),
      s = i(52),
      l = i(16),
      u = i(85),
      c = Object.getOwnPropertyDescriptor
    e.f = n
      ? c
      : function (t, e) {
          if (((t = a(t)), (e = s(e)), u))
            try {
              return c(t, e)
            } catch (t) {}
          if (l(t, e)) return r(!o.f.call(t, e), t[e])
        }
  },
  function (t, e) {
    var i = {}.toString
    t.exports = function (t) {
      return i.call(t).slice(8, -1)
    }
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t)
      return t
    }
  },
  function (t, e, i) {
    var n = i(119),
      o = i(78)
    t.exports = function (t) {
      var e = n(t, 'string')
      return o(e) ? e : String(e)
    }
  },
  function (t, e, i) {
    var n = i(19)
    t.exports = function (t, e) {
      var i = t[e]
      return null == i ? void 0 : n(i)
    }
  },
  function (t, e, i) {
    var n = i(7),
      o = i(55),
      r = n['__core-js_shared__'] || o('__core-js_shared__', {})
    t.exports = r
  },
  function (t, e, i) {
    var n = i(7)
    t.exports = function (t, e) {
      try {
        Object.defineProperty(n, t, {
          value: e,
          configurable: !0,
          writable: !0,
        })
      } catch (i) {
        n[t] = e
      }
      return e
    }
  },
  function (t, e, i) {
    var n = i(83),
      o = i(84),
      r = n('keys')
    t.exports = function (t) {
      return r[t] || (r[t] = o(t))
    }
  },
  function (t, e) {
    t.exports = {}
  },
  function (t, e) {
    var i = Math.ceil,
      n = Math.floor
    t.exports = function (t) {
      var e = +t
      return e != e || 0 === e ? 0 : (e > 0 ? n : i)(e)
    }
  },
  function (t, e, i) {
    var n = i(127)
    t.exports = function (t) {
      return n(t.length)
    }
  },
  function (t, e) {
    t.exports = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ]
  },
  function (t, e, i) {
    var n = i(16),
      o = i(8),
      r = i(36),
      a = i(56),
      s = i(128),
      l = a('IE_PROTO'),
      u = Object.prototype
    t.exports = s
      ? Object.getPrototypeOf
      : function (t) {
          var e = r(t)
          if (n(e, l)) return e[l]
          var i = e.constructor
          return o(i) && e instanceof i
            ? i.prototype
            : e instanceof Object
            ? u
            : null
        }
  },
  function (t, e, i) {
    var n = i(13),
      o = i(129)
    t.exports =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var t,
              e = !1,
              i = {}
            try {
              ;(t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                '__proto__'
              ).set).call(i, []),
                (e = i instanceof Array)
            } catch (t) {}
            return function (i, r) {
              return n(i), o(r), e ? t.call(i, r) : (i.__proto__ = r), i
            }
          })()
        : void 0)
  },
  function (t, e, i) {
    var n = i(19)
    t.exports = function (t, e, i) {
      if ((n(t), void 0 === e)) return t
      switch (i) {
        case 0:
          return function () {
            return t.call(e)
          }
        case 1:
          return function (i) {
            return t.call(e, i)
          }
        case 2:
          return function (i, n) {
            return t.call(e, i, n)
          }
        case 3:
          return function (i, n, o) {
            return t.call(e, i, n, o)
          }
      }
      return function () {
        return t.apply(e, arguments)
      }
    }
  },
  function (t, e, i) {
    var n = i(42),
      o = i(53),
      r = i(27),
      a = i(9)('iterator')
    t.exports = function (t) {
      if (null != t) return o(t, a) || o(t, '@@iterator') || r[n(t)]
    }
  },
  function (t, e, i) {
    var n = {}
    ;(n[i(9)('toStringTag')] = 'z'), (t.exports = '[object z]' === String(n))
  },
  function (t, e, i) {
    var n = i(42)
    t.exports = function (t) {
      if ('Symbol' === n(t))
        throw TypeError('Cannot convert a Symbol value to a string')
      return String(t)
    }
  },
  function (t, e, i) {
    var n = i(21).f,
      o = i(16),
      r = i(9)('toStringTag')
    t.exports = function (t, e, i) {
      t &&
        !o((t = i ? t : t.prototype), r) &&
        n(t, r, { configurable: !0, value: e })
    }
  },
  function (t, e, i) {
    var n = i(50),
      o = i(7)
    t.exports = 'process' == n(o.process)
  },
  function (t, e, i) {
    var n = i(7)
    t.exports = n
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.NativeEventsController = void 0)
    var n = (function () {
      function t(t) {
        ;(this._element = t),
          (this._registeredListeners = {}),
          (this._currentListenerID = 0)
      }
      return (
        Object.defineProperty(t.prototype, 'listenerIDs', {
          get: function () {
            var t = []
            for (var e in this._registeredListeners)
              this._registeredListeners.hasOwnProperty(e) && t.push(parseInt(e))
            return t
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.destroy = function () {
          this.removeAllListeners(), (this._element = null)
        }),
        (t.prototype.addListener = function (t, e, i) {
          return (
            (this._registeredListeners[this._currentListenerID] = {
              eventType: t,
              listener: e,
            }),
            this._element.addEventListener(t, e, i),
            this._currentListenerID++
          )
        }),
        (t.prototype.removeAllListeners = function () {
          var t = this
          this.listenerIDs.forEach(function (e) {
            t.removeListener(e)
          })
        }),
        (t.prototype.removeListenersForEventType = function (t) {
          var e = this
          this.listenerIDs.forEach(function (i) {
            e._registeredListeners[i].eventType == t && e.removeListener(i)
          })
        }),
        (t.prototype.removeListener = function (t) {
          if (!this._registeredListeners[t]) return !1
          var e = this._registeredListeners[t]
          return (
            this._element.removeEventListener(e.eventType, e.listener),
            delete this._registeredListeners[t],
            !0
          )
        }),
        t
      )
    })()
    e.NativeEventsController = n
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.RichText = void 0)
    var r = i(6),
      a = i(10),
      s = i(2),
      l = i(1),
      u = i(4),
      c = i(3),
      h = i(33),
      p = (function (t) {
        function e(e, i) {
          void 0 === i && (i = !1)
          var n = t.call(this, 'rich-text') || this
          return (
            (n._html = e),
            (n._isArticle = i),
            (n._anchors = []),
            (n._images = []),
            (n.onExternalLinkSignal = new u.Signal()),
            (n.view.innerHTML = h.LinkUtils.linkify(n._html)),
            n.initAnchorElements(),
            n.initImageElements(),
            n
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'darkMode', {
            set: function (t) {
              ;(this._darkMode = t), this.updateStyles()
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.updateStyles = function () {
            var t = this
            this.applyStyle({
              fontFamily: a.Font.REGULAR_FAMILY,
              fontSize: this._isArticle
                ? a.Font.ARTICLE_P_FONTSIZE
                : a.Font.GENERAL_P_FONTSIZE,
              lineHeight: '1.5',
              color: this._darkMode ? r.Color.LIGHT_GREY : r.Color.DARK_GREY,
            }),
              this._anchors.forEach(function (e) {
                e.applyStyle({
                  color: t._darkMode
                    ? c.AppConfig.HIGHLIGHT_COLOR
                    : r.Color.BLUE,
                  boxSizing: 'border-box',
                  textDecoration: 'none',
                })
              }),
              this._images.forEach(function (t) {
                t.applyStyle({
                  width: '100%',
                  marginTop: s.Size.CONTENT_MARGIN,
                  marginBottom: s.Size.CONTENT_MARGIN,
                })
              })
          }),
          (e.prototype.initAnchorElements = function () {
            var t = this
            Array.from(this.view.getElementsByTagName('a')).forEach(function (
              e
            ) {
              var i = new l.UIComponent(e)
              ;(i.view.target = '_blank'),
                i.addNativeListener('mouseover', function () {
                  return t.onAnchorMouseOver(i)
                }),
                i.addNativeListener('mouseout', function () {
                  return t.onAnchorMouseOut(i)
                }),
                i.addNativeListener('click', function (i) {
                  return t.onAchorClicked(i, e.href)
                }),
                t._anchors.push(i)
            })
          }),
          (e.prototype.initImageElements = function () {
            var t = this
            Array.from(this.view.getElementsByTagName('img')).forEach(function (
              e
            ) {
              t._images.push(new l.UIComponent(e))
            })
          }),
          (e.prototype.onAnchorMouseOver = function (t) {
            t.applyStyle({
              borderBottom:
                '1px solid ' +
                (this._darkMode ? c.AppConfig.HIGHLIGHT_COLOR : r.Color.BLUE),
            })
          }),
          (e.prototype.onAnchorMouseOut = function (t) {
            t.applyStyle({ borderBottom: 'none' })
          }),
          (e.prototype.onAchorClicked = function (t, e) {
            t.preventDefault(), this.onExternalLinkSignal.dispatch(e)
          }),
          e
        )
      })(l.UIComponent)
    e.RichText = p
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.Language = void 0)
    var n = (function () {
      function t() {}
      return (
        (t.ERROR_NO_DATA_AVAILABLE = 'No data available.'),
        (t.READ_MORE_LABEL = 'Read more'),
        t
      )
    })()
    e.Language = n
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.CoreController = void 0)
    var n = i(72),
      o = i(23),
      r = i(5),
      a = i(33),
      s = (function () {
        function t(e, i) {
          ;(this._coreView = e),
            (this._coreData = i),
            (this._externalLayerAppeared = !1),
            this.initListeners(),
            (t._coreView = e)
        }
        return (
          (t.prototype.start = function () {
            this._coreData.loadData()
          }),
          (t.showError = function (e) {
            t._coreView.showError(e)
          }),
          (t.prototype.initListeners = function () {
            var e = this
            this._coreData.onDataAvailableSignal.addOnce(function () {
              return e.onDataLoaded()
            }),
              this._coreData.onNoDataAvailableSignal.add(function () {
                return t.showError(n.Language.ERROR_NO_DATA_AVAILABLE)
              }),
              this._coreView.backgroundSystem.onBackgroundClickSignal.add(
                function () {
                  return e.onBackgroundClicked()
                }
              ),
              this._coreView.topicSystem.onTopicItemExpandSignal.add(
                function () {
                  return e.onTopicItemExpanded()
                }
              ),
              this._coreView.topicSystem.onTopicItemCloseSignal.add(
                function () {
                  return e.onTopicItemClosed()
                }
              ),
              this._coreView.topicSystem.onExternalLinkSignal.add(function (t) {
                return e.onExternalLinkClicked(t)
              }),
              this._coreView.navigationSystem.onPrevSignal.add(function () {
                return e.onLeftArrowClicked()
              }),
              this._coreView.navigationSystem.onNextSignal.add(function () {
                return e.onRightArrowClicked()
              }),
              this._coreView.navigationSystem.onTopicKeySignal.add(function (
                t
              ) {
                return e.onTopicKey(t)
              })
          }),
          (t.prototype.showTopic = function (t, e) {
            void 0 === e && (e = !0)
            var i = this._coreData.getTopicData(t)
            this._coreView.topicSystem.showTopic(i, e),
              this._coreView.navigationSystem.selectTopic(t),
              i.backgroundImageURL
                ? this._coreView.backgroundSystem.setBackgroundImageURL(
                    i.backgroundImageURL
                  )
                : this._coreView.backgroundSystem.setBackgroundImageURL(
                    this._coreData.defaultBackgroundImageURL
                  )
          }),
          (t.prototype.onRightArrowClicked = function () {
            this._coreView.navigationSystem.interactive &&
              this.showTopic(
                this._coreData.getNextTopicKey(
                  this._coreView.topicSystem.currentTopic.key
                )
              )
          }),
          (t.prototype.onLeftArrowClicked = function () {
            this._coreView.navigationSystem.interactive &&
              this.showTopic(
                this._coreData.getPrevTopicKey(
                  this._coreView.topicSystem.currentTopic.key
                ),
                !1
              )
          }),
          (t.prototype.onTopicKey = function (t) {
            this._coreView.navigationSystem.interactive &&
              this.showTopic(
                t,
                this._coreData.isNextTopic(
                  t,
                  this._coreView.topicSystem.currentTopic.key
                )
              )
          }),
          (t.prototype.onDataLoaded = function () {
            var t = this
            document.getElementById('loading-info').remove(),
              this._coreView.navigationSystem.setTopicData(
                this._coreData.topicsData
              ),
              this._coreView.navigationSystem.setNavigationBarTitle(
                this._coreData.navigationBarTitle
              ),
              this.showTopic(this._coreData.topicsData[0].key),
              r.TweenMax.delayedCall(1, function () {
                return t._coreView.navigationSystem.show()
              })
          }),
          (t.prototype.onTopicItemExpanded = function () {
            this._coreView.navigationSystem.hide()
          }),
          (t.prototype.onTopicItemClosed = function () {
            this._coreView.navigationSystem.show()
          }),
          (t.prototype.onBackgroundClicked = function () {
            this._coreView.topicSystem.currentTopic.hasExpandedTopicItem &&
              this._coreView.topicSystem.currentTopic.closeExpandedContent()
          }),
          (t.prototype.onExternalLinkClicked = function (t) {
            var e = this
            this._externalLayerAppeared || a.LinkUtils.isInternalLink(t)
              ? o.URLUtils.openLink(t)
              : this._coreView.showExternalLinkLayer(
                  t,
                  this._coreData.externalLinkLayerLabels,
                  function () {
                    e._externalLayerAppeared = !0
                  }
                )
          }),
          t
        )
      })()
    e.CoreController = s
  },
  function (t, e, i) {
    'use strict'
    var n = i(14),
      o = i(61),
      r = i(62),
      a = i(40),
      s = i(20),
      l = i(25),
      u = i(131),
      c = i(41),
      h = i(66),
      p = function (t, e) {
        var i = this,
          n = arguments.length > 2 ? arguments[2] : void 0
        if (!(i instanceof p)) return new p(t, e, n)
        r && (i = r(new Error(void 0), o(i))),
          void 0 !== e && s(i, 'message', h(e)),
          u(i, n)
        var a = []
        return c(t, a.push, { that: a }), s(i, 'errors', a), i
      }
    ;(p.prototype = a(Error.prototype, {
      constructor: l(5, p),
      message: l(5, ''),
      name: l(5, 'AggregateError'),
    })),
      n({ global: !0 }, { AggregateError: p })
  },
  function (t, e) {
    var i
    i = (function () {
      return this
    })()
    try {
      i = i || new Function('return this')()
    } catch (t) {
      'object' == typeof window && (i = window)
    }
    t.exports = i
  },
  function (t, e, i) {
    'use strict'
    var n = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      r = o && !n.call({ 1: 2 }, 1)
    e.f = r
      ? function (t) {
          var e = o(this, t)
          return !!e && e.enumerable
        }
      : n
  },
  function (t, e, i) {
    var n = i(12),
      o = i(50),
      r = ''.split
    t.exports = n(function () {
      return !Object('z').propertyIsEnumerable(0)
    })
      ? function (t) {
          return 'String' == o(t) ? r.call(t, '') : Object(t)
        }
      : Object
  },
  function (t, e, i) {
    var n = i(8),
      o = i(15),
      r = i(79)
    t.exports = r
      ? function (t) {
          return 'symbol' == typeof t
        }
      : function (t) {
          var e = o('Symbol')
          return n(e) && Object(t) instanceof e
        }
  },
  function (t, e, i) {
    var n = i(80)
    t.exports = n && !Symbol.sham && 'symbol' == typeof Symbol.iterator
  },
  function (t, e, i) {
    var n = i(81),
      o = i(12)
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !o(function () {
        var t = Symbol()
        return (
          !String(t) ||
          !(Object(t) instanceof Symbol) ||
          (!Symbol.sham && n && n < 41)
        )
      })
  },
  function (t, e, i) {
    var n,
      o,
      r = i(7),
      a = i(35),
      s = r.process,
      l = r.Deno,
      u = (s && s.versions) || (l && l.version),
      c = u && u.v8
    c
      ? (o = (n = c.split('.'))[0] < 4 ? 1 : n[0] + n[1])
      : a &&
        (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
        (n = a.match(/Chrome\/(\d+)/)) &&
        (o = n[1]),
      (t.exports = o && +o)
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return String(t)
      } catch (t) {
        return 'Object'
      }
    }
  },
  function (t, e, i) {
    var n = i(26),
      o = i(54)
    ;(t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {})
    })('versions', []).push({
      version: '3.18.2',
      mode: n ? 'pure' : 'global',
      copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
    })
  },
  function (t, e) {
    var i = 0,
      n = Math.random()
    t.exports = function (t) {
      return (
        'Symbol(' +
        String(void 0 === t ? '' : t) +
        ')_' +
        (++i + n).toString(36)
      )
    }
  },
  function (t, e, i) {
    var n = i(17),
      o = i(12),
      r = i(37)
    t.exports =
      !n &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(r('div'), 'a', {
            get: function () {
              return 7
            },
          }).a
        )
      })
  },
  function (t, e, i) {
    var n = i(17),
      o = i(16),
      r = Function.prototype,
      a = n && Object.getOwnPropertyDescriptor,
      s = o(r, 'name'),
      l = s && 'something' === function () {}.name,
      u = s && (!n || (n && a(r, 'name').configurable))
    t.exports = { EXISTS: s, PROPER: l, CONFIGURABLE: u }
  },
  function (t, e, i) {
    var n = i(16),
      o = i(34),
      r = i(125).indexOf,
      a = i(57)
    t.exports = function (t, e) {
      var i,
        s = o(t),
        l = 0,
        u = []
      for (i in s) !n(a, i) && n(s, i) && u.push(i)
      for (; e.length > l; ) n(s, (i = e[l++])) && (~r(u, i) || u.push(i))
      return u
    }
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols
  },
  function (t, e, i) {
    var n = i(12),
      o = i(8),
      r = /#|\.prototype\./,
      a = function (t, e) {
        var i = l[s(t)]
        return i == c || (i != u && (o(e) ? n(e) : !!e))
      },
      s = (a.normalize = function (t) {
        return String(t).replace(r, '.').toLowerCase()
      }),
      l = (a.data = {}),
      u = (a.NATIVE = 'N'),
      c = (a.POLYFILL = 'P')
    t.exports = a
  },
  function (t, e, i) {
    var n = i(87),
      o = i(60)
    t.exports =
      Object.keys ||
      function (t) {
        return n(t, o)
      }
  },
  function (t, e, i) {
    var n = i(15)
    t.exports = n('document', 'documentElement')
  },
  function (t, e, i) {
    var n = i(9),
      o = i(27),
      r = n('iterator'),
      a = Array.prototype
    t.exports = function (t) {
      return void 0 !== t && (o.Array === t || a[r] === t)
    }
  },
  function (t, e, i) {
    var n = i(19),
      o = i(13),
      r = i(64)
    t.exports = function (t, e) {
      var i = arguments.length < 2 ? r(t) : e
      if (n(i)) return o(i.call(t))
      throw TypeError(String(t) + ' is not iterable')
    }
  },
  function (t, e, i) {
    var n = i(13),
      o = i(53)
    t.exports = function (t, e, i) {
      var r, a
      n(t)
      try {
        if (!(r = o(t, 'return'))) {
          if ('throw' === e) throw i
          return i
        }
        r = r.call(t)
      } catch (t) {
        ;(a = !0), (r = t)
      }
      if ('throw' === e) throw i
      if (a) throw r
      return n(r), i
    }
  },
  function (t, e, i) {
    'use strict'
    var n = i(34),
      o = i(132),
      r = i(27),
      a = i(39),
      s = i(96),
      l = a.set,
      u = a.getterFor('Array Iterator')
    ;(t.exports = s(
      Array,
      'Array',
      function (t, e) {
        l(this, { type: 'Array Iterator', target: n(t), index: 0, kind: e })
      },
      function () {
        var t = u(this),
          e = t.target,
          i = t.kind,
          n = t.index++
        return !e || n >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : 'keys' == i
          ? { value: n, done: !1 }
          : 'values' == i
          ? { value: e[n], done: !1 }
          : { value: [n, e[n]], done: !1 }
      },
      'values'
    )),
      (r.Arguments = r.Array),
      o('keys'),
      o('values'),
      o('entries')
  },
  function (t, e, i) {
    'use strict'
    var n = i(14),
      o = i(26),
      r = i(86),
      a = i(8),
      s = i(133),
      l = i(61),
      u = i(62),
      c = i(67),
      h = i(20),
      p = i(22),
      f = i(9),
      d = i(27),
      _ = i(97),
      g = r.PROPER,
      m = r.CONFIGURABLE,
      y = _.IteratorPrototype,
      v = _.BUGGY_SAFARI_ITERATORS,
      b = f('iterator'),
      C = function () {
        return this
      }
    t.exports = function (t, e, i, r, f, _, w) {
      s(i, e, r)
      var T,
        S,
        A,
        O = function (t) {
          if (t === f && I) return I
          if (!v && t in D) return D[t]
          switch (t) {
            case 'keys':
            case 'values':
            case 'entries':
              return function () {
                return new i(this, t)
              }
          }
          return function () {
            return new i(this)
          }
        },
        E = e + ' Iterator',
        x = !1,
        D = t.prototype,
        P = D[b] || D['@@iterator'] || (f && D[f]),
        I = (!v && P) || O(f),
        k = ('Array' == e && D.entries) || P
      if (
        (k &&
          (T = l(k.call(new t()))) !== Object.prototype &&
          T.next &&
          (o || l(T) === y || (u ? u(T, y) : a(T[b]) || p(T, b, C)),
          c(T, E, !0, !0),
          o && (d[E] = C)),
        g &&
          'values' == f &&
          P &&
          'values' !== P.name &&
          (!o && m
            ? h(D, 'name', 'values')
            : ((x = !0),
              (I = function () {
                return P.call(this)
              }))),
        f)
      )
        if (
          ((S = {
            values: O('values'),
            keys: _ ? I : O('keys'),
            entries: O('entries'),
          }),
          w)
        )
          for (A in S) (v || x || !(A in D)) && p(D, A, S[A])
        else n({ target: e, proto: !0, forced: v || x }, S)
      return (o && !w) || D[b] === I || p(D, b, I, { name: f }), (d[e] = I), S
    }
  },
  function (t, e, i) {
    'use strict'
    var n,
      o,
      r,
      a = i(12),
      s = i(8),
      l = i(40),
      u = i(61),
      c = i(22),
      h = i(9),
      p = i(26),
      f = h('iterator'),
      d = !1
    ;[].keys &&
      ('next' in (r = [].keys())
        ? (o = u(u(r))) !== Object.prototype && (n = o)
        : (d = !0)),
      null == n ||
      a(function () {
        var t = {}
        return n[f].call(t) !== t
      })
        ? (n = {})
        : p && (n = l(n)),
      s(n[f]) ||
        c(n, f, function () {
          return this
        }),
      (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: d })
  },
  function (t, e, i) {
    var n = i(7)
    t.exports = n.Promise
  },
  function (t, e, i) {
    var n = i(9)('iterator'),
      o = !1
    try {
      var r = 0,
        a = {
          next: function () {
            return { done: !!r++ }
          },
          return: function () {
            o = !0
          },
        }
      ;(a[n] = function () {
        return this
      }),
        Array.from(a, function () {
          throw 2
        })
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !o) return !1
      var i = !1
      try {
        var r = {}
        ;(r[n] = function () {
          return {
            next: function () {
              return { done: (i = !0) }
            },
          }
        }),
          t(r)
      } catch (t) {}
      return i
    }
  },
  function (t, e, i) {
    var n = i(13),
      o = i(140),
      r = i(9)('species')
    t.exports = function (t, e) {
      var i,
        a = n(t).constructor
      return void 0 === a || null == (i = n(a)[r]) ? e : o(i)
    }
  },
  function (t, e, i) {
    var n = i(12),
      o = i(8),
      r = i(42),
      a = i(15),
      s = i(38),
      l = [],
      u = a('Reflect', 'construct'),
      c = /^\s*(?:class|function)\b/,
      h = c.exec,
      p = !c.exec(function () {}),
      f = function (t) {
        if (!o(t)) return !1
        try {
          return u(Object, l, t), !0
        } catch (t) {
          return !1
        }
      }
    t.exports =
      !u ||
      n(function () {
        var t
        return (
          f(f.call) ||
          !f(Object) ||
          !f(function () {
            t = !0
          }) ||
          t
        )
      })
        ? function (t) {
            if (!o(t)) return !1
            switch (r(t)) {
              case 'AsyncFunction':
              case 'GeneratorFunction':
              case 'AsyncGeneratorFunction':
                return !1
            }
            return p || !!h.call(c, s(t))
          }
        : f
  },
  function (t, e, i) {
    var n,
      o,
      r,
      a,
      s = i(7),
      l = i(8),
      u = i(12),
      c = i(63),
      h = i(91),
      p = i(37),
      f = i(103),
      d = i(68),
      _ = s.setImmediate,
      g = s.clearImmediate,
      m = s.process,
      y = s.MessageChannel,
      v = s.Dispatch,
      b = 0,
      C = {}
    try {
      n = s.location
    } catch (t) {}
    var w = function (t) {
        if (C.hasOwnProperty(t)) {
          var e = C[t]
          delete C[t], e()
        }
      },
      T = function (t) {
        return function () {
          w(t)
        }
      },
      S = function (t) {
        w(t.data)
      },
      A = function (t) {
        s.postMessage(String(t), n.protocol + '//' + n.host)
      }
    ;(_ && g) ||
      ((_ = function (t) {
        for (var e = [], i = arguments.length, n = 1; i > n; )
          e.push(arguments[n++])
        return (
          (C[++b] = function () {
            ;(l(t) ? t : Function(t)).apply(void 0, e)
          }),
          o(b),
          b
        )
      }),
      (g = function (t) {
        delete C[t]
      }),
      d
        ? (o = function (t) {
            m.nextTick(T(t))
          })
        : v && v.now
        ? (o = function (t) {
            v.now(T(t))
          })
        : y && !f
        ? ((a = (r = new y()).port2),
          (r.port1.onmessage = S),
          (o = c(a.postMessage, a, 1)))
        : s.addEventListener &&
          l(s.postMessage) &&
          !s.importScripts &&
          n &&
          'file:' !== n.protocol &&
          !u(A)
        ? ((o = A), s.addEventListener('message', S, !1))
        : (o =
            'onreadystatechange' in p('script')
              ? function (t) {
                  h.appendChild(p('script')).onreadystatechange = function () {
                    h.removeChild(this), w(t)
                  }
                }
              : function (t) {
                  setTimeout(T(t), 0)
                })),
      (t.exports = { set: _, clear: g })
  },
  function (t, e, i) {
    var n = i(35)
    t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n)
  },
  function (t, e, i) {
    var n = i(13),
      o = i(18),
      r = i(28)
    t.exports = function (t, e) {
      if ((n(t), o(e) && e.constructor === t)) return e
      var i = r.f(t)
      return (0, i.resolve)(e), i.promise
    }
  },
  function (t, e, i) {
    'use strict'
    var n = i(14),
      o = i(19),
      r = i(28),
      a = i(43),
      s = i(41)
    n(
      { target: 'Promise', stat: !0 },
      {
        allSettled: function (t) {
          var e = this,
            i = r.f(e),
            n = i.resolve,
            l = i.reject,
            u = a(function () {
              var i = o(e.resolve),
                r = [],
                a = 0,
                l = 1
              s(t, function (t) {
                var o = a++,
                  s = !1
                r.push(void 0),
                  l++,
                  i.call(e, t).then(
                    function (t) {
                      s ||
                        ((s = !0),
                        (r[o] = { status: 'fulfilled', value: t }),
                        --l || n(r))
                    },
                    function (t) {
                      s ||
                        ((s = !0),
                        (r[o] = { status: 'rejected', reason: t }),
                        --l || n(r))
                    }
                  )
              }),
                --l || n(r)
            })
          return u.error && l(u.value), i.promise
        },
      }
    )
  },
  function (t, e, i) {
    'use strict'
    var n = i(14),
      o = i(19),
      r = i(15),
      a = i(28),
      s = i(43),
      l = i(41)
    n(
      { target: 'Promise', stat: !0 },
      {
        any: function (t) {
          var e = this,
            i = a.f(e),
            n = i.resolve,
            u = i.reject,
            c = s(function () {
              var i = o(e.resolve),
                a = [],
                s = 0,
                c = 1,
                h = !1
              l(t, function (t) {
                var o = s++,
                  l = !1
                a.push(void 0),
                  c++,
                  i.call(e, t).then(
                    function (t) {
                      l || h || ((h = !0), n(t))
                    },
                    function (t) {
                      l ||
                        h ||
                        ((l = !0),
                        (a[o] = t),
                        --c ||
                          u(
                            new (r('AggregateError'))(
                              a,
                              'No one promise resolved'
                            )
                          ))
                    }
                  )
              }),
                --c ||
                  u(new (r('AggregateError'))(a, 'No one promise resolved'))
            })
          return c.error && u(c.value), i.promise
        },
      }
    )
  },
  function (t, e, i) {
    'use strict'
    var n = i(147).charAt,
      o = i(66),
      r = i(39),
      a = i(96),
      s = r.set,
      l = r.getterFor('String Iterator')
    a(
      String,
      'String',
      function (t) {
        s(this, { type: 'String Iterator', string: o(t), index: 0 })
      },
      function () {
        var t,
          e = l(this),
          i = e.string,
          o = e.index
        return o >= i.length
          ? { value: void 0, done: !0 }
          : ((t = n(i, o)), (e.index += t.length), { value: t, done: !1 })
      }
    )
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TopicItemContent = void 0)
    var r = i(1),
      a = i(4),
      s = i(109),
      l = (function (t) {
        function e(e) {
          var i = t.call(this, e + '-content') || this
          return (
            (i._contentType = e),
            (i._currentWidth = 100),
            (i._currentHeight = 100),
            (i._standardHeight = 100),
            (i._standardWidth = 100),
            (i._selected = !1),
            (i._expanded = !1),
            (i.onExpandSignal = new a.Signal()),
            (i.onCloseSignal = new a.Signal()),
            (i.onHeightChangeSignal = new a.Signal()),
            (i.onExternalLinkSignal = new a.Signal()),
            s.EasyXDM.onHeightChangeSignal.add(function () {
              return i.updateStyles()
            }),
            i
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'selected', {
            set: function (t) {
              this._selected = t
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'expanded', {
            get: function () {
              return this._expanded
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'width', {
            get: function () {
              return this._standardWidth
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'height', {
            get: function () {
              return this._standardHeight
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.expand = function (t) {
            this._expanded = t
          }),
          (e.prototype.destroy = function () {
            this.onCloseSignal.removeAll(),
              this.onCloseSignal.removeAll(),
              this.onHeightChangeSignal.removeAll(),
              this.onExternalLinkSignal.removeAll(),
              t.prototype.destroy.call(this)
          }),
          (e.prototype.updateStyles = function () {
            this.applyStyle({ position: 'absolute', top: 0, left: 0 })
          }),
          e
        )
      })(r.UIComponent)
    e.TopicItemContent = l
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.EasyXDM = void 0)
    var n = i(3),
      o = i(4),
      r = i(5),
      a = (function () {
        function t() {}
        return (
          (t.init = function () {
            i(188)
            var e = 0,
              o = new easyXDM.Socket({ remote: window.location.href })
            setInterval(function () {
              var i = document.body.clientWidth,
                a = Math.round(i / (16 / 9))
              a < n.AppConfig.EASY_XDM_MIN_HEIGHT &&
                (a = n.AppConfig.EASY_XDM_MIN_HEIGHT),
                a != e &&
                  ((e = a),
                  o.postMessage('{"type":"height","height":"' + a + '"}'),
                  r.TweenMax.delayedCall(0.1, function () {
                    return t.onHeightChangeSignal.dispatch()
                  }))
            }, 300)
          }),
          (t.onHeightChangeSignal = new o.Signal()),
          t
        )
      })()
    e.EasyXDM = a
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ProfileInfo = void 0)
    var r = i(48),
      a = i(10),
      s = i(6),
      l = i(2),
      u = i(1),
      c = i(4),
      h = i(5),
      p = (function (t) {
        function e(e, i, n, o) {
          var r = t.call(this, 'profile-info') || this
          return (
            (r._profileImageURL = e),
            (r._profileName = i),
            (r._publishTime = n),
            (r.postURL = o),
            (r.onExternalLinkSignal = new c.Signal()),
            r.initProfileImage(),
            r.initProfileText(),
            r.initProfileName(),
            r.initPublishTime(),
            r.initListeners(),
            r
          )
        }
        return (
          o(e, t),
          (e.prototype.updateStyles = function () {
            this.applyStyle({
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              display: 'inline-block',
            }),
              this._profileImage.applyStyle({
                display: 'inline-block',
                verticalAlign: 'top',
                width: l.Size.PROFILE_ICON_SIZE,
                height: l.Size.PROFILE_ICON_SIZE,
              }),
              this._profileText.applyStyle({
                display: 'inline-block',
                width: 'calc(100% - ' + l.Size.PROFILE_ICON_SIZE + 'px)',
                paddingLeft: 0.5 * l.Size.CONTENT_MARGIN,
                verticalAlign: 'top',
              }),
              this._profileNameField.applyStyle({
                fontFamily: a.Font.BOLD_FAMILY,
                fontSize: a.Font.GENERAL_P_FONTSIZE,
                color: s.Color.BLACK,
              }),
              this._timeField.applyStyle({
                fontFamily: a.Font.REGULAR_FAMILY,
                fontSize: a.Font.GENERAL_P_FONTSIZE,
                color: s.Color.LIGHT_GREY,
              })
          }),
          (e.prototype.initProfileImage = function () {
            ;(this._profileImage = new r.BackgroundImage(
              this._profileImageURL
            )),
              this.addChild(this._profileImage)
          }),
          (e.prototype.initProfileText = function () {
            ;(this._profileText = new u.UIComponent('profile-text')),
              this.addChild(this._profileText)
          }),
          (e.prototype.initProfileName = function () {
            ;(this._profileNameField = new u.UIComponent('profile-name')),
              (this._profileNameField.view.innerHTML = this._profileName),
              this._profileText.addChild(this._profileNameField)
          }),
          (e.prototype.initPublishTime = function () {
            ;(this._timeField = new u.UIComponent('published-time')),
              (this._timeField.view.innerText = this._publishTime),
              this._profileText.addChild(this._timeField)
          }),
          (e.prototype.initListeners = function () {
            var t = this
            this.addNativeListener('click', function (e) {
              return t.onClicked()
            }),
              this.addNativeListener('mouseover', function () {
                return t.onMouseOver()
              }),
              this.addNativeListener('mouseout', function () {
                return t.onMouseOut()
              })
          }),
          (e.prototype.onClicked = function () {
            this.onExternalLinkSignal.dispatch(this.postURL)
          }),
          (e.prototype.onMouseOver = function () {
            h.TweenMax.to(this._profileImage.view, 0.3, {
              scale: 1.05,
              ease: h.Power4.easeOut,
            })
          }),
          (e.prototype.onMouseOut = function () {
            h.TweenMax.to(this._profileImage.view, 0.3, {
              scale: 1,
              ease: h.Power4.easeOut,
            })
          }),
          e
        )
      })(u.UIComponent)
    e.ProfileInfo = p
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.SocialChannelLogo = void 0)
    var r = i(11),
      a = i(2),
      s = i(5),
      l = (function (t) {
        function e(e) {
          var i = t.call(this, e, 'social-channel-logo') || this
          return (i._logoURL = e), i.clearSizeDefinition(), i.initListeners(), i
        }
        return (
          o(e, t),
          (e.prototype.updateStyles = function () {
            t.prototype.updateStyles.call(this),
              this.applyStyle({
                position: 'absolute',
                width: a.Size.PROFILE_ICON_SIZE,
                top: 0.5 * a.Size.CONTENT_MARGIN,
                right: 0.5 * a.Size.CONTENT_MARGIN,
                cursor: 'pointer',
                zIndex: 1,
              })
          }),
          (e.prototype.initListeners = function () {
            var t = this
            this.addNativeListener('mouseover', function () {
              return t.onMouseOver()
            }),
              this.addNativeListener('mouseout', function () {
                return t.onMouseOut()
              })
          }),
          (e.prototype.onMouseOver = function () {
            s.TweenMax.to(this.view, 0.3, {
              scale: 1.05,
              ease: s.Power4.easeOut,
            })
          }),
          (e.prototype.onMouseOut = function () {
            s.TweenMax.to(this.view, 0.3, { scale: 1, ease: s.Power4.easeOut })
          }),
          e
        )
      })(r.SVGComponent)
    e.SocialChannelLogo = l
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.LabaledArrowButton = void 0)
    var r = i(10),
      a = i(5),
      s = i(11),
      l = i(1),
      u = i(4),
      c = i(3),
      h = (function (t) {
        function e(e) {
          var i = t.call(this, 'labeled-arrow-button') || this
          return (
            (i._label = e),
            (i._useArrowDownAnimation = !1),
            (i.onClickSignal = new u.Signal()),
            i.initArrowIcon(),
            i.initLabelField(),
            i.initListeners(),
            i
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'useArrowDownAnimation', {
            set: function (t) {
              this._useArrowDownAnimation = t
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.show = function (t) {
            void 0 === t && (t = 0),
              (this.interactive = !0),
              a.TweenMax.to(this.view, 0.5, { delay: t, autoAlpha: 1 })
          }),
          (e.prototype.hide = function (t) {
            void 0 === t && (t = !1),
              (this.interactive = !1),
              a.TweenMax.to(this.view, t ? 0 : 0.5, { autoAlpha: 0 })
          }),
          (e.prototype.playArrowDownAnimation = function () {
            this._useArrowDownAnimation &&
              a.TweenMax.to(this._arrowIcon.transform, 0.5, {
                rotate: 90,
                ease: a.Power4.easeOut,
              })
          }),
          (e.prototype.playResetAnimation = function () {
            this._useArrowDownAnimation &&
              a.TweenMax.to(this._arrowIcon.transform, 0.5, {
                rotate: 0,
                ease: a.Power4.easeOut,
              })
          }),
          (e.prototype.updateStyles = function () {
            this.applyStyle({ whiteSpace: 'no-wrap', cursor: 'pointer' }),
              (this._arrowIcon.getElementByID('circle').style.fill =
                c.AppConfig.HIGHLIGHT_COLOR),
              (this._arrowIcon.interactive = !1),
              this._arrowIcon.applyStyle({
                width: r.Font.ARTICLE_P_FONTSIZE,
                y: 2,
                display: 'inline-block',
                transformOrigin: '50% 40%',
              }),
              (this._labelField.interactive = !1),
              this._labelField.applyStyle({
                display: 'inline-block',
                color: c.AppConfig.HIGHLIGHT_COLOR,
                fontFamily: r.Font.REGULAR_FAMILY,
                fontSize: r.Font.ARTICLE_P_FONTSIZE,
                paddingLeft: 0.3 * r.Font.ARTICLE_P_FONTSIZE,
                lineHeight: '1',
              })
          }),
          (e.prototype.destroy = function (e) {
            void 0 === e && (e = !0),
              this.onClickSignal.removeAll(),
              t.prototype.destroy.call(this, e)
          }),
          (e.prototype.initArrowIcon = function () {
            ;(this._arrowIcon = new s.SVGComponent(i(220), 'arrow-icon')),
              this._arrowIcon.clearSizeDefinition(),
              this.addChild(this._arrowIcon)
          }),
          (e.prototype.initLabelField = function () {
            ;(this._labelField = new l.UIComponent('label-field')),
              (this._labelField.view.innerText = this._label),
              this.addChild(this._labelField)
          }),
          (e.prototype.initListeners = function () {
            var t = this
            this.addNativeListener('click', function () {
              return t.onClicked()
            }),
              this.addNativeListener('touchend', function () {
                return t.onClicked()
              }),
              this.addNativeListener('mouseover', function () {
                return t.onMouseOver()
              }),
              this.addNativeListener('mouseout', function () {
                return t.onMouseOut()
              })
          }),
          (e.prototype.onClicked = function () {
            this.onClickSignal.dispatch()
          }),
          (e.prototype.onMouseOver = function () {
            this._useArrowDownAnimation && this.playArrowDownAnimation()
          }),
          (e.prototype.onMouseOut = function () {
            this._useArrowDownAnimation && this.playResetAnimation()
          }),
          e
        )
      })(l.UIComponent)
    e.LabaledArrowButton = h
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ResponseUtils = void 0)
    var n = i(224),
      o = (function () {
        function t() {}
        return (
          (t.getValueFromPathStrings = function (t, e, i) {
            void 0 === i && (i = !1)
            var o = void 0
            return (
              e.forEach(function (e) {
                var i = n.JsonUtils.getValueFromObject(e, t)
                if (-1 != e.indexOf('[0].')) {
                  var r = e.split('[0].'),
                    a = n.JsonUtils.getValueFromObject(r[0], t)
                  ;(null == a ? void 0 : a.length) > 0 &&
                    (i = n.JsonUtils.getValueFromObject(r[1], a[0]))
                }
                i && (o = i)
              }),
              !o &&
                i &&
                console.warn(
                  '[BASF Newsroom] Error: no pathValue found for:',
                  '\nJSONData: ',
                  t,
                  '\nDataPathes: ',
                  e
                ),
              o
            )
          }),
          t
        )
      })()
    e.ResponseUtils = o
  },
  function (t, e, i) {
    t.exports = i(115)
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      i(116),
      i(155),
      i(162),
      i(167),
      i(176)
    var n = i(177),
      o = i(109),
      r = i(23)
    Element.prototype.remove ||
      (Element.prototype.remove = function () {
        this.parentNode && this.parentNode.removeChild(this)
      }),
      'true' == r.URLUtils.getUrlParam('easyxdm') && o.EasyXDM.init(),
      new n.NewsroomMain(document.body)
  },
  function (t, e, i) {
    var n = i(117)
    i(151), i(152), i(153), i(154), (t.exports = n)
  },
  function (t, e, i) {
    var n = i(118)
    i(148), (t.exports = n)
  },
  function (t, e, i) {
    i(74), i(95), i(134), i(136), i(105), i(106), i(146), i(107)
    var n = i(69)
    t.exports = n.Promise
  },
  function (t, e, i) {
    var n = i(18),
      o = i(78),
      r = i(53),
      a = i(120),
      s = i(9)('toPrimitive')
    t.exports = function (t, e) {
      if (!n(t) || o(t)) return t
      var i,
        l = r(t, s)
      if (l) {
        if (
          (void 0 === e && (e = 'default'), (i = l.call(t, e)), !n(i) || o(i))
        )
          return i
        throw TypeError("Can't convert object to primitive value")
      }
      return void 0 === e && (e = 'number'), a(t, e)
    }
  },
  function (t, e, i) {
    var n = i(8),
      o = i(18)
    t.exports = function (t, e) {
      var i, r
      if ('string' === e && n((i = t.toString)) && !o((r = i.call(t)))) return r
      if (n((i = t.valueOf)) && !o((r = i.call(t)))) return r
      if ('string' !== e && n((i = t.toString)) && !o((r = i.call(t)))) return r
      throw TypeError("Can't convert object to primitive value")
    }
  },
  function (t, e, i) {
    var n = i(7),
      o = i(8),
      r = i(38),
      a = n.WeakMap
    t.exports = o(a) && /native code/.test(r(a))
  },
  function (t, e, i) {
    var n = i(16),
      o = i(123),
      r = i(49),
      a = i(21)
    t.exports = function (t, e) {
      for (var i = o(e), s = a.f, l = r.f, u = 0; u < i.length; u++) {
        var c = i[u]
        n(t, c) || s(t, c, l(e, c))
      }
    }
  },
  function (t, e, i) {
    var n = i(15),
      o = i(124),
      r = i(88),
      a = i(13)
    t.exports =
      n('Reflect', 'ownKeys') ||
      function (t) {
        var e = o.f(a(t)),
          i = r.f
        return i ? e.concat(i(t)) : e
      }
  },
  function (t, e, i) {
    var n = i(87),
      o = i(60).concat('length', 'prototype')
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return n(t, o)
      }
  },
  function (t, e, i) {
    var n = i(34),
      o = i(126),
      r = i(59),
      a = function (t) {
        return function (e, i, a) {
          var s,
            l = n(e),
            u = r(l),
            c = o(a, u)
          if (t && i != i) {
            for (; u > c; ) if ((s = l[c++]) != s) return !0
          } else
            for (; u > c; c++)
              if ((t || c in l) && l[c] === i) return t || c || 0
          return !t && -1
        }
      }
    t.exports = { includes: a(!0), indexOf: a(!1) }
  },
  function (t, e, i) {
    var n = i(58),
      o = Math.max,
      r = Math.min
    t.exports = function (t, e) {
      var i = n(t)
      return i < 0 ? o(i + e, 0) : r(i, e)
    }
  },
  function (t, e, i) {
    var n = i(58),
      o = Math.min
    t.exports = function (t) {
      return t > 0 ? o(n(t), 9007199254740991) : 0
    }
  },
  function (t, e, i) {
    var n = i(12)
    t.exports = !n(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      )
    })
  },
  function (t, e, i) {
    var n = i(8)
    t.exports = function (t) {
      if ('object' == typeof t || n(t)) return t
      throw TypeError("Can't set " + String(t) + ' as a prototype')
    }
  },
  function (t, e, i) {
    var n = i(17),
      o = i(21),
      r = i(13),
      a = i(90)
    t.exports = n
      ? Object.defineProperties
      : function (t, e) {
          r(t)
          for (var i, n = a(e), s = n.length, l = 0; s > l; )
            o.f(t, (i = n[l++]), e[i])
          return t
        }
  },
  function (t, e, i) {
    var n = i(18),
      o = i(20)
    t.exports = function (t, e) {
      n(e) && 'cause' in e && o(t, 'cause', t.cause)
    }
  },
  function (t, e, i) {
    var n = i(9),
      o = i(40),
      r = i(21),
      a = n('unscopables'),
      s = Array.prototype
    null == s[a] && r.f(s, a, { configurable: !0, value: o(null) }),
      (t.exports = function (t) {
        s[a][t] = !0
      })
  },
  function (t, e, i) {
    'use strict'
    var n = i(97).IteratorPrototype,
      o = i(40),
      r = i(25),
      a = i(67),
      s = i(27),
      l = function () {
        return this
      }
    t.exports = function (t, e, i) {
      var u = e + ' Iterator'
      return (
        (t.prototype = o(n, { next: r(1, i) })), a(t, u, !1, !0), (s[u] = l), t
      )
    }
  },
  function (t, e, i) {
    var n = i(65),
      o = i(22),
      r = i(135)
    n || o(Object.prototype, 'toString', r, { unsafe: !0 })
  },
  function (t, e, i) {
    'use strict'
    var n = i(65),
      o = i(42)
    t.exports = n
      ? {}.toString
      : function () {
          return '[object ' + o(this) + ']'
        }
  },
  function (t, e, i) {
    'use strict'
    var n,
      o,
      r,
      a,
      s = i(14),
      l = i(26),
      u = i(7),
      c = i(15),
      h = i(98),
      p = i(22),
      f = i(137),
      d = i(62),
      _ = i(67),
      g = i(138),
      m = i(19),
      y = i(8),
      v = i(18),
      b = i(139),
      C = i(38),
      w = i(41),
      T = i(99),
      S = i(100),
      A = i(102).set,
      O = i(141),
      E = i(104),
      x = i(144),
      D = i(28),
      P = i(43),
      I = i(39),
      k = i(89),
      F = i(9),
      L = i(145),
      N = i(68),
      R = i(81),
      M = F('species'),
      B = 'Promise',
      j = I.get,
      H = I.set,
      U = I.getterFor(B),
      z = h && h.prototype,
      G = h,
      V = z,
      W = u.TypeError,
      Y = u.document,
      X = u.process,
      Z = D.f,
      q = Z,
      K = !!(Y && Y.createEvent && u.dispatchEvent),
      J = y(u.PromiseRejectionEvent),
      Q = !1,
      $ = k(B, function () {
        var t = C(G),
          e = t !== String(G)
        if (!e && 66 === R) return !0
        if (l && !V.finally) return !0
        if (R >= 51 && /native code/.test(t)) return !1
        var i = new G(function (t) {
            t(1)
          }),
          n = function (t) {
            t(
              function () {},
              function () {}
            )
          }
        return (
          ((i.constructor = {})[M] = n),
          !(Q = i.then(function () {}) instanceof n) || (!e && L && !J)
        )
      }),
      tt =
        $ ||
        !T(function (t) {
          G.all(t).catch(function () {})
        }),
      et = function (t) {
        var e
        return !(!v(t) || !y((e = t.then))) && e
      },
      it = function (t, e) {
        if (!t.notified) {
          t.notified = !0
          var i = t.reactions
          O(function () {
            for (var n = t.value, o = 1 == t.state, r = 0; i.length > r; ) {
              var a,
                s,
                l,
                u = i[r++],
                c = o ? u.ok : u.fail,
                h = u.resolve,
                p = u.reject,
                f = u.domain
              try {
                c
                  ? (o || (2 === t.rejection && at(t), (t.rejection = 1)),
                    !0 === c
                      ? (a = n)
                      : (f && f.enter(), (a = c(n)), f && (f.exit(), (l = !0))),
                    a === u.promise
                      ? p(W('Promise-chain cycle'))
                      : (s = et(a))
                      ? s.call(a, h, p)
                      : h(a))
                  : p(n)
              } catch (t) {
                f && !l && f.exit(), p(t)
              }
            }
            ;(t.reactions = []), (t.notified = !1), e && !t.rejection && ot(t)
          })
        }
      },
      nt = function (t, e, i) {
        var n, o
        K
          ? (((n = Y.createEvent('Event')).promise = e),
            (n.reason = i),
            n.initEvent(t, !1, !0),
            u.dispatchEvent(n))
          : (n = { promise: e, reason: i }),
          !J && (o = u['on' + t])
            ? o(n)
            : 'unhandledrejection' === t && x('Unhandled promise rejection', i)
      },
      ot = function (t) {
        A.call(u, function () {
          var e,
            i = t.facade,
            n = t.value
          if (
            rt(t) &&
            ((e = P(function () {
              N
                ? X.emit('unhandledRejection', n, i)
                : nt('unhandledrejection', i, n)
            })),
            (t.rejection = N || rt(t) ? 2 : 1),
            e.error)
          )
            throw e.value
        })
      },
      rt = function (t) {
        return 1 !== t.rejection && !t.parent
      },
      at = function (t) {
        A.call(u, function () {
          var e = t.facade
          N ? X.emit('rejectionHandled', e) : nt('rejectionhandled', e, t.value)
        })
      },
      st = function (t, e, i) {
        return function (n) {
          t(e, n, i)
        }
      },
      lt = function (t, e, i) {
        t.done ||
          ((t.done = !0), i && (t = i), (t.value = e), (t.state = 2), it(t, !0))
      },
      ut = function (t, e, i) {
        if (!t.done) {
          ;(t.done = !0), i && (t = i)
          try {
            if (t.facade === e) throw W("Promise can't be resolved itself")
            var n = et(e)
            n
              ? O(function () {
                  var i = { done: !1 }
                  try {
                    n.call(e, st(ut, i, t), st(lt, i, t))
                  } catch (e) {
                    lt(i, e, t)
                  }
                })
              : ((t.value = e), (t.state = 1), it(t, !1))
          } catch (e) {
            lt({ done: !1 }, e, t)
          }
        }
      }
    if (
      $ &&
      ((V = (G = function (t) {
        b(this, G, B), m(t), n.call(this)
        var e = j(this)
        try {
          t(st(ut, e), st(lt, e))
        } catch (t) {
          lt(e, t)
        }
      }).prototype),
      ((n = function (t) {
        H(this, {
          type: B,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [],
          rejection: !1,
          state: 0,
          value: void 0,
        })
      }).prototype = f(V, {
        then: function (t, e) {
          var i = U(this),
            n = Z(S(this, G))
          return (
            (n.ok = !y(t) || t),
            (n.fail = y(e) && e),
            (n.domain = N ? X.domain : void 0),
            (i.parent = !0),
            i.reactions.push(n),
            0 != i.state && it(i, !1),
            n.promise
          )
        },
        catch: function (t) {
          return this.then(void 0, t)
        },
      })),
      (o = function () {
        var t = new n(),
          e = j(t)
        ;(this.promise = t),
          (this.resolve = st(ut, e)),
          (this.reject = st(lt, e))
      }),
      (D.f = Z =
        function (t) {
          return t === G || t === r ? new o(t) : q(t)
        }),
      !l && y(h) && z !== Object.prototype)
    ) {
      ;(a = z.then),
        Q ||
          (p(
            z,
            'then',
            function (t, e) {
              var i = this
              return new G(function (t, e) {
                a.call(i, t, e)
              }).then(t, e)
            },
            { unsafe: !0 }
          ),
          p(z, 'catch', V.catch, { unsafe: !0 }))
      try {
        delete z.constructor
      } catch (t) {}
      d && d(z, V)
    }
    s({ global: !0, wrap: !0, forced: $ }, { Promise: G }),
      _(G, B, !1, !0),
      g(B),
      (r = c(B)),
      s(
        { target: B, stat: !0, forced: $ },
        {
          reject: function (t) {
            var e = Z(this)
            return e.reject.call(void 0, t), e.promise
          },
        }
      ),
      s(
        { target: B, stat: !0, forced: l || $ },
        {
          resolve: function (t) {
            return E(l && this === r ? G : this, t)
          },
        }
      ),
      s(
        { target: B, stat: !0, forced: tt },
        {
          all: function (t) {
            var e = this,
              i = Z(e),
              n = i.resolve,
              o = i.reject,
              r = P(function () {
                var i = m(e.resolve),
                  r = [],
                  a = 0,
                  s = 1
                w(t, function (t) {
                  var l = a++,
                    u = !1
                  r.push(void 0),
                    s++,
                    i.call(e, t).then(function (t) {
                      u || ((u = !0), (r[l] = t), --s || n(r))
                    }, o)
                }),
                  --s || n(r)
              })
            return r.error && o(r.value), i.promise
          },
          race: function (t) {
            var e = this,
              i = Z(e),
              n = i.reject,
              o = P(function () {
                var o = m(e.resolve)
                w(t, function (t) {
                  o.call(e, t).then(i.resolve, n)
                })
              })
            return o.error && n(o.value), i.promise
          },
        }
      )
  },
  function (t, e, i) {
    var n = i(22)
    t.exports = function (t, e, i) {
      for (var o in e) n(t, o, e[o], i)
      return t
    }
  },
  function (t, e, i) {
    'use strict'
    var n = i(15),
      o = i(21),
      r = i(9),
      a = i(17),
      s = r('species')
    t.exports = function (t) {
      var e = n(t),
        i = o.f
      a &&
        e &&
        !e[s] &&
        i(e, s, {
          configurable: !0,
          get: function () {
            return this
          },
        })
    }
  },
  function (t, e) {
    t.exports = function (t, e, i) {
      if (t instanceof e) return t
      throw TypeError('Incorrect ' + (i ? i + ' ' : '') + 'invocation')
    }
  },
  function (t, e, i) {
    var n = i(101),
      o = i(82)
    t.exports = function (t) {
      if (n(t)) return t
      throw TypeError(o(t) + ' is not a constructor')
    }
  },
  function (t, e, i) {
    var n,
      o,
      r,
      a,
      s,
      l,
      u,
      c,
      h = i(7),
      p = i(49).f,
      f = i(102).set,
      d = i(103),
      _ = i(142),
      g = i(143),
      m = i(68),
      y = h.MutationObserver || h.WebKitMutationObserver,
      v = h.document,
      b = h.process,
      C = h.Promise,
      w = p(h, 'queueMicrotask'),
      T = w && w.value
    T ||
      ((n = function () {
        var t, e
        for (m && (t = b.domain) && t.exit(); o; ) {
          ;(e = o.fn), (o = o.next)
          try {
            e()
          } catch (t) {
            throw (o ? a() : (r = void 0), t)
          }
        }
        ;(r = void 0), t && t.enter()
      }),
      d || m || g || !y || !v
        ? !_ && C && C.resolve
          ? (((u = C.resolve(void 0)).constructor = C),
            (c = u.then),
            (a = function () {
              c.call(u, n)
            }))
          : (a = m
              ? function () {
                  b.nextTick(n)
                }
              : function () {
                  f.call(h, n)
                })
        : ((s = !0),
          (l = v.createTextNode('')),
          new y(n).observe(l, { characterData: !0 }),
          (a = function () {
            l.data = s = !s
          }))),
      (t.exports =
        T ||
        function (t) {
          var e = { fn: t, next: void 0 }
          r && (r.next = e), o || ((o = e), a()), (r = e)
        })
  },
  function (t, e, i) {
    var n = i(35),
      o = i(7)
    t.exports = /ipad|iphone|ipod/i.test(n) && void 0 !== o.Pebble
  },
  function (t, e, i) {
    var n = i(35)
    t.exports = /web0s(?!.*chrome)/i.test(n)
  },
  function (t, e, i) {
    var n = i(7)
    t.exports = function (t, e) {
      var i = n.console
      i && i.error && (1 === arguments.length ? i.error(t) : i.error(t, e))
    }
  },
  function (t, e) {
    t.exports = 'object' == typeof window
  },
  function (t, e, i) {
    'use strict'
    var n = i(14),
      o = i(26),
      r = i(98),
      a = i(12),
      s = i(15),
      l = i(8),
      u = i(100),
      c = i(104),
      h = i(22)
    if (
      (n(
        {
          target: 'Promise',
          proto: !0,
          real: !0,
          forced:
            !!r &&
            a(function () {
              r.prototype.finally.call({ then: function () {} }, function () {})
            }),
        },
        {
          finally: function (t) {
            var e = u(this, s('Promise')),
              i = l(t)
            return this.then(
              i
                ? function (i) {
                    return c(e, t()).then(function () {
                      return i
                    })
                  }
                : t,
              i
                ? function (i) {
                    return c(e, t()).then(function () {
                      throw i
                    })
                  }
                : t
            )
          },
        }
      ),
      !o && l(r))
    ) {
      var p = s('Promise').prototype.finally
      r.prototype.finally !== p && h(r.prototype, 'finally', p, { unsafe: !0 })
    }
  },
  function (t, e, i) {
    var n = i(58),
      o = i(66),
      r = i(51),
      a = function (t) {
        return function (e, i) {
          var a,
            s,
            l = o(r(e)),
            u = n(i),
            c = l.length
          return u < 0 || u >= c
            ? t
              ? ''
              : void 0
            : (a = l.charCodeAt(u)) < 55296 ||
              a > 56319 ||
              u + 1 === c ||
              (s = l.charCodeAt(u + 1)) < 56320 ||
              s > 57343
            ? t
              ? l.charAt(u)
              : a
            : t
            ? l.slice(u, u + 2)
            : s - 56320 + ((a - 55296) << 10) + 65536
        }
      }
    t.exports = { codeAt: a(!1), charAt: a(!0) }
  },
  function (t, e, i) {
    var n = i(7),
      o = i(149),
      r = i(150),
      a = i(95),
      s = i(20),
      l = i(9),
      u = l('iterator'),
      c = l('toStringTag'),
      h = a.values,
      p = function (t, e) {
        if (t) {
          if (t[u] !== h)
            try {
              s(t, u, h)
            } catch (e) {
              t[u] = h
            }
          if ((t[c] || s(t, c, e), o[e]))
            for (var i in a)
              if (t[i] !== a[i])
                try {
                  s(t, i, a[i])
                } catch (e) {
                  t[i] = a[i]
                }
        }
      }
    for (var f in o) p(n[f] && n[f].prototype, f)
    p(r, 'DOMTokenList')
  },
  function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    }
  },
  function (t, e, i) {
    var n = i(37)('span').classList,
      o = n && n.constructor && n.constructor.prototype
    t.exports = o === Object.prototype ? void 0 : o
  },
  function (t, e, i) {
    i(74)
  },
  function (t, e, i) {
    i(105)
  },
  function (t, e, i) {
    'use strict'
    var n = i(14),
      o = i(28),
      r = i(43)
    n(
      { target: 'Promise', stat: !0 },
      {
        try: function (t) {
          var e = o.f(this),
            i = r(t)
          return (i.error ? e.reject : e.resolve)(i.value), e.promise
        },
      }
    )
  },
  function (t, e, i) {
    i(106)
  },
  function (t, e, i) {
    var n = i(156)
    t.exports = n
  },
  function (t, e, i) {
    var n = i(157)
    t.exports = n
  },
  function (t, e, i) {
    i(107), i(158)
    var n = i(69)
    t.exports = n.Array.from
  },
  function (t, e, i) {
    var n = i(14),
      o = i(159)
    n(
      {
        target: 'Array',
        stat: !0,
        forced: !i(99)(function (t) {
          Array.from(t)
        }),
      },
      { from: o }
    )
  },
  function (t, e, i) {
    'use strict'
    var n = i(63),
      o = i(36),
      r = i(160),
      a = i(92),
      s = i(101),
      l = i(59),
      u = i(161),
      c = i(93),
      h = i(64)
    t.exports = function (t) {
      var e = o(t),
        i = s(this),
        p = arguments.length,
        f = p > 1 ? arguments[1] : void 0,
        d = void 0 !== f
      d && (f = n(f, p > 2 ? arguments[2] : void 0, 2))
      var _,
        g,
        m,
        y,
        v,
        b,
        C = h(e),
        w = 0
      if (!C || (this == Array && a(C)))
        for (_ = l(e), g = i ? new this(_) : Array(_); _ > w; w++)
          (b = d ? f(e[w], w) : e[w]), u(g, w, b)
      else
        for (
          v = (y = c(e, C)).next, g = i ? new this() : [];
          !(m = v.call(y)).done;
          w++
        )
          (b = d ? r(y, f, [m.value, w], !0) : m.value), u(g, w, b)
      return (g.length = w), g
    }
  },
  function (t, e, i) {
    var n = i(13),
      o = i(94)
    t.exports = function (t, e, i, r) {
      try {
        return r ? e(n(i)[0], i[1]) : e(i)
      } catch (e) {
        o(t, 'throw', e)
      }
    }
  },
  function (t, e, i) {
    'use strict'
    var n = i(52),
      o = i(21),
      r = i(25)
    t.exports = function (t, e, i) {
      var a = n(e)
      a in t ? o.f(t, a, r(0, i)) : (t[a] = i)
    }
  },
  function (t, e, i) {
    var n = i(163)
    t.exports = n
  },
  function (t, e, i) {
    var n = i(164)
    t.exports = n
  },
  function (t, e, i) {
    i(165)
    var n = i(69)
    t.exports = n.Object.assign
  },
  function (t, e, i) {
    var n = i(14),
      o = i(166)
    n(
      { target: 'Object', stat: !0, forced: Object.assign !== o },
      { assign: o }
    )
  },
  function (t, e, i) {
    'use strict'
    var n = i(17),
      o = i(12),
      r = i(90),
      a = i(88),
      s = i(76),
      l = i(36),
      u = i(77),
      c = Object.assign,
      h = Object.defineProperty
    t.exports =
      !c ||
      o(function () {
        if (
          n &&
          1 !==
            c(
              { b: 1 },
              c(
                h({}, 'a', {
                  enumerable: !0,
                  get: function () {
                    h(this, 'b', { value: 3, enumerable: !1 })
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0
        var t = {},
          e = {},
          i = Symbol()
        return (
          (t[i] = 7),
          'abcdefghijklmnopqrst'.split('').forEach(function (t) {
            e[t] = t
          }),
          7 != c({}, t)[i] || 'abcdefghijklmnopqrst' != r(c({}, e)).join('')
        )
      })
        ? function (t, e) {
            for (
              var i = l(t), o = arguments.length, c = 1, h = a.f, p = s.f;
              o > c;

            )
              for (
                var f,
                  d = u(arguments[c++]),
                  _ = h ? r(d).concat(h(d)) : r(d),
                  g = _.length,
                  m = 0;
                g > m;

              )
                (f = _[m++]), (n && !p.call(d, f)) || (i[f] = d[f])
            return i
          }
        : c
  },
  function (t, e, i) {
    var n = i(168)
    'string' == typeof n && (n = [[t.i, n, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    i(174)(n, o)
    n.locals && (t.exports = n.locals)
  },
  function (t, e, i) {
    e = t.exports = i(169)(!1)
    var n = i(170),
      o = n(i(171)),
      r = n(i(172)),
      a = n(i(173))
    e.push([
      t.i,
      "@font-face{font-family:'HelveticaNeue';src:url(" +
        o +
        ') format("woff")}@font-face{font-family:\'HelveticaNeue-Bold\';src:url(' +
        r +
        ') format("woff")}@font-face{font-family:\'HelveticaNeue-LightItalic\';src:url(' +
        a +
        ') format("woff")}\n',
      '',
    ])
  },
  function (t, e, i) {
    'use strict'
    t.exports = function (t) {
      var e = []
      return (
        (e.toString = function () {
          return this.map(function (e) {
            var i = (function (t, e) {
              var i = t[1] || '',
                n = t[3]
              if (!n) return i
              if (e && 'function' == typeof btoa) {
                var o =
                    ((a = n),
                    '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                      ' */'),
                  r = n.sources.map(function (t) {
                    return '/*# sourceURL=' + n.sourceRoot + t + ' */'
                  })
                return [i].concat(r).concat([o]).join('\n')
              }
              var a
              return [i].join('\n')
            })(e, t)
            return e[2] ? '@media ' + e[2] + '{' + i + '}' : i
          }).join('')
        }),
        (e.i = function (t, i) {
          'string' == typeof t && (t = [[null, t, '']])
          for (var n = {}, o = 0; o < this.length; o++) {
            var r = this[o][0]
            null != r && (n[r] = !0)
          }
          for (o = 0; o < t.length; o++) {
            var a = t[o]
            ;(null != a[0] && n[a[0]]) ||
              (i && !a[2]
                ? (a[2] = i)
                : i && (a[2] = '(' + a[2] + ') and (' + i + ')'),
              e.push(a))
          }
        }),
        e
      )
    }
  },
  function (t, e, i) {
    'use strict'
    t.exports = function (t, e) {
      return 'string' != typeof t
        ? t
        : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
          /["'() \t\n]/.test(t) || e
            ? '"' + t.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
            : t)
    }
  },
  function (t, e, i) {
    t.exports = i.p + 'fonts/HelveticaNeue.woff'
  },
  function (t, e, i) {
    t.exports = i.p + 'fonts/HelveticaNeue-Bold.woff'
  },
  function (t, e, i) {
    t.exports = i.p + 'fonts/HelveticaNeue-LightItalic.woff'
  },
  function (t, e, i) {
    var n,
      o,
      r = {},
      a =
        ((n = function () {
          return window && document && document.all && !window.atob
        }),
        function () {
          return void 0 === o && (o = n.apply(this, arguments)), o
        }),
      s = function (t, e) {
        return e ? e.querySelector(t) : document.querySelector(t)
      },
      l = (function (t) {
        var e = {}
        return function (t, i) {
          if ('function' == typeof t) return t()
          if (void 0 === e[t]) {
            var n = s.call(this, t, i)
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head
              } catch (t) {
                n = null
              }
            e[t] = n
          }
          return e[t]
        }
      })(),
      u = null,
      c = 0,
      h = [],
      p = i(175)
    function f(t, e) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i],
          o = r[n.id]
        if (o) {
          o.refs++
          for (var a = 0; a < o.parts.length; a++) o.parts[a](n.parts[a])
          for (; a < n.parts.length; a++) o.parts.push(v(n.parts[a], e))
        } else {
          var s = []
          for (a = 0; a < n.parts.length; a++) s.push(v(n.parts[a], e))
          r[n.id] = { id: n.id, refs: 1, parts: s }
        }
      }
    }
    function d(t, e) {
      for (var i = [], n = {}, o = 0; o < t.length; o++) {
        var r = t[o],
          a = e.base ? r[0] + e.base : r[0],
          s = { css: r[1], media: r[2], sourceMap: r[3] }
        n[a] ? n[a].parts.push(s) : i.push((n[a] = { id: a, parts: [s] }))
      }
      return i
    }
    function _(t, e) {
      var i = l(t.insertInto)
      if (!i)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        )
      var n = h[h.length - 1]
      if ('top' === t.insertAt)
        n
          ? n.nextSibling
            ? i.insertBefore(e, n.nextSibling)
            : i.appendChild(e)
          : i.insertBefore(e, i.firstChild),
          h.push(e)
      else if ('bottom' === t.insertAt) i.appendChild(e)
      else {
        if ('object' != typeof t.insertAt || !t.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          )
        var o = l(t.insertAt.before, i)
        i.insertBefore(e, o)
      }
    }
    function g(t) {
      if (null === t.parentNode) return !1
      t.parentNode.removeChild(t)
      var e = h.indexOf(t)
      e >= 0 && h.splice(e, 1)
    }
    function m(t) {
      var e = document.createElement('style')
      if (
        (void 0 === t.attrs.type && (t.attrs.type = 'text/css'),
        void 0 === t.attrs.nonce)
      ) {
        var n = (function () {
          0
          return i.nc
        })()
        n && (t.attrs.nonce = n)
      }
      return y(e, t.attrs), _(t, e), e
    }
    function y(t, e) {
      Object.keys(e).forEach(function (i) {
        t.setAttribute(i, e[i])
      })
    }
    function v(t, e) {
      var i, n, o, r
      if (e.transform && t.css) {
        if (
          !(r =
            'function' == typeof e.transform
              ? e.transform(t.css)
              : e.transform.default(t.css))
        )
          return function () {}
        t.css = r
      }
      if (e.singleton) {
        var a = c++
        ;(i = u || (u = m(e))),
          (n = w.bind(null, i, a, !1)),
          (o = w.bind(null, i, a, !0))
      } else
        t.sourceMap &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        'function' == typeof URL.revokeObjectURL &&
        'function' == typeof Blob &&
        'function' == typeof btoa
          ? ((i = (function (t) {
              var e = document.createElement('link')
              return (
                void 0 === t.attrs.type && (t.attrs.type = 'text/css'),
                (t.attrs.rel = 'stylesheet'),
                y(e, t.attrs),
                _(t, e),
                e
              )
            })(e)),
            (n = S.bind(null, i, e)),
            (o = function () {
              g(i), i.href && URL.revokeObjectURL(i.href)
            }))
          : ((i = m(e)),
            (n = T.bind(null, i)),
            (o = function () {
              g(i)
            }))
      return (
        n(t),
        function (e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap
            )
              return
            n((t = e))
          } else o()
        }
      )
    }
    t.exports = function (t, e) {
      if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
        throw new Error(
          'The style-loader cannot be used in a non-browser environment'
        )
      ;((e = e || {}).attrs = 'object' == typeof e.attrs ? e.attrs : {}),
        e.singleton || 'boolean' == typeof e.singleton || (e.singleton = a()),
        e.insertInto || (e.insertInto = 'head'),
        e.insertAt || (e.insertAt = 'bottom')
      var i = d(t, e)
      return (
        f(i, e),
        function (t) {
          for (var n = [], o = 0; o < i.length; o++) {
            var a = i[o]
            ;(s = r[a.id]).refs--, n.push(s)
          }
          t && f(d(t, e), e)
          for (o = 0; o < n.length; o++) {
            var s
            if (0 === (s = n[o]).refs) {
              for (var l = 0; l < s.parts.length; l++) s.parts[l]()
              delete r[s.id]
            }
          }
        }
      )
    }
    var b,
      C =
        ((b = []),
        function (t, e) {
          return (b[t] = e), b.filter(Boolean).join('\n')
        })
    function w(t, e, i, n) {
      var o = i ? '' : n.css
      if (t.styleSheet) t.styleSheet.cssText = C(e, o)
      else {
        var r = document.createTextNode(o),
          a = t.childNodes
        a[e] && t.removeChild(a[e]),
          a.length ? t.insertBefore(r, a[e]) : t.appendChild(r)
      }
    }
    function T(t, e) {
      var i = e.css,
        n = e.media
      if ((n && t.setAttribute('media', n), t.styleSheet))
        t.styleSheet.cssText = i
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild)
        t.appendChild(document.createTextNode(i))
      }
    }
    function S(t, e, i) {
      var n = i.css,
        o = i.sourceMap,
        r = void 0 === e.convertToAbsoluteUrls && o
      ;(e.convertToAbsoluteUrls || r) && (n = p(n)),
        o &&
          (n +=
            '\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
            ' */')
      var a = new Blob([n], { type: 'text/css' }),
        s = t.href
      ;(t.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s)
    }
  },
  function (t, e) {
    t.exports = function (t) {
      var e = 'undefined' != typeof window && window.location
      if (!e) throw new Error('fixUrls requires window.location')
      if (!t || 'string' != typeof t) return t
      var i = e.protocol + '//' + e.host,
        n = i + e.pathname.replace(/\/[^\/]*$/, '/')
      return t.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function (t, e) {
          var o,
            r = e
              .trim()
              .replace(/^"(.*)"$/, function (t, e) {
                return e
              })
              .replace(/^'(.*)'$/, function (t, e) {
                return e
              })
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)
            ? t
            : ((o =
                0 === r.indexOf('//')
                  ? r
                  : 0 === r.indexOf('/')
                  ? i + r
                  : n + r.replace(/^\.\//, '')),
              'url(' + JSON.stringify(o) + ')')
        }
      )
    }
  },
  function (t, e) {
    ;(function () {
      'use strict'
      var t = window.Document.prototype.createElement,
        e = window.Document.prototype.createElementNS,
        i = window.Document.prototype.importNode,
        n = window.Document.prototype.prepend,
        o = window.Document.prototype.append,
        r = window.DocumentFragment.prototype.prepend,
        a = window.DocumentFragment.prototype.append,
        s = window.Node.prototype.cloneNode,
        l = window.Node.prototype.appendChild,
        u = window.Node.prototype.insertBefore,
        c = window.Node.prototype.removeChild,
        h = window.Node.prototype.replaceChild,
        p = Object.getOwnPropertyDescriptor(
          window.Node.prototype,
          'textContent'
        ),
        f = window.Element.prototype.attachShadow,
        d = Object.getOwnPropertyDescriptor(
          window.Element.prototype,
          'innerHTML'
        ),
        _ = window.Element.prototype.getAttribute,
        g = window.Element.prototype.setAttribute,
        m = window.Element.prototype.removeAttribute,
        y = window.Element.prototype.getAttributeNS,
        v = window.Element.prototype.setAttributeNS,
        b = window.Element.prototype.removeAttributeNS,
        C = window.Element.prototype.insertAdjacentElement,
        w = window.Element.prototype.insertAdjacentHTML,
        T = window.Element.prototype.prepend,
        S = window.Element.prototype.append,
        A = window.Element.prototype.before,
        O = window.Element.prototype.after,
        E = window.Element.prototype.replaceWith,
        x = window.Element.prototype.remove,
        D = window.HTMLElement,
        P = Object.getOwnPropertyDescriptor(
          window.HTMLElement.prototype,
          'innerHTML'
        ),
        I = window.HTMLElement.prototype.insertAdjacentElement,
        k = window.HTMLElement.prototype.insertAdjacentHTML,
        F = new Set()
      function L(t) {
        var e = F.has(t)
        return (t = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(t)), !e && t
      }
      'annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph'
        .split(' ')
        .forEach(function (t) {
          return F.add(t)
        })
      var N = document.contains
        ? document.contains.bind(document)
        : document.documentElement.contains.bind(document.documentElement)
      function R(t) {
        var e = t.isConnected
        if (void 0 !== e) return e
        if (N(t)) return !0
        for (; t && !(t.__CE_isImportDocument || t instanceof Document); )
          t =
            t.parentNode ||
            (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0)
        return !(!t || !(t.__CE_isImportDocument || t instanceof Document))
      }
      function M(t) {
        var e = t.children
        if (e) return Array.prototype.slice.call(e)
        for (e = [], t = t.firstChild; t; t = t.nextSibling)
          t.nodeType === Node.ELEMENT_NODE && e.push(t)
        return e
      }
      function B(t, e) {
        for (; e && e !== t && !e.nextSibling; ) e = e.parentNode
        return e && e !== t ? e.nextSibling : null
      }
      function j() {
        var t = !(null == at || !at.noDocumentConstructionObserver),
          e = !(null == at || !at.shadyDomFastWalk)
        ;(this.m = []),
          (this.g = []),
          (this.j = !1),
          (this.shadyDomFastWalk = e),
          (this.I = !t)
      }
      function H(t, e, i, n) {
        var o = window.ShadyDOM
        if (t.shadyDomFastWalk && o && o.inUse) {
          if ((e.nodeType === Node.ELEMENT_NODE && i(e), e.querySelectorAll))
            for (
              t = o.nativeMethods.querySelectorAll.call(e, '*'), e = 0;
              e < t.length;
              e++
            )
              i(t[e])
        } else
          !(function t(e, i, n) {
            for (var o = e; o; ) {
              if (o.nodeType === Node.ELEMENT_NODE) {
                var r = o
                i(r)
                var a = r.localName
                if ('link' === a && 'import' === r.getAttribute('rel')) {
                  if (
                    ((o = r.import),
                    void 0 === n && (n = new Set()),
                    o instanceof Node && !n.has(o))
                  )
                    for (n.add(o), o = o.firstChild; o; o = o.nextSibling)
                      t(o, i, n)
                  o = B(e, r)
                  continue
                }
                if ('template' === a) {
                  o = B(e, r)
                  continue
                }
                if ((r = r.__CE_shadowRoot))
                  for (r = r.firstChild; r; r = r.nextSibling) t(r, i, n)
              }
              o = o.firstChild ? o.firstChild : B(e, o)
            }
          })(e, i, n)
      }
      function U(t, e) {
        t.j &&
          H(t, e, function (e) {
            return z(t, e)
          })
      }
      function z(t, e) {
        if (t.j && !e.__CE_patched) {
          e.__CE_patched = !0
          for (var i = 0; i < t.m.length; i++) t.m[i](e)
          for (i = 0; i < t.g.length; i++) t.g[i](e)
        }
      }
      function G(t, e) {
        var i = []
        for (
          H(t, e, function (t) {
            return i.push(t)
          }),
            e = 0;
          e < i.length;
          e++
        ) {
          var n = i[e]
          1 === n.__CE_state ? t.connectedCallback(n) : Y(t, n)
        }
      }
      function V(t, e) {
        var i = []
        for (
          H(t, e, function (t) {
            return i.push(t)
          }),
            e = 0;
          e < i.length;
          e++
        ) {
          var n = i[e]
          1 === n.__CE_state && t.disconnectedCallback(n)
        }
      }
      function W(t, e, i) {
        var n = (i = void 0 === i ? {} : i).J,
          o =
            i.upgrade ||
            function (e) {
              return Y(t, e)
            },
          r = []
        for (
          H(
            t,
            e,
            function (e) {
              if (
                (t.j && z(t, e),
                'link' === e.localName && 'import' === e.getAttribute('rel'))
              ) {
                var i = e.import
                i instanceof Node &&
                  ((i.__CE_isImportDocument = !0),
                  (i.__CE_registry = document.__CE_registry)),
                  i && 'complete' === i.readyState
                    ? (i.__CE_documentLoadHandled = !0)
                    : e.addEventListener('load', function () {
                        var i = e.import
                        if (!i.__CE_documentLoadHandled) {
                          i.__CE_documentLoadHandled = !0
                          var r = new Set()
                          n &&
                            (n.forEach(function (t) {
                              return r.add(t)
                            }),
                            r.delete(i)),
                            W(t, i, { J: r, upgrade: o })
                        }
                      })
              } else r.push(e)
            },
            n
          ),
            e = 0;
          e < r.length;
          e++
        )
          o(r[e])
      }
      function Y(t, e) {
        try {
          var i = e.ownerDocument,
            n = i.__CE_registry,
            o =
              n && (i.defaultView || i.__CE_isImportDocument)
                ? it(n, e.localName)
                : void 0
          if (o && void 0 === e.__CE_state) {
            o.constructionStack.push(e)
            try {
              try {
                if (new o.constructorFunction() !== e)
                  throw Error(
                    'The custom element constructor did not produce the element being upgraded.'
                  )
              } finally {
                o.constructionStack.pop()
              }
            } catch (t) {
              throw ((e.__CE_state = 2), t)
            }
            if (
              ((e.__CE_state = 1),
              (e.__CE_definition = o),
              o.attributeChangedCallback && e.hasAttributes())
            ) {
              var r = o.observedAttributes
              for (o = 0; o < r.length; o++) {
                var a = r[o],
                  s = e.getAttribute(a)
                null !== s && t.attributeChangedCallback(e, a, null, s, null)
              }
            }
            R(e) && t.connectedCallback(e)
          }
        } catch (t) {
          Z(t)
        }
      }
      function X(i, n, o, r) {
        var a = n.__CE_registry
        if (
          a &&
          (null === r || 'http://www.w3.org/1999/xhtml' === r) &&
          (a = it(a, o))
        )
          try {
            var s = new a.constructorFunction()
            if (void 0 === s.__CE_state || void 0 === s.__CE_definition)
              throw Error(
                "Failed to construct '" +
                  o +
                  "': The returned value was not constructed with the HTMLElement constructor."
              )
            if ('http://www.w3.org/1999/xhtml' !== s.namespaceURI)
              throw Error(
                "Failed to construct '" +
                  o +
                  "': The constructed element's namespace must be the HTML namespace."
              )
            if (s.hasAttributes())
              throw Error(
                "Failed to construct '" +
                  o +
                  "': The constructed element must not have any attributes."
              )
            if (null !== s.firstChild)
              throw Error(
                "Failed to construct '" +
                  o +
                  "': The constructed element must not have any children."
              )
            if (null !== s.parentNode)
              throw Error(
                "Failed to construct '" +
                  o +
                  "': The constructed element must not have a parent node."
              )
            if (s.ownerDocument !== n)
              throw Error(
                "Failed to construct '" +
                  o +
                  "': The constructed element's owner document is incorrect."
              )
            if (s.localName !== o)
              throw Error(
                "Failed to construct '" +
                  o +
                  "': The constructed element's local name is incorrect."
              )
            return s
          } catch (a) {
            return (
              Z(a),
              (n = null === r ? t.call(n, o) : e.call(n, r, o)),
              Object.setPrototypeOf(n, HTMLUnknownElement.prototype),
              (n.__CE_state = 2),
              (n.__CE_definition = void 0),
              z(i, n),
              n
            )
          }
        return z(i, (n = null === r ? t.call(n, o) : e.call(n, r, o))), n
      }
      function Z(t) {
        var e = t.message,
          i = t.sourceURL || t.fileName || '',
          n = t.line || t.lineNumber || 0,
          o = t.column || t.columnNumber || 0,
          r = void 0
        void 0 === ErrorEvent.prototype.initErrorEvent
          ? (r = new ErrorEvent('error', {
              cancelable: !0,
              message: e,
              filename: i,
              lineno: n,
              colno: o,
              error: t,
            }))
          : ((r = document.createEvent('ErrorEvent')).initErrorEvent(
              'error',
              !1,
              !0,
              e,
              i,
              n
            ),
            (r.preventDefault = function () {
              Object.defineProperty(this, 'defaultPrevented', {
                configurable: !0,
                get: function () {
                  return !0
                },
              })
            })),
          void 0 === r.error &&
            Object.defineProperty(r, 'error', {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return t
              },
            }),
          window.dispatchEvent(r),
          r.defaultPrevented || console.error(t)
      }
      function q() {
        var t = this
        ;(this.g = void 0),
          (this.F = new Promise(function (e) {
            t.l = e
          }))
      }
      function K(t) {
        var e = document
        ;(this.l = void 0),
          (this.h = t),
          (this.g = e),
          W(this.h, this.g),
          'loading' === this.g.readyState &&
            ((this.l = new MutationObserver(this.G.bind(this))),
            this.l.observe(this.g, { childList: !0, subtree: !0 }))
      }
      function J(t) {
        t.l && t.l.disconnect()
      }
      function Q(t) {
        ;(this.s = new Map()),
          (this.u = new Map()),
          (this.C = new Map()),
          (this.A = !1),
          (this.B = new Map()),
          (this.o = function (t) {
            return t()
          }),
          (this.i = !1),
          (this.v = []),
          (this.h = t),
          (this.D = t.I ? new K(t) : void 0)
      }
      function $(t, e) {
        if (!L(e))
          throw new SyntaxError("The element name '" + e + "' is not valid.")
        if (it(t, e))
          throw Error(
            "A custom element with name '" + e + "' has already been defined."
          )
        if (t.A) throw Error('A custom element is already being defined.')
      }
      function tt(t, e, i) {
        var n
        t.A = !0
        try {
          var o = i.prototype
          if (!(o instanceof Object))
            throw new TypeError(
              "The custom element constructor's prototype is not an object."
            )
          var r = function (t) {
              var e = o[t]
              if (void 0 !== e && !(e instanceof Function))
                throw Error("The '" + t + "' callback must be a function.")
              return e
            },
            a = r('connectedCallback'),
            s = r('disconnectedCallback'),
            l = r('adoptedCallback'),
            u =
              ((n = r('attributeChangedCallback')) && i.observedAttributes) ||
              []
        } catch (t) {
          throw t
        } finally {
          t.A = !1
        }
        return (
          (i = {
            localName: e,
            constructorFunction: i,
            connectedCallback: a,
            disconnectedCallback: s,
            adoptedCallback: l,
            attributeChangedCallback: n,
            observedAttributes: u,
            constructionStack: [],
          }),
          t.u.set(e, i),
          t.C.set(i.constructorFunction, i),
          i
        )
      }
      function et(t) {
        if (!1 !== t.i) {
          t.i = !1
          for (var e = [], i = t.v, n = new Map(), o = 0; o < i.length; o++)
            n.set(i[o], [])
          for (
            W(t.h, document, {
              upgrade: function (i) {
                if (void 0 === i.__CE_state) {
                  var o = i.localName,
                    r = n.get(o)
                  r ? r.push(i) : t.u.has(o) && e.push(i)
                }
              },
            }),
              o = 0;
            o < e.length;
            o++
          )
            Y(t.h, e[o])
          for (o = 0; o < i.length; o++) {
            for (var r = i[o], a = n.get(r), s = 0; s < a.length; s++)
              Y(t.h, a[s])
            ;(r = t.B.get(r)) && r.resolve(void 0)
          }
          i.length = 0
        }
      }
      function it(t, e) {
        var i = t.u.get(e)
        if (i) return i
        if ((i = t.s.get(e))) {
          t.s.delete(e)
          try {
            return tt(t, e, i())
          } catch (t) {
            Z(t)
          }
        }
      }
      function nt(t, e, i) {
        function n(e) {
          return function (i) {
            for (var n = [], o = 0; o < arguments.length; ++o)
              n[o] = arguments[o]
            o = []
            for (var r = [], a = 0; a < n.length; a++) {
              var s = n[a]
              if (
                (s instanceof Element && R(s) && r.push(s),
                s instanceof DocumentFragment)
              )
                for (s = s.firstChild; s; s = s.nextSibling) o.push(s)
              else o.push(s)
            }
            for (e.apply(this, n), n = 0; n < r.length; n++) V(t, r[n])
            if (R(this))
              for (n = 0; n < o.length; n++)
                (r = o[n]) instanceof Element && G(t, r)
          }
        }
        void 0 !== i.prepend && (e.prepend = n(i.prepend)),
          void 0 !== i.append && (e.append = n(i.append))
      }
      function ot(t) {
        function i(e, i) {
          Object.defineProperty(e, 'innerHTML', {
            enumerable: i.enumerable,
            configurable: !0,
            get: i.get,
            set: function (e) {
              var n = this,
                o = void 0
              if (
                (R(this) &&
                  ((o = []),
                  H(t, this, function (t) {
                    t !== n && o.push(t)
                  })),
                i.set.call(this, e),
                o)
              )
                for (var r = 0; r < o.length; r++) {
                  var a = o[r]
                  1 === a.__CE_state && t.disconnectedCallback(a)
                }
              return (
                this.ownerDocument.__CE_registry ? W(t, this) : U(t, this), e
              )
            },
          })
        }
        function n(e, i) {
          e.insertAdjacentElement = function (e, n) {
            var o = R(n)
            return (e = i.call(this, e, n)), o && V(t, n), R(e) && G(t, n), e
          }
        }
        function o(e, i) {
          function n(e, i) {
            for (var n = []; e !== i; e = e.nextSibling) n.push(e)
            for (i = 0; i < n.length; i++) W(t, n[i])
          }
          e.insertAdjacentHTML = function (t, e) {
            if ('beforebegin' === (t = t.toLowerCase())) {
              var o = this.previousSibling
              i.call(this, t, e), n(o || this.parentNode.firstChild, this)
            } else if ('afterbegin' === t)
              (o = this.firstChild), i.call(this, t, e), n(this.firstChild, o)
            else if ('beforeend' === t)
              (o = this.lastChild),
                i.call(this, t, e),
                n(o || this.firstChild, null)
            else {
              if ('afterend' !== t)
                throw new SyntaxError(
                  'The value provided (' +
                    String(t) +
                    ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'."
                )
              ;(o = this.nextSibling),
                i.call(this, t, e),
                n(this.nextSibling, o)
            }
          }
        }
        f &&
          (Element.prototype.attachShadow = function (e) {
            if (((e = f.call(this, e)), t.j && !e.__CE_patched)) {
              e.__CE_patched = !0
              for (var i = 0; i < t.m.length; i++) t.m[i](e)
            }
            return (this.__CE_shadowRoot = e)
          }),
          d && d.get
            ? i(Element.prototype, d)
            : P && P.get
            ? i(HTMLElement.prototype, P)
            : (function (t, e) {
                ;(t.j = !0), t.g.push(e)
              })(t, function (t) {
                i(t, {
                  enumerable: !0,
                  configurable: !0,
                  get: function () {
                    return s.call(this, !0).innerHTML
                  },
                  set: function (t) {
                    var i = 'template' === this.localName,
                      n = i ? this.content : this,
                      o = e.call(document, this.namespaceURI, this.localName)
                    for (o.innerHTML = t; 0 < n.childNodes.length; )
                      c.call(n, n.childNodes[0])
                    for (t = i ? o.content : o; 0 < t.childNodes.length; )
                      l.call(n, t.childNodes[0])
                  },
                })
              }),
          (Element.prototype.setAttribute = function (e, i) {
            if (1 !== this.__CE_state) return g.call(this, e, i)
            var n = _.call(this, e)
            g.call(this, e, i),
              (i = _.call(this, e)),
              t.attributeChangedCallback(this, e, n, i, null)
          }),
          (Element.prototype.setAttributeNS = function (e, i, n) {
            if (1 !== this.__CE_state) return v.call(this, e, i, n)
            var o = y.call(this, e, i)
            v.call(this, e, i, n),
              (n = y.call(this, e, i)),
              t.attributeChangedCallback(this, i, o, n, e)
          }),
          (Element.prototype.removeAttribute = function (e) {
            if (1 !== this.__CE_state) return m.call(this, e)
            var i = _.call(this, e)
            m.call(this, e),
              null !== i && t.attributeChangedCallback(this, e, i, null, null)
          }),
          (Element.prototype.removeAttributeNS = function (e, i) {
            if (1 !== this.__CE_state) return b.call(this, e, i)
            var n = y.call(this, e, i)
            b.call(this, e, i)
            var o = y.call(this, e, i)
            n !== o && t.attributeChangedCallback(this, i, n, o, e)
          }),
          I ? n(HTMLElement.prototype, I) : C && n(Element.prototype, C),
          k ? o(HTMLElement.prototype, k) : w && o(Element.prototype, w),
          nt(t, Element.prototype, { prepend: T, append: S }),
          (function (t) {
            function e(e) {
              return function (i) {
                for (var n = [], o = 0; o < arguments.length; ++o)
                  n[o] = arguments[o]
                o = []
                for (var r = [], a = 0; a < n.length; a++) {
                  var s = n[a]
                  if (
                    (s instanceof Element && R(s) && r.push(s),
                    s instanceof DocumentFragment)
                  )
                    for (s = s.firstChild; s; s = s.nextSibling) o.push(s)
                  else o.push(s)
                }
                for (e.apply(this, n), n = 0; n < r.length; n++) V(t, r[n])
                if (R(this))
                  for (n = 0; n < o.length; n++)
                    (r = o[n]) instanceof Element && G(t, r)
              }
            }
            var i = Element.prototype
            void 0 !== A && (i.before = e(A)),
              void 0 !== O && (i.after = e(O)),
              void 0 !== E &&
                (i.replaceWith = function (e) {
                  for (var i = [], n = 0; n < arguments.length; ++n)
                    i[n] = arguments[n]
                  n = []
                  for (var o = [], r = 0; r < i.length; r++) {
                    var a = i[r]
                    if (
                      (a instanceof Element && R(a) && o.push(a),
                      a instanceof DocumentFragment)
                    )
                      for (a = a.firstChild; a; a = a.nextSibling) n.push(a)
                    else n.push(a)
                  }
                  for (r = R(this), E.apply(this, i), i = 0; i < o.length; i++)
                    V(t, o[i])
                  if (r)
                    for (V(t, this), i = 0; i < n.length; i++)
                      (o = n[i]) instanceof Element && G(t, o)
                }),
              void 0 !== x &&
                (i.remove = function () {
                  var e = R(this)
                  x.call(this), e && V(t, this)
                })
          })(t)
      }
      ;(j.prototype.connectedCallback = function (t) {
        var e = t.__CE_definition
        if (e.connectedCallback)
          try {
            e.connectedCallback.call(t)
          } catch (t) {
            Z(t)
          }
      }),
        (j.prototype.disconnectedCallback = function (t) {
          var e = t.__CE_definition
          if (e.disconnectedCallback)
            try {
              e.disconnectedCallback.call(t)
            } catch (t) {
              Z(t)
            }
        }),
        (j.prototype.attributeChangedCallback = function (t, e, i, n, o) {
          var r = t.__CE_definition
          if (
            r.attributeChangedCallback &&
            -1 < r.observedAttributes.indexOf(e)
          )
            try {
              r.attributeChangedCallback.call(t, e, i, n, o)
            } catch (t) {
              Z(t)
            }
        }),
        (q.prototype.resolve = function (t) {
          if (this.g) throw Error('Already resolved.')
          ;(this.g = t), this.l(t)
        }),
        (K.prototype.G = function (t) {
          var e = this.g.readyState
          for (
            ('interactive' !== e && 'complete' !== e) || J(this), e = 0;
            e < t.length;
            e++
          )
            for (var i = t[e].addedNodes, n = 0; n < i.length; n++)
              W(this.h, i[n])
        }),
        (Q.prototype.H = function (t, e) {
          var i = this
          if (!(e instanceof Function))
            throw new TypeError(
              'Custom element constructor getters must be functions.'
            )
          $(this, t),
            this.s.set(t, e),
            this.v.push(t),
            this.i ||
              ((this.i = !0),
              this.o(function () {
                return et(i)
              }))
        }),
        (Q.prototype.define = function (t, e) {
          var i = this
          if (!(e instanceof Function))
            throw new TypeError(
              'Custom element constructors must be functions.'
            )
          $(this, t),
            tt(this, t, e),
            this.v.push(t),
            this.i ||
              ((this.i = !0),
              this.o(function () {
                return et(i)
              }))
        }),
        (Q.prototype.upgrade = function (t) {
          W(this.h, t)
        }),
        (Q.prototype.get = function (t) {
          if ((t = it(this, t))) return t.constructorFunction
        }),
        (Q.prototype.whenDefined = function (t) {
          if (!L(t))
            return Promise.reject(
              new SyntaxError("'" + t + "' is not a valid custom element name.")
            )
          var e = this.B.get(t)
          if (e) return e.F
          ;(e = new q()), this.B.set(t, e)
          var i = this.u.has(t) || this.s.has(t)
          return (
            (t = -1 === this.v.indexOf(t)), i && t && e.resolve(void 0), e.F
          )
        }),
        (Q.prototype.polyfillWrapFlushCallback = function (t) {
          this.D && J(this.D)
          var e = this.o
          this.o = function (i) {
            return t(function () {
              return e(i)
            })
          }
        }),
        (window.CustomElementRegistry = Q),
        (Q.prototype.define = Q.prototype.define),
        (Q.prototype.upgrade = Q.prototype.upgrade),
        (Q.prototype.get = Q.prototype.get),
        (Q.prototype.whenDefined = Q.prototype.whenDefined),
        (Q.prototype.polyfillDefineLazy = Q.prototype.H),
        (Q.prototype.polyfillWrapFlushCallback =
          Q.prototype.polyfillWrapFlushCallback)
      var rt = {}
      var at = window.customElements
      function st() {
        var e = new j()
        !(function (e) {
          function i() {
            var i = this.constructor,
              n = document.__CE_registry.C.get(i)
            if (!n)
              throw Error(
                'Failed to construct a custom element: The constructor was not registered with `customElements`.'
              )
            var o = n.constructionStack
            if (0 === o.length)
              return (
                (o = t.call(document, n.localName)),
                Object.setPrototypeOf(o, i.prototype),
                (o.__CE_state = 1),
                (o.__CE_definition = n),
                z(e, o),
                o
              )
            var r = o.length - 1,
              a = o[r]
            if (a === rt)
              throw Error(
                "Failed to construct '" +
                  n.localName +
                  "': This element was already constructed."
              )
            return (
              (o[r] = rt), Object.setPrototypeOf(a, i.prototype), z(e, a), a
            )
          }
          ;(i.prototype = D.prototype),
            Object.defineProperty(HTMLElement.prototype, 'constructor', {
              writable: !0,
              configurable: !0,
              enumerable: !1,
              value: i,
            }),
            (window.HTMLElement = i)
        })(e),
          (function (t) {
            ;(Document.prototype.createElement = function (e) {
              return X(t, this, e, null)
            }),
              (Document.prototype.importNode = function (e, n) {
                return (
                  (e = i.call(this, e, !!n)),
                  this.__CE_registry ? W(t, e) : U(t, e),
                  e
                )
              }),
              (Document.prototype.createElementNS = function (e, i) {
                return X(t, this, i, e)
              }),
              nt(t, Document.prototype, { prepend: n, append: o })
          })(e),
          nt(e, DocumentFragment.prototype, { prepend: r, append: a }),
          (function (t) {
            function e(e, i) {
              Object.defineProperty(e, 'textContent', {
                enumerable: i.enumerable,
                configurable: !0,
                get: i.get,
                set: function (e) {
                  if (this.nodeType === Node.TEXT_NODE) i.set.call(this, e)
                  else {
                    var n = void 0
                    if (this.firstChild) {
                      var o = this.childNodes,
                        r = o.length
                      if (0 < r && R(this)) {
                        n = Array(r)
                        for (var a = 0; a < r; a++) n[a] = o[a]
                      }
                    }
                    if ((i.set.call(this, e), n))
                      for (e = 0; e < n.length; e++) V(t, n[e])
                  }
                },
              })
            }
            ;(Node.prototype.insertBefore = function (e, i) {
              if (e instanceof DocumentFragment) {
                var n = M(e)
                if (((e = u.call(this, e, i)), R(this)))
                  for (i = 0; i < n.length; i++) G(t, n[i])
                return e
              }
              return (
                (n = e instanceof Element && R(e)),
                (i = u.call(this, e, i)),
                n && V(t, e),
                R(this) && G(t, e),
                i
              )
            }),
              (Node.prototype.appendChild = function (e) {
                if (e instanceof DocumentFragment) {
                  var i = M(e)
                  if (((e = l.call(this, e)), R(this)))
                    for (var n = 0; n < i.length; n++) G(t, i[n])
                  return e
                }
                return (
                  (i = e instanceof Element && R(e)),
                  (n = l.call(this, e)),
                  i && V(t, e),
                  R(this) && G(t, e),
                  n
                )
              }),
              (Node.prototype.cloneNode = function (e) {
                return (
                  (e = s.call(this, !!e)),
                  this.ownerDocument.__CE_registry ? W(t, e) : U(t, e),
                  e
                )
              }),
              (Node.prototype.removeChild = function (e) {
                var i = e instanceof Element && R(e),
                  n = c.call(this, e)
                return i && V(t, e), n
              }),
              (Node.prototype.replaceChild = function (e, i) {
                if (e instanceof DocumentFragment) {
                  var n = M(e)
                  if (((e = h.call(this, e, i)), R(this)))
                    for (V(t, i), i = 0; i < n.length; i++) G(t, n[i])
                  return e
                }
                n = e instanceof Element && R(e)
                var o = h.call(this, e, i),
                  r = R(this)
                return r && V(t, i), n && V(t, e), r && G(t, e), o
              }),
              p && p.get
                ? e(Node.prototype, p)
                : (function (t, e) {
                    ;(t.j = !0), t.m.push(e)
                  })(t, function (t) {
                    e(t, {
                      enumerable: !0,
                      configurable: !0,
                      get: function () {
                        for (
                          var t = [], e = this.firstChild;
                          e;
                          e = e.nextSibling
                        )
                          e.nodeType !== Node.COMMENT_NODE &&
                            t.push(e.textContent)
                        return t.join('')
                      },
                      set: function (t) {
                        for (; this.firstChild; ) c.call(this, this.firstChild)
                        null != t &&
                          '' !== t &&
                          l.call(this, document.createTextNode(t))
                      },
                    })
                  })
          })(e),
          ot(e),
          (e = new Q(e)),
          (document.__CE_registry = e),
          Object.defineProperty(window, 'customElements', {
            configurable: !0,
            enumerable: !0,
            value: e,
          })
      }
      ;(at &&
        !at.forcePolyfill &&
        'function' == typeof at.define &&
        'function' == typeof at.get) ||
        st(),
        (window.__CE_installPolyfill = st)
    }.call(self))
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.NewsroomMain = void 0)
    var n = i(178),
      o = i(73),
      r = i(244),
      a = i(3),
      s = function (t) {
        ;(a.AppConfig.APP_CONTAINER_ELEMENT = t),
          (this._coreData = new r.CoreData()),
          (this._coreView = new n.CoreView()),
          (this._coreController = new o.CoreController(
            this._coreView,
            this._coreData
          )),
          this._coreController.start(),
          t.appendChild(this._coreView.view)
      }
    e.NewsroomMain = s
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.CoreView = void 0)
    var r = i(179),
      a = i(2),
      s = i(231),
      l = i(232),
      u = i(241),
      c = i(1),
      h = i(242),
      p = (function (t) {
        function e() {
          var e = t.call(this, 'basf-newsroom') || this
          return (
            e.initBackgroundSystem(),
            e.initNavigationSystem(),
            e.initSpaceSystem(),
            e
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'backgroundSystem', {
            get: function () {
              return this._backgroundSystem
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'topicSystem', {
            get: function () {
              return this._topicSystem
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'navigationSystem', {
            get: function () {
              return this._navigationSystem
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.showError = function (t) {
            this.initErrorSystem(t)
          }),
          (e.prototype.showExternalLinkLayer = function (t, e, i) {
            var n = this
            this.removeExternalLinkLayer(),
              (this._externalLinkLayer = new h.ExternalLinkLayer(t, e, i)),
              this._externalLinkLayer.onCloseSignal.addOnce(function () {
                return n.removeExternalLinkLayer()
              }),
              this.addChild(this._externalLinkLayer)
          }),
          (e.prototype.updateStyles = function () {
            this.applyStyle({
              position: 'relative',
              overflow: 'hidden',
              width: a.Size.APP_WIDTH,
              height: a.Size.APP_HEIGHT,
              webkitTextSizeAdjust: 'none',
            })
          }),
          (e.prototype.initSpaceSystem = function () {
            ;(this._topicSystem = new r.TopicSystem()),
              this.addChild(this._topicSystem)
          }),
          (e.prototype.initBackgroundSystem = function () {
            ;(this._backgroundSystem = new s.BackgroundSystem()),
              this.addChild(this._backgroundSystem)
          }),
          (e.prototype.initNavigationSystem = function () {
            ;(this._navigationSystem = new l.NavigationSystem()),
              this.addChild(this._navigationSystem)
          }),
          (e.prototype.initErrorSystem = function (t) {
            this._errorSystem
              ? this._errorSystem.addMessage(t)
              : ((this._errorSystem = new u.ErrorSystem(t)),
                this.addChild(this._errorSystem))
          }),
          (e.prototype.removeExternalLinkLayer = function () {
            this._externalLinkLayer &&
              (this.removeChild(this._externalLinkLayer),
              this._externalLinkLayer.destroy(),
              (this._externalLinkLayer = null))
          }),
          e
        )
      })(c.UIComponent)
    e.CoreView = p
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        }),
      r =
        (this && this.__awaiter) ||
        function (t, e, i, n) {
          return new (i || (i = Promise))(function (o, r) {
            function a(t) {
              try {
                l(n.next(t))
              } catch (t) {
                r(t)
              }
            }
            function s(t) {
              try {
                l(n.throw(t))
              } catch (t) {
                r(t)
              }
            }
            function l(t) {
              var e
              t.done
                ? o(t.value)
                : ((e = t.value),
                  e instanceof i
                    ? e
                    : new i(function (t) {
                        t(e)
                      })).then(a, s)
            }
            l((n = n.apply(t, e || [])).next())
          })
        },
      a =
        (this && this.__generator) ||
        function (t, e) {
          var i,
            n,
            o,
            r,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1]
                return o[1]
              },
              trys: [],
              ops: [],
            }
          return (
            (r = { next: s(0), throw: s(1), return: s(2) }),
            'function' == typeof Symbol &&
              (r[Symbol.iterator] = function () {
                return this
              }),
            r
          )
          function s(r) {
            return function (s) {
              return (function (r) {
                if (i) throw new TypeError('Generator is already executing.')
                for (; a; )
                  try {
                    if (
                      ((i = 1),
                      n &&
                        (o =
                          2 & r[0]
                            ? n.return
                            : r[0]
                            ? n.throw || ((o = n.return) && o.call(n), 0)
                            : n.next) &&
                        !(o = o.call(n, r[1])).done)
                    )
                      return o
                    switch (((n = 0), o && (r = [2 & r[0], o.value]), r[0])) {
                      case 0:
                      case 1:
                        o = r
                        break
                      case 4:
                        return a.label++, { value: r[1], done: !1 }
                      case 5:
                        a.label++, (n = r[1]), (r = [0])
                        continue
                      case 7:
                        ;(r = a.ops.pop()), a.trys.pop()
                        continue
                      default:
                        if (
                          !((o = a.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== r[0] && 2 !== r[0]))
                        ) {
                          a = 0
                          continue
                        }
                        if (
                          3 === r[0] &&
                          (!o || (r[1] > o[0] && r[1] < o[3]))
                        ) {
                          a.label = r[1]
                          break
                        }
                        if (6 === r[0] && a.label < o[1]) {
                          ;(a.label = o[1]), (o = r)
                          break
                        }
                        if (o && a.label < o[2]) {
                          ;(a.label = o[2]), a.ops.push(r)
                          break
                        }
                        o[2] && a.ops.pop(), a.trys.pop()
                        continue
                    }
                    r = e.call(t, a)
                  } catch (t) {
                    ;(r = [6, t]), (n = 0)
                  } finally {
                    i = o = 0
                  }
                if (5 & r[0]) throw r[1]
                return { value: r[0] ? r[1] : void 0, done: !0 }
              })([r, s])
            }
          }
        }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TopicSystem = void 0)
    var s = i(2),
      l = i(180),
      u = i(3),
      c = i(1),
      h = i(70),
      p = i(4),
      f = (function (t) {
        function e() {
          var e = t.call(this, 'topic-system') || this
          return (
            (e._isTouching = !1),
            (e.onTopicItemExpandSignal = new p.Signal()),
            (e.onTopicItemCloseSignal = new p.Signal()),
            (e.onExternalLinkSignal = new p.Signal()),
            e.initRootEventsController(),
            e
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'currentTopic', {
            get: function () {
              return this._currentTopic
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.showTopic = function (t, e) {
            var i = this
            this.removeCurrentTopic(e),
              t &&
                ((this._currentTopic = new l.Topic(t)),
                this._currentTopic.onTopicItemExpandSignal.add(function () {
                  return i.onTopicItemExpanded()
                }),
                this._currentTopic.onTopicItemCloseSignal.add(function () {
                  return i.onTopicItemClosed()
                }),
                this._currentTopic.onExternalLinkSignal.add(function (t) {
                  return i.onExternalLinkSignal.dispatch(t)
                }),
                this.updateCurrentTopicMousePosition(),
                this._currentTopic.playIntro(e),
                this._currentTopic.applyStyle({
                  x: 0.5 * s.Size.APP_WIDTH,
                  y: 0.5 * s.Size.APP_HEIGHT,
                }),
                this.addChild(this._currentTopic))
          }),
          (e.prototype.updateStyles = function () {
            ;(this._isTouching = !1),
              this.resetMousePosition(),
              this.applyStyle({
                position: 'absolute',
                perspective: 1200,
                perspectiveOrigin:
                  0.5 * s.Size.APP_WIDTH +
                  'px ' +
                  0.5 * s.Size.APP_HEIGHT +
                  'px',
                transformStyle: 'preserve-3d',
                backgroundColor: 'grey',
              }),
              this._currentTopic &&
                this._currentTopic.applyStyle({
                  x: 0.5 * s.Size.APP_WIDTH,
                  y: 0.5 * s.Size.APP_HEIGHT,
                })
          }),
          (e.prototype.removeCurrentTopic = function (t) {
            return r(this, void 0, void 0, function () {
              var e
              return a(this, function (i) {
                switch (i.label) {
                  case 0:
                    return this._currentTopic
                      ? ((e = this._currentTopic),
                        (this._currentTopic = void 0),
                        [4, e.playOutro(t)])
                      : [2]
                  case 1:
                    return (
                      i.sent(),
                      setTimeout(function () {
                        e.destroy()
                      }, 200),
                      [2]
                    )
                }
              })
            })
          }),
          (e.prototype.initRootEventsController = function () {
            var t = this
            ;(this._rootEventsController = new h.NativeEventsController(
              u.AppConfig.APP_CONTAINER_ELEMENT
            )),
              this._rootEventsController.addListener('mousemove', function (e) {
                return t.onMouseMoved(e)
              }),
              this._rootEventsController.addListener(
                'touchstart',
                function (e) {
                  return t.onTouchStart(e)
                }
              ),
              this._rootEventsController.addListener('touchmove', function (e) {
                return t.onTouchMoved(e)
              }),
              this._rootEventsController.addListener('touchend', function () {
                return t.onTouchEnd()
              })
          }),
          (e.prototype.resetMousePosition = function () {
            ;(this._latestMouseX = 0.5 * s.Size.APP_WIDTH),
              (this._latestMouseY = 0.5 * s.Size.APP_HEIGHT),
              this.updateCurrentTopicMousePosition()
          }),
          (e.prototype.updateCurrentTopicMousePosition = function (t) {
            void 0 === t && (t = !1),
              this._currentTopic &&
                this._currentTopic.updateAfterMousePositionChanged(
                  this._latestMouseX,
                  this._latestMouseY,
                  t
                )
          }),
          (e.prototype.onMouseMoved = function (t) {
            this._isTouching ||
              (t &&
                ((this._latestMouseX = t.clientX),
                (this._latestMouseY = t.clientY)),
              this.updateCurrentTopicMousePosition())
          }),
          (e.prototype.onTouchStart = function (t) {
            ;(this._isTouching = !0),
              t &&
                t.touches &&
                ((this._startTouchX = t.touches[0].clientX),
                (this._startTouchY = t.touches[0].clientY))
          }),
          (e.prototype.onTouchMoved = function (t) {
            t &&
              t.touches &&
              ((this._latestMouseX =
                0.5 * s.Size.APP_WIDTH -
                (t.touches[0].clientX - this._startTouchX)),
              (this._latestMouseY =
                0.5 * s.Size.APP_HEIGHT -
                (t.touches[0].clientY - this._startTouchY))),
              this.updateCurrentTopicMousePosition()
          }),
          (e.prototype.onTouchEnd = function () {
            ;(this._currentTopic && this._currentTopic.hasExpandedTopicItem) ||
              this.resetMousePosition()
          }),
          (e.prototype.onTopicItemExpanded = function () {
            this.resetMousePosition(), this.onTopicItemExpandSignal.dispatch()
          }),
          (e.prototype.onTopicItemClosed = function () {
            this.updateCurrentTopicMousePosition(!0),
              this.onTopicItemCloseSignal.dispatch()
          }),
          e
        )
      })(c.UIComponent)
    e.TopicSystem = f
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.Topic = void 0)
    var r = i(181),
      a = i(2),
      s = i(5),
      l = i(228),
      u = i(24),
      c = i(3),
      h = i(229),
      p = i(4),
      f = i(1),
      d = i(45),
      _ = i(230),
      g = (function (t) {
        function e(e) {
          var i = t.call(this, 'topic-' + e.titleForCustomElement) || this
          return (
            (i._data = e),
            (i._selectedItemMouseOffsetX = 0),
            (i._selectedItemMouseOffsetY = 0),
            (i._items = []),
            (i.onTopicItemExpandSignal = new p.Signal()),
            (i.onTopicItemCloseSignal = new p.Signal()),
            (i.onExternalLinkSignal = new p.Signal()),
            i.initTitle(),
            i.initItems(),
            (i.interactive = !1),
            i
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'key', {
            get: function () {
              return this._data.key
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'hasExpandedTopicItem', {
            get: function () {
              return this.selectedItem.expanded
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.closeExpandedContent = function () {
            this.selectedItem.expand = !1
          }),
          (e.prototype.playIntro = function (t) {
            var e = this
            ;(this._title.transform.x = a.Size.APP_WIDTH * (t ? 5 : -5)),
              s.TweenMax.to(this._title.transform, 1.7, {
                x: 0,
                ease: s.Power4.easeInOut,
              }),
              this._items.forEach(function (e) {
                e.transform.x = a.Size.APP_WIDTH * (t ? 1.5 : -1.5)
              }),
              this.updateItemPositions(!1, void 0, !0),
              (this._interactiveTimer = new h.ProgressTimer(
                c.AppConfig.TOPIC_CHANGE_DURATION,
                {
                  onComplete: function () {
                    return (e.interactive = !0)
                  },
                }
              ))
          }),
          (e.prototype.playOutro = function (t) {
            var e = this
            return (
              this._interactiveTimer.stop(),
              (this.interactive = !1),
              this._items.forEach(function (e) {
                s.TweenMax.killTweensOf(e.transform),
                  s.TweenMax.to(
                    e.transform,
                    c.AppConfig.TOPIC_CHANGE_DURATION,
                    {
                      delay: 0.2 * Math.random(),
                      x: a.Size.APP_WIDTH * (t ? -1.5 : 1.5),
                      ease: s.Power4.easeInOut,
                    }
                  )
              }),
              new Promise(function (i) {
                s.TweenMax.to(
                  e._title.transform,
                  c.AppConfig.TOPIC_CHANGE_DURATION,
                  {
                    x: a.Size.APP_WIDTH * (t ? -5 : 5),
                    ease: s.Power4.easeInOut,
                    onComplete: function () {
                      i()
                    },
                  }
                )
              })
            )
          }),
          (e.prototype.updateAfterMousePositionChanged = function (t, e, i) {
            void 0 === i && (i = !1),
              this.hasExpandedTopicItem &&
                ((t = 0.5 * a.Size.APP_WIDTH), (e = 0.5 * a.Size.APP_HEIGHT))
            var n = t - 0.5 * a.Size.APP_WIDTH,
              o = e - 0.5 * a.Size.APP_HEIGHT
            if (
              (s.TweenMax.to(
                this.transform,
                i ? c.AppConfig.TOPIC_ITEM_CONTENT_EXPAND_DURATION : 1,
                this.fixObjectForEdgeAndIE({
                  rotateX: o * c.AppConfig.TOPIC_MOUSE_ROTATE_FACTOR,
                  rotateY: -n * c.AppConfig.TOPIC_MOUSE_ROTATE_FACTOR,
                  y:
                    a.Size.TOPIC_OFFSET_Y +
                    0.5 * a.Size.APP_HEIGHT -
                    o * c.AppConfig.TOPIC_MOUSE_TRANSLATE_FACTOR,
                  x:
                    0.5 * a.Size.APP_WIDTH -
                    n * c.AppConfig.TOPIC_MOUSE_TRANSLATE_FACTOR,
                  ease: i ? u.Ease.Power5easeInOut : s.Power4.easeOut,
                })
              ),
              (this._selectedItemMouseOffsetX =
                -n * c.AppConfig.TOPIC_ITEM_MOUSE_TRANSLATE_FACTOR),
              (this._selectedItemMouseOffsetY =
                -o * c.AppConfig.TOPIC_ITEM_MOUSE_TRANSLATE_FACTOR),
              this.interactive)
            )
              s.TweenMax.to(
                this.selectedItem.transform,
                i ? c.AppConfig.TOPIC_ITEM_CONTENT_EXPAND_DURATION : 1,
                {
                  x: this.calcSelectedItemX(),
                  y: this.calcSelectedItemY(),
                  ease: i ? u.Ease.Power5easeInOut : s.Power4.easeOut,
                }
              )
            else {
              var r = s.TweenMax.getTweensOf(this.selectedItem.transform)[0]
              r &&
                r.updateTo(
                  { x: this.calcSelectedItemX(), y: this.calcSelectedItemY() },
                  !1
                )
            }
          }),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this),
              this.onTopicItemExpandSignal.removeAll(),
              this.onTopicItemCloseSignal.removeAll(),
              this.onExternalLinkSignal.removeAll()
          }),
          (e.prototype.updateStyles = function () {
            this.applyStyle({
              userSelect: 'none',
              webkitTapHighlightColor: 'rgba(0,0,0,0)',
              position: 'absolute',
              transformStyle: 'preserve-3d',
            }),
              this.interactive
                ? this.updateItemPositions(!0)
                : this.updateSatelliteItemPositions(!1, null, !0)
          }),
          (e.prototype.initTitle = function () {
            ;(this._title = new _.TopicTitle(this._data.title)),
              this.addChild(this._title)
          }),
          (e.prototype.initItems = function () {
            var t = this
            this._data.itemsData.forEach(function (e, i) {
              var n = new r.TopicItem(e)
              n.onClickSignal.add(function () {
                return t.onItemClicked(n)
              }),
                n.onExpandSignal.add(function () {
                  return t.onItemContentExpanded()
                }),
                n.onCloseSignal.add(function () {
                  return t.onItemContentClosed()
                }),
                n.onHeightChangeSignal.add(function () {
                  return t.onItemHeightChanged()
                }),
                n.onExternalLinkSignal.add(function (e) {
                  return t.onExternalLinkSignal.dispatch(e)
                }),
                (n.selected = 0 == i),
                i > 0 && (n.positionID = i - 1),
                t._items.push(n),
                t.addChild(n)
            })
          }),
          Object.defineProperty(e.prototype, 'selectedItem', {
            get: function () {
              return this._items.filter(function (t) {
                return t.selected
              })[0]
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'satelliteItems', {
            get: function () {
              return this._items.filter(function (t) {
                return !t.selected
              })
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.selectItem = function (t) {
            var e = this.selectedItem
            ;(e.positionID = t.positionID),
              (e.selected = !1),
              (t.selected = !0),
              (t.positionID = void 0),
              this.updateItemPositions(!1, e)
          }),
          (e.prototype.updateItemPositions = function (t, e, i) {
            void 0 === t && (t = !1),
              void 0 === e && (e = void 0),
              void 0 === i && (i = !1),
              this.updateSelectedItemPosition(t, e, i),
              this.updateSatelliteItemPositions(t, e, i)
          }),
          (e.prototype.updateSelectedItemPosition = function (t, e, i) {
            void 0 === t && (t = !1),
              void 0 === e && (e = void 0),
              void 0 === i && (i = !1),
              i
                ? s.TweenMax.to(
                    this.selectedItem.transform,
                    c.AppConfig.TOPIC_CHANGE_DURATION,
                    {
                      delay: 0.3 * Math.random(),
                      x: this.calcSelectedItemX(),
                      y: this.calcSelectedItemY(),
                      ease: s.Power4.easeInOut,
                    }
                  )
                : s.TweenMax.to(
                    this.selectedItem.transform,
                    t ? 0 : c.AppConfig.TOPIC_ITEM_SWITCH_DURATION,
                    {
                      bezier: {
                        curviness: 1.25,
                        values: [
                          this.fixObjectForEdgeAndIE({
                            x: 0.5 * this.selectedItem.transform.x,
                            y: 1.5 * this.selectedItem.transform.y,
                            z: 0,
                            rotateX: e
                              ? this.selectedItem.transform.y < 0
                                ? -20
                                : 20
                              : 0,
                            rotateY: e
                              ? this.selectedItem.transform.x < 0
                                ? 7
                                : -7
                              : 0,
                            rotateZ: e
                              ? this.selectedItem.transform.x < 0
                                ? 3
                                : -3
                              : 0,
                          }),
                          this.fixObjectForEdgeAndIE({
                            x: this.calcSelectedItemX(),
                            y: this.calcSelectedItemY(),
                            z: 0,
                            rotateX: 0,
                            rotateY: 0,
                            rotateZ: 0,
                          }),
                        ],
                      },
                      ease: u.Ease.Power5easeInOut,
                    }
                  )
          }),
          (e.prototype.updateSatelliteItemPositions = function (t, e, i) {
            var n = this
            void 0 === t && (t = !1),
              void 0 === e && (e = void 0),
              void 0 === i && (i = !1),
              this.satelliteItems.forEach(function (o) {
                if (e == o)
                  s.TweenMax.to(
                    o.transform,
                    t
                      ? 0
                      : i
                      ? c.AppConfig.TOPIC_CHANGE_DURATION
                      : c.AppConfig.TOPIC_ITEM_SWITCH_DURATION,
                    {
                      bezier: {
                        curviness: 1.25,
                        values: [
                          n.fixObjectForEdgeAndIE({
                            x: 0.5 * n.selectedItem.transform.x,
                            y: 0.6 * -n.selectedItem.transform.y,
                            z:
                              1.5 *
                              l.TopicSatellitePositions.S4[o.positionID].z,
                            rotateX: e
                              ? n.selectedItem.transform.y < 0
                                ? 30
                                : -30
                              : 0,
                            rotateY: e
                              ? n.selectedItem.transform.x < 0
                                ? -10
                                : 10
                              : 0,
                            rotateZ: e
                              ? n.selectedItem.transform.x < 0
                                ? 5
                                : -5
                              : 0,
                          }),
                          n.fixObjectForEdgeAndIE({
                            rotateX: 0,
                            rotateY: 0,
                            rotateZ: 0,
                            x: n.calcSatelliteItemX(o),
                            y: n.calcSatelliteItemY(o),
                            z: l.TopicSatellitePositions.S4[o.positionID].z,
                          }),
                        ],
                      },
                      ease: u.Ease.Power5easeInOut,
                    }
                  )
                else {
                  var r = i ? 0.3 * Math.random() : 0
                  s.TweenMax.to(
                    o.transform,
                    t
                      ? 0
                      : i
                      ? c.AppConfig.TOPIC_CHANGE_DURATION
                      : c.AppConfig.TOPIC_ITEM_SWITCH_DURATION,
                    n.fixObjectForEdgeAndIE({
                      delay: r,
                      x: n.calcSatelliteItemX(o),
                      y: n.calcSatelliteItemY(o),
                      z: l.TopicSatellitePositions.S4[o.positionID].z,
                      ease: i ? s.Power4.easeInOut : s.Power4.easeOut,
                    })
                  )
                }
              })
          }),
          (e.prototype.calcSelectedItemX = function () {
            return this._selectedItemMouseOffsetX
          }),
          (e.prototype.calcSelectedItemY = function () {
            return (
              this._selectedItemMouseOffsetY +
              (this.selectedItem.expanded ? -a.Size.TOPIC_OFFSET_Y : 0)
            )
          }),
          (e.prototype.calcSatelliteItemX = function (t) {
            var e = this.selectedItem.contentWidth
            return (
              e < a.Size.MIN_CONTENT_POSITION_WIDTH &&
                (e = a.Size.MIN_CONTENT_POSITION_WIDTH),
              (l.TopicSatellitePositions.S4[t.positionID].x * e - 0.5 * e) *
                (0.2 * a.Size.APP_SIZE_FACTOR + 1.1)
            )
          }),
          (e.prototype.calcSatelliteItemY = function (t) {
            var e = this.selectedItem.contentHeight
            return (
              e < a.Size.MIN_CONTENT_POSITION_HEIGHT &&
                (e = a.Size.MIN_CONTENT_POSITION_HEIGHT),
              e > a.Size.MAX_CONTENT_POSITION_HEIGHT &&
                (e = a.Size.MAX_CONTENT_POSITION_HEIGHT),
              (l.TopicSatellitePositions.S4[t.positionID].y * e - 0.5 * e) *
                (0.2 * a.Size.APP_SIZE_FACTOR + 1)
            )
          }),
          (e.prototype.onItemClicked = function (t) {
            this.interactive && this.selectItem(t)
          }),
          (e.prototype.onItemContentExpanded = function () {
            this._title.hide(),
              this.satelliteItems.forEach(function (t) {
                t.hide()
              }),
              this.onTopicItemExpandSignal.dispatch()
          }),
          (e.prototype.onItemContentClosed = function () {
            this._title.show(),
              this.satelliteItems.forEach(function (t) {
                t.show()
              }),
              this.onTopicItemCloseSignal.dispatch()
          }),
          (e.prototype.onItemHeightChanged = function () {
            this.updateStyles()
          }),
          (e.prototype.fixObjectForEdgeAndIE = function (t) {
            var e = ['rotateX', 'rotateY', 'rotateZ', 'z'],
              i = {},
              n = function (n) {
                t.hasOwnProperty(n) &&
                  0 ==
                    e.filter(function (t) {
                      return t == n
                    }).length &&
                  (i[n] = t[n])
              }
            for (var o in t) n(o)
            return d.DeviceUtils.IS_IE || d.DeviceUtils.IS_EDGE ? i : t
          }),
          e
        )
      })(f.UIComponent)
    e.Topic = g
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TopicItem = void 0)
    var r = i(182),
      a = i(5),
      s = i(2),
      l = i(1),
      u = i(4),
      c = (function (t) {
        function e(e) {
          var i = t.call(this, 'topic-item') || this
          return (
            (i._data = e),
            (i.onClickSignal = new u.Signal()),
            (i.onMouseOverSignal = new u.Signal()),
            (i.onMouseOutSignal = new u.Signal()),
            (i.onExpandSignal = new u.Signal()),
            (i.onCloseSignal = new u.Signal()),
            (i.onHeightChangeSignal = new u.Signal()),
            (i.onExternalLinkSignal = new u.Signal()),
            i.initContent(),
            i
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'contentWidth', {
            get: function () {
              return this._content.width
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'contentHeight', {
            get: function () {
              return this._content.height
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'positionID', {
            get: function () {
              return this._positionID
            },
            set: function (t) {
              this._positionID = t
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'expanded', {
            get: function () {
              return this._content.expanded
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'expand', {
            set: function (t) {
              this._content.expand(t)
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'selected', {
            get: function () {
              return this._selected
            },
            set: function (t) {
              ;(this._selected = t),
                this.applyStyle({ zIndex: this.calcZIndex() }),
                this._content.applyStyle({
                  cursor: this._selected ? 'auto' : 'pointer',
                }),
                a.TweenMax.to(this._content.transform, 0.7, {
                  scale: this.calcScale(),
                  ease: a.Power4.easeInOut,
                }),
                a.TweenMax.to(this._content.view, 0.7, {
                  alpha: this.calcAlpha(),
                }),
                (this._content.selected = this._selected)
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.show = function () {
            this._content.applyStyle({
              cursor: this._selected ? 'auto' : 'pointer',
            }),
              a.TweenMax.to(this.view, 1, { autoAlpha: 1 })
          }),
          (e.prototype.hide = function () {
            a.TweenMax.to(this.view, 0.5, { autoAlpha: 0 }),
              this._content.applyStyle({ cursor: 'none' })
          }),
          (e.prototype.updateStyles = function () {
            ;(this.interactive = !1),
              this.applyStyle({
                position: 'absolute',
                transformStyle: 'preserve-3d',
                zIndex: this.calcZIndex(),
              }),
              (this._content.interactive = !0),
              this._content.applyStyle({
                cursor: this._selected ? 'auto' : 'pointer',
                x: '-50%',
                y: '-50%',
                scale: this.calcScale(),
                opacity: this.calcAlpha(),
              })
          }),
          (e.prototype.destroy = function () {
            this.onClickSignal.removeAll(),
              this.onMouseOverSignal.removeAll(),
              this.onMouseOutSignal.removeAll(),
              this.onExpandSignal.removeAll(),
              this.onCloseSignal.removeAll(),
              this.onHeightChangeSignal.removeAll(),
              this.onExternalLinkSignal.removeAll(),
              t.prototype.destroy.call(this)
          }),
          (e.prototype.initContent = function () {
            var t = this
            ;(this._content = r.TopicItemContentFactory.createContent(
              this._data
            )),
              this._content.onExpandSignal.add(function () {
                return t.onContentExpanded()
              }),
              this._content.onCloseSignal.add(function () {
                return t.onContentCollapsed()
              }),
              this._content.onHeightChangeSignal.add(function () {
                return t.onContentHeightChanged()
              }),
              this._content.onExternalLinkSignal.add(function (e) {
                return t.onExternalLinkSignal.dispatch(e)
              }),
              this._content.addNativeListener('mouseenter', function () {
                return t.onContentMouseOver()
              }),
              this._content.addNativeListener('mouseleave', function () {
                return t.onContentMouseOut()
              }),
              this._content.addNativeListener('click', function () {
                return t.onContentClicked()
              }),
              this.addChild(this._content)
          }),
          (e.prototype.calcScale = function (t) {
            return (
              void 0 === t && (t = !1),
              this._selected
                ? 1
                : 0.2 * s.Size.APP_SIZE_FACTOR + (t ? 0.6 : 0.5)
            )
          }),
          (e.prototype.calcAlpha = function () {
            return this._selected ? 1 : 0.8
          }),
          (e.prototype.calcZIndex = function () {
            return this._selected ? 2 : 1
          }),
          (e.prototype.onContentMouseOver = function () {
            this._selected ||
              this.expanded ||
              (a.TweenMax.to(this._content.transform, 0.5, {
                scale: this.calcScale(!0),
                ease: a.Power4.easeOut,
              }),
              a.TweenMax.to(this._content.view, 0.5, { alpha: 1 }),
              this.onMouseOverSignal.dispatch())
          }),
          (e.prototype.onContentMouseOut = function () {
            this._selected ||
              this.expanded ||
              (a.TweenMax.to(this._content.transform, 0.3, {
                scale: this.calcScale(),
                ease: a.Power4.easeOut,
              }),
              a.TweenMax.to(this._content.view, 0.5, {
                alpha: this.calcAlpha(),
              }),
              this.onMouseOutSignal.dispatch())
          }),
          (e.prototype.onContentClicked = function () {
            this.selected || this.expanded || this.onClickSignal.dispatch()
          }),
          (e.prototype.onContentExpanded = function () {
            this.onExpandSignal.dispatch()
          }),
          (e.prototype.onContentCollapsed = function () {
            this.onCloseSignal.dispatch()
          }),
          (e.prototype.onContentHeightChanged = function () {
            this.onHeightChangeSignal.dispatch()
          }),
          e
        )
      })(l.UIComponent)
    e.TopicItem = c
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TopicItemContentFactory = void 0)
    var n = i(29),
      o = i(183),
      r = i(191),
      a = i(202),
      s = i(206),
      l = i(207),
      u = i(208),
      c = i(209),
      h = i(210),
      p = i(212),
      f = i(218),
      d = i(219),
      _ = i(221),
      g = i(223),
      m = i(226),
      y = (function () {
        function t() {}
        return (
          (t.createContent = function (t) {
            switch (t.type) {
              case n.TopicItemType.ARTICLE:
                return new d.ArticleContent(new s.ArticleContentData(t))
              case n.TopicItemType.DOWNLOAD:
                return new o.DownloadContent(new u.DownloadContentData(t))
              case n.TopicItemType.QUOTE:
                return new r.QuoteContent(new l.QuoteContentData(t))
              case n.TopicItemType.FACEBOOK:
                return new f.GenericPostContent(new p.FacebookContentData(t))
              case n.TopicItemType.LINKEDIN:
                return new f.GenericPostContent(new g.LinkedInContentData(t))
              case n.TopicItemType.TWITTER:
                return new _.TwitterContent(new h.TwitterContentData(t))
              case n.TopicItemType.INSTAGRAM:
                return new f.GenericPostContent(new m.InstagramContentData(t))
              case n.TopicItemType.YOUTUBE:
                return new a.YoutubeContent(new c.YoutubeContentData(t))
            }
          }),
          t
        )
      })()
    e.TopicItemContentFactory = y
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.DownloadContent = void 0)
    var r = i(108),
      a = i(29),
      s = i(2),
      l = i(6),
      u = i(10),
      c = i(46),
      h = i(5),
      p = i(1),
      f = i(11),
      d = i(23),
      _ = i(3),
      g = (function (t) {
        function e(e) {
          var i = t.call(this, a.TopicItemType.DOWNLOAD) || this
          return (
            (i._data = e),
            i.initBackgroundImage(),
            i.initBackgroundGradient(),
            i.initLinkContainer(),
            i.initDownloadIcon(),
            i.initTitle(),
            i.initListeners(),
            i
          )
        }
        return (
          o(e, t),
          (e.prototype.updateStyles = function () {
            t.prototype.updateStyles.call(this)
            ;(this._standardWidth = 300 * s.Size.APP_SIZE_FACTOR + 250),
              (this._standardHeight = this._standardWidth / 1.6),
              this.applyStyle({
                backgroundColor: l.Color.WHITE,
                width: this._standardWidth,
                height: this._standardHeight,
                overflow: 'hidden',
              }),
              this._backgroundImage.applyStyle({
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }),
              this._backgroundGradient.applyStyle({
                position: 'absolute',
                width: '100%',
                height: '100%',
                opacity: 0.5,
              }),
              this._linkContainer.applyStyle({
                cursor: 'pointer',
                position: 'absolute',
                whiteSpace: 'no-wrap',
                width: '100%',
                boxSizing: 'border-box',
                paddingLeft: s.Size.CONTENT_MARGIN,
                paddingRight: s.Size.CONTENT_MARGIN,
                bottom: s.Size.CONTENT_MARGIN,
              }),
              (this._downloadIcon.getElementByID('arrow').style.fill =
                _.AppConfig.HIGHLIGHT_COLOR),
              (this._downloadIcon.getElementByID('bar').style.fill =
                _.AppConfig.HIGHLIGHT_COLOR),
              this._downloadIcon.applyStyle({
                display: 'inline-block',
                width: this.calcIconWidth(),
                verticalAlign: 'middle',
              }),
              this._titleField.applyStyle({
                boxSizing: 'border-box',
                textDecoration: 'none',
                display: 'inline-block',
                verticalAlign: 'middle',
                color: l.Color.WHITE,
                maxWidth:
                  'calc(100% - ' +
                  (this.calcIconWidth() + u.Font.H1_FONTSIZE) +
                  'px)',
                x: u.Font.H1_FONTSIZE,
                fontFamily: u.Font.BOLD_FAMILY,
                fontSize: u.Font.H1_FONTSIZE,
              })
          }),
          (e.prototype.initBackgroundImage = function () {
            ;(this._backgroundImage = new p.UIComponent('key-image')),
              (this._backgroundImage.interactive = !1),
              this._backgroundImage.applyStyle({
                backgroundImage: 'url(' + this._data.imageURL + ')',
              }),
              this.addChild(this._backgroundImage)
          }),
          (e.prototype.initBackgroundGradient = function () {
            ;(this._backgroundGradient = new c.Gradient(l.Color.BLACK)),
              this.addChild(this._backgroundGradient)
          }),
          (e.prototype.initLinkContainer = function () {
            ;(this._linkContainer = new p.UIComponent('link-content')),
              this.addChild(this._linkContainer)
          }),
          (e.prototype.initDownloadIcon = function () {
            ;(this._downloadIcon = new f.SVGComponent(i(190), 'download-icon')),
              (this._downloadIconArrow =
                this._downloadIcon.getElementByID('arrow')),
              this._downloadIcon.clearSizeDefinition(),
              (this._downloadIcon.interactive = !1),
              this._linkContainer.addChild(this._downloadIcon)
          }),
          (e.prototype.initTitle = function () {
            ;(this._titleField = new p.UIComponent('title-field')),
              (this._titleField.view.innerText = this._data.title),
              (this._titleField.interactive = !1),
              this._linkContainer.addChild(this._titleField)
          }),
          (e.prototype.initListeners = function () {
            var t = this
            this._linkContainer.addNativeListener('mouseover', function () {
              return t.onMouseOver()
            }),
              this._linkContainer.addNativeListener('mouseout', function () {
                return t.onMouseOut()
              }),
              this._linkContainer.addNativeListener('click', function () {
                return t.onClicked()
              })
          }),
          (e.prototype.calcIconWidth = function () {
            return 0.7 * s.Size.CONTENT_TYPE_ICON_SIZE
          }),
          (e.prototype.onMouseOver = function () {
            this._selected &&
              (h.TweenMax.to(this._downloadIconArrow, 0.8, {
                y: 30,
                ease: h.Elastic.easeOut,
              }),
              h.TweenMax.to(this._titleField.view, 0.5, {
                textDecoration: 'underline',
                ease: h.Power4.easeOut,
              }))
          }),
          (e.prototype.onMouseOut = function () {
            this._selected &&
              (h.TweenMax.to(this._downloadIconArrow, 0.5, {
                y: 0,
                ease: h.Power4.easeOut,
              }),
              h.TweenMax.to(this._titleField.view, 0.5, {
                textDecoration: 'none',
                ease: h.Power4.easeOut,
              }))
          }),
          (e.prototype.onClicked = function () {
            this._selected &&
              d.URLUtils.downloadURL(
                this._data.downloadURL,
                this._data.downloadFilename
              )
          }),
          e
        )
      })(r.TopicItemContent)
    e.DownloadContent = g
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.NativeStylesController = void 0)
    var n = (function () {
      function t(e) {
        ;(this._element = e),
          (this._transformProperties = {
            x: t.DEFAULT_TRANSFORM_PROPERTY_VALUES.x,
            y: t.DEFAULT_TRANSFORM_PROPERTY_VALUES.y,
            z: t.DEFAULT_TRANSFORM_PROPERTY_VALUES.z,
            rotate: t.DEFAULT_TRANSFORM_PROPERTY_VALUES.rotate,
            rotateX: t.DEFAULT_TRANSFORM_PROPERTY_VALUES.rotateX,
            rotateY: t.DEFAULT_TRANSFORM_PROPERTY_VALUES.rotateY,
            rotateZ: t.DEFAULT_TRANSFORM_PROPERTY_VALUES.rotateZ,
            scale: t.DEFAULT_TRANSFORM_PROPERTY_VALUES.scale,
            scaleX: t.DEFAULT_TRANSFORM_PROPERTY_VALUES.scaleX,
            scaleY: t.DEFAULT_TRANSFORM_PROPERTY_VALUES.scaleY,
            scaleZ: t.DEFAULT_TRANSFORM_PROPERTY_VALUES.scaleZ,
          })
      }
      return (
        (t.prototype.applyStyle = function (t) {
          for (var e in t)
            if (t.hasOwnProperty(e)) {
              var i = t[e]
              this.isTransformProperty(e)
                ? this.applyTransformProperties(e, i)
                : this.applyNativeProperties(e, i),
                this.warnIfStylesWillBeIgnored(e, i)
            }
        }),
        Object.defineProperty(t.prototype, 'x', {
          get: function () {
            return this._transformProperties.x
          },
          set: function (t) {
            this.applyTransformProperties('x', t)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'y', {
          get: function () {
            return this._transformProperties.y
          },
          set: function (t) {
            this.applyTransformProperties('y', t)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'z', {
          get: function () {
            return this._transformProperties.z
          },
          set: function (t) {
            this.applyTransformProperties('z', t)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'rotate', {
          get: function () {
            return this._transformProperties.rotate
          },
          set: function (t) {
            this.applyTransformProperties('rotate', t)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'rotateX', {
          get: function () {
            return this._transformProperties.rotateX
          },
          set: function (t) {
            this.applyTransformProperties('rotateX', t)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'rotateY', {
          get: function () {
            return this._transformProperties.rotateY
          },
          set: function (t) {
            this.applyTransformProperties('rotateY', t)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'rotateZ', {
          get: function () {
            return this._transformProperties.rotateZ
          },
          set: function (t) {
            this.applyTransformProperties('rotateZ', t)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'scale', {
          get: function () {
            return this._transformProperties.scale
          },
          set: function (t) {
            this.applyTransformProperties('scale', t)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'scaleX', {
          get: function () {
            return this._transformProperties.scaleX
          },
          set: function (t) {
            this.applyTransformProperties('scaleX', t)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'scaleY', {
          get: function () {
            return this._transformProperties.scaleY
          },
          set: function (t) {
            this.applyTransformProperties('scaleY', t)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'scaleZ', {
          get: function () {
            return this._transformProperties.scaleZ
          },
          set: function (t) {
            this.applyTransformProperties('scaleZ', t)
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.applyNativeProperties = function (t, e) {
          switch (typeof e) {
            case 'number':
              ;-1 != t.toLowerCase().indexOf('color')
                ? (this._element.style[t] = '#' + e.toString(16))
                : this.isPropertyNameAPureNumber(t)
                ? (this._element.style[t] = e.toString())
                : (this._element.style[t] = e + 'px')
              break
            case 'string':
              this._element.style[t] = e
              break
            case 'undefined':
            case 'object':
              this._element.style.removeProperty(t)
          }
        }),
        (t.prototype.applyTransformProperties = function (t, e) {
          ;(this._transformProperties[t] = e),
            'scale' == t &&
              ((this._transformProperties.scaleX = e),
              (this._transformProperties.scaleY = e))
          var i = this.parseTransformProperty('x', 'px'),
            n = this.parseTransformProperty('y', 'px'),
            o = this.parseTransformProperty('z', 'px'),
            r = this.parseTransformProperty('scaleX'),
            a = this.parseTransformProperty('scaleY'),
            s = this.parseTransformProperty('scaleZ'),
            l = this.parseTransformProperty('rotate', 'deg'),
            u = this.parseTransformProperty('rotateX', 'deg'),
            c = this.parseTransformProperty('rotateY', 'deg'),
            h = this.parseTransformProperty('rotateZ', 'deg'),
            p = ''
          this.hasTransformPropertyAValue('x') &&
            (p += 'translateX(' + i + ')'),
            this.hasTransformPropertyAValue('y') &&
              (p += 'translateY(' + n + ')'),
            this.hasTransformPropertyAValue('z') &&
              (p += 'translateZ(' + o + ')'),
            this.hasTransformPropertyAValue('rotate') &&
              (p += ' rotate(' + l + ')'),
            this.hasTransformPropertyAValue('rotateX') &&
              (p += ' rotateX(' + u + ')'),
            this.hasTransformPropertyAValue('rotateY') &&
              (p += ' rotateY(' + c + ')'),
            this.hasTransformPropertyAValue('rotateZ') &&
              (p += ' rotateZ(' + h + ')'),
            this.hasTransformPropertyAValue('scaleX') &&
              (p += ' scaleX(' + r + ')'),
            this.hasTransformPropertyAValue('scaleY') &&
              (p += ' scaleY(' + a + ')'),
            this.hasTransformPropertyAValue('scaleZ') &&
              (p += ' scaleZ(' + s + ')'),
            this._element.style.setProperty('transform', p)
        }),
        (t.prototype.parseTransformProperty = function (t, e) {
          void 0 === e && (e = void 0)
          var i = this._transformProperties[t]
          switch (typeof i) {
            case 'number':
              return e ? i + e : i
            case 'string':
              return i
            case 'undefined':
            case 'object':
            default:
              return 'scaleX' == t || 'scaleY' == t ? 1 : 0
          }
        }),
        (t.prototype.hasTransformPropertyAValue = function (t) {
          var e = this._transformProperties[t],
            i = 0
          return (
            -1 != t.indexOf('scale') && (i = 1),
            'string' == typeof e ? parseFloat(e) != i : e != i
          )
        }),
        (t.prototype.isTransformProperty = function (t) {
          return null != this._transformProperties[t]
        }),
        (t.prototype.hasDefaultTransform = function (e) {
          return (
            !!this.isTransformProperty(e) &&
            this._transformProperties[e] ==
              t.DEFAULT_TRANSFORM_PROPERTY_VALUES[e]
          )
        }),
        (t.prototype.warnIfStylesWillBeIgnored = function (e, i) {
          var n = this
          t.SHOW_WARNINGS_WHEN_PROPERTIES_GETTING_IGNORED &&
            ('display' == e &&
              'inline' == i &&
              t.IGNORED_PROPERTIES_FOR_INLINE.forEach(function (t) {
                var e = !1,
                  i = ''
                n.isTransformProperty(t)
                  ? n.hasDefaultTransform(t) ||
                    ((e = !0), (i = n._transformProperties[t]))
                  : (i = n._element.style[t]) && 0 != i.length && (e = !0),
                  e &&
                    console.warn(
                      "WARNING:  display style is set to 'inline'. '" +
                        t +
                        '=' +
                        i +
                        "' will be ignored for: ",
                      n._element
                    )
              }),
            -1 != t.IGNORED_PROPERTIES_FOR_INLINE.indexOf(e) &&
              'inline' == this._element.style.display &&
              console.warn(
                "WARNING: display style is set to 'inline'. '" +
                  e +
                  '=' +
                  i +
                  "' will be ignored for: ",
                this._element
              ))
        }),
        (t.prototype.isPropertyNameAPureNumber = function (e) {
          var i = !1
          return (
            t.PURE_NUMBER_TO_STRING_PROPERTIES.forEach(function (t) {
              t.toLowerCase() == e.toLowerCase() && (i = !0)
            }),
            i
          )
        }),
        (t.SHOW_WARNINGS_WHEN_PROPERTIES_GETTING_IGNORED = !0),
        (t.PURE_NUMBER_TO_STRING_PROPERTIES = [
          'opacity',
          'fontweight',
          'zIndex',
        ]),
        (t.IGNORED_PROPERTIES_FOR_INLINE = [
          'x',
          'y',
          'z',
          'scale',
          'scaleX',
          'scaleY',
          'scaleZ',
          'rotate',
          'rotateX',
          'rotateY',
          'rotateZ',
          'width',
          'height',
          'margin',
          'marginTop',
          'marginBottom',
          'marginLeft',
          'marginRight',
        ]),
        (t.DEFAULT_TRANSFORM_PROPERTY_VALUES = {
          x: 0,
          y: 0,
          z: 0,
          scale: 1,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
          rotate: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
        }),
        t
      )
    })()
    e.NativeStylesController = n
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.CustomElementsUtils = void 0)
    var r = (function () {
      function t() {}
      return (
        (t.isHTML5Element = function (t) {
          return -1 != this.HTML_TAGS.indexOf(t.toLowerCase())
        }),
        (t.defineCustomElement = function (t) {
          'undefined' == typeof customElements &&
            console.error(
              "CustomElements not supported. Try to use a polyfill like '@webcomponents/custom-elements'"
            ),
            -1 != t.indexOf('-')
              ? this.isHTML5Element(t)
                ? console.error(
                    "'" +
                      t +
                      "' is a native html tag name, which is not allowed for a CustomElement"
                  )
                : (this.initES5CustomElementsAdapter(),
                  null == customElements.get(t) &&
                    customElements.define(
                      t,
                      (function (t) {
                        function e() {
                          return (
                            (null !== t && t.apply(this, arguments)) || this
                          )
                        }
                        return o(e, t), e
                      })(HTMLElement)
                    ))
              : console.error(
                  "'" +
                    t +
                    "' does not contain a hyphen, which is required by CustomElement specifications."
                )
        }),
        (t.initES5CustomElementsAdapter = function () {
          if (
            !this._es5CustomElementsAdapterInitizialied &&
            ((this._es5CustomElementsAdapterInitizialied = !0),
            void 0 !== window.Reflect &&
              void 0 !== window.customElements &&
              !window.customElements.hasOwnProperty(
                'polyfillWrapFlushCallback'
              ))
          ) {
            var t = HTMLElement
            ;(window.HTMLElement = function () {
              return Reflect.construct(t, [], this.constructor)
            }),
              (HTMLElement.prototype = t.prototype),
              (HTMLElement.prototype.constructor = HTMLElement),
              Object.setPrototypeOf(HTMLElement, t)
          }
        }),
        (t.HTML_TAGS = [
          'a',
          'abbr',
          'acronym',
          'address',
          'applet',
          'area',
          'article',
          'aside',
          'audio',
          'b',
          'base',
          'basefont',
          'bdi',
          'bdo',
          'bgsound',
          'big',
          'blink',
          'blockquote',
          'body',
          'br',
          'button',
          'canvas',
          'caption',
          'center',
          'cite',
          'code',
          'col',
          'colgroup',
          'command',
          'content',
          'data',
          'datalist',
          'dd',
          'del',
          'details',
          'dfn',
          'dialog',
          'dir',
          'div',
          'dl',
          'dt',
          'element',
          'em',
          'embed',
          'fieldset',
          'figcaption',
          'figure',
          'font',
          'footer',
          'form',
          'frame',
          'frameset',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hgroup',
          'hr',
          'html',
          'i',
          'iframe',
          'image',
          'img',
          'input',
          'ins',
          'isindex',
          'kbd',
          'keygen',
          'label',
          'legend',
          'li',
          'link',
          'listing',
          'main',
          'map',
          'mark',
          'marquee',
          'math',
          'menu',
          'menuitem',
          'meta',
          'meter',
          'multicol',
          'nav',
          'nextid',
          'nobr',
          'noembed',
          'noframes',
          'noscript',
          'object',
          'ol',
          'optgroup',
          'option',
          'output',
          'p',
          'param',
          'picture',
          'plaintext',
          'pre',
          'progress',
          'q',
          'rb',
          'rbc',
          'rp',
          'rt',
          'rtc',
          'ruby',
          's',
          'samp',
          'script',
          'section',
          'select',
          'shadow',
          'slot',
          'small',
          'source',
          'spacer',
          'span',
          'strike',
          'strong',
          'style',
          'sub',
          'summary',
          'sup',
          'svg',
          'table',
          'tbody',
          'td',
          'template',
          'textarea',
          'tfoot',
          'th',
          'thead',
          'time',
          'title',
          'tr',
          'track',
          'tt',
          'u',
          'ul',
          'var',
          'video',
          'wbr',
          'xmp',
        ]),
        (t._es5CustomElementsAdapterInitizialied = !1),
        t
      )
    })()
    e.CustomElementsUtils = r
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.DOMObserver = void 0)
    var n = i(4),
      o = (function () {
        function t(t, e) {
          void 0 === e && (e = document.body),
            (this._elementToObserve = t),
            (this._defaultObserveRootElement = e),
            (this.onAddedToStageSignal = new n.Signal()),
            (this.onRemovedFromStageSignal = new n.Signal()),
            (this._isStaged = this._defaultObserveRootElement.contains(
              this._elementToObserve
            )),
            this.start()
        }
        return (
          (t.prototype.start = function (t) {
            var e = this
            void 0 === t && (t = this._defaultObserveRootElement),
              this.stop(),
              (this._currentObserveRootElement = t),
              (this._mutationObserver = new MutationObserver(function () {
                return e.onDOMMutation()
              })),
              this._mutationObserver.observe(this._currentObserveRootElement, {
                childList: !0,
                subtree: !0,
              })
          }),
          (t.prototype.stop = function () {
            this._mutationObserver &&
              (this._mutationObserver.disconnect(),
              (this._mutationObserver = null))
          }),
          (t.prototype.destroy = function () {
            this.onAddedToStageSignal.removeAll(),
              this.onRemovedFromStageSignal.removeAll()
          }),
          (t.prototype.onDOMMutation = function () {
            this._currentObserveRootElement.contains(this._elementToObserve)
              ? this._isStaged ||
                ((this._isStaged = !0), this.onAddedToStageSignal.dispatch())
              : this._isStaged &&
                ((this._isStaged = !1),
                this.onRemovedFromStageSignal.dispatch())
          }),
          t
        )
      })()
    e.DOMObserver = o
  },
  function (t, e) {
    t.exports = function (t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t)
        e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function () {
              return e.l
            },
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function () {
              return e.i
            },
          }),
          Object.defineProperty(e, 'exports', { enumerable: !0 }),
          (e.webpackPolyfill = 1)
      }
      return e
    }
  },
  function (t, e) {
    !(function (t, e, i, n, o, r) {
      var a,
        s,
        l,
        u,
        c,
        h = this,
        p = Math.floor(1e4 * Math.random()),
        f = Function.prototype,
        d = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,
        _ = /[\-\w]+\/\.\.\//,
        g = /([^:])\/\//g,
        m = '',
        y = {},
        v = t.easyXDM,
        b = 'easyXDM_',
        C = !1
      function w(t, e) {
        var i = typeof t[e]
        return 'function' == i || !('object' != i || !t[e]) || 'unknown' == i
      }
      function T() {
        var t,
          e = 'Shockwave Flash',
          i = 'application/x-shockwave-flash'
        if (!N(navigator.plugins) && 'object' == typeof navigator.plugins[e]) {
          var n = navigator.plugins[e].description
          n &&
            !N(navigator.mimeTypes) &&
            navigator.mimeTypes[i] &&
            navigator.mimeTypes[i].enabledPlugin &&
            (s = n.match(/\d+/g))
        }
        if (!s)
          try {
            ;(t = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')),
              (s = Array.prototype.slice.call(
                t.GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/),
                1
              )),
              (t = null)
          } catch (t) {}
        if (!s) return !1
        var o = parseInt(s[0], 10),
          r = parseInt(s[1], 10)
        return (l = o > 9 && r > 0), !0
      }
      if (w(t, 'addEventListener'))
        (u = function (t, e, i) {
          t.addEventListener(e, i, !1)
        }),
          (c = function (t, e, i) {
            t.removeEventListener(e, i, !1)
          })
      else {
        if (!w(t, 'attachEvent')) throw new Error('Browser not supported')
        ;(u = function (t, e, i) {
          t.attachEvent('on' + e, i)
        }),
          (c = function (t, e, i) {
            t.detachEvent('on' + e, i)
          })
      }
      var S,
        A = !1,
        O = []
      function E() {
        if (!A) {
          A = !0
          for (var t = 0; t < O.length; t++) O[t]()
          O.length = 0
        }
      }
      if (
        ('readyState' in e
          ? ((S = e.readyState),
            (A =
              'complete' == S ||
              (~navigator.userAgent.indexOf('AppleWebKit/') &&
                ('loaded' == S || 'interactive' == S))))
          : (A = !!e.body),
        !A)
      ) {
        if (w(t, 'addEventListener')) u(e, 'DOMContentLoaded', E)
        else if (
          (u(e, 'readystatechange', function () {
            'complete' == e.readyState && E()
          }),
          e.documentElement.doScroll && t === top)
        ) {
          var x = function () {
            if (!A) {
              try {
                e.documentElement.doScroll('left')
              } catch (t) {
                return void n(x, 1)
              }
              E()
            }
          }
          x()
        }
        u(t, 'load', E)
      }
      function D(t, e) {
        A
          ? t.call(e)
          : O.push(function () {
              t.call(e)
            })
      }
      function P(t) {
        return t.match(d)[3]
      }
      function I(t) {
        var e = t.toLowerCase().match(d),
          i = e[2],
          n = e[3],
          o = e[4] || ''
        return (
          (('http:' == i && ':80' == o) || ('https:' == i && ':443' == o)) &&
            (o = ''),
          i + '//' + n + o
        )
      }
      function k(t) {
        if (!(t = t.replace(g, '$1/')).match(/^(http||https):\/\//)) {
          var e = '/' === t.substring(0, 1) ? '' : i.pathname
          '/' !== e.substring(e.length - 1) &&
            (e = e.substring(0, e.lastIndexOf('/') + 1)),
            (t = i.protocol + '//' + i.host + e + t)
        }
        for (; _.test(t); ) t = t.replace(_, '')
        return t
      }
      function F(t, e) {
        var i = '',
          n = t.indexOf('#')
        ;-1 !== n && ((i = t.substring(n)), (t = t.substring(0, n)))
        var o = []
        for (var a in e) e.hasOwnProperty(a) && o.push(a + '=' + r(e[a]))
        return (
          t + (C ? '#' : -1 == t.indexOf('?') ? '?' : '&') + o.join('&') + i
        )
      }
      var L = (function (t) {
        for (var e, i = {}, n = (t = t.substring(1).split('&')).length; n--; )
          i[(e = t[n].split('='))[0]] = o(e[1])
        return i
      })(/xdm_e=/.test(i.search) ? i.search : i.hash)
      function N(t) {
        return void 0 === t
      }
      var R,
        M = function () {
          var t = {},
            e = { a: [1, 2, 3] },
            i = '{"a":[1,2,3]}'
          return 'undefined' != typeof JSON &&
            'function' == typeof JSON.stringify &&
            JSON.stringify(e).replace(/\s/g, '') === i
            ? JSON
            : (Object.toJSON &&
                Object.toJSON(e).replace(/\s/g, '') === i &&
                (t.stringify = Object.toJSON),
              'function' == typeof String.prototype.evalJSON &&
                (e = i.evalJSON()).a &&
                3 === e.a.length &&
                3 === e.a[2] &&
                (t.parse = function (t) {
                  return t.evalJSON()
                }),
              t.stringify && t.parse
                ? ((M = function () {
                    return t
                  }),
                  t)
                : null)
        }
      function B(t, e, i) {
        var n
        for (var o in e)
          e.hasOwnProperty(o) &&
            (o in t
              ? 'object' == typeof (n = e[o])
                ? B(t[o], n, i)
                : i || (t[o] = e[o])
              : (t[o] = e[o]))
        return t
      }
      function j(t) {
        var i
        N(a) &&
          (function () {
            var t = e.body.appendChild(e.createElement('form')),
              i = t.appendChild(e.createElement('input'))
            ;(i.name = b + 'TEST' + p),
              (a = i !== t.elements[i.name]),
              e.body.removeChild(t)
          })(),
          a
            ? (i = e.createElement('<iframe name="' + t.props.name + '"/>'))
            : ((i = e.createElement('IFRAME')).name = t.props.name),
          (i.id = i.name = t.props.name),
          delete t.props.name,
          'string' == typeof t.container &&
            (t.container = e.getElementById(t.container)),
          t.container ||
            (B(i.style, { position: 'absolute', top: '-2000px', left: '0px' }),
            (t.container = e.body))
        var n = t.props.src
        if (
          ((t.props.src = 'javascript:false'),
          B(i, t.props),
          (i.border = i.frameBorder = 0),
          (i.allowTransparency = !0),
          t.container.appendChild(i),
          t.onLoad && u(i, 'load', t.onLoad),
          t.usePost)
        ) {
          var o,
            r = t.container.appendChild(e.createElement('form'))
          if (
            ((r.target = i.name),
            (r.action = n),
            (r.method = 'POST'),
            'object' == typeof t.usePost)
          )
            for (var s in t.usePost)
              t.usePost.hasOwnProperty(s) &&
                (a
                  ? (o = e.createElement('<input name="' + s + '"/>'))
                  : ((o = e.createElement('INPUT')).name = s),
                (o.value = t.usePost[s]),
                r.appendChild(o))
          r.submit(), r.parentNode.removeChild(r)
        } else i.src = n
        return (t.props.src = n), i
      }
      function H(n) {
        var o,
          r = n.protocol
        if (
          ((n.isHost = n.isHost || N(L.xdm_p)),
          (C = n.hash || !1),
          n.props || (n.props = {}),
          n.isHost)
        )
          (n.remote = k(n.remote)),
            (n.channel = n.channel || 'default' + p++),
            (n.secret = Math.random().toString(16).substring(2)),
            N(r) &&
              (r =
                I(i.href) == I(n.remote)
                  ? '4'
                  : w(t, 'postMessage') || w(e, 'postMessage')
                  ? '1'
                  : n.swf && w(t, 'ActiveXObject') && T()
                  ? '6'
                  : 'Gecko' === navigator.product &&
                    'frameElement' in t &&
                    -1 == navigator.userAgent.indexOf('WebKit')
                  ? '5'
                  : n.remoteHelper
                  ? '2'
                  : '0')
        else if (
          ((n.channel = L.xdm_c.replace(/["'<>\\]/g, '')),
          (n.secret = L.xdm_s),
          (n.remote = L.xdm_e.replace(/["'<>\\]/g, '')),
          (r = L.xdm_p),
          n.acl &&
            !(function (t, e) {
              'string' == typeof t && (t = [t])
              for (var i, n = t.length; n--; )
                if (
                  ((i = t[n]),
                  (i = new RegExp(
                    '^' == i.substr(0, 1)
                      ? i
                      : '^' +
                        i.replace(/(\*)/g, '.$1').replace(/\?/g, '.') +
                        '$'
                  )).test(e))
                )
                  return !0
              return !1
            })(n.acl, n.remote))
        )
          throw new Error('Access denied for ' + n.remote)
        switch (((n.protocol = r), r)) {
          case '0':
            if (
              (B(
                n,
                {
                  interval: 100,
                  delay: 2e3,
                  useResize: !0,
                  useParent: !1,
                  usePolling: !1,
                },
                !0
              ),
              n.isHost)
            ) {
              if (!n.local) {
                for (
                  var a,
                    l = i.protocol + '//' + i.host,
                    u = e.body.getElementsByTagName('img'),
                    c = u.length;
                  c--;

                )
                  if ((a = u[c]).src.substring(0, l.length) === l) {
                    n.local = a.src
                    break
                  }
                n.local || (n.local = t)
              }
              var h = { xdm_c: n.channel, xdm_p: 0 }
              n.local === t
                ? ((n.usePolling = !0),
                  (n.useParent = !0),
                  (n.local =
                    i.protocol + '//' + i.host + i.pathname + i.search),
                  (h.xdm_e = n.local),
                  (h.xdm_pa = 1))
                : (h.xdm_e = k(n.local)),
                n.container && ((n.useResize = !1), (h.xdm_po = 1)),
                (n.remote = F(n.remote, h))
            } else
              B(n, {
                useParent: !N(L.xdm_pa),
                usePolling: !N(L.xdm_po),
                useResize: !n.useParent && n.useResize,
              })
            o = [
              new y.stack.HashTransport(n),
              new y.stack.ReliableBehavior({}),
              new y.stack.QueueBehavior({
                encode: !0,
                maxLength: 4e3 - n.remote.length,
              }),
              new y.stack.VerifyBehavior({ initiate: n.isHost }),
            ]
            break
          case '1':
            o = [new y.stack.PostMessageTransport(n)]
            break
          case '2':
            n.isHost && (n.remoteHelper = k(n.remoteHelper)),
              (o = [
                new y.stack.NameTransport(n),
                new y.stack.QueueBehavior(),
                new y.stack.VerifyBehavior({ initiate: n.isHost }),
              ])
            break
          case '3':
            o = [new y.stack.NixTransport(n)]
            break
          case '4':
            o = [new y.stack.SameOriginTransport(n)]
            break
          case '5':
            o = [new y.stack.FrameElementTransport(n)]
            break
          case '6':
            s || T(), (o = [new y.stack.FlashTransport(n)])
        }
        return (
          o.push(new y.stack.QueueBehavior({ lazy: n.lazy, remove: !0 })), o
        )
      }
      function U(t) {
        for (
          var e,
            i = {
              incoming: function (t, e) {
                this.up.incoming(t, e)
              },
              outgoing: function (t, e) {
                this.down.outgoing(t, e)
              },
              callback: function (t) {
                this.up.callback(t)
              },
              init: function () {
                this.down.init()
              },
              destroy: function () {
                this.down.destroy()
              },
            },
            n = 0,
            o = t.length;
          n < o;
          n++
        )
          B((e = t[n]), i, !0),
            0 !== n && (e.down = t[n - 1]),
            n !== o - 1 && (e.up = t[n + 1])
        return e
      }
      B(y, {
        version: '2.4.20.7',
        query: L,
        stack: {},
        apply: B,
        getJSONObject: M,
        whenReady: D,
        noConflict: function (e) {
          return (
            (t.easyXDM = v),
            (m = e) && (b = 'easyXDM_' + m.replace('.', '_') + '_'),
            y
          )
        },
      }),
        (y.DomHelper = {
          on: u,
          un: c,
          requiresJSON: function (i) {
            var n, o
            ;('object' == typeof (n = t)[(o = 'JSON')] && n[o]) ||
              e.write(
                '<script type="text/javascript" src="' + i + '"></script>'
              )
          },
        }),
        (R = {}),
        (y.Fn = {
          set: function (t, e) {
            R[t] = e
          },
          get: function (t, e) {
            if (R.hasOwnProperty(t)) {
              var i = R[t]
              return e && delete R[t], i
            }
          },
        }),
        (y.Socket = function (t) {
          var e = U(
              H(t).concat([
                {
                  incoming: function (e, i) {
                    t.onMessage(e, i)
                  },
                  callback: function (e) {
                    t.onReady && t.onReady(e)
                  },
                },
              ])
            ),
            i = I(t.remote)
          ;(this.origin = I(t.remote)),
            (this.destroy = function () {
              e.destroy()
            }),
            (this.postMessage = function (t) {
              e.outgoing(t, i)
            }),
            e.init()
        }),
        (y.Rpc = function (t, e) {
          if (e.local)
            for (var i in e.local)
              if (e.local.hasOwnProperty(i)) {
                var n = e.local[i]
                'function' == typeof n && (e.local[i] = { method: n })
              }
          var o = U(
            H(t).concat([
              new y.stack.RpcBehavior(this, e),
              {
                callback: function (e) {
                  t.onReady && t.onReady(e)
                },
              },
            ])
          )
          ;(this.origin = I(t.remote)),
            (this.destroy = function () {
              o.destroy()
            }),
            o.init()
        }),
        (y.stack.SameOriginTransport = function (t) {
          var e, o, r, a
          return (e = {
            outgoing: function (t, e, i) {
              r(t), i && i()
            },
            destroy: function () {
              o && (o.parentNode.removeChild(o), (o = null))
            },
            onDOMReady: function () {
              ;(a = I(t.remote)),
                t.isHost
                  ? (B(t.props, {
                      src: F(t.remote, {
                        xdm_e: i.protocol + '//' + i.host + i.pathname,
                        xdm_c: t.channel,
                        xdm_p: 4,
                      }),
                      name: b + t.channel + '_provider',
                    }),
                    (o = j(t)),
                    y.Fn.set(t.channel, function (t) {
                      return (
                        (r = t),
                        n(function () {
                          e.up.callback(!0)
                        }, 0),
                        function (t) {
                          e.up.incoming(t, a)
                        }
                      )
                    }))
                  : ((r = (function () {
                      var t = parent
                      if ('' !== m)
                        for (var e = 0, i = m.split('.'); e < i.length; e++)
                          t = t[i[e]]
                      return t.easyXDM
                    })().Fn.get(
                      t.channel,
                      !0
                    )(function (t) {
                      e.up.incoming(t, a)
                    })),
                    n(function () {
                      e.up.callback(!0)
                    }, 0))
            },
            init: function () {
              D(e.onDOMReady, e)
            },
          })
        }),
        (y.stack.FlashTransport = function (t) {
          var o, a, s, u, c
          function p(t, e) {
            n(function () {
              o.up.incoming(t, s)
            }, 0)
          }
          function f(i) {
            var n = t.swf + '?host=' + t.isHost,
              o = 'easyXDM_swf_' + Math.floor(1e4 * Math.random())
            y.Fn.set('flash_loaded' + i.replace(/[\-.]/g, '_'), function () {
              y.stack.FlashTransport[i].swf = u = c.firstChild
              for (
                var t = y.stack.FlashTransport[i].queue, e = 0;
                e < t.length;
                e++
              )
                t[e]()
              t.length = 0
            }),
              t.swfContainer
                ? (c =
                    'string' == typeof t.swfContainer
                      ? e.getElementById(t.swfContainer)
                      : t.swfContainer)
                : (B(
                    (c = e.createElement('div')).style,
                    l && t.swfNoThrottle
                      ? {
                          height: '20px',
                          width: '20px',
                          position: 'fixed',
                          right: 0,
                          top: 0,
                        }
                      : {
                          height: '1px',
                          width: '1px',
                          position: 'absolute',
                          overflow: 'hidden',
                          right: 0,
                          top: 0,
                        }
                  ),
                  e.body.appendChild(c))
            var a =
              'callback=flash_loaded' +
              r(i.replace(/[\-.]/g, '_')) +
              '&proto=' +
              h.location.protocol +
              '&domain=' +
              r(P(h.location.href)) +
              '&port=' +
              r(
                (function (t) {
                  return t.match(d)[4] || ''
                })(h.location.href)
              ) +
              '&ns=' +
              r(m)
            c.innerHTML =
              "<object height='20' width='20' type='application/x-shockwave-flash' id='" +
              o +
              "' data='" +
              n +
              "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" +
              n +
              "'></param><param name='flashvars' value='" +
              a +
              "'></param><embed type='application/x-shockwave-flash' FlashVars='" +
              a +
              "' allowScriptAccess='always' wmode='transparent' src='" +
              n +
              "' height='1' width='1'></embed></object>"
          }
          return (o = {
            outgoing: function (e, i, n) {
              u.postMessage(t.channel, e.toString()), n && n()
            },
            destroy: function () {
              try {
                u.destroyChannel(t.channel)
              } catch (t) {}
              ;(u = null), a && (a.parentNode.removeChild(a), (a = null))
            },
            onDOMReady: function () {
              ;(s = t.remote),
                y.Fn.set('flash_' + t.channel + '_init', function () {
                  n(function () {
                    o.up.callback(!0)
                  })
                }),
                y.Fn.set('flash_' + t.channel + '_onMessage', p),
                (t.swf = k(t.swf))
              var e = P(t.swf),
                r = function () {
                  ;(y.stack.FlashTransport[e].init = !0),
                    (u = y.stack.FlashTransport[e].swf).createChannel(
                      t.channel,
                      t.secret,
                      I(t.remote),
                      t.isHost
                    ),
                    t.isHost &&
                      (l &&
                        t.swfNoThrottle &&
                        B(t.props, {
                          position: 'fixed',
                          right: 0,
                          top: 0,
                          height: '20px',
                          width: '20px',
                        }),
                      B(t.props, {
                        src: F(t.remote, {
                          xdm_e: I(i.href),
                          xdm_c: t.channel,
                          xdm_p: 6,
                          xdm_s: t.secret,
                        }),
                        name: b + t.channel + '_provider',
                      }),
                      (a = j(t)))
                }
              y.stack.FlashTransport[e] && y.stack.FlashTransport[e].init
                ? r()
                : y.stack.FlashTransport[e]
                ? y.stack.FlashTransport[e].queue.push(r)
                : ((y.stack.FlashTransport[e] = { queue: [r] }), f(e))
            },
            init: function () {
              D(o.onDOMReady, o)
            },
          })
        }),
        (y.stack.PostMessageTransport = function (e) {
          var o, r, a, s
          function l(t) {
            if ('string' == typeof t.data) {
              var n = (function (t) {
                if (t.origin) return I(t.origin)
                if (t.uri) return I(t.uri)
                if (t.domain) return i.protocol + '//' + t.domain
                throw 'Unable to retrieve the origin of the event'
              })(t)
              n == s &&
                t.data.substring(0, e.channel.length + 1) == e.channel + ' ' &&
                o.up.incoming(t.data.substring(e.channel.length + 1), n)
            }
          }
          function h(i) {
            i.data == e.channel + '-ready' &&
              ((a =
                'postMessage' in r.contentWindow
                  ? r.contentWindow
                  : r.contentWindow.document),
              c(t, 'message', h),
              u(t, 'message', l),
              n(function () {
                o.up.callback(!0)
              }, 0))
          }
          return (o = {
            outgoing: function (t, i, n) {
              '	'
            },
            destroy: function () {
              c(t, 'message', h),
                c(t, 'message', l),
                r && ((a = null), r.parentNode.removeChild(r), (r = null))
            },
            onDOMReady: function () {
              ;(s = I(e.remote)),
                e.isHost
                  ? (u(t, 'message', h),
                    B(e.props, {
                      src: F(e.remote, {
                        xdm_e: I(i.href),
                        xdm_c: e.channel,
                        xdm_p: 1,
                      }),
                      name: b + e.channel + '_provider',
                    }),
                    (r = j(e)))
                  : (u(t, 'message', l),
                    (a = ''),
                    n(function () {
                      o.up.callback(!0)
                    }, 0))
            },
            init: function () {
              D(o.onDOMReady, o)
            },
          })
        }),
        (y.stack.FrameElementTransport = function (o) {
          var r, a, s, l
          return (r = {
            outgoing: function (t, e, i) {
              s.call(this, t), i && i()
            },
            destroy: function () {
              a && (a.parentNode.removeChild(a), (a = null))
            },
            onDOMReady: function () {
              ;(l = I(o.remote)),
                o.isHost
                  ? (B(o.props, {
                      src: F(o.remote, {
                        xdm_e: I(i.href),
                        xdm_c: o.channel,
                        xdm_p: 5,
                      }),
                      name: b + o.channel + '_provider',
                    }),
                    ((a = j(o)).fn = function (t) {
                      return (
                        delete a.fn,
                        (s = t),
                        n(function () {
                          r.up.callback(!0)
                        }, 0),
                        function (t) {
                          r.up.incoming(t, l)
                        }
                      )
                    }))
                  : (e.referrer &&
                      I(e.referrer) != L.xdm_e &&
                      (t.top.location = L.xdm_e),
                    (s = t.frameElement.fn(function (t) {
                      r.up.incoming(t, l)
                    })),
                    r.up.callback(!0))
            },
            init: function () {
              D(r.onDOMReady, r)
            },
          })
        }),
        (y.stack.NameTransport = function (t) {
          var e, i, o, r, a, s, l, u
          function h(e) {
            var n = t.remoteHelper + (i ? '#_3' : '#_2') + t.channel
            o.contentWindow.sendMessage(e, n)
          }
          function p() {
            i
              ? (2 != ++a && i) || e.up.callback(!0)
              : (h('ready'), e.up.callback(!0))
          }
          function f(t) {
            e.up.incoming(t, l)
          }
          function d() {
            s &&
              n(function () {
                s(!0)
              }, 0)
          }
          return (e = {
            outgoing: function (t, e, i) {
              ;(s = i), h(t)
            },
            destroy: function () {
              o.parentNode.removeChild(o),
                (o = null),
                i && (r.parentNode.removeChild(r), (r = null))
            },
            onDOMReady: function () {
              ;(i = t.isHost),
                (a = 0),
                (l = I(t.remote)),
                (t.local = k(t.local)),
                i
                  ? (y.Fn.set(t.channel, function (e) {
                      i && 'ready' === e && (y.Fn.set(t.channel, f), p())
                    }),
                    (u = F(t.remote, {
                      xdm_e: t.local,
                      xdm_c: t.channel,
                      xdm_p: 2,
                    })),
                    B(t.props, {
                      src: u + '#' + t.channel,
                      name: b + t.channel + '_provider',
                    }),
                    (r = j(t)))
                  : ((t.remoteHelper = t.remote), y.Fn.set(t.channel, f))
              var e = function () {
                var i = o || this
                c(i, 'load', e),
                  y.Fn.set(t.channel + '_load', d),
                  (function t() {
                    'function' == typeof i.contentWindow.sendMessage
                      ? p()
                      : n(t, 50)
                  })()
              }
              o = j({ props: { src: t.local + '#_4' + t.channel }, onLoad: e })
            },
            init: function () {
              D(e.onDOMReady, e)
            },
          })
        }),
        (y.stack.HashTransport = function (e) {
          var i, o, r, a, s, l, u, c, h, p
          function f() {
            if (u) {
              var t = u.location.href,
                e = '',
                n = t.indexOf('#')
              ;-1 != n && (e = t.substring(n)),
                e &&
                  e != s &&
                  (function (t) {
                    ;(s = t), i.up.incoming(s.substring(s.indexOf('_') + 1), p)
                  })(e)
            }
          }
          function d() {
            r = setInterval(f, a)
          }
          return (i = {
            outgoing: function (t, i) {
              !(function (t) {
                if (c) {
                  var i = e.remote + '#' + l++ + '_' + t
                  ;(o || !h ? c.contentWindow : c).location = i
                }
              })(t)
            },
            destroy: function () {
              t.clearInterval(r),
                (!o && h) || c.parentNode.removeChild(c),
                (c = null)
            },
            onDOMReady: function () {
              if (
                ((o = e.isHost),
                (a = e.interval),
                (s = '#' + e.channel),
                (l = 0),
                (h = e.useParent),
                (p = I(e.remote)),
                o)
              ) {
                if (
                  (B(e.props, {
                    src: e.remote,
                    name: b + e.channel + '_provider',
                  }),
                  h)
                )
                  e.onLoad = function () {
                    ;(u = t), d(), i.up.callback(!0)
                  }
                else {
                  var r = 0,
                    f = e.delay / 50
                  !(function t() {
                    if (++r > f)
                      throw new Error('Unable to reference listenerwindow')
                    try {
                      u = c.contentWindow.frames[b + e.channel + '_consumer']
                    } catch (t) {}
                    u ? (d(), i.up.callback(!0)) : n(t, 50)
                  })()
                }
                c = j(e)
              } else
                (u = t),
                  d(),
                  h
                    ? ((c = parent), i.up.callback(!0))
                    : (B(e, {
                        props: {
                          src: e.remote + '#' + e.channel + new Date(),
                          name: b + e.channel + '_consumer',
                        },
                        onLoad: function () {
                          i.up.callback(!0)
                        },
                      }),
                      (c = j(e)))
            },
            init: function () {
              D(i.onDOMReady, i)
            },
          })
        }),
        (y.stack.ReliableBehavior = function (t) {
          var e,
            i,
            n = 0,
            o = 0,
            r = ''
          return (e = {
            incoming: function (t, a) {
              var s = t.indexOf('_'),
                l = t.substring(0, s).split(',')
              ;(t = t.substring(s + 1)),
                l[0] == n && ((r = ''), i && i(!0)),
                t.length > 0 &&
                  (e.down.outgoing(l[1] + ',' + n + '_' + r, a),
                  o != l[1] && ((o = l[1]), e.up.incoming(t, a)))
            },
            outgoing: function (t, a, s) {
              ;(r = t), (i = s), e.down.outgoing(o + ',' + ++n + '_' + t, a)
            },
          })
        }),
        (y.stack.QueueBehavior = function (t) {
          var e,
            i,
            a = [],
            s = !0,
            l = '',
            u = 0,
            c = !1,
            h = !1
          function p() {
            if (t.remove && 0 === a.length)
              return (
                ((o = e).up.down = o.down),
                (o.down.up = o.up),
                void (o.up = o.down = null)
              )
            var o
            if (!s && 0 !== a.length && !i) {
              s = !0
              var r = a.shift()
              e.down.outgoing(r.data, r.origin, function (t) {
                ;(s = !1),
                  r.callback &&
                    n(function () {
                      r.callback(t)
                    }, 0),
                  p()
              })
            }
          }
          return (e = {
            init: function () {
              N(t) && (t = {}),
                t.maxLength && ((u = t.maxLength), (h = !0)),
                t.lazy ? (c = !0) : e.down.init()
            },
            callback: function (t) {
              s = !1
              var i = e.up
              p(), i.callback(t)
            },
            incoming: function (i, n) {
              if (h) {
                var r = i.indexOf('_'),
                  a = parseInt(i.substring(0, r), 10)
                ;(l += i.substring(r + 1)),
                  0 === a &&
                    (t.encode && (l = o(l)), e.up.incoming(l, n), (l = ''))
              } else e.up.incoming(i, n)
            },
            outgoing: function (i, n, o) {
              t.encode && (i = r(i))
              var s,
                l = []
              if (h) {
                for (; 0 !== i.length; )
                  (s = i.substring(0, u)),
                    (i = i.substring(s.length)),
                    l.push(s)
                for (; (s = l.shift()); )
                  a.push({
                    data: l.length + '_' + s,
                    origin: n,
                    callback: 0 === l.length ? o : null,
                  })
              } else a.push({ data: i, origin: n, callback: o })
              c ? e.down.init() : p()
            },
            destroy: function () {
              ;(i = !0), e.down.destroy()
            },
          })
        }),
        (y.stack.VerifyBehavior = function (t) {
          var e, i, n
          function o() {
            ;(i = Math.random().toString(16).substring(2)), e.down.outgoing(i)
          }
          return (e = {
            incoming: function (r, a) {
              var s = r.indexOf('_')
              ;-1 === s
                ? r === i
                  ? e.up.callback(!0)
                  : n || ((n = r), t.initiate || o(), e.down.outgoing(r))
                : r.substring(0, s) === n &&
                  e.up.incoming(r.substring(s + 1), a)
            },
            outgoing: function (t, n, o) {
              e.down.outgoing(i + '_' + t, n, o)
            },
            callback: function (e) {
              t.initiate && o()
            },
          })
        }),
        (y.stack.RpcBehavior = function (t, e) {
          var i,
            n = e.serializer || M(),
            o = 0,
            r = {}
          function a(t) {
            ;(t.jsonrpc = '2.0'), i.down.outgoing(n.stringify(t))
          }
          function s(t, e) {
            var i = Array.prototype.slice
            return function () {
              var n,
                s = arguments.length,
                l = { method: e }
              s > 0 && 'function' == typeof arguments[s - 1]
                ? (s > 1 && 'function' == typeof arguments[s - 2]
                    ? ((n = {
                        success: arguments[s - 2],
                        error: arguments[s - 1],
                      }),
                      (l.params = i.call(arguments, 0, s - 2)))
                    : ((n = { success: arguments[s - 1] }),
                      (l.params = i.call(arguments, 0, s - 1))),
                  (r['' + ++o] = n),
                  (l.id = o))
                : (l.params = i.call(arguments, 0)),
                t.namedParams &&
                  1 === l.params.length &&
                  (l.params = l.params[0]),
                a(l)
            }
          }
          function l(t, e, i, n) {
            if (i) {
              var o, r, s
              e
                ? ((o = function (t) {
                    ;(o = f), a({ id: e, result: t })
                  }),
                  (r = function (t, i) {
                    r = f
                    var n = { id: e, error: { code: -32099, message: t } }
                    i && (n.error.data = i), a(n)
                  }))
                : (o = r = f),
                (s = n),
                '[object Array]' !== Object.prototype.toString.call(s) &&
                  (n = [n])
              try {
                var l = i.method.apply(i.scope, n.concat([o, r]))
                N(l) || o(l)
              } catch (t) {
                r(t.message)
              }
            } else
              e &&
                a({
                  id: e,
                  error: { code: -32601, message: 'Procedure not found.' },
                })
          }
          return (i = {
            incoming: function (t, i) {
              var o = n.parse(t)
              if (o.method)
                e.handle
                  ? e.handle(o, a)
                  : l(o.method, o.id, e.local[o.method], o.params)
              else {
                var s = r[o.id]
                o.error
                  ? s.error && s.error(o.error)
                  : s.success && s.success(o.result),
                  delete r[o.id]
              }
            },
            init: function () {
              if (e.remote)
                for (var n in e.remote)
                  e.remote.hasOwnProperty(n) && (t[n] = s(e.remote[n], n))
              i.down.init()
            },
            destroy: function () {
              for (var n in e.remote)
                e.remote.hasOwnProperty(n) && t.hasOwnProperty(n) && delete t[n]
              i.down.destroy()
            },
          })
        }),
        (h.easyXDM = y)
    })(
      window,
      document,
      location,
      window.setTimeout,
      decodeURIComponent,
      encodeURIComponent
    )
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.SVGUtils = void 0)
    var n = i(44),
      o = (function () {
        function t() {}
        return (
          (t.getElementByID = function (t, e, i) {
            return t.querySelectorAll('#' + e + i)[0]
          }),
          (t.getElementsByID = function (t, e, i) {
            return Array.from(t.querySelectorAll('#' + e + i))
          }),
          (t.getElementsByPartOfID = function (t, e, i) {
            return Array.from(t.querySelectorAll('[id^=' + e + i + ']'))
          }),
          (t.getLocalTransform = function (t) {
            var e = t.getAttribute('transform')
            if (e) {
              var i = e
                  .replace('translate(', '')
                  .replace(')', '')
                  .replace(' ', ''),
                n = parseFloat(i.split(',')[0]),
                o = parseFloat(i.split(',')[1])
              return (
                -1 != i.indexOf('matrix') &&
                  ((i = i.replace('matrix(', '')),
                  (n = parseFloat(i.split(',')[4])),
                  (o = parseFloat(i.split(',')[5]))),
                -1 == i.indexOf(',') &&
                  ((i = e
                    .replace('translate(', '')
                    .replace(')', '')
                    .replace(', ', '')),
                  (n = parseFloat(i.split(' ')[0])),
                  (o = parseFloat(i.split(' ')[1]))),
                { x: n, y: o }
              )
            }
            return null
          }),
          (t.getArcPath = function (t, e, i) {
            var o = n.MathUtils.polarToCartesian(0, 0, t, i),
              r = n.MathUtils.polarToCartesian(0, 0, t, e),
              a = i - e <= 180 ? '0' : '1'
            return ['M', o.x, o.y, 'A', t, t, 0, a, 0, r.x, r.y].join(' ')
          }),
          t
        )
      })()
    e.SVGUtils = o
  },
  function (t, e) {
    t.exports =
      '<svg width="196px" height="225px" viewBox="0 0 196 225" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>download-icon</title><desc>Created with Sketch.</desc><g id="__ZrOwYZD__download-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon id="__ZrOwYZD__arrow" fill="#F39500" fill-rule="nonzero" points="195.321918 79.2676056 139.671233 79.2676056 139.671233 -4.26325641e-14 56.1506849 -4.26325641e-14 56.1506849 79.2676056 0.5 79.2676056 97.9109589 171.71831"></polygon><polygon id="__ZrOwYZD__bar" fill="#F39500" fill-rule="nonzero" points="0.5 198.084507 0.5 224.535211 195.321918 224.535211 195.321918 198.084507"></polygon></g></svg>'
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.QuoteContent = void 0)
    var r = i(29),
      a = i(2),
      s = i(6),
      l = i(10),
      u = i(192),
      c = i(30),
      h = i(1),
      p = i(11),
      f = i(3),
      d = (function (t) {
        function e(e) {
          var i =
            t.call(this, r.TopicItemType.QUOTE, {
              useScrollableContent: !0,
              useScrollButton: !0,
              showScrollOverflowGradient: !0,
              expandOnSelect: !0,
            }) || this
          return (
            (i._data = e),
            (i._quoteTextParagaphs = []),
            i.initQuoteIcon(),
            i.initQuoteText(),
            i.initAuthorInfo(),
            i
          )
        }
        return (
          o(e, t),
          (e.prototype.updateStyles = function () {
            t.prototype.updateStyles.call(this),
              this.applyStyle({
                backgroundColor: this._data.useDarkMode
                  ? s.Color.BLACK
                  : s.Color.WHITE,
              }),
              this._scrollContent.applyStyle({ whiteSpace: 'no-wrap' }),
              this._quoteIcon.applyStyle({
                marginTop: 0.3 * l.Font.QUOTE_FONTSIZE,
                marginRight: a.Size.CONTENT_MARGIN,
                cssFloat: 'left',
                lineHeight: 0,
                width: 3.5 * l.Font.QUOTE_FONTSIZE,
              }),
              this._quoteIcon.getElementsByID('dot').forEach(function (t) {
                t.style.fill = f.AppConfig.HIGHLIGHT_COLOR
              }),
              this._quoteText.applyStyle({
                display: 'inline',
                fontFamily: l.Font.LIGHT_ITALIC_FAMILY,
                fontSize: l.Font.QUOTE_FONTSIZE,
                lineHeight: '1.4',
                color: this._data.useDarkMode ? s.Color.WHITE : s.Color.GREY,
                letterSpacing: 0.5,
              }),
              this._quoteTextParagaphs.forEach(function (t) {
                t.applyStyle({ marginTop: 0 })
              })
          }),
          (e.prototype.initQuoteIcon = function () {
            ;(this._quoteIcon = new p.SVGComponent(i(201), 'quote-icon')),
              this._quoteIcon.clearSizeDefinition(),
              this._scrollContent.addChild(this._quoteIcon)
          }),
          (e.prototype.initQuoteText = function () {
            var t = this
            ;(this._quoteText = new h.UIComponent('quote-text')),
              (this._quoteText.view.innerHTML = this._data.quote),
              this._scrollContent.addChild(this._quoteText),
              Array.from(
                this._quoteText.view.getElementsByTagName('p')
              ).forEach(function (e) {
                t._quoteTextParagaphs.push(new h.UIComponent(e))
              })
          }),
          (e.prototype.initAuthorInfo = function () {
            ;(this._authorInfo = new u.AuthorInfo(
              this._data.portraitURL,
              this._data.author,
              this._data.position
            )),
              (this._authorInfo.darkMode = this._data.useDarkMode),
              this._scrollContent.addChild(this._authorInfo)
          }),
          (e.prototype.updateSizeValues = function () {
            var t = 0.5 * a.Size.APP_HEIGHT,
              e = a.Size.APP_HEIGHT - 2 * a.Size.HEADER_HEIGHT
            ;(this._standardWidth = 300 * a.Size.APP_SIZE_FACTOR + 250),
              (this._expandedWidth = this._standardWidth),
              (this._standardHeight = this.calcScrollableContentHeight()),
              this._standardHeight > t && (this._standardHeight = t),
              (this._expandedHeight = this.calcScrollableContentHeight()),
              this._expandedHeight > e && (this._expandedHeight = e),
              (this._currentWidth = this._expanded
                ? this._expandedWidth
                : this._standardWidth),
              (this._currentHeight = this._expanded
                ? this._expandedHeight
                : this._standardHeight)
          }),
          (e.prototype.calcScrollableContentHeight = function () {
            var t = this._scrollableContent.scrollHeight
            return Math.round(t)
          }),
          e
        )
      })(c.TopicItemExpandableContent)
    e.QuoteContent = d
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.AuthorInfo = void 0)
    var r = i(2),
      a = i(10),
      s = i(1),
      l = i(6),
      u = (function (t) {
        function e(e, i, n) {
          var o = t.call(this, 'author-info') || this
          return (
            (o._portraitURL = e),
            (o._name = i),
            (o._position = n),
            o.initPortraitImage(),
            o.initAuthorInfo(),
            o
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'darkMode', {
            set: function (t) {
              ;(this._darkMode = t), this.updateStyles()
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.updateStyles = function () {
            this.applyStyle({ whiteSpace: 'no-wrap' }),
              this._portrait.applyStyle({
                display: 'inline-block',
                width: r.Size.CONTENT_TYPE_ICON_SIZE,
                height: r.Size.CONTENT_TYPE_ICON_SIZE,
                borderRadius: r.Size.CONTENT_TYPE_ICON_SIZE,
                overflow: 'hidden',
              }),
              this._authorInfo.applyStyle({
                display: 'inline-block',
                paddingTop: 0.5 * r.Size.CONTENT_MARGIN,
                paddingLeft: r.Size.CONTENT_MARGIN,
                width:
                  'calc(100% - ' +
                  (r.Size.CONTENT_TYPE_ICON_SIZE + r.Size.CONTENT_MARGIN) +
                  'px)',
                verticalAlign: 'top',
                fontSize: a.Font.GENERAL_P_FONTSIZE,
                lineHeight: '1.4',
                color: this._darkMode ? l.Color.WHITE : l.Color.GREY,
              }),
              this._authorName.applyStyle({ fontFamily: a.Font.BOLD_FAMILY }),
              this._authorPosition.applyStyle({
                fontFamily: a.Font.REGULAR_FAMILY,
              })
          }),
          (e.prototype.initPortraitImage = function () {
            ;(this._portrait = new s.UIComponent('img')),
              (this._portrait.view.src = this._portraitURL),
              this.addChild(this._portrait)
          }),
          (e.prototype.initAuthorInfo = function () {
            ;(this._authorInfo = new s.UIComponent('author-info')),
              this.addChild(this._authorInfo),
              (this._authorName = new s.UIComponent('author-name')),
              (this._authorName.view.innerHTML = this._name),
              (this._authorPosition = new s.UIComponent('author-position')),
              (this._authorPosition.view.innerHTML = this._position),
              this._authorInfo.addChild(this._authorName),
              this._authorInfo.addChild(this._authorPosition)
          }),
          e
        )
      })(s.UIComponent)
    e.AuthorInfo = u
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ExpandButton = void 0)
    var r = i(2),
      a = i(5),
      s = i(46),
      l = i(1),
      u = i(11),
      c = i(4),
      h = i(3),
      p = (function (t) {
        function e(e) {
          var i = t.call(this, 'expand-button') || this
          return (
            (i._gradientColor = e),
            (i.onClickSignal = new c.Signal()),
            i.initContentContainer(),
            i.initOverlayGradient(),
            i.initExpandIcon(),
            i.initListeners(),
            i
          )
        }
        return (
          o(e, t),
          (e.prototype.show = function (t) {
            void 0 === t && (t = !1),
              (this.interactive = !0),
              a.TweenMax.to(this.view, t ? 0 : 0.5, { autoAlpha: 1 })
          }),
          (e.prototype.hide = function (t) {
            void 0 === t && (t = !1),
              (this.interactive = !1),
              a.TweenMax.to(this.view, t ? 0 : 0.5, { autoAlpha: 0 })
          }),
          (e.prototype.updateStyles = function () {
            this._contentContainer.applyStyle({
              cursor: 'pointer',
              position: 'relative',
              height: 80 * r.Size.APP_SIZE_FACTOR + 80,
            }),
              this._overlayGradient.applyStyle({
                position: 'absolute',
                width: '100%',
                height: '100%',
              }),
              (this._expandIcon.getElementByID('circle').style.fill =
                h.AppConfig.HIGHLIGHT_COLOR),
              this._expandIcon.applyStyle({
                position: 'absolute',
                left: '50%',
                x: '-50%',
                scale: 0.9,
                width: 22 * r.Size.APP_SIZE_FACTOR + 22,
                transformOrigin: '51% 45%',
                bottom: 0.5 * r.Size.CONTENT_MARGIN,
              })
          }),
          (e.prototype.initContentContainer = function () {
            ;(this._contentContainer = new l.UIComponent('content-container')),
              this.addChild(this._contentContainer)
          }),
          (e.prototype.initOverlayGradient = function () {
            ;(this._overlayGradient = new s.Gradient(this._gradientColor)),
              this._contentContainer.addChild(this._overlayGradient)
          }),
          (e.prototype.initExpandIcon = function () {
            ;(this._expandIcon = new u.SVGComponent(i(194))),
              this._expandIcon.clearSizeDefinition(),
              this._contentContainer.addChild(this._expandIcon)
          }),
          (e.prototype.initListeners = function () {
            var t = this
            this._contentContainer.addNativeListener('mouseover', function () {
              return t.onMouseOver()
            }),
              this._contentContainer.addNativeListener('mouseout', function () {
                return t.onMouseOut()
              }),
              this._contentContainer.addNativeListener('click', function () {
                return t.onClicked()
              })
          }),
          (e.prototype.onMouseOver = function () {
            a.TweenMax.to(this._expandIcon.transform, 0.3, {
              scale: 1,
              ease: a.Power4.easeOut,
            })
          }),
          (e.prototype.onMouseOut = function () {
            a.TweenMax.to(this._expandIcon.transform, 0.3, {
              scale: 0.9,
              ease: a.Power4.easeOut,
            })
          }),
          (e.prototype.onClicked = function () {
            this.onClickSignal.dispatch()
          }),
          e
        )
      })(l.UIComponent)
    e.ExpandButton = p
  },
  function (t, e) {
    t.exports =
      '<svg width="44px" height="43px" viewBox="0 0 44 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>plus-icon</title><desc>Created with Sketch.</desc><g id="__xOZiH5H__plus-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M21.9840226,0.333333333 C10.3045113,0.333333333 0.75,9.87887324 0.75,21.5474178 C0.75,33.2 10.3045113,42.7615023 21.9840226,42.7615023 C33.6475564,42.7615023 43.2180451,33.2159624 43.2180451,21.5474178 C43.2020677,9.87887324 33.6475564,0.333333333 21.9840226,0.333333333 L21.9840226,0.333333333 Z" id="__xOZiH5H__circle" fill="#F39500" fill-rule="nonzero"></path><polygon id="__xOZiH5H__plus" fill="#FFFFFF" fill-rule="nonzero" points="32.5930451 23.6704225 24.1090226 23.6704225 24.1090226 32.1464789 19.8590226 32.1464789 19.8590226 23.6704225 11.3590226 23.6704225 11.3590226 19.4244131 19.8430451 19.4244131 19.8430451 10.9323944 24.0930451 10.9323944 24.0930451 19.4084507 32.5770677 19.4084507 32.5770677 23.6704225"></polygon></g></svg>'
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.CloseButton = void 0)
    var r = i(5),
      a = i(1),
      s = i(11),
      l = i(4),
      u = i(3),
      c = i(2),
      h = (function (t) {
        function e(e) {
          void 0 === e && (e = u.AppConfig.HIGHLIGHT_COLOR)
          var i = t.call(this, 'close-button') || this
          return (
            (i._closeButtonColor = e),
            (i.onClickSignal = new l.Signal()),
            i.initCloseIcon(),
            i.initListeners(),
            i
          )
        }
        return (
          o(e, t),
          (e.prototype.show = function () {
            ;(this.interactive = !0),
              r.TweenMax.to(this.view, 0.5, { autoAlpha: 1 })
          }),
          (e.prototype.hide = function (t) {
            void 0 === t && (t = !1),
              (this.interactive = !1),
              r.TweenMax.to(this.view, t ? 0 : 0.5, { autoAlpha: 0 })
          }),
          (e.prototype.updateStyles = function () {
            this.applyStyle({ cursor: 'pointer' }),
              this._closeIcon.applyStyle({
                width: c.Size.CLOSE_ICON_SIZE,
                scale: 0.9,
              })
          }),
          (e.prototype.initCloseIcon = function () {
            ;(this._closeIcon = new s.SVGComponent(i(196))),
              (this._closeIcon.getElementByID('close').style.fill =
                this._closeButtonColor),
              this._closeIcon.clearSizeDefinition(),
              this.addChild(this._closeIcon)
          }),
          (e.prototype.initListeners = function () {
            var t = this
            this.addNativeListener('click', function () {
              return t.onClicked()
            }),
              this.addNativeListener('mouseover', function () {
                return t.onMouseOver()
              }),
              this.addNativeListener('mouseout', function () {
                return t.onMouseOut()
              })
          }),
          (e.prototype.onClicked = function () {
            this.onClickSignal.dispatch()
          }),
          (e.prototype.onMouseOver = function () {
            r.TweenMax.to(this._closeIcon.transform, 0.5, {
              scale: 1,
              ease: r.Power4.easeOut,
            })
          }),
          (e.prototype.onMouseOut = function () {
            r.TweenMax.to(this._closeIcon.transform, 0.5, {
              scale: 0.9,
              ease: r.Power4.easeOut,
            })
          }),
          e
        )
      })(a.UIComponent)
    e.CloseButton = h
  },
  function (t, e) {
    t.exports =
      '<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>close-icon</title><desc>Created with Sketch.</desc><defs><polygon id="__2DV5hxq__path-1" points="31.5897556 28.6901408 28.7584586 31.5187793 15.9882519 18.7605634 3.20629699 31.5187793 0.375 28.6901408 13.1452068 15.9319249 0.375 3.16197183 3.20629699 0.333333333 15.9765038 13.0915493 28.7584586 0.333333333 31.5897556 3.16197183 18.8195489 15.9319249"></polygon></defs><g id="__2DV5hxq__close-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g><mask id="__2DV5hxq__mask-2" fill="white"><use xlink:href="#__2DV5hxq__path-1"></use></mask><use id="__2DV5hxq__close" fill="#FFFFFF" xlink:href="#__2DV5hxq__path-1"></use></g></g></svg>'
  },
  function (t, e, i) {
    'use strict'
    i.r(e),
      i.d(e, 'CustomEase', function () {
        return o
      }),
      i.d(e, 'default', function () {
        return o
      })
    var n = i(0)
    /*!
     * VERSION: 0.2.2
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/ n.k._gsDefine(
      'easing.CustomEase',
      ['easing.Ease'],
      function () {
        var t = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
          e = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
          i = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
          o = /[cLlsS]/g,
          r = 'CustomEase only accepts Cubic Bezier data.',
          a = function (t, e, i, n, o, r, s, l, u, c, h) {
            var p,
              f = (t + i) / 2,
              d = (e + n) / 2,
              _ = (i + o) / 2,
              g = (n + r) / 2,
              m = (o + s) / 2,
              y = (r + l) / 2,
              v = (f + _) / 2,
              b = (d + g) / 2,
              C = (_ + m) / 2,
              w = (g + y) / 2,
              T = (v + C) / 2,
              S = (b + w) / 2,
              A = s - t,
              O = l - e,
              E = Math.abs((i - s) * O - (n - l) * A),
              x = Math.abs((o - s) * O - (r - l) * A)
            return (
              c ||
                ((c = [
                  { x: t, y: e },
                  { x: s, y: l },
                ]),
                (h = 1)),
              c.splice(h || c.length - 1, 0, { x: T, y: S }),
              (E + x) * (E + x) > u * (A * A + O * O) &&
                ((p = c.length),
                a(t, e, f, d, v, b, T, S, u, c, h),
                a(T, S, C, w, m, y, s, l, u, c, h + 1 + (c.length - p))),
              c
            )
          },
          s = function (t) {
            var e = this.lookup[(t * this.l) | 0] || this.lookup[this.l - 1]
            return e.nx < t && (e = e.n), e.y + ((t - e.x) / e.cx) * e.cy
          },
          l = function (t, e, i) {
            ;(this._calcEnd = !0),
              (this.id = t),
              t && (n.b.map[t] = this),
              (this.getRatio = s),
              this.setData(e, i)
          },
          u = (l.prototype = new n.b())
        return (
          (u.constructor = l),
          (u.setData = function (n, s) {
            var l,
              u,
              c,
              h,
              p,
              f,
              d,
              _,
              g,
              m,
              y = (n = n || '0,0,1,1').match(t),
              v = 1,
              b = []
            if (
              ((m = (s = s || {}).precision || 1),
              (this.data = n),
              (this.lookup = []),
              (this.points = b),
              (this.fast = m <= 1),
              (o.test(n) || (-1 !== n.indexOf('M') && -1 === n.indexOf('C'))) &&
                (y = (function (t) {
                  var n,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    h,
                    p,
                    f,
                    d,
                    _ =
                      (t + '')
                        .replace(i, function (t) {
                          var e = +t
                          return e < 1e-4 && e > -1e-4 ? 0 : e
                        })
                        .match(e) || [],
                    g = [],
                    m = 0,
                    y = 0,
                    v = _.length,
                    b = 2
                  for (n = 0; n < v; n++)
                    if (
                      ((p = s),
                      isNaN(_[n])
                        ? (l = (s = _[n].toUpperCase()) !== _[n])
                        : n--,
                      (o = +_[n + 1]),
                      (a = +_[n + 2]),
                      l && ((o += m), (a += y)),
                      n || ((c = o), (h = a)),
                      'M' === s)
                    )
                      u && u.length < 8 && ((g.length -= 1), (b = 0)),
                        (m = c = o),
                        (y = h = a),
                        (u = [o, a]),
                        (b = 2),
                        g.push(u),
                        (n += 2),
                        (s = 'L')
                    else if ('C' === s)
                      u || (u = [0, 0]),
                        (u[b++] = o),
                        (u[b++] = a),
                        l || (m = y = 0),
                        (u[b++] = m + 1 * _[n + 3]),
                        (u[b++] = y + 1 * _[n + 4]),
                        (u[b++] = m += 1 * _[n + 5]),
                        (u[b++] = y += 1 * _[n + 6]),
                        (n += 6)
                    else if ('S' === s)
                      'C' === p || 'S' === p
                        ? ((f = m - u[b - 4]),
                          (d = y - u[b - 3]),
                          (u[b++] = m + f),
                          (u[b++] = y + d))
                        : ((u[b++] = m), (u[b++] = y)),
                        (u[b++] = o),
                        (u[b++] = a),
                        l || (m = y = 0),
                        (u[b++] = m += 1 * _[n + 3]),
                        (u[b++] = y += 1 * _[n + 4]),
                        (n += 4)
                    else {
                      if ('L' !== s && 'Z' !== s) throw r
                      'Z' === s && ((o = c), (a = h), (u.closed = !0)),
                        ('L' === s ||
                          Math.abs(m - o) > 0.5 ||
                          Math.abs(y - a) > 0.5) &&
                          ((u[b++] = m + (o - m) / 3),
                          (u[b++] = y + (a - y) / 3),
                          (u[b++] = m + (2 * (o - m)) / 3),
                          (u[b++] = y + (2 * (a - y)) / 3),
                          (u[b++] = o),
                          (u[b++] = a),
                          'L' === s && (n += 2)),
                        (m = o),
                        (y = a)
                    }
                  return g[0]
                })(n)),
              4 === (l = y.length))
            )
              y.unshift(0, 0), y.push(1, 1), (l = 8)
            else if ((l - 2) % 6) throw r
            for (
              (0 == +y[0] && 1 == +y[l - 2]) ||
                (function (t, e, i) {
                  i || 0 === i || (i = Math.max(+t[t.length - 1], +t[1]))
                  var n,
                    o = -1 * +t[0],
                    r = -i,
                    a = t.length,
                    s = 1 / (+t[a - 2] + o),
                    l =
                      -e ||
                      (Math.abs(+t[a - 1] - +t[1]) < 0.01 * (+t[a - 2] - +t[0])
                        ? (function (t) {
                            var e,
                              i = t.length,
                              n = 999999999999
                            for (e = 1; e < i; e += 6) +t[e] < n && (n = +t[e])
                            return n
                          })(t) + r
                        : +t[a - 1] + r)
                  for (l = l ? 1 / l : -s, n = 0; n < a; n += 2)
                    (t[n] = (+t[n] + o) * s), (t[n + 1] = (+t[n + 1] + r) * l)
                })(y, s.height, s.originY),
                this.rawBezier = y,
                h = 2;
              h < l;
              h += 6
            )
              (u = { x: +y[h - 2], y: +y[h - 1] }),
                (c = { x: +y[h + 4], y: +y[h + 5] }),
                b.push(u, c),
                a(
                  u.x,
                  u.y,
                  +y[h],
                  +y[h + 1],
                  +y[h + 2],
                  +y[h + 3],
                  c.x,
                  c.y,
                  1 / (2e5 * m),
                  b,
                  b.length - 1
                )
            for (l = b.length, h = 0; h < l; h++)
              (d = b[h]),
                (_ = b[h - 1] || d),
                d.x > _.x || (_.y !== d.y && _.x === d.x) || d === _
                  ? ((_.cx = d.x - _.x),
                    (_.cy = d.y - _.y),
                    (_.n = d),
                    (_.nx = d.x),
                    this.fast &&
                      h > 1 &&
                      Math.abs(_.cy / _.cx - b[h - 2].cy / b[h - 2].cx) > 2 &&
                      (this.fast = !1),
                    _.cx < v &&
                      (_.cx
                        ? (v = _.cx)
                        : ((_.cx = 0.001),
                          h === l - 1 &&
                            ((_.x -= 0.001),
                            (v = Math.min(v, 0.001)),
                            (this.fast = !1)))))
                  : (b.splice(h--, 1), l--)
            if (
              ((l = (1 / v + 1) | 0),
              (this.l = l),
              (p = 1 / l),
              (f = 0),
              (d = b[0]),
              this.fast)
            ) {
              for (h = 0; h < l; h++)
                (g = h * p),
                  d.nx < g && (d = b[++f]),
                  (u = d.y + ((g - d.x) / d.cx) * d.cy),
                  (this.lookup[h] = { x: g, cx: p, y: u, cy: 0, nx: 9 }),
                  h && (this.lookup[h - 1].cy = u - this.lookup[h - 1].y)
              this.lookup[l - 1].cy = b[b.length - 1].y - u
            } else {
              for (h = 0; h < l; h++)
                d.nx < h * p && (d = b[++f]), (this.lookup[h] = d)
              f < b.length - 1 && (this.lookup[h - 1] = b[b.length - 2])
            }
            return (
              (this._calcEnd = 1 !== b[b.length - 1].y || 0 !== b[0].y), this
            )
          }),
          (u.getRatio = s),
          (u.getSVGData = function (t) {
            return l.getSVGData(this, t)
          }),
          (l.create = function (t, e, i) {
            return new l(t, e, i)
          }),
          (l.version = '0.2.2'),
          (l.bezierToPoints = a),
          (l.get = function (t) {
            return n.b.map[t]
          }),
          (l.getSVGData = function (t, e) {
            var i,
              o,
              r,
              a,
              s,
              l,
              u,
              c,
              h,
              p,
              f = 1e3,
              d = (e = e || {}).width || 100,
              _ = e.height || 100,
              g = e.x || 0,
              m = (e.y || 0) + _,
              y = e.path
            if (
              (e.invert && ((_ = -_), (m = 0)),
              (t = t.getRatio
                ? t
                : n.b.map[t] || console.log('No ease found: ', t)).rawBezier)
            ) {
              for (i = [], u = t.rawBezier.length, r = 0; r < u; r += 2)
                i.push(
                  (((g + t.rawBezier[r] * d) * f) | 0) / f +
                    ',' +
                    (((m + t.rawBezier[r + 1] * -_) * f) | 0) / f
                )
              ;(i[0] = 'M' + i[0]), (i[1] = 'C' + i[1])
            } else
              for (
                i = ['M' + g + ',' + m],
                  a = 1 / (u = Math.max(5, 200 * (e.precision || 1))),
                  c = 5 / (u += 2),
                  h = (((g + a * d) * f) | 0) / f,
                  o =
                    ((p = (((m + t.getRatio(a) * -_) * f) | 0) / f) - m) /
                    (h - g),
                  r = 2;
                r < u;
                r++
              )
                (s = (((g + r * a * d) * f) | 0) / f),
                  (l = (((m + t.getRatio(r * a) * -_) * f) | 0) / f),
                  (Math.abs((l - p) / (s - h) - o) > c || r === u - 1) &&
                    (i.push(h + ',' + p), (o = (l - p) / (s - h))),
                  (h = s),
                  (p = l)
            return (
              y &&
                ('string' == typeof y
                  ? document.querySelector(y)
                  : y
                ).setAttribute('d', i.join(' ')),
              i.join(' ')
            )
          }),
          l
        )
      },
      !0
    )
    var o = n.m.CustomEase
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ScrollableContent = void 0)
    var r = i(1),
      a = i(4),
      s = (function (t) {
        function e() {
          var e = t.call(this, 'scrollable-content') || this
          return (
            (e._hasScrollingEnded = !0),
            (e._isScrolledDown = !1),
            (e._atTopLimit = !1),
            (e._atBottomLimit = !1),
            (e._startScrollTop = 0),
            (e._isFirstScroll = !0),
            (e._scrollBarOffsetX = 50),
            (e._enabled = !0),
            (e.onScrollingSignal = new a.Signal()),
            (e.onScrollStartSignal = new a.Signal()),
            (e.onScrollEndSignal = new a.Signal()),
            (e.onDownScrollSignal = new a.Signal()),
            (e.onTopScrollSignal = new a.Signal()),
            e.initScrollBarMask(),
            e.initScrollBox(),
            e.initContentBox(),
            e.initListeners(),
            e
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'hasScrollableContent', {
            get: function () {
              return (
                this._contentBox.view.scrollHeight >
                this._scrollBox.view.offsetHeight
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'enabled', {
            get: function () {
              return this._enabled
            },
            set: function (t) {
              this._enabled = t
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'scrollBarOffsetX', {
            set: function (t) {
              ;(this._scrollBarOffsetX = t), this.updateStyles()
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'scrollHeight', {
            get: function () {
              return this._contentBox.view.scrollHeight
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'scrollTop', {
            get: function () {
              return this._scrollBox.view.scrollTop
            },
            set: function (t) {
              this._scrollBox.view.scrollTop = t
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'maxScrollTop', {
            get: function () {
              return this.calcMaxScrollTop()
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.addChild = function (t) {
            ;-1 == this.children.indexOf(t) && this.children.push(t),
              this._contentBox.view.appendChild(t.view)
          }),
          (e.prototype.addChildAt = function (t, e) {
            ;-1 != this.children.indexOf(t) &&
              this.children.splice(this.children.indexOf(t), 1),
              this.children.splice(e, 0, t),
              this._contentBox.view.insertBefore(
                t.view,
                this._contentBox.view.childNodes[e]
              )
          }),
          (e.prototype.removeChild = function (t) {
            var e = this.children.indexOf(t)
            ;-1 != e && this.children.splice(e, 1),
              t.view.parentElement && t.view.parentElement.removeChild(t.view)
          }),
          (e.prototype.removeAllChildren = function () {
            ;(this._contentBox.view.innerHTML = null),
              this.children.splice(0, -1)
          }),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this),
              this.onScrollingSignal.removeAll(),
              this.onScrollStartSignal.removeAll(),
              this.onScrollEndSignal.removeAll(),
              this._scrollBox.destroy()
          }),
          (e.prototype.updateStyles = function () {
            this._mask.applyStyle({
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }),
              this._scrollBox.applyStyle({
                overflow: 'hidden',
                width: 'calc(100% + ' + this._scrollBarOffsetX + 'px)',
                paddingRight: this._scrollBarOffsetX,
                boxSizing: 'border-box',
                height: '100%',
                maxHeight: this.view.style.maxHeight,
                overflowX: 'hidden',
                overflowY: 'scroll',
                webkitOverflowScrolling: 'touch',
              })
          }),
          (e.prototype.initScrollBarMask = function () {
            ;(this._mask = new r.UIComponent('scrollbar-mask')),
              this.view.appendChild(this._mask.view)
          }),
          (e.prototype.initScrollBox = function () {
            ;(this._scrollBox = new r.UIComponent('scroll-box')),
              this._mask.addChild(this._scrollBox)
          }),
          (e.prototype.initContentBox = function () {
            ;(this._contentBox = new r.UIComponent('content-box')),
              this._scrollBox.addChild(this._contentBox)
          }),
          (e.prototype.initListeners = function () {
            var t = this
            this._scrollBox.addNativeListener(
              'wheel',
              function (e) {
                return t.onMouseWheel(e)
              },
              !0
            ),
              this._scrollBox.addNativeListener(
                'scroll',
                function (e) {
                  return t.onMouseWheel(e)
                },
                !0
              ),
              this._scrollBox.addNativeListener('touchstart', function (e) {
                return t.onTouchStart(e)
              })
          }),
          (e.prototype.startEndSignalCheck = function () {
            var t = this
            return (
              clearTimeout(this._timeoutID),
              this._isFirstScroll
                ? ((this._isFirstScroll = !1),
                  (this._startScrollTop = this._scrollBox.view.scrollTop),
                  (this._hasScrollingEnded = !1),
                  this.updateScrollLimitFlags(),
                  void this.onScrollStartSignal.dispatch())
                : (this._hasReachedBottomOnce &&
                    this._atTopLimit &&
                    this._startScrollTop <= 0 &&
                    this._scrollBox.view.scrollTop <= 0) ||
                  (this._atBottomLimit &&
                    this._startScrollTop >= this.calcMaxScrollTop() &&
                    this._scrollBox.view.scrollTop >= this.calcMaxScrollTop())
                ? ((this._preventMouseWheelCheck = !0),
                  void this.onScrollEndSignal.dispatch())
                : void (this._timeoutID = setTimeout(function () {
                    ;(t._isFirstScroll = !0),
                      (t._hasScrollingEnded = !0),
                      t.updateScrollLimitFlags(),
                      t.onScrollEndSignal.dispatch()
                  }, 200))
            )
          }),
          (e.prototype.calcMaxScrollTop = function () {
            return (
              this._scrollBox.view.scrollHeight -
              this._scrollBox.view.offsetHeight
            )
          }),
          (e.prototype.updateScrollLimitFlags = function () {
            this._scrollBox &&
              this._scrollBox.view &&
              ((this._atTopLimit = !1),
              (this._atBottomLimit = !1),
              this._scrollBox.view.scrollTop <= 0 && (this._atTopLimit = !0),
              this._scrollBox.view.scrollTop >= this.calcMaxScrollTop() &&
                ((this._atBottomLimit = !0), (this._hasReachedBottomOnce = !0)))
          }),
          (e.prototype.onMouseWheel = function (t) {
            this._enabled
              ? this.hasScrollableContent &&
                (this._scrollBox.view.scrollTop > 3
                  ? (this._isScrolledDown || this.onDownScrollSignal.dispatch(),
                    (this._isScrolledDown = !0))
                  : (this._isScrolledDown && this.onTopScrollSignal.dispatch(),
                    (this._isScrolledDown = !1)),
                this._preventMouseWheelCheck || this.startEndSignalCheck(),
                this.onScrollingSignal.dispatch())
              : t.preventDefault()
          }),
          (e.prototype.onTouchStart = function (t) {
            this._enabled
              ? this.hasScrollableContent &&
                ((this._startScrollTop = this._scrollBox.view.scrollTop),
                this.updateScrollLimitFlags())
              : t.preventDefault()
          }),
          e
        )
      })(r.UIComponent)
    e.ScrollableContent = s
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ScrollButton = void 0)
    var r = i(2),
      a = i(5),
      s = i(46),
      l = i(11),
      u = i(1),
      c = i(4),
      h = i(3),
      p = (function (t) {
        function e(e) {
          var i = t.call(this, 'scroll-button') || this
          return (
            (i._gradientColor = e),
            (i.onClickSignal = new c.Signal()),
            i.initContentContainer(),
            i.initOverlayGradient(),
            i.initScrollIcon(),
            i.initListeners(),
            i
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'showGradient', {
            set: function (t) {
              a.TweenMax.to(this._overlayGradient.view, 0.5, {
                autoAlpha: t ? 1 : 0,
              })
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'showIcon', {
            set: function (t) {
              a.TweenMax.to(this._scrollIcon.view, 0.5, {
                autoAlpha: t ? 1 : 0,
              })
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.show = function (t) {
            void 0 === t && (t = !1),
              (this.interactive = !0),
              a.TweenMax.to(this.view, t ? 0 : 0.5, { autoAlpha: 1 })
          }),
          (e.prototype.hide = function (t) {
            void 0 === t && (t = !1),
              (this.interactive = !1),
              a.TweenMax.to(this.view, t ? 0 : 0.5, { autoAlpha: 0 })
          }),
          (e.prototype.updateStyles = function () {
            this._contentContainer.applyStyle({
              cursor: 'pointer',
              position: 'relative',
              height: 80 * r.Size.APP_SIZE_FACTOR + 80,
            }),
              this._overlayGradient.applyStyle({
                position: 'absolute',
                width: '100%',
                height: '100%',
              }),
              (this._scrollIcon.getElementByID('circle').style.fill =
                h.AppConfig.HIGHLIGHT_COLOR),
              this._scrollIcon.applyStyle({
                position: 'absolute',
                left: '50%',
                x: '-50%',
                width: 22 * r.Size.APP_SIZE_FACTOR + 22,
                transformOrigin: '51% 45%',
                bottom: 0.5 * r.Size.CONTENT_MARGIN,
              })
          }),
          (e.prototype.initContentContainer = function () {
            ;(this._contentContainer = new u.UIComponent('content-container')),
              this.addChild(this._contentContainer)
          }),
          (e.prototype.initOverlayGradient = function () {
            ;(this._overlayGradient = new s.Gradient(this._gradientColor)),
              this._contentContainer.addChild(this._overlayGradient)
          }),
          (e.prototype.initScrollIcon = function () {
            ;(this._scrollIcon = new l.SVGComponent(i(200))),
              this._scrollIcon.clearSizeDefinition(),
              this._contentContainer.addChild(this._scrollIcon)
          }),
          (e.prototype.initListeners = function () {
            var t = this
            this._contentContainer.addNativeListener('mouseover', function () {
              return t.onMouseOver()
            }),
              this._contentContainer.addNativeListener('mouseout', function () {
                return t.onMouseOut()
              }),
              this._contentContainer.addNativeListener('click', function () {
                return t.onClicked()
              })
          }),
          (e.prototype.onMouseOver = function () {
            a.TweenMax.to(this._scrollIcon.transform, 0.3, {
              scale: 1.1,
              ease: a.Power4.easeOut,
            })
          }),
          (e.prototype.onMouseOut = function () {
            a.TweenMax.to(this._scrollIcon.transform, 0.3, {
              scale: 1,
              ease: a.Power4.easeOut,
            })
          }),
          (e.prototype.onClicked = function () {
            this.onClickSignal.dispatch()
          }),
          e
        )
      })(u.UIComponent)
    e.ScrollButton = p
  },
  function (t, e) {
    t.exports =
      '<svg width="44px" height="43px" viewBox="0 0 44 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>arrow-down-icon</title><desc>Created with Sketch.</desc><g id="__WZoeUKR__arrow-down-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M0.75,21.5474178 C0.75,33.2 10.3045113,42.7615023 21.9840226,42.7615023 C33.6475564,42.7615023 43.2180451,33.2159624 43.2180451,21.5474178 C43.2020677,9.87887324 33.6475564,0.333333333 21.9840226,0.333333333 C10.3045113,0.333333333 0.75,9.87887324 0.75,21.5474178 Z" id="__WZoeUKR__circle" fill="#F39500" fill-rule="nonzero"></path><polygon id="__WZoeUKR__arrow" fill="#FFFFFF" fill-rule="nonzero" transform="translate(21.761379, 19.344712) rotate(-45.000000) translate(-21.761379, -19.344712) " points="29.5505925 27.1279399 14.0094795 27.1279399 13.9721654 11.5614846 18.2221654 11.5614846 18.2221654 22.865968 29.5346151 22.865968 29.5346151 27.1279399"></polygon></g></svg>'
  },
  function (t, e) {
    t.exports =
      '<svg width="259px" height="173px" viewBox="0 0 259 173" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>quote-icon</title><desc>Created with Sketch.</desc><g id="__fGw46cM__quote-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon id="__fGw46cM__dot" fill="#F39500" fill-rule="nonzero" points="0 0.00203529412 115.185098 0.00203529412 115.185098 114.960535 57.592549 172.437241 57.592549 114.960535 0 114.960535"></polygon><polygon id="__fGw46cM__dot" fill="#F39500" fill-rule="nonzero" points="143.469529 0.00203529412 258.649529 0.00203529412 258.649529 114.960535 201.062078 172.437241 201.062078 114.960535 143.469529 114.960535"></polygon></g></svg>'
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.YoutubeContent = void 0)
    var r = i(29),
      a = i(2),
      s = i(6),
      l = i(203),
      u = i(5),
      c = i(3),
      h = i(24),
      p = i(30),
      f = i(205),
      d = i(1),
      _ = i(23),
      g = (function (t) {
        function e(e) {
          var i =
            t.call(this, r.TopicItemType.YOUTUBE, { useExpandButton: !1 }) ||
            this
          return (
            (i._data = e),
            i.initPlayButton(),
            i.initCoverImage(),
            i.initYoutubePlayer(),
            i
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'selected', {
            set: function (t) {
              ;(this._selected = t),
                (this._playButton.interactive = t),
                t && this._youtubePlayer.stop()
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.expand = function (e) {
            var i = this
            t.prototype.expand.call(this, e),
              (this._playButton.interactive = !e),
              u.TweenMax.to(
                this._playButton.view,
                c.AppConfig.TOPIC_ITEM_CONTENT_EXPAND_DURATION,
                {
                  autoAlpha: e ? 0 : 1,
                  scale: e ? 1.5 : 1,
                  x: '-50%',
                  y: '-50%',
                  ease: h.Ease.Power5easeInOut,
                }
              ),
              u.TweenMax.to(
                this._coverImage.view,
                c.AppConfig.TOPIC_ITEM_CONTENT_EXPAND_DURATION,
                {
                  autoAlpha: e ? 0 : 1,
                  scale: e ? 1.5 : 1,
                  ease: h.Ease.Power5easeInOut,
                  onComplete: function () {
                    e && i._youtubePlayer.play()
                  },
                }
              ),
              e || this._youtubePlayer.stop()
          }),
          (e.prototype.updateStyles = function () {
            t.prototype.updateStyles.call(this),
              this.updateSizeValues(),
              this.applyStyle({
                width: this._currentWidth,
                height: this._currentHeight,
                backgroundColor: 'transparent',
              }),
              this._youtubePlayer.applyStyle({
                position: 'absolute',
                top: this.calcCloseButtonHeightExtension(),
                width: '100%',
                height:
                  'calc(100% - ' +
                  this.calcCloseButtonHeightExtension() +
                  'px)',
                backgroundColor: s.Color.BLACK,
              }),
              this._coverImage.applyStyle({
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                y: this._expanded ? this._expandedHeight : 0,
              }),
              this._playButton.applyStyle({
                position: 'absolute',
                top: '50%',
                y: '-50%',
                left: '50%',
                x: '-50%',
              }),
              this._closeButton.applyStyle({
                position: 'absolute',
                top: 0,
                right: 0,
              })
          }),
          (e.prototype.initYoutubePlayer = function () {
            var t = this
            ;(this._youtubePlayer = new f.YoutubeVideo(this._data.youtubeID)),
              this._youtubePlayer.onVideoPlayingSignal.add(function () {
                return t.onVideoPlaying()
              }),
              this._youtubePlayer.onVideoCompletedSignal.add(function () {
                return t.onVideoCompleted()
              }),
              this.addChildAt(this._youtubePlayer, 0)
          }),
          (e.prototype.initCoverImage = function () {
            ;(this._coverImage = new d.UIComponent('cover-image')),
              this._coverImage.applyStyle({
                backgroundImage: 'url(' + this._data.coverURL + ')',
              }),
              this.addChildAt(this._coverImage, 0)
          }),
          (e.prototype.initPlayButton = function () {
            var t = this
            ;(this._playButton = new l.YoutubePlayButton()),
              this._playButton.onClickSignal.add(function () {
                return t.onPlayButtonClicked()
              }),
              this.addChildAt(this._playButton, 0)
          }),
          (e.prototype.updateSizeValues = function () {
            ;(this._standardWidth = 400 * a.Size.APP_SIZE_FACTOR + 250),
              (this._standardHeight = this._standardWidth / e.SIZE_RATIO),
              (this._expandedWidth =
                a.Size.APP_WIDTH - 2 * a.Size.CONTENT_MARGIN),
              (this._expandedHeight =
                this._expandedWidth / e.SIZE_RATIO +
                this.calcCloseButtonHeightExtension()),
              this._expandedHeight >
                a.Size.APP_HEIGHT - a.Size.CONTENT_MARGIN &&
                ((this._expandedHeight =
                  a.Size.APP_HEIGHT -
                  a.Size.CONTENT_MARGIN -
                  this.calcCloseButtonHeightExtension()),
                (this._expandedWidth = this._expandedHeight * e.SIZE_RATIO)),
              (this._currentWidth = this._expanded
                ? this._expandedWidth
                : this._standardWidth),
              (this._currentHeight = this._expanded
                ? this._expandedHeight
                : this._standardHeight)
          }),
          (e.prototype.calcCloseButtonHeightExtension = function () {
            return 1.5 * a.Size.CLOSE_ICON_SIZE
          }),
          (e.prototype.onPlayButtonClicked = function () {
            this._selected &&
              !this._expanded &&
              ('true' === _.URLUtils.getUrlParam('ytExt')
                ? this.onExternalLinkSignal.dispatch(this._data.youtubeURL)
                : this.expand(!0))
          }),
          (e.prototype.onVideoCompleted = function () {
            this.expand(!1)
          }),
          (e.prototype.onVideoPlaying = function () {
            this._expanded || this._youtubePlayer.stop()
          }),
          (e.SIZE_RATIO = 16 / 9),
          e
        )
      })(p.TopicItemExpandableContent)
    e.YoutubeContent = g
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.YoutubePlayButton = void 0)
    var r = i(2),
      a = i(5),
      s = i(1),
      l = i(11),
      u = i(4),
      c = (function (t) {
        function e() {
          var e = t.call(this, 'youtube-play-button') || this
          return (
            (e.onClickSignal = new u.Signal()),
            e.initIcon(),
            e.initListeners(),
            (e.interactive = !0),
            e
          )
        }
        return (
          o(e, t),
          (e.prototype.updateStyles = function () {
            this._youtubeIcon.applyStyle({
              cursor: 'pointer',
              width: 40 * r.Size.APP_SIZE_FACTOR + 40,
            })
          }),
          (e.prototype.initIcon = function () {
            ;(this._youtubeIcon = new l.SVGComponent(i(204), 'youtube-icon')),
              this._youtubeIcon.clearSizeDefinition(),
              this.addChild(this._youtubeIcon)
          }),
          (e.prototype.initListeners = function () {
            var t = this
            this._youtubeIcon.addNativeListener('mouseover', function () {
              return t.onMouseOver()
            }),
              this._youtubeIcon.addNativeListener('mouseout', function () {
                return t.onMouseOut()
              }),
              this._youtubeIcon.addNativeListener('click', function () {
                return t.onClicked()
              })
          }),
          (e.prototype.onMouseOver = function () {
            this.interactive &&
              a.TweenMax.to(this._youtubeIcon.transform, 0.3, {
                scale: 1.1,
                ease: a.Power4.easeOut,
              })
          }),
          (e.prototype.onMouseOut = function () {
            this.interactive &&
              a.TweenMax.to(this._youtubeIcon.transform, 0.3, {
                scale: 1,
                ease: a.Power4.easeOut,
              })
          }),
          (e.prototype.onClicked = function () {
            this.interactive && this.onClickSignal.dispatch()
          }),
          e
        )
      })(s.UIComponent)
    e.YoutubePlayButton = c
  },
  function (t, e) {
    t.exports =
      '<svg width="191px" height="133px" viewBox="0 0 191 133" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>youtube-icon</title><desc>Created with Sketch.</desc><g id="__2F4dFCw__Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="__2F4dFCw__Tile-Youtube_S-Copy" transform="translate(-227.000000, -111.000000)"><g id="__2F4dFCw__Tile-Youtube"><g id="__2F4dFCw__youtube-icon" transform="translate(227.000000, 111.000000)"><path d="M186.078519,20.84 C183.897778,12.6859259 177.474074,6.26222222 169.308148,4.06962963 C154.528889,0.111111111 95.2222222,0.111111111 95.2222222,0.111111111 C95.2222222,0.111111111 35.9274074,0.111111111 21.1362963,4.06962963 C12.9822222,6.26222222 6.55851852,12.6859259 4.37777778,20.84 C0.407407407,35.6311111 0.407407407,66.4814815 0.407407407,66.4814815 C0.407407407,66.4814815 0.407407407,97.3318519 4.37777778,112.122963 C6.55851852,120.288889 12.9822222,126.712593 21.1362963,128.893333 C35.9274074,132.851852 95.2222222,132.851852 95.2222222,132.851852 C95.2222222,132.851852 154.528889,132.851852 169.308148,128.893333 C177.474074,126.712593 183.897778,120.288889 186.078519,112.122963 C190.037037,97.3318519 190.037037,66.4814815 190.037037,66.4814815 C190.037037,66.4814815 190.037037,35.6311111 186.078519,20.84" id="__2F4dFCw__Fill-1" fill="#FF0000"></path><polygon id="__2F4dFCw__Fill-4" fill="#FFFFFF" points="76.264 94.9259259 125.532148 66.4814815 76.264 38.037037"></polygon></g></g></g></g></svg>'
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.YoutubeVideo = void 0)
    var r = i(1),
      a = i(4),
      s = (function (t) {
        function e(i, n) {
          void 0 === n && (n = e.DEFAULT_PLAYER_VARS)
          var o = t.call(this, 'youtube-video') || this
          return (
            (o._youtubeID = i),
            (o.onVideoCompletedSignal = new a.Signal()),
            (o.onVideoPlayingSignal = new a.Signal()),
            (o.onVideoPausedSignal = new a.Signal()),
            (o.onYTPAPIAvailableSignal = new a.Signal()),
            (o.onYTPAPIDestroyedSignal = new a.Signal()),
            (o._playerVars = Object.assign(e.DEFAULT_PLAYER_VARS, n)),
            o.initIFrameContainer(),
            o
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'ytpAPI', {
            get: function () {
              return this._ytpAPI
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this),
              this.onVideoCompletedSignal.removeAll(),
              this.onVideoPlayingSignal.removeAll(),
              this.onVideoPausedSignal.removeAll(),
              (window.onYouTubeIframeAPIReady = null),
              this.destroyYTPlayer()
          }),
          (e.prototype.updateStyles = function () {
            this._iframeContainer.applyStyle({
              position: 'relative',
              top: 0,
              width: '100%',
              height: '100%',
              fontSize: 0,
              lineHeight: 0,
              backgroundColor: 'black',
            })
          }),
          (e.prototype.load = function () {
            this.loadYouTubeAPI()
          }),
          (e.prototype.play = function () {
            this.loadYouTubeAPI(!0)
          }),
          (e.prototype.stop = function () {
            this.stopVideo()
          }),
          (e.prototype.initIFrameContainer = function () {
            ;(this._iframeContainer = new r.UIComponent('yt-iframe-container')),
              this.addChild(this._iframeContainer)
          }),
          (e.prototype.loadYouTubeAPI = function (t) {
            var e = this
            if ((void 0 === t && (t = !1), window.YT && window.YT.Player))
              this.initYTElement(t)
            else if (document.getElementById('yt-iframe-api'))
              this.initYTElement(t)
            else {
              var i = document.createElement('script')
              ;(i.src = 'https://www.youtube.com/iframe_api'),
                (i.id = 'yt-iframe-api'),
                (window.onYouTubeIframeAPIReady = function () {
                  e.initYTElement(t)
                }),
                document.body.appendChild(i)
            }
          }),
          (e.prototype.initYTElement = function (t) {
            var e = this
            void 0 === t && (t = !1),
              this._ytpAPI && this.destroyYTPlayer(),
              this._iframeContainer.removeAllChildren()
            var i = new r.UIComponent('yt-player')
            ;(i.view.id =
              'youtube_' +
              this._youtubeID +
              '_' +
              Math.random().toString().replace('.', '')),
              i.onAddedToStageSignal.addOnce(function () {
                e.initYTPlayer(t)
              }),
              this._iframeContainer.addChild(i)
          }),
          (e.prototype.initYTPlayer = function (t) {
            var e = this
            void 0 === t && (t = !1),
              (this._ytpAPI = new window.YT.Player(
                this._iframeContainer.children[0].view.id,
                {
                  videoId: this._youtubeID,
                  width: '100%',
                  height: '100%',
                  playerVars: this._playerVars,
                  events: {
                    onReady: function () {
                      return e.onPlayerReady(t)
                    },
                    onStateChange: function () {
                      return e.onPlayerStateChanged()
                    },
                  },
                }
              ))
          }),
          (e.prototype.playVideo = function () {
            this._ytpAPI && this._ytpAPI.playVideo()
          }),
          (e.prototype.stopVideo = function () {
            this._ytpAPI && this._ytpAPI.pauseVideo && this._ytpAPI.pauseVideo()
          }),
          (e.prototype.destroyYTPlayer = function () {
            if (this._ytpAPI) {
              try {
                this._ytpAPI.stopVideo(),
                  this._ytpAPI.clearVideo(),
                  this._ytpAPI.destroy()
              } catch (t) {}
              this._iframeContainer.view &&
                this._iframeContainer.removeAllChildren(),
                (this._ytpAPI = null),
                this.onYTPAPIDestroyedSignal.dispatch()
            }
          }),
          (e.prototype.onPlayerReady = function (t) {
            ;(this._playerVars.autoplay || t) && this.playVideo(),
              this.onYTPAPIAvailableSignal.dispatch()
          }),
          (e.prototype.onPlayerStateChanged = function () {
            switch (this._ytpAPI.getPlayerState()) {
              case 0:
                this.onVideoCompletedSignal.dispatch()
                break
              case 1:
                this.onVideoPlayingSignal.dispatch()
                break
              case 2:
                this.onVideoPausedSignal.dispatch()
            }
          }),
          (e.DEFAULT_PLAYER_VARS = {
            autoplay: 0,
            controls: 1,
            rel: 0,
            fs: 1,
            disablekb: 0,
            showinfo: 0,
            modestbranding: 1,
            playsinline: 1,
          }),
          e
        )
      })(r.UIComponent)
    e.YoutubeVideo = s
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ArticleContentData = void 0)
    var n = i(3),
      o = i(31),
      r = (function () {
        function t(t) {
          ;(this._data = t),
            (this._htmlModel = document.createElement('div')),
            (this._htmlModel.innerHTML = this._data.rawJSON.body)
        }
        return (
          Object.defineProperty(t.prototype, 'mainImageURL', {
            get: function () {
              var t = this._htmlModel.getElementsByClassName(
                'article__figure__placeholder'
              )[0]
              if (t)
                return o.FlocklerUtils.createResizedImageURL(
                  t.getElementsByTagName('img')[0].src,
                  700,
                  0
                )
              var e = this._data.rawJSON.cover_url
              return e
                ? o.FlocklerUtils.createResizedImageURL(e, 700, 0)
                : void 0
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'title', {
            get: function () {
              return this._data.rawJSON.title
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'abstract', {
            get: function () {
              var t = this._htmlModel.getElementsByClassName(
                'article__lead-paragraph'
              )[0]
              return t
                ? t.innerHTML
                : (n.AppConfig.SHOW_EDITOR_WARNINGS &&
                    console.warn(
                      "WARNING: Missing Abstract for '" +
                        this.title +
                        "'. Use 'lead paragraph' to define abstract"
                    ),
                  '')
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'useDarkMode', {
            get: function () {
              return (
                1 ==
                this._data.rawJSON.tags.filter(function (t) {
                  return 'darkmode' == t.toLowerCase()
                }).length
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'richtext', {
            get: function () {
              var t = document.createElement('div')
              t.innerHTML = this._data.rawJSON.body
              var e = t.getElementsByClassName('article__figure')[0]
              e && e.remove()
              var i = t.getElementsByClassName('article__lead-paragraph')[0]
              return i && i.remove(), t.innerHTML
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        )
      })()
    e.ArticleContentData = r
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.QuoteContentData = void 0)
    var n = i(31),
      o = (function () {
        function t(t) {
          ;(this._data = t),
            (this._htmlModel = document.createElement('div')),
            (this._htmlModel.innerHTML = this._data.rawJSON.body)
        }
        return (
          Object.defineProperty(t.prototype, 'quote', {
            get: function () {
              return this._htmlModel.getElementsByTagName('blockquote')[0]
                .innerHTML
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'author', {
            get: function () {
              return this._data.rawJSON.title.split(' | ')[0]
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'position', {
            get: function () {
              return this._data.rawJSON.title.split(' | ')[1]
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'useDarkMode', {
            get: function () {
              return (
                1 ==
                this._data.rawJSON.tags.filter(function (t) {
                  return 'darkmode' == t.toLowerCase()
                }).length
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'portraitURL', {
            get: function () {
              return n.FlocklerUtils.createResizedImageURL(
                this._htmlModel.getElementsByTagName('img')[0].src,
                300,
                0
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        )
      })()
    e.QuoteContentData = o
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.DownloadContentData = void 0)
    var n = i(31),
      o = (function () {
        function t(t) {
          ;(this._data = t),
            (this._htmlModel = document.createElement('div')),
            (this._htmlModel.innerHTML = this._data.rawJSON.body)
        }
        return (
          Object.defineProperty(t.prototype, 'imageURL', {
            get: function () {
              return n.FlocklerUtils.createResizedImageURL(
                this._htmlModel.getElementsByTagName('img')[0].src,
                700,
                0
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'downloadURL', {
            get: function () {
              return this._htmlModel.getElementsByTagName('a')[0].href
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'downloadFilename', {
            get: function () {
              var t = this.downloadURL.split('/')
              return t[t.length - 1]
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'title', {
            get: function () {
              return this._data.rawJSON.title
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        )
      })()
    e.DownloadContentData = o
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.YoutubeContentData = void 0)
    var n = i(32),
      o = (function () {
        function t(t) {
          this._data = t
        }
        return (
          Object.defineProperty(t.prototype, 'youtubeID', {
            get: function () {
              return this._data.rawJSON.url.split('?v=')[1]
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'coverURL', {
            get: function () {
              return n.MediaUtils.getMediaURL(this._data.rawJSON.cover_url)
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'youtubeURL', {
            get: function () {
              return this._data.rawJSON.url
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        )
      })()
    e.YoutubeContentData = o
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TwitterContentData = void 0)
    var r = i(47),
      a = i(32),
      s = (function (t) {
        function e(e) {
          return t.call(this, e) || this
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'logoURL', {
            get: function () {
              return i(211)
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'message', {
            get: function () {
              var t = document.createElement('div')
              return (
                (t.innerHTML = this._data.rawJSON.attachments.tweet.oembed),
                t.getElementsByTagName('p')[0].innerHTML
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'profileImageURL', {
            get: function () {
              return a.MediaUtils.getMediaURL(
                this._data.rawJSON.attachments.tweet.profile_image_url
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'profileName', {
            get: function () {
              return this._data.rawJSON.attachments.tweet.name
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'imageURL', {
            get: function () {
              return a.MediaUtils.getMediaURL(
                this._data.rawJSON.attachments.tweet.media_url
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'timeSincePublish', {
            get: function () {
              return this.calcTimeSincePublish(
                this._data.rawJSON.attachments.tweet.created_at
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'hasVideo', {
            get: function () {
              return (
                -1 !=
                this._data.rawJSON.attachments.tweet.media_url.indexOf(
                  'video_thumb'
                )
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'postURL', {
            get: function () {
              return this._data.rawJSON.attachments.tweet.url
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        )
      })(r.GenericPostContentData)
    e.TwitterContentData = s
  },
  function (t, e) {
    t.exports =
      '<svg width="70px" height="70px" viewBox="0 0 70 70" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>twitter-icon</title><desc>Created with Sketch.</desc><defs><linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="__1jXAZbA__linearGradient-1"><stop stop-color="#31ACEE" offset="0%"></stop><stop stop-color="#248EEA" offset="100%"></stop></linearGradient></defs><g id="__1jXAZbA__Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="__1jXAZbA__Tile_Twitter3-Copy" transform="translate(-129.000000, -10.000000)" fill-rule="nonzero"><g id="__1jXAZbA__twitter-icon" transform="translate(129.000000, 10.000000)"><path d="M70,13.125017 L70,56.874983 C70,60.4904425 68.716362,63.5818102 66.1490861,66.1490861 C63.5818102,68.716362 60.4904425,70 56.874983,70 L13.125017,70 C9.50955747,70 6.41818975,68.716362 3.85091385,66.1490861 C1.28363795,63.5818102 2.27373675e-13,60.4904425 2.27373675e-13,56.874983 L2.27373675e-13,13.125017 C2.27373675e-13,9.50955747 1.28363795,6.41818975 3.85091385,3.85091385 C6.41818975,1.28363795 9.50955747,0 13.125017,0 L56.874983,0 C60.4904425,0 63.5818102,1.28363795 66.1490861,3.85091385 C68.716362,6.41818975 70,9.50955747 70,13.125017 Z" id="__1jXAZbA__Path" fill="url(#__1jXAZbA__linearGradient-1)"></path><path d="M58,21.4759724 C56.2864589,22.2371907 54.4352222,22.7548185 52.4462899,23.0288558 C54.5270131,21.8109069 55.9498646,20.0296527 56.7148442,17.6850932 C54.7259118,18.842145 52.6757856,19.6185876 50.5644653,20.0144211 C48.6979209,18.004807 46.357105,17 43.5420174,17 C40.8799147,17 38.607942,17.9363018 36.7260991,19.8089054 C34.8442563,21.681509 33.9033348,23.9423271 33.9033348,26.5913597 C33.9033348,27.4743724 33.9798322,28.2051412 34.1328271,28.7836662 C30.1855594,28.5705242 26.483086,27.5809406 23.0254068,25.8149152 C19.5677275,24.0488899 16.6302246,21.6891107 14.2128978,18.7355777 C13.3255284,20.2580143 12.8818438,21.8717931 12.8818438,23.576914 C12.8818438,27.0480639 14.2740982,29.712329 17.0586071,31.5697092 C15.6204572,31.5392604 14.0905071,31.143427 12.468757,30.3822088 L12.468757,30.4735549 C12.468757,32.757208 13.2337311,34.7896572 14.7636793,36.5709023 C16.2936275,38.3521529 18.1754612,39.455921 20.4091804,39.8822067 C19.521811,40.1257972 18.7415375,40.2475924 18.0683599,40.2475924 C17.6705734,40.2475924 17.0738937,40.186695 16.2783208,40.0649001 C16.9208978,41.9831738 18.0607088,43.5665059 19.6977538,44.8148961 C21.3347969,46.0632937 23.1936829,46.7027168 25.2744117,46.7331653 C21.7249415,49.4735564 17.7317784,50.843752 13.2949223,50.843752 C12.4993494,50.843752 11.7343753,50.7980789 11,50.7067328 C15.528647,53.5689109 20.4550732,55 25.7792785,55 C29.2063607,55 32.4192457,54.4595353 35.4179336,53.3786059 C38.4166214,52.2976765 40.9869331,50.851364 43.1288686,49.0396685 C45.2708041,47.2279694 47.1143916,45.1422293 48.659631,42.7824483 C50.2048777,40.4226782 51.352338,37.9563353 52.1020117,35.3834196 C52.8516855,32.810504 53.2265224,30.2452 53.2265224,27.6875077 C53.2265224,27.1394313 53.2112229,26.7283736 53.1806239,26.4543345 C55.1083623,25.0841426 56.7148048,23.4246846 57.9999515,21.4759604 L58,21.4759724 Z" id="__1jXAZbA__Path" fill="#FFFFFF"></path></g></g></g></svg>'
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.FacebookContentData = void 0)
    var r = i(47),
      a = i(32),
      s = i(33),
      l = (function (t) {
        function e(e) {
          return t.call(this, e) || this
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'logoURL', {
            get: function () {
              return i(217)
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'message', {
            get: function () {
              return this.parseHashTags(
                this._data.rawJSON.attachments.facebook_post.message
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'profileImageURL', {
            get: function () {
              return ''
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'profileName', {
            get: function () {
              return this._data.rawJSON.attachments.facebook_post.from_name
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'imageURL', {
            get: function () {
              return a.MediaUtils.getMediaURL(
                this._data.rawJSON.attachments.facebook_post.picture
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'timeSincePublish', {
            get: function () {
              return ''
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'postURL', {
            get: function () {
              return this._data.rawJSON.attachments.facebook_post.link
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.parseHashTags = function (t) {
            return s.LinkUtils.hashTagLinkify(
              t,
              'https://www.facebook.com/hashtag/'
            )
          }),
          e
        )
      })(r.GenericPostContentData)
    e.FacebookContentData = l
  },
  function (t, e, i) {
    t.exports = i(214)
  },
  function (t, e, i) {
    'use strict'
    function n(t) {
      if (t && t.__esModule) return t
      var e = Object.create(null)
      return (
        t &&
          Object.keys(t).forEach(function (i) {
            if ('default' !== i) {
              var n = Object.getOwnPropertyDescriptor(t, i)
              Object.defineProperty(
                e,
                i,
                n.get
                  ? n
                  : {
                      enumerable: !0,
                      get: function () {
                        return t[i]
                      },
                    }
              )
            }
          }),
        (e.default = t),
        Object.freeze(e)
      )
    }
    var o = n(i(215)),
      r = { nbsp: ' ' },
      a = /^#[xX]([A-Fa-f0-9]+)$/,
      s = /^#([0-9]+)$/,
      l = /^([A-Za-z0-9]+)$/,
      u = (function () {
        function t(t) {
          this.named = t
        }
        return (
          (t.prototype.parse = function (t) {
            if (t) {
              var e = t.match(a)
              return e
                ? '&#x' + e[1] + ';'
                : (e = t.match(s))
                ? '&#' + e[1] + ';'
                : (e = t.match(l))
                ? this.named[e[1]] || '&' + e[1] + ';'
                : void 0
            }
          }),
          t
        )
      })(),
      c = /[\t\n\f ]/,
      h = /[A-Za-z]/,
      p = /\r\n?/g
    function f(t) {
      return c.test(t)
    }
    function d(t) {
      return h.test(t)
    }
    var _ = (function () {
        function t(t, e, i) {
          void 0 === i && (i = 'precompile'),
            (this.delegate = t),
            (this.entityParser = e),
            (this.mode = i),
            (this.state = 'beforeData'),
            (this.line = -1),
            (this.column = -1),
            (this.input = ''),
            (this.index = -1),
            (this.tagNameBuffer = ''),
            (this.states = {
              beforeData: function () {
                var t = this.peek()
                if ('<' !== t || this.isIgnoredEndTag()) {
                  if ('precompile' === this.mode && '\n' === t) {
                    var e = this.tagNameBuffer.toLowerCase()
                    ;('pre' !== e && 'textarea' !== e) || this.consume()
                  }
                  this.transitionTo('data'), this.delegate.beginData()
                } else
                  this.transitionTo('tagOpen'),
                    this.markTagStart(),
                    this.consume()
              },
              data: function () {
                var t = this.peek(),
                  e = this.tagNameBuffer
                '<' !== t || this.isIgnoredEndTag()
                  ? '&' === t && 'script' !== e && 'style' !== e
                    ? (this.consume(),
                      this.delegate.appendToData(this.consumeCharRef() || '&'))
                    : (this.consume(), this.delegate.appendToData(t))
                  : (this.delegate.finishData(),
                    this.transitionTo('tagOpen'),
                    this.markTagStart(),
                    this.consume())
              },
              tagOpen: function () {
                var t = this.consume()
                '!' === t
                  ? this.transitionTo('markupDeclarationOpen')
                  : '/' === t
                  ? this.transitionTo('endTagOpen')
                  : ('@' === t || ':' === t || d(t)) &&
                    (this.transitionTo('tagName'),
                    (this.tagNameBuffer = ''),
                    this.delegate.beginStartTag(),
                    this.appendToTagName(t))
              },
              markupDeclarationOpen: function () {
                var t = this.consume()
                '-' === t && '-' === this.peek()
                  ? (this.consume(),
                    this.transitionTo('commentStart'),
                    this.delegate.beginComment())
                  : 'DOCTYPE' ===
                      t.toUpperCase() +
                        this.input
                          .substring(this.index, this.index + 6)
                          .toUpperCase() &&
                    (this.consume(),
                    this.consume(),
                    this.consume(),
                    this.consume(),
                    this.consume(),
                    this.consume(),
                    this.transitionTo('doctype'),
                    this.delegate.beginDoctype && this.delegate.beginDoctype())
              },
              doctype: function () {
                f(this.consume()) && this.transitionTo('beforeDoctypeName')
              },
              beforeDoctypeName: function () {
                var t = this.consume()
                f(t) ||
                  (this.transitionTo('doctypeName'),
                  this.delegate.appendToDoctypeName &&
                    this.delegate.appendToDoctypeName(t.toLowerCase()))
              },
              doctypeName: function () {
                var t = this.consume()
                f(t)
                  ? this.transitionTo('afterDoctypeName')
                  : '>' === t
                  ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                    this.transitionTo('beforeData'))
                  : this.delegate.appendToDoctypeName &&
                    this.delegate.appendToDoctypeName(t.toLowerCase())
              },
              afterDoctypeName: function () {
                var t = this.consume()
                if (!f(t))
                  if ('>' === t)
                    this.delegate.endDoctype && this.delegate.endDoctype(),
                      this.transitionTo('beforeData')
                  else {
                    var e =
                        t.toUpperCase() +
                        this.input
                          .substring(this.index, this.index + 5)
                          .toUpperCase(),
                      i = 'PUBLIC' === e.toUpperCase(),
                      n = 'SYSTEM' === e.toUpperCase()
                    ;(i || n) &&
                      (this.consume(),
                      this.consume(),
                      this.consume(),
                      this.consume(),
                      this.consume(),
                      this.consume()),
                      i
                        ? this.transitionTo('afterDoctypePublicKeyword')
                        : n && this.transitionTo('afterDoctypeSystemKeyword')
                  }
              },
              afterDoctypePublicKeyword: function () {
                var t = this.peek()
                f(t)
                  ? (this.transitionTo('beforeDoctypePublicIdentifier'),
                    this.consume())
                  : '"' === t
                  ? (this.transitionTo('doctypePublicIdentifierDoubleQuoted'),
                    this.consume())
                  : "'" === t
                  ? (this.transitionTo('doctypePublicIdentifierSingleQuoted'),
                    this.consume())
                  : '>' === t &&
                    (this.consume(),
                    this.delegate.endDoctype && this.delegate.endDoctype(),
                    this.transitionTo('beforeData'))
              },
              doctypePublicIdentifierDoubleQuoted: function () {
                var t = this.consume()
                '"' === t
                  ? this.transitionTo('afterDoctypePublicIdentifier')
                  : '>' === t
                  ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                    this.transitionTo('beforeData'))
                  : this.delegate.appendToDoctypePublicIdentifier &&
                    this.delegate.appendToDoctypePublicIdentifier(t)
              },
              doctypePublicIdentifierSingleQuoted: function () {
                var t = this.consume()
                "'" === t
                  ? this.transitionTo('afterDoctypePublicIdentifier')
                  : '>' === t
                  ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                    this.transitionTo('beforeData'))
                  : this.delegate.appendToDoctypePublicIdentifier &&
                    this.delegate.appendToDoctypePublicIdentifier(t)
              },
              afterDoctypePublicIdentifier: function () {
                var t = this.consume()
                f(t)
                  ? this.transitionTo(
                      'betweenDoctypePublicAndSystemIdentifiers'
                    )
                  : '>' === t
                  ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                    this.transitionTo('beforeData'))
                  : '"' === t
                  ? this.transitionTo('doctypeSystemIdentifierDoubleQuoted')
                  : "'" === t &&
                    this.transitionTo('doctypeSystemIdentifierSingleQuoted')
              },
              betweenDoctypePublicAndSystemIdentifiers: function () {
                var t = this.consume()
                f(t) ||
                  ('>' === t
                    ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                      this.transitionTo('beforeData'))
                    : '"' === t
                    ? this.transitionTo('doctypeSystemIdentifierDoubleQuoted')
                    : "'" === t &&
                      this.transitionTo('doctypeSystemIdentifierSingleQuoted'))
              },
              doctypeSystemIdentifierDoubleQuoted: function () {
                var t = this.consume()
                '"' === t
                  ? this.transitionTo('afterDoctypeSystemIdentifier')
                  : '>' === t
                  ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                    this.transitionTo('beforeData'))
                  : this.delegate.appendToDoctypeSystemIdentifier &&
                    this.delegate.appendToDoctypeSystemIdentifier(t)
              },
              doctypeSystemIdentifierSingleQuoted: function () {
                var t = this.consume()
                "'" === t
                  ? this.transitionTo('afterDoctypeSystemIdentifier')
                  : '>' === t
                  ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                    this.transitionTo('beforeData'))
                  : this.delegate.appendToDoctypeSystemIdentifier &&
                    this.delegate.appendToDoctypeSystemIdentifier(t)
              },
              afterDoctypeSystemIdentifier: function () {
                var t = this.consume()
                f(t) ||
                  ('>' === t &&
                    (this.delegate.endDoctype && this.delegate.endDoctype(),
                    this.transitionTo('beforeData')))
              },
              commentStart: function () {
                var t = this.consume()
                '-' === t
                  ? this.transitionTo('commentStartDash')
                  : '>' === t
                  ? (this.delegate.finishComment(),
                    this.transitionTo('beforeData'))
                  : (this.delegate.appendToCommentData(t),
                    this.transitionTo('comment'))
              },
              commentStartDash: function () {
                var t = this.consume()
                '-' === t
                  ? this.transitionTo('commentEnd')
                  : '>' === t
                  ? (this.delegate.finishComment(),
                    this.transitionTo('beforeData'))
                  : (this.delegate.appendToCommentData('-'),
                    this.transitionTo('comment'))
              },
              comment: function () {
                var t = this.consume()
                '-' === t
                  ? this.transitionTo('commentEndDash')
                  : this.delegate.appendToCommentData(t)
              },
              commentEndDash: function () {
                var t = this.consume()
                '-' === t
                  ? this.transitionTo('commentEnd')
                  : (this.delegate.appendToCommentData('-' + t),
                    this.transitionTo('comment'))
              },
              commentEnd: function () {
                var t = this.consume()
                '>' === t
                  ? (this.delegate.finishComment(),
                    this.transitionTo('beforeData'))
                  : (this.delegate.appendToCommentData('--' + t),
                    this.transitionTo('comment'))
              },
              tagName: function () {
                var t = this.consume()
                f(t)
                  ? this.transitionTo('beforeAttributeName')
                  : '/' === t
                  ? this.transitionTo('selfClosingStartTag')
                  : '>' === t
                  ? (this.delegate.finishTag(), this.transitionTo('beforeData'))
                  : this.appendToTagName(t)
              },
              endTagName: function () {
                var t = this.consume()
                f(t)
                  ? (this.transitionTo('beforeAttributeName'),
                    (this.tagNameBuffer = ''))
                  : '/' === t
                  ? (this.transitionTo('selfClosingStartTag'),
                    (this.tagNameBuffer = ''))
                  : '>' === t
                  ? (this.delegate.finishTag(),
                    this.transitionTo('beforeData'),
                    (this.tagNameBuffer = ''))
                  : this.appendToTagName(t)
              },
              beforeAttributeName: function () {
                var t = this.peek()
                f(t)
                  ? this.consume()
                  : '/' === t
                  ? (this.transitionTo('selfClosingStartTag'), this.consume())
                  : '>' === t
                  ? (this.consume(),
                    this.delegate.finishTag(),
                    this.transitionTo('beforeData'))
                  : '=' === t
                  ? (this.delegate.reportSyntaxError(
                      'attribute name cannot start with equals sign'
                    ),
                    this.transitionTo('attributeName'),
                    this.delegate.beginAttribute(),
                    this.consume(),
                    this.delegate.appendToAttributeName(t))
                  : (this.transitionTo('attributeName'),
                    this.delegate.beginAttribute())
              },
              attributeName: function () {
                var t = this.peek()
                f(t)
                  ? (this.transitionTo('afterAttributeName'), this.consume())
                  : '/' === t
                  ? (this.delegate.beginAttributeValue(!1),
                    this.delegate.finishAttributeValue(),
                    this.consume(),
                    this.transitionTo('selfClosingStartTag'))
                  : '=' === t
                  ? (this.transitionTo('beforeAttributeValue'), this.consume())
                  : '>' === t
                  ? (this.delegate.beginAttributeValue(!1),
                    this.delegate.finishAttributeValue(),
                    this.consume(),
                    this.delegate.finishTag(),
                    this.transitionTo('beforeData'))
                  : '"' === t || "'" === t || '<' === t
                  ? (this.delegate.reportSyntaxError(
                      t + ' is not a valid character within attribute names'
                    ),
                    this.consume(),
                    this.delegate.appendToAttributeName(t))
                  : (this.consume(), this.delegate.appendToAttributeName(t))
              },
              afterAttributeName: function () {
                var t = this.peek()
                f(t)
                  ? this.consume()
                  : '/' === t
                  ? (this.delegate.beginAttributeValue(!1),
                    this.delegate.finishAttributeValue(),
                    this.consume(),
                    this.transitionTo('selfClosingStartTag'))
                  : '=' === t
                  ? (this.consume(), this.transitionTo('beforeAttributeValue'))
                  : '>' === t
                  ? (this.delegate.beginAttributeValue(!1),
                    this.delegate.finishAttributeValue(),
                    this.consume(),
                    this.delegate.finishTag(),
                    this.transitionTo('beforeData'))
                  : (this.delegate.beginAttributeValue(!1),
                    this.delegate.finishAttributeValue(),
                    this.transitionTo('attributeName'),
                    this.delegate.beginAttribute(),
                    this.consume(),
                    this.delegate.appendToAttributeName(t))
              },
              beforeAttributeValue: function () {
                var t = this.peek()
                f(t)
                  ? this.consume()
                  : '"' === t
                  ? (this.transitionTo('attributeValueDoubleQuoted'),
                    this.delegate.beginAttributeValue(!0),
                    this.consume())
                  : "'" === t
                  ? (this.transitionTo('attributeValueSingleQuoted'),
                    this.delegate.beginAttributeValue(!0),
                    this.consume())
                  : '>' === t
                  ? (this.delegate.beginAttributeValue(!1),
                    this.delegate.finishAttributeValue(),
                    this.consume(),
                    this.delegate.finishTag(),
                    this.transitionTo('beforeData'))
                  : (this.transitionTo('attributeValueUnquoted'),
                    this.delegate.beginAttributeValue(!1),
                    this.consume(),
                    this.delegate.appendToAttributeValue(t))
              },
              attributeValueDoubleQuoted: function () {
                var t = this.consume()
                '"' === t
                  ? (this.delegate.finishAttributeValue(),
                    this.transitionTo('afterAttributeValueQuoted'))
                  : '&' === t
                  ? this.delegate.appendToAttributeValue(
                      this.consumeCharRef() || '&'
                    )
                  : this.delegate.appendToAttributeValue(t)
              },
              attributeValueSingleQuoted: function () {
                var t = this.consume()
                "'" === t
                  ? (this.delegate.finishAttributeValue(),
                    this.transitionTo('afterAttributeValueQuoted'))
                  : '&' === t
                  ? this.delegate.appendToAttributeValue(
                      this.consumeCharRef() || '&'
                    )
                  : this.delegate.appendToAttributeValue(t)
              },
              attributeValueUnquoted: function () {
                var t = this.peek()
                f(t)
                  ? (this.delegate.finishAttributeValue(),
                    this.consume(),
                    this.transitionTo('beforeAttributeName'))
                  : '/' === t
                  ? (this.delegate.finishAttributeValue(),
                    this.consume(),
                    this.transitionTo('selfClosingStartTag'))
                  : '&' === t
                  ? (this.consume(),
                    this.delegate.appendToAttributeValue(
                      this.consumeCharRef() || '&'
                    ))
                  : '>' === t
                  ? (this.delegate.finishAttributeValue(),
                    this.consume(),
                    this.delegate.finishTag(),
                    this.transitionTo('beforeData'))
                  : (this.consume(), this.delegate.appendToAttributeValue(t))
              },
              afterAttributeValueQuoted: function () {
                var t = this.peek()
                f(t)
                  ? (this.consume(), this.transitionTo('beforeAttributeName'))
                  : '/' === t
                  ? (this.consume(), this.transitionTo('selfClosingStartTag'))
                  : '>' === t
                  ? (this.consume(),
                    this.delegate.finishTag(),
                    this.transitionTo('beforeData'))
                  : this.transitionTo('beforeAttributeName')
              },
              selfClosingStartTag: function () {
                '>' === this.peek()
                  ? (this.consume(),
                    this.delegate.markTagAsSelfClosing(),
                    this.delegate.finishTag(),
                    this.transitionTo('beforeData'))
                  : this.transitionTo('beforeAttributeName')
              },
              endTagOpen: function () {
                var t = this.consume()
                ;('@' === t || ':' === t || d(t)) &&
                  (this.transitionTo('endTagName'),
                  (this.tagNameBuffer = ''),
                  this.delegate.beginEndTag(),
                  this.appendToTagName(t))
              },
            }),
            this.reset()
        }
        return (
          (t.prototype.reset = function () {
            this.transitionTo('beforeData'),
              (this.input = ''),
              (this.tagNameBuffer = ''),
              (this.index = 0),
              (this.line = 1),
              (this.column = 0),
              this.delegate.reset()
          }),
          (t.prototype.transitionTo = function (t) {
            this.state = t
          }),
          (t.prototype.tokenize = function (t) {
            this.reset(), this.tokenizePart(t), this.tokenizeEOF()
          }),
          (t.prototype.tokenizePart = function (t) {
            for (
              this.input += (function (t) {
                return t.replace(p, '\n')
              })(t);
              this.index < this.input.length;

            ) {
              var e = this.states[this.state]
              if (void 0 === e) throw new Error('unhandled state ' + this.state)
              e.call(this)
            }
          }),
          (t.prototype.tokenizeEOF = function () {
            this.flushData()
          }),
          (t.prototype.flushData = function () {
            'data' === this.state &&
              (this.delegate.finishData(), this.transitionTo('beforeData'))
          }),
          (t.prototype.peek = function () {
            return this.input.charAt(this.index)
          }),
          (t.prototype.consume = function () {
            var t = this.peek()
            return (
              this.index++,
              '\n' === t ? (this.line++, (this.column = 0)) : this.column++,
              t
            )
          }),
          (t.prototype.consumeCharRef = function () {
            var t = this.input.indexOf(';', this.index)
            if (-1 !== t) {
              var e = this.input.slice(this.index, t),
                i = this.entityParser.parse(e)
              if (i) {
                for (var n = e.length; n; ) this.consume(), n--
                return this.consume(), i
              }
            }
          }),
          (t.prototype.markTagStart = function () {
            this.delegate.tagOpen()
          }),
          (t.prototype.appendToTagName = function (t) {
            ;(this.tagNameBuffer += t), this.delegate.appendToTagName(t)
          }),
          (t.prototype.isIgnoredEndTag = function () {
            var t = this.tagNameBuffer
            return (
              ('title' === t &&
                '</title>' !==
                  this.input.substring(this.index, this.index + 8)) ||
              ('style' === t &&
                '</style>' !==
                  this.input.substring(this.index, this.index + 8)) ||
              ('script' === t &&
                '</script>' !==
                  this.input.substring(this.index, this.index + 9))
            )
          }),
          t
        )
      })(),
      g = (function () {
        function t(t, e) {
          void 0 === e && (e = {}),
            (this.options = e),
            (this.token = null),
            (this.startLine = 1),
            (this.startColumn = 0),
            (this.tokens = []),
            (this.tokenizer = new _(this, t, e.mode)),
            (this._currentAttribute = void 0)
        }
        return (
          (t.prototype.tokenize = function (t) {
            return (this.tokens = []), this.tokenizer.tokenize(t), this.tokens
          }),
          (t.prototype.tokenizePart = function (t) {
            return (
              (this.tokens = []), this.tokenizer.tokenizePart(t), this.tokens
            )
          }),
          (t.prototype.tokenizeEOF = function () {
            return (
              (this.tokens = []), this.tokenizer.tokenizeEOF(), this.tokens[0]
            )
          }),
          (t.prototype.reset = function () {
            ;(this.token = null), (this.startLine = 1), (this.startColumn = 0)
          }),
          (t.prototype.current = function () {
            var t = this.token
            if (null === t) throw new Error('token was unexpectedly null')
            if (0 === arguments.length) return t
            for (var e = 0; e < arguments.length; e++)
              if (t.type === arguments[e]) return t
            throw new Error('token type was unexpectedly ' + t.type)
          }),
          (t.prototype.push = function (t) {
            ;(this.token = t), this.tokens.push(t)
          }),
          (t.prototype.currentAttribute = function () {
            return this._currentAttribute
          }),
          (t.prototype.addLocInfo = function () {
            this.options.loc &&
              (this.current().loc = {
                start: { line: this.startLine, column: this.startColumn },
                end: {
                  line: this.tokenizer.line,
                  column: this.tokenizer.column,
                },
              }),
              (this.startLine = this.tokenizer.line),
              (this.startColumn = this.tokenizer.column)
          }),
          (t.prototype.beginDoctype = function () {
            this.push({ type: 'Doctype', name: '' })
          }),
          (t.prototype.appendToDoctypeName = function (t) {
            this.current('Doctype').name += t
          }),
          (t.prototype.appendToDoctypePublicIdentifier = function (t) {
            var e = this.current('Doctype')
            void 0 === e.publicIdentifier
              ? (e.publicIdentifier = t)
              : (e.publicIdentifier += t)
          }),
          (t.prototype.appendToDoctypeSystemIdentifier = function (t) {
            var e = this.current('Doctype')
            void 0 === e.systemIdentifier
              ? (e.systemIdentifier = t)
              : (e.systemIdentifier += t)
          }),
          (t.prototype.endDoctype = function () {
            this.addLocInfo()
          }),
          (t.prototype.beginData = function () {
            this.push({ type: 'Chars', chars: '' })
          }),
          (t.prototype.appendToData = function (t) {
            this.current('Chars').chars += t
          }),
          (t.prototype.finishData = function () {
            this.addLocInfo()
          }),
          (t.prototype.beginComment = function () {
            this.push({ type: 'Comment', chars: '' })
          }),
          (t.prototype.appendToCommentData = function (t) {
            this.current('Comment').chars += t
          }),
          (t.prototype.finishComment = function () {
            this.addLocInfo()
          }),
          (t.prototype.tagOpen = function () {}),
          (t.prototype.beginStartTag = function () {
            this.push({
              type: 'StartTag',
              tagName: '',
              attributes: [],
              selfClosing: !1,
            })
          }),
          (t.prototype.beginEndTag = function () {
            this.push({ type: 'EndTag', tagName: '' })
          }),
          (t.prototype.finishTag = function () {
            this.addLocInfo()
          }),
          (t.prototype.markTagAsSelfClosing = function () {
            this.current('StartTag').selfClosing = !0
          }),
          (t.prototype.appendToTagName = function (t) {
            this.current('StartTag', 'EndTag').tagName += t
          }),
          (t.prototype.beginAttribute = function () {
            this._currentAttribute = ['', '', !1]
          }),
          (t.prototype.appendToAttributeName = function (t) {
            this.currentAttribute()[0] += t
          }),
          (t.prototype.beginAttributeValue = function (t) {
            this.currentAttribute()[2] = t
          }),
          (t.prototype.appendToAttributeValue = function (t) {
            this.currentAttribute()[1] += t
          }),
          (t.prototype.finishAttributeValue = function () {
            this.current('StartTag').attributes.push(this._currentAttribute)
          }),
          (t.prototype.reportSyntaxError = function (t) {
            this.current().syntaxError = t
          }),
          t
        )
      })()
    function m(t, e) {
      return new g(new u(r), e).tokenize(t)
    }
    var y = o.Options
    function v(t, e) {
      for (var i = o.tokenize(t), n = [], r = 0; r < i.length; r++) {
        var a = i[r]
        if ('nl' === a.t && e.nl2br)
          n.push({
            type: 'StartTag',
            tagName: 'br',
            attributes: [],
            selfClosing: !0,
          })
        else if (a.isLink && e.check(a)) {
          var s = e.resolve(a),
            l = s.formatted,
            u = s.formattedHref,
            c = s.tagName,
            h = s.className,
            p = s.target,
            f = s.rel,
            d = s.attributes,
            _ = s.truncate,
            g = [['href', u]]
          for (var m in (h && g.push(['class', h]),
          p && g.push(['target', p]),
          f && g.push(['rel', f]),
          _ && l.length > _ && (l = l.substring(0, _) + '…'),
          d))
            g.push([m, d[m]])
          n.push({
            type: 'StartTag',
            tagName: c,
            attributes: g,
            selfClosing: !1,
          }),
            n.push({ type: 'Chars', chars: l }),
            n.push({ type: 'EndTag', tagName: c })
        } else n.push({ type: 'Chars', chars: a.toString() })
      }
      return n
    }
    function b(t, e, i, n) {
      for (var o = 1; i < e.length && o > 0; ) {
        var r = e[i]
        'StartTag' === r.type && r.tagName.toUpperCase() === t
          ? o++
          : 'EndTag' === r.type && r.tagName.toUpperCase() === t && o--,
          n.push(r),
          i++
      }
      return n
    }
    function C(t) {
      for (var e = [], i = 0; i < t.length; i++) {
        var n = t[i][0],
          o = t[i][1]
        e.push(''.concat(n, '="').concat(o.replace(/"/g, '&quot;'), '"'))
      }
      return e
    }
    t.exports = function (t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = m(t),
        n = [],
        o = []
      e = new y(e)
      for (var r = 0; r < i.length; r++) {
        var a = i[r]
        if ('StartTag' !== a.type)
          if ('Chars' === a.type) {
            var s = v(a.chars, e)
            n.push.apply(n, s)
          } else n.push(a)
        else {
          n.push(a)
          var l = a.tagName.toUpperCase(),
            u = 'A' === l || e.ignoreTags.indexOf(l) >= 0
          if (!u) continue
          var c = n.length
          b(l, i, ++r, n), (r += n.length - c - 1)
        }
      }
      for (var h = 0; h < n.length; h++) {
        var p = n[h]
        switch (p.type) {
          case 'StartTag':
            var f = '<' + p.tagName
            if (p.attributes.length > 0) {
              var d = C(p.attributes)
              f += ' ' + d.join(' ')
            }
            ;(f += '>'), o.push(f)
            break
          case 'EndTag':
            o.push('</'.concat(p.tagName, '>'))
            break
          case 'Chars':
            o.push(p.chars)
            break
          case 'Comment':
            o.push('\x3c!--'.concat(p.chars, '--\x3e'))
            break
          case 'Doctype':
            var _ = '<!DOCTYPE '.concat(p.name)
            p.publicIdentifier &&
              (_ += ' PUBLIC "'.concat(p.publicIdentifier, '"')),
              p.systemIdentifier && (_ += ' "'.concat(p.systemIdentifier, '"')),
              (_ += '>'),
              o.push(_)
        }
      }
      return o.join('')
    }
  },
  function (t, e, i) {
    t.exports = i(216)
  },
  function (t, e, i) {
    'use strict'
    function n(t) {
      ;(this.j = {}), (this.jr = []), (this.jd = null), (this.t = t)
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (n.prototype = {
        accepts: function () {
          return !!this.t
        },
        tt: function (t, e) {
          if (e && e.j) return (this.j[t] = e), e
          var i = e,
            n = this.j[t]
          if (n) return i && (n.t = i), n
          n = o()
          var r = l(this, t)
          return (
            r
              ? (Object.assign(n.j, r.j),
                n.jr.append(r.jr),
                (n.jr = r.jd),
                (n.t = i || r.t))
              : (n.t = i),
            (this.j[t] = n),
            n
          )
        },
      })
    var o = function () {
        return new n()
      },
      r = function (t) {
        return new n(t)
      },
      a = function (t, e, i) {
        t.j[e] || (t.j[e] = i)
      },
      s = function (t, e, i) {
        t.jr.push([e, i])
      },
      l = function (t, e) {
        var i = t.j[e]
        if (i) return i
        for (var n = 0; n < t.jr.length; n++) {
          var o = t.jr[n][0],
            r = t.jr[n][1]
          if (o.test(e)) return r
        }
        return t.jd
      },
      u = function (t, e, i) {
        for (var n = 0; n < e.length; n++) a(t, e[n], i)
      },
      c = function (t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i][0],
            o = e[i][1]
          a(t, n, o)
        }
      },
      h = function (t, e, i, n) {
        for (var o, r = 0, s = e.length; r < s && (o = t.j[e[r]]); )
          (t = o), r++
        if (r >= s) return []
        for (; r < s - 1; ) (o = n()), a(t, e[r], o), (t = o), r++
        a(t, e[s - 1], i)
      },
      p = 'DOMAIN',
      f = 'TLD',
      d = 'NUM',
      _ = 'AT',
      g = 'DOT',
      m = 'SLASH',
      y = Object.freeze({
        __proto__: null,
        DOMAIN: p,
        LOCALHOST: 'LOCALHOST',
        TLD: f,
        NUM: d,
        PROTOCOL: 'PROTOCOL',
        MAILTO: 'MAILTO',
        WS: 'WS',
        NL: 'NL',
        OPENBRACE: 'OPENBRACE',
        OPENBRACKET: 'OPENBRACKET',
        OPENANGLEBRACKET: 'OPENANGLEBRACKET',
        OPENPAREN: 'OPENPAREN',
        CLOSEBRACE: 'CLOSEBRACE',
        CLOSEBRACKET: 'CLOSEBRACKET',
        CLOSEANGLEBRACKET: 'CLOSEANGLEBRACKET',
        CLOSEPAREN: 'CLOSEPAREN',
        AMPERSAND: 'AMPERSAND',
        APOSTROPHE: 'APOSTROPHE',
        ASTERISK: 'ASTERISK',
        AT: _,
        BACKSLASH: 'BACKSLASH',
        BACKTICK: 'BACKTICK',
        CARET: 'CARET',
        COLON: 'COLON',
        COMMA: 'COMMA',
        DOLLAR: 'DOLLAR',
        DOT: g,
        EQUALS: 'EQUALS',
        EXCLAMATION: 'EXCLAMATION',
        HYPHEN: 'HYPHEN',
        PERCENT: 'PERCENT',
        PIPE: 'PIPE',
        PLUS: 'PLUS',
        POUND: 'POUND',
        QUERY: 'QUERY',
        QUOTE: 'QUOTE',
        SEMI: 'SEMI',
        SLASH: m,
        TILDE: 'TILDE',
        UNDERSCORE: 'UNDERSCORE',
        SYM: 'SYM',
      }),
      v =
        'aaa aarp abarth abb abbott abbvie abc able abogado abudhabi ac academy accenture accountant accountants aco actor ad adac ads adult ae aeg aero aetna af afamilycompany afl africa ag agakhan agency ai aig airbus airforce airtel akdn al alfaromeo alibaba alipay allfinanz allstate ally alsace alstom am amazon americanexpress americanfamily amex amfam amica amsterdam analytics android anquan anz ao aol apartments app apple aq aquarelle ar arab aramco archi army arpa art arte as asda asia associates at athleta attorney au auction audi audible audio auspost author auto autos avianca aw aws ax axa az azure ba baby baidu banamex bananarepublic band bank bar barcelona barclaycard barclays barefoot bargains baseball basketball bauhaus bayern bb bbc bbt bbva bcg bcn bd be beats beauty beer bentley berlin best bestbuy bet bf bg bh bharti bi bible bid bike bing bingo bio biz bj black blackfriday blockbuster blog bloomberg blue bm bms bmw bn bnpparibas bo boats boehringer bofa bom bond boo book booking bosch bostik boston bot boutique box br bradesco bridgestone broadway broker brother brussels bs bt budapest bugatti build builders business buy buzz bv bw by bz bzh ca cab cafe cal call calvinklein cam camera camp cancerresearch canon capetown capital capitalone car caravan cards care career careers cars casa case cash casino cat catering catholic cba cbn cbre cbs cc cd center ceo cern cf cfa cfd cg ch chanel channel charity chase chat cheap chintai christmas chrome church ci cipriani circle cisco citadel citi citic city cityeats ck cl claims cleaning click clinic clinique clothing cloud club clubmed cm cn co coach codes coffee college cologne com comcast commbank community company compare computer comsec condos construction consulting contact contractors cooking cookingchannel cool coop corsica country coupon coupons courses cpa cr credit creditcard creditunion cricket crown crs cruise cruises csc cu cuisinella cv cw cx cy cymru cyou cz dabur dad dance data date dating datsun day dclk dds de deal dealer deals degree delivery dell deloitte delta democrat dental dentist desi design dev dhl diamonds diet digital direct directory discount discover dish diy dj dk dm dnp do docs doctor dog domains dot download drive dtv dubai duck dunlop dupont durban dvag dvr dz earth eat ec eco edeka edu education ee eg email emerck energy engineer engineering enterprises epson equipment er ericsson erni es esq estate et etisalat eu eurovision eus events exchange expert exposed express extraspace fage fail fairwinds faith family fan fans farm farmers fashion fast fedex feedback ferrari ferrero fi fiat fidelity fido film final finance financial fire firestone firmdale fish fishing fit fitness fj fk flickr flights flir florist flowers fly fm fo foo food foodnetwork football ford forex forsale forum foundation fox fr free fresenius frl frogans frontdoor frontier ftr fujitsu fujixerox fun fund furniture futbol fyi ga gal gallery gallo gallup game games gap garden gay gb gbiz gd gdn ge gea gent genting george gf gg ggee gh gi gift gifts gives giving gl glade glass gle global globo gm gmail gmbh gmo gmx gn godaddy gold goldpoint golf goo goodyear goog google gop got gov gp gq gr grainger graphics gratis green gripe grocery group gs gt gu guardian gucci guge guide guitars guru gw gy hair hamburg hangout haus hbo hdfc hdfcbank health healthcare help helsinki here hermes hgtv hiphop hisamitsu hitachi hiv hk hkt hm hn hockey holdings holiday homedepot homegoods homes homesense honda horse hospital host hosting hot hoteles hotels hotmail house how hr hsbc ht hu hughes hyatt hyundai ibm icbc ice icu id ie ieee ifm ikano il im imamat imdb immo immobilien in inc industries infiniti info ing ink institute insurance insure int international intuit investments io ipiranga iq ir irish is ismaili ist istanbul it itau itv iveco jaguar java jcb je jeep jetzt jewelry jio jll jm jmp jnj jo jobs joburg jot joy jp jpmorgan jprs juegos juniper kaufen kddi ke kerryhotels kerrylogistics kerryproperties kfh kg kh ki kia kim kinder kindle kitchen kiwi km kn koeln komatsu kosher kp kpmg kpn kr krd kred kuokgroup kw ky kyoto kz la lacaixa lamborghini lamer lancaster lancia land landrover lanxess lasalle lat latino latrobe law lawyer lb lc lds lease leclerc lefrak legal lego lexus lgbt li lidl life lifeinsurance lifestyle lighting like lilly limited limo lincoln linde link lipsy live living lixil lk llc llp loan loans locker locus loft lol london lotte lotto love lpl lplfinancial lr ls lt ltd ltda lu lundbeck luxe luxury lv ly ma macys madrid maif maison makeup man management mango map market marketing markets marriott marshalls maserati mattel mba mc mckinsey md me med media meet melbourne meme memorial men menu merckmsd mg mh miami microsoft mil mini mint mit mitsubishi mk ml mlb mls mm mma mn mo mobi mobile moda moe moi mom monash money monster mormon mortgage moscow moto motorcycles mov movie mp mq mr ms msd mt mtn mtr mu museum mutual mv mw mx my mz na nab nagoya name nationwide natura navy nba nc ne nec net netbank netflix network neustar new news next nextdirect nexus nf nfl ng ngo nhk ni nico nike nikon ninja nissan nissay nl no nokia northwesternmutual norton now nowruz nowtv np nr nra nrw ntt nu nyc nz obi observer off office okinawa olayan olayangroup oldnavy ollo om omega one ong onl online onyourside ooo open oracle orange org organic origins osaka otsuka ott ovh pa page panasonic paris pars partners parts party passagens pay pccw pe pet pf pfizer pg ph pharmacy phd philips phone photo photography photos physio pics pictet pictures pid pin ping pink pioneer pizza pk pl place play playstation plumbing plus pm pn pnc pohl poker politie porn post pr pramerica praxi press prime pro prod productions prof progressive promo properties property protection pru prudential ps pt pub pw pwc py qa qpon quebec quest qvc racing radio raid re read realestate realtor realty recipes red redstone redumbrella rehab reise reisen reit reliance ren rent rentals repair report republican rest restaurant review reviews rexroth rich richardli ricoh ril rio rip rmit ro rocher rocks rodeo rogers room rs rsvp ru rugby ruhr run rw rwe ryukyu sa saarland safe safety sakura sale salon samsclub samsung sandvik sandvikcoromant sanofi sap sarl sas save saxo sb sbi sbs sc sca scb schaeffler schmidt scholarships school schule schwarz science scjohnson scot sd se search seat secure security seek select sener services ses seven sew sex sexy sfr sg sh shangrila sharp shaw shell shia shiksha shoes shop shopping shouji show showtime si silk sina singles site sj sk ski skin sky skype sl sling sm smart smile sn sncf so soccer social softbank software sohu solar solutions song sony soy spa space sport spot spreadbetting sr srl ss st stada staples star statebank statefarm stc stcgroup stockholm storage store stream studio study style su sucks supplies supply support surf surgery suzuki sv swatch swiftcover swiss sx sy sydney systems sz tab taipei talk taobao target tatamotors tatar tattoo tax taxi tc tci td tdk team tech technology tel temasek tennis teva tf tg th thd theater theatre tiaa tickets tienda tiffany tips tires tirol tj tjmaxx tjx tk tkmaxx tl tm tmall tn to today tokyo tools top toray toshiba total tours town toyota toys tr trade trading training travel travelchannel travelers travelersinsurance trust trv tt tube tui tunes tushu tv tvs tw tz ua ubank ubs ug uk unicom university uno uol ups us uy uz va vacations vana vanguard vc ve vegas ventures verisign versicherung vet vg vi viajes video vig viking villas vin vip virgin visa vision viva vivo vlaanderen vn vodka volkswagen volvo vote voting voto voyage vu vuelos wales walmart walter wang wanggou watch watches weather weatherchannel webcam weber website wed wedding weibo weir wf whoswho wien wiki williamhill win windows wine winners wme wolterskluwer woodside work works world wow ws wtc wtf xbox xerox xfinity xihuan xin xxx xyz yachts yahoo yamaxun yandex ye yodobashi yoga yokohama you youtube yt yun za zappos zara zero zip zm zone zuerich zw vermögensberater-ctb vermögensberatung-pwb ελ ευ бг бел дети ею католик ком қаз мкд мон москва онлайн орг рус рф сайт срб укр გე հայ ישראל קום ابوظبي اتصالات ارامكو الاردن البحرين الجزائر السعودية العليان المغرب امارات ایران بارت بازار بھارت بيتك پاکستان ڀارت تونس سودان سورية شبكة عراق عرب عمان فلسطين قطر كاثوليك كوم مصر مليسيا موريتانيا موقع همراه कॉम नेट भारत भारतम् भारोत संगठन বাংলা ভারত ভাৰত ਭਾਰਤ ભારત ଭାରତ இந்தியா இலங்கை சிங்கப்பூர் భారత్ ಭಾರತ ഭാരതം ලංකා คอม ไทย ລາວ 닷넷 닷컴 삼성 한국 アマゾン グーグル クラウド コム ストア セール ファッション ポイント みんな 世界 中信 中国 中國 中文网 亚马逊 企业 佛山 信息 健康 八卦 公司 公益 台湾 台灣 商城 商店 商标 嘉里 嘉里大酒店 在线 大众汽车 大拿 天主教 娱乐 家電 广东 微博 慈善 我爱你 手机 招聘 政务 政府 新加坡 新闻 时尚 書籍 机构 淡马锡 游戏 澳門 点看 移动 组织机构 网址 网店 网站 网络 联通 诺基亚 谷歌 购物 通販 集团 電訊盈科 飞利浦 食品 餐厅 香格里拉 香港'.split(
          ' '
        ),
      b =
        /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/,
      C =
        /(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])/,
      w = /\uFE0F/,
      T = /\d/,
      S = /\s/
    function A() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        e = o(),
        i = r(d),
        n = r(p),
        l = o(),
        u = r('WS'),
        y = [
          [T, n],
          [b, n],
          [C, n],
          [w, n],
        ],
        A = function () {
          var t = r(p)
          return (t.j = { '-': l }), (t.jr = [].concat(y)), t
        },
        O = function (t) {
          var e = A()
          return (e.t = t), e
        }
      c(e, [
        ["'", r('APOSTROPHE')],
        ['{', r('OPENBRACE')],
        ['[', r('OPENBRACKET')],
        ['<', r('OPENANGLEBRACKET')],
        ['(', r('OPENPAREN')],
        ['}', r('CLOSEBRACE')],
        [']', r('CLOSEBRACKET')],
        ['>', r('CLOSEANGLEBRACKET')],
        [')', r('CLOSEPAREN')],
        ['&', r('AMPERSAND')],
        ['*', r('ASTERISK')],
        ['@', r(_)],
        ['`', r('BACKTICK')],
        ['^', r('CARET')],
        [':', r('COLON')],
        [',', r('COMMA')],
        ['$', r('DOLLAR')],
        ['.', r(g)],
        ['=', r('EQUALS')],
        ['!', r('EXCLAMATION')],
        ['-', r('HYPHEN')],
        ['%', r('PERCENT')],
        ['|', r('PIPE')],
        ['+', r('PLUS')],
        ['#', r('POUND')],
        ['?', r('QUERY')],
        ['"', r('QUOTE')],
        ['/', r(m)],
        [';', r('SEMI')],
        ['~', r('TILDE')],
        ['_', r('UNDERSCORE')],
        ['\\', r('BACKSLASH')],
      ]),
        a(e, '\n', r('NL')),
        s(e, S, u),
        a(u, '\n', o()),
        s(u, S, u)
      for (var E = 0; E < v.length; E++) h(e, v[E], O(f), A)
      var x = A(),
        D = A(),
        P = A(),
        I = A()
      h(e, 'file', x, A),
        h(e, 'ftp', D, A),
        h(e, 'http', P, A),
        h(e, 'mailto', I, A)
      var k = A(),
        F = r('PROTOCOL'),
        L = r('MAILTO')
      a(D, 's', k),
        a(D, ':', F),
        a(P, 's', k),
        a(P, ':', F),
        a(x, ':', F),
        a(k, ':', F),
        a(I, ':', L)
      for (var N = A(), R = 0; R < t.length; R++) h(e, t[R], N, A)
      return (
        a(N, ':', F),
        h(e, 'localhost', O('LOCALHOST'), A),
        s(e, T, i),
        s(e, b, n),
        s(e, C, n),
        s(e, w, n),
        s(i, T, i),
        s(i, b, n),
        s(i, C, n),
        s(i, w, n),
        a(i, '-', l),
        a(n, '-', l),
        a(l, '-', l),
        s(n, T, n),
        s(n, b, n),
        s(n, C, n),
        s(n, w, n),
        s(l, T, n),
        s(l, b, n),
        s(l, C, n),
        s(l, w, n),
        (e.jd = r('SYM')),
        e
      )
    }
    function O(t) {
      return (O =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t
            })(t)
    }
    var E = {
      defaultProtocol: 'http',
      events: null,
      format: D,
      formatHref: D,
      nl2br: !1,
      tagName: 'a',
      target: null,
      rel: null,
      validate: !0,
      truncate: 0,
      className: null,
      attributes: null,
      ignoreTags: [],
    }
    function x(t) {
      ;(t = t || {}),
        (this.defaultProtocol =
          'defaultProtocol' in t ? t.defaultProtocol : E.defaultProtocol),
        (this.events = 'events' in t ? t.events : E.events),
        (this.format = 'format' in t ? t.format : E.format),
        (this.formatHref = 'formatHref' in t ? t.formatHref : E.formatHref),
        (this.nl2br = 'nl2br' in t ? t.nl2br : E.nl2br),
        (this.tagName = 'tagName' in t ? t.tagName : E.tagName),
        (this.target = 'target' in t ? t.target : E.target),
        (this.rel = 'rel' in t ? t.rel : E.rel),
        (this.validate = 'validate' in t ? t.validate : E.validate),
        (this.truncate = 'truncate' in t ? t.truncate : E.truncate),
        (this.className = 'className' in t ? t.className : E.className),
        (this.attributes = t.attributes || E.attributes),
        (this.ignoreTags = [])
      for (
        var e = ('ignoreTags' in t) ? t.ignoreTags : E.ignoreTags, i = 0;
        i < e.length;
        i++
      )
        this.ignoreTags.push(e[i].toUpperCase())
    }
    function D(t) {
      return t
    }
    x.prototype = {
      resolve: function (t) {
        var e = t.toHref(this.defaultProtocol)
        return {
          formatted: this.get('format', t.toString(), t),
          formattedHref: this.get('formatHref', e, t),
          tagName: this.get('tagName', e, t),
          className: this.get('className', e, t),
          target: this.get('target', e, t),
          rel: this.get('rel', e, t),
          events: this.getObject('events', e, t),
          attributes: this.getObject('attributes', e, t),
          truncate: this.get('truncate', e, t),
        }
      },
      check: function (t) {
        return this.get('validate', t.toString(), t)
      },
      get: function (t, e, i) {
        var n,
          o = this[t]
        if (!o) return o
        switch (O(o)) {
          case 'function':
            return o(e, i.t)
          case 'object':
            return 'function' == typeof (n = i.t in o ? o[i.t] : E[t])
              ? n(e, i.t)
              : n
        }
        return o
      },
      getObject: function (t, e, i) {
        var n = this[t]
        return 'function' == typeof n ? n(e, i.t) : n
      },
    }
    var P = Object.freeze({ __proto__: null, defaults: E, Options: x })
    function I() {}
    function k(t, e) {
      function i(e, i) {
        ;(this.t = t), (this.v = e), (this.tk = i)
      }
      return (
        (function (t, e) {
          var i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            n = Object.create(t.prototype)
          for (var o in i) n[o] = i[o]
          ;(n.constructor = e), (e.prototype = n)
        })(I, i, e),
        i
      )
    }
    I.prototype = {
      t: 'token',
      isLink: !1,
      toString: function () {
        return this.v
      },
      toHref: function () {
        return this.toString()
      },
      startIndex: function () {
        return this.tk[0].s
      },
      endIndex: function () {
        return this.tk[this.tk.length - 1].e
      },
      toObject: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : E.defaultProtocol
        return {
          type: this.t,
          value: this.v,
          isLink: this.isLink,
          href: this.toHref(t),
          start: this.startIndex(),
          end: this.endIndex(),
        }
      },
    }
    var F = k('email', { isLink: !0 }),
      L = k('email', {
        isLink: !0,
        toHref: function () {
          return 'mailto:' + this.toString()
        },
      }),
      N = k('text'),
      R = k('nl'),
      M = k('url', {
        isLink: !0,
        toHref: function () {
          for (
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : E.defaultProtocol,
              e = this.tk,
              i = !1,
              n = !1,
              o = [],
              r = 0;
            'PROTOCOL' === e[r].t;

          )
            (i = !0), o.push(e[r].v), r++
          for (; e[r].t === m; ) (n = !0), o.push(e[r].v), r++
          for (; r < e.length; r++) o.push(e[r].v)
          return (
            (o = o.join('')), i || n || (o = ''.concat(t, '://').concat(o)), o
          )
        },
        hasProtocol: function () {
          return 'PROTOCOL' === this.tk[0].t
        },
      }),
      B = Object.freeze({
        __proto__: null,
        MultiToken: I,
        Base: I,
        createTokenClass: k,
        MailtoEmail: F,
        Email: L,
        Text: N,
        Nl: R,
        Url: M,
      })
    function j() {
      var t = o(),
        e = o(),
        i = o(),
        n = o(),
        s = o(),
        l = o(),
        c = o(),
        h = r(M),
        y = o(),
        v = r(M),
        b = r(M),
        C = o(),
        w = o(),
        T = o(),
        S = o(),
        A = o(),
        O = r(M),
        E = r(M),
        x = r(M),
        D = r(M),
        P = o(),
        I = o(),
        k = o(),
        N = o(),
        B = o(),
        j = o(),
        H = r(L),
        U = o(),
        z = r(L),
        G = r(F),
        V = o(),
        W = o(),
        Y = o(),
        X = o(),
        Z = r(R)
      a(t, 'NL', Z),
        a(t, 'PROTOCOL', e),
        a(t, 'MAILTO', i),
        a(e, m, n),
        a(n, m, s),
        a(t, f, l),
        a(t, p, l),
        a(t, 'LOCALHOST', h),
        a(t, d, l),
        a(s, f, b),
        a(s, p, b),
        a(s, d, b),
        a(s, 'LOCALHOST', b),
        a(l, g, c),
        a(B, g, j),
        a(c, f, h),
        a(c, p, l),
        a(c, d, l),
        a(c, 'LOCALHOST', l),
        a(j, f, H),
        a(j, p, B),
        a(j, d, B),
        a(j, 'LOCALHOST', B),
        a(h, g, c),
        a(H, g, j),
        a(h, 'COLON', y),
        a(h, m, b),
        a(y, d, v),
        a(v, m, b),
        a(H, 'COLON', U),
        a(U, d, z)
      var q = [
          'AMPERSAND',
          'ASTERISK',
          _,
          'BACKSLASH',
          'BACKTICK',
          'CARET',
          'DOLLAR',
          p,
          'EQUALS',
          'HYPHEN',
          'LOCALHOST',
          d,
          'PERCENT',
          'PIPE',
          'PLUS',
          'POUND',
          'PROTOCOL',
          m,
          'SYM',
          'TILDE',
          f,
          'UNDERSCORE',
        ],
        K = [
          'APOSTROPHE',
          'CLOSEANGLEBRACKET',
          'CLOSEBRACE',
          'CLOSEBRACKET',
          'CLOSEPAREN',
          'COLON',
          'COMMA',
          g,
          'EXCLAMATION',
          'OPENANGLEBRACKET',
          'OPENBRACE',
          'OPENBRACKET',
          'OPENPAREN',
          'QUERY',
          'QUOTE',
          'SEMI',
        ]
      a(b, 'OPENBRACE', w),
        a(b, 'OPENBRACKET', T),
        a(b, 'OPENANGLEBRACKET', S),
        a(b, 'OPENPAREN', A),
        a(C, 'OPENBRACE', w),
        a(C, 'OPENBRACKET', T),
        a(C, 'OPENANGLEBRACKET', S),
        a(C, 'OPENPAREN', A),
        a(w, 'CLOSEBRACE', b),
        a(T, 'CLOSEBRACKET', b),
        a(S, 'CLOSEANGLEBRACKET', b),
        a(A, 'CLOSEPAREN', b),
        a(O, 'CLOSEBRACE', b),
        a(E, 'CLOSEBRACKET', b),
        a(x, 'CLOSEANGLEBRACKET', b),
        a(D, 'CLOSEPAREN', b),
        a(P, 'CLOSEBRACE', b),
        a(I, 'CLOSEBRACKET', b),
        a(k, 'CLOSEANGLEBRACKET', b),
        a(N, 'CLOSEPAREN', b),
        u(w, q, O),
        u(T, q, E),
        u(S, q, x),
        u(A, q, D),
        u(w, K, P),
        u(T, K, I),
        u(S, K, k),
        u(A, K, N),
        u(O, q, O),
        u(E, q, E),
        u(x, q, x),
        u(D, q, D),
        u(O, K, O),
        u(E, K, E),
        u(x, K, x),
        u(D, K, D),
        u(P, q, O),
        u(I, q, E),
        u(k, q, x),
        u(N, q, D),
        u(P, K, P),
        u(I, K, I),
        u(k, K, k),
        u(N, K, N),
        u(b, q, b),
        u(C, q, b),
        u(b, K, C),
        u(C, K, C),
        a(i, f, G),
        a(i, p, G),
        a(i, d, G),
        a(i, 'LOCALHOST', G),
        u(G, q, G),
        u(G, K, V),
        u(V, q, G),
        u(V, K, V)
      var J = [
        'AMPERSAND',
        'APOSTROPHE',
        'ASTERISK',
        'BACKSLASH',
        'BACKTICK',
        'CARET',
        'CLOSEBRACE',
        'DOLLAR',
        p,
        'EQUALS',
        'HYPHEN',
        d,
        'OPENBRACE',
        'PERCENT',
        'PIPE',
        'PLUS',
        'POUND',
        'QUERY',
        m,
        'SYM',
        'TILDE',
        f,
        'UNDERSCORE',
      ]
      return (
        u(l, J, W),
        a(l, _, Y),
        u(h, J, W),
        a(h, _, Y),
        u(c, J, W),
        u(W, J, W),
        a(W, _, Y),
        a(W, g, X),
        u(X, J, W),
        a(Y, f, B),
        a(Y, p, B),
        a(Y, d, B),
        a(Y, 'LOCALHOST', H),
        t
      )
    }
    function H(t, e, i) {
      var n = i[0].s,
        o = i[i.length - 1].e
      return new t(e.substr(n, o - n), i)
    }
    var U =
        ('undefined' != typeof console && console && console.warn) ||
        function () {},
      z = {
        scanner: null,
        parser: null,
        pluginQueue: [],
        customProtocols: [],
        initialized: !1,
      }
    function G() {
      ;(z.scanner = { start: A(z.customProtocols), tokens: y }),
        (z.parser = { start: j(), tokens: B })
      for (
        var t = { createTokenClass: k }, e = 0;
        e < z.pluginQueue.length;
        e++
      )
        z.pluginQueue[e][1]({ scanner: z.scanner, parser: z.parser, utils: t })
      z.initialized = !0
    }
    function V(t) {
      return (
        z.initialized || G(),
        (function (t, e, i) {
          for (var n = i.length, o = 0, r = [], a = []; o < n; ) {
            for (
              var s = t, u = null, c = null, h = 0, p = null, f = -1;
              o < n && !(u = l(s, i[o].t));

            )
              a.push(i[o++])
            for (; o < n && (c = u || l(s, i[o].t)); )
              (u = null),
                (s = c).accepts() ? ((f = 0), (p = s)) : f >= 0 && f++,
                o++,
                h++
            if (f < 0) for (var d = o - h; d < o; d++) a.push(i[d])
            else {
              a.length > 0 && (r.push(H(N, e, a)), (a = [])), (o -= f), (h -= f)
              var _ = p.t,
                g = i.slice(o - h, o)
              r.push(H(_, e, g))
            }
          }
          return a.length > 0 && r.push(H(N, e, a)), r
        })(
          z.parser.start,
          t,
          (function (t, e) {
            for (
              var i = (function (t) {
                  var e = [],
                    i = t.length,
                    n = 0
                  for (; n < i; ) {
                    var o = t.charCodeAt(n),
                      r = void 0,
                      a =
                        o < 55296 ||
                        o > 56319 ||
                        n + 1 === i ||
                        (r = t.charCodeAt(n + 1)) < 56320 ||
                        r > 57343
                          ? t[n]
                          : t.slice(n, n + 2)
                    e.push(a), (n += a.length)
                  }
                  return e
                })(
                  e.replace(/[A-Z]/g, function (t) {
                    return t.toLowerCase()
                  })
                ),
                n = i.length,
                o = [],
                r = 0,
                a = 0;
              a < n;

            ) {
              for (
                var s = t, u = null, c = 0, h = null, p = -1, f = -1;
                a < n && (u = l(s, i[a]));

              )
                (s = u).accepts()
                  ? ((p = 0), (f = 0), (h = s))
                  : p >= 0 && ((p += i[a].length), f++),
                  (c += i[a].length),
                  (r += i[a].length),
                  a++
              ;(r -= p),
                (a -= f),
                (c -= p),
                o.push({ t: h.t, v: e.substr(r - c, c), s: r - c, e: r })
            }
            return o
          })(z.scanner.start, t)
        )
      )
    }
    ;(e.Options = x),
      (e.find = function (t) {
        for (
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            i = V(t),
            n = [],
            o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o]
          !r.isLink || (e && r.t !== e) || n.push(r.toObject())
        }
        return n
      }),
      (e.init = G),
      (e.options = P),
      (e.registerCustomProtocol = function (t) {
        if (
          (z.initialized &&
            U(
              'linkifyjs: already initialized - will not register custom protocol "'.concat(
                t,
                '" until you manually call linkify.init(). To avoid this warning, please register all custom protocols before invoking linkify the first time.'
              )
            ),
          !/^[a-z-]+$/.test(t))
        )
          throw Error(
            'linkifyjs: protocols containing characters other than a-z or - (hyphen) are not supported'
          )
        z.customProtocols.push(t)
      }),
      (e.registerPlugin = function (t, e) {
        for (var i = 0; i < z.pluginQueue.length; i++)
          if (t === z.pluginQueue[i][0])
            return (
              U(
                'linkifyjs: plugin "'.concat(
                  t,
                  '" already registered - will be overwritten'
                )
              ),
              void (z.pluginQueue[i] = [t, e])
            )
        z.pluginQueue.push([t, e]),
          z.initialized &&
            U(
              'linkifyjs: already initialized - will not register plugin "'.concat(
                t,
                '" until you manually call linkify.init(). To avoid this warning, please register all plugins before invoking linkify the first time.'
              )
            )
      }),
      (e.reset = function () {
        ;(z.scanner = null),
          (z.parser = null),
          (z.pluginQueue = []),
          (z.customProtocols = []),
          (z.initialized = !1)
      }),
      (e.test = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          i = V(t)
        return 1 === i.length && i[0].isLink && (!e || i[0].t === e)
      }),
      (e.tokenize = V)
  },
  function (t, e) {
    t.exports =
      '<svg width="69px" height="70px" viewBox="0 0 69 70" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>facebook-icon</title><desc>Created with Sketch.</desc><g id="__3MpmWLz__Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="__3MpmWLz__Tile_Facebook-Copy-2" transform="translate(-81.000000, -10.000000)"><g id="__3MpmWLz__facebook-icon" transform="translate(81.000000, 10.000000)"><rect id="__3MpmWLz__background" fill="#FFFFFF" x="15" y="4" width="44" height="66" rx="9"></rect><path d="M56.0624998,2.99444733e-06 C59.6263054,2.99444733e-06 62.6735068,1.28364089 65.2041041,3.85091668 C67.7347014,6.41819247 69,9.50956006 69,13.1250194 L69,56.8749835 C69,60.4904429 67.7347014,63.5818105 65.2041041,66.1490863 C62.6735068,68.7163621 59.6263054,70 56.0624998,70 L47.6171936,70 L47.6171936,42.8840818 L56.5566355,42.8840818 L57.904291,32.3111511 L47.6171721,32.3111511 L47.6171721,25.5663491 C47.6171721,23.8649586 47.9690599,22.5889157 48.6728354,21.7382205 C49.3766109,20.8875252 50.7467295,20.4621776 52.783191,20.4621776 L58.2636563,20.4166045 L58.2636563,10.9830066 C56.3769336,10.7095682 53.7115704,10.572849 50.2675668,10.572849 C46.1946436,10.572849 42.9378113,11.7881318 40.4970699,14.2186975 C38.0563106,16.6492632 36.8359309,20.0824242 36.8359309,24.5181807 L36.8359309,32.3111482 L27.8515699,32.3111482 L27.8515699,42.8840788 L36.8359309,42.8840788 L36.8359309,69.999997 L12.9375002,69.999997 C9.37369462,69.999997 6.32649321,68.7163591 3.79589592,66.1490833 C1.26529864,63.5818075 0,60.4904399 0,56.8749806 L0,13.1250165 C0,9.50955707 1.26529864,6.41818948 3.79589592,3.85091369 C6.32649321,1.2836379 9.37369462,0 12.9375002,0 L56.0624998,2.99444733e-06 Z" id="__3MpmWLz__Path" fill="#3C5A99" fill-rule="nonzero"></path></g></g></g></svg>'
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.GenericPostContent = void 0)
    var r = i(48),
      a = i(110),
      s = i(71),
      l = i(2),
      u = i(6),
      c = i(30),
      h = i(5),
      p = i(3),
      f = i(24),
      d = i(44),
      _ = i(111),
      g = (function (t) {
        function e(e) {
          var i =
            t.call(this, e.type, {
              useScrollableContent: !0,
              useScrollButton: !0,
              showScrollOverflowGradient: !0,
              expandOnSelect: !0,
            }) || this
          return (
            (i._data = e),
            i.initMainImage(),
            i.initSocialChannelLogo(),
            i.initScrollContent(),
            i
          )
        }
        return (
          o(e, t),
          (e.prototype.expand = function (e) {
            t.prototype.expand.call(this, e),
              h.TweenMax.to(
                this._scrollContent.transform,
                p.AppConfig.TOPIC_ITEM_CONTENT_EXPAND_DURATION,
                {
                  y: this.calcScrollContentOffsetY(),
                  scale: this.calcScrollContentScale(),
                  ease: f.Ease.Power5easeInOut,
                }
              )
          }),
          (e.prototype.updateStyles = function () {
            t.prototype.updateStyles.call(this),
              this.updateHeaderStyle(),
              this._mainImage.applyStyle({
                width: this._currentWidth,
                height: this.calcMainImageHeight(),
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }),
              this._scrollContent.applyStyle({
                transformOrigin: 'left top',
                y: this.calcScrollContentOffsetY(),
                scale: this.calcScrollContentScale(),
              }),
              this._richText.applyStyle({ marginTop: l.Size.CONTENT_MARGIN })
          }),
          (e.prototype.initMainImage = function () {
            var t = this
            ;(this._mainImage = new r.BackgroundImage(
              this._data.imageURL,
              u.Color.WHITE
            )),
              this._mainImage.onLoadedSignal.addOnce(function () {
                return t.onMainImageLoaded()
              }),
              this.addChildAt(this._mainImage, 0)
          }),
          (e.prototype.initSocialChannelLogo = function () {
            var t = this
            ;(this._socialChannelLogo = new _.SocialChannelLogo(
              this._data.logoURL
            )),
              this._socialChannelLogo.addNativeListener('click', function () {
                return t.onSocialChannelLogoClicked()
              }),
              this.addChildAt(this._socialChannelLogo, 1)
          }),
          (e.prototype.initScrollContent = function () {
            var t = this
            ;(this._profileInfo = new a.ProfileInfo(
              this._data.profileImageURL,
              this._data.profileName,
              this._data.timeSincePublish,
              this._data.postURL
            )),
              this._profileInfo.onExternalLinkSignal.add(function (e) {
                return t.onExternalLinkSignal.dispatch(e)
              }),
              (this._richText = new s.RichText(this._data.message)),
              (this._richText.darkMode = !1),
              this._richText.onExternalLinkSignal.add(function (e) {
                return t.onExternalLinkSignal.dispatch(e)
              }),
              this._scrollContent.addChild(this._profileInfo),
              this._scrollContent.addChild(this._richText)
          }),
          (e.prototype.updateSizeValues = function () {
            var t = 0.5 * l.Size.APP_HEIGHT,
              e = 0.7 * l.Size.APP_HEIGHT
            ;(this._standardWidth = 150 * l.Size.APP_SIZE_FACTOR + 250),
              (this._expandedWidth = this._standardWidth),
              (this._contentWidth =
                this._standardWidth +
                (this._expandedWidth - this._standardWidth) *
                  (1 - l.Size.APP_SIZE_FACTOR)),
              (this._standardHeight =
                this.calcScrollableContentHeight() -
                this.calcContentPaddingTop()),
              this._standardHeight > t && (this._standardHeight = t),
              (this._expandedHeight =
                this.calcScrollableContentHeight() -
                this.calcContentPaddingTop()),
              this._expandedHeight > e && (this._expandedHeight = e),
              (this._currentWidth = this._expanded
                ? this._expandedWidth
                : this._standardWidth),
              (this._currentHeight = this._expanded
                ? this._expandedHeight
                : this._standardHeight)
          }),
          (e.prototype.updateHeaderStyle = function () {
            ;(this._mainImage.transform.y =
              0.5 * -this._scrollableContent.scrollTop),
              (this._mainImage.gradientAlpha =
                d.MathUtils.calcProgressWithinValues(
                  0,
                  100,
                  this._scrollableContent.scrollTop
                )),
              this._socialChannelLogo.applyStyle({
                opacity:
                  1 -
                  d.MathUtils.calcProgressWithinValues(
                    0,
                    100,
                    this._scrollableContent.scrollTop
                  ),
              })
          }),
          (e.prototype.calcMainImageHeight = function () {
            return this._data.imageURL
              ? this._expandedWidth /
                  (this._mainImage.ratio ? this._mainImage.ratio : 16 / 9)
              : 0
          }),
          (e.prototype.calcScrollContentScale = function () {
            var t = this._standardWidth / this._contentWidth
            return t > 1 && (t = 1), this._expanded ? 1 : t
          }),
          (e.prototype.calcScrollContentOffsetY = function () {
            return (
              (this.calcContentPaddingTop() - l.Size.CONTENT_MARGIN) *
              (1 - this.calcScrollContentScale())
            )
          }),
          (e.prototype.calcScrollableContentHeight = function () {
            var t =
              this._scrollableContent.scrollHeight +
              this.calcMainImageHeight() +
              l.Size.CONTENT_MARGIN
            return Math.round(t)
          }),
          (e.prototype.calcContentPaddingTop = function () {
            return this.calcMainImageHeight() + l.Size.CONTENT_MARGIN
          }),
          (e.prototype.updateContentInteractivity = function () {
            t.prototype.updateContentInteractivity.call(this),
              (this._socialChannelLogo.interactive =
                this._scrollContent.interactive),
              (this._profileInfo.interactive = this._scrollContent.interactive)
          }),
          (e.prototype.onContentScrolled = function () {
            t.prototype.onContentScrolled.call(this), this.updateHeaderStyle()
          }),
          (e.prototype.onMainImageLoaded = function () {
            var t = this
            this.updateStyles(),
              h.TweenMax.delayedCall(
                p.AppConfig.TOPIC_CHANGE_DURATION,
                function () {
                  return t.updateStyles()
                }
              )
          }),
          (e.prototype.onSocialChannelLogoClicked = function () {
            this.onExternalLinkSignal.dispatch(this._data.postURL)
          }),
          e
        )
      })(c.TopicItemExpandableContent)
    e.GenericPostContent = g
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ArticleContent = void 0)
    var r = i(29),
      a = i(30),
      s = i(2),
      l = i(10),
      u = i(71),
      c = i(6),
      h = i(48),
      p = i(5),
      f = i(3),
      d = i(24),
      _ = i(1),
      g = i(112),
      m = i(72),
      y = (function (t) {
        function e(e) {
          var i =
            t.call(this, r.TopicItemType.ARTICLE, {
              useScrollableContent: !0,
              useScrollButton: !0,
            }) || this
          return (i._data = e), i.initMainImage(), i.initScrollContent(), i
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'selected', {
            set: function (t) {
              ;(this._selected = t),
                t ? this.initListeners() : this.removeListeners()
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.expand = function (e) {
            var i = this
            t.prototype.expand.call(this, e),
              this._readmoreButton.playResetAnimation(),
              e
                ? (this.removeListeners(), this._readmoreButton.hide())
                : ((this.useExpandButton =
                    this.useExpandButtonInsteadOfReadmore),
                  this.useExpandButtonInsteadOfReadmore ||
                    this._readmoreButton.show(0.5)),
              p.TweenMax.to(
                this._scrollableContent.transform,
                f.AppConfig.TOPIC_ITEM_CONTENT_EXPAND_DURATION,
                {
                  x: e ? 0.5 * s.Size.CONTENT_MARGIN : 0,
                  ease: d.Ease.Power5easeInOut,
                  onStart: function () {
                    i._expanded || i.initListeners()
                  },
                }
              )
          }),
          (e.prototype.updateStyles = function () {
            t.prototype.updateStyles.call(this),
              this.applyStyle({
                backgroundColor: this._data.useDarkMode
                  ? c.Color.BLACK
                  : c.Color.WHITE,
              }),
              this._mainImage.applyStyle({
                position: 'absolute',
                width: '100%',
                height: this._standardHeight,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }),
              this._scrollContent.applyStyle({
                color: this._data.useDarkMode
                  ? c.Color.WHITE
                  : c.Color.DARK_GREY,
              }),
              this._titleField.applyStyle({
                fontSize: l.Font.H1_FONTSIZE,
                fontFamily: l.Font.BOLD_FAMILY,
              }),
              this._abstractField.applyStyle({
                fontFamily: l.Font.REGULAR_FAMILY,
                fontSize: l.Font.ARTICLE_P_FONTSIZE,
                lineHeight: '1.5',
                paddingTop: 0.1 * l.Font.ARTICLE_P_FONTSIZE,
              }),
              this._readmoreButton.applyStyle({
                paddingTop: 0.3 * l.Font.ARTICLE_P_FONTSIZE,
              }),
              this._richText.applyStyle({
                paddingTop: l.Font.ARTICLE_P_FONTSIZE,
              }),
              this._expanded ||
                (this.useExpandButtonInsteadOfReadmore
                  ? (this._readmoreButton.hide(!0), (this.useExpandButton = !0))
                  : ((this.useExpandButton = !1), this._readmoreButton.show()))
          }),
          (e.prototype.initMainImage = function () {
            ;(this._mainImage = new h.BackgroundImage(
              this._data.mainImageURL,
              this._data.useDarkMode ? c.Color.BLACK : c.Color.WHITE
            )),
              this.addChildAt(this._mainImage, 0)
          }),
          (e.prototype.initScrollContent = function () {
            var t = this
            ;(this._titleField = new _.UIComponent('title-field')),
              (this._titleField.view.innerHTML = this._data.title),
              (this._abstractField = new _.UIComponent('abstract-field')),
              (this._abstractField.view.innerHTML = this._data.abstract),
              (this._readmoreButton = new g.LabaledArrowButton(
                m.Language.READ_MORE_LABEL
              )),
              (this._readmoreButton.useArrowDownAnimation = !1),
              (this._richText = new u.RichText(this._data.richtext, !0)),
              (this._richText.darkMode = this._data.useDarkMode),
              this._richText.onExternalLinkSignal.add(function (e) {
                return t.onExternalLinkSignal.dispatch(e)
              }),
              this._scrollContent.addChild(this._titleField),
              this._scrollContent.addChild(this._abstractField),
              this._scrollContent.addChild(this._readmoreButton),
              this._scrollContent.addChild(this._richText)
          }),
          (e.prototype.initListeners = function () {
            var t = this
            ;(this._mouseOverListenerID = this.addNativeListener(
              'mouseover',
              function () {
                return t.onMouseOver()
              }
            )),
              (this._mouseOutListenerID = this.addNativeListener(
                'mouseout',
                function () {
                  return t.onMouseOut()
                }
              )),
              (this._clickListenerID = this.addNativeListener(
                'click',
                function () {
                  return t.onClicked()
                }
              ))
          }),
          (e.prototype.removeListeners = function () {
            this.applyStyle({ cursor: this._selected ? 'auto' : 'pointer' }),
              this.removeNativeListener(this._mouseOverListenerID),
              this.removeNativeListener(this._mouseOutListenerID),
              this.removeNativeListener(this._clickListenerID)
          }),
          (e.prototype.updateSizeValues = function () {
            ;(this._standardWidth = 400 * s.Size.APP_SIZE_FACTOR + 260),
              (this._standardHeight = this._standardWidth / (16 / 11)),
              (this._expandedWidth =
                this._standardWidth + s.Size.CONTENT_MARGIN),
              (this._expandedHeight = this.calcScrollableContentHeight()),
              this._expandedHeight >
                s.Size.APP_HEIGHT - 2 * s.Size.CONTENT_MARGIN &&
                (this._expandedHeight =
                  s.Size.APP_HEIGHT - 2 * s.Size.CONTENT_MARGIN),
              (this._currentWidth = this._expanded
                ? this._expandedWidth
                : this._standardWidth),
              (this._currentHeight = this._expanded
                ? this._expandedHeight
                : this._standardHeight)
          }),
          (e.prototype.calcScrollableContentHeight = function () {
            var t = this._scrollableContent.scrollHeight
            return Math.round(t)
          }),
          (e.prototype.calcContentPaddingTop = function () {
            var t =
              this._standardHeight -
              (this._titleField.view.offsetHeight +
                this._abstractField.view.offsetHeight +
                2 * s.Size.CONTENT_MARGIN +
                0.5 * l.Font.ARTICLE_P_FONTSIZE)
            return (
              t < 0.5 * this._standardHeight &&
                (t = 0.5 * this._standardHeight),
              t
            )
          }),
          Object.defineProperty(
            e.prototype,
            'useExpandButtonInsteadOfReadmore',
            {
              get: function () {
                return (
                  this._titleField.view.offsetHeight +
                    this._abstractField.view.offsetHeight +
                    this._readmoreButton.view.offsetHeight +
                    this.calcContentPaddingTop() +
                    5 >
                  this._standardHeight
                )
              },
              enumerable: !1,
              configurable: !0,
            }
          ),
          (e.prototype.onContentScrolled = function () {
            t.prototype.onContentScrolled.call(this),
              (this._mainImage.transform.y =
                0.5 * -this._scrollableContent.scrollTop)
          }),
          (e.prototype.onMouseOver = function () {
            !this.expanded &&
              this._selected &&
              (this._readmoreButton.playArrowDownAnimation(),
              this.applyStyle({ cursor: 'pointer' }))
          }),
          (e.prototype.onMouseOut = function () {
            !this.expanded &&
              this._selected &&
              (this._readmoreButton.playResetAnimation(),
              this.applyStyle({ cursor: 'auto' }))
          }),
          (e.prototype.onClicked = function () {
            this._standardHeight == this._currentHeight && this.expand(!0)
          }),
          e
        )
      })(a.TopicItemExpandableContent)
    e.ArticleContent = y
  },
  function (t, e) {
    t.exports =
      '<svg width="21px" height="21px" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>little-dot-arrow</title><desc>Created with Sketch.</desc><g id="__3VxdykW__little-dot-arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M10.6391574,0.333333333 C16.1510612,0.333333333 20.6191576,4.80142973 20.626667,10.3133335 C20.626667,15.8252373 16.1585706,20.2933337 10.6466668,20.2933337 C5.13476306,20.2933337 0.666666667,15.8252373 0.666666667,10.3133335 C0.666666667,4.80142973 5.13476306,0.333333333 10.6391574,0.333333333 Z" id="__3VxdykW__circle" fill="#F39500" fill-rule="nonzero"></path><polygon id="__3VxdykW__arrow" fill="#FFFFFF" fill-rule="nonzero" points="14.0880886 11.8751174 15.4933332 10.5680751 8.79446834 4.31830986 7.40519243 5.64037559 12.682844 10.5680751 7.33333333 15.6460094 8.73857793 16.9530516"></polygon></g></svg>'
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TwitterContent = void 0)
    var r = i(30),
      a = i(110),
      s = i(71),
      l = i(2),
      u = i(48),
      c = i(11),
      h = i(44),
      p = i(111),
      f = (function (t) {
        function e(e) {
          var i =
            t.call(this, e.type, {
              useScrollableContent: !0,
              useScrollButton: !0,
              showScrollOverflowGradient: !0,
              expandOnSelect: !0,
            }) || this
          return (
            (i._data = e), i.initSocialChannelLogo(), i.initScrollContent(), i
          )
        }
        return (
          o(e, t),
          (e.prototype.updateStyles = function () {
            var e
            if (
              (t.prototype.updateStyles.call(this),
              this._richText.applyStyle({ marginTop: l.Size.CONTENT_MARGIN }),
              this._image)
            ) {
              var i = this._standardWidth - 2 * l.Size.CONTENT_MARGIN
              this._image.applyStyle({
                position: 'relative',
                cursor: this._data.hasVideo ? 'pointer' : 'auto',
                marginTop: l.Size.CONTENT_MARGIN,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                width: i,
                height: i / (this._image.ratio ? this._image.ratio : 16 / 9),
                borderRadius: 10 * l.Size.APP_SIZE_FACTOR + 10,
                overflow: 'hidden',
              }),
                null === (e = this._twitterPlayIcon) ||
                  void 0 === e ||
                  e.applyStyle({
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    x: '-50%',
                    y: '-50%',
                  })
            }
          }),
          (e.prototype.initSocialChannelLogo = function () {
            var t = this
            ;(this._socialChannelLogo = new p.SocialChannelLogo(
              this._data.logoURL
            )),
              this._socialChannelLogo.addNativeListener('click', function () {
                return t.onSocialChannelLogoClicked()
              }),
              this.addChildAt(this._socialChannelLogo, 1)
          }),
          (e.prototype.initScrollContent = function () {
            var t = this
            ;(this._profileInfo = new a.ProfileInfo(
              this._data.profileImageURL,
              this._data.profileName,
              this._data.timeSincePublish,
              this._data.postURL
            )),
              this._profileInfo.onExternalLinkSignal.add(function (e) {
                return t.onExternalLinkSignal.dispatch(e)
              }),
              (this._richText = new s.RichText(this._data.message)),
              (this._richText.darkMode = !1),
              this._richText.onExternalLinkSignal.add(function (e) {
                return t.onExternalLinkSignal.dispatch(e)
              }),
              this._scrollContent.addChild(this._profileInfo),
              this._scrollContent.addChild(this._richText),
              this._data.imageURL
                ? ((this._image = new u.BackgroundImage(this._data.imageURL)),
                  this._image.onLoadedSignal.addOnce(function () {
                    return t.onContentImageLoaded()
                  }),
                  this._scrollContent.addChild(this._image),
                  this._data.hasVideo &&
                    ((this._twitterPlayIcon = new c.SVGComponent(i(222))),
                    this._image.addChild(this._twitterPlayIcon),
                    (this._image.interactive = !0),
                    this._image.addNativeListener('click', function () {
                      return t.onVideoThumbnailClicked()
                    })))
                : requestAnimationFrame(function () {
                    t.onContentImageLoaded()
                  })
          }),
          (e.prototype.updateHeaderStyle = function () {
            this._socialChannelLogo.applyStyle({
              opacity:
                1 -
                h.MathUtils.calcProgressWithinValues(
                  0,
                  100,
                  this._scrollableContent.scrollTop
                ),
            })
          }),
          (e.prototype.updateSizeValues = function () {
            var t = 0.5 * l.Size.APP_HEIGHT,
              e = 0.7 * l.Size.APP_HEIGHT
            ;(this._standardWidth = 300 * l.Size.APP_SIZE_FACTOR + 220),
              (this._expandedWidth = this._standardWidth),
              (this._standardHeight = this.calcScrollableContentHeight()),
              this._standardHeight > t && (this._standardHeight = t),
              (this._expandedHeight = this.calcScrollableContentHeight()),
              this._expandedHeight > e && (this._expandedHeight = e),
              (this._currentWidth = this._expanded
                ? this._expandedWidth
                : this._standardWidth),
              (this._currentHeight = this._expanded
                ? this._expandedHeight
                : this._standardHeight)
          }),
          (e.prototype.calcScrollableContentHeight = function () {
            var t = this._scrollableContent.scrollHeight
            return Math.round(t)
          }),
          (e.prototype.updateContentInteractivity = function () {
            t.prototype.updateContentInteractivity.call(this),
              (this._socialChannelLogo.interactive =
                this._scrollContent.interactive),
              (this._profileInfo.interactive = this._profileInfo.interactive)
          }),
          (e.prototype.onContentImageLoaded = function () {
            this.updateStyles(),
              this.updateStyles(),
              this._expanded && this.expand(this._expanded)
          }),
          (e.prototype.onContentScrolled = function () {
            t.prototype.onContentScrolled.call(this), this.updateHeaderStyle()
          }),
          (e.prototype.onVideoThumbnailClicked = function () {
            this._selected &&
              this.onExternalLinkSignal.dispatch(this._data.postURL)
          }),
          (e.prototype.onSocialChannelLogoClicked = function () {
            this.onExternalLinkSignal.dispatch(this._data.postURL)
          }),
          e
        )
      })(r.TopicItemExpandableContent)
    e.TwitterContent = f
  },
  function (t, e) {
    t.exports =
      '<svg width="70px" height="70px" viewBox="0 0 70 70" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>twitter-play-icon</title><desc>Created with Sketch.</desc><defs><linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="__38ewkbU__linearGradient-1"><stop stop-color="#31ACEE" offset="0%"></stop><stop stop-color="#248EEA" offset="100%"></stop></linearGradient></defs><g id="__38ewkbU__twitter-play-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="__38ewkbU__Oval" fill="url(#__38ewkbU__linearGradient-1)" fill-rule="nonzero" cx="35" cy="35" r="35"></circle><path d="M24.268127,23.5982043 L42.3266356,41.6567129 C43.1076842,42.4377615 43.1076842,43.7040915 42.3266356,44.48514 C42.0323725,44.7794032 41.6536465,44.9745461 41.2432277,45.0433787 L19.5457771,48.6823207 C18.4564218,48.8650196 17.4252182,48.1300294 17.2425192,47.0406742 C17.2057888,46.8216664 17.2057888,46.5980706 17.2425192,46.3790629 L20.8814613,24.6816123 C21.0641602,23.592257 22.0953638,22.8572668 23.1847191,23.0399657 C23.595138,23.1087983 23.9738639,23.3039412 24.268127,23.5982043 Z" id="__38ewkbU__Rectangle" fill="#FFFFFF" transform="translate(30.924840, 35.000000) rotate(-135.000000) translate(-30.924840, -35.000000) "></path></g></svg>'
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.LinkedInContentData = void 0)
    var r = i(47),
      a = i(32),
      s = i(113),
      l = i(33),
      u = (function (t) {
        function e(e) {
          return t.call(this, e) || this
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'logoURL', {
            get: function () {
              return i(225)
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'message', {
            get: function () {
              return this.parseHashTags(
                s.ResponseUtils.getValueFromPathStrings(this._data.rawJSON, [
                  'attachments.linkedin.comment',
                  'attachments.linkedin_embed.post.message',
                ])
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'profileImageURL', {
            get: function () {
              return a.MediaUtils.getMediaURL(
                s.ResponseUtils.getValueFromPathStrings(this._data.rawJSON, [
                  'attachments.linkedin.company_logo_url',
                  'attachments.linkedin_embed.user.profile_image_url',
                ])
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'profileName', {
            get: function () {
              return s.ResponseUtils.getValueFromPathStrings(
                this._data.rawJSON,
                [
                  'attachments.linkedin.company_name',
                  'attachments.linkedin_embed.user.name',
                ]
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'imageURL', {
            get: function () {
              return a.MediaUtils.getMediaURL(
                s.ResponseUtils.getValueFromPathStrings(this._data.rawJSON, [
                  'attachments.linkedin.thumbnail',
                  'attachments.linkedin_embed.post.images[0].image_url',
                  'attachments.linkedin_embed.post.shared_link.image_url',
                  'attachments.linkedin_embed.post.video.poster_image_url',
                ])
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'timeSincePublish', {
            get: function () {
              return ''
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'postURL', {
            get: function () {
              return s.ResponseUtils.getValueFromPathStrings(
                this._data.rawJSON,
                [
                  'attachments.linkedin_embed.original_url',
                  'attachments.linkedin.original_url',
                ]
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.parseHashTags = function (t) {
            return l.LinkUtils.hashTagLinkify(
              t,
              'https://linkedin.com/feed/hashtag/'
            )
          }),
          e
        )
      })(r.GenericPostContentData)
    e.LinkedInContentData = u
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.JsonUtils = void 0)
    var n = (function () {
      function t() {}
      return (
        (t.getStringifiedValueFromObject = function (e, i) {
          var n = JSON.stringify(t.getValueFromObject(e, i))
          return (
            n &&
              '"' == n.charAt(0) &&
              '"' == n.charAt(n.length - 1) &&
              (n = n.slice(1, -1)),
            n
          )
        }),
        (t.getValueFromObject = function (t, e) {
          return t.split('.').reduce(function (t, e) {
            return t && t[e]
          }, e)
        }),
        (t.isStringifiedArray = function (t) {
          return '[' == t.charAt(0) && ']' == t.charAt(t.length - 1)
        }),
        (t.isStringifiedObject = function (t) {
          return '{' == t.charAt(0) && '}' == t.charAt(t.length - 1)
        }),
        (t.isStringifiedBoolean = function (t) {
          return 'true' == t || 'false' == t
        }),
        (t.isStringifiedNull = function (t) {
          return 'null' == t || 'undefined' == t
        }),
        (t.isStringifiedNumber = function (t) {
          return parseFloat(t).toString() == t
        }),
        t
      )
    })()
    e.JsonUtils = n
  },
  function (t, e) {
    t.exports =
      '<svg width="69px" height="69px" viewBox="0 0 69 69" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>linkedin-icon</title><desc>Created with Sketch.</desc><g id="__xieG4If__linkedin-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="__xieG4If__linkedin-square" transform="translate(-0.000000, -0.000000)" fill-rule="nonzero"><path d="M68.8212282,12.903997 L68.8212282,55.9172312 C68.8212282,59.4718078 67.5592062,62.5111182 65.0351622,65.0351622 C62.5111182,67.5592062 59.4718078,68.8212282 55.9172312,68.8212282 L12.903997,68.8212282 C9.34942036,68.8212282 6.31011002,67.5592062 3.78606601,65.0351622 C1.262022,62.5111182 0,59.4718078 0,55.9172312 L0,12.903997 C0,9.34942036 1.262022,6.31011002 3.78606601,3.78606601 C6.31011002,1.262022 9.34942036,0 12.903997,0 L55.9172312,0 C59.4718078,0 62.5111182,1.262022 65.0351622,3.78606601 C67.5592062,6.31011002 68.8212282,9.34942036 68.8212282,12.903997 Z" id="__xieG4If__Path" fill="#0077B5"></path><polygon id="__xieG4If__Path" fill="#FFFFFF" points="10.618847 57.6199465 20.9689316 57.6199465 20.9689316 26.524917 10.618847 26.524917"></polygon><path d="M21.6409986,16.9365044 C21.6111279,15.3832455 21.0734611,14.0988222 20.027998,13.0832344 C18.9825347,12.0676431 17.5935629,11.5598475 15.8610826,11.5598475 C14.1286023,11.5598475 12.7172291,12.0676431 11.6269632,13.0832344 C10.5366954,14.0988257 9.99156155,15.3832491 9.99156155,16.9365044 C9.99156155,18.4598932 10.5217603,19.7368494 11.5821578,20.7673731 C12.6425554,21.7979004 14.0240601,22.3131641 15.7266719,22.3131641 L15.7714775,22.3131641 C17.5338281,22.3131641 18.9526683,21.7979004 20.0279983,20.7673731 C21.1033318,19.7368458 21.6409986,18.4598896 21.6409986,16.9365044 L21.6409986,16.9365044 Z" id="__xieG4If__Path" fill="#FFFFFF"></path><path d="M47.8522431,57.6199465 L58.2023277,57.6199465 L58.2023277,39.7873353 C58.2023277,35.1873096 57.1120581,31.707413 54.931519,29.3476454 C52.75098,26.9878957 49.8684879,25.8080208 46.2840428,25.8080208 C42.2216669,25.8080208 39.1002184,27.5554407 36.9196971,31.0502805 L37.0093081,31.0502805 L37.0093081,26.524917 L26.6592235,26.524917 C26.7488345,28.4963591 26.7488345,38.8613689 26.6592235,57.6199465 L37.0093081,57.6199465 L37.0093081,40.2353887 C37.0093081,39.1003147 37.1138548,38.2639448 37.3229481,37.7262789 C37.7710033,36.6808156 38.4430861,35.7921723 39.3391965,35.0603491 C40.2353069,34.3285258 41.3405106,33.9626142 42.6548078,33.9626142 C46.1197613,33.9626142 47.852238,36.3074387 47.852238,40.9970875 L47.8522431,57.6199465 Z" id="__xieG4If__Path" fill="#FFFFFF"></path></g></g></svg>'
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.InstagramContentData = void 0)
    var r = i(47),
      a = i(32),
      s = i(33),
      l = i(113),
      u = (function (t) {
        function e(e) {
          return t.call(this, e) || this
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'logoURL', {
            get: function () {
              return i(227)
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'message', {
            get: function () {
              return this.parseHashTags(
                l.ResponseUtils.getValueFromPathStrings(this._data.rawJSON, [
                  'attachments.instagram_item.caption',
                ])
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'profileImageURL', {
            get: function () {
              return a.MediaUtils.getMediaURL(
                l.ResponseUtils.getValueFromPathStrings(this._data.rawJSON, [
                  'attachments.instagram_item.profile_picture',
                ])
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'profileName', {
            get: function () {
              return l.ResponseUtils.getValueFromPathStrings(
                this._data.rawJSON,
                ['attachments.instagram_item.user_full_name']
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'imageURL', {
            get: function () {
              return a.MediaUtils.getMediaURL(
                l.ResponseUtils.getValueFromPathStrings(this._data.rawJSON, [
                  'cover_url',
                ])
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'timeSincePublish', {
            get: function () {
              return this.calcTimeSincePublish(
                l.ResponseUtils.getValueFromPathStrings(this._data.rawJSON, [
                  'attachments.instagram_item.created_time',
                ])
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'postURL', {
            get: function () {
              return l.ResponseUtils.getValueFromPathStrings(
                this._data.rawJSON,
                ['attachments.instagram_item.link']
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.parseHashTags = function (t) {
            return s.LinkUtils.hashTagLinkify(
              t,
              'https://www.instagram.com/explore/tags/'
            )
          }),
          e
        )
      })(r.GenericPostContentData)
    e.InstagramContentData = u
  },
  function (t, e) {
    t.exports =
      '<svg width="69px" height="69px" viewBox="0 0 69 69" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>instagram-icon</title><defs><radialGradient cx="26.5626266%" cy="107.702106%" fx="26.5626266%" fy="107.702106%" r="99.107386%" gradientTransform="translate(0.265626,1.077021),scale(0.999727,1.000000),rotate(-90.000000),translate(-0.265626,-1.077021)" id="__1A6X8Ls__radialGradient-1"><stop stop-color="#FFDD55" offset="0%"></stop><stop stop-color="#FFDD55" offset="10%"></stop><stop stop-color="#FF543E" offset="50%"></stop><stop stop-color="#C837AB" offset="100%"></stop></radialGradient><radialGradient cx="-16.7505274%" cy="7.20383154%" fx="-16.7505274%" fy="7.20383154%" r="44.3018739%" gradientTransform="translate(-0.167505,0.072038),scale(0.999727,1.000000),rotate(78.677638),translate(0.167505,-0.072038)" id="__1A6X8Ls__radialGradient-2"><stop stop-color="#3771C8" offset="0%"></stop><stop stop-color="#3771C8" offset="12.8%"></stop><stop stop-color="#6600FF" stop-opacity="0" offset="100%"></stop></radialGradient></defs><g id="__1A6X8Ls__instagram-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="__1A6X8Ls__Instagram_logo_2016" fill-rule="nonzero"><path d="M34.5206723,0 C20.1133147,0 15.899712,0.0148627961 15.0806658,0.0828070067 C12.124031,0.328573956 10.2842292,0.794097962 8.27987496,1.79202856 C6.7352058,2.559055 5.51698733,3.44816869 4.31469329,4.69452031 C2.12508494,6.96746648 0.798049579,9.7637954 0.317662777,13.0877536 C0.0841045524,14.7014286 0.0161603418,15.0305334 0.00235917398,23.2730154 C-0.00294896748,26.0205094 0.00235917398,29.6364154 0.00235917398,34.4864642 C0.00235917398,48.8821439 0.0182835984,53.0915001 0.0872894373,53.9089538 C0.326155803,56.7859665 0.777347827,58.5960427 1.73281329,60.5759795 C3.55881395,64.3659925 7.04626289,67.2111563 11.1547644,68.2727846 C12.5773463,68.6390464 14.1485562,68.8407558 16.1656499,68.9363023 C17.0202607,68.9734593 25.7309208,69 34.4468891,69 C43.1628574,69 51.8788256,68.9893837 52.7122039,68.9469186 C55.0477861,68.8370401 56.4040162,68.6549708 57.9035662,68.2674765 C62.0386084,67.20054 65.4623596,64.3978414 67.3255173,60.5547469 C68.2624043,58.6225834 68.7374829,56.7435014 68.9524626,54.0167091 C68.9991743,53.4221973 69.0188144,43.9434491 69.0188144,34.4774404 C69.0188144,25.0098393 68.9975818,15.548608 68.9508702,14.9540961 C68.7332364,12.1832463 68.2581577,10.3200886 67.2910144,8.35076814 C66.4974472,6.73868558 65.6162957,5.5347991 64.3370336,4.30384109 C62.054002,2.12325658 59.2619196,0.796221219 55.9347765,0.316365231 C54.322694,0.0833378209 54.0015514,0.0143319819 45.7526996,0 L34.5206723,0 Z" id="__1A6X8Ls__Path" fill="url(#__1A6X8Ls__radialGradient-1)"></path><path d="M34.5206723,0 C20.1133147,0 15.899712,0.0148627961 15.0806658,0.0828070067 C12.124031,0.328573956 10.2842292,0.794097962 8.27987496,1.79202856 C6.7352058,2.559055 5.51698733,3.44816869 4.31469329,4.69452031 C2.12508494,6.96746648 0.798049579,9.7637954 0.317662777,13.0877536 C0.0841045524,14.7014286 0.0161603418,15.0305334 0.00235917398,23.2730154 C-0.00294896748,26.0205094 0.00235917398,29.6364154 0.00235917398,34.4864642 C0.00235917398,48.8821439 0.0182835984,53.0915001 0.0872894373,53.9089538 C0.326155803,56.7859665 0.777347827,58.5960427 1.73281329,60.5759795 C3.55881395,64.3659925 7.04626289,67.2111563 11.1547644,68.2727846 C12.5773463,68.6390464 14.1485562,68.8407558 16.1656499,68.9363023 C17.0202607,68.9734593 25.7309208,69 34.4468891,69 C43.1628574,69 51.8788256,68.9893837 52.7122039,68.9469186 C55.0477861,68.8370401 56.4040162,68.6549708 57.9035662,68.2674765 C62.0386084,67.20054 65.4623596,64.3978414 67.3255173,60.5547469 C68.2624043,58.6225834 68.7374829,56.7435014 68.9524626,54.0167091 C68.9991743,53.4221973 69.0188144,43.9434491 69.0188144,34.4774404 C69.0188144,25.0098393 68.9975818,15.548608 68.9508702,14.9540961 C68.7332364,12.1832463 68.2581577,10.3200886 67.2910144,8.35076814 C66.4974472,6.73868558 65.6162957,5.5347991 64.3370336,4.30384109 C62.054002,2.12325658 59.2619196,0.796221219 55.9347765,0.316365231 C54.322694,0.0833378209 54.0015514,0.0143319819 45.7526996,0 L34.5206723,0 Z" id="__1A6X8Ls__Path" fill="url(#__1A6X8Ls__radialGradient-2)"></path><path d="M34.5047478,9.02384048 C27.5850546,9.02384048 26.7166427,9.05409689 23.9988743,9.17777658 C21.286414,9.30198709 19.4349342,9.73141574 17.8148895,10.3614921 C16.1391092,11.0122703 14.7175889,11.8828055 13.3013768,13.2995484 C11.884103,14.7157606 11.0135678,16.1372808 10.3606664,17.8125303 C9.72899758,19.4331059 9.29903812,21.2851164 9.17695087,23.9965151 C9.05539443,26.7142835 9.02354558,27.5832263 9.02354558,34.5029195 C9.02354558,41.4226127 9.0543328,42.2883706 9.17748168,45.006139 C9.30222301,47.7185993 9.73165165,49.570079 10.3611972,51.1901238 C11.0125062,52.865904 11.8830414,54.2874243 13.2997843,55.7036365 C14.7154657,57.1209102 16.136986,57.9935687 17.8117046,58.6443468 C19.432811,59.2744232 21.2848215,59.7038519 23.996751,59.8280624 C26.7145194,59.9517421 27.5824006,59.9819985 34.501563,59.9819985 C41.421787,59.9819985 42.2875448,59.9517421 45.0053133,59.8280624 C47.7177736,59.7038519 49.5713766,59.2744232 51.192483,58.6443468 C52.8677324,57.9935687 54.2871294,57.1209102 55.7028108,55.7036365 C57.1200845,54.2874243 57.9906197,52.865904 58.6435211,51.1906546 C59.2698818,49.570079 59.6998413,47.7180685 59.8272367,45.0066698 C59.9493239,42.2889014 59.9811728,41.4226127 59.9811728,34.5029195 C59.9811728,27.5832263 59.9493239,26.7148143 59.8272367,23.9970459 C59.6998413,21.2845856 59.2698818,19.4331059 58.6435211,17.8130611 C57.9906197,16.1372808 57.1200845,14.7157606 55.7028108,13.2995484 C54.285537,11.8822747 52.8682632,11.0117395 51.1908905,10.3614921 C49.5665992,9.73141574 47.7140579,9.30198709 45.0015976,9.17777658 C42.2838291,9.05409689 41.4186021,9.02384048 34.4967856,9.02384048 L34.5047478,9.02384048 Z M32.2190621,13.6153828 C32.8974426,13.6143212 33.6543836,13.6153828 34.5047478,13.6153828 C41.3076619,13.6153828 42.1139686,13.6398003 44.800419,13.7618875 C47.2846292,13.8754818 48.6328971,14.2905784 49.5310347,14.6393233 C50.7200584,15.1011316 51.5677686,15.6531783 52.4590055,16.5449461 C53.3507733,17.4367139 53.90282,18.2860165 54.3656899,19.4750402 C54.7144348,20.3721161 55.1300623,21.720384 55.2431257,24.2045942 C55.365213,26.8905138 55.3917537,27.6973513 55.3917537,34.4970805 C55.3917537,41.2968097 55.365213,42.1036472 55.2431257,44.7895668 C55.1295315,47.273777 54.7144348,48.6220449 54.3656899,49.5191208 C53.9038816,50.7081445 53.3507733,51.5547931 52.4590055,52.44603 C51.5672377,53.3377978 50.7205892,53.8898445 49.5310347,54.3516528 C48.6339588,54.7019902 47.2846292,55.1160252 44.800419,55.2296194 C42.1144994,55.3517067 41.3076619,55.3782474 34.5047478,55.3782474 C27.7013029,55.3782474 26.8949962,55.3517067 24.2090767,55.2296194 C21.7248665,55.1149636 20.3765985,54.6998669 19.4779302,54.351122 C18.2889065,53.8893137 17.4396039,53.337267 16.5478361,52.4454992 C15.6560683,51.5537315 15.1040216,50.7065521 14.6411517,49.5169976 C14.2924068,48.6199217 13.8767793,47.2716538 13.7637159,44.7874436 C13.6416287,42.101524 13.6172112,41.2946865 13.6172112,34.4907108 C13.6172112,27.686735 13.6416287,26.884144 13.7637159,24.1982245 C13.8773101,21.7140143 14.2924068,20.3657463 14.6411517,19.4676088 C15.10296,18.2785851 15.6560683,17.4292825 16.5478361,16.5375147 C17.4396039,15.6457469 18.2889065,15.0937002 19.4779302,14.6308303 C20.3760677,14.280493 21.7248665,13.8664579 24.2090767,13.7523329 C26.5595217,13.6461701 27.4703988,13.6143212 32.2190621,13.6090131 L32.2190621,13.6153828 Z M48.1052679,17.8459716 C46.4172789,17.8459716 45.0477784,19.2138796 45.0477784,20.9023994 C45.0477784,22.5903884 46.4172789,23.9598889 48.1052679,23.9598889 C49.7932569,23.9598889 51.1627574,22.5903884 51.1627574,20.9023994 C51.1627574,19.2144105 49.7932569,17.84491 48.1052679,17.84491 L48.1052679,17.8459716 Z M34.5047478,21.4183508 C27.2787749,21.4183508 21.4201791,27.2769465 21.4201791,34.5029195 C21.4201791,41.7288924 27.2787749,47.5848341 34.5047478,47.5848341 C41.7307208,47.5848341 47.5871933,41.7288924 47.5871933,34.5029195 C47.5871933,27.2769465 41.73019,21.4183508 34.504217,21.4183508 L34.5047478,21.4183508 Z M34.5047478,26.0098931 C39.1950216,26.0098931 42.9977742,29.8121149 42.9977742,34.5029195 C42.9977742,39.1931933 39.1950216,42.9959458 34.5047478,42.9959458 C29.8139432,42.9959458 26.0117215,39.1931933 26.0117215,34.5029195 C26.0117215,29.8121149 29.8139432,26.0098931 34.5047478,26.0098931 Z" id="__1A6X8Ls__Shape" fill="#FFFFFF"></path></g></g></svg>'
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TopicSatellitePositions = void 0)
    var n = (function () {
      function t() {}
      return (
        (t.S4 = [
          { x: 0, y: 0, z: -150 },
          { x: 1.1, y: 0, z: -230 },
          { x: -0.1, y: 0.9, z: -250 },
          { x: 1.1, y: 1, z: -150 },
        ]),
        t
      )
    })()
    e.TopicSatellitePositions = n
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ProgressTimer = void 0)
    var n = (function () {
      function t(t, e) {
        ;(this._duration = t), (this._callbacks = e), this.start()
      }
      return (
        (t.prototype.stop = function () {
          this._stopped = !0
        }),
        (t.prototype.start = function () {
          ;(this._startTime = Date.now()), this.update()
        }),
        (t.prototype.update = function () {
          var t = this
          if (!this._stopped) {
            var e = Date.now() - this._startTime
            if (e < 1e3 * this._duration) {
              if (
                (requestAnimationFrame(function () {
                  return t.update()
                }),
                this._callbacks.onUpdate)
              ) {
                var i = e / (1e3 * this._duration)
                this._callbacks.onUpdate(i)
              }
            } else
              this._callbacks.onUpdate && this._callbacks.onUpdate(1),
                this._callbacks.onComplete && this._callbacks.onComplete()
          }
        }),
        t
      )
    })()
    e.ProgressTimer = n
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TopicTitle = void 0)
    var r = i(6),
      a = i(10),
      s = i(2),
      l = i(1),
      u = i(5),
      c = i(45),
      h = (function (t) {
        function e(e) {
          var i = t.call(this, 'topic-title') || this
          return (i._title = e), i.initTitleField(), (i.interactive = !1), i
        }
        return (
          o(e, t),
          (e.prototype.show = function () {
            u.TweenMax.to(this.view, 1, { autoAlpha: 1 })
          }),
          (e.prototype.hide = function () {
            u.TweenMax.to(this.view, 0.5, { autoAlpha: 0 })
          }),
          (e.prototype.updateStyles = function () {
            this.applyStyle({
              position: 'absolute',
              transformStyle: 'preserve-3d',
            }),
              this._titleField.applyStyle({
                color: r.Color.WHITE,
                x: '-50%',
                y: -s.Size.APP_HEIGHT * (c.DeviceUtils.IS_IE ? 0.48 : 0.6),
                z: -400,
                whiteSpace: 'nowrap',
                fontSize: 40 * s.Size.APP_SIZE_FACTOR + 35,
                lineHeight: '1',
                fontFamily: a.Font.BOLD_FAMILY,
              })
          }),
          (e.prototype.initTitleField = function () {
            ;(this._titleField = new l.UIComponent('title-field')),
              (this._titleField.view.innerText = this._title),
              this.addChild(this._titleField)
          }),
          e
        )
      })(l.UIComponent)
    e.TopicTitle = h
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.BackgroundSystem = void 0)
    var r = i(2),
      a = i(1),
      s = i(4),
      l = i(5),
      u = i(6),
      c = i(3),
      h = (function (t) {
        function e() {
          var e = t.call(this, 'background-system') || this
          return (
            (e.onBackgroundClickSignal = new s.Signal()), e.initListeners(), e
          )
        }
        return (
          o(e, t),
          (e.prototype.setBackgroundImageURL = function (t) {
            var e = this
            if (this._currentImageURL != t) {
              var i = this._backgroundImage
              i &&
                l.TweenMax.to(i.view, 0.9 * c.AppConfig.TOPIC_CHANGE_DURATION, {
                  autoAlpha: 0,
                  ease: l.Sine.easeInOut,
                  onComplete: function () {
                    i.destroy()
                  },
                }),
                (this._backgroundImage = new a.UIComponent('img')),
                (this._currentImageURL = t),
                (this._backgroundImage.view.onload = function () {
                  e.updateStyles(),
                    e._backgroundImage.applyStyle({ opacity: 0 }),
                    e.addChild(e._backgroundImage),
                    l.TweenMax.to(
                      e._backgroundImage.view,
                      0.9 * c.AppConfig.TOPIC_CHANGE_DURATION,
                      {
                        alpha: 0.6,
                        ease: l.Sine.easeInOut,
                        onComplete: function () {
                          i && i.destroy()
                        },
                      }
                    )
                }),
                (this._backgroundImage.view.src = t)
            }
          }),
          (e.prototype.updateStyles = function () {
            if (
              (this.applyStyle({
                userSelect: 'none',
                webkitUserSelect: 'none',
                position: 'absolute',
                width: r.Size.APP_WIDTH,
                height: r.Size.APP_HEIGHT,
                backgroundColor: u.Color.BLACK,
                overflow: 'hidden',
              }),
              this._backgroundImage)
            ) {
              var t =
                this._backgroundImage.view.naturalWidth /
                  this._backgroundImage.view.naturalHeight >
                r.Size.APP_WIDTH / r.Size.APP_HEIGHT
              this._backgroundImage.applyStyle({
                pointerEvents: 'none',
                position: 'absolute',
                top: '50%',
                y: '-50%',
                left: '50%',
                x: '-50%',
                width: t ? null : '100%',
                height: t ? '100%' : null,
              })
            }
          }),
          (e.prototype.initListeners = function () {
            var t = this
            this.addNativeListener('click', function () {
              return t.onBackgroundClicked()
            })
          }),
          (e.prototype.onBackgroundClicked = function () {
            this.onBackgroundClickSignal.dispatch()
          }),
          e
        )
      })(a.UIComponent)
    e.BackgroundSystem = h
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.NavigationSystem = void 0)
    var r = i(233),
      a = i(2),
      s = i(3),
      l = i(5),
      u = i(1),
      c = i(4),
      h = i(235),
      p = i(236),
      f = (function (t) {
        function e() {
          var e = t.call(this, 'navigation-system') || this
          return (
            (e._numTopics = 0),
            (e.onNextSignal = new c.Signal()),
            (e.onPrevSignal = new c.Signal()),
            (e.onTopicKeySignal = new c.Signal()),
            e.initSwipeController(),
            e.initNavigationBar(),
            e.initRightArrow(),
            e.initLeftArrow(),
            e.hide(!0),
            e
          )
        }
        return (
          o(e, t),
          (e.prototype.show = function () {
            ;(this.interactive = !0),
              this._navigationBar.show(),
              this._numTopics > 1 &&
                (this._rightArrow.show(), this._leftArrow.show())
          }),
          (e.prototype.hide = function (t) {
            void 0 === t && (t = !1),
              (this.interactive = !1),
              this._navigationBar.hide(t),
              this._rightArrow.hide(),
              this._leftArrow.hide()
          }),
          (e.prototype.setNavigationBarTitle = function (t) {
            this._navigationBar.setTitle(t)
          }),
          (e.prototype.setTopicData = function (t) {
            ;(this._numTopics = t.length),
              this._navigationBar.setTopicsData(t),
              this._numTopics > 1
                ? ((this._leftArrow.interactive = !0),
                  (this._rightArrow.interactive = !0),
                  (this._swipeController.enabled = !0),
                  l.TweenMax.to(
                    [this._rightArrow.view, this._leftArrow.view],
                    1,
                    { delay: 1, autoAlpha: 1 }
                  ))
                : (this._leftArrow.hide(), this._rightArrow.hide())
          }),
          (e.prototype.selectTopic = function (t) {
            this._navigationBar.select(t)
          }),
          (e.prototype.updateStyles = function () {
            this.applyStyle({
              position: 'absolute',
              userSelect: 'none',
              webkitUserSelect: 'none',
            })
            var t = a.Size.NAVIGATION_BIG_ARROW_MARGIN
            this._navigationBar.applyStyle({
              position: 'absolute',
              width: a.Size.APP_WIDTH,
              height: a.Size.NAVIGATION_BAR_HEIGHT,
              top: a.Size.APP_HEIGHT - a.Size.NAVIGATION_BAR_HEIGHT,
              left: 0,
            }),
              this._rightArrow.applyStyle({
                position: 'absolute',
                display: this._navigationBar.isUsingDots ? 'none' : 'block',
                top: 0.5 * a.Size.APP_HEIGHT + a.Size.TOPIC_OFFSET_Y,
                y: '-50%',
                left: a.Size.APP_WIDTH - t,
                x: '-100%',
              }),
              this._leftArrow.applyStyle({
                position: 'absolute',
                display: this._navigationBar.isUsingDots ? 'none' : 'block',
                top: 0.5 * a.Size.APP_HEIGHT + a.Size.TOPIC_OFFSET_Y,
                y: '-50%',
                left: t,
                scaleX: -1,
              })
          }),
          (e.prototype.initSwipeController = function () {
            var t = this
            ;(this._swipeController = new h.SwipeController(
              s.AppConfig.APP_CONTAINER_ELEMENT
            )),
              (this._swipeController.enabled = !1),
              (this._swipeController.swipeDetectThreshold = 200),
              this._swipeController.onLeftSwipeSignal.add(function () {
                return t.onSwipedToLeft()
              }),
              this._swipeController.onRightSwipeSignal.add(function () {
                return t.onSwipedToRight()
              })
          }),
          (e.prototype.initNavigationBar = function () {
            var t = this
            ;(this._navigationBar = new p.NavigationBar()),
              this._navigationBar.onStyleUpdateSignal.add(function () {
                return t.updateStyles()
              }),
              this._navigationBar.onSelectSignal.add(function (e) {
                return t.onItemClicked(e)
              }),
              this._navigationBar.onPrevSignal.add(function () {
                return t.onLeftArrowClicked()
              }),
              this._navigationBar.onNextSignal.add(function () {
                return t.onRightArrowClicked()
              }),
              this.addChild(this._navigationBar)
          }),
          (e.prototype.initRightArrow = function () {
            var t = this
            ;(this._rightArrow = new r.BigArrowButton()),
              this._rightArrow.onClickSignal.add(function () {
                return t.onRightArrowClicked()
              }),
              (this._rightArrow.interactive = !1),
              this._rightArrow.applyStyle({ opacity: 0 }),
              this.addChild(this._rightArrow)
          }),
          (e.prototype.initLeftArrow = function () {
            var t = this
            ;(this._leftArrow = new r.BigArrowButton()),
              this._leftArrow.onClickSignal.add(function () {
                return t.onLeftArrowClicked()
              }),
              (this._leftArrow.interactive = !1),
              this._leftArrow.applyStyle({ opacity: 0 }),
              this.addChild(this._leftArrow)
          }),
          (e.prototype.onRightArrowClicked = function () {
            this.onNextSignal.dispatch()
          }),
          (e.prototype.onLeftArrowClicked = function () {
            this.onPrevSignal.dispatch()
          }),
          (e.prototype.onSwipedToLeft = function () {
            this.onNextSignal.dispatch()
          }),
          (e.prototype.onSwipedToRight = function () {
            this.onPrevSignal.dispatch()
          }),
          (e.prototype.onItemClicked = function (t) {
            this.onTopicKeySignal.dispatch(t)
          }),
          e
        )
      })(u.UIComponent)
    e.NavigationSystem = f
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.BigArrowButton = void 0)
    var r = i(6),
      a = i(2),
      s = i(5),
      l = i(3),
      u = i(1),
      c = i(11),
      h = i(4),
      p = (function (t) {
        function e() {
          var e = t.call(this, 'big-arrow') || this
          return (
            (e.onClickSignal = new h.Signal()),
            e.initArrow(),
            e.initListeners(),
            e
          )
        }
        return (
          o(e, t),
          (e.prototype.show = function () {
            ;(this.interactive = !0),
              s.TweenMax.to(
                this._arrowSVG.transform,
                l.AppConfig.TOPIC_ITEM_CONTENT_EXPAND_DURATION,
                { x: 0, ease: s.Power4.easeOut }
              ),
              s.TweenMax.to(
                this.view,
                l.AppConfig.TOPIC_ITEM_CONTENT_EXPAND_DURATION,
                { autoAlpha: 1, ease: s.Power4.easeOut }
              )
          }),
          (e.prototype.hide = function () {
            ;(this.interactive = !1),
              s.TweenMax.to(
                this._arrowSVG.transform,
                0.3 * l.AppConfig.TOPIC_ITEM_CONTENT_EXPAND_DURATION,
                {
                  x: 2 * this._arrowSVG.defaultWidth,
                  ease: s.Power4.easeIn,
                }
              ),
              s.TweenMax.to(
                this.view,
                0.3 * l.AppConfig.TOPIC_ITEM_CONTENT_EXPAND_DURATION,
                { autoAlpha: 0, ease: s.Power4.easeIn }
              )
          }),
          (e.prototype.updateStyles = function () {
            this._arrowSVG.applyStyle({
              cursor: 'pointer',
              webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
              transformOrigin: 'center right',
              scale: 0.7 * a.Size.APP_SIZE_FACTOR + 0.3,
            })
          }),
          (e.prototype.initArrow = function () {
            ;(this._arrowSVG = new c.SVGComponent(i(234), 'arrow-svg')),
              (this._arrowElement = this._arrowSVG.getElementByID('arrow')),
              this.addChild(this._arrowSVG)
          }),
          (e.prototype.initListeners = function () {
            var t = this
            this.addNativeListener('mouseover', function () {
              return t.onMouseOver()
            }),
              this.addNativeListener('mouseout', function () {
                return t.onMouseOut()
              }),
              this.addNativeListener('touchstart', function () {
                return t.onMouseOver()
              }),
              this.addNativeListener('touchmove', function () {
                return t.onMouseOut()
              }),
              this.addNativeListener('click', function () {
                return t.onMouseOut()
              }),
              this.addNativeListener('click', function () {
                return t.onClicked()
              })
          }),
          (e.prototype.onMouseOver = function () {
            this._arrowElement.style.fill = l.AppConfig.HIGHLIGHT_COLOR
          }),
          (e.prototype.onMouseOut = function () {
            this._arrowElement.style.fill = r.Color.WHITE
          }),
          (e.prototype.onClicked = function () {
            this.onClickSignal.dispatch()
          }),
          e
        )
      })(u.UIComponent)
    e.BigArrowButton = p
  },
  function (t, e) {
    t.exports =
      '<svg width="62px" height="85px" viewBox="0 0 62 85" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>big-arrow</title><desc>Created with Sketch.</desc><defs><polygon id="__kUrG_B-__path-1" points="51.9344828 42.8225564 17.9843103 75.4255639 15.2703448 72.7706767 46.4041379 42.8473684 14.9375 12.1052632 17.7026724 9.5 44.8167241 35.9992481"></polygon></defs><g id="__kUrG_B-__Auswahl" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="__kUrG_B-__BASF_Home_Newsmodule01" transform="translate(-1357.000000, -662.000000)"><g id="__kUrG_B-__BG" transform="translate(-1.000000, 284.000000)"><g id="__kUrG_B-__big-arrow" transform="translate(1358.000000, 378.000000)"><rect id="__kUrG_B-__hitzone" fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="62" height="85"></rect><mask id="__kUrG_B-__mask-2" fill="white"><use xlink:href="#__kUrG_B-__path-1"></use></mask><use id="__kUrG_B-__arrow" fill="#FFFFFF" xlink:href="#__kUrG_B-__path-1"></use></g></g></g></g></svg>'
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.SwipeController = void 0)
    var n = i(70),
      o = i(4),
      r = (function () {
        function t(t) {
          ;(this._element = t),
            (this._enabled = !0),
            (this._swipeDetectThreshold = 30),
            (this.onLeftSwipeSignal = new o.Signal()),
            (this.onRightSwipeSignal = new o.Signal()),
            (this.onSwipeEndSignal = new o.Signal()),
            (this.onSwipeStartSignal = new o.Signal()),
            this.initListeners()
        }
        return (
          Object.defineProperty(t.prototype, 'enabled', {
            get: function () {
              return this._enabled
            },
            set: function (t) {
              this._enabled = t
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'isSwiping', {
            get: function () {
              return this._isSwiping
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'swipeDetectThreshold', {
            get: function () {
              return this._swipeDetectThreshold
            },
            set: function (t) {
              t < 20 && (t = 20), (this._swipeDetectThreshold = t)
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.destroy = function () {
            this._elementEvents.destroy(),
              this.onLeftSwipeSignal.removeAll(),
              this.onRightSwipeSignal.removeAll(),
              this.onSwipeEndSignal.removeAll(),
              this.onSwipeStartSignal.removeAll(),
              (this._element = null)
          }),
          (t.prototype.initListeners = function () {
            var t = this
            ;(this._elementEvents = new n.NativeEventsController(
              this._element
            )),
              this._elementEvents.addListener('touchstart', function (e) {
                return t.onTouchStarted(e)
              }),
              this._elementEvents.addListener('touchmove', function (e) {
                return t.onTouchMove(e)
              }),
              this._elementEvents.addListener('touchend', function () {
                return t.onTouchEnd()
              }),
              this._elementEvents.addListener('mousedown', function (e) {
                return t.onMouseDown(e)
              }),
              this._elementEvents.addListener('mousemove', function (e) {
                return t.onMouseMove(e)
              }),
              this._elementEvents.addListener('mouseup', function () {
                return t.onMouseUp()
              })
          }),
          (t.prototype.checkForSwipe = function (t) {
            this._swipeTriggered ||
              (Math.abs(t) > 20 &&
                ((this._swipeDetecting = !0),
                t > this._swipeDetectThreshold
                  ? ((this._swipeTriggered = !0),
                    this.onRightSwipeSignal.dispatch())
                  : t < -this._swipeDetectThreshold &&
                    ((this._swipeTriggered = !0),
                    this.onLeftSwipeSignal.dispatch())))
          }),
          (t.prototype.checkPreventScrolling = function (t) {
            this._swipeTriggered || this._swipeDetecting
              ? t.preventDefault()
              : Math.abs(t.touches[0].clientY - this._touchStartY) > 10 &&
                (this._preventSwiping = !0)
          }),
          (t.prototype.onTouchStarted = function (t) {
            this._enabled &&
              ((this._preventSwiping = !1),
              (this._touchStartX = t.touches[0].clientX),
              (this._touchStartY = t.touches[0].clientY))
          }),
          (t.prototype.onTouchMove = function (t) {
            this._enabled &&
              !this._preventSwiping &&
              (this.checkForSwipe(t.touches[0].clientX - this._touchStartX),
              this.checkPreventScrolling(t),
              this._isSwiping ||
                ((this._isSwiping = !0), this.onSwipeStartSignal.dispatch()))
          }),
          (t.prototype.onTouchEnd = function () {
            this._enabled &&
              ((this._swipeTriggered = !1),
              (this._swipeDetecting = !1),
              (this._isSwiping = !1),
              this.onSwipeEndSignal.dispatch())
          }),
          (t.prototype.onMouseDown = function (t) {
            this._enabled &&
              ((this._isMouseDown = !0), (this._mouseStartX = t.clientX))
          }),
          (t.prototype.onMouseMove = function (t) {
            this._enabled &&
              this._isMouseDown &&
              (this.checkForSwipe(t.clientX - this._mouseStartX),
              this._isSwiping ||
                ((this._isSwiping = !0), this.onSwipeStartSignal.dispatch()))
          }),
          (t.prototype.onMouseUp = function () {
            this._enabled &&
              ((this._isMouseDown = !1),
              (this._swipeTriggered = !1),
              (this._isSwiping = !1),
              this.onSwipeEndSignal.dispatch())
          }),
          t
        )
      })()
    e.SwipeController = r
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.NavigationBar = void 0)
    var r = i(1),
      a = i(6),
      s = i(10),
      l = i(2),
      u = i(237),
      c = i(4),
      h = i(5),
      p = i(3),
      f = i(24),
      d = i(238),
      _ = i(239),
      g = (function (t) {
        function e() {
          var e = t.call(this, 'navigation-bar') || this
          return (
            (e.onSelectSignal = new c.Signal()),
            (e.onNextSignal = new c.Signal()),
            (e.onPrevSignal = new c.Signal()),
            (e.onStyleUpdateSignal = new c.Signal()),
            e.initBackground(),
            e.initTitleField(),
            e.initArrows(),
            e.initItemDotsContainer(),
            e.initItemLabelsContainer(),
            e
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'isUsingDots', {
            get: function () {
              return (
                this.calcContentWidth() -
                  this._titleField.view.offsetWidth -
                  this._itemLabelsContainer.view.offsetWidth -
                  l.Size.NAVIAGTION_MARGIN <
                0
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.setTitle = function (t) {
            this._titleField.view.innerHTML = t
          }),
          (e.prototype.setTopicsData = function (t) {
            var e = this
            t.forEach(function (t, i) {
              var n = new u.NavigationBarItemLabel(t.title, t.key)
              n.onClickSignal.add(function () {
                return e.onSelectSignal.dispatch(t.key)
              }),
                e._itemLabelsContainer.addChild(n)
              var o = new d.NavigationBarItemDot(t.key)
              ;(o.isFirstDot = 0 == i),
                o.onClickSignal.add(function () {
                  return e.onSelectSignal.dispatch(t.key)
                }),
                e._itemDotsContainer.addChild(o)
            }),
              this.updateStyles()
          }),
          (e.prototype.select = function (t) {
            this._itemLabelsContainer.children.forEach(function (e) {
              e.selected = t == e.topicKey
            }),
              this._itemDotsContainer.children.forEach(function (e) {
                e.selected = t == e.topicKey
              })
          }),
          (e.prototype.show = function () {
            ;(this.interactive = !0),
              h.TweenMax.to(
                this.transform,
                p.AppConfig.TOPIC_ITEM_CONTENT_EXPAND_DURATION,
                { y: 0, autoAlpha: 1, ease: f.Ease.Power5easeInOut }
              )
          }),
          (e.prototype.hide = function (t) {
            void 0 === t && (t = !1),
              (this.interactive = !1),
              h.TweenMax.to(
                this.transform,
                t ? 0 : p.AppConfig.TOPIC_ITEM_CONTENT_EXPAND_DURATION,
                {
                  y: l.Size.NAVIGATION_BAR_HEIGHT,
                  autoAlpha: 0,
                  ease: f.Ease.Power5easeInOut,
                }
              )
          }),
          (e.prototype.updateStyles = function () {
            var t = this
            this._background.applyStyle({
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: 0.3,
              backgroundColor: a.Color.BLACK,
            }),
              this._titleField.applyStyle({
                position: 'absolute',
                fontFamily: s.Font.BOLD_FAMILY,
                fontSize: s.Font.NAVIGATION_BAR_FONTSIZE,
                lineHeight: '1',
                top: this.calcContentTopPadding(!1),
                left: l.Size.NAVIAGTION_MARGIN,
                color: a.Color.WHITE,
              }),
              this._itemLabelsContainer.applyStyle({
                position: 'absolute',
                whiteSpace: 'nowrap',
                lineHeight: 0,
                top: this.calcContentTopPadding(!1),
                right: l.Size.NAVIAGTION_MARGIN,
              }),
              this._itemDotsContainer.applyStyle({
                position: 'absolute',
                whiteSpace: 'nowrap',
                lineHeight: 0,
                top: this.calcContentTopPadding(!0),
                right: l.Size.NAVIAGTION_MARGIN + 0.5 * this.calcArrowWidth(),
              }),
              this._rightArrow.applyStyle({
                position: 'absolute',
                top: '50%',
                y: '-50%',
                right: l.Size.NAVIAGTION_MARGIN - this.calcArrowWidth(),
              }),
              this._leftArrow.applyStyle({
                position: 'absolute',
                top: '50%',
                y: '-50%',
                scale: -1,
              }),
              requestAnimationFrame(function () {
                var e = t.isUsingDots
                t._itemLabelsContainer.applyStyle({
                  visibility: e ? 'hidden' : 'visible',
                }),
                  t._itemDotsContainer.applyStyle({
                    visibility: e ? 'visible' : 'hidden',
                  }),
                  t._rightArrow.applyStyle({ display: e ? 'block' : 'none' }),
                  t._leftArrow.applyStyle({ display: e ? 'block' : 'none' }),
                  t._leftArrow.applyStyle({
                    right:
                      l.Size.NAVIAGTION_MARGIN +
                      t._itemDotsContainer.view.offsetWidth,
                  }),
                  t.onStyleUpdateSignal.dispatch()
              })
          }),
          (e.prototype.initBackground = function () {
            ;(this._background = new r.UIComponent(
              'navigation-bar-background'
            )),
              this.addChild(this._background)
          }),
          (e.prototype.initTitleField = function () {
            ;(this._titleField = new r.UIComponent('navigation-bar-title')),
              this.addChild(this._titleField)
          }),
          (e.prototype.initItemLabelsContainer = function () {
            ;(this._itemLabelsContainer = new r.UIComponent(
              'navigation-bar-itemlabels'
            )),
              this.addChild(this._itemLabelsContainer)
          }),
          (e.prototype.initItemDotsContainer = function () {
            ;(this._itemDotsContainer = new r.UIComponent(
              'navigation-bar-itemdots'
            )),
              this.addChild(this._itemDotsContainer)
          }),
          (e.prototype.initArrows = function () {
            var t = this
            ;(this._leftArrow = new _.SmallArrowButton()),
              this._leftArrow.onClickSignal.add(function () {
                return t.onPrevSignal.dispatch()
              }),
              (this._rightArrow = new _.SmallArrowButton()),
              this._rightArrow.onClickSignal.add(function () {
                return t.onNextSignal.dispatch()
              }),
              this.addChild(this._leftArrow),
              this.addChild(this._rightArrow)
          }),
          (e.prototype.calcContentTopPadding = function (t) {
            return t
              ? 0.5 *
                  (l.Size.NAVIGATION_BAR_HEIGHT -
                    l.Size.NAVIGATION_BAR_DOT_SIZE)
              : 0.5 *
                  (l.Size.NAVIGATION_BAR_HEIGHT -
                    s.Font.NAVIGATION_BAR_FONTSIZE)
          }),
          (e.prototype.calcContentWidth = function () {
            return l.Size.APP_WIDTH - 2 * l.Size.NAVIAGTION_MARGIN
          }),
          (e.prototype.calcArrowWidth = function () {
            return 30
          }),
          e
        )
      })(r.UIComponent)
    e.NavigationBar = g
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.NavigationBarItemLabel = void 0)
    var r = i(1),
      a = i(10),
      s = i(6),
      l = i(2),
      u = i(5),
      c = i(4),
      h = i(3),
      p = (function (t) {
        function e(e, i) {
          var n = t.call(this, 'navigation-bar-item-label') || this
          return (
            (n._title = e),
            (n._topicKey = i),
            (n.onClickSignal = new c.Signal()),
            n.initLabelField(),
            n.initListeners(),
            (n.selected = !1),
            n
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'topicKey', {
            get: function () {
              return this._topicKey
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'selected', {
            set: function (t) {
              ;(this._selected = t),
                (this.highlight = t),
                this._labelField.applyStyle({ cursor: t ? 'auto' : 'pointer' })
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.updateStyles = function () {
            this.applyStyle({ display: 'inline-block', lineHeight: '1' }),
              this._labelField.applyStyle({
                fontFamily: a.Font.BOLD_FAMILY,
                fontSize: a.Font.NAVIGATION_BAR_FONTSIZE,
                marginLeft:
                  0.5 *
                  l.Size.NAVIGATION_BAR_HEIGHT *
                  (l.Size.APP_SIZE_FACTOR + 0.4),
              })
          }),
          (e.prototype.initLabelField = function () {
            ;(this._labelField = new r.UIComponent('label-field')),
              (this._labelField.view.innerHTML = this._title),
              this.addChild(this._labelField)
          }),
          (e.prototype.initListeners = function () {
            var t = this
            this._labelField.addNativeListener('click', function () {
              return t.onLabelClicked()
            }),
              this._labelField.addNativeListener('mouseover', function () {
                return t.onLabelMouseOver()
              }),
              this._labelField.addNativeListener('mouseout', function () {
                return t.onLabelMouseOut()
              })
          }),
          Object.defineProperty(e.prototype, 'highlight', {
            set: function (t) {
              u.TweenMax.to(this._labelField.view, 0.3, {
                color:
                  t && this._selected
                    ? h.AppConfig.HIGHLIGHT_COLOR
                    : s.Color.WHITE,
                alpha: t ? 1 : 0.5,
              })
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.onLabelClicked = function () {
            this._selected || this.onClickSignal.dispatch()
          }),
          (e.prototype.onLabelMouseOver = function () {
            this._selected || (this.highlight = !0)
          }),
          (e.prototype.onLabelMouseOut = function () {
            this._selected || (this.highlight = !1)
          }),
          e
        )
      })(r.UIComponent)
    e.NavigationBarItemLabel = p
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.NavigationBarItemDot = void 0)
    var r = i(1),
      a = i(6),
      s = i(2),
      l = i(5),
      u = i(4),
      c = i(3),
      h = (function (t) {
        function e(e) {
          var i = t.call(this, 'navigation-bar-item-dot') || this
          return (
            (i._topicKey = e),
            (i._isFirstDot = !1),
            (i.onClickSignal = new u.Signal()),
            i.initDot(),
            (i.selected = !1),
            i.initListeners(),
            i
          )
        }
        return (
          o(e, t),
          Object.defineProperty(e.prototype, 'topicKey', {
            get: function () {
              return this._topicKey
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'isFirstDot', {
            set: function (t) {
              ;(this._isFirstDot = t), this.updateStyles()
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'selected', {
            set: function (t) {
              ;(this._selected = t), (this.highlight = t)
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.updateStyles = function () {
            this.applyStyle({ display: 'inline-block', lineHeight: '1' }),
              this._dot.applyStyle({
                cursor: 'pointer',
                position: 'relative',
                borderRadius: s.Size.NAVIGATION_BAR_DOT_SIZE,
                width: s.Size.NAVIGATION_BAR_DOT_SIZE,
                height: s.Size.NAVIGATION_BAR_DOT_SIZE,
                marginLeft: this._isFirstDot
                  ? 0
                  : 0.3 * s.Size.NAVIGATION_BAR_HEIGHT,
              })
          }),
          (e.prototype.initDot = function () {
            ;(this._dot = new r.UIComponent('dot-gfx')),
              this.addChild(this._dot)
          }),
          Object.defineProperty(e.prototype, 'highlight', {
            set: function (t) {
              l.TweenMax.to(this._dot.view, 0.3, {
                backgroundColor:
                  t && this._selected
                    ? c.AppConfig.HIGHLIGHT_COLOR
                    : a.Color.WHITE,
                alpha: t ? 1 : 0.5,
              })
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.initListeners = function () {
            var t = this
            this._dot.addNativeListener('click', function () {
              return t.onClicked()
            }),
              this._dot.addNativeListener('mouseover', function () {
                return t.onMouseOver()
              }),
              this._dot.addNativeListener('mouseout', function () {
                return t.onMouseOut()
              })
          }),
          (e.prototype.onClicked = function () {
            this.onClickSignal.dispatch()
          }),
          (e.prototype.onMouseOver = function () {
            this._dot.applyStyle({ opacity: 1 })
          }),
          (e.prototype.onMouseOut = function () {
            this._dot.applyStyle({ opacity: this._selected ? 1 : 0.5 })
          }),
          e
        )
      })(r.UIComponent)
    e.NavigationBarItemDot = h
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.SmallArrowButton = void 0)
    var r = i(6),
      a = i(3),
      s = i(1),
      l = i(11),
      u = i(4),
      c = (function (t) {
        function e() {
          var e = t.call(this, 'small-arrow') || this
          return (
            (e.onClickSignal = new u.Signal()),
            e.initArrow(),
            e.initListeners(),
            e
          )
        }
        return (
          o(e, t),
          (e.prototype.updateStyles = function () {
            this._arrowSVG.applyStyle({
              cursor: 'pointer',
              webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
              transformOrigin: 'center center',
            })
          }),
          (e.prototype.initArrow = function () {
            ;(this._arrowSVG = new l.SVGComponent(i(240), 'arrow-svg')),
              (this._arrowElement = this._arrowSVG.getElementByID('arrow')),
              this.addChild(this._arrowSVG)
          }),
          (e.prototype.initListeners = function () {
            var t = this
            this.addNativeListener('mouseover', function () {
              return t.onMouseOver()
            }),
              this.addNativeListener('mouseout', function () {
                return t.onMouseOut()
              }),
              this.addNativeListener('touchstart', function () {
                return t.onMouseOver()
              }),
              this.addNativeListener('touchmove', function () {
                return t.onMouseOut()
              }),
              this.addNativeListener('click', function () {
                return t.onMouseOut()
              }),
              this.addNativeListener('click', function () {
                return t.onClicked()
              })
          }),
          (e.prototype.onMouseOver = function () {
            this._arrowElement.style.fill = a.AppConfig.HIGHLIGHT_COLOR
          }),
          (e.prototype.onMouseOut = function () {
            this._arrowElement.style.fill = r.Color.WHITE
          }),
          (e.prototype.onClicked = function () {
            this.onClickSignal.dispatch()
          }),
          e
        )
      })(s.UIComponent)
    e.SmallArrowButton = c
  },
  function (t, e) {
    t.exports =
      '<svg width="62px" height="50px" viewBox="0 0 62 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>small-arrow</title><desc>Created with Sketch.</desc><g id="__2G8Fj0i__small-arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="__2G8Fj0i__arrow" transform="translate(24.826802, 16.000000)" fill="#FFFFFF" fill-rule="nonzero"><polygon id="__2G8Fj0i__path-1" points="13.7934175 11.1200602 2.46391572 22 0.239346901 19.7951462 9.31010337 11.1283402 0.128273363 2.18829381 2.36993042 0 11.4181524 8.84305607"></polygon></g><rect id="__2G8Fj0i__hitzone" fill-opacity="0.01" fill="#9A3636" fill-rule="nonzero" x="0" y="0" width="62" height="50"></rect></g></svg>'
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ErrorSystem = void 0)
    var r = i(2),
      a = i(6),
      s = i(10),
      l = i(1),
      u = (function (t) {
        function e(e) {
          var i = t.call(this, 'error-system') || this
          return (i._errorMessage = e), i.initMessageField(), i
        }
        return (
          o(e, t),
          (e.prototype.addMessage = function (t) {
            ;(this._errorMessage += '<p>' + t + '</p>'),
              (this._messageField.view.innerHTML = this._errorMessage)
          }),
          (e.prototype.updateStyles = function () {
            this.applyStyle({
              position: 'absolute',
              width: r.Size.APP_WIDTH,
              height: r.Size.APP_HEIGHT,
              backgroundColor: 'rgba(255, 0, 0, 0.3)',
            }),
              this._messageField.applyStyle({
                position: 'absolute',
                width: r.Size.APP_WIDTH - 2 * r.Size.CONTENT_MARGIN,
                textAlign: 'center',
                maxWidth: 700,
                left: '50%',
                x: '-50%',
                top: '50%',
                y: '-50%',
                color: a.Color.WHITE,
                fontFamily: s.Font.BOLD_FAMILY,
                fontSize: s.Font.H1_FONTSIZE,
                lineHeight: '1.2',
              })
          }),
          (e.prototype.initMessageField = function () {
            ;(this._messageField = new l.UIComponent('error-message')),
              (this._messageField.view.innerHTML = this._errorMessage),
              this.addChild(this._messageField)
          }),
          e
        )
      })(l.UIComponent)
    e.ErrorSystem = u
  },
  function (t, e, i) {
    'use strict'
    var n,
      o =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }),
        function (t, e) {
          function i() {
            this.constructor = t
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()))
        })
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ExternalLinkLayer = void 0)
    var r = i(1),
      a = i(2),
      s = i(11),
      l = i(6),
      u = i(10),
      c = i(112),
      h = i(4),
      p = i(23),
      f = i(5),
      d = (function (t) {
        function e(e, i, n) {
          var o = t.call(this, 'external-link-layer') || this
          return (
            (o._externalHref = e),
            (o._labels = i),
            (o.onCloseSignal = new h.Signal()),
            (o.confirmCallback = n),
            o.initContentContainer(),
            o.initIcon(),
            o.initText(),
            o.initButtons(),
            o.playIntro(),
            o
          )
        }
        return (
          o(e, t),
          (e.prototype.updateStyles = function () {
            this.applyStyle({
              position: 'absolute',
              width: a.Size.APP_WIDTH,
              height: a.Size.APP_HEIGHT,
              top: 0,
              left: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }),
              this._icon.applyStyle({
                marginBottom: 2 * u.Font.ARTICLE_P_FONTSIZE,
              }),
              this._textField.applyStyle({
                fontFamily: u.Font.BOLD_FAMILY,
                fontSize: u.Font.ARTICLE_P_FONTSIZE,
                color: l.Color.WHITE,
                marginBottom: 2 * u.Font.ARTICLE_P_FONTSIZE,
              }),
              this._abortButton.applyStyle({
                display: 'inline-block',
                marginRight: 2 * u.Font.ARTICLE_P_FONTSIZE,
              }),
              this._doitButton.applyStyle({ display: 'inline-block' })
          }),
          (e.prototype.initContentContainer = function () {
            ;(this._contentContainer = new r.UIComponent('content-box')),
              this.addChild(this._contentContainer)
          }),
          (e.prototype.initIcon = function () {
            ;(this._icon = new s.SVGComponent(i(243))),
              this._contentContainer.addChild(this._icon)
          }),
          (e.prototype.initText = function () {
            ;(this._textField = new r.UIComponent('info-field')),
              (this._textField.view.innerHTML = this._labels.infoText),
              this._contentContainer.addChild(this._textField)
          }),
          (e.prototype.initButtons = function () {
            var t = this
            ;(this._abortButton = new c.LabaledArrowButton(
              this._labels.abortButtonLabel
            )),
              this._abortButton.onClickSignal.add(function () {
                return t.onAbortButtonClicked()
              }),
              (this._doitButton = new c.LabaledArrowButton(
                this._labels.doitButtonLabel
              )),
              this._doitButton.onClickSignal.add(function () {
                return t.onDoitButtonClicked()
              }),
              this._contentContainer.addChild(this._abortButton),
              this._contentContainer.addChild(this._doitButton)
          }),
          (e.prototype.playIntro = function () {
            f.TweenMax.from(this.view, 0.5, { alpha: 0 }),
              this._contentContainer.children.forEach(function (t, e) {
                f.TweenMax.from(t.view, 0.5, {
                  delay: 0.05 * e,
                  y: 15,
                  alpha: 0,
                  ease: f.Power4.easeOut,
                })
              })
          }),
          (e.prototype.onAbortButtonClicked = function () {
            this.onCloseSignal.dispatch()
          }),
          (e.prototype.onDoitButtonClicked = function () {
            p.URLUtils.openLink(this._externalHref),
              this.onCloseSignal.dispatch(),
              this.confirmCallback()
          }),
          e
        )
      })(r.UIComponent)
    e.ExternalLinkLayer = d
  },
  function (t, e) {
    t.exports =
      '<svg width="56px" height="42px" viewBox="0 0 56 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>newwindow-icon</title><desc>Created with Sketch.</desc><g id="__M9n_-cE__Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="__M9n_-cE__BASF_Newsmodule02-Copy" transform="translate(-692.000000, -582.000000)" fill="#FFFFFF"><g id="__M9n_-cE__newwindow-icon" transform="translate(691.500000, 582.000000)"><rect id="__M9n_-cE__Rectangle" x="18.5" y="0" width="38" height="34"></rect><rect id="__M9n_-cE__Rectangle-Copy" x="0.5" y="11" width="38" height="4"></rect><rect id="__M9n_-cE__Rectangle-Copy-2" x="0.5" y="38" width="38" height="4"></rect><rect id="__M9n_-cE__Rectangle-Copy-3" transform="translate(2.500000, 26.500000) rotate(90.000000) translate(-2.500000, -26.500000) " x="-13" y="24.5" width="31" height="4"></rect><rect id="__M9n_-cE__Rectangle-Copy-4" transform="translate(37.000000, 26.500000) rotate(90.000000) translate(-37.000000, -26.500000) " x="21.5" y="24.5" width="31" height="4"></rect></g></g></g></svg>'
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.CoreData = void 0)
    var n = i(245),
      o = i(3),
      r = i(4),
      a = i(247),
      s = i(31),
      l = i(23),
      u = i(73),
      c = i(72),
      h = (function () {
        function t() {
          ;(this._topicsData = []),
            (this._externalLinkLayerLabels = {
              infoText: '',
              abortButtonLabel: '',
              doitButtonLabel: '',
            }),
            (this.onDataAvailableSignal = new r.Signal()),
            (this.onNoDataAvailableSignal = new r.Signal())
        }
        return (
          Object.defineProperty(t.prototype, 'defaultBackgroundImageURL', {
            get: function () {
              return this._defaultBackgroundImageURL
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'navigationBarTitle', {
            get: function () {
              return this._navigationBarTitle
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'externalLinkLayerLabels', {
            get: function () {
              return this._externalLinkLayerLabels
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'topicsData', {
            get: function () {
              return this._topicsData
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.loadData = function () {
            this.requestSections()
          }),
          (t.prototype.isNextTopic = function (t, e) {
            return this.getTopicDataIndex(t) > this.getTopicDataIndex(e)
          }),
          (t.prototype.getTopicData = function (t) {
            return this._topicsData.filter(function (e) {
              return e.key == t
            })[0]
          }),
          (t.prototype.getNextTopicKey = function (t) {
            var e = this.getTopicDataIndex(t) + 1
            return (
              e > this._topicsData.length - 1 && (e = 0),
              this._topicsData[e].key
            )
          }),
          (t.prototype.getPrevTopicKey = function (t) {
            var e = this.getTopicDataIndex(t) - 1
            return (
              e < 0 && (e = this._topicsData.length - 1),
              this._topicsData[e].key
            )
          }),
          (t.prototype.requestSections = function () {
            var t = this
            a.RequestUtils.getURL({
              url: o.AppConfig.FLOCKLER_API + '/sections',
              errorListener: function (t) {
                u.CoreController.showError(t)
              },
              resultListener: function (e) {
                t.requestSectionsArticles(JSON.parse(e))
              },
            })
          }),
          (t.prototype.requestSectionsArticles = function (t) {
            var e = this
            if (t && t.sections) {
              var i = [],
                n = this.getRequestedSections(t)
              n.forEach(function (t) {
                a.RequestUtils.getURL({
                  url:
                    o.AppConfig.FLOCKLER_API +
                    '/sections/' +
                    t.id +
                    '/articles?count=10',
                  errorListener: function (t) {
                    u.CoreController.showError(t)
                  },
                  resultListener: function (o) {
                    i.push({
                      sectionName: t.name,
                      articles: JSON.parse(o).articles,
                    }),
                      i.length == n.length && e.parseFlocklerData(i)
                  },
                })
              })
            } else this.onNoDataAvailableSignal.dispatch()
          }),
          (t.prototype.getRequestedSections = function (t) {
            var e = this,
              i = t.sections.filter(function (t) {
                var i = -1 != t.name.indexOf(e.langPrefix),
                  n = e.isRequestedTopic(t.name) && e.isValidTopic(t.name),
                  o = -1 != t.name.indexOf('_general_')
                return (i && n) || o
              }),
              n = this.langPrefix + '_general_',
              o =
                1 ==
                i.filter(function (t) {
                  return t.name == n
                }).length
            return i.filter(function (t) {
              return -1 == t.name.indexOf('_general_') || !o || t.name == n
            })
          }),
          (t.prototype.parseFlocklerData = function (t) {
            t
              ? (this.parseSettingsData(t),
                this.parseTopicsData(t),
                0 == this._topicsData.length
                  ? this.onNoDataAvailableSignal.dispatch()
                  : this.onDataAvailableSignal.dispatch())
              : this.onNoDataAvailableSignal.dispatch()
          }),
          (t.prototype.parseSettingsData = function (t) {
            var e = this,
              i = this.langPrefix + '_general_',
              n = t.filter(function (t) {
                return t.sectionName == i
              })[0]
            n ||
              (n = t.filter(function (t) {
                return '_general_' == t.sectionName
              })[0]),
              n ||
                (console.error(
                  '[BASF Newsroom] Error: There is no generic, non language specific, "_general_" section defined in flockler [Flocker Site ID: ' +
                    o.AppConfig.FLOCKLER_SITE_ID +
                    ']'
                ),
                console.info(
                  '[BASF Newsroom] Please add a generic "_general_" section or use a "?lang=.." url parameter'
                ),
                console.info(
                  '[BASF Newsroom] Following language specific "_general_" sections are available:'
                ),
                t
                  .filter(function (t) {
                    return -1 != t.sectionName.indexOf('_general_')
                  })
                  .forEach(function (t) {
                    console.info('-  ' + t.sectionName)
                  }))
            var r,
              a = n.articles,
              l = a.filter(function (t) {
                return 'background-image' == t.article_url
              })[0],
              u = a.filter(function (t) {
                return 'navigation-bar-title' == t.article_url
              })[0],
              h = a.filter(function (t) {
                return 'external-link-layer' == t.article_url
              })[0],
              p = a.filter(function (t) {
                return 'read-more-button-label' == t.article_url
              })[0]
            p &&
              (((r = document.createElement('div')).innerHTML = p.body),
              (c.Language.READ_MORE_LABEL = r.innerText))
            ;(l &&
              (this._defaultBackgroundImageURL =
                s.FlocklerUtils.createOptimizedBackgroundImageURL(l.cover_url)),
            u) &&
              (((r = document.createElement('div')).innerHTML = u.body),
              (this._navigationBarTitle = r.innerText))
            h &&
              (((r = document.createElement('div')).innerHTML = h.body),
              Array.from(r.getElementsByTagName('p')).forEach(function (t) {
                var i = t.innerHTML.split(':')[0],
                  n = t.innerHTML.split(':')[1]
                'INFOTEXT' == i && (e._externalLinkLayerLabels.infoText = n),
                  'ABORT_BUTTON_LABEL' == i &&
                    (e._externalLinkLayerLabels.abortButtonLabel = n),
                  'DOIT_BUTTON_LABEL' == i &&
                    (e._externalLinkLayerLabels.doitButtonLabel = n)
              }))
          }),
          (t.prototype.parseTopicsData = function (t) {
            var e = this
            t.forEach(function (t) {
              if (
                e.isRequestedTopic(t.sectionName) &&
                e.isValidTopic(t.sectionName)
              ) {
                var i = t.articles
                i.sort(function (t, e) {
                  return t.pinned_index - e.pinned_index
                })
                var o = new n.TopicData(t.sectionName, i)
                o.hasContent &&
                  (e.langID
                    ? (o.langID == e.langID ||
                        (e.showNoneSpecificLangTopics && !o.langID)) &&
                      e._topicsData.splice(0, 0, o)
                    : e._topicsData.splice(0, 0, o))
              }
            }),
              this._topicsData &&
                this.topicsData.sort(function (t, e) {
                  return t.index - e.index
                })
          }),
          (t.prototype.getTopicDataIndex = function (t) {
            return this._topicsData.indexOf(
              this._topicsData.filter(function (e) {
                return e.key == t
              })[0]
            )
          }),
          (t.prototype.isValidTopic = function (t) {
            return t.indexOf('#') > 0
          }),
          (t.prototype.isRequestedTopic = function (t) {
            return (
              0 == this.getRequestedTopics().length ||
              1 ==
                this.getRequestedTopics().filter(function (e) {
                  return -1 != t.indexOf(e)
                }).length
            )
          }),
          (t.prototype.getRequestedTopics = function () {
            var t = l.URLUtils.getUrlParam('topics')
            return t ? t.split(',') : []
          }),
          Object.defineProperty(t.prototype, 'showNoneSpecificLangTopics', {
            get: function () {
              return -1 != l.URLUtils.getUrlParam('lang').indexOf('+')
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'langID', {
            get: function () {
              var t = l.URLUtils.getUrlParam('lang')
              if (t) return t.replace('+', '')
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'langPrefix', {
            get: function () {
              var t = ''
              return this.langID && (t = '[' + this.langID + ']'), t
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        )
      })()
    e.CoreData = h
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TopicData = void 0)
    var n = i(246),
      o = i(3),
      r = i(31),
      a = (function () {
        function t(t, e) {
          ;(this._key = t), (this._itemsJSON = e), this.backgroundImageURL
        }
        return (
          Object.defineProperty(t.prototype, 'hasContent', {
            get: function () {
              return this.itemsData.length > 0
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'backgroundImageURL', {
            get: function () {
              var t = this._itemsJSON.filter(function (t) {
                return t.title == o.AppConfig.TOPIC_BACKGROUND_IMAGE_KEY
              })
              return t && t[0] && t[0].cover_url
                ? r.FlocklerUtils.createOptimizedBackgroundImageURL(
                    t[0].cover_url
                  )
                : null
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'key', {
            get: function () {
              return this._key
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'index', {
            get: function () {
              return -1 != this._key.indexOf(']')
                ? parseInt(this._key.split('#')[0].split(']')[1])
                : parseInt(this._key.split('#')[0])
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'langID', {
            get: function () {
              if (-1 != this._key.indexOf(']'))
                return this._key.split(']')[0].replace('[', '')
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'titleForCustomElement', {
            get: function () {
              return this._key.split('#')[1].replace(' ', '').toLowerCase()
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'title', {
            get: function () {
              return ''
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'itemsData', {
            get: function () {
              var t = []
              return (
                this._itemsJSON.forEach(function (e, i) {
                  e.title != o.AppConfig.TOPIC_BACKGROUND_IMAGE_KEY &&
                    t.length < 5 &&
                    t.push(new n.TopicItemData(e))
                }),
                t.length > 5 &&
                  console.warn(
                    'WARNING: Maximum items per topic reached. ' +
                      (this._itemsJSON.length - 5) +
                      " item(s) will be ignored for '" +
                      this.title +
                      "'"
                  ),
                t
              )
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        )
      })()
    e.TopicData = a
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TopicItemData = void 0)
    var n = i(73),
      o = (function () {
        function t(t) {
          this._jsonVO = t
        }
        return (
          Object.defineProperty(t.prototype, 'type', {
            get: function () {
              if ('article' == this._jsonVO.type) {
                var t = this._jsonVO.tags.filter(function (t) {
                  return -1 != t.indexOf('contenttype')
                })[0]
                return t
                  ? t.split('_')[1]
                  : (n.CoreController.showError(
                      'ContentType not found for "' +
                        this._jsonVO.article_url +
                        '"'
                    ),
                    null)
              }
              return this._jsonVO.type
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'rawJSON', {
            get: function () {
              return this._jsonVO
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        )
      })()
    e.TopicItemData = o
  },
  function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.RequestUtils = void 0)
    var n = (function () {
      function t() {}
      return (
        (t.getURL = function (t) {
          var e = new XMLHttpRequest()
          return (
            (e.onprogress = function (e) {
              t && t.progressListener && t.progressListener(e)
            }),
            (e.onreadystatechange = function () {
              4 == e.readyState &&
                200 == e.status &&
                t.resultListener(e.responseText)
            }),
            e.open(t && t.usePost ? 'POST' : 'GET', t.url, !0),
            t &&
              t.requestHeaders &&
              t.requestHeaders.forEach(function (t) {
                e.setRequestHeader(t.key, t.value)
              }),
            (e.onloadend = function () {
              404 == e.status && t.errorListener('404: ' + t.url)
            }),
            e.send(t && t.sendData ? t.sendData : null),
            e
          )
        }),
        t
      )
    })()
    e.RequestUtils = n
  },
])
//# sourceMappingURL=app_v1.2.2.js.map
