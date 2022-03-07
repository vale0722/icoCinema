import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CinemaView from "../views/CinemaView.vue";
import LoginView from "../views/LoginView.vue";
import AdminView from "../views/MoviesAdminView.vue";
import MoviesCategories from "../views/CategoriesAdminView.vue";

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
      path: "/admin/movies",
      name: "Movies",
      component: AdminView,
    },
    {
      path:"/admin/categories",
      name:"Categories",
      component: MoviesCategories,
    },
  ],
});

export default router;
