import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HelloSkin用户使用文档",
  description: "HelloSkin Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '返回 HelloSkin', link: 'https://helloskin.cn/' },
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    sidebar: {
      '/': [
        {
          text: '用户使用手册',
          link: '/',
          items: [
            {
              text: '政策条款',
              link: '/policies/',
              items: [
                { text: '用户协议', link: '/policies/tos' },
                { text: '隐私声明', link: '/policies/privacy' }
              ]
            },
            {
              text: '新手指引',
              link: '/newbie/',
              items: [
                { text: '验证邮箱', link: '/newbie/verify-email' },
                { text: '设定材质', link: '/newbie/textures' },
                { text: '配置 CustomSkinLoader', link: '/newbie/csl' },
                { text: '配置 HelloSkin 插件', link: '/newbie/plugin' },
                { text: '绑定正版', link: '/newbie/premium' },
              ]
            },
            { text: 'H币系统', link: '/score' },
            {
              text: 'Yggdrasil 外置登录',
              link: '/yggdrasil/',
              items: [
                { text: '配置客户端', link: '/yggdrasil/client' },
                {
                  text: '配置服务端',
                  link: '/yggdrasil/server',
                  items: [
                    { text: 'authlib-injector', link: '/yggdrasil/authlib-injector' },
                    { text: 'MultiLogin', link: '/yggdrasil/multilogin' }
                  ]
                }
              ]
            }
          ]
        },
        {
          text: '疑难杂症',
          items: [
            { text: '遇到问题了咋办', link: '/problems' },
            {
              text: '常见问题解答',
              link: '/faq/',
              items: [
                { text: '站点使用相关', link: '/faq/site' },
                { text: '游戏内加载相关', link: '/faq/in-game' },
              ]
            },

          ]
        },
        {
          text: '沟通和交流',
          items: [
            { text: '用户交流群', link: '/user-group' },
            { text: '邮件工单', link: '/email' }
          ]
        },
        {
          text: '高级功能',
          link: '/advanced/',
          items: [
            { text: 'HelloSkin API', link: '/advanced/api' },
            { text: 'Beta版', link: '/advanced/beta' },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MoeLuoYu/HelloSkin_Docs' }
    ]
  }
})
