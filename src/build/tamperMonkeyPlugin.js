const { ConcatSource, OriginalSource } = require("webpack-sources");
const fs = require("fs");
class TampermonkeyPlugin {
  apply(compiler) {
    // 指定一个挂载到 webpack 自身的事件钩子。
    compiler.hooks.compilation.tap("TampermonkeyPlugin", (compilation) => {
      compilation.hooks.afterProcessAssets.tap("TampermonkeyPlugin", () => {
        for (const chunk of compilation.chunks) {
          for (const file of chunk.files) {
            compilation.updateAsset(file, (old) => {
              return new ConcatSource(
                `// ==UserScript==
// @name         leetcode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  leetcode push tool!
// @author       You
// @match        https://leetcode.cn/problems/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @connect      noodb.com
// ==/UserScript==
unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest;
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
