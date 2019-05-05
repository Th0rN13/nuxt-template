export default {
  env: {},
  head: {
    title: "swclick",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Swarm Clicker" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {
    extend (config, { isDev, isClient}) {
      config.module.rules.push({
        test: /\.(vue)$/,
        exclude: /(node_modules)/,
        loader: 'string-replace-loader',
        options: {
          search: '\/\/#.*$',
          flags: 'gm',
          replace: '',
        }
      });
    }
  },
  modules: [
    "@nuxtjs/axios",
  ],
  axios: {}
}
