import { useMoviesStore } from "../stores/movies";

export const needMovie = async (to, from, next) => {
  const { movieActive } = useMoviesStore();
  !movieActive ? next({ name: "all" }) : next();
};
