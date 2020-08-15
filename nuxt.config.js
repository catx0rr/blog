
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
   ** SPA loading animation
  */
  loadingIndicator: {
    name: 'cube-grid',
    color: '#1c1c1c',
    background: '#d9d9d9'
  },
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'catx0rr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'author', name: 'author', content: 'War "catx0rr" Torrente I' },
      { hid: 'description', name: 'description', content: 'catx0rr, Sysadmin by day.. Pentester wannabe at night. Personal Website, CTF and Cybersecurity Blog' },
      { hid: 'keywords', name: 'keywords', content: 'opensource, tryhackme, hackthebox, cybersecurity, hacking, infosec, security, information security, linux, writeup, ctf writeups, writeups, ctf, penetration testing, pentesting' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.14.0/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/stylesheet/custom.css'
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
    '@nuxtjs/color-mode',
    '@nuxt/content'
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
  },
  /*
   ** Development Server
  */
  server: {
    host: '0.0.0.0',
    port: '1337'
  }
}
