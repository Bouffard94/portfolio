import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Photos from "../components/Photos.vue";
import About from "../components/About.vue";
import Dashboard from "../components/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/photos",
    name: "Photos",
    component: Photos,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
