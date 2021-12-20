module.exports = {
  title: "One Piece",
  description: "Just playing around",
  themeConfig: {
    repo: "https://github.com/zreal-leo/zreal-leo.github.io",
    editLinks: true,
    editLinkText: "编辑此页",
    docsRepo: "zreal-leo/zreal-leo.github.io",
    docsDir: "docs",
    docsBranch: "main",
    sidebarDepth: 1,
    contributors: false,
    sidebar: [
      {
        text: "JS",
        children: [
          "/js/任务队列.md",
          "/js/继承.md",
          "/js/手写Promise.md",
          "/js/迭代器与生成器.md",
          "/js/柯里化以及偏函数.md",
          "/js/ProxyReflect.md",
        ],
      },
      {
        text: "Tools",
        children: ["/tools/axios封装.md", "/tools/生成changelog.md"],
      },
      {
        text: "其他",
        children: [
          "/ts/初识.md",
          "/vue/函数调用组件.md",
          "/others/Hook.md",
          "/tools/websocket.md",
          "/others/跨域.md",
          "/others/monoRepo.md",
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
  evergreen: true,
};
