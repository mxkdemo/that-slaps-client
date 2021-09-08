import colors from 'vuetify/lib/util/colors'
import global from './utils/global';
import getSiteMeta from './utils/getSiteMeta';

const meta = getSiteMeta();

const api_url = process.env.NODE_ENV == "production"
  ? "https://that-slaps.herokuapp.com"
  : 'http://localhost:1337'

  const host_url = process.env.NODE_ENV == "production"
  ? "https://mxkdemo.github.io"
  : 'http://localhost:3000'

export default {
  env: {
    api_url,
  },
  router: {
    base: '/that-slaps-client/'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr:true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en-GB',
    },
    title: global.siteName + ' | ' + global.siteTag,
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: global.siteDesc || '',
      },
      { property: 'og:site_name', content: global.siteName || '' },
      {
        hid: 'description',
        name: 'description',
        content: global.siteDesc || '',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: global.siteName || '' },
      { name: 'twitter:card', content: 'summary_large_image' },
      // <link rel="icon" href="https://boutiquehandbook.com/wp-content/uploads/2021/01/BH-updated-logo-square-150x150.png" sizes="32x32"></link>
      // <link rel="icon" href="https://boutiquehandbook.com/wp-content/uploads/2021/01/BH-updated-logo-square.png" sizes="192x192"></link>
      // <link rel="apple-touch-icon" href="https://boutiquehandbook.com/wp-content/uploads/2021/01/BH-updated-logo-square.png"></link>
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/that-slaps-client/favicon.ico' },
      { rel: 'shortcut icon', href: '/that-slaps-client/favicon.ico' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: global.siteUrl,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  googleAnalytics: {
    id: 'G-FX66GCWWKD'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    "@nuxt/content",
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    '@/modules/generator',
    'nuxt-webfontloader',
    '@nuxtjs/google-analytics'
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: api_url + "/graphql",
        $query: {
          loadingKey: 'loading',
          fetchPolicy: 'cache-and-network',
        },
      }
    }
  },
    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
      customVariables: ['~/assets/css/variables.scss'],
      treeShake: true,
      defaultAssets: false,
      font: {
        family: 'Open Sans' 
      },
      icons: {
        iconfont: 'mdiSvg',
      },
      breakpoint: {
        thresholds: {
          xs: 700,
        },
      },
        theme: {
          dark:false,
          themes: {
            dark: {
              primary: colors.red.darken2,
              accent: colors.red.darken3,
              secondary: colors.red.darken3,
              background: colors.red.darken2
            },
            light: {
             primary: '#272727',
             secondary: colors.green.darken2,
             accent: colors.orange.darken2,
             error: colors.red.darken2,
            }
          }
        }
    },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  robots: {
    UserAgent: '*',
    Allow: ['/$','/category/$','/tags/$'],
    Sitemap: host_url + '/sitemap.xml'
  },
  sitemap: {
    hostname: host_url,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
}
