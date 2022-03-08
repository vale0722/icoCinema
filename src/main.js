import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faDesktop,
  faCalendar,
  faCheck,
  faChair,
  faQrcode,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

library.add(faBars, faDesktop, faCalendar, faCheck, faChair, faQrcode, faTimes);

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
