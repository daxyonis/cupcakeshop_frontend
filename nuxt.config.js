
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',

  env: {    
    apiUrl: 'http://localhost:1337'
  },

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Cupcake Factory',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [      
      { rel: 'preconnect', href: "https://app.snipcart.com" },
      { rel: 'preconnect', href: "https://cdn.snipcart.com" },
      { rel: 'stylesheet', href: "https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css" },

      {rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"},
      {rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"},
      {rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"},
      {rel:"manifest", href:"/site.webmanifest"}
    ],
    script: [
      { src: 'https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js'} 
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/theme_1599443006634.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
