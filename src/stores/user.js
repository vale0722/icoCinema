import { defineStore } from "pinia";

export const useHeaderStore = defineStore("user", {
  state: () => ({ isCustomer: true }),
  actions: {
    setIsAdmin() {
      this.isCustomer = false;
    },
    setIsCustomer() {
      this.isCustomer = true;
    },
  },
});
