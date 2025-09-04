---
sidebar_position: 4
---

# 路由和控制器

<iframe width="100%" height="415" src="https://www.youtube.com/embed/ct1fG6GoH64" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="415" src="//player.bilibili.com/player.html?aid=925274119&bvid=BV1DT4y1G7c5&cid=178836031&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

有时候会出现`csrf`报错，我们可以先暂时关闭一下`csrf`，修改`config/config.default.js`文件

```js showLineNumbers' title="config/config.default.js"
// 关闭CSRF
config.security = {
  csrf: {
    enable: false,
  },
};
```

<a href="https://www.vultr.com/?ref=9634529-9J">![](./images/banner_1.png)</a>
