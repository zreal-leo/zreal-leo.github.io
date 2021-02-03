module.exports = {
  title: "一个靓仔的博客",
  description: "Just playing around",
  themeConfig: {
    sidebar: [
      {
        title: "JS", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/js/任务队列", "/js/继承"],
      },
      {
        title: "tools",
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["tools/axios封装", "tools/生成changelog"],
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
      },
    ],
  },
}
