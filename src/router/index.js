import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CinemaView from "../views/CinemaView.vue";
import LoginView from "../views/LoginView.vue";
import MoviesAdminView from "../views/admin/MoviesAdminView.vue";
import AdminView from "../views/admin/AdminView.vue";
import MoviesCategories from "../views/admin/CategoriesAdminView.vue";
import MovieNewsView from "../views/movies/MovieNewsView.vue";
import MovieBillBoardView from "../views/movies/MovieBillBoardView.vue";
import MovieComingSoonView from "../views/movies/MovieComingSoonView.vue";
import MovieAllView from "../views/movies/MovieAllView.vue";
import RatesView from "../views/RatesView.vue";
import AdminDashBoard from "../views/AdminDashboard.vue";
import MovieShowView from "../views/MovieShowView.vue";
import { needMovie } from "./middleware";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/movies/show",
      name: "movies.show",
      component: MovieShowView,
      beforeEnter: [needMovie],
    },
    {
      path: "/movies",
      name: "movies",
      component: CinemaView,
      children: [
        {
          path: "",
          name: "Nuevas",
          components: {
            movies: MovieNewsView,
          },
        },
        {
          path: "billboard",
          name: "Cartelera",
          components: {
            movies: MovieBillBoardView,
          },
        },
        {
          path: "coming-soon",
          name: "Proximamente",
          components: {
            movies: MovieComingSoonView,
          },
        },
        {
          path: "all",
          name: "Todas",
          components: {
            movies: MovieAllView,
          },
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminDashBoard,
      children: [
        {
          path: "",
          name: "Admin",
          components: {
            admin: AdminView,
          },
        },
        {
          path: "movies",
          name: "Peliculas",
          components: {
            admin: MoviesAdminView,
          },
        },
        {
          path: "categories",
          name: "Categorias",
          components: {
            admin: MoviesCategories,
          },
        },
      ],
    },
    {
      path: "/rates",
      name: "rates",
      component: RatesView,
    },
  ],
});

export default router;
