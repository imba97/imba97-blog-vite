import { fileURLToPath } from 'node:url'
import MarkdownItShiki from '@shikijs/markdown-it'
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight
} from '@shikijs/transformers'
import { rendererRich, transformerTwoslash } from '@shikijs/twoslash'
import Vue from '@vitejs/plugin-vue'
import fs from 'fs-extra'
import matter from 'gray-matter'
import anchor from 'markdown-it-anchor'
import GitHubAlerts from 'markdown-it-github-alerts'
import LinkAttributes from 'markdown-it-link-attributes'
import TOC from 'markdown-it-table-of-contents'
import { addCopyButton } from 'shiki-copy-button'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Exclude from 'vite-plugin-optimize-exclude'
import { slugify } from './scripts/slugify'

const r = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [
    UnoCSS(),

    Vue({
      include: [/\.vue$/, /\.md$/]
    }),

    VueRouter({
      extensions: ['.vue', '.md'],
      routesFolder: 'pages',
      dts: r('.auto-generate/typed-router.d.ts'),
      extendRoute(route) {
        const path = route.components.get('default')
        if (!path)
          return

        if (path.endsWith('.md')) {
          const { data } = matter(fs.readFileSync(path, 'utf-8'))

          route.addToMeta({
            frontmatter: data
          })

          if (path.includes('posts') && !!data && !!data.id) {
            const path = `/posts/${data.id}`
            route.path = path
            route.name = path
          }
        }
      }
    }),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        VueRouterAutoImports
      ],
      dts: r('.auto-generate/auto-imports.d.ts')
    }),

    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: r('.auto-generate/components.d.ts')
    }),

    Markdown({
      headEnabled: true,
      exportFrontmatter: false,
      exposeFrontmatter: false,
      exposeExcerpt: false,
      markdownItOptions: {
        quotes: '""\'\''
      },
      async markdownItSetup(md) {
        md.use(await MarkdownItShiki({
          themes: {
            dark: 'vitesse-dark',
            light: 'vitesse-light'
          },
          defaultColor: false,
          cssVariablePrefix: '--s-',
          transformers: [
            transformerTwoslash({
              explicitTrigger: true,
              renderer: rendererRich()
            }),
            transformerNotationDiff(),
            transformerNotationHighlight(),
            transformerNotationWordHighlight(),
            addCopyButton()
          ]
        }))

        md.use(anchor, {
          slugify,
          permalink: anchor.permalink.linkInsideHeader({
            symbol: '#',
            renderAttrs: () => ({ 'aria-hidden': 'true' })
          })
        })

        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        })

        md.use(TOC, {
          includeLevel: [1, 2, 3, 4],
          slugify,
          containerHeaderHtml: '<div class="table-of-contents-anchor"><div class="i-ri-menu-2-fill" /></div>'
        })

        md.use(GitHubAlerts)
      },
      frontmatterPreprocess(frontmatter, options, _id, defaults) {
        const head = defaults(frontmatter, options)
        return { head, frontmatter }
      }
    }),

    Inspect(),
    Exclude()
  ],
  ...({
    ssgOptions: {
      formatting: 'minify'
    }
  }),
  resolve: {
    alias: [
      { find: '~/', replacement: `${r('src')}/` }
    ]
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      'dayjs',
      'dayjs/plugin/localizedFormat'
    ]
  },
  build: {
    rollupOptions: {
      output: {
        // 自定义入口文件名格式
        entryFileNames: 'assets/entry-[hash].js',
        // 自定义代码块文件名格式
        chunkFileNames: 'assets/chunk-[hash].js',
        // 自定义资源文件名格式
        assetFileNames: 'assets/[hash][extname]'
      }
    }
  }
})
