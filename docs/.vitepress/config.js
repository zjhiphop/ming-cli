const fs = require('fs')
const path = require('path')

const selfDestroyingSWVitePlugin = {
  name: 'generate-self-destroying-service-worker',
  buildStart() {
    this.emitFile({
      type: 'asset',
      fileName: 'service-worker.js',
      source: fs.readFileSync(
        path.join(__dirname, './self-destroying-service-worker.js'),
        'utf-8'
      )
    })
  }
}

module.exports = {
  vite: {
    // to destroy the service worker used by the previous vuepress build
    plugins: [selfDestroyingSWVitePlugin]
  },

  locales: {
    '/': {
      lang: 'en-US',
      title: 'MING CLI',
      description: '🛠️ MING Development Tool'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'MING CLI',
      description: '🛠️ MING 开发工具'
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#db2e20' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#db2e20'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  themeConfig: {
    repo: 'zjhiphop/ming-cli',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,

    carbonAds: false,

    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Config Reference',
            link: '/config/'
          },
          {
            text: 'Components',
            items: [
              {
                text: 'Components',
                link: '/components/'
              }
            ]
          }
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Overview',
              link: '/guide/',
              collapsable: true
            },

            {
              text: 'Installation',
              link: '/guide/installation'
            },

            {
              text: 'Basics',
              collapsable: false,
              children: [
                {
                  text: 'Creating a Project',
                  link: '/guide/creating-a-project'
                },
                {
                  text: 'Plugins and Presets',
                  link: '/guide/plugins-and-presets'
                },
                {
                  text: 'CLI Service',
                  link: '/guide/cli-service'
                }
              ]
            },

            {
              text: 'Development',
              collapsable: false,
              children: [
                {
                  text: 'Modes and Environment Variables',
                  link: '/guide/mode-and-env'
                },
                {
                  text: 'Build Targets',
                  link: '/guide/build-targets'
                },
                {
                  text: 'Deployment',
                  link: '/guide/deployment'
                },
                {
                  text: 'Reference Sites',
                  link: '/guide/reference'
                }
              ]
            }
          ],
          links: [
            {
              text: 'Links',
              items: [
                {
                  text: 'Slack Chat',
                  link: 'https://minglabs.slack.com/archives/CP20FBCE5'
                },
                {
                  text: 'Changelog',
                  link: 'https://github.com/zjhiphop/ming-cli/package/@ming/cli/CHANGELOG.md'
                }
              ]
            }
          ]
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '上次编辑时间',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: '配置参考',
            link: '/zh/config/'
          },
          {
            text: '组件',
            link: '/zh/components/'
          }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '介绍',
              link: '/zh/guide/',
              collapsable: true
            },
            {
              text: '安装',
              link: '/zh/guide/installation'
            },
            {
              text: '基础',
              collapsable: false,
              children: [
                {
                  text: '创建一个项目',
                  link: '/zh/guide/creating-a-project'
                },
                {
                  text: 'CLI 服务',
                  link: '/zh/guide/cli-service'
                }
              ]
            },
            {
              text: '开发',
              collapsable: false,
              children: [
                {
                  text: '模式和环境变量',
                  link: '/zh/guide/mode-and-env'
                },
                {
                  text: '构建目标',
                  link: '/zh/guide/build-targets'
                },
                {
                  text: '部署',
                  link: '/zh/guide/deployment'
                },
                {
                  text: '相关网站',
                  link: '/zh/guide/browser-compatibility'
                }
              ]
            }
          ],
          '/zh/links': [
            {
              text: '链接',
              items: [
                {
                  text: 'Slack聊天',
                  link: 'https://minglabs.slack.com/archives/CP20FBCE5'
                },
                {
                  text: '历史记录',
                  link: 'https://github.com/zjhiphop/ming-cli/package/@ming/cli/CHANGELOG.md'
                }
              ]
            }
          ]
        }
      }
    }
  }
}
