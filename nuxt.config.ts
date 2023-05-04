// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "nuxt-vuefire"],
  ssr: false,

  vuefire: {
    auth: true,
    config: {
        apiKey: "AIzaSyAW4eGcQ3zV-UEojJT5Fpo7tOT68wPEKqo",
        authDomain: "genuine-park-377011.firebaseapp.com",
        projectId: "genuine-park-377011",
        storageBucket: "genuine-park-377011.appspot.com",
        messagingSenderId: "329648025974",
        appId: "1:329648025974:web:47cd795de7b2c5ba410a57",
        measurementId: "G-S49R74NZ6R"
    },
  }
});
