// ==UserScript==
// @name         blogTools
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  leetcode push tool!
// @author       https://github.com/noodzhan
// @match        https://leetcode.cn/problems/*
// @match        https://blog.csdn.net/*/article/details/*
// @match        https://www.jianshu.com/p/*
// @match        https://segmentfault.com/*
// @match        https://juejin.cn/post/*
// @match        https://www.cnblogs.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      noodb.com
// ==/UserScript==
unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest;
unsafeWindow.GM_setValue = GM_setValue;
unsafeWindow.GM_getValue = GM_getValue;
(function () {
  'use strict';
  if (location.href === 'http://localhost:8080/') return;
  window.onload = function () {
    var script = document.createElement('script');
    script.src = 'http://localhost:8080/main.bundle.js';
    document.body.appendChild(script);
  };
})();
