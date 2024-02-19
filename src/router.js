import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue"; //importiamo le pagine
import AppAbout from "./pages/AppAbout.vue"; //importiamo le pagine
import AppProjectList from "./pages/AppProjectList.vue"; //importiamo le pagine
const router = createRouter({
  history: createWebHistory(),
  routes: [
    //array di oggetti con la path e il nome della pagina caricata
    {
      path: "/",
      name: "Home",
      component: AppHome,
    },
    {
      path: "/project",
      name: "Projects",
      component: AppProjectList,
    },
    {
      path: "/about",
      name: "About",
      component: AppAbout,
    },
  ],
});
export { router };
