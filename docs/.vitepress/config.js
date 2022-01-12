const fs = require('fs')
const path = require('path')

const selfDestroyingSWVitePlugin = {
  name: 'generate-self-destroying-service-worker',
  buildStart() {
    this.emitFile({
      type: 'asset',
      fileName: 'service-worker.js',
      source: fs.readFileSync(path.join(__dirname, './self-destroying-service-worker.js'), 'utf-8')
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
    repo: '@ming/ming-cli',
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
            text: 'Plugins',
            items: [
              {
                text: 'Core Plugins',
                link: '/core-plugins/'
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
                  text: 'Browser Compatibility',
                  link: '/guide/browser-compatibility'
                },
                {
                  text: 'HTML and Static Assets',
                  link: '/guide/html-and-static-assets'
                },
                {
                  text: 'Working with CSS',
                  link: '/guide/css'
                },
                {
                  text: 'Working with Webpack',
                  link: '/guide/webpack'
                },
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
                  text: 'Troubleshooting',
                  link: '/guide/troubleshooting'
                }
              ]
            }
          ],

          '/dev-guide/': [
            {
              text: 'Plugin Development Guide',
              link: '/dev-guide/plugin-dev'
            },
            {
              text: 'API reference',
              collapsable: false,
              children: [
                {
                  text: 'Plugin API',
                  link: '/dev-guide/plugin-api'
                },
                {
                  text: 'Generator API',
                  link: '/dev-guide/generator-api'
                }
              ]
            },
            {
              text: 'UI Development',
              collapsable: false,
              children: [
                {
                  text: 'UI Plugin Info',
                  link: '/dev-guide/ui-info'
                },
                {
                  text: 'UI Plugin API',
                  link: '/dev-guide/ui-api'
                },
                {
                  text: 'UI Localization',
                  link: '/dev-guide/ui-localization'
                }
              ]
            }
          ],

          '/core-plugins/': [
            {
              text: 'Core Vue CLI Plugins',
              collapsable: false,
              children: [
                {
                  text: '@vue/cli-plugin-babel',
                  link: '/core-plugins/babel'
                },
                {
                  text: '@vue/cli-plugin-typescript',
                  link: '/core-plugins/typescript'
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
            text: '插件',
            items: [
              {
                text: 'Babel',
                link: 'https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-babel/README.md'
              },
              {
                text: 'TypeScript',
                link: 'https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-typescript/README.md'
              }
            ]
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
                  text: '插件和 Preset',
                  link: '/zh/guide/plugins-and-presets'
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
                  text: '浏览器兼容性',
                  link: '/zh/guide/browser-compatibility'
                },
                {
                  text: 'HTML 和静态资源',
                  link: '/zh/guide/html-and-static-assets'
                },
                {
                  text: 'CSS 相关',
                  link: '/zh/guide/css'
                },
                {
                  text: 'webpack 相关',
                  link: '/zh/guide/webpack'
                },
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
                }
              ]
            }
          ],
        }
      }
    }
  },
}
