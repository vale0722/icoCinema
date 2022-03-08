import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CinemaView from "../views/CinemaView.vue";
import LoginView from "../views/LoginView.vue";
import MovieNewsView from "../views/movies/MovieNewsView.vue";
import MovieBillBoardView from "../views/movies/MovieBillBoardView.vue";
import MovieComingSoonView from "../views/movies/MovieComingSoonView.vue";
import MovieAllView from "../views/movies/MovieAllView.vue";
import RatesView from "../views/RatesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/movies",
      name: "movies",
      component: CinemaView,
      children: [
        {
          path: "",
          name: "news",
          components: {
            movies: MovieNewsView,
          },
        },
        {
          path: "billboard",
          name: "billboard",
          components: {
            movies: MovieBillBoardView,
          },
        },
        {
          path: "coming-soon",
          name: "coming-soon",
          components: {
            movies: MovieComingSoonView,
          },
        },
        {
          path: "all",
          name: "all",
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
      path: "/rates",
      name: "rates",
      component: RatesView,
    },
  ],
});

export default router;
