// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icons", "nuxt-aos", "@nuxt/icon"],
  css: ["@/assets/css/style.css"],
});