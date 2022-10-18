var syncConfig = [
  {
    reg: new RegExp('^https://blog.csdn.net/'),
    titleSelector: '#articleContentId',
    contentSelector: '#content_views',
    classfication: 'csdn'
  },
  {
    reg: new RegExp('^https://segmentfault.com/'),
    titleSelector: '.h2.mb-3>a',
    contentSelector: 'article',
    classfication: 'segmentfault'
  },
  {
    reg: new RegExp('^https://juejin.cn/post/'),
    titleSelector: '.article-title',
    contentSelector: 'article',
    classfication: '掘金'
  },
  {
    reg: new RegExp('^https://www.cnblogs.com/'),
    titleSelector: '.postTitle>a>span',
    contentSelector: '.postBody',
    classfication: 'cnblogs'
  },
  {
    reg: new RegExp('^https://www.jianshu.com/p/'),
    titleSelector: 'h1._1RuRku',
    contentSelector: 'article',
    classfication: '简书'
  }
];
export default syncConfig;
