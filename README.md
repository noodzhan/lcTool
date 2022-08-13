# noodb.com

## 设计初衷

开发该个人博客网站，主要是为了记录工作或学习中的，一些个人笔记，便于以后出现问题可以快速定位；设计初衷就是为了类似 wiki 一样，留下一些个人学习记录。以后有时间，查询改为全文检索。

## 总体预览

![img.png](doc/REAEME_preview_home.png)

![img_1.png](doc/README_preview_edit.png)

![img_2.png](doc/README_preview_login.png)

### 技术实现

    springboot 2.4.5
    MySQL 8.0
    MybatisPlus 3.4.3
    gradle 7.1.1
    vue 2.6.11
    antd 1.7.7
    marked 2.0.7
    mavon-editor 2.9.1
    nuxt 2.14.5

### 更新日志

#### 1.0.0

【新增】博客首页，分页渲染博客列表

【新增】查看博客详情

【新增】临时推荐文档，书籍；捐赠支持功能

【新增】支持博客编辑，必须是登录后才能修改

【新增】博客目录树

【新增】发布博客

【优化】首页展示推荐书籍和文档样式

【新增】博客编辑支持上传图片

### 1.0.1 （版本计划）

1. 【优化】使用 nuxt 实现服务端渲染
2. 【优化】搜索使用 lucene
3. 【新增】引用百度统计来统计博客的访问量。
4. 【优化】使用markdown-it渲染markdown语法，markedjs渲染太丑。
5. 【新增】实现自动部署nuxtapp
6. 【新增】github添加CI
7. 【新增】优化SEO

### 项目启动

数据库脚本

使用数据库客户端，执行目录下`back-end/db/createTable.sql`文件。

前端 （front-end）

```
npm install

npm run serve
```

后台 （back-end）

开发启动

```shell
java -jar -Dspring.profiles.active=dev back-end.jar
```

### 部署

### 前端

lcTool主要是在leetcode刷题的时候，将提交的代码和题目，同步到个人播客中，记录下来。
