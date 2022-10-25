import * as globeStore from '../util/share';
let noodbCookie = '';
let username = '';
let password = '';

async function gmRequest(config) {
  let GM_xmlhttpRequest = window.GM_xmlhttpRequest;
  return new Promise((resolve, reject) => {
    //tamper monkey插件函数
    console.log({
      url: config.url,
      method: config.method,
      param: config.param,
      cookie: config.cookie,
      data: config.data,
      headers: config.headers,
      responseType: 'json'
    });
    GM_xmlhttpRequest({
      url: config.url,
      method: config.method,
      param: config.param,
      cookie: config.cookie,
      data: config.data,
      headers: config.headers,
      responseType: 'json',
      onload: (resp) => {
        console.log(resp);
        resolve(resp.response);
      },
      onerror: (error) => {
        console.log(error);
        reject(error);
      }
    });
  });
}

function generateBlog(problemId, problemContent, code, lang) {
  //TODO 以后考虑一下js格式java代码，如果没有合适的思路，那只能后台实现，通过google java format
  let content = `# 题目 \n${problemContent} \n# 代码 \n\`\`\`${lang} \n${code}\n\`\`\` `;
  console.log(content);
  return content;
}

function isExist() {
  return false;
}

async function save(problemId, problemContent, code, lang) {
  let content = generateBlog(problemId, problemContent, code, lang);
  if (isExist()) {
    //更新
  }
  await getCookie();
  if (noodbCookie === '') {
    console.error('登录错误');
  }
  //新增
  return gmRequest({
    method: 'POST',
    url: 'https://noodb.com/api/article/edit',
    data: JSON.stringify({
      title: 'leetcode -- ' + problemId,
      content: content
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
      Authorization: 'Bearer ' + noodbCookie
    }
  });
}

async function saveArticle(content, title) {
  if (isExist()) {
    //更新
  }
  await getCookie();
  if (noodbCookie === '') {
    console.error('登录错误');
  }
  //新增
  return gmRequest({
    method: 'POST',
    url: 'https://noodb.com/api/article/edit',
    data: JSON.stringify({
      title: title,
      content: content
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
      Authorization: 'Bearer ' + noodbCookie
    }
  });
}

async function login() {
  return gmRequest({
    url: 'https://noodb.com/api/user/login',
    method: 'POST',
    data: JSON.stringify({ username: username, password: password }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Accept: 'application/json'
    }
  }).then((resp) => {
    console.log(resp);
    if (resp.code == 0) {
      noodbCookie = window.btoa(resp.data.token);
      globeStore.setGlobleValue('token', noodbCookie);
      console.log(noodbCookie);
      console.log(globeStore.getGlobleValue('token'));
      return noodbCookie;
    }
  });
}

async function getCookie() {
  if (noodbCookie) {
    return noodbCookie;
  }
  let token = globeStore.getGlobleValue('token');
  if (token) {
    noodbCookie = token;
    return token;
  }
  //弹出密码框
  return login();
}
function isLogin() {
  console.log(noodbCookie);
  let token = globeStore.getGlobleValue('token');
  if (token) {
    noodbCookie = token;
  }
  return noodbCookie != '';
}

function setUsernameAndPassword(uname, pwd) {
  username = uname;
  password = pwd;
}

export default save;
export { saveArticle, isLogin, setUsernameAndPassword };
