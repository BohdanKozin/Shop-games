(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();


// ==========================================>
// MENU JSON
// ==========================================>





!(function (e, o) {
  if ('function' == typeof define && define.amd) define(['exports'], o);
  else if ('undefined' != typeof exports) o(exports);
  else {
    var t = {};
    o(t), (e.bodyScrollLock = t);
  }
})(this, function (exports) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: !0 });
  var t = !1;
  if ('undefined' != typeof window) {
    var e = {
      get passive() {
        t = !0;
      },
    };
    window.addEventListener('testPassive', null, e),
      window.removeEventListener('testPassive', null, e);
  }
  function l(o) {
    return c.some(function (e) {
      return !(!e.options.allowTouchMove || !e.options.allowTouchMove(o));
    });
  }
  function d(e) {
    var o = e || window.event;
    return (
      !!l(o.target) ||
      1 < o.touches.length ||
      (o.preventDefault && o.preventDefault(), !1)
    );
  }
  function n() {
    void 0 !== v && ((document.body.style.paddingRight = v), (v = void 0)),
      void 0 !== s && ((document.body.style.overflow = s), (s = void 0));
  }
  var i =
      'undefined' != typeof window &&
      window.navigator &&
      window.navigator.platform &&
      (/iP(ad|hone|od)/.test(window.navigator.platform) ||
        ('MacIntel' === window.navigator.platform &&
          1 < window.navigator.maxTouchPoints)),
    c = [],
    a = !1,
    u = -1,
    s = void 0,
    v = void 0;
  (exports.disableBodyScroll = function (r, e) {
    if (r) {
      if (
        !c.some(function (e) {
          return e.targetElement === r;
        })
      ) {
        var o = { targetElement: r, options: e || {} };
        (c = [].concat(
          (function (e) {
            if (Array.isArray(e)) {
              for (var o = 0, t = Array(e.length); o < e.length; o++)
                t[o] = e[o];
              return t;
            }
            return Array.from(e);
          })(c),
          [o]
        )),
          i
            ? ((r.ontouchstart = function (e) {
                1 === e.targetTouches.length &&
                  (u = e.targetTouches[0].clientY);
              }),
              (r.ontouchmove = function (e) {
                var o, t, n, i;
                1 === e.targetTouches.length &&
                  ((t = r),
                  (i = (o = e).targetTouches[0].clientY - u),
                  l(o.target) ||
                    ((t && 0 === t.scrollTop && 0 < i) ||
                    ((n = t) &&
                      n.scrollHeight - n.scrollTop <= n.clientHeight &&
                      i < 0)
                      ? d(o)
                      : o.stopPropagation()));
              }),
              a ||
                (document.addEventListener(
                  'touchmove',
                  d,
                  t ? { passive: !1 } : void 0
                ),
                (a = !0)))
            : (function (e) {
                if (void 0 === v) {
                  var o = !!e && !0 === e.reserveScrollBarGap,
                    t =
                      window.innerWidth - document.documentElement.clientWidth;
                  o &&
                    0 < t &&
                    ((v = document.body.style.paddingRight),
                    (document.body.style.paddingRight = t + 'px'));
                }
                void 0 === s &&
                  ((s = document.body.style.overflow),
                  (document.body.style.overflow = 'hidden'));
              })(e);
      }
    } else
      console.error(
        'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
      );
  }),
    (exports.clearAllBodyScrollLocks = function () {
      i
        ? (c.forEach(function (e) {
            (e.targetElement.ontouchstart = null),
              (e.targetElement.ontouchmove = null);
          }),
          a &&
            (document.removeEventListener(
              'touchmove',
              d,
              t ? { passive: !1 } : void 0
            ),
            (a = !1)),
          (u = -1))
        : n(),
        (c = []);
    }),
    (exports.enableBodyScroll = function (o) {
      o
        ? ((c = c.filter(function (e) {
            return e.targetElement !== o;
          })),
          i
            ? ((o.ontouchstart = null),
              (o.ontouchmove = null),
              a &&
                0 === c.length &&
                (document.removeEventListener(
                  'touchmove',
                  d,
                  t ? { passive: !1 } : void 0
                ),
                (a = !1)))
            : c.length || n())
        : console.error(
            'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.'
          );
    });
});

// ==========================================>
// MODAL JSON
// ==========================================>


!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');

  /* Перебираем массив кнопок */
  modalButtons.forEach(function (item) {
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', function (e) {
      /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
      e.preventDefault();

      /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
      modalElem.classList.add('active');
      overlay.classList.add('active');
    }); // end click
  }); // end foreach

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
    });
  }); // end foreach

  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
      }
    },
    false
  );

  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
  });
}); // end ready
