module.exports = {
  title: 'Nova Ui',
  description: '这是描述',
  themeConfig: {
    lastUpdated: '最后更新的时间',
    docsDir: 'Docs',
    editLinks: true,
    editLinkText: '编辑此网站',
    repo: 'https://github/gmingchen',
    footer: {
      message: 'Released under the MIT License.',
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/'},
      { text: '组件', link: '/components/icon', activeMatch: '/components/'},
      { text: 'Github', link: 'https://github.com/gmingchen/nova-ui'},
      { text: 'Gitee', link: 'https://gitee.com/shychen/nova-ui'},
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation'},
            { text: '快速开始', link: '/guide/quieStart'},
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Icon 图标', link: '/components/icon'},
          ]
        }
      ]
    }
  }
}
