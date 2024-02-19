import { createApp } from "vue";
import App from "./App.vue";
import "./scss/style.scss"; //importiamo il foglio di stile
import { router } from "./router.js"; //importiamo router
createApp(App).use(router).mount("#app"); //montiamo nel div app di index.html
