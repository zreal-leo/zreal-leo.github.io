export default {
  title: "One Piece",
  description: "前端博客",
  cleanUrls: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    search: {
      provider: "local"
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "其他", link: "/others/" }
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/zreal-leo/zreal-leo.github.io"
      }
    ],
    editLink: {
      pattern:
        "https://github.com/zreal-leo/zreal-leo.github.io/edit/main/docs/:path",
      text: "编辑此页"
    },
    sidebar: {
      "/": [
        {
          text: "JS",
          items: [
            { text: "任务队列", link: "/js/任务队列" },
            { text: "继承", link: "/js/继承" },
            { text: "手写Promise", link: "/js/手写Promise" },
            { text: "迭代器&生成器", link: "/js/迭代器与生成器" },
            { text: "柯里化&偏函数", link: "/js/柯里化以及偏函数" },
            { text: "Proxy&Reflect", link: "/js/ProxyReflect" }
          ]
        },
        {
          text: "Vue",
          items: [{ text: "函数式调用", link: "/vue/函数调用组件" }]
        }
      ],
      "/others/": [
        {
          text: "性能优化",
          items: [
            { text: "性能指标", link: "/others/performance/性能指标" },
            { text: "优化", link: "/others/performance/优化" }
          ]
        },
        {
          text: "工程化",
          items: [
            { text: "monoRepo", link: "/others/monoRepo" },
            { text: "changelog", link: "/others/changelog" }
          ]
        },
        {
          text: "Tools",
          items: [
            { text: "axios 封装", link: "/others/axios封装" },
            { text: "webSocket", link: "/others/websocket" }
          ]
        },
        {
          text: "其他技术",
          items: [
            { text: "Hook", link: "/others/Hook" },
            { text: "跨域", link: "/others/跨域" }
          ]
        }
      ]
    }
  }
};
