---
sidebar_position: 3
---

# 环境搭建

<iframe width="100%" height="415" src="https://www.youtube.com/embed/wMtnoAbsfbo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="415" src="//player.bilibili.com/player.html?aid=967781542&bvid=BV13p4y1y7BW&cid=178725350&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 快速初始化

我们推荐直接使用脚手架，只需几条简单指令，即可快速生成项目（npm >=6.1.0）:

查看`node.js`版本:

```bash
node -v
```

查看`npm`版本:

```bash
npm -v
```

```bash showLineNumbers'
mkdir egg-example && cd egg-example
npm init egg --type=simple
npm i
```

启动项目:

```bash
npm run dev
```

目录结构:

```
egg-project
├── package.json
├── app.js (可选)
├── agent.js (可选)
├── app
|   ├── router.js
│   ├── controller
│   |   └── home.js
│   ├── service (可选)
│   |   └── user.js
│   ├── middleware (可选)
│   |   └── response_time.js
│   ├── schedule (可选)
│   |   └── my_task.js
│   ├── public (可选)
│   |   └── reset.css
│   ├── view (可选)
│   |   └── home.tpl
│   └── extend (可选)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config
|   ├── plugin.js
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
```

<img src="https://raw.githubusercontent.com/darrenliuwei/darrenliuwei/main/online_class.png" width="420" />

<a href="https://www.vultr.com/?ref=9634529-9J">![](./images/banner_1.png)</a>
