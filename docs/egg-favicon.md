---
sidebar_position: 7
---

# 默认 favicon 图标

## 修改 Egg.js 项目的默认 favicon 图标

<iframe width="100%" height="415" src="https://www.youtube.com/embed/s8FSD9WGoUw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="415" src="//player.bilibili.com/player.html?aid=242814417&bvid=BV1Te411s7rm&cid=179762385&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

文章链接：https://sphard.com/%E4%BF%AE%E6%94%B9egg-js%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%BB%98%E8%AE%A4favicon%E5%9B%BE%E6%A0%87.html

本篇教程使用的图标：https://www.iconfont.cn/search/index?searchType=icon&q=weather

最近在使用 egg.js 搭建后端项目时，发现默认 favicon 图标是 egg.js 官方的 favicon，但是我希望可以改成自己项目的 favicon。

接着就去网上搜索解决办法，发现有一点小坑。

参考地址: https://www.jianshu.com/p/a569127876e5<br />
这篇文章里没有写要引入`fs`模块，然后我就以为可以直接使用，发现报错了。

好了，我就直接讲解决办法吧！

修改项目根目录下的`config/config.default.js`

```js showLineNumbers' title="config/config.default.js"
'use strict';

const fs = require('fs');  // 这一句非常重要，如果不引入fs模块，下面你想以读取本地文件方式修改的话就会报错。

.
.
.

// 方法一：以读取网络图片的方式修改
config.siteFile = {
  '/favicon.ico': 'https://www.mi.com/favicon.ico',
};

// 方法二：以读取本地文件的方式修改
config.siteFile = {
  '/favicon.ico': fs.readFileSync('favicon.ico'),
};

.
.
.
```

注意：如果你想用方法二以读取本地文件的方式修改，那就把`favicon.ico`图标图片放在项目根目录下，如下图：
![eggjs-favicon.ico](https://i.loli.net/2020/01/31/nA7XtExrlbzKWH1.png)

<img src="https://raw.githubusercontent.com/darrenliuwei/darrenliuwei/main/online_class.png" width="420" />

<a href="https://www.vultr.com/?ref=9634529-9J">![](./images/banner_1.png)</a>
