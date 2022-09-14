import TurndownService from 'turndown';
import syncConfig from '../config';
function dispatch() {
  let turndownService = new TurndownService();
  let href = window.location.href;
  console.log(syncConfig);
  for (let config of syncConfig) {
    console.log(config);
    let csdnReg = config.reg;
    if (csdnReg.test(href)) {
      let dom = extractDom(config.contentSelector);
      let markdown = turndownService.turndown(dom);
      return {
        title: extractTitle(config.titleSelector),
        content: markdown
      };
    }
  }
  return undefined;
}

function extractDom(domSelector) {
  let dom = document.querySelector(domSelector);
  return dom;
}

function extractTitle(domSelector) {
  return document.querySelector(domSelector).textContent;
}

export default dispatch;
