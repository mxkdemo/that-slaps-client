export default function () {
    this.nuxt.hook('generate:done', (context) => {
      let routesToExclude = [] // Add any route you don't want in your sitemap. Potentially get this from an .env file.
      let allRoutes = Array.from(context.generatedRoutes)
      let routes = allRoutes.filter(route => !routesToExclude.includes(route))
  
      this.nuxt.options.sitemap.routes = [...routes]
    })
  }