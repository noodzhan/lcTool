const { ConcatSource, OriginalSource } = require('webpack-sources');
const fs = require('fs');
class TampermonkeyPlugin {
  apply(compiler) {
    // 指定一个挂载到 webpack 自身的事件钩子。
    compiler.hooks.compilation.tap('TampermonkeyPlugin', (compilation) => {
      compilation.hooks.afterProcessAssets.tap('TampermonkeyPlugin', () => {
        for (const chunk of compilation.chunks) {
          for (const file of chunk.files) {
            compilation.updateAsset(file, (old) => {
              return new ConcatSource(
                `// ==UserScript==
// @name         blogTools
// @namespace    http://tampermonkey.net/
// @version      0.2
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
unsafeWindow.GM_getValue= GM_getValue;
(function () {
  "use strict";
  if (location.href === "http://localhost:8080/") return;
  window.onload = function () {
  
`,
                old,
                ` \n  };
})();`
              );
            });
          }
        }
      });
    });
  }
}
module.exports = TampermonkeyPlugin;
