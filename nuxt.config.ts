export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    'nuxt-gtag',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts'
  ],
  runtimeConfig: {
    public: {
      discordServerId: '480472205306757129',
    }
  }
})
