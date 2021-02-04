module.exports = {
  title: "一个靓仔的博客",
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
        title: "JS",
        collapsable: false,
        sidebarDepth: 1,
        children: ["/js/任务队列", "/js/继承"],
      },
      {
        title: "tools",
        collapsable: false,
        sidebarDepth: 1,
        children: ["tools/axios封装", "tools/生成changelog"],
      },
    ],
    lastUpdated: "更新于",
  },
  markdown: {
    lineNumbers: true,
  },
  evergreen: true,
}
