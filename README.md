lcTool 主要是在 leetcode 刷题的时候，将提交的代码和题目，同步到个人播客中，记录下来。

# 实现的功能

1、提交代码的时候，自动将题目和 code，组装成 markdown 博客，然后自动 push 到个人博客,效果类似于 [格雷码](https://noodb.com/blog/1557628290926342145)

2、手动同步 （在 leetcode 提交按钮旁边）
![img.png](./doc/asserts/img.png)

3、支持登录方式。

# 实现技术

使用 tampermonkey 插件，使用自己开发的脚本实现。

# 开发

1、启动开发模式

```shell
npm run serve
```

2、将 src 的 tampermonkey.js 复制到 tampermonkey 里面保存即可。
![img.png](doc/asserts/tampermonkey.png)

3、看看生效即可。
![img.png](doc/asserts/tampermonkeyActive.png)
