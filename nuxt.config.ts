// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/image", "@nuxtjs/tailwindcss"],
  fonts: {
    defaults: {
      weights: [400, 600, 700, 800, 900],
    },
  },
})
