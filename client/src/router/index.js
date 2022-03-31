import { createRouter, createWebHistory } from "vue-router";
import auth from "../views/auth.vue";

const routes = [
  {
    path: "/",
    name: "auth",
    component: auth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
