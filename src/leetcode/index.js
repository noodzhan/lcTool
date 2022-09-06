import addListener from './listen';
import generateMarkdown, { getprombleTitle } from './leetcode';
function init() {
  window.article = generateMarkdown();
  window.problemTitle = getprombleTitle();
  console.log(window.article);
  console.log(window.problemTitle);
  listenATag();
}

let timer = undefined;

function checkIsRender() {
  let href = window.location.href;
  let regExp = new RegExp('^https://leetcode.cn/problems/');
  if (!regExp.test(href)) {
    console.log('不是leetcode题目页面');
    return;
  }
  let dom = document.querySelector('.notranslate .notranslate');
  if (dom) {
    init();
    if (!timer) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(checkIsRender, 300);
    }
  }
}

function listenATag() {
  //对含问题的a标签，添加监听
  let observerDomArray = document.querySelectorAll("a[href^='/problems/']");
  observerDomArray.forEach((dom) => {
    dom.onclick = init;
  });
}

export default function initLeetCode() {
  //添加监听
  addListener('', function (xhr) {
    console.log(xhr.orignUrl);
    let reg = new RegExp('^/problems/.+/submit/$');
    if (reg.test(xhr.orignUrl)) {
      let data = JSON.parse(xhr.body);
      window.code = data.typed_code;
      window.leetcodeLang = data.lang;
    }
  });
  //检查leetcode页面是否渲染结束,结束后初始化
  checkIsRender();
}
