export default {
  title: "One Piece",
  description: "前端博客",
  cleanUrls: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
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
    sidebar: [
      {
        text: "JS",
        items: [
          {
            text: "任务队列",
            link: "/js/任务队列.md"
          },
          {
            text: "继承",
            link: "/js/继承.md"
          },
          {
            text: "手写Promise",
            link: "/js/手写Promise.md"
          },
          {
            text: "迭代器与生成器",
            link: "/js/迭代器与生成器.md"
          },
          {
            text: "柯里化以及偏函数",
            link: "/js/柯里化以及偏函数.md"
          },
          {
            text: "Proxy 和 Reflect",
            link: "/js/ProxyReflect.md"
          }
        ]
      },
      {
        text: "Tools",
        items: [
          {
            text: "axios 封装",
            link: "/tools/axios封装.md"
          },
          {
            text: "commit生成changelog",
            link: "/tools/生成changelog.md"
          }
        ]
      },
      {
        text: "其他",
        items: [
          {
            text: "ts 初识",
            link: "/ts/初识.md"
          },
          {
            text: "函数式调用组件",
            link: "/vue/函数调用组件.md"
          },
          {
            text: "Hook",
            link: "/others/Hook.md"
          },
          {
            text: "webSocket",
            link: "/tools/websocket.md"
          },
          {
            text: "跨域",
            link: "/others/跨域.md"
          },
          {
            text: "monoRepo",
            link: "/others/monoRepo.md"
          }
        ]
      }
    ]
  }
};
