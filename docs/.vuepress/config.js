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
    sidebar: [
      {
        title: "Js",
        collapsable: false,
        sidebarDepth: 1,
        children: ["/js/任务队列", "/js/继承", "/js/手写Promise", "/js/迭代器与生成器"],
      },
      {
        title: "Tools",
        collapsable: false,
        sidebarDepth: 1,
        children: ["tools/axios封装", "tools/生成changelog"],
      },
      {
        title: "其他",
        collapsable: false,
        sidebarDepth: 1,
        children: ["/ts/初识", "vue/函数调用组件"],
      },
    ],
    lastUpdated: "更新于",
  },
  markdown: {
    lineNumbers: true,
  },
  evergreen: true,
}
