import { useMoviesStore } from "../stores/movies";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia/dist/pinia";
import { _updateAuth } from "../services/icoCinemaAssembler";

export const needMovie = async (to, from, next) => {
  const { movieActive } = useMoviesStore();
  !movieActive.id ? next({ name: "all" }) : next();
};

export const auth = async (to, from, next) => {
  const userStore = useUserStore();
  const { auth } = storeToRefs(userStore);

  if (!auth.value && localStorage.getItem("user")) {
    auth.value = JSON.parse(localStorage.getItem("user"));
  }
  if (auth.value) {
    _updateAuth(auth.value.access_token);
    next();
    return;
  }

  next({ name: "" });
};

export const guest = async (to, from, next) => {
  const userStore = useUserStore();
  const { auth } = storeToRefs(userStore);

  if (!auth.value && localStorage.getItem("user")) {
    auth.value = JSON.parse(localStorage.getItem("user"));
  }

  !auth.value ? next() : next({ name: "admin" });
};
