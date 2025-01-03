import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

import productsComponent from "./components/productsComponent.vue";
import checkOut from "./components/checkOut.vue";

library.add(faShoppingCart, faDollarSign);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/checkout",
      component: checkOut,
    },
    {
      path: "/:pathMatch(.*)*",
      component: productsComponent,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
