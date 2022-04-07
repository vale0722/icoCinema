import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import CinemaView from "../views/CinemaView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
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
import ShowsView from "../views/admin/ShowsAdminView.vue";
import RoomView from "../views/admin/RoomsAdminView.vue";
import BookingView from "../views/BookingView.vue";
import {auth, guest, needMovie} from "./middleware";

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
            beforeEnter: [guest],
            component: LoginView,
        },
        {
            path: "/register",
            name: "register",
            beforeEnter: [guest],
            component: RegisterView,
        },
        {
            path: "/admin",
            name: "admin",
            beforeEnter: [auth],
            component: AdminDashBoard,
            children: [
                {
                    path: "",
                    name: "admin",
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
                {
                    path: "shows",
                    name: "Funciones",
                    components: {
                        admin: ShowsView,
                    },
                },
                {
                    path: "rooms",
                    name: "Salas",
                    components: {
                        admin: RoomView,
                    },
                },
                {
                    path: "bookings",
                    name: "Reservas",
                    components: {
                        admin: BookingView,
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
