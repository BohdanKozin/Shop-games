!function(){var e,t,o,n,r,i={};e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=!1;if("undefined"!=typeof window){var o={get passive(){t=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}function n(e){return d.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))}function r(e){var t=e||window.event;return!!n(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)}function i(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==u&&(document.body.style.overflow=u,u=void 0)}var l="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&1<window.navigator.maxTouchPoints),d=[],c=!1,a=-1,u=void 0,s=void 0;e.disableBodyScroll=function(e,o){if(e){if(!d.some((function(t){return t.targetElement===e}))){var i={targetElement:e,options:o||{}};d=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(d),[i]),l?(e.ontouchstart=function(e){1===e.targetTouches.length&&(a=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var o,i,l,d;1===t.targetTouches.length&&(i=e,d=(o=t).targetTouches[0].clientY-a,n(o.target)||(i&&0===i.scrollTop&&0<d||(l=i)&&l.scrollHeight-l.scrollTop<=l.clientHeight&&d<0?r(o):o.stopPropagation()))},c||(document.addEventListener("touchmove",r,t?{passive:!1}:void 0),c=!0)):function(e){if(void 0===s){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;t&&0<o&&(s=document.body.style.paddingRight,document.body.style.paddingRight=o+"px")}void 0===u&&(u=document.body.style.overflow,document.body.style.overflow="hidden")}(o)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},e.clearAllBodyScrollLocks=function(){l?(d.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),c&&(document.removeEventListener("touchmove",r,t?{passive:!1}:void 0),c=!1),a=-1):i(),d=[]},e.enableBodyScroll=function(e){e?(d=d.filter((function(t){return t.targetElement!==e})),l?(e.ontouchstart=null,e.ontouchmove=null,c&&0===d.length&&(document.removeEventListener("touchmove",r,t?{passive:!1}:void 0),c=!1)):d.length||i()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},"function"==typeof define&&define.amd?define(["exports"],r):r(i)}();
//# sourceMappingURL=accessories.8254e852.js.map
