import "./styles/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import type { Router } from "vue-router";
import autoLoadRoute from "./router";

const initApp = async () => {
  const app = createApp(App);
  const router: Router = await autoLoadRoute();
  app.use(createPinia());
  app.use(router);
  app.mount("#app");
};

initApp();
