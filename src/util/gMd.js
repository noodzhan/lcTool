import TurndownService from 'turndown';
function dispatch() {
  let turndownService = new TurndownService();
  let href = window.location.href;
  let csdnReg = new RegExp('^https://blog.csdn.net/');
  if (csdnReg.test(href)) {
    let dom = extractDom();
    let markdown = turndownService.turndown(dom);
    return {
      title: extractTitle(),
      content: markdown
    };
  }
  return {};
}

function extractDom() {
  let dom = document.querySelector('#content_views');
  return dom;
}

function extractTitle() {
  return document.querySelector('#articleContentId').textContent;
}

export default dispatch;
