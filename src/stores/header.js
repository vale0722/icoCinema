import { defineStore } from "pinia";

export const useHeaderStore = defineStore("header", {
  state: () => ({ color: "white" }),
  actions: {
    setDark() {
      this.color = "gray-900";
    },
    setLight() {
      this.color = "white";
    },
  },
});
