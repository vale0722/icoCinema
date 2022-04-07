import { defineStore } from "pinia";
import { userService } from "../services/userService";
import router from "../router";

export const useUserStore = defineStore("user", {
  state: () => ({
    isAdmin: false,
    auth: null,
  }),
  actions: {
    getUser() {
      if(!this.auth && localStorage.getItem('user')) {
        this.auth = JSON.parse(localStorage.getItem('user'));
      }
      return this.auth;
    },
    setIsAdmin() {
      this.isAdmin = true;
    },
    setIsCustomer() {
      this.isAdmin = false;
    },
    loginUser(request) {
      userService
        .login(request)
        .then((user) => {
          localStorage.setItem("user", JSON.stringify(user));
          this.auth = user;
          router.push({name: 'admin'});
          return user;
        })
        .catch((e) => {
          if (e.status === 401) {
            this.logout();
            location.reload(true);
          }

          const error = (e && e.message) || e.statusText;
          return Promise.reject(error);
        });
    },
    registerUser(request, headers) {
      userService
        .register(request, headers)
        .then((user) => {
          localStorage.setItem("user", JSON.stringify(user));
          this.auth = user;
          router.push({name: 'admin'});
          return user;
        })
        .catch((e) => {
          if (e.status === 401) {
            this.logout();
            // eslint-disable-next-line no-restricted-globals
            location.reload(true);
          }

          const error = (e && e.message) || e.statusText;
          return Promise.reject(error);
        });
    },
    logoutUser() {
      userService
        .logout()
        .then((user) => {
          localStorage.removeItem("user");
          this.auth = null;
          router.push({name: 'home'});
          return user;
        })
        .catch((e) => {
          const error = (e && e.message) || e.statusText;
          return Promise.reject(error);
        });
    },
  },
});
