// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'bootstrap-vue-3/nuxt',
    'nuxt-swiper',
  ],

  typescript: {
    shim: false,
  },

  ssr: false,

  css: ['@/assets/styles/main.scss', 'bootstrap/dist/css/bootstrap.css'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/base/colors.scss";
          @import "@/assets/styles/base/mixins.scss";`,
        },
      },
    },
  },

  tailwindcss: {
    // Options
  },

  components: [
    { path: '~/components', extensions: ['vue'] },
    { path: '~/components/layouts', extensions: ['vue'] },
    { path: '~/components/pages/Home', extensions: ['vue'] },
  ],
})
