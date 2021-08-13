const { VuetifyLoaderPlugin } = require('vuetify-loader')

const strapiBaseUri = process.env.PRODUCTION_API_URL  || "http://localhost:1337";

export default {
  env: {
    strapiBaseUri,
  },
  router: {
    base: '/that-slaps/'
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
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    '@/modules/generator'
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: strapiBaseUri + "/graphql",
        $query: {
          loadingKey: 'loading',
          fetchPolicy: 'cache-and-network',
        },
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

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
    responsive: {
      adapter: require("responsive-loader/sharp"),
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  robots: {
    UserAgent: '*',
    Allow: ['/$','/category/$','/tags/$'],
    Sitemap: 'http://localhost/sitemap.xml'
  },
  sitemap: {
    hostname: 'http://localhost/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
  // generate: {
  //   async routes () {
  //     const { $content } = require('@nuxt/content')
  //     const files = await $content({ deep: true }).fetch()
  //     return files.map(file => file.dir)
  //   }
  // }
}
