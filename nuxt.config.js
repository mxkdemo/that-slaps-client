import colors from 'vuetify/lib/util/colors'

const api_url = process.env.NODE_ENV == "production"
  ? "https://that-slaps-strapi.nw.r.appspot.com"
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

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - That Slaps',
    title: 'That Slaps',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    "@nuxt/content",
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    '@/modules/generator',
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
      // customVariables: ['~/assets/variables.scss'],
      // treeShake: false,
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
