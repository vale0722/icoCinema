import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({ isAdmin: false }),
  actions: {
    setIsAdmin() {
      this.isAdmin = true;
    },
    setIsCustomer() {
      this.isAdmin = false;
    },
  },
});
