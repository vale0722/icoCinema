import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CinemaView from "../views/CinemaView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cinema",
      name: "cinema",
      component: CinemaView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/admin",
      name: "Administración",
      component: () => import("../views/AdminView.vue"),
    },
  ],
});

export default router;
