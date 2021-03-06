import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faTrash,
  faPen,
  faEye,
  faDesktop,
  faCalendar,
  faCheck,
  faChair,
  faQrcode,
  faTimes,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

library.add(
  faBars,
  faTrash,
  faPen,
  faEye,
  faDesktop,
  faCalendar,
  faCheck,
  faChair,
  faQrcode,
  faTimes,
  faClock
);

const app = createApp(App).use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(
  AOS.init({
    easing: "ease-out-back",
    duration: 1000,
  })
);
app.mount("#app");
