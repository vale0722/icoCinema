import { useMoviesStore } from "../stores/movies";

export const needMovie = async (to, from, next) => {
  const { movieActive } = useMoviesStore();
  !movieActive.id ? next({ name: "all" }) : next();
};
